globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, C as t, Ct as n, Dt as r, Ft as i, G as a, H as o, I as ee, J as s, K as c, Mt as l, N as u, Ot as d, Pt as f, T as p, _ as m, a as h, b as g, ct as _, d as v, gt as y, j as b, jt as x, l as S, n as C, nt as w, ot as T, tt as E, u as D, ut as O, v as k, w as A, x as j, y as M, z as te } from "./vue.runtime.js";
import { n as N, s as P } from "./shared/element-plus/utils/types.js";
import { t as F } from "./shared/element-plus/utils/error.js";
import { s as I } from "./shared/element-plus/utils/dom/aria.js";
import { _ as L } from "./shared/vueuse.js";
import { C as R } from "./shared/element-plus-icons.js";
import { n as z, r as B } from "./shared/element-plus/utils/vue/icon.js";
import { t as V } from "./el-icon.js";
import { t as ne } from "./el-input.js";
import { a as re, n as ie } from "./shared/element-plus/constants/aria.js";
import { t as H } from "./shared/element-plus/hooks/use-id.js";
import { t as ae } from "./el-focus-trap.js";
import { t as oe } from "./shared/element-plus/virtual/_plugin-vue_export-helper.js";
import { t as U } from "./el-button.js";
import { n as W } from "./el-config-provider/constants.js";
import { t as G } from "./shared/element-plus/hooks/use-lockscreen.js";
import { r as K, t as se } from "./el-overlay.js";
import { t as ce } from "./shared/element-plus/hooks/use-draggable.js";
import { t as le } from "./shared/element-plus/utils/vue/validator.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/directives/trap-focus/index.mjs
var q = "_trap-focus-children", J = [], Y = (e) => {
	if (J.length === 0) return;
	let t = ie(e), n = J[J.length - 1][q];
	if (n.length > 0 && t === re.tab) {
		if (n.length === 1) {
			e.preventDefault(), document.activeElement !== n[0] && n[0].focus();
			return;
		}
		let t = e.shiftKey, r = e.target === n[0], i = e.target === n[n.length - 1];
		r && t && (e.preventDefault(), n[n.length - 1].focus()), i && !t && (e.preventDefault(), n[0].focus());
	}
}, ue = p({
	name: "ElMessageBox",
	directives: { TrapFocus: {
		beforeMount(e) {
			e[q] = I(e), J.push(e), J.length <= 1 && document.addEventListener("keydown", Y);
		},
		updated(e) {
			u(() => {
				e[q] = I(e);
			});
		},
		unmounted() {
			J.shift(), J.length === 0 && document.removeEventListener("keydown", Y);
		}
	} },
	components: {
		ElButton: U,
		ElFocusTrap: ae,
		ElInput: ne,
		ElOverlay: se,
		ElIcon: V,
		...z
	},
	inheritAttrs: !1,
	props: {
		buttonSize: {
			type: String,
			validator: le
		},
		modal: {
			type: Boolean,
			default: !0
		},
		lockScroll: {
			type: Boolean,
			default: !0
		},
		showClose: {
			type: Boolean,
			default: !0
		},
		closeOnClickModal: {
			type: Boolean,
			default: !0
		},
		closeOnPressEscape: {
			type: Boolean,
			default: !0
		},
		closeOnHashChange: {
			type: Boolean,
			default: !0
		},
		center: Boolean,
		draggable: Boolean,
		overflow: Boolean,
		roundButton: Boolean,
		container: {
			type: String,
			default: "body"
		},
		boxType: {
			type: String,
			default: ""
		}
	},
	emits: ["vanish", "action"],
	setup(t, { emit: n }) {
		let { locale: i, zIndex: a, ns: o, size: s } = W("message-box", m(() => t.buttonSize)), { t: c } = i, { nextZIndex: l } = a, d = O(!1), f = _({
			autofocus: !0,
			beforeClose: null,
			callback: null,
			cancelButtonText: "",
			cancelButtonClass: "",
			confirmButtonText: "",
			confirmButtonClass: "",
			cancelButtonType: "",
			confirmButtonType: "primary",
			customClass: "",
			customStyle: {},
			dangerouslyUseHTMLString: !1,
			distinguishCancelAndClose: !1,
			icon: "",
			closeIcon: "",
			inputPattern: null,
			inputPlaceholder: "",
			inputType: "text",
			inputValue: "",
			inputValidator: void 0,
			inputErrorMessage: "",
			message: "",
			modalFade: !0,
			modalClass: "",
			showCancelButton: !1,
			showConfirmButton: !0,
			type: "",
			title: void 0,
			showInput: !1,
			action: "",
			confirmButtonLoading: !1,
			cancelButtonLoading: !1,
			confirmButtonLoadingIcon: T(R),
			cancelButtonLoadingIcon: T(R),
			confirmButtonDisabled: !1,
			editorErrorMessage: "",
			validateError: !1,
			zIndex: l()
		}), p = m(() => {
			let e = f.type;
			return { [o.bm("icon", e)]: e && B[e] };
		}), h = H(), g = H(), v = m(() => {
			let e = f.type;
			return f.icon || e && B[e] || "";
		}), b = m(() => !!f.message), S = O(), C = O(), w = O(), E = O(), D = O(), k = m(() => f.confirmButtonClass);
		e(() => f.inputValue, async (e) => {
			await u(), t.boxType === "prompt" && e && I();
		}, { immediate: !0 }), e(() => d.value, (e) => {
			e && (t.boxType !== "prompt" && (f.autofocus ? w.value = D.value?.$el ?? S.value : w.value = S.value), f.zIndex = l()), t.boxType === "prompt" && (e ? u().then(() => {
				E.value && E.value.$el && (f.autofocus ? w.value = L() ?? S.value : w.value = S.value);
			}) : (f.editorErrorMessage = "", f.validateError = !1));
		});
		let { isDragging: A } = ce(S, C, m(() => t.draggable), m(() => t.overflow));
		te(async () => {
			await u(), t.closeOnHashChange && window.addEventListener("hashchange", j);
		}), ee(() => {
			t.closeOnHashChange && window.removeEventListener("hashchange", j);
		});
		function j() {
			d.value && (d.value = !1, u(() => {
				f.action && n("action", f.action);
			}));
		}
		let M = () => {
			t.closeOnClickModal && F(f.distinguishCancelAndClose ? "close" : "cancel");
		}, N = K(M), P = (e) => {
			if (f.inputType !== "textarea" && !E.value?.isComposing) return e.preventDefault(), F("confirm");
		}, F = (e) => {
			t.boxType === "prompt" && e === "confirm" && !I() || (f.action = e, f.beforeClose ? f.beforeClose?.(e, f, j) : j());
		}, I = () => {
			if (t.boxType === "prompt") {
				let e = f.inputPattern;
				if (e && !e.test(f.inputValue || "")) return f.editorErrorMessage = f.inputErrorMessage || c("el.messagebox.error"), f.validateError = !0, !1;
				let t = f.inputValidator;
				if (r(t)) {
					let e = t(f.inputValue);
					if (e === !1) return f.editorErrorMessage = f.inputErrorMessage || c("el.messagebox.error"), f.validateError = !0, !1;
					if (x(e)) return f.editorErrorMessage = e, f.validateError = !0, !1;
				}
			}
			return f.editorErrorMessage = "", f.validateError = !1, !0;
		}, L = () => {
			let e = E.value?.$refs;
			return e?.input ?? e?.textarea;
		}, z = () => {
			F("close");
		}, V = () => {
			t.closeOnPressEscape && z();
		};
		return t.lockScroll && G(d, { ns: o }), {
			...y(f),
			ns: o,
			overlayEvent: N,
			visible: d,
			hasMessage: b,
			typeClass: p,
			contentId: h,
			inputId: g,
			btnSize: s,
			iconComponent: v,
			confirmButtonClasses: k,
			rootRef: S,
			focusStartRef: w,
			headerRef: C,
			inputRef: E,
			isDragging: A,
			confirmRef: D,
			doClose: j,
			handleClose: z,
			onCloseRequested: V,
			handleWrapperClick: M,
			handleInputEnter: P,
			handleAction: F,
			t: c
		};
	}
}), de = ["aria-label", "aria-describedby"], fe = ["aria-label"], pe = ["id"];
function me(e, n, r, ee, u, d) {
	let p = c("el-icon"), m = c("el-input"), h = c("el-button"), _ = c("el-focus-trap"), y = c("el-overlay");
	return o(), M(C, {
		name: "fade-in-linear",
		onAfterLeave: n[11] ||= (t) => e.$emit("vanish"),
		persisted: ""
	}, {
		default: E(() => [w(A(y, {
			"z-index": e.zIndex,
			"overlay-class": [e.ns.is("message-box"), e.modalClass],
			mask: e.modal
		}, {
			default: E(() => [k("div", {
				role: "dialog",
				"aria-label": e.title,
				"aria-modal": "true",
				"aria-describedby": e.showInput ? void 0 : e.contentId,
				class: l(`${e.ns.namespace.value}-overlay-message-box`),
				onClick: n[8] ||= (...t) => e.overlayEvent.onClick && e.overlayEvent.onClick(...t),
				onMousedown: n[9] ||= (...t) => e.overlayEvent.onMousedown && e.overlayEvent.onMousedown(...t),
				onMouseup: n[10] ||= (...t) => e.overlayEvent.onMouseup && e.overlayEvent.onMouseup(...t)
			}, [A(_, {
				loop: "",
				trapped: e.visible,
				"focus-trap-el": e.rootRef,
				"focus-start-el": e.focusStartRef,
				onReleaseRequested: e.onCloseRequested
			}, {
				default: E(() => [k("div", {
					ref: "rootRef",
					class: l([
						e.ns.b(),
						e.customClass,
						e.ns.is("draggable", e.draggable),
						e.ns.is("dragging", e.isDragging),
						{ [e.ns.m("center")]: e.center }
					]),
					style: f(e.customStyle),
					tabindex: "-1",
					onClick: n[7] ||= v(() => {}, ["stop"])
				}, [
					e.title !== null && e.title !== void 0 ? (o(), j("div", {
						key: 0,
						ref: "headerRef",
						class: l([e.ns.e("header"), { "show-close": e.showClose }])
					}, [k("div", { class: l(e.ns.e("title")) }, [e.iconComponent && e.center ? (o(), M(p, {
						key: 0,
						class: l([e.ns.e("status"), e.typeClass])
					}, {
						default: E(() => [(o(), M(s(e.iconComponent)))]),
						_: 1
					}, 8, ["class"])) : g("v-if", !0), k("span", null, i(e.title), 1)], 2), e.showClose ? (o(), j("button", {
						key: 0,
						type: "button",
						class: l(e.ns.e("headerbtn")),
						"aria-label": e.t("el.messagebox.close"),
						onClick: n[0] ||= (t) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"),
						onKeydown: n[1] ||= D(v((t) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"])
					}, [A(p, { class: l(e.ns.e("close")) }, {
						default: E(() => [(o(), M(s(e.closeIcon || "close")))]),
						_: 1
					}, 8, ["class"])], 42, fe)) : g("v-if", !0)], 2)) : g("v-if", !0),
					k("div", {
						id: e.contentId,
						class: l(e.ns.e("content"))
					}, [k("div", { class: l(e.ns.e("container")) }, [e.iconComponent && !e.center && e.hasMessage ? (o(), M(p, {
						key: 0,
						class: l([e.ns.e("status"), e.typeClass])
					}, {
						default: E(() => [(o(), M(s(e.iconComponent)))]),
						_: 1
					}, 8, ["class"])) : g("v-if", !0), e.hasMessage ? (o(), j("div", {
						key: 1,
						class: l(e.ns.e("message"))
					}, [a(e.$slots, "default", {}, () => [e.dangerouslyUseHTMLString ? (o(), M(s(e.showInput ? "label" : "p"), {
						key: 1,
						for: e.showInput ? e.inputId : void 0,
						innerHTML: e.message
					}, null, 8, ["for", "innerHTML"])) : (o(), M(s(e.showInput ? "label" : "p"), {
						key: 0,
						for: e.showInput ? e.inputId : void 0,
						textContent: i(e.message)
					}, null, 8, ["for", "textContent"]))])], 2)) : g("v-if", !0)], 2), w(k("div", { class: l(e.ns.e("input")) }, [A(m, {
						id: e.inputId,
						ref: "inputRef",
						modelValue: e.inputValue,
						"onUpdate:modelValue": n[2] ||= (t) => e.inputValue = t,
						type: e.inputType,
						placeholder: e.inputPlaceholder,
						"aria-invalid": e.validateError,
						class: l({ invalid: e.validateError }),
						onKeydown: D(e.handleInputEnter, ["enter"])
					}, null, 8, [
						"id",
						"modelValue",
						"type",
						"placeholder",
						"aria-invalid",
						"class",
						"onKeydown"
					]), k("div", {
						class: l(e.ns.e("errormsg")),
						style: f({ visibility: e.editorErrorMessage ? "visible" : "hidden" })
					}, i(e.editorErrorMessage), 7)], 2), [[S, e.showInput]])], 10, pe),
					e.showCancelButton || e.showConfirmButton ? (o(), j("div", {
						key: 1,
						class: l(e.ns.e("btns"))
					}, [e.showCancelButton ? (o(), M(h, {
						key: 0,
						type: e.cancelButtonType === "text" ? "" : e.cancelButtonType,
						text: e.cancelButtonType === "text",
						loading: e.cancelButtonLoading,
						"loading-icon": e.cancelButtonLoadingIcon,
						class: l([e.cancelButtonClass]),
						round: e.roundButton,
						size: e.btnSize,
						onClick: n[3] ||= (t) => e.handleAction("cancel"),
						onKeydown: n[4] ||= D(v((t) => e.handleAction("cancel"), ["prevent"]), ["enter"])
					}, {
						default: E(() => [t(i(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)]),
						_: 1
					}, 8, [
						"type",
						"text",
						"loading",
						"loading-icon",
						"class",
						"round",
						"size"
					])) : g("v-if", !0), w(A(h, {
						ref: "confirmRef",
						type: e.confirmButtonType === "text" ? "" : e.confirmButtonType,
						text: e.confirmButtonType === "text",
						loading: e.confirmButtonLoading,
						"loading-icon": e.confirmButtonLoadingIcon,
						class: l([e.confirmButtonClasses]),
						round: e.roundButton,
						disabled: e.confirmButtonDisabled,
						size: e.btnSize,
						onClick: n[5] ||= (t) => e.handleAction("confirm"),
						onKeydown: n[6] ||= D(v((t) => e.handleAction("confirm"), ["prevent"]), ["enter"])
					}, {
						default: E(() => [t(i(e.confirmButtonText || e.t("el.messagebox.confirm")), 1)]),
						_: 1
					}, 8, [
						"type",
						"text",
						"loading",
						"loading-icon",
						"class",
						"round",
						"disabled",
						"size"
					]), [[S, e.showConfirmButton]])], 2)) : g("v-if", !0)
				], 6)]),
				_: 3
			}, 8, [
				"trapped",
				"focus-trap-el",
				"focus-start-el",
				"onReleaseRequested"
			])], 42, de)]),
			_: 3
		}, 8, [
			"z-index",
			"overlay-class",
			"mask"
		]), [[S, e.visible]])]),
		_: 3
	});
}
var he = /* @__PURE__ */ oe(ue, [["render", me]]), X = /* @__PURE__ */ new Map(), ge = (e) => {
	let t = document.body;
	return e.appendTo && (x(e.appendTo) && (t = document.querySelector(e.appendTo)), N(e.appendTo) && (t = e.appendTo), N(t) || (F("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body."), t = document.body)), t;
}, Z = (e, t) => {
	let n = e.component?.proxy;
	return () => n.handleAction(t);
}, _e = (e, t, n = null) => {
	let i = A(he, e, r(e.message) || b(e.message) ? { default: r(e.message) ? () => e.message({
		confirm: Z(i, "confirm"),
		cancel: Z(i, "cancel"),
		close: Z(i, "close")
	}) : () => e.message } : null);
	return i.appContext = n, h(i, t), ge(e).appendChild(t.firstElementChild), i.component;
}, ve = () => document.createElement("div"), ye = (e, t) => {
	let r = ve();
	e.onVanish = () => {
		h(null, r), X.delete(a);
	}, e.onAction = (t) => {
		let n = X.get(a), r;
		r = e.showInput ? {
			value: a.inputValue,
			action: t
		} : t, e.callback ? e.callback(r, i.proxy) : t === "cancel" || t === "close" ? e.distinguishCancelAndClose && t !== "cancel" ? n.reject("close") : n.reject("cancel") : n.resolve(r);
	};
	let i = _e(e, r, t), a = i.proxy;
	for (let t in e) n(e, t) && !n(a.$props, t) && (t === "closeIcon" && d(e[t]) ? a[t] = T(e[t]) : a[t] = e[t]);
	return a.visible = !0, a;
};
function Q(e, t = null) {
	if (!L) return Promise.reject();
	let n;
	return x(e) || b(e) ? e = { message: e } : n = e.callback, new Promise((r, i) => {
		let a = ye(e, t ?? Q._context);
		X.set(a, {
			options: e,
			callback: n,
			resolve: r,
			reject: i
		});
	});
}
var be = [
	"alert",
	"confirm",
	"prompt"
], xe = {
	alert: {
		closeOnPressEscape: !1,
		closeOnClickModal: !1
	},
	confirm: { showCancelButton: !0 },
	prompt: {
		showCancelButton: !0,
		showInput: !0
	}
};
be.forEach((e) => {
	Q[e] = Se(e);
});
function Se(e) {
	return (t, n, r, i) => {
		let a = "";
		return d(n) ? (r = n, a = "") : a = P(n) ? "" : n, Q(Object.assign({
			title: a,
			message: t,
			type: "",
			...xe[e]
		}, r, { boxType: e }), i);
	};
}
Q.close = () => {
	X.forEach((e, t) => {
		t.doClose();
	}), X.clear();
}, Q._context = null;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/message-box/index.mjs
var $ = Q;
$.install = (e) => {
	$._context = e._context, e.config.globalProperties.$msgbox = $, e.config.globalProperties.$messageBox = $, e.config.globalProperties.$alert = $.alert, e.config.globalProperties.$confirm = $.confirm, e.config.globalProperties.$prompt = $.prompt;
};
var Ce = $;
//#endregion
export { Ce as ElMessageBox, $ as default };
