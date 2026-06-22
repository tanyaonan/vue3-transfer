globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, E as t, _ as n, ut as r, yt as i } from "../../vue.runtime.js";
import { n as a } from "../../shared/element-plus/hooks/use-size.js";
import { n as o, t as s } from "../constants.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-prop/index.mjs
var c = (e) => {
	let r = t();
	return n(() => r?.proxy?.$props?.[e]);
}, l = (t, l = {}) => {
	let u = r(void 0), d = l.prop ? u : c("size"), f = l.global ? u : a(), p = l.form ? { size: void 0 } : e(s, void 0), m = l.formItem ? { size: void 0 } : e(o, void 0);
	return n(() => d.value || i(t) || m?.size || p?.size || f.value || "");
}, u = (t) => {
	let r = c("disabled"), a = e(s, void 0);
	return n(() => r.value ?? i(t) ?? a?.disabled ?? !1);
}, d = l, f = u;
//#endregion
export { d as i, u as n, l as r, f as t };
