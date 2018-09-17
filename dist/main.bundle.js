webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./timer-edit/timer-edit.module": [
		"../../../../../src/app/timer-edit/timer-edit.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/active-devices/active-devices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul, ol{\n\tlist-style-type: none;\n\tpadding: 0px;\n\tmargin:0px;\n\tlist-style-type: none;\n}\n.devicename{\n\twhite-space: nowrap; \n\ttext-align: inherit;\n\tmargin: auto 0;\n\tcolor: #292b2c;\n}\n.btnOn{\n\tbackground-color:#c0ffc0;\n\t/*width: 25%;*/\n}\n.btnOff{\n\tbackground-color:#ffc0c0;\n\t/*width: 25%;*/\n}\nbutton{\n\theight: 45px;\n\tcursor:pointer;\n\tmargin:2px 1px 2px 0px;\n\tmin-width:75px;\n\tbox-sizing: initial;\n\tborder:0px;\n\tborder-radius:0px;\n\tpadding:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/active-devices/active-devices.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Aktive Geräte</h3>\n<ul class=\"list-group\">\n  <li class=\"\" *ngFor=\" let device of globalVar.user.active;\">\n    {{device.name}}({{device.room}})\n  </li>\n</ul>\n<button class=\"btnOn buttonL\" (click)='switchAll(\"1\")'>Alle ein</button>\n<button class=\"btnOff buttonL\" (click)='switchAll(\"0\")'>Alle aus</button>"

/***/ }),

/***/ "../../../../../src/app/active-devices/active-devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveDevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActiveDevicesComponent = (function () {
    function ActiveDevicesComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
    }
    ActiveDevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.emit("devices:active", undefined);
        this.socket.on('active', function (data) {
            _this.activeDevices = data[data.type];
        });
    };
    ActiveDevicesComponent.prototype.switchAll = function (status) {
        console.log(status);
        this.socket.emit("devices:switchAll", { switchAll: status });
    };
    return ActiveDevicesComponent;
}());
ActiveDevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-active-devices',
        template: __webpack_require__("../../../../../src/app/active-devices/active-devices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/active-devices/active-devices.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _b || Object])
], ActiveDevicesComponent);

var _a, _b;
//# sourceMappingURL=active-devices.component.js.map

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alerts{\n\tz-index:1031;\n\t/* position: fixed; */\n\tposition: absolute;\n\ttop: 0px;\n    right: 0px;\n    height: 100%;\n\tbackground:rgba(0, 0, 0, 0.6);\n    overflow: auto;\n    padding: 10px;\n}\n.alerts ul{\n    position: relative;\n    min-width: 45%;\n}\nli {\n    list-style-type: none; \n    margin-bottom: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"globalVar.user.alerts | isEmpty:true\" class=\"alerts w-100 d-flex justify-content-end\">\n    <ul>\n        <li *ngFor=\"let alert of globalVar.user.alerts | ObjNgFor\" (click)=\"remove(alert)\">\n            <div class=\"card card-{{alert.type}}\">\n                <div class=\"card-header d-flex justify-content-between\">\n                    <span class=\"card-text\">\n                        {{alert.title}}\n                    </span>\n                    <p class=\"pull-right card-text\">\n                        {{alert.date | date:'dd.MMM., H:mm'}}\n                    </p>\n                </div>\n                <p class=\"card-block card-text text-xs-center\">\n                    {{alert.message}}\n                </p>\n            </div>\n        </li>\n    </ul>\n    <div class=\"p-2 ml-auto d-flex justify-content-end fixed-bottom\">\n        <!-- <button class=\"btn btn-success\" (click)=\"removeAll()\">\n            Alle Entfernen\n        </button> -->\n        <i class=\"material-icons md-62 text-white\" title=\"Alle Alerts entfernen\" (click)=\"removeAll()\">delete</i>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertsComponent = (function () {
    function AlertsComponent(globalVar, socket) {
        this.globalVar = globalVar;
        this.socket = socket;
    }
    AlertsComponent.prototype.remove = function (data) {
        this.socket.emit('alerts:remove', { user: this.globalVar.activeUser, remove: data });
    };
    AlertsComponent.prototype.removeAll = function () {
        this.socket.emit('alerts:removeAll', { user: this.globalVar.activeUser });
    };
    return AlertsComponent;
}());
AlertsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alerts',
        template: __webpack_require__("../../../../../src/app/alerts/alerts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alerts/alerts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */]) === "function" && _b || Object])
], AlertsComponent);

var _a, _b;
//# sourceMappingURL=alerts.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".favorittile{\n\t/* box-sizing: content-box; */\n\toverflow-y: auto;\n\tfloat:left;\n\tmargin-left: 10;\n\tmargin-right: auto;\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n\tpadding-left:5px;\n\twidth:20%;\n\theight: calc(100% - 56px);\n\tbackground: linear-gradient(to bottom, #ddf 0%, #ddf 0%, #ffffff 100%);\n\tbackground-color: #fff;\n\tposition:fixed;\n\ttop:56px;\n}\n.favoritmenu{\n\tmargin-left:20%;\n}\n.content{\n    position: absolute;\n    padding: 1.25rem;\n    /* margin-top: 59px; */\n    overflow: auto;\n    /* height: 100%; */\n    top: 59px;\n    right: 0;\n    bottom: 0px;\n    left: 0;\n    overflow-y: scroll;\n}\n.content router-outlet{\n    position: relative;\n}\n.bg{\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/img/purty_wood.jpg") + ");\n\tposition:fixed;\n\tbackground-repeat: repeat-y repeat-x;\n\theight: 100%;\n\twidth:100%;\n\ttop: 0;\n\tleft: 0;\n\tz-index: -1;\n}\n.nav-link-active{\n    background-color: #EFEFFF;\n}\n.loaderBg{\n\tz-index:1100;\n\tposition: fixed;\n\theight: 100%;\n\twidth:100%;\n\ttop:0;\n\tbackground:rgba(0, 0, 0, 0.6);\n}\n.loader{\n\tposition:fixed;\n\ttop:40%;\n\tleft:50%;\n}\n.loader p {\n\tcolor: white;\n}\n.inner{\n  \tposition:relative;\n    border-radius: 81px/81px;;\n    border:solid 8px;\n    border-color: white;\n    width: 87px;\n    height: 87px;\n    top: -1px;\n    left: -2px;\n\n/*    -webkit-animation: rotation 2s linear infinite;\n    -moz-animation: rotation 2s linear infinite;\n    -ms-animation: rotation 2s linear infinite;*/\n}\n.outer{\n    border-radius: 80px/80px;;\n    border:solid 8px;\n    border-color: white blue white blue;\n    width:100px;\n    height:100px;\n    -webkit-animation: rotation 2s linear infinite;\n    -moz-animation: rotation 2s linear infinite;\n    -ms-animation: rotation 2s linear infinite;\n}\n@-webkit-keyframes rotation {\n    0%   { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\nbutton{\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div (window:keydown)=\"onKey($event)\">-->\n    <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded fixed-top\" style=\"background-color: #ddf;\">\n        <a class=\"navbar-brand\" (click)=\"toogleFav(showFav)\">\n            <img src=\"favicon.ico\" width=\"35\" height=\"35\" alt=\"\">\n        </a>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"nav-link-active\">\n                        Home\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"devices\" routerLinkActive=\"nav-link-active\">Geräte</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"timers\" routerLinkActive=\"nav-link-active\">Timer</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"chart\" routerLinkActive=\"nav-link-active\">Chart</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"/settings\">Einstellungen</a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"chat\">Chat</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"modal\">Modal</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"date\">Datepicker</a>\n                </li> -->\n            </ul>\n            <form class=\"form-inline my-2 my-lg-0\" #f=\"ngForm\">\n                <select name=\"activeUser\" [(ngModel)]=\"selectedUser\" (change)=\"setUser()\" class=\"custom-select\">\n                    <option *ngFor=\"let user of users; index as i;\" [ngValue]=\"i\">\n                        {{ user.name }}\n                    </option>\n                </select>\n            </form>\n        </div>\n    </nav>\n    <div class=\"favorittile\" *ngIf=\"showFav\">\n        <app-favorit-devices></app-favorit-devices>\n        <app-active-devices></app-active-devices>\n    </div>\n    <app-alerts class=\"w-100\"></app-alerts>\n    <div  class=\"content\" [class.favoritmenu]=\"showFav\">\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"bg\"></div>\n    <div class=\"loaderBg\" *ngIf=\"loading\">\n        <div class=\"loader\">\n            <div class=\"outer mx-auto\">\n                <div class=\"inner\"></div>\n            </div>\n            <p class=\"\">Verbinde zum Server...</p>\n        </div>\n    </div>\n    <!--<div class=\"loaderBg\">\n    <div class=\"loader card\">\n        <div class=\"card-header\">\n        <p class=\"\">Verbinde zum Server...</p>\n        </div>\n        <div class=\"card-block\">\n        <div class=\"outer\">\n            <div class=\"inner\"></div>\n        </div>\n        </div>\n    </div>\n    </div>-->\n<!--</div>-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
        this.loading = false;
        // loaded = [];
        this.selectedUser = 0;
        this.messages = [];
        this.showFav = true;
        this.moreMessagesAvailable = true;
    }
    AppComponent.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    };
    AppComponent.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    };
    AppComponent.prototype.setUser = function () {
        if (this.globalVar.activeUser.id != this.users[this.selectedUser].id) {
            if (this.globalVar.activeUser.name != "") {
                this.globalVar.user.chartOptions.series = [];
                this.globalVar.user.alerts = {};
                console.log("leave:" + this.globalVar.activeUser.name);
                this.socket.emit('room:leave', this.globalVar.activeUser.name);
            }
            this.setCookie("qs-user", this.selectedUser, 365);
            console.log("join:" + this.users[this.selectedUser].name);
            this.socket.emit('room:join', this.users[this.selectedUser]);
            // this.globalVar.user.chartOptions.showLoading();
            this.globalVar.user.hideChart = true;
            if (this.globalVar.user.chart) {
                this.globalVar.user.chart.showLoading();
            }
            this.socket.emit('variables:chart', { user: this.users[this.selectedUser].id, hours: this.users[this.selectedUser].chartHour });
            this.globalVar.activeUser = this.users[this.selectedUser];
        }
    };
    AppComponent.prototype.toogleFav = function (status) {
        console.log(status);
        this.showFav = !status;
        var that = this;
        setTimeout(function () {
            that.globalVar.user.chart.reflow();
        }, 100);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.emit('users:get', "");
        this.socket.on('users', function (data) {
            _this.users = data[data.type];
            _this.loading = false;
            var cookie = _this.getCookie('qs-user');
            if (cookie != "") {
                _this.selectedUser = parseInt(cookie) || 1;
                _this.setUser();
            }
            else {
                console.log("No cookie!!");
            }
        });
        this.socket.on('all', function (data) {
            console.log(data);
            switch (data.type) {
                case "get":
                    _this.globalVar.user[data.masterType] = data.get;
                    break;
                case "add":
                    console.log(_this.globalVar.user[data.masterType]);
                    if (Array.isArray(_this.globalVar.user[data.masterType])) {
                        _this.globalVar.user[data.masterType].push(data.add);
                    }
                    else {
                        _this.globalVar.user[data.masterType][data.add.id] = data.add;
                    }
                    break;
                case "remove":
                    delete _this.globalVar.user[data.masterType][data.remove];
                    break;
                case "edit":
                    _this.globalVar.user[data.masterType][data.edit.id] = data.edit;
                    break;
                case "switch":
                    if (Object.keys(_this.globalVar.user[data.masterType]).length > 0) {
                        _this.globalVar.user[data.masterType][data.switch.device.Raum].roomdevices[data.switch.device.deviceid].status = data.switch.status;
                    }
                    for (var i = 0; i < _this.globalVar.user.favoritDevices.length; i++) {
                        if (_this.globalVar.user.favoritDevices[i].deviceid == data.switch.device.deviceid) {
                            _this.globalVar.user.favoritDevices[i].status = parseFloat(data.switch.status);
                        }
                    }
                    break;
                case "unshift":
                    _this.globalVar.user[data.masterType].unshift(data.unshift);
                    break;
                case "push":
                    _this.globalVar.user[data.masterType].push(data.push);
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
        this.socket.disconnect(function (data) {
            console.log("Verbindung zum Server verloren");
            _this.loading = true;
        });
        this.socket.connect(function (data) {
            console.log(_this.globalVar.activeUser);
            if (_this.globalVar.activeUser.name != "") {
                _this.socket.emit('room:join', _this.globalVar.activeUser);
            }
            console.log("Verbindung zum Server hergestellt");
            _this.loading = false;
        });
        var chartOptions = {
            chart: {
                backgroundColor: '#ffffff',
                zoomType: "x",
                resetZoomButton: {
                    theme: {
                        display: "none"
                    }
                    // relativeTo:"plot"
                }
            },
            navigator: {
                enabled: false
            },
            scrollbar: {
                enabled: false
            },
            // rangeSelector: {
            //     enabled: false,
            //     buttons: [{
            //         type: 'hour',
            //         count: 12,
            //         text: '12h'
            //     }, {
            //         type: 'day',
            //         count: 1,
            //         text: '1d'
            //     }, {
            //         type: 'day',
            //         count: 2,
            //         text: '2d'
            //     },{
            //         type: 'week',
            //         count: 1,
            //         text: '1w'
            //     },{
            //         type: 'all',
            //         text: 'All'
            //     }],
            //     inputEnabled: false, // it supports only days
            //     selected: 4 // all
            // },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    },
                    animation: false
                }
            },
            xAxis: [{
                    type: 'datetime',
                    labels: {
                        rotation: 0,
                        style: {
                            "color": '#80a3ca',
                            "fontSize": "16px"
                        }
                    },
                    events: {
                        afterSetExtremes: function (e) {
                            console.log(Math.round(e.min));
                            console.log(Math.round(e.max));
                        }
                    },
                    dateTimeLabelFormats: {
                        second: '%d.%m<br/>%H:%M:%S',
                        minute: '%d.%m<br/>%H:%M',
                        hour: '%d.%m<br/>%H:%M',
                        day: '%d.%m<br/>%H:%M',
                        week: '%d.%m.%Y',
                        month: '%m.%Y',
                        year: '%Y'
                    }
                }],
            series: [],
            yAxis: [{
                    allowDecimals: true,
                    opposite: true,
                    title: {
                        text: 'Temperatur',
                        style: {
                            "color": '#80a3ca',
                            "fontSize": "16px"
                        }
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            "color": '#80a3ca',
                            "fontSize": "16px"
                        }
                    },
                    plotLines: []
                }],
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
        };
        this.socket.on("varChart", function (data) {
            if (data.get.length > 0) {
                _this.globalVar.user.chartOptions = chartOptions;
                _this.globalVar.user.hideChart = false;
                _this.globalVar.user.chartOptions.series = data.get;
                if (_this.globalVar.user.chart) {
                    _this.globalVar.user.chart.update(_this.globalVar.user.chartOptions);
                    _this.globalVar.user.chart.hideLoading();
                }
            }
        });
        this.socket.emit("messages:loadOld", new Date().getTime());
        /*     this.socket.on('chatMessages', data => {
            this.messages.splice(0, 0, data[data.type]);
        }) */
        this.socket.on('moreMessagesAvailable', function (data) {
            _this.moreMessagesAvailable = data;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_highcharts_dist_HighchartsService__ = __webpack_require__("../../../../angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__active_devices_active_devices_component__ = __webpack_require__("../../../../../src/app/active-devices/active-devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__favorit_devices_favorit_devices_component__ = __webpack_require__("../../../../../src/app/favorit-devices/favorit-devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__devices_devices_component__ = __webpack_require__("../../../../../src/app/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__device_device_component__ = __webpack_require__("../../../../../src/app/device/device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__groups_groups_component__ = __webpack_require__("../../../../../src/app/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__countdowns_countdowns_component__ = __webpack_require__("../../../../../src/app/countdowns/countdowns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__timers_timers_component__ = __webpack_require__("../../../../../src/app/timers/timers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__timer_header_timer_header_component__ = __webpack_require__("../../../../../src/app/timer-header/timer-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__timer_show_timer_show_component__ = __webpack_require__("../../../../../src/app/timer-show/timer-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__alerts_alerts_component__ = __webpack_require__("../../../../../src/app/alerts/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__chart_chart_component__ = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__variables_variables_component__ = __webpack_require__("../../../../../src/app/variables/variables.component.ts");
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function highchartsFactory() {
    var Highcharts = __webpack_require__("../../../../highcharts/highstock.js");
    Highcharts.setOptions({
        global: {
            useUTC: false
        },
        lang: {
            loading: "Versuche Daten zu laden..."
        }
    });
    return Highcharts;
}

















/*
    export function highchartsFactory() {
      const hc = require('highcharts');
      const dd = require('highcharts/modules/drilldown');
      dd(hc);

      return hc;
    }
*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_3__datepicker_datepicker_component__["a" /* NgbdDatepickerBasic */],
            __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__["a" /* NgbdModalBasic */],
            __WEBPACK_IMPORTED_MODULE_12__active_devices_active_devices_component__["a" /* ActiveDevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__favorit_devices_favorit_devices_component__["a" /* FavoritDevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__devices_devices_component__["a" /* DevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__device_device_component__["a" /* SwitchButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_15__device_device_component__["b" /* ShutterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__device_device_component__["c" /* DimmerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__devices_devices_component__["a" /* DevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__devices_devices_component__["b" /* ObjNgFor */],
            __WEBPACK_IMPORTED_MODULE_14__devices_devices_component__["c" /* isEmpty */],
            __WEBPACK_IMPORTED_MODULE_17__groups_groups_component__["a" /* GroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__countdowns_countdowns_component__["a" /* CountdownsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__timers_timers_component__["a" /* TimersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__timer_header_timer_header_component__["a" /* TimerHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__timer_show_timer_show_component__["a" /* TimerShowComponent */],
            __WEBPACK_IMPORTED_MODULE_23__alerts_alerts_component__["a" /* AlertsComponent */], __WEBPACK_IMPORTED_MODULE_24__chart_chart_component__["a" /* ChartComponent */], __WEBPACK_IMPORTED_MODULE_25__variables_variables_component__["a" /* VariablesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__["ChartModule"],
            // , require('highcharts/modules/exporting') 
            // ChartModule.forRoot(require('highcharts')),
            // ChartModule.forRoot(Test124),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot([
                //   {
                //     path: 'chat',
                //     component: ChatComponent
                //   },
                //   {
                //     path: 'modal',
                //     component: NgbdModalBasic
                //   },
                //   {
                //     path: 'date',
                //     component: NgbdDatepickerBasic
                //   },
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'devices',
                    component: __WEBPACK_IMPORTED_MODULE_14__devices_devices_component__["a" /* DevicesComponent */]
                },
                {
                    path: 'timers',
                    component: __WEBPACK_IMPORTED_MODULE_20__timers_timers_component__["a" /* TimersComponent */]
                },
                {
                    path: 'editTimer',
                    loadChildren: "./timer-edit/timer-edit.module#TimerEditModule"
                },
                {
                    path: 'chart',
                    component: __WEBPACK_IMPORTED_MODULE_24__chart_chart_component__["a" /* ChartComponent */]
                },
                {
                    path: '**',
                    redirectTo: 'home',
                    pathMatch: 'full'
                }
            ], {
                useHash: true
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_18__app_service_global__["a" /* GlobalObjectsService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_8_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory
            }
            //,TimerFunctionsService
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalObjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function afterSetExtremes(e) {
    console.log(e);
}
var GlobalObjectsService = (function () {
    function GlobalObjectsService() {
        this.user = {
            active: [],
            alerts: {},
            chatMessages: [],
            countdowns: {},
            devicelist: [],
            devices: {},
            favoritDevices: [],
            groups: {},
            id: "",
            moreMessagesAvailable: true,
            name: "",
            timers: {},
            users: [],
            variables: {},
            favoritVariables: {},
            hideChart: true,
            chartOptions: {
                chart: {
                    backgroundColor: 'transparent',
                    zoomType: "x"
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false
                        },
                        animation: false
                    }
                },
                xAxis: [{
                        type: 'datetime',
                        labels: {
                            rotation: 0,
                            style: {
                                "color": '#80a3ca',
                                "fontSize": "16px"
                            }
                        },
                        events: {
                            afterSetExtremes: function (e) {
                                console.log(e);
                            }
                        },
                        dateTimeLabelFormats: {
                            second: '%d.%m<br/>%H:%M:%S',
                            minute: '%d.%m<br/>%H:%M',
                            hour: '%d.%m<br/>%H:%M',
                            day: '%d.%m<br/>%H:%M',
                            week: '%d.%m.%Y',
                            month: '%m.%Y',
                            year: '%Y'
                        }
                    }],
                series: [],
                yAxis: [{
                        allowDecimals: true,
                        title: {
                            text: 'Temperatur',
                            style: {
                                "color": '#80a3ca',
                                "fontSize": "16px"
                            }
                        },
                        labels: {
                            format: '{value}',
                            style: {
                                "color": '#80a3ca',
                                "fontSize": "16px"
                            }
                        },
                        plotLines: []
                    }],
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
            chart: void {}
        };
        this.activeUser = {
            name: "",
            groups: {},
            id: "",
            chartHour: 24,
            varChart: [],
            variables: []
        };
    }
    return GlobalObjectsService;
}());
GlobalObjectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GlobalObjectsService);

//# sourceMappingURL=app.service.global.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* unused harmony export ServerResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });


var ServerResponse = (function () {
    function ServerResponse() {
    }
    return ServerResponse;
}());

var SocketService = (function () {
    function SocketService() {
        var _this = this;
        this.url = "http://" + window.location.hostname + ":3333";
        // private url = 'http://192.168.2.47:1230';
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
        this.observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('change', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
    }
    SocketService.prototype.emit = function (type, message) {
        console.log(window);
        this.socket.emit(type, message);
    };
    SocketService.prototype.on = function (type, callback) {
        this.observable.subscribe(function (data) {
            if (type === "all" || type === data.masterType) {
                callback(data);
            }
        });
    };
    SocketService.prototype.disconnect = function (callback) {
        this.socket.on('disconnect', function (data) {
            callback(data);
        });
    };
    SocketService.prototype.connect = function (callback) {
        this.socket.on('connect', function (data) {
            callback(data);
        });
    };
    return SocketService;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".numberInput{\n    max-width:80px;\n    min-width:80px;\n}\n\nchart {\n    display: block;\n    height: 500px;\n}\n.test{\n\t-ms-flex-flow: row wrap;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t        flex-flow: row wrap;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-block test d-flex justify-content-end\">\n        \n        <h3 class=\"mr-auto\">Chart</h3>\n        <div class=\"\">\n            <div class=\"input-group justify-content-end\">\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getTempHistory(24)\" [ngClass]=\"{active:globalVar.activeUser.chartHour === 24}\" aria-pressed=\"false\" autocomplete=\"off\" checked>24h</button>\n                </span>\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getTempHistory(48)\" [ngClass]=\"{active:globalVar.activeUser.chartHour === 48}\" aria-pressed=\"false\" autocomplete=\"off\" checked>48h</button>\n                </span>\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getTempHistory(96)\" [ngClass]=\"{active:globalVar.activeUser.chartHour === 96}\" aria-pressed=\"false\" autocomplete=\"off\" checked>96h</button>\n                </span>\n                <input type=\"number\" class=\"form-control numberInput\" min=\"0\" [(ngModel)]=\"hours\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"getTempHistory(hours)\">Los!</button>\n                </span>\n                <span class=\"input-group-btn\">\n                    <i class=\"material-icons btn btn-secondary\" title=\"Reset Zoom\" (click)=\"this.globalVar.user.chart.zoomOut()\">zoom_out</i>\n                    <!-- <button class=\"btn btn-secondary\" type=\"button\" (click)=\"getTempHistory(hours)\"> -->\n                    <!-- </button> -->\n                </span>\n            </div>\n        </div>\n    </div>\n    <chart *ngIf=\"!globalVar.user.hideChart\" [options]=\"globalVar.user.chartOptions\" (load)=\"saveInstance($event.context)\"></chart> \n    <div *ngIf=\"globalVar.activeUser.varChart.length == 0\" class=\"card-block\">\n        <!-- <div *ngIf=\"globalVar.user.hideChart && globalVar.activeUser.varChart.length > 0\" role=\"alert\" class=\"alert alert-info\"> -->\n            <!-- Unterumständen keine Daten verfügbar. Ist die speicher-Funktion der Variablen aktiviert? -->\n        <!-- </div> -->\n        <div role=\"alert\" class=\"alert alert-info\">\n            Du hast in den Einstellungen keine Datenpunkte für das Diagram ausgewählt.\n        </div>\n    </div>\n    <!-- <chart [options]=\"globalVar.user.chartOptions\" (load)=\"saveInstance($event.context)\"></chart>  -->\n    <!-- <chart *ngIf=\"globalVar.activeUser.varChart.length > 0\" [options]=\"globalVar.user.chartOptions\" (load)=\"saveInstance($event.context)\"></chart>  -->\n    <!-- <chart [options]=\"globalVar.user.chartOptions\" type=\"StockChart\"></chart> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartComponent = (function () {
    function ChartComponent(globalVar, socket, chartModule) {
        this.globalVar = globalVar;
        this.socket = socket;
        this.chartModule = chartModule;
        this.hours = 192;
    }
    ChartComponent.prototype.saveInstance = function (chartInstance) {
        this.globalVar.user.chart = chartInstance;
    };
    ChartComponent.prototype.getTempHistory = function (hours) {
        this.globalVar.activeUser.chartHour = hours;
        this.socket.emit('variables:chart', { user: this.globalVar.activeUser.id, hours: hours });
        this.globalVar.user.chart.showLoading();
    };
    ChartComponent.prototype.ngOnInit = function () { };
    return ChartComponent;
}());
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        styles: [__webpack_require__("../../../../../src/app/chart/chart.component.css")],
        template: __webpack_require__("../../../../../src/app/chart/chart.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* SocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__["ChartModule"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__["ChartModule"]) === "function" && _c || Object])
], ChartComponent);

var _a, _b, _c;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sliderText{\n\tmargin:0 0;\n}\nbutton{\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<!--<div class=\"card-header\">-->\n\t<!--</div>-->\n\t<div class=\"card-block\">\n\t\t<h3>Chat</h3>\n\t\t<ul class=\"list-group\" style=\"max-height:230px; overflow:auto;\">\n\t\t\t<li class=\"m-0\" *ngFor=\"let message of globalVar.user.chatMessages\">\n                <p class=\"sliderText\" id=\"{{message.time}}\">\n                    <span id=\"italic\" title=\"{{message.time | date:'HH:mm'}}\">{{message.time | date:'d. MMM'}}:</span> {{message.author}}:\n\t\t\t\t    <span *ngIf=\"message.type == '1'\">\n                        {{message.message}}\n\t\t\t\t    </span>\n                    <span *ngIf=\"message.type == '2'\">\n                        <a target=\"_blank\" href=\"{{message.message}}\">{{message.message}}</a>\n                    </span>\n                </p>\n            </li>\n\t\t\t<li class=\"\" *ngIf=\"!globalVar.user.moreMessagesAvailable\">\n\t\t\t\t<div class=\"alert-sm alert-info\" role=\"alert\">Keine weiteren Nachrichten verfügbar!</div>\n\t\t\t</li>\n\t\t\t<li class=\"\" *ngIf=\"globalVar.user.moreMessagesAvailable\">\n\t\t\t\t<div class=\"alert-sm alert-info\" role=\"alert\">\n\t\t\t\t\t<a class=\"alert-link\" (click) = \"loadOldMessages()\" >ältere Nachrichten Laden</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<br>\n\t\t<form style=\"text-align:right;\">\n\t\t\t<input type=\"text\" class=\"form-control\"\tname=\"message\"\tid=\"message\" \t[(ngModel)]=\"message\" placeholder=\"Neue Nachricht eingeben\" >\n\t\t\t<br>\n            <div class=\"btn-group btn-group-sm\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"type\">\n                <label ngbButtonLabel class=\"btn-secondary\">\n                    <input ngbButton type=\"radio\" [value]=\"1\"> Text\n                </label>\n                <label ngbButtonLabel class=\"btn-secondary\">\n                    <input ngbButton type=\"radio\" value=\"2\"> Link\n                </label>\n            </div>\n            <label class=\"btn-group btn-group-sm\">\n                <button class=\"btn btn-secondary btn-sm\" (click)=\"save()\">Senden</button>\n            </label>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = (function () {
    function ChatComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
        /*  message = {
            time:"",
            content:"",
            author:"",
            message:"",
            name:"",
          };*/
        this.type = 1;
    }
    ChatComponent.prototype.save = function () {
        if (this.message == "") {
            return;
        }
        this.socket.emit("messages:add", {
            user: { name: this.globalVar.activeUser.name },
            add: {
                message: this.message,
                type: this.type
            }
        });
        this.message = "";
        this.type = 1;
    };
    ChatComponent.prototype.loadOldMessages = function () {
        this.socket.emit('messages:loadOld', this.globalVar.user.chatMessages[this.globalVar.user.chatMessages.length - 1].time);
    };
    ChatComponent.prototype.ngOnInit = function () { };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
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
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/countdowns/countdowns.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul, ol{\n    list-style-type: none;\n    padding: 0px;\n    margin:0px;\n    list-style-type: none;\n}\ninput[type=\"range\"]{\n\tborder-radius: 4px;\n}\ninput[type=\"range\"]:hover{\n\tcursor:pointer;\n    height: 40px;\n}\n.btn{\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/countdowns/countdowns.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <!--<div class=\"card-header\">-->\n    <!--</div>-->\n    <div class=\"card-block\">\n        <h3>Countdowns</h3>\n        <ul class=\"list-group\" style=\"max-height:230px; overflow:auto;\">\n            <li class=\"list-group-item d-flex justify-content-start\" *ngFor=\"let countdown of globalVar.user.countdowns | ObjNgFor\">\n                <span>{{countdown.device.name}} ({{countdown.device.Raum}}) um {{countdown.time | date:'HH:mm'}} {{countdown.status ? countdown.device.buttonLabelOn :  countdown.device.buttonLabelOff}}</span>\n                <button class=\"btn btn-sm btn-danger ml-auto\" (click)=\"remove(countdown)\" >Löschen</button>\n                \n            </li>\n            <li class=\"list-group-item list-group-item-info\" *ngIf=\"globalVar.user.countdowns | isEmpty\">\n                Keine Countdowns gesetzt\n            </li>\n        </ul>\n        <form style=\"text-align:right;\" [formGroup]=\"myForm\" (ngSubmit)=\"add(myForm.value, myForm.valid)\">\n            <br>\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">Gerät</span>\n                <select\n                    class=\"form-control\"\n                    formControlName=\"device\"\n                    aria-describedby=\"btnGroupAddon\">\n                    <option value=\"\">Wähle ein Gerät</option>\n                    <option *ngFor=\"let value of globalVar.user.devicelist | ObjNgFor\" [ngValue]=\"value\">{{value.name}} ({{value.Raum}})</option>\n                </select>\n            </div>\n            <br>\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">Minuten: {{myForm.value.time}}</span>\n                <input\n                    formControlName=\"time\"\n                    style=\"width:calc(100% - 17px); height:40px;\"\n                    type=\"range\"\n                    min=\"1\"\n                    max=\"180\"\n                    class=\"form-control\"\n                    aria-describedby=\"btnGroupAddon2\">\n            </div>\n            <br>\n            <div class=\"btn-group btn-group-sm\" ngbRadioGroup name=\"radioBasic\" formControlName=\"status\">\n                <label ngbButtonLabel class=\"btn-secondary\">\n                    <input ngbButton type=\"radio\" [value]=\"1\"> An\n                </label>\n                <label ngbButtonLabel class=\"btn-secondary\">\n                    <input ngbButton type=\"radio\" [value]=\"0\"> Aus\n                </label>\n            </div>\n            <label class=\"btn-group btn-group-sm\">\n                <button type=\"submit\" class=\"btn btn-secondary \">Speichern</button>\n            </label>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/countdowns/countdowns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountdownsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountdownsComponent = (function () {
    function CountdownsComponent(socket, globalVar, _fb) {
        this.socket = socket;
        this.globalVar = globalVar;
        this._fb = _fb;
    }
    // devicelist;
    CountdownsComponent.prototype.ngOnInit = function () {
        this.socket.emit('devices:devicelist', "");
        this.myForm = this._fb.group({
            time: [2],
            device: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            status: 0
        });
    };
    CountdownsComponent.prototype.add = function (countdown, valid) {
        if (valid) {
            console.log(this.globalVar.activeUser);
            countdown.user = this.globalVar.activeUser.name;
            this.socket.emit("countdowns:add", { user: this.globalVar.activeUser, add: countdown });
        }
    };
    CountdownsComponent.prototype.remove = function (data) {
        console.log(data);
        this.socket.emit("countdowns:remove", { user: this.globalVar.activeUser, remove: data });
    };
    return CountdownsComponent;
}());
CountdownsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-countdowns',
        template: __webpack_require__("../../../../../src/app/countdowns/countdowns.component.html"),
        styles: [__webpack_require__("../../../../../src/app/countdowns/countdowns.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object])
], CountdownsComponent);

var _a, _b, _c;
//# sourceMappingURL=countdowns.component.js.map

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<p>Simple datepicker</p>\n\n<ngb-datepicker #dp [(ngModel)]=\"uff\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n<hr/>\n\n<button class=\"btn btn-sm btn-outline-primary\" (click)=\"selectToday()\">Select Today</button>\n<button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo()\">To current month</button>\n<button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n\n<hr/>\n<pre>Month: {{ date.month }}.{{ date.year }}</pre>\n<pre>Model: {{ uff | json }}</pre>\n\n\n\n<ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n<hr>\n<pre>Selected time: {{time | json}}</pre>"

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdDatepickerBasic; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var now = new Date();
var NgbdDatepickerBasic = (function () {
    function NgbdDatepickerBasic() {
    }
    NgbdDatepickerBasic.prototype.selectToday = function () {
        this.uff = { "year": now.getFullYear(), "month": now.getMonth() + 1, "day": 4 };
        /*this.date.navigateTo({ year: now.getFullYear(), month: now.getMonth() + 1 });*/
    };
    return NgbdDatepickerBasic;
}());
NgbdDatepickerBasic = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-datepicker-basic',
        template: __webpack_require__("../../../../../src/app/datepicker/datepicker.component.html")
    })
], NgbdDatepickerBasic);

/*import {Component} from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-tabset-preventchange',
  templateUrl: './tabset-preventchange.html'
})
export class NgbdTabsetPreventchange {
    public beforeChange($event: NgbTabChangeEvent) {
      if ($event.nextId === 'tab-preventchange2') {
        $event.preventDefault();
      }
    };
}*/
//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/device/device.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnOn{\n\tbackground-color:#c0ffc0;\n\t/*width: 25%;*/\n}\n.btnOff{\n\tbackground-color:#ffc0c0;\n\t/*width: 25%;*/\n}\n.material-icons{\n    font-size: 20px;\n}\nbutton{\n\theight: 45px;\n\tcursor:pointer;\n\tmargin:2px 5px 2px 0px;\n\twidth:80px;\n\t/*min-width:100px;*/\n\tbox-sizing: initial;\n\tborder:0px;\n\tborder-radius:0px;\n\tpadding:0;\n}\n.devicename{\n\twhite-space: nowrap; \n\ttext-align: inherit;\n\tmargin: auto 0;\n\tcolor: #292b2c;\n}\n.buttonLabel{\n\twhite-space: nowrap;\n    /*text-overflow:ellipsis;*/\n    overflow:hidden;\n\tmargin: auto 0px;\n\twhite-space: nowrap; \n\ttext-align: inherit;\n}\n.test{\n\t-ms-flex-flow: row wrap;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t        flex-flow: row wrap;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device/device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShutterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DimmerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwitchButtonComponent = (function () {
    function SwitchButtonComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
    }
    SwitchButtonComponent.prototype.switchDevice = function (data) {
        this.socket.emit("devices:switch", { user: { name: this.globalVar.activeUser.name }, switch: data });
    };
    return SwitchButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwitchButtonComponent.prototype, "device", void 0);
SwitchButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-switch-button',
        styles: [__webpack_require__("../../../../../src/app/device/device.component.css")],
        template: __webpack_require__("../../../../../src/app/device/switch-button.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _b || Object])
], SwitchButtonComponent);

var ShutterComponent = (function () {
    function ShutterComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
    }
    ShutterComponent.prototype.switchDevice = function (data) {
        this.socket.emit("devices:switch", { user: { name: this.globalVar.activeUser.name }, switch: data });
    };
    return ShutterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShutterComponent.prototype, "device", void 0);
ShutterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-shutter',
        styles: [__webpack_require__("../../../../../src/app/device/device.component.css")],
        template: __webpack_require__("../../../../../src/app/device/shutter.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _d || Object])
], ShutterComponent);

var DimmerComponent = (function () {
    function DimmerComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
    }
    DimmerComponent.prototype.switchDevice = function (data) {
        this.socket.emit("devices:switch", { user: { name: this.globalVar.activeUser.name }, switch: data });
    };
    return DimmerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DimmerComponent.prototype, "device", void 0);
DimmerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-dimmer',
        styles: [__webpack_require__("../../../../../src/app/device/device.component.css")],
        template: __webpack_require__("../../../../../src/app/device/dimmer.html")
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* SocketService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _f || Object])
], DimmerComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=device.component.js.map

