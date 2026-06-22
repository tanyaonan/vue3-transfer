globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { G as t, H as n, Mt as r, Pt as i, T as a, _ as o, b as s, x as c, yt as l } from "./vue.runtime.js";
import { t as u } from "./shared/element-plus/utils/vue/install.js";
import { n as d, r as f } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as p } from "./shared/element-plus/hooks/use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/divider/src/divider.mjs
var m = d({
	direction: {
		type: String,
		values: ["horizontal", "vertical"],
		default: "horizontal"
	},
	contentPosition: {
		type: String,
		values: [
			"left",
			"center",
			"right"
		],
		default: "center"
	},
	borderStyle: {
		type: f(String),
		default: "solid"
	}
}), h = /* @__PURE__ */ a({
	name: "ElDivider",
	__name: "divider",
	props: m,
	setup(e) {
		let a = e, u = p("divider"), d = o(() => u.cssVar({ "border-style": a.borderStyle }));
		return (a, o) => (n(), c("div", {
			class: r([l(u).b(), l(u).m(e.direction)]),
			style: i(d.value),
			role: "separator"
		}, [a.$slots.default && e.direction !== "vertical" ? (n(), c("div", {
			key: 0,
			class: r([l(u).e("text"), l(u).is(e.contentPosition)])
		}, [t(a.$slots, "default")], 2)) : s("v-if", !0)], 6));
	}
}), g = /* @__PURE__ */ e({
	ElDivider: () => _,
	default: () => _,
	dividerProps: () => m
}), _ = u(h);
//#endregion
export { g as n, _ as t };
