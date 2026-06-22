globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { L as e, _ as t } from "../../../vue.runtime.js";
import { T as n, p as r } from "../common/AbortablePromise.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/usePopover.ts
function i(i = !0) {
	let { proxy: a } = t(), o = e(""), s = e(""), c = e(""), l = e(""), u = e(0), d = e(0), f = e(0), p = e(0), m = e(0), h = e(0), g = e(0);
	function _(e, t, n) {
		t && (l.value = [
			`wd-${n}__arrow`,
			e === "bottom" || e === "bottom-start" || e === "bottom-end" ? `wd-${n}__arrow-up` : "",
			e === "left" || e === "left-start" || e === "left-end" ? `wd-${n}__arrow-right` : "",
			e === "right" || e === "right-start" || e === "right-end" ? `wd-${n}__arrow-left` : "",
			e === "top" || e === "top-start" || e === "top-end" ? `wd-${n}__arrow-down` : ""
		].join(" ")), r("#target", !1, a).then((e) => {
			e && (f.value = e.left, p.value = e.bottom, m.value = e.width, h.value = e.height, g.value = e.top);
		}), r("#pos", !1, a).then((e) => {
			e && (u.value = e.width, d.value = e.height);
		});
	}
	function v(e, t) {
		let r = i ? 9 : 0, a = m.value / 2, c = r + h.value + 5, l = m.value + r + 5, f = h.value / 2, p = 0, g = 0;
		Array.isArray(t) ? (p = (a - 17 > 0 ? 0 : a - 25) + t[0], g = (f - 17 > 0 ? 0 : f - 25) + (t[1] ? t[1] : t[0])) : n(t) ? (p = (a - 17 > 0 ? 0 : a - 25) + t.x, g = (f - 17 > 0 ? 0 : f - 25) + t.y) : (p = (a - 17 > 0 ? 0 : a - 25) + t, g = (f - 17 > 0 ? 0 : f - 25) + t);
		let _ = new Map([
			["top", [`left: ${a}px; bottom: ${c}px; transform: translateX(-50%);`, "left: 50%;"]],
			["top-start", [`left: ${p}px; bottom: ${c}px;`, `left: ${(u.value >= m.value ? m.value / 2 : u.value - 25) - p}px;`]],
			["top-end", [`right: ${p}px; bottom: ${c}px;`, `right: ${(u.value >= m.value ? m.value / 2 : u.value - 25) - p}px; transform: translateX(50%);`]],
			["bottom", [`left: ${a}px; top: ${c}px; transform: translateX(-50%);`, "left: 50%;"]],
			["bottom-start", [`left: ${p}px; top: ${c}px;`, `left: ${(u.value >= m.value ? m.value / 2 : u.value - 25) - p}px;`]],
			["bottom-end", [`right: ${p}px; top: ${c}px;`, `right: ${(u.value >= m.value ? m.value / 2 : u.value - 25) - p}px; transform: translateX(50%);`]],
			["left", [`right: ${l}px; top: ${f}px; transform: translateY(-50%);`, "top: 50%"]],
			["left-start", [`right: ${l}px; top: ${g}px;`, `top: ${(d.value >= h.value ? h.value / 2 : d.value - 20) - g}px;`]],
			["left-end", [`right: ${l}px; bottom: ${g}px;`, `bottom: ${(d.value >= h.value ? h.value / 2 : d.value - 20) - g}px; transform: translateY(50%);`]],
			["right", [`left: ${l}px; top: ${f}px; transform: translateY(-50%);`, "top: 50%"]],
			["right-start", [`left: ${l}px; top: ${g}px;`, `top: ${(d.value >= h.value ? h.value / 2 : d.value - 20) - g}px;`]],
			["right-end", [`left: ${l}px; bottom: ${g}px;`, `bottom: ${(d.value >= h.value ? h.value / 2 : d.value - 20) - g}px; transform: translateY(50%);`]]
		]);
		o.value = _.get(e)[0], s.value = _.get(e)[1];
	}
	function y(e, t) {
		r("#content", !1, a).then((n) => {
			if (!n) return;
			let r = n.width, i = n.height;
			(r !== u.value || i !== d.value) && (u.value = r, d.value = i, v(e, t));
		});
	}
	return {
		popStyle: o,
		arrowStyle: s,
		showStyle: c,
		arrowClass: l,
		init: _,
		control: v,
		updatePosition: y
	};
}
//#endregion
export { i as t };
