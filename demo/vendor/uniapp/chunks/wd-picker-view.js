globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { B as t, D as n, H as r, L as i, N as a, U as o, a as s, c, d as l, g as u, k as d, s as f, x as p, z as m } from "./vue.runtime.js";
import { F as h, T as g, b as _, g as v, h as y, l as b, t as x, y as S } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as C, n as w, r as T, s as E, t as D } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-picker-view/types.ts
var O = {
	...D,
	itemHeight: C(44),
	visibleItemCount: C(6),
	valueKey: E("value"),
	labelKey: E("label"),
	immediateChange: T(!1),
	cascade: T(!1),
	childrenKey: E("children"),
	modelValue: w(),
	columns: w()
};
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-picker-view/useSelection.ts
function k(e, t, n) {
	let r = v(e) ? e : [e], i = new Set(e.map(y));
	if (i.size !== 1 && i.has("object")) throw Error("The columns are correct");
	return v(e[0]) || (r = [r]), r.map((e) => e.map((e) => {
		if (!g(e)) return {
			[t]: e,
			[n]: e
		};
		if (!e.hasOwnProperty(t) && !e.hasOwnProperty(n)) throw Error("Can't find valueKey and labelKey in columns");
		return e.hasOwnProperty(n) || (e[n] = e[t]), e.hasOwnProperty(t) || (e[t] = e[n]), e;
	}));
}
function A(e, t, n = "children", r = !1) {
	let a = i([]), o = i([]), s = f(() => o.value.map((e, t) => a.value[t][e])), c = f(() => o.value.map((t, n) => a.value[n][t][e])), l = f(() => o.value.map((e, n) => String(S(a.value[n][e][t]) ? a.value[n][e][t] : "")));
	function u(t) {
		if (a.value.length === 0) {
			o.value = [];
			return;
		}
		let n;
		n = !S(t) || v(t) && t.length === 0 ? a.value.map((t) => t[0][e]) : v(t) ? t : [t];
		let r = n.slice(0, a.value.length), i = [...o.value];
		r.forEach((t, n) => {
			let r = a.value[n].findIndex((n) => n[e]?.toString() === t.toString());
			r = r === -1 ? 0 : r, i = p(n, r, i);
		}), o.value = i.slice(0, r.length);
	}
	function d(e) {
		let t = [...e];
		return e.forEach((e, n) => {
			e = h(e, 0, a.value[n].length - 1), t = p(n, e, t);
		}), t;
	}
	function p(e, t, n) {
		let r = a.value[e];
		if (!r || !r[t]) return console.error(`[wd-picker-view] The value to select with Col:${e} Row:${t} is incorrect`), n;
		let i = [...n];
		if (i[e] = t, r[t].disabled) {
			let n = r.slice(0, t).reverse().findIndex((e) => !e.disabled), a = r.slice(t + 1).findIndex((e) => !e.disabled);
			n === -1 ? a === -1 ? (console.warn(`[wd-picker-view] All options in column ${e} are disabled, selecting disabled item at index ${t}`), i[e] = t) : i[e] = t + 1 + a : i[e] = t - 1 - n;
		}
		return i;
	}
	function m(e, t) {
		return !e || !t ? -1 : e.findIndex((e, n) => e !== t[n]);
	}
	function _(e) {
		return o.value[e];
	}
	function y(e) {
		return a.value[e];
	}
	function x() {
		return b(a.value);
	}
	function C(t, r) {
		let i = [], a = t;
		a.length > 0 && i.push(a);
		for (let t = 0; t < r.length; t++) {
			let o = r[t], s = a.find((t) => t[e]?.toString() === o.toString());
			if (s && s[n] && s[n].length > 0) a = s[n], i.push(a);
			else break;
		}
		return i;
	}
	function w(e, t, r) {
		let i = [e], s = e, c = [];
		for (let e = 0; e <= t && e < r.length; e++) {
			let t = r[e], a = s[t];
			if (c.push(t), a && a[n] && a[n].length > 0) s = a[n], i.push(s);
			else break;
		}
		for (; s.length > 0;) {
			let e = s.findIndex((e) => !e.disabled), t = e === -1 ? 0 : e, r = s[t];
			if (r && r[n] && r[n].length > 0) c.push(t), s = r[n], i.push(s);
			else {
				i.length > c.length && c.push(t);
				break;
			}
		}
		a.value = i, o.value = c;
	}
	function T(i) {
		if (v(i) && i.length > 0) {
			if (r && v(i) && i.length > 0 && !v(i[0])) {
				let r = i[0];
				if (g(r) && n in r) {
					a.value = [k([i], e, t)[0]];
					return;
				}
			}
			a.value = k(i, e, t);
		} else a.value = [], o.value = [];
	}
	return {
		formatColumns: a,
		selectedIndex: o,
		selectedOptions: s,
		selectedValues: c,
		selectedLabels: l,
		selectWithValue: u,
		correctSelected: d,
		correctSelectedIndex: p,
		getChangeColumnIndex: m,
		getColumnIndex: _,
		getColumnData: y,
		getColumnsData: x,
		resetColumns: T,
		buildCascadeColumns: C,
		updateCascadeColumns: w
	};
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-picker-view/wd-picker-view.vue?vue&type=script&setup=true&lang.ts
var j = ["value", "immediate-change"], M = /*@__PURE__*/ u({
	name: "wd-picker-view",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: O,
	emits: [
		"change",
		"pickstart",
		"pickend",
		"update:modelValue"
	],
	setup(e, { expose: i, emit: u }) {
		let h = e, y = u, { formatColumns: b, selectedIndex: C, selectedOptions: w, selectedValues: T, selectedLabels: E, selectWithValue: D, correctSelected: O, getChangeColumnIndex: k, getColumnIndex: M, getColumnData: N, getColumnsData: P, resetColumns: F, buildCascadeColumns: I, updateCascadeColumns: L } = A(h.valueKey, h.labelKey, h.childrenKey, h.cascade);
		a([
			() => h.modelValue,
			() => h.columns,
			() => h.cascade
		], (e, t) => {
			let [n, r, i] = e, [, a] = t;
			_(a, r) || (F(r), i && S(n) && n.length > 0 && r.length > 0 && (b.value = I(r, n))), S(n) && D(n);
		}, {
			immediate: !0,
			deep: !0
		});
		let R = f(() => `height: ${x(h.itemHeight * h.visibleItemCount)};`);
		function z(e, t, n) {
			let r = ["wd-picker-view__column-item"];
			return e && r.push("wd-picker-view__column-item--disabled"), C.value[t] === n && r.push("wd-picker-view__column-item--active"), r.join(" ");
		}
		function B({ detail: { value: e } }) {
			let t = e.map((e) => Number(e || 0)), n = [...C.value];
			C.value = [...t], p(() => {
				C.value = O(t);
				let e = k(C.value, n);
				if (h.cascade && e !== -1 && h.columns.length > 0) {
					let t = h.columns[0];
					!v(t) && g(t) && L(h.columns, e, C.value);
				}
				V(e);
			});
		}
		function V(e) {
			_(T.value, h.modelValue) || (y("update:modelValue", T.value), p(() => {
				y("change", {
					selectedValues: T.value,
					selectedOptions: w.value,
					selectedLabels: E.value,
					selectedIndexes: C.value,
					columnIndex: e
				});
			}));
		}
		function H() {
			return C.value;
		}
		function U() {
			y("pickstart");
		}
		function W() {
			y("pickend");
		}
		function G() {
			return w.value;
		}
		function K() {
			return T.value;
		}
		function q() {
			return E.value;
		}
		return i({
			getSelectedOptions: G,
			getSelectedValues: K,
			getColumnsData: P,
			getColumnData: N,
			getColumnIndex: M,
			getSelectedLabels: q,
			getSelectedIndex: H,
			resetColumns: F
		}), (e, i) => (n(), l("div", {
			class: t(`wd-picker-view ${e.customClass}`),
			style: r(e.customStyle)
		}, [c("div", {
			class: "wd-picker-view__main",
			"mask-class": "wd-picker-view__mask",
			"indicator-class": "wd-picker-view__roller",
			style: r(R.value),
			value: m(C),
			"immediate-change": e.immediateChange,
			onChange: B,
			onPickstart: U,
			onPickend: W
		}, [(n(!0), l(s, null, d(m(b), (r, i) => (n(), l("div", {
			key: i,
			class: "wd-picker-view__column"
		}, [(n(!0), l(s, null, d(r, (r, a) => (n(), l("div", {
			key: a,
			class: t(z(r.disabled, i, a))
		}, o(r[e.labelKey]), 3))), 128))]))), 128))], 44, j)], 6));
	}
}), N = /* @__PURE__ */ e({ default: () => P }), P = M;
//#endregion
export { N as n, P as t };
