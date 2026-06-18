globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, Dt as t, E as n, Tt as r, _ as i, ut as a } from "../../../vue.runtime.js";
import { t as o } from "../../lodash/isEqual.js";
import { n as s, r as c } from "../utils/vue/props/runtime.js";
import { t as l } from "../utils/error.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-empty-values/index.mjs
var u = Symbol("emptyValuesContextKey"), d = "use-empty-values", f = [
	"",
	void 0,
	null
], p = s({
	emptyValues: Array,
	valueOnClear: {
		type: c([
			String,
			Number,
			Boolean,
			Function
		]),
		default: void 0,
		validator: (e) => (e = t(e) ? e() : e, r(e) ? e.every((e) => !e) : !e)
	}
}), m = (s, c) => {
	let p = n() ? e(u, a({})) : a({}), m = i(() => s.emptyValues || p.value.emptyValues || f), h = i(() => t(s.valueOnClear) ? s.valueOnClear() : s.valueOnClear === void 0 ? t(p.value.valueOnClear) ? p.value.valueOnClear() : p.value.valueOnClear === void 0 ? c === void 0 ? void 0 : c : p.value.valueOnClear : s.valueOnClear), g = (e) => {
		let t = !0;
		return t = r(e) ? m.value.some((t) => o(e, t)) : m.value.includes(e), t;
	};
	return g(h.value) || l(d, "value-on-clear should be a value of empty-values"), {
		emptyValues: m,
		valueOnClear: h,
		isEmptyValue: g
	};
};
//#endregion
export { m as n, p as r, u as t };
