globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Dt as e } from "../../../vue.runtime.js";
import { c as t } from "./types.js";
import { o as n } from "./dom/aria.js";
import { _ as r } from "../../vueuse.js";
import { r as i } from "./dom/style.js";
import { n as a, t as o } from "./raf.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/easings.mjs
function s(e, t, n, r) {
	let i = n - t;
	return e /= r / 2, e < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/dom/scroll.mjs
var c = (e, t) => {
	if (!r) return !1;
	let n = {
		undefined: "overflow",
		true: "overflow-y",
		false: "overflow-x"
	}[String(t)], a = i(e, n);
	return [
		"scroll",
		"auto",
		"overlay"
	].some((e) => a.includes(e));
}, l = (e, t) => {
	if (!r) return;
	let i = e;
	for (; i;) {
		if ([
			window,
			document,
			document.documentElement
		].includes(i)) return window;
		if (c(i, t)) return i;
		i = n(i) ? i.host : i.parentNode;
	}
	return i;
}, u, d = (e) => {
	if (!r) return 0;
	if (u !== void 0) return u;
	let t = document.createElement("div");
	t.className = `${e}-scrollbar__wrap`, t.style.visibility = "hidden", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
	let n = t.offsetWidth;
	t.style.overflow = "scroll";
	let i = document.createElement("div");
	i.style.width = "100%", t.appendChild(i);
	let a = i.offsetWidth;
	return t.parentNode?.removeChild(t), u = n - a, u;
};
function f(e, t) {
	if (!r) return;
	if (!t) {
		e.scrollTop = 0;
		return;
	}
	let n = [], i = t.offsetParent;
	for (; i !== null && e !== i && e.contains(i);) n.push(i), i = i.offsetParent;
	let a = t.offsetTop + n.reduce((e, t) => e + t.offsetTop, 0), o = a + t.offsetHeight, s = e.scrollTop, c = s + e.clientHeight;
	a < s ? e.scrollTop = a : o > c && (e.scrollTop = o - e.clientHeight);
}
function p(n, r, i, c, l) {
	let u = Date.now(), d, f = () => {
		let o = Date.now() - u, p = s(o > c ? c : o, r, i, c);
		t(n) ? n.scrollTo(window.pageXOffset, p) : n.scrollTop = p, o < c ? d = a(f) : e(l) && l();
	};
	return f(), () => {
		d && o(d);
	};
}
var m = (e, n) => t(n) ? e.ownerDocument.documentElement : n, h = (e) => t(e) ? window.scrollY : e.scrollTop;
//#endregion
export { h as a, m as i, d as n, f as o, l as r, p as t };
