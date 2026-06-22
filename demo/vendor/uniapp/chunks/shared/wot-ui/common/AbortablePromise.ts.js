globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/AbortablePromise.ts
var e = class {
	promise;
	_reject = null;
	constructor(e) {
		this.promise = new Promise((t, n) => {
			e(t, n), this._reject = n;
		});
	}
	abort(e) {
		this._reject && this._reject(e);
	}
	then(e, t) {
		return this.promise.then(e, t);
	}
	catch(e) {
		return this.promise.catch(e);
	}
};
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/util.ts
function t() {
	return n() + n() + n() + n() + n() + n() + n() + n();
}
function n() {
	return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
}
function r(e) {
	return Number.isNaN(Number(e)) ? `${e}` : `${e}px`;
}
function i(e) {
	return Object.prototype.toString.call(e) === "[object Object]" || typeof e == "object";
}
function a(e) {
	let t = Object.prototype.toString.call(e).match(/\[object (\w+)\]/);
	return t && t.length ? t[1].toLowerCase() : "";
}
var o = (e) => e != null, s = (e, t = "value") => {
	if (e < 0) throw Error(`${t} shouldn't be less than zero`);
}, c = (e, t, n) => Math.min(Math.max(e, t), n), l = (e, t) => {
	if (e === t) return !0;
	if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
	for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
	return !0;
}, u = (e, t = 2) => {
	let n = e.toString();
	for (; n.length < t;) n = "0" + n;
	return n;
}, d = { id: 1e3 };
function f(e, t, n, r) {
	return new Promise((i, a) => {
		let o = uni.createSelectorQuery?.();
		if (!o) {
			a(/* @__PURE__ */ Error("createSelectorQuery is not available"));
			return;
		}
		let s = n && g(o.in) ? o.in(n) : o, c = t ? "selectAll" : "select", l = (e) => {
			t && h(e) && e.length > 0 || !t && e ? i(e) : a(/* @__PURE__ */ Error("No nodes found"));
		};
		r ? s[c](e).fields({
			size: !0,
			node: !0
		}, l).exec() : s[c](e).boundingClientRect(l).exec();
	});
}
function p(e) {
	return e.replace(/[A-Z]/g, function(e) {
		return "-" + e;
	}).toLowerCase();
}
function m(e) {
	return e.replace(/-(\w)/g, (e, t) => t.toUpperCase());
}
function h(e) {
	return typeof Array.isArray == "function" ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object Array]";
}
function g(e) {
	return a(e) === "function" || a(e) === "asyncfunction";
}
function _(e) {
	return a(e) === "string";
}
function v(e) {
	return a(e) === "number";
}
function y(e) {
	return i(e) && o(e) ? g(e.then) && g(e.catch) : !1;
}
function b(e) {
	return typeof e == "boolean";
}
function x(e) {
	return e === void 0;
}
function S(e) {
	if (typeof e != "number") throw Error("输入必须为数字");
	return e % 2 == 1;
}
function C(e) {
	return /^data:image\/(png|jpg|jpeg|gif|bmp);base64,/.test(e);
}
function w(e) {
	if (h(e)) {
		let t = e.filter(function(e) {
			return e != null && e !== "";
		}).map(function(e) {
			return w(e);
		}).join(";");
		return t ? t.endsWith(";") ? t : t + ";" : "";
	}
	if (_(e)) return e ? e.endsWith(";") ? e : e + ";" : "";
	if (i(e)) {
		let t = Object.keys(e).filter(function(t) {
			return e[t] != null && e[t] !== "";
		}).map(function(t) {
			return [p(t), e[t]].join(":");
		}).join(";");
		return t ? t.endsWith(";") ? t : t + ";" : "";
	}
	return "";
}
var T = (t = 1e3 / 30) => new e((e) => {
	let n = setTimeout(() => {
		clearTimeout(n), e(!0);
	}, t);
});
function E(e, t = /* @__PURE__ */ new Map()) {
	if (typeof e != "object" || !e) return e;
	if (N(e)) return new Date(e.getTime());
	if (e instanceof RegExp) return new RegExp(e.source, e.flags);
	if (e instanceof Error) {
		let t = Error(e.message);
		return t.stack = e.stack, t;
	}
	if (t.has(e)) return t.get(e);
	let n = Array.isArray(e) ? [] : {};
	t.set(e, n);
	for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = E(e[r], t));
	return n;
}
function D(e, t) {
	if (e = E(e), typeof e != "object" || typeof t != "object") throw Error("Both target and source must be objects.");
	for (let n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	return e;
}
function O(e, t) {
	return Object.keys(t).forEach((n) => {
		let r = e[n], a = t[n];
		i(r) && i(a) ? O(r, a) : e[n] = a;
	}), e;
}
function k(e, t) {
	let n = Object.entries(t).map(([e, t]) => `${e}=${encodeURIComponent(t)}`).join("&");
	return `${e}${e.includes("?") ? "&" : "?"}${n}`;
}
function A(e, t, n = {}) {
	let r = null, i, a, s, c = o(n.leading) ? n.leading : !1, l = o(n.trailing) ? n.trailing : !0;
	function u() {
		i !== void 0 && (s = e.apply(a, i), i = void 0);
	}
	function d() {
		r = setTimeout(() => {
			r = null, l && u();
		}, t);
	}
	function f() {
		r !== null && (clearTimeout(r), r = null);
	}
	function p(...e) {
		return i = e, a = this, r === null ? (c && u(), d()) : l && (f(), d()), s;
	}
	return p;
}
function j(e, t) {
	let n = null, r = 0;
	function i(...i) {
		let a = Date.now(), o = t - (a - r);
		o <= 0 ? (n &&= (clearTimeout(n), null), r = a, e.apply(this, i)) : n ||= setTimeout(() => {
			r = Date.now(), n = null, e.apply(this, i);
		}, o);
	}
	return i;
}
var M = (e, t) => {
	let n = t.split(".");
	try {
		return n.reduce((e, t) => e?.[t], e);
	} catch {
		return;
	}
}, N = (e) => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime());
function P(e) {
	return /\.(ogm|webm|ogv|asx|m4v|mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|video)(?=$|[?#])/i.test(e);
}
function F(e) {
	return /\.(xbm|tif|pjp|apng|svgz|jpeg|jpg|heif|ico|tiff|heic|pjpeg|avif|gif|png|svg|webp|jfif|bmp|dpg|image)(?=$|[?#])/i.test(e);
}
var I = (() => {
	let e = !1;
	return e = !0, e;
})();
function L(e, t) {
	let n = E(e);
	return Object.keys(n).forEach((e) => t(n[e], e) && delete n[e]), n;
}
function R(e = 0, t = 0, n = 0, r = 0) {
	return n * (-(2 ** (-10 * e / r)) + 1) * 1024 / 1023 + t;
}
function z(e, t) {
	return e.reduce((e, n) => Math.abs(n - t) < Math.abs(e - t) ? n : e);
}
function B() {
	let e;
	try {
		let t = uni.getDeviceInfo(), n = uni.getWindowInfo(), r = uni.getAppBaseInfo();
		e = {
			...t,
			...n,
			...r
		};
	} catch (t) {
		console.warn("获取系统信息失败，降级使用uni.getSystemInfoSync:", t), e = uni.getSystemInfoSync();
	}
	return e = uni.getSystemInfoSync(), e;
}
//#endregion
export { P as A, F as C, y as D, S as E, c as F, j as I, t as L, L as M, u as N, _ as O, T as P, e as R, I as S, i as T, C as _, z as a, l as b, O as c, R as d, M as f, h as g, a as h, s as i, w as j, x as k, E as l, B as m, k as n, d as o, f as p, m as r, A as s, r as t, D as u, b as v, v as w, g as x, o as y };
