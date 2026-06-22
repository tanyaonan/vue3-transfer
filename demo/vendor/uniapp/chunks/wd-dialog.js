globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, I as r, L as i, N as a, P as o, U as s, a as c, b as l, c as u, d, g as f, k as p, l as m, m as h, s as g, u as _, y as ee, z as te } from "./vue.runtime.js";
import { M as v, O as y, T as b, c as x, k as S, x as C, y as w } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as T, r as E, s as D, t as O } from "./shared/wot-ui/common/props.ts.js";
import { t as k } from "./wd-icon.js";
import { t as ne } from "./wd-popup.js";
import { t as A } from "./wd-button.js";
import { t as j } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as M } from "./shared/wot-ui/common/interceptor.ts.js";
import { t as re } from "./wd-input.js";
import { t as ie } from "./wd-textarea.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-dialog/types.ts
var N = {
	success: "check-circle-fill",
	info: "info-circle-fill",
	warning: "exclamation-circle-fill",
	danger: "close-circle-fill"
}, ae = [
	"onGetuserinfo",
	"onContact",
	"onGetphonenumber",
	"onGetrealtimephonenumber",
	"onError",
	"onLaunchapp",
	"onOpensetting",
	"onChooseavatar",
	"onAgreeprivacyauthorization"
], P = {
	...O,
	selector: D(""),
	rootPortal: E(!1),
	title: D(""),
	msg: D(""),
	type: D("alert"),
	theme: D("button"),
	zIndex: T(99),
	lazyRender: E(!0),
	headerImage: String,
	icon: String,
	iconColor: String,
	iconProps: Object,
	inputProps: Object,
	textareaProps: Object,
	inputPattern: RegExp,
	inputValidate: Function,
	inputError: String,
	showErr: { type: Boolean },
	actionLayout: D("horizontal"),
	confirmButtonProps: { type: [
		String,
		Object,
		null
	] },
	cancelButtonProps: { type: [
		String,
		Object,
		null
	] },
	showCancelButton: { type: Boolean },
	confirmButtonText: String,
	cancelButtonText: String,
	actions: Array,
	closeOnClickModal: E(!1),
	showClose: Boolean,
	beforeConfirm: Function
}, F = "__MESSAGE_OPTION__", oe = {
	title: "",
	show: !1,
	closeOnClickModal: !1,
	msg: "",
	type: "alert",
	inputProps: {
		type: "text",
		modelValue: ""
	},
	showErr: !1,
	zIndex: 99,
	lazyRender: !0,
	inputError: "",
	theme: "button",
	actionLayout: "horizontal",
	confirmButtonProps: {}
}, se = (e) => e ? `${F}${e}` : F, I = ["src"], L = {
	key: 0,
	class: "wd-dialog__title"
}, R = {
	key: 0,
	class: "wd-dialog__content"
}, z = {
	key: 2,
	class: "wd-dialog__input-error"
}, B = {
	key: 1,
	class: "wd-dialog__content-text"
}, V = /* @__PURE__ */ f({
	name: "wd-dialog",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: P,
	setup(f, { slots: T }) {
		let E = f, { translate: D } = j("dialog"), O = i(""), P = g(() => O.value ? `is-${O.value}` : ""), F = g(() => `wd-dialog__container ${E.customClass}`), V = g(() => `wd-dialog__body  ${W.type === "prompt" ? "is-prompt" : ""}`), H = ee(se(E.selector), i(oe)), U = i(""), W = r({
			msg: "",
			show: !1,
			title: "",
			closeOnClickModal: !1,
			type: "alert",
			inputProps: {
				type: "text",
				modelValue: ""
			},
			inputError: "",
			showErr: !1,
			zIndex: 99,
			lazyRender: !0,
			headerImage: "",
			showClose: !1,
			actionLayout: "horizontal",
			theme: "button"
		});
		function G() {
			let { confirmButtonProps: e } = W;
			return y(e) ? e : w(e) && b(e) && e.text ? e.text : D("confirm");
		}
		function ce() {
			let { cancelButtonProps: e } = W;
			return y(e) ? e : w(e) && b(e) && e.text ? e.text : D("cancel");
		}
		let K = g(() => w(W.cancelButtonProps)), le = g(() => w(W.confirmButtonProps)), ue = g(() => {
			if (!W.inputProps) return {};
			let { modelValue: e, ...t } = W.inputProps;
			return t;
		}), de = g(() => {
			if (!W.textareaProps) return {};
			let { modelValue: e, ...t } = W.textareaProps;
			return t;
		}), q = g(() => !W.actions || !W.actions.length ? [] : W.actions.map((e) => W.theme === "text" ? {
			...e,
			variant: "text"
		} : e));
		function fe(e) {
			let t = {};
			for (let n in e) !ae.includes(n) && n !== "click" && n !== "text" && (t[n] = e[n]);
			return t;
		}
		function J(e, t, n) {
			let r = e[t];
			C(r) && r(n);
		}
		function Y(e, t, n) {
			let r = e === "confirm" ? W.confirmButtonProps : W.cancelButtonProps;
			if (w(r) && b(r)) {
				let e = r[t];
				C(e) && e(n);
			}
		}
		let pe = g(() => {
			let e = { block: !0 }, { confirmButtonProps: t } = W;
			if (w(t) && b(t)) {
				let { text: n, ...r } = t;
				e = x(e, v(r, S));
			}
			return W.theme === "text" && (e.variant = "text"), e.customClass = `${e.customClass || ""} wd-dialog__actions-btn wd-dialog__actions-btn--confirm`, e;
		}), me = g(() => {
			let e = {
				block: !0,
				type: "info",
				variant: "plain"
			}, { cancelButtonProps: t } = W;
			if (w(t) && b(t)) {
				let { text: n, ...r } = t;
				e = x(e, v(r, S));
			}
			return W.theme === "text" && (e.variant = "text"), e.customClass = `${e.customClass || ""} wd-dialog__actions-btn`, e;
		});
		a(() => H.value, (e) => {
			_e(e);
		}, {
			deep: !0,
			immediate: !0
		}), a(() => W.show, (e) => {
			$(!!e);
		}, {
			deep: !0,
			immediate: !0
		});
		function X(e) {
			if (!(e === "modal" && !W.closeOnClickModal) && !(W.type === "prompt" && e === "confirm" && !ge())) switch (e) {
				case "confirm":
					W.beforeConfirm ? M(W.beforeConfirm, {
						args: [U.value],
						done: () => Z({
							action: e,
							value: U.value
						})
					}) : Z({
						action: e,
						value: U.value
					});
					break;
				case "cancel":
					Q({ action: e });
					break;
				case "modal":
				case "close":
					Q({ action: e });
					break;
			}
		}
		function he(e) {
			e.disabled || e.loading || (C(e.click) && e.click(), Z({
				action: "confirm",
				value: U.value
			}));
		}
		function Z(e) {
			W.show = !1, C(W.success) && W.success(e);
		}
		function Q(e) {
			W.show = !1, C(W.fail) && W.fail(e);
		}
		function ge() {
			return W.inputPattern && !W.inputPattern.test(String(U.value)) || C(W.inputValidate) && !W.inputValidate(U.value) ? (W.showErr = !0, !1) : (W.showErr = !1, !0);
		}
		function $(e) {
			e === !1 && (W.showErr = !1);
		}
		a(() => U.value, (e) => {
			e === "" && (W.showErr = !1);
		});
		function _e(e) {
			if (e) {
				W.title = w(e.title) ? e.title : "", W.show = e.show, W.closeOnClickModal = e.closeOnClickModal, W.msg = e.msg, W.type = e.type, W.inputProps = e.inputProps, W.textareaProps = e.textareaProps, w(e.inputValue) ? U.value = e.inputValue : e.textareaProps && w(e.textareaProps.modelValue) ? U.value = e.textareaProps.modelValue : e.inputProps && w(e.inputProps.modelValue) ? U.value = e.inputProps.modelValue : U.value = "", W.inputPattern = e.inputPattern, W.inputValidate = e.inputValidate, W.success = e.success, W.fail = e.fail, W.beforeConfirm = e.beforeConfirm, W.inputError = e.inputError, W.showErr = e.showErr, W.zIndex = e.zIndex, W.lazyRender = e.lazyRender, W.confirmButtonProps = e.confirmButtonProps, W.cancelButtonProps = e.cancelButtonProps, W.headerImage = e.headerImage;
				let t = e.iconProps?.name || e.icon;
				if (t && t in N) {
					let n = N[t];
					W.iconProps = {
						...e.iconProps,
						name: n
					}, O.value = t;
				} else W.iconProps = e.iconProps, O.value = "";
				W.showClose = e.showClose, W.actionLayout = e.actionLayout, W.theme = e.theme, W.actions = e.actions;
			}
		}
		return (r, i) => (n(), m(ne, {
			transition: "zoom-in",
			modelValue: W.show,
			"onUpdate:modelValue": i[23] ||= (e) => W.show = e,
			"close-on-click-modal": W.closeOnClickModal,
			"lazy-render": W.lazyRender,
			"custom-class": "wd-dialog",
			onClickModal: i[24] ||= (e) => X("modal"),
			"z-index": W.zIndex,
			duration: 200,
			"root-portal": r.rootPortal
		}, {
			default: o(() => [u("div", { class: t(F.value) }, [
				W.showClose ? (n(), m(k, {
					key: 0,
					"custom-class": "wd-dialog__close",
					name: "close",
					onClick: i[0] ||= (e) => X("close")
				})) : _("", !0),
				e(r.$slots, "header"),
				u("div", { class: t(V.value) }, [
					e(r.$slots, "image", {}, () => [W.headerImage ? (n(), d("img", {
						key: 0,
						mode: "widthFix",
						class: "wd-dialog__img",
						src: W.headerImage
					}, null, 8, I)) : _("", !0)]),
					e(r.$slots, "title", {
						icon: W.icon,
						title: W.title,
						iconProps: W.iconProps
					}, () => [W.iconProps?.name || W.title ? (n(), d("div", L, [W.iconProps?.name ? (n(), m(k, {
						key: 0,
						"custom-class": `wd-dialog__icon ${P.value}`,
						name: W.iconProps.name,
						color: W.iconProps.color,
						size: W.iconProps.size
					}, null, 8, [
						"custom-class",
						"name",
						"color",
						"size"
					])) : _("", !0), h(" " + s(W.title), 1)])) : _("", !0)]),
					W.type === "prompt" || W.msg || T.default ? (n(), d("div", R, [e(r.$slots, "default", {
						msg: W.msg,
						type: W.type,
						inputValue: U.value,
						showErr: W.showErr,
						inputError: W.inputError
					}, () => [W.type === "prompt" ? (n(), d(c, { key: 0 }, [W.textareaProps ? (n(), m(ie, l({
						key: 0,
						modelValue: U.value,
						"onUpdate:modelValue": i[1] ||= (e) => U.value = e,
						"custom-class": "wd-dialog__input"
					}, de.value), null, 16, ["modelValue"])) : (n(), m(re, l({
						key: 1,
						modelValue: U.value,
						"onUpdate:modelValue": i[2] ||= (e) => U.value = e,
						"custom-class": "wd-dialog__input"
					}, ue.value), null, 16, ["modelValue"])), W.showErr ? (n(), d("div", z, s(W.inputError || te(D)("inputNoValidate")), 1)) : _("", !0)], 64)) : (n(), d("span", B, s(W.msg), 1))])])) : _("", !0)
				], 2),
				e(r.$slots, "actions", {
					confirm: () => X("confirm"),
					cancel: () => X("cancel"),
					close: () => X("close")
				}, () => [u("div", { class: t(`wd-dialog__actions ${W.actionLayout === "vertical" ? "wd-dialog__actions--vertical" : ""} ${W.actionLayout === "vertical" || K.value || W.actions && W.actions.length > 1 ? "wd-dialog__flex" : "wd-dialog__block"} ${W.theme === "text" ? "is-text" : ""}`) }, [q.value && q.value.length ? (n(!0), d(c, { key: 0 }, p(q.value, (e, t) => (n(), m(A, l({ key: t }, { ref_for: !0 }, fe(e), {
					onClick: (t) => he(e),
					onGetuserinfo: (t) => J(e, "onGetuserinfo", t),
					onContact: (t) => J(e, "onContact", t),
					onGetphonenumber: (t) => J(e, "onGetphonenumber", t),
					onGetrealtimephonenumber: (t) => J(e, "onGetrealtimephonenumber", t),
					onError: (t) => J(e, "onError", t),
					onLaunchapp: (t) => J(e, "onLaunchapp", t),
					onOpensetting: (t) => J(e, "onOpensetting", t),
					onChooseavatar: (t) => J(e, "onChooseavatar", t),
					onAgreeprivacyauthorization: (t) => J(e, "onAgreeprivacyauthorization", t),
					"custom-class": "wd-dialog__actions-btn"
				}), {
					default: o(() => [h(s(e.text), 1)]),
					_: 2
				}, 1040, [
					"onClick",
					"onGetuserinfo",
					"onContact",
					"onGetphonenumber",
					"onGetrealtimephonenumber",
					"onError",
					"onLaunchapp",
					"onOpensetting",
					"onChooseavatar",
					"onAgreeprivacyauthorization"
				]))), 128)) : (n(), d(c, { key: 1 }, [K.value ? (n(), m(A, l({ key: 0 }, me.value, {
					onClick: i[3] ||= (e) => X("cancel"),
					onGetuserinfo: i[4] ||= (e) => Y("cancel", "onGetuserinfo", e),
					onContact: i[5] ||= (e) => Y("cancel", "onContact", e),
					onGetphonenumber: i[6] ||= (e) => Y("cancel", "onGetphonenumber", e),
					onGetrealtimephonenumber: i[7] ||= (e) => Y("cancel", "onGetrealtimephonenumber", e),
					onError: i[8] ||= (e) => Y("cancel", "onError", e),
					onLaunchapp: i[9] ||= (e) => Y("cancel", "onLaunchapp", e),
					onOpensetting: i[10] ||= (e) => Y("cancel", "onOpensetting", e),
					onChooseavatar: i[11] ||= (e) => Y("cancel", "onChooseavatar", e),
					onAgreeprivacyauthorization: i[12] ||= (e) => Y("cancel", "onAgreeprivacyauthorization", e)
				}), {
					default: o(() => [h(s(ce()), 1)]),
					_: 1
				}, 16)) : _("", !0), le.value ? (n(), m(A, l({ key: 1 }, pe.value, {
					onClick: i[13] ||= (e) => X("confirm"),
					onGetuserinfo: i[14] ||= (e) => Y("confirm", "onGetuserinfo", e),
					onContact: i[15] ||= (e) => Y("confirm", "onContact", e),
					onGetphonenumber: i[16] ||= (e) => Y("confirm", "onGetphonenumber", e),
					onGetrealtimephonenumber: i[17] ||= (e) => Y("confirm", "onGetrealtimephonenumber", e),
					onError: i[18] ||= (e) => Y("confirm", "onError", e),
					onLaunchapp: i[19] ||= (e) => Y("confirm", "onLaunchapp", e),
					onOpensetting: i[20] ||= (e) => Y("confirm", "onOpensetting", e),
					onChooseavatar: i[21] ||= (e) => Y("confirm", "onChooseavatar", e),
					onAgreeprivacyauthorization: i[22] ||= (e) => Y("confirm", "onAgreeprivacyauthorization", e)
				}), {
					default: o(() => [h(s(G()), 1)]),
					_: 1
				}, 16)) : _("", !0)], 64))], 2)])
			], 2)]),
			_: 3
		}, 8, [
			"modelValue",
			"close-on-click-modal",
			"lazy-render",
			"z-index",
			"root-portal"
		]));
	}
});
//#endregion
export { V as default };
