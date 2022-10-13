import React, { useEffect, useState } from "react";
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

import * as _ from 'lodash';

function ChartCoDong(props) {

    const DEFAULT_OPTION = {
        color: ['#2D8F6F', '#27AD8E', '#31DB9F', '#33D49D', '#35D4D6'],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            left: 'left',
            orient: 'vertical',
            itemWidth: 6,
            itemHeight: 6,
            itemStyle: {
                borderWidth: '0',
            },
            textStyle: {
                color: '#ECECEC',
                fontFamily: 'SF-PRO',
            },
        },
        series: [
            {
                width: 200,
                right: 'right',
                type: 'pie',
                radius: ['40%', '70%'],

                //avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#092720',
                    borderWidth: 0.5
                },
                label: {
                    show: true,
                    position: 'inside',
                    fontSize: 10,
                    textBorderWidth: 0,
                    color: '#ECECEC',
                    alignTo: 'edge',
                    formatter: '{c} %',
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: []
            }
        ]
    };

    const [option, setOption] = useState(DEFAULT_OPTION);
    const { ownership } = props;

    useEffect(() => {
        if (ownership)
            _mapDataToState();
    }, [ownership]);

    function _mapDataToState() {

        const newOption = _.cloneDeep(option);

        let _newData = [],
            _total = 0;
        ownership.forEach((element) => {
            _newData.push({
                name: element.name,
                value: element.value
            });
            _total += element.value;
        });
        if (_total < 100) {
            _newData.push({
                name: 'Khác',
                value: (100 - _total).toFixed(2),
            });
        }

        newOption.series[0].data = _newData;
        setOption(newOption);
    }

    return (
        <ReactECharts
            className="h-100"
            option={option}
        />
    );
}

export default ChartCoDong;