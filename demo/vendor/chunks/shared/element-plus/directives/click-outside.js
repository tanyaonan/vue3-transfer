globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Tt as e } from "../../../vue.runtime.js";
import { n as t } from "../utils/types.js";
import { _ as n } from "../../vueuse.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/directives/click-outside/index.mjs
var r = /* @__PURE__ */ new Map();
if (n) {
	let e;
	document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
		if (e) {
			for (let n of r.values()) for (let { documentHandler: r } of n) r(t, e);
			e = void 0;
		}
	});
}
function i(n, r) {
	let i = [];
	return e(r.arg) ? i = r.arg : t(r.arg) && i.push(r.arg), function(e, t) {
		let a = r.instance.popperRef, o = e.target, s = t?.target, c = !r || !r.instance, l = !o || !s, u = n.contains(o) || n.contains(s), d = n === o, f = i.length && i.some((e) => e?.contains(o)) || i.length && i.includes(s), p = a && (a.contains(o) || a.contains(s));
		c || l || u || d || f || p || r.value(e, t);
	};
}
var a = {
	beforeMount(e, t) {
		r.has(e) || r.set(e, []), r.get(e).push({
			documentHandler: i(e, t),
			bindingFn: t.value
		});
	},
	updated(e, t) {
		r.has(e) || r.set(e, []);
		let n = r.get(e), a = n.findIndex((e) => e.bindingFn === t.oldValue), o = {
			documentHandler: i(e, t),
			bindingFn: t.value
		};
		a >= 0 ? n.splice(a, 1, o) : n.push(o);
	},
	unmounted(e) {
		r.delete(e);
	}
};
//#endregion
export { a as t };
