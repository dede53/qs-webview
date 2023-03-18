import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { EventEmitter } from 'events';
import { Observable, Subject } from 'rxjs';
import { SocketService } from "./app.service";

@Injectable()
export class GlobalObjectsService {
    constructor( private socket: SocketService){}
    user = {
        active: [],
        alerts: {},
        chatMessages: [],
        chatMessagesEvent: new Subject(),
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
                inputEnabled: false, // it supports only days
                selected: 4 // all
            },
            exporting: {
                enabled: true
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
                plotlines: [],
                minorGridLineColor: '#9d9d9d',
                minorTickWidth: 1,
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