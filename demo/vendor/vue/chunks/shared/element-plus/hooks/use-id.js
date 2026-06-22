globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, E as t, yt as n } from "../../../vue.runtime.js";
import { t as r } from "../utils/error.js";
import { _ as i, g as a } from "../../vueuse.js";
import { n as o } from "./use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-id/index.mjs
var s = {
	prefix: Math.floor(Math.random() * 1e4),
	current: 0
}, c = Symbol("elIdInjection"), l = () => t() ? e(c, s) : s, u = (e) => {
	let t = l();
	!i && t === s && r("IdInjection", "Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed\nusage: app.provide(ID_INJECTION_KEY, {\n  prefix: number,\n  current: number,\n})");
	let c = o();
	return a(() => n(e) || `${c.value}-id-${t.prefix}-${t.current++}`);
};
//#endregion
export { l as n, u as t };
