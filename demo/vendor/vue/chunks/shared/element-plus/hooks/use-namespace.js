globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, E as t, _ as n, ut as r, yt as i } from "../../../vue.runtime.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-namespace/index.mjs
var a = "is-", o = (e, t, n, r, i) => {
	let a = `${e}-${t}`;
	return n && (a += `-${n}`), r && (a += `__${r}`), i && (a += `--${i}`), a;
}, s = Symbol("namespaceContextKey"), c = (a) => {
	let o = a || (t() ? e(s, r("el")) : r("el"));
	return n(() => i(o) || "el");
}, l = (e, t) => {
	let n = c(t);
	return {
		namespace: n,
		b: (t = "") => o(n.value, e, t, "", ""),
		e: (t) => t ? o(n.value, e, "", t, "") : "",
		m: (t) => t ? o(n.value, e, "", "", t) : "",
		be: (t, r) => t && r ? o(n.value, e, t, r, "") : "",
		em: (t, r) => t && r ? o(n.value, e, "", t, r) : "",
		bm: (t, r) => t && r ? o(n.value, e, t, "", r) : "",
		bem: (t, r, i) => t && r && i ? o(n.value, e, t, r, i) : "",
		is: (e, ...t) => {
			let n = t.length >= 1 ? t[0] : !0;
			return e && n ? `${a}${e}` : "";
		},
		cssVar: (e) => {
			let t = {};
			for (let r in e) e[r] && (t[`--${n.value}-${r}`] = e[r]);
			return t;
		},
		cssVarName: (e) => `--${n.value}-${e}`,
		cssVarBlock: (t) => {
			let r = {};
			for (let i in t) t[i] && (r[`--${n.value}-${e}-${i}`] = t[i]);
			return r;
		},
		cssVarBlockName: (t) => `--${n.value}-${e}-${t}`
	};
};
//#endregion
export { c as n, l as r, s as t };
