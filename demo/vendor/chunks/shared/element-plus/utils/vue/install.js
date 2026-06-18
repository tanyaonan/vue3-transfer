globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Ct as e, Tt as t, bt as n } from "../../../../vue.runtime.js";
import { c as r, s as i } from "../../../lodash/_baseAssignValue.js";
import { t as a } from "../../../lodash/_overArg.js";
import { t as o } from "../../../lodash/fromPairs.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var s = a(Object.getPrototypeOf, Object), c = "[object Object]", l = Function.prototype, u = Object.prototype, d = l.toString, f = u.hasOwnProperty, p = d.call(Object);
function m(e) {
	if (!i(e) || r(e) != c) return !1;
	var t = s(e);
	if (t === null) return !0;
	var n = f.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && d.call(n) == p;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/vue/install.mjs
var h = (n) => {
	let r = n.props, i = t(r) ? o(r.map((e) => [e, {}])) : r;
	n.setPropsDefaults = (t) => {
		if (i) {
			for (let [n, r] of Object.entries(t)) {
				let t = i[n];
				if (e(i, n)) {
					if (m(t)) {
						i[n] = {
							...t,
							default: r
						};
						continue;
					}
					i[n] = {
						type: t,
						default: r
					};
				}
			}
			n.props = i;
		}
	};
}, g = (e, t) => {
	if (e.install = (n) => {
		for (let r of [e, ...Object.values(t ?? {})]) n.component(r.name, r);
	}, t) for (let [n, r] of Object.entries(t)) e[n] = r;
	return h(e), e;
}, _ = (e, t) => (e.install = (n) => {
	e._context = n._context, n.config.globalProperties[t] = e;
}, e), v = (e, t) => (e.install = (n) => {
	n.directive(t, e);
}, e), y = (e) => (e.install = n, h(e), e);
//#endregion
export { m as a, y as i, v as n, s as o, _ as r, g as t };
