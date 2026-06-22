globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, Dt as t, E as n, N as r, pt as i, ut as a, yt as o } from "../../../vue.runtime.js";
import { i as s } from "../utils/dom/aria.js";
import { c } from "../../vueuse.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-focus-controller/index.mjs
function l(r, { disabled: l, beforeFocus: u, afterFocus: d, beforeBlur: f, afterBlur: p } = {}) {
	let { emit: m } = n(), h = i(), g = a(!1), _ = (e) => {
		let n = t(u) ? u(e) : !1;
		o(l) || g.value || n || (g.value = !0, m("focus", e), d?.());
	}, v = (e) => {
		let n = t(f) ? f(e) : !1;
		o(l) || e.relatedTarget && h.value?.contains(e.relatedTarget) || n || (g.value = !1, m("blur", e), p?.());
	};
	return e([h, () => o(l)], ([e, t]) => {
		e && (t ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", "-1"));
	}), c(h, "focus", _, !0), c(h, "blur", v, !0), c(h, "click", (e) => {
		o(l) || s(e.target) || h.value?.contains(document.activeElement) && h.value !== document.activeElement || r.value?.focus();
	}, !0), {
		isFocused: g,
		wrapperRef: h,
		handleFocus: _,
		handleBlur: v
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-composition/index.mjs
function u({ afterComposition: e, emit: t }) {
	let n = a(!1), i = (e) => {
		t?.("compositionstart", e), n.value = !0;
	}, o = (e) => {
		t?.("compositionupdate", e), n.value = !0;
	}, s = (i) => {
		t?.("compositionend", i), n.value && (n.value = !1, r(() => e(i)));
	};
	return {
		isComposing: n,
		handleComposition: (e) => {
			e.type === "compositionend" ? s(e) : o(e);
		},
		handleCompositionStart: i,
		handleCompositionUpdate: o,
		handleCompositionEnd: s
	};
}
//#endregion
export { l as n, u as t };
