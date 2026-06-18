globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, E as n, Ft as r, H as i, J as a, Mt as o, O as s, T as c, Tt as l, U as u, W as d, _ as f, b as p, p as m, tt as h, u as g, ut as _, v, w as y, x as b, y as x, yt as S } from "./vue.runtime.js";
import { t as C } from "./shared/element-plus/utils/vue/install.js";
import { t as w } from "./shared/lodash/isEqual.js";
import { i as T } from "./shared/element-plus/utils/types.js";
import { t as E } from "./shared/element-plus/constants/event.js";
import { n as D, r as O } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as k } from "./shared/element-plus/utils/error.js";
import { r as A } from "./shared/element-plus/hooks/use-namespace.js";
import { E as j, _ as M, g as ee, n as N, r as P } from "./shared/element-plus-icons.js";
import { a as F } from "./shared/element-plus/utils/vue/icon.js";
import { t as I } from "./el-icon.js";
import { t as L } from "./shared/element-plus/utils/typescript.js";
import { t as R } from "./shared/element-plus/constants/size.js";
import { n as te, r as ne } from "./shared/element-plus/hooks/use-size.js";
import { t as re } from "./el-input.js";
import { n as z } from "./shared/element-plus/hooks/use-locale.js";
import { t as ie } from "./shared/element-plus/hooks/use-deprecated.js";
import { n as ae, t as oe } from "./el-select.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/pagination/src/constants.mjs
var B = Symbol("elPaginationKey"), V = D({
	disabled: Boolean,
	currentPage: {
		type: Number,
		default: 1
	},
	prevText: { type: String },
	prevIcon: { type: F }
}), H = { click: (e) => e instanceof MouseEvent }, U = [
	"disabled",
	"aria-label",
	"aria-disabled"
], W = { key: 0 }, G = /* @__PURE__ */ c({
	name: "ElPaginationPrev",
	__name: "prev",
	props: V,
	emits: H,
	setup(e) {
		let t = e, { t: n } = z(), o = f(() => t.disabled || t.currentPage <= 1);
		return (e, t) => (i(), b("button", {
			type: "button",
			class: "btn-prev",
			disabled: o.value,
			"aria-label": e.prevText || S(n)("el.pagination.prev"),
			"aria-disabled": o.value,
			onClick: t[0] ||= (t) => e.$emit("click", t)
		}, [e.prevText ? (i(), b("span", W, r(e.prevText), 1)) : (i(), x(S(I), { key: 1 }, {
			default: h(() => [(i(), x(a(e.prevIcon)))]),
			_: 1
		}))], 8, U));
	}
}), K = D({
	disabled: Boolean,
	currentPage: {
		type: Number,
		default: 1
	},
	pageCount: {
		type: Number,
		default: 50
	},
	nextText: { type: String },
	nextIcon: { type: F }
}), se = [
	"disabled",
	"aria-label",
	"aria-disabled"
], ce = { key: 0 }, le = /* @__PURE__ */ c({
	name: "ElPaginationNext",
	__name: "next",
	props: K,
	emits: ["click"],
	setup(e) {
		let t = e, { t: n } = z(), o = f(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
		return (e, t) => (i(), b("button", {
			type: "button",
			class: "btn-next",
			disabled: o.value,
			"aria-label": e.nextText || S(n)("el.pagination.next"),
			"aria-disabled": o.value,
			onClick: t[0] ||= (t) => e.$emit("click", t)
		}, [e.nextText ? (i(), b("span", ce, r(e.nextText), 1)) : (i(), x(S(I), { key: 1 }, {
			default: h(() => [(i(), x(a(e.nextIcon)))]),
			_: 1
		}))], 8, se));
	}
}), q = () => t(B, {}), ue = /* @__PURE__ */ c({
	name: "ElPaginationSizes",
	__name: "sizes",
	props: D({
		pageSize: {
			type: Number,
			required: !0
		},
		pageSizes: {
			type: O(Array),
			default: () => L([
				10,
				20,
				30,
				40,
				50,
				100
			])
		},
		popperClass: { type: String },
		popperStyle: { type: O([String, Object]) },
		disabled: Boolean,
		teleported: Boolean,
		size: {
			type: String,
			values: R
		},
		appendSizeTo: String
	}),
	emits: ["page-size-change"],
	setup(t, { emit: n }) {
		let r = t, a = n, { t: s } = z(), c = A("pagination"), u = q(), p = _(r.pageSize);
		e(() => r.pageSizes, (e, t) => {
			w(e, t) || l(e) && a("page-size-change", e.includes(r.pageSize) ? r.pageSize : r.pageSizes[0]);
		}), e(() => r.pageSize, (e) => {
			p.value = e;
		});
		let g = f(() => r.pageSizes);
		function v(e) {
			e !== p.value && (p.value = e, u.handleSizeChange?.(Number(e)));
		}
		return (e, t) => (i(), b("span", { class: o(S(c).e("sizes")) }, [y(S(ae), {
			"model-value": p.value,
			disabled: e.disabled,
			"popper-class": e.popperClass,
			"popper-style": e.popperStyle,
			size: e.size,
			teleported: e.teleported,
			"validate-event": !1,
			"append-to": e.appendSizeTo,
			onChange: v
		}, {
			default: h(() => [(i(!0), b(m, null, d(g.value, (e) => (i(), x(S(oe), {
				key: e,
				value: e,
				label: e + S(s)("el.pagination.pagesize")
			}, null, 8, ["value", "label"]))), 128))]),
			_: 1
		}, 8, [
			"model-value",
			"disabled",
			"popper-class",
			"popper-style",
			"size",
			"teleported",
			"append-to"
		])], 2));
	}
}), de = D({ size: {
	type: String,
	values: R
} }), fe = ["disabled"], pe = /* @__PURE__ */ c({
	name: "ElPaginationJumper",
	__name: "jumper",
	props: de,
	setup(e) {
		let { t } = z(), n = A("pagination"), { pageCount: a, disabled: s, currentPage: c, changeEvent: l } = q(), u = _(), d = f(() => u.value ?? c?.value);
		function p(e) {
			u.value = e ? +e : "";
		}
		function m(e) {
			e = Math.trunc(+e), l?.(e), u.value = void 0;
		}
		return (e, c) => (i(), b("span", {
			class: o(S(n).e("jump")),
			disabled: S(s)
		}, [
			v("span", { class: o([S(n).e("goto")]) }, r(S(t)("el.pagination.goto")), 3),
			y(S(re), {
				size: e.size,
				class: o([S(n).e("editor"), S(n).is("in-pagination")]),
				min: 1,
				max: S(a),
				disabled: S(s),
				"model-value": d.value,
				"validate-event": !1,
				"aria-label": S(t)("el.pagination.page"),
				type: "number",
				"onUpdate:modelValue": p,
				onChange: m
			}, null, 8, [
				"size",
				"class",
				"max",
				"disabled",
				"model-value",
				"aria-label"
			]),
			v("span", { class: o([S(n).e("classifier")]) }, r(S(t)("el.pagination.pageClassifier")), 3)
		], 10, fe));
	}
}), me = D({ total: {
	type: Number,
	default: 1e3
} }), he = ["disabled"], ge = /* @__PURE__ */ c({
	name: "ElPaginationTotal",
	__name: "total",
	props: me,
	setup(e) {
		let { t } = z(), n = A("pagination"), { disabled: a } = q();
		return (e, s) => (i(), b("span", {
			class: o(S(n).e("total")),
			disabled: S(a)
		}, r(S(t)("el.pagination.total", { total: e.total })), 11, he));
	}
}), _e = D({
	currentPage: {
		type: Number,
		default: 1
	},
	pageCount: {
		type: Number,
		required: !0
	},
	pagerCount: {
		type: Number,
		default: 7
	},
	disabled: Boolean
}), ve = [
	"aria-current",
	"aria-label",
	"tabindex"
], ye = ["tabindex", "aria-label"], be = [
	"aria-current",
	"aria-label",
	"tabindex"
], xe = ["tabindex", "aria-label"], Se = [
	"aria-current",
	"aria-label",
	"tabindex"
], J = /* @__PURE__ */ c({
	name: "ElPaginationPager",
	__name: "pager",
	props: _e,
	emits: [E],
	setup(t, { emit: n }) {
		let a = t, s = n, c = A("pager"), l = A("icon"), { t: u } = z(), h = _(!1), v = _(!1), y = _(!1), C = _(!1), w = _(!1), T = _(!1), D = f(() => {
			let e = a.pagerCount, t = (e - 1) / 2, n = Number(a.currentPage), r = Number(a.pageCount), i = !1, o = !1;
			r > e && (n > e - t && (i = !0), n < r - t && (o = !0));
			let s = [];
			if (i && !o) {
				let t = r - (e - 2);
				for (let e = t; e < r; e++) s.push(e);
			} else if (!i && o) for (let t = 2; t < e; t++) s.push(t);
			else if (i && o) {
				let t = Math.floor(e / 2) - 1;
				for (let e = n - t; e <= n + t; e++) s.push(e);
			} else for (let e = 2; e < r; e++) s.push(e);
			return s;
		}), O = f(() => [
			"more",
			"btn-quickprev",
			l.b(),
			c.is("disabled", a.disabled)
		]), k = f(() => [
			"more",
			"btn-quicknext",
			l.b(),
			c.is("disabled", a.disabled)
		]), N = f(() => a.disabled ? -1 : 0);
		e(() => [
			a.pageCount,
			a.pagerCount,
			a.currentPage
		], ([e, t, n]) => {
			let r = (t - 1) / 2, i = !1, a = !1;
			e > t && (i = n > t - r, a = n < e - r), y.value &&= i, C.value &&= a, h.value = i, v.value = a;
		}, { immediate: !0 });
		function P(e = !1) {
			a.disabled || (e ? y.value = !0 : C.value = !0);
		}
		function F(e = !1) {
			e ? w.value = !0 : T.value = !0;
		}
		function I(e) {
			let t = e.target;
			if (t.tagName.toLowerCase() === "li" && Array.from(t.classList).includes("number")) {
				let e = Number(t.textContent);
				e !== a.currentPage && s(E, e);
			} else t.tagName.toLowerCase() === "li" && Array.from(t.classList).includes("more") && L(e);
		}
		function L(e) {
			let t = e.target;
			if (t.tagName.toLowerCase() === "ul" || a.disabled) return;
			let n = Number(t.textContent), r = a.pageCount, i = a.currentPage, o = a.pagerCount - 2;
			t.className.includes("more") && (t.className.includes("quickprev") ? n = i - o : t.className.includes("quicknext") && (n = i + o)), Number.isNaN(+n) || (n < 1 && (n = 1), n > r && (n = r)), n !== i && s(E, n);
		}
		return (e, t) => (i(), b("ul", {
			class: o(S(c).b()),
			onClick: L,
			onKeyup: g(I, ["enter"])
		}, [
			e.pageCount > 0 ? (i(), b("li", {
				key: 0,
				class: o([[S(c).is("active", e.currentPage === 1), S(c).is("disabled", e.disabled)], "number"]),
				"aria-current": e.currentPage === 1,
				"aria-label": S(u)("el.pagination.currentPage", { pager: 1 }),
				tabindex: N.value
			}, " 1 ", 10, ve)) : p("v-if", !0),
			h.value ? (i(), b("li", {
				key: 1,
				class: o(O.value),
				tabindex: N.value,
				"aria-label": S(u)("el.pagination.prevPages", { pager: e.pagerCount - 2 }),
				onMouseenter: t[0] ||= (e) => P(!0),
				onMouseleave: t[1] ||= (e) => y.value = !1,
				onFocus: t[2] ||= (e) => F(!0),
				onBlur: t[3] ||= (e) => w.value = !1
			}, [(y.value || w.value) && !e.disabled ? (i(), x(S(ee), { key: 0 })) : (i(), x(S(j), { key: 1 }))], 42, ye)) : p("v-if", !0),
			(i(!0), b(m, null, d(D.value, (t) => (i(), b("li", {
				key: t,
				class: o([[S(c).is("active", e.currentPage === t), S(c).is("disabled", e.disabled)], "number"]),
				"aria-current": e.currentPage === t,
				"aria-label": S(u)("el.pagination.currentPage", { pager: t }),
				tabindex: N.value
			}, r(t), 11, be))), 128)),
			v.value ? (i(), b("li", {
				key: 2,
				class: o(k.value),
				tabindex: N.value,
				"aria-label": S(u)("el.pagination.nextPages", { pager: e.pagerCount - 2 }),
				onMouseenter: t[4] ||= (e) => P(),
				onMouseleave: t[5] ||= (e) => C.value = !1,
				onFocus: t[6] ||= (e) => F(),
				onBlur: t[7] ||= (e) => T.value = !1
			}, [(C.value || T.value) && !e.disabled ? (i(), x(S(M), { key: 0 })) : (i(), x(S(j), { key: 1 }))], 42, xe)) : p("v-if", !0),
			e.pageCount > 1 ? (i(), b("li", {
				key: 3,
				class: o([[S(c).is("active", e.currentPage === e.pageCount), S(c).is("disabled", e.disabled)], "number"]),
				"aria-current": e.currentPage === e.pageCount,
				"aria-label": S(u)("el.pagination.currentPage", { pager: e.pageCount }),
				tabindex: N.value
			}, r(e.pageCount), 11, Se)) : p("v-if", !0)
		], 34));
	}
}), Y = (e) => typeof e != "number", X = D({
	pageSize: Number,
	defaultPageSize: Number,
	total: Number,
	pageCount: Number,
	pagerCount: {
		type: Number,
		validator: (e) => T(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 == 1,
		default: 7
	},
	currentPage: Number,
	defaultCurrentPage: Number,
	layout: {
		type: String,
		default: [
			"prev",
			"pager",
			"next",
			"jumper",
			"->",
			"total"
		].join(", ")
	},
	pageSizes: {
		type: O(Array),
		default: () => L([
			10,
			20,
			30,
			40,
			50,
			100
		])
	},
	popperClass: {
		type: String,
		default: ""
	},
	popperStyle: { type: O([String, Object]) },
	prevText: {
		type: String,
		default: ""
	},
	prevIcon: {
		type: F,
		default: () => N
	},
	nextText: {
		type: String,
		default: ""
	},
	nextIcon: {
		type: F,
		default: () => P
	},
	teleported: {
		type: Boolean,
		default: !0
	},
	small: Boolean,
	size: ne,
	background: Boolean,
	disabled: Boolean,
	hideOnSinglePage: Boolean,
	appendSizeTo: String
}), Z = {
	"update:current-page": (e) => T(e),
	"update:page-size": (e) => T(e),
	"size-change": (e) => T(e),
	change: (e, t) => T(e) && T(t),
	"current-change": (e) => T(e),
	"prev-click": (e) => T(e),
	"next-click": (e) => T(e)
}, Q = "ElPagination", $ = C(c({
	name: Q,
	props: X,
	emits: Z,
	setup(t, { emit: r, slots: i }) {
		let { t: a } = z(), o = A("pagination"), c = n().vnode.props || {}, l = te(), d = f(() => t.small ? "small" : t.size ?? l.value);
		ie({
			from: "small",
			replacement: "size",
			version: "3.0.0",
			scope: "el-pagination",
			ref: "https://element-plus.org/zh-CN/component/pagination.html"
		}, f(() => !!t.small));
		let p = "onUpdate:currentPage" in c || "onUpdate:current-page" in c || "onCurrentChange" in c, m = "onUpdate:pageSize" in c || "onUpdate:page-size" in c || "onSizeChange" in c, h = f(() => {
			if (Y(t.total) && Y(t.pageCount) || !Y(t.currentPage) && !p) return !1;
			if (t.layout.includes("sizes")) {
				if (!Y(t.pageCount)) {
					if (!m) return !1;
				} else if (!Y(t.total) && !Y(t.pageSize) && !m) return !1;
			}
			return !0;
		}), g = _(Y(t.defaultPageSize) ? 10 : t.defaultPageSize), v = _(Y(t.defaultCurrentPage) ? 1 : t.defaultCurrentPage), y = f({
			get() {
				return Y(t.pageSize) ? g.value : t.pageSize;
			},
			set(e) {
				Y(t.pageSize) && (g.value = e), m && (r("update:page-size", e), r("size-change", e));
			}
		}), b = f(() => {
			let e = 0;
			return Y(t.pageCount) ? Y(t.total) || (e = Math.max(1, Math.ceil(t.total / y.value))) : e = t.pageCount, e;
		}), x = f({
			get() {
				return Y(t.currentPage) ? v.value : t.currentPage;
			},
			set(e) {
				let n = e;
				e < 1 ? n = 1 : e > b.value && (n = b.value), Y(t.currentPage) && (v.value = n), p && (r("update:current-page", n), r("current-change", n));
			}
		});
		e(b, (e) => {
			x.value > e && (x.value = e);
		}), e([x, y], (e) => {
			r(E, ...e);
		}, { flush: "post" });
		function S(e) {
			x.value = e;
		}
		function C(e) {
			y.value = e;
			let t = b.value;
			x.value > t && (x.value = t);
		}
		function w() {
			t.disabled || (--x.value, r("prev-click", x.value));
		}
		function T() {
			t.disabled || (x.value += 1, r("next-click", x.value));
		}
		function D(e, t) {
			e && (e.props ||= {}, e.props.class = [e.props.class, t].join(" "));
		}
		return u(B, {
			pageCount: b,
			disabled: f(() => t.disabled),
			currentPage: x,
			changeEvent: S,
			handleSizeChange: C
		}), () => {
			if (!h.value) return k(Q, a("el.pagination.deprecationWarning")), null;
			if (!t.layout || t.hideOnSinglePage && b.value <= 1) return null;
			let e = [], n = [], r = s("div", { class: o.e("rightwrapper") }, n), c = {
				prev: s(G, {
					disabled: t.disabled,
					currentPage: x.value,
					prevText: t.prevText,
					prevIcon: t.prevIcon,
					onClick: w
				}),
				jumper: s(pe, { size: d.value }),
				pager: s(J, {
					currentPage: x.value,
					pageCount: b.value,
					pagerCount: t.pagerCount,
					onChange: S,
					disabled: t.disabled
				}),
				next: s(le, {
					disabled: t.disabled,
					currentPage: x.value,
					pageCount: b.value,
					nextText: t.nextText,
					nextIcon: t.nextIcon,
					onClick: T
				}),
				sizes: s(ue, {
					pageSize: y.value,
					pageSizes: t.pageSizes,
					popperClass: t.popperClass,
					popperStyle: t.popperStyle,
					disabled: t.disabled,
					teleported: t.teleported,
					size: d.value,
					appendSizeTo: t.appendSizeTo
				}),
				slot: i?.default?.() ?? null,
				total: s(ge, { total: Y(t.total) ? 0 : t.total })
			}, l = t.layout.split(",").map((e) => e.trim()), u = !1;
			return l.forEach((t) => {
				if (t === "->") {
					u = !0;
					return;
				}
				u ? n.push(c[t]) : e.push(c[t]);
			}), D(e[0], o.is("first")), D(e[e.length - 1], o.is("last")), u && n.length > 0 && (D(n[0], o.is("first")), D(n[n.length - 1], o.is("last")), e.push(r)), s("div", { class: [
				o.b(),
				o.is("background", t.background),
				o.m(d.value)
			] }, e);
		};
	}
}));
//#endregion
export { $ as ElPagination, $ as default, B as elPaginationKey, Z as paginationEmits, X as paginationProps };
