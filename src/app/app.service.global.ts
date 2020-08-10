import {Injectable} from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { SocketService } from "./app.service";

@Injectable()
export class GlobalObjectsService {
    constructor( private socket: SocketService){}
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
    
            scrollbar: {
                liveRedraw: false
            },
            rangeSelector: {
                buttons: [{
                    type: 'hour',
                    count: 1,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                inputEnabled: false, // it supports only days
                selected: 4 // all
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
                events: {},
                dateTimeLabelFormats: {
                    second: '%d.%m<br/>%H:%M:%S',
                    minute: '%d.%m<br/>%H:%M',
                    hour: '%d.%m<br/>%H:%M',
                    day: '%d.%m<br/>%H:%M',
                    week: '%d.%m.%Y',
                    month: '%m.%Y',
                    year: '%Y'
                },
                minRange: 3600 * 1000 // one hour
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
        updateFlag: true,
        chartDataMode: false 
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
}