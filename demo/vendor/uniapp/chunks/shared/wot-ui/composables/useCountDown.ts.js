globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, L as t, s as n } from "../../../vue.runtime.js";
import { y as r } from "../common/AbortablePromise.ts.js";
import { t as i } from "./useRaf.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useCountDown.ts
var a = 1e3, o = 60 * a, s = 60 * o, c = 24 * s;
function l(e) {
	return {
		total: e,
		days: Math.floor(e / c),
		hours: Math.floor(e % c / s),
		minutes: Math.floor(e % s / o),
		seconds: Math.floor(e % o / a),
		milliseconds: Math.floor(e % a)
	};
}
function u(e, t) {
	return Math.floor(e / 1e3) === Math.floor(t / 1e3);
}
function d(a) {
	let o, s, { start: c, cancel: d } = i(y), f = t(a.time), p = n(() => l(f.value)), m = () => {
		s = !1, d();
	}, h = () => Math.max(o - Date.now(), 0), g = (e) => {
		f.value = e, r(a.onChange) && a.onChange(p.value), e === 0 && (m(), r(a.onFinish) && a.onFinish());
	}, _ = () => {
		s && (g(h()), f.value > 0 && c());
	}, v = () => {
		if (s) {
			let e = h();
			(!u(e, f.value) || e === 0) && g(e), f.value > 0 && c();
		}
	};
	function y() {
		a.millisecond ? _() : v();
	}
	return e(m), {
		start: () => {
			s || (o = Date.now() + f.value, s = !0, c());
		},
		pause: m,
		reset: (e = a.time) => {
			m(), f.value = e;
		},
		current: p
	};
}
//#endregion
export { d as t };
