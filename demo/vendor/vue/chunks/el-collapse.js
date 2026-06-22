globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, At as n, C as r, Ft as i, G as a, H as o, J as s, Mt as c, T as l, Tt as u, U as d, _ as f, d as p, jt as m, l as h, nt as g, tt as _, u as v, ut as y, v as b, w as x, x as S, y as C, yt as w } from "./vue.runtime.js";
import { i as T, t as E } from "./shared/element-plus/utils/vue/install.js";
import { t as D } from "./shared/lodash/castArray.js";
import { i as O, t as k } from "./shared/element-plus/utils/types.js";
import { r as A, t as j } from "./shared/element-plus/constants/event.js";
import { n as M, r as N } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as P, t as F } from "./shared/element-plus/utils/error.js";
import { r as I } from "./shared/element-plus/hooks/use-namespace.js";
import { r as ee } from "./shared/element-plus-icons.js";
import { a as te } from "./shared/element-plus/utils/vue/icon.js";
import { t as L } from "./el-icon.js";
import { t as R } from "./shared/element-plus/utils/typescript.js";
import { n as z } from "./shared/element-plus/hooks/use-id.js";
import { t as B } from "./el-collapse-transition.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/collapse/src/collapse.mjs
var V = (e) => O(e) || m(e) || u(e), H = M({
	accordion: Boolean,
	modelValue: {
		type: N([
			Array,
			String,
			Number
		]),
		default: () => R([])
	},
	expandIconPosition: {
		type: N([String]),
		default: "right"
	},
	beforeCollapse: { type: N(Function) }
}), U = {
	[A]: V,
	[j]: V
}, W = Symbol("collapseContextKey"), G = "ElCollapse", K = (t, r) => {
	let i = y(D(t.modelValue)), a = (e) => {
		i.value = e;
		let n = t.accordion ? i.value[0] : i.value;
		r(A, n), r(j, n);
	}, o = (e) => {
		if (t.accordion) a([i.value[0] === e ? "" : e]);
		else {
			let t = [...i.value], n = t.indexOf(e);
			n > -1 ? t.splice(n, 1) : t.push(e), a(t);
		}
	};
	return e(() => t.modelValue, () => i.value = D(t.modelValue), { deep: !0 }), d(W, {
		activeNames: i,
		handleItemClick: async (e) => {
			let { beforeCollapse: r } = t;
			if (!r) {
				o(e);
				return;
			}
			let i = r(e);
			[n(i), k(i)].includes(!0) || P(G, "beforeCollapse must return type `Promise<boolean>` or `boolean`"), n(i) ? i.then((t) => {
				t !== !1 && o(e);
			}).catch((e) => {
				F(G, `some error occurred: ${e}`);
			}) : i && o(e);
		}
	}), {
		activeNames: i,
		setActiveNames: a
	};
}, q = (e) => {
	let t = I("collapse");
	return { rootKls: f(() => [t.b(), t.b(`icon-position-${e.expandIconPosition}`)]) };
}, J = /* @__PURE__ */ l({
	name: "ElCollapse",
	__name: "collapse",
	props: H,
	emits: U,
	setup(e, { expose: t, emit: n }) {
		let r = e, { activeNames: i, setActiveNames: s } = K(r, n), { rootKls: l } = q(r);
		return t({
			activeNames: i,
			setActiveNames: s
		}), (e, t) => (o(), S("div", { class: c(w(l)) }, [a(e.$slots, "default")], 2));
	}
}), Y = M({
	title: {
		type: String,
		default: ""
	},
	name: {
		type: N([String, Number]),
		default: void 0
	},
	icon: {
		type: te,
		default: ee
	},
	disabled: Boolean
}), X = (e) => {
	let n = t(W), { namespace: r } = I("collapse"), i = y(!1), a = y(!1), o = z(), s = f(() => o.current++), c = f(() => e.name ?? `${r.value}-id-${o.prefix}-${w(s)}`);
	return {
		focusing: i,
		id: s,
		isActive: f(() => n?.activeNames.value.includes(w(c))),
		handleFocus: () => {
			setTimeout(() => {
				a.value ? a.value = !1 : i.value = !0;
			}, 50);
		},
		handleHeaderClick: (t) => {
			e.disabled || t.target?.closest("input, textarea, select") || (n?.handleItemClick(w(c)), i.value = !1, a.value = !0);
		},
		handleEnterClick: (e) => {
			e.target?.closest("input, textarea, select") || (e.preventDefault(), n?.handleItemClick(w(c)));
		}
	};
}, Z = (e, { focusing: t, isActive: n, id: r }) => {
	let i = I("collapse"), a = f(() => [
		i.b("item"),
		i.is("active", w(n)),
		i.is("disabled", e.disabled)
	]), o = f(() => [
		i.be("item", "header"),
		i.is("active", w(n)),
		{ focusing: w(t) && !e.disabled }
	]), s = f(() => [i.be("item", "arrow"), i.is("active", w(n))]);
	return {
		itemTitleKls: f(() => [i.be("item", "title")]),
		arrowKls: s,
		headKls: o,
		rootKls: a,
		itemWrapperKls: f(() => i.be("item", "wrap")),
		itemContentKls: f(() => i.be("item", "content")),
		scopedContentId: f(() => i.b(`content-${w(r)}`)),
		scopedHeadId: f(() => i.b(`head-${w(r)}`))
	};
}, ne = [
	"id",
	"aria-expanded",
	"aria-controls",
	"aria-describedby",
	"tabindex",
	"aria-disabled"
], re = [
	"id",
	"aria-hidden",
	"aria-labelledby"
], Q = /* @__PURE__ */ l({
	name: "ElCollapseItem",
	__name: "collapse-item",
	props: Y,
	setup(e, { expose: t }) {
		let n = e, { focusing: l, id: u, isActive: d, handleFocus: f, handleHeaderClick: m, handleEnterClick: y } = X(n), { arrowKls: T, headKls: E, rootKls: D, itemTitleKls: O, itemWrapperKls: k, itemContentKls: A, scopedContentId: j, scopedHeadId: M } = Z(n, {
			focusing: l,
			isActive: d,
			id: u
		});
		return t({ isActive: d }), (t, n) => (o(), S("div", { class: c(w(D)) }, [b("div", {
			id: w(M),
			class: c(w(E)),
			"aria-expanded": w(d),
			"aria-controls": w(j),
			"aria-describedby": w(j),
			tabindex: e.disabled ? void 0 : 0,
			"aria-disabled": e.disabled,
			role: "button",
			onClick: n[0] ||= (...e) => w(m) && w(m)(...e),
			onKeydown: n[1] ||= v(p((...e) => w(y) && w(y)(...e), ["stop"]), ["space", "enter"]),
			onFocus: n[2] ||= (...e) => w(f) && w(f)(...e),
			onBlur: n[3] ||= (e) => l.value = !1
		}, [b("span", { class: c(w(O)) }, [a(t.$slots, "title", { isActive: w(d) }, () => [r(i(e.title), 1)])], 2), a(t.$slots, "icon", { isActive: w(d) }, () => [x(w(L), { class: c(w(T)) }, {
			default: _(() => [(o(), C(s(e.icon)))]),
			_: 1
		}, 8, ["class"])])], 42, ne), x(w(B), null, {
			default: _(() => [g(b("div", {
				id: w(j),
				role: "region",
				class: c(w(k)),
				"aria-hidden": !w(d),
				"aria-labelledby": w(M)
			}, [b("div", { class: c(w(A)) }, [a(t.$slots, "default")], 2)], 10, re), [[h, w(d)]])]),
			_: 3
		})], 2));
	}
}), $ = E(J, { CollapseItem: Q }), ie = T(Q);
//#endregion
export { $ as ElCollapse, $ as default, ie as ElCollapseItem, W as collapseContextKey, U as collapseEmits, Y as collapseItemProps, H as collapseProps, V as emitChangeFn };
