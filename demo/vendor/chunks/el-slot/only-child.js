globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, Ot as t, T as n, U as r, bt as i, f as a, g as o, h as s, nt as c, p as l, w as u } from "../vue.runtime.js";
import { t as d } from "../shared/element-plus/utils/error.js";
import { r as f } from "../shared/element-plus/hooks/use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-forward-ref/index.mjs
var p = Symbol("elForwardRef"), m = (e) => {
	r(p, { setForwardRef: ((t) => {
		e.value = t;
	}) });
}, h = (e) => ({
	mounted(t) {
		e(t);
	},
	updated(t) {
		e(t);
	},
	unmounted() {
		e(null);
	}
}), g = "ElOnlyChild", _ = /* @__PURE__ */ n({
	name: g,
	setup(t, { slots: n, attrs: r }) {
		let a = h(e(p)?.setForwardRef ?? i);
		return () => {
			let e = n.default?.(r);
			if (!e) return null;
			let [t, i] = v(e);
			return t ? (i > 1 && d(g, "requires exact only one valid child."), c(o(t, r), [[a]])) : (d(g, "no valid child node found"), null);
		};
	}
});
function v(e) {
	if (!e) return [null, 0];
	let n = e, r = n.filter((e) => e.type !== a).length;
	for (let e of n) {
		if (t(e)) switch (e.type) {
			case a: continue;
			case s:
			case "svg": return [y(e), r];
			case l: return v(e.children);
			default: return [e, r];
		}
		return [y(e), r];
	}
	return [null, 0];
}
function y(e) {
	return u("span", { class: f("only-child").e("content") }, [e]);
}
//#endregion
export { m as n, _ as t };
