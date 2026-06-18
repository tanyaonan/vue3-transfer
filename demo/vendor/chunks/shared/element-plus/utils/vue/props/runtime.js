globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Ct as e, Ot as t, Q as n } from "../../../../../vue.runtime.js";
import { t as r } from "../../../../lodash/fromPairs.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/vue/props/runtime.mjs
var i = "__epPropKey", a = (e) => e, o = (e) => t(e) && !!e.__epPropKey, s = (r, a) => {
	if (!t(r) || o(r)) return r;
	let { values: s, required: c, default: l, type: u, validator: d } = r, f = {
		type: u,
		required: !!c,
		validator: s || d ? (t) => {
			let i = !1, o = [];
			if (s && (o = Array.from(s), e(r, "default") && o.push(l), i ||= o.includes(t)), d && (i ||= d(t)), !i && o.length > 0) {
				let e = [...new Set(o)].map((e) => JSON.stringify(e)).join(", ");
				n(`Invalid prop: validation failed${a ? ` for prop "${a}"` : ""}. Expected one of [${e}], got value ${JSON.stringify(t)}.`);
			}
			return i;
		} : void 0,
		[i]: !0
	};
	return e(r, "default") && (f.default = l), f;
}, c = (e) => r(Object.entries(e).map(([e, t]) => [e, s(t, e)]));
//#endregion
export { c as n, a as r, s as t };
