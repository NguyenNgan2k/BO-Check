import React, { useState, useEffect } from "react";
import ReactECharts from 'echarts-for-react';
import * as _ from 'lodash';

const infoUrl = `${process.env.REACT_APP_INFO_URL}`;

function ChartLineStock(props) {
    const { record } = props;
    const abortController = new AbortController();

    const DEFAULT_OPTION = {
        grid: { top: 0, right: 0, bottom: 0, left: 0 },
        xAxis: {
            type: 'category',
            data: [],
            show: false
        },

        yAxis: {
            type: 'value',
            show: false,
        },
        series: [
            {
                markLine: {
                    data: [{ yAxis: 100 }],
                    lineStyle: {
                        color: '#43605B',
                        type: 'dashed',
                    },
                    symbol: 'none',
                    label: {
                        show: false,
                    },
                },
                itemStyle: {
                    color: '#33D49D',
                },
                lineStyle: {
                    width: 1,
                },
                type: 'line',
                showSymbol: false,
                data: []
            }
        ]
    };
    const [option, setOption] = useState(DEFAULT_OPTION);

    useEffect(() => {
        _handleLoadDataStock();
        return () => {
            abortController.abort();
        };
    }, [])

    function _handleLoadDataStock() {
        fetch(infoUrl + '/listLsStockTrade?sc=' + record.STOCK_CODE,
            {
                signal: abortController.signal,
            }
        )
            .then((response) => response.json())
            .then((res) => {
                _mapDataToState(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function _mapDataToState(dt) {
        const stockRef = record.PRICE - record.CHANGE;
        const newOption = _.cloneDeep(option);

        const yAxis = _.map(dt, 'LAST_PRICE');
        const xAxis = _.map(dt, 'UPDATED_TIME');

        const _min = _.min(yAxis);
        const _max = _.max(yAxis);

        newOption.xAxis.data = xAxis;
        newOption.yAxis.min = (_min > stockRef ? stockRef : _min) - 0.01;
        newOption.yAxis.max = (_max < stockRef ? stockRef : _max) + 0.01;

        newOption.series[0].data = yAxis;
        newOption.series[0].markLine.data[0].yAxis = stockRef;
        if (record.COLOR === 'green') {
            // up
            newOption.series[0].itemStyle.color = '#33D49D';
        } else if (record.COLOR === 'red') {
            // down
            newOption.series[0].itemStyle.color = '#FE5050';
        } else {
            newOption.series[0].itemStyle.color = '#FFA23A ';
        }
        setOption(newOption);
    }

    return (
        <ReactECharts
            option={option}
            style={{
                width: '100%',
                height: '20px'
            }}
        />
    );
}
export default ChartLineStock;