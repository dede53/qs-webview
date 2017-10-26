webpackJsonp([0],{

/***/ "../../../../../src/app/timer-edit/templates/action-alert.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-100 card-{{action.action.type}}\">\n    <div class=\"card-header d-flex justify-content-end\">\n            <input [(ngModel)]=\"action.action.title\" class=\"mr-auto\" type=\"text\" placeholder=\"Titel\">\n            <select name=\"activeUser\" [(ngModel)]=\"action.action.user\">\n                <option value=\"undefined\" disabled>Benutzer</option>\n                <option value=\"all\">Alle</option>\n                <option *ngFor=\"let user of globalVar.user.users;\" [ngValue]=\"user.name\">\n                    {{ user.name }}\n                </option>\n            </select>\n            <select name=\"alertType\" [(ngModel)]=\"action.action.type\">\n                <option value=\"undefined\" disabled>Farbe</option>\n                <option *ngFor=\"let type of alertTypen\" [ngValue]=\"type.value\">{{type.name}}</option>\n            </select>\n    </div>\n    <p class=\"card-block card-text text-xs-center\">\n        <input [(ngModel)]=\"action.action.message\" class=\"col-form-label w-100\" type=\"text\" placeholder=\"Nachricht\">\n    </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/timer-edit/templates/action-device.html":
/***/ (function(module, exports) {

module.exports = "<select [(ngModel)]=\"action.action\">\n    <option disabled value=\"[object Object]\">Wähle ein Gerät</option>\n    <option *ngFor=\"let device of devicelist | ObjNgFor\" [ngValue]=\"device\">\n        {{device.name}} ({{device.Raum}})\n    </option>\n</select>\n<select name=\"alertType\" [(ngModel)]=\"action.switchstatus\">\n    <option disabled value=\"false\">Wähle einen Status</option>\n    <option value=\"1\">{{action.action.buttonLabelOn || \"An\"}}</option>\n    <option value=\"0\">{{action.action.buttonLabelOff || \"Aus\"}}</option>\n    <option value=\"toggle\">Umschalten</option>\n</select>"

/***/ }),

/***/ "../../../../../src/app/timer-edit/templates/action-group.html":
/***/ (function(module, exports) {

module.exports = "Die Gruppe\n<select [(ngModel)]=\"action.action\">\n    <option disabled value=\"false\">Wähle eine Gruppe</option>\n    <option *ngFor=\"let group of groups | ObjNgFor\" [ngValue]=\"group\">\n        {{group.name}} von {{group.user}}\n    </option>\n</select>\n<select name=\"alertType\" [(ngModel)]=\"action.switchstatus\">\n    <option disabled value=\"false\">Wähle einen Status</option>\n    <option value=\"1\">Einschalten</option>\n    <option value=\"0\">Ausschalten</option>\n    <option value=\"toggle\">Umschalten</option>\n</select>"

/***/ }),

/***/ "../../../../../src/app/timer-edit/templates/action-room.html":
/***/ (function(module, exports) {

module.exports = "Den Raum\n<select [(ngModel)]=\"action.action\">\n    <option disabled value=\"false\">Wähle einen Raum</option>\n    <option *ngFor=\"let room of devices | ObjNgFor\" [ngValue]=\"room\">\n        {{room.room.name}}\n    </option>\n</select>\n<select name=\"alertType\" [(ngModel)]=\"action.switchstatus\">\n    <option disabled value=\"false\">Wähle einen Status</option>\n    <option value=\"1\">Einschalten</option>\n    <option value=\"0\">Ausschalten</option>\n    <option value=\"toggle\">Umschalten</option>\n</select>"

/***/ }),

/***/ "../../../../../src/app/timer-edit/timer-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    background:red;\n    border-radius: 50px;\n    width:45px;\n    border-radius: 50px/50px;\n    border:none;\n    margin-left:5px;\n}\n\n.points{\n    position:relative;\n    top: 6px;\n    left: 6px;\n    color:white;\n}\n\n.right{\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timer-edit/timer-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\n    <div class=\"card-header\">\n        <input [(ngModel)]=\"timer.name\" class=\"form-control\" placeholder=\"Name\">\n    </div>\n    <div class=\"card-block\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Variablen/Events\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li *ngIf=\"!timer.variables != false\" class=\"list-group-item list-group-item-info\">\n                    Noch keine Variable hinzugefügt!\n                </li>\n                <div *ngFor=\"let variable of timer.variables | ObjNgFor\">\n                    <div *ngFor=\"let variab of variable; index as i;\">\n                        <li class=\"list-group-item d-flex justify-content-start\">\n                            Löse aus sobald die Variable \n                            <i class=\"ml-auto material-icons\" title=\"Variable entfernen\" (click)=\"removeVariable(variab.id, i)\">delete</i>\n                            <select name=\"variable\" [(ngModel)]=\"variab.id\" class=\"form-control\">\n                                <option *ngFor=\"let type of variables | ObjNgFor\" [ngValue]=\"type.id\">{{type.name}}({{type.id}})</option>\n                            </select>\n                            <select name=\"variableMode\" [(ngModel)]=\"variab.mode\" class=\"form-control\">\n                                <option *ngFor=\"let mode of variableModes\" [ngValue]=\"mode.value\">{{mode.name}}</option>\n                            </select>\n                            <input *ngIf=\"variab.mode != 'onChange'\" type=\"text\" class=\"form-control\" [(ngModel)]=\"variab.value\">\n                        </li>\n                    </div>\n                </div>\n                <li class=\"list-group-item\">\n                    <form class=\"form-inline\">\n                        <select name=\"addVariableType\" [(ngModel)]=\"addVariableType\" class=\"form-control mr-sm-2\">\n                            <option value=\"false\" disabled>Wähle eine Variable</option>\n                            <option *ngFor=\"let type of variables | ObjNgFor\" [ngValue]=\"type.id\">{{type.name}}({{type.id}})</option>\n                        </select>\n                        <button class=\"btn btn-success\" (click)=\"addVariable(addVariableType)\">\n                            Hinzufügen\n                        </button>\n                    </form>\n                </li>\n            </ul>\n        </div> \n        <br>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Bedingungen\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li *ngIf=\"timer.conditions.length == 0\" class=\"list-group-item list-group-item-info\">\n                    Noch keine Bedingungen hinzugefügt!\n                </li>\n                <div *ngIf=\"!timer.conditions == false\">\n                    <li class=\"list-group-item d-flex justify-content-start\" *ngFor=\"let con of timer.conditions; index as i;\" [ngSwitch]=\"con.type\">\n                        <div *ngSwitchCase=\"'random'\" class=\"d-flex\">\n                            Zufällig zwischen <ngb-timepicker [(ngModel)]=\"con.start\" [spinners]=\"false\"></ngb-timepicker> und <ngb-timepicker [(ngModel)]=\"con.stop\" [spinners]=\"false\"></ngb-timepicker>\n                        </div>\n                        <!-- <TimerConditionVariable *ngSwitchCase=\"'variable'\"></TimerConditionVariable> -->\n                        <!-- <app-timer-condition-variable *ngSwitchCase=\"'variable'\"></app-timer-condition-variable> -->\n                        <div *ngSwitchCase=\"'variable'\" class=\"\">\n                            Wenn die Variable\n                            <select name=\"variable\" [(ngModel)]=\"con.id\" class=\"form-control\">\n                                <option *ngFor=\"let type of variables | ObjNgFor\" [ngValue]=\"type.id\">{{type.name}}({{type.id}})</option>\n                            </select>\n                            <select name=\"variableMode\" [(ngModel)]=\"con.mode\" class=\"form-control\">\n                                <option *ngFor=\"let mode of variableModes\" [ngValue]=\"mode.value\">{{mode.name}}</option>\n                            </select>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"con.value\">\n                        </div>\n                        <div *ngSwitchCase=\"'time'\" class=\"d-flex\">\n                            Um <ngb-timepicker [(ngModel)]=\"con.time\" [spinners]=\"false\"></ngb-timepicker>\n                        </div>\n                        <div *ngSwitchCase=\"'sun'\" class=\"d-flex\">\n                            <select name=\"con.sun\" [(ngModel)]=\"con.sun\" class=\"form-control\">\n                                <option value=\"sunrise\">Sonnenaufgang</option>\n                                <option value=\"sunset\">Sonnenuntergang</option>\n                            </select>\n                            <ng-template #popContent>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" [(ngModel)]=\"con.offset.active\" type=\"checkbox\">\n                                        Zeitverschiebung nach\n                                    </label>\n                                </div>\n                                <div *ngIf=\"con.offset.active\">\n                                    <div class=\"btn-group\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"con.offset.random\">\n                                        <label ngbButtonLabel class=\"btn-sm btn-secondary\">\n                                          <input ngbButton type=\"radio\" [value]=\"true\">Zufall\n                                        </label>\n                                        <label ngbButtonLabel class=\"btn-sm btn-secondary\">\n                                          <input ngbButton type=\"radio\" [value]=\"false\">fest Vorgegeben\n                                        </label>\n                                    </div>\n                                    <div class=\"btn-group\" ngbRadioGroup name=\"type\" [(ngModel)]=\"con.offset.after\">\n                                        <label ngbButtonLabel class=\"btn btn-sm btn-secondary\">\n                                            <input ngbButton type=\"radio\" [value]=\"true\">hinten\n                                        </label>\n                                        <label ngbButtonLabel class=\"btn btn-sm btn-secondary\">\n                                            <input ngbButton type=\"radio\" [value]=\"false\">vorne\n                                        </label>\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"con.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Minimale Zeitverschiebung:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"{{con.offset.max - 1}}\" [(ngModel)]=\"con.offset.min\" id=\"formGroupExampleInput2\" placeholder=\"1\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"con.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Maximale Zeitverschiebung:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"{{con.offset.min + 1}}\" [(ngModel)]=\"con.offset.max\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"!con.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Minuten:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"0\" [(ngModel)]=\"con.offset.minutes\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                    </div>\n                                </div>\n                            </ng-template>\n                            <div class=\"red\" [ngbPopover]=\"popContent\" placement=\"left\" popoverTitle=\"Einstellungen\">\n                                <i class=\"material-icons points\">more_vert</i>\n                            </div>\n                        </div> \n                        <div *ngSwitchCase=\"'range'\"  class=\"d-flex\" title=\"Zeitverschiebung\">\n                            Von <ngb-timepicker [(ngModel)]=\"con.start\" [spinners]=\"false\"></ngb-timepicker> bis <ngb-timepicker [(ngModel)]=\"con.stop\" [spinners]=\"false\"></ngb-timepicker>\n                        </div>\n                        <div *ngSwitchCase=\"'weekdays'\" class=\"d-flex\">\n                            <div class=\"btn-group\" data-toggle=\"buttons\">\n                                <label class=\"btn btn-secondary\" ngbButtonLabel>\n                                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"con.weekdays['1']\">Montag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel>\n                                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"con.weekdays['2']\">Dienstag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel>\n                                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"con.weekdays['3']\">Mittwoch\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel>\n                                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"con.weekdays['4']\">Donnerstag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel>\n                                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"con.weekdays['5']\">Freitag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel>\n                                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"con.weekdays['6']\">Samstag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel>\n                                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"con.weekdays['0']\">Sonntag\n                                </label>\n                            </div>\n                        </div>\n                        <div *ngSwitchDefault>{{con | json}}</div>\n                        <i class=\"ml-auto material-icons\" title =\"Bedingung entfernen\" (click)=\"removeCondition(i)\">delete</i>\n                    </li>\n                </div>\n                <li class=\"list-group-item\">\n                    <form class=\"form-inline\">\n                        <select name=\"addConditionType\" [(ngModel)]=\"addConditionType\" class=\"form-control mr-sm-2\">\n                            <option value=\"false\" disabled>Wähle eine Bedingung</option>\n                            <option *ngFor=\"let type of conditions\" [ngValue]=\"type.value\">{{type.name}}</option>\n                        </select>\n                        <button class=\"btn btn-success\" (click)=\"addCondition(addConditionType)\">\n                            Hinzufügen\n                        </button>\n                    </form>\n                </li>\n            </ul>\n        </div>\n        <br>\n        <div class=\"card\">\n            <div class=\"card-header d-flex justify-content-between\">\n                Aktionen\n                <i (click)='switchAll(\"timers\", timer)' title=\"Aktionen zum testen jetzt ausführen!\" class=\"material-icons\">play_circle_outline</i>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li *ngIf=\"timer.actions.length == 0\" class=\"list-group-item list-group-item-info\">\n                        Noch keine Aktionen hinzugefügt!\n                </li>\n                <li class=\"list-group-item d-flex justify-content-start\" *ngFor=\"let act of  timer.actions; index as i;\" [ngSwitch]=\"act.type\">\n                        <app-timer-device *ngSwitchCase=\"'device'\" [action]=\"act\"></app-timer-device>\n                        <app-timer-group *ngSwitchCase=\"'group'\" [action]=\"act\"></app-timer-group>\n                        <app-timer-alert *ngSwitchCase=\"'alert'\" [action]=\"act\"></app-timer-alert>\n                        <app-timer-room *ngSwitchCase=\"'room'\" [action]=\"act\"></app-timer-room>\n                        <div *ngSwitchCase=\"'setVariable'\">\n                            <select name=\"variable\" [(ngModel)]=\"act.action\" class=\"form-control\">\n                                <option *ngFor=\"let type of variables | ObjNgFor\" [ngValue]=\"type\">{{type.name}}({{type.id}})</option>\n                            </select>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"act.action.status\">\n                        </div>\n                        <div *ngSwitchCase=\"'url'\" class=\"w-50\">Url: <input class=\"w-75\" type=\"text\" [(ngModel)]=\"act.action.url\" placeholger=\"http://ifttt.de\"></div>\n                        <div  *ngSwitchDefault>{{act.type}}:{{act | json}}</div>\n                        <div class=\"ml-auto d-flex\">\n                            <div class=\"form-check\">\n                                Interval:\n                                    <label class=\"form-check-label\"> \n                                    <input class=\"form-check-input\" [(ngModel)]=\"act.activeInterval\" type=\"checkbox\">\n                                    </label> \n                            </div>\n                            <input type=\"number\" [(ngModel)]=\"act.number\" *ngIf=\"act.activeInterval\">\n                            <select [(ngModel)]=\"act.unit\" *ngIf=\"act.activeInterval\">\n                                <option value=\"sec\">Sekunden</option>\n                                <option value=\"min\">Minuten</option>\n                                <option value=\"hour\">Stunden</option>\n                                <option value=\"day\">Tag</option>\n                                <option value=\"day of the week\">Tag der Woche</option>\n                                <option value=\"day of the month\">Tag des Monats</option>\n                            </select>\n                            <ng-template #popContent>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" [(ngModel)]=\"act.offset.active\" type=\"checkbox\">\n                                        Zeitverschiebung nach\n                                    </label>\n                                </div>\n                                <div *ngIf=\"act.offset.active\">\n                                    <div class=\"btn-group\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"act.offset.random\">\n                                        <label ngbButtonLabel class=\"btn-sm btn-secondary\">\n                                          <input ngbButton type=\"radio\" [value]=\"true\">Zufall\n                                        </label>\n                                        <label ngbButtonLabel class=\"btn-sm btn-secondary\">\n                                          <input ngbButton type=\"radio\" [value]=\"false\">fest Vorgegeben\n                                        </label>\n                                    </div>\n                                    <div class=\"btn-group\" ngbRadioGroup name=\"type\" [(ngModel)]=\"act.offset.after\">\n                                        <label ngbButtonLabel class=\"btn btn-sm btn-secondary\">\n                                            <input ngbButton type=\"radio\" [value]=\"true\">hinten\n                                        </label>\n                                        <label ngbButtonLabel class=\"btn btn-sm btn-secondary\">\n                                            <input ngbButton type=\"radio\" [value]=\"false\">vorne\n                                        </label>\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"act.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Minimale Zeitverschiebung:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"{{act.offset.max - 1}}\" [(ngModel)]=\"act.offset.min\" id=\"formGroupExampleInput2\" placeholder=\"1\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"act.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Maximale Zeitverschiebung:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"act.offset.min + 1\" [(ngModel)]=\"act.offset.max\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"!act.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Minuten:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"0\" [(ngModel)]=\"act.offset.minutes\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                    </div>\n                                </div>\n                            </ng-template>\n                            <div class=\"red\" [ngbPopover]=\"popContent\" placement=\"left\" popoverTitle=\"Einstellungen\">\n                                <i class=\"material-icons points\">more_vert</i>\n                            </div>\n                            <i class=\"material-icons\" title=\"Aktion entfernen\" (click)=\"removeAction(i)\">delete</i>\n                        </div>\n                </li>\n                <li class=\"list-group-item\">\n                    <form class=\"form-inline\">\n                        <select class=\"form-control mr-sm-2\" name=\"addActionType\" [(ngModel)]=\"addActionType\">\n                            <option disabled value=\"false\">Action auswählen</option>\n                            <option *ngFor=\"let action of actions\" [ngValue]=\"action.value\">{{action.name}}</option>\n                        </select>\n                        <button class=\"btn btn-success\" (click)=\"addAction(addActionType)\">\n                            Hinzufügen\n                        </button>\n                    </form>\n                </li>\n            </ul>\n        </div>\n        <br>\n        <div class=\"right\">\n            <button class=\"btn btn-success\" (click)=\"save()\">Speichern</button>\n            <button class=\"btn btn-danger\" (click)=\"cancel()\">Abbrechen</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/timer-edit/timer-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimerGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TimerDeviceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TimerAlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TimerRoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimerEditComponent = (function () {
    function TimerEditComponent(route, router, globalVar, socket) {
        this.route = route;
        this.router = router;
        this.globalVar = globalVar;
        this.socket = socket;
        this.actions = [
            { value: "device", name: "Gerät" },
            { value: "group", name: "Gruppe" },
            { value: "room", name: "Raum" },
            { value: "alert", name: "Alert" },
            { value: "url", name: "Url aufrufen" },
            { value: "setVariable", name: "Variablen Wert setzen" },
            { value: "pushbullets", name: "Pushbulletbenachrichigung" }
        ];
        this.addActionType = "false";
        this.addVariableType = "false";
        this.addConditionType = "false";
        this.switchAll = function (type, data) {
            this.socket.emit(type + ':switchAll', { user: this.globalVar.activeUser, switchAll: data });
        };
        this.variableModes = [
            { value: "match", name: "match (deprected)" },
            { value: "onChange", name: "sich ändert (onChange)" },
            { value: "größer", name: "größer als" },
            { value: "kleiner", name: "kleiner als" },
            { value: "gleich", name: "gleich" },
            { value: "ungleich", name: "ungleich" },
            { value: "kleinergleich", name: "kleiner oder gleich" },
            { value: "größergleich", name: "größer oder gleich" }
        ];
        this.conditions = [
            { value: "range", name: "Zeitraum" },
            { value: "sun", name: "Sonnenaufgang/Untergang" },
            { value: "random", name: "Zufälliger Zeitpunkt in einem Zeitraum" },
            { value: "variable", name: "Wert einer Variable" },
            { value: "time", name: "Zeit" },
            { value: "weekdays", name: "Wochentage" }
        ];
    }
    TimerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = parseInt(this.route.snapshot.paramMap.get('id')) || undefined;
        if (this.id) {
            this.socket.emit("timers:get", { "get": this.id });
            this.socket.on('timer', function (data) {
                console.log(data);
                if (_this.id === parseInt(data[data.type].id)) {
                    _this.timer = data[data.type];
                }
            });
        }
        else {
            this.timer = {
                name: "",
                id: undefined,
                variables: false,
                conditions: [],
                actions: [],
                user: this.globalVar.activeUser.name
            };
        }
        this.socket.emit("variables:get", "");
        this.socket.on("variables", function (data) {
            if (data.type == "get") {
                _this.variables = data.get;
            }
        });
    };
    TimerEditComponent.prototype.addAction = function (type) {
        if (type != "false") {
            if (!this.timer.actions) {
                this.timer.actions = [];
            }
            this.timer.actions.push({
                type: type,
                activeInterval: false,
                unit: "min",
                number: 5,
                switchstatus: false,
                action: {},
                offset: {
                    active: false,
                    random: false,
                    after: true,
                    min: 2,
                    max: 5,
                    minutes: 4
                }
            });
        }
    };
    TimerEditComponent.prototype.addVariable = function (id) {
        if (id != "false") {
            if (!this.timer.variables) {
                this.timer.variables = {};
            }
            if (!this.timer.variables[id]) {
                this.timer.variables[id] = [];
            }
            this.timer.variables[id].push({
                id: id,
                mode: "onChange"
            });
        }
    };
    TimerEditComponent.prototype.addCondition = function (type) {
        if (type != "false") {
            if (!this.timer.conditions) {
                this.timer.conditions = [];
            }
            this.timer.conditions.push({
                type: type,
                offset: {
                    active: false,
                    random: false,
                    after: true,
                    min: 2,
                    max: 5,
                    minutes: 4
                },
                weekdays: [false, false, false, false, false, false, false]
            });
        }
    };
    TimerEditComponent.prototype.removeAction = function (index) {
        this.timer.actions.splice(index, 1);
    };
    TimerEditComponent.prototype.removeCondition = function (index) {
        this.timer.conditions.splice(index, 1);
    };
    TimerEditComponent.prototype.removeVariable = function (id, index) {
        this.timer.variables[id].splice(index, 1);
        if (this.timer.variables[id].length == 0) {
            delete this.timer.variables[id];
        }
        for (var index_1 in this.timer.variables) {
            if (this.timer.variables.hasOwnProperty(index_1)) {
                return;
            }
        }
        this.timer.variables = false;
    };
    TimerEditComponent.prototype.save = function () {
        console.log(this.timer);
        this.socket.emit('timers:save', { user: this.globalVar.activeUser, save: this.timer });
        this.router.navigate(['/timers']);
    };
    TimerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/timers']);
    };
    return TimerEditComponent;
}());
TimerEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer-edit',
        template: __webpack_require__("../../../../../src/app/timer-edit/timer-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/timer-edit/timer-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_service_global__["a" /* GlobalObjectsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */]) === "function" && _d || Object])
], TimerEditComponent);

