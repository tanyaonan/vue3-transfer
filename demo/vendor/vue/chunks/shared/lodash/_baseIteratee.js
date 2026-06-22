globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { o as e } from "./_baseAssignValue.js";
import { _ as t, a as n, o as r, p as i, s as a } from "../element-plus/utils/objects.js";
import { i as o } from "./_flatRest.js";
import { c as s, l as c } from "./_Uint8Array.js";
import { n as l } from "./isEqual.js";
import { r as u } from "../element-plus/hooks/use-aria.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMatch.js
var d = 1, f = 2;
function p(e, t, n, r) {
	var i = n.length, a = i, o = !r;
	if (e == null) return !a;
	for (e = Object(e); i--;) {
		var c = n[i];
		if (o && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
	}
	for (; ++i < a;) {
		c = n[i];
		var u = c[0], p = e[u], m = c[1];
		if (o && c[2]) {
			if (p === void 0 && !(u in e)) return !1;
		} else {
			var h = new s();
			if (r) var g = r(p, m, u, e, t, h);
			if (!(g === void 0 ? l(m, p, d | f, r, h) : g)) return !1;
		}
	}
	return !0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isStrictComparable.js
function m(t) {
	return t === t && !e(t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMatchData.js
function h(e) {
	for (var t = c(e), n = t.length; n--;) {
		var r = t[n], i = e[r];
		t[n] = [
			r,
			i,
			m(i)
		];
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_matchesStrictComparable.js
function g(e, t) {
	return function(n) {
		return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMatches.js
function _(e) {
	var t = h(e);
	return t.length == 1 && t[0][2] ? g(t[0][0], t[0][1]) : function(n) {
		return n === e || p(n, e, t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMatchesProperty.js
var v = 1, y = 2;
function b(e, t) {
	return i(e) && m(t) ? g(a(e), t) : function(r) {
		var i = n(r, e);
		return i === void 0 && i === t ? u(r, e) : l(t, i, v | y);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseProperty.js
function x(e) {
	return function(t) {
		return t?.[e];
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePropertyDeep.js
function S(e) {
	return function(t) {
		return r(t, e);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/property.js
function C(e) {
	return i(e) ? x(a(e)) : S(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIteratee.js
function w(e) {
	return typeof e == "function" ? e : e == null ? o : typeof e == "object" ? t(e) ? b(e[0], e[1]) : _(e) : C(e);
}
//#endregion
export { w as t };
