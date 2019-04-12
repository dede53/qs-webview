import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SocketService }            from '../app.service';
import { GlobalObjectsService }     from "../app.service.global";

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
  constructor(private socket: SocketService, public globalVar: GlobalObjectsService, private formBuilder: FormBuilder) { }

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
    }

    open(message){
        console.log(message);
        if(this.showFullscreen[message.id] == undefined){
            this.globalVar.loading = true;
            this.showFullscreen[message.id] = true;
        }else{
            this.globalVar.loading = false;
            this.showFullscreen[message.id] = undefined;
        }
        /*
        
            padding-right: 10px;
            position: fixed;
            top: 0px;
            z-index: 10000;
            left: auto;
            height: auto;
        
        */
        
    }

    loadOldMessages(){
        this.socket.emit('messages:loadOld', this.globalVar.user.chatMessages[this.globalVar.user.chatMessages.length - 1 ].time);
    }
    ngOnInit() {
        this.newMessage = this.formBuilder.group({
            message: "",
            type: 1
        });
    }
}

/*
@Pipe({name:'chatText', pure: false})
export class chatText implements PipeTransform{
    transform(value: any, args: any[] = null): any {
        var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
            '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
            '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
            '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
            '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
            '(\#[-a-z\d_]*)?$','i'); // fragment locater
        if(!pattern.test(value)) {
            return false;
        } else {
            return true;
        }
    }
}
*/