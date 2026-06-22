globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, E as t, Ft as n, G as r, H as i, J as a, Mt as o, T as s, U as c, tt as l, ut as u, v as d, x as f, y as p, yt as m, z as h } from "./vue.runtime.js";
import { i as g, t as _ } from "./shared/element-plus/utils/vue/install.js";
import { n as v, r as y } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as b } from "./shared/element-plus/hooks/use-namespace.js";
import { a as x } from "./shared/element-plus/utils/vue/icon.js";
import { t as S } from "./el-icon.js";
import { n as C } from "./shared/element-plus/hooks/use-locale.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/breadcrumb/src/breadcrumb.mjs
var w = v({
	separator: {
		type: String,
		default: "/"
	},
	separatorIcon: { type: x }
}), T = Symbol("breadcrumbKey"), E = ["aria-label"], D = /* @__PURE__ */ s({
	name: "ElBreadcrumb",
	__name: "breadcrumb",
	props: w,
	setup(e) {
		let { t } = C(), n = e, a = b("breadcrumb"), s = u();
		return c(T, n), h(() => {
			let e = s.value.querySelectorAll(`.${a.e("item")}`);
			e.length && e[e.length - 1].setAttribute("aria-current", "page");
		}), (e, n) => (i(), f("div", {
			ref_key: "breadcrumb",
			ref: s,
			class: o(m(a).b()),
			"aria-label": m(t)("el.breadcrumb.label"),
			role: "navigation"
		}, [r(e.$slots, "default")], 10, E));
	}
}), O = v({
	to: {
		type: y([String, Object]),
		default: ""
	},
	replace: Boolean
}), k = /* @__PURE__ */ s({
	name: "ElBreadcrumbItem",
	__name: "breadcrumb-item",
	props: O,
	setup(s) {
		let c = s, u = t(), h = e(T, void 0), g = b("breadcrumb"), _ = u.appContext.config.globalProperties.$router, v = () => {
			!c.to || !_ || (c.replace ? _.replace(c.to) : _.push(c.to));
		};
		return (e, t) => (i(), f("span", { class: o(m(g).e("item")) }, [d("span", {
			class: o([m(g).e("inner"), m(g).is("link", !!s.to)]),
			role: "link",
			onClick: v
		}, [r(e.$slots, "default")], 2), m(h)?.separatorIcon ? (i(), p(m(S), {
			key: 0,
			class: o(m(g).e("separator"))
		}, {
			default: l(() => [(i(), p(a(m(h).separatorIcon)))]),
			_: 1
		}, 8, ["class"])) : (i(), f("span", {
			key: 1,
			class: o(m(g).e("separator")),
			role: "presentation"
		}, n(m(h)?.separator), 3))], 2));
	}
}), A = _(D, { BreadcrumbItem: k }), j = g(k);
//#endregion
export { A as ElBreadcrumb, A as default, j as ElBreadcrumbItem, O as breadcrumbItemProps, T as breadcrumbKey, w as breadcrumbProps };
