import { Component, OnInit }                from '@angular/core';
import { GlobalObjectsService } from "../app.service.global";
import { SocketService } from "../app.service";
// import { ChartModule }              from 'angular2-highcharts';
import * as Highcharts from 'highcharts';
// needed for a workaround: https://github.com/highcharts/highcharts/issues/10463 4.4.2019
import HighchartsMoreModule from 'highcharts/highcharts-more';
import NetworkgraphModule from 'highcharts/modules/networkgraph';
import OrganizationModule from 'highcharts/modules/organization';

Highcharts.setOptions({
    title: {
      style: {
        color: 'tomato'
      }
    },
    legend: {
      enabled: false
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
        console.log(chart);
        this.globalVar.user.chart = chart;
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