import React, { memo, useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

import { isSafari } from 'react-device-detect'

import * as _ from 'lodash';
import { log } from '../../../../utils';

const indexUrl = `${process.env.REACT_APP_PRICE_URL}`;

function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes

    return ref.current;
}

function ChartIndex(props) {
    const abortController = new AbortController()

    const DEFAULT_OPTION = {
        grid: { top: 8, right: 8, bottom: 10, left: 8 },
        xAxis: {
            type: 'category',
            data: [],
            show: false,
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        series: [
            {
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'lttb',
                itemStyle: {
                    color: '#3DB055',
                },
                lineStyle: {
                    width: 1,
                },
                data: [],
            },
        ],
        tooltip: false,
    };

    const [option, setOption] = useState(DEFAULT_OPTION);

    const { idata } = props;

    const preIdata = usePrevious(idata);

    useEffect(() => {
        if (idata && !_.isEqual(idata, preIdata)) {
            const newOption = _.cloneDeep(option);
            // check đã được khởi tạo dữ liệu hay chưa
            if (!newOption.xAxis?.data) return;

            // push series
            const data0 = newOption.series[0].data;
            data0.push(idata.cIndex);

            // push time
            newOption.xAxis.data.push(idata.time);

            const _min = _.min(data0);
            const _max = _.max(data0);

            newOption.yAxis.min = _min;
            newOption.yAxis.max = _max;
            newOption.series[0].data = data0;

            if (idata?.cl === 'i') {
                // up
                newOption.series[0].itemStyle.color = '#3DB055';
            } else if (idata?.cl === 'd') {
                // down
                newOption.series[0].itemStyle.color = '#fd1515';
            } else {
                newOption.series[0].itemStyle.color = '#F0B90B';
            }
            setOption(newOption);
        }
    }, [idata]);

    useEffect(() => {
        _handleLoadDataStock();
        const timer = setInterval(() => {
            fetchNewData();
        }, 5 * 60 * 1000);
        console.log(timer)
        return () => {
            clearInterval(timer);
            abortController.abort()
        }
    }, []);

    function fetchNewData() {
        let hour = new Date().getHours();
        if (hour < 8 || hour >= 15) return;
        _handleLoadDataStock();
    }

    function _handleLoadDataStock() {
        fetch(indexUrl + '/getchartindexdata/' + idata.mc, {
            signal: abortController.signal,
        })
            .then((response) => response.json())
            .then((res) => {
                _mapDataToState(res.data);
            })
            .catch((error) => {
                log(error);
            });
    }

    function _mapDataToState(dt) {
        const newOption = _.cloneDeep(option);
        const _dt = [...dt]
        const _rm = _.remove(_dt, o => !o.cIndex || o.vol == 0);

        const yAxis = _.map(_dt, 'cIndex');
        const xAxis = _.map(_dt, 'time');

        const _min = _.min(yAxis);
        const _max = _.max(yAxis);

        newOption.xAxis.data = xAxis;
        newOption.yAxis.min = _min;
        newOption.yAxis.max = _max;
        newOption.series[0].data = yAxis;

        if (idata?.cl === 'i') {
            // up
            newOption.series[0].itemStyle.color = '#33D49D';
        } else if (idata?.cl === 'd') {
            // down
            newOption.series[0].itemStyle.color = '#FE5050';
        } else {
            newOption.series[0].itemStyle.color = '#F0B90B';
        }

        setOption(newOption);
    }

    return (
        <ReactECharts
            option={option}
            style={{
                height: '45px',
                width: '130px'
            }}
        />
    );
}

export default memo(ChartIndex);
