globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { jt as e } from "../../../vue.runtime.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/error.mjs
var t = class extends Error {
	constructor(e) {
		super(e), this.name = "ElementPlusError";
	}
};
function n(e, n) {
	throw new t(`[${e}] ${n}`);
}
function r(n, r) {
	{
		let i = e(n) ? new t(`[${n}] ${r}`) : n;
		console.warn(i);
	}
}
//#endregion
export { n, r as t };
