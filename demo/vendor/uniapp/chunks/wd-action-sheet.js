globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, L as a, N as o, P as s, U as c, a as l, c as u, d, g as f, h as p, k as m, l as h, m as g, u as _, z as v } from "./vue.runtime.js";
import { g as y } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as b, n as x, r as S, s as C, t as w } from "./shared/wot-ui/common/props.ts.js";
import { t as T } from "./wd-icon.js";
import { t as E } from "./wd-popup.js";
import { t as D } from "./wd-loading.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-action-sheet/types.ts
var O = {
	...w,
	customTitleClass: C(""),
	modelValue: S(!1),
	actions: x(),
	panels: x(),
	title: String,
	cancelText: String,
	closeOnClickAction: S(!0),
	closeOnClickModal: S(!0),
	duration: b(200),
	zIndex: b(10),
	lazyRender: S(!0),
	safeAreaInsetBottom: S(!0),
	rootPortal: S(!1)
}, k = { class: "wd-action-sheet-wrapper" }, A = {
	key: 0,
	class: "wd-action-sheet__actions"
}, j = ["onClick"], M = {
	key: 1,
	class: "wd-action-sheet__name"
}, N = {
	key: 2,
	class: "wd-action-sheet__description"
}, P = {
	key: 1,
	class: "wd-action-sheet__panels-wrap"
}, F = { class: "wd-action-sheet__panels-content" }, I = ["onClick"], L = { class: "wd-action-sheet__panel-title" }, R = {
	key: 1,
	class: "wd-action-sheet__gap"
}, z = /*@__PURE__*/ f({
	name: "wd-action-sheet",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: O,
	emits: [
		"select",
		"click-modal",
		"cancel",
		"leave",
		"after-leave",
		"close",
		"enter",
		"after-enter",
		"update:modelValue"
	],
	setup(e, { emit: f }) {
		let b = e, x = f, S = a([]), C = a(!1);
		o(() => b.panels, O, {
			deep: !0,
			immediate: !0
		}), o(() => b.modelValue, (e) => {
			C.value = e;
		}, {
			deep: !0,
			immediate: !0
		});
		function w() {
			return b.panels.length && !y(b.panels[0]);
		}
		function O() {
			S.value = w() ? [b.panels] : b.panels;
		}
		function z(e, t, n) {
			if (t === "action") {
				if (b.actions[e].disabled || b.actions[e].loading) return;
				x("select", {
					item: b.actions[e],
					index: e
				});
			} else w() ? x("select", {
				item: b.panels[Number(n)],
				index: n
			}) : x("select", {
				item: b.panels[e][Number(n)],
				rowIndex: e,
				colIndex: n
			});
			b.closeOnClickAction && x("update:modelValue", !1);
		}
		function B() {
			x("click-modal");
		}
		function V() {
			x("cancel"), x("update:modelValue", !1);
		}
		function H() {
			x("update:modelValue", !1), x("close");
		}
		return (e, a) => (r(), d("div", k, [p(E, {
			"custom-class": "wd-action-sheet-wrapper__popup",
			"custom-style": `${e.actions && e.actions.length || e.panels && e.panels.length ? "background: transparent;" : ""}`,
			modelValue: C.value,
			"onUpdate:modelValue": a[0] ||= (e) => C.value = e,
			duration: e.duration,
			position: "bottom",
			"close-on-click-modal": e.closeOnClickModal,
			"safe-area-inset-bottom": e.safeAreaInsetBottom,
			"lazy-render": e.lazyRender,
			"root-portal": e.rootPortal,
			round: "",
			onClose: H,
			onEnter: a[1] ||= (e) => x("enter"),
			onAfterEnter: a[2] ||= (e) => x("after-enter"),
			onLeave: a[3] ||= (e) => x("leave"),
			onAfterLeave: a[4] ||= (e) => x("after-leave"),
			onClickModal: B,
			"z-index": e.zIndex
		}, {
			default: s(() => [u("div", {
				class: n(`wd-action-sheet ${e.customClass}`),
				style: i(`${e.actions && e.actions.length || e.panels && e.panels.length ? " " : ""} ${e.customStyle}`)
			}, [
				e.title ? (r(), d("div", {
					key: 0,
					class: n(`wd-action-sheet__title ${e.customTitleClass}`)
				}, [g(c(e.title) + " ", 1), t(e.$slots, "close", { close: H }, () => [p(T, {
					"custom-class": "wd-action-sheet__close",
					name: "close",
					onClick: H
				})])], 2)) : _("", !0),
				t(e.$slots, "default", {}, () => [e.actions && e.actions.length ? (r(), d("div", A, [(r(!0), d(l, null, m(e.actions, (t, a) => (r(), d("div", {
					key: a,
					class: n(`wd-action-sheet__action ${e.title ? "" : "is-border"} ${t.disabled ? "wd-action-sheet__action--disabled" : ""}  ${t.loading ? "wd-action-sheet__action--loading" : ""}`),
					style: i(`color: ${t.color}`),
					onClick: (e) => z(a, "action")
				}, [t.loading ? (r(), h(D, {
					key: 0,
					"custom-class": "`wd-action-sheet__action-loading"
				})) : (r(), d("div", M, c(t.name), 1)), !t.loading && t.description ? (r(), d("div", N, c(t.description), 1)) : _("", !0)], 14, j))), 128))])) : _("", !0), v(y)(S.value) && S.value.length ? (r(), d("div", P, [(r(!0), d(l, null, m(S.value, (e, t) => (r(), d("div", {
					key: t,
					class: "wd-action-sheet__panels"
				}, [u("div", F, [(r(!0), d(l, null, m(e, (e, n) => (r(), d("div", {
					key: n,
					class: "wd-action-sheet__panel",
					onClick: (e) => z(t, "panels", n)
				}, [p(T, {
					"custom-class": "wd-action-sheet__panel-img",
					name: e.icon
				}, null, 8, ["name"]), u("div", L, c(e.title), 1)], 8, I))), 128))])]))), 128))])) : _("", !0)]),
				e.cancelText ? (r(), d("div", R)) : _("", !0),
				e.cancelText ? (r(), d("div", {
					key: 2,
					class: "wd-action-sheet__cancel",
					onClick: V
				}, c(e.cancelText), 1)) : _("", !0)
			], 6)]),
			_: 3
		}, 8, [
			"custom-style",
			"modelValue",
			"duration",
			"close-on-click-modal",
			"safe-area-inset-bottom",
			"lazy-render",
			"root-portal",
			"z-index"
		])]));
	}
}), B = /* @__PURE__ */ e({ default: () => V }), V = z;
//#endregion
export { B as n, V as t };
