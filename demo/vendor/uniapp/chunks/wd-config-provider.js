globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, d as i, g as a, s as o, y as s } from "./vue.runtime.js";
import { j as c } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as l } from "./shared/wot-ui/composables/useParent.ts.js";
import { i as u, n as d, t as f } from "./shared/wot-ui/components/wd-config-provider/index.js";
import { n as p, t as m } from "./shared/wot-ui/composables/useConfigProvider.ts.js";
import { t as h } from "./shared/wot-ui/composables/useChildren.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-config-provider/wd-config-provider.vue?vue&type=script&setup=true&lang.ts
var g = ["data-theme"], _ = /* @__PURE__ */ a({
	name: "wd-config-provider",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: d,
	setup(a) {
		let d = Symbol("None"), _ = s(m, d), v = a, { linkChildren: y } = h(f), { parent: b } = l(f), x = o(() => `wot-theme-${v.theme} ${v.customClass}`), S = o(() => {
			if (_ !== d) return _.themeStyle.value;
			let e = p(v.themeVars);
			return e ? `${c(e)}` : "";
		}), C = o(() => `${S.value}${v.customStyle}`);
		return y({
			themeStyle: S,
			globalConfig: o(() => u(b.value?.globalConfig.value || null, {
				theme: v.theme,
				themeVars: v.themeVars,
				button: v.button,
				tag: v.tag
			}))
		}), (a, o) => (n(), i("div", {
			"data-theme": a.theme,
			class: t(x.value),
			style: r(C.value)
		}, [e(a.$slots, "default")], 14, g));
	}
});
//#endregion
export { _ as default };
