globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { a as e, c as t, d as n, i as r, r as i, s as a, u as o } from "./_baseAssignValue.js";
import { _ as s, d as c, f as l, g as ee, u } from "../element-plus/utils/objects.js";
import { n as d, r as f, t as te } from "./_arrayPush.js";
import { t as ne } from "./_overArg.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
var p = i(o, "WeakMap");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
function m(t) {
	return t != null && f(t.length) && !e(t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
var re = Object.prototype;
function h(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || re);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
function ie(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
function ae() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
var g = typeof exports == "object" && exports && !exports.nodeType && exports, _ = g && typeof module == "object" && module && !module.nodeType && module, v = _ && _.exports === g ? o.Buffer : void 0, y = (v ? v.isBuffer : void 0) || ae, b = "[object Arguments]", x = "[object Array]", S = "[object Boolean]", oe = "[object Date]", se = "[object Error]", ce = "[object Function]", le = "[object Map]", ue = "[object Number]", de = "[object Object]", fe = "[object RegExp]", pe = "[object Set]", me = "[object String]", he = "[object WeakMap]", ge = "[object ArrayBuffer]", _e = "[object DataView]", ve = "[object Float32Array]", ye = "[object Float64Array]", be = "[object Int8Array]", xe = "[object Int16Array]", C = "[object Int32Array]", w = "[object Uint8Array]", T = "[object Uint8ClampedArray]", E = "[object Uint16Array]", D = "[object Uint32Array]", O = {};
O[ve] = O[ye] = O[be] = O[xe] = O[C] = O[w] = O[T] = O[E] = O[D] = !0, O[b] = O[x] = O[ge] = O[S] = O[_e] = O[oe] = O[se] = O[ce] = O[le] = O[ue] = O[de] = O[fe] = O[pe] = O[me] = O[he] = !1;
function k(e) {
	return a(e) && f(e.length) && !!O[t(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
function A(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
var j = typeof exports == "object" && exports && !exports.nodeType && exports, M = j && typeof module == "object" && module && !module.nodeType && module, N = M && M.exports === j && n.process, P = function() {
	try {
		return M && M.require && M.require("util").types || N && N.binding && N.binding("util");
	} catch {}
}(), F = P && P.isTypedArray, I = F ? A(F) : k, Se = Object.prototype.hasOwnProperty;
function L(e, t) {
	var n = s(e), r = !n && d(e), i = !n && !r && y(e), a = !n && !r && !i && I(e), o = n || r || i || a, c = o ? ie(e.length, String) : [], l = c.length;
	for (var u in e) (t || Se.call(e, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || ee(u, l))) && c.push(u);
	return c;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var Ce = ne(Object.keys, Object), we = Object.prototype.hasOwnProperty;
function Te(e) {
	if (!h(e)) return Ce(e);
	var t = [];
	for (var n in Object(e)) we.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
function R(e) {
	return m(e) ? L(e) : Te(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
function Ee() {
	this.__data__ = new l(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
function De(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
function Oe(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
function ke(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
var Ae = 200;
function je(e, t) {
	var n = this.__data__;
	if (n instanceof l) {
		var r = n.__data__;
		if (!c || r.length < Ae - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new u(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
function z(e) {
	var t = this.__data__ = new l(e);
	this.size = t.size;
}
z.prototype.clear = Ee, z.prototype.delete = De, z.prototype.get = Oe, z.prototype.has = ke, z.prototype.set = je;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
function Me(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
function B() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
var Ne = Object.prototype.propertyIsEnumerable, V = Object.getOwnPropertySymbols, H = V ? function(e) {
	return e == null ? [] : (e = Object(e), Me(V(e), function(t) {
		return Ne.call(e, t);
	}));
} : B;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
function U(e, t, n) {
	var r = t(e);
	return s(e) ? r : te(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
function Pe(e) {
	return U(e, R, H);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var W = i(o, "DataView"), G = i(o, "Promise"), K = i(o, "Set"), q = "[object Map]", Fe = "[object Object]", J = "[object Promise]", Y = "[object Set]", X = "[object WeakMap]", Z = "[object DataView]", Ie = r(W), Le = r(c), Re = r(G), Q = r(K), ze = r(p), $ = t;
(W && $(new W(/* @__PURE__ */ new ArrayBuffer(1))) != Z || c && $(new c()) != q || G && $(G.resolve()) != J || K && $(new K()) != Y || p && $(new p()) != X) && ($ = function(e) {
	var n = t(e), i = n == Fe ? e.constructor : void 0, a = i ? r(i) : "";
	if (a) switch (a) {
		case Ie: return Z;
		case Le: return q;
		case Re: return J;
		case Q: return Y;
		case ze: return X;
	}
	return n;
});
var Be = $, Ve = o.Uint8Array;
//#endregion
export { U as a, z as c, I as d, P as f, m as g, h, Pe as i, R as l, y as m, Be as n, H as o, A as p, K as r, B as s, Ve as t, L as u };
