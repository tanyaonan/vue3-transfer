globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, P as a, T as o, U as s, _ as c, c as l, d as u, g as d, h as f, s as ee, u as p, x as m, z as h } from "./vue.runtime.js";
import { N as g, b as te, g as _, l as v, y } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as b, o as x, r as S, s as C, t as w } from "./shared/wot-ui/common/props.ts.js";
import { t as ne } from "./wd-popup.js";
import { t as T } from "./shared/wot-ui/common/formatDate.ts.js";
import { t as re } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { r as E, t as D } from "./wd-datetime-picker-view.js";
import { t as O } from "./shared/wot-ui/common/interceptor.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-datetime-picker/types.ts
var k = /* @__PURE__ */ new Date(), A = new Date(k.getFullYear() - 10, 0, 1).getTime(), j = new Date(k.getFullYear() + 10, 11, 31, 23, 59, 59).getTime(), M = {
	...w,
	itemHeight: b(44),
	visibleItemCount: b(6),
	title: String,
	cancelButtonText: String,
	confirmButtonText: String,
	closeOnClickModal: S(!0),
	safeAreaInsetBottom: S(!0),
	valueKey: C("value"),
	labelKey: C("label"),
	modelValue: x([
		String,
		Number,
		Array
	]),
	type: C("datetime"),
	minDate: b(A),
	maxDate: b(j),
	minHour: b(0),
	maxHour: b(23),
	minMinute: b(0),
	maxMinute: b(59),
	useSecond: S(!1),
	minSecond: b(0),
	maxSecond: b(59),
	filter: Function,
	formatter: Function,
	beforeConfirm: Function,
	displayFormatTabLabel: Function,
	zIndex: b(15),
	customViewClass: C(""),
	immediateChange: S(!1),
	rootPortal: S(!1),
	visible: S(!1)
}, N = { class: "wd-datetime-picker__wraper" }, P = {
	key: 0,
	class: "wd-datetime-picker__title-text"
}, ie = {
	key: 0,
	class: "wd-datetime-picker__range"
}, F = /* @__PURE__ */ d({
	name: "wd-datetime-picker",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: M,
	emits: [
		"change",
		"open",
		"toggle",
		"cancel",
		"confirm",
		"update:modelValue",
		"update:visible"
	],
	setup(d, { expose: b, emit: x }) {
		let S = d, C = x, { translate: w } = re("datetime-picker"), k = r(!1), A = r(!0), j = r(!1), M = r(""), F = r(""), I = ee(() => {
			if (j.value) {
				let e = M.value && U("before") || [], t = F.value && U("after") || [];
				return [$(e, !0), $(t, !0)];
			}
			return [];
		}), L = r(!1), R = r(!1), { proxy: ae } = c();
		i(() => S.modelValue, (e, t) => {
			te(e, t) || z();
		}, {
			deep: !0,
			immediate: !0
		}), i(() => S.visible, (e) => {
			e ? q() : k.value = !1;
		}), i(k, (e) => {
			C("update:visible", e);
		});
		function z() {
			let { modelValue: e } = S;
			_(e) ? (j.value = !0, M.value = v(G(!0)), F.value = v(G(!0, !0))) : M.value = v(G());
		}
		function B(e, t, n, r, i) {
			let { type: a, useSecond: o } = S, s = {
				datetime: o ? [
					"year",
					"month",
					"date",
					"hour",
					"minute",
					"second"
				] : [
					"year",
					"month",
					"date",
					"hour",
					"minute"
				],
				"year-month": ["year", "month"],
				year: ["year"],
				date: [
					"year",
					"month",
					"date"
				],
				time: o ? [
					"hour",
					"minute",
					"second"
				] : ["hour", "minute"]
			}[a], c = s.indexOf(t);
			if (c === -1) return !1;
			if (s.slice(0, c).every((e, t) => r[t] === i[t])) {
				let t = i[c];
				return e ? n > t : n < t;
			}
			return !1;
		}
		function oe(e) {
			return H(e, "start");
		}
		function V(e) {
			return H(e, "end");
		}
		let H = (e, t) => {
			let { type: n } = S, r = t === "start", i = M.value, a = F.value, o = E(r ? i : a, n, S.useSecond), s = E(r ? a : i, n, S.useSecond), c = {
				datetime: S.useSecond ? [
					"year",
					"month",
					"date",
					"hour",
					"minute",
					"second"
				] : [
					"year",
					"month",
					"date",
					"hour",
					"minute"
				],
				"year-month": ["year", "month"],
				year: ["year"],
				date: [
					"year",
					"month",
					"date"
				],
				time: S.useSecond ? [
					"hour",
					"minute",
					"second"
				] : ["hour", "minute"]
			}[n];
			return e.map((e, t) => {
				let n = c[t];
				return e.map((e) => {
					let t = B(r, n, e.value, o, s);
					return {
						...e,
						disabled: t
					};
				});
			});
		};
		o(() => {
			S.visible && q();
		});
		function U(e) {
			let t = e === "before" ? M.value : F.value, n = [];
			t && (n = E(t, S.type, S.useSecond));
			let r = {
				datetime: S.useSecond ? [
					"year",
					"month",
					"date",
					"hour",
					"minute",
					"second"
				] : [
					"year",
					"month",
					"date",
					"hour",
					"minute"
				],
				"year-month": ["year", "month"],
				year: ["year"],
				date: [
					"year",
					"month",
					"date"
				],
				time: S.useSecond ? [
					"hour",
					"minute",
					"second"
				] : ["hour", "minute"]
			}[S.type];
			return n.map((e, t) => {
				let n = r[t];
				return {
					[S.labelKey]: S.formatter ? S.formatter(n, g(e)) : g(e),
					[S.valueKey]: e
				};
			});
		}
		function W() {}
		function G(e, t) {
			let { modelValue: n, maxDate: r, minDate: i, type: a } = S;
			if (e) {
				let e = +!!t, o = _(n) ? n[e] : "", s = a === "time" ? T(r, "HH:mm") : r, c = a === "time" ? T(i, "HH:mm") : i;
				return o || (t ? s : c);
			} else return y(n) ? n : "";
		}
		function K() {
			q();
		}
		function se() {
			Y();
		}
		function q() {
			k.value || (C("open"), z(), k.value = !0, A.value = !0);
		}
		function J(e) {
			let t = e === "start";
			A.value !== t && (A.value = t, C("toggle", A.value ? M.value : F.value));
		}
		function ce({ value: e, columns: t }) {
			if (j.value) {
				let n = E(e, S.type, S.useSecond), r = E(F.value, S.type, S.useSecond);
				M.value = v(t.some((e, t) => B(!0, e.type, n[t], n, r)) ? F.value : e), m(() => {
					C("change", { value: [M.value, F.value] });
				});
			} else M.value = v(e), C("change", { value: M.value });
		}
		function le({ value: e, columns: t }) {
			let n = E(e, S.type, S.useSecond), r = E(M.value, S.type, S.useSecond);
			F.value = v(t.some((e, t) => B(!1, e.type, n[t], n, r)) ? M.value : e), m(() => {
				C("change", { value: [M.value, F.value] });
			});
		}
		function Y() {
			k.value = !1, C("cancel");
		}
		function X() {
			if (L.value) {
				R.value = !0;
				return;
			}
			let { beforeConfirm: e } = S;
			O(e, {
				args: [j.value ? [M.value, F.value] : M.value],
				done: () => {
					ue();
				}
			});
		}
		function Z() {
			L.value = !0;
		}
		function Q() {
			L.value = !1, setTimeout(() => {
				R.value && (R.value = !1, X());
			}, 50);
		}
		function ue() {
			let e = j.value ? [M.value, F.value] : M.value;
			k.value = !1, C("update:modelValue", e), C("confirm", { value: e });
		}
		function $(e, t = !1) {
			if (e.length === 0) return "";
			if (t && S.displayFormatTabLabel) return S.displayFormatTabLabel(e);
			switch (S.type) {
				case "year": return e[0].label;
				case "date": return `${e[0].label}-${e[1].label}-${e[2].label}`;
				case "year-month": return `${e[0].label}-${e[1].label}`;
				case "time": return S.useSecond ? `${e[0].label}:${e[1].label}:${e[2].label}` : `${e[0].label}:${e[1].label}`;
				case "datetime": return S.useSecond ? `${e[0].label}-${e[1].label}-${e[2].label} ${e[3].label}:${e[4].label}:${e[5].label}` : `${e[0].label}-${e[1].label}-${e[2].label} ${e[3].label}:${e[4].label}`;
			}
		}
		return b({
			open: K,
			close: se
		}), (r, i) => (t(), u("div", {
			class: e(`wd-datetime-picker ${r.customClass}`),
			style: n(r.customStyle)
		}, [f(ne, {
			modelValue: k.value,
			"onUpdate:modelValue": i[4] ||= (e) => k.value = e,
			position: "bottom",
			"hide-when-close": !1,
			"close-on-click-modal": r.closeOnClickModal,
			"safe-area-inset-bottom": r.safeAreaInsetBottom,
			"z-index": r.zIndex,
			"root-portal": r.rootPortal,
			onClose: Y,
			"custom-class": "wd-datetime-picker__popup"
		}, {
			default: a(() => [l("div", N, [
				l("div", {
					class: "wd-datetime-picker__title",
					onTouchmove: W
				}, [
					l("div", {
						class: "wd-datetime-picker__action",
						onClick: Y
					}, s(r.cancelButtonText || h(w)("cancel")), 1),
					r.title ? (t(), u("div", P, s(r.title), 1)) : p("", !0),
					l("div", {
						class: "wd-datetime-picker__action",
						onClick: X
					}, s(r.confirmButtonText || h(w)("confirm")), 1)
				], 32),
				j.value ? (t(), u("div", ie, [
					l("div", {
						class: e(`wd-datetime-picker__range-item ${A.value ? "is-active" : ""}`),
						onClick: i[0] ||= (e) => J("start")
					}, s(I.value[0] || h(w)("start")), 3),
					i[5] ||= l("div", { class: "wd-datetime-picker__range-separator" }, null, -1),
					l("div", {
						class: e(`wd-datetime-picker__range-item ${A.value ? "" : "is-active"}`),
						onClick: i[1] ||= (e) => J("end")
					}, s(I.value[1] || h(w)("end")), 3)
				])) : p("", !0),
				l("div", { class: e(A.value ? "wd-datetime-picker__show" : "wd-datetime-picker__hidden") }, [f(D, {
					"custom-class": r.customViewClass,
					type: r.type,
					modelValue: M.value,
					"onUpdate:modelValue": i[2] ||= (e) => M.value = e,
					"item-height": r.itemHeight,
					"visible-item-count": r.visibleItemCount,
					"value-key": r.valueKey,
					"label-key": r.labelKey,
					formatter: r.formatter,
					filter: r.filter,
					"column-formatter": h(_)(r.modelValue) ? oe : void 0,
					"max-hour": r.maxHour,
					"min-hour": r.minHour,
					"max-date": r.maxDate,
					"min-date": r.minDate,
					"max-minute": r.maxMinute,
					"min-minute": r.minMinute,
					"use-second": r.useSecond,
					"min-second": r.minSecond,
					"max-second": r.maxSecond,
					"immediate-change": r.immediateChange,
					onChange: ce,
					onPickstart: Z,
					onPickend: Q
				}, null, 8, [
					"custom-class",
					"type",
					"modelValue",
					"item-height",
					"visible-item-count",
					"value-key",
					"label-key",
					"formatter",
					"filter",
					"column-formatter",
					"max-hour",
					"min-hour",
					"max-date",
					"min-date",
					"max-minute",
					"min-minute",
					"use-second",
					"min-second",
					"max-second",
					"immediate-change"
				])], 2),
				l("div", { class: e(A.value ? "wd-datetime-picker__hidden" : "wd-datetime-picker__show") }, [f(D, {
					"custom-class": r.customViewClass,
					type: r.type,
					modelValue: F.value,
					"onUpdate:modelValue": i[3] ||= (e) => F.value = e,
					"item-height": r.itemHeight,
					"visible-item-count": r.visibleItemCount,
					"value-key": r.valueKey,
					"label-key": r.labelKey,
					formatter: r.formatter,
					filter: r.filter,
					"column-formatter": h(_)(r.modelValue) ? V : void 0,
					"max-hour": r.maxHour,
					"min-hour": r.minHour,
					"max-date": r.maxDate,
					"min-date": r.minDate,
					"max-minute": r.maxMinute,
					"min-minute": r.minMinute,
					"use-second": r.useSecond,
					"min-second": r.minSecond,
					"max-second": r.maxSecond,
					"immediate-change": r.immediateChange,
					onChange: le,
					onPickstart: Z,
					onPickend: Q
				}, null, 8, [
					"custom-class",
					"type",
					"modelValue",
					"item-height",
					"visible-item-count",
					"value-key",
					"label-key",
					"formatter",
					"filter",
					"column-formatter",
					"max-hour",
					"min-hour",
					"max-date",
					"min-date",
					"max-minute",
					"min-minute",
					"use-second",
					"min-second",
					"max-second",
					"immediate-change"
				])], 2)
			])]),
			_: 1
		}, 8, [
			"modelValue",
			"close-on-click-modal",
			"safe-area-inset-bottom",
			"z-index",
			"root-portal"
		])], 6));
	}
});
//#endregion
export { F as default };
