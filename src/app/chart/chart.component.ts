import { Component, OnInit }                from '@angular/core';
import { GlobalObjectsService } from "../app.service.global";
import { SocketService } from "../app.service";
import * as Highcharts from 'highcharts';
// needed for a workaround: https://github.com/highcharts/highcharts/issues/10463 4.4.2019
import HighchartsMoreModule from 'highcharts/highcharts-more';
import NetworkgraphModule from 'highcharts/modules/networkgraph';
import OrganizationModule from 'highcharts/modules/organization';

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

    constructor(public globalVar: GlobalObjectsService, private socket: SocketService) {}
    // highcharts new april 2019
    Highcharts: typeof Highcharts = Highcharts;

    hours:number = 192;
    saveInstance(chart: Highcharts.Chart) {
        this.globalVar.user.chart = chart;
        if(this.globalVar.user.chartOptions.series.length == 0){
            this.globalVar.user.chart.showLoading();
        }
    }
    getTempHistory(hours){
        this.globalVar.user.chart.zoomOut();
		    this.globalVar.activeUser.chartHour = hours;
        this.socket.emit('variables:chart', {user: this.globalVar.activeUser.id, hours: hours});
        if(this.globalVar.user.chart != undefined){
            this.globalVar.user.chart.showLoading();
        }
    }
    ngOnInit(){}
}