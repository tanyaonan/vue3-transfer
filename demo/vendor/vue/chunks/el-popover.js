globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, Ft as t, G as n, H as r, M as i, Mt as a, T as o, _ as s, b as c, tt as l, ut as u, x as d, y as f, yt as p } from "./vue.runtime.js";
import { n as m, t as h } from "./shared/element-plus/utils/vue/install.js";
import { t as g } from "./shared/element-plus/utils/types.js";
import { n as _ } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as v } from "./shared/element-plus/utils/dom/style.js";
import { r as y } from "./shared/element-plus/hooks/use-namespace.js";
import { i as b, r as x, t as S } from "./el-tooltip.js";
import { a as C } from "./shared/element-plus/constants/aria.js";
import { o as w } from "./el-dropdown/dropdown.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/popover/src/popover.mjs
var T = _({
	trigger: x.trigger,
	triggerKeys: x.triggerKeys,
	placement: w.placement,
	disabled: x.disabled,
	visible: b.visible,
	transition: b.transition,
	popperOptions: w.popperOptions,
	tabindex: w.tabindex,
	content: b.content,
	popperStyle: b.popperStyle,
	popperClass: b.popperClass,
	enterable: {
		...b.enterable,
		default: !0
	},
	effect: {
		...b.effect,
		default: "light"
	},
	teleported: b.teleported,
	appendTo: b.appendTo,
	title: String,
	width: {
		type: [String, Number],
		default: 150
	},
	offset: {
		type: Number,
		default: void 0
	},
	showAfter: {
		type: Number,
		default: 0
	},
	hideAfter: {
		type: Number,
		default: 200
	},
	autoClose: {
		type: Number,
		default: 0
	},
	showArrow: {
		type: Boolean,
		default: !0
	},
	persistent: {
		type: Boolean,
		default: !0
	},
	"onUpdate:visible": { type: Function }
}), E = {
	"update:visible": (e) => g(e),
	"before-enter": () => !0,
	"before-leave": () => !0,
	"after-enter": () => !0,
	"after-leave": () => !0
}, D = {
	trigger: "hover",
	triggerKeys: () => [
		C.enter,
		C.numpadEnter,
		C.space
	],
	placement: "bottom",
	visible: null,
	popperOptions: () => ({}),
	tabindex: 0,
	content: "",
	popperStyle: void 0,
	enterable: !0,
	effect: "light",
	teleported: !0,
	width: 150,
	offset: void 0,
	showAfter: 0,
	hideAfter: 200,
	autoClose: 0,
	showArrow: !0,
	persistent: !0
}, O = "onUpdate:visible", k = /* @__PURE__ */ o({
	name: "ElPopover",
	__name: "popover",
	props: T,
	emits: E,
	setup(o, { expose: m, emit: h }) {
		let g = o, _ = h, b = s(() => g[O]), x = y("popover"), C = u(), w = s(() => p(C)?.popperRef), T = s(() => [{ width: v(g.width) }, g.popperStyle]), E = s(() => [
			x.b(),
			g.popperClass,
			{ [x.m("plain")]: !!g.content }
		]), D = s(() => g.transition === `${x.namespace.value}-fade-in-linear`), k = () => {
			C.value?.hide();
		}, A = () => {
			_("before-enter");
		}, j = () => {
			_("before-leave");
		}, M = () => {
			_("after-enter");
		}, N = () => {
			_("update:visible", !1), _("after-leave");
		};
		return m({
			popperRef: w,
			hide: k
		}), (s, u) => (r(), f(p(S), i({
			ref_key: "tooltipRef",
			ref: C
		}, s.$attrs, {
			trigger: o.trigger,
			"trigger-keys": o.triggerKeys,
			placement: o.placement,
			disabled: o.disabled,
			visible: o.visible,
			transition: o.transition,
			"popper-options": o.popperOptions,
			tabindex: o.tabindex,
			content: o.content,
			offset: o.offset,
			"show-after": o.showAfter,
			"hide-after": o.hideAfter,
			"auto-close": o.autoClose,
			"show-arrow": o.showArrow,
			"aria-label": o.title,
			effect: o.effect,
			enterable: o.enterable,
			"popper-class": E.value,
			"popper-style": T.value,
			teleported: o.teleported,
			"append-to": o.appendTo,
			persistent: o.persistent,
			"gpu-acceleration": D.value,
			"onUpdate:visible": b.value,
			onBeforeShow: A,
			onBeforeHide: j,
			onShow: M,
			onHide: N
		}), {
			content: l(() => [o.title ? (r(), d("div", {
				key: 0,
				class: a(p(x).e("title")),
				role: "title"
			}, t(o.title), 3)) : c("v-if", !0), n(s.$slots, "default", { hide: k }, () => [e(t(o.content), 1)])]),
			default: l(() => [s.$slots.reference ? n(s.$slots, "reference", { key: 0 }) : c("v-if", !0)]),
			_: 3
		}, 16, [
			"trigger",
			"trigger-keys",
			"placement",
			"disabled",
			"visible",
			"transition",
			"popper-options",
			"tabindex",
			"content",
			"offset",
			"show-after",
			"hide-after",
			"auto-close",
			"show-arrow",
			"aria-label",
			"effect",
			"enterable",
			"popper-class",
			"popper-style",
			"teleported",
			"append-to",
			"persistent",
			"gpu-acceleration",
			"onUpdate:visible"
		]));
	}
}), A = (e, t) => {
	let n = (t.arg || t.value)?.popperRef;
	n && (n.triggerRef = e);
}, j = m({
	mounted(e, t) {
		A(e, t);
	},
	updated(e, t) {
		A(e, t);
	}
}, "popover"), M = h(k, { directive: j });
//#endregion
export { M as ElPopover, M as default, j as ElPopoverDirective, E as popoverEmits, T as popoverProps, D as popoverPropsDefaults };
