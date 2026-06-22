globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, Ft as t, G as n, H as r, Mt as i, Pt as a, T as o, b as s, v as c, x as l, yt as u } from "./vue.runtime.js";
import { t as d } from "./shared/element-plus/utils/vue/install.js";
import { n as f, r as p } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as m } from "./shared/element-plus/hooks/use-namespace.js";
import { r as h } from "./el-config-provider/constants.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/card/src/card.mjs
var g = f({
	header: {
		type: String,
		default: ""
	},
	footer: {
		type: String,
		default: ""
	},
	bodyStyle: {
		type: p([
			String,
			Object,
			Array,
			Boolean
		]),
		default: ""
	},
	headerClass: String,
	bodyClass: String,
	footerClass: String,
	shadow: {
		type: String,
		values: [
			"always",
			"hover",
			"never"
		],
		default: void 0
	}
}), _ = Symbol("cardContextKey"), v = d(/* @__PURE__ */ o({
	name: "ElCard",
	__name: "card",
	props: g,
	setup(o) {
		let d = h("card"), f = m("card");
		return (p, m) => (r(), l("div", { class: i([u(f).b(), u(f).is(`${o.shadow || u(d)?.shadow || "always"}-shadow`)]) }, [
			p.$slots.header || o.header ? (r(), l("div", {
				key: 0,
				class: i([u(f).e("header"), o.headerClass])
			}, [n(p.$slots, "header", {}, () => [e(t(o.header), 1)])], 2)) : s("v-if", !0),
			c("div", {
				class: i([u(f).e("body"), o.bodyClass]),
				style: a(o.bodyStyle)
			}, [n(p.$slots, "default")], 6),
			p.$slots.footer || o.footer ? (r(), l("div", {
				key: 1,
				class: i([u(f).e("footer"), o.footerClass])
			}, [n(p.$slots, "footer", {}, () => [e(t(o.footer), 1)])], 2)) : s("v-if", !0)
		], 2));
	}
}));
//#endregion
export { v as ElCard, v as default, _ as cardContextKey, g as cardProps };
