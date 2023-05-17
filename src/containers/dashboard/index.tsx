import React, { useEffect } from "react";
import * as echarts from 'echarts';
import './style.less'
import { fetDashboard } from '../../request/api';

export default function Dashboard() {
    const initChart = (arr: Array<object>) => {
        var chartDom = document.getElementById('chart1') as HTMLElement;
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '自习室人流量分布',
                subtext: '',
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
        let arr: Array<object> = [];
        fetDashboard().then(res => {
            const data = res.data;
            arr = data.map((item: { description: string, seats: Array<any> }) => {
                const value = item.seats.reduce((count, seat) => {
                    if (seat.status === 1) {
                        return count + 1;
                    }
                    return count;
                }, 0);
                return { value: value + 1, name: item.description }
            });
            initChart(arr);
        })

    }, [])
    return (
        <div id='chart1'></div>
    )
}
