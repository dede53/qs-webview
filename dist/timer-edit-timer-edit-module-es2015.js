(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timer-edit-timer-edit-module"],{

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm2015/ngx-bootstrap-timepicker.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm2015/ngx-bootstrap-timepicker.js ***!
  \*************************************************************************************************/
/*! exports provided: TimepickerActions, TimepickerComponent, TimepickerConfig, TimepickerModule, TimepickerStore, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerActions", function() { return TimepickerActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return TimepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return TimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerStore", function() { return TimepickerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TIMEPICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function TimepickerComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeMinutes(ctx_r18.minuteStep); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
} }
function TimepickerComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.changeSeconds(ctx_r20.secondsStep); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r3.canIncrementSeconds || !ctx_r3.isEditable);
} }
function TimepickerComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function TimepickerComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r22.prevDef($event); return ctx_r22.changeMinutes(ctx_r22.minuteStep * ctx_r22.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.changeMinutes(ctx_r24.minuteStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.changeMinutes(-ctx_r25.minuteStep, "key"); })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.updateMinutes($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx_r7.invalidMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r7.invalidMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r7.minutesPlaceholder)("readonly", ctx_r7.readonlyInput)("disabled", ctx_r7.disabled)("value", ctx_r7.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r7.labelMinutes);
} }
function TimepickerComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r27.prevDef($event); return ctx_r27.changeSeconds(ctx_r27.secondsStep * ctx_r27.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.changeSeconds(ctx_r29.secondsStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.changeSeconds(-ctx_r30.secondsStep, "key"); })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.updateSeconds($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx_r9.invalidSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r9.invalidSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r9.secondsPlaceholder)("readonly", ctx_r9.readonlyInput)("disabled", ctx_r9.disabled)("value", ctx_r9.seconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r9.labelSeconds);
} }
function TimepickerComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.toggleMeridian(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.meridian, " ");
} }
function TimepickerComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_26_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.changeMinutes(-ctx_r34.minuteStep); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r13.canDecrementMinutes || !ctx_r13.isEditable);
} }
function TimepickerComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.changeSeconds(-ctx_r36.secondsStep); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r15.canDecrementSeconds || !ctx_r15.isEditable);
} }
function TimepickerComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
class TimepickerActions {
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeHours(event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeMinutes(event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeSeconds(event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTime(value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateControls(value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    }
}
TimepickerActions.ɵfac = function TimepickerActions_Factory(t) { return new (t || TimepickerActions)(); };
TimepickerActions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimepickerActions, factory: TimepickerActions.ɵfac });
TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const dex = 10;
/** @type {?} */
const hoursPerDay = 24;
/** @type {?} */
const hoursPerDayHalf = 12;
/** @type {?} */
const minutesPerHour = 60;
/** @type {?} */
const secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return !isNaN(toNumber(value));
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
function parseHours(value, isPM = false) {
    /** @type {?} */
    const hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseMinutes(value) {
    /** @type {?} */
    const minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseSeconds(value) {
    /** @type {?} */
    const seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    /** @type {?} */
    let hour = value.getHours();
    /** @type {?} */
    let minutes = value.getMinutes();
    /** @type {?} */
    let seconds = value.getSeconds();
    if (diff.hour) {
        hour = hour + toNumber(diff.hour);
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
function setTime(value, opts) {
    /** @type {?} */
    let hour = parseHours(opts.hour);
    /** @type {?} */
    const minute = parseMinutes(opts.minute);
    /** @type {?} */
    const seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM && hour !== 12) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
function createDate(value, hours, minutes, seconds) {
    /** @type {?} */
    const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
    // #3139 ensure date part remains unchanged
    newValue.setFullYear(value.getFullYear());
    newValue.setMonth(value.getMonth());
    newValue.setDate(value.getDate());
    return newValue;
}
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    /** @type {?} */
    const _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return `0${_value}`;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
function isInputLimitValid(diff, max, min) {
    /** @type {?} */
    const newDate = setTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
function isInputValid(hours, minutes = '0', seconds = '0', isPM) {
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
function getControlsValue(state) {
    const { hourStep, minuteStep, secondsStep, readonlyInput, disabled, mousewheel, arrowkeys, showSpinners, showMeridian, showSeconds, meridians, min, max } = state;
    return {
        hourStep,
        minuteStep,
        secondsStep,
        readonlyInput,
        disabled,
        mousewheel,
        arrowkeys,
        showSpinners,
        showMeridian,
        showSeconds,
        meridians,
        min,
        max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
function timepickerControls(value, state) {
    /** @type {?} */
    const hoursPerDayHalf = 12;
    const { min, max, hourStep, minuteStep, secondsStep, showSeconds } = state;
    /** @type {?} */
    const res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        /** @type {?} */
        const _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            /** @type {?} */
            const _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            /** @type {?} */
            const _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        /** @type {?} */
        const _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            /** @type {?} */
            const _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            /** @type {?} */
            const _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default configuration values for timepicker
 */
class TimepickerConfig {
    constructor() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
        /**
         * placeholder for hours field in timepicker
         */
        this.hoursPlaceholder = 'HH';
        /**
         * placeholder for minutes field in timepicker
         */
        this.minutesPlaceholder = 'MM';
        /**
         * placeholder for seconds field in timepicker
         */
        this.secondsPlaceholder = 'SS';
        /**
         * hours aria label
         */
        this.ariaLabelHours = 'hours';
        /**
         * minutes aria label
         */
        this.ariaLabelMinutes = 'minutes';
        /**
         * seconds aria label
         */
        this.ariaLabelSeconds = 'seconds';
    }
}
TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) { return new (t || TimepickerConfig)(); };
TimepickerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimepickerConfig, factory: TimepickerConfig.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerState {
}
if (false) {}
/** @type {?} */
const initialState = {
    value: null,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    }
};
// tslint:disable-next-line:cyclomatic-complexity
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function timepickerReducer(state = initialState, action) {
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            const _newTime = changeTime(state.value, { hour: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            const _newTime = changeTime(state.value, { minute: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            const _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            /** @type {?} */
            const _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            /** @type {?} */
            const _newControlsState = timepickerControls(state.value, action.payload);
            /** @type {?} */
            const _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerStore extends ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniStore"] {
    constructor() {
        /** @type {?} */
        const _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            type: '[mini-ngrx] dispatcher init'
        });
        /** @type {?} */
        const state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniState"](initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
}
TimepickerStore.ɵfac = function TimepickerStore_Factory(t) { return new (t || TimepickerStore)(); };
TimepickerStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimepickerStore, factory: TimepickerStore.ɵfac });
/** @nocollapse */
TimepickerStore.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => TimepickerComponent)),
    multi: true
};
class TimepickerComponent {
    /**
     * @param {?} _config
     * @param {?} _cd
     * @param {?} _store
     * @param {?} _timepickerActions
     */
    constructor(_config, _cd, _store, _timepickerActions) {
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /**
         * emits true if value is a valid date
         */
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        this.timepickerSub = _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.value))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // update UI values if date changed
            this._renderTime(value);
            this.onChange(value);
            this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
        }));
        _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.controls))
            .subscribe((/**
         * @param {?} controlsState
         * @return {?}
         */
        (controlsState) => {
            this.isValid.emit(isInputValid(this.hours, this.minutes, this.seconds, this.isPM()));
            Object.assign(this, controlsState);
            _cd.markForCheck();
        }));
    }
    /**
     * @deprecated - please use `isEditable` instead
     * @return {?}
     */
    get isSpinnersVisible() {
        return this.showSpinners && !this.readonlyInput;
    }
    /**
     * @return {?}
     */
    get isEditable() {
        return !(this.readonlyInput || this.disabled);
    }
    /**
     * @return {?}
     */
    resetValidation() {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    }
    /**
     * @return {?}
     */
    isPM() {
        return this.showMeridian && this.meridian === this.meridians[1];
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    prevDef($event) {
        $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    wheelSign($event) {
        return Math.sign($event.deltaY) * -1;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeHours(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeMinutes(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeSeconds(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step, source }));
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    updateHours(hours) {
        this.resetValidation();
        this.hours = hours;
        /** @type {?} */
        const isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} minutes
     * @return {?}
     */
    updateMinutes(minutes) {
        this.resetValidation();
        this.minutes = minutes;
        /** @type {?} */
        const isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    updateSeconds(seconds) {
        this.resetValidation();
        this.seconds = seconds;
        /** @type {?} */
        const isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @return {?}
     */
    isValidLimit() {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    }
    /**
     * @return {?}
     */
    _updateTime() {
        /** @type {?} */
        const _seconds = this.showSeconds ? this.seconds : void 0;
        /** @type {?} */
        const _minutes = this.showMinutes ? this.minutes : void 0;
        if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    }
    /**
     * @return {?}
     */
    toggleMeridian() {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        /** @type {?} */
        const _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    }
    /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    }
    /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.timepickerSub.unsubscribe();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _renderTime(value) {
        if (!isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        /** @type {?} */
        const _value = parseTime(value);
        /** @type {?} */
        const _hoursPerDayHalf = 12;
        /** @type {?} */
        let _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    }
}
TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimepickerStore), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimepickerActions)); };
TimepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimepickerComponent, selectors: [["timepicker"]], inputs: { disabled: "disabled", hourStep: "hourStep", minuteStep: "minuteStep", secondsStep: "secondsStep", readonlyInput: "readonlyInput", mousewheel: "mousewheel", arrowkeys: "arrowkeys", showSpinners: "showSpinners", showMeridian: "showMeridian", showMinutes: "showMinutes", showSeconds: "showSeconds", meridians: "meridians", min: "min", max: "max", hoursPlaceholder: "hoursPlaceholder", minutesPlaceholder: "minutesPlaceholder", secondsPlaceholder: "secondsPlaceholder" }, outputs: { isValid: "isValid" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 31, vars: 33, consts: [[1, "text-center", 3, "hidden"], [1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]], template: function TimepickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_a_click_4_listener() { return ctx.changeHours(ctx.hourStep); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TimepickerComponent_td_6_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimepickerComponent_td_7_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimepickerComponent_td_8_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TimepickerComponent_td_9_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimepickerComponent_td_10_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) { ctx.prevDef($event); return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() { return ctx.changeHours(ctx.hourStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() { return ctx.changeHours(-ctx.hourStep, "key"); })("change", function TimepickerComponent_Template_input_change_14_listener($event) { return ctx.updateHours($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TimepickerComponent_td_15_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TimepickerComponent_td_16_Template, 2, 9, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TimepickerComponent_td_17_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TimepickerComponent_td_18_Template, 2, 9, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TimepickerComponent_td_19_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_a_click_23_listener() { return ctx.changeHours(-ctx.hourStep); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TimepickerComponent_td_25_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TimepickerComponent_td_26_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TimepickerComponent_td_27_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TimepickerComponent_td_28_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TimepickerComponent_td_29_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showSpinners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canIncrementHours || !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx.invalidHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.invalidHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.labelHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showSpinners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canDecrementHours || !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
TimepickerComponent.ctorParameters = () => [
    { type: TimepickerConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: TimepickerStore },
    { type: TimepickerActions }
];
TimepickerComponent.propDecorators = {
    hourStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minuteStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    secondsStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonlyInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mousewheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowkeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSpinners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showMeridian: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSeconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    meridians: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hoursPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minutesPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    secondsPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isValid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'timepicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"hoursPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\" [attr.aria-label]=\"labelHours\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"minutesPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\" [attr.aria-label]=\"labelMinutes\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"secondsPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\" [attr.aria-label]=\"labelSeconds\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [`
    .bs-chevron {
      border-style: solid;
      display: block;
      width: 9px;
      height: 9px;
      position: relative;
      border-width: 3px 0px 0 3px;
    }

    .bs-chevron-up {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 2px;
    }

    .bs-chevron-down {
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
      top: -2px;
    }

    .bs-timepicker-field {
      width: 50px;
      padding: .375rem .55rem;
    }
  `]
            }]
    }], function () { return [{ type: TimepickerConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: TimepickerStore }, { type: TimepickerActions }]; }, { isValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hourStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minuteStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], secondsStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonlyInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mousewheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrowkeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSpinners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showMeridian: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showMinutes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], meridians: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hoursPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minutesPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], secondsPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
        };
    }
}
TimepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TimepickerModule });
TimepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TimepickerModule, { declarations: function () { return [TimepickerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [TimepickerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-timepicker.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-alert.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-alert.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card w-100  bg-{{action.action.messageType}}\">\n    <div class=\"card-header d-flex justify-content-end\">\n            <input [(ngModel)]=\"action.action.title\" class=\"mr-auto\" type=\"text\" placeholder=\"Titel\">\n            <select name=\"activeUser\" [(ngModel)]=\"action.action.user\">\n                <option value=\"undefined\" disabled>Benutzer</option>\n                <option value=\"all\">Alle</option>\n                <option *ngFor=\"let user of globalVar.user.users;\" [ngValue]=\"user.name\">\n                    {{ user.name }}\n                </option>\n            </select>\n            <select name=\"alertType\" [(ngModel)]=\"action.action.messageType\">\n                <option value=\"undefined\" disabled>Farbe</option>\n                <option *ngFor=\"let type of alertTypen\" [ngValue]=\"type.value\">{{type.name}}</option>\n            </select>\n    </div>\n    <p class=\"m-2 card-block card-text text-xs-center\">\n        <input [(ngModel)]=\"action.action.message\" class=\"col-form-label w-100\" type=\"text\" placeholder=\"Nachricht\">\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-device.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-device.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<select [(ngModel)]=\"action.action\">\n    <option disabled value=\"[object Object]\">Wähle ein Gerät</option>\n    <option *ngFor=\"let device of devicelist | ObjNgFor\" [ngValue]=\"device\">\n        {{device.name}} ({{device.Raum}})\n    </option>\n</select>\n<select name=\"alertType\" [(ngModel)]=\"action.switchstatus\">\n    <option disabled value=\"false\">Wähle einen Status</option>\n    <option value=\"1\">{{action.action.buttonLabelOn || \"An\"}}</option>\n    <option value=\"0\">{{action.action.buttonLabelOff || \"Aus\"}}</option>\n    <option value=\"toggle\">Umschalten</option>\n</select>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-group.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-group.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Die Gruppe\n<select [(ngModel)]=\"action.action\">\n    <option disabled value=\"false\">Wähle eine Gruppe</option>\n    <option *ngFor=\"let group of groups | ObjNgFor\" [ngValue]=\"group\">\n        {{group.name}} von {{group.user}}\n    </option>\n</select>\n<select name=\"alertType\" [(ngModel)]=\"action.switchstatus\">\n    <option disabled value=\"false\">Wähle einen Status</option>\n    <option value=\"1\">Einschalten</option>\n    <option value=\"0\">Ausschalten</option>\n    <option value=\"toggle\">Umschalten</option>\n</select>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-room.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-room.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Den Raum\n<select [(ngModel)]=\"action.action\">\n    <option disabled value=\"false\">Wähle einen Raum</option>\n    <option *ngFor=\"let room of devices | ObjNgFor\" [ngValue]=\"room\">\n        {{room.room.name}}\n    </option>\n</select>\n<select name=\"alertType\" [(ngModel)]=\"action.switchstatus\">\n    <option disabled value=\"false\">Wähle einen Status</option>\n    <option value=\"1\">Einschalten</option>\n    <option value=\"0\">Ausschalten</option>\n    <option value=\"toggle\">Umschalten</option>\n</select>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/timer-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/timer-edit.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-3\">\n    <div class=\"card-header\">\n        <input [(ngModel)]=\"timer.name\" class=\"form-control\" placeholder=\"Name\">\n    </div>\n    <div class=\"card-block\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Variablen/Events\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li *ngIf=\"!timer.variables != false\" class=\"list-group-item list-group-item-info\">\n                    Noch keine Variable hinzugefügt!\n                </li>\n                <div *ngFor=\"let variable of timer.variables | ObjNgFor\">\n                    <div *ngFor=\"let variab of variable; index as i;\">\n                        <li class=\"list-group-item d-flex justify-content-start\">\n                            Löse aus sobald die Variable \n                            <i class=\"ml-auto material-icons\" title=\"Variable entfernen\" (click)=\"removeVariable(variab.id, i)\">delete</i>\n                            <select name=\"variable\" [(ngModel)]=\"variab.id\" class=\"form-control\">\n                                <option *ngFor=\"let type of variables | ObjNgFor\" [ngValue]=\"type.id\">{{type.name}}({{type.id}})</option>\n                            </select>\n                            <select name=\"variableMode\" [(ngModel)]=\"variab.mode\" class=\"form-control\">\n                                <option *ngFor=\"let mode of variableModes\" [ngValue]=\"mode.value\">{{mode.name}}</option>\n                            </select>\n                            <input *ngIf=\"variab.mode != 'onChange'\" type=\"text\" class=\"form-control\" [(ngModel)]=\"variab.value\">\n                        </li>\n                    </div>\n                </div>\n                <li class=\"list-group-item\">\n                    <form class=\"form-inline\">\n                        <select name=\"addVariableType\" [(ngModel)]=\"addVariableType\" class=\"form-control mr-sm-2\">\n                            <option value=\"false\" disabled>Wähle eine Variable</option>\n                            <option *ngFor=\"let type of variables | ObjNgFor\" [ngValue]=\"type.id\">{{type.name}}({{type.id}})</option>\n                        </select>\n                        <button class=\"btn btn-success\" (click)=\"addVariable(addVariableType)\">\n                            Hinzufügen\n                        </button>\n                    </form>\n                </li>\n            </ul>\n        </div> \n        <br>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Bedingungen\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li *ngIf=\"timer.conditions.length == 0\" class=\"list-group-item list-group-item-info\">\n                    Noch keine Bedingungen hinzugefügt!\n                </li>\n                <div *ngIf=\"!timer.conditions == false\">\n                    <li class=\"list-group-item d-flex justify-content-start\" *ngFor=\"let con of timer.conditions; index as i;\" [ngSwitch]=\"con.type\">\n                        <div *ngSwitchCase=\"'random'\" class=\"d-flex\">\n                            Zufällig zwischen <timepicker [(ngModel)]=\"con.start\" [showMeridian]=\"false\" [showSpinners]=\"false\"></timepicker> und <timepicker [(ngModel)]=\"con.stop\" [showMeridian]=\"false\" [showSpinners]=\"false\"></timepicker>\n                        </div>\n                        <!-- <TimerConditionVariable *ngSwitchCase=\"'variable'\"></TimerConditionVariable> -->\n                        <!-- <app-timer-condition-variable *ngSwitchCase=\"'variable'\"></app-timer-condition-variable> -->\n                        <div *ngSwitchCase=\"'variable'\" class=\"\">\n                            Wenn die Variable\n                            <select name=\"variable\" [(ngModel)]=\"con.id\" class=\"form-control\">\n                                <option *ngFor=\"let type of variables | ObjNgFor\" [ngValue]=\"type.id\">{{type.name}}({{type.id}})</option>\n                            </select>\n                            <select name=\"variableMode\" [(ngModel)]=\"con.mode\" class=\"form-control\">\n                                <option *ngFor=\"let mode of variableModes\" [ngValue]=\"mode.value\">{{mode.name}}</option>\n                            </select>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"con.value\">\n                        </div>\n                        <div *ngSwitchCase=\"'time'\" class=\"d-flex\">\n                            Um <timepicker [(ngModel)]=\"con.time\" [showMeridian]=\"false\" [showSpinners]=\"false\"></timepicker>\n                        </div>\n                        <div *ngSwitchCase=\"'sun'\" class=\"d-flex\">\n                            <select name=\"con.sun\" [(ngModel)]=\"con.sun\" class=\"form-control\">\n                                <option value=\"sunrise\">Sonnenaufgang</option>\n                                <option value=\"sunset\">Sonnenuntergang</option>\n                            </select>\n                            <!--\n\n                                <ng-template #popContent>\n                                    <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" [(ngModel)]=\"con.offset.active\" type=\"checkbox\">\n                                        Zeitverschiebung nach\n                                    </label>\n                                </div>\n                                <div *ngIf=\"con.offset.active\">\n                                    <div class=\"btn-group\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"con.offset.random\">\n                                        <label ngbButtonLabel class=\"btn-sm btn-secondary\">\n                                            <input ngbButton type=\"radio\" [value]=\"true\">Zufall\n                                        </label>\n                                        <label ngbButtonLabel class=\"btn-sm btn-secondary\">\n                                            <input ngbButton type=\"radio\" [value]=\"false\">fest Vorgegeben\n                                        </label>\n                                    </div>\n                                    {{con.offset|json}}\n                                    <div class=\"btn-group\" [(ngModel)]=\"con.offset.after\">\n                                        <label ngbButtonLabel class=\"btn btn-sm btn-secondary\" [(ngModel)]=\"con.offset.after\" [class.active]=\"con.offset.after == 'true'\">\n                                            <input name=\"after\" type=\"radio\" [value]=\"true\">hinten\n                                        </label>\n                                        <label ngbButtonLabel class=\"btn btn-sm btn-secondary\" [(ngModel)]=\"con.offset.after\" [class.active]=\"con.offset.after == 'false'\">\n                                            <input name=\"after\" type=\"radio\" [value]=\"false\">vorne\n                                        </label>\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"con.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Minimale Zeitverschiebung:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"{{con.offset.max - 1}}\" [(ngModel)]=\"con.offset.min\" id=\"formGroupExampleInput2\" placeholder=\"1\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"con.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Maximale Zeitverschiebung:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"{{con.offset.min + 1}}\" [(ngModel)]=\"con.offset.max\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"!con.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Minuten:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"0\" [(ngModel)]=\"con.offset.minutes\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                    </div>\n                                </div>\n                            </ng-template>\n                            <i class=\"material-icons\" [outsideClick]=\"true\" [popover]=\"popContent\" placement=\"auto\" popoverTitle=\"Einstellungen\">more_vert</i>\n                        -->\n\n                            <ng-template #popContent>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label  mb-3\">\n                                            <input class=\"form-check-input\" [(ngModel)]=\"con.offset.active\" type=\"checkbox\">\n                                            Zeitverschiebung nach\n                                        </label>\n                                    </div>\n                                    <div *ngIf=\"con.offset.active\">\n                                        <div class=\"btn-group btn-group-sm mr-3\">\n                                            <label class=\"btn btn-secondary\" [ngClass]=\"{active: con.offset.after}\">\n                                                <input type=\"radio\" [(ngModel)]=\"con.offset.after\" name=\"after\" class=\"custom-control-input\" [value]=\"true\">\n                                                hinten\n                                            </label>\n                                            <label class=\"btn btn-secondary\" [ngClass]=\"{active: !con.offset.after}\">\n                                                <input type=\"radio\" [(ngModel)]=\"con.offset.after\" name=\"after\" class=\"custom-control-input\" [value]=\"false\">\n                                                vorne\n                                            </label>\n                                        </div>\n                                        <div class=\"btn-group btn-group-sm mr-3\">\n                                            <label class=\"btn btn-secondary\" [ngClass]=\"{active: con.offset.random}\">\n                                                <input type=\"radio\" [(ngModel)]=\"con.offset.random\" name=\"random\" class=\"custom-control-input\" [value]=\"true\">\n                                                zufällig\n                                            </label>\n                                            <label class=\"btn btn-secondary\" [ngClass]=\"{active: !con.offset.random}\">\n                                                <input type=\"radio\" [(ngModel)]=\"con.offset.random\" name=\"random\" class=\"custom-control-input\" [value]=\"false\">\n                                                fest vorgegeben\n                                            </label>\n                                        </div>\n                                        <div class=\"form-group\" *ngIf=\"con.offset.random\">\n                                            <label for=\"formGroupExampleInput2\">Minimale Zeitverschiebung:</label>\n                                            <input type=\"number\" class=\"form-control\" min=\"0\" max=\"{{con.offset.max - 1}}\" [(ngModel)]=\"con.offset.min\" id=\"formGroupExampleInput2\" placeholder=\"1\">\n                                        </div>\n                                        <div class=\"form-group\" *ngIf=\"con.offset.random\">\n                                            <label for=\"formGroupExampleInput2\">Maximale Zeitverschiebung:</label>\n                                            <input type=\"number\" class=\"form-control\" min=\"{{con.offset.min + 1}}\" [(ngModel)]=\"con.offset.max\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                        </div>\n                                        <div class=\"form-group\" *ngIf=\"!con.offset.random\">\n                                            <label for=\"formGroupExampleInput2\">Minuten:</label>\n                                            <input type=\"number\" class=\"form-control\" min=\"0\" [(ngModel)]=\"con.offset.minutes\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                        </div>\n                                    </div>\n                                </ng-template>\n                                <i class=\"material-icons\" [popover]=\"popContent\" [outsideClick]=\"true\" placement=\"left\" popoverTitle=\"Einstellungen\" [popoverContext]=\"con\">more_vert</i>\n                        </div> \n                        <div *ngSwitchCase=\"'range'\"  class=\"d-flex\" title=\"Zeitverschiebung\">\n                            Von <timepicker [(ngModel)]=\"con.start\" [showMeridian]=\"false\" [showSpinners]=\"false\"></timepicker> bis <timepicker [(ngModel)]=\"con.stop\" [showMeridian]=\"false\" [showSpinners]=\"false\"></timepicker>\n                        </div>\n                        <div *ngSwitchCase=\"'weekdays'\" class=\"d-flex\">\n                            <div class=\"btn-group\" data-toggle=\"buttons\">\n                                <label class=\"btn btn-secondary\" ngbButtonLabel [class.active]=\"con.weekdays['1']\">\n                                    <input type=\"checkbox\" hidden ngbButton [(ngModel)]=\"con.weekdays['1']\">Montag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel [class.active]=\"con.weekdays['2']\">\n                                    <input type=\"checkbox\" hidden ngbButton [(ngModel)]=\"con.weekdays['2']\">Dienstag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel [class.active]=\"con.weekdays['3']\">\n                                    <input type=\"checkbox\" hidden ngbButton [(ngModel)]=\"con.weekdays['3']\">Mittwoch\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel [class.active]=\"con.weekdays['4']\">\n                                    <input type=\"checkbox\" hidden ngbButton [(ngModel)]=\"con.weekdays['4']\">Donnerstag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel [class.active]=\"con.weekdays['5']\">\n                                    <input type=\"checkbox\" hidden ngbButton [(ngModel)]=\"con.weekdays['5']\">Freitag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel [class.active]=\"con.weekdays['6']\">\n                                    <input type=\"checkbox\" hidden ngbButton [(ngModel)]=\"con.weekdays['6']\">Samstag\n                                </label>\n                                <label class=\"btn btn-secondary\" ngbButtonLabel [class.active]=\"con.weekdays['0']\">\n                                    <input type=\"checkbox\" hidden ngbButton [(ngModel)]=\"con.weekdays['0']\">Sonntag\n                                </label>\n                            </div>\n                        </div>\n                        <div *ngSwitchDefault>{{con | json}}</div>\n                        <i class=\"ml-auto material-icons\" title =\"Bedingung entfernen\" (click)=\"removeCondition(i)\">delete</i>\n                    </li>\n                </div>\n                <li class=\"list-group-item\">\n                    <form class=\"form-inline\">\n                        <select name=\"addConditionType\" [(ngModel)]=\"addConditionType\" class=\"form-control mr-sm-2\">\n                            <option value=\"false\" disabled>Wähle eine Bedingung</option>\n                            <option *ngFor=\"let type of conditions\" [ngValue]=\"type.value\">{{type.name}}</option>\n                        </select>\n                        <button class=\"btn btn-success\" (click)=\"addCondition(addConditionType)\">\n                            Hinzufügen\n                        </button>\n                    </form>\n                </li>\n            </ul>\n        </div>\n        <br>\n        <div class=\"card\">\n            <div class=\"card-header d-flex justify-content-between\">\n                Aktionen\n                <i (click)='switchAll(\"timers\", timer)' *ngIf=\"timer.id\" title=\"Aktionen zum testen jetzt ausführen!\" class=\"material-icons\">play_circle_outline</i>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li *ngIf=\"timer.actions.length == 0\" class=\"list-group-item list-group-item-info\">\n                        Noch keine Aktionen hinzugefügt!\n                </li>\n                <li class=\"list-group-item d-flex justify-content-start\" *ngFor=\"let act of  timer.actions; index as i;\" [ngSwitch]=\"act.type\">\n                        <app-timer-device *ngSwitchCase=\"'device'\" [action]=\"act\"></app-timer-device>\n                        <app-timer-group *ngSwitchCase=\"'group'\" [action]=\"act\"></app-timer-group>\n                        <app-timer-alert *ngSwitchCase=\"'alert'\" [action]=\"act\"></app-timer-alert>\n                        <app-timer-room *ngSwitchCase=\"'room'\" [action]=\"act\"></app-timer-room>\n                        <!-- <app-timer-pushbullet *ngSwitchCase=\"'pushbullets'\" [action]=\"act\"></app-timer-pushbullet> -->\n                        <div *ngSwitchCase=\"'setVariable'\">\n                            <select name=\"variable\" [(ngModel)]=\"act.action\" class=\"form-control\">\n                                <option *ngFor=\"let type of variables | ObjNgFor\" [ngValue]=\"type\">{{type.name}}({{type.id}})</option>\n                            </select>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"act.action.status\">\n                        </div>\n                        <div *ngSwitchCase=\"'url'\" class=\"w-50\">Url: <input class=\"w-75\" type=\"text\" [(ngModel)]=\"act.action.url\" placeholger=\"http://ifttt.de\"></div>\n                        <div  *ngSwitchDefault>{{act.type}}:{{act | json}}</div>\n                        <div class=\"ml-auto d-flex\">\n                            <div class=\"form-check\" style=\"margin-top: auto;\">\n                                Interval: <input class=\"\" [(ngModel)]=\"act.activeInterval\" type=\"checkbox\">\n                            </div>\n                            <input type=\"number\" [(ngModel)]=\"act.number\" *ngIf=\"act.activeInterval\">\n                            <select [(ngModel)]=\"act.unit\" *ngIf=\"act.activeInterval\">\n                                <option value=\"sec\">Sekunden</option>\n                                <option value=\"min\">Minuten</option>\n                                <option value=\"hour\">Stunden</option>\n                                <option value=\"day\">Tag</option>\n                                <option value=\"day of the week\">Tag der Woche</option>\n                                <option value=\"day of the month\">Tag des Monats</option>\n                            </select>\n                            <ng-template #popContent>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label  mb-3\">\n                                        <input class=\"form-check-input\" [(ngModel)]=\"act.offset.active\" type=\"checkbox\">\n                                        Zeitverschiebung nach\n                                    </label>\n                                </div>\n                                <div *ngIf=\"act.offset.active\">\n                                    <div class=\"btn-group btn-group-sm mr-3\">\n                                        <label class=\"btn btn-secondary\" [ngClass]=\"{active: act.offset.after}\">\n                                            <input type=\"radio\" [(ngModel)]=\"act.offset.after\" name=\"after\" class=\"custom-control-input\" [value]=\"true\">\n                                            hinten\n                                        </label>\n                                        <label class=\"btn btn-secondary\" [ngClass]=\"{active: !act.offset.after}\">\n                                            <input type=\"radio\" [(ngModel)]=\"act.offset.after\" name=\"after\" class=\"custom-control-input\" [value]=\"false\">\n                                            vorne\n                                        </label>\n                                    </div>\n                                    <div class=\"btn-group btn-group-sm mr-3\">\n                                        <label class=\"btn btn-secondary\" [ngClass]=\"{active: act.offset.random}\">\n                                            <input type=\"radio\" [(ngModel)]=\"act.offset.random\" name=\"random\" class=\"custom-control-input\" [value]=\"true\">\n                                            zufällig\n                                        </label>\n                                        <label class=\"btn btn-secondary\" [ngClass]=\"{active: !act.offset.random}\">\n                                            <input type=\"radio\" [(ngModel)]=\"act.offset.random\" name=\"random\" class=\"custom-control-input\" [value]=\"false\">\n                                            fest vorgegeben\n                                        </label>\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"act.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Minimale Zeitverschiebung:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"{{act.offset.max - 1}}\" [(ngModel)]=\"act.offset.min\" id=\"formGroupExampleInput2\" placeholder=\"1\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"act.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Maximale Zeitverschiebung:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"{{act.offset.min + 1}}\" [(ngModel)]=\"act.offset.max\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"!act.offset.random\">\n                                        <label for=\"formGroupExampleInput2\">Minuten:</label>\n                                        <input type=\"number\" class=\"form-control\" min=\"0\" [(ngModel)]=\"act.offset.minutes\" id=\"formGroupExampleInput2\" placeholder=\"18\">\n                                    </div>\n                                </div>\n                            </ng-template>\n                            <i class=\"material-icons\" [popover]=\"popContent\" [outsideClick]=\"true\" placement=\"left\" popoverTitle=\"Einstellungen\" [popoverContext]=\"act\">more_vert</i>\n                            <i class=\"material-icons\" title=\"Aktion entfernen\" (click)=\"removeAction(i)\">delete</i>\n                        </div>\n                </li>\n                <li class=\"list-group-item\">\n                    <form class=\"form-inline\">\n                        <select class=\"form-control mr-sm-2\" name=\"addActionType\" [(ngModel)]=\"addActionType\">\n                            <option disabled value=\"false\">Action auswählen</option>\n                            <option *ngFor=\"let action of actions\" [ngValue]=\"action.value\">{{action.name}}</option>\n                        </select>\n                        <button class=\"btn btn-success\" (click)=\"addAction(addActionType)\">\n                            Hinzufügen\n                        </button>\n                    </form>\n                </li>\n            </ul>\n        </div>\n        <br>\n        <div class=\"right\">\n            <button class=\"btn btn-success\" (click)=\"save()\">Speichern</button>\n            <button class=\"btn btn-danger\" (click)=\"cancel()\">Abbrechen</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/timer-edit/timer-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/timer-edit/timer-edit.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".red{\n    background:red;\n    border-radius: 40px;\n    width:40px;\n    height: 40px;\n    border-radius: 50px/50px;\n    border:none;\n    margin-left:5px;\n}\n\n.material-icons {\n    margin-top: auto;\n}\n\n.points{\n    position:relative;\n    top: 6px;\n    left: 6px;\n    color:white;\n}\n\n.right{\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXItZWRpdC90aW1lci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBR1osd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdGltZXItZWRpdC90aW1lci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVke1xuICAgIGJhY2tncm91bmQ6cmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgd2lkdGg6NDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4LzUwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweC81MHB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbi1sZWZ0OjVweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4ucG9pbnRze1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHRvcDogNnB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuLnJpZ2h0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/timer-edit/timer-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/timer-edit/timer-edit.component.ts ***!
  \****************************************************/
/*! exports provided: TimerEditComponent, TimerGroupComponent, TimerDeviceComponent, TimerAlertComponent, TimerRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerEditComponent", function() { return TimerEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerGroupComponent", function() { return TimerGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerDeviceComponent", function() { return TimerDeviceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerAlertComponent", function() { return TimerAlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerRoomComponent", function() { return TimerRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_service_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service.global */ "./src/app/app.service.global.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");





let TimerEditComponent = class TimerEditComponent {
    constructor(route, router, globalVar, socket) {
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
    ngOnInit() {
        this.id = parseInt(this.route.snapshot.paramMap.get('id')) || undefined;
        if (this.id) {
            this.socket.emit("timers:get", { "get": this.id });
            this.socket.on('timer', data => {
                console.log(data);
                if (this.id === parseInt(data[data.type].id)) {
                    this.timer = data[data.type];
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
        this.socket.on("variables", data => {
            if (data.type == "get") {
                this.variables = data.get;
            }
        });
    }
    addAction(type) {
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
    }
    addVariable(id) {
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
    }
    addCondition(type) {
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
    }
    removeAction(index) {
        this.timer.actions.splice(index, 1);
    }
    removeCondition(index) {
        this.timer.conditions.splice(index, 1);
    }
    removeVariable(id, index) {
        this.timer.variables[id].splice(index, 1);
        if (this.timer.variables[id].length == 0) {
            delete this.timer.variables[id];
        }
        for (let index in this.timer.variables) {
            if (this.timer.variables.hasOwnProperty(index)) {
                return;
            }
        }
        this.timer.variables = false;
    }
    save() {
        console.log(this.timer);
        this.socket.emit('timers:save', { user: this.globalVar.activeUser, save: this.timer });
        this.router.navigate(['/timers']);
    }
    cancel() {
        this.router.navigate(['/timers']);
    }
};
TimerEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }
];
TimerEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./timer-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/timer-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timer-edit.component.css */ "./src/app/timer-edit/timer-edit.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"],
        _app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
], TimerEditComponent);

let TimerGroupComponent = class TimerGroupComponent {
    constructor(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
        this.groups = {};
    }
    ngOnInit() {
        this.socket.emit("groups:getAll", "");
        this.socket.on("groups", data => {
            this.groups = data.get;
            if (this.action.action.id && this.action.action != this.groups[this.action.action.id]) {
                this.action.action = this.groups[this.action.action.id];
            }
        });
    }
};
TimerGroupComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"] }
];
TimerGroupComponent.propDecorators = {
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
TimerGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer-group',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./templates/action-group.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-group.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timer-edit.component.css */ "./src/app/timer-edit/timer-edit.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
        _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])
], TimerGroupComponent);

let TimerDeviceComponent = class TimerDeviceComponent {
    constructor(socket) {
        this.socket = socket;
    }
    ngOnInit() {
        this.socket.emit("devices:devicelist", "");
        this.socket.on("devicelist", data => {
            this.devicelist = data.get;
            if (this.action.action.deviceid && this.action.action != this.devicelist[this.action.action.deviceid]) {
                this.action.action = this.devicelist[this.action.action.deviceid];
            }
        });
    }
};
TimerDeviceComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }
];
TimerDeviceComponent.propDecorators = {
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
TimerDeviceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer-device',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./templates/action-device.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-device.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timer-edit.component.css */ "./src/app/timer-edit/timer-edit.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
], TimerDeviceComponent);

let TimerAlertComponent = class TimerAlertComponent {
    constructor(socket, globalVar) {
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
};
TimerAlertComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"] }
];
TimerAlertComponent.propDecorators = {
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
TimerAlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer-alert',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./templates/action-alert.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-alert.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timer-edit.component.css */ "./src/app/timer-edit/timer-edit.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
        _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])
], TimerAlertComponent);

// @Component({
//   selector: 'app-timer-pushbullet',
//   styleUrls: ['./timer-edit.component.css'],
//   templateUrl: './templates/action-pushbullet.html'
// })
// export class TimerPushbulletComponent {
//     @Input() action: any;
//     constructor(
//         private socket: SocketService,
//         public globalVar: GlobalObjectsService
//     ){}
// }
let TimerRoomComponent = class TimerRoomComponent {
    constructor(socket, globalVar) {
        this.socket = socket;
        this.globalVar = globalVar;
        this.devices = {};
    }
    ngOnInit() {
        this.socket.emit("devices:get", "");
        this.socket.on("devices", data => {
            this.devices = data.get;
            if (this.action.action.id && this.action.action != this.devices[this.action.action.id]) {
                this.action.action = this.devices[this.action.action.id];
            }
        });
    }
};
TimerRoomComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"] }
];
TimerRoomComponent.propDecorators = {
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
TimerRoomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer-room',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./templates/action-room.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-edit/templates/action-room.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timer-edit.component.css */ "./src/app/timer-edit/timer-edit.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
        _app_service_global__WEBPACK_IMPORTED_MODULE_3__["GlobalObjectsService"]])
], TimerRoomComponent);

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


/***/ }),

/***/ "./src/app/timer-edit/timer-edit.module.ts":
/*!*************************************************!*\
  !*** ./src/app/timer-edit/timer-edit.module.ts ***!
  \*************************************************/
/*! exports provided: ObjNgFor, TimerEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjNgFor", function() { return ObjNgFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerEditModule", function() { return TimerEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_service_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service.global */ "./src/app/app.service.global.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timer-edit.component */ "./src/app/timer-edit/timer-edit.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");








// import { NgbModule }                from '@ng-bootstrap/ng-bootstrap';



let ObjNgFor = class ObjNgFor {
    transform(value, args = null) {
        if (value) {
            return Object.keys(value).map(key => value[key]);
        }
    }
};
ObjNgFor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"])({ name: 'ObjNgFor', pure: false })
], ObjNgFor);

let TimerEditModule = class TimerEditModule {
};
TimerEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerEditComponent"],
            ObjNgFor,
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerGroupComponent"],
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerDeviceComponent"],
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerAlertComponent"],
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerRoomComponent"]
            // ,TimerPushbulletComponent
            // ,TimerConditionVariableComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            // Bootstrap
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: ':id',
                    component: _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerEditComponent"]
                }, {
                    path: '',
                    component: _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerEditComponent"]
                }
            ])
        ],
        exports: [
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerEditComponent"],
            ObjNgFor,
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerGroupComponent"],
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerDeviceComponent"],
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerAlertComponent"]
            // ,TimerPushbulletComponent
            ,
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerRoomComponent"]
        ],
        providers: [
            _app_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
            _app_service_global__WEBPACK_IMPORTED_MODULE_5__["GlobalObjectsService"]
        ],
        bootstrap: [
            _timer_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimerEditComponent"]
        ]
    })
], TimerEditModule);



/***/ })

}]);
//# sourceMappingURL=timer-edit-timer-edit-module-es2015.js.map