globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Ot as e, Tt as t, jt as n } from "../../../vue.runtime.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isNil.js
function r(e) {
	return e == null;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/types.mjs
var i = (e) => e === void 0, a = (e) => typeof e == "boolean", o = (e) => typeof e == "number", s = (n) => !n && n !== 0 || t(n) && n.length === 0 || e(n) && !Object.keys(n).length, c = (e) => typeof Element > "u" ? !1 : e instanceof Element, l = (e) => r(e), u = (e) => n(e) ? !Number.isNaN(Number(e)) : !1, d = (e) => e === window;
//#endregion
export { l as a, d as c, o as i, r as l, c as n, u as o, s as r, i as s, a as t };
