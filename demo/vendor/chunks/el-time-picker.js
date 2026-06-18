globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { r as e } from "./shared/rolldown-runtime.js";
import { A as t, Ft as n, H as r, M as i, Mt as a, N as o, T as s, Tt as c, U as l, _ as u, b as d, ut as f, v as p, w as m, x as ee, yt as h } from "./vue.runtime.js";
import { r as g } from "./shared/lodash/_Uint8Array.js";
import { t as _ } from "./shared/lodash/_baseFindIndex.js";
import { n as v, t as y } from "./shared/lodash/isArrayLikeObject.js";
import { n as b } from "./shared/lodash/flatten.js";
import { t as x } from "./shared/element-plus/utils/vue/install.js";
import { a as S, i as C, r as w } from "./shared/lodash/isEqual.js";
import { r as T } from "./shared/element-plus/constants/event.js";
import { n as E, r as D } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as O } from "./shared/element-plus/hooks/use-namespace.js";
import { a as te, n as ne } from "./shared/element-plus/constants/aria.js";
import { n as re } from "./shared/element-plus/hooks/use-locale.js";
import { t as ie } from "./shared/dayjs.js";
import { _ as k, a as A, c as j, d as M, f as N, g as P, h as ae, i as oe, l as se, m as F, n as ce, o as I, p as le, r as L, s as R, t as z, u as B } from "./el-time-picker/utils.js";
import { a as ue, c as V, i as de, n as H, r as fe, t as U } from "./el-time-picker/props/shared.js";
import { t as W } from "./shared/dayjs/customParseFormat.js";
import { i as G, n as K, r as q, t as J } from "./el-time-picker/common/props.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/noop.js
function pe() {}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNaN.js
function me(e) {
	return e !== e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_strictIndexOf.js
function Y(e, t, n) {
	for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIndexOf.js
function X(e, t, n) {
	return t === t ? Y(e, t, n) : _(e, me, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayIncludes.js
function Z(e, t) {
	return !!(e != null && e.length) && X(e, t, 0) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayIncludesWith.js
function he(e, t, n) {
	for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createSet.js
var ge = g && 1 / w(new g([, -0]))[1] == Infinity ? function(e) {
	return new g(e);
} : pe, _e = 200;
function ve(e, t, n) {
	var r = -1, i = Z, a = e.length, o = !0, s = [], c = s;
	if (n) o = !1, i = he;
	else if (a >= _e) {
		var l = t ? null : ge(e);
		if (l) return w(l);
		o = !1, i = C, c = new S();
	} else c = t ? [] : s;
	outer: for (; ++r < a;) {
		var u = e[r], d = t ? t(u) : u;
		if (u = n || u !== 0 ? u : 0, o && d === d) {
			for (var f = c.length; f--;) if (c[f] === d) continue outer;
			t && c.push(d), s.push(u);
		} else i(c, d, n) || (c !== s && c.push(d), s.push(u));
	}
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/union.js
var Q = v(function(e) {
	return ve(b(e, 1, y, !0));
}), ye = E({
	...V,
	parsedValue: { type: D(Array) }
}), $ = /* @__PURE__ */ e(ie(), 1), be = ["disabled"], xe = /* @__PURE__ */ s({
	__name: "panel-time-range",
	props: ye,
	emits: [
		"pick",
		"select-range",
		"set-picker-option"
	],
	setup(e, { emit: i }) {
		let s = e, l = i, g = (e, t) => {
			let n = [];
			for (let r = e; r <= t; r++) n.push(r);
			return n;
		}, { t: _, lang: v } = re(), y = O("time"), b = O("picker"), x = t(oe), { arrowControl: S, disabledHours: C, disabledMinutes: w, disabledSeconds: T, defaultValue: E } = x.props, D = u(() => [
			y.be("range-picker", "body"),
			y.be("panel", "content"),
			y.is("arrow", S),
			N.value ? "has-seconds" : ""
		]), ie = u(() => [
			y.be("range-picker", "body"),
			y.be("panel", "content"),
			y.is("arrow", S),
			N.value ? "has-seconds" : ""
		]), k = u(() => s.parsedValue[0]), A = u(() => s.parsedValue[1]), j = de(s, {
			modelValue: u(() => x.props.modelValue),
			valueOnClear: u(() => x?.emptyValues ? x.emptyValues.valueOnClear.value : null)
		}), M = () => {
			let e = j.value;
			l("pick", e, !1), o(() => {
				j.value = e;
			});
		}, N = u(() => s.format.includes("ss")), P = u(() => s.format.includes("A") ? "A" : s.format.includes("a") ? "a" : ""), ae = (e = !1) => {
			l("pick", [k.value, A.value], e);
		}, se = (e) => {
			I(e.millisecond(0), A.value);
		}, F = (e) => {
			I(k.value, e.millisecond(0));
		}, ce = (e) => {
			let t = e.map((e) => (0, $.default)(e).locale(v.value)), n = q(t);
			return t[0].isSame(n[0]) && t[1].isSame(n[1]);
		}, I = (e, t) => {
			s.visible && l("pick", [e, t], !0);
		}, le = u(() => k.value > A.value), L = f([0, 2]), R = (e, t) => {
			l("select-range", e, t, "min"), L.value = [e, t];
		}, z = u(() => N.value ? 11 : 8), B = (e, t) => {
			l("select-range", e, t, "max");
			let n = h(z);
			L.value = [e + n, t + n];
		}, V = (e) => {
			let t = N.value ? [
				0,
				3,
				6,
				11,
				14,
				17
			] : [
				0,
				3,
				8,
				11
			], n = ["hours", "minutes"].concat(N.value ? ["seconds"] : []), r = (t.indexOf(L.value[0]) + e + t.length) % t.length, i = t.length / 2;
			r < i ? Y.start_emitSelectRange(n[r]) : Y.end_emitSelectRange(n[r - i]);
		}, U = (e) => {
			let t = ne(e), { left: n, right: r, up: i, down: a } = te;
			if ([n, r].includes(t)) {
				V(t === n ? -1 : 1), e.preventDefault();
				return;
			}
			if ([i, a].includes(t)) {
				let n = t === i ? -1 : 1;
				Y[`${L.value[0] < z.value ? "start" : "end"}_scrollDown`](n), e.preventDefault();
				return;
			}
		}, W = (e, t) => {
			let n = C ? C(e) : [], r = e === "start", i = (t || (r ? A.value : k.value)).hour();
			return Q(n, r ? g(i + 1, 23) : g(0, i - 1));
		}, G = (e, t, n) => {
			let r = w ? w(e, t) : [], i = t === "start", a = n || (i ? A.value : k.value);
			if (e !== a.hour()) return r;
			let o = a.minute();
			return Q(r, i ? g(o + 1, 59) : g(0, o - 1));
		}, K = (e, t, n, r) => {
			let i = T ? T(e, t, n) : [], a = n === "start", o = r || (a ? A.value : k.value), s = o.hour(), c = o.minute();
			if (e !== s || t !== c) return i;
			let l = o.second();
			return Q(i, a ? g(l + 1, 59) : g(0, l - 1));
		}, q = ([e, t]) => [X(e, "start", !0, t), X(t, "end", !1, e)], { getAvailableHours: J, getAvailableMinutes: pe, getAvailableSeconds: me } = fe(W, G, K), { timePickerOptions: Y, getAvailableTime: X, onSetOption: Z } = ue({
			getAvailableHours: J,
			getAvailableMinutes: pe,
			getAvailableSeconds: me
		});
		return l("set-picker-option", ["parseUserInput", (e) => e ? c(e) ? e.map((e) => (0, $.default)(e, s.format).locale(v.value)) : (0, $.default)(e, s.format).locale(v.value) : null]), l("set-picker-option", ["isValidValue", ce]), l("set-picker-option", ["handleKeydownInput", U]), l("set-picker-option", ["getDefaultValue", () => {
			if (c(E)) return E.map((e) => (0, $.default)(e).locale(v.value));
			let e = (0, $.default)(E).locale(v.value);
			return [e, e.add(60, "m")];
		}]), l("set-picker-option", ["getRangeAvailableTime", q]), l("set-picker-option", ["handleCancel", M]), (e, t) => e.actualVisible ? (r(), ee("div", {
			key: 0,
			class: a([h(y).b("range-picker"), h(b).b("panel")])
		}, [p("div", { class: a(h(y).be("range-picker", "content")) }, [p("div", { class: a(h(y).be("range-picker", "cell")) }, [p("div", { class: a(h(y).be("range-picker", "header")) }, n(h(_)("el.datepicker.startTime")), 3), p("div", { class: a(D.value) }, [m(H, {
			ref: "minSpinner",
			role: "start",
			"show-seconds": N.value,
			"am-pm-mode": P.value,
			"arrow-control": h(S),
			"spinner-date": k.value,
			"disabled-hours": W,
			"disabled-minutes": G,
			"disabled-seconds": K,
			onChange: se,
			onSetOption: h(Z),
			onSelectRange: R
		}, null, 8, [
			"show-seconds",
			"am-pm-mode",
			"arrow-control",
			"spinner-date",
			"onSetOption"
		])], 2)], 2), p("div", { class: a(h(y).be("range-picker", "cell")) }, [p("div", { class: a(h(y).be("range-picker", "header")) }, n(h(_)("el.datepicker.endTime")), 3), p("div", { class: a(ie.value) }, [m(H, {
			ref: "maxSpinner",
			role: "end",
			"show-seconds": N.value,
			"am-pm-mode": P.value,
			"arrow-control": h(S),
			"spinner-date": A.value,
			"disabled-hours": W,
			"disabled-minutes": G,
			"disabled-seconds": K,
			onChange: F,
			onSetOption: h(Z),
			onSelectRange: B
		}, null, 8, [
			"show-seconds",
			"am-pm-mode",
			"arrow-control",
			"spinner-date",
			"onSetOption"
		])], 2)], 2)], 2), p("div", { class: a(h(y).be("panel", "footer")) }, [p("button", {
			type: "button",
			class: a([h(y).be("panel", "btn"), "cancel"]),
			onClick: t[0] ||= (e) => M()
		}, n(h(_)("el.datepicker.cancel")), 3), p("button", {
			type: "button",
			class: a([h(y).be("panel", "btn"), "confirm"]),
			disabled: le.value,
			onClick: t[1] ||= (e) => ae()
		}, n(h(_)("el.datepicker.confirm")), 11, be)], 2)], 2)) : d("v-if", !0);
	}
}), Se = /* @__PURE__ */ e(W(), 1);
$.default.extend(Se.default);
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/time-picker/index.mjs
var Ce = x(/* @__PURE__ */ s({
	name: "ElTimePicker",
	install: null,
	props: {
		...K,
		isRange: Boolean
	},
	emits: [T],
	setup(e, t) {
		let n = f(), [r, a] = e.isRange ? ["timerange", xe] : ["time", U], o = (e) => t.emit(T, e);
		return l(A, e.popperOptions), t.expose({
			focus: () => {
				n.value?.focus();
			},
			blur: () => {
				n.value?.blur();
			},
			handleOpen: () => {
				n.value?.handleOpen();
			},
			handleClose: () => {
				n.value?.handleClose();
			}
		}), () => m(J, i(e, {
			ref: n,
			type: r,
			format: e.format ?? "HH:mm:ss",
			"onUpdate:modelValue": o
		}), { default: (e) => m(a, e, null) });
	}
}));
//#endregion
export { J as CommonPicker, z as DEFAULT_FORMATS_DATE, ce as DEFAULT_FORMATS_DATEPICKER, L as DEFAULT_FORMATS_TIME, Ce as ElTimePicker, Ce as default, oe as PICKER_BASE_INJECTION_KEY, A as PICKER_POPPER_OPTIONS_INJECTION_KEY, I as ROOT_COMMON_PICKER_INJECTION_KEY, U as TimePickPanel, j as buildTimeList, se as dateEquals, B as dayOrDaysToDate, M as extractDateFormat, N as extractTimeFormat, le as formatter, F as makeList, ae as parseDate, P as rangeArr, K as timePickerDefaultProps, q as timePickerRangeTriggerProps, G as timePickerRngeTriggerProps, R as timeUnits, k as valueEquals };
