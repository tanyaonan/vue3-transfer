globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, L as a, U as o, a as s, d as c, g as l, k as u, s as d } from "./vue.runtime.js";
import { E as f, j as p, x as m, y as h } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as g, c as _, o as v, r as y, s as b, t as x } from "./shared/wot-ui/common/props.ts.js";
import { t as S } from "./shared/wot-ui/composables/useParent.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-table-column/types.ts
var C = {
	prop: v(String),
	label: v(String),
	width: g(100),
	sortable: y(!1),
	fixed: y(!1),
	align: b("left")
}, w = {
	...x,
	data: v(Array),
	border: y(!0),
	stripe: y(!0),
	height: _,
	showHeader: y(!0),
	ellipsis: y(!1),
	index: {
		type: [Object, Boolean],
		default: !1
	},
	fixedHeader: y(!0),
	spanMethod: {
		type: Function,
		default: void 0
	},
	virtual: y(!1),
	rowHeight: g(44),
	buffer: g(5)
}, T = Symbol("wd-table"), E = { class: "wd-table-column" }, D = ["onClick"], O = /*@__PURE__*/ l({
	name: "wd-table-column",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: C,
	setup(e, { expose: l, slots: g }) {
		let _ = e, { parent: v, index: y } = S(T), b = a(0), x = d(() => h(v.value) ? v.value.props.stripe : !1), C = d(() => h(v.value) ? v.value.props.border : !1), w = d(() => h(v.value) ? v.value.props.ellipsis : !1), O = d(() => _.fixed && h(v.value) ? v.value.getIsLastFixed(_) : !1);
		d(() => !h(v.value) || !h(v.value.props.data) || !Array.isArray(v.value.props.data) ? [] : v.value.props.data.map((e) => e[_.prop]));
		let k = d(() => _.fixed && h(v.value) && m(v.value.getFixedLeft) ? v.value.getFixedLeft(y.value) : ""), A = d(() => h(v.value) ? y.value === v.value.children.length - 1 : !1), j = d(() => {
			let e = [], t = h(v.value) && Array.isArray(v.value.props.data) ? v.value.props.data : [];
			if (t.length === 0) return e;
			let n = h(v.value) ? v.value.visibleRange.value : {
				start: 0,
				end: t.length - 1
			}, r = y.value + 1, i = h(v.value) && v.value.state.scrollLeft, a = _.fixed, o = O.value, s = A.value, c = k.value, l = _.align, u = x.value, d = C.value, m = _.prop;
			for (let h = n.start; h <= n.end; h++) {
				let n = M(h);
				if (n.rowspan === 0 || n.colspan === 0) continue;
				let g = [
					"wd-table__cell",
					{
						"is-stripe": u && f(h),
						"is-border": d,
						"is-fixed": a,
						"is-shadow": o && i,
						"is-last": s
					},
					`is-${l}`
				], _ = {};
				n.colspan > 1 ? _["grid-column"] = `${r} / span ${n.colspan}` : _["grid-column"] = `${r}`;
				let v = h + 1;
				n.rowspan > 1 ? _["grid-row"] = `${v} / span ${n.rowspan}` : _["grid-row"] = `${v}`, a && c && (_.left = c), e.push({
					rowIndex: h,
					value: t[h]?.[m],
					class: g,
					style: p(_)
				});
			}
			return e;
		});
		function M(e) {
			return !h(v.value) || !m(v.value.getSpan) ? {
				rowspan: 1,
				colspan: 1
			} : v.value.getSpan(e, y.value);
		}
		function N(e) {
			h(v.value) && m(v.value.rowClick) && v.value.rowClick(e);
		}
		function P(e) {
			return !h(v.value) || !h(v.value.props.data) || !Array.isArray(v.value.props.data) ? {} : v.value.props.data[e] || {};
		}
		return l({ sortDirection: b }), (e, a) => (r(), c("div", E, [(r(!0), c(s, null, u(j.value, (a) => (r(), c("div", {
			key: a.rowIndex,
			class: n(a.class),
			style: i(a.style),
			onClick: (e) => N(a.rowIndex)
		}, [g.value ? t(e.$slots, "value", {
			key: 0,
			row: P(a.rowIndex),
			index: a.rowIndex
		}) : (r(), c("span", {
			key: 1,
			class: n(["wd-table__value", { "is-ellipsis": w.value }])
		}, o(a.value), 3))], 14, D))), 128))]));
	}
}), k = /* @__PURE__ */ e({ default: () => A }), A = O;
//#endregion
export { w as i, k as n, T as r, A as t };
