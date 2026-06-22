globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, C as n, D as r, E as i, F as a, I as o, L as s, M as c, N as l, O as u, P as d, R as f, S as p, T as m, _ as h, a as g, b as _, c as v, d as y, f as b, g as x, h as S, i as C, j as w, k as T, l as E, m as D, n as O, o as k, p as A, r as ee, s as j, t as M, u as N, v as te, w as P, x as F, y as I, z as L } from "./chunks/vue.runtime.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/AbortablePromise.ts
var R = class {
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
function ne() {
	return z() + z() + z() + z() + z() + z() + z() + z();
}
function z() {
	return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
}
function B(e) {
	return Number.isNaN(Number(e)) ? `${e}` : `${e}px`;
}
function V(e) {
	return Object.prototype.toString.call(e) === "[object Object]" || typeof e == "object";
}
function re(e) {
	let t = Object.prototype.toString.call(e).match(/\[object (\w+)\]/);
	return t && t.length ? t[1].toLowerCase() : "";
}
var H = (e) => e != null, ie = (e, t = "value") => {
	if (e < 0) throw Error(`${t} shouldn't be less than zero`);
}, ae = (e, t) => {
	if (e === t) return !0;
	if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
	for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
	return !0;
};
function oe(e, t, n, r) {
	return new Promise((i, a) => {
		let o = uni.createSelectorQuery?.();
		if (!o) {
			a(/* @__PURE__ */ Error("createSelectorQuery is not available"));
			return;
		}
		let s = n && le(o.in) ? o.in(n) : o, c = t ? "selectAll" : "select", l = (e) => {
			t && U(e) && e.length > 0 || !t && e ? i(e) : a(/* @__PURE__ */ Error("No nodes found"));
		};
		r ? s[c](e).fields({
			size: !0,
			node: !0
		}, l).exec() : s[c](e).boundingClientRect(l).exec();
	});
}
function se(e) {
	return e.replace(/[A-Z]/g, function(e) {
		return "-" + e;
	}).toLowerCase();
}
function ce(e) {
	return e.replace(/-(\w)/g, (e, t) => t.toUpperCase());
}
function U(e) {
	return typeof Array.isArray == "function" ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object Array]";
}
function le(e) {
	return re(e) === "function" || re(e) === "asyncfunction";
}
function ue(e) {
	return re(e) === "string";
}
function de(e) {
	return re(e) === "number";
}
function fe(e) {
	return V(e) && H(e) ? le(e.then) && le(e.catch) : !1;
}
function pe(e) {
	return typeof e == "boolean";
}
function W(e) {
	return e === void 0;
}
function G(e) {
	if (U(e)) {
		let t = e.filter(function(e) {
			return e != null && e !== "";
		}).map(function(e) {
			return G(e);
		}).join(";");
		return t ? t.endsWith(";") ? t : t + ";" : "";
	}
	if (ue(e)) return e ? e.endsWith(";") ? e : e + ";" : "";
	if (V(e)) {
		let t = Object.keys(e).filter(function(t) {
			return e[t] != null && e[t] !== "";
		}).map(function(t) {
			return [se(t), e[t]].join(":");
		}).join(";");
		return t ? t.endsWith(";") ? t : t + ";" : "";
	}
	return "";
}
var K = (e = 1e3 / 30) => new R((t) => {
	let n = setTimeout(() => {
		clearTimeout(n), t(!0);
	}, e);
});
function me(e, t = /* @__PURE__ */ new Map()) {
	if (typeof e != "object" || !e) return e;
	if (ge(e)) return new Date(e.getTime());
	if (e instanceof RegExp) return new RegExp(e.source, e.flags);
	if (e instanceof Error) {
		let t = Error(e.message);
		return t.stack = e.stack, t;
	}
	if (t.has(e)) return t.get(e);
	let n = Array.isArray(e) ? [] : {};
	t.set(e, n);
	for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = me(e[r], t));
	return n;
}
function he(e, t) {
	return Object.keys(t).forEach((n) => {
		let r = e[n], i = t[n];
		V(r) && V(i) ? he(r, i) : e[n] = i;
	}), e;
}
var q = (e, t) => {
	let n = t.split(".");
	try {
		return n.reduce((e, t) => e?.[t], e);
	} catch {
		return;
	}
}, ge = (e) => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime());
(() => {
	let e = !1;
	return e = !0, e;
})();
function _e(e, t) {
	let n = me(e);
	return Object.keys(n).forEach((e) => t(n[e], e) && delete n[e]), n;
}
function ve() {
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
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/props.ts
var J = [Number, String], ye = (e) => ({
	type: e,
	required: !0
}), Y = (e) => ({
	type: Boolean,
	default: e
}), X = (e) => ({
	type: Number,
	default: e
}), be = (e) => ({
	type: J,
	default: e
}), Z = (e) => ({
	type: String,
	default: e
}), Q = {
	customStyle: Z(""),
	customClass: Z("")
}, xe = {
	...Q,
	name: Z(""),
	color: String,
	size: J,
	classPrefix: Z("wd-icon"),
	cssIcon: {
		type: [Boolean, String],
		default: !1
	}
}, Se = ["src"], $ = /* @__PURE__ */ D({
	name: "wd-icon",
	options: {
		virtualHost: !0,
		externalClasses: ["custom-class"],
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: xe,
	emits: ["click", "touch"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = j(() => !n.cssIcon && H(n.name) && n.name.includes("/")), a = j(() => {
			let e = { "wd-icon": !0 };
			return n.cssIcon ? (e["wd-icon--css"] = !0, typeof n.cssIcon == "string" ? e[n.cssIcon] = !0 : e[n.name] = !0) : i.value ? e["wd-icon--image"] = !0 : (e[n.classPrefix] = !0, e[`${n.classPrefix}-${n.name}`] = !0), s([e, n.customClass]);
		}), o = j(() => {
			let e = {};
			if (n.color && (e.color = n.color), n.size) {
				let t = B(n.size);
				e["font-size"] = t, (n.cssIcon || i.value) && (e.width = t, e.height = t);
			}
			return `${G(e)} ${n.customStyle}`;
		});
		function c(e) {
			r("click", e);
		}
		return (e, t) => (P(), y("div", {
			class: s(a.value),
			style: L(o.value),
			onClick: c
		}, [i.value ? (P(), y("img", {
			key: 0,
			class: "wd-icon__image",
			src: e.name
		}, null, 8, Se)) : N("", !0)], 6));
	}
}), Ce = {
	...Q,
	customSpinnerClass: Z(""),
	type: Z("circular"),
	color: String,
	size: J,
	direction: Z("vertical"),
	text: String,
	inheritColor: Boolean
}, we = {
	key: 0,
	class: "wd-loading__spinner-wraper"
}, Te = {
	key: 1,
	class: "wd-loading__spinner-wraper"
}, Ee = {
	key: 2,
	class: "wd-loading__spinner-wraper"
}, De = {
	key: 3,
	class: "wd-loading__spinner-wraper"
}, Oe = {
	key: 0,
	class: "wd-loading__text"
}, ke = /* @__PURE__ */ D({
	name: "wd-loading",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: Ce,
	setup(e, { slots: n }) {
		let a = e, c = Array.from({ length: 12 }, (e, t) => t), l = j(() => {
			let e = {};
			return H(a.color) && (e.color = a.color), a.inheritColor && (e.color = "inherit"), `${G(e)} ${a.customStyle}`;
		}), u = j(() => {
			let e = {};
			return H(a.size) && (e.height = B(a.size), e.width = B(a.size)), G(e);
		});
		return (e, a) => (P(), y("div", {
			class: s(`wd-loading wd-loading--${e.direction} ${e.customClass}`),
			style: L(l.value)
		}, [v("div", {
			class: s(`wd-loading__spinner wd-loading__spinner--${e.type} ${e.customSpinnerClass}`),
			style: L(u.value)
		}, [e.type === "circular" ? (P(), y("div", we)) : N("", !0), e.type === "spinner" ? (P(), y("div", Te, [(P(!0), y(g, null, i(o(c), (e) => (P(), y("div", {
			class: "wd-loading__spinner-dot",
			key: e
		}))), 128))])) : e.type === "dots" ? (P(), y("div", Ee, [(P(), y(g, null, i(3, (e) => v("div", {
			class: "wd-loading__spinner-dot",
			key: e
		})), 64))])) : e.type === "wave" ? (P(), y("div", De, [(P(), y(g, null, i(4, (e) => v("div", {
			class: "wd-loading__spinner-wave-bar",
			key: e
		}, [...a[0] ||= [v("div", { class: "wd-loading__spinner-wave-bar-inner" }, null, -1)]])), 64))])) : N("", !0)], 6), n.default || e.text ? (P(), y("div", Oe, [r(e.$slots, "default", {}, () => [b(t(e.text), 1)])])) : N("", !0)], 6));
	}
}), Ae = {
	...Q,
	round: {
		type: Boolean,
		default: void 0
	},
	disabled: Y(!1),
	hairline: Y(!1),
	block: Y(!1),
	type: String,
	size: String,
	icon: String,
	classPrefix: Z("wd-icon"),
	cssIcon: {
		type: [Boolean, String],
		default: !1
	},
	loading: Y(!1),
	loadingColor: String,
	openType: String,
	hoverStopPropagation: Boolean,
	lang: String,
	sessionFrom: String,
	sendMessageTitle: String,
	sendMessagePath: String,
	sendMessageImg: String,
	appParameter: String,
	showMessageCard: Boolean,
	buttonId: String,
	scope: String,
	loadingProps: Object,
	hoverStartTime: X(20),
	hoverStayTime: X(70),
	text: String,
	variant: String
};
({ ...Q });
var je = Symbol("wd-config-provider"), Me = Object.freeze({
	theme: "light",
	themeVars: {},
	button: {},
	tag: {}
});
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useGlobalConfig.ts
function Ne() {
	let e = x(je, null);
	return e ? e.globalConfig : j(() => ({ ...Me }));
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-button/wd-button.vue?vue&type=script&setup=true&lang.ts
var Pe = [
	"id",
	"hover-class",
	"hover-start-time",
	"hover-stay-time",
	"open-type",
	"send-message-title",
	"send-message-path",
	"send-message-img",
	"app-parameter",
	"show-message-card",
	"session-from",
	"lang",
	"hover-stop-propagation",
	"scope"
], Fe = { class: "wd-button__content" }, Ie = {
	key: 2,
	class: "wd-button__text"
}, Le = /* @__PURE__ */ D({
	name: "wd-button",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: Ae,
	emits: [
		"click",
		"getuserinfo",
		"contact",
		"getphonenumber",
		"getrealtimephonenumber",
		"error",
		"launchapp",
		"opensetting",
		"chooseavatar",
		"agreeprivacyauthorization"
	],
	setup(e, { emit: n, slots: i }) {
		let a = T(), o = e, c = Ne(), l = j(() => o.size || c.value.button?.size || "medium"), u = j(() => o.variant || c.value.button?.variant || "base"), d = j(() => o.type || c.value.button?.type || "primary"), p = j(() => W(o.round) ? W(c.value.button?.round) ? !1 : c.value.button?.round : o.round), m = n, g = j(() => {
			let e = H(o.loadingProps) ? _e(o.loadingProps, W) : {};
			return e.customSpinnerClass = `${H(e.customSpinnerClass) ? e.customSpinnerClass : ""} wd-button__loading`, e.inheritColor = H(e.inheritColor) ? e.inheritColor : !0, e;
		}), _ = j(() => o.disabled || o.loading ? void 0 : o.openType), x = j(() => !a.default && !o.text && !!(o.icon || o.cssIcon));
		function S(e) {
			!o.disabled && !o.loading && m("click", e);
		}
		function C(e) {
			o.scope === "phoneNumber" ? O(e) : o.scope === "userInfo" && w(e);
		}
		function w(e) {
			m("getuserinfo", e);
		}
		function D(e) {
			m("contact", e);
		}
		function O(e) {
			m("getphonenumber", e);
		}
		function k(e) {
			m("getrealtimephonenumber", e);
		}
		function A(e) {
			m("error", e);
		}
		function ee(e) {
			m("launchapp", e);
		}
		function M(e) {
			m("opensetting", e);
		}
		function te(e) {
			m("chooseavatar", e);
		}
		function F(e) {
			m("agreeprivacyauthorization", e);
		}
		return (e, n) => (P(), y("button", {
			id: e.buttonId,
			"hover-class": `${e.disabled || e.loading ? "" : "wd-button--active"}`,
			style: L(e.customStyle),
			class: s([
				"wd-button",
				"is-" + d.value,
				"is-" + l.value,
				x.value ? "is-icon" : "",
				p.value ? "is-round" : "",
				e.hairline ? "is-hairline" : "",
				u.value === "base" ? "" : "is-" + u.value,
				e.disabled ? "is-disabled" : "",
				e.block ? "is-block" : "",
				e.loading ? "is-loading" : "",
				e.customClass
			]),
			"hover-start-time": e.hoverStartTime,
			"hover-stay-time": e.hoverStayTime,
			"open-type": _.value,
			"send-message-title": e.sendMessageTitle,
			"send-message-path": e.sendMessagePath,
			"send-message-img": e.sendMessageImg,
			"app-parameter": e.appParameter,
			"show-message-card": e.showMessageCard,
			"session-from": e.sessionFrom,
			lang: e.lang,
			"hover-stop-propagation": e.hoverStopPropagation,
			scope: e.scope,
			onClick: S,
			"on:getAuthorize": C,
			onGetuserinfo: w,
			onContact: D,
			onGetphonenumber: O,
			onGetrealtimephonenumber: k,
			onError: A,
			onLaunchapp: ee,
			onOpensetting: M,
			onChooseavatar: te,
			onAgreeprivacyauthorization: F
		}, [v("div", Fe, [e.loading ? (P(), E(ke, f(h({ key: 0 }, g.value)), null, 16)) : e.icon || e.cssIcon ? (P(), E($, {
			key: 1,
			"custom-class": "wd-button__icon",
			name: e.icon,
			"class-prefix": e.classPrefix,
			"css-icon": e.cssIcon
		}, null, 8, [
			"name",
			"class-prefix",
			"css-icon"
		])) : N("", !0), i.default || e.text ? (P(), y("div", Ie, [r(e.$slots, "default", {}, () => [b(t(e.text), 1)])])) : N("", !0)])], 46, Pe));
	}
}), Re = {
	...Q,
	title: String,
	type: String,
	customTitleClass: Z(""),
	customContentClass: Z(""),
	customFooterClass: Z("")
}, ze = {
	key: 0,
	class: "wd-card__title-text"
}, Be = /* @__PURE__ */ D({
	name: "wd-card",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: Re,
	setup(e, { slots: n }) {
		return (e, i) => (P(), y("div", {
			class: s(`wd-card ${e.type ? `wd-card--${e.type}` : ""} ${e.customClass}`),
			style: L(e.customStyle)
		}, [
			e.title || n.title ? (P(), y("div", {
				key: 0,
				class: s(`wd-card__title ${e.customTitleClass}`)
			}, [r(e.$slots, "title", {}, () => [e.title ? (P(), y("span", ze, t(e.title), 1)) : N("", !0)])], 2)) : N("", !0),
			v("div", { class: s(`wd-card__content ${e.customContentClass}`) }, [r(e.$slots, "default")], 2),
			n.footer ? (P(), y("div", {
				key: 1,
				class: s(`wd-card__footer ${e.customFooterClass}`)
			}, [r(e.$slots, "footer")], 2)) : N("", !0)
		], 6));
	}
}), Ve = {
	calendar: {
		placeholder: "请选择",
		title: "选择日期",
		day: "日",
		week: "周",
		month: "月",
		confirm: "确定",
		startTime: "开始时间",
		endTime: "结束时间",
		to: "至",
		timeFormat: "YY年MM月DD日 HH:mm:ss",
		dateFormat: "YYYY年MM月DD日",
		weekFormat: (e, t) => `${e} 第 ${t} 周`,
		startWeek: "开始周",
		endWeek: "结束周",
		startMonth: "开始月",
		endMonth: "结束月",
		monthFormat: "YYYY年MM月"
	},
	calendarView: {
		startTime: "开始",
		endTime: "结束",
		weeks: {
			sun: "日",
			mon: "一",
			tue: "二",
			wed: "三",
			thu: "四",
			fri: "五",
			sat: "六"
		},
		rangePrompt: (e) => `选择天数不能超过${e}天`,
		rangePromptWeek: (e) => `选择周数不能超过${e}周`,
		rangePromptMonth: (e) => `选择月份不能超过${e}个月`,
		monthTitle: "YYYY年M月",
		yearTitle: "YYYY年",
		month: "M月",
		hour: (e) => `${e}时`,
		minute: (e) => `${e}分`,
		second: (e) => `${e}秒`
	},
	collapse: {
		expand: "展开",
		retract: "收起"
	},
	cascader: {
		title: "请选择",
		placeholder: "请选择",
		select: "请选择",
		confirm: "确认"
	},
	datetimePicker: {
		start: "开始时间",
		end: "结束时间",
		to: "至",
		placeholder: "请选择",
		confirm: "完成",
		cancel: "取消"
	},
	loadmore: {
		loading: "正在努力加载中...",
		finished: "已加载完毕",
		error: "加载失败",
		retry: "点击重试"
	},
	dialog: {
		inputPlaceholder: "请输入",
		confirm: "确定",
		cancel: "取消",
		inputNoValidate: "输入的数据不合法"
	},
	numberKeyboard: { confirm: "完成" },
	pagination: {
		prev: "上一页",
		next: "下一页",
		page: (e) => `当前页：${e}`,
		total: (e) => `当前数据：${e}条`,
		size: (e) => `分页大小：${e}`
	},
	picker: {
		cancel: "取消",
		done: "完成",
		placeholder: "请选择"
	},
	imgCropper: {
		confirm: "完成",
		cancel: "取消"
	},
	search: {
		search: "搜索",
		cancel: "取消"
	},
	steps: {
		wait: "未开始",
		finished: "已完成",
		process: "进行中",
		failed: "失败"
	},
	tabs: { all: "全部" },
	upload: { error: "上传失败" },
	input: { placeholder: "请输入..." },
	selectPicker: {
		title: "请选择",
		placeholder: "请选择",
		select: "请选择",
		confirm: "确认",
		filterPlaceholder: "搜索"
	},
	tag: {
		placeholder: "请输入",
		add: "新增标签"
	},
	textarea: { placeholder: "请输入..." },
	tableCol: { indexLabel: "序号" },
	tour: {
		prev: "上一步",
		next: "下一步",
		finish: "完成",
		skip: "跳过"
	},
	signature: {
		confirmText: "确认",
		clearText: "清空",
		revokeText: "撤销",
		restoreText: "恢复"
	},
	slideVerify: {
		text: "向右滑动验证",
		successText: "验证通过"
	}
}, He = d("zh-CN"), Ue = l({ "zh-CN": Ve }), We = {
	messages() {
		return Ue[He.value];
	},
	use(e, t) {
		He.value = e, t && this.add({ [e]: t });
	},
	add(e = {}) {
		he(Ue, e);
	}
}, Ge = (e) => {
	let t = e ? ce(e) + "." : "";
	return { translate: (e, ...n) => {
		let r = q(We.messages(), t + e);
		return le(r) ? r(...n) : H(r) ? r : `${t}${e}`;
	} };
}, Ke = {
	...Q,
	size: String,
	type: Z("default"),
	icon: Z(""),
	closable: Y(!1),
	dynamic: Y(!1),
	color: Z(""),
	bgColor: Z(""),
	round: {
		type: Boolean,
		default: void 0
	},
	mark: Y(!1),
	variant: String
}, qe = ["placeholder"], Je = /* @__PURE__ */ D({
	name: "wd-tag",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: Ke,
	emits: [
		"click",
		"close",
		"confirm"
	],
	setup(e, { emit: n, slots: i }) {
		let a = e, l = n, { translate: u } = Ge("tag"), f = Ne(), p = j(() => a.size || f.value.tag?.size || "default"), m = j(() => a.variant || f.value.tag?.variant || "dark"), h = j(() => W(a.round) ? W(f.value.tag?.round) ? !1 : f.value.tag?.round : a.round), _ = d(""), b = d(!1), x = j(() => {
			let { type: e, mark: t, customClass: n } = a, r = [];
			return e && r.push(`is-${e}`), m.value && r.push(`is-${m.value}`), p.value && r.push(`is-${p.value}`), h.value && r.push("is-round"), t && r.push("is-mark"), `wd-tag ${n} ${r.join(" ")}`;
		}), S = j(() => {
			let e = {};
			return m.value !== "plain" && m.value !== "dashed" && m.value !== "text" && a.bgColor && (e.background = a.bgColor), a.bgColor && (e["border-color"] = a.bgColor), `${G(e)}${a.customStyle}`;
		}), w = j(() => {
			let e = {};
			return a.color && (e.color = a.color), G(e);
		});
		function T(e) {
			l("click", e);
		}
		function E(e) {
			l("close", e);
		}
		function D() {
			b.value = !0, _.value = "";
		}
		function O() {
			M();
		}
		function k(e) {
			M(), l("confirm", { value: e.detail.value });
		}
		function M() {
			b.value = !1;
		}
		return (e, n) => (P(), y("div", {
			class: s(x.value),
			style: L(S.value),
			onClick: T
		}, [b.value && e.dynamic ? c((P(), y("input", {
			key: 0,
			class: "wd-tag__input",
			placeholder: o(u)("placeholder"),
			"placeholder-class": "wd-tag__placeholder",
			type: "text",
			focus: !0,
			"onUpdate:modelValue": n[0] ||= (e) => _.value = e,
			onBlur: O,
			onConfirm: k
		}, null, 40, qe)), [[ee, _.value]]) : e.dynamic ? (P(), y("div", {
			key: 1,
			class: "wd-tag__text",
			style: L(w.value),
			onClick: C(D, ["stop"])
		}, [r(e.$slots, "add", {}, () => [A($, {
			name: "plus",
			"custom-class": "wd-tag__add"
		}), v("span", null, t(o(u)("add")), 1)])], 4)) : (P(), y(g, { key: 2 }, [
			i.icon || e.icon ? r(e.$slots, "icon", { key: 0 }, () => [A($, {
				name: e.icon,
				"custom-class": "wd-tag__icon"
			}, null, 8, ["name"])]) : N("", !0),
			i.default ? (P(), y("div", {
				key: 1,
				class: "wd-tag__text",
				style: L(w.value)
			}, [r(e.$slots, "default")], 4)) : N("", !0),
			e.closable ? (P(), y("div", {
				key: 2,
				class: "wd-tag__close",
				onClick: C(E, ["stop"])
			}, [A($, {
				name: "close",
				"custom-class": "wd-tag__close-icon"
			})])) : N("", !0)
		], 64))], 6));
	}
});
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useParent.ts
function Ye(e) {
	let t = {
		parent: a(null),
		index: d(-1)
	};
	return p(() => {
		if (t.parent.value = x(e, null), t.parent.value) {
			let e = S(), { link: r, unlink: i, internalChildren: a } = t.parent.value;
			r(e), n(() => i(e)), t.index = j(() => a.indexOf(e));
		}
	}), t;
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-input/types.ts
var Xe = {
	...Q,
	customInputClass: Z(""),
	placeholder: String,
	placeholderStyle: String,
	placeholderClass: Z(""),
	cursorSpacing: X(0),
	cursor: X(-1),
	selectionStart: X(-1),
	selectionEnd: X(-1),
	adjustPosition: Y(!0),
	holdKeyboard: Y(!1),
	confirmType: Z("done"),
	confirmHold: Y(!1),
	focus: Y(!1),
	type: Z("text"),
	maxlength: {
		type: Number,
		default: -1
	},
	disabled: Y(!1),
	alwaysEmbed: Y(!1),
	alignRight: Y(!1),
	modelValue: be(""),
	showPassword: Y(!1),
	clearable: Y(!1),
	readonly: Y(!1),
	prefixIcon: String,
	suffixIcon: String,
	showWordLimit: Y(!1),
	error: Y(!1),
	clearTrigger: Z("always"),
	focusWhenClear: Y(!0),
	ignoreCompositionEvent: Y(!0),
	inputmode: Z("text"),
	enableNative: Y(!0),
	compact: Y(void 0)
}, Ze = Symbol("wd-form-item-validate");
({ ...Q });
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-input/wd-input.vue?vue&type=script&setup=true&lang.ts
var Qe = {
	key: 0,
	class: "wd-input__prefix"
}, $e = [
	"type",
	"password",
	"placeholder",
	"disabled",
	"maxlength",
	"focus",
	"confirm-type",
	"confirm-hold",
	"cursor",
	"cursor-spacing",
	"placeholder-style",
	"selection-start",
	"selection-end",
	"adjust-position",
	"hold-keyboard",
	"always-embed",
	"placeholder-class",
	"ignoreCompositionEvent",
	"inputmode",
	"enable-native"
], et = {
	key: 1,
	class: "wd-input__readonly-mask"
}, tt = {
	key: 2,
	class: "wd-input__suffix"
}, nt = {
	key: 2,
	class: "wd-input__count"
}, rt = /* @__PURE__ */ D({
	name: "wd-input",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: Xe,
	emits: [
		"update:modelValue",
		"clear",
		"blur",
		"focus",
		"input",
		"keyboardheightchange",
		"confirm",
		"clicksuffixicon",
		"clickprefixicon",
		"click"
	],
	setup(n, { emit: i, slots: a }) {
		let o = n, l = i, { translate: u } = Ge("input"), { parent: f } = Ye(Ze), p = d(!1), m = d(!1), h = d(!1), g = d(!1), _ = d(k());
		e(() => o.focus, (e) => {
			h.value = e;
		}, {
			immediate: !0,
			deep: !0
		}), e(() => o.modelValue, (e) => {
			_.value = H(e) ? String(e) : "";
		});
		let b = j(() => H(o.placeholder) ? o.placeholder : u("placeholder")), x = j(() => {
			let { disabled: e, readonly: t, clearable: n, clearTrigger: r } = o;
			return !!(n && !t && !e && _.value && (r === "always" || o.clearTrigger === "focus" && g.value));
		}), S = j(() => {
			let { disabled: e, readonly: t, maxlength: n, showWordLimit: r } = o;
			return !!(!e && !t && H(n) && n > -1 && r);
		}), C = j(() => Array.from(String(A(o.modelValue))).length), w = j(() => `wd-input ${o.error ? "is-error" : ""} ${o.disabled ? "is-disabled" : ""}  ${D.value ? "is-compact" : ""} ${o.customClass}`), T = j(() => `wd-input__placeholder  ${o.placeholderClass}`), D = j(() => H(o.compact) ? o.compact : H(f.value));
		function k() {
			let e = A(o.modelValue);
			return re(e, o.modelValue) || l("update:modelValue", e), e;
		}
		function A(e) {
			let { maxlength: t } = o;
			return H(t) && t !== -1 && String(e).length > t ? e.toString().slice(0, t) : e;
		}
		function ee() {
			p.value = !p.value;
		}
		async function M() {
			g.value = !1, _.value = "", o.focusWhenClear && (m.value = !0, h.value = !1), await K(), o.focusWhenClear && (h.value = !0, g.value = !0), l("update:modelValue", _.value), l("clear");
		}
		async function te() {
			if (await K(150), m.value) {
				m.value = !1;
				return;
			}
			g.value = !1, l("blur", { value: _.value }), await f.value?.validateByTrigger("blur");
		}
		function F({ detail: e }) {
			g.value = !0, l("focus", e);
		}
		function I({ detail: e }) {
			l("update:modelValue", _.value), l("input", e);
		}
		function R({ detail: e }) {
			l("keyboardheightchange", e);
		}
		function ne({ detail: e }) {
			l("confirm", e);
		}
		function z() {
			l("clicksuffixicon");
		}
		function B() {
			l("clickprefixicon");
		}
		function V(e) {
			l("click", e);
		}
		function re(e, t) {
			return ae(String(e), String(t));
		}
		return (e, n) => (P(), y("div", {
			class: s(w.value),
			style: L(e.customStyle),
			onClick: V
		}, [
			e.prefixIcon || a.prefix ? (P(), y("div", Qe, [e.prefixIcon && !a.prefix ? (P(), E($, {
				key: 0,
				"custom-class": "wd-input__icon",
				name: e.prefixIcon,
				onClick: B
			}, null, 8, ["name"])) : r(e.$slots, "prefix", { key: 1 })])) : N("", !0),
			c(v("input", {
				class: s([
					"wd-input__inner",
					e.prefixIcon ? "wd-input__inner--prefix" : "",
					S.value ? "wd-input__inner--count" : "",
					e.alignRight ? "is-align-right" : "",
					e.customInputClass
				]),
				type: e.type,
				password: e.showPassword && !p.value,
				"onUpdate:modelValue": n[0] ||= (e) => _.value = e,
				placeholder: b.value,
				disabled: e.disabled || e.readonly,
				maxlength: e.maxlength,
				focus: h.value,
				"confirm-type": e.confirmType,
				"confirm-hold": e.confirmHold,
				cursor: e.cursor,
				"cursor-spacing": e.cursorSpacing,
				"placeholder-style": e.placeholderStyle,
				"selection-start": e.selectionStart,
				"selection-end": e.selectionEnd,
				"adjust-position": e.adjustPosition,
				"hold-keyboard": e.holdKeyboard,
				"always-embed": e.alwaysEmbed,
				"placeholder-class": T.value,
				ignoreCompositionEvent: e.ignoreCompositionEvent,
				inputmode: e.inputmode,
				"enable-native": e.enableNative,
				onInput: I,
				onFocus: F,
				onBlur: te,
				onConfirm: ne,
				onKeyboardheightchange: R
			}, null, 42, $e), [[O, _.value]]),
			o.readonly ? (P(), y("div", et)) : N("", !0),
			x.value || e.showPassword || e.suffixIcon || S.value || a.suffix ? (P(), y("div", tt, [
				x.value ? (P(), E($, {
					key: 0,
					"custom-class": "wd-input__clear",
					name: "close-circle",
					onClick: M
				})) : N("", !0),
				e.showPassword ? (P(), E($, {
					key: 1,
					"custom-class": "wd-input__icon",
					name: p.value ? "eye" : "eye-invisible",
					onClick: ee
				}, null, 8, ["name"])) : N("", !0),
				S.value ? (P(), y("div", nt, t(C.value) + "/" + t(e.maxlength), 1)) : N("", !0),
				e.suffixIcon && !a.suffix ? (P(), E($, {
					key: 3,
					"custom-class": "wd-input__icon",
					name: e.suffixIcon,
					onClick: z
				}, null, 8, ["name"])) : r(e.$slots, "suffix", { key: 4 })
			])) : N("", !0)
		], 6));
	}
});
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/interceptor.ts
function it() {}
function at(e, { args: t = [], done: n, canceled: r, error: i }) {
	if (e) {
		let a = e.apply(null, t);
		fe(a) ? a.then((e) => {
			e ? n() : r && r();
		}).catch(i || it) : a ? n() : r && r();
	} else n();
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-switch/types.ts
var ot = {
	...Q,
	modelValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: !1
	},
	disabled: Y(!1),
	inactiveActionIcon: String,
	activeActionIcon: String,
	activeIcon: String,
	inactiveIcon: String,
	classPrefix: Z("wd-icon"),
	inactiveActionCssIcon: {
		type: [Boolean, String],
		default: !1
	},
	activeActionCssIcon: {
		type: [Boolean, String],
		default: !1
	},
	activeCssIcon: {
		type: [Boolean, String],
		default: !1
	},
	inactiveCssIcon: {
		type: [Boolean, String],
		default: !1
	},
	activeText: Z(""),
	inactiveText: Z(""),
	activeValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: !0
	},
	inactiveValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: !1
	},
	activeColor: String,
	inactiveColor: String,
	size: J,
	shape: Z("round"),
	loading: Boolean,
	loadingProps: Object,
	beforeChange: Function
}, st = {
	key: 1,
	class: "wd-switch__inner-text"
}, ct = { class: "wd-switch__action" }, lt = /* @__PURE__ */ D({
	name: "wd-switch",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: ot,
	emits: ["change", "update:modelValue"],
	setup(e, { emit: n }) {
		let r = e, i = n, a = j(() => r.modelValue === r.activeValue), o = j(() => `wd-switch ${r.customClass} ${r.disabled ? "is-disabled" : ""} ${r.loading ? "is-loading" : ""} wd-switch--${r.shape} is-${a.value ? "active" : "inactive"}`), c = j(() => {
			let e = {};
			return r.size && (e["font-size"] = B(r.size)), `${G(e)}${r.customStyle}`;
		}), l = j(() => `${G({ background: a.value ? r.activeColor : r.inactiveColor })}$`), u = j(() => a.value ? r.activeIcon : r.inactiveIcon), d = j(() => a.value ? r.activeCssIcon : r.inactiveCssIcon), p = j(() => a.value ? r.activeActionIcon : r.inactiveActionIcon), m = j(() => a.value ? r.activeActionCssIcon : r.inactiveActionCssIcon), g = j(() => {
			let e = H(r.loadingProps) ? _e(r.loadingProps, W) : {}, t = [H(e.customSpinnerClass) ? e.customSpinnerClass : "", "wd-switch__action-loading"].filter(Boolean).join(" "), n = H(e.type) ? e.type : "spinner";
			return {
				...e,
				customSpinnerClass: t,
				type: n
			};
		});
		function _() {
			if (r.disabled || r.loading) return;
			let e = a.value ? r.inactiveValue : r.activeValue;
			at(r.beforeChange, {
				args: [e],
				done: () => {
					i("update:modelValue", e), i("change", { value: e });
				}
			});
		}
		return I(() => {
			[r.activeValue, r.inactiveValue].indexOf(r.modelValue) === -1 && (i("update:modelValue", r.inactiveValue), i("change", { value: r.inactiveValue }));
		}), (e, n) => (P(), y("div", {
			class: s(o.value),
			style: L(c.value),
			onClick: _
		}, [v("div", {
			class: "wd-switch__inner",
			style: L(l.value)
		}, [u.value || d.value ? (P(), E($, {
			key: 0,
			"custom-class": "wd-switch__inner-icon",
			name: u.value,
			"class-prefix": e.classPrefix,
			"css-icon": d.value
		}, null, 8, [
			"name",
			"class-prefix",
			"css-icon"
		])) : (P(), y("span", st, t(a.value ? e.activeText : e.inactiveText), 1))], 4), v("div", ct, [e.loading ? (P(), E(ke, f(h({ key: 0 }, g.value)), null, 16)) : p.value || m.value ? (P(), E($, {
			key: 1,
			"custom-class": "wd-switch__action-icon",
			name: p.value,
			"class-prefix": e.classPrefix,
			"css-icon": m.value
		}, null, 8, [
			"name",
			"class-prefix",
			"css-icon"
		])) : N("", !0)])], 6));
	}
}), ut = {
	...Q,
	modelValue: [
		String,
		Number,
		Boolean
	],
	type: Z("circle"),
	checkedColor: String,
	uncheckedColor: String,
	disabled: Y(!1),
	readonly: Y(!1),
	placement: Z("left"),
	direction: Z("vertical"),
	allowUncheck: Y(!1)
}, dt = Symbol("wd-radio-group"), ft = {
	...Q,
	value: ye([
		String,
		Number,
		Boolean
	]),
	type: String,
	checkedColor: String,
	uncheckedColor: String,
	disabled: {
		type: Boolean,
		default: void 0
	},
	readonly: {
		type: Boolean,
		default: void 0
	},
	direction: String,
	placement: String,
	customLabelClass: String
}, pt = {
	key: 0,
	class: "wd-radio__shape"
}, mt = {
	key: 2,
	class: "wd-radio__shape"
}, ht = /* @__PURE__ */ D({
	name: "wd-radio",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: ft,
	setup(t, { slots: n }) {
		let i = t, { parent: a } = Ye(dt), o = j(() => a.value ? i.value === a.value.props.modelValue : !1), c = j(() => i.type || q(a.value, "props.type")), l = j(() => {
			let e = "";
			switch (c.value) {
				case "circle":
					e = o.value ? "check-circle-fill" : "uncheck-circle";
					break;
				case "square":
					e = o.value ? "check-square-fill" : "uncheck-square";
					break;
				case "dot":
					e = o.value ? "check-circle-radio-fill" : "uncheck-circle";
					break;
				case "button":
					e = o.value ? "check" : "";
					break;
				default: break;
			}
			return e;
		}), u = j(() => i.checkedColor || q(a.value, "props.checkedColor")), d = j(() => i.uncheckedColor || q(a.value, "props.uncheckedColor")), f = j(() => H(i.readonly) ? i.readonly : q(a.value, "props.readonly")), p = j(() => m.value ? "" : o.value && u.value ? `color: ${u.value}` : !o.value && d.value ? `color: ${d.value}` : ""), m = j(() => c.value === "button"), h = j(() => H(i.disabled) ? i.disabled : q(a.value, "props.disabled")), g = j(() => H(i.direction) ? i.direction : q(a.value, "props.direction")), _ = j(() => H(i.placement) ? i.placement : q(a.value, "props.placement"));
		e(() => i.type, (e) => {
			let t = [
				"check",
				"dot",
				"button",
				"square"
			];
			(!e || t.indexOf(e) === -1) && console.error(`type must be one of ${t.toString()}`);
		});
		function v() {
			let { value: e } = i;
			!h.value && !f.value && a.value && H(e) && (a.value.props.allowUncheck && o.value ? a.value.updateValue(null) : a.value.updateValue(e));
		}
		return (e, t) => (P(), y("div", {
			class: s(`wd-radio wd-radio--${_.value}  ${m.value ? "is-button" : "wd-radio--" + g.value} ${o.value ? "is-checked" : ""} ${h.value ? "is-disabled" : ""} ${e.customClass}`),
			style: L(e.customStyle),
			onClick: v
		}, [n.default ? (P(), y("div", {
			key: 0,
			class: s(`wd-radio__label ${e.customLabelClass || ""}`)
		}, [r(e.$slots, "default")], 2)) : N("", !0), m.value ? r(e.$slots, "icon", {
			key: 1,
			isChecked: o.value
		}, () => [o.value ? (P(), y("div", pt, [A($, {
			"custom-class": "wd-radio__icon",
			"custom-style": p.value,
			name: l.value
		}, null, 8, ["custom-style", "name"])])) : N("", !0)]) : (P(), y("div", mt, [r(e.$slots, "icon", { isChecked: o.value }, () => [A($, {
			"custom-class": "wd-radio__icon",
			"custom-style": p.value,
			name: l.value
		}, null, 8, ["custom-style", "name"])])]))], 6));
	}
});
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useChildren.ts
function gt(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function _t(e) {
	let t = [], n = (e) => {
		(Array.isArray(e) ? e : [e]).forEach((e) => {
			Array.isArray(e) ? n(e) : gt(e) && e.component?.subTree ? (t.push(e), n(e.component.subTree)) : gt(e) && Array.isArray(e.children) ? n(e.children) : gt(e) && t.push(e);
		});
	};
	return n(e), t;
}
var vt = (e, t) => {
	let n = e.indexOf(t);
	return n === -1 ? e.findIndex((e) => t.key !== void 0 && t.key !== null && e.type === t.type && e.key === t.key) : n;
};
function yt(e, t, n) {
	let r = e && e.subTree && e.subTree.children ? _t(e.subTree) : [];
	n.sort((e, t) => vt(r, e.vnode) - vt(r, t.vnode));
	let i = n.map((e) => e.proxy);
	t.sort((e, t) => {
		let n = (e) => {
			let t = e.$.uid;
			return i.findIndex((e) => e.$.uid === t);
		};
		return n(e) - n(t);
	});
}
function bt(e) {
	let t = l([]), n = l([]), r = S();
	return {
		children: t,
		linkChildren: (i) => {
			m(e, Object.assign({
				link: (e) => {
					e.proxy && n.indexOf(e) === -1 && (n.unshift(e), t.unshift(e.proxy), n.push(e), t.push(e.proxy), yt(r, t, n));
				},
				unlink: (e) => {
					let r = n.indexOf(e);
					t.splice(r, 1), n.splice(r, 1);
				},
				children: t,
				internalChildren: n
			}, i));
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-radio-group/wd-radio-group.vue
var xt = /* @__PURE__ */ D({
	name: "wd-radio-group",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: ut,
	emits: ["change", "update:modelValue"],
	setup(t, { emit: n }) {
		let i = t, a = n, { linkChildren: o } = bt(dt);
		o({
			props: i,
			updateValue: c
		}), e(() => i.type, (e) => {
			let t = [
				"circle",
				"dot",
				"button",
				"square"
			];
			t.indexOf(e) === -1 && console.error(`type must be one of ${t.toString()}`);
		}, {
			deep: !0,
			immediate: !0
		});
		function c(e) {
			a("update:modelValue", e), a("change", { value: e });
		}
		return (e, t) => (P(), y("div", {
			class: s(`wd-radio-group  ${e.customClass}`),
			style: L(e.customStyle)
		}, [r(e.$slots, "default")], 6));
	}
}), St = Symbol("wd-checkbox-group"), Ct = {
	...Q,
	modelValue: {
		type: Array,
		default: () => []
	},
	type: Z("circle"),
	checkedColor: String,
	uncheckedColor: String,
	disabled: Y(!1),
	readonly: Y(!1),
	min: X(0),
	max: X(0),
	size: String,
	placement: Z("left"),
	direction: Z("vertical")
}, wt = {
	...Q,
	modelValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: !1
	},
	name: {
		type: [
			String,
			Number,
			Boolean
		],
		default: ""
	},
	type: { type: String },
	checkedColor: String,
	uncheckedColor: String,
	disabled: {
		type: [Boolean, null],
		default: null
	},
	indeterminate: {
		type: Boolean,
		default: !1
	},
	readonly: {
		type: [Boolean, null],
		default: null
	},
	trueValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: !0
	},
	falseValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: !1
	},
	size: String,
	maxWidth: String,
	placement: String,
	direction: String,
	customLabelClass: String
}, Tt = {
	key: 0,
	class: "wd-checkbox__shape"
}, Et = {
	key: 2,
	class: "wd-checkbox__shape"
}, Dt = /* @__PURE__ */ D({
	name: "wd-checkbox",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: wt,
	emits: ["change", "update:modelValue"],
	setup(t, { expose: n, emit: i, slots: a }) {
		let o = t, c = i;
		n({ toggle: T });
		let { parent: l } = Ye(St), { proxy: u } = S(), d = j(() => l.value ? l.value.props.modelValue.indexOf(o.name) > -1 : o.modelValue === o.trueValue), f = j(() => o.type || q(l.value, "props.type") || "circle"), p = j(() => f.value === "button"), m = j(() => {
			if (o.indeterminate && !p.value) return "minus-circle-fill";
			let e = "";
			switch (f.value) {
				case "circle":
					e = d.value ? "check-circle-fill" : "uncheck-circle";
					break;
				case "square":
					e = d.value ? "check-square-fill" : "uncheck-square";
					break;
				case "dot":
					e = d.value ? "check-circle-radio-fill" : "uncheck-circle";
					break;
				case "button":
					e = d.value ? "check" : "";
					break;
			}
			return e;
		}), h = j(() => o.checkedColor || q(l.value, "props.checkedColor")), g = j(() => o.uncheckedColor || q(l.value, "props.uncheckedColor")), _ = j(() => {
			if (H(o.disabled)) return o.disabled;
			if (l.value) {
				let { max: e, min: t, modelValue: n, disabled: r } = l.value.props;
				if (e && n.length >= e && !d.value || t && n.length <= t && d.value || r) return !0;
			}
			return !1;
		}), v = j(() => H(o.readonly) ? o.readonly : q(l.value, "props.readonly") || !1), b = j(() => H(o.direction) ? o.direction : q(l.value, "props.direction") || "vertical"), x = j(() => H(o.placement) ? o.placement : q(l.value, "props.placement") || "left"), C = j(() => p.value ? "" : (d.value || o.indeterminate) && h.value ? `color: ${h.value}` : !d.value && g.value ? `color: ${g.value}` : "");
		e(() => o.name, () => {
			l.value && w();
		}), e(() => o.type, (e) => {
			let t = [
				"circle",
				"square",
				"button",
				"dot"
			];
			H(e) && t.indexOf(e) === -1 && console.error(`type must be one of ${t.toString()}`);
		}), I(() => {
			o.modelValue === null && !l.value && console.warn("checkbox's value must be set"), l.value && !o.name && console.warn("checkbox's name must be set when used in checkbox-group");
		});
		function w() {
			l.value && l.value.children && l.value.children.forEach((e) => {
				e.$.uid !== u.$.uid && e.name === o.name && console.error(`The checkbox's bound value: ${o.name} has been used`);
			});
		}
		function T() {
			if (!(_.value || v.value)) if (l.value) l.value.changeSelectState(o.name);
			else {
				let e = o.modelValue === o.trueValue ? o.falseValue : o.trueValue;
				c("update:modelValue", e), c("change", { value: e });
			}
		}
		return (e, t) => (P(), y("div", {
			class: s(`wd-checkbox wd-checkbox--${x.value} ${p.value ? "is-button" : "wd-checkbox--" + b.value} ${d.value ? "is-checked" : ""} ${e.indeterminate ? "is-indeterminate" : ""} ${_.value ? "is-disabled" : ""} ${e.customClass}`),
			style: L(e.customStyle),
			onClick: T
		}, [a.default ? (P(), y("div", {
			key: 0,
			class: s(`wd-checkbox__label ${e.customLabelClass || ""}`)
		}, [r(e.$slots, "default")], 2)) : N("", !0), p.value ? r(e.$slots, "icon", {
			key: 1,
			isChecked: d.value
		}, () => [d.value ? (P(), y("div", Tt, [A($, {
			"custom-class": "wd-checkbox__icon",
			"custom-style": C.value,
			name: m.value
		}, null, 8, ["custom-style", "name"])])) : N("", !0)]) : (P(), y("div", Et, [r(e.$slots, "icon", { isChecked: d.value }, () => [A($, {
			"custom-class": "wd-checkbox__icon",
			"custom-style": C.value,
			name: m.value
		}, null, 8, ["custom-style", "name"])])]))], 6));
	}
}), Ot = /* @__PURE__ */ D({
	name: "wd-checkbox-group",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: Ct,
	emits: ["change", "update:modelValue"],
	setup(t, { expose: n, emit: i }) {
		let a = t, o = i, { linkChildren: c, children: l } = bt(St);
		c({
			props: a,
			changeSelectState: u
		}), e(() => a.modelValue, (e) => {
			new Set(e).size !== e.length && console.error("checkboxGroup's bound value includes same value"), e.length < a.min && console.error("checkboxGroup's bound value's length can't be less than min"), a.max !== 0 && e.length > a.max && console.error("checkboxGroup's bound value's length can't be large than max");
		}, {
			deep: !0,
			immediate: !0
		}), e(() => a.type, (e) => {
			let t = [
				"circle",
				"square",
				"button",
				"dot"
			];
			t.indexOf(e) === -1 && console.error(`type must be one of ${t.toString()}`);
		}, {
			deep: !0,
			immediate: !0
		}), e(() => a.min, (e) => {
			ie(e, "min");
		}, {
			deep: !0,
			immediate: !0
		}), e(() => a.max, (e) => {
			ie(e, "max");
		}, {
			deep: !0,
			immediate: !0
		});
		function u(e) {
			let t = me(a.modelValue), n = t.indexOf(e);
			if (n > -1) t.splice(n, 1);
			else {
				if (a.max !== 0 && t.length >= a.max) return;
				t.push(e);
			}
			o("update:modelValue", t), o("change", { value: t });
		}
		return n({ toggleAll: (e = {}) => {
			let { modelValue: t } = a, n, r = !1;
			pe(e) ? n = e : (n = e.checked, r = e.skipDisabled || !1);
			let i = [];
			l.forEach((e) => {
				if (r && e.disabled) t.includes(e.name) && i.push(e.name);
				else {
					let r = t.includes(e.name);
					(n === void 0 ? !r : n) && i.push(e.name);
				}
			}), o("update:modelValue", i), o("change", { value: i });
		} }), (e, t) => (P(), y("div", {
			class: s(`wd-checkbox-group ${e.customClass}`),
			style: L(e.customStyle)
		}, [r(e.$slots, "default")], 6));
	}
}), kt = {
	...Q,
	num: X(5),
	modelValue: {
		type: [
			String,
			Number,
			null
		],
		default: null
	},
	readonly: Y(!1),
	size: String,
	space: J,
	color: String,
	activeColor: { type: [String, Array] },
	icon: Z("star-fill"),
	activeIcon: Z("star-fill"),
	disabled: Y(!1),
	allowHalf: Y(!1),
	clearable: Y(!1),
	block: Y(!1)
}, At = ["data-index"], jt = ["onClick"], Mt = /* @__PURE__ */ D({
	name: "wd-rate",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: kt,
	emits: ["update:modelValue", "change"],
	setup(t, { emit: n }) {
		let { proxy: r } = S(), a = t, c = n, l = d([]), u = j(() => a.color ? `background:${a.color};` : ""), f = j(() => H(a.size) ? `font-size:${B(a.size)};` : ""), p = j(() => {
			let { activeColor: e, modelValue: t, num: n } = a, r = "";
			return Array.isArray(e) ? e.length === 0 ? console.error("activeColor cannot be an empty array") : r = Number(t) <= n * .6 || !e[1] ? e[0] : e[1] : r = e, `background:${r};`;
		});
		e([() => a.num, () => a.modelValue], () => {
			h();
		}, {
			immediate: !0,
			deep: !0
		});
		let m = (e) => e !== "0";
		function h() {
			let { modelValue: e, num: t, allowHalf: n } = a;
			if (e === null || !t) return;
			if (typeof e != "number") {
				console.error("[wot ui] error(wd-rate): the value of wd-rate should be a number");
				return;
			}
			let r = [], i = Math.floor(e);
			for (let a = 0; a < t; a++) a < i ? r.push("100%") : a === i && n && e % 1 != 0 ? r.push("50%") : r.push("0");
			l.value = r;
		}
		function _(e, t) {
			let { readonly: n, disabled: r, clearable: i, allowHalf: o, modelValue: s } = a;
			if (n || r) return;
			let c = t ? e + .5 : e + 1;
			i && c === s && c === (o ? .5 : 1) && (c = 0), v(c);
		}
		function v(e) {
			c("update:modelValue", e), c("change", { value: e });
		}
		async function b(e) {
			if (a.readonly || a.disabled) return;
			let { clientX: t } = e.touches[0], n = await oe(".wd-rate__item", !0, r), i = Array.from(n).findIndex((e) => t >= e.left && t <= e.right);
			if (i !== -1) {
				let e = n[i], r = e.width, o = a.allowHalf && t - e.left < r / 2;
				(o ? i + .5 : i + 1) >= .5 && v(o ? i + .5 : i + 1);
			}
		}
		return (e, t) => (P(), y("div", {
			class: s(`wd-rate ${e.disabled ? "is-disabled" : ""} ${e.block ? "is-block" : ""} ${e.customClass}`),
			style: L(e.customStyle),
			onTouchmove: b
		}, [(P(!0), y(g, null, i(l.value, (t, n) => (P(), y("div", {
			key: n,
			"data-index": n,
			class: "wd-rate__item",
			style: L(`${o(H)(e.space) ? `margin-right: ${n == l.value.length - 1 ? 0 : o(B)(e.space)}` : ""}`)
		}, [A($, {
			"custom-class": `wd-rate__item-star ${t === "100%" ? "wd-rate__item-star--active" : ""}`,
			name: m(t) ? e.activeIcon : e.icon,
			"custom-style": `${t === "100%" ? p.value : u.value} ${f.value}`,
			onClick: (e) => _(n, !1)
		}, null, 8, [
			"custom-class",
			"name",
			"custom-style",
			"onClick"
		]), a.allowHalf ? (P(), y("div", {
			key: 0,
			class: "wd-rate__item-half",
			onClick: C((e) => _(n, !0), ["stop"])
		}, [A($, {
			"custom-class": `wd-rate__item-star ${t === "0" ? "" : "wd-rate__item-star--active"}`,
			name: m(t) ? e.activeIcon : e.icon,
			"custom-style": `${t === "0" ? u.value : p.value} ${f.value}`
		}, null, 8, [
			"custom-class",
			"name",
			"custom-style"
		])], 8, jt)) : N("", !0)], 12, At))), 128))], 38));
	}
});
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useTouch.ts
function Nt() {
	let e = d(""), t = d(0), n = d(0), r = d(0), i = d(0), a = d(0), o = d(0);
	function s(s) {
		let c = s.touches[0];
		e.value = "", t.value = 0, n.value = 0, r.value = 0, i.value = 0, a.value = c.clientX, o.value = c.clientY;
	}
	function c(s) {
		let c = s.touches[0];
		t.value = c.clientX - a.value, n.value = c.clientY - o.value, r.value = Math.abs(t.value), i.value = Math.abs(n.value), e.value = r.value > i.value ? "horizontal" : r.value < i.value ? "vertical" : "";
	}
	return {
		touchStart: s,
		touchMove: c,
		direction: e,
		deltaX: t,
		deltaY: n,
		offsetX: r,
		offsetY: i,
		startX: a,
		startY: o
	};
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-slider/types.ts
var Pt = {
	...Q,
	modelValue: {
		type: [Number, Array],
		default: 0
	},
	min: X(0),
	max: X(100),
	step: X(1),
	range: Y(!1),
	vertical: Y(!1),
	theme: Z("default"),
	disabled: Y(!1),
	showExtremeValue: Y(!1),
	popoverVisible: Z("normal"),
	marks: [Array, Object],
	activeColor: Z(""),
	inactiveColor: Z("")
}, Ft = {
	key: 0,
	class: /*@__PURE__*/ s("wd-slider__value wd-slider__value--min")
}, It = ["id"], Lt = ["id"], Rt = { class: "wd-slider__dot-popover-text" }, zt = { class: "wd-slider__dot-slider" }, Bt = { class: "wd-slider__dot-popover-text" }, Vt = { class: "wd-slider__dot-slider" }, Ht = {
	key: 1,
	class: /*@__PURE__*/ s("wd-slider__value wd-slider__value--max")
}, Ut = /* @__PURE__ */ D({
	name: "wd-slider",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: Pt,
	emits: [
		"dragstart",
		"dragmove",
		"dragend",
		"change",
		"update:modelValue"
	],
	setup(n, { expose: r, emit: a }) {
		let o = n, c = a, l = d(`wd-slider-${ne()}`), f = d(`${l.value}-track`), m = Nt(), h = d(0), _ = d(!1), { proxy: b } = S(), x = d(0), w = d(0), T = d(ie()), E = j(() => o.max - o.min), D = j(() => o.step <= 0 ? (console.warn("[wot ui] warning(wd-slider): step must be greater than 0"), 1) : o.step), O = j(() => o.range && U(T.value) ? se(T.value) : [T.value, 0]), k = j(() => H(o.marks)), ee = j(() => {
			if (!o.marks) return [];
			let e = [], t = {};
			return U(o.marks) ? e = o.marks : (e = Object.keys(o.marks).map(Number), t = o.marks), e.map((e) => ({
				val: e,
				label: H(t[e]) ? t[e] : String(e),
				position: E.value === 0 ? 0 : (e - o.min) / E.value * 100
			}));
		}), M = j(() => {
			let e = ["wd-slider"];
			return e.push(`wd-slider--theme-${o.theme}`), o.disabled && e.push("is-disabled"), o.vertical ? e.push("wd-slider--vertical") : e.push("wd-slider--horizontal"), k.value && e.push("wd-slider--marks"), o.showExtremeValue && e.push("wd-slider--with-extreme"), o.range && e.push("is-range"), o.customClass && e.push(o.customClass), e.join(" ");
		}), te = j(() => o.customStyle || ""), F = j(() => {
			let e = ["wd-slider__bar", `wd-slider__bar--${o.theme}`];
			return o.disabled && e.push("is-disabled"), e.join(" ");
		}), I = j(() => {
			let e = {};
			return o.inactiveColor && (e.background = o.inactiveColor), G(e);
		}), R = j(() => {
			let e = ["wd-slider__line", `wd-slider__line--${o.theme}`];
			return o.range || e.push("wd-slider__line--single"), o.disabled && e.push("is-disabled"), e.join(" ");
		}), z = j(() => {
			let e = {};
			if (E.value === 0) return G(e);
			let t = o.vertical ? "height" : "width", n = o.vertical ? "top" : "left";
			if (o.range) {
				let [r, i] = O.value, a = (r - o.min) / E.value * 100, s = (i - r) / E.value * 100;
				e[n] = `${a}%`, e[t] = `${s}%`;
			} else {
				let r = (T.value - o.min) / E.value * 100;
				e[n] = "0", e[t] = `${r}%`;
			}
			return o.activeColor && (e.background = o.activeColor), G(e);
		});
		e(() => o.modelValue, (e) => {
			ae(e, T.value) || (T.value = ie());
		}, { deep: !0 }), e(T, (e) => {
			c("update:modelValue", e);
		}), p(() => {
			V();
		});
		function B(e, t, n) {
			return Math.min(Math.max(e, t), n);
		}
		function V() {
			oe(`#${f.value}`, !1, b).then((e) => {
				o.vertical ? x.value = Number(e.height) : x.value = Number(e.width);
			});
		}
		function re(e) {
			return o.vertical ? Number(H(e.detail?.y) ? e.detail?.y : H(e.clientY) ? e.clientY : H(e.touches?.[0]?.clientY) ? e.touches?.[0]?.clientY : 0) : Number(H(e.detail?.x) ? e.detail?.x : H(e.clientX) ? e.clientX : H(e.touches?.[0]?.clientX) ? e.touches?.[0]?.clientX : 0);
		}
		function ie() {
			return o.range ? U(o.modelValue) ? se(o.modelValue) : [o.min, o.max] : B(o.modelValue, o.min, o.max);
		}
		function se(e) {
			if (!Array.isArray(e) || e.length < 2) return console.warn("[wot ui] warning(wd-slider): range value should be an array with at least 2 elements"), [o.min, o.max];
			let t = B(e[0], o.min, o.max), n = B(e[1], o.min, o.max);
			return t > n ? [n, t] : [t, n];
		}
		function ce(e) {
			e = B(e, o.min, o.max);
			let t = Math.round((e - o.min) / D.value);
			return parseFloat((o.min + t * D.value).toFixed(10));
		}
		function le(e) {
			let t = me(e);
			t = o.range && U(t) ? se(t).map((e) => ce(e)) : ce(t), ae(t, T.value) || (T.value = t);
		}
		function ue(e) {
			return x.value === 0 ? o.min : e / x.value * E.value + o.min;
		}
		function de(e) {
			let t = ["wd-slider__scale-item", `wd-slider__scale-item--${o.theme}`];
			return (Array.isArray(T.value) ? e >= T.value[0] && e <= T.value[1] : e <= T.value) && t.push("is-active"), o.disabled && t.push("is-disabled"), t.join(" ");
		}
		function fe(e) {
			return o.vertical ? `top: ${e}%;` : `left: ${e}%;`;
		}
		function pe(e) {
			if (!o.range) return T.value;
			let t = O.value;
			return H(t[e]) ? t[e] : t[0];
		}
		function W(e) {
			let t = o.popoverVisible;
			return t === "always" ? !0 : t === "normal" ? _.value && h.value === e : !1;
		}
		function K(e, t) {
			o.disabled || (h.value = t, _.value = !0, m.touchStart(e), w.value = me(T.value), c("dragstart", { value: T.value }));
		}
		function he(e) {
			if (o.disabled) return;
			m.touchMove(e);
			let t = (o.vertical ? m.deltaY.value : m.deltaX.value) / x.value * E.value, n = me(w.value);
			o.range && U(n) ? n[h.value] += t : n += t, le(n), c("dragmove", { value: T.value });
		}
		function q() {
			o.disabled || (_.value = !1, c("dragend", { value: T.value }), c("change", T.value));
		}
		function ge(e) {
			o.disabled || oe(`#${f.value}`, !1, b).then((t) => {
				_e(re(e) - (o.vertical ? Number(t.top) : Number(t.left)));
			});
		}
		function _e(e) {
			let t = ce(ue(e));
			if (o.range) {
				let [e, n] = O.value, r = Math.abs(t - e), i = Math.abs(t - n), a = [...T.value];
				r <= i ? a[0] = t : a[1] = t, le(a);
			} else le(t);
			c("change", T.value);
		}
		return r({ initSlider: V }), (e, n) => {
			let r = u("wd-icon");
			return P(), y("div", {
				class: s(M.value),
				style: L(te.value)
			}, [
				e.showExtremeValue ? (P(), y("div", Ft, t(e.min), 1)) : N("", !0),
				v("div", {
					id: l.value,
					class: s(F.value),
					style: L(I.value),
					onClick: C(ge, ["stop"])
				}, [v("div", {
					id: f.value,
					class: "wd-slider__track"
				}, [k.value ? (P(!0), y(g, { key: 0 }, i(ee.value, (e, n) => (P(), y("div", {
					key: n,
					class: s(de(e.val)),
					style: L(fe(e.position))
				}, [e.label ? (P(), y("div", {
					key: 0,
					class: s(`wd-slider__scale-desc ${o.theme === "capsule" ? "wd-slider__scale-desc--capsule" : "wd-slider__scale-desc--default"}`)
				}, t(e.label), 3)) : N("", !0)], 6))), 128)) : N("", !0)], 8, Lt), v("div", {
					class: s(R.value),
					style: L(z.value)
				}, [v("div", {
					class: s(`wd-slider__dot ${e.range ? "wd-slider__dot--left" : ""}`),
					onTouchstart: n[0] ||= C((e) => K(e, 0), ["stop"]),
					onTouchmove: C(he, ["stop", "prevent"]),
					onTouchend: C(q, ["stop"]),
					onTouchcancel: C(q, ["stop"])
				}, [e.popoverVisible === "never" ? N("", !0) : (P(), y("div", {
					key: 0,
					class: s(["wd-slider__dot-popover", { "is-visible": W(0) }])
				}, [v("span", Rt, t(pe(0)), 1), n[2] ||= v("div", { class: "wd-slider__dot-popover-arrow" }, null, -1)], 2)), v("div", zt, [A(r, {
					name: "multiple-horizontal",
					size: "14px",
					color: "#868a9c"
				})])], 34), e.range ? (P(), y("div", {
					key: 0,
					class: s("wd-slider__dot wd-slider__dot--right"),
					onTouchstart: n[1] ||= C((e) => K(e, 1), ["stop"]),
					onTouchmove: C(he, ["stop", "prevent"]),
					onTouchend: C(q, ["stop"]),
					onTouchcancel: C(q, ["stop"])
				}, [e.popoverVisible === "never" ? N("", !0) : (P(), y("div", {
					key: 0,
					class: s(["wd-slider__dot-popover", { "is-visible": W(1) }])
				}, [v("span", Bt, t(pe(1)), 1), n[3] ||= v("div", { class: "wd-slider__dot-popover-arrow" }, null, -1)], 2)), v("div", Vt, [A(r, {
					name: "multiple-horizontal",
					size: "14px",
					color: "#868a9c"
				})])], 32)) : N("", !0)], 6)], 14, It),
				e.showExtremeValue ? (P(), y("div", Ht, t(e.max), 1)) : N("", !0)
			], 6);
		};
	}
}), Wt = {
	...Q,
	modelValue: ye(J),
	min: X(1),
	max: X(2 ** 53 - 1),
	step: X(1),
	stepStrictly: Y(!1),
	precision: be(0),
	disabled: Y(!1),
	disableInput: Y(!1),
	disableMinus: Y(!1),
	disablePlus: Y(!1),
	withoutInput: Y(!1),
	inputWidth: J,
	allowNull: Y(!1),
	placeholder: Z(""),
	adjustPosition: Y(!0),
	beforeChange: Function,
	longPress: Y(!1),
	immediateChange: Y(!0),
	updateOnInit: Y(!0),
	inputType: Z("digit"),
	theme: Z("default"),
	round: Boolean
}, Gt = [
	"type",
	"input-mode",
	"disabled",
	"value",
	"placeholder",
	"adjust-position"
], Kt = /* @__PURE__ */ D({
	name: "wd-input-number",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: Wt,
	emits: [
		"change",
		"focus",
		"blur",
		"update:modelValue"
	],
	setup(t, { emit: n }) {
		let r = t, { parent: i } = Ye(Ze), a = n, o = d(f()), c = null, l = j(() => {
			let e = h(o.value);
			return r.disabled || e <= r.min || E(e, -r.step) < r.min;
		}), u = j(() => {
			let e = h(o.value);
			return r.disabled || e >= r.max || E(e, r.step) > r.max;
		});
		e(() => r.modelValue, (e) => {
			o.value = b(e);
		}), e([
			() => r.max,
			() => r.min,
			() => r.precision
		], () => {
			o.value = b(h(o.value));
		});
		function f() {
			if (!r.updateOnInit) return x(r.modelValue);
			let e = b(r.modelValue);
			return ae(String(e), String(r.modelValue)) || a("update:modelValue", e), e;
		}
		function p(e) {
			if (!H(e)) return 0;
			let t = e.toString(), n = t.indexOf(".");
			return n === -1 ? 0 : t.length - n - 1;
		}
		function m(e) {
			let t = Number(r.precision);
			return Math.round(e * 10 ** t) / 10 ** t;
		}
		function h(e) {
			if (r.allowNull && (!H(e) || e === "")) return NaN;
			if (!H(e) || e === "") return r.min;
			let t = String(e);
			if (t.endsWith(".") && (t = t.slice(0, -1)), t.startsWith(".") && (t = "0" + t), t.startsWith("-.") && (t = "-0" + t.substring(1)), t === "-" || t === "") return r.min;
			let n = Number(t);
			return isNaN(n) && (n = r.min), g(n);
		}
		function g(e) {
			let t = e;
			if (r.stepStrictly) {
				let e = 10 ** p(r.step);
				t = Math.round(t / r.step) * e * r.step / e;
			}
			return t = r.stepStrictly ? _(t, r.min, r.max) : Math.min(Math.max(t, r.min), r.max), H(r.precision) && (t = m(t)), t;
		}
		function _(e, t, n) {
			if (e >= t && e <= n) return e;
			let i = 10 ** p(r.step);
			if (e < t) {
				let e = m(Math.ceil(t * i / (r.step * i)) * r.step * i / i);
				return e > n ? m(Math.floor(n * i / (r.step * i)) * r.step * i / i) : e;
			}
			if (e > n) {
				let e = m(Math.floor(n * i / (r.step * i)) * r.step * i / i);
				return e < t ? m(Math.ceil(t * i / (r.step * i)) * r.step * i / i) : e;
			}
			return e;
		}
		function b(e) {
			if (r.allowNull && (!H(e) || e === "")) return "";
			let t = h(e), n = Number(r.precision);
			return H(r.precision) ? n === 0 ? Number(t.toFixed(0)) : t.toFixed(n) : t;
		}
		function x(e) {
			if (r.allowNull && (!H(e) || e === "")) return "";
			if (!H(e) || e === "") return r.min;
			let t = Number(e);
			if (isNaN(t)) return r.min;
			let n = Number(r.precision);
			return H(r.precision) ? n === 0 ? Number(t.toFixed(0)) : t.toFixed(n) : t;
		}
		function S(e) {
			if (!e) return !1;
			let t = String(e);
			return t.endsWith(".") || t.startsWith(".") || t.startsWith("-.") || t === "-" || Number(r.precision) > 0 && t.indexOf(".") === -1;
		}
		function w(e) {
			if (!e) return "";
			let t = e.replace(/[^\d.-]/g, ""), n = t.startsWith("-");
			if (t = t.replace(/-/g, ""), n && (t = "-" + t), Number(r.precision) > 0) {
				let e = t.split(".");
				e.length > 2 && (t = e[0] + "." + e.slice(1).join(""));
			} else t = t.split(".")[0];
			return t.startsWith(".") ? "0" + t : t.startsWith("-.") ? "-0" + t.substring(1) : t;
		}
		function T(e) {
			if (r.allowNull && (!H(e) || e === "")) {
				if (ae("", String(r.modelValue))) {
					o.value = "";
					return;
				}
				at(r.beforeChange, {
					args: [""],
					done: () => {
						o.value = "", a("update:modelValue", ""), a("change", { value: "" });
					}
				});
				return;
			}
			let t = h(e), n = b(e);
			if (ae(String(t), String(r.modelValue))) {
				o.value = n;
				return;
			}
			at(r.beforeChange, {
				args: [t],
				done: () => {
					o.value = n, a("update:modelValue", t), a("change", { value: t });
				}
			});
		}
		function E(e, t) {
			let n = Number(e);
			if (isNaN(n)) return g(r.min);
			let i = 10 ** Math.max(p(n), p(t));
			return g((n * i + t * i) / i);
		}
		function D(e) {
			let t = e === "add" ? r.step : -r.step;
			t < 0 && (l.value || r.disableMinus) || t > 0 && (u.value || r.disablePlus) || T(E(o.value, t));
		}
		function O(e) {
			let t = e.detail.value || "";
			o.value = t, te(() => {
				if (t === "") {
					o.value = "", r.immediateChange && r.allowNull && T("");
					return;
				}
				let e = w(t);
				if (Number(r.precision) > 0 && S(e)) {
					o.value = e;
					return;
				}
				o.value = e, r.immediateChange && T(e);
			});
		}
		function k(e) {
			let t = e.detail.value || "";
			T(t), a("blur", { value: t }), i.value?.validateByTrigger("blur");
		}
		function A(e) {
			a("focus", e.detail);
		}
		function ee(e) {
			I(), c = setTimeout(() => {
				D(e), ee(e);
			}, 250);
		}
		function M(e) {
			r.longPress && (I(), c = setTimeout(() => {
				D(e), ee(e);
			}, 600));
		}
		function F() {
			r.longPress && I();
		}
		function I() {
			c &&= (clearTimeout(c), null);
		}
		return (e, t) => (P(), y("div", {
			class: s(`wd-input-number wd-input-number--${e.theme} ${e.customClass} ${e.disabled ? "is-disabled" : ""} ${e.withoutInput ? "is-without-input" : ""} ${e.round ? "is-round" : ""}`),
			style: L(e.customStyle)
		}, [
			v("div", {
				class: s(`wd-input-number__action wd-input-number__sub ${l.value || e.disableMinus ? "is-disabled" : ""}`),
				onClick: t[0] ||= (e) => D("sub"),
				onTouchstart: t[1] ||= (e) => M("sub"),
				onTouchend: C(F, ["stop"])
			}, [...t[5] ||= [v("div", { class: "wd-input-number__action-divider" }, null, -1)]], 34),
			e.withoutInput ? N("", !0) : (P(), y("div", {
				key: 0,
				class: "wd-input-number__inner",
				onClick: t[2] ||= C(() => {}, ["stop"])
			}, [v("input", {
				class: "wd-input-number__input",
				style: L(`${e.inputWidth ? "width: " + e.inputWidth : ""}`),
				type: e.inputType,
				"input-mode": e.precision ? "decimal" : "numeric",
				disabled: e.disabled || e.disableInput,
				value: String(o.value),
				placeholder: e.placeholder,
				"adjust-position": e.adjustPosition,
				onInput: O,
				onFocus: A,
				onBlur: k
			}, null, 44, Gt)])),
			v("div", {
				class: s(`wd-input-number__action wd-input-number__add ${u.value || e.disablePlus ? "is-disabled" : ""}`),
				onClick: t[3] ||= (e) => D("add"),
				onTouchstart: t[4] ||= (e) => M("add"),
				onTouchend: C(F, ["stop"])
			}, [...t[6] ||= [v("div", { class: "wd-input-number__action-divider" }, null, -1)]], 34)
		], 6));
	}
}), qt = Symbol("wd-cell-group"), Jt = {
	...Q,
	title: String,
	value: String,
	border: Y(!1),
	insert: Y(!1),
	center: Y(!1),
	size: String,
	titleWidth: J,
	layout: String,
	valueAlign: String
};
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useCell.ts
function Yt() {
	let { parent: e, index: t } = Ye(qt);
	return {
		border: j(() => e?.value && e.value.props.border && t.value),
		center: j(() => e.value?.props.center),
		size: j(() => e.value?.props.size),
		titleWidth: j(() => e.value?.props.titleWidth),
		layout: j(() => e.value?.props.layout || void 0),
		valueAlign: j(() => e.value?.props.valueAlign || void 0)
	};
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-cell/types.ts
var Xt = {
	...Q,
	title: String,
	value: be(""),
	placeholder: String,
	prefixIcon: String,
	suffixIcon: String,
	iconSize: J,
	iconPrefix: String,
	label: String,
	to: String,
	replace: Y(!1),
	clickable: Y(!1),
	isLink: Y(!1),
	size: String,
	border: Y(void 0),
	titleWidth: J,
	center: Y(void 0),
	required: Y(!1),
	layout: String,
	valueAlign: String,
	ellipsis: Y(!1),
	useTitleSlot: Y(!0),
	asteriskPosition: Z("start"),
	hideAsterisk: Y(!1),
	arrowDirection: Z("right"),
	customPrefixClass: Z(""),
	customSuffixClass: Z(""),
	customLabelClass: Z(""),
	customValueClass: Z(""),
	customTitleClass: Z("")
}, Zt = ["hover-class"], Qt = {
	key: 0,
	class: "wd-cell__required wd-cell__required--left"
}, $t = { class: "wd-cell__title" }, en = {
	key: 1,
	class: "wd-cell__required"
}, tn = { class: "wd-cell__right" }, nn = { class: "wd-cell__body" }, rn = /* @__PURE__ */ D({
	name: "wd-cell",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: Xt,
	emits: ["click"],
	setup(e, { emit: n, slots: i }) {
		let a = e, c = n, l = T(), u = Yt(), d = j(() => !!(H(a.border) ? a.border : u.border.value)), f = j(() => H(a.center) ? a.center : u.center?.value), p = j(() => H(a.size) ? a.size : u.size?.value), m = j(() => H(a.titleWidth) ? a.titleWidth : u.titleWidth?.value), h = j(() => H(a.layout) ? a.layout : u.layout?.value || "horizontal"), g = j(() => H(a.valueAlign) ? a.valueAlign : u.valueAlign?.value || "right"), _ = j(() => {
			let e = l.prefix || a.prefixIcon, t = l.title && a.useTitleSlot || a.title, n = l.label || a.label;
			return e || t || n;
		}), x = j(() => !!(a.placeholder && (a.value === "" || a.value === void 0 || a.value === null) && !l.default));
		function S() {
			let e = a.to;
			(a.clickable || a.isLink) && c("click"), e && a.isLink && (a.replace ? uni.redirectTo({ url: e }) : uni.navigateTo({ url: e }));
		}
		return (e, n) => (P(), y("div", {
			class: s([
				"wd-cell",
				d.value ? "is-border" : "",
				p.value ? "is-" + p.value : "",
				f.value ? "is-center" : "",
				e.customClass
			]),
			style: L(e.customStyle),
			"hover-class": e.isLink || e.clickable ? "is-hover" : "none",
			"hover-stay-time": 70,
			onClick: S
		}, [v("div", { class: s(`wd-cell__wrapper wd-cell__wrapper--${h.value}`) }, [_.value ? (P(), y("div", {
			key: 0,
			class: "wd-cell__left",
			style: L(m.value ? "min-width:" + o(B)(m.value) + ";max-width:" + o(B)(m.value) + ";" : "")
		}, [
			e.required && !e.hideAsterisk && e.asteriskPosition === "start" ? (P(), y("span", Qt, "*")) : N("", !0),
			r(e.$slots, "prefix", {}, () => [e.prefixIcon ? (P(), E($, {
				key: 0,
				name: e.prefixIcon,
				size: e.iconSize,
				"class-prefix": e.iconPrefix,
				"custom-class": `wd-cell__prefix ${e.customPrefixClass}`
			}, null, 8, [
				"name",
				"size",
				"class-prefix",
				"custom-class"
			])) : N("", !0)]),
			v("div", $t, [e.useTitleSlot && i.title ? r(e.$slots, "title", { key: 0 }) : e.title ? (P(), y("span", {
				key: 1,
				class: s(e.customTitleClass)
			}, t(e.title), 3)) : N("", !0), r(e.$slots, "label", {}, () => [e.label ? (P(), y("div", {
				key: 0,
				class: s(`wd-cell__label ${e.customLabelClass}`)
			}, t(e.label), 3)) : N("", !0)])]),
			e.required && !e.hideAsterisk && e.asteriskPosition === "end" ? (P(), y("span", en, "*")) : N("", !0)
		], 4)) : N("", !0), v("div", tn, [v("div", nn, [v("div", { class: s(`wd-cell__value ${e.customValueClass} wd-cell__value--${g.value} ${e.ellipsis ? "wd-cell__value--ellipsis" : ""} ${x.value ? "wd-cell__placeholder" : ""}`) }, [r(e.$slots, "default", {}, () => [b(t(x.value ? e.placeholder : e.value), 1)])], 2), e.isLink ? (P(), E($, {
			key: 0,
			"custom-class": "wd-cell__arrow-right",
			name: e.arrowDirection,
			"class-prefix": e.iconPrefix
		}, null, 8, ["name", "class-prefix"])) : r(e.$slots, "suffix", { key: 1 }, () => [e.suffixIcon ? (P(), E($, {
			key: 0,
			name: e.suffixIcon,
			size: e.iconSize,
			"class-prefix": e.iconPrefix,
			"custom-class": `wd-cell__suffix ${e.customSuffixClass}`
		}, null, 8, [
			"name",
			"size",
			"class-prefix",
			"custom-class"
		])) : N("", !0)])])])], 2)], 14, Zt));
	}
}), an = {
	key: 0,
	class: "wd-cell-group__title"
}, on = { class: "wd-cell-group__left" }, sn = { key: 0 }, cn = { class: "wd-cell-group__right" }, ln = { key: 0 }, un = { class: "wd-cell-group__body" }, dn = /* @__PURE__ */ D({
	name: "wd-cell-group",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: Jt,
	setup(e, { slots: n }) {
		let i = e, { linkChildren: a } = bt(qt);
		return a({ props: i }), (e, i) => (P(), y("div", {
			class: s([
				"wd-cell-group",
				e.border ? "is-border" : "",
				e.customClass,
				e.insert ? "wd-cell-group--insert" : ""
			]),
			style: L(e.customStyle)
		}, [e.title || e.value || n.title || n.value ? (P(), y("div", an, [v("div", on, [n.title ? r(e.$slots, "title", { key: 1 }) : (P(), y("span", sn, t(e.title), 1))]), v("div", cn, [n.value ? r(e.$slots, "value", { key: 1 }) : (P(), y("span", ln, t(e.value), 1))])])) : N("", !0), v("div", un, [r(e.$slots, "default")])], 6));
	}
}), fn = {
	...Q,
	clickable: Y(!1),
	square: Y(!1),
	column: Number,
	border: Y(!1),
	bgColor: Z(""),
	gutter: Number,
	hoverClass: String,
	center: Y(!0),
	direction: Z("vertical"),
	reverse: Y(!1),
	iconSize: String
}, pn = Symbol("wd-grid"), mn = /* @__PURE__ */ D({
	name: "wd-grid",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: fn,
	setup(e) {
		let t = e, { linkChildren: n } = bt(pn);
		n({ props: t });
		let i = j(() => {
			let e = {};
			return H(t.gutter) && (e.paddingLeft = B(t.gutter), t.square && (e.marginBottom = B(-t.gutter))), `${G(e)}${t.customStyle || ""}`;
		});
		return (e, t) => (P(), y("div", {
			class: s(`wd-grid ${e.customClass}`),
			style: L(i.value)
		}, [r(e.$slots, "default")], 6));
	}
}), hn = /* @__PURE__ */ D({
	name: "wd-badge",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...Q,
		shape: Z("circle"),
		value: J,
		showZero: Y(!1),
		bgColor: String,
		max: Number,
		isDot: Boolean,
		hidden: Boolean,
		type: String,
		top: J,
		right: J,
		border: Y(!1)
	},
	setup(e) {
		let n = e, i = j(() => {
			let { value: e, max: t, isDot: r } = n;
			return r ? "" : e && t && de(e) && !Number.isNaN(e) && !Number.isNaN(t) && t < e ? `${t}+` : e;
		}), a = j(() => {
			let e = {};
			return H(n.bgColor) && (e.backgroundColor = n.bgColor), H(n.top) && (e.top = B(n.top)), H(n.right) && (e.right = B(n.right)), G(e);
		}), o = j(() => !n.hidden && (i.value || i.value === 0 && n.showZero || n.isDot));
		return (e, c) => (P(), y("div", {
			class: s(["wd-badge", e.customClass]),
			style: L(e.customStyle)
		}, [r(e.$slots, "default"), o.value ? (P(), y("div", {
			key: 0,
			class: s([
				"wd-badge__content",
				n.border ? "is-border" : "",
				"is-fixed",
				e.type ? "wd-badge__content--" + e.type : "",
				e.isDot ? "is-dot" : "",
				e.shape ? "is-" + e.shape : ""
			]),
			style: L(a.value)
		}, t(i.value), 7)) : N("", !0)], 6));
	}
}), gn = {
	...Q,
	customText: Z(""),
	customIcon: Z(""),
	text: String,
	url: String,
	linkType: Z("navigateTo"),
	icon: Z(""),
	iconColor: String,
	iconPrefix: String,
	value: J,
	isDot: Boolean,
	max: Number,
	badgeProps: Object,
	ellipsis: Y(!1)
}, _n = ["hover-class"], vn = {
	key: 0,
	class: "wd-grid-item__wrapper"
}, yn = /* @__PURE__ */ D({
	name: "wd-grid-item",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: gn,
	emits: ["click"],
	setup(e, { emit: n, slots: i }) {
		let a = e, o = n, { parent: c, index: l } = Ye(pn), u = j(() => Number(c.value?.props.gutter || 0)), d = j(() => !!c.value?.props.square), f = j(() => !!c.value?.props.border), p = j(() => c.value?.props.bgColor || ""), m = j(() => c.value?.props.column || 0), g = j(() => c.value?.children?.length || 0), _ = j(() => c.value?.props.iconSize), b = j(() => {
			if (!f.value || u.value) return "";
			let e = [], t = m.value, n = l.value, r = g.value;
			if (t) {
				let i = r - 1 === n || (n + 1) % t === 0, a = n + 1 <= t;
				a && e.push("is-first"), i && e.push("is-right"), a || e.push("is-border");
			} else e.push("is-first");
			return r - 1 === n && e.push("is-last"), e.join(" ");
		}), x = j(() => {
			if (!c) return a.customStyle || "";
			let e = m.value || g.value, t = `${100 / e}%`, n = {
				flexBasis: t,
				width: t
			};
			if (d.value) n.paddingTop = t, n.paddingBottom = "0", u.value && (n.paddingRight = B(u.value));
			else if (u.value) {
				let t = B(u.value);
				n.paddingRight = t, l.value >= e && (n.marginTop = t);
			}
			return a.customStyle ? `${C(n)} ${a.customStyle}` : n;
		}), S = j(() => {
			if (!c) return "";
			let e = {};
			if (p.value && (e.background = p.value), d.value && u.value) {
				let t = B(u.value);
				e.right = t, e.bottom = t, e.height = "auto";
			}
			return e;
		});
		function C(e) {
			return Object.entries(e).map(([e, t]) => `${e.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${t};`).join("");
		}
		let T = j(() => {
			let e = ["wd-grid-item"];
			return b.value && e.push(b.value), d.value && e.push("is-square"), a.customClass && e.push(a.customClass), e.join(" ");
		}), E = j(() => {
			let e = ["wd-grid-item__content"];
			if (d.value && e.push("is-square"), f.value && u.value > 0 && e.push("is-around"), c.value) {
				let { center: t, direction: n, reverse: r } = c.value.props;
				t && e.push("is-center"), n === "horizontal" && e.push("is-horizontal"), r && e.push("is-reverse");
			}
			return e.join(" ");
		}), D = j(() => {
			let e = he(H(a.badgeProps) ? _e(a.badgeProps, W) : {}, _e({
				max: a.max,
				isDot: a.isDot,
				value: a.value
			}, W));
			return H(e.max) || (e.max = 99), e;
		}), O = j(() => c.value?.props.clickable ? c.value.props.hoverClass ? c.value.props.hoverClass : "wd-grid-item__content--hover" : "");
		function k() {
			if (c.value && !c.value.props.clickable) return;
			let { url: e, linkType: t } = a;
			if (o("click"), e) switch (t) {
				case "navigateTo":
					uni.navigateTo({ url: e });
					break;
				case "reLaunch":
					uni.reLaunch({ url: e });
					break;
				case "redirectTo":
					uni.redirectTo({ url: e });
					break;
				case "switchTab":
					uni.switchTab({ url: e });
					break;
				default:
					console.error(`[wot-design] warning(wd-grid-item): linkType can not be ${t}`);
					break;
			}
		}
		return (e, n) => (P(), y("div", {
			class: s(T.value),
			onClick: k,
			style: L(x.value)
		}, [v("div", {
			class: s(E.value),
			style: L(S.value),
			"hover-class": O.value
		}, [r(e.$slots, "default", {}, () => [e.icon || i.icon ? (P(), y("div", vn, [A(hn, h(D.value, { "custom-class": "wd-grid-item__badge" }), {
			default: w(() => [r(e.$slots, "icon", {}, () => [A($, {
				name: e.icon,
				size: _.value,
				color: e.iconColor,
				"class-prefix": e.iconPrefix,
				"custom-class": `wd-grid-item__icon ${e.customIcon}`
			}, null, 8, [
				"name",
				"size",
				"color",
				"class-prefix",
				"custom-class"
			])])]),
			_: 3
		}, 16)])) : N("", !0), r(e.$slots, "text", {}, () => [e.text ? (P(), y("div", {
			key: 0,
			class: s(`wd-grid-item__text ${e.ellipsis ? "is-ellipsis" : ""} ${e.customText}`)
		}, t(e.text), 3)) : N("", !0)])])], 14, _n)], 6));
	}
}), bn = {
	...Q,
	text: {
		type: [String, Array],
		default: ""
	},
	type: Z("warning"),
	scrollable: Y(!0),
	delay: X(1),
	speed: X(50),
	closable: Y(!1),
	wrapable: Y(!1),
	prefix: String,
	color: String,
	backgroundColor: String,
	direction: Z("horizontal")
}, xn = { class: "wd-notice-bar__wrap" }, Sn = { key: 0 }, Cn = /* @__PURE__ */ D({
	name: "wd-notice-bar",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: bn,
	emits: [
		"close",
		"next",
		"click"
	],
	setup(n, { expose: a, emit: o }) {
		let c = n, u = o, f = d(0), m = d(!0), h = d(0), _ = j(() => Array.isArray(c.text) ? c.text : [c.text]), x = j(() => _.value[h.value]), C = d(0), w = d(null), T = d(null), D = j(() => c.direction === "horizontal"), O = j(() => c.direction === "vertical"), k = l({
			transitionProperty: "unset",
			transitionDelay: "unset",
			transitionDuration: "unset",
			transform: "none",
			transitionTimingFunction: "linear"
		}), A = j(() => G(k)), ee = j(() => {
			let e = {};
			return H(c.color) && (e.color = c.color), H(c.backgroundColor) && (e.background = c.backgroundColor), `${G(e)}${c.customStyle}`;
		}), M = j(() => {
			let { type: e, wrapable: t, scrollable: n } = c, r = [];
			return e && r.push(`is-${e}`), D.value ? !t && !n && r.push("wd-notice-bar--ellipse") : r.push("wd-notice-bar--ellipse"), t && !n && r.push("wd-notice-bar--wrap"), r.join(" ");
		}), { proxy: F } = S();
		e(() => c.text, () => {
			I();
		}, { deep: !0 }), p(() => {
			R();
			let e = getCurrentPages(), t = e[e.length - 1].$getAppWebview();
			t.addEventListener("hide", () => {
				ne();
			}), t.addEventListener("show", () => {
				R();
			});
		});
		function I() {
			ne(), R();
		}
		function R() {
			te(() => ie());
		}
		function ne() {
			k.transitionProperty = "unset", k.transitionDelay = "unset", k.transitionDuration = "unset", k.transform = "none", k.transitionTimingFunction = "linear", h.value = 0, C.value = 0;
		}
		function z() {
			m.value = !1, u("close");
		}
		function B({ duration: e, delay: t, translate: n }) {
			k.transitionProperty = "all", k.transitionDelay = `${t}s`, k.transitionDuration = `${e}s`, k.transform = `${c.direction === "vertical" ? "translateY" : "translateX"}(${n}px)`, k.transitionTimingFunction = "linear";
		}
		function V() {
			return Promise.all([oe(".wd-notice-bar__wrap", !1, F), oe(".wd-notice-bar__content", !1, F)]);
		}
		async function re(e) {
			let t = -(e / (_.value.length + 1)) * (h.value + 1);
			B({
				duration: e / (_.value.length + 1) / c.speed,
				delay: c.delay,
				translate: t
			});
		}
		async function ie() {
			let [e, t] = await V();
			!e.width || !t.width || !t.height || (w.value = e, T.value = t, f.value = e.width, D.value ? c.scrollable && B({
				duration: t.width / c.speed,
				delay: c.delay,
				translate: -t.width
			}) : _.value.length > 1 && re(t.height));
		}
		function ae() {
			h.value >= _.value.length - 1 ? h.value = 0 : h.value++, u("next", h.value);
		}
		function se() {
			D.value ? B({
				duration: 0,
				delay: 0,
				translate: f.value + 1
			}) : ++C.value >= _.value.length && (C.value = 0, B({
				duration: 0,
				delay: 0,
				translate: 0
			}));
			let e = setTimeout(() => {
				ae(), te(async () => {
					try {
						let [e, t] = await V();
						w.value = e, T.value = t, f.value = e.width || 0;
					} catch {}
					!T.value || !T.value.width || !T.value.height || (D.value ? B({
						duration: (f.value + T.value.width) / c.speed,
						delay: c.delay,
						translate: -T.value.width
					}) : re(T.value.height));
				}), clearTimeout(e);
			}, 20);
		}
		function ce() {
			u("click", U(c.text) ? {
				index: h.value,
				text: c.text[h.value]
			} : {
				index: 0,
				text: c.text
			});
		}
		return a({ reset: I }), (e, n) => m.value ? (P(), y("div", {
			key: 0,
			class: s(`wd-notice-bar ${e.customClass} ${M.value}`),
			style: L(ee.value)
		}, [
			e.prefix ? (P(), E($, {
				key: 0,
				"custom-class": "wd-notice-bar__prefix",
				name: e.prefix
			}, null, 8, ["name"])) : r(e.$slots, "prefix", { key: 1 }),
			v("div", xn, [v("div", {
				class: "wd-notice-bar__content",
				style: L(A.value),
				onTransitionend: se,
				onClick: ce
			}, [O.value ? (P(), y(g, { key: 0 }, [(P(!0), y(g, null, i(_.value, (e) => (P(), y("div", { key: e }, t(e), 1))), 128)), _.value.length > 1 ? (P(), y("div", Sn, t(_.value[0]), 1)) : N("", !0)], 64)) : r(e.$slots, "default", { key: 1 }, () => [b(t(x.value), 1)])], 36)]),
			r(e.$slots, "suffix", {}, () => [e.closable ? (P(), E($, {
				key: 0,
				"custom-class": "wd-notice-bar__suffix",
				name: "close",
				onClick: z
			})) : N("", !0)])
		], 6)) : N("", !0);
	}
}), wn = {
	...Q,
	icon: Z("empty"),
	iconSize: [String, Number],
	tip: Z("")
}, Tn = {
	key: 0,
	class: "wd-empty__text"
}, En = /* @__PURE__ */ D({
	name: "wd-empty",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: wn,
	setup(e) {
		let n = e, i = j(() => {
			let e = {};
			return n.iconSize && (e["font-size"] = B(n.iconSize), e.width = B(n.iconSize), e.height = B(n.iconSize)), `${G(e)}`;
		});
		return (e, n) => (P(), y("div", {
			class: s(`wd-empty  ${e.customClass}`),
			style: L(e.customStyle)
		}, [
			r(e.$slots, "image", {}, () => [A($, {
				name: e.icon,
				"custom-class": "wd-empty__icon",
				"custom-style": i.value
			}, null, 8, ["name", "custom-style"])]),
			e.tip ? (P(), y("div", Tn, t(e.tip), 1)) : N("", !0),
			r(e.$slots, "bottom")
		], 6));
	}
}), Dn = /* @__PURE__ */ D({
	name: "wd-divider",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: {
		...Q,
		color: String,
		contentPosition: Z("center"),
		dashed: Boolean,
		vertical: Y(!1),
		hairline: Y(!0)
	},
	setup(e) {
		let t = e, n = T(), i = j(() => {
			let { color: e, customStyle: n } = t, r = {};
			return e && (r.color = e), `${G(r)}${n}`;
		}), a = j(() => {
			let e = "wd-divider";
			return {
				[e]: !0,
				"is-dashed": t.dashed,
				"is-hairline": t.hairline,
				[`${e}--vertical`]: t.vertical,
				[`${e}--center`]: !t.vertical && t.contentPosition === "center" && !!n.default,
				[`${e}--left`]: !t.vertical && t.contentPosition === "left",
				[`${e}--right`]: !t.vertical && t.contentPosition === "right",
				[t.customClass]: !!t.customClass
			};
		});
		return (e, t) => (P(), y("div", {
			class: s(a.value),
			style: L(i.value)
		}, [e.vertical ? N("", !0) : r(e.$slots, "default", { key: 0 })], 6));
	}
}), On = /* @__PURE__ */ D({
	name: "wd-transition",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...Q,
		show: Y(!1),
		duration: {
			type: [
				Object,
				Number,
				Boolean
			],
			default: 300
		},
		lazyRender: Y(!1),
		name: [String, Array],
		destroy: Y(!0),
		enterClass: Z(""),
		enterActiveClass: Z(""),
		enterToClass: Z(""),
		leaveClass: Z(""),
		leaveActiveClass: Z(""),
		leaveToClass: Z(""),
		disableTouchMove: Y(!1)
	},
	emits: [
		"click",
		"before-enter",
		"enter",
		"before-leave",
		"leave",
		"after-leave",
		"after-enter"
	],
	setup(t, { emit: n }) {
		let i = (e) => {
			let t = (e, t) => `wd-transition--${e}-${t}`, n = `${a.enterClass} ${a.enterActiveClass}`, r = `${a.enterToClass} ${a.enterActiveClass}`, i = `${a.leaveClass} ${a.leaveActiveClass}`, o = `${a.leaveToClass} ${a.leaveActiveClass}`;
			if (Array.isArray(e)) for (let a = 0; a < e.length; a++) n = `${t(e[a], "enter")} ${t(e[a], "enter-active")} ${n}`, r = `${t(e[a], "enter-to")} ${t(e[a], "enter-active")} ${r}`, i = `${t(e[a], "leave")} ${t(e[a], "leave-active")} ${i}`, o = `${t(e[a], "leave-to")} ${t(e[a], "leave-active")} ${o}`;
			else e && (n = `${t(e, "enter")} ${t(e, "enter-active")} ${n}`, r = `${t(e, "enter-to")} ${t(e, "enter-active")} ${r}`, i = `${t(e, "leave")} ${t(e, "leave-active")} ${i}`, o = `${t(e, "leave-to")} ${t(e, "leave-active")} ${o}`);
			return {
				enter: n,
				"enter-to": r,
				leave: i,
				"leave-to": o
			};
		}, a = t, o = n, c = d(!1), l = d(!1), u = d(""), f = d(!1), p = d(300), m = d(""), h = d(null), g = d(null), _ = d(null), v = j(() => `-webkit-transition-duration:${p.value}ms;transition-duration:${p.value}ms;${l.value || !a.destroy ? "" : "display: none;"}${a.customStyle}`), b = j(() => `wd-transition ${a.customClass}  ${m.value}`), x = j(() => !a.lazyRender || c.value);
		I(() => {
			a.show && E();
		}), e(() => a.show, (e) => {
			w(e);
		}, { deep: !0 });
		function S() {
			o("click");
		}
		function w(e) {
			e ? (T(), E()) : D();
		}
		function T() {
			fe(h.value) && h.value.abort(), fe(g.value) && g.value.abort(), fe(_.value) && _.value.abort(), h.value = null, g.value = null, _.value = null;
		}
		function E() {
			h.value = new R(async (e) => {
				try {
					let t = i(a.name), n = V(a.duration) ? a.duration.enter : a.duration;
					u.value = "enter", o("before-enter"), g.value = K(), await g.value, o("enter"), m.value = t.enter, p.value = n, g.value = K(), await g.value, c.value = !0, l.value = !0, g.value = K(), await g.value, g.value = null, f.value = !1, m.value = t["enter-to"], e();
				} catch {}
			});
		}
		async function D() {
			if (!h.value) return f.value = !1, k();
			try {
				if (await h.value, !l.value) return;
				let e = i(a.name), t = V(a.duration) ? a.duration.leave : a.duration;
				u.value = "leave", o("before-leave"), p.value = t, _.value = K(), await _.value, o("leave"), m.value = e.leave, _.value = K(), await _.value, f.value = !1, m.value = e["leave-to"], _.value = O(p.value), await _.value, _.value = null, k(), h.value = null;
			} catch {}
		}
		function O(e) {
			return new R((t) => {
				let n = setTimeout(() => {
					clearTimeout(n), t();
				}, e);
			});
		}
		function k() {
			f.value || (f.value = !0, u.value === "leave" ? o("after-leave") : u.value === "enter" && o("after-enter"), !a.show && l.value && (l.value = !1));
		}
		function A() {}
		return (e, t) => x.value && e.disableTouchMove ? (P(), y("div", {
			key: 0,
			class: s(b.value),
			style: L(v.value),
			onTransitionend: k,
			onClick: S,
			onTouchmove: C(A, ["stop", "prevent"])
		}, [r(e.$slots, "default")], 38)) : x.value && !e.disableTouchMove ? (P(), y("div", {
			key: 1,
			class: s(b.value),
			style: L(v.value),
			onTransitionend: k,
			onClick: S
		}, [r(e.$slots, "default")], 38)) : N("", !0);
	}
}), kn = {
	...Q,
	show: Y(!1),
	duration: {
		type: [
			Object,
			Number,
			Boolean
		],
		default: 300
	},
	lockScroll: Y(!0),
	zIndex: X(10)
};
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useLockScroll.ts
function An(t) {
	let n = d(0), r = () => {
		n.value === 0 && (document.getElementsByTagName("body")[0].style.overflow = "hidden"), n.value++;
	}, i = () => {
		n.value > 0 && (n.value--, n.value === 0 && (document.getElementsByTagName("body")[0].style.overflow = ""));
	}, a = () => {
		t() && i();
	};
	return e(t, (e) => {
		e ? r() : i();
	}), F(a), _(a), {
		lock: r,
		unlock: i
	};
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-overlay/wd-overlay.vue
var jn = /* @__PURE__ */ D({
	name: "wd-overlay",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: kn,
	emits: [
		"click",
		"before-enter",
		"enter",
		"after-enter",
		"before-leave",
		"leave",
		"after-leave"
	],
	setup(e, { emit: t }) {
		let n = e, i = t;
		function a() {
			i("click");
		}
		return An(() => n.show && n.lockScroll), (e, t) => (P(), E(On, {
			show: e.show,
			name: "fade",
			"custom-class": `wd-overlay ${e.customClass}`,
			duration: e.duration,
			"custom-style": `z-index: ${e.zIndex}; ${e.customStyle}`,
			"disable-touch-move": e.lockScroll,
			onBeforeEnter: t[0] ||= (e) => i("before-enter"),
			onEnter: t[1] ||= (e) => i("enter"),
			onAfterEnter: t[2] ||= (e) => i("after-enter"),
			onBeforeLeave: t[3] ||= (e) => i("before-leave"),
			onLeave: t[4] ||= (e) => i("leave"),
			onAfterLeave: t[5] ||= (e) => i("after-leave"),
			onClick: a
		}, {
			default: w(() => [r(e.$slots, "default")]),
			_: 3
		}, 8, [
			"show",
			"custom-class",
			"duration",
			"custom-style",
			"disable-touch-move"
		]));
	}
}), Mn = "__CONFIG_PROVIDER__", Nn = /* @__PURE__ */ D({
	name: "wd-root-portal",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: { ...Q },
	setup(e) {
		let t = Symbol("None"), n = x(Mn, t), { parent: i } = Ye(je), a = j(() => n === t ? i.value?.themeStyle.value || "" : n.themeStyle.value || ""), o = j(() => {
			let e = n === t ? i.value?.globalConfig?.value.theme : n.globalConfig?.value.theme;
			return e ? `wot-theme-${e}` : "wot-theme-light";
		});
		return (e, t) => {
			let n = u("root-portal");
			return P(), E(k, { to: "body" }, [A(n, null, {
				default: w(() => [v("div", {
					class: s([o.value, "wd-root-portal"]),
					style: L(a.value)
				}, [r(e.$slots, "default")], 6)]),
				_: 3
			})]);
		};
	}
}), Pn = {
	...Q,
	transition: String,
	closable: Y(!1),
	position: Z("center"),
	closeOnClickModal: Y(!0),
	duration: {
		type: [Number, Boolean],
		default: 300
	},
	modal: Y(!0),
	zIndex: X(10),
	hideWhenClose: Y(!0),
	modalStyle: Z(""),
	safeAreaInsetBottom: Y(!1),
	modelValue: Y(!1),
	lazyRender: Y(!0),
	lockScroll: Y(!0),
	rootPortal: Y(!1),
	round: Y(!1)
}, Fn = { class: "wd-popup-wrapper" }, In = {
	key: 1,
	class: "wd-popup-wrapper"
}, Ln = /* @__PURE__ */ D({
	name: "wd-popup",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: Pn,
	emits: [
		"update:modelValue",
		"before-enter",
		"enter",
		"before-leave",
		"leave",
		"after-leave",
		"after-enter",
		"click-modal",
		"close"
	],
	setup(e, { emit: t }) {
		let n = e, i = t, a = j(() => n.transition ? n.transition : n.position === "center" ? ["zoom-in", "fade"] : n.position === "left" ? "slide-left" : n.position === "right" ? "slide-right" : n.position === "bottom" ? "slide-up" : n.position === "top" ? "slide-down" : "slide-up"), o = d(0), s = j(() => `z-index:${n.zIndex}; padding-bottom: ${o.value}px;${n.customStyle}`), c = j(() => `wd-popup wd-popup--${n.position} ${!n.transition && n.position === "center" ? "is-deep" : ""} ${n.round ? "is-round" : ""} ${n.customClass || ""}`);
		I(() => {
			if (n.safeAreaInsetBottom) {
				let { safeArea: e, screenHeight: t, safeAreaInsets: n } = ve();
				e ? (o.value = t - (e.bottom || 0), o.value = n ? n.bottom : 0) : o.value = 0;
			}
		});
		function l() {
			i("click-modal"), n.closeOnClickModal && u();
		}
		function u() {
			i("close"), i("update:modelValue", !1);
		}
		function f() {}
		return (e, t) => e.rootPortal ? (P(), E(Nn, { key: 0 }, {
			default: w(() => [v("div", Fn, [e.modal ? (P(), E(jn, {
				key: 0,
				show: e.modelValue,
				"z-index": e.zIndex,
				"lock-scroll": e.lockScroll,
				duration: e.duration,
				"custom-style": e.modalStyle,
				onClick: l,
				onTouchmove: f
			}, null, 8, [
				"show",
				"z-index",
				"lock-scroll",
				"duration",
				"custom-style"
			])) : N("", !0), A(On, {
				"lazy-render": e.lazyRender,
				"custom-class": c.value,
				"custom-style": s.value,
				duration: e.duration,
				show: e.modelValue,
				name: a.value,
				destroy: e.hideWhenClose,
				onBeforeEnter: t[0] ||= (e) => i("before-enter"),
				onEnter: t[1] ||= (e) => i("enter"),
				onAfterEnter: t[2] ||= (e) => i("after-enter"),
				onBeforeLeave: t[3] ||= (e) => i("before-leave"),
				onLeave: t[4] ||= (e) => i("leave"),
				onAfterLeave: t[5] ||= (e) => i("after-leave")
			}, {
				default: w(() => [r(e.$slots, "default"), e.closable ? (P(), E($, {
					key: 0,
					"custom-class": "wd-popup__close",
					name: "close",
					onClick: u
				})) : N("", !0)]),
				_: 3
			}, 8, [
				"lazy-render",
				"custom-class",
				"custom-style",
				"duration",
				"show",
				"name",
				"destroy"
			])])]),
			_: 3
		})) : (P(), y("div", In, [e.modal ? (P(), E(jn, {
			key: 0,
			show: e.modelValue,
			"z-index": e.zIndex,
			"lock-scroll": e.lockScroll,
			duration: e.duration,
			"custom-style": e.modalStyle,
			onClick: l,
			onTouchmove: f
		}, null, 8, [
			"show",
			"z-index",
			"lock-scroll",
			"duration",
			"custom-style"
		])) : N("", !0), A(On, {
			"lazy-render": e.lazyRender,
			"custom-class": c.value,
			"custom-style": s.value,
			duration: e.duration,
			show: e.modelValue,
			name: a.value,
			destroy: e.hideWhenClose,
			onBeforeEnter: t[6] ||= (e) => i("before-enter"),
			onEnter: t[7] ||= (e) => i("enter"),
			onAfterEnter: t[8] ||= (e) => i("after-enter"),
			onBeforeLeave: t[9] ||= (e) => i("before-leave"),
			onLeave: t[10] ||= (e) => i("leave"),
			onAfterLeave: t[11] ||= (e) => i("after-leave")
		}, {
			default: w(() => [r(e.$slots, "default"), e.closable ? (P(), E($, {
				key: 0,
				"custom-class": "wd-popup__close",
				name: "close",
				onClick: u
			})) : N("", !0)]),
			_: 3
		}, 8, [
			"lazy-render",
			"custom-class",
			"custom-style",
			"duration",
			"show",
			"name",
			"destroy"
		])]));
	}
}), Rn = {
	WdButton: Le,
	WdCard: Be,
	WdTag: Je,
	WdIcon: $,
	WdLoading: ke,
	WdInput: rt,
	WdSwitch: lt,
	WdRadio: ht,
	WdRadioGroup: xt,
	WdCheckbox: Dt,
	WdCheckboxGroup: Ot,
	WdRate: Mt,
	WdSlider: Ut,
	WdInputNumber: Kt,
	WdCell: rn,
	WdCellGroup: dn,
	WdGrid: mn,
	WdGridItem: yn,
	WdNoticeBar: Cn,
	WdBadge: hn,
	WdEmpty: En,
	WdDivider: Dn,
	WdPopup: Ln
};
function zn() {
	return { install(e) {
		e.component("wd-button", Le), e.component("wd-card", Be), e.component("wd-tag", Je), e.component("wd-icon", $), e.component("wd-loading", ke), e.component("wd-input", rt), e.component("wd-switch", lt), e.component("wd-radio", ht), e.component("wd-radio-group", xt), e.component("wd-checkbox", Dt), e.component("wd-checkbox-group", Ot), e.component("wd-rate", Mt), e.component("wd-slider", Ut), e.component("wd-input-number", Kt), e.component("wd-cell", rn), e.component("wd-cell-group", dn), e.component("wd-grid", mn), e.component("wd-grid-item", yn), e.component("wd-notice-bar", Cn), e.component("wd-badge", hn), e.component("wd-empty", En), e.component("wd-divider", Dn), e.component("wd-popup", Ln);
	} };
}
//#endregion
export { M as Vue, Rn as WotUI, zn as createWotUIPlugin };
