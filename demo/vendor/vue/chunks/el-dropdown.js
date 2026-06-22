globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, E as t, G as n, H as r, J as i, K as a, M as o, Mt as s, Pt as c, S as l, T as u, U as d, _ as f, b as p, d as m, ht as h, p as g, tt as _, ut as v, v as y, w as b, x, y as S, yt as C } from "./vue.runtime.js";
import { i as w, t as T } from "./shared/element-plus/utils/vue/install.js";
import { t as ee } from "./shared/lodash/castArray.js";
import { n as te } from "./shared/element-plus/utils/dom/style.js";
import { r as E } from "./shared/element-plus/hooks/use-namespace.js";
import { t as D } from "./shared/element-plus-icons.js";
import { t as O } from "./el-icon.js";
import { t as k } from "./el-tooltip.js";
import { a as A, i as j, n as M, t as N } from "./shared/element-plus/constants/aria.js";
import { t as ne } from "./shared/element-plus/hooks/use-id.js";
import { r as P } from "./el-form/hooks/use-form-common-props.js";
import { t as F } from "./el-slot/only-child.js";
import { t as I } from "./shared/element-plus/virtual/_plugin-vue_export-helper.js";
import { t as re } from "./el-scrollbar.js";
import { n as ie } from "./shared/element-plus/hooks/use-locale.js";
import { t as L } from "./el-button.js";
import { t as ae } from "./el-collection/collection.js";
import { t as R } from "./shared/element-plus/utils/vue/refs.js";
import { a as z, i as B, n as oe, o as V, r as H, t as U } from "./el-dropdown/dropdown.js";
import { a as W, i as G, o as K, r as se, s as ce, t as q } from "./el-roving-focus-group.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/dropdown/src/tokens.mjs
var J = Symbol("elDropdown"), Y = "elDropdown", { ButtonGroup: le } = L, ue = u({
	name: "ElDropdown",
	components: {
		ElButton: L,
		ElButtonGroup: le,
		ElScrollbar: re,
		ElTooltip: k,
		ElRovingFocusGroup: q,
		ElOnlyChild: F,
		ElIcon: O,
		ArrowDown: D
	},
	props: V,
	emits: [
		"visible-change",
		"click",
		"command"
	],
	setup(e, { emit: n }) {
		let r = t(), i = E("dropdown"), { t: a } = ie(), o = v(), s = v(), c = v(), l = v(), u = v(null), p = v(null), m = v(!1), g = f(() => ({ maxHeight: te(e.maxHeight) })), _ = f(() => [i.m(D.value)]), y = f(() => ee(e.trigger)), b = ne().value, x = f(() => e.id || b);
		function S() {
			c.value?.onClose(void 0, 0);
		}
		function w() {
			c.value?.onClose();
		}
		function T() {
			c.value?.onOpen();
		}
		let D = P();
		function O(...e) {
			n("command", ...e);
		}
		function k() {}
		function A() {
			let e = C(l);
			y.value.includes("hover") && e?.focus({ preventScroll: !0 }), p.value = null;
		}
		function j(e) {
			p.value = e;
		}
		function M() {
			n("visible-change", !0);
		}
		function N(e) {
			m.value = e?.type === "keydown", l.value?.focus();
		}
		function F() {
			n("visible-change", !1);
		}
		return d(J, {
			contentRef: l,
			role: f(() => e.role),
			triggerId: x,
			isUsingKeyboard: m,
			onItemEnter: k,
			onItemLeave: A,
			handleClose: w
		}), d(Y, {
			instance: r,
			dropdownSize: D,
			handleClick: S,
			commandHandler: O,
			trigger: h(e, "trigger"),
			hideOnClick: h(e, "hideOnClick")
		}), {
			t: a,
			ns: i,
			scrollbar: u,
			wrapStyle: g,
			dropdownTriggerKls: _,
			dropdownSize: D,
			triggerId: x,
			currentTabId: p,
			handleCurrentTabIdChange: j,
			handlerMainButtonClick: (e) => {
				n("click", e);
			},
			handleClose: w,
			handleOpen: T,
			handleBeforeShowTooltip: M,
			handleShowTooltip: N,
			handleBeforeHideTooltip: F,
			popperRef: c,
			contentRef: l,
			triggeringElementRef: o,
			referenceElementRef: s
		};
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/dropdown/src/dropdown2.mjs
function de(e, t, i, c, u, d) {
	let f = a("el-roving-focus-group"), m = a("el-scrollbar"), h = a("el-only-child"), g = a("el-tooltip"), v = a("el-button"), y = a("arrow-down"), C = a("el-icon"), w = a("el-button-group");
	return r(), x("div", { class: s([e.ns.b(), e.ns.is("disabled", e.disabled)]) }, [b(g, {
		ref: "popperRef",
		role: e.role,
		effect: e.effect,
		"fallback-placements": ["bottom", "top"],
		"popper-options": e.popperOptions,
		"gpu-acceleration": !1,
		placement: e.placement,
		"popper-class": [e.ns.e("popper"), e.popperClass],
		"popper-style": e.popperStyle,
		trigger: e.trigger,
		"trigger-keys": e.triggerKeys,
		"trigger-target-el": e.contentRef,
		"show-arrow": e.showArrow,
		"show-after": e.trigger === "hover" ? e.showTimeout : 0,
		"hide-after": e.trigger === "hover" ? e.hideTimeout : 0,
		"virtual-ref": e.virtualRef ?? e.triggeringElementRef,
		"virtual-triggering": e.virtualTriggering || e.splitButton,
		disabled: e.disabled,
		transition: `${e.ns.namespace.value}-zoom-in-top`,
		teleported: e.teleported,
		"append-to": e.appendTo,
		pure: "",
		"focus-on-target": "",
		persistent: e.persistent,
		onBeforeShow: e.handleBeforeShowTooltip,
		onShow: e.handleShowTooltip,
		onBeforeHide: e.handleBeforeHideTooltip
	}, l({
		content: _(() => [b(m, {
			ref: "scrollbar",
			"wrap-style": e.wrapStyle,
			tag: "div",
			"view-class": e.ns.e("list")
		}, {
			default: _(() => [b(f, {
				loop: e.loop,
				"current-tab-id": e.currentTabId,
				orientation: "horizontal",
				onCurrentTabIdChange: e.handleCurrentTabIdChange
			}, {
				default: _(() => [n(e.$slots, "dropdown")]),
				_: 3
			}, 8, [
				"loop",
				"current-tab-id",
				"onCurrentTabIdChange"
			])]),
			_: 3
		}, 8, ["wrap-style", "view-class"])]),
		_: 2
	}, [e.splitButton ? void 0 : {
		name: "default",
		fn: _(() => [b(h, {
			id: e.triggerId,
			ref: "triggeringElementRef",
			role: "button",
			tabindex: e.tabindex
		}, {
			default: _(() => [n(e.$slots, "default")]),
			_: 3
		}, 8, ["id", "tabindex"])]),
		key: "0"
	}]), 1032, [
		"role",
		"effect",
		"popper-options",
		"placement",
		"popper-class",
		"popper-style",
		"trigger",
		"trigger-keys",
		"trigger-target-el",
		"show-arrow",
		"show-after",
		"hide-after",
		"virtual-ref",
		"virtual-triggering",
		"disabled",
		"transition",
		"teleported",
		"append-to",
		"persistent",
		"onBeforeShow",
		"onShow",
		"onBeforeHide"
	]), e.splitButton ? (r(), S(w, { key: 0 }, {
		default: _(() => [b(v, o({ ref: "referenceElementRef" }, e.buttonProps, {
			size: e.dropdownSize,
			type: e.type,
			disabled: e.disabled,
			tabindex: e.tabindex,
			onClick: e.handlerMainButtonClick
		}), {
			default: _(() => [n(e.$slots, "default")]),
			_: 3
		}, 16, [
			"size",
			"type",
			"disabled",
			"tabindex",
			"onClick"
		]), b(v, o({
			id: e.triggerId,
			ref: "triggeringElementRef"
		}, e.buttonProps, {
			role: "button",
			size: e.dropdownSize,
			type: e.type,
			class: e.ns.e("caret-button"),
			disabled: e.disabled,
			tabindex: e.tabindex,
			"aria-label": e.t("el.dropdown.toggleDropdown")
		}), {
			default: _(() => [b(C, { class: s(e.ns.e("icon")) }, {
				default: _(() => [b(y)]),
				_: 1
			}, 8, ["class"])]),
			_: 1
		}, 16, [
			"id",
			"size",
			"type",
			"class",
			"disabled",
			"tabindex",
			"aria-label"
		])]),
		_: 3
	})) : p("v-if", !0)], 2);
}
var fe = /* @__PURE__ */ I(ue, [["render", de]]), pe = u({
	name: "DropdownItemImpl",
	components: { ElIcon: O },
	props: B,
	emits: [
		"pointermove",
		"pointerleave",
		"click",
		"clickimpl"
	],
	setup(t, { emit: n }) {
		let r = E("dropdown"), { role: i } = e(J, void 0), { collectionItemRef: a } = e(ce, void 0), { rovingFocusGroupItemRef: o, tabIndex: s, handleFocus: c, handleKeydown: l, handleMousedown: u } = e(W, void 0), d = R(a, o), p = f(() => i.value === "menu" ? "menuitem" : i.value === "navigation" ? "link" : "button"), m = N((e) => {
			let t = M(e);
			if ([
				A.enter,
				A.numpadEnter,
				A.space
			].includes(t)) return e.preventDefault(), e.stopImmediatePropagation(), n("clickimpl", e), !0;
		}, l);
		return {
			ns: r,
			itemRef: d,
			dataset: { [ae]: "" },
			role: p,
			tabIndex: s,
			handleFocus: c,
			handleKeydown: m,
			handleMousedown: u
		};
	}
}), me = [
	"aria-disabled",
	"tabindex",
	"role"
];
function he(e, t, c, l, u, d) {
	let f = a("el-icon");
	return r(), x(g, null, [e.divided ? (r(), x("li", {
		key: 0,
		role: "separator",
		class: s(e.ns.bem("menu", "item", "divided"))
	}, null, 2)) : p("v-if", !0), y("li", o({ ref: e.itemRef }, {
		...e.dataset,
		...e.$attrs
	}, {
		"aria-disabled": e.disabled,
		class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)],
		tabindex: e.tabIndex,
		role: e.role,
		onClick: t[0] ||= (t) => e.$emit("clickimpl", t),
		onFocus: t[1] ||= (...t) => e.handleFocus && e.handleFocus(...t),
		onKeydown: t[2] ||= m((...t) => e.handleKeydown && e.handleKeydown(...t), ["self"]),
		onMousedown: t[3] ||= (...t) => e.handleMousedown && e.handleMousedown(...t),
		onPointermove: t[4] ||= (t) => e.$emit("pointermove", t),
		onPointerleave: t[5] ||= (t) => e.$emit("pointerleave", t)
	}), [e.icon || e.$slots.icon ? (r(), S(f, { key: 0 }, {
		default: _(() => [n(e.$slots, "icon", {}, () => [(r(), S(i(e.icon)))])]),
		_: 3
	})) : p("v-if", !0), n(e.$slots, "default")], 16, me)], 64);
}
var ge = /* @__PURE__ */ I(pe, [["render", he]]), X = () => {
	let t = e(Y, {});
	return {
		elDropdown: t,
		_elDropdownSize: f(() => t?.dropdownSize)
	};
}, _e = u({
	name: "ElDropdownItem",
	components: {
		ElRovingFocusItem: se,
		ElDropdownItemImpl: ge
	},
	inheritAttrs: !1,
	props: B,
	emits: [
		"pointermove",
		"pointerleave",
		"click"
	],
	setup(n, { emit: r, attrs: i }) {
		let { elDropdown: a } = X(), o = t(), { onItemEnter: s, onItemLeave: c } = e(J, void 0), l = N((e) => (r("pointermove", e), e.defaultPrevented), j((e) => {
			if (n.disabled) {
				c(e);
				return;
			}
			let t = e.currentTarget;
			t === document.activeElement || t.contains(document.activeElement) || (s(e), e.defaultPrevented || t?.focus({ preventScroll: !0 }));
		})), u = N((e) => (r("pointerleave", e), e.defaultPrevented), j(c));
		return {
			handleClick: N((e) => {
				if (!n.disabled) return r("click", e), e.type !== "keydown" && e.defaultPrevented;
			}, (e) => {
				if (n.disabled) {
					e.stopImmediatePropagation();
					return;
				}
				a?.hideOnClick?.value && a.handleClick?.(), a.commandHandler?.(n.command, o, e);
			}),
			handlePointerMove: l,
			handlePointerLeave: u,
			propsAndAttrs: f(() => ({
				...n,
				...i
			}))
		};
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/dropdown/src/dropdown-item.mjs
function ve(e, t, i, s, c, u) {
	let d = a("el-dropdown-item-impl"), f = a("el-roving-focus-item");
	return r(), S(f, { focusable: !e.disabled }, {
		default: _(() => [b(d, o(e.propsAndAttrs, {
			onPointerleave: e.handlePointerLeave,
			onPointermove: e.handlePointerMove,
			onClickimpl: e.handleClick
		}), l({
			default: _(() => [n(e.$slots, "default")]),
			_: 2
		}, [e.$slots.icon ? {
			name: "icon",
			fn: _(() => [n(e.$slots, "icon")]),
			key: "0"
		} : void 0]), 1040, [
			"onPointerleave",
			"onPointermove",
			"onClickimpl"
		])]),
		_: 3
	}, 8, ["focusable"]);
}
var Z = /* @__PURE__ */ I(_e, [["render", ve]]), ye = u({
	name: "ElDropdownMenu",
	props: z,
	setup(t) {
		let n = E("dropdown"), { _elDropdownSize: r } = X(), i = r.value, { contentRef: a, role: o, triggerId: s, isUsingKeyboard: c, handleClose: l } = e(J, void 0), { rovingFocusGroupRef: u, rovingFocusGroupRootStyle: d, onBlur: p, onFocus: m, onKeydown: h, onMousedown: g } = e(G, void 0), { collectionRef: _ } = e(K, void 0), v = f(() => [n.b("menu"), n.bm("menu", i?.value)]), y = R(a, u, _), b = N((e) => {
			t.onKeydown?.(e);
		}, (e) => {
			let { currentTarget: t, target: n } = e, r = M(e);
			if (t.contains(n), A.tab === r) return l();
			h(e);
		});
		function x(e) {
			c.value && m(e);
		}
		return {
			size: i,
			rovingFocusGroupRootStyle: d,
			dropdownKls: v,
			role: o,
			triggerId: s,
			dropdownListWrapperRef: y,
			handleKeydown: b,
			onBlur: p,
			handleFocus: x,
			onMousedown: g
		};
	}
}), be = ["role", "aria-labelledby"];
function xe(e, t, i, a, o, l) {
	return r(), x("ul", {
		ref: e.dropdownListWrapperRef,
		class: s(e.dropdownKls),
		style: c(e.rovingFocusGroupRootStyle),
		tabindex: -1,
		role: e.role,
		"aria-labelledby": e.triggerId,
		onFocusin: t[0] ||= (...t) => e.handleFocus && e.handleFocus(...t),
		onFocusout: t[1] ||= (...t) => e.onBlur && e.onBlur(...t),
		onKeydown: t[2] ||= m((...t) => e.handleKeydown && e.handleKeydown(...t), ["self"]),
		onMousedown: t[3] ||= m((...t) => e.onMousedown && e.onMousedown(...t), ["self"])
	}, [n(e.$slots, "default")], 46, be);
}
var Q = /* @__PURE__ */ I(ye, [["render", xe]]), $ = T(fe, {
	DropdownItem: Z,
	DropdownMenu: Q
}), Se = w(Z), Ce = w(Q);
//#endregion
export { J as DROPDOWN_INJECTION_KEY, Y as DROPDOWN_INSTANCE_INJECTION_KEY, $ as ElDropdown, $ as default, Se as ElDropdownItem, Ce as ElDropdownMenu, U as FIRST_KEYS, oe as FIRST_LAST_KEYS, H as LAST_KEYS, B as dropdownItemProps, z as dropdownMenuProps, V as dropdownProps };
