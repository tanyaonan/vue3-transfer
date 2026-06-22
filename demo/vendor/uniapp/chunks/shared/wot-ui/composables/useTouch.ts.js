globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { L as e } from "../../../vue.runtime.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useTouch.ts
function t() {
	let t = e(""), n = e(0), r = e(0), i = e(0), a = e(0), o = e(0), s = e(0);
	function c(e) {
		let c = e.touches[0];
		t.value = "", n.value = 0, r.value = 0, i.value = 0, a.value = 0, o.value = c.clientX, s.value = c.clientY;
	}
	function l(e) {
		let c = e.touches[0];
		n.value = c.clientX - o.value, r.value = c.clientY - s.value, i.value = Math.abs(n.value), a.value = Math.abs(r.value), t.value = i.value > a.value ? "horizontal" : i.value < a.value ? "vertical" : "";
	}
	return {
		touchStart: c,
		touchMove: l,
		direction: t,
		deltaX: n,
		deltaY: r,
		offsetX: i,
		offsetY: a,
		startX: o,
		startY: s
	};
}
//#endregion
export { t };
