globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, E as t, _ as n, ut as r, yt as i } from "../../../vue.runtime.js";
import { i as a } from "../utils/types.js";
import { t as o } from "../utils/error.js";
import { _ as s } from "../../vueuse.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-z-index/index.mjs
var c = { current: 0 }, l = r(0), u = 2e3, d = Symbol("elZIndexContextKey"), f = Symbol("zIndexContextKey"), p = (r) => {
	let p = t() ? e(d, c) : c, m = r || (t() ? e(f, void 0) : void 0), h = n(() => {
		let e = i(m);
		return a(e) ? e : u;
	}), g = n(() => h.value + l.value);
	return !s && !e(d) && o("ZIndexInjection", "Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed\nusage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })"), {
		initialZIndex: h,
		currentZIndex: g,
		nextZIndex: () => (p.current++, l.value = p.current, g.value)
	};
};
//#endregion
export { p as n, f as r, u as t };
