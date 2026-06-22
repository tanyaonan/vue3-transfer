globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { s as e } from "./_baseAssignValue.js";
import { i as t, n, r } from "./_flatRest.js";
import { g as i } from "./_Uint8Array.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseRest.js
function a(e, i) {
	return r(n(e, i, t), e + "");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLikeObject.js
function o(t) {
	return e(t) && i(t);
}
//#endregion
export { a as n, o as t };
