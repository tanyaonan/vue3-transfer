globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { o as e } from "./_baseAssignValue.js";
import { y as t } from "../element-plus/utils/objects.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_trimmedEndIndex.js
var n = /\s/;
function r(e) {
	for (var t = e.length; t-- && n.test(e.charAt(t)););
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTrim.js
var i = /^\s+/;
function a(e) {
	return e && e.slice(0, r(e) + 1).replace(i, "");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toNumber.js
var o = NaN, s = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
function d(n) {
	if (typeof n == "number") return n;
	if (t(n)) return o;
	if (e(n)) {
		var r = typeof n.valueOf == "function" ? n.valueOf() : n;
		n = e(r) ? r + "" : r;
	}
	if (typeof n != "string") return n === 0 ? n : +n;
	n = a(n);
	var i = c.test(n);
	return i || l.test(n) ? u(n.slice(2), i ? 2 : 8) : s.test(n) ? o : +n;
}
//#endregion
export { d as t };
