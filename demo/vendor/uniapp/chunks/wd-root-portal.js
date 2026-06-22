globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, c as a, g as o, l as s, o as c, s as l, y as u } from "./vue.runtime.js";
import { t as d } from "./shared/wot-ui/common/props.ts.js";
import { t as f } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as p } from "./shared/wot-ui/components/wd-config-provider/index.js";
import { t as m } from "./shared/wot-ui/composables/useConfigProvider.ts.js";
var h = /*@__PURE__*/ o({
	name: "wd-root-portal",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: { ...d },
	setup(e) {
		let o = Symbol("None"), d = u(m, o), { parent: h } = f(p), g = l(() => d === o ? h.value?.themeStyle.value || "" : d.themeStyle.value || ""), _ = l(() => {
			let e = d === o ? h.value?.globalConfig?.value.theme : d.globalConfig?.value.theme;
			return e ? `wot-theme-${e}` : "wot-theme-light";
		});
		return (e, o) => (r(), s(c, { to: "body" }, [a("div", {
			class: n([_.value, "wd-root-portal"]),
			style: i(g.value)
		}, [t(e.$slots, "default")], 6)]));
	}
}), g = /* @__PURE__ */ e({ default: () => _ }), _ = h;
//#endregion
export { g as n, _ as t };
