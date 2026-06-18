globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, C as n, Dt as r, Ft as i, G as a, H as o, I as s, J as c, Mt as l, N as u, Pt as d, T as f, Tt as p, U as ee, V as te, Z as m, _ as h, b as ne, bt as g, ct as re, gt as ie, jt as _, p as v, r as ae, tt as y, ut as b, v as oe, w as x, x as se, y as ce, yt as S, z as C } from "./vue.runtime.js";
import { n as w } from "./shared/element-plus/utils/objects.js";
import { i as le, t as T } from "./shared/element-plus/utils/vue/install.js";
import { t as ue } from "./shared/lodash/castArray.js";
import { t as E } from "./shared/lodash/cloneDeep.js";
import { t as de } from "./shared/element-plus/utils/types.js";
import { n as D, r as O } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as k, t as A } from "./shared/element-plus/utils/error.js";
import { b as fe, d as pe } from "./shared/vueuse.js";
import { n as me } from "./shared/element-plus/utils/dom/style.js";
import { r as he } from "./shared/element-plus/hooks/use-namespace.js";
import { t as j } from "./shared/element-plus/constants/size.js";
import { t as ge } from "./shared/element-plus/hooks/use-id.js";
import { i as _e, n as ve, r as ye, t as M } from "./el-form/hooks/use-form-common-props.js";
import { n as N, t as P } from "./el-form/constants.js";
import { n as F, t as be } from "./el-form/hooks/use-form-item.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/form/src/form.mjs
var xe = D({
	size: {
		type: String,
		values: j
	},
	disabled: Boolean
}), Se = D({
	...xe,
	model: Object,
	rules: { type: O(Object) },
	labelPosition: {
		type: String,
		values: [
			"left",
			"right",
			"top"
		],
		default: "right"
	},
	requireAsteriskPosition: {
		type: String,
		values: ["left", "right"],
		default: "left"
	},
	labelWidth: {
		type: [String, Number],
		default: ""
	},
	labelSuffix: {
		type: String,
		default: ""
	},
	inline: Boolean,
	inlineMessage: Boolean,
	statusIcon: Boolean,
	showMessage: {
		type: Boolean,
		default: !0
	},
	validateOnRuleChange: {
		type: Boolean,
		default: !0
	},
	hideRequiredAsterisk: Boolean,
	scrollToError: Boolean,
	scrollIntoViewOptions: {
		type: O([Object, Boolean]),
		default: !0
	}
}), Ce = { validate: (e, t, n) => (p(e) || _(e)) && de(t) && _(n) }, we = "ElForm";
function Te() {
	let e = b([]), t = h(() => {
		if (!e.value.length) return "0";
		let t = Math.max(...e.value);
		return t ? `${t}px` : "";
	});
	function n(n) {
		let r = e.value.indexOf(n);
		return r === -1 && t.value === "0" && A(we, `unexpected width ${n}`), r;
	}
	function r(t, r) {
		if (t && r) {
			let i = n(r);
			e.value.splice(i, 1, t);
		} else t && e.value.push(t);
	}
	function i(t) {
		let r = n(t);
		r > -1 && e.value.splice(r, 1);
	}
	return {
		autoLabelWidth: t,
		registerLabelWidth: r,
		deregisterLabelWidth: i
	};
}
var I = (e, t) => {
	let n = ue(t).map((e) => p(e) ? e.join(".") : e);
	return n.length > 0 ? e.filter((e) => e.propString && n.includes(e.propString)) : e;
}, L = "ElForm", R = /* @__PURE__ */ f({
	name: L,
	__name: "form",
	props: Se,
	emits: Ce,
	setup(t, { expose: n, emit: i }) {
		let s = t, c = i, u = b(), d = re([]), f = /* @__PURE__ */ new Map(), te = ye(), m = he("form"), ne = h(() => {
			let { labelPosition: e, inline: t } = s;
			return [
				m.b(),
				m.m(te.value || "default"),
				{
					[m.m(`label-${e}`)]: e,
					[m.m("inline")]: t
				}
			];
		}), _ = (e) => I(d, [e])[0], v = (e) => {
			d.includes(e) || d.push(e), e.propString && (f.has(e.propString) ? e.setInitialValue(f.get(e.propString)) : f.set(e.propString, E(e.fieldValue)));
		}, ae = (e, t) => {
			if (t) {
				f.delete(t);
				return;
			}
			let n = d.indexOf(e);
			n > -1 && (d.splice(n, 1), e.propString && f.set(e.propString, E(e.getInitialValue())));
		}, y = (e) => {
			if (!s.model) {
				A(L, "model is required for setInitialValues to work.");
				return;
			}
			if (!e) {
				A(L, "initModel is required for setInitialValues to work.");
				return;
			}
			for (let t of f.keys()) f.set(t, E(w(e, t).value));
			d.forEach((t) => {
				t.prop && t.setInitialValue(w(e, t.prop).value);
			});
		}, oe = (e = []) => {
			if (!s.model) {
				A(L, "model is required for resetFields to work.");
				return;
			}
			I(d, e).forEach((e) => e.resetField());
			let t = new Set(d.map((e) => e.propString).filter(Boolean)), n = e.length > 0 ? ue(e).map((e) => p(e) ? e.join(".") : e) : [...f.keys()];
			for (let e of n) !t.has(e) && f.has(e) && (w(s.model, e).value = E(f.get(e)));
		}, x = (e = []) => {
			I(d, e).forEach((e) => e.clearValidate());
		}, ce = h(() => {
			let e = !!s.model;
			return e || A(L, "model is required for validate to work."), e;
		}), S = (e) => {
			if (d.length === 0) return [];
			let t = I(d, e);
			return t.length ? t : (A(L, "please pass correct props!"), []);
		}, C = async (e) => T(void 0, e), le = async (e = []) => {
			if (!ce.value) return !1;
			let t = S(e);
			if (t.length === 0) return !0;
			let n = {};
			for (let e of t) try {
				await e.validate(""), e.validateState === "error" && !e.error && e.resetField();
			} catch (e) {
				n = {
					...n,
					...e
				};
			}
			return Object.keys(n).length === 0 ? !0 : Promise.reject(n);
		}, T = async (e = [], t) => {
			let n = !1, i = !r(t);
			try {
				return n = await le(e), n === !0 && await t?.(n), n;
			} catch (e) {
				if (e instanceof Error) throw e;
				let r = e;
				return s.scrollToError && u.value && u.value.querySelector(`.${m.b()}-item.is-error`)?.scrollIntoView(s.scrollIntoViewOptions), !n && await t?.(!1, r), i && Promise.reject(r);
			}
		}, de = (e) => {
			let t = _(e);
			t && t.$el?.scrollIntoView(s.scrollIntoViewOptions);
		};
		return e(() => s.rules, () => {
			s.validateOnRuleChange && C().catch(g);
		}, {
			deep: !0,
			flush: "post"
		}), ee(P, re({
			...ie(s),
			emit: c,
			resetFields: oe,
			clearValidate: x,
			validateField: T,
			getField: _,
			addField: v,
			removeField: ae,
			setInitialValues: y,
			...Te()
		})), n({
			validate: C,
			validateField: T,
			resetFields: oe,
			clearValidate: x,
			scrollToField: de,
			getField: _,
			fields: d,
			setInitialValues: y
		}), (e, t) => (o(), se("form", {
			ref_key: "formRef",
			ref: u,
			class: l(ne.value)
		}, [a(e.$slots, "default")], 2));
	}
}), Ee = [
	"",
	"error",
	"validating",
	"success"
], z = D({
	label: String,
	labelWidth: { type: [String, Number] },
	labelPosition: {
		type: String,
		values: [
			"left",
			"right",
			"top",
			""
		],
		default: ""
	},
	prop: { type: O([String, Array]) },
	required: {
		type: Boolean,
		default: void 0
	},
	rules: { type: O([Object, Array]) },
	error: String,
	validateStatus: {
		type: String,
		values: Ee
	},
	for: String,
	inlineMessage: {
		type: Boolean,
		default: void 0
	},
	showMessage: {
		type: Boolean,
		default: !0
	},
	size: {
		type: String,
		values: j
	}
}), B = "ElLabelWrap", De = /* @__PURE__ */ f({
	name: B,
	props: {
		isAutoWidth: Boolean,
		updateAll: Boolean
	},
	setup(n, { slots: r }) {
		let i = t(P, void 0), a = t(N);
		a || k(B, "usage: <el-form-item><label-wrap /></el-form-item>");
		let o = he("form"), c = b(), l = b(0), d = () => {
			if (c.value?.firstElementChild) {
				let e = window.getComputedStyle(c.value.firstElementChild).width;
				return Math.ceil(Number.parseFloat(e));
			} else return 0;
		}, f = (e = "update") => {
			u(() => {
				r.default && n.isAutoWidth && (e === "update" ? l.value = d() : e === "remove" && i?.deregisterLabelWidth(l.value));
			});
		}, p = () => f("update");
		return C(() => {
			p();
		}), s(() => {
			f("remove");
		}), te(() => p()), e(l, (e, t) => {
			n.updateAll && i?.registerLabelWidth(e, t);
		}), pe(h(() => c.value?.firstElementChild ?? null), p), () => {
			if (!r) return null;
			let { isAutoWidth: e } = n;
			if (e) {
				let e = i?.autoLabelWidth, t = a?.hasLabel, n = {};
				if (t && e && e !== "auto") {
					let t = Math.max(0, Number.parseInt(e, 10) - l.value), r = (a.labelPosition || i.labelPosition) === "left" ? "marginRight" : "marginLeft";
					t && (n[r] = `${t}px`);
				}
				return x("div", {
					ref: c,
					class: [o.be("item", "label-wrap")],
					style: n
				}, [r.default?.()]);
			} else return x(v, { ref: c }, [r.default?.()]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js
function V() {
	return V = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, V.apply(this, arguments);
}
function Oe(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, H(e, t);
}
function ke(e) {
	return ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, ke(e);
}
function H(e, t) {
	return H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, H(e, t);
}
function Ae() {
	if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
	} catch {
		return !1;
	}
}
function U(e, t, n) {
	return U = Ae() ? Reflect.construct.bind() : function(e, t, n) {
		var r = [null];
		r.push.apply(r, t);
		var i = new (Function.bind.apply(e, r))();
		return n && H(i, n.prototype), i;
	}, U.apply(null, arguments);
}
function je(e) {
	return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Me(e) {
	var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
	return Me = function(e) {
		if (e === null || !je(e)) return e;
		if (typeof e != "function") throw TypeError("Super expression must either be null or a function");
		if (t !== void 0) {
			if (t.has(e)) return t.get(e);
			t.set(e, n);
		}
		function n() {
			return U(e, arguments, ke(this).constructor);
		}
		return n.prototype = Object.create(e.prototype, { constructor: {
			value: n,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), H(n, e);
	}, Me(e);
}
var Ne = /%[sdj%]/g, Pe = function() {};
typeof process < "u" && process.env;
function W(e) {
	if (!e || !e.length) return null;
	var t = {};
	return e.forEach(function(e) {
		var n = e.field;
		t[n] = t[n] || [], t[n].push(e);
	}), t;
}
function G(e) {
	var t = [...arguments].slice(1), n = 0, r = t.length;
	return typeof e == "function" ? e.apply(null, t) : typeof e == "string" ? e.replace(Ne, function(e) {
		if (e === "%%") return "%";
		if (n >= r) return e;
		switch (e) {
			case "%s": return String(t[n++]);
			case "%d": return Number(t[n++]);
			case "%j":
				try {
					return JSON.stringify(t[n++]);
				} catch {
					return "[Circular]";
				}
				break;
			default: return e;
		}
	}) : e;
}
function Fe(e) {
	return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function K(e, t) {
	return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Fe(t) && typeof e == "string" && !e);
}
function q(e, t, n) {
	var r = [], i = 0, a = e.length;
	function o(e) {
		r.push.apply(r, e || []), i++, i === a && n(r);
	}
	e.forEach(function(e) {
		t(e, o);
	});
}
function Ie(e, t, n) {
	var r = 0, i = e.length;
	function a(o) {
		if (o && o.length) {
			n(o);
			return;
		}
		var s = r;
		r += 1, s < i ? t(e[s], a) : n([]);
	}
	a([]);
}
function J(e) {
	var t = [];
	return Object.keys(e).forEach(function(n) {
		t.push.apply(t, e[n] || []);
	}), t;
}
var Le = /*#__PURE__*/ function(e) {
	Oe(t, e);
	function t(t, n) {
		var r = e.call(this, "Async Validation Error") || this;
		return r.errors = t, r.fields = n, r;
	}
	return t;
}(/*#__PURE__*/ Me(Error));
function Re(e, t, n, r, i) {
	if (t.first) {
		var a = new Promise(function(t, a) {
			Ie(J(e), n, function(e) {
				return r(e), e.length ? a(new Le(e, W(e))) : t(i);
			});
		});
		return a.catch(function(e) {
			return e;
		}), a;
	}
	var o = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], d = new Promise(function(t, a) {
		var d = function(e) {
			if (u.push.apply(u, e), l++, l === c) return r(u), u.length ? a(new Le(u, W(u))) : t(i);
		};
		s.length || (r(u), t(i)), s.forEach(function(t) {
			var r = e[t];
			o.indexOf(t) === -1 ? q(r, n, d) : Ie(r, n, d);
		});
	});
	return d.catch(function(e) {
		return e;
	}), d;
}
function ze(e) {
	return !!(e && e.message !== void 0);
}
function Be(e, t) {
	for (var n = e, r = 0; r < t.length; r++) {
		if (n == null) return n;
		n = n[t[r]];
	}
	return n;
}
function Ve(e, t) {
	return function(n) {
		var r = e.fullFields ? Be(t, e.fullFields) : t[n.field || e.fullField];
		return ze(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
			message: typeof n == "function" ? n() : n,
			fieldValue: r,
			field: n.field || e.fullField
		};
	};
}
function He(e, t) {
	if (t) {
		for (var n in t) if (t.hasOwnProperty(n)) {
			var r = t[n];
			typeof r == "object" && typeof e[n] == "object" ? e[n] = V({}, e[n], r) : e[n] = r;
		}
	}
	return e;
}
var Ue = function(e, t, n, r, i, a) {
	e.required && (!n.hasOwnProperty(e.field) || K(t, a || e.type)) && r.push(G(i.messages.required, e.fullField));
}, We = function(e, t, n, r, i) {
	(/^\s+$/.test(t) || t === "") && r.push(G(i.messages.whitespace, e.fullField));
}, Ge, Ke = (function() {
	if (Ge) return Ge;
	var e = "[a-fA-F\\d:]", t = function(t) {
		return t && t.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
	}, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", i = ("\n(?:\n(?:" + r + ":){7}(?:" + r + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + r + ":){6}(?:" + n + "|:" + r + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + r + ":){5}(?::" + n + "|(?::" + r + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + r + "){0,5}:" + n + "|(?::" + r + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), o = RegExp("^" + n + "$"), s = RegExp("^" + i + "$"), c = function(e) {
		return e && e.exact ? a : RegExp("(?:" + t(e) + n + t(e) + ")|(?:" + t(e) + i + t(e) + ")", "g");
	};
	c.v4 = function(e) {
		return e && e.exact ? o : RegExp("" + t(e) + n + t(e), "g");
	}, c.v6 = function(e) {
		return e && e.exact ? s : RegExp("" + t(e) + i + t(e), "g");
	};
	var l = "(?:(?:[a-z]+:)?//)", u = "(?:\\S+(?::\\S*)?@)?", d = c.v4().source, f = c.v6().source, p = "(?:" + l + "|www\\.)" + u + "(?:localhost|" + d + "|" + f + "|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"]*)?";
	return Ge = RegExp("(?:^" + p + "$)", "i"), Ge;
}), qe = {
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
	hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Y = {
	integer: function(e) {
		return Y.number(e) && parseInt(e, 10) === e;
	},
	float: function(e) {
		return Y.number(e) && !Y.integer(e);
	},
	array: function(e) {
		return Array.isArray(e);
	},
	regexp: function(e) {
		if (e instanceof RegExp) return !0;
		try {
			return !!new RegExp(e);
		} catch {
			return !1;
		}
	},
	date: function(e) {
		return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
	},
	number: function(e) {
		return isNaN(e) ? !1 : typeof e == "number";
	},
	object: function(e) {
		return typeof e == "object" && !Y.array(e);
	},
	method: function(e) {
		return typeof e == "function";
	},
	email: function(e) {
		return typeof e == "string" && e.length <= 320 && !!e.match(qe.email);
	},
	url: function(e) {
		return typeof e == "string" && e.length <= 2048 && !!e.match(Ke());
	},
	hex: function(e) {
		return typeof e == "string" && !!e.match(qe.hex);
	}
}, Je = function(e, t, n, r, i) {
	if (e.required && t === void 0) {
		Ue(e, t, n, r, i);
		return;
	}
	var a = [
		"integer",
		"float",
		"array",
		"regexp",
		"object",
		"method",
		"email",
		"number",
		"date",
		"url",
		"hex"
	], o = e.type;
	a.indexOf(o) > -1 ? Y[o](t) || r.push(G(i.messages.types[o], e.fullField, e.type)) : o && typeof t !== e.type && r.push(G(i.messages.types[o], e.fullField, e.type));
}, Ye = function(e, t, n, r, i) {
	var a = typeof e.len == "number", o = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = t, u = null, d = typeof t == "number", f = typeof t == "string", p = Array.isArray(t);
	if (d ? u = "number" : f ? u = "string" : p && (u = "array"), !u) return !1;
	p && (l = t.length), f && (l = t.replace(c, "_").length), a ? l !== e.len && r.push(G(i.messages[u].len, e.fullField, e.len)) : o && !s && l < e.min ? r.push(G(i.messages[u].min, e.fullField, e.min)) : s && !o && l > e.max ? r.push(G(i.messages[u].max, e.fullField, e.max)) : o && s && (l < e.min || l > e.max) && r.push(G(i.messages[u].range, e.fullField, e.min, e.max));
}, X = "enum", Z = {
	required: Ue,
	whitespace: We,
	type: Je,
	range: Ye,
	enum: function(e, t, n, r, i) {
		e[X] = Array.isArray(e[X]) ? e[X] : [], e[X].indexOf(t) === -1 && r.push(G(i.messages[X], e.fullField, e[X].join(", ")));
	},
	pattern: function(e, t, n, r, i) {
		e.pattern && (e.pattern instanceof RegExp ? (e.pattern.lastIndex = 0, e.pattern.test(t) || r.push(G(i.messages.pattern.mismatch, e.fullField, t, e.pattern))) : typeof e.pattern == "string" && (new RegExp(e.pattern).test(t) || r.push(G(i.messages.pattern.mismatch, e.fullField, t, e.pattern))));
	}
}, Xe = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t, "string") && !e.required) return n();
		Z.required(e, t, r, a, i, "string"), K(t, "string") || (Z.type(e, t, r, a, i), Z.range(e, t, r, a, i), Z.pattern(e, t, r, a, i), e.whitespace === !0 && Z.whitespace(e, t, r, a, i));
	}
	n(a);
}, Ze = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t) && !e.required) return n();
		Z.required(e, t, r, a, i), t !== void 0 && Z.type(e, t, r, a, i);
	}
	n(a);
}, Qe = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (t === "" && (t = void 0), K(t) && !e.required) return n();
		Z.required(e, t, r, a, i), t !== void 0 && (Z.type(e, t, r, a, i), Z.range(e, t, r, a, i));
	}
	n(a);
}, $e = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t) && !e.required) return n();
		Z.required(e, t, r, a, i), t !== void 0 && Z.type(e, t, r, a, i);
	}
	n(a);
}, et = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t) && !e.required) return n();
		Z.required(e, t, r, a, i), K(t) || Z.type(e, t, r, a, i);
	}
	n(a);
}, tt = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t) && !e.required) return n();
		Z.required(e, t, r, a, i), t !== void 0 && (Z.type(e, t, r, a, i), Z.range(e, t, r, a, i));
	}
	n(a);
}, nt = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t) && !e.required) return n();
		Z.required(e, t, r, a, i), t !== void 0 && (Z.type(e, t, r, a, i), Z.range(e, t, r, a, i));
	}
	n(a);
}, rt = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (t == null && !e.required) return n();
		Z.required(e, t, r, a, i, "array"), t != null && (Z.type(e, t, r, a, i), Z.range(e, t, r, a, i));
	}
	n(a);
}, it = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t) && !e.required) return n();
		Z.required(e, t, r, a, i), t !== void 0 && Z.type(e, t, r, a, i);
	}
	n(a);
}, at = "enum", ot = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t) && !e.required) return n();
		Z.required(e, t, r, a, i), t !== void 0 && Z[at](e, t, r, a, i);
	}
	n(a);
}, st = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t, "string") && !e.required) return n();
		Z.required(e, t, r, a, i), K(t, "string") || Z.pattern(e, t, r, a, i);
	}
	n(a);
}, ct = function(e, t, n, r, i) {
	var a = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t, "date") && !e.required) return n();
		if (Z.required(e, t, r, a, i), !K(t, "date")) {
			var o = t instanceof Date ? t : new Date(t);
			Z.type(e, o, r, a, i), o && Z.range(e, o.getTime(), r, a, i);
		}
	}
	n(a);
}, lt = function(e, t, n, r, i) {
	var a = [], o = Array.isArray(t) ? "array" : typeof t;
	Z.required(e, t, r, a, i, o), n(a);
}, ut = function(e, t, n, r, i) {
	var a = e.type, o = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (K(t, a) && !e.required) return n();
		Z.required(e, t, r, o, i, a), K(t, a) || Z.type(e, t, r, o, i);
	}
	n(o);
}, Q = {
	string: Xe,
	method: Ze,
	number: Qe,
	boolean: $e,
	regexp: et,
	integer: tt,
	float: nt,
	array: rt,
	object: it,
	enum: ot,
	pattern: st,
	date: ct,
	url: ut,
	hex: ut,
	email: ut,
	required: lt,
	any: function(e, t, n, r, i) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (K(t) && !e.required) return n();
			Z.required(e, t, r, a, i);
		}
		n(a);
	}
};
function dt() {
	return {
		default: "Validation error on field %s",
		required: "%s is required",
		enum: "%s must be one of %s",
		whitespace: "%s cannot be empty",
		date: {
			format: "%s date %s is invalid for format %s",
			parse: "%s date could not be parsed, %s is invalid ",
			invalid: "%s date %s is invalid"
		},
		types: {
			string: "%s is not a %s",
			method: "%s is not a %s (function)",
			array: "%s is not an %s",
			object: "%s is not an %s",
			number: "%s is not a %s",
			date: "%s is not a %s",
			boolean: "%s is not a %s",
			integer: "%s is not an %s",
			float: "%s is not a %s",
			regexp: "%s is not a valid %s",
			email: "%s is not a valid %s",
			url: "%s is not a valid %s",
			hex: "%s is not a valid %s"
		},
		string: {
			len: "%s must be exactly %s characters",
			min: "%s must be at least %s characters",
			max: "%s cannot be longer than %s characters",
			range: "%s must be between %s and %s characters"
		},
		number: {
			len: "%s must equal %s",
			min: "%s cannot be less than %s",
			max: "%s cannot be greater than %s",
			range: "%s must be between %s and %s"
		},
		array: {
			len: "%s must be exactly %s in length",
			min: "%s cannot be less than %s in length",
			max: "%s cannot be greater than %s in length",
			range: "%s must be between %s and %s in length"
		},
		pattern: { mismatch: "%s value %s does not match pattern %s" },
		clone: function() {
			var e = JSON.parse(JSON.stringify(this));
			return e.clone = this.clone, e;
		}
	};
}
var ft = dt(), $ = /*#__PURE__*/ function() {
	function e(e) {
		this.rules = null, this._messages = ft, this.define(e);
	}
	var t = e.prototype;
	return t.define = function(e) {
		var t = this;
		if (!e) throw Error("Cannot configure a schema with no rules");
		if (typeof e != "object" || Array.isArray(e)) throw Error("Rules must be an object");
		this.rules = {}, Object.keys(e).forEach(function(n) {
			var r = e[n];
			t.rules[n] = Array.isArray(r) ? r : [r];
		});
	}, t.messages = function(e) {
		return e && (this._messages = He(dt(), e)), this._messages;
	}, t.validate = function(t, n, r) {
		var i = this;
		n === void 0 && (n = {}), r === void 0 && (r = function() {});
		var a = t, o = n, s = r;
		if (typeof o == "function" && (s = o, o = {}), !this.rules || Object.keys(this.rules).length === 0) return s && s(null, a), Promise.resolve(a);
		function c(e) {
			var t = [], n = {};
			function r(e) {
				if (Array.isArray(e)) {
					var n;
					t = (n = t).concat.apply(n, e);
				} else t.push(e);
			}
			for (var i = 0; i < e.length; i++) r(e[i]);
			t.length ? (n = W(t), s(t, n)) : s(null, a);
		}
		if (o.messages) {
			var l = this.messages();
			l === ft && (l = dt()), He(l, o.messages), o.messages = l;
		} else o.messages = this.messages();
		var u = {};
		(o.keys || Object.keys(this.rules)).forEach(function(e) {
			var n = i.rules[e], r = a[e];
			n.forEach(function(n) {
				var o = n;
				typeof o.transform == "function" && (a === t && (a = V({}, a)), r = a[e] = o.transform(r)), o = typeof o == "function" ? { validator: o } : V({}, o), o.validator = i.getValidationMethod(o), o.validator && (o.field = e, o.fullField = o.fullField || e, o.type = i.getType(o), u[e] = u[e] || [], u[e].push({
					rule: o,
					value: r,
					source: a,
					field: e
				}));
			});
		});
		var d = {};
		return Re(u, o, function(t, n) {
			var r = t.rule, i = (r.type === "object" || r.type === "array") && (typeof r.fields == "object" || typeof r.defaultField == "object");
			i &&= r.required || !r.required && t.value, r.field = t.field;
			function s(e, t) {
				return V({}, t, {
					fullField: r.fullField + "." + e,
					fullFields: r.fullFields ? [].concat(r.fullFields, [e]) : [e]
				});
			}
			function c(c) {
				c === void 0 && (c = []);
				var l = Array.isArray(c) ? c : [c];
				!o.suppressWarning && l.length && e.warning("async-validator:", l), l.length && r.message !== void 0 && (l = [].concat(r.message));
				var u = l.map(Ve(r, a));
				if (o.first && u.length) return d[r.field] = 1, n(u);
				if (!i) n(u);
				else {
					if (r.required && !t.value) return r.message === void 0 ? o.error && (u = [o.error(r, G(o.messages.required, r.field))]) : u = [].concat(r.message).map(Ve(r, a)), n(u);
					var f = {};
					r.defaultField && Object.keys(t.value).map(function(e) {
						f[e] = r.defaultField;
					}), f = V({}, f, t.rule.fields);
					var p = {};
					Object.keys(f).forEach(function(e) {
						var t = f[e];
						p[e] = (Array.isArray(t) ? t : [t]).map(s.bind(null, e));
					});
					var ee = new e(p);
					ee.messages(o.messages), t.rule.options && (t.rule.options.messages = o.messages, t.rule.options.error = o.error), ee.validate(t.value, t.rule.options || o, function(e) {
						var t = [];
						u && u.length && t.push.apply(t, u), e && e.length && t.push.apply(t, e), n(t.length ? t : null);
					});
				}
			}
			var l;
			if (r.asyncValidator) l = r.asyncValidator(r, t.value, c, t.source, o);
			else if (r.validator) {
				try {
					l = r.validator(r, t.value, c, t.source, o);
				} catch (e) {
					console.error == null || console.error(e), o.suppressValidatorError || setTimeout(function() {
						throw e;
					}, 0), c(e.message);
				}
				l === !0 ? c() : l === !1 ? c(typeof r.message == "function" ? r.message(r.fullField || r.field) : r.message || (r.fullField || r.field) + " fails") : l instanceof Array ? c(l) : l instanceof Error && c(l.message);
			}
			l && l.then && l.then(function() {
				return c();
			}, function(e) {
				return c(e);
			});
		}, function(e) {
			c(e);
		}, a);
	}, t.getType = function(e) {
		if (e.type === void 0 && e.pattern instanceof RegExp && (e.type = "pattern"), typeof e.validator != "function" && e.type && !Q.hasOwnProperty(e.type)) throw Error(G("Unknown rule type %s", e.type));
		return e.type || "string";
	}, t.getValidationMethod = function(e) {
		if (typeof e.validator == "function") return e.validator;
		var t = Object.keys(e), n = t.indexOf("message");
		return n !== -1 && t.splice(n, 1), t.length === 1 && t[0] === "required" ? Q.required : Q[this.getType(e)] || void 0;
	}, e;
}();
$.register = function(e, t) {
	if (typeof t != "function") throw Error("Cannot register a validator by type, validator is not a function");
	Q[e] = t;
}, $.warning = Pe, $.messages = ft, $.validators = Q;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/form/src/form-item.vue_vue_type_script_setup_true_lang.mjs
var pt = ["role", "aria-labelledby"], mt = /* @__PURE__ */ f({
	name: "ElFormItem",
	__name: "form-item",
	props: z,
	setup(f, { expose: te }) {
		let g = f, _ = m(), v = t(P, void 0), le = t(N, void 0), T = ye(void 0, { formItem: !1 }), D = he("form-item"), O = ge().value, k = b([]), A = b(""), pe = fe(A, 100), j = b(""), _e = b(), ve, M = !1, F = h(() => g.labelPosition || v?.labelPosition), be = h(() => F.value === "top" ? {} : { width: me(g.labelWidth ?? v?.labelWidth) }), xe = h(() => {
			if (F.value === "top" || v?.inline || !g.label && !g.labelWidth && Ee) return {};
			let e = me(g.labelWidth ?? v?.labelWidth);
			return !g.label && !_.label ? { marginLeft: e } : {};
		}), Se = h(() => [
			D.b(),
			D.m(T.value),
			D.is("error", A.value === "error"),
			D.is("validating", A.value === "validating"),
			D.is("success", A.value === "success"),
			D.is("required", ke.value || g.required),
			D.is("no-asterisk", v?.hideRequiredAsterisk),
			v?.requireAsteriskPosition === "right" ? "asterisk-right" : "asterisk-left",
			{
				[D.m("feedback")]: v?.statusIcon,
				[D.m(`label-${F.value}`)]: F.value
			}
		]), Ce = h(() => de(g.inlineMessage) ? g.inlineMessage : v?.inlineMessage || !1), we = h(() => [D.e("error"), { [D.em("error", "inline")]: Ce.value }]), Te = h(() => g.prop ? p(g.prop) ? g.prop.join(".") : g.prop : ""), I = h(() => !!(g.label || _.label)), L = h(() => g.for ?? (k.value.length === 1 ? k.value[0] : void 0)), R = h(() => !L.value && I.value), Ee = !!le, z = h(() => {
			let e = v?.model;
			if (!(!e || !g.prop)) return w(e, g.prop).value;
		}), B = h(() => {
			let { required: e } = g, t = [];
			g.rules && t.push(...ue(g.rules));
			let n = v?.rules;
			if (n && g.prop) {
				let e = w(n, g.prop).value;
				e && t.push(...ue(e));
			}
			if (e !== void 0) {
				let n = t.map((e, t) => [e, t]).filter(([e]) => "required" in e);
				if (n.length > 0) for (let [r, i] of n) r.required !== e && (t[i] = {
					...r,
					required: e
				});
				else t.push({ required: e });
			}
			return t;
		}), V = h(() => B.value.length > 0), Oe = (e) => B.value.filter((t) => !t.trigger || !e ? !0 : p(t.trigger) ? t.trigger.includes(e) : t.trigger === e).map(({ trigger: e, ...t }) => t), ke = h(() => B.value.some((e) => e.required)), H = h(() => pe.value === "error" && g.showMessage && (v?.showMessage ?? !0)), Ae = h(() => `${g.label || ""}${v?.labelSuffix || ""}`), U = (e) => {
			A.value = e;
		}, je = (e) => {
			let { errors: t, fields: n } = e;
			(!t || !n) && console.error(e), U("error"), j.value = t ? t?.[0]?.message ?? `${g.prop} is required` : "", v?.emit("validate", g.prop, !1, j.value);
		}, Me = () => {
			U("success"), v?.emit("validate", g.prop, !0, "");
		}, Ne = async (e) => {
			let t = Te.value;
			return new $({ [t]: e }).validate({ [t]: z.value }, { firstFields: !0 }).then(() => (Me(), !0)).catch((e) => (je(e), Promise.reject(e)));
		}, Pe = async (e, t) => {
			if (M || !g.prop) return !1;
			let n = r(t);
			if (!V.value) return t?.(!1), !1;
			let i = Oe(e);
			return i.length === 0 ? (t?.(!0), !0) : (U("validating"), Ne(i).then(() => (t?.(!0), !0)).catch((e) => {
				let { fields: r } = e;
				return t?.(!1, r), n ? !1 : Promise.reject(r);
			}));
		}, W = () => {
			U(""), j.value = "", M = !1;
		}, G = async () => {
			let e = v?.model;
			if (!e || !g.prop) return;
			let t = w(e, g.prop);
			M = !0, t.value = E(ve), await u(), W(), M = !1;
		}, Fe = (e) => {
			k.value.includes(e) || k.value.push(e);
		}, K = (e) => {
			k.value = k.value.filter((t) => t !== e);
		}, q = (e) => {
			ve = E(e);
		}, Ie = () => ve;
		e(() => g.error, (e) => {
			j.value = e || "", U(e ? "error" : "");
		}, { immediate: !0 }), e(() => g.validateStatus, (e) => U(e || ""));
		let J = re({
			...ie(g),
			$el: _e,
			size: T,
			validateMessage: j,
			validateState: A,
			labelId: O,
			inputIds: k,
			isGroup: R,
			hasLabel: I,
			fieldValue: z,
			addInputId: Fe,
			removeInputId: K,
			resetField: G,
			clearValidate: W,
			validate: Pe,
			propString: Te,
			setInitialValue: q,
			getInitialValue: Ie
		});
		return ee(N, J), e(Te, (e, t) => {
			!v || !t || (v.removeField(J, t), e && (q(z.value), v.addField(J)));
		}), C(() => {
			g.prop && (q(z.value), v?.addField(J));
		}), s(() => {
			v?.removeField(J);
		}), te({
			size: T,
			validateMessage: j,
			validateState: A,
			validate: Pe,
			clearValidate: W,
			resetField: G,
			setInitialValue: q
		}), (e, t) => (o(), se("div", {
			ref_key: "formItemRef",
			ref: _e,
			class: l(Se.value),
			role: R.value ? "group" : void 0,
			"aria-labelledby": R.value ? S(O) : void 0
		}, [x(S(De), {
			"is-auto-width": be.value.width === "auto",
			"update-all": S(v)?.labelWidth === "auto"
		}, {
			default: y(() => [f.label || e.$slots.label ? (o(), ce(c(L.value ? "label" : "div"), {
				key: 0,
				id: S(O),
				for: L.value,
				class: l(S(D).e("label")),
				style: d(be.value)
			}, {
				default: y(() => [a(e.$slots, "label", { label: Ae.value }, () => [n(i(Ae.value), 1)])]),
				_: 3
			}, 8, [
				"id",
				"for",
				"class",
				"style"
			])) : ne("v-if", !0)]),
			_: 3
		}, 8, ["is-auto-width", "update-all"]), oe("div", {
			class: l(S(D).e("content")),
			style: d(xe.value)
		}, [a(e.$slots, "default"), x(ae, { name: `${S(D).namespace.value}-zoom-in-top` }, {
			default: y(() => [H.value ? a(e.$slots, "error", {
				key: 0,
				error: j.value
			}, () => [oe("div", { class: l(we.value) }, i(j.value), 3)]) : ne("v-if", !0)]),
			_: 3
		}, 8, ["name"])], 6)], 10, pt));
	}
}), ht = T(R, { FormItem: mt }), gt = le(mt);
//#endregion
export { ht as ElForm, ht as default, gt as ElFormItem, P as formContextKey, Ce as formEmits, N as formItemContextKey, z as formItemProps, Ee as formItemValidateStates, xe as formMetaProps, Se as formProps, M as useDisabled, ve as useFormDisabled, be as useFormItem, F as useFormItemInputId, ye as useFormSize, _e as useSize };