var TimerGroupComponent = (function () {
    function TimerGroupComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
        this.groups = {};
    }
    TimerGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.emit("groups:getAll", "");
        this.socket.on("groups", function (data) {
            _this.groups = data.get;
            if (_this.action.action.id && _this.action.action != _this.groups[_this.action.action.id]) {
                _this.action.action = _this.groups[_this.action.action.id];
            }
        });
    };
    return TimerGroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TimerGroupComponent.prototype, "action", void 0);
TimerGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer-group',
        styles: [__webpack_require__("../../../../../src/app/timer-edit/timer-edit.component.css")],
        template: __webpack_require__("../../../../../src/app/timer-edit/templates/action-group.html")
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_service_global__["a" /* GlobalObjectsService */]) === "function" && _f || Object])
], TimerGroupComponent);

var TimerDeviceComponent = (function () {
    function TimerDeviceComponent(socket) {
        this.socket = socket;
    }
    TimerDeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.emit("devices:devicelist", "");
        this.socket.on("devicelist", function (data) {
            _this.devicelist = data.get;
            if (_this.action.action.deviceid && _this.action.action != _this.devicelist[_this.action.action.deviceid]) {
                _this.action.action = _this.devicelist[_this.action.action.deviceid];
            }
        });
    };
    return TimerDeviceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TimerDeviceComponent.prototype, "action", void 0);
TimerDeviceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer-device',
        styles: [__webpack_require__("../../../../../src/app/timer-edit/timer-edit.component.css")],
        template: __webpack_require__("../../../../../src/app/timer-edit/templates/action-device.html")
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */]) === "function" && _g || Object])
], TimerDeviceComponent);

var TimerAlertComponent = (function () {
    function TimerAlertComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
        this.alertTypen = [
            { value: 'primary', name: 'Blau/Primary' },
            { value: 'info', name: 'Hellblau/Info' },
            { value: 'success', name: 'Grün/Success' },
            { value: 'warning', name: 'Gelb/Warning' },
            { value: 'danger', name: 'Rot/Danger' },
            { value: 'secondary', name: 'Weiß/Default' }
        ];
    }
    return TimerAlertComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TimerAlertComponent.prototype, "action", void 0);
TimerAlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer-alert',
        styles: [__webpack_require__("../../../../../src/app/timer-edit/timer-edit.component.css")],
        template: __webpack_require__("../../../../../src/app/timer-edit/templates/action-alert.html")
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_service_global__["a" /* GlobalObjectsService */]) === "function" && _j || Object])
], TimerAlertComponent);

var TimerRoomComponent = (function () {
    function TimerRoomComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
        this.devices = {};
    }
    TimerRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.emit("devices:get", "");
        this.socket.on("devices", function (data) {
            _this.devices = data.get;
            if (_this.action.action.id && _this.action.action != _this.devices[_this.action.action.id]) {
                _this.action.action = _this.devices[_this.action.action.id];
            }
        });
    };
    return TimerRoomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TimerRoomComponent.prototype, "action", void 0);
TimerRoomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer-room',
        styles: [__webpack_require__("../../../../../src/app/timer-edit/timer-edit.component.css")],
        template: __webpack_require__("../../../../../src/app/timer-edit/templates/action-room.html")
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_service__["a" /* SocketService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_service_global__["a" /* GlobalObjectsService */]) === "function" && _l || Object])
], TimerRoomComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
// @Component({
//     selector: 'app-timer-condition-variable',
//     styleUrls: ['./timer-edit.component.css'],
//     templateUrl: './templates/condition-variable.html'
// })
// export class TimerConditionVariableComponent{
//     @Input() condition: any;
//     constructor(
//         private socket: SocketService,
//         public globalVar: GlobalObjectsService
//     ){}
//     devices = {};
//     variables: Array<object>;
//     ngOnInit(){
//     }
// } 
//# sourceMappingURL=timer-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/timer-edit/timer-edit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__ = __webpack_require__("../../../../../src/app/timer-edit/timer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjNgFor", function() { return ObjNgFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerEditModule", function() { return TimerEditModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ObjNgFor = (function () {
    function ObjNgFor() {
    }
    ObjNgFor.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        if (value) {
            return Object.keys(value).map(function (key) { return value[key]; });
        }
    };
    return ObjNgFor;
}());
ObjNgFor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Pipe"])({ name: 'ObjNgFor', pure: false })
], ObjNgFor);

var TimerEditModule = (function () {
    function TimerEditModule() {
    }
    return TimerEditModule;
}());
TimerEditModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["a" /* TimerEditComponent */],
            ObjNgFor,
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["b" /* TimerGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["c" /* TimerDeviceComponent */],
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["d" /* TimerAlertComponent */],
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["e" /* TimerRoomComponent */]
            // ,TimerConditionVariableComponent
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: ':id',
                    component: __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["a" /* TimerEditComponent */]
                }, {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["a" /* TimerEditComponent */]
                }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["a" /* TimerEditComponent */],
            ObjNgFor,
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["b" /* TimerGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["c" /* TimerDeviceComponent */],
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["d" /* TimerAlertComponent */],
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["e" /* TimerRoomComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_global__["a" /* GlobalObjectsService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__timer_edit_component__["a" /* TimerEditComponent */]
        ]
    })
], TimerEditModule);

//# sourceMappingURL=timer-edit.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map