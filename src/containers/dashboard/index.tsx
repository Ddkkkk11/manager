import React, { useEffect } from "react";
import * as echarts from 'echarts';
import './style.less'

export default function Dashboard() {
    const arr = [
        { value: 200, name: '周一' },
        { value: 300, name: '周二' },
        { value: 600, name: '周三' },
        { value: 800, name: '周四' },
        { value: 200, name: '周五' },
        { value: 150, name: '周六' },
        { value: 120, name: '周天' },
    ];
    const initChart = (arr: Array<object>) => {
        var chartDom = document.getElementById('chart1') as HTMLElement;
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '自习室人流量分布',
                subtext: '嘿嘿',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: '当前人数',
                    type: 'pie',
                    radius: '50%',
                    data: arr,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        option && myChart.setOption(option);

    }

    useEffect(() => {
        initChart(arr)
    }, [])
    return (
        <div id='chart1'></div>
    )
}
