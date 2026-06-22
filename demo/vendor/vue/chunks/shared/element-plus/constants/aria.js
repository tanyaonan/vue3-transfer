globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "../utils/browser.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/constants/aria.mjs
var t = {
	tab: "Tab",
	enter: "Enter",
	space: "Space",
	left: "ArrowLeft",
	up: "ArrowUp",
	right: "ArrowRight",
	down: "ArrowDown",
	esc: "Escape",
	delete: "Delete",
	backspace: "Backspace",
	numpadEnter: "NumpadEnter",
	pageUp: "PageUp",
	pageDown: "PageDown",
	home: "Home",
	end: "End"
}, n = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
	let i = e?.(r);
	if (n === !1 || !i) return t?.(r);
}, r = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0, i = (e) => {
	if (e.code && e.code !== "Unidentified") return e.code;
	let n = a(e);
	if (n) {
		if (Object.values(t).includes(n)) return n;
		switch (n) {
			case " ": return t.space;
			default: return "";
		}
	}
	return "";
}, a = (t) => {
	let n = t.key && t.key !== "Unidentified" ? t.key : "";
	if (!n && t.type === "keyup" && e()) {
		let e = t.target;
		n = e.value.charAt(e.selectionStart - 1);
	}
	return n;
};
//#endregion
export { t as a, r as i, i as n, a as r, n as t };
