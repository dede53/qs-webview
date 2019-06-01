import {Injectable} from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

function afterSetExtremes(e){
    console.log(e);
}

@Injectable()
export class GlobalObjectsService {
    user = {
        active: [],
        alerts: {},
        chatMessages: [],
        countdowns: {},
        devicelist: [],
        devices:{},
        favoritDevices: [],
        groups:{},
        id:"",
        moreMessagesAvailable: true,
        name:"",
        timers: {},
        users: [],
        variables: {},
        favoritVariables:{},
        hideChart: true,
        chartOptions: {
            chart: {
                backgroundColor: '#ffffff',
                zoomType: "x",
                resetZoomButton: {
                    theme: {
                        display: "none"
                    }
                }
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    },
                    states: {
                        hover: {
                            enabled: true,
                            lineWidthPlus: 1.5
                        },
                        inactive: {
                            opacity: 1
                        }
                    }
                }
            },
            xAxis: [{
                type: 'datetime',
                // lineColor:'#4d4d4d',
                // tickColor:'#4d4d4d',
                // minorGridLineWidth: 0,
                // minorTickInterval: 3600 * 1000, // Hourly
                // minorTickInterval: 'auto', // Hourly
                // minorTickColor: '#4d4d4d',
                // minorTickWidth: 1,
                // minorTickLength: 7,
                labels: {
                    rotation: 0,
                    style: {
                        "color": '#4d4d4d',
                        "fontSize": "16px"
                    }
                },
                events: {
                    afterSetExtremes: function (e) {
                        console.log(Math.round(e.min));
                        console.log(Math.round(e.max));
                    }
                },
                dateTimeLabelFormats: {
                    second: '%d.%m<br/>%H:%M:%S',
                    minute: '%d.%m<br/>%H:%M',
                    hour: '%d.%m<br/>%H:%M',
                    day: '%d.%m<br/>%H:%M',
                    week: '%d.%m.%Y',
                    month: '%m.%Y',
                    year: '%Y'
                }
            }],
            series: [],
            yAxis: [{
                allowDecimals: true,
                opposite: true,
                gridLineColor: '#bfbfbf',
                lineColor: '#4d4d4d',
                title: {
                    text: 'Temperatur',
                    style: {
                        "color": '#4d4d4d',
                        "fontSize": "16px"
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        "color": '#4d4d4d',
                        "fontSize": "16px"
                    }
                }
            }],
            tooltip:{
                dateTimeLabelFormats:{
                    second: '%A, %e %b, %H:%M:%S'
                }
            },
            legend: {
                enabled: true,
                itemStyle: {
                    "fontSize": "16px"
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            }
        },
        chart: void{},
        updateFlag: true
    };
    activeUser = {
        name:"",
        groups:{},
        id:"",
        chartHour:24,
        varChart:[],
        variables:[],
        background: ""
    };
    loading: boolean = true;
    constructor() {}
}