/***/ }),

/***/ "../../../../../src/app/device/dimmer.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"test d-flex justify-content-end\">\n\t<div class=\"mr-auto devicename\">{{device.name}}</div>\n    <div class=\"mr-1 devicename\">{{device.status * 100}}%</div>\n\t<div class=\"d-flex\" style=\"max-width:100%;\">\n\t\t<button\n            class=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 1})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n                100%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0.8})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t80%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0.6})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t60%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0.4})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t40%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0.2})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t20%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t0%\n\t\t\t</p>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/device/shutter.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"test d-flex justify-content-end\">\n\t<div class=\"mr-auto devicename\">{{device.name}}</div>\n    <div class=\"mr-1 devicename\">{{device.status == 0 ? 'geschlossen' : 'geöffnet'}}</div>\n\t<div class=\"d-flex\" style=\"max-width:100%;\">\n\t\t<button\n            class=\"btnGrey unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 1})\"\n\t\t\t>\n\t\t\t\t<!-- style=\"fill:#389B20\" -->\n\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t{{device.buttonLabelOn}}\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"btnGrey unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 'stop'})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\tStop\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"btnGrey unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t{{device.buttonLabelOff}}\n\t\t\t</p>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/device/switch-button.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"test d-flex justify-content-end\">\n\t<div class=\"mr-auto devicename\">{{device.name}}</div>\n\t<div class=\"d-flex\" style=\"max-width:100%;\">\n\t\t<button\n\t\t\tclass=\"btnOn unselectable d-flex justify-content-center\"\n            (click)=\"switchDevice({id: device.deviceid, status: 1})\"\n\t\t\t>\n            <i *ngIf=\"device.showStatus\" class=\"material-icons\" style=\"margin:auto 0; color:#4dad4d; size:10px\">check_box{{device.status == \"0\" ? \"_outline_blank\":\"\"}}</i>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t<!-- style=\"fill:#389B20\" -->\n\n\t\t\t\t{{device.buttonLabelOn}}\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"btnOff unselectable d-flex justify-content-center\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0})\"\n\t\t\t>\n            <i *ngIf=\"device.showStatus\" class=\"material-icons\" style=\"margin:auto 0; color:#fc6b6b;\">check_box{{device.status == \"0\" ? \"\":\"_outline_blank\"}}</i>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t{{device.buttonLabelOff}}\n\t\t\t</p>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/devices/devices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul, ol{\n\tlist-style-type: none;\n\tpadding: 0px;\n\tmargin:0px;\n\tlist-style-type: none;\n}\n.devicename{\n\twhite-space: nowrap; \n\ttext-align: inherit;\n    color: #292b2c;\n    text-overflow:ellipsis;\n    overflow:hidden;\n    cursor:pointer;\n    margin:auto auto auto 0 !important;\n}\n.btnRight{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.btnOn{\n\tbackground-color:#c0ffc0;\n\t/*width: 25%;*/\n}\n.btnOff{\n\tbackground-color:#ffc0c0;\n\t/*width: 25%;*/\n}\nbutton{\n\theight: 45px;\n\tcursor:pointer;\n    margin: 2px 5px 2px 0px;\n\twidth:80px;\n\tbox-sizing: initial;\n\tborder:0px;\n\tborder-radius:0px;\n\tpadding:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\">\n    <div class=\"card-block\">\n        <h3>Geräte</h3>\n        <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n            <ngb-panel id=\"{{room.room.id}}\" *ngFor=\"let room of globalVar.user.devices | ObjNgFor\">\n                <ng-template ngbPanelTitle>\n                        <div class=\"d-flex justify-content-end\">\n                            <div class=\"devicename\">\n                                    {{room.room.name}}\n                            </div>\n                            <div class=\"btnRight\">\n                                <button  class=\"btnOn unselectable\" id=\"btnOn{{room.id}}\"  (click)='switchRoom($event, {\"room\":room.room,\"status\":\"1\"})' >An</button>\n                                <button class=\"btnOff unselectable\" id=\"btnOff{{room.id}}\" (click)='switchRoom($event, {\"room\":room.room,\"status\":\"0\"})' >Aus</button>\n                            </div>\n                        </div>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                        <ul class=\"list-group\">\n                            <div\n                                class=\"\" \n                                *ngFor=\"let device of room.roomdevices| ObjNgFor\"\n                                [ngSwitch]=\"device.protocol\"\n                            >\n                                <div *ngSwitchCase=\"'onewire'\"></div>\n                                <app-shutter *ngSwitchCase=\"'homegear:shutter'\" [device]=\"device\"></app-shutter>\n                                <app-switch-button *ngSwitchDefault [device]=\"device\"></app-switch-button>\n                            </div>\n                        </ul>\n                </ng-template>\n            </ngb-panel>\n        </ngb-accordion>\n    </div>\n</div> -->\n<div id=\"accordion\">\n\t<h3>\n\t\tGeräte\n\t</h3>\n\t<div class=\"card mb-1\" *ngFor=\"let room of globalVar.user.devices | ObjNgFor\">\n\t\t<div class=\"card-header pl-1 pr-0 py-0\">\n\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t<a (click)=\"room.room.isCollapsed = !room.room.isCollapsed\"\n                    [attr.aria-expanded]=\"!room.room.isCollapsed\" aria-controls=\"collapseExample\" class=\"devicename\">\n\t\t\t\t\t{{room.room.name}}\n                </a>\n\t\t\t\t<div class=\"\">\n                    <button class=\"btnOn\" id=\"btnOn{{room.room.id}}\" (click)='switchRoom($event, {\"room\":room.room,\"status\":\"1\"})' >An</button><button class=\"btnOff\" id=\"btnOff{{room.room.id}}\" (click)='switchRoom($event, {\"room\":room.room,\"status\":\"0\"})' >Aus</button>\n\t\t\t\t</div>\n            </div>\n\t\t</div>\n\t\t<div id=\"collapse{{room.room.id}}\" [ngbCollapse]=\"room.room.isCollapsed\" class=\"card-block collapse py-0 pl-1 pr-0\">\n\t\t\t<ul class=\"list-group list-group-flush\">\n                <li\n                    class=\"\" \n                    *ngFor=\"let device of room.roomdevices| ObjNgFor\"\n                    [ngSwitch]=\"device.protocol\"\n                >\n                    <div *ngSwitchCase=\"'onewire'\"></div>\n                    <app-dimmer *ngSwitchCase=\"'homegear:dimmer'\" [device]=\"device\"></app-dimmer>\n                    <app-shutter *ngSwitchCase=\"'homegear:shutter'\" [device]=\"device\"></app-shutter>\n                    <app-switch-button *ngSwitchDefault [device]=\"device\"></app-switch-button>\n                </li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ObjNgFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObjNgFor = (function () {
    function ObjNgFor() {
    }
    ObjNgFor.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        if (value) {
            return Object.keys(value).map(function (key) { return value[key]; });
        }
        else {
            return;
        }
    };
    return ObjNgFor;
}());
ObjNgFor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ObjNgFor', pure: false })
], ObjNgFor);

