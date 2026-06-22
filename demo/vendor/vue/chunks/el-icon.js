globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { G as t, H as n, M as r, T as i, _ as a, x as o, yt as s } from "./vue.runtime.js";
import { t as c } from "./shared/element-plus/utils/vue/install.js";
import { n as l, r as u } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as d } from "./shared/element-plus/utils/dom/style.js";
import { r as f } from "./shared/element-plus/hooks/use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/icon/src/icon.mjs
var p = l({
	size: { type: u([Number, String]) },
	color: { type: String }
}), m = /* @__PURE__ */ i({
	name: "ElIcon",
	inheritAttrs: !1,
	__name: "icon",
	props: p,
	setup(e) {
		let i = e, c = f("icon"), l = a(() => {
			let { size: e, color: t } = i, n = d(e);
			return !n && !t ? {} : {
				fontSize: n,
				"--color": t
			};
		});
		return (e, i) => (n(), o("i", r({
			class: s(c).b(),
			style: l.value
		}, e.$attrs), [t(e.$slots, "default")], 16));
	}
}), h = /* @__PURE__ */ e({
	ElIcon: () => g,
	default: () => g,
	iconProps: () => p
}), g = c(m);
//#endregion
export { h as n, g as t };
