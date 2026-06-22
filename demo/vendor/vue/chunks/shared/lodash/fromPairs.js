globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./_baseAssignValue.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/fromPairs.js
function t(t) {
	for (var n = -1, r = t == null ? 0 : t.length, i = {}; ++n < r;) {
		var a = t[n];
		e(i, a[0], a[1]);
	}
	return i;
}
//#endregion
export { t };
