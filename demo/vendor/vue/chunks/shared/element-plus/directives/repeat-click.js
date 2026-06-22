globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Dt as e } from "../../../vue.runtime.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/directives/repeat-click/index.mjs
var t = "_RepeatClick", n = {
	beforeMount(n, r) {
		let i = r.value, { interval: a = 100, delay: o = 600 } = e(i) ? {} : i, s, c, l = () => e(i) ? i() : i.handler(), u = () => {
			c &&= (clearTimeout(c), void 0), s &&= (clearInterval(s), void 0);
		}, d = (e) => {
			e.button === 0 && (u(), l(), document.addEventListener("mouseup", u, { once: !0 }), c = setTimeout(() => {
				s = setInterval(() => {
					l();
				}, a);
			}, o));
		};
		n[t] = {
			start: d,
			clear: u
		}, n.addEventListener("mousedown", d);
	},
	unmounted(e) {
		if (!e[t]) return;
		let { start: n, clear: r } = e[t];
		n && e.removeEventListener("mousedown", n), r && (r(), document.removeEventListener("mouseup", r)), e[t] = null;
	}
};
//#endregion
export { n as t };
