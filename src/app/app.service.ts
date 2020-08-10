import { Subject } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';
import { Injectable } from "@angular/core"; 

export class ServerResponse {
  masterType: string;
  type: string;
}

@Injectable()
export class SocketService {
    private url = "http://" + window.location.hostname + ":3333";
    // private url = 'http://192.168.2.47:3333';
    private socket = io(this.url);
    emit(type: string, message: any){
        console.log(window);
        this.socket.emit(type, message);
    }
    private observable = new Observable(observer => {
        this.socket.on('change', (data:ServerResponse) => {
            observer.next(data);
        });
        return () => {
            this.socket.disconnect();
        };
    })
    on(type: string, callback){
        this.observable.subscribe((data:ServerResponse) => {
            if(type === "all" || type === data.masterType){
                callback(data);
            }
        });
    }
    disconnect(callback){
        this.socket.on('disconnect', data => {
            callback(data);
        });
    }
    connect(callback){
        this.socket.on('connect', data=> {
            callback(data);
        });
    }
}