/*
@Pipe({ name: 'TimerTime',  pure: false })
export class TimerTime implements PipeTransform {
    transform(value: any, args: any[] = null): string {
        if(value.time == "sunset"|| value.time == "sunrise"){
            if(value.time == "sunrise"){
                var data = "Sonnenaufgang";
            }else{
                var data = "Sonnenuntergang";
            }
            if(value.offset.active){
                if(value.offset.after){
                    var offset = "nach ";
                }else{
                    var offset = "vor ";
                }
                if(value.offset.random){
                    // Zwischen 2 und 5 Minuten nach/vor data;
                    return value.offset.min + "-" + value.offset.max + " Minuten " + offset + data;
                }else{
                    return value.offset.minutes + " Minuten " + offset + data;
                }
            }else{
                return "Zum " + data;
            }
        }else{
            if(value.offset.active){
                if(value.offset.after){
                    var offset = "nach ";
                }else{
                    var offset = "vor ";
                }
                if(value.offset.random){
                    // Zwischen 2 und 5 Minuten nach/vor data;
                    return value.offset.min + "-" + value.offset.max + " Minuten " + offset + data;
                }else{
                    return value.offset.minutes + " Minuten " + offset + data;
                }
            }else{
                return "Um " + value.time + "h";
            }
        }
    }
}*/
var isEmpty = (function () {
    function isEmpty() {
    }
    isEmpty.prototype.transform = function (value, args) {
        var result = true;
        for (var bar in value) {
            if (value.hasOwnProperty(bar)) {
                result = false;
            }
        }
        if (args) {
            return !result;
        }
        else {
            return result;
        }
    };
    return isEmpty;
}());
isEmpty = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'isEmpty', pure: false })
], isEmpty);

