import React, { useState, useEffect } from "react";

import * as _ from 'lodash';
import { ProgressBar } from 'react-bootstrap';
import { Fragment } from "react";
import { color } from "highcharts";

const arrData = [
    { label: 'Tài chính', value: 12, color: '#33D49D' },
    { label: 'Bất động sản', value: 10.5, color: 'rgba(71, 216, 167, 0.9)' },
    { label: 'Công nghiệp', value: 9.7, color: 'rgba(92, 221, 177, 0.8)' },
    { label: 'Năng lượng', value: 8.89, color: 'rgba(112, 225, 186, 0.7)' },
    { label: 'Tiện ích', value: 7.5, color: 'rgba(133, 229, 196, 0.6)' },
    { label: 'H.hoá thiết yếu', value: 6, color: 'rgba(153, 233, 206, 0.5)' },
    { label: 'Thực phẩm', value: 5, color: 'rgba(173, 238, 216, 0.4)' },
    { label: 'Chăm sóc SK', value: 4.29, color: 'rgba(194, 242, 226, 0.3)' },
    { label: 'Nguyên vật liệu', value: -3, color: 'rgba(240, 61, 61, 0.3)' },
    { label: 'Công nghệ', value: -7.8, color: 'rgba(240, 61, 61, 0.4)' },
    { label: 'GTVT', value: -8.5, color: 'rgba(240, 61, 61, 0.5)' },
];


function ChartTrend(props) {
    const [dataShow, setDataShow] = useState([]);

    useEffect(() => {
        const newData = seriesData();
        setDataShow(newData);
    }, []);

    function seriesData() {
        const max = Math.abs(
            _.maxBy(arrData, (o) => Math.abs(o.value))?.value || 1
        );

        return arrData.map((item, index) => {
            return {
                ...item,
                per: ((Math.abs(item.value) * 100) / max).toFixed(2),
            };
        });
    }
    return (
        <div >
            {
                dataShow &&
                dataShow.map((item, index) => {
                    return (
                        <Fragment key={index} >
                            <div className="d-flex justify-content-between mb-2">
                                <span
                                    style={{
                                        color: '#8DA5A1',
                                        width: '200px',
                                        padding: '8px'
                                    }}
                                >
                                    {item.label}
                                </span>
                                <ProgressBar
                                    now={item.per}
                                    label={`${item.value > 0 ? '+' : ''}${item.value}%`}
                                    style={{
                                        backgroundColor: '#12211e',
                                        width: '100%',
                                        height: '40px',
                                        borderRadius: '0'
                                    }}
                                    className={"progress-type-" + (index + 1)}
                                />
                            </div>
                        </Fragment>
                    );
                })
            }
        </div>
    );
}
export default ChartTrend;