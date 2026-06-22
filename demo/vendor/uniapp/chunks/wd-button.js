globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, M as a, U as o, V as s, b as c, c as l, d as u, g as d, l as f, m as p, s as m, u as h } from "./vue.runtime.js";
import { M as g, k as _, y as v } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as y, r as b, s as x, t as S } from "./shared/wot-ui/common/props.ts.js";
import { t as C } from "./wd-icon.js";
import { t as w } from "./wd-loading.js";
import { t as T } from "./shared/wot-ui/composables/useGlobalConfig.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-button/types.ts
var E = {
	...S,
	round: {
		type: Boolean,
		default: void 0
	},
	disabled: b(!1),
	hairline: b(!1),
	block: b(!1),
	type: String,
	size: String,
	icon: String,
	classPrefix: x("wd-icon"),
	cssIcon: {
		type: [Boolean, String],
		default: !1
	},
	loading: b(!1),
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
	hoverStartTime: y(20),
	hoverStayTime: y(70),
	text: String,
	variant: String
}, D = [
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
], O = { class: "wd-button__content" }, k = {
	key: 2,
	class: "wd-button__text"
}, A = /*@__PURE__*/ d({
	name: "wd-button",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: E,
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
	setup(e, { emit: d, slots: y }) {
		let b = a(), x = e, S = T(), E = m(() => x.size || S.value.button?.size || "medium"), A = m(() => x.variant || S.value.button?.variant || "base"), j = m(() => x.type || S.value.button?.type || "primary"), M = m(() => _(x.round) ? _(S.value.button?.round) ? !1 : S.value.button?.round : x.round), N = d, P = m(() => {
			let e = v(x.loadingProps) ? g(x.loadingProps, _) : {};
			return e.customSpinnerClass = `${v(e.customSpinnerClass) ? e.customSpinnerClass : ""} wd-button__loading`, e.inheritColor = v(e.inheritColor) ? e.inheritColor : !0, e;
		}), F = m(() => x.disabled || x.loading ? void 0 : x.openType), I = m(() => !b.default && !x.text && !!(x.icon || x.cssIcon));
		function L(e) {
			!x.disabled && !x.loading && N("click", e);
		}
		function R(e) {
			x.scope === "phoneNumber" ? V(e) : x.scope === "userInfo" && z(e);
		}
		function z(e) {
			N("getuserinfo", e);
		}
		function B(e) {
			N("contact", e);
		}
		function V(e) {
			N("getphonenumber", e);
		}
		function H(e) {
			N("getrealtimephonenumber", e);
		}
		function U(e) {
			N("error", e);
		}
		function W(e) {
			N("launchapp", e);
		}
		function G(e) {
			N("opensetting", e);
		}
		function K(e) {
			N("chooseavatar", e);
		}
		function q(e) {
			N("agreeprivacyauthorization", e);
		}
		return (e, a) => (r(), u("button", {
			id: e.buttonId,
			"hover-class": `${e.disabled || e.loading ? "" : "wd-button--active"}`,
			style: i(e.customStyle),
			class: n([
				"wd-button",
				"is-" + j.value,
				"is-" + E.value,
				I.value ? "is-icon" : "",
				M.value ? "is-round" : "",
				e.hairline ? "is-hairline" : "",
				A.value === "base" ? "" : "is-" + A.value,
				e.disabled ? "is-disabled" : "",
				e.block ? "is-block" : "",
				e.loading ? "is-loading" : "",
				e.customClass
			]),
			"hover-start-time": e.hoverStartTime,
			"hover-stay-time": e.hoverStayTime,
			"open-type": F.value,
			"send-message-title": e.sendMessageTitle,
			"send-message-path": e.sendMessagePath,
			"send-message-img": e.sendMessageImg,
			"app-parameter": e.appParameter,
			"show-message-card": e.showMessageCard,
			"session-from": e.sessionFrom,
			lang: e.lang,
			"hover-stop-propagation": e.hoverStopPropagation,
			scope: e.scope,
			onClick: L,
			"on:getAuthorize": R,
			onGetuserinfo: z,
			onContact: B,
			onGetphonenumber: V,
			onGetrealtimephonenumber: H,
			onError: U,
			onLaunchapp: W,
			onOpensetting: G,
			onChooseavatar: K,
			onAgreeprivacyauthorization: q
		}, [l("div", O, [e.loading ? (r(), f(w, s(c({ key: 0 }, P.value)), null, 16)) : e.icon || e.cssIcon ? (r(), f(C, {
			key: 1,
			"custom-class": "wd-button__icon",
			name: e.icon,
			"class-prefix": e.classPrefix,
			"css-icon": e.cssIcon
		}, null, 8, [
			"name",
			"class-prefix",
			"css-icon"
		])) : h("", !0), y.default || e.text ? (r(), u("div", k, [t(e.$slots, "default", {}, () => [p(o(e.text), 1)])])) : h("", !0)])], 46, D));
	}
}), j = /* @__PURE__ */ e({ default: () => M }), M = A;
//#endregion
export { j as n, M as t };
