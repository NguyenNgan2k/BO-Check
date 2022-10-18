import React, { useState, useEffect } from "react";
import ReactECharts from 'echarts-for-react';

function ChartLineStock(props) {
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
                // markLine: {
                //     data: [100],
                //     lineStyle: {
                //         color: '#43605B'
                //     },
                // },
                lineStyle: {
                    color: '#FFA23A ',
                    width: 1,
                },
                type: 'line',
                showSymbol: false,
                data: [120, 200, 150, 80, 70, 110, 130]
            }
        ]
    }

    return (
        <ReactECharts
            option={DEFAULT_OPTION}
            style={{
                width: '100%',
                height: '20px'
            }}
        />
    );
}
export default ChartLineStock;