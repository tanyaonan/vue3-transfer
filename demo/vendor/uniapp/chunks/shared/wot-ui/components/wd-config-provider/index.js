globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { M as e, k as t } from "../../common/AbortablePromise.ts.js";
import { s as n, t as r } from "../../common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-config-provider/global-config.ts
var i = Object.freeze({
	theme: "light",
	themeVars: {},
	button: {},
	tag: {}
});
function a(n, r) {
	let a = n || i, s = e(r, t);
	return {
		theme: s.theme || a.theme,
		themeVars: o(a.themeVars, s.themeVars),
		button: o(a.button, s.button),
		tag: o(a.tag, s.tag)
	};
}
function o(n, r) {
	return r ? {
		...n,
		...e(r, t)
	} : n;
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-config-provider/types.ts
var s = {
	...r,
	theme: n("light"),
	themeVars: {
		type: Object,
		default: () => ({})
	},
	button: {
		type: Object,
		default: () => ({})
	},
	tag: {
		type: Object,
		default: () => ({})
	}
}, c = Symbol("wd-config-provider");
//#endregion
export { a as i, s as n, i as r, c as t };
