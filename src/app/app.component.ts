import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from './app.service';
import { GlobalObjectsService } from "./app.service.global";

import { TimerEditComponent } from "./timer-edit/timer-edit.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GlobalObjectsService]
})

export class AppComponent {
    joinedRoom: String = "";

    constructor(private socket: SocketService, public globalVar: GlobalObjectsService) { }
    private setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    private getCookie(cname: string) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    updateUser(){
        if (this.globalVar.activeUser.id != this.users[this.selectedUser].id) {
            this.setUser(this.users[this.selectedUser]);
        }
    }
    setUser(user) {            
            console.log(user);
            if (this.joinedRoom != "") {
                this.globalVar.user.chartOptions.series = [];
                this.globalVar.user.alerts = {};
                console.log("leave:" + this.globalVar.activeUser.name);
                this.socket.emit('room:leave', this.globalVar.activeUser);
            }
            this.globalVar.activeUser = user;
            console.log(this.globalVar.activeUser.background);
            if(this.globalVar.activeUser.background == ""){
                this.globalVar.activeUser.background = "./assets/img/hintergrund_holz_dunkel.jpg";
            }
            
            this.setCookie("qs-user", JSON.stringify(user), 365);
            console.log("join:" + user.name);
            
            this.globalVar.user.hideChart = true;
            
            this.joinedRoom = user.name;
            this.socket.emit('room:join', user);
            this.socket.emit('variables:chart', { user: user.id, hours: user.chartHour });
    }

    // loaded = [];
    selectedUser: number = 0;
    connection;
    messages = [];
    users;
    devicelist;
    showFav: boolean = true;
    moreMessagesAvailable = true;

    toogleFav(status) {
        console.log(status);
        this.showFav = !status;
        let that = this;

        setTimeout(function () {
            that.globalVar.user.chart.reflow();
        }, 100);
    }

    ngOnInit() {
        this.socket.emit('users:get', "");
        this.socket.on('users', data => {
            this.users = data[data.type];

            try{
                var cookie = JSON.parse(this.getCookie('qs-user'));
                this.globalVar.activeUser = cookie;
                this.setUser(cookie);
            }catch(e){

            }

            this.users.forEach((user, i) => {
                if(user.name == this.globalVar.activeUser.name){
                    this.selectedUser = i;
                }
            });
        });
        this.socket.on('all', data => {
            console.log(data);
            switch (data.type) {
                case "get":
                    this.globalVar.user[data.masterType] = data.get;
                    break;
                case "add":
                    console.log(this.globalVar.user[data.masterType]);
                    if (Array.isArray(this.globalVar.user[data.masterType])) {
                        this.globalVar.user[data.masterType].push(data.add);
                    } else {
                        this.globalVar.user[data.masterType][data.add.id] = data.add;
                    }
                    break;
                case "remove":
                    delete this.globalVar.user[data.masterType][data.remove];
                    break;
                case "edit":
                    this.globalVar.user[data.masterType][data.edit.id] = data.edit;
                    break;
                case "switch":
                    if (Object.keys(this.globalVar.user[data.masterType]).length > 0) {
                        this.globalVar.user[data.masterType][data.switch.device.Raum].roomdevices[data.switch.device.deviceid].status = data.switch.status;
                    }
                    for (var i = 0; i < this.globalVar.user.favoritDevices.length; i++) {
                        if (this.globalVar.user.favoritDevices[i].deviceid == data.switch.device.deviceid) {
                            this.globalVar.user.favoritDevices[i].status = parseFloat(data.switch.status);
                        }
                    }
                    break;
                case "unshift":
                    this.globalVar.user[data.masterType].unshift(data.unshift);
                    break;
                case "push":
                    this.globalVar.user[data.masterType].push(data.push);
                    break;
                default:
                    console.log(data.masterType);
                    console.log(data.type);
                    break;
            }
            // this.loaded.push(data.masterType);
            // if(data.masterType === "favoritDevices"){
            // this.loading = false;
            // }
        });
        this.socket.disconnect(data => {
            console.log("Verbindung zum Server verloren");
            this.globalVar.loading = true;
        });
        this.socket.connect(data => {
            this.globalVar.loading = false;
            console.log(this.globalVar.activeUser);
            if (this.globalVar.activeUser.name != "") {
                this.socket.emit('room:join', this.globalVar.activeUser);
            }
            console.log("Verbindung zum Server hergestellt");
            this.globalVar.loading = false;
        })
        
        this.socket.on("varChart", data => {
            if (data.get.length > 0) {
                this.globalVar.user.chartOptions.series = data.get;
                this.globalVar.user.updateFlag = true;
                if (this.globalVar.user.chart) {
                    this.globalVar.user.chart.hideLoading();
                }
            }
        });

        this.socket.emit("messages:loadOld", new Date().getTime());
        /*     this.socket.on('chatMessages', data => {
            this.messages.splice(0, 0, data[data.type]);
        }) */
        this.socket.on('moreMessagesAvailable', data => {
            this.moreMessagesAvailable = data;
        });
    }
    ngOnDestroy() {
        this.connection.unsubscribe();
    }
    /*onKey(event: Event){
        console.log(event);
    }*/
}