globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, Ft as t, G as n, H as r, J as i, M as a, Mt as o, Pt as s, T as c, _ as l, b as u, tt as d, ut as f, v as p, w as m, y as h, yt as g } from "./vue.runtime.js";
import { t as _ } from "./shared/element-plus/utils/vue/install.js";
import { n as v } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as y } from "./shared/element-plus/utils/dom/style.js";
import { r as b } from "./shared/element-plus/hooks/use-namespace.js";
import { k as x } from "./shared/element-plus-icons.js";
import { a as S } from "./shared/element-plus/utils/vue/icon.js";
import { t as C } from "./el-icon.js";
import { i as w, r as T, t as E } from "./el-tooltip.js";
import { n as D } from "./shared/element-plus/hooks/use-locale.js";
import { i as O, t as k } from "./el-button.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/popconfirm/src/popconfirm.mjs
var A = v({
	title: String,
	confirmButtonText: String,
	cancelButtonText: String,
	confirmButtonType: {
		type: String,
		values: O,
		default: "primary"
	},
	cancelButtonType: {
		type: String,
		values: O,
		default: "text"
	},
	icon: {
		type: S,
		default: () => x
	},
	iconColor: {
		type: String,
		default: "#f90"
	},
	hideIcon: Boolean,
	hideAfter: {
		type: Number,
		default: 200
	},
	effect: {
		...w.effect,
		default: "light"
	},
	teleported: w.teleported,
	persistent: w.persistent,
	width: {
		type: [String, Number],
		default: 150
	},
	virtualTriggering: T.virtualTriggering,
	virtualRef: T.virtualRef
}), j = {
	confirm: (e) => e instanceof MouseEvent,
	cancel: (e) => e instanceof MouseEvent
}, M = _(/* @__PURE__ */ c({
	name: "ElPopconfirm",
	__name: "popconfirm",
	props: A,
	emits: j,
	setup(c, { expose: _, emit: v }) {
		let x = c, S = v, { t: w } = D(), T = b("popconfirm"), O = f(), A = f(), j = l(() => g(O)?.popperRef), M = () => {
			A.value?.focus?.();
		}, N = () => {
			O.value?.onClose?.();
		}, P = l(() => ({ width: y(x.width) })), F = (e) => {
			S("confirm", e), N();
		}, I = (e) => {
			S("cancel", e), N();
		}, L = l(() => x.confirmButtonText || w("el.popconfirm.confirmButtonText")), R = l(() => x.cancelButtonText || w("el.popconfirm.cancelButtonText"));
		return _({
			popperRef: j,
			hide: N
		}), (l, f) => (r(), h(g(E), a({
			ref_key: "tooltipRef",
			ref: O,
			trigger: "click",
			effect: c.effect
		}, l.$attrs, {
			"virtual-triggering": c.virtualTriggering,
			"virtual-ref": c.virtualRef,
			"popper-class": `${g(T).namespace.value}-popover`,
			"popper-style": P.value,
			teleported: c.teleported,
			"fallback-placements": [
				"bottom",
				"top",
				"right",
				"left"
			],
			"hide-after": c.hideAfter,
			persistent: c.persistent,
			loop: "",
			onShow: M
		}), {
			content: d(() => [p("div", {
				ref_key: "rootRef",
				ref: A,
				tabindex: "-1",
				class: o(g(T).b())
			}, [p("div", { class: o(g(T).e("main")) }, [!c.hideIcon && c.icon ? (r(), h(g(C), {
				key: 0,
				class: o(g(T).e("icon")),
				style: s({ color: c.iconColor })
			}, {
				default: d(() => [(r(), h(i(c.icon)))]),
				_: 1
			}, 8, ["class", "style"])) : u("v-if", !0), e(" " + t(c.title), 1)], 2), p("div", { class: o(g(T).e("action")) }, [n(l.$slots, "actions", {
				confirm: F,
				cancel: I
			}, () => [m(g(k), {
				size: "small",
				type: c.cancelButtonType === "text" ? "" : c.cancelButtonType,
				text: c.cancelButtonType === "text",
				onClick: I
			}, {
				default: d(() => [e(t(R.value), 1)]),
				_: 1
			}, 8, ["type", "text"]), m(g(k), {
				size: "small",
				type: c.confirmButtonType === "text" ? "" : c.confirmButtonType,
				text: c.confirmButtonType === "text",
				onClick: F
			}, {
				default: d(() => [e(t(L.value), 1)]),
				_: 1
			}, 8, ["type", "text"])])], 2)], 2)]),
			default: d(() => [l.$slots.reference ? n(l.$slots, "reference", { key: 0 }) : u("v-if", !0)]),
			_: 3
		}, 16, [
			"effect",
			"virtual-triggering",
			"virtual-ref",
			"popper-class",
			"popper-style",
			"teleported",
			"hide-after",
			"persistent"
		]));
	}
}));
//#endregion
export { M as ElPopconfirm, M as default, j as popconfirmEmits, A as popconfirmProps };
