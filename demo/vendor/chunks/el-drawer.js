globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, Ft as t, G as n, H as r, I as i, M as a, Mt as o, Pt as s, T as c, Z as l, _ as u, b as d, d as f, l as p, m, n as h, nt as g, tt as _, ut as v, v as y, w as b, x, y as S, yt as C } from "./vue.runtime.js";
import { t as w } from "./shared/element-plus/utils/vue/install.js";
import { n as T } from "./shared/element-plus/utils/vue/props/runtime.js";
import { c as E, h as D, m as O } from "./shared/vueuse.js";
import { n as k } from "./shared/element-plus/utils/dom/style.js";
import { r as A } from "./shared/element-plus/hooks/use-namespace.js";
import { h as j } from "./shared/element-plus-icons.js";
import { t as ee } from "./el-icon.js";
import { t as M } from "./el-focus-trap.js";
import { n as N } from "./shared/element-plus/hooks/use-locale.js";
import { t as P } from "./shared/element-plus/hooks/use-deprecated.js";
import { a as F, o as I, t as L } from "./el-dialog/dialog-content.js";
import { t as te } from "./el-overlay.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/drawer/src/drawer.mjs
var R = T({
	...I,
	direction: {
		type: String,
		default: "rtl",
		values: [
			"ltr",
			"rtl",
			"ttb",
			"btt"
		]
	},
	resizable: Boolean,
	size: {
		type: [String, Number],
		default: "30%"
	},
	withHeader: {
		type: Boolean,
		default: !0
	},
	modalFade: {
		type: Boolean,
		default: !0
	},
	headerAriaLevel: {
		type: String,
		default: "2"
	}
}), z = {
	...F,
	"resize-start": (e, t) => e instanceof MouseEvent && typeof t == "number",
	resize: (e, t) => e instanceof MouseEvent && typeof t == "number",
	"resize-end": (e, t) => e instanceof MouseEvent && typeof t == "number"
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/drawer/src/composables/useResizable.mjs
function B(t, n, r) {
	let { width: a, height: o } = O(), s = u(() => ["ltr", "rtl"].includes(t.direction)), c = u(() => ["ltr", "ttb"].includes(t.direction) ? 1 : -1), l = u(() => s.value ? a.value : o.value), d = u(() => D(f.value + c.value * p.value, 4, l.value)), f = v(0), p = v(0), m = v(!1), h = v(!1), g = [], _ = [], y = () => {
		let e = n.value?.closest("[aria-modal=\"true\"]");
		return e ? s.value ? e.offsetWidth : e.offsetHeight : 100;
	};
	e(() => [t.size, t.resizable], () => {
		h.value = !1, f.value = 0, p.value = 0, S();
	});
	let b = (e) => {
		t.resizable && (h.value ||= (f.value = y(), !0), g = [e.pageX, e.pageY], m.value = !0, r("resize-start", e, f.value), _.push(E(window, "mouseup", S), E(window, "mousemove", x)));
	}, x = (e) => {
		let { pageX: t, pageY: n } = e, i = t - g[0], a = n - g[1];
		p.value = s.value ? i : a, r("resize", e, d.value);
	}, S = (e) => {
		m.value && (g = [], f.value = d.value, p.value = 0, m.value = !1, _.forEach((e) => e?.()), _ = [], e && r("resize-end", e, f.value));
	}, C = E(n, "mousedown", b);
	return i(() => {
		C(), S();
	}), {
		size: u(() => h.value ? `${d.value}px` : k(t.size)),
		isResizing: m,
		isHorizontal: s
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/drawer/src/drawer.vue_vue_type_script_setup_true_lang.mjs
var V = [
	"aria-label",
	"aria-labelledby",
	"aria-describedby"
], H = ["id", "aria-level"], U = ["aria-label"], W = ["id"], G = w(/* @__PURE__ */ c({
	name: "ElDrawer",
	inheritAttrs: !1,
	__name: "drawer",
	props: R,
	emits: z,
	setup(e, { expose: i, emit: c }) {
		let w = e, T = c, E = l();
		P({
			scope: "el-drawer",
			from: "the title slot",
			replacement: "the header slot",
			version: "3.0.0",
			ref: "https://element-plus.org/en-US/component/drawer.html#slots"
		}, u(() => !!E.title));
		let D = v(), O = v(), k = v(), F = A("drawer"), { t: I } = N(), { afterEnter: R, afterLeave: z, beforeLeave: G, visible: K, rendered: q, titleId: J, bodyId: Y, zIndex: X, onModalClick: Z, onOpenAutoFocus: ne, onCloseAutoFocus: re, onFocusoutPrevented: Q, onCloseRequested: ie, handleClose: $ } = L(w, D), { isHorizontal: ae, size: oe, isResizing: se } = B(w, k, T), ce = u(() => w.modalPenetrable && !w.modal);
		return i({ handleClose: $ }), (i, c) => (r(), S(m, {
			to: e.appendTo,
			disabled: e.appendTo === "body" ? !e.appendToBody : !1
		}, [b(h, {
			name: C(F).b("fade"),
			onAfterEnter: C(R),
			onAfterLeave: C(z),
			onBeforeLeave: C(G),
			persisted: ""
		}, {
			default: _(() => [g(b(C(te), {
				mask: e.modal,
				"overlay-class": [
					C(F).is("drawer"),
					e.modalClass ?? "",
					`${C(F).namespace.value}-modal-drawer`,
					C(F).is("penetrable", ce.value)
				],
				"z-index": C(X),
				onClick: C(Z)
			}, {
				default: _(() => [b(C(M), {
					loop: "",
					trapped: C(K),
					"focus-trap-el": D.value,
					"focus-start-el": O.value,
					onFocusAfterTrapped: C(ne),
					onFocusAfterReleased: C(re),
					onFocusoutPrevented: C(Q),
					onReleaseRequested: C(ie)
				}, {
					default: _(() => [y("div", a({
						ref_key: "drawerRef",
						ref: D,
						"aria-modal": "true",
						"aria-label": e.title || void 0,
						"aria-labelledby": e.title ? void 0 : C(J),
						"aria-describedby": C(Y)
					}, i.$attrs, {
						class: [
							C(F).b(),
							e.direction,
							C(K) && "open",
							C(F).is("dragging", C(se))
						],
						style: { [C(ae) ? "width" : "height"]: C(oe) },
						role: "dialog",
						onClick: c[1] ||= f(() => {}, ["stop"])
					}), [
						y("span", {
							ref_key: "focusStartRef",
							ref: O,
							class: o(C(F).e("sr-focus")),
							tabindex: "-1"
						}, null, 2),
						e.withHeader ? (r(), x("header", {
							key: 0,
							class: o([C(F).e("header"), e.headerClass])
						}, [i.$slots.title ? n(i.$slots, "title", { key: 1 }, () => [d(" DEPRECATED SLOT ")]) : n(i.$slots, "header", {
							key: 0,
							close: C($),
							titleId: C(J),
							titleClass: C(F).e("title")
						}, () => [y("span", {
							id: C(J),
							role: "heading",
							"aria-level": e.headerAriaLevel,
							class: o(C(F).e("title"))
						}, t(e.title), 11, H)]), e.showClose ? (r(), x("button", {
							key: 2,
							"aria-label": C(I)("el.drawer.close"),
							class: o(C(F).e("close-btn")),
							type: "button",
							onClick: c[0] ||= (...e) => C($) && C($)(...e)
						}, [b(C(ee), { class: o(C(F).e("close")) }, {
							default: _(() => [b(C(j))]),
							_: 1
						}, 8, ["class"])], 10, U)) : d("v-if", !0)], 2)) : d("v-if", !0),
						C(q) ? (r(), x("div", {
							key: 1,
							id: C(Y),
							class: o([C(F).e("body"), e.bodyClass])
						}, [n(i.$slots, "default")], 10, W)) : d("v-if", !0),
						i.$slots.footer ? (r(), x("div", {
							key: 2,
							class: o([C(F).e("footer"), e.footerClass])
						}, [n(i.$slots, "footer")], 2)) : d("v-if", !0),
						e.resizable ? (r(), x("div", {
							key: 3,
							ref_key: "draggerRef",
							ref: k,
							style: s({ zIndex: C(X) }),
							class: o(C(F).e("dragger"))
						}, null, 6)) : d("v-if", !0)
					], 16, V)]),
					_: 3
				}, 8, [
					"trapped",
					"focus-trap-el",
					"focus-start-el",
					"onFocusAfterTrapped",
					"onFocusAfterReleased",
					"onFocusoutPrevented",
					"onReleaseRequested"
				])]),
				_: 3
			}, 8, [
				"mask",
				"overlay-class",
				"z-index",
				"onClick"
			]), [[p, C(K)]])]),
			_: 3
		}, 8, [
			"name",
			"onAfterEnter",
			"onAfterLeave",
			"onBeforeLeave"
		])], 8, ["to", "disabled"]));
	}
}));
//#endregion
export { G as ElDrawer, G as default, z as drawerEmits, R as drawerProps };
