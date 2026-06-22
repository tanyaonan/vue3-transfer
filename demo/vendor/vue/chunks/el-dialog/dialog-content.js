globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, Dt as t, E as n, N as r, Ot as i, Tt as a, _ as o, ut as s, z as c } from "../vue.runtime.js";
import { t as l } from "../shared/element-plus/utils/types.js";
import { r as u } from "../shared/element-plus/constants/event.js";
import { n as d, r as f } from "../shared/element-plus/utils/vue/props/runtime.js";
import { t as p } from "../shared/element-plus/utils/error.js";
import { _ as m, w as h } from "../shared/vueuse.js";
import { n as g } from "../shared/element-plus/utils/dom/style.js";
import { a as _ } from "../shared/element-plus/utils/vue/icon.js";
import { t as v } from "../shared/element-plus/hooks/use-id.js";
import { n as y } from "../shared/element-plus/hooks/use-z-index.js";
import { r as b } from "../el-config-provider/constants.js";
import { t as x } from "../shared/element-plus/hooks/use-lockscreen.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/dialog/src/dialog-content.mjs
var S = d({
	center: Boolean,
	alignCenter: {
		type: Boolean,
		default: void 0
	},
	closeIcon: { type: _ },
	draggable: {
		type: Boolean,
		default: void 0
	},
	overflow: {
		type: Boolean,
		default: void 0
	},
	fullscreen: Boolean,
	headerClass: String,
	bodyClass: String,
	footerClass: String,
	showClose: {
		type: Boolean,
		default: !0
	},
	title: {
		type: String,
		default: ""
	},
	ariaLevel: {
		type: String,
		default: "2"
	}
}), C = { close: () => !0 }, w = {
	alignCenter: void 0,
	draggable: void 0,
	overflow: void 0,
	showClose: !0,
	title: "",
	ariaLevel: "2"
}, T = d({
	...S,
	appendToBody: Boolean,
	appendTo: {
		type: f([String, Object]),
		default: "body"
	},
	beforeClose: { type: f(Function) },
	destroyOnClose: Boolean,
	closeOnClickModal: {
		type: Boolean,
		default: !0
	},
	closeOnPressEscape: {
		type: Boolean,
		default: !0
	},
	lockScroll: {
		type: Boolean,
		default: !0
	},
	modal: {
		type: Boolean,
		default: !0
	},
	modalPenetrable: Boolean,
	openDelay: {
		type: Number,
		default: 0
	},
	closeDelay: {
		type: Number,
		default: 0
	},
	top: { type: String },
	modelValue: Boolean,
	modalClass: String,
	headerClass: String,
	bodyClass: String,
	footerClass: String,
	width: { type: [String, Number] },
	zIndex: { type: Number },
	trapFocus: Boolean,
	headerAriaLevel: {
		type: String,
		default: "2"
	},
	transition: {
		type: f([String, Object]),
		default: void 0
	}
}), E = {
	open: () => !0,
	opened: () => !0,
	close: () => !0,
	closed: () => !0,
	[u]: (e) => l(e),
	openAutoFocus: () => !0,
	closeAutoFocus: () => !0
}, D = Symbol("dialogContextKey"), O = {
	...w,
	appendTo: "body",
	closeOnClickModal: !0,
	closeOnPressEscape: !0,
	lockScroll: !0,
	modal: !0,
	openDelay: 0,
	closeDelay: 0,
	headerAriaLevel: "2",
	transition: void 0
}, k = Symbol("dialogInjectionKey"), A = "dialog-fade", j = "ElDialog", M = (l, d) => {
	let f = n().emit, { nextZIndex: _ } = y(), S = "", C = v(), w = v(), T = s(!1), E = s(!1), D = s(!1), O = s(l.zIndex ?? _()), k = s(!1), M, N, P = b(), F = o(() => P.value?.namespace ?? "el"), I = o(() => P.value?.dialog), L = o(() => {
		let e = {}, t = `--${F.value}-dialog`;
		if (!l.fullscreen) {
			l.top && (e[`${t}-margin-top`] = l.top);
			let n = g(l.width);
			n && (e[`${t}-width`] = n);
		}
		return e;
	}), R = o(() => (l.draggable ?? I.value?.draggable ?? !1) && !l.fullscreen), z = o(() => l.alignCenter ?? I.value?.alignCenter ?? !1), B = o(() => l.overflow ?? I.value?.overflow ?? !1), V = o(() => l.modalPenetrable && !l.modal && !l.fullscreen), H = o(() => z.value ? { display: "flex" } : {}), U = o(() => {
		let e = l.transition ?? I.value?.transition ?? "dialog-fade", n = {
			name: e,
			onAfterEnter: W,
			onBeforeLeave: K,
			onAfterLeave: G
		};
		if (i(e)) {
			let n = { ...e }, r = (e, n) => (r) => {
				a(e) ? e.forEach((e) => {
					t(e) && e(r);
				}) : t(e) && e(r), n();
			};
			return n.onAfterEnter = r(n.onAfterEnter, W), n.onBeforeLeave = r(n.onBeforeLeave, K), n.onAfterLeave = r(n.onAfterLeave, G), n.name || (n.name = A, p(j, `transition.name is missing when using object syntax, fallback to '${A}'`)), n;
		}
		return n;
	});
	function W() {
		f("opened");
	}
	function G() {
		f("closed"), f(u, !1), l.destroyOnClose && (D.value = !1), k.value = !1;
	}
	function K() {
		k.value = !0, f("close");
	}
	function q() {
		N?.(), M?.(), l.openDelay && l.openDelay > 0 ? {stop: M} = h(() => Z(), l.openDelay) : Z();
	}
	function J() {
		M?.(), N?.(), l.closeDelay && l.closeDelay > 0 ? {stop: N} = h(() => Q(), l.closeDelay) : Q();
	}
	function Y() {
		function e(e) {
			e || (E.value = !0, T.value = !1);
		}
		l.beforeClose ? l.beforeClose(e) : J();
	}
	function X() {
		l.closeOnClickModal && Y();
	}
	function Z() {
		m && (T.value = !0);
	}
	function Q() {
		T.value = !1;
	}
	function $() {
		f("openAutoFocus");
	}
	function ee() {
		f("closeAutoFocus");
	}
	function te(e) {
		e.detail?.focusReason === "pointer" && e.preventDefault();
	}
	l.lockScroll && x(T);
	function ne() {
		l.closeOnPressEscape && Y();
	}
	function re() {
		!T.value || !V.value || l.zIndex !== void 0 || (O.value = _());
	}
	return e(() => l.zIndex, () => {
		O.value = l.zIndex ?? _();
	}), e(() => l.modelValue, (e) => {
		e ? (E.value = !1, k.value = !1, q(), D.value = !0, O.value = l.zIndex ?? _(), r(() => {
			f("open"), d.value && (d.value.parentElement.scrollTop = 0, d.value.parentElement.scrollLeft = 0, d.value.scrollTop = 0);
		})) : T.value && J();
	}), e(() => l.fullscreen, (e) => {
		d.value && (e ? (S = d.value.style.transform, d.value.style.transform = "") : d.value.style.transform = S);
	}), c(() => {
		l.modelValue && (T.value = !0, D.value = !0, q());
	}), {
		afterEnter: W,
		afterLeave: G,
		beforeLeave: K,
		handleClose: Y,
		onModalClick: X,
		close: J,
		doClose: Q,
		onOpenAutoFocus: $,
		onCloseAutoFocus: ee,
		onCloseRequested: ne,
		onFocusoutPrevented: te,
		bringToFront: re,
		titleId: C,
		bodyId: w,
		closed: E,
		style: L,
		overlayDialogStyle: H,
		rendered: D,
		visible: T,
		zIndex: O,
		transitionConfig: U,
		_draggable: R,
		_alignCenter: z,
		_overflow: B,
		closing: k,
		penetrable: V
	};
};
//#endregion
export { E as a, C as c, D as i, S as l, A as n, T as o, k as r, O as s, M as t };
