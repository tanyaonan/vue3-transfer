globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, I as i, L as a, P as o, U as s, a as c, c as l, d as u, g as d, k as f, l as p, s as m, u as h, z as g } from "./vue.runtime.js";
import { I as _, L as v, T as y, j as b, t as x, x as S, y as C } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as w } from "./shared/wot-ui/composables/useChildren.ts.js";
import { t as T } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as E } from "./wd-sort-button.js";
import { i as D, r as O, t as k } from "./wd-table-column.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-table/wd-table.vue?vue&type=script&setup=true&lang.ts
var A = ["scroll-y"], j = /* @__PURE__ */ d({
	name: "wd-table",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: D,
	emits: ["sort-method", "row-click"],
	setup(d, { emit: D }) {
		let { translate: j } = T("tableCol"), M = d, N = D, P = i({
			scrollLeft: 0,
			scrollTop: 0
		}), { linkChildren: F, children: I } = w(O);
		F({
			props: M,
			state: P,
			visibleRange: m(() => {
				let e = M.data.length;
				if (!M.virtual || e === 0) return {
					start: 0,
					end: Math.max(0, e - 1)
				};
				let t = Number(M.rowHeight) || 44, n = Number(M.buffer) || 5, r = Number(M.height) || 400;
				return {
					start: Math.max(0, Math.floor(P.scrollTop / t) - n),
					end: Math.min(e - 1, Math.ceil((P.scrollTop + r) / t) + n)
				};
			}),
			rowClick: ne,
			getIsLastFixed: X,
			getFixedLeft: Z,
			getSpan: Q
		});
		let L = a({
			prop: v(),
			label: j("indexLabel"),
			width: "100rpx",
			sortable: !1,
			fixed: !1,
			align: "left",
			...y(M.index) ? M.index : {}
		}), R = m(() => M.index !== !1), z = m(() => C(M.height)), B = _(te, 16), V = m(() => `${M.customStyle}`), H = m(() => {
			let e = { overflow: "auto" };
			return C(M.height) && (e["max-height"] = x(M.height)), b(e);
		}), U = m(() => I.map((e) => x(e.width))), W = m(() => b({ width: `calc(${U.value.join(" + ")})` })), G = m(() => b({
			display: "grid",
			"grid-template-columns": U.value.join(" ")
		})), K = m(() => {
			let e = {
				display: "grid",
				"grid-template-columns": U.value.join(" ")
			};
			if (M.virtual && M.data.length > 0) {
				let t = Number(M.rowHeight) || 44;
				e["grid-template-rows"] = `repeat(${M.data.length}, ${t}px)`;
			}
			return b(e);
		}), q = m(() => {
			let e = I.filter((e) => e.fixed);
			return e.length ? e[e.length - 1].prop : null;
		}), J = m(() => {
			let e = /* @__PURE__ */ new Map(), t = [];
			return I.forEach((n, r) => {
				t.length === 0 ? e.set(r, "0") : e.set(r, `calc(${t.join(" + ")})`), t.push(x(I[r].width));
			}), e;
		});
		function Y(e) {
			return I[e]?.fixed && I[e]?.prop === q.value;
		}
		function X(e) {
			return e.fixed && e.prop === q.value;
		}
		function Z(e) {
			return J.value.get(e) || "0";
		}
		function Q(e, t) {
			return S(M.spanMethod) && M.spanMethod({
				row: M.data[e],
				column: {
					prop: I[t].prop,
					label: I[t].label
				},
				rowIndex: e,
				columnIndex: t
			}) || {
				rowspan: 1,
				colspan: 1
			};
		}
		function $(e) {
			let t = {};
			return I[e].fixed && (t.left = J.value.get(e) || "0"), b(t);
		}
		function ee(e, t) {
			I[t].$.exposed.sortDirection.value = e, I.forEach((e, n) => {
				t != n && (e.$.exposed.sortDirection.value = 0);
			}), N("sort-method", {
				prop: I[t].prop,
				label: I[t].label,
				width: I[t].width,
				sortable: I[t].sortable,
				align: I[t].align,
				sortDirection: e,
				fixed: I[t].fixed
			});
		}
		function te(e) {
			P.scrollLeft = e.detail.scrollLeft, M.virtual && (P.scrollTop = e.detail.scrollTop);
		}
		function ne(e) {
			N("row-click", { rowIndex: e });
		}
		return (i, a) => (n(), u("div", {
			class: t([
				"wd-table",
				{ "is-border": i.border },
				i.customClass
			]),
			style: r(V.value)
		}, [l("div", {
			"enable-flex": !0,
			throttle: !1,
			"scroll-x": !0,
			"scroll-y": z.value,
			style: r(H.value),
			onScroll: a[0] ||= (...e) => g(B) && g(B)(...e)
		}, [l("div", { style: r(W.value) }, [i.showHeader ? (n(), u("div", {
			key: 0,
			class: t(["wd-table__header", { "is-sticky": i.fixedHeader }]),
			style: r(G.value)
		}, [(n(!0), u(c, null, f(g(I), (e, a) => (n(), u("div", {
			key: a,
			class: t([
				"wd-table__cell",
				"wd-table__cell--header",
				{
					"is-border": i.border,
					"is-fixed": e.fixed,
					"is-stripe": i.stripe,
					"is-shadow": Y(a) && P.scrollLeft,
					"is-last": a === g(I).length - 1
				},
				`is-${e.align}`
			]),
			style: r($(a))
		}, [e.sortable ? (n(), p(E, {
			key: 0,
			modelValue: e.$.exposed.sortDirection.value,
			"onUpdate:modelValue": (t) => e.$.exposed.sortDirection.value = t,
			"allow-reset": "",
			line: !1,
			title: e.label,
			onChange: ({ value: e }) => ee(e, a)
		}, null, 8, [
			"modelValue",
			"onUpdate:modelValue",
			"title",
			"onChange"
		])) : (n(), u("span", {
			key: 1,
			class: t(["wd-table__value", { "is-ellipsis": i.ellipsis }])
		}, s(e.label), 3))], 6))), 128))], 6)) : h("", !0), l("div", {
			class: "wd-table__body",
			style: r(K.value)
		}, [R.value ? (n(), p(k, {
			key: 0,
			prop: L.value.prop,
			label: L.value.label,
			width: L.value.width,
			sortable: L.value.sortable,
			fixed: L.value.fixed,
			align: L.value.align
		}, {
			value: o(({ index: e }) => [l("span", null, s(e + 1), 1)]),
			_: 1
		}, 8, [
			"prop",
			"label",
			"width",
			"sortable",
			"fixed",
			"align"
		])) : h("", !0), e(i.$slots, "default")], 4)], 4)], 44, A)], 6));
	}
});
//#endregion
export { j as default };
