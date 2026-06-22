globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Ct as e, Tt as t, f as n, j as r, p as i, xt as a } from "../../../../vue.runtime.js";
import { t as o } from "../error.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/vue/vnode.mjs
var s = "utils/vue/vnode";
function c(e) {
	return r(e) && e.type === i;
}
function l(e) {
	return r(e) && e.type === n;
}
function u(e) {
	return r(e) && !c(e) && !l(e);
}
var d = (t) => {
	if (!r(t)) return o(s, "[getNormalizedProps] must be a VNode"), {};
	let n = t.props || {}, i = (r(t.type) ? t.type.props : void 0) || {}, c = {};
	return Object.keys(i).forEach((t) => {
		e(i[t], "default") && (c[t] = i[t].default);
	}), Object.keys(n).forEach((e) => {
		c[a(e)] = n[e];
	}), c;
}, f = (e) => {
	let n = t(e) ? e : [e], i = [];
	return n.forEach((e) => {
		t(e) ? i.push(...f(e)) : r(e) && e.component?.subTree ? i.push(e, ...f(e.component.subTree)) : r(e) && t(e.children) ? i.push(...f(e.children)) : r(e) && e.shapeFlag === 2 ? i.push(...f(e.type())) : i.push(e);
	}), i;
};
//#endregion
export { u as a, c as i, d as n, l as r, f as t };
