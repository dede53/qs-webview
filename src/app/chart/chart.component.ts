import { Component, OnInit }                from '@angular/core';
import { GlobalObjectsService } from "../app.service.global";
import { SocketService } from "../app.service";
import * as Highcharts from 'highcharts/highstock';

import Exporting from 'highcharts/modules/exporting';
// needed for a workaround: https://github.com/highcharts/highcharts/issues/10463 4.4.2019
// import HighchartsMoreModule from 'highcharts/highcharts-more';
// import NetworkgraphModule from 'highcharts/modules/networkgraph';
// import OrganizationModule from 'highcharts/modules/organization';
import { ChartService } from './chart.service';
Exporting(Highcharts);
Highcharts.setOptions({
    time: {
        timezone: 'Europe/Berlin',
        useUTC: false
    },
    lang: {
        loading: 'Lade die Daten...',
        weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        shortMonths: ["Jan", "Feb", "März", "April", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
    }
});

@Component({
  selector: 'app-chart',
    styleUrls: ['./chart.component.css'],
    templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit{

    constructor(public globalVar: GlobalObjectsService, private socket: SocketService, public chartService: ChartService) {}
    // highcharts new april 2019
    Highcharts: typeof Highcharts = Highcharts;

    hours:number = 192;
    saveInstance(chart: Highcharts.Chart) {
        this.globalVar.user.chart = chart;
        if(this.globalVar.user.chartOptions.series.length == 0){
            this.globalVar.user.chart.showLoading();
        }
    }
    ngOnInit(){}
}