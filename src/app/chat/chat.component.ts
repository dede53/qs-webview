import { Component, Pipe, PipeTransform, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SocketService }            from '../app.service';
import { GlobalObjectsService }     from "../app.service.global";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    /*  message = {
        time:"",
        content:"",
        author:"",
        message:"",
        name:"",
    };*/
    newMessage: FormGroup;
    showFullscreen = {};
    constructor(private socket: SocketService, public globalVar: GlobalObjectsService, private formBuilder: FormBuilder, private viewportScroller: ViewportScroller) {
        this.globalVar.user.chatMessagesEvent.subscribe((data) => {
            if(data == "push"){
                setTimeout(() => {
                    this.scroll();
                }, 70);
            }
        });
    }
    @ViewChild("bottom") bottom: ElementRef;


    save(){
        if(this.newMessage.value.message == ""){
            return;
        }
        this.socket.emit("messages:add", {
            user: {name: this.globalVar.activeUser.name},
            add: this.newMessage.value
        });
        this.newMessage = this.formBuilder.group({
            message: "",
            type: 1
        });
        this.scroll();
    }

    open(message){
        if(this.showFullscreen[message.id] == undefined){
            this.globalVar.loading = true;
            this.showFullscreen[message.id] = true;
        }else{
            this.globalVar.loading = false;
            this.showFullscreen[message.id] = undefined;
        }
    }

    scroll(){
        this.bottom.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    loadOldMessages(){
        this.socket.emit('messages:loadOld', this.globalVar.user.chatMessages[0].time);
    }
    ngOnInit() {
        this.newMessage = this.formBuilder.group({
            message: "",
            type: 1
        });
    }
}