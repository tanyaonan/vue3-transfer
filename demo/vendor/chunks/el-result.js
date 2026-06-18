globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Ft as e, G as t, H as n, J as r, Mt as i, T as a, _ as o, b as s, v as c, x as l, y as u, yt as d } from "./vue.runtime.js";
import { t as f } from "./shared/element-plus/utils/vue/install.js";
import { n as p } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as m } from "./shared/element-plus/hooks/use-namespace.js";
import { B as h, S as g, d as _, p as v } from "./shared/element-plus-icons.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/result/src/result.mjs
var y = {
	primary: "icon-primary",
	success: "icon-success",
	warning: "icon-warning",
	error: "icon-error",
	info: "icon-info"
}, b = {
	[y.primary]: g,
	[y.success]: _,
	[y.warning]: h,
	[y.error]: v,
	[y.info]: g
}, x = p({
	title: {
		type: String,
		default: ""
	},
	subTitle: {
		type: String,
		default: ""
	},
	icon: {
		type: String,
		values: [
			"primary",
			"success",
			"warning",
			"info",
			"error"
		],
		default: "info"
	}
}), S = f(/* @__PURE__ */ a({
	name: "ElResult",
	__name: "result",
	props: x,
	setup(a) {
		let f = a, p = m("result"), h = o(() => {
			let e = f.icon, t = e && y[e] ? y[e] : "icon-info";
			return {
				class: t,
				component: b[t] || b["icon-info"]
			};
		});
		return (o, f) => (n(), l("div", { class: i(d(p).b()) }, [
			c("div", { class: i(d(p).e("icon")) }, [t(o.$slots, "icon", {}, () => [h.value.component ? (n(), u(r(h.value.component), {
				key: 0,
				class: i(h.value.class)
			}, null, 8, ["class"])) : s("v-if", !0)])], 2),
			a.title || o.$slots.title ? (n(), l("div", {
				key: 0,
				class: i(d(p).e("title"))
			}, [t(o.$slots, "title", {}, () => [c("p", null, e(a.title), 1)])], 2)) : s("v-if", !0),
			a.subTitle || o.$slots["sub-title"] ? (n(), l("div", {
				key: 1,
				class: i(d(p).e("subtitle"))
			}, [t(o.$slots, "sub-title", {}, () => [c("p", null, e(a.subTitle), 1)])], 2)) : s("v-if", !0),
			o.$slots.extra ? (n(), l("div", {
				key: 2,
				class: i(d(p).e("extra"))
			}, [t(o.$slots, "extra")], 2)) : s("v-if", !0)
		], 2));
	}
}));
//#endregion
export { S as ElResult, S as default, b as IconComponentMap, y as IconMap, x as resultProps };
