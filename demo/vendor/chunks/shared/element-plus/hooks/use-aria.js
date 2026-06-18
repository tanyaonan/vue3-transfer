globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { _ as e, c as t, g as n, i as r, o as i, s as a } from "../utils/objects.js";
import { t as o } from "../../lodash/_flatRest.js";
import { n as s, r as c } from "../../lodash/_arrayPush.js";
import { n as l } from "../utils/vue/props/runtime.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseHasIn.js
function u(e, t) {
	return e != null && t in Object(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hasPath.js
function d(r, i, o) {
	i = t(i, r);
	for (var l = -1, u = i.length, d = !1; ++l < u;) {
		var f = a(i[l]);
		if (!(d = r != null && o(r, f))) break;
		r = r[f];
	}
	return d || ++l != u ? d : (u = r == null ? 0 : r.length, !!u && c(u) && n(f, u) && (e(r) || s(r)));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/hasIn.js
function f(e, t) {
	return e != null && d(e, t, u);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePickBy.js
function p(e, n, a) {
	for (var o = -1, s = n.length, c = {}; ++o < s;) {
		var l = n[o], u = i(e, l);
		a(u, l) && r(c, t(l, e), u);
	}
	return c;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePick.js
function m(e, t) {
	return p(e, t, function(t, n) {
		return f(e, n);
	});
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/pick.js
var h = o(function(e, t) {
	return e == null ? {} : m(e, t);
}), g = l({
	ariaLabel: String,
	ariaOrientation: {
		type: String,
		values: [
			"horizontal",
			"vertical",
			"undefined"
		]
	},
	ariaControls: String
}), _ = (e) => h(g, e);
//#endregion
export { h as n, f as r, _ as t };
