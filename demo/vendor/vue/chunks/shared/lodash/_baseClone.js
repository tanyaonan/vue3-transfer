globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { l as e, o as t, s as n, t as r, u as i } from "./_baseAssignValue.js";
import { _ as a, m as o } from "../element-plus/utils/objects.js";
import { a as s, c, f as l, g as u, h as d, i as ee, l as f, m as p, n as m, o as h, p as g, s as _, t as v, u as y } from "./_Uint8Array.js";
import { t as b } from "./_arrayPush.js";
import { o as x } from "../element-plus/utils/vue/install.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseCreate.js
var S = Object.create, te = function() {
	function e() {}
	return function(n) {
		if (!t(n)) return {};
		if (S) return S(n);
		e.prototype = n;
		var r = new e();
		return e.prototype = void 0, r;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyArray.js
function C(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
function w(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
function T(e, t, n, i) {
	var a = !n;
	n ||= {};
	for (var s = -1, c = t.length; ++s < c;) {
		var l = t[s], u = i ? i(n[l], e[l], l, n, e) : void 0;
		u === void 0 && (u = e[l]), a ? r(n, l, u) : o(n, l, u);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
function ne(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
var re = Object.prototype.hasOwnProperty;
function ie(e) {
	if (!t(e)) return ne(e);
	var n = d(e), r = [];
	for (var i in e) i == "constructor" && (n || !re.call(e, i)) || r.push(i);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
function E(e) {
	return u(e) ? y(e, !0) : ie(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
function ae(e, t) {
	return e && T(t, f(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
function D(e, t) {
	return e && T(t, E(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
var O = typeof exports == "object" && exports && !exports.nodeType && exports, k = O && typeof module == "object" && module && !module.nodeType && module, A = k && k.exports === O ? i.Buffer : void 0, j = A ? A.allocUnsafe : void 0;
function M(e, t) {
	if (t) return e.slice();
	var n = e.length, r = j ? j(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
function oe(e, t) {
	return T(e, h(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
var N = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) b(t, h(e)), e = x(e);
	return t;
} : _;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
function se(e, t) {
	return T(e, N(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
function P(e) {
	return s(e, E, N);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneArray.js
var ce = Object.prototype.hasOwnProperty;
function le(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && ce.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
function F(e) {
	var t = new e.constructor(e.byteLength);
	return new v(t).set(new v(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
function I(e, t) {
	var n = t ? F(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
var L = /\w*$/;
function R(e) {
	var t = new e.constructor(e.source, L.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
var z = e ? e.prototype : void 0, B = z ? z.valueOf : void 0;
function V(e) {
	return B ? Object(B.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
function H(e, t) {
	var n = t ? F(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
var U = "[object Boolean]", W = "[object Date]", ue = "[object Map]", de = "[object Number]", fe = "[object RegExp]", pe = "[object Set]", me = "[object String]", he = "[object Symbol]", ge = "[object ArrayBuffer]", _e = "[object DataView]", ve = "[object Float32Array]", ye = "[object Float64Array]", be = "[object Int8Array]", xe = "[object Int16Array]", Se = "[object Int32Array]", Ce = "[object Uint8Array]", we = "[object Uint8ClampedArray]", Te = "[object Uint16Array]", Ee = "[object Uint32Array]";
function De(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case ge: return F(e);
		case U:
		case W: return new r(+e);
		case _e: return I(e, n);
		case ve:
		case ye:
		case be:
		case xe:
		case Se:
		case Ce:
		case we:
		case Te:
		case Ee: return H(e, n);
		case ue: return new r();
		case de:
		case me: return new r(e);
		case fe: return R(e);
		case pe: return new r();
		case he: return V(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
function G(e) {
	return typeof e.constructor == "function" && !d(e) ? te(x(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
var Oe = "[object Map]";
function ke(e) {
	return n(e) && m(e) == Oe;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
var K = l && l.isMap, Ae = K ? g(K) : ke, je = "[object Set]";
function Me(e) {
	return n(e) && m(e) == je;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
var q = l && l.isSet, Ne = q ? g(q) : Me, Pe = 1, Fe = 2, Ie = 4, J = "[object Arguments]", Le = "[object Array]", Re = "[object Boolean]", ze = "[object Date]", Be = "[object Error]", Y = "[object Function]", Ve = "[object GeneratorFunction]", He = "[object Map]", Ue = "[object Number]", X = "[object Object]", We = "[object RegExp]", Ge = "[object Set]", Ke = "[object String]", qe = "[object Symbol]", Je = "[object WeakMap]", Ye = "[object ArrayBuffer]", Xe = "[object DataView]", Z = "[object Float32Array]", Ze = "[object Float64Array]", Qe = "[object Int8Array]", $e = "[object Int16Array]", et = "[object Int32Array]", tt = "[object Uint8Array]", nt = "[object Uint8ClampedArray]", rt = "[object Uint16Array]", it = "[object Uint32Array]", Q = {};
Q[J] = Q[Le] = Q[Ye] = Q[Xe] = Q[Re] = Q[ze] = Q[Z] = Q[Ze] = Q[Qe] = Q[$e] = Q[et] = Q[He] = Q[Ue] = Q[X] = Q[We] = Q[Ge] = Q[Ke] = Q[qe] = Q[tt] = Q[nt] = Q[rt] = Q[it] = !0, Q[Be] = Q[Y] = Q[Je] = !1;
function $(e, n, r, i, s, l) {
	var u, d = n & Pe, h = n & Fe, g = n & Ie;
	if (r && (u = s ? r(e, i, s, l) : r(e)), u !== void 0) return u;
	if (!t(e)) return e;
	var _ = a(e);
	if (_) {
		if (u = le(e), !d) return C(e, u);
	} else {
		var v = m(e), y = v == Y || v == Ve;
		if (p(e)) return M(e, d);
		if (v == X || v == J || y && !s) {
			if (u = h || y ? {} : G(e), !d) return h ? se(e, D(u, e)) : oe(e, ae(u, e));
		} else {
			if (!Q[v]) return s ? e : {};
			u = De(e, v, d);
		}
	}
	l ||= new c();
	var b = l.get(e);
	if (b) return b;
	l.set(e, u), Ne(e) ? e.forEach(function(t) {
		u.add($(t, n, r, t, e, l));
	}) : Ae(e) && e.forEach(function(t, i) {
		u.set(i, $(t, n, r, i, e, l));
	});
	var x = _ ? void 0 : (g ? h ? P : ee : h ? E : f)(e);
	return w(x || e, function(t, i) {
		x && (i = t, t = e[i]), o(u, i, $(t, n, r, i, e, l));
	}), u;
}
//#endregion
export { M as a, C as c, P as i, G as n, E as o, H as r, T as s, $ as t };
