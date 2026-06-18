globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Ot as e, jt as t, xt as n } from "../../../../vue.runtime.js";
import { t as r } from "../objects.js";
import { i, o as a } from "../types.js";
import { t as o } from "../error.js";
import { o as s } from "./aria.js";
import { _ as c } from "../../../vueuse.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/dom/style.mjs
var l = "utils/dom/style", u = (e = "") => e.split(" ").filter((e) => !!e.trim()), d = (e, t) => {
	if (!e || !t) return !1;
	if (t.includes(" ")) throw Error("className should not contain space.");
	return e.classList.contains(t);
}, f = (e, t) => {
	!e || !t.trim() || e.classList.add(...u(t));
}, p = (e, t) => {
	!e || !t.trim() || e.classList.remove(...u(t));
}, m = (e, t) => {
	if (!c || !e || !t || s(e)) return "";
	let r = n(t);
	r === "float" && (r = "cssFloat");
	try {
		let t = e.style[r];
		if (t) return t;
		let n = document.defaultView?.getComputedStyle(e, "");
		return n ? n[r] : "";
	} catch {
		return e.style[r];
	}
}, h = (t, i, a) => {
	if (!(!t || !i)) if (e(i)) r(i).forEach(([e, n]) => h(t, e, n));
	else {
		let e = n(i);
		t.style[e] = a;
	}
};
function g(e, n = "px") {
	if (!e && e !== 0) return "";
	if (i(e) || a(e)) return `${e}${n}`;
	if (t(e)) return e;
	o(l, "binding value must be a string or number");
}
//#endregion
export { p as a, d as i, g as n, h as o, m as r, f as t };
