globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, C as n, D as r, H as i, L as a, N as o, P as s, S as c, U as l, _ as u, a as d, c as f, d as p, g as m, h, k as g, l as _, s as v, u as y, y as b } from "./vue.runtime.js";
import { y as x } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as S, n as C, r as w, s as T, t as E } from "./shared/wot-ui/common/props.ts.js";
import { t as D } from "./wd-icon.js";
import { t as O } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as k } from "./wd-popup.js";
import { t as A } from "./shared/wot-ui/common/interceptor.ts.js";
import { i as j, r as M, t as N } from "./shared/wot-ui/common/clickoutside.ts.js";
import { t as P } from "./shared/wot-ui/components/wd-drop-menu/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-drop-menu-item/types.ts
var F = {
	...E,
	modelValue: [String, Number],
	options: C(),
	disabled: w(!1),
	iconName: T("check"),
	title: String,
	icon: T("caret-down"),
	iconSize: S,
	beforeToggle: Function,
	valueKey: T("value"),
	labelKey: T("label"),
	tipKey: T("tip"),
	customPopupClass: T(""),
	customPopupStyle: T(""),
	popupHeight: T(""),
	rootPortal: w(!1)
}, I = ["onClick"], L = { class: "wd-drop-item__title" }, R = { class: "wd-drop-item__title-text" }, z = {
	key: 0,
	class: "wd-drop-item__tip"
}, B = /* @__PURE__ */ m({
	name: "wd-drop-menu-item",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: F,
	emits: [
		"update:modelValue",
		"change",
		"open",
		"opened",
		"close",
		"closed"
	],
	setup(m, { expose: S, emit: C }) {
		let w = m, T = C, E = b(N, null), F = a(!1), B = a(!1), V = a(), H = a(12), U = a(0), { parent: W } = O(P), { proxy: G } = u(), K = v(() => {
			let e = "";
			return e = F.value && W.value ? W.value.props.direction === "down" ? `top: calc(var(--window-top) + ${W.value.offset.value}px); bottom: 0;` : `top: 0; bottom: calc(var(--window-bottom) + ${W.value.offset.value}px)` : "", e;
		});
		o(() => w.modelValue, (e) => {
			x(e) && typeof e != "number" && typeof e != "string" && console.error("[wot-design] warning(wd-drop-menu-item): the type of value should be a number or a string.");
		}, {
			deep: !0,
			immediate: !0
		}), c(() => {
			E && E.pushToQueue ? E.pushToQueue(G) : M(G);
		}), n(() => {
			E && E.removeFromQueue ? E.removeFromQueue(G) : j(G);
		});
		function q() {
			return B.value;
		}
		function J(e) {
			if (w.disabled) return;
			let { valueKey: t } = w, n = w.options[e], r = n[t] === void 0 ? n : n[t];
			T("update:modelValue", r), T("change", {
				value: r,
				selectedItem: n
			}), Y();
		}
		function Y() {
			B.value && A(w.beforeToggle, {
				args: [{ status: !1 }],
				done: X
			});
		}
		function X() {
			B.value &&= !1;
		}
		function Z() {
			B.value || A(w.beforeToggle, {
				args: [{ status: !0 }],
				done: Q
			});
		}
		function Q() {
			F.value = !0, B.value = !0, W.value && (U.value = Number(W.value.props.duration), V.value = W.value.props.direction === "down" ? "top" : "bottom");
		}
		function $() {
			B.value ? Y() : Z();
		}
		function ee() {
			F.value = !1, T("closed");
		}
		function te() {
			T("open");
		}
		function ne() {
			T("opened");
		}
		function re() {
			T("close");
		}
		return S({
			getShowPop: q,
			open: Z,
			close: Y,
			toggle: $
		}), (n, a) => F.value ? (r(), p("div", {
			key: 0,
			class: t(`wd-drop-item ${n.customClass}`),
			style: i(`z-index: ${H.value}; ${K.value};${n.customStyle}`)
		}, [h(k, {
			modelValue: B.value,
			"onUpdate:modelValue": a[0] ||= (e) => B.value = e,
			"z-index": H.value,
			duration: U.value,
			position: V.value,
			"custom-style": `max-height: ${n.popupHeight ? n.popupHeight : "80%"}; ${n.customPopupStyle}`,
			"custom-class": `${n.customPopupClass} wd-drop-item__popup`,
			modal: !1,
			"close-on-click-modal": !1,
			"root-portal": n.rootPortal,
			onBeforeEnter: te,
			onAfterEnter: ne,
			onBeforeLeave: re,
			onAfterLeave: ee
		}, {
			default: s(() => [e(n.$slots, "default", {}, () => [f("div", {
				style: i(n.popupHeight ? { height: n.popupHeight } : ""),
				"scroll-y": "",
				"scroll-with-animation": "",
				"show-scrollbar": !0
			}, [(r(!0), p(d, null, g(n.options, (e, i) => (r(), p("div", {
				key: i,
				onClick: (e) => J(i),
				class: t(`wd-drop-item__option ${(e[n.valueKey] === "" ? e : e[n.valueKey]) === n.modelValue ? "is-active" : ""}`)
			}, [f("div", L, [f("span", R, l(e[n.labelKey] ? e[n.labelKey] : e), 1), e[n.tipKey] ? (r(), p("span", z, l(e[n.tipKey]), 1)) : y("", !0)]), (e[n.valueKey] === "" ? e : e[n.valueKey]) === n.modelValue ? (r(), _(D, {
				key: 0,
				name: n.iconName,
				"custom-class": "wd-drop-item__icon"
			}, null, 8, ["name"])) : y("", !0)], 10, I))), 128))], 4)])]),
			_: 3
		}, 8, [
			"modelValue",
			"z-index",
			"duration",
			"position",
			"custom-style",
			"custom-class",
			"root-portal"
		])], 6)) : y("", !0);
	}
});
//#endregion
export { B as default };
