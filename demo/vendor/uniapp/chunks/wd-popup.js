globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, D as n, L as r, P as i, S as a, c as o, d as s, g as c, h as l, l as u, s as d, u as f } from "./vue.runtime.js";
import { m as p } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as m, r as h, s as g, t as _ } from "./shared/wot-ui/common/props.ts.js";
import { t as v } from "./wd-icon.js";
import { t as y } from "./wd-transition.js";
import { t as b } from "./wd-overlay.js";
import { t as x } from "./wd-root-portal.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-popup/types.ts
var S = {
	..._,
	transition: String,
	closable: h(!1),
	position: g("center"),
	closeOnClickModal: h(!0),
	duration: {
		type: [Number, Boolean],
		default: 300
	},
	modal: h(!0),
	zIndex: m(10),
	hideWhenClose: h(!0),
	modalStyle: g(""),
	safeAreaInsetBottom: h(!1),
	modelValue: h(!1),
	lazyRender: h(!0),
	lockScroll: h(!0),
	rootPortal: h(!1),
	round: h(!1)
}, C = { class: "wd-popup-wrapper" }, w = {
	key: 1,
	class: "wd-popup-wrapper"
}, T = /*@__PURE__*/ c({
	name: "wd-popup",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: S,
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
	setup(e, { emit: c }) {
		let m = e, h = c, g = d(() => m.transition ? m.transition : m.position === "center" ? ["zoom-in", "fade"] : m.position === "left" ? "slide-left" : m.position === "right" ? "slide-right" : m.position === "bottom" ? "slide-up" : m.position === "top" ? "slide-down" : "slide-up"), _ = r(0), S = d(() => `z-index:${m.zIndex}; padding-bottom: ${_.value}px;${m.customStyle}`), T = d(() => `wd-popup wd-popup--${m.position} ${!m.transition && m.position === "center" ? "is-deep" : ""} ${m.round ? "is-round" : ""} ${m.customClass || ""}`);
		a(() => {
			if (m.safeAreaInsetBottom) {
				let { safeArea: e, screenHeight: t, safeAreaInsets: n } = p();
				e ? _.value = n ? n.bottom : 0 : _.value = 0;
			}
		});
		function E() {
			h("click-modal"), m.closeOnClickModal && D();
		}
		function D() {
			h("close"), h("update:modelValue", !1);
		}
		function O() {}
		return (e, r) => e.rootPortal ? (n(), u(x, { key: 0 }, {
			default: i(() => [o("div", C, [e.modal ? (n(), u(b, {
				key: 0,
				show: e.modelValue,
				"z-index": e.zIndex,
				"lock-scroll": e.lockScroll,
				duration: e.duration,
				"custom-style": e.modalStyle,
				onClick: E,
				onTouchmove: O
			}, null, 8, [
				"show",
				"z-index",
				"lock-scroll",
				"duration",
				"custom-style"
			])) : f("", !0), l(y, {
				"lazy-render": e.lazyRender,
				"custom-class": T.value,
				"custom-style": S.value,
				duration: e.duration,
				show: e.modelValue,
				name: g.value,
				destroy: e.hideWhenClose,
				onBeforeEnter: r[0] ||= (e) => h("before-enter"),
				onEnter: r[1] ||= (e) => h("enter"),
				onAfterEnter: r[2] ||= (e) => h("after-enter"),
				onBeforeLeave: r[3] ||= (e) => h("before-leave"),
				onLeave: r[4] ||= (e) => h("leave"),
				onAfterLeave: r[5] ||= (e) => h("after-leave")
			}, {
				default: i(() => [t(e.$slots, "default"), e.closable ? (n(), u(v, {
					key: 0,
					"custom-class": "wd-popup__close",
					name: "close",
					onClick: D
				})) : f("", !0)]),
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
		})) : (n(), s("div", w, [e.modal ? (n(), u(b, {
			key: 0,
			show: e.modelValue,
			"z-index": e.zIndex,
			"lock-scroll": e.lockScroll,
			duration: e.duration,
			"custom-style": e.modalStyle,
			onClick: E,
			onTouchmove: O
		}, null, 8, [
			"show",
			"z-index",
			"lock-scroll",
			"duration",
			"custom-style"
		])) : f("", !0), l(y, {
			"lazy-render": e.lazyRender,
			"custom-class": T.value,
			"custom-style": S.value,
			duration: e.duration,
			show: e.modelValue,
			name: g.value,
			destroy: e.hideWhenClose,
			onBeforeEnter: r[6] ||= (e) => h("before-enter"),
			onEnter: r[7] ||= (e) => h("enter"),
			onAfterEnter: r[8] ||= (e) => h("after-enter"),
			onBeforeLeave: r[9] ||= (e) => h("before-leave"),
			onLeave: r[10] ||= (e) => h("leave"),
			onAfterLeave: r[11] ||= (e) => h("after-leave")
		}, {
			default: i(() => [t(e.$slots, "default"), e.closable ? (n(), u(v, {
				key: 0,
				"custom-class": "wd-popup__close",
				name: "close",
				onClick: D
			})) : f("", !0)]),
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
}), E = /* @__PURE__ */ e({ default: () => D }), D = T;
//#endregion
export { E as n, D as t };
