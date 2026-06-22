globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { D as t, L as n, N as r, S as i, _ as a, g as o, l as s, s as c } from "./vue.runtime.js";
import { F as l, N as u, O as d, g as f, y as p } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as m, o as h, r as g, s as _, t as v } from "./shared/wot-ui/common/props.ts.js";
import { t as y } from "./wd-picker-view.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-datetime-picker-view/types.ts
var b = {
	...v,
	modelValue: h([String, Number]),
	itemHeight: m(44),
	visibleItemCount: m(6),
	valueKey: _("value"),
	labelKey: _("label"),
	type: _("datetime"),
	filter: Function,
	formatter: Function,
	columnFormatter: Function,
	minDate: m(new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime()),
	maxDate: m(new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 11, 31).getTime()),
	minHour: m(0),
	maxHour: m(23),
	minMinute: m(0),
	maxMinute: m(59),
	useSecond: g(!1),
	minSecond: m(0),
	maxSecond: m(59),
	immediateChange: g(!1),
	boundaryMinDate: Number,
	boundaryMaxDate: Number
};
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-datetime-picker-view/util.ts
function x(e, t, n = !1) {
	let r = [], i = new Date(e);
	if (t === "time") {
		let t = String(e).split(":");
		r.push(parseInt(t[0]), parseInt(t[1])), n && t[2] && r.push(parseInt(t[2]));
	} else r.push(i.getFullYear(), i.getMonth() + 1), t === "date" ? r.push(i.getDate()) : t === "datetime" && (r.push(i.getDate(), i.getHours(), i.getMinutes()), n && r.push(i.getSeconds()));
	return r;
}
var S = /*@__PURE__*/ o({
	name: "wd-datetime-picker-view",
	virtualHost: !0,
	addGlobalClass: !0,
	styleIsolation: "shared",
	props: b,
	emits: [
		"change",
		"pickstart",
		"pickend",
		"update:modelValue"
	],
	setup(e, { expose: o, emit: m }) {
		let h = (e) => p(e) && !Number.isNaN(e), g = (e, t) => {
			let n = -1, r = Array(e < 0 ? 0 : e);
			for (; ++n < e;) r[n] = t(n);
			return r;
		}, _ = (e, t) => 32 - new Date(e, t - 1, 32).getDate(), v = e, b = m, S = n(), C = n(null), w = n([]), T = n(!1), { proxy: E } = a(), D = c(() => {
			let { formatter: e, columnFormatter: t } = v, n = k().map((t) => t.values.map((n) => ({
				label: e ? e(t.type, u(n)) : u(n),
				value: n
			})));
			return t ? t(n) : n;
		});
		r(() => v.modelValue, (e) => {
			let t = j(e);
			t !== C.value && N(t);
		}, {
			deep: !0,
			immediate: !0
		}), r(() => v.type, (e) => {
			let t = [
				"date",
				"year-month",
				"time",
				"datetime",
				"year"
			];
			t.indexOf(e) === -1 && console.error(`type must be one of ${t}`);
		}, {
			deep: !0,
			immediate: !0
		}), i(() => {
			T.value = !0, N(j(v.modelValue));
		});
		function O({ selectedValues: e }) {
			w.value = e, N(P(e));
		}
		function k() {
			let { filter: e } = v;
			return A().map(({ type: t, range: n }) => {
				let r = g(n[1] - n[0] + 1, (e) => n[0] + e);
				return e && (r = e({
					type: t,
					values: r
				})), {
					type: t,
					values: r
				};
			});
		}
		function A() {
			if (v.type === "time") {
				let e = [{
					type: "hour",
					range: [v.minHour, v.maxHour]
				}, {
					type: "minute",
					range: [v.minMinute, v.maxMinute]
				}];
				return v.useSecond && e.push({
					type: "second",
					range: [v.minSecond, v.maxSecond]
				}), e;
			}
			let { maxYear: e, maxDate: t, maxMonth: n, maxHour: r, maxMinute: i, maxSecond: a } = M("max", C.value), { minYear: o, minDate: s, minMonth: c, minHour: l, minMinute: u, minSecond: d } = M("min", C.value), f = [
				{
					type: "year",
					range: [o, e]
				},
				{
					type: "month",
					range: [c, n]
				},
				{
					type: "date",
					range: [s, t]
				},
				{
					type: "hour",
					range: [l, r]
				},
				{
					type: "minute",
					range: [u, i]
				}
			];
			return v.type === "datetime" && v.useSecond && f.push({
				type: "second",
				range: [d, a]
			}), v.type === "date" && f.splice(3, 2), v.type === "year-month" && f.splice(2, 3), v.type === "year" && f.splice(1, 4), f;
		}
		function j(e) {
			let t = v.type !== "time";
			if (t && !h(e) ? e = v.minDate : !t && !e && (e = v.useSecond ? `${u(v.minHour)}:00:00` : `${u(v.minHour)}:00`), !t) {
				let [t, n, r = "00"] = (d(e) ? e : e.toString()).split(":");
				return t = u(l(Number(t), v.minHour, v.maxHour)), n = u(l(Number(n), v.minMinute, v.maxMinute)), v.useSecond ? (r = u(l(Number(r), v.minSecond, v.maxSecond)), `${t}:${n}:${r}`) : `${t}:${n}`;
			}
			return e = Math.min(Math.max(Number(e), v.minDate), v.maxDate), e;
		}
		function M(e, t) {
			let n = new Date(t), r = new Date(v[`${e}Date`]), i = r.getFullYear(), a = 1, o = 1, s = 0, c = 0, l = 0;
			return e === "max" && (a = 12, o = _(n.getFullYear(), n.getMonth() + 1), s = 23, c = 59, l = 59), n.getFullYear() === i && (a = r.getMonth() + 1, n.getMonth() + 1 === a && (o = r.getDate(), n.getDate() === o && (s = r.getHours(), n.getHours() === s && (c = r.getMinutes(), n.getMinutes() === c && (l = r.getSeconds()))))), {
				[`${e}Year`]: i,
				[`${e}Month`]: a,
				[`${e}Date`]: o,
				[`${e}Hour`]: s,
				[`${e}Minute`]: c,
				[`${e}Second`]: l
			};
		}
		function N(e) {
			let t = x(e, v.type, v.useSecond);
			v.modelValue !== e && (b("update:modelValue", e), b("change", {
				value: e,
				columns: k()
			})), C.value = e, w.value = t;
		}
		function P(e) {
			let { type: t, useSecond: n } = v, r = "", i = e;
			if (t === "time") return r = n ? `${u(i[0])}:${u(i[1])}:${u(i[2])}` : `${u(i[0])}:${u(i[1])}`, r;
			let a = i[0] && parseInt(String(i[0])), o = t === "year" ? 1 : i[1] && parseInt(String(i[1])), s = _(Number(a), Number(o)), c = 1;
			t !== "year-month" && t !== "year" && (c = (Number(i[2]) && parseInt(String(i[2]))) > s ? s : i[2] && parseInt(String(i[2])));
			let l = 0, d = 0, f = 0;
			return t === "datetime" && (l = Number(i[3]) && parseInt(String(i[3])), d = Number(i[4]) && parseInt(String(i[4])), n && (f = Number(i[5]) && parseInt(String(i[5])))), r = j(new Date(Number(a), Number(o) - 1, Number(c), l, d, f).getTime()), r;
		}
		function F() {
			b("pickstart");
		}
		function I() {
			b("pickend");
		}
		function L() {
			let e = S.value?.getSelectedOptions();
			if (e != null) return f(e) ? e : [e];
		}
		return o({
			getSelectedOptions: L,
			correctValue: j,
			getOriginColumns: k
		}), (e, n) => (t(), s(y, {
			ref_key: "datePickerview",
			ref: S,
			"custom-class": e.customClass,
			"custom-style": e.customStyle,
			"immediate-change": e.immediateChange,
			modelValue: w.value,
			"onUpdate:modelValue": n[0] ||= (e) => w.value = e,
			columns: D.value,
			"item-height": e.itemHeight,
			"visible-item-count": e.visibleItemCount,
			onChange: O,
			onPickstart: F,
			onPickend: I
		}, null, 8, [
			"custom-class",
			"custom-style",
			"immediate-change",
			"modelValue",
			"columns",
			"item-height",
			"visible-item-count"
		]));
	}
}), C = /* @__PURE__ */ e({ default: () => w }), w = S;
//#endregion
export { C as n, x as r, w as t };
