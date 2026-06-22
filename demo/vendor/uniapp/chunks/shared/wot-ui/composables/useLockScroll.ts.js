globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, L as t, N as n, w as r } from "../../../vue.runtime.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useLockScroll.ts
function i(i) {
	let a = t(0), o = () => {
		a.value === 0 && (document.getElementsByTagName("body")[0].style.overflow = "hidden"), a.value++;
	}, s = () => {
		a.value > 0 && (a.value--, a.value === 0 && (document.getElementsByTagName("body")[0].style.overflow = ""));
	}, c = () => {
		i() && s();
	};
	return n(i, (e) => {
		e ? o() : s();
	}), r(c), e(c), {
		lock: o,
		unlock: s
	};
}
//#endregion
export { i as t };