var DevicesComponent = (function () {
    function DevicesComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
    }
    DevicesComponent.prototype.ngOnInit = function () {
        this.socket.emit('devices:get', "");
    };
    DevicesComponent.prototype.switchRoom = function (event, data) {
        event.preventDefault();
        this.socket.emit("rooms:switch", { switch: data });
        event.stopPropagation();
    };
    return DevicesComponent;
}());
DevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-devices',
        template: __webpack_require__("../../../../../src/app/devices/devices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/devices/devices.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _b || Object])
], DevicesComponent);

var _a, _b;
//# sourceMappingURL=devices.component.js.map

/***/ }),

/***/ "../../../../../src/app/favorit-devices/favorit-devices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorit-devices/favorit-devices.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Favoriten</h3>\n<ul *ngIf=\"globalVar.user.favoritDevices.length > 0\" class=\"list-group\">\n    <div\n        *ngFor=\"let device of globalVar.user.favoritDevices\"\n        [ngSwitch]=\"device.protocol\"\n    >\n        <div *ngSwitchCase=\"'onewire'\"></div>\n        <app-dimmer *ngSwitchCase=\"'homegear:dimmer'\" [device]=\"device\"></app-dimmer>\n        <app-shutter *ngSwitchCase=\"'homegear:shutter'\" [device]=\"device\"></app-shutter>\n        <app-switch-button *ngSwitchDefault [device]=\"device\"></app-switch-button>\n    </div>\n</ul>\n<div *ngIf=\"globalVar.user.favoritDevices.length == 0\" role=\"alert\" class=\"alert alert-info\">\n    Noch keine Favoriten in den <a href=\"/settings/#/user\" class=\"alert-link\">Einstellungen</a> gewählt.\n</div> "

