(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/active-devices/active-devices.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/active-devices/active-devices.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppActiveDevicesActiveDevicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3>Aktive Geräte</h3>\n<ul class=\"list-group\">\n  <li class=\"\" *ngFor=\" let device of globalVar.user.active;\">\n    {{device.name}}({{device.room}})\n  </li>\n  <li *ngIf=\"globalVar.user.active.length == 0\">\n    Keine aktiven Geräte\n  </li>\n</ul>\n<button class=\"btnOn buttonL\" (click)='switchAll(\"1\")'>Alle ein</button>\n<button class=\"btnOff buttonL\" (click)='switchAll(\"0\")'>Alle aus</button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/alerts/alerts.component.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alerts/alerts.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAlertsAlertsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"globalVar.user.alerts | isEmpty:true\" class=\"alerts w-100 d-flex justify-content-end\">\n    <ul>\n        <li *ngFor=\"let alert of globalVar.user.alerts | ObjNgFor\" (click)=\"remove(alert)\">\n            <div class=\"card bg-{{alert.messageType}}\">\n                <div class=\"card-header d-flex justify-content-between\">\n                    <span class=\"card-text\">\n                        {{alert.title}}\n                    </span>\n                    <p class=\"pull-right card-text\">\n                        {{alert.date | date:'dd.MMM., H:mm'}}\n                    </p>\n                </div>\n                <p class=\"card-body card-text text-xs-center\">\n                    {{alert.message}}\n                </p>\n            </div>\n        </li>\n    </ul>\n    <div class=\"p-2 ml-auto d-flex justify-content-end fixed-bottom\">\n        <!-- <button class=\"btn btn-success\" (click)=\"removeAll()\">\n            Alle Entfernen\n        </button> -->\n        <i class=\"material-icons md-62\" style=\"color:#ff8000\" title=\"Alle Alerts entfernen\" (click)=\"removeAll()\">delete</i>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<div (window:keydown)=\"onKey($event)\">--><!-- #ddf -->\n<nav class=\"navbar navbar-light bg-faded fixed-top navbar-expand-lg\" style=\"background-color: #bee5eb;\" >\n    <a class=\"navbar-brand pointer\" (click)=\"toogleFav(showFav)\" title=\"Favoritenliste ein- ausblenden\">\n        <img src=\"./assets/icon.svg\" width=\"40\" height=\"40\" alt=\"Icon\">\n    </a>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"nav-link-active\">\n                    <i class=\"material-icons\">home</i>Home\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"devices\" routerLinkActive=\"nav-link-active\">\n                    <!-- <i class=\"material-icons\">power_settings_new</i> -->\n                    <!-- <i class=\"material-icons\">touch_app</i> -->\n                    <i class=\"material-icons\">power</i>\n                    Geräte\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"timers\" routerLinkActive=\"nav-link-active\">\n                    <i class=\"material-icons\">alarm</i>\n                    Timer\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"chart\" routerLinkActive=\"nav-link-active\">\n                    <i class=\"material-icons\">bar_chart</i>\n                    Chart\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"chat\" routerLinkActive=\"nav-link-active\">\n                    <i class=\"material-icons\">bar_chart</i>\n                    Chat\n                </a>\n            </li>\n            <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"chat\">Chat</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"modal\">Modal</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"date\">Datepicker</a>\n                </li> -->\n        </ul>\n            <span dropdown>\n                <i class=\"material-icons\" id=\"basic-link\" dropdownToggle (click)=\"false\" aria-controls=\"basic-link-dropdown\">account_circle</i>\n                <ul id=\"basic-link-dropdown\" *dropdownMenu class=\"dropdown-menu  dropdown-menu-right\" role=\"menu\" aria-labelledby=\"basic-link\">\n                    <li class=\"px-3\">Eingeloggt als {{globalVar.activeUser.name}}</li>\n                    <li class=\"divider dropdown-divider\"></li>\n                    <li class=\"px-3\">Anmelden als:</li>\n                    <li *ngFor=\"let user of users; index as i;\" (click)=\"setUser(user)\">\n                        <a class=\"dropdown-item pointer\" *ngIf=\"user.name != globalVar.activeUser.name\" style=\"display: flex;\">\n                            <i class=\"material-icons\">person</i>{{user.name}}\n                        </a>\n                    </li>\n                </ul>\n            </span>\n    </div>\n</nav>\n<div class=\"favorittile\" *ngIf=\"showFav\">\n    <app-favorit-devices></app-favorit-devices>\n    <app-active-devices></app-active-devices>\n</div>\n<app-alerts class=\"w-100\"></app-alerts>\n<div class=\"content\" [class.favoritmenu]=\"showFav\">\n    <router-outlet></router-outlet>\n</div>\n<div class=\"bg\" [style.background-image]=\"'url(' + globalVar.activeUser.background + ')'\"></div>\n<div class=\"loaderBg\" *ngIf=\"globalVar.loading\">\n    <div class=\"loader\">\n        <div class=\"inner mx-auto\">\n            <div class=\"outer\"></div>\n        </div>\n        <p class=\"\">Verbinde zum Server...</p>\n    </div>\n</div>\n<!--<div class=\"loaderBg\">\n    <div class=\"loader card\">\n        <div class=\"card-header\">\n        <p class=\"\">Verbinde zum Server...</p>\n        </div>\n        <div class=\"card-block\">\n        <div class=\"outer\">\n            <div class=\"inner\"></div>\n        </div>\n        </div>\n    </div>\n    </div>-->\n<!--</div>-->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/chart/chart.component.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chart/chart.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppChartChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body test d-flex justify-content-end\">\n        \n        <h3 class=\"mr-auto\">Chart</h3>\n        <div class=\"\">\n            <div class=\"btn-group justify-content-end\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getTempHistory(24)\" [ngClass]=\"{active:globalVar.activeUser.chartHour === 24}\" autocomplete=\"off\" >24h</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getTempHistory(48)\" [ngClass]=\"{active:globalVar.activeUser.chartHour === 48}\" autocomplete=\"off\" >48h</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getTempHistory(96)\" [ngClass]=\"{active:globalVar.activeUser.chartHour === 96}\" autocomplete=\"off\" >96h</button>\n                <input type=\"number\" class=\"form-control btn btn-secondary numberInput\" min=\"0\" [(ngModel)]=\"hours\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getTempHistory(hours)\">Los!</button>\n                <i class=\"material-icons btn btn-secondary\" title=\"Reset Zoom\" (click)=\"globalVar.user.chart.zoomOut()\">zoom_out</i>\n            </div>\n        </div>\n    </div>\n    <highcharts-chart\n        [Highcharts]=\"Highcharts\"\n        [options]=\"globalVar.user.chartOptions\"\n        [(update)]=\"globalVar.user.updateFlag\"\n        (chartInstance)=\"saveInstance($event)\"\n        [oneToOne]=\"true\"\n    ></highcharts-chart>\n    <div *ngIf=\"globalVar.activeUser.varChart.length == 0\" class=\"card-body\">\n        <div role=\"alert\" class=\"alert alert-info\">\n            Du hast in den Einstellungen keine Datenpunkte für das Diagram ausgewählt.\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card h-100\">\n\t<!--<div class=\"card-header\">-->\n\t<!--</div>-->\n\t<div class=\"card-body\">\n        <h3>Chat</h3>\n            <ul class=\"list-group\" style=\"order:2;max-height:700px; overflow:auto;\">\n\n                <div class=\"\" *ngIf=\"!globalVar.user.moreMessagesAvailable\">\n                    <div class=\"alert alert-info\" role=\"alert\">Keine weiteren Nachrichten verfügbar!</div>\n                </div>\n                <div class=\"\" *ngIf=\"globalVar.user.moreMessagesAvailable\">\n                    <div class=\"alert alert-info\" role=\"alert\">\n                        <a class=\"alert-link\" (click) = \"loadOldMessages()\" >ältere Nachrichten Laden</a>\n                    </div>\n                </div>\n                <li class=\"px-1\" id=\"message{{message.time}}\" *ngFor=\"let message of globalVar.user.chatMessages\">\n                    <span class=\"d-flex justify-content-between\">\n                        <div>\n                            <span class=\"font-weight-bold\">{{message.author}}:</span>\n                            <p *ngIf=\"message.type == '1'\">{{message.message}}</p>\n                            <a *ngIf=\"message.type == '2'\" target=\"_blank\" href=\"{{message.message}}\">{{message.message}}</a>\n                            <span *ngIf=\"message.type == '3'\">\n                                <br>\n                                <img src=\"{{message.message}}\" [ngClass]=\"showFullscreen[message.id] == true ? 'showFullscreen' : ''\" (click)=open(message)>\n                            </span>\n                        </div>\n                        <p id=\"italic\" class=\"text-muted date\" title=\"{{message.time | date:'medium'}}\">{{message.time | date:'d. MMM | HH:mm'}}</p>\n                    </span>\n                </li>\n                <span #bottom></span>\n            </ul>\n\t\t<form [formGroup]=\"newMessage\" style=\"text-align:right;order:3\">\n\t\t\t<input type=\"text\" class=\"form-control mb-3\"\tformControlName=\"message\" placeholder=\"Neue Nachricht eingeben\" >\n\t\t\t<div class=\"btn-group btn-group-sm mr-3\">\n\t\t\t\t<label class=\"btn btn-secondary\" [ngClass]=\"{active: newMessage.value.type == 1}\">\n\t\t\t\t\t<input type=\"radio\" formControlName=\"type\" class=\"custom-control-input\" [value]=\"1\">\n\t\t\t\t\tText\n\t\t\t\t</label>\n\t\t\t\t<label class=\"btn btn-secondary\" [ngClass]=\"{active: newMessage.value.type == 2}\">\n\t\t\t\t\t<input type=\"radio\" formControlName=\"type\" class=\"custom-control-input\" [value]=\"2\">\n\t\t\t\t\tLink\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<label class=\"btn-group btn-group-sm\">\n\t\t\t\t<button class=\"btn btn-secondary\" (click)=\"save()\">Senden</button>\n\t\t\t\t<!-- <button class=\"btn btn-secondary\" (click)=\"scroll()\">Scroll</button> -->\n\t\t\t</label>\n\t\t</form>\n\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/countdowns/countdowns.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countdowns/countdowns.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCountdownsCountdownsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <!--<div class=\"card-header\">-->\n    <!--</div>-->\n    <div class=\"card-body\">\n        <h3>Countdowns</h3>\n        <ul class=\"list-group\" style=\"max-height:230px; overflow:auto;\">\n            <li class=\"list-group-item d-flex justify-content-start\" *ngFor=\"let countdown of globalVar.user.countdowns | ObjNgFor\">\n                <span>{{countdown.device.name}} ({{countdown.device.Raum}}) um {{countdown.time | date:'HH:mm'}} {{countdown.status ? countdown.device.buttonLabelOn :  countdown.device.buttonLabelOff}}</span>\n                <button class=\"btn btn-sm btn-danger ml-auto\" (click)=\"remove(countdown)\" >Löschen</button>\n            </li>\n            <li class=\"list-group-item list-group-item-info\" *ngIf=\"globalVar.user.countdowns | isEmpty\">\n                Keine Countdowns gesetzt\n            </li>\n        </ul>\n        <form style=\"text-align:right;\" [formGroup]=\"myForm\" (ngSubmit)=\"add(myForm.value, myForm.valid)\">\n            <br>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">Gerät</span>\n                </div>\n                <select\n                    class=\"form-control\"\n                    formControlName=\"device\"\n                    aria-describedby=\"btnGroupAddon\">\n                    <option value=\"\">Wähle ein Gerät</option>\n                    <option *ngFor=\"let value of globalVar.user.devicelist | ObjNgFor\" [ngValue]=\"value\">{{value.name}} ({{value.Raum}})</option>\n                </select>\n            </div>\n            <br>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">Minuten: {{myForm.value.time}}</span>\n                </div>\n                <input\n                formControlName=\"time\"\n                type=\"range\"\n                min=\"1\"\n                max=\"180\"\n                class=\"form-control slider\"\n                aria-describedby=\"btnGroupAddon2\">\n            </div>\n            <br>\n\t\t\t<div class=\"btn-group btn-group-sm mr-3\">\n\t\t\t\t<label class=\"btn btn-secondary\" [ngClass]=\"{active: myForm.value.status == '1'}\">\n\t\t\t\t\t<input type=\"radio\" formControlName=\"status\" class=\"custom-control-input\" value=\"1\">\n\t\t\t\t\t{{myForm.value.device.buttonLabelOn || 'An'}}\n\t\t\t\t</label>\n\t\t\t\t<label class=\"btn btn-secondary\" [ngClass]=\"{active: myForm.value.status == '0'}\">\n\t\t\t\t\t<input type=\"radio\" formControlName=\"status\" class=\"custom-control-input\" value=\"0\">\n\t\t\t\t\t{{myForm.value.device.buttonLabelOff || 'Aus'}}\n\t\t\t\t</label>\n\t\t\t</div>\n            <label class=\"btn-group btn-group-sm\">\n                <button type=\"submit\" class=\"btn btn-secondary \">Speichern</button>\n            </label>\n        </form>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/device/dimmer.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/dimmer.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDeviceDimmerHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"test d-flex justify-content-end\">\n\t<div class=\"mr-auto devicename\">{{device.name}}</div>\n    <div class=\"mr-1 devicename\">{{device.status * 100}}%</div>\n\t<div class=\"d-flex\" style=\"max-width:100%;\">\n\t\t<button\n            class=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n                0%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0.2})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t20%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0.4})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t40%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0.6})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t60%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0.8})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t80%\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 1})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t100%\n\t\t\t</p>\n\t\t</button>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/device/shutter.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/shutter.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDeviceShutterHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"test d-flex justify-content-end\">\n\t<div class=\"mr-auto devicename\">{{device.name}}</div>\n    <div class=\"mr-1 devicename\">{{device.status == 0 ? 'geschlossen' : 'geöffnet'}} </div>\n\t<div class=\"d-flex\" style=\"max-width:100%;\">\n\t\t<button\n\t\t\tclass=\"btnGrey unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t{{device.buttonLabelOff}}\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"btnGrey unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 'stop'})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\tStop\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n            class=\"btnGrey unselectable\"\n            (click)=\"switchDevice({id: device.deviceid, status: 1})\"\n\t\t\t>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t{{device.buttonLabelOn}}\n\t\t\t</p>\n\t\t</button>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/device/switch-button.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/switch-button.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDeviceSwitchButtonHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"test d-flex justify-content-end\">\n\t<div class=\"mr-auto devicename\">{{device.name}}</div>\n\t<div class=\"d-flex\" style=\"max-width:100%;\">\n\t\t<button\n\t\t\tclass=\"btnOff unselectable d-flex justify-content-center\"\n            (click)=\"switchDevice({id: device.deviceid, status: 0})\"\n\t\t\t>\n            <i *ngIf=\"device.showStatus\" class=\"material-icons boxOff\">check_box{{device.status == \"0\" ? \"\":\"_outline_blank\"}}</i>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t\t{{device.buttonLabelOff}}\n\t\t\t</p>\n\t\t</button>\n\t\t<button\n\t\t\tclass=\"btnOn unselectable d-flex justify-content-center\"\n            (click)=\"switchDevice({id: device.deviceid, status: 1})\"\n\t\t\t>\n            <i *ngIf=\"device.showStatus\" class=\"material-icons boxOn\">check_box{{device.status == \"0\" ? \"_outline_blank\":\"\"}}</i>\n\t\t\t<p class=\"buttonLabel\">\n\t\t\t<!-- style=\"fill:#389B20\" -->\n\n\t\t\t\t{{device.buttonLabelOn}}\n\t\t\t</p>\n\t\t</button>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDevicesDevicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"card\">\n    <div class=\"card-block\">\n        <h3>Geräte</h3>\n        <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n            <ngb-panel id=\"{{room.room.id}}\" *ngFor=\"let room of globalVar.user.devices | ObjNgFor\">\n                <ng-template ngbPanelTitle>\n                        <div class=\"d-flex justify-content-end\">\n                            <div class=\"devicename\">\n                                    {{room.room.name}}\n                            </div>\n                            <div class=\"btnRight\">\n                                <button  class=\"btnOn unselectable\" id=\"btnOn{{room.id}}\"  (click)='switchRoom($event, {\"room\":room.room,\"status\":\"1\"})' >An</button>\n                                <button class=\"btnOff unselectable\" id=\"btnOff{{room.id}}\" (click)='switchRoom($event, {\"room\":room.room,\"status\":\"0\"})' >Aus</button>\n                            </div>\n                        </div>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                        <ul class=\"list-group\">\n                            <div\n                                class=\"\" \n                                *ngFor=\"let device of room.roomdevices| ObjNgFor\"\n                                [ngSwitch]=\"device.protocol\"\n                            >\n                                <div *ngSwitchCase=\"'onewire'\"></div>\n                                <app-shutter *ngSwitchCase=\"'homegear:shutter'\" [device]=\"device\"></app-shutter>\n                                <app-switch-button *ngSwitchDefault [device]=\"device\"></app-switch-button>\n                            </div>\n                        </ul>\n                </ng-template>\n            </ngb-panel>\n        </ngb-accordion>\n    </div>\n</div> -->\n<div class=\"card\" style=\"margin-bottom: .75rem;\">\n        <div class=\"card-body\">\n        <div id=\"accordion\">\n            <h3>\n                Geräte\n            </h3>\n            <div class=\"card mb-1\" *ngFor=\"let room of globalVar.user.devices | ObjNgFor\">\n                <div class=\"card-header pl-1 pr-0 py-0\">\n                    <div class=\"d-flex justify-content-between\">\n                        <a (click)=\"room.room.isCollapsed = !room.room.isCollapsed\"\n                            [attr.aria-expanded]=\"!room.room.isCollapsed\" aria-controls=\"collapseExample\" class=\"devicename\">\n                            {{room.room.name}}\n                        </a>\n                        <div class=\"\">\n                            <button class=\"btnOff\" id=\"btnOff{{room.room.id}}\" (click)='switchRoom($event, {\"room\":room.room,\"status\":\"0\"})' >Aus</button>\n                            <button class=\"btnOn\" id=\"btnOn{{room.room.id}}\" (click)='switchRoom($event, {\"room\":room.room,\"status\":\"1\"})' >An</button>\n                        </div>\n                    </div>\n                </div>\n                <div id=\"collapse{{room.room.id}}\" [collapse]=\"room.room.isCollapsed\" class=\"card-block collapse py-0 pl-1 pr-0\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li\n                            class=\"\" \n                            *ngFor=\"let device of room.roomdevices| ObjNgFor\"\n                            [ngSwitch]=\"device.protocol\"\n                        >\n                            <div *ngSwitchCase=\"'onewire'\"></div>\n                            <app-dimmer *ngSwitchCase=\"'homegear:dimmer'\" [device]=\"device\"></app-dimmer>\n                            <app-shutter *ngSwitchCase=\"'homegear:shutter'\" [device]=\"device\"></app-shutter>\n                            <app-switch-button *ngSwitchDefault [device]=\"device\"></app-switch-button>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/favorit-devices/favorit-devices.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorit-devices/favorit-devices.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFavoritDevicesFavoritDevicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3>Favoriten</h3>\n<ul *ngIf=\"globalVar.user.favoritDevices.length > 0\" class=\"list-group\">\n    <div\n        *ngFor=\"let device of globalVar.user.favoritDevices\"\n        [ngSwitch]=\"device.protocol\"\n    >\n        <div *ngSwitchCase=\"'onewire'\"></div>\n        <app-dimmer *ngSwitchCase=\"'homegear:dimmer'\" [device]=\"device\"></app-dimmer>\n        <app-shutter *ngSwitchCase=\"'homegear:shutter'\" [device]=\"device\"></app-shutter>\n        <app-switch-button *ngSwitchDefault [device]=\"device\"></app-switch-button>\n    </div>\n</ul>\n<div *ngIf=\"globalVar.user.favoritDevices.length == 0\" role=\"alert\" class=\"alert alert-info\">\n    Noch keine Favoriten in den <a href=\"/settings/#/user\" class=\"alert-link\">Einstellungen</a> gewählt.\n</div> ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGroupsGroupsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <h3>Gruppen</h3>\n        <ul>\n            <li *ngFor=\"let group of globalVar.user.groups | ObjNgFor\">\n                <div class=\"d-flex justify-content-end\">\n                <div class=\"devicename\">\n                    {{group.name}}\n                </div>\n                <div class=\"btnRight\">\n                    <button class=\"btnOff buttonM\" (click)='switchGroup($event, {\"group\":group,\"status\":\"0\"})' >Aus</button>\n                    <button class=\"btnOn buttonM\" (click)='switchGroup($event, {\"group\":group,\"status\":\"1\"})' >An</button>\n                </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card-columns\">\n     <app-chart></app-chart>\n     <app-groups></app-groups>\n    <app-chat></app-chat>\n    <app-variables></app-variables>\n    <app-countdowns></app-countdowns>\n    <app-timers></app-timers> \n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-header/timer-header.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-header/timer-header.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTimerHeaderTimerHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex justify-content-end\">\n    <div title=\"Zuletzt ausgeführt: {{timer.lastexec | date:'EEE, d. MMM., HH:mm'}}\" class=\"devicename\" (click)=\"timer.isCollapsed = !timer.isCollapsed\"\n          [attr.aria-expanded]=\"!timer.isCollapsed\" style=\"text-overflow:ellipsis; overflow:hidden;cursor:pointer; margin:auto auto auto 0 !important;\">\n        {{timer.name}}\n    </div>\n    <div style=\"display: flex;\">\n        <i class=\"material-icons\" [ngClass]=\"{'activeTimer': timer.active == 'true', 'inactiveTimer': timer.active =='false'}\" title=\"Aktivieren/Deaktivieren\" (click)=\"$event.preventDefault();switchTimer(timer);$event.stopPropagation();\">notifications{{timer.active == \"true\" ? \"\" : \"_off\"}}</i>\n        <i class=\"material-icons\" style=\"color:#666;\"  title=\"Bearbeiten\" (click)=\"$event.preventDefault();editTimer(timer.id);$event.stopPropagation();\">mode_edit</i> \n        <ng-template #popContent>\n            <button class=\"btn btn-danger\" (click)=\"$event.preventDefault();removeTimer(timer);$event.stopPropagation();\">Löschen</button>\n            <button class=\"btn btn-success\" (click)=\"$event.preventDefault();pop.hide();$event.stopPropagation();\">Abbrechen</button>\n        </ng-template> \n        <i class=\"material-icons\" style=\"color:#FF8000;\" title=\"Löschen\" [outsideClick]=\"true\" #pop=\"bs-popover\" placement=\"left\" popoverTitle=\"Willst du den Timer wirklich löschen?\" [popover]=\"popContent\">\n            delete\n        </i>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-show/timer-show.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-show/timer-show.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTimerShowTimerShowComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mb-3\">\n    <div class=\"card-header\">\n        <app-timer-header [timer]=\"timer\"></app-timer-header>\n    </div>\n    <div class=\"card-block\" [collapse]=\"timer.isCollapsed\">\n        <div class=\"card\" *ngIf=\"timer.variables != false\">\n            <div class=\"card-header\">\n                Variablen/Events\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <div *ngFor=\"let variable of timer.variables | ObjNgFor\">\n                    <div *ngFor=\"let variab of variable\">\n                        <li class=\"list-group-item\">\n                            Löse aus sobald die Variable {{variab.id}} {{variab.mode}} {{variab.value}}\n                        </li>\n                    </div>\n                </div>\n            </ul>\n        </div>\n        <br>\n        <div class=\"card\" *ngIf=\"timer.conditions != false\">\n            <div class=\"card-header\">\n                Bedingungen\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\" *ngFor=\"let con of timer.conditions\" [ngSwitch]=\"con.type\">\n                    <div *ngSwitchCase=\"'random'\">Zufällig zwischen {{con.start | date:'HH:mm'}}h und {{con.stop | date:'HH:mm'}}h</div>\n                    <div *ngSwitchCase=\"'time'\">Um {{con.time | date:'HH:mm'}}h</div>\n                    <div *ngSwitchCase=\"'range'\">Zwischen {{con.start | date:'HH:mm'}}h und {{con.stop | date:'HH:mm'}}h</div>\n                    <div *ngSwitchCase=\"'variable'\">Wenn der Wert der Variablen {{con.id}} {{con.mode}} {{con.value}} ist</div>\n                    <div *ngSwitchCase=\"'sun'\">\n                        {{con.sun == \"sunset\" ? \"Sonnenuntergang\" : \"Sonnenaufgang\"}}\n                        <div *ngIf=\"con.offset.active\" class=\"text-muted\">{{con.offset.random ? 'zufällig zwischen ' + con.offset.min + ' und ' + con.offset.max : con.offset.minutes}} Minuten {{con.offset.after ? 'später': 'früher'}}</div> \n                    </div>\n                    <div *ngSwitchCase=\"'weekdays'\">\n                        <span [ngClass]='day ? \"green\" :  \"grey\"'  *ngFor=\"let day of con.weekdays; index as i;\">\n                            {{weekdays[i]}}\n                        </span>\n                    </div>\n                    <div *ngSwitchDefault>{{con | json}}</div>\n                </li>\n            </ul>\n        </div>\n        <br>\n        <div class=\"card\" *ngIf=\"timer.actions != false\">\n            <div class=\"card-header d-flex justify-content-between\">\n                Aktionen\n                <i (click)='switchAll(\"timers\", timer)' title=\"Aktionen zum testen jetzt ausführen!\" class=\"material-icons\">play_circle_outline</i>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item justify-content-start\" *ngFor=\"let act of  timer.actions; index as i;\" [ngSwitch]=\"act.type\">\n                    <div *ngSwitchCase=\"'device'\">{{act.action.name}}({{act.action.Raum}}) {{act.switchstatus == \"1\" ? act.action.buttonLabelOn : act.action.buttonLabelOff}}</div>\n                    <div *ngSwitchCase=\"'group'\">{{act.action.name}}({{act.action.user}}) {{act.switchstatus == \"1\" ? \"Ein\" : \"Aus\"}}</div>\n                    <div *ngSwitchCase=\"'alert'\">\n                        <div class=\"w-100\">\n                                Titel: {{act.action.title}}\n                        </div>\n                        <small class=\"mb-1\">\n                            Nachricht: {{act.action.message}}\n                        </small>\n                        <small class=\"mb-1\">\n                            Type: {{act.action.messageType}}\n                        </small>\n                        <small class=\"mb-1\">\n                            Benutzer: {{act.action.user}}\n                        </small>\n                        <small class=\"mb-1\" ng-show=\"action.activeTimeout\">\n                            Timeout: {{act.timeout}} Sekunden\n                        </small>\n                    </div>\n                    <div *ngSwitchCase=\"'setVariable'\">\n                        Variable {{act.action.name}}({{act.action.id}}) auf {{act.action.status}}setzen\n                    </div>\n                    <div *ngSwitchCase=\"'room'\">Raum {{act.action.room.name}} {{act.switchstatus == \"1\" ? \"Ein\" : \"Aus\"}}</div>\n                    <div *ngSwitchCase=\"'url'\">\n                        {{act.action.url}}<br>\n                        <small class=\"mb-1\" *ngIf=\"act.timeout > 0\">\n                            Timeout: {{act.timeout}} Sekunden\n                        </small>\n                    </div>\n                    <div  *ngSwitchDefault>{{act.type}}:{{act | json}}</div>\n                    <div class=\"ml-auto\" *ngIf=\"act.offset.active\">\n                        <span *ngIf=\"act.offset.random\">\n                            zufällig zwischen {{act.offset.min}} und {{act.offset.max}} Minuten\n                        </span>\n                        <span *ngIf=\"!act.offset.random\">\n                            {{act.offset.minutes}} Minuten\n                        </span>\n                        {{act.offset.after ? 'später': 'früher'}}\n                    </div>\n                    <div class=\"ml-auto\" *ngIf=\"act.activeInterval\">\n                        jede {{act.number}} {{act.unit}}\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/timers/timers.component.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timers/timers.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTimersTimersComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\" style=\"margin-bottom: .75rem;\">\n    <div class=\"card-body\">\n        <div class=\"d-flex justify-content-between\">\n            <h3>Timer</h3>\n            <i class=\"material-icons\" title=\"Hinzufügen\" (click)=\"addTimer()\">add_alert</i>\n        </div>\n        <app-timer-show [timer]=\"timer\" *ngFor=\"let timer of globalVar.user.timers | ObjNgFor\"></app-timer-show> \n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/variables/variables.component.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/variables/variables.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVariablesVariablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <h3>Info</h3>\n        <ul>\n            <li *ngFor=\"let variable of globalVar.user.favoritVariables | ObjNgFor\">\n                <p class=\"d-flex justify-content-between\">\n                    <span class=\"\">\n                        {{variable.name}}\n                    </span>\n                    <span title=\"{{variable.lastChange | date:'EEE, d. MMM., HH:mm'}}\">\n                        {{variable.status}}{{variable.suffix}}\n                    </span>\n                </p>\n            </li>\n            <li *ngIf=\"globalVar.user.favoritVariables | isEmpty\" role=\"alert\" class=\"alert alert-info\">\n                Du hast noch keine Variablen zur Anzeige ausgewählt! Füge sie deinem Benutzer in den <a href=\"/settings/#/user\" class=\"alert-link\">Einstellungen</a> hinzu. \n            </li>\n        </ul>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
      var map = {
        "./timer-edit/timer-edit.module": ["./src/app/timer-edit/timer-edit.module.ts", "timer-edit-timer-edit-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./src/app/active-devices/active-devices.component.css":
    /*!*************************************************************!*\
      !*** ./src/app/active-devices/active-devices.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppActiveDevicesActiveDevicesComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ul, ol{\n\tlist-style-type: none;\n\tpadding: 0px;\n\tmargin:0px;\n\tlist-style-type: none;\n\tcursor:default;\n}\n.devicename{\n\twhite-space: nowrap; \n\ttext-align: inherit;\n\tmargin: auto 0;\n\tcolor: #292b2c;\n}\nbutton{\n\theight: 45px;\n\tcursor:pointer;\n\tmargin:2px 1px 2px 0px;\n\tmin-width:75px;\n\tbox-sizing: initial;\n\tborder:0px;\n\tborder-radius:0px;\n\tpadding:0;\n}\nh1, h2, h3, h4, h5, h6{\n\tcursor:default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLWRldmljZXMvYWN0aXZlLWRldmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osVUFBVTtDQUNWLHFCQUFxQjtDQUNyQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGNBQWM7QUFDZjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLFNBQVM7QUFDVjtBQUVBO0NBQ0MsY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWN0aXZlLWRldmljZXMvYWN0aXZlLWRldmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLCBvbHtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjowcHg7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0Y3Vyc29yOmRlZmF1bHQ7XG59XG4uZGV2aWNlbmFtZXtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDsgXG5cdHRleHQtYWxpZ246IGluaGVyaXQ7XG5cdG1hcmdpbjogYXV0byAwO1xuXHRjb2xvcjogIzI5MmIyYztcbn1cbmJ1dHRvbntcblx0aGVpZ2h0OiA0NXB4O1xuXHRjdXJzb3I6cG9pbnRlcjtcblx0bWFyZ2luOjJweCAxcHggMnB4IDBweDtcblx0bWluLXdpZHRoOjc1cHg7XG5cdGJveC1zaXppbmc6IGluaXRpYWw7XG5cdGJvcmRlcjowcHg7XG5cdGJvcmRlci1yYWRpdXM6MHB4O1xuXHRwYWRkaW5nOjA7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7XG5cdGN1cnNvcjpkZWZhdWx0O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/active-devices/active-devices.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/active-devices/active-devices.component.ts ***!
      \************************************************************/

    /*! exports provided: ActiveDevicesComponent */

    /***/
    function srcAppActiveDevicesActiveDevicesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActiveDevicesComponent", function () {
        return ActiveDevicesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");

      var ActiveDevicesComponent = /*#__PURE__*/function () {
        function ActiveDevicesComponent(socket, globalVar) {
          _classCallCheck(this, ActiveDevicesComponent);

          this.socket = socket;
          this.globalVar = globalVar;
        }

        _createClass(ActiveDevicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.socket.emit("devices:active", undefined);
            this.socket.on('active', function (data) {
              _this.activeDevices = data[data.type];
            });
          }
        }, {
          key: "switchAll",
          value: function switchAll(status) {
            console.log(status);
            this.socket.emit("devices:switchAll", {
              switchAll: status
            });
          }
        }]);

        return ActiveDevicesComponent;
      }();

      ActiveDevicesComponent.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]
        }];
      };

      ActiveDevicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-active-devices',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./active-devices.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/active-devices/active-devices.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./active-devices.component.css */
        "./src/app/active-devices/active-devices.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])], ActiveDevicesComponent);
      /***/
    },

    /***/
    "./src/app/alerts/alerts.component.css":
    /*!*********************************************!*\
      !*** ./src/app/alerts/alerts.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAlertsAlertsComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".alerts{\n\tz-index:1031;\n\t/* position: fixed; */\n\tposition: absolute;\n\ttop: 0px;\n    right: 0px;\n    height: 100%;\n\tbackground:rgba(0, 0, 0, 0.6);\n    overflow: auto;\n    padding: 10px;\n}\n.alerts ul{\n    position: relative;\n    min-width: 45%;\n}\nli {\n    list-style-type: none; \n    margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnRzL2FsZXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsUUFBUTtJQUNMLFVBQVU7SUFDVixZQUFZO0NBQ2YsNkJBQTZCO0lBQzFCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0cy9hbGVydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydHN7XG5cdHotaW5kZXg6MTAzMTtcblx0LyogcG9zaXRpb246IGZpeGVkOyAqL1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmFsZXJ0cyB1bHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiA0NSU7XG59XG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyBcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/alerts/alerts.component.ts":
    /*!********************************************!*\
      !*** ./src/app/alerts/alerts.component.ts ***!
      \********************************************/

    /*! exports provided: AlertsComponent */

    /***/
    function srcAppAlertsAlertsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertsComponent", function () {
        return AlertsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");

      var AlertsComponent = /*#__PURE__*/function () {
        function AlertsComponent(globalVar, socket) {
          _classCallCheck(this, AlertsComponent);

          this.globalVar = globalVar;
          this.socket = socket;
        }

        _createClass(AlertsComponent, [{
          key: "remove",
          value: function remove(data) {
            this.socket.emit('alerts:remove', {
              user: this.globalVar.activeUser,
              remove: data
            });
          }
        }, {
          key: "removeAll",
          value: function removeAll() {
            this.socket.emit('alerts:removeAll', {
              user: this.globalVar.activeUser
            });
          }
        }]);

        return AlertsComponent;
      }();

      AlertsComponent.ctorParameters = function () {
        return [{
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }];
      };

      AlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alerts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./alerts.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/alerts/alerts.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./alerts.component.css */
        "./src/app/alerts/alerts.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"], _app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])], AlertsComponent);
      /***/
    },

    /***/
    "./src/app/app.component.css":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".favorittile{\n\t/* box-sizing: content-box; */\n\toverflow-y: auto;\n\tfloat:left;\n\tmargin-left: 10;\n\tmargin-right: auto;\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n\tpadding-left:5px;\n\twidth:20%;\n\theight: calc(100% - 56px);\n\t/* background: linear-gradient(to bottom, #ddf 0%, #ddf 0%, #ffffff 100%); */\n\tbackground: linear-gradient(to bottom, #bee5eb 0%, #ffffff 100%);\n\tbackground-color: #fff;\n\tposition:fixed;\n\ttop:66px;\n}\n.favoritmenu{\n\tmargin-left:20%;\n}\n.nav-link{\n    display: flex;\n    color: #4d5cad !important;\n}\n.pointer{\n    cursor: pointer;\n}\n.content{\n    position: absolute;\n    padding: 1.25rem;\n    /* margin-top: 59px; */\n    overflow: auto;\n    /* height: 100%; */\n    top: 59px;\n    right: 0;\n    bottom: 0px;\n    left: 0;\n    overflow-y: scroll;\n}\n.content router-outlet{\n    position: relative;\n}\n.bg{\n\theight: 100%;\n\twidth:100%;\n\ttop: 0;\n\tleft: 0;\n\tz-index: -1;\n}\n.nav-link-active{\n    background-color: #EFEFFF;\n    background-color: #c0d7ff;\n}\n.loaderBg{\n\tz-index:1100;\n\tposition: fixed;\n\theight: 100%;\n\twidth:100%;\n\ttop:0;\n\tbackground:rgba(0, 0, 0, 0.6);\n}\n.loader{\n\tposition:fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background: #bee5eb;\n    /* background: #fff; */\n    padding: 20px 40px 0px 40px;\n    border-radius: 8px;\n    color: #4d5cad;\n}\n.loader p {\n    padding-top: 20px; \n\t/* color: white; */\n}\n.inner{\n  \tposition:relative;\n    border-radius: 120px/120px;;\n    border:solid 12px;\n    border-color: #ffffff;\n    width: 120px;\n    height: 120px;\n    top: -1px;\n    left: -2px;\n\n/*    -webkit-animation: rotation 2s linear infinite;\n    -moz-animation: rotation 2s linear infinite;\n    -ms-animation: rotation 2s linear infinite;*/\n}\n.outer{\n    border-radius: 80px/80px;;\n    border:solid 8px;\n    border-color: #bee5eb #4d5cad #bee5eb #4d5cad;\n    /* border-color: white #4d5cad white #4d5cad; */\n    width:116px;\n    height:116px;\n    -webkit-animation: rotation 2s linear infinite;\n    -moz-animation: rotation 2s linear infinite;\n    -ms-animation: rotation 2s linear infinite;\n    position: relative;\n    top: -10px;\n    left: -10px;\n}\n@-webkit-keyframes rotation {\n    0%   { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\nbutton{\n    cursor:pointer;\n}\nh1, h2, h3, h4, h5, h6{\n\tcursor:default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw2QkFBNkI7Q0FDN0IsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFNBQVM7Q0FDVCx5QkFBeUI7Q0FDekIsNEVBQTRFO0NBQzVFLGdFQUFnRTtDQUNoRSxzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLFFBQVE7QUFDVDtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtDQUNDLFlBQVk7Q0FDWixVQUFVO0NBQ1YsTUFBTTtDQUNOLE9BQU87Q0FDUCxXQUFXO0FBQ1o7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsWUFBWTtDQUNaLFVBQVU7Q0FDVixLQUFLO0NBQ0wsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxjQUFjO0lBQ1gsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtDQUNwQixrQkFBa0I7QUFDbkI7QUFDQTtHQUNHLGlCQUFpQjtJQUdoQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVOztBQUVkOztnREFFZ0Q7QUFDaEQ7QUFDQTtJQUdJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhDQUE4QztJQUM5QywyQ0FBMkM7SUFDM0MsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxPQUFPLCtCQUErQixFQUFFO0lBQ3hDLE9BQU8saUNBQWlDLEVBQUU7QUFDOUM7QUFTQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtDQUNDLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm9yaXR0aWxle1xuXHQvKiBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgKi9cblx0b3ZlcmZsb3cteTogYXV0bztcblx0ZmxvYXQ6bGVmdDtcblx0bWFyZ2luLWxlZnQ6IDEwO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdG1hcmdpbi10b3A6IDBweDtcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRwYWRkaW5nLWxlZnQ6NXB4O1xuXHR3aWR0aDoyMCU7XG5cdGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XG5cdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNkZGYgMCUsICNkZGYgMCUsICNmZmZmZmYgMTAwJSk7ICovXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNiZWU1ZWIgMCUsICNmZmZmZmYgMTAwJSk7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHR0b3A6NjZweDtcbn1cbi5mYXZvcml0bWVudXtcblx0bWFyZ2luLWxlZnQ6MjAlO1xufVxuLm5hdi1saW5re1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICM0ZDVjYWQgIWltcG9ydGFudDtcbn1cbi5wb2ludGVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIC8qIG1hcmdpbi10b3A6IDU5cHg7ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgIHRvcDogNTlweDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5jb250ZW50IHJvdXRlci1vdXRsZXR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJne1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOjEwMCU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0ei1pbmRleDogLTE7XG59XG5cbi5uYXYtbGluay1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBkN2ZmO1xufVxuLmxvYWRlckJne1xuXHR6LWluZGV4OjExMDA7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDoxMDAlO1xuXHR0b3A6MDtcblx0YmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4ubG9hZGVye1xuXHRwb3NpdGlvbjpmaXhlZDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogI2JlZTVlYjtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xuICAgIHBhZGRpbmc6IDIwcHggNDBweCAwcHggNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6ICM0ZDVjYWQ7XG59XG4ubG9hZGVyIHAge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4OyBcblx0LyogY29sb3I6IHdoaXRlOyAqL1xufVxuLmlubmVye1xuICBcdHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTIwcHgvMTIwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjBweCAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweC8xMjBweDs7XG4gICAgYm9yZGVyOnNvbGlkIDEycHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHRvcDogLTFweDtcbiAgICBsZWZ0OiAtMnB4O1xuXG4vKiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRpb24gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiByb3RhdGlvbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLW1zLWFuaW1hdGlvbjogcm90YXRpb24gMnMgbGluZWFyIGluZmluaXRlOyovXG59XG4ub3V0ZXJ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4MHB4LzgwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4MHB4IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogODBweC84MHB4OztcbiAgICBib3JkZXI6c29saWQgOHB4O1xuICAgIGJvcmRlci1jb2xvcjogI2JlZTVlYiAjNGQ1Y2FkICNiZWU1ZWIgIzRkNWNhZDtcbiAgICAvKiBib3JkZXItY29sb3I6IHdoaXRlICM0ZDVjYWQgd2hpdGUgIzRkNWNhZDsgKi9cbiAgICB3aWR0aDoxMTZweDtcbiAgICBoZWlnaHQ6MTE2cHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW9uIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtbW96LWFuaW1hdGlvbjogcm90YXRpb24gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIC1tcy1hbmltYXRpb246IHJvdGF0aW9uIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAtMTBweDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5ALW1vei1rZXlmcmFtZXMgcm90YXRpb24ge1xuICAgIDAlICAgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuQC1tcy1rZXlmcmFtZXMgcm90YXRpb24ge1xuICAgIDAlICAgeyAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cbmJ1dHRvbntcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7XG5cdGN1cnNvcjpkZWZhdWx0O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.service.global */
      "./src/app/app.service.global.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(socket, globalVar) {
          _classCallCheck(this, AppComponent);

          this.socket = socket;
          this.globalVar = globalVar;
          this.joinedRoom = ""; // loaded = [];

          this.selectedUser = 0;
          this.messages = [];
          this.showFav = true;
          this.moreMessagesAvailable = true;
        }

        _createClass(AppComponent, [{
          key: "setCookie",
          value: function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
          }
        }, {
          key: "getCookie",
          value: function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');

            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];

              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }

              if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }

            return "";
          }
        }, {
          key: "updateUser",
          value: function updateUser() {
            if (this.globalVar.activeUser.id != this.users[this.selectedUser].id) {
              this.setUser(this.users[this.selectedUser]);
            }
          }
        }, {
          key: "setUser",
          value: function setUser(user) {
            console.log(user);

            if (this.joinedRoom != "") {
              this.globalVar.user.chartOptions.series = [];
              this.globalVar.user.alerts = {};
              console.log("leave:" + this.globalVar.activeUser.name);
              this.socket.emit('room:leave', this.globalVar.activeUser);
            }

            this.globalVar.activeUser = user;
            console.log(this.globalVar.activeUser.background);

            if (this.globalVar.activeUser.background == "") {
              this.globalVar.activeUser.background = "./assets/img/hintergrund_holz_dunkel.jpg";
            }

            this.setCookie("qs-user", JSON.stringify(user), 365);
            console.log("join:" + user.name);
            this.globalVar.user.hideChart = true;
            this.joinedRoom = user.name;
            this.socket.emit('room:join', user);
            this.socket.emit('variables:chart', {
              user: user.id,
              hours: user.chartHour
            });
          }
        }, {
          key: "toogleFav",
          value: function toogleFav(status) {
            console.log(status);
            this.showFav = !status;
            var that = this;
            setTimeout(function () {
              that.globalVar.user.chart.reflow();
            }, 100);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.socket.emit('users:get', "");
            this.socket.on('users', function (data) {
              _this2.users = data[data.type];

              try {
                var cookie = JSON.parse(_this2.getCookie('qs-user'));
                _this2.globalVar.activeUser = cookie;

                _this2.setUser(cookie);
              } catch (e) {}

              _this2.users.forEach(function (user, i) {
                if (user.name == _this2.globalVar.activeUser.name) {
                  _this2.selectedUser = i;
                }
              });
            });
            this.socket.on('all', function (data) {
              console.log(data);

              switch (data.type) {
                case "get":
                  _this2.globalVar.user[data.masterType] = data.get;
                  break;

                case "add":
                  console.log(_this2.globalVar.user[data.masterType]);

                  if (Array.isArray(_this2.globalVar.user[data.masterType])) {
                    _this2.globalVar.user[data.masterType].push(data.add);
                  } else {
                    _this2.globalVar.user[data.masterType][data.add.id] = data.add;
                  }

                  break;

                case "remove":
                  delete _this2.globalVar.user[data.masterType][data.remove];
                  break;

                case "edit":
                  _this2.globalVar.user[data.masterType][data.edit.id] = data.edit;
                  break;

                case "switch":
                  if (Object.keys(_this2.globalVar.user[data.masterType]).length > 0) {
                    _this2.globalVar.user[data.masterType][data["switch"].device.Raum].roomdevices[data["switch"].device.deviceid].status = data["switch"].status;
                  }

                  for (var i = 0; i < _this2.globalVar.user.favoritDevices.length; i++) {
                    if (_this2.globalVar.user.favoritDevices[i].deviceid == data["switch"].device.deviceid) {
                      _this2.globalVar.user.favoritDevices[i].status = parseFloat(data["switch"].status);
                    }
                  }

                  break;

                case "unshift":
                  _this2.globalVar.user[data.masterType].unshift(data.unshift);

                  break;

                case "push":
                  _this2.globalVar.user[data.masterType].push(data.push);

                  break;

                default:
                  console.log(data.masterType);
                  console.log(data.type);
                  break;
              }

              if (_this2.globalVar.user[data.masterType + "Event"] != undefined) {
                _this2.globalVar.user[data.masterType + "Event"].next(data.type);
              }
            });
            this.socket.disconnect(function (data) {
              console.log("Verbindung zum Server verloren");
              _this2.globalVar.loading = true;
            });
            this.socket.connect(function (data) {
              _this2.globalVar.loading = false;
              console.log(_this2.globalVar.activeUser);

              if (_this2.globalVar.activeUser.name != "") {
                _this2.socket.emit('room:join', _this2.globalVar.activeUser);
              }

              console.log("Verbindung zum Server hergestellt");
              _this2.globalVar.loading = false;
            });
            this.socket.on("varChart", function (data) {
              if (data.get.length > 0) {
                _this2.globalVar.user.chartOptions.series = data.get;
                _this2.globalVar.user.updateFlag = true;

                if (_this2.globalVar.user.chart) {
                  _this2.globalVar.user.chart.hideLoading();
                }
              }
            });
            this.socket.emit("messages:loadOld", new Date().getTime());
            this.socket.on('moreMessagesAvailable', function (data) {
              _this2.moreMessagesAvailable = data;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.connection.unsubscribe();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        providers: [_app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.css */
        "./src/app/app.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
      /* harmony import */


      var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/popover */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! highcharts-angular */
      "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./chat/chat.component */
      "./src/app/chat/chat.component.ts");
      /* harmony import */


      var _active_devices_active_devices_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./active-devices/active-devices.component */
      "./src/app/active-devices/active-devices.component.ts");
      /* harmony import */


      var _favorit_devices_favorit_devices_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./favorit-devices/favorit-devices.component */
      "./src/app/favorit-devices/favorit-devices.component.ts");
      /* harmony import */


      var _devices_devices_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./devices/devices.component */
      "./src/app/devices/devices.component.ts");
      /* harmony import */


      var _device_device_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./device/device.component */
      "./src/app/device/device.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _groups_groups_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./groups/groups.component */
      "./src/app/groups/groups.component.ts");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./app.service.global */
      "./src/app/app.service.global.ts");
      /* harmony import */


      var _countdowns_countdowns_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./countdowns/countdowns.component */
      "./src/app/countdowns/countdowns.component.ts");
      /* harmony import */


      var _timers_timers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./timers/timers.component */
      "./src/app/timers/timers.component.ts");
      /* harmony import */


      var _timer_header_timer_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./timer-header/timer-header.component */
      "./src/app/timer-header/timer-header.component.ts");
      /* harmony import */


      var _timer_show_timer_show_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./timer-show/timer-show.component */
      "./src/app/timer-show/timer-show.component.ts");
      /* harmony import */


      var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./alerts/alerts.component */
      "./src/app/alerts/alerts.component.ts");
      /* harmony import */


      var _chart_chart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./chart/chart.component */
      "./src/app/chart/chart.component.ts");
      /* harmony import */


      var _variables_variables_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./variables/variables.component */
      "./src/app/variables/variables.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"], _active_devices_active_devices_component__WEBPACK_IMPORTED_MODULE_14__["ActiveDevicesComponent"], _favorit_devices_favorit_devices_component__WEBPACK_IMPORTED_MODULE_15__["FavoritDevicesComponent"], _devices_devices_component__WEBPACK_IMPORTED_MODULE_16__["DevicesComponent"], _device_device_component__WEBPACK_IMPORTED_MODULE_17__["SwitchButtonComponent"], _device_device_component__WEBPACK_IMPORTED_MODULE_17__["ShutterComponent"], _device_device_component__WEBPACK_IMPORTED_MODULE_17__["DimmerComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _devices_devices_component__WEBPACK_IMPORTED_MODULE_16__["DevicesComponent"], _devices_devices_component__WEBPACK_IMPORTED_MODULE_16__["ObjNgFor"], _devices_devices_component__WEBPACK_IMPORTED_MODULE_16__["isEmpty"], _groups_groups_component__WEBPACK_IMPORTED_MODULE_19__["GroupsComponent"], _countdowns_countdowns_component__WEBPACK_IMPORTED_MODULE_21__["CountdownsComponent"], _timers_timers_component__WEBPACK_IMPORTED_MODULE_22__["TimersComponent"], _timer_header_timer_header_component__WEBPACK_IMPORTED_MODULE_23__["TimerHeaderComponent"], _timer_show_timer_show_component__WEBPACK_IMPORTED_MODULE_24__["TimerShowComponent"], _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_25__["AlertsComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_26__["ChartComponent"], _variables_variables_component__WEBPACK_IMPORTED_MODULE_27__["VariablesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(), highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([{
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]
        }, {
          path: 'devices',
          component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_16__["DevicesComponent"]
        }, {
          path: 'timers',
          component: _timers_timers_component__WEBPACK_IMPORTED_MODULE_22__["TimersComponent"]
        }, {
          path: 'editTimer',
          loadChildren: "./timer-edit/timer-edit.module#TimerEditModule" // loadChildren: () => import('./timer-edit/timer-edit.module').then(m => m.TimerEditModule)

        }, {
          path: 'chart',
          component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_26__["ChartComponent"]
        }, {
          path: 'chat',
          component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"]
        }, {
          path: '**',
          redirectTo: 'home',
          pathMatch: 'full'
        }], {
          scrollPositionRestoration: 'enabled',
          anchorScrolling: 'enabled',
          scrollOffset: [0, 64] // [x, y] - adjust scroll offset

        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_12__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_20__["GlobalObjectsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/app.service.global.ts":
    /*!***************************************!*\
      !*** ./src/app/app.service.global.ts ***!
      \***************************************/

    /*! exports provided: GlobalObjectsService */

    /***/
    function srcAppAppServiceGlobalTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalObjectsService", function () {
        return GlobalObjectsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.service */
      "./src/app/app.service.ts");

      var GlobalObjectsService = function GlobalObjectsService(socket) {
        _classCallCheck(this, GlobalObjectsService);

        this.socket = socket;
        this.user = {
          active: [],
          alerts: {},
          chatMessages: [],
          chatMessagesEvent: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
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
              backgroundColor: '#ffffff',
              zoomType: "x",
              resetZoomButton: {
                theme: {
                  display: "none"
                }
              }
            },
            scrollbar: {
              liveRedraw: false
            },
            rangeSelector: {
              buttons: [{
                type: 'hour',
                count: 1,
                text: '1h'
              }, {
                type: 'day',
                count: 1,
                text: '1d'
              }, {
                type: 'month',
                count: 1,
                text: '1m'
              }, {
                type: 'year',
                count: 1,
                text: '1y'
              }, {
                type: 'all',
                text: 'All'
              }],
              inputEnabled: false,
              selected: 4 // all

            },
            plotOptions: {
              series: {
                marker: {
                  enabled: false
                },
                states: {
                  hover: {
                    enabled: true,
                    lineWidthPlus: 1.5
                  },
                  inactive: {
                    opacity: 1
                  }
                }
              }
            },
            xAxis: [{
              type: 'datetime',
              // lineColor:'#4d4d4d',
              // tickColor:'#4d4d4d',
              // minorGridLineWidth: 0,
              // minorTickInterval: 3600 * 1000, // Hourly
              // minorTickInterval: 'auto', // Hourly
              // minorTickColor: '#4d4d4d',
              // minorTickWidth: 1,
              // minorTickLength: 7,
              labels: {
                rotation: 0,
                style: {
                  "color": '#4d4d4d',
                  "fontSize": "16px"
                }
              },
              events: {},
              dateTimeLabelFormats: {
                second: '%d.%m<br/>%H:%M:%S',
                minute: '%d.%m<br/>%H:%M',
                hour: '%d.%m<br/>%H:%M',
                day: '%d.%m<br/>%H:%M',
                week: '%d.%m.%Y',
                month: '%m.%Y',
                year: '%Y'
              },
              minRange: 3600 * 1000 // one hour

            }],
            series: [],
            yAxis: [{
              allowDecimals: true,
              opposite: true,
              gridLineColor: '#bfbfbf',
              lineColor: '#4d4d4d',
              title: {
                text: 'Temperatur',
                style: {
                  "color": '#4d4d4d',
                  "fontSize": "16px"
                }
              },
              labels: {
                format: '{value}',
                style: {
                  "color": '#4d4d4d',
                  "fontSize": "16px"
                }
              }
            }],
            tooltip: {
              dateTimeLabelFormats: {
                second: '%A, %e %b, %H:%M:%S'
              }
            },
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
          chart: void {},
          updateFlag: true,
          chartDataMode: false
        };
        this.activeUser = {
          name: "",
          groups: {},
          id: "",
          chartHour: 24,
          varChart: [],
          variables: [],
          background: ""
        };
        this.loading = true;
      };

      GlobalObjectsService.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }];
      };

      GlobalObjectsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])], GlobalObjectsService);
      /***/
    },

    /***/
    "./src/app/app.service.ts":
    /*!********************************!*\
      !*** ./src/app/app.service.ts ***!
      \********************************/

    /*! exports provided: ServerResponse, SocketService */

    /***/
    function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerResponse", function () {
        return ServerResponse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocketService", function () {
        return SocketService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! socket.io-client */
      "./node_modules/socket.io-client/lib/index.js");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // import { Observable } from 'rxjs/Observable';


      var ServerResponse = function ServerResponse() {
        _classCallCheck(this, ServerResponse);
      };

      var SocketService = /*#__PURE__*/function () {
        function SocketService() {
          var _this3 = this;

          _classCallCheck(this, SocketService);

          this.url = "http://" + window.location.hostname + ":3333"; // private url = 'http://192.168.2.47:3333';

          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
          this.observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this3.socket.on('change', function (data) {
              observer.next(data);
            });

            return function () {
              _this3.socket.disconnect();
            };
          });
        }

        _createClass(SocketService, [{
          key: "emit",
          value: function emit(type, message) {
            console.log(window);
            this.socket.emit(type, message);
          }
        }, {
          key: "on",
          value: function on(type, callback) {
            this.observable.subscribe(function (data) {
              if (type === "all" || type === data.masterType) {
                callback(data);
              }
            });
          }
        }, {
          key: "disconnect",
          value: function disconnect(callback) {
            this.socket.on('disconnect', function (data) {
              callback(data);
            });
          }
        }, {
          key: "connect",
          value: function connect(callback) {
            this.socket.on('connect', function (data) {
              callback(data);
            });
          }
        }]);

        return SocketService;
      }();

      SocketService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], SocketService);
      /***/
    },

    /***/
    "./src/app/chart/chart.component.css":
    /*!*******************************************!*\
      !*** ./src/app/chart/chart.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppChartChartComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".numberInput{\n    max-width:80px;\n    min-width:80px;\n}\n\nhighcharts-chart {\n    display: block;\n    min-height: 500px;\n    height: 100%;\n}\n\n.card {\n    height: 100%;\n}\n\n.test{\n\tflex-flow: row wrap;\n}\n\nh3{\n    cursor:default;\n}\n\n.btn-secondary{\n    background-color: #c0d7ff;\n    border-color: #c0d7ff;\n    color: black;\n}\n\n.btn-secondary:hover{\n    background-color: #c0d7ff80;\n    border-color: #c0d7ff;\n    color: black;\n}\n\n.btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show > .btn-secondary.dropdown-toggle{\n    background-color: #c0d7ff80;\n    border-color: #c0d7ff;\n    color: black;\n}\n\n.btn-secondary:not(:disabled):not(.disabled).active:focus, .btn-secondary:not(:disabled):not(.disabled):active:focus, .show > .btn-secondary.dropdown-toggle:focus{\n    box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQvY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtDQUdDLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jaGFydC9jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51bWJlcklucHV0e1xuICAgIG1heC13aWR0aDo4MHB4O1xuICAgIG1pbi13aWR0aDo4MHB4O1xufVxuXG5oaWdoY2hhcnRzLWNoYXJ0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRlc3R7XG5cdC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcblx0LW1zLWZsZXgtZmxvdzogcm93IHdyYXA7XG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG5cbmgze1xuICAgIGN1cnNvcjpkZWZhdWx0O1xufVxuXG4uYnRuLXNlY29uZGFyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBkN2ZmO1xuICAgIGJvcmRlci1jb2xvcjogI2MwZDdmZjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBkN2ZmODA7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzBkN2ZmO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmJ0bi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5zaG93ID4gLmJ0bi1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGQ3ZmY4MDtcbiAgICBib3JkZXItY29sb3I6ICNjMGQ3ZmY7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsIC5idG4tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLnNob3cgPiAuYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXN7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/chart/chart.component.ts":
    /*!******************************************!*\
      !*** ./src/app/chart/chart.component.ts ***!
      \******************************************/

    /*! exports provided: ChartComponent */

    /***/
    function srcAppChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
        return ChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! highcharts */
      "./node_modules/highcharts/highcharts.js");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);

      highcharts__WEBPACK_IMPORTED_MODULE_4__["setOptions"]({
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

      var ChartComponent = /*#__PURE__*/function () {
        function ChartComponent(globalVar, socket) {
          _classCallCheck(this, ChartComponent);

          this.globalVar = globalVar;
          this.socket = socket; // highcharts new april 2019

          this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_4__;
          this.hours = 192;
        }

        _createClass(ChartComponent, [{
          key: "saveInstance",
          value: function saveInstance(chart) {
            this.globalVar.user.chart = chart;

            if (this.globalVar.user.chartOptions.series.length == 0) {
              this.globalVar.user.chart.showLoading();
            }
          }
        }, {
          key: "getTempHistory",
          value: function getTempHistory(hours) {
            this.globalVar.user.chart.zoomOut();
            this.globalVar.activeUser.chartHour = hours;
            this.socket.emit('variables:chart', {
              user: this.globalVar.activeUser.id,
              hours: hours
            });

            if (this.globalVar.user.chart != undefined) {
              this.globalVar.user.chart.showLoading();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChartComponent;
      }();

      ChartComponent.ctorParameters = function () {
        return [{
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }];
      };

      ChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chart.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/chart/chart.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chart.component.css */
        "./src/app/chart/chart.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"], _app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])], ChartComponent);
      /***/
    },

    /***/
    "./src/app/chat/chat.component.css":
    /*!*****************************************!*\
      !*** ./src/app/chat/chat.component.css ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppChatChatComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sliderText {\n\tmargin:0 0;\n}\nbutton {\n    cursor:pointer;\n}\nimg {\n    width: 20%;\n    padding-right: 10px;\n}\n.showFullscreen {\n    padding: 10px;\n    position: fixed;\n    z-index: 1200;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    height: auto;\n    max-height:100%;\n    width:auto;\n    max-width:100%;\n}\nul, h3{\n    cursor: default;\n}\nli:hover {\n    background-color: #d8eff3;\n}\n.card-body {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.date{\n    white-space: nowrap;\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyVGV4dCB7XG5cdG1hcmdpbjowIDA7XG59XG5idXR0b24ge1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuaW1nIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uc2hvd0Z1bGxzY3JlZW4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEyMDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6YXV0bztcbiAgICBtYXgtd2lkdGg6MTAwJTtcbn1cbnVsLCBoM3tcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5saTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZWZmMztcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5kYXRle1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luOiAwO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/chat/chat.component.ts":
    /*!****************************************!*\
      !*** ./src/app/chat/chat.component.ts ***!
      \****************************************/

    /*! exports provided: ChatComponent */

    /***/
    function srcAppChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ChatComponent = /*#__PURE__*/function () {
        function ChatComponent(socket, globalVar, formBuilder, viewportScroller) {
          var _this4 = this;

          _classCallCheck(this, ChatComponent);

          this.socket = socket;
          this.globalVar = globalVar;
          this.formBuilder = formBuilder;
          this.viewportScroller = viewportScroller;
          this.showFullscreen = {};
          this.globalVar.user.chatMessagesEvent.subscribe(function (data) {
            if (data == "push") {
              setTimeout(function () {
                _this4.scroll();
              }, 70);
            }
          });
        }

        _createClass(ChatComponent, [{
          key: "save",
          value: function save() {
            if (this.newMessage.value.message == "") {
              return;
            }

            this.socket.emit("messages:add", {
              user: {
                name: this.globalVar.activeUser.name
              },
              add: this.newMessage.value
            });
            this.newMessage = this.formBuilder.group({
              message: "",
              type: 1
            });
            this.scroll();
          }
        }, {
          key: "open",
          value: function open(message) {
            if (this.showFullscreen[message.id] == undefined) {
              this.globalVar.loading = true;
              this.showFullscreen[message.id] = true;
            } else {
              this.globalVar.loading = false;
              this.showFullscreen[message.id] = undefined;
            }
          }
        }, {
          key: "scroll",
          value: function scroll() {
            this.bottom.nativeElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }, {
          key: "loadOldMessages",
          value: function loadOldMessages() {
            this.socket.emit('messages:loadOld', this.globalVar.user.chatMessages[0].time);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.newMessage = this.formBuilder.group({
              message: "",
              type: 1
            });
          }
        }]);

        return ChatComponent;
      }();

      ChatComponent.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_4__["GlobalObjectsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"]
        }];
      };

      ChatComponent.propDecorators = {
        bottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["bottom"]
        }]
      };
      ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chat.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chat.component.css */
        "./src/app/chat/chat.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_4__["GlobalObjectsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"]])], ChatComponent);
      /***/
    },

    /***/
    "./src/app/countdowns/countdowns.component.css":
    /*!*****************************************************!*\
      !*** ./src/app/countdowns/countdowns.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCountdownsCountdownsComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ul, ol{\n    list-style-type: none;\n    padding: 0px;\n    margin:0px;\n    list-style-type: none;\n    cursor: default;\n}\n\nh3, form{\n    cursor: default;\n}\n\ninput[type=\"range\"]{\n    -webkit-appearance: none;\n    height: 40px;\n    background: #fff;\n    outline: none;\n}\n\ninput:hover, select:hover{\n\tcursor:pointer;\n}\n\n.slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n    border-radius: 25px;\n}\n\n.slider::-moz-range-thumb {\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n    border-radius: 25px;\n}\n\n.sliderBox{\n    border-style: solid;\n    border-width:1px;\n    border-radius: 4px;\n\n}\n\n.btn{\n    cursor:pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRkb3ducy9jb3VudGRvd25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY291bnRkb3ducy9jb3VudGRvd25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCwgb2x7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46MHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmgzLCBmb3Jte1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuaW5wdXRbdHlwZT1cInJhbmdlXCJde1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQ6aG92ZXIsIHNlbGVjdDpob3Zlcntcblx0Y3Vyc29yOnBvaW50ZXI7XG59XG5cblxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uc2xpZGVyQm94e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOjFweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbn1cbi5idG57XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/countdowns/countdowns.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/countdowns/countdowns.component.ts ***!
      \****************************************************/

    /*! exports provided: CountdownsComponent */

    /***/
    function srcAppCountdownsCountdownsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownsComponent", function () {
        return CountdownsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");

      var CountdownsComponent = /*#__PURE__*/function () {
        function CountdownsComponent(socket, globalVar, _fb) {
          _classCallCheck(this, CountdownsComponent);

          this.socket = socket;
          this.globalVar = globalVar;
          this._fb = _fb;
        } // devicelist;


        _createClass(CountdownsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.socket.emit('devices:devicelist', "");
            this.myForm = this._fb.group({
              time: [2],
              device: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              status: 0
            });
          }
        }, {
          key: "add",
          value: function add(countdown, valid) {
            if (valid) {
              console.log(this.globalVar.activeUser);
              countdown.user = this.globalVar.activeUser.name;
              this.socket.emit("countdowns:add", {
                user: this.globalVar.activeUser,
                add: countdown
              });
              this.myForm = this._fb.group({
                time: [2],
                device: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                status: 0
              });
            }
          }
        }, {
          key: "remove",
          value: function remove(data) {
            console.log(data);
            this.socket.emit("countdowns:remove", {
              user: this.globalVar.activeUser,
              remove: data
            });
          }
        }]);

        return CountdownsComponent;
      }();

      CountdownsComponent.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      };

      CountdownsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countdowns',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./countdowns.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/countdowns/countdowns.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./countdowns.component.css */
        "./src/app/countdowns/countdowns.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], CountdownsComponent);
      /***/
    },

    /***/
    "./src/app/device/device.component.css":
    /*!*********************************************!*\
      !*** ./src/app/device/device.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppDeviceDeviceComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n.material-icons{\n    font-size: 20px;\n}\nbutton{\n\theight: 45px;\n\tcursor:pointer;\n\tmargin:2px 5px 2px 0px;\n\twidth:80px;\n\t/*min-width:100px;*/\n\tbox-sizing: initial;\n\tborder:0px;\n\tborder-radius:0px;\n\tpadding:0;\n}\n.devicename{\n\twhite-space: nowrap; \n\ttext-align: inherit;\n\tmargin: auto 0;\n\tcolor: #292b2c;\n\tcursor:default;\n}\n.buttonLabel{\n\twhite-space: nowrap;\n    /*text-overflow:ellipsis;*/\n    overflow:hidden;\n\tmargin: auto 0px;\n\twhite-space: nowrap; \n\ttext-align: inherit;\n}\n.test{\n\tflex-flow: row wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlL2RldmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsU0FBUztBQUNWO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxtQkFBbUI7SUFDaEIsMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7QUFDQTtDQUdDLG1CQUFtQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9kZXZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1hdGVyaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbmJ1dHRvbntcblx0aGVpZ2h0OiA0NXB4O1xuXHRjdXJzb3I6cG9pbnRlcjtcblx0bWFyZ2luOjJweCA1cHggMnB4IDBweDtcblx0d2lkdGg6ODBweDtcblx0LyptaW4td2lkdGg6MTAwcHg7Ki9cblx0Ym94LXNpemluZzogaW5pdGlhbDtcblx0Ym9yZGVyOjBweDtcblx0Ym9yZGVyLXJhZGl1czowcHg7XG5cdHBhZGRpbmc6MDtcbn1cbi5kZXZpY2VuYW1le1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwOyBcblx0dGV4dC1hbGlnbjogaW5oZXJpdDtcblx0bWFyZ2luOiBhdXRvIDA7XG5cdGNvbG9yOiAjMjkyYjJjO1xuXHRjdXJzb3I6ZGVmYXVsdDtcbn1cbi5idXR0b25MYWJlbHtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAvKnRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7Ki9cbiAgICBvdmVyZmxvdzpoaWRkZW47XG5cdG1hcmdpbjogYXV0byAwcHg7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuXHR0ZXh0LWFsaWduOiBpbmhlcml0O1xufVxuLnRlc3R7XG5cdC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcblx0LW1zLWZsZXgtZmxvdzogcm93IHdyYXA7XG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/device/device.component.ts":
    /*!********************************************!*\
      !*** ./src/app/device/device.component.ts ***!
      \********************************************/

    /*! exports provided: SwitchButtonComponent, ShutterComponent, DimmerComponent */

    /***/
    function srcAppDeviceDeviceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchButtonComponent", function () {
        return SwitchButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShutterComponent", function () {
        return ShutterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DimmerComponent", function () {
        return DimmerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");

      var SwitchButtonComponent = /*#__PURE__*/function () {
        function SwitchButtonComponent(socket, globalVar) {
          _classCallCheck(this, SwitchButtonComponent);

          this.socket = socket;
          this.globalVar = globalVar;
        }

        _createClass(SwitchButtonComponent, [{
          key: "switchDevice",
          value: function switchDevice(data) {
            this.socket.emit("devices:switch", {
              user: {
                name: this.globalVar.activeUser.name
              },
              "switch": data
            });
          }
        }]);

        return SwitchButtonComponent;
      }();

      SwitchButtonComponent.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]
        }];
      };

      SwitchButtonComponent.propDecorators = {
        device: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      SwitchButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-switch-button',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./switch-button.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/device/switch-button.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./device.component.css */
        "./src/app/device/device.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])], SwitchButtonComponent);

      var ShutterComponent = /*#__PURE__*/function () {
        function ShutterComponent(socket, globalVar) {
          _classCallCheck(this, ShutterComponent);

          this.socket = socket;
          this.globalVar = globalVar;
        }

        _createClass(ShutterComponent, [{
          key: "switchDevice",
          value: function switchDevice(data) {
            this.socket.emit("devices:switch", {
              user: {
                name: this.globalVar.activeUser.name
              },
              "switch": data
            });
          }
        }]);

        return ShutterComponent;
      }();

      ShutterComponent.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]
        }];
      };

      ShutterComponent.propDecorators = {
        device: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      ShutterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-shutter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./shutter.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/device/shutter.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./device.component.css */
        "./src/app/device/device.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])], ShutterComponent);

      var DimmerComponent = /*#__PURE__*/function () {
        function DimmerComponent(socket, globalVar) {
          _classCallCheck(this, DimmerComponent);

          this.socket = socket;
          this.globalVar = globalVar;
        }

        _createClass(DimmerComponent, [{
          key: "switchDevice",
          value: function switchDevice(data) {
            this.socket.emit("devices:switch", {
              user: {
                name: this.globalVar.activeUser.name
              },
              "switch": data
            });
          }
        }]);

        return DimmerComponent;
      }();

      DimmerComponent.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]
        }];
      };

      DimmerComponent.propDecorators = {
        device: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      DimmerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dimmer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dimmer.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/device/dimmer.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./device.component.css */
        "./src/app/device/device.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])], DimmerComponent);
      /***/
    },

    /***/
    "./src/app/devices/devices.component.css":
    /*!***********************************************!*\
      !*** ./src/app/devices/devices.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppDevicesDevicesComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ul, ol{\n\tlist-style-type: none;\n\tpadding: 0px;\n\tmargin:0px;\n\tlist-style-type: none;\n}\n.devicename{\n\twhite-space: nowrap; \n\ttext-align: inherit;\n    color: #292b2c;\n    text-overflow:ellipsis;\n    overflow:hidden;\n    cursor:pointer;\n    margin:auto auto auto 0 !important;\n}\n.btnRight{\n    display: flex;\n}\nbutton{\n\theight: 45px;\n\tcursor:pointer;\n    margin: 2px 5px 2px 0px;\n\twidth:80px;\n\tbox-sizing: initial;\n\tborder:0px;\n\tborder-radius:0px;\n\tpadding:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlcy9kZXZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLFVBQVU7Q0FDVixxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztJQUNkLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7SUFDWCx1QkFBdUI7Q0FDMUIsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLFNBQVM7QUFDViIsImZpbGUiOiJzcmMvYXBwL2RldmljZXMvZGV2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwsIG9se1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdHBhZGRpbmc6IDBweDtcblx0bWFyZ2luOjBweDtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmRldmljZW5hbWV7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuXHR0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIGNvbG9yOiAjMjkyYjJjO1xuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIG1hcmdpbjphdXRvIGF1dG8gYXV0byAwICFpbXBvcnRhbnQ7XG59XG4uYnRuUmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuYnV0dG9ue1xuXHRoZWlnaHQ6IDQ1cHg7XG5cdGN1cnNvcjpwb2ludGVyO1xuICAgIG1hcmdpbjogMnB4IDVweCAycHggMHB4O1xuXHR3aWR0aDo4MHB4O1xuXHRib3gtc2l6aW5nOiBpbml0aWFsO1xuXHRib3JkZXI6MHB4O1xuXHRib3JkZXItcmFkaXVzOjBweDtcblx0cGFkZGluZzowO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/devices/devices.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/devices/devices.component.ts ***!
      \**********************************************/

    /*! exports provided: ObjNgFor, isEmpty, DevicesComponent */

    /***/
    function srcAppDevicesDevicesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjNgFor", function () {
        return ObjNgFor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return isEmpty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicesComponent", function () {
        return DevicesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");

      var ObjNgFor = /*#__PURE__*/function () {
        function ObjNgFor() {
          _classCallCheck(this, ObjNgFor);
        }

        _createClass(ObjNgFor, [{
          key: "transform",
          value: function transform(value) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (value) {
              return Object.keys(value).map(function (key) {
                return value[key];
              });
            } else {
              return;
            }
          }
        }]);

        return ObjNgFor;
      }();

      ObjNgFor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'ObjNgFor',
        pure: false
      })], ObjNgFor);
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

      var isEmpty = /*#__PURE__*/function () {
        function isEmpty() {
          _classCallCheck(this, isEmpty);
        }

        _createClass(isEmpty, [{
          key: "transform",
          value: function transform(value, args) {
            var result = true;

            for (var bar in value) {
              if (value.hasOwnProperty(bar)) {
                result = false;
              }
            }

            if (args) {
              return !result;
            } else {
              return result;
            }
          }
        }]);

        return isEmpty;
      }();

      isEmpty = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'isEmpty',
        pure: false
      })], isEmpty);

      var DevicesComponent = /*#__PURE__*/function () {
        function DevicesComponent(socket, globalVar) {
          _classCallCheck(this, DevicesComponent);

          this.socket = socket;
          this.globalVar = globalVar;
        }

        _createClass(DevicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.socket.emit('devices:get', "");
          }
        }, {
          key: "switchRoom",
          value: function switchRoom(event, data) {
            event.preventDefault();
            this.socket.emit("rooms:switch", {
              "switch": data
            });
            event.stopPropagation();
          }
        }]);

        return DevicesComponent;
      }();

      DevicesComponent.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]
        }];
      };

      DevicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-devices',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./devices.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./devices.component.css */
        "./src/app/devices/devices.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])], DevicesComponent);
      /***/
    },

    /***/
    "./src/app/favorit-devices/favorit-devices.component.css":
    /*!***************************************************************!*\
      !*** ./src/app/favorit-devices/favorit-devices.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFavoritDevicesFavoritDevicesComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\nh1, h2, h3, h4, h5, h6{\n\tcursor:default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdC1kZXZpY2VzL2Zhdm9yaXQtZGV2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXQtZGV2aWNlcy9mYXZvcml0LWRldmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNntcblx0Y3Vyc29yOmRlZmF1bHQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/favorit-devices/favorit-devices.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/favorit-devices/favorit-devices.component.ts ***!
      \**************************************************************/

    /*! exports provided: FavoritDevicesComponent */

    /***/
    function srcAppFavoritDevicesFavoritDevicesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritDevicesComponent", function () {
        return FavoritDevicesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");

      var FavoritDevicesComponent = function FavoritDevicesComponent(globalVar) {
        _classCallCheck(this, FavoritDevicesComponent);

        this.globalVar = globalVar;
      };

      FavoritDevicesComponent.ctorParameters = function () {
        return [{
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"]
        }];
      };

      FavoritDevicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorit-devices',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favorit-devices.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/favorit-devices/favorit-devices.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favorit-devices.component.css */
        "./src/app/favorit-devices/favorit-devices.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"]])], FavoritDevicesComponent);
      /***/
    },

    /***/
    "./src/app/groups/groups.component.css":
    /*!*********************************************!*\
      !*** ./src/app/groups/groups.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppGroupsGroupsComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ul, ol{\n\tlist-style-type: none;\n\tpadding: 0px;\n\tmargin:0px;\n\tlist-style-type: none;\n}\n.devicename{\n\twhite-space: nowrap; \n\ttext-align: inherit;\n    color: #292b2c;\n    text-overflow:ellipsis;\n    overflow:hidden;\n    cursor:default;\n    margin:auto auto auto 0 !important;\n}\n.btnRight{\n    display: flex;\n}\nbutton{\n\theight: 45px;\n\tcursor:pointer;\n\tmargin:2px 1px 2px 0px;\n\tmin-width:70px;\n\tbox-sizing: initial;\n\tborder:0px;\n\tborder-radius:0px;\n\tpadding:0;\n}\nh3, li{\n\tcursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixVQUFVO0NBQ1YscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7QUFFQTtDQUNDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCwgb2x7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0cGFkZGluZzogMHB4O1xuXHRtYXJnaW46MHB4O1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uZGV2aWNlbmFtZXtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDsgXG5cdHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgY29sb3I6ICMyOTJiMmM7XG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgY3Vyc29yOmRlZmF1bHQ7XG4gICAgbWFyZ2luOmF1dG8gYXV0byBhdXRvIDAgIWltcG9ydGFudDtcbn1cbi5idG5SaWdodHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5idXR0b257XG5cdGhlaWdodDogNDVweDtcblx0Y3Vyc29yOnBvaW50ZXI7XG5cdG1hcmdpbjoycHggMXB4IDJweCAwcHg7XG5cdG1pbi13aWR0aDo3MHB4O1xuXHRib3gtc2l6aW5nOiBpbml0aWFsO1xuXHRib3JkZXI6MHB4O1xuXHRib3JkZXItcmFkaXVzOjBweDtcblx0cGFkZGluZzowO1xufVxuXG5oMywgbGl7XG5cdGN1cnNvcjogZGVmYXVsdDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/groups/groups.component.ts":
    /*!********************************************!*\
      !*** ./src/app/groups/groups.component.ts ***!
      \********************************************/

    /*! exports provided: GroupsComponent */

    /***/
    function srcAppGroupsGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsComponent", function () {
        return GroupsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");

      var GroupsComponent = /*#__PURE__*/function () {
        // @Input() groups: any;
        function GroupsComponent(socket, globalVar) {
          _classCallCheck(this, GroupsComponent);

          this.socket = socket;
          this.globalVar = globalVar;
        }

        _createClass(GroupsComponent, [{
          key: "switchGroup",
          value: function switchGroup(event, data) {
            event.preventDefault();
            console.log("Raum schalten!");
            this.socket.emit("groups:switch", {
              "switch": data
            });
            event.stopPropagation();
          }
        }]);

        return GroupsComponent;
      }();

      GroupsComponent.ctorParameters = function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]
        }];
      };

      GroupsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./groups.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./groups.component.css */
        "./src/app/groups/groups.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"], _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])], GroupsComponent);
      /***/
    },

    /***/
    "./src/app/home/home.component.css":
    /*!*****************************************!*\
      !*** ./src/app/home/home.component.css ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n.card-columns {\n    -moz-column-count: 2;\n         column-count: 2;\n    -moz-column-gap: 1rem;\n         column-gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBRUksb0JBQWU7U0FBZixlQUFlO0lBRWYscUJBQWdCO1NBQWhCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1jb2x1bW5zIHtcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAxcmVtO1xuICAgIGNvbHVtbi1nYXA6IDFyZW07XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.component.css */
        "./src/app/home/home.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HomeComponent);
      /***/
    },

    /***/
    "./src/app/timer-header/timer-header.component.css":
    /*!*********************************************************!*\
      !*** ./src/app/timer-header/timer-header.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTimerHeaderTimerHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inactiveTimer{\n    color:#ffc0c0;\n}\n.activeTimer{\n    color:lightgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXItaGVhZGVyL3RpbWVyLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdGltZXItaGVhZGVyL3RpbWVyLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluYWN0aXZlVGltZXJ7XG4gICAgY29sb3I6I2ZmYzBjMDtcbn1cbi5hY3RpdmVUaW1lcntcbiAgICBjb2xvcjpsaWdodGdyZWVuO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/timer-header/timer-header.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/timer-header/timer-header.component.ts ***!
      \********************************************************/

    /*! exports provided: TimerHeaderComponent */

    /***/
    function srcAppTimerHeaderTimerHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimerHeaderComponent", function () {
        return TimerHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var TimerHeaderComponent = /*#__PURE__*/function () {
        function TimerHeaderComponent(router, globalVar, socket) {
          _classCallCheck(this, TimerHeaderComponent);

          this.router = router;
          this.globalVar = globalVar;
          this.socket = socket;
        }

        _createClass(TimerHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.timer.isCollapsed = true;
          }
        }, {
          key: "switchTimer",
          value: function switchTimer(data) {
            if (data.active == "true") {
              data.active = "false";
            } else {
              data.active = "true";
            }

            this.socket.emit('timers:switch', {
              user: this.globalVar.activeUser,
              "switch": data
            });
          }
        }, {
          key: "removeTimer",
          value: function removeTimer(data) {
            this.socket.emit('timers:remove', {
              user: this.globalVar.activeUser,
              remove: data
            });
          }
        }, {
          key: "editTimer",
          value: function editTimer(id) {
            this.router.navigate(['/editTimer', id]);
          }
        }]);

        return TimerHeaderComponent;
      }();

      TimerHeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }];
      };

      TimerHeaderComponent.propDecorators = {
        timer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      TimerHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./timer-header.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-header/timer-header.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./timer-header.component.css */
        "./src/app/timer-header/timer-header.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"], _app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])], TimerHeaderComponent);
      /***/
    },

    /***/
    "./src/app/timer-show/timer-show.component.css":
    /*!*****************************************************!*\
      !*** ./src/app/timer-show/timer-show.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTimerShowTimerShowComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n.grey{\n\tcolor:#bbb;\n}\n.green{\n\tcolor:green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXItc2hvdy90aW1lci1zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC90aW1lci1zaG93L3RpbWVyLXNob3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmdyZXl7XG5cdGNvbG9yOiNiYmI7XG59XG4uZ3JlZW57XG5cdGNvbG9yOmdyZWVuO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/timer-show/timer-show.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/timer-show/timer-show.component.ts ***!
      \****************************************************/

    /*! exports provided: TimerShowComponent */

    /***/
    function srcAppTimerShowTimerShowComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimerShowComponent", function () {
        return TimerShowComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var app_app_service_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/app.service.global */
      "./src/app/app.service.global.ts");
      /* harmony import */


      var app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/app.service */
      "./src/app/app.service.ts");

      var TimerShowComponent = function TimerShowComponent(globalVar, socket) {
        _classCallCheck(this, TimerShowComponent);

        this.globalVar = globalVar;
        this.socket = socket;
        this.weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

        this.switchAll = function (type, data) {
          this.socket.emit(type + ':switchAll', {
            user: this.globalVar.activeUser,
            switchAll: data
          });
        };
      };

      TimerShowComponent.ctorParameters = function () {
        return [{
          type: app_app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"]
        }, {
          type: app_app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }];
      };

      TimerShowComponent.propDecorators = {
        timer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      TimerShowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer-show',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./timer-show.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-show/timer-show.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./timer-show.component.css */
        "./src/app/timer-show/timer-show.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"], app_app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])], TimerShowComponent);
      /***/
    },

    /***/
    "./src/app/timers/timers.component.css":
    /*!*********************************************!*\
      !*** ./src/app/timers/timers.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppTimersTimersComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inactiveTimer{\n    color:#ffc0c0;\n}\n.activeTimer{\n    color:lightgreen;\n}\n.ngbPanelTitle:hover{\n    text-decoration: none!important;\n    cursor: default;\n}\na:active, a:hover{\n    text-decoration: none!important;\n    cursor: default;\n}\n.card-header a:hover{\n    text-decoration: none!important;\n}\n.accordion-toggle, .accordion-toggle:hover{\n    color:red;\n    text-decoration: inherit;\n}\nh3{\n    cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXJzL3RpbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksU0FBUztJQUNULHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3RpbWVycy90aW1lcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmFjdGl2ZVRpbWVye1xuICAgIGNvbG9yOiNmZmMwYzA7XG59XG4uYWN0aXZlVGltZXJ7XG4gICAgY29sb3I6bGlnaHRncmVlbjtcbn1cbi5uZ2JQYW5lbFRpdGxlOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuYTphY3RpdmUsIGE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uY2FyZC1oZWFkZXIgYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xufVxuLmFjY29yZGlvbi10b2dnbGUsIC5hY2NvcmRpb24tdG9nZ2xlOmhvdmVye1xuICAgIGNvbG9yOnJlZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbmgze1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/timers/timers.component.ts":
    /*!********************************************!*\
      !*** ./src/app/timers/timers.component.ts ***!
      \********************************************/

    /*! exports provided: TimersComponent */

    /***/
    function srcAppTimersTimersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimersComponent", function () {
        return TimersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var TimersComponent = /*#__PURE__*/function () {
        function TimersComponent(router, globalVar) {
          _classCallCheck(this, TimersComponent);

          this.router = router;
          this.globalVar = globalVar;
        }

        _createClass(TimersComponent, [{
          key: "addTimer",
          value: function addTimer() {
            this.router.navigate(['/editTimer']);
          }
        }]);

        return TimersComponent;
      }();

      TimersComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"]
        }];
      };

      TimersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./timers.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/timers/timers.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./timers.component.css */
        "./src/app/timers/timers.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"]])], TimersComponent);
      /***/
    },

    /***/
    "./src/app/variables/variables.component.css":
    /*!***************************************************!*\
      !*** ./src/app/variables/variables.component.css ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVariablesVariablesComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ul, ol{\n\tlist-style-type: none;\n\tpadding: 0px !important;\n\tmargin:0px !important;\n\tcursor: default;\n}\n\nh3{\n\tcursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFyaWFibGVzL3ZhcmlhYmxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC92YXJpYWJsZXMvdmFyaWFibGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCwgb2x7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG5cdG1hcmdpbjowcHggIWltcG9ydGFudDtcblx0Y3Vyc29yOiBkZWZhdWx0O1xufVxuXG5oM3tcblx0Y3Vyc29yOiBkZWZhdWx0O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/variables/variables.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/variables/variables.component.ts ***!
      \**************************************************/

    /*! exports provided: VariablesComponent */

    /***/
    function srcAppVariablesVariablesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariablesComponent", function () {
        return VariablesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service.global */
      "./src/app/app.service.global.ts");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");

      var VariablesComponent = /*#__PURE__*/function () {
        function VariablesComponent(globalVar, socket) {
          _classCallCheck(this, VariablesComponent);

          this.globalVar = globalVar;
          this.socket = socket;
        }

        _createClass(VariablesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.socket.on("variables", function (data) {
              switch (data.type) {
                case "edit":
                  if (_this5.globalVar.user.favoritVariables[data.edit.id]) {
                    _this5.globalVar.user.favoritVariables[data.edit.id] = data.edit;
                  }

                  break;

                default:
                  break;
              }
            });
          }
        }]);

        return VariablesComponent;
      }();

      VariablesComponent.ctorParameters = function () {
        return [{
          type: _app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }];
      };

      VariablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-variables',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./variables.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/variables/variables.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./variables.component.css */
        "./src/app/variables/variables.component.css"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service_global__WEBPACK_IMPORTED_MODULE_2__["GlobalObjectsService"], _app_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])], VariablesComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/daniel/Projekte/angular/src/main.ts */
      "./src/main.ts");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map