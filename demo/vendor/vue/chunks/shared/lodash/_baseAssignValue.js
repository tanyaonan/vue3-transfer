globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_freeGlobal.js
var e = typeof global == "object" && global && global.Object === Object && global, t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")(), r = n.Symbol, i = Object.prototype, a = i.hasOwnProperty, o = i.toString, s = r ? r.toStringTag : void 0;
function c(e) {
	var t = a.call(e, s), n = e[s];
	try {
		e[s] = void 0;
		var r = !0;
	} catch {}
	var i = o.call(e);
	return r && (t ? e[s] = n : delete e[s]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
var l = Object.prototype.toString;
function u(e) {
	return l.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
var d = "[object Null]", f = "[object Undefined]", p = r ? r.toStringTag : void 0;
function m(e) {
	return e == null ? e === void 0 ? f : d : p && p in Object(e) ? c(e) : u(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
function h(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
function g(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
var _ = "[object AsyncFunction]", v = "[object Function]", y = "[object GeneratorFunction]", b = "[object Proxy]";
function x(e) {
	if (!g(e)) return !1;
	var t = m(e);
	return t == v || t == y || t == _ || t == b;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var S = n["__core-js_shared__"], C = function() {
	var e = /[^.]+$/.exec(S && S.keys && S.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function w(e) {
	return !!C && C in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
var T = Function.prototype.toString;
function E(e) {
	if (e != null) {
		try {
			return T.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
var D = /[\\^$.*+?()[\]{}|]/g, O = /^\[object .+?Constructor\]$/, k = Function.prototype, A = Object.prototype, j = k.toString, M = A.hasOwnProperty, N = RegExp("^" + j.call(M).replace(D, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function P(e) {
	return !g(e) || w(e) ? !1 : (x(e) ? N : O).test(E(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
function F(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
function I(e, t) {
	var n = F(e, t);
	return P(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var L = function() {
	try {
		var e = I(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
function R(e, t, n) {
	t == "__proto__" && L ? L(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
export { x as a, m as c, e as d, E as i, r as l, L as n, g as o, I as r, h as s, R as t, n as u };
