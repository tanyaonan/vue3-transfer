globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, Ft as t, G as n, H as r, J as i, M as a, Mt as o, Pt as s, S as c, T as l, U as u, Z as d, _ as f, b as p, l as m, m as h, n as g, nt as _, tt as v, ut as y, v as b, w as x, x as S, y as C, yt as w } from "./vue.runtime.js";
import { t as T } from "./shared/element-plus/utils/vue/install.js";
import { r as E } from "./shared/element-plus/hooks/use-namespace.js";
import { t as D } from "./shared/element-plus/utils/vue/icon.js";
import { t as O } from "./el-icon.js";
import { r as k, t as A } from "./el-focus-trap.js";
import { n as j } from "./shared/element-plus/hooks/use-locale.js";
import { t as M } from "./shared/element-plus/hooks/use-deprecated.js";
import { a as N, c as P, i as F, l as I, n as L, o as R, r as z, s as B, t as V } from "./el-dialog/dialog-content.js";
import { r as H, t as U } from "./el-overlay.js";
import { t as W } from "./shared/element-plus/utils/vue/refs.js";
import { t as G } from "./shared/element-plus/hooks/use-draggable.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/dialog/src/dialog-content.vue_vue_type_script_setup_true_lang.mjs
var K = ["aria-level"], q = ["aria-label"], J = ["id"], Y = /* @__PURE__ */ l({
	name: "ElDialogContent",
	__name: "dialog-content",
	props: I,
	emits: P,
	setup(a, { expose: c }) {
		let { t: l } = j(), { Close: u } = D, d = a, { dialogRef: m, headerRef: h, bodyId: g, ns: _, style: y } = e(z), { focusTrapRef: T } = e(k), E = W(T, m), A = f(() => !!d.draggable), { resetPosition: M, updatePosition: N, isDragging: P } = G(m, h, A, f(() => !!d.overflow)), F = f(() => [
			_.b(),
			_.is("fullscreen", d.fullscreen),
			_.is("draggable", A.value),
			_.is("dragging", P.value),
			_.is("align-center", !!d.alignCenter),
			{ [_.m("center")]: d.center }
		]);
		return c({
			resetPosition: M,
			updatePosition: N
		}), (e, c) => (r(), S("div", {
			ref: w(E),
			class: o(F.value),
			style: s(w(y)),
			tabindex: "-1"
		}, [
			b("header", {
				ref_key: "headerRef",
				ref: h,
				class: o([
					w(_).e("header"),
					a.headerClass,
					{ "show-close": a.showClose }
				])
			}, [n(e.$slots, "header", {}, () => [b("span", {
				role: "heading",
				"aria-level": a.ariaLevel,
				class: o(w(_).e("title"))
			}, t(a.title), 11, K)]), a.showClose ? (r(), S("button", {
				key: 0,
				"aria-label": w(l)("el.dialog.close"),
				class: o(w(_).e("headerbtn")),
				type: "button",
				onClick: c[0] ||= (t) => e.$emit("close")
			}, [x(w(O), { class: o(w(_).e("close")) }, {
				default: v(() => [(r(), C(i(a.closeIcon || w(u))))]),
				_: 1
			}, 8, ["class"])], 10, q)) : p("v-if", !0)], 2),
			b("div", {
				id: w(g),
				class: o([w(_).e("body"), a.bodyClass])
			}, [n(e.$slots, "default")], 10, J),
			e.$slots.footer ? (r(), S("footer", {
				key: 0,
				class: o([w(_).e("footer"), a.footerClass])
			}, [n(e.$slots, "footer")], 2)) : p("v-if", !0)
		], 6));
	}
}), X = [
	"aria-label",
	"aria-labelledby",
	"aria-describedby"
], Z = T(/* @__PURE__ */ l({
	name: "ElDialog",
	inheritAttrs: !1,
	__name: "dialog",
	props: R,
	emits: N,
	setup(e, { expose: t }) {
		let i = e, l = d();
		M({
			scope: "el-dialog",
			from: "the title slot",
			replacement: "the header slot",
			version: "3.0.0",
			ref: "https://element-plus.org/en-US/component/dialog.html#slots"
		}, f(() => !!l.title));
		let S = E("dialog"), T = y(), D = y(), O = y(), { visible: k, titleId: j, bodyId: N, style: P, overlayDialogStyle: F, rendered: I, transitionConfig: L, zIndex: R, _draggable: B, _alignCenter: W, _overflow: G, penetrable: K, handleClose: q, onModalClick: J, onOpenAutoFocus: Z, onCloseAutoFocus: Q, onCloseRequested: ee, onFocusoutPrevented: te, bringToFront: ne, closing: re } = V(i, T);
		u(z, {
			dialogRef: T,
			headerRef: D,
			bodyId: N,
			ns: S,
			rendered: I,
			style: P
		});
		let $ = H(J);
		return t({
			visible: k,
			dialogContentRef: O,
			resetPosition: () => {
				O.value?.resetPosition();
			},
			handleClose: q
		}), (t, i) => (r(), C(h, {
			to: e.appendTo,
			disabled: e.appendTo === "body" ? !e.appendToBody : !1
		}, [x(g, a(w(L), { persisted: "" }), {
			default: v(() => [_(x(w(U), {
				"custom-mask-event": "",
				mask: e.modal,
				"overlay-class": [
					e.modalClass ?? "",
					`${w(S).namespace.value}-modal-dialog`,
					w(S).is("penetrable", w(K))
				],
				"z-index": w(R)
			}, {
				default: v(() => [b("div", {
					role: "dialog",
					"aria-modal": "true",
					"aria-label": e.title || void 0,
					"aria-labelledby": e.title ? void 0 : w(j),
					"aria-describedby": w(N),
					class: o([`${w(S).namespace.value}-overlay-dialog`, w(S).is("closing", w(re))]),
					style: s(w(F)),
					onClick: i[0] ||= (...e) => w($).onClick && w($).onClick(...e),
					onMousedown: i[1] ||= (...e) => w($).onMousedown && w($).onMousedown(...e),
					onMouseup: i[2] ||= (...e) => w($).onMouseup && w($).onMouseup(...e)
				}, [x(w(A), {
					loop: "",
					trapped: w(k),
					"focus-start-el": "container",
					onFocusAfterTrapped: w(Z),
					onFocusAfterReleased: w(Q),
					onFocusoutPrevented: w(te),
					onReleaseRequested: w(ee)
				}, {
					default: v(() => [w(I) ? (r(), C(Y, a({
						key: 0,
						ref_key: "dialogContentRef",
						ref: O
					}, t.$attrs, {
						center: e.center,
						"align-center": w(W),
						"close-icon": e.closeIcon,
						draggable: w(B),
						overflow: w(G),
						fullscreen: e.fullscreen,
						"header-class": e.headerClass,
						"body-class": e.bodyClass,
						"footer-class": e.footerClass,
						"show-close": e.showClose,
						title: e.title,
						"aria-level": e.headerAriaLevel,
						onClose: w(q),
						onMousedown: w(ne)
					}), c({
						header: v(() => [t.$slots.title ? n(t.$slots, "title", { key: 1 }) : n(t.$slots, "header", {
							key: 0,
							close: w(q),
							titleId: w(j),
							titleClass: w(S).e("title")
						})]),
						default: v(() => [n(t.$slots, "default")]),
						_: 2
					}, [t.$slots.footer ? {
						name: "footer",
						fn: v(() => [n(t.$slots, "footer")]),
						key: "0"
					} : void 0]), 1040, [
						"center",
						"align-center",
						"close-icon",
						"draggable",
						"overflow",
						"fullscreen",
						"header-class",
						"body-class",
						"footer-class",
						"show-close",
						"title",
						"aria-level",
						"onClose",
						"onMousedown"
					])) : p("v-if", !0)]),
					_: 3
				}, 8, [
					"trapped",
					"onFocusAfterTrapped",
					"onFocusAfterReleased",
					"onFocusoutPrevented",
					"onReleaseRequested"
				])], 46, X)]),
				_: 3
			}, 8, [
				"mask",
				"overlay-class",
				"z-index"
			]), [[m, w(k)]])]),
			_: 3
		}, 16)], 8, ["to", "disabled"]));
	}
}));
//#endregion
export { L as DEFAULT_DIALOG_TRANSITION, Z as ElDialog, Z as default, F as dialogContextKey, N as dialogEmits, z as dialogInjectionKey, R as dialogProps, B as dialogPropsDefaults, V as useDialog };
