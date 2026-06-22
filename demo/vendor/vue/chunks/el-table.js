globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, B as n, C as r, Ct as i, Dt as a, E as o, F as s, Ft as c, G as l, H as u, I as d, K as f, Mt as p, N as m, O as h, Ot as g, Pt as _, T as v, Tt as y, U as b, V as x, W as S, Z as C, _ as w, a as T, at as E, b as D, ct as O, et as k, f as A, gt as j, j as M, jt as N, l as P, nt as ee, p as F, tt as I, ut as L, v as R, w as z, x as B, y as V, yt as H, z as U } from "./vue.runtime.js";
import { a as te, o as ne, t as re } from "./shared/lodash/_baseAssignValue.js";
import { _ as W, a as G, g as ie, h as ae, n as oe, v as K } from "./shared/element-plus/utils/objects.js";
import { c as se, d as ce, g as le, l as ue, m as de } from "./shared/lodash/_Uint8Array.js";
import { a as fe, c as pe, n as me, o as he, r as ge, s as _e } from "./shared/lodash/_baseClone.js";
import { n as ve, t as ye } from "./shared/lodash/isArrayLikeObject.js";
import { n as be } from "./shared/lodash/_arrayPush.js";
import { n as xe } from "./shared/lodash/flatten.js";
import { a as Se, i as Ce, t as we } from "./shared/element-plus/utils/vue/install.js";
import { t as Te } from "./shared/lodash/castArray.js";
import { t as Ee } from "./shared/lodash/_baseIteratee.js";
import { t as De } from "./shared/lodash/debounce.js";
import { a as Oe, i as ke, n as Ae, s as q, t as J } from "./shared/element-plus/utils/types.js";
import { n as je, t as Me } from "./shared/element-plus/utils/error.js";
import { _ as Ne, c as Pe, d as Fe } from "./shared/vueuse.js";
import { a as Ie, i as Le, t as Re } from "./shared/element-plus/utils/dom/style.js";
import { n as ze } from "./shared/element-plus/utils/raf.js";
import { r as Y } from "./shared/element-plus/hooks/use-namespace.js";
import { C as Be, i as Ve, r as He, t as Ue } from "./shared/element-plus-icons.js";
import { t as We } from "./el-icon.js";
import { i as Ge, t as Ke } from "./el-tooltip.js";
import { r as qe } from "./shared/element-plus/hooks/use-size.js";
import { a as Je, n as Ye } from "./shared/element-plus/constants/aria.js";
import { r as Xe } from "./el-form/hooks/use-form-common-props.js";
import { t as Ze } from "./shared/element-plus/virtual/_plugin-vue_export-helper.js";
import { t as Qe } from "./el-scrollbar.js";
import { t as $e } from "./shared/element-plus/utils/numbers.js";
import { n as et } from "./shared/element-plus/hooks/use-locale.js";
import { r as tt } from "./el-config-provider/constants.js";
import { n as nt, t as rt } from "./el-checkbox.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIterateeCall.js
function it(e, t, n) {
	if (!ne(n)) return !1;
	var r = typeof t;
	return (r == "number" ? le(n) && ie(t, n.length) : r == "string" && t in n) ? ae(n[t], e) : !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createAssigner.js
function at(e) {
	return ve(function(t, n) {
		var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
		for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && it(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;) {
			var s = n[r];
			s && e(t, s, r, a);
		}
		return t;
	});
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createBaseFor.js
function ot(e) {
	return function(t, n, r) {
		for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
			var c = o[e ? s : ++i];
			if (n(a[c], c, a) === !1) break;
		}
		return t;
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFor.js
var st = ot();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseForOwn.js
function ct(e, t) {
	return e && st(e, t, ue);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createBaseEach.js
function lt(e, t) {
	return function(n, r) {
		if (n == null) return n;
		if (!le(n)) return e(n, r);
		for (var i = n.length, a = t ? i : -1, o = Object(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
		return n;
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseEach.js
var ut = lt(ct);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignMergeValue.js
function dt(e, t, n) {
	(n !== void 0 && !ae(e[t], n) || n === void 0 && !(t in e)) && re(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_safeGet.js
function ft(e, t) {
	if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toPlainObject.js
function pt(e) {
	return _e(e, he(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMergeDeep.js
function mt(e, t, n, r, i, a, o) {
	var s = ft(e, n), c = ft(t, n), l = o.get(c);
	if (l) {
		dt(e, n, l);
		return;
	}
	var u = a ? a(s, c, n + "", e, t, o) : void 0, d = u === void 0;
	if (d) {
		var f = W(c), p = !f && de(c), m = !f && !p && ce(c);
		u = c, f || p || m ? W(s) ? u = s : ye(s) ? u = pe(s) : p ? (d = !1, u = fe(c, !0)) : m ? (d = !1, u = ge(c, !0)) : u = [] : Se(c) || be(c) ? (u = s, be(s) ? u = pt(s) : (!ne(s) || te(s)) && (u = me(c))) : d = !1;
	}
	d && (o.set(c, u), i(u, c, r, a, o), o.delete(c)), dt(e, n, u);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMerge.js
function ht(e, t, n, r, i) {
	e !== t && st(t, function(a, o) {
		if (i ||= new se(), ne(a)) mt(e, t, o, n, ht, r, i);
		else {
			var s = r ? r(ft(e, o), a, o + "", e, t, i) : void 0;
			s === void 0 && (s = a), dt(e, o, s);
		}
	}, he);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMap.js
function gt(e, t) {
	var n = -1, r = le(e) ? Array(e.length) : [];
	return ut(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/map.js
function _t(e, t) {
	return (W(e) ? K : gt)(e, Ee(t, 3));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/flatMap.js
function vt(e, t) {
	return xe(_t(e, t), 1);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isNull.js
function yt(e) {
	return e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/merge.js
var bt = at(function(e, t, n) {
	ht(e, t, n);
}), xt = !1, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It;
function X() {
	if (!xt) {
		xt = !0;
		var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
		if (Nt = /\b(iPhone|iP[ao]d)/.exec(e), Pt = /\b(iP[ao]d)/.exec(e), jt = /Android/i.exec(e), Ft = /FBAN\/\w+;/i.exec(e), It = /Mobile/i.exec(e), Mt = !!/Win64/.exec(e), t) {
			St = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, St && document && document.documentMode && (St = document.documentMode);
			var r = /(?:Trident\/(\d+.\d+))/.exec(e);
			Dt = r ? parseFloat(r[1]) + 4 : St, Ct = t[2] ? parseFloat(t[2]) : NaN, wt = t[3] ? parseFloat(t[3]) : NaN, Tt = t[4] ? parseFloat(t[4]) : NaN, Tt ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), Et = t && t[1] ? parseFloat(t[1]) : NaN) : Et = NaN;
		} else St = Ct = wt = Et = Tt = NaN;
		if (n) {
			if (n[1]) {
				var i = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
				Ot = i ? parseFloat(i[1].replace("_", ".")) : !0;
			} else Ot = !1;
			kt = !!n[2], At = !!n[3];
		} else Ot = kt = At = !1;
	}
}
var Lt = {
	ie: function() {
		return X() || St;
	},
	ieCompatibilityMode: function() {
		return X() || Dt > St;
	},
	ie64: function() {
		return Lt.ie() && Mt;
	},
	firefox: function() {
		return X() || Ct;
	},
	opera: function() {
		return X() || wt;
	},
	webkit: function() {
		return X() || Tt;
	},
	safari: function() {
		return Lt.webkit();
	},
	chrome: function() {
		return X() || Et;
	},
	windows: function() {
		return X() || kt;
	},
	osx: function() {
		return X() || Ot;
	},
	linux: function() {
		return X() || At;
	},
	iphone: function() {
		return X() || Nt;
	},
	mobile: function() {
		return X() || Nt || Pt || jt || It;
	},
	nativeApp: function() {
		return X() || Ft;
	},
	android: function() {
		return X() || jt;
	},
	ipad: function() {
		return X() || Pt;
	}
}, Rt = Lt, zt = !!(typeof window < "u" && window.document && window.document.createElement), Bt = {
	canUseDOM: zt,
	canUseWorkers: typeof Worker < "u",
	canUseEventListeners: zt && !!(window.addEventListener || window.attachEvent),
	canUseViewport: zt && !!window.screen,
	isInWorker: !zt
}, Vt;
Bt.canUseDOM && (Vt = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function Ht(e, t) {
	if (!Bt.canUseDOM || t && !("addEventListener" in document)) return !1;
	var n = "on" + e, r = n in document;
	if (!r) {
		var i = document.createElement("div");
		i.setAttribute(n, "return;"), r = typeof i[n] == "function";
	}
	return !r && Vt && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var Ut = Ht, Wt = 10, Gt = 40, Kt = 800;
function qt(e) {
	var t = 0, n = 0, r = 0, i = 0;
	return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = t * Wt, i = n * Wt, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || i) && e.deltaMode && (e.deltaMode == 1 ? (r *= Gt, i *= Gt) : (r *= Kt, i *= Kt)), r && !t && (t = r < 1 ? -1 : 1), i && !n && (n = i < 1 ? -1 : 1), {
		spinX: t,
		spinY: n,
		pixelX: r,
		pixelY: i
	};
}
qt.getEventType = function() {
	return Rt.firefox() ? "DOMMouseScroll" : Ut("wheel") ? "wheel" : "mousewheel";
};
var Jt = qt, Yt = "_Mousewheel", Xt = function(e, t) {
	if (e && e.addEventListener) {
		Zt(e);
		let n = function(e) {
			let n = Jt(e);
			t && Reflect.apply(t, this, [e, n]);
		};
		e[Yt] = { wheelHandler: n }, e.addEventListener("wheel", n, { passive: !0 });
	}
}, Zt = (e) => {
	e._Mousewheel?.wheelHandler && (e.removeEventListener("wheel", e[Yt].wheelHandler), e[Yt] = null);
}, Qt = {
	beforeMount(e, t) {
		Xt(e, t.value);
	},
	unmounted(e) {
		Zt(e);
	},
	updated(e, t) {
		t.value !== t.oldValue && Xt(e, t.value);
	}
}, $t = {
	data: {
		type: Array,
		default: () => []
	},
	size: qe,
	width: [String, Number],
	height: [String, Number],
	maxHeight: [String, Number],
	fit: {
		type: Boolean,
		default: !0
	},
	stripe: Boolean,
	border: Boolean,
	rowKey: [String, Function],
	showHeader: {
		type: Boolean,
		default: !0
	},
	showSummary: Boolean,
	sumText: String,
	summaryMethod: Function,
	rowClassName: [String, Function],
	rowStyle: [Object, Function],
	cellClassName: [String, Function],
	cellStyle: [Object, Function],
	headerRowClassName: [String, Function],
	headerRowStyle: [Object, Function],
	headerCellClassName: [String, Function],
	headerCellStyle: [Object, Function],
	highlightCurrentRow: Boolean,
	currentRowKey: [String, Number],
	emptyText: String,
	expandRowKeys: Array,
	defaultExpandAll: Boolean,
	rowExpandable: { type: Function },
	defaultSort: Object,
	tooltipEffect: String,
	tooltipOptions: Object,
	spanMethod: Function,
	selectOnIndeterminate: {
		type: Boolean,
		default: !0
	},
	indent: {
		type: Number,
		default: 16
	},
	treeProps: {
		type: Object,
		default: () => ({
			hasChildren: "hasChildren",
			children: "children",
			checkStrictly: !1
		})
	},
	lazy: Boolean,
	load: Function,
	style: {
		type: [
			String,
			Object,
			Array,
			Boolean
		],
		default: () => ({})
	},
	className: {
		type: String,
		default: ""
	},
	tableLayout: {
		type: String,
		default: "fixed"
	},
	scrollbarAlwaysOn: Boolean,
	flexible: Boolean,
	showOverflowTooltip: {
		type: [Boolean, Object],
		default: void 0
	},
	tooltipFormatter: Function,
	appendFilterPanelTo: String,
	scrollbarTabindex: {
		type: [Number, String],
		default: void 0
	},
	allowDragLastColumn: {
		type: Boolean,
		default: !0
	},
	preserveExpandedContent: Boolean,
	nativeScrollbar: Boolean
}, en = 1, tn = 1, nn = (e) => `${e}-table_${en++}`, rn = (e) => `${e}_column_${tn++}`, an = function(e) {
	return e.target?.closest("td");
}, on = function(e, t, n, r, i) {
	if (!t && !r && (!i || y(i) && !i.length)) return e;
	n = N(n) ? n === "descending" ? -1 : 1 : n && n < 0 ? -1 : 1;
	let a = r ? null : function(n, r) {
		return i ? vt(Te(i), (t) => N(t) ? G(n, t) : t(n, r, e)) : (t !== "$key" && g(n) && "$value" in n && (n = n.$value), [g(n) ? t ? G(n, t) : null : n]);
	}, o = function(e, t) {
		if (r) return r(e.value, t.value);
		for (let n = 0, r = e.key?.length ?? 0; n < r; n++) {
			if (e.key?.[n] < t.key?.[n]) return -1;
			if (e.key?.[n] > t.key?.[n]) return 1;
		}
		return 0;
	};
	return e.map((e, t) => ({
		value: e,
		index: t,
		key: a ? a(e, t) : null
	})).sort((e, t) => {
		let r = o(e, t);
		return r ||= e.index - t.index, r * +n;
	}).map((e) => e.value);
}, sn = function(e, t) {
	let n = null;
	return e.columns.forEach((e) => {
		e.id === t && (n = e);
	}), n;
}, cn = function(e, t) {
	let n = null;
	for (let r = 0; r < e.columns.length; r++) {
		let i = e.columns[r];
		if (i.columnKey === t) {
			n = i;
			break;
		}
	}
	return n || je("ElTable", `No column matching with column-key: ${t}`), n;
}, ln = function(e, t, n) {
	let r = (t.className || "").match(RegExp(`${n}-table_[^\\s]+`, "gm"));
	return r ? sn(e, r[0]) : null;
}, Z = (e, t) => {
	if (!e) throw Error("Row is required when get row identity");
	if (N(t)) {
		if (!t.includes(".")) return `${e[t]}`;
		let n = t.split("."), r = e;
		for (let e of n) r = r[e];
		return `${r}`;
	} else if (a(t)) return t.call(null, e);
	return "";
}, un = function(e, t, n = !1, r = "children") {
	let i = e || [], a = {};
	return i.forEach((e, i) => {
		if (a[Z(e, t)] = {
			row: e,
			index: i
		}, n) {
			let n = e[r];
			y(n) && Object.assign(a, un(n, t, !0, r));
		}
	}), a;
};
function dn(e, t) {
	let n = {}, r;
	for (r in e) n[r] = e[r];
	for (r in t) if (i(t, r)) {
		let e = t[r];
		q(e) || (n[r] = e);
	}
	return n;
}
function fn(e) {
	return e === "" || q(e) || (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function pn(e) {
	return e === "" || q(e) || (e = fn(e), Number.isNaN(e) && (e = 80)), e;
}
function mn(e) {
	return ke(e) ? e : N(e) ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function hn(...e) {
	return e.length === 0 ? (e) => e : e.length === 1 ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)));
}
function gn(e, t, n, r, i, a, o) {
	let s = a ?? 0, c = !1, l = (() => {
		if (!o) return e.indexOf(t);
		let n = Z(t, o);
		return e.findIndex((e) => Z(e, o) === n);
	})(), u = l !== -1, d = i?.call(null, t, s), f = (n) => {
		n === "add" ? e.push(t) : e.splice(l, 1), c = !0;
	}, p = (e) => {
		let t = 0, n = r?.children && e[r.children];
		return n && y(n) && (t += n.length, n.forEach((e) => {
			t += p(e);
		})), t;
	};
	return (!i || d) && (J(n) ? n && !u ? f("add") : !n && u && f("remove") : f(u ? "remove" : "add")), !r?.checkStrictly && r?.children && y(t[r.children]) && t[r.children].forEach((t) => {
		let a = gn(e, t, n ?? !u, r, i, s + 1, o);
		s += p(t) + 1, a && (c = a);
	}), c;
}
function _n(e, t, n = "children", r = "hasChildren", i = !1) {
	let a = (e) => !(y(e) && e.length);
	function o(e, s, c) {
		t(e, s, c), s.forEach((e) => {
			if (e[r] && i) {
				t(e, null, c + 1);
				return;
			}
			let s = e[n];
			a(s) || o(e, s, c + 1);
		});
	}
	e.forEach((e) => {
		if (e[r] && i) {
			t(e, null, 0);
			return;
		}
		let s = e[n];
		a(s) || o(e, s, 0);
	});
}
var vn = (e, t, n, r) => {
	let i = a(r?.tooltipFormatter) ? r.tooltipFormatter({
		row: n,
		column: r,
		cellValue: oe(n, r.property).value
	}) : void 0;
	return M(i) ? {
		slotContent: i,
		content: null,
		strategy: "fixed",
		...e
	} : {
		slotContent: null,
		content: i ?? t,
		strategy: "fixed",
		...e
	};
}, Q = null;
function yn(e, t, n, r, i, a) {
	let o = vn(e, t, n, r), s = {
		...o,
		slotContent: void 0
	};
	if (Q?.trigger === i) {
		let e = Q.vm?.component;
		bt(e?.props, s), e && o.slotContent && (e.slots.content = () => [o.slotContent]);
		return;
	}
	Q?.();
	let c = a?.refs.tableWrapper, l = c?.dataset.prefix, u = z(Ke, {
		virtualTriggering: !0,
		virtualRef: i,
		appendTo: c,
		placement: "top",
		transition: "none",
		offset: 0,
		hideAfter: 0,
		...s
	}, o.slotContent ? { content: () => o.slotContent } : void 0);
	u.appContext = {
		...a.appContext,
		...a
	};
	let d = document.createElement("div");
	T(u, d), u.component.exposed.onOpen();
	let f = c?.querySelector(`.${l}-scrollbar__wrap`);
	Q = () => {
		u.component?.exposed?.onClose && u.component.exposed.onClose(), T(null, d);
		let e = Q;
		f?.removeEventListener("scroll", e), e.trigger = void 0, e.vm = void 0, Q = null;
	}, Q.trigger = i ?? void 0, Q.vm = u, f?.addEventListener("scroll", Q);
}
function bn(e) {
	return e.children ? vt(e.children, bn) : [e];
}
function xn(e, t) {
	return e + t.colSpan;
}
var Sn = (e, t, n, r) => {
	let i = 0, a = e, o = n.states.columns.value;
	if (r) {
		let t = bn(r[e]);
		i = o.slice(0, o.indexOf(t[0])).reduce(xn, 0), a = i + t.reduce(xn, 0) - 1;
	} else i = e;
	let s;
	switch (t) {
		case "left":
			a < n.states.fixedLeafColumnsLength.value && (s = "left");
			break;
		case "right":
			i >= o.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
			break;
		default: a < n.states.fixedLeafColumnsLength.value ? s = "left" : i >= o.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
	}
	return s ? {
		direction: s,
		start: i,
		after: a
	} : {};
}, Cn = (e, t, n, r, i, a = 0) => {
	let o = [], { direction: s, start: c, after: l } = Sn(t, n, r, i);
	if (s) {
		let t = s === "left";
		o.push(`${e}-fixed-column--${s}`), t && l + a === r.states.fixedLeafColumnsLength.value - 1 ? o.push("is-last-column") : !t && c - a === r.states.columns.value.length - r.states.rightFixedLeafColumnsLength.value && o.push("is-first-column");
	}
	return o;
};
function wn(e, t) {
	return e + (yt(t.realWidth) || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
var Tn = (e, t, n, r) => {
	let { direction: i, start: a = 0, after: o = 0 } = Sn(e, t, n, r);
	if (!i) return;
	let s = {}, c = i === "left", l = n.states.columns.value;
	return c ? s.left = l.slice(0, a).reduce(wn, 0) : s.right = l.slice(o + 1).reverse().reduce(wn, 0), s;
}, En = (e, t) => {
	e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function Dn(e) {
	return e.some((e) => M(e) ? !(e.type === A || e.type === F && !Dn(e.children)) : !0) ? e : null;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/store/expand.mjs
function On(e) {
	let t = o(), n = L(!1), r = L([]), i = (e, n) => {
		let r = t.store.states.rowExpandable.value;
		return r?.(e, n) ?? !0;
	};
	return {
		updateExpandRows: () => {
			let a = e.data.value || [], o = e.rowKey.value;
			if (n.value) r.value = t.store.states.rowExpandable.value ? a.filter(i) : a.slice();
			else if (o) {
				let e = un(r.value, o);
				r.value = a.filter((t, n) => !!e[Z(t, o)] && i(t, n));
			} else r.value = [];
		},
		toggleRowExpansion: (n, a) => {
			let o = (e.data.value || []).indexOf(n);
			o > -1 && !i(n, o) || gn(r.value, n, a, void 0, void 0, void 0, e.rowKey.value) && t.emit("expand-change", n, r.value.slice());
		},
		setExpandRowKeys: (n) => {
			t.store.assertRowKey();
			let a = e.data.value || [], o = e.rowKey.value, s = un(a, o);
			r.value = n.reduce((e, t) => {
				let n = s[t];
				return n && i(n.row, n.index) && e.push(n.row), e;
			}, []);
		},
		isRowExpanded: (t) => {
			let n = e.rowKey.value;
			return n ? !!un(r.value, n)[Z(t, n)] : r.value.includes(t);
		},
		states: {
			expandRows: r,
			defaultExpandAll: n
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/store/current.mjs
function kn(e) {
	let t = o(), n = L(null), r = L(null), i = (e) => {
		t.store.assertRowKey(), n.value = e, s(e);
	}, a = () => {
		n.value = null;
	}, s = (n) => {
		let { data: i, rowKey: a } = e, o = r.value, s = null;
		a.value && (s = (H(i) || []).find((e) => Z(e, a.value) === n) ?? null), r.value = s ?? null, t.emit("current-change", r.value, o);
	};
	return {
		setCurrentRowKey: i,
		restoreCurrentRowKey: a,
		setCurrentRowByKey: s,
		updateCurrentRow: (e) => {
			let n = r.value;
			if (e && e !== n) {
				r.value = e, t.emit("current-change", r.value, n);
				return;
			}
			!e && n && (r.value = null, t.emit("current-change", null, n));
		},
		updateCurrentRowData: () => {
			let i = e.rowKey.value, o = e.data.value || [], c = r.value;
			c && !o.includes(c) ? i ? s(Z(c, i)) : (r.value = null, t.emit("current-change", null, c)) : n.value && (s(n.value), a());
		},
		states: {
			_currentRowKey: n,
			currentRow: r
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/store/tree.mjs
function An(t) {
	let n = L([]), r = L({}), i = L(16), a = L(!1), s = L({}), c = L("hasChildren"), l = L("children"), u = L(!1), d = o(), f = w(() => t.rowKey.value ? m(t.data.value || []) : {}), p = w(() => {
		let e = t.rowKey.value, n = Object.keys(s.value), r = {};
		return n.length && n.forEach((t) => {
			if (s.value[t].length) {
				let n = { children: [] };
				s.value[t].forEach((t) => {
					let i = Z(t, e);
					n.children.push(i), t[c.value] && !r[i] && (r[i] = { children: [] });
				}), r[t] = n;
			}
		}), r;
	}), m = (e) => {
		let n = t.rowKey.value, r = {};
		return _n(e, (e, t, i) => {
			let o = Z(e, n);
			y(t) ? r[o] = {
				children: t.map((e) => Z(e, n)),
				level: i
			} : a.value && (r[o] = {
				children: [],
				lazy: !0,
				level: i
			});
		}, l.value, c.value, a.value), r;
	}, h = (e = !1, t) => {
		t ||= d.store?.states.defaultExpandAll.value;
		let i = f.value, o = p.value, s = Object.keys(i), c = {};
		if (s.length) {
			let l = H(r), u = [], d = (r, i) => {
				if (e) return n.value ? t || n.value.includes(i) : !!(t || r?.expanded);
				{
					let e = t || n.value && n.value.includes(i);
					return !!(r?.expanded || e);
				}
			};
			s.forEach((e) => {
				let t = l[e], n = { ...i[e] };
				if (n.expanded = d(t, e), n.lazy) {
					let { loaded: r = !1, loading: i = !1 } = t || {};
					n.loaded = !!r, n.loading = !!i, u.push(e);
				}
				c[e] = n;
			});
			let f = Object.keys(o);
			a.value && f.length && u.length && f.forEach((e) => {
				let t = l[e], n = o[e].children;
				if (u.includes(e)) {
					if (c[e].children?.length !== 0) throw Error("[ElTable]children must be an empty array.");
					c[e].children = n;
				} else {
					let { loaded: r = !1, loading: i = !1 } = t || {};
					c[e] = {
						lazy: !0,
						loaded: !!r,
						loading: !!i,
						expanded: d(t, e),
						children: n,
						level: void 0
					};
				}
			});
		}
		r.value = c, d.store?.updateTableScrollY();
	};
	e(() => n.value, () => {
		h(!0);
	}, { deep: !0 }), e(() => f.value, () => {
		h();
	}), e(() => p.value, () => {
		h();
	});
	let g = (e) => {
		n.value = e, h();
	}, _ = (e) => a.value && e && "loaded" in e && !e.loaded, v = (e, n) => {
		d.store.assertRowKey();
		let i = t.rowKey.value, a = Z(e, i), o = a && r.value[a];
		if (a && o && "expanded" in o) {
			let t = o.expanded;
			n = q(n) ? !o.expanded : n, r.value[a].expanded = n, t !== n && d.emit("expand-change", e, n), n && _(o) && x(e, a, o), d.store.updateTableScrollY();
		}
	}, b = (e) => {
		d.store.assertRowKey();
		let n = t.rowKey.value, i = Z(e, n), a = r.value[i];
		_(a) ? x(e, i, a) : v(e, void 0);
	}, x = (e, t, n) => {
		let { load: i } = d.props;
		i && !r.value[t].loaded && (r.value[t].loading = !0, i(e, n, (n) => {
			if (!y(n)) throw TypeError("[ElTable] data must be an array");
			r.value[t].loading = !1, r.value[t].loaded = !0, r.value[t].expanded = !0, n.length && (s.value = {
				...s.value,
				[t]: n
			}), d.emit("expand-change", e, !0);
		}));
	};
	return {
		loadData: x,
		loadOrToggle: b,
		toggleTreeExpansion: v,
		updateTreeExpandKeys: g,
		updateTreeData: h,
		updateKeyChildren: (e, t) => {
			let { lazy: n, rowKey: r } = d.props;
			if (n) {
				if (!r) throw Error("[Table] rowKey is required in updateKeyChild");
				s.value[e] && (s.value = {
					...s.value,
					[e]: t
				});
			}
		},
		normalize: m,
		states: {
			expandRowKeys: n,
			treeData: r,
			indent: i,
			lazy: a,
			lazyTreeNodeMap: s,
			lazyColumnIdentifier: c,
			childrenColumnName: l,
			checkStrictly: u
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/store/watcher.mjs
var jn = (e, t) => {
	let n = t.sortingColumn;
	return !n || N(n.sortable) ? e : on(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Mn = (e) => {
	let t = [];
	return e.forEach((e) => {
		e.children && e.children.length > 0 ? t.push.apply(t, Mn(e.children)) : t.push(e);
	}), t;
};
function Nn() {
	let t = o(), { size: n } = j(t.proxy?.$props), r = L(null), a = L([]), s = L([]), c = L(!1), l = L([]), u = L([]), d = L([]), f = L([]), p = L([]), m = L([]), h = L([]), g = L([]), _ = [], v = L(0), b = L(0), x = L(0), S = L(!1), C = L([]), T = L({}), E = L(!1), D = L(!1), O = L(null), k = L(null), A = L({}), M = L(null), P = L(null), ee = L(null), F = L(null), I = L(null), R = [], z = w(() => r.value ? un(C.value, r.value) : void 0), B = (e) => {
		let { childrenColumnName: n, lazyTreeNodeMap: i } = t.store.states, a = e[n.value] ?? [];
		if (!r.value) return a;
		let o = Z(e, r.value);
		return [...i.value?.[o] ?? [], ...a];
	};
	e(a, () => {
		t.state && (ne(!1), t.props.tableLayout === "auto" && t.refs.tableHeaderRef?.updateFixedColumnStyle());
	}, { deep: !0 });
	let V = () => {
		if (!r.value) throw Error("[ElTable] prop row-key is required");
	}, U = (e) => {
		e.children?.forEach((t) => {
			t.fixed = e.fixed, U(t);
		});
	}, te = () => {
		l.value.forEach((e) => {
			U(e);
		}), f.value = l.value.filter((e) => [!0, "left"].includes(e.fixed));
		let e = l.value.find((e) => e.type === "selection"), t;
		e && e.fixed !== "right" && !f.value.includes(e) && l.value.indexOf(e) === 0 && f.value.length && (f.value.unshift(e), t = !0), p.value = l.value.filter((e) => e.fixed === "right");
		let n = l.value.filter((e) => (t ? e.type !== "selection" : !0) && !e.fixed);
		u.value = Array.from(f.value).concat(n).concat(p.value);
		let r = Mn(n), i = Mn(f.value), a = Mn(p.value);
		v.value = r.length, b.value = i.length, x.value = a.length, d.value = Array.from(i).concat(r).concat(a), c.value = f.value.length > 0 || p.value.length > 0;
	}, ne = (e, n = !1) => {
		e && te(), n ? t.state.doLayout() : t.state.debouncedUpdateLayout();
	}, re = (e) => z.value ? !!z.value[Z(e, r.value)] : C.value.includes(e), W = w(() => {
		let e = /* @__PURE__ */ new Map();
		if (!r.value || !O.value) return e;
		let t = 0, n = (i) => {
			y(i) && i.forEach((i) => {
				let a = Z(i, r.value);
				e.set(a, t), t += 1;
				let o = B(i);
				o.length && n(o);
			});
		};
		return n(a.value || []), e;
	}), G = (e = {}) => {
		let { emitChange: n = !0 } = e;
		if (q.checkStrictly.value || !r.value) {
			T.value = {}, R = [];
			return;
		}
		let i = r.value, o = e.rowIndexMap ?? W.value, s = O.value, c = /* @__PURE__ */ new WeakMap(), l = (e) => {
			let t = c.get(e);
			if (t) return t;
			let n = Z(e, i);
			return c.set(e, n), n;
		}, u = {}, d = [], f = new Set(C.value.map((e) => l(e))), p = [], m = !1, h = (e, t, n) => {
			let r = f.has(t);
			n && !r ? (p.push(e), f.add(t), m = !0) : !n && r && (f.delete(t), m = !0);
		}, g = (e) => {
			let t = 0, n = 0;
			return y(e) && e.forEach((e) => {
				let r = l(e), i = B(e), a = 0, c = 0;
				if (i.length) {
					let e = g(i);
					a = e.selectedCount, c = e.selectableCount;
				}
				let p = s ? s.call(null, e, o.get(r) ?? 0) : !0;
				if (p && c > 0) {
					let t = a === c;
					!t && a !== 0 && (u[r] = !0, d.push(e)), h(e, r, t);
				}
				p && (n += 1, f.has(r) && (t += 1)), t += a, n += c;
			}), {
				selectedCount: t,
				selectableCount: n
			};
		};
		if (g(a.value || []), m) {
			let e = C.value.filter((e) => f.has(l(e)));
			p.forEach((t) => {
				f.has(l(t)) && e.push(t);
			}), C.value = e;
		}
		T.value = u, R = d, m && n && t.emit("selection-change", C.value ? C.value.slice() : []);
	}, ie = () => {
		S.value = !1;
		let e = C.value;
		C.value = [], T.value = {}, R = [], e.length && t.emit("selection-change", []);
	}, ae = () => {
		let e;
		if (r.value) {
			e = [];
			let n = t?.store?.states?.childrenColumnName.value, o = un(a.value, r.value, !0, n), { lazyTreeNodeMap: s } = t.store.states;
			s.value && Object.entries(s.value).forEach(([e, t]) => {
				o[e] && t.forEach((e) => {
					let t = Z(e, r.value);
					o[t] || (o[t] = {
						row: e,
						index: -1
					});
				});
			});
			for (let t in z.value) i(z.value, t) && !o[t] && e.push(z.value[t].row);
		} else e = C.value.filter((e) => !a.value.includes(e));
		if (e.length) {
			let n = C.value.filter((t) => !e.includes(t));
			C.value = n, G({ emitChange: !1 }), t.emit("selection-change", [...n]);
		}
	}, oe = () => (C.value || []).slice(), K = () => R.slice(), se = (e, n, i) => {
		if (!r.value || q.checkStrictly.value || !q.lazy.value) return;
		let { lazyTreeNodeMap: a, childrenColumnName: o } = t.store.states, s = Z(e, r.value), c = a.value?.[s] ?? [], l = e[o.value] ?? [], u = {
			children: o.value,
			checkStrictly: !1
		};
		for (let e of c) {
			let t = i.get(Z(e, r.value)) ?? 0;
			gn(C.value, e, n, u, O.value, t, r.value), se(e, n, i);
		}
		for (let e of l) se(e, n, i);
	}, ce = (e, n, i = !0, o = !1) => {
		let s = {
			children: t?.store?.states?.childrenColumnName.value,
			checkStrictly: t?.store?.states?.checkStrictly.value
		};
		if (gn(C.value, e, n, s, o ? void 0 : O.value, a.value.indexOf(e), r.value)) {
			q.lazy.value && !q.checkStrictly.value ? (se(e, n ?? re(e), W.value), G({
				emitChange: !1,
				rowIndexMap: W.value
			})) : G({ emitChange: !1 });
			let r = (C.value || []).slice();
			i && t.emit("select", r, e), t.emit("selection-change", r);
		}
	}, le = () => {
		let e = D.value ? !S.value : !(S.value || C.value.length);
		S.value = e;
		let n = !1, r = 0, i = t?.store?.states?.rowKey.value, { childrenColumnName: o } = t.store.states, s = {
			children: o.value,
			checkStrictly: !1
		};
		a.value.forEach((t, a) => {
			let o = a + r;
			gn(C.value, t, e, s, O.value, o, i) && (n = !0), r += fe(Z(t, i));
		});
		let c = W.value;
		if (q.lazy.value && !q.checkStrictly.value && i) for (let t of Object.values(q.lazyTreeNodeMap.value)) for (let r of t) {
			let t = c.get(Z(r, i)) ?? 0;
			gn(C.value, r, e, s, O.value, t, i) && (n = !0), se(r, e, c);
		}
		G({
			emitChange: !1,
			rowIndexMap: c
		}), n && t.emit("selection-change", C.value ? [...C.value] : []), t.emit("select-all", (C.value || []).slice());
	}, ue = () => {
		if (a.value?.length === 0) {
			S.value = !1;
			return;
		}
		let e = 0, t = 0, n = (r) => {
			for (let i of r) {
				let r = O.value && O.value.call(null, i, e);
				if (re(i)) t++;
				else if (!O.value || r) return !1;
				e++;
				let a = B(i);
				if (a.length && !n(a)) return !1;
			}
			return !0;
		}, r = n(a.value || []);
		S.value = t === 0 ? !1 : r;
	}, de = (e) => {
		if (!r.value) return !1;
		let t = Z(e, r.value);
		return !!T.value[t];
	}, fe = (e) => {
		if (!t || !t.store) return 0;
		let { treeData: n } = t.store.states, r = 0, i = n.value[e]?.children;
		return i && (r += i.length, i.forEach((e) => {
			r += fe(e);
		})), r;
	}, pe = (e, t) => {
		let n = {};
		return Te(e).forEach((e) => {
			A.value[e.id] = t, n[e.columnKey || e.id] = t;
		}), n;
	}, me = (e, t, n) => {
		P.value && P.value !== e && (P.value.order = null), P.value = e, ee.value = t, F.value = n;
	}, he = () => {
		let e = H(s);
		Object.keys(A.value).forEach((t) => {
			let n = A.value[t];
			if (!n || n.length === 0) return;
			let r = sn({ columns: d.value }, t);
			r && r.filterMethod && (e = e.filter((e) => n.some((t) => r.filterMethod.call(null, t, e, r))));
		}), M.value = e;
	}, ge = () => {
		a.value = jn(M.value ?? [], {
			sortingColumn: P.value,
			sortProp: ee.value,
			sortOrder: F.value
		});
	}, _e = (e = void 0) => {
		e?.filter || he(), ge();
	}, ve = (e) => {
		let { tableHeaderRef: n } = t.refs;
		if (!n) return;
		let r = Object.assign({}, n.filterPanels), i = Object.keys(r);
		if (i.length) if (N(e) && (e = [e]), y(e)) {
			let n = e.map((e) => cn({ columns: d.value }, e));
			i.forEach((e) => {
				let t = n.find((t) => t.id === e);
				t && (t.filteredValue = []);
			}), t.store.commit("filterChange", {
				column: n,
				values: [],
				silent: !0,
				multi: !0
			});
		} else i.forEach((e) => {
			let t = d.value.find((t) => t.id === e);
			t && (t.filteredValue = []);
		}), A.value = {}, t.store.commit("filterChange", {
			column: {},
			values: [],
			silent: !0
		});
	}, ye = () => {
		P.value && (me(null, null, null), t.store.commit("changeSortCondition", { silent: !0 }));
	}, { setExpandRowKeys: be, toggleRowExpansion: xe, updateExpandRows: Se, states: Ce, isRowExpanded: we } = On({
		data: a,
		rowKey: r
	}), { updateTreeExpandKeys: Ee, toggleTreeExpansion: De, updateTreeData: Oe, updateKeyChildren: ke, loadOrToggle: Ae, states: q } = An({
		data: a,
		rowKey: r
	}), { updateCurrentRowData: J, updateCurrentRow: je, setCurrentRowKey: Me, states: Ne } = kn({
		data: a,
		rowKey: r
	});
	return e(() => q.checkStrictly.value, (e) => {
		e ? (T.value = {}, R = []) : G({ emitChange: !1 }), ue();
	}), e(() => q.lazyTreeNodeMap.value, () => {
		if (!q.lazy.value || q.checkStrictly.value || !r.value) return;
		let e = W.value, n = C.value.length;
		for (let t of Object.keys(q.lazyTreeNodeMap.value)) z.value?.[t] && se(z.value[t].row, !0, e);
		let i = C.value.length !== n;
		G({
			emitChange: !i,
			rowIndexMap: e
		}), ue(), i && t.emit("selection-change", [...C.value]);
	}), {
		assertRowKey: V,
		updateColumns: te,
		scheduleLayout: ne,
		isSelected: re,
		clearSelection: ie,
		cleanSelection: ae,
		getSelectionRows: oe,
		getHalfSelectionRows: K,
		toggleRowSelection: ce,
		_toggleAllSelection: le,
		toggleAllSelection: null,
		updateAllSelected: ue,
		updateSelectionByChildren: G,
		getRowIndeterminate: de,
		updateFilters: pe,
		updateCurrentRow: je,
		updateSort: me,
		execFilter: he,
		execSort: ge,
		execQuery: _e,
		clearFilter: ve,
		clearSort: ye,
		toggleRowExpansion: xe,
		setExpandRowKeysAdapter: (e) => {
			be(e), Ee(e);
		},
		setCurrentRowKey: Me,
		toggleRowExpansionAdapter: (e, t) => {
			d.value.some(({ type: e }) => e === "expand") ? xe(e, t) : De(e, t);
		},
		isRowExpanded: we,
		updateExpandRows: Se,
		updateCurrentRowData: J,
		loadOrToggle: Ae,
		updateTreeData: Oe,
		updateKeyChildren: ke,
		states: {
			tableSize: n,
			rowKey: r,
			data: a,
			_data: s,
			isComplex: c,
			_columns: l,
			originColumns: u,
			columns: d,
			fixedColumns: f,
			rightFixedColumns: p,
			leafColumns: m,
			fixedLeafColumns: h,
			rightFixedLeafColumns: g,
			updateOrderFns: _,
			leafColumnsLength: v,
			fixedLeafColumnsLength: b,
			rightFixedLeafColumnsLength: x,
			isAllSelected: S,
			selection: C,
			selectionIndeterminate: T,
			reserveSelection: E,
			selectOnIndeterminate: D,
			selectable: O,
			rowExpandable: k,
			filters: A,
			filteredData: M,
			sortingColumn: P,
			sortProp: ee,
			sortOrder: F,
			hoverRow: I,
			...Ce,
			...q,
			...Ne
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/store/index.mjs
function Pn(e, t) {
	return e.map((e) => e.id === t.id ? t : (e.children?.length && (e.children = Pn(e.children, t)), e));
}
function Fn(e) {
	e.forEach((e) => {
		e.no = e.getColumnIndex?.(), e.children?.length && Fn(e.children);
	}), e.sort((e, t) => e.no - t.no);
}
function In() {
	let e = o(), t = Nn(), n = Y("table"), { t: r } = et(), i = {
		setData(t, n) {
			let r = H(t._data) !== n;
			t.data.value = n, t._data.value = n, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), H(t.reserveSelection) ? e.store.assertRowKey() : r ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateSelectionByChildren({ emitChange: !1 }), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
		},
		insertColumn(t, n, r, i) {
			let a = H(t._columns), o = [];
			r ? (r && !r.children && (r.children = []), r.children?.push(n), o = Pn(a, r)) : (a.push(n), o = a), Fn(o), t._columns.value = o, t.updateOrderFns.push(i), n.type === "selection" && (t.selectable.value = n.selectable, t.reserveSelection.value = n.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
		},
		updateColumnOrder(t, n) {
			n.getColumnIndex?.() !== n.no && (Fn(t._columns.value), e.$ready && e.store.updateColumns());
		},
		removeColumn(t, n, r, i) {
			let a = H(t._columns) || [];
			if (r) r.children?.splice(r.children.findIndex((e) => e.id === n.id), 1), m(() => {
				r.children?.length === 0 && delete r.children;
			}), t._columns.value = Pn(a, r);
			else {
				let e = a.indexOf(n);
				e > -1 && (a.splice(e, 1), t._columns.value = a);
			}
			let o = t.updateOrderFns.indexOf(i);
			o > -1 && t.updateOrderFns.splice(o, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
		},
		sort(t, n) {
			let { prop: r, order: i, init: a } = n;
			if (r) {
				let n = H(t.columns).find((e) => e.property === r);
				n && (n.order = i, e.store.updateSort(n, r, i), e.store.commit("changeSortCondition", { init: a }));
			}
		},
		changeSortCondition(t, n) {
			let { sortingColumn: r, sortProp: i, sortOrder: a } = t, o = H(r), s = H(i), c = H(a);
			yt(c) && (t.sortingColumn.value = null, t.sortProp.value = null), e.store.execQuery({ filter: !0 }), (!n || !(n.silent || n.init)) && e.emit("sort-change", {
				column: o,
				prop: s,
				order: c
			}), e.store.updateTableScrollY();
		},
		filterChange(t, n) {
			let { column: r, values: i, silent: a } = n, o = e.store.updateFilters(r, i);
			e.store.execQuery(), a || e.emit("filter-change", o), e.store.updateTableScrollY();
		},
		toggleAllSelection() {
			e.store.toggleAllSelection?.();
		},
		rowSelectedChanged(t, n) {
			e.store.toggleRowSelection(n), e.store.updateAllSelected();
		},
		setHoverRow(e, t) {
			e.hoverRow.value = t;
		},
		setCurrentRow(t, n) {
			e.store.updateCurrentRow(n);
		}
	}, a = function(t, ...n) {
		let r = e.store.mutations;
		if (r[t]) r[t].apply(e, [e.store.states, ...n]);
		else throw Error(`Action not found: ${t}`);
	}, s = function() {
		m(() => e.layout.updateScrollY.apply(e.layout));
	};
	return {
		ns: n,
		t: r,
		...t,
		mutations: i,
		commit: a,
		updateTableScrollY: s
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/store/helper.mjs
var Ln = {
	rowKey: "rowKey",
	defaultExpandAll: "defaultExpandAll",
	rowExpandable: "rowExpandable",
	selectOnIndeterminate: "selectOnIndeterminate",
	indent: "indent",
	lazy: "lazy",
	"treeProps.hasChildren": {
		key: "lazyColumnIdentifier",
		default: "hasChildren"
	},
	"treeProps.children": {
		key: "childrenColumnName",
		default: "children"
	},
	"treeProps.checkStrictly": {
		key: "checkStrictly",
		default: !1
	}
};
function Rn(e, t) {
	if (!e) throw Error("Table is required.");
	let n = In();
	return n.toggleAllSelection = De(n._toggleAllSelection, 10), Object.keys(Ln).forEach((e) => {
		Bn(Vn(t, e), e, n);
	}), zn(n, t), n;
}
function zn(t, n) {
	Object.keys(Ln).forEach((r) => {
		e(() => Vn(n, r), (e) => {
			Bn(e, r, t);
		});
	});
}
function Bn(e, t, n) {
	let r = e, i = Ln[t];
	g(i) && (r ||= i.default, i = i.key), n.states[i].value = r;
}
function Vn(e, t) {
	if (t.includes(".")) {
		let n = t.split("."), r = e;
		return n.forEach((e) => {
			r = r[e];
		}), r;
	} else return e[t];
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-layout.mjs
var Hn = class {
	constructor(e) {
		this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.heightMap = {}, this.height = L(null), this.scrollX = L(!1), this.scrollY = L(!1), this.bodyWidth = L(null), this.fixedWidth = L(null), this.rightFixedWidth = L(null), this.gutterWidth = 0;
		for (let t in e) i(e, t) && (E(this[t]) ? this[t].value = e[t] : this[t] = e[t]);
		if (!this.table) throw Error("Table is required for Table Layout");
		if (!this.store) throw Error("Store is required for Table Layout");
	}
	updateScrollY() {
		let e = this.height.value;
		if (yt(e)) return !1;
		let t = this.table.refs.scrollBarRef;
		if (this.table.vnode.el && t?.wrapRef) {
			let e = !0, n = this.scrollY.value;
			return e = t.wrapRef.scrollHeight > t.wrapRef.clientHeight, this.scrollY.value = e, n !== e;
		}
		return !1;
	}
	setHeight(e, t = "height") {
		if (!Ne) return;
		let n = this.table.vnode.el;
		if (e = mn(e), this.height.value = Number(e), this.heightMap[t] = e, !n && (e || e === 0)) {
			m(() => {
				this.heightMap[t] === e && this.setHeight(e, t);
			});
			return;
		}
		n && ke(e) ? (n.style[t] = `${e}px`, this.updateElsHeight()) : n && N(e) && (n.style[t] = e, this.updateElsHeight());
	}
	setMaxHeight(e) {
		this.setHeight(e, "max-height");
	}
	getFlattenColumns() {
		let e = [];
		return this.table.store.states.columns.value.forEach((t) => {
			t.isColumnGroup ? e.push.apply(e, t.columns) : e.push(t);
		}), e;
	}
	updateElsHeight() {
		this.updateScrollY(), this.notifyObservers("scrollable");
	}
	headerDisplayNone(e) {
		if (!e) return !0;
		let t = e;
		for (; t.tagName !== "DIV";) {
			if (getComputedStyle(t).display === "none") return !0;
			t = t.parentElement;
		}
		return !1;
	}
	updateColumnsWidth() {
		if (!Ne) return;
		let e = this.fit, t = this.table.vnode.el?.clientWidth, n = 0, r = this.getFlattenColumns(), i = r.filter((e) => !ke(e.width));
		if (r.forEach((e) => {
			ke(e.width) && e.realWidth && (e.realWidth = null);
		}), i.length > 0 && e) {
			if (r.forEach((e) => {
				n += Number(e.width || e.minWidth || 80);
			}), n <= t) {
				this.scrollX.value = !1;
				let e = t - n;
				if (i.length === 1) i[0].realWidth = Number(i[0].minWidth || 80) + e;
				else {
					let t = e / i.reduce((e, t) => e + Number(t.minWidth || 80), 0), n = 0;
					i.forEach((e, r) => {
						if (r === 0) return;
						let i = Math.floor(Number(e.minWidth || 80) * t);
						n += i, e.realWidth = Number(e.minWidth || 80) + i;
					}), i[0].realWidth = Number(i[0].minWidth || 80) + e - n;
				}
			} else this.scrollX.value = !0, i.forEach((e) => {
				e.realWidth = Number(e.minWidth);
			});
			this.bodyWidth.value = Math.max(n, t), this.table.state.resizeState.value.width = this.bodyWidth.value;
		} else r.forEach((e) => {
			!e.width && !e.minWidth ? e.realWidth = 80 : e.realWidth = Number(e.width || e.minWidth), n += e.realWidth;
		}), this.scrollX.value = n > t, this.bodyWidth.value = n;
		let a = this.store.states.fixedColumns.value;
		if (a.length > 0) {
			let e = 0;
			a.forEach((t) => {
				e += Number(t.realWidth || t.width);
			}), this.fixedWidth.value = e;
		}
		let o = this.store.states.rightFixedColumns.value;
		if (o.length > 0) {
			let e = 0;
			o.forEach((t) => {
				e += Number(t.realWidth || t.width);
			}), this.rightFixedWidth.value = e;
		}
		this.notifyObservers("columns");
	}
	addObserver(e) {
		this.observers.push(e);
	}
	removeObserver(e) {
		let t = this.observers.indexOf(e);
		t !== -1 && this.observers.splice(t, 1);
	}
	notifyObservers(e) {
		this.observers.forEach((t) => {
			switch (e) {
				case "columns":
					t.state?.onColumnsChange(this);
					break;
				case "scrollable":
					t.state?.onScrollableChange(this);
					break;
				default: throw Error(`Table Layout don't have event ${e}.`);
			}
		});
	}
}, $ = Symbol("ElTable"), Un = (e) => {
	let t = [];
	return e.forEach((e) => {
		e.children ? (t.push(e), t.push.apply(t, Un(e.children))) : t.push(e);
	}), t;
}, Wn = (e) => {
	let t = 1, n = (e, r) => {
		if (r && (e.level = r.level + 1, t < e.level && (t = e.level)), e.children) {
			let t = 0;
			e.children.forEach((r) => {
				n(r, e), t += r.colSpan;
			}), e.colSpan = t;
		} else e.colSpan = 1;
	};
	e.forEach((e) => {
		e.level = 1, n(e, void 0);
	});
	let r = [];
	for (let e = 0; e < t; e++) r.push([]);
	return Un(e).forEach((e) => {
		e.children ? (e.rowSpan = 1, e.children.forEach((e) => e.isSubColumn = !0)) : e.rowSpan = t - e.level + 1, r[e.level - 1].push(e);
	}), r;
};
function Gn(e) {
	let n = t($), r = w(() => Wn(e.store.states.originColumns.value));
	return {
		isGroup: w(() => {
			let e = r.value.length > 1;
			return e && n && (n.state.isGroup.value = !0), e;
		}),
		toggleAllSelection: (e) => {
			e.stopPropagation(), n?.store.commit("toggleAllSelection");
		},
		columnRows: r
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/filter-panel.vue_vue_type_script_lang.mjs
var Kn = v({
	name: "ElTableFilterPanel",
	components: {
		ElCheckbox: rt,
		ElCheckboxGroup: nt,
		ElScrollbar: Qe,
		ElTooltip: Ke,
		ElIcon: We,
		ArrowDown: Ue,
		ArrowUp: Ve
	},
	props: {
		placement: {
			type: String,
			default: "bottom-start"
		},
		store: { type: Object },
		column: { type: Object },
		upDataColumn: { type: Function },
		appendTo: Ge.appendTo
	},
	setup(e) {
		let t = o(), { t: n } = et(), r = Y("table-filter"), i = t?.parent;
		e.column && !i.filterPanels.value[e.column.id] && (i.filterPanels.value[e.column.id] = t);
		let a = L(null), s = L(null), c = L(0), l = w(() => e.column && e.column.filters), u = w(() => e.column && e.column.filterClassName ? `${r.b()} ${e.column.filterClassName}` : r.b()), d = w({
			get: () => (e.column?.filteredValue || [])[0],
			set: (e) => {
				f.value && (Oe(e) ? f.value.splice(0, 1) : f.value.splice(0, 1, e));
			}
		}), f = w({
			get() {
				return e.column && e.column.filteredValue || [];
			},
			set(t) {
				e.column && e.upDataColumn?.("filteredValue", t);
			}
		}), p = w(() => e.column ? e.column.filterMultiple : !0), m = (e) => e.value === d.value, h = () => {
			a.value?.onClose();
		}, g = () => {
			y(f.value), h();
		}, _ = () => {
			f.value = [], y(f.value), h();
		}, v = (e, t) => {
			d.value = e, c.value = t, Oe(e) ? y([]) : y(f.value), h();
		}, y = (t) => {
			e.store?.commit("filterChange", {
				column: e.column,
				values: t
			}), e.store?.updateAllSelected();
		}, b = () => {
			s.value?.focus(), !p.value && S(), e.column && e.upDataColumn?.("filterOpened", !0);
		}, x = () => {
			e.column && e.upDataColumn?.("filterOpened", !1);
		}, S = () => {
			if (Oe(d)) {
				c.value = 0;
				return;
			}
			let e = (l.value || []).findIndex((e) => e.value === d.value);
			c.value = e >= 0 ? e + 1 : 0;
		};
		return {
			multiple: p,
			filterClassName: u,
			filteredValue: f,
			filterValue: d,
			filters: l,
			handleConfirm: g,
			handleReset: _,
			handleSelect: v,
			isPropAbsent: Oe,
			isActive: m,
			t: n,
			ns: r,
			tooltipRef: a,
			rootRef: s,
			checkedIndex: c,
			handleShowTooltip: b,
			handleHideTooltip: x,
			handleKeydown: (e) => {
				let t = Ye(e), n = (l.value ? l.value.length : 0) + 1, i = c.value, a = !0;
				switch (t) {
					case Je.down:
					case Je.right:
						i = (i + 1) % n;
						break;
					case Je.up:
					case Je.left:
						i = (i - 1 + n) % n;
						break;
					case Je.tab:
						h(), a = !1;
						break;
					case Je.enter:
					case Je.space:
						if (i === 0) v(null, 0);
						else {
							let e = (l.value || [])[i - 1];
							e.value && v(e.value, i);
						}
						break;
					default:
						a = !1;
						break;
				}
				a && e.preventDefault(), c.value = i, s.value?.querySelector(`.${r.e("list-item")}:nth-child(${i + 1})`)?.focus();
			}
		};
	}
}), qn = ["disabled"], Jn = ["tabindex", "aria-checked"], Yn = [
	"tabindex",
	"aria-checked",
	"onClick"
], Xn = ["aria-label"];
function Zn(e, t, n, i, a, o) {
	let s = f("el-checkbox"), d = f("el-checkbox-group"), m = f("el-scrollbar"), h = f("arrow-up"), g = f("arrow-down"), _ = f("el-icon"), v = f("el-tooltip");
	return u(), V(v, {
		ref: "tooltipRef",
		offset: 0,
		placement: e.placement,
		"show-arrow": !1,
		trigger: "click",
		role: "dialog",
		teleported: "",
		effect: "light",
		pure: "",
		loop: "",
		"popper-class": e.filterClassName,
		persistent: "",
		"append-to": e.appendTo,
		onShow: e.handleShowTooltip,
		onHide: e.handleHideTooltip
	}, {
		content: I(() => [e.multiple ? (u(), B("div", {
			key: 0,
			ref: "rootRef",
			tabindex: "-1",
			class: p(e.ns.e("multiple"))
		}, [R("div", { class: p(e.ns.e("content")) }, [z(m, { "wrap-class": e.ns.e("wrap") }, {
			default: I(() => [z(d, {
				modelValue: e.filteredValue,
				"onUpdate:modelValue": t[0] ||= (t) => e.filteredValue = t,
				class: p(e.ns.e("checkbox-group"))
			}, {
				default: I(() => [(u(!0), B(F, null, S(e.filters, (e) => (u(), V(s, {
					key: e.value,
					value: e.value
				}, {
					default: I(() => [r(c(e.text), 1)]),
					_: 2
				}, 1032, ["value"]))), 128))]),
				_: 1
			}, 8, ["modelValue", "class"])]),
			_: 1
		}, 8, ["wrap-class"])], 2), R("div", { class: p(e.ns.e("bottom")) }, [R("button", {
			class: p(e.ns.is("disabled", e.filteredValue.length === 0)),
			disabled: e.filteredValue.length === 0,
			type: "button",
			onClick: t[1] ||= (...t) => e.handleConfirm && e.handleConfirm(...t)
		}, c(e.t("el.table.confirmFilter")), 11, qn), R("button", {
			type: "button",
			onClick: t[2] ||= (...t) => e.handleReset && e.handleReset(...t)
		}, c(e.t("el.table.resetFilter")), 1)], 2)], 2)) : (u(), B("ul", {
			key: 1,
			ref: "rootRef",
			tabindex: "-1",
			role: "radiogroup",
			class: p(e.ns.e("list")),
			onKeydown: t[4] ||= (...t) => e.handleKeydown && e.handleKeydown(...t)
		}, [R("li", {
			role: "radio",
			class: p([e.ns.e("list-item"), e.ns.is("active", e.isPropAbsent(e.filterValue))]),
			tabindex: e.checkedIndex === 0 ? 0 : -1,
			"aria-checked": e.isPropAbsent(e.filterValue),
			onClick: t[3] ||= (t) => e.handleSelect(null, 0)
		}, c(e.t("el.table.clearFilter")), 11, Jn), (u(!0), B(F, null, S(e.filters, (t, n) => (u(), B("li", {
			key: t.value,
			role: "radio",
			class: p([e.ns.e("list-item"), e.ns.is("active", e.isActive(t))]),
			tabindex: e.checkedIndex === n + 1 ? 0 : -1,
			"aria-checked": e.isActive(t),
			onClick: (r) => e.handleSelect(t.value, n + 1)
		}, c(t.text), 11, Yn))), 128))], 34))]),
		default: I(() => [R("button", {
			type: "button",
			class: p(`${e.ns.namespace.value}-table__column-filter-trigger`),
			"aria-label": e.t("el.table.filterLabel", { column: e.column?.label || "" })
		}, [z(_, null, {
			default: I(() => [l(e.$slots, "filter-icon", {}, () => [e.column?.filterOpened ? (u(), V(h, { key: 0 })) : (u(), V(g, { key: 1 }))])]),
			_: 3
		})], 10, Xn)]),
		_: 3
	}, 8, [
		"placement",
		"popper-class",
		"append-to",
		"onShow",
		"onHide"
	]);
}
var Qn = /* @__PURE__ */ Ze(Kn, [["render", Zn]]);
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/layout-observer.mjs
function $n(e) {
	let t = o();
	s(() => {
		r.value.addObserver(t);
	}), U(() => {
		i(r.value), a(r.value);
	}), x(() => {
		i(r.value), a(r.value);
	}), n(() => {
		r.value.removeObserver(t);
	});
	let r = w(() => {
		let t = e.layout;
		if (!t) throw Error("Can not find table layout.");
		return t;
	}), i = (t) => {
		let n = e.vnode.el?.querySelectorAll("colgroup > col") || [];
		if (!n.length) return;
		let r = t.getFlattenColumns(), i = {};
		r.forEach((e) => {
			i[e.id] = e;
		});
		for (let e = 0, t = n.length; e < t; e++) {
			let t = n[e], r = i[t.getAttribute("name")];
			r && t.setAttribute("width", r.realWidth || r.width);
		}
	}, a = (t) => {
		let n = e.vnode.el?.querySelectorAll("colgroup > col[name=gutter]") || [];
		for (let e = 0, r = n.length; e < r; e++) n[e].setAttribute("width", t.scrollY.value ? t.gutterWidth : "0");
		let r = e.vnode.el?.querySelectorAll("th.gutter") || [];
		for (let e = 0, n = r.length; e < n; e++) {
			let n = r[e];
			n.style.width = t.scrollY.value ? `${t.gutterWidth}px` : "0", n.style.display = t.scrollY.value ? "" : "none";
		}
	};
	return {
		tableLayout: r.value,
		onColumnsChange: i,
		onScrollableChange: a
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-header/event-helper.mjs
function er(e, n) {
	let r = o(), i = t($), a = (e) => {
		e.stopPropagation();
	}, s = (e, t) => {
		!t.filters && t.sortable ? g(e, t, !1) : t.filterable && !t.sortable && a(e), i?.emit("header-click", t, e);
	}, c = (e, t) => {
		i?.emit("header-contextmenu", t, e);
	}, l = L(null), u = L(!1), d = L(), f = (t, a) => {
		if (Ne && !(a.children && a.children.length > 0) && l.value && e.border && l.value.id === a.id) {
			u.value = !0;
			let o = i;
			n("set-drag-visible", !0);
			let s = (o?.vnode.el)?.getBoundingClientRect().left, c = r?.vnode?.el?.querySelector(`th.${a.id}`), f = c.getBoundingClientRect(), p = f.left - s + 30;
			Re(c, "noclick"), d.value = {
				startMouseLeft: t.clientX,
				startLeft: f.right - s,
				startColumnLeft: f.left - s,
				tableLeft: s
			};
			let m = o?.refs.resizeProxy;
			m.style.left = `${d.value.startLeft}px`, document.onselectstart = function() {
				return !1;
			}, document.ondragstart = function() {
				return !1;
			};
			let h = (e) => {
				let t = e.clientX - d.value.startMouseLeft, n = d.value.startLeft + t;
				m.style.left = `${Math.max(p, n)}px`;
			}, g = () => {
				if (u.value) {
					let { startColumnLeft: r, startLeft: i } = d.value;
					a.width = a.realWidth = Number.parseInt(m.style.left, 10) - r, o?.emit("header-dragend", a.width, i - r, a, t), requestAnimationFrame(() => {
						e.store.scheduleLayout(!1, !0);
					}), document.body.style.cursor = "", u.value = !1, l.value = null, d.value = void 0, n("set-drag-visible", !1);
				}
				document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", g), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
					Ie(c, "noclick");
				}, 0);
			};
			document.addEventListener("mousemove", h), document.addEventListener("mouseup", g);
		}
	}, p = (t, n) => {
		if (!e.border || n.children && n.children.length > 0) return;
		let r = t.target, i = Ae(r) ? r.closest("th") : null;
		if (!i) return;
		let a = Le(i, "is-sortable");
		if (a) {
			let e = u.value ? "col-resize" : "";
			i.style.cursor = e;
			let t = i.querySelector(".caret-wrapper");
			t && (t.style.cursor = e);
		}
		if (!n.resizable || u.value) {
			l.value = null;
			return;
		}
		let o = i.getBoundingClientRect(), s = i.parentNode?.lastElementChild === i, c = e.allowDragLastColumn || !s, d = o.width > 12 && o.right - t.clientX < 8 && c, f = d ? "col-resize" : "";
		document.body.style.cursor = f, l.value = d ? n : null, a && (i.style.cursor = f);
	}, m = () => {
		!Ne || u.value || (document.body.style.cursor = "");
	}, h = ({ order: e, sortOrders: t }) => {
		if (e === "") return t[0];
		let n = t.indexOf(e || null);
		return t[n > t.length - 2 ? 0 : n + 1];
	}, g = (t, n, r) => {
		t.stopPropagation();
		let a = n.order === r ? null : r || h(n), o = t.target?.closest("th");
		if (o && Le(o, "noclick")) {
			Ie(o, "noclick");
			return;
		}
		if (!n.sortable) return;
		let s = t.currentTarget;
		if (["ascending", "descending"].some((e) => Le(s, e) && !n.sortOrders.includes(e))) return;
		let c = e.store.states, l = c.sortProp.value, u, d = c.sortingColumn.value;
		(d !== n || d === n && yt(d.order)) && (d && (d.order = null), c.sortingColumn.value = n, l = n.property ?? null), u = a ? n.order = a : n.order = null, c.sortProp.value = l, c.sortOrder.value = u, i?.store.commit("changeSortCondition");
	};
	return {
		handleHeaderClick: s,
		handleHeaderContextMenu: c,
		handleMouseDown: f,
		handleMouseMove: p,
		handleMouseOut: m,
		handleSortClick: g,
		handleFilterClick: a
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-header/style.helper.mjs
function tr(e) {
	let n = t($), r = Y("table");
	return {
		getHeaderRowStyle: (e) => {
			let t = n?.props.headerRowStyle;
			return a(t) ? t.call(null, { rowIndex: e }) : t;
		},
		getHeaderRowClass: (e) => {
			let t = [], r = n?.props.headerRowClassName;
			return N(r) ? t.push(r) : a(r) && t.push(r.call(null, { rowIndex: e })), t.join(" ");
		},
		getHeaderCellStyle: (t, r, i, o) => {
			let s = n?.props.headerCellStyle ?? {};
			a(s) && (s = s.call(null, {
				rowIndex: t,
				columnIndex: r,
				row: i,
				column: o
			}));
			let c = Tn(r, o.fixed, e.store, i);
			return En(c, "left"), En(c, "right"), Object.assign({}, s, c);
		},
		getHeaderCellClass: (t, i, o, s) => {
			let c = Cn(r.b(), i, s.fixed, e.store, o), l = [
				s.id,
				s.order,
				s.headerAlign,
				s.className,
				s.labelClassName,
				...c
			];
			s.children || l.push("is-leaf"), s.sortable && l.push("is-sortable");
			let u = n?.props.headerCellClassName;
			return N(u) ? l.push(u) : a(u) && l.push(u.call(null, {
				rowIndex: t,
				columnIndex: i,
				row: o,
				column: s
			})), l.push(r.e("cell")), l.filter((e) => !!e).join(" ");
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-header/index.mjs
var nr = v({
	name: "ElTableHeader",
	components: { ElCheckbox: rt },
	props: {
		fixed: {
			type: String,
			default: ""
		},
		store: {
			required: !0,
			type: Object
		},
		border: Boolean,
		defaultSort: {
			type: Object,
			default: () => ({
				prop: "",
				order: ""
			})
		},
		appendFilterPanelTo: { type: String },
		allowDragLastColumn: { type: Boolean }
	},
	setup(n, { emit: r }) {
		let i = o(), a = t($), s = Y("table"), c = L({}), { onColumnsChange: l, onScrollableChange: u } = $n(a), f = a?.props.tableLayout === "auto", p = O(/* @__PURE__ */ new Map()), h = L(), g, _ = () => {
			g = setTimeout(() => {
				p.size > 0 && (p.forEach((e, t) => {
					let n = h.value.querySelector(`.${t.replace(/\s/g, ".")}`);
					n && (e.width = n.getBoundingClientRect().width || e.width);
				}), p.clear());
			});
		};
		e(p, _), d(() => {
			g &&= (clearTimeout(g), void 0);
		}), U(async () => {
			await m(), await m();
			let { prop: e, order: t } = n.defaultSort;
			a?.store.commit("sort", {
				prop: e,
				order: t,
				init: !0
			}), _();
		});
		let { handleHeaderClick: v, handleHeaderContextMenu: y, handleMouseDown: b, handleMouseMove: x, handleMouseOut: S, handleSortClick: C, handleFilterClick: w } = er(n, r), { getHeaderRowStyle: T, getHeaderRowClass: E, getHeaderCellStyle: D, getHeaderCellClass: k } = tr(n), { isGroup: A, toggleAllSelection: j, columnRows: M } = Gn(n), { t: N } = et();
		return i.state = {
			onColumnsChange: l,
			onScrollableChange: u
		}, i.filterPanels = c, {
			ns: s,
			t: N,
			filterPanels: c,
			onColumnsChange: l,
			onScrollableChange: u,
			columnRows: M,
			getHeaderRowClass: E,
			getHeaderRowStyle: T,
			getHeaderCellClass: k,
			getHeaderCellStyle: D,
			handleHeaderClick: v,
			handleHeaderContextMenu: y,
			handleMouseDown: b,
			handleMouseMove: x,
			handleMouseOut: S,
			handleSortClick: C,
			handleFilterClick: w,
			isGroup: A,
			toggleAllSelection: j,
			saveIndexSelection: p,
			isTableLayoutAuto: f,
			theadRef: h,
			updateFixedColumnStyle: _
		};
	},
	render() {
		let { ns: e, t, isGroup: n, columnRows: r, getHeaderCellStyle: i, getHeaderCellClass: a, getHeaderRowClass: o, getHeaderRowStyle: s, handleHeaderClick: c, handleHeaderContextMenu: l, handleMouseDown: u, handleMouseMove: d, handleSortClick: f, handleMouseOut: p, store: m, $parent: g, saveIndexSelection: _, isTableLayoutAuto: v } = this, y = 1;
		return h("thead", {
			ref: "theadRef",
			class: e.is("group", n)
		}, r.map((e, n) => h("tr", {
			class: o(n),
			key: n,
			style: s(n)
		}, e.map((r, o) => {
			r.rowSpan > y && (y = r.rowSpan);
			let s = a(n, o, e, r);
			return v && r.fixed && _.set(s, r), h("th", {
				class: s,
				colspan: r.colSpan,
				key: `${r.id}-thead`,
				rowspan: r.rowSpan,
				scope: r.colSpan > 1 ? "colgroup" : "col",
				ariaSort: r.sortable ? r.order : void 0,
				style: i(n, o, e, r),
				onClick: (e) => {
					e.currentTarget?.classList.contains("noclick") || c(e, r);
				},
				onContextmenu: (e) => l(e, r),
				onMousedown: (e) => u(e, r),
				onMousemove: (e) => d(e, r),
				onMouseout: p
			}, [h("div", { class: ["cell", r.filteredValue && r.filteredValue.length > 0 ? "highlight" : ""] }, [
				r.renderHeader ? r.renderHeader({
					column: r,
					$index: o,
					store: m,
					_self: g
				}) : r.label,
				r.sortable && h("button", {
					type: "button",
					class: "caret-wrapper",
					"aria-label": t("el.table.sortLabel", { column: r.label || "" }),
					onClick: (e) => f(e, r)
				}, [h("i", {
					onClick: (e) => f(e, r, "ascending"),
					class: "sort-caret ascending"
				}), h("i", {
					onClick: (e) => f(e, r, "descending"),
					class: "sort-caret descending"
				})]),
				r.filterable && h(Qn, {
					store: m,
					placement: r.filterPlacement || "bottom-start",
					appendTo: g?.appendFilterPanelTo,
					column: r,
					upDataColumn: (e, t) => {
						r[e] = t;
					}
				}, { "filter-icon": () => r.renderFilterIcon ? r.renderFilterIcon({ filterOpened: r.filterOpened }) : null })
			])]);
		}))));
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-body/events-helper.mjs
function rr(e) {
	let n = t($), r = L(""), i = L(h("div")), a = (t, r, i) => {
		let a = n, o = an(t), s = null, c = a?.vnode.el?.dataset.prefix;
		o && (s = ln({ columns: e.store?.states.columns.value ?? [] }, o, c), s && a?.emit(`cell-${i}`, r, s, o, t)), a?.emit(`row-${i}`, r, s, t);
	}, o = (e, t) => {
		a(e, t, "dblclick");
	}, s = (t, n) => {
		e.store?.commit("setCurrentRow", n), a(t, n, "click");
	}, c = (e, t) => {
		a(e, t, "contextmenu");
	}, l = De((t) => {
		e.store?.commit("setHoverRow", t);
	}, 30), u = De(() => {
		e.store?.commit("setHoverRow", null);
	}, 30), d = (e) => {
		let t = window.getComputedStyle(e, null);
		return {
			left: Number.parseInt(t.paddingLeft, 10) || 0,
			right: Number.parseInt(t.paddingRight, 10) || 0,
			top: Number.parseInt(t.paddingTop, 10) || 0,
			bottom: Number.parseInt(t.paddingBottom, 10) || 0
		};
	}, f = (e, t, n) => {
		let r = t?.target?.parentNode;
		for (; e > 1 && (r = r?.nextSibling, !(!r || r.nodeName !== "TR"));) n(r, "hover-row hover-fixed-row"), e--;
	};
	return {
		handleDoubleClick: o,
		handleClick: s,
		handleContextMenu: c,
		handleMouseEnter: l,
		handleMouseLeave: u,
		handleCellMouseEnter: (t, r, i) => {
			if (!n) return;
			let a = n, o = an(t), s = a?.vnode.el?.dataset.prefix, c = null;
			if (o) {
				if (c = ln({ columns: e.store?.states.columns.value ?? [] }, o, s), !c) return;
				o.rowSpan > 1 && f(o.rowSpan, t, Re);
				let n = a.hoverState = {
					cell: o,
					column: c,
					row: r
				};
				a?.emit("cell-mouse-enter", n.row, n.column, n.cell, t);
			}
			if (!i) {
				Q?.trigger === o && Q?.();
				return;
			}
			let l = t.target.querySelector(".cell");
			if (!(Le(l, `${s}-tooltip`) && l.childNodes.length && l.textContent?.trim())) return;
			let u = document.createRange();
			u.setStart(l, 0), u.setEnd(l, l.childNodes.length);
			let { width: p, height: m } = u.getBoundingClientRect(), { width: h, height: g } = l.getBoundingClientRect(), { top: _, left: v, right: y, bottom: b } = d(l), x = v + y, S = _ + b;
			$e(p + x, h) || $e(m + S, g) || $e(l.scrollWidth, h) ? yn(i, (o?.innerText || o?.textContent) ?? "", r, c, o, a) : Q?.trigger === o && Q?.();
		},
		handleCellMouseLeave: (e) => {
			let t = an(e);
			if (!t) return;
			t.rowSpan > 1 && f(t.rowSpan, e, Ie);
			let r = n?.hoverState;
			n?.emit("cell-mouse-leave", r?.row, r?.column, r?.cell, e);
		},
		tooltipContent: r,
		tooltipTrigger: i
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-body/styles-helper.mjs
function ir(e) {
	let n = t($), r = Y("table");
	return {
		getRowStyle: (e, t) => {
			let r = n?.props.rowStyle;
			return a(r) ? r.call(null, {
				row: e,
				rowIndex: t
			}) : r || null;
		},
		getRowClass: (t, i, o) => {
			let s = [r.e("row")];
			n?.props.highlightCurrentRow && t === e.store?.states.currentRow.value && s.push("current-row"), e.stripe && o % 2 == 1 && s.push(r.em("row", "striped"));
			let c = n?.props.rowClassName;
			return N(c) ? s.push(c) : a(c) && s.push(c.call(null, {
				row: t,
				rowIndex: i
			})), s;
		},
		getCellStyle: (t, r, i, o) => {
			let s = n?.props.cellStyle, c = s ?? {};
			a(s) && (c = s.call(null, {
				rowIndex: t,
				columnIndex: r,
				row: i,
				column: o
			}));
			let l = Tn(r, e?.fixed, e.store);
			return En(l, "left"), En(l, "right"), Object.assign({}, c, l);
		},
		getCellClass: (t, i, o, s, c) => {
			let l = Cn(r.b(), i, e?.fixed, e.store, void 0, c), u = [
				s.id,
				s.align,
				s.className,
				...l
			], d = n?.props.cellClassName;
			return N(d) ? u.push(d) : a(d) && u.push(d.call(null, {
				rowIndex: t,
				columnIndex: i,
				row: o,
				column: s
			})), u.push(r.e("cell")), u.filter((e) => !!e).join(" ");
		},
		getSpan: (e, t, r, i) => {
			let o = 1, s = 1, c = n?.props.spanMethod;
			if (a(c)) {
				let n = c({
					row: e,
					column: t,
					rowIndex: r,
					columnIndex: i
				});
				y(n) ? (o = n[0], s = n[1]) : g(n) && (o = n.rowspan, s = n.colspan);
			}
			return {
				rowspan: o,
				colspan: s
			};
		},
		getColspanRealWidth: (e, t, n) => {
			if (t < 1) return e[n].realWidth;
			let r = e.map(({ realWidth: e, width: t }) => e || t).slice(n, n + t);
			return Number(r.reduce((e, t) => Number(e) + Number(t), -1));
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-body/td-wrapper.vue_vue_type_script_setup_true_lang.mjs
var ar = ["colspan", "rowspan"], or = /* @__PURE__ */ v({
	name: "TableTdWrapper",
	__name: "td-wrapper",
	props: {
		colspan: {
			type: Number,
			default: 1
		},
		rowspan: {
			type: Number,
			default: 1
		}
	},
	setup(e) {
		return (t, n) => (u(), B("td", {
			colspan: e.colspan,
			rowspan: e.rowspan
		}, [l(t.$slots, "default")], 8, ar));
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-body/render-helper.mjs
function sr(e) {
	let n = t($), r = Y("table"), { handleDoubleClick: i, handleClick: a, handleContextMenu: o, handleMouseEnter: s, handleMouseLeave: c, handleCellMouseEnter: l, handleCellMouseLeave: u, tooltipContent: d, tooltipTrigger: f } = rr(e), { getRowStyle: p, getRowClass: m, getCellStyle: g, getCellClass: _, getSpan: v, getColspanRealWidth: y } = ir(e), b = -1, x = w(() => e.store?.states.columns.value.findIndex(({ type: e }) => e === "default")), S = (e, t) => {
		let r = n?.props?.rowKey;
		return r ? Z(e, r) : t;
	}, C = (t, d, f, C = !1) => {
		let { tooltipEffect: w, tooltipOptions: E, store: D } = e, { indent: O, columns: k } = D.states, A = [], j = !0;
		return f && (A.push(r.em("row", `level-${f.level}`)), j = !!f.display), d === 0 && (b = -1), e.stripe && j && b++, A.push(...m(t, d, b)), h("tr", {
			style: [j ? null : { display: "none" }, p(t, d)],
			class: A,
			key: S(t, d),
			onDblclick: (e) => i(e, t),
			onClick: (e) => a(e, t),
			onContextmenu: (e) => o(e, t),
			onMouseenter: () => s(d),
			onMouseleave: c
		}, k.value.map((r, i) => {
			let { rowspan: a, colspan: o } = v(t, r, d, i);
			if (!a || !o) return null;
			let s = Object.assign({}, r);
			s.realWidth = y(k.value, o, i);
			let c = {
				store: D,
				_self: e.context || n,
				column: s,
				row: t,
				$index: d,
				cellIndex: i,
				expanded: C
			};
			i === x.value && f && (c.treeNode = {
				indent: f.level && f.level * O.value,
				level: f.level
			}, J(f.expanded) && (c.treeNode.expanded = f.expanded, "loading" in f && (c.treeNode.loading = f.loading), "noLazyChildren" in f && (c.treeNode.noLazyChildren = f.noLazyChildren)));
			let p = `${S(t, d)},${i}`, m = s.columnKey || s.rawColumnKey || "", b = r.showOverflowTooltip && bt({ effect: w }, E, r.showOverflowTooltip);
			return h(or, {
				style: g(d, i, t, r),
				class: _(d, i, t, r, o - 1),
				key: `${m}${p}`,
				rowspan: a,
				colspan: o,
				onMouseenter: (e) => l(e, t, b),
				onMouseleave: u
			}, { default: () => T(i, r, c) });
		}));
	}, T = (e, t, n) => t.renderCell(n);
	return {
		wrappedRowRender: (t, i) => {
			let a = e.store, { isRowExpanded: o, assertRowKey: s } = a, { treeData: c, lazyTreeNodeMap: l, childrenColumnName: u, rowKey: d } = a.states, f = a.states.columns.value;
			if (f.some(({ type: e }) => e === "expand")) {
				let e = o(t), s = C(t, i, void 0, e), c = n?.renderExpanded;
				if (!c) return console.error("[Element Error]renderExpanded is required."), s;
				let l = [[s]];
				return (n.props.preserveExpandedContent || e) && l[0].push(h("tr", {
					key: `expanded-row__${s.key}`,
					style: { display: e ? "" : "none" }
				}, [h("td", {
					colspan: f.length,
					class: `${r.e("cell")} ${r.e("expanded-cell")}`
				}, [c({
					row: t,
					$index: i,
					store: a,
					expanded: e
				})])])), l;
			} else if (Object.keys(c.value).length) {
				s();
				let e = Z(t, d.value), n = c.value[e], r = null;
				n && (r = {
					expanded: n.expanded,
					level: n.level,
					display: !0,
					noLazyChildren: void 0,
					loading: void 0
				}, J(n.lazy) && (r && J(n.loaded) && n.loaded && (r.noLazyChildren = !(n.children && n.children.length)), r.loading = n.loading));
				let a = [C(t, i, r ?? void 0)];
				if (n) {
					let r = 0, o = (e, t) => {
						e && e.length && t && e.forEach((e) => {
							let s = {
								display: t.display && t.expanded,
								level: t.level + 1,
								expanded: !1,
								noLazyChildren: !1,
								loading: !1
							}, f = Z(e, d.value);
							if (Oe(f)) throw Error("For nested data item, row-key is required.");
							n = { ...c.value[f] }, n && (s.expanded = n.expanded, n.level = n.level || s.level, n.display = !!(n.expanded && s.display), J(n.lazy) && (J(n.loaded) && n.loaded && (s.noLazyChildren = !(n.children && n.children.length)), s.loading = n.loading)), r++, a.push(C(e, i + r, s)), n && o(l.value[f] || e[u.value], n);
						});
					};
					n.display = !0, o(l.value[e] || t[u.value], n);
				}
				return a;
			} else return C(t, i, void 0);
		},
		tooltipContent: d,
		tooltipTrigger: f
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-body/index.mjs
var cr = v({
	name: "ElTableBody",
	props: {
		store: {
			required: !0,
			type: Object
		},
		stripe: Boolean,
		tooltipEffect: String,
		tooltipOptions: { type: Object },
		context: {
			default: () => ({}),
			type: Object
		},
		rowClassName: [String, Function],
		rowStyle: [Object, Function],
		fixed: {
			type: String,
			default: ""
		},
		highlight: Boolean
	},
	setup(r) {
		let i = o(), a = t($), s = Y("table"), { wrappedRowRender: c, tooltipContent: l, tooltipTrigger: u } = sr(r), { onColumnsChange: d, onScrollableChange: f } = $n(a), p = [];
		return e(r.store?.states.hoverRow, (e, t) => {
			let n = i?.vnode.el, a = Array.from(n?.children || []).filter((e) => e?.classList.contains(`${s.e("row")}`)), o = e, c = a[o]?.childNodes;
			if (c?.length) {
				let t = 0;
				Array.from(c).reduce((e, n, r) => (c[r]?.colSpan > 1 && (t = c[r]?.colSpan), n.nodeName !== "TD" && t === 0 && e.push(r), t > 0 && t--, e), []).forEach((t) => {
					for (o = e; o > 0;) {
						let e = a[o - 1]?.childNodes;
						if (e[t] && e[t].nodeName === "TD" && e[t].rowSpan > 1) {
							Re(e[t], "hover-cell"), p.push(e[t]);
							break;
						}
						o--;
					}
				});
			} else p.forEach((e) => Ie(e, "hover-cell")), p.length = 0;
			!r.store?.states.isComplex.value || !Ne || ze(() => {
				let n = a[t], r = a[e];
				n && !n.classList.contains("hover-fixed-row") && Ie(n, "hover-row"), r && Re(r, "hover-row");
			});
		}), n(() => {
			Q?.();
		}), {
			ns: s,
			onColumnsChange: d,
			onScrollableChange: f,
			wrappedRowRender: c,
			tooltipContent: l,
			tooltipTrigger: u
		};
	},
	render() {
		let { wrappedRowRender: e, store: t } = this;
		return h("tbody", { tabIndex: -1 }, [(t?.states.data.value || []).reduce((t, n) => t.concat(e(n, t.length)), [])]);
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-footer/mapState-helper.mjs
function lr() {
	let e = t($)?.store;
	return {
		leftFixedLeafCount: w(() => e?.states.fixedLeafColumnsLength.value ?? 0),
		rightFixedLeafCount: w(() => e?.states.rightFixedColumns.value.length ?? 0),
		columnsCount: w(() => e?.states.columns.value.length ?? 0),
		leftFixedCount: w(() => e?.states.fixedColumns.value.length ?? 0),
		rightFixedCount: w(() => e?.states.rightFixedColumns.value.length ?? 0),
		columns: w(() => e?.states.columns.value ?? [])
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-footer/style-helper.mjs
function ur(e) {
	let { columns: t } = lr(), n = Y("table");
	return {
		getCellClasses: (t, r) => {
			let i = t[r], a = [
				n.e("cell"),
				i.id,
				i.align,
				i.labelClassName,
				...Cn(n.b(), r, i.fixed, e.store)
			];
			return i.className && a.push(i.className), i.children || a.push(n.is("leaf")), a;
		},
		getCellStyles: (t, n) => {
			let r = Tn(n, t.fixed, e.store);
			return En(r, "left"), En(r, "right"), r;
		},
		columns: t
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-footer/index.mjs
var dr = v({
	name: "ElTableFooter",
	props: {
		fixed: {
			type: String,
			default: ""
		},
		store: {
			required: !0,
			type: Object
		},
		summaryMethod: Function,
		sumText: String,
		border: Boolean,
		defaultSort: {
			type: Object,
			default: () => ({
				prop: "",
				order: ""
			})
		}
	},
	setup(e) {
		let n = t($), r = Y("table"), { getCellClasses: i, getCellStyles: a, columns: o } = ur(e), { onScrollableChange: s, onColumnsChange: c } = $n(n);
		return {
			ns: r,
			onScrollableChange: s,
			onColumnsChange: c,
			getCellClasses: i,
			getCellStyles: a,
			columns: o
		};
	},
	render() {
		let { columns: e, getCellStyles: t, getCellClasses: n, summaryMethod: r, sumText: i } = this, a = this.store.states.data.value, o = [];
		return r ? o = r({
			columns: e,
			data: a
		}) : e.forEach((e, t) => {
			if (t === 0) {
				o[t] = i;
				return;
			}
			let n = a.map((t) => Number(t[e.property])), r = [], s = !0;
			n.forEach((e) => {
				if (!Number.isNaN(+e)) {
					s = !1;
					let t = `${e}`.split(".")[1];
					r.push(t ? t.length : 0);
				}
			});
			let c = Math.max.apply(null, r);
			s ? o[t] = "" : o[t] = n.reduce((e, t) => {
				let n = Number(t);
				return Number.isNaN(+n) ? e : Number.parseFloat((e + t).toFixed(Math.min(c, 20)));
			}, 0);
		}), h(h("tfoot", [h("tr", {}, [...e.map((r, i) => h("td", {
			key: i,
			colspan: r.colSpan,
			rowspan: r.rowSpan,
			class: n(e, i),
			style: t(r, i)
		}, [h("div", { class: ["cell", r.labelClassName] }, [o[i]])]))])]));
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table/utils-helper.mjs
function fr(e) {
	return {
		setCurrentRow: (t) => {
			e.commit("setCurrentRow", t);
		},
		getSelectionRows: () => e.getSelectionRows(),
		getHalfSelectionRows: () => e.getHalfSelectionRows(),
		toggleRowSelection: (t, n, r = !0) => {
			e.toggleRowSelection(t, n, !1, r), e.updateAllSelected();
		},
		clearSelection: () => {
			e.clearSelection();
		},
		clearFilter: (t) => {
			e.clearFilter(t);
		},
		toggleAllSelection: () => {
			e.commit("toggleAllSelection");
		},
		toggleRowExpansion: (t, n) => {
			e.toggleRowExpansionAdapter(t, n);
		},
		clearSort: () => {
			e.clearSort();
		},
		sort: (t, n) => {
			e.commit("sort", {
				prop: t,
				order: n
			});
		},
		updateKeyChildren: (t, n) => {
			e.updateKeyChildren(t, n);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table/style-helper.mjs
function pr(t, n, r, i) {
	let a = L(!1), o = L(null), s = L(!1), c = (e) => {
		s.value = e;
	}, l = L({
		width: null,
		height: null,
		headerHeight: null
	}), u = L(!1), d = {
		display: "inline-block",
		verticalAlign: "middle"
	}, f = L(), p = L(0), h = L(0), g = L(0), _ = L(0), v = L(0);
	e(() => t.height, (e) => {
		n.setHeight(e ?? null);
	}, { immediate: !0 }), e(() => t.maxHeight, (e) => {
		n.setMaxHeight(e ?? null);
	}, { immediate: !0 }), e(() => [t.currentRowKey, r.states.rowKey], ([e, t]) => {
		!H(t) || !H(e) || r.setCurrentRowKey(`${e}`);
	}, { immediate: !0 }), e(() => t.data, (e) => {
		i.store.commit("setData", e);
	}, {
		immediate: !0,
		deep: !0
	}), k(() => {
		t.expandRowKeys && r.setExpandRowKeysAdapter(t.expandRowKeys);
	});
	let y = () => {
		i.store.commit("setHoverRow", null), i.hoverState &&= null;
	}, b = (e, t) => {
		let { pixelX: n, pixelY: r } = t;
		Math.abs(n) >= Math.abs(r) && (i.refs.bodyWrapper.scrollLeft += t.pixelX / 5);
	}, x = w(() => t.height || t.maxHeight || r.states.fixedColumns.value.length > 0 || r.states.rightFixedColumns.value.length > 0), S = w(() => ({ width: n.bodyWidth.value ? `${n.bodyWidth.value}px` : "" })), C = () => {
		x.value && n.updateElsHeight(), n.updateColumnsWidth(), !(typeof window > "u") && requestAnimationFrame(O);
	};
	U(async () => {
		await m(), r.updateColumns(), A(), requestAnimationFrame(C);
		let e = i.vnode.el, n = i.refs.headerWrapper;
		t.flexible && e && e.parentElement && (e.parentElement.style.minWidth = "0"), l.value = {
			width: f.value = e.offsetWidth,
			height: e.offsetHeight,
			headerHeight: t.showHeader && n ? n.offsetHeight : null
		}, r.states.columns.value.forEach((e) => {
			e.filteredValue && e.filteredValue.length && i.store.commit("filterChange", {
				column: e,
				values: e.filteredValue,
				silent: !0
			});
		}), i.$ready = !0;
	});
	let T = (e, t) => {
		if (!e) return;
		let r = Array.from(e.classList).filter((e) => !e.startsWith("is-scrolling-"));
		r.push(n.scrollX.value ? t : "is-scrolling-none"), e.className = r.join(" ");
	}, E = (e) => {
		let { tableWrapper: t } = i.refs;
		T(t, e);
	}, D = (e) => {
		let { tableWrapper: t } = i.refs;
		return !!(t && t.classList.contains(e));
	}, O = function() {
		if (!i.refs.scrollBarRef) return;
		if (!n.scrollX.value) {
			let e = "is-scrolling-none";
			D(e) || E(e);
			return;
		}
		let e = i.refs.scrollBarRef.wrapRef;
		if (!e) return;
		let { scrollLeft: t, offsetWidth: r, scrollWidth: a } = e, { headerWrapper: o, footerWrapper: s } = i.refs;
		o && (o.scrollLeft = t), s && (s.scrollLeft = t), t >= a - r - 1 ? E("is-scrolling-right") : E(t === 0 ? "is-scrolling-left" : "is-scrolling-middle");
	}, A = () => {
		i.refs.scrollBarRef && (i.refs.scrollBarRef.wrapRef && Pe(i.refs.scrollBarRef.wrapRef, "scroll", O, { passive: !0 }), t.fit ? Fe(i.vnode.el, j) : Pe(window, "resize", j), Fe(i.refs.tableInnerWrapper, () => {
			j(), i.refs?.scrollBarRef?.update();
		}));
	}, j = () => {
		let e = i.vnode.el;
		if (!i.$ready || !e) return;
		let n = !1, { width: r, height: a, headerHeight: o } = l.value, s = f.value = e.offsetWidth;
		r !== s && (n = !0);
		let c = e.offsetHeight;
		(t.height || x.value) && a !== c && (n = !0);
		let u = t.tableLayout === "fixed" ? i.refs.headerWrapper : i.refs.tableHeaderRef?.$el;
		t.showHeader && u?.offsetHeight !== o && (n = !0), p.value = i.refs.tableWrapper?.scrollHeight || 0, g.value = u?.scrollHeight || 0, _.value = i.refs.footerWrapper?.offsetHeight || 0, v.value = i.refs.appendWrapper?.offsetHeight || 0, h.value = p.value - g.value - _.value - v.value, n && (l.value = {
			width: s,
			height: c,
			headerHeight: t.showHeader && u?.offsetHeight || 0
		}, C());
	}, M = Xe(), N = w(() => {
		let { bodyWidth: e, scrollY: t, gutterWidth: r } = n;
		return e.value ? `${e.value - (t.value ? r : 0)}px` : "";
	}), P = w(() => t.maxHeight ? "fixed" : t.tableLayout);
	return {
		isHidden: a,
		renderExpanded: o,
		setDragVisible: c,
		isGroup: u,
		handleMouseLeave: y,
		handleHeaderFooterMousewheel: b,
		tableSize: M,
		emptyBlockStyle: w(() => {
			if (t.data && t.data.length) return;
			let e = "100%";
			t.height && h.value && (e = `${h.value}px`);
			let n = f.value;
			return {
				width: n ? `${n}px` : "",
				height: e
			};
		}),
		resizeProxyVisible: s,
		bodyWidth: N,
		resizeState: l,
		doLayout: C,
		tableBodyStyles: S,
		tableLayout: P,
		scrollbarViewStyle: d,
		scrollbarStyle: w(() => t.height ? { height: "100%" } : t.maxHeight ? Number.isNaN(Number(t.maxHeight)) ? { maxHeight: `calc(${t.maxHeight} - ${g.value + _.value}px)` } : { maxHeight: `${+t.maxHeight - g.value - _.value}px` } : {})
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table/key-render-helper.mjs
function mr(e) {
	let t, r = () => {
		let n = e.vnode.el.querySelector(".hidden-columns"), r = {
			childList: !0,
			subtree: !0
		}, i = e.store.states.updateOrderFns;
		t = new MutationObserver(() => {
			i.forEach((e) => e());
		}), t.observe(n, r);
	};
	U(() => {
		r();
	}), n(() => {
		t?.disconnect();
	});
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/h-helper.mjs
function hr(e) {
	let t = e.tableLayout === "auto", n = e.columns || [];
	t && n.every(({ width: e }) => q(e)) && (n = []);
	let r = (n) => {
		let r = {
			key: `${e.tableLayout}_${n.id}`,
			style: {},
			name: void 0
		};
		return t ? r.style = { width: `${n.width}px` } : r.name = n.id, r;
	};
	return h("colgroup", {}, n.map((e) => h("col", r(e))));
}
hr.props = ["columns", "tableLayout"];
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/composables/use-scrollbar.mjs
var gr = () => {
	let e = L(), t = (t, n) => {
		let r = e.value;
		r && r.scrollTo(t, n);
	}, n = (t, n) => {
		let r = e.value;
		r && ke(n) && ["Top", "Left"].includes(t) && r[`setScroll${t}`](n);
	};
	return {
		scrollBarRef: e,
		scrollTo: t,
		setScrollTop: (e) => n("Top", e),
		setScrollLeft: (e) => n("Left", e)
	};
}, _r = ["data-prefix"], vr = {
	ref: "hiddenColumns",
	class: "hidden-columns"
}, yr = /* @__PURE__ */ v({
	name: "ElTable",
	__name: "table",
	props: $t,
	emits: [
		"select",
		"select-all",
		"selection-change",
		"cell-mouse-enter",
		"cell-mouse-leave",
		"cell-dblclick",
		"cell-contextmenu",
		"cell-click",
		"row-dblclick",
		"row-click",
		"row-contextmenu",
		"header-click",
		"header-contextmenu",
		"sort-change",
		"filter-change",
		"current-change",
		"header-dragend",
		"expand-change",
		"scroll"
	],
	setup(e, { expose: t }) {
		let n = e, { t: i } = et(), a = Y("table"), s = tt("table"), f = o();
		b($, f);
		let m = Rn(f, n);
		f.store = m;
		let h = new Hn({
			store: f.store,
			table: f,
			fit: n.fit,
			showHeader: n.showHeader
		});
		f.layout = h;
		let g = w(() => (m.states.data.value || []).length === 0), { setCurrentRow: v, getSelectionRows: y, getHalfSelectionRows: x, toggleRowSelection: S, clearSelection: C, clearFilter: T, toggleAllSelection: E, toggleRowExpansion: O, clearSort: k, sort: A, updateKeyChildren: j } = fr(m), { isHidden: M, renderExpanded: N, setDragVisible: F, isGroup: L, handleMouseLeave: U, handleHeaderFooterMousewheel: te, tableSize: ne, emptyBlockStyle: re, resizeProxyVisible: W, bodyWidth: G, resizeState: ie, doLayout: ae, tableBodyStyles: oe, tableLayout: K, scrollbarViewStyle: se, scrollbarStyle: ce } = pr(n, h, m, f), { scrollBarRef: le, scrollTo: ue, setScrollLeft: de, setScrollTop: fe } = gr(), pe = De(ae, 50), me = nn(a.namespace.value), he = f;
		f.tableId = me, f.state = {
			isGroup: L,
			resizeState: ie,
			doLayout: ae,
			debouncedUpdateLayout: pe
		};
		let ge = w(() => n.sumText ?? i("el.table.sumText")), _e = w(() => n.emptyText ?? i("el.table.emptyText")), ve = w(() => n.tooltipEffect ?? s.value?.tooltipEffect), ye = w(() => n.tooltipOptions ?? s.value?.tooltipOptions), be = w(() => Wn(m.states.originColumns.value)[0]);
		return mr(f), d(() => {
			pe.cancel();
		}), t({
			ns: a,
			layout: h,
			store: m,
			columns: be,
			handleHeaderFooterMousewheel: te,
			handleMouseLeave: U,
			tableId: me,
			tableSize: ne,
			isHidden: M,
			isEmpty: g,
			renderExpanded: N,
			resizeProxyVisible: W,
			resizeState: ie,
			isGroup: L,
			bodyWidth: G,
			tableBodyStyles: oe,
			emptyBlockStyle: re,
			debouncedUpdateLayout: pe,
			setCurrentRow: v,
			getSelectionRows: y,
			getHalfSelectionRows: x,
			toggleRowSelection: S,
			clearSelection: C,
			clearFilter: T,
			toggleAllSelection: E,
			toggleRowExpansion: O,
			clearSort: k,
			doLayout: ae,
			sort: A,
			updateKeyChildren: j,
			t: i,
			setDragVisible: F,
			context: he,
			computedSumText: ge,
			computedEmptyText: _e,
			computedTooltipEffect: ve,
			computedTooltipOptions: ye,
			tableLayout: K,
			scrollbarViewStyle: se,
			scrollbarStyle: ce,
			scrollBarRef: le,
			scrollTo: ue,
			setScrollLeft: de,
			setScrollTop: fe,
			allowDragLastColumn: n.allowDragLastColumn
		}), (t, n) => (u(), B("div", {
			ref: "tableWrapper",
			class: p([
				{
					[H(a).m("fit")]: e.fit,
					[H(a).m("striped")]: e.stripe,
					[H(a).m("border")]: e.border || H(L),
					[H(a).m("hidden")]: H(M),
					[H(a).m("group")]: H(L),
					[H(a).m("fluid-height")]: e.maxHeight,
					[H(a).m("scrollable-x")]: H(h).scrollX.value,
					[H(a).m("scrollable-y")]: H(h).scrollY.value,
					[H(a).m("enable-row-hover")]: !H(m).states.isComplex.value,
					[H(a).m("enable-row-transition")]: (H(m).states.data.value || []).length !== 0 && (H(m).states.data.value || []).length < 100,
					"has-footer": e.showSummary
				},
				H(a).m(H(ne)),
				e.className,
				H(a).b(),
				H(a).m(`layout-${H(K)}`)
			]),
			style: _(e.style),
			"data-prefix": H(a).namespace.value,
			onMouseleave: n[1] ||= (...e) => H(U) && H(U)(...e)
		}, [R("div", {
			ref: "tableInnerWrapper",
			class: p(H(a).e("inner-wrapper"))
		}, [
			R("div", vr, [l(t.$slots, "default")], 512),
			e.showHeader && H(K) === "fixed" ? ee((u(), B("div", {
				key: 0,
				ref: "headerWrapper",
				class: p(H(a).e("header-wrapper"))
			}, [R("table", {
				ref: "tableHeader",
				class: p(H(a).e("header")),
				style: _(H(oe)),
				border: "0",
				cellpadding: "0",
				cellspacing: "0"
			}, [z(H(hr), {
				columns: H(m).states.columns.value,
				"table-layout": H(K)
			}, null, 8, ["columns", "table-layout"]), z(H(nr), {
				ref: "tableHeaderRef",
				border: e.border,
				"default-sort": e.defaultSort,
				store: H(m),
				"append-filter-panel-to": e.appendFilterPanelTo,
				"allow-drag-last-column": e.allowDragLastColumn,
				onSetDragVisible: H(F)
			}, null, 8, [
				"border",
				"default-sort",
				"store",
				"append-filter-panel-to",
				"allow-drag-last-column",
				"onSetDragVisible"
			])], 6)], 2)), [[H(Qt), H(te)]]) : D("v-if", !0),
			R("div", {
				ref: "bodyWrapper",
				class: p(H(a).e("body-wrapper"))
			}, [z(H(Qe), {
				ref_key: "scrollBarRef",
				ref: le,
				"view-style": H(se),
				"wrap-style": H(ce),
				always: e.scrollbarAlwaysOn,
				tabindex: e.scrollbarTabindex,
				native: e.nativeScrollbar,
				onScroll: n[0] ||= (e) => t.$emit("scroll", e)
			}, {
				default: I(() => [
					R("table", {
						ref: "tableBody",
						class: p(H(a).e("body")),
						cellspacing: "0",
						cellpadding: "0",
						border: "0",
						style: _({
							width: H(G),
							tableLayout: H(K)
						})
					}, [
						z(H(hr), {
							columns: H(m).states.columns.value,
							"table-layout": H(K)
						}, null, 8, ["columns", "table-layout"]),
						e.showHeader && H(K) === "auto" ? (u(), V(H(nr), {
							key: 0,
							ref: "tableHeaderRef",
							class: p(H(a).e("body-header")),
							border: e.border,
							"default-sort": e.defaultSort,
							store: H(m),
							"append-filter-panel-to": e.appendFilterPanelTo,
							onSetDragVisible: H(F)
						}, null, 8, [
							"class",
							"border",
							"default-sort",
							"store",
							"append-filter-panel-to",
							"onSetDragVisible"
						])) : D("v-if", !0),
						z(H(cr), {
							context: H(he),
							highlight: e.highlightCurrentRow,
							"row-class-name": e.rowClassName,
							"tooltip-effect": ve.value,
							"tooltip-options": ye.value,
							"row-style": e.rowStyle,
							store: H(m),
							stripe: e.stripe
						}, null, 8, [
							"context",
							"highlight",
							"row-class-name",
							"tooltip-effect",
							"tooltip-options",
							"row-style",
							"store",
							"stripe"
						]),
						e.showSummary && H(K) === "auto" ? (u(), V(H(dr), {
							key: 1,
							class: p(H(a).e("body-footer")),
							border: e.border,
							"default-sort": e.defaultSort,
							store: H(m),
							"sum-text": ge.value,
							"summary-method": e.summaryMethod
						}, null, 8, [
							"class",
							"border",
							"default-sort",
							"store",
							"sum-text",
							"summary-method"
						])) : D("v-if", !0)
					], 6),
					g.value ? (u(), B("div", {
						key: 0,
						ref: "emptyBlock",
						style: _(H(re)),
						class: p(H(a).e("empty-block"))
					}, [R("span", { class: p(H(a).e("empty-text")) }, [l(t.$slots, "empty", {}, () => [r(c(_e.value), 1)])], 2)], 6)) : D("v-if", !0),
					t.$slots.append ? (u(), B("div", {
						key: 1,
						ref: "appendWrapper",
						class: p(H(a).e("append-wrapper"))
					}, [l(t.$slots, "append")], 2)) : D("v-if", !0)
				]),
				_: 3
			}, 8, [
				"view-style",
				"wrap-style",
				"always",
				"tabindex",
				"native"
			])], 2),
			e.showSummary && H(K) === "fixed" ? ee((u(), B("div", {
				key: 1,
				ref: "footerWrapper",
				class: p(H(a).e("footer-wrapper"))
			}, [R("table", {
				class: p(H(a).e("footer")),
				cellspacing: "0",
				cellpadding: "0",
				border: "0",
				style: _(H(oe))
			}, [z(H(hr), {
				columns: H(m).states.columns.value,
				"table-layout": H(K)
			}, null, 8, ["columns", "table-layout"]), z(H(dr), {
				border: e.border,
				"default-sort": e.defaultSort,
				store: H(m),
				"sum-text": ge.value,
				"summary-method": e.summaryMethod
			}, null, 8, [
				"border",
				"default-sort",
				"store",
				"sum-text",
				"summary-method"
			])], 6)], 2)), [[P, !g.value], [H(Qt), H(te)]]) : D("v-if", !0),
			e.border || H(L) ? (u(), B("div", {
				key: 2,
				class: p(H(a).e("border-left-patch"))
			}, null, 2)) : D("v-if", !0)
		], 2), ee(R("div", {
			ref: "resizeProxy",
			class: p(H(a).e("column-resize-proxy"))
		}, null, 2), [[P, H(W)]])], 46, _r));
	}
}), br = {
	type: {
		type: String,
		default: "default"
	},
	label: String,
	className: String,
	labelClassName: String,
	property: String,
	prop: String,
	width: {
		type: [String, Number],
		default: ""
	},
	minWidth: {
		type: [String, Number],
		default: ""
	},
	renderHeader: Function,
	sortable: {
		type: [Boolean, String],
		default: !1
	},
	sortMethod: Function,
	sortBy: [
		String,
		Function,
		Array
	],
	resizable: {
		type: Boolean,
		default: !0
	},
	columnKey: String,
	align: String,
	headerAlign: String,
	showOverflowTooltip: {
		type: [Boolean, Object],
		default: void 0
	},
	tooltipFormatter: Function,
	fixed: [Boolean, String],
	formatter: Function,
	selectable: Function,
	reserveSelection: Boolean,
	filterMethod: Function,
	filteredValue: Array,
	filters: Array,
	filterPlacement: String,
	filterMultiple: {
		type: Boolean,
		default: !0
	},
	filterClassName: String,
	index: [Number, Function],
	sortOrders: {
		type: Array,
		default: () => [
			"ascending",
			"descending",
			null
		],
		validator: (e) => e.every((e) => [
			"ascending",
			"descending",
			null
		].includes(e))
	}
}, xr = {
	selection: "table-column--selection",
	expand: "table__expand-column"
}, Sr = {
	default: { order: "" },
	selection: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: ""
	},
	expand: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: ""
	},
	index: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: ""
	}
}, Cr = (e) => xr[e] || "", wr = {
	selection: {
		renderHeader({ store: e }) {
			function t() {
				return e.states.data.value && e.states.data.value.length === 0;
			}
			return h(rt, {
				disabled: t(),
				size: e.states.tableSize.value,
				indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
				"onUpdate:modelValue": e.toggleAllSelection ?? void 0,
				modelValue: e.states.isAllSelected.value,
				ariaLabel: e.t("el.table.selectAllLabel")
			});
		},
		renderCell({ row: e, column: t, store: n, $index: r }) {
			return h(rt, {
				disabled: t.selectable ? !t.selectable.call(null, e, r) : !1,
				size: n.states.tableSize.value,
				onChange: () => {
					n.commit("rowSelectedChanged", e);
				},
				onClick: (e) => e.stopPropagation(),
				modelValue: n.isSelected(e),
				indeterminate: n.getRowIndeterminate(e),
				ariaLabel: n.t("el.table.selectRowLabel")
			});
		},
		sortable: !1,
		resizable: !1
	},
	index: {
		renderHeader({ column: e }) {
			return e.label || "#";
		},
		renderCell({ column: e, $index: t }) {
			let n = t + 1, r = e.index;
			return ke(r) ? n = t + r : a(r) && (n = r(t)), h("div", {}, [n]);
		},
		sortable: !1
	},
	expand: {
		renderHeader({ column: e }) {
			return e.label || "";
		},
		renderCell({ column: e, row: t, store: n, expanded: r, $index: i }) {
			let { ns: a } = n, o = [a.e("expand-icon")];
			!e.renderExpand && r && o.push(a.em("expand-icon", "expanded"));
			let s = function(e) {
				e.stopPropagation(), n.toggleRowExpansion(t);
			}, c = n.states.rowExpandable.value?.(t, i) ?? !0;
			return c || o.push(a.is("disabled")), h("button", {
				type: "button",
				disabled: !c,
				"aria-label": n.t(r ? "el.table.collapseRowLabel" : "el.table.expandRowLabel"),
				"aria-expanded": r,
				class: o,
				onClick: s
			}, { default: () => e.renderExpand ? [e.renderExpand({
				expanded: r,
				expandable: c
			})] : [h(We, null, { default: () => [h(He)] })] });
		},
		sortable: !1,
		resizable: !1
	}
};
function Tr({ row: e, column: t, $index: n }) {
	let r = t.property, i = r && oe(e, r).value;
	return t && t.formatter ? t.formatter(e, t, i, n) : i?.toString?.() || "";
}
function Er({ row: e, treeNode: t, store: n }, r = !1) {
	let { ns: i } = n;
	if (!t) return r ? [h("span", { class: i.e("placeholder") })] : null;
	let a = [], o = function(r) {
		r.stopPropagation(), !t.loading && n.loadOrToggle(e);
	};
	if (t.indent && a.push(h("span", {
		class: i.e("indent"),
		style: { "padding-left": `${t.indent}px` }
	})), J(t.expanded) && !t.noLazyChildren) {
		let e = [i.e("expand-icon"), t.expanded ? i.em("expand-icon", "expanded") : ""], r = He;
		t.loading && (r = Be), a.push(h("button", {
			type: "button",
			"aria-label": n.t(t.expanded ? "el.table.collapseRowLabel" : "el.table.expandRowLabel"),
			"aria-expanded": t.expanded,
			class: e,
			onClick: o
		}, { default: () => [h(We, { class: i.is("loading", t.loading) }, { default: () => [h(r)] })] }));
	} else a.push(h("span", { class: i.e("placeholder") }));
	return a;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-column/watcher-helper.mjs
function Dr(e, t) {
	return e.reduce((e, t) => (e[t] = t, e), t);
}
function Or(t, n) {
	let r = o();
	return {
		registerComplexWatchers: () => {
			let a = ["fixed"], o = {
				realWidth: "width",
				realMinWidth: "minWidth"
			}, s = Dr(a, o);
			Object.keys(s).forEach((a) => {
				let s = o[a];
				i(n, s) && e(() => n[s], (e) => {
					let n = e;
					s === "width" && a === "realWidth" && (n = fn(e)), s === "minWidth" && a === "realMinWidth" && (n = pn(e)), r.columnConfig.value[s] = n, r.columnConfig.value[a] = n;
					let i = s === "fixed";
					t.value.store.scheduleLayout(i);
				});
			});
		},
		registerNormalWatchers: () => {
			let a = [
				"label",
				"filters",
				"filterMultiple",
				"filteredValue",
				"sortable",
				"index",
				"formatter",
				"className",
				"labelClassName",
				"filterClassName",
				"showOverflowTooltip",
				"tooltipFormatter",
				"resizable"
			], o = ["showOverflowTooltip"], s = {
				property: "prop",
				align: "realAlign",
				headerAlign: "realHeaderAlign"
			}, c = Dr(a, s);
			Object.keys(c).forEach((t) => {
				let a = s[t];
				i(n, a) && e(() => n[a], (e) => {
					r.columnConfig.value[t] = e, (t === "filters" || t === "filterMethod") && (r.columnConfig.value.filterable = !!(r.columnConfig.value.filters || r.columnConfig.value.filterMethod));
				});
			}), o.forEach((a) => {
				i(t.value.props, a) && e(() => t.value.props[a], (e) => {
					r.columnConfig.value.type !== "selection" && q(n[a]) && (r.columnConfig.value[a] = e);
				});
			});
			let l = tt("table");
			l.value && i(l.value, "showOverflowTooltip") && e(() => l.value?.showOverflowTooltip, (e) => {
				r.columnConfig.value.type !== "selection" && (!q(n.showOverflowTooltip) || !q(t.value.props.showOverflowTooltip) || (r.columnConfig.value.showOverflowTooltip = e));
			});
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/table-column/render-helper.mjs
function kr(e, t, n) {
	let i = o(), a = L(""), s = L(!1), c = L(), u = L(), d = Y("table");
	k(() => {
		c.value = e.align ? `is-${e.align}` : null, c.value;
	}), k(() => {
		u.value = e.headerAlign ? `is-${e.headerAlign}` : c.value, u.value;
	});
	let f = w(() => {
		let e = i.vnode.vParent || i.parent;
		for (; e && !e.tableId && !e.columnId;) e = e.vnode.vParent || e.parent;
		return e;
	}), p = w(() => {
		let { store: e } = i.parent;
		if (!e) return !1;
		let { treeData: t } = e.states, n = t.value;
		return n && Object.keys(n).length > 0;
	}), m = L(fn(e.width)), g = L(pn(e.minWidth)), _ = (e) => (m.value && (e.width = m.value), g.value && (e.minWidth = g.value), !m.value && g.value && (e.width = void 0), e.minWidth ||= 80, e.realWidth = Number(q(e.width) ? e.minWidth : e.width), e), v = (e) => {
		let t = e.type, n = wr[t] || {};
		Object.keys(n).forEach((t) => {
			let r = n[t];
			t !== "className" && !q(r) && (e[t] = r);
		});
		let r = Cr(t);
		if (r) {
			let t = `${H(d.namespace)}-${r}`;
			e.className = e.className ? `${e.className} ${t}` : t;
		}
		return e;
	}, b = (e) => {
		y(e) ? e.forEach((e) => t(e)) : t(e);
		function t(e) {
			e?.type?.name === "ElTableColumn" && (e.vParent = i);
		}
	};
	return {
		columnId: a,
		realAlign: c,
		isSubColumn: s,
		realHeaderAlign: u,
		columnOrTableParent: f,
		setColumnWidth: _,
		setColumnForcedProps: v,
		setColumnRenders: (a) => {
			e.renderHeader ? Me("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : a.type !== "selection" && (a.renderHeader = (e) => {
				if (i.columnConfig.value.label, t.header) {
					let n = t.header(e);
					if (Dn(n)) return h(F, n);
				}
				return r(a.label);
			}), t["filter-icon"] && (a.renderFilterIcon = (e) => l(t, "filter-icon", e)), t.expand && (a.renderExpand = (e) => l(t, "expand", e));
			let o = a.renderCell;
			return a.type === "expand" ? (a.renderCell = (e) => h("div", { class: "cell" }, [o(e)]), n.value.renderExpanded = (e) => t.default ? t.default(e) : t.default) : (o ||= Tr, a.renderCell = (e) => {
				let r = null;
				if (t.default) {
					let n = t.default(e);
					r = n.some((e) => e.type !== A) ? n : o(e);
				} else r = o(e);
				let { columns: i } = n.value.store.states, s = i.value.findIndex((e) => e.type === "default"), c = Er(e, p.value && e.cellIndex === s), l = {
					class: "cell",
					style: {}
				};
				return a.showOverflowTooltip && (l.class = `${l.class} ${H(d.namespace)}-tooltip`, l.style = { width: `${(e.column.realWidth || Number(e.column.width)) - 1}px` }), b(r), h("div", l, [c, r]);
			}), a;
		},
		getPropsData: (...t) => t.reduce((t, n) => (y(n) && n.forEach((n) => {
			t[n] = e[n];
		}), t), {}),
		getColumnElIndex: (e, t) => Array.prototype.indexOf.call(e, t),
		updateColumnOrder: () => {
			n.value.store.commit("updateColumnOrder", i.columnConfig.value);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/table/src/tableColumn.mjs
var Ar = /* @__PURE__ */ v({
	name: "ElTableColumn",
	__name: "index",
	props: br,
	setup(e) {
		let t = e, n = C(), r = o(), i = tt("table"), a = L({}), c = w(() => {
			let e = r.parent;
			for (; e && !e.tableId;) e = e.parent;
			return e;
		}), { registerNormalWatchers: l, registerComplexWatchers: f } = Or(c, t), { columnId: p, isSubColumn: m, realHeaderAlign: g, columnOrTableParent: _, setColumnWidth: v, setColumnForcedProps: b, setColumnRenders: x, getPropsData: S, getColumnElIndex: T, realAlign: E, updateColumnOrder: D } = kr(t, n, c), O = _.value;
		p.value = rn("tableId" in O ? O.tableId : O.columnId), s(() => {
			m.value = c.value !== O;
			let e = t.type || "default", n = t.sortable === "" ? !0 : t.sortable, o = e === "selection" ? !1 : q(t.showOverflowTooltip) ? O.props.showOverflowTooltip ?? i.value?.showOverflowTooltip : t.showOverflowTooltip, s = q(t.tooltipFormatter) ? O.props.tooltipFormatter ?? i.value?.tooltipFormatter : t.tooltipFormatter, u = {
				...Sr[e],
				id: p.value,
				type: e,
				property: t.prop || t.property,
				align: E,
				headerAlign: g,
				showOverflowTooltip: o,
				tooltipFormatter: s,
				filterable: t.filters || t.filterMethod,
				filteredValue: [],
				filterPlacement: "",
				filterClassName: "",
				isColumnGroup: !1,
				isSubColumn: !1,
				filterOpened: !1,
				sortable: n,
				index: t.index,
				rawColumnKey: r.vnode.key
			}, d = S([
				"columnKey",
				"label",
				"className",
				"labelClassName",
				"type",
				"renderHeader",
				"formatter",
				"fixed",
				"resizable"
			], [
				"sortMethod",
				"sortBy",
				"sortOrders"
			], ["selectable", "reserveSelection"], [
				"filterMethod",
				"filters",
				"filterMultiple",
				"filterOpened",
				"filteredValue",
				"filterPlacement",
				"filterClassName"
			]);
			d = dn(u, d), d = hn(x, v, b)(d), a.value = d, l(), f();
		}), U(() => {
			let e = _.value, t = m.value ? e.vnode.el?.children : e.refs.hiddenColumns?.children, n = () => T(t || [], r.vnode.el);
			a.value.getColumnIndex = n, n() > -1 && c.value.store.commit("insertColumn", a.value, m.value ? "columnConfig" in e && e.columnConfig.value : null, D);
		}), d(() => {
			let e = a.value.getColumnIndex;
			(e ? e() : -1) > -1 && c.value.store.commit("removeColumn", a.value, m.value ? "columnConfig" in O && O.columnConfig.value : null, D);
		}), r.columnId = p.value, r.columnConfig = a;
		let k = () => {
			try {
				let e = n.default?.({
					row: {},
					column: {},
					$index: -1
				}), t = [];
				if (y(e)) for (let n of e) n.type?.name === "ElTableColumn" || n.shapeFlag & 2 ? t.push(n) : n.type === F && y(n.children) && n.children.forEach((e) => {
					e?.patchFlag !== 1024 && !N(e?.children) && t.push(e);
				});
				return h("div", t);
			} catch {
				return h("div", []);
			}
		};
		return (e, t) => (u(), V(k));
	}
}), jr = we(yr, { TableColumn: Ar }), Mr = Ce(Ar);
//#endregion
export { jr as ElTable, jr as default, Mr as ElTableColumn };
