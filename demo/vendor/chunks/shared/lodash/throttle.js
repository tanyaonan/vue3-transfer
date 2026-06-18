globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { o as e } from "./_baseAssignValue.js";
import { t } from "./debounce.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/throttle.js
var n = "Expected a function";
function r(r, i, a) {
	var o = !0, s = !0;
	if (typeof r != "function") throw TypeError(n);
	return e(a) && (o = "leading" in a ? !!a.leading : o, s = "trailing" in a ? !!a.trailing : s), t(r, i, {
		leading: o,
		maxWait: i,
		trailing: s
	});
}
//#endregion
export { r as t };
