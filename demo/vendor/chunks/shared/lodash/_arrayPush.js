globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { c as e, s as t } from "./_baseAssignValue.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
var n = 9007199254740991;
function r(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
var i = "[object Arguments]";
function a(n) {
	return t(n) && e(n) == i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
var o = Object.prototype, s = o.hasOwnProperty, c = o.propertyIsEnumerable, l = a(function() {
	return arguments;
}()) ? a : function(e) {
	return t(e) && s.call(e, "callee") && !c.call(e, "callee");
};
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
function u(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
export { l as n, r, u as t };