/***/ }),

/***/ "../../../../../src/app/favorit-devices/favorit-devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritDevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritDevicesComponent = (function () {
    function FavoritDevicesComponent(globalVar) {
        this.globalVar = globalVar;
    }
    return FavoritDevicesComponent;
}());
FavoritDevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-favorit-devices',
        template: __webpack_require__("../../../../../src/app/favorit-devices/favorit-devices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/favorit-devices/favorit-devices.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _a || Object])
], FavoritDevicesComponent);

var _a;
//# sourceMappingURL=favorit-devices.component.js.map

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul, ol{\n\tlist-style-type: none;\n\tpadding: 0px;\n\tmargin:0px;\n\tlist-style-type: none;\n}\n.devicename{\n\twhite-space: nowrap; \n\ttext-align: inherit;\n    color: #292b2c;\n    text-overflow:ellipsis;\n    overflow:hidden;\n    cursor:pointer;\n    margin:auto auto auto 0 !important;\n}\n.btnRight{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.btnOn{\n\tbackground-color:#c0ffc0;\n\t/*width: 25%;*/\n}\n.btnOff{\n\tbackground-color:#ffc0c0;\n\t/*width: 25%;*/\n}\nbutton{\n\theight: 45px;\n\tcursor:pointer;\n\tmargin:2px 1px 2px 0px;\n\tmin-width:70px;\n\tbox-sizing: initial;\n\tborder:0px;\n\tborder-radius:0px;\n\tpadding:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-block\">\n        <h3>Gruppen</h3>\n        <ul>\n            <li *ngFor=\"let group of globalVar.user.groups | ObjNgFor\">\n                <div class=\"d-flex justify-content-end\">\n                <div class=\"devicename\">\n                    {{group.name}}\n                </div>\n                <div class=\"btnRight\">\n                    <button class=\"btnOn buttonM\" (click)='switchGroup($event, {\"group\":group,\"status\":\"1\"})' >An</button>\n                    <button class=\"btnOff buttonM\" (click)='switchGroup($event, {\"group\":group,\"status\":\"0\"})' >Aus</button>\n                </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsComponent = (function () {
    // @Input() groups: any;
    function GroupsComponent(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
    }
    GroupsComponent.prototype.switchGroup = function (event, data) {
        event.preventDefault();
        console.log("Raum schalten!");
        this.socket.emit("groups:switch", { switch: data });
        event.stopPropagation();
    };
    return GroupsComponent;
}());
GroupsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-groups',
        template: __webpack_require__("../../../../../src/app/groups/groups.component.html"),
        styles: [__webpack_require__("../../../../../src/app/groups/groups.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _b || Object])
], GroupsComponent);

var _a, _b;
//# sourceMappingURL=groups.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-columns {\n    -webkit-column-count: 2;\n    column-count: 2;\n    -webkit-column-gap: 1rem;\n    column-gap: 1rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-columns\">\n     <app-chart></app-chart>\n     <app-groups></app-groups>\n    <app-chat></app-chat>\n    <app-variables></app-variables>\n    <app-countdowns></app-countdowns>\n    <app-timers></app-timers> \n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>One fine body&hellip;</p>\n    <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n    <hr>\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\n\n<hr>\n\n<pre>{{closeResult}}</pre>\n\n"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdModalBasic; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasic = (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return NgbdModalBasic;
}());
NgbdModalBasic = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-modal-basic',
        template: __webpack_require__("../../../../../src/app/modal/modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object])
], NgbdModalBasic);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/timer-header/timer-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inactiveTimer{\n    color:#ffc0c0;\n}\n.activeTimer{\n    color:lightgreen;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timer-header/timer-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-end\">\n    <div title=\"Zuletzt ausgeführt: {{timer.lastexec | date:'EEE, d. MMM., HH:mm'}}\" class=\"devicename\" (click)=\"timer.isCollapsed = !timer.isCollapsed\"\n          [attr.aria-expanded]=\"!timer.isCollapsed\" style=\"text-overflow:ellipsis; overflow:hidden;cursor:pointer; margin:auto auto auto 0 !important;\">\n        {{timer.name}}\n    </div>\n    <div style=\"display: flex;\">\n        <i class=\"material-icons\" [ngClass]=\"{'activeTimer': timer.active == 'true', 'inactiveTimer': timer.active =='false'}\" title=\"Aktivieren/Deaktivieren\" (click)=\"$event.preventDefault();switchTimer(timer);$event.stopPropagation();\">notifications{{timer.active == \"true\" ? \"\" : \"_off\"}}</i>\n        <i class=\"material-icons\" style=\"color:#666;\"  title=\"Bearbeiten\" (click)=\"$event.preventDefault();editTimer(timer.id);$event.stopPropagation();\">mode_edit</i> \n        <ng-template #popContent>\n            <button class=\"btn btn-danger\" (click)=\"$event.preventDefault();removeTimer(timer);$event.stopPropagation();\">Löschen</button>\n            <button class=\"btn btn-success\" (click)=\"$event.preventDefault();p.close();$event.stopPropagation();\">Abbrechen</button>\n        </ng-template> \n        <i class=\"material-icons\" style=\"color:#FF8000;\" title=\"Löschen\" container=\"body\" #p=\"ngbPopover\" [ngbPopover]=\"popContent\" placement=\"left\" popoverTitle=\"Willst du den Timer wirklich löschen?\">delete</i>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/timer-header/timer-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimerHeaderComponent = (function () {
    function TimerHeaderComponent(router, globalVar, socket) {
        this.router = router;
        this.globalVar = globalVar;
        this.socket = socket;
    }
    TimerHeaderComponent.prototype.ngOnInit = function () {
        this.timer.isCollapsed = true;
    };
    TimerHeaderComponent.prototype.switchTimer = function (data) {
        if (data.active == "true") {
            data.active = "false";
        }
        else {
            data.active = "true";
        }
        this.socket.emit('timers:switch', { user: this.globalVar.activeUser, switch: data });
    };
    TimerHeaderComponent.prototype.removeTimer = function (data) {
        this.socket.emit('timers:remove', { user: this.globalVar.activeUser, remove: data });
    };
    TimerHeaderComponent.prototype.editTimer = function (id) {
        this.router.navigate(['/editTimer', id]);
    };
    return TimerHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TimerHeaderComponent.prototype, "timer", void 0);
TimerHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer-header',
        template: __webpack_require__("../../../../../src/app/timer-header/timer-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/timer-header/timer-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* SocketService */]) === "function" && _c || Object])
], TimerHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=timer-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/timer-show/timer-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.grey{\n\tcolor:#bbb;\n}\n.green{\n\tcolor:green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timer-show/timer-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\n    <div class=\"card-header\">\n        <app-timer-header [timer]=\"timer\"></app-timer-header>\n    </div>\n    <div class=\"card-block\" [ngbCollapse]=\"timer.isCollapsed\">\n        <div class=\"card\" *ngIf=\"timer.variables != false\">\n            <div class=\"card-header\">\n                Variablen/Events\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <div *ngFor=\"let variable of timer.variables | ObjNgFor\">\n                    <div *ngFor=\"let variab of variable\">\n                        <li class=\"list-group-item\">\n                            Löse aus sobald die Variable {{variab.id}} {{variab.mode}} {{variab.value}}\n                        </li>\n                    </div>\n                </div>\n            </ul>\n        </div>\n        <br>\n        <div class=\"card\" *ngIf=\"timer.conditions != false\">\n            <div class=\"card-header\">\n                Bedingungen\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\" *ngFor=\"let con of timer.conditions\" [ngSwitch]=\"con.type\">\n                    <div *ngSwitchCase=\"'random'\">Zufällig zwischen {{con.start.hour}}:{{con.start.minute}}h und {{con.stop.hour}}:{{con.stop.minute}}h</div>\n                    <div *ngSwitchCase=\"'time'\">Um {{con.time.hour}}:{{con.time.minute}}h</div>\n                    <div *ngSwitchCase=\"'range'\">Zwischen {{con.start.hour}}:{{con.start.minute}}h und {{con.stop.hour}}:{{con.stop.minute}}h</div>\n                    <div *ngSwitchCase=\"'variable'\">Wenn der Wert der Variablen {{con.id}} {{con.mode}} {{con.value}} ist</div>\n                    <div *ngSwitchCase=\"'sun'\">\n                        {{con.sun == \"sunset\" ? \"Sonnenuntergang\" : \"Sonnenaufgang\"}}\n                        <div *ngIf=\"con.offset.active\">{{con.offset.minutes}} {{con.offset.random}}{{con.offset.after}} {{con.offset.min}} {{con.offset.max}}</div> \n                    </div>\n                    <div *ngSwitchCase=\"'weekdays'\">\n                        <span [ngClass]='day ? \"green\" :  \"grey\"'  *ngFor=\"let day of con.weekdays; index as i;\">\n                            {{weekdays[i]}}\n                        </span>\n                    </div>\n                    <div *ngSwitchDefault>{{con | json}}</div>\n                </li>\n            </ul>\n        </div>\n        <br>\n        <div class=\"card\" *ngIf=\"timer.actions != false\">\n            <div class=\"card-header d-flex justify-content-between\">\n                Aktionen\n                <i (click)='switchAll(\"timers\", timer)' title=\"Aktionen zum testen jetzt ausführen!\" class=\"material-icons\">play_circle_outline</i>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item justify-content-start\" *ngFor=\"let act of  timer.actions; index as i;\" [ngSwitch]=\"act.type\">\n                    <div *ngSwitchCase=\"'device'\">{{act.action.name}}({{act.action.Raum}}) {{act.switchstatus == \"1\" ? act.action.buttonLabelOn : act.action.buttonLabelOff}}</div>\n                    <div *ngSwitchCase=\"'group'\">{{act.action.name}}({{act.action.user}}) {{act.switchstatus == \"1\" ? \"Ein\" : \"Aus\"}}</div>\n                    <div *ngSwitchCase=\"'alert'\">\n                        <div class=\"w-100\">\n                                Titel: {{act.action.title}}\n                        </div>\n                        <small class=\"mb-1\">\n                            Nachricht: {{act.action.message}}\n                        </small>\n                        <small class=\"mb-1\">\n                            Type: {{act.action.type}}\n                        </small>\n                        <small class=\"mb-1\">\n                            Benutzer: {{act.action.user}}\n                        </small>\n                        <small class=\"mb-1\" ng-show=\"action.activeTimeout\">\n                            Timeout: {{act.timeout}} Sekunden\n                        </small>\n                    </div>\n                    <div *ngSwitchCase=\"'setVariable'\">\n                        Variable {{act.action.name}}({{act.action.id}}) auf {{act.action.status}}setzen\n                    </div>\n                    <div *ngSwitchCase=\"'room'\">Raum {{act.action.room.name}} {{act.switchstatus == \"1\" ? \"Ein\" : \"Aus\"}}</div>\n                    <div *ngSwitchCase=\"'url'\">\n                        {{act.action.url}}<br>\n                        <small class=\"mb-1\" *ngIf=\"act.timeout > 0\">\n                            Timeout: {{act.timeout}} Sekunden\n                        </small>\n                    </div>\n                    <div  *ngSwitchDefault>{{act.type}}:{{act | json}}</div>\n                    <div class=\"ml-auto\" *ngIf=\"act.offset.active\">\n                        <span *ngIf=\"act.offset.random\">\n                            zufällig zwischen {{act.offset.min}} und {{act.offset.max}} Minuten\n                        </span>\n                        <span *ngIf=\"!act.offset.random\">\n                            {{act.offset.minutes}} Minuten\n                        </span>\n                        {{act.offset.after ? 'später': 'früher'}}\n                    </div>\n                    <div class=\"ml-auto\" *ngIf=\"act.activeInterval\">\n                        jede {{act.number}} {{act.unit}}\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/timer-show/timer-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerShowComponent = (function () {
    function TimerShowComponent(globalVar, socket) {
        this.globalVar = globalVar;
        this.socket = socket;
        this.weekdays = [
            "Sonntag",
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag"
        ];
        this.switchAll = function (type, data) {
            this.socket.emit(type + ':switchAll', { user: this.globalVar.activeUser, switchAll: data });
        };
    }
    return TimerShowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TimerShowComponent.prototype, "timer", void 0);
TimerShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer-show',
        template: __webpack_require__("../../../../../src/app/timer-show/timer-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/timer-show/timer-show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_app_service_global__["a" /* GlobalObjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_service__["a" /* SocketService */]) === "function" && _b || Object])
], TimerShowComponent);

var _a, _b;
//# sourceMappingURL=timer-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/timers/timers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inactiveTimer{\n    color:#ffc0c0;\n}\n.activeTimer{\n    color:lightgreen;\n}\n.ngbPanelTitle:hover{\n    text-decoration: none!important;\n    cursor: unset!important;\n}\na:active, a:hover{\n    text-decoration: none!important;\n    cursor: unset!important;\n}\n.card-header a:hover{\n    text-decoration: none!important;\n}\n.accordion-toggle, .accordion-toggle:hover{\n    color:red;\n    text-decoration: inherit;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timers/timers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"margin-bottom: .75rem;\">\n    <div class=\"card-block\">\n        <div class=\"d-flex justify-content-between\">\n            <h3>Timer</h3>\n            <i class=\"material-icons\" title=\"Hinzufügen\" (click)=\"addTimer()\">add_alert</i>\n        </div>\n        <app-timer-show [timer]=\"timer\" *ngFor=\"let timer of globalVar.user.timers | ObjNgFor\"></app-timer-show> \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/timers/timers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimersComponent = (function () {
    function TimersComponent(router, globalVar) {
        this.router = router;
        this.globalVar = globalVar;
    }
    TimersComponent.prototype.addTimer = function () {
        this.router.navigate(['/editTimer']);
    };
    return TimersComponent;
}());
TimersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timers',
        template: __webpack_require__("../../../../../src/app/timers/timers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/timers/timers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _b || Object])
], TimersComponent);

var _a, _b;
//# sourceMappingURL=timers.component.js.map

/***/ }),

/***/ "../../../../../src/app/variables/variables.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul, ol{\n\tlist-style-type: none;\n\tpadding: 0px !important;\n\tmargin:0px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/variables/variables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-block\">\n        <h3>Info</h3>\n        <ul>\n            <li *ngFor=\"let variable of globalVar.user.favoritVariables | ObjNgFor\">\n                <p class=\"d-flex justify-content-between\">\n                    <span class=\"\">\n                        {{variable.name}}\n                    </span>\n                    <span title=\"{{variable.lastChange | date:'EEE, d. MMM., HH:mm'}}\">\n                        {{variable.status}}{{variable.suffix}}\n                    </span>\n                </p>\n            </li>\n            <li *ngIf=\"globalVar.user.favoritVariables | isEmpty\" role=\"alert\" class=\"alert alert-info\">\n                Du hast noch keine Variablen zur Anzeige ausgewählt! Füge sie deinem Benutzer in den <a href=\"/settings/#/user\" class=\"alert-link\">Einstellungen</a> hinzu. \n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/variables/variables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service_global__ = __webpack_require__("../../../../../src/app/app.service.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VariablesComponent = (function () {
    function VariablesComponent(globalVar, socket) {
        this.globalVar = globalVar;
        this.socket = socket;
    }
    VariablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on("variables", function (data) {
            switch (data.type) {
                case "edit":
                    if (_this.globalVar.user.favoritVariables[data.edit.id]) {
                        _this.globalVar.user.favoritVariables[data.edit.id] = data.edit;
                    }
                    break;
                default:
                    break;
            }
        });
    };
    return VariablesComponent;
}());
VariablesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-variables',
        template: __webpack_require__("../../../../../src/app/variables/variables.component.html"),
        styles: [__webpack_require__("../../../../../src/app/variables/variables.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service_global__["a" /* GlobalObjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* SocketService */]) === "function" && _b || Object])
], VariablesComponent);

var _a, _b;
//# sourceMappingURL=variables.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/purty_wood.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "purty_wood.ec97f70d8dbd2d7a6291.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map