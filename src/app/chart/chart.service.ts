import { Injectable } from "@angular/core";
import { SocketService } from "app/app.service";
import { GlobalObjectsService } from "app/app.service.global";

@Injectable()
export class ChartService {
    constructor(public globalVar: GlobalObjectsService, private socket: SocketService){}

    loadData(hours: number){
		this.globalVar.activeUser.chartHour = hours;
        this.socket.emit('variables:chart', {user: this.globalVar.activeUser.id, hours: hours});
        if(this.globalVar.user.chart != undefined){
            this.globalVar.user.chart.zoomOut();
            this.globalVar.user.chart.showLoading();
        }
    }
}