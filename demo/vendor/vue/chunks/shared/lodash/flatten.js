globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { l as e } from "./_baseAssignValue.js";
import { _ as t } from "../element-plus/utils/objects.js";
import { n, t as r } from "./_arrayPush.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isFlattenable.js
var i = e ? e.isConcatSpreadable : void 0;
function a(e) {
	return t(e) || n(e) || !!(i && e && e[i]);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFlatten.js
function o(e, t, n, i, s) {
	var c = -1, l = e.length;
	for (n ||= a, s ||= []; ++c < l;) {
		var u = e[c];
		t > 0 && n(u) ? t > 1 ? o(u, t - 1, n, i, s) : r(s, u) : i || (s[s.length] = u);
	}
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/flatten.js
function s(e) {
	return e != null && e.length ? o(e, 1) : [];
}
//#endregion
export { o as n, s as t };
