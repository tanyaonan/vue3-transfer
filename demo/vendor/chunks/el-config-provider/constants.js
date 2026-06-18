globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, E as t, U as n, _ as r, ut as i, yt as a } from "../vue.runtime.js";
import { r as o } from "../shared/element-plus/utils/objects.js";
import { l as s } from "../shared/element-plus/utils/types.js";
import { t as c } from "../shared/element-plus/utils/error.js";
import { r as l, t as u } from "../shared/element-plus/hooks/use-namespace.js";
import { t as d } from "../shared/element-plus/hooks/use-size.js";
import { n as f, r as p, t as m } from "../shared/element-plus/hooks/use-z-index.js";
import { n as h, t as g } from "../shared/element-plus/hooks/use-locale.js";
import { t as _ } from "../shared/element-plus/hooks/use-empty-values.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/config-provider/src/constants.mjs
var v = Symbol(), y = i();
function b(n, i = void 0) {
	let a = t() ? e(v, y) : y;
	return n ? r(() => a.value?.[n] ?? i) : a;
}
function x(e, t) {
	let n = b(), i = l(e, r(() => n.value?.namespace || "el")), o = h(r(() => n.value?.locale)), c = f(r(() => {
		let e = n.value?.zIndex;
		return s(e) || Number.isNaN(e) ? m : e;
	})), u = r(() => a(t) || n.value?.size || "");
	return S(r(() => a(n) || {})), {
		ns: i,
		locale: o,
		zIndex: c,
		size: u
	};
}
var S = (e, i, o = !1) => {
	let s = !!t(), l = s ? b() : void 0, f = i?.provide ?? (s ? n : void 0);
	if (!f) {
		c("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
		return;
	}
	let m = r(() => {
		let t = a(e);
		return l?.value ? C(l.value, t) : t;
	});
	return f(v, m), f(g, r(() => m.value.locale)), f(u, r(() => m.value.namespace)), f(p, r(() => m.value.zIndex)), f(d, { size: r(() => m.value.size || "") }), f(_, r(() => ({
		emptyValues: m.value.emptyValues,
		valueOnClear: m.value.valueOnClear
	}))), (o || !y.value) && (y.value = m.value), m;
}, C = (e, t) => {
	let n = [...new Set([...o(e), ...o(t)])], r = {};
	for (let i of n) r[i] = t[i] === void 0 ? e[i] : t[i];
	return r;
};
//#endregion
export { v as i, x as n, b as r, S as t };
