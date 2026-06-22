globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, E as t, S as n, T as r, _ as i, a, b as o, c as s, d as c, f as l, g as u, h as d, i as f, l as p, m, n as h, o as g, p as _, r as v, s as y, t as b, u as x, v as S, w as C, x as w, y as T } from "./chunks/vue.runtime.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/util.ts
function E(e) {
	return Number.isNaN(Number(e)) ? `${e}` : `${e}px`;
}
function D(e) {
	return Object.prototype.toString.call(e) === "[object Object]" || typeof e == "object";
}
function O(e) {
	let t = Object.prototype.toString.call(e).match(/\[object (\w+)\]/);
	return t && t.length ? t[1].toLowerCase() : "";
}
var k = (e) => e != null;
function A(e) {
	return e.replace(/[A-Z]/g, function(e) {
		return "-" + e;
	}).toLowerCase();
}
function j(e) {
	return e.replace(/-(\w)/g, (e, t) => t.toUpperCase());
}
function M(e) {
	return typeof Array.isArray == "function" ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object Array]";
}
function N(e) {
	return O(e) === "function" || O(e) === "asyncfunction";
}
function P(e) {
	return O(e) === "string";
}
function F(e) {
	return e === void 0;
}
function I(e) {
	if (M(e)) {
		let t = e.filter(function(e) {
			return e != null && e !== "";
		}).map(function(e) {
			return I(e);
		}).join(";");
		return t ? t.endsWith(";") ? t : t + ";" : "";
	}
	if (P(e)) return e ? e.endsWith(";") ? e : e + ";" : "";
	if (D(e)) {
		let t = Object.keys(e).filter(function(t) {
			return e[t] != null && e[t] !== "";
		}).map(function(t) {
			return [A(t), e[t]].join(":");
		}).join(";");
		return t ? t.endsWith(";") ? t : t + ";" : "";
	}
	return "";
}
function L(e, t = /* @__PURE__ */ new Map()) {
	if (typeof e != "object" || !e) return e;
	if (B(e)) return new Date(e.getTime());
	if (e instanceof RegExp) return new RegExp(e.source, e.flags);
	if (e instanceof Error) {
		let t = Error(e.message);
		return t.stack = e.stack, t;
	}
	if (t.has(e)) return t.get(e);
	let n = Array.isArray(e) ? [] : {};
	t.set(e, n);
	for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = L(e[r], t));
	return n;
}
function R(e, t) {
	return Object.keys(t).forEach((n) => {
		let r = e[n], i = t[n];
		D(r) && D(i) ? R(r, i) : e[n] = i;
	}), e;
}
var z = (e, t) => {
	let n = t.split(".");
	try {
		return n.reduce((e, t) => e?.[t], e);
	} catch {
		return;
	}
}, B = (e) => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime());
(() => {
	let e = !1;
	return e = !0, e;
})();
function ee(e, t) {
	let n = L(e);
	return Object.keys(n).forEach((e) => t(n[e], e) && delete n[e]), n;
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/props.ts
var V = [Number, String], H = (e) => ({
	type: Boolean,
	default: e
}), U = (e) => ({
	type: Number,
	default: e
}), W = (e) => ({
	type: String,
	default: e
}), G = {
	customStyle: W(""),
	customClass: W("")
}, te = {
	...G,
	name: W(""),
	color: String,
	size: V,
	classPrefix: W("wd-icon"),
	cssIcon: {
		type: [Boolean, String],
		default: !1
	}
}, ne = ["src"], K = /* @__PURE__ */ l({
	name: "wd-icon",
	options: {
		virtualHost: !0,
		externalClasses: ["custom-class"],
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: te,
	emits: ["click", "touch"],
	setup(t, { emit: n }) {
		let i = t, o = n, c = a(() => !i.cssIcon && k(i.name) && i.name.includes("/")), l = a(() => {
			let t = { "wd-icon": !0 };
			return i.cssIcon ? (t["wd-icon--css"] = !0, typeof i.cssIcon == "string" ? t[i.cssIcon] = !0 : t[i.name] = !0) : c.value ? t["wd-icon--image"] = !0 : (t[i.classPrefix] = !0, t[`${i.classPrefix}-${i.name}`] = !0), e([t, i.customClass]);
		}), u = a(() => {
			let e = {};
			if (i.color && (e.color = i.color), i.size) {
				let t = E(i.size);
				e["font-size"] = t, (i.cssIcon || c.value) && (e.width = t, e.height = t);
			}
			return `${I(e)} ${i.customStyle}`;
		});
		function f(e) {
			o("click", e);
		}
		return (t, n) => (d(), p("div", {
			class: e(l.value),
			style: r(u.value),
			onClick: f
		}, [c.value ? (d(), p("img", {
			key: 0,
			class: "wd-icon__image",
			src: t.name
		}, null, 8, ne)) : s("", !0)], 6));
	}
}), re = {
	...G,
	customSpinnerClass: W(""),
	type: W("circular"),
	color: String,
	size: V,
	direction: W("vertical"),
	text: String,
	inheritColor: Boolean
}, ie = {
	key: 0,
	class: "wd-loading__spinner-wraper"
}, ae = {
	key: 1,
	class: "wd-loading__spinner-wraper"
}, oe = {
	key: 2,
	class: "wd-loading__spinner-wraper"
}, se = {
	key: 3,
	class: "wd-loading__spinner-wraper"
}, ce = {
	key: 0,
	class: "wd-loading__text"
}, q = /* @__PURE__ */ l({
	name: "wd-loading",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: re,
	setup(o, { slots: c }) {
		let l = o, m = Array.from({ length: 12 }, (e, t) => t), h = a(() => {
			let e = {};
			return k(l.color) && (e.color = l.color), l.inheritColor && (e.color = "inherit"), `${I(e)} ${l.customStyle}`;
		}), _ = a(() => {
			let e = {};
			return k(l.size) && (e.height = E(l.size), e.width = E(l.size)), I(e);
		});
		return (a, o) => (d(), p("div", {
			class: e(`wd-loading wd-loading--${a.direction} ${a.customClass}`),
			style: r(h.value)
		}, [g("div", {
			class: e(`wd-loading__spinner wd-loading__spinner--${a.type} ${a.customSpinnerClass}`),
			style: r(_.value)
		}, [a.type === "circular" ? (d(), p("div", ie)) : s("", !0), a.type === "spinner" ? (d(), p("div", ae, [(d(!0), p(f, null, u(n(m), (e) => (d(), p("div", {
			class: "wd-loading__spinner-dot",
			key: e
		}))), 128))])) : a.type === "dots" ? (d(), p("div", oe, [(d(), p(f, null, u(3, (e) => g("div", {
			class: "wd-loading__spinner-dot",
			key: e
		})), 64))])) : a.type === "wave" ? (d(), p("div", se, [(d(), p(f, null, u(4, (e) => g("div", {
			class: "wd-loading__spinner-wave-bar",
			key: e
		}, [...o[0] ||= [g("div", { class: "wd-loading__spinner-wave-bar-inner" }, null, -1)]])), 64))])) : s("", !0)], 6), c.default || a.text ? (d(), p("div", ce, [i(a.$slots, "default", {}, () => [x(t(a.text), 1)])])) : s("", !0)], 6));
	}
}), le = {
	...G,
	round: {
		type: Boolean,
		default: void 0
	},
	disabled: H(!1),
	hairline: H(!1),
	block: H(!1),
	type: String,
	size: String,
	icon: String,
	classPrefix: W("wd-icon"),
	cssIcon: {
		type: [Boolean, String],
		default: !1
	},
	loading: H(!1),
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
	hoverStartTime: U(20),
	hoverStayTime: U(70),
	text: String,
	variant: String
};
({ ...G });
var ue = Symbol("wd-config-provider"), de = Object.freeze({
	theme: "light",
	themeVars: {},
	button: {},
	tag: {}
});
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useGlobalConfig.ts
function J() {
	let e = _(ue, null);
	return e ? e.globalConfig : a(() => ({ ...de }));
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-button/wd-button.vue?vue&type=script&setup=true&lang.ts
var fe = [
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
], pe = { class: "wd-button__content" }, me = {
	key: 2,
	class: "wd-button__text"
}, Y = /* @__PURE__ */ l({
	name: "wd-button",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: le,
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
	setup(n, { emit: o, slots: c }) {
		let l = S(), u = n, f = J(), h = a(() => u.size || f.value.button?.size || "medium"), _ = a(() => u.variant || f.value.button?.variant || "base"), v = a(() => u.type || f.value.button?.type || "primary"), b = a(() => F(u.round) ? F(f.value.button?.round) ? !1 : f.value.button?.round : u.round), w = o, T = a(() => {
			let e = k(u.loadingProps) ? ee(u.loadingProps, F) : {};
			return e.customSpinnerClass = `${k(e.customSpinnerClass) ? e.customSpinnerClass : ""} wd-button__loading`, e.inheritColor = k(e.inheritColor) ? e.inheritColor : !0, e;
		}), E = a(() => u.disabled || u.loading ? void 0 : u.openType), D = a(() => !l.default && !u.text && !!(u.icon || u.cssIcon));
		function O(e) {
			!u.disabled && !u.loading && w("click", e);
		}
		function A(e) {
			u.scope === "phoneNumber" ? N(e) : u.scope === "userInfo" && j(e);
		}
		function j(e) {
			w("getuserinfo", e);
		}
		function M(e) {
			w("contact", e);
		}
		function N(e) {
			w("getphonenumber", e);
		}
		function P(e) {
			w("getrealtimephonenumber", e);
		}
		function I(e) {
			w("error", e);
		}
		function L(e) {
			w("launchapp", e);
		}
		function R(e) {
			w("opensetting", e);
		}
		function z(e) {
			w("chooseavatar", e);
		}
		function B(e) {
			w("agreeprivacyauthorization", e);
		}
		return (n, a) => (d(), p("button", {
			id: n.buttonId,
			"hover-class": `${n.disabled || n.loading ? "" : "wd-button--active"}`,
			style: r(n.customStyle),
			class: e([
				"wd-button",
				"is-" + v.value,
				"is-" + h.value,
				D.value ? "is-icon" : "",
				b.value ? "is-round" : "",
				n.hairline ? "is-hairline" : "",
				_.value === "base" ? "" : "is-" + _.value,
				n.disabled ? "is-disabled" : "",
				n.block ? "is-block" : "",
				n.loading ? "is-loading" : "",
				n.customClass
			]),
			"hover-start-time": n.hoverStartTime,
			"hover-stay-time": n.hoverStayTime,
			"open-type": E.value,
			"send-message-title": n.sendMessageTitle,
			"send-message-path": n.sendMessagePath,
			"send-message-img": n.sendMessageImg,
			"app-parameter": n.appParameter,
			"show-message-card": n.showMessageCard,
			"session-from": n.sessionFrom,
			lang: n.lang,
			"hover-stop-propagation": n.hoverStopPropagation,
			scope: n.scope,
			onClick: O,
			"on:getAuthorize": A,
			onGetuserinfo: j,
			onContact: M,
			onGetphonenumber: N,
			onGetrealtimephonenumber: P,
			onError: I,
			onLaunchapp: L,
			onOpensetting: R,
			onChooseavatar: z,
			onAgreeprivacyauthorization: B
		}, [g("div", pe, [n.loading ? (d(), y(q, C(m({ key: 0 }, T.value)), null, 16)) : n.icon || n.cssIcon ? (d(), y(K, {
			key: 1,
			"custom-class": "wd-button__icon",
			name: n.icon,
			"class-prefix": n.classPrefix,
			"css-icon": n.cssIcon
		}, null, 8, [
			"name",
			"class-prefix",
			"css-icon"
		])) : s("", !0), c.default || n.text ? (d(), p("div", me, [i(n.$slots, "default", {}, () => [x(t(n.text), 1)])])) : s("", !0)])], 46, fe));
	}
}), he = {
	...G,
	title: String,
	type: String,
	customTitleClass: W(""),
	customContentClass: W(""),
	customFooterClass: W("")
}, ge = {
	key: 0,
	class: "wd-card__title-text"
}, X = /* @__PURE__ */ l({
	name: "wd-card",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: he,
	setup(n, { slots: a }) {
		return (n, o) => (d(), p("div", {
			class: e(`wd-card ${n.type ? `wd-card--${n.type}` : ""} ${n.customClass}`),
			style: r(n.customStyle)
		}, [
			n.title || a.title ? (d(), p("div", {
				key: 0,
				class: e(`wd-card__title ${n.customTitleClass}`)
			}, [i(n.$slots, "title", {}, () => [n.title ? (d(), p("span", ge, t(n.title), 1)) : s("", !0)])], 2)) : s("", !0),
			g("div", { class: e(`wd-card__content ${n.customContentClass}`) }, [i(n.$slots, "default")], 2),
			a.footer ? (d(), p("div", {
				key: 1,
				class: e(`wd-card__footer ${n.customFooterClass}`)
			}, [i(n.$slots, "footer")], 2)) : s("", !0)
		], 6));
	}
}), _e = {
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
}, Z = w("zh-CN"), Q = o({ "zh-CN": _e }), ve = {
	messages() {
		return Q[Z.value];
	},
	use(e, t) {
		Z.value = e, t && this.add({ [e]: t });
	},
	add(e = {}) {
		R(Q, e);
	}
}, ye = (e) => {
	let t = e ? j(e) + "." : "";
	return { translate: (e, ...n) => {
		let r = z(ve.messages(), t + e);
		return N(r) ? r(...n) : k(r) ? r : `${t}${e}`;
	} };
}, be = {
	...G,
	size: String,
	type: W("default"),
	icon: W(""),
	closable: H(!1),
	dynamic: H(!1),
	color: W(""),
	bgColor: W(""),
	round: {
		type: Boolean,
		default: void 0
	},
	mark: H(!1),
	variant: String
}, xe = ["placeholder"], $ = /* @__PURE__ */ l({
	name: "wd-tag",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: be,
	emits: [
		"click",
		"close",
		"confirm"
	],
	setup(o, { emit: l, slots: u }) {
		let m = o, _ = l, { translate: y } = ye("tag"), b = J(), x = a(() => m.size || b.value.tag?.size || "default"), S = a(() => m.variant || b.value.tag?.variant || "dark"), C = a(() => F(m.round) ? F(b.value.tag?.round) ? !1 : b.value.tag?.round : m.round), E = w(""), D = w(!1), O = a(() => {
			let { type: e, mark: t, customClass: n } = m, r = [];
			return e && r.push(`is-${e}`), S.value && r.push(`is-${S.value}`), x.value && r.push(`is-${x.value}`), C.value && r.push("is-round"), t && r.push("is-mark"), `wd-tag ${n} ${r.join(" ")}`;
		}), k = a(() => {
			let e = {};
			return S.value !== "plain" && S.value !== "dashed" && S.value !== "text" && m.bgColor && (e.background = m.bgColor), m.bgColor && (e["border-color"] = m.bgColor), `${I(e)}${m.customStyle}`;
		}), A = a(() => {
			let e = {};
			return m.color && (e.color = m.color), I(e);
		});
		function j(e) {
			_("click", e);
		}
		function M(e) {
			_("close", e);
		}
		function N() {
			D.value = !0, E.value = "";
		}
		function P() {
			R();
		}
		function L(e) {
			R(), _("confirm", { value: e.detail.value });
		}
		function R() {
			D.value = !1;
		}
		return (a, o) => (d(), p("div", {
			class: e(O.value),
			style: r(k.value),
			onClick: j
		}, [D.value && a.dynamic ? T((d(), p("input", {
			key: 0,
			class: "wd-tag__input",
			placeholder: n(y)("placeholder"),
			"placeholder-class": "wd-tag__placeholder",
			type: "text",
			focus: !0,
			"onUpdate:modelValue": o[0] ||= (e) => E.value = e,
			onBlur: P,
			onConfirm: L
		}, null, 40, xe)), [[h, E.value]]) : a.dynamic ? (d(), p("div", {
			key: 1,
			class: "wd-tag__text",
			style: r(A.value),
			onClick: v(N, ["stop"])
		}, [i(a.$slots, "add", {}, () => [c(K, {
			name: "plus",
			"custom-class": "wd-tag__add"
		}), g("span", null, t(n(y)("add")), 1)])], 4)) : (d(), p(f, { key: 2 }, [
			u.icon || a.icon ? i(a.$slots, "icon", { key: 0 }, () => [c(K, {
				name: a.icon,
				"custom-class": "wd-tag__icon"
			}, null, 8, ["name"])]) : s("", !0),
			u.default ? (d(), p("div", {
				key: 1,
				class: "wd-tag__text",
				style: r(A.value)
			}, [i(a.$slots, "default")], 4)) : s("", !0),
			a.closable ? (d(), p("div", {
				key: 2,
				class: "wd-tag__close",
				onClick: v(M, ["stop"])
			}, [c(K, {
				name: "close",
				"custom-class": "wd-tag__close-icon"
			})])) : s("", !0)
		], 64))], 6));
	}
}), Se = {
	WdButton: Y,
	WdCard: X,
	WdTag: $,
	WdIcon: K,
	WdLoading: q
};
function Ce() {
	return { install(e) {
		e.component("wd-button", Y), e.component("wd-card", X), e.component("wd-tag", $), e.component("wd-icon", K), e.component("wd-loading", q);
	} };
}
//#endregion
export { b as Vue, Se as WotUI, Ce as createWotUIPlugin };
