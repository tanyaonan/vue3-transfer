globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, A as n, Dt as r, E as i, F as a, Ft as o, G as s, H as c, I as l, M as u, Mt as d, N as f, R as p, T as m, Tt as h, U as g, _, b as v, ht as y, l as b, lt as x, m as S, n as C, nt as w, tt as T, ut as E, w as D, x as O, y as k, yt as A, z as j } from "./vue.runtime.js";
import { t as M } from "./shared/element-plus/utils/vue/install.js";
import { t as N } from "./shared/element-plus/hooks/use-aria.js";
import { i as P, t as F } from "./shared/element-plus/utils/types.js";
import { n as I, r as L, t as R } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as ee } from "./shared/element-plus/utils/dom/aria.js";
import { _ as z, g as te, t as ne, x as re } from "./shared/vueuse.js";
import { n as B, r as V } from "./shared/element-plus/hooks/use-namespace.js";
import { a as ie, c as H, f as ae, i as oe, l as se, o as ce, r as le, t as U, u as W } from "./el-popper.js";
import { a as G, n as ue, t as K } from "./shared/element-plus/constants/aria.js";
import { n as de, t as fe } from "./shared/element-plus/hooks/use-id.js";
import { t as pe } from "./shared/element-plus/utils/arrays.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-timeout/index.mjs
function me() {
	let e, t = (t, r) => {
		n(), e = globalThis.setTimeout(t, r);
	}, n = () => {
		e !== void 0 && (globalThis.clearTimeout(e), e = void 0);
	};
	return re(() => n()), {
		registerTimeout: t,
		cancelTimeout: n
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-delayed-toggle/index.mjs
var he = I({
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
	}
}), ge = {
	showAfter: 0,
	hideAfter: 200,
	autoClose: 0
}, _e = ({ showAfter: e, hideAfter: t, autoClose: n, open: r, close: i }) => {
	let { registerTimeout: a } = me(), { registerTimeout: o, cancelTimeout: s } = me();
	return {
		onOpen: (t, s = A(e)) => {
			a(() => {
				r(t);
				let e = A(n);
				P(e) && e > 0 && o(() => {
					i(t);
				}, e);
			}, s);
		},
		onClose: (e, n = A(t)) => {
			s(), a(() => {
				i(e);
			}, n);
		}
	};
}, ve = {
	...ge,
	...W,
	content: "",
	visible: null,
	teleported: !0
}, q = I({
	...he,
	...se,
	appendTo: { type: L([String, Object]) },
	content: {
		type: String,
		default: ""
	},
	rawContent: Boolean,
	persistent: Boolean,
	visible: {
		type: L(Boolean),
		default: null
	},
	transition: String,
	teleported: {
		type: Boolean,
		default: !0
	},
	disabled: Boolean,
	...N(["ariaLabel"])
}), ye = {
	trigger: "hover",
	triggerKeys: () => [
		G.enter,
		G.numpadEnter,
		G.space
	]
}, J = I({
	...H,
	disabled: Boolean,
	trigger: {
		type: L([String, Array]),
		default: "hover"
	},
	triggerKeys: {
		type: L(Array),
		default: () => [
			G.enter,
			G.numpadEnter,
			G.space
		]
	},
	focusOnTarget: Boolean
}), be = R({
	type: L(Boolean),
	default: null
}), xe = R({ type: L(Function) }), Se = (e) => {
	let n = `update:${e}`, a = `onUpdate:${e}`, o = [n];
	return {
		useModelToggle: ({ indicator: o, toggleReason: s, shouldHideWhenRouteChanges: c, shouldProceed: l, onShow: u, onHide: d }) => {
			let f = i(), { emit: p } = f, m = f.props, h = _(() => r(m[a])), g = _(() => m[e] === null), v = (e) => {
				o.value !== !0 && (o.value = !0, s && (s.value = e), r(u) && u(e));
			}, y = (e) => {
				o.value !== !1 && (o.value = !1, s && (s.value = e), r(d) && d(e));
			}, b = (e) => {
				if (m.disabled === !0 || r(l) && !l()) return;
				let t = h.value && z;
				t && p(n, !0), (g.value || !t) && v(e);
			}, x = (e) => {
				if (m.disabled === !0 || !z) return;
				let t = h.value && z;
				t && p(n, !1), (g.value || !t) && y(e);
			}, S = (e) => {
				F(e) && (m.disabled && e ? h.value && p(n, !1) : o.value !== e && (e ? v() : y()));
			};
			return t(() => m[e], S), c && f.appContext.config.globalProperties.$route !== void 0 && t(() => ({ ...f.proxy.$route }), () => {
				c.value && o.value && x();
			}), j(() => {
				S(m[e]);
			}), {
				hide: x,
				show: b,
				toggle: () => {
					o.value ? x() : b();
				},
				hasUpdateHandler: h
			};
		},
		useModelToggleProps: {
			[e]: be,
			[a]: xe
		},
		useModelToggleEmits: o
	};
}, { useModelToggle: Ce, useModelToggleProps: we, useModelToggleEmits: Te } = Se("modelValue"), { useModelToggleProps: Ee, useModelToggleEmits: De, useModelToggle: Oe } = Se("visible"), ke = I({
	...ce,
	...Ee,
	...q,
	...J,
	...ae,
	showArrow: {
		type: Boolean,
		default: !0
	}
}), Ae = [
	...De,
	"before-show",
	"before-hide",
	"show",
	"hide",
	"open",
	"close"
], Y = Symbol("elTooltip"), X = () => {
	let e = B(), t = de(), n = _(() => `${e.value}-popper-container-${t.prefix}`);
	return {
		id: n,
		selector: _(() => `#${n.value}`)
	};
}, je = (e) => {
	let t = document.createElement("div");
	return t.id = e, document.body.appendChild(t), t;
}, Me = () => {
	let { id: e, selector: t } = X();
	return a(() => {
		z && (document.body.querySelector(t.value) || je(e.value));
	}), {
		id: e,
		selector: t
	};
}, Z = (e, t) => h(e) ? e.includes(t) : e === t, Q = (e, t, n) => (r) => {
	Z(A(e), t) && n(r);
}, Ne = /* @__PURE__ */ m({
	name: "ElTooltipTrigger",
	__name: "trigger",
	props: J,
	setup(e, { expose: t }) {
		let r = e, i = V("tooltip"), { controlled: a, id: o, open: l, onOpen: u, onClose: p, onToggle: m } = n(Y, void 0), h = E(null), g = () => {
			if (A(a) || r.disabled) return !0;
		}, _ = y(r, "trigger"), v = K(g, Q(_, "hover", (e) => {
			u(e), r.focusOnTarget && e.target && f(() => {
				ee(e.target, { preventScroll: !0 });
			});
		})), b = K(g, Q(_, "hover", p)), x = K(g, Q(_, "click", (e) => {
			e.button === 0 && m(e);
		})), S = K(g, Q(_, "focus", u)), C = K(g, Q(_, "focus", p)), w = K(g, Q(_, "contextmenu", (e) => {
			e.preventDefault(), m(e);
		})), D = K(g, (e) => {
			let t = ue(e);
			r.triggerKeys.includes(t) && (e.preventDefault(), m(e));
		});
		return t({ triggerRef: h }), (t, n) => (c(), k(A(oe), {
			id: A(o),
			"virtual-ref": e.virtualRef,
			open: A(l),
			"virtual-triggering": e.virtualTriggering,
			class: d(A(i).e("trigger")),
			onBlur: A(C),
			onClick: A(x),
			onContextmenu: A(w),
			onFocus: A(S),
			onMouseenter: A(v),
			onMouseleave: A(b),
			onKeydown: A(D)
		}, {
			default: T(() => [s(t.$slots, "default")]),
			_: 3
		}, 8, [
			"id",
			"virtual-ref",
			"open",
			"virtual-triggering",
			"class",
			"onBlur",
			"onClick",
			"onContextmenu",
			"onFocus",
			"onMouseenter",
			"onMouseleave",
			"onKeydown"
		]));
	}
}), Pe = /* @__PURE__ */ m({
	name: "ElTooltipContent",
	inheritAttrs: !1,
	__name: "content",
	props: q,
	setup(e, { expose: r }) {
		let i = e, { selector: a } = X(), o = V("tooltip"), d = E(), f = te(() => d.value?.popperContentRef), p, { controlled: m, id: h, open: g, trigger: y, onClose: x, onOpen: O, onShow: j, onHide: M, onBeforeShow: N, onBeforeHide: P } = n(Y, void 0), F = _(() => i.transition || `${o.namespace.value}-fade-in-linear`), I = _(() => i.persistent);
		l(() => {
			p?.();
		});
		let L = _(() => A(I) ? !0 : A(g)), R = _(() => i.disabled ? !1 : A(g)), z = _(() => i.appendTo || a.value), re = _(() => i.style ?? {}), B = E(!0), ie = () => {
			M(), G() && ee(document.body, { preventScroll: !0 }), B.value = !0;
		}, H = () => {
			if (A(m)) return !0;
		}, ae = K(H, () => {
			i.enterable && Z(A(y), "hover") && O();
		}), oe = K(H, () => {
			Z(A(y), "hover") && x();
		}), se = () => {
			d.value?.updatePopper?.(), N?.();
		}, ce = () => {
			P?.();
		}, U = () => {
			j();
		}, W = () => {
			i.virtualTriggering || x();
		}, G = (e) => {
			let t = d.value?.popperContentRef, n = e?.relatedTarget || document.activeElement;
			return t?.contains(n);
		};
		return t(() => A(g), (e) => {
			e ? (B.value = !1, p = ne(f, () => {
				A(m) || pe(A(y)).every((e) => e !== "hover" && e !== "focus") && x();
			}, { detectIframe: !0 })) : p?.();
		}, { flush: "post" }), r({
			contentRef: d,
			isFocusInsideContent: G
		}), (t, n) => (c(), k(S, {
			disabled: !e.teleported,
			to: z.value
		}, [L.value || !B.value ? (c(), k(C, {
			key: 0,
			name: F.value,
			appear: !I.value,
			onAfterLeave: ie,
			onBeforeEnter: se,
			onAfterEnter: U,
			onBeforeLeave: ce,
			persisted: ""
		}, {
			default: T(() => [w(D(A(le), u({
				id: A(h),
				ref_key: "contentRef",
				ref: d
			}, t.$attrs, {
				"aria-label": e.ariaLabel,
				"aria-hidden": B.value,
				"boundaries-padding": e.boundariesPadding,
				"fallback-placements": e.fallbackPlacements,
				"gpu-acceleration": e.gpuAcceleration,
				offset: e.offset,
				placement: e.placement,
				"popper-options": e.popperOptions,
				"arrow-offset": e.arrowOffset,
				strategy: e.strategy,
				effect: e.effect,
				enterable: e.enterable,
				pure: e.pure,
				"popper-class": e.popperClass,
				"popper-style": [e.popperStyle, re.value],
				"reference-el": e.referenceEl,
				"trigger-target-el": e.triggerTargetEl,
				visible: R.value,
				"z-index": e.zIndex,
				loop: e.loop,
				onMouseenter: A(ae),
				onMouseleave: A(oe),
				onBlur: W,
				onClose: A(x)
			}), {
				default: T(() => [s(t.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"aria-label",
				"aria-hidden",
				"boundaries-padding",
				"fallback-placements",
				"gpu-acceleration",
				"offset",
				"placement",
				"popper-options",
				"arrow-offset",
				"strategy",
				"effect",
				"enterable",
				"pure",
				"popper-class",
				"popper-style",
				"reference-el",
				"trigger-target-el",
				"visible",
				"z-index",
				"loop",
				"onMouseenter",
				"onMouseleave",
				"onClose"
			]), [[b, R.value]])]),
			_: 3
		}, 8, ["name", "appear"])) : v("v-if", !0)], 8, ["disabled", "to"]));
	}
}), Fe = ["innerHTML"], Ie = { key: 1 }, Le = /* @__PURE__ */ m({
	name: "ElTooltip",
	__name: "tooltip",
	props: ke,
	emits: Ae,
	setup(e, { expose: n, emit: r }) {
		let i = e, a = r;
		Me();
		let u = V("tooltip"), d = fe(), f = E(), m = E(), h = () => {
			let e = A(f);
			e && e.popperInstanceRef?.update();
		}, b = E(!1), S = E(), { show: C, hide: w, hasUpdateHandler: j } = Oe({
			indicator: b,
			toggleReason: S
		}), { onOpen: M, onClose: N } = _e({
			showAfter: y(i, "showAfter"),
			hideAfter: y(i, "hideAfter"),
			autoClose: y(i, "autoClose"),
			open: C,
			close: w
		}), P = _(() => F(i.visible) && !j.value), I = _(() => [u.b(), i.popperClass]);
		return g(Y, {
			controlled: P,
			id: d,
			open: x(b),
			trigger: y(i, "trigger"),
			onOpen: M,
			onClose: N,
			onToggle: (e) => {
				A(b) ? N(e) : M(e);
			},
			onShow: () => {
				a("show", S.value);
			},
			onHide: () => {
				a("hide", S.value);
			},
			onBeforeShow: () => {
				a("before-show", S.value);
			},
			onBeforeHide: () => {
				a("before-hide", S.value);
			},
			updatePopper: h
		}), t(() => i.disabled, (e) => {
			e && b.value && (b.value = !1), !e && F(i.visible) && (b.value = i.visible);
		}), p(() => b.value && w()), l(() => {
			S.value = void 0;
		}), n({
			popperRef: f,
			contentRef: m,
			isFocusInsideContent: (e) => m.value?.isFocusInsideContent(e),
			updatePopper: h,
			onOpen: M,
			onClose: N,
			hide: w
		}), (t, n) => (c(), k(A(U), {
			ref_key: "popperRef",
			ref: f,
			role: e.role
		}, {
			default: T(() => [D(Ne, {
				disabled: e.disabled,
				trigger: e.trigger,
				"trigger-keys": e.triggerKeys,
				"virtual-ref": e.virtualRef,
				"virtual-triggering": e.virtualTriggering,
				"focus-on-target": e.focusOnTarget
			}, {
				default: T(() => [t.$slots.default ? s(t.$slots, "default", { key: 0 }) : v("v-if", !0)]),
				_: 3
			}, 8, [
				"disabled",
				"trigger",
				"trigger-keys",
				"virtual-ref",
				"virtual-triggering",
				"focus-on-target"
			]), D(Pe, {
				ref_key: "contentRef",
				ref: m,
				"aria-label": e.ariaLabel,
				"boundaries-padding": e.boundariesPadding,
				content: e.content,
				disabled: e.disabled,
				effect: e.effect,
				enterable: e.enterable,
				"fallback-placements": e.fallbackPlacements,
				"hide-after": e.hideAfter,
				"gpu-acceleration": e.gpuAcceleration,
				offset: e.offset,
				persistent: e.persistent,
				"popper-class": I.value,
				"popper-style": e.popperStyle,
				placement: e.placement,
				"popper-options": e.popperOptions,
				"arrow-offset": e.arrowOffset,
				pure: e.pure,
				"raw-content": e.rawContent,
				"reference-el": e.referenceEl,
				"trigger-target-el": e.triggerTargetEl,
				"show-after": e.showAfter,
				strategy: e.strategy,
				teleported: e.teleported,
				transition: e.transition,
				"virtual-triggering": e.virtualTriggering,
				"z-index": e.zIndex,
				"append-to": e.appendTo,
				loop: e.loop
			}, {
				default: T(() => [s(t.$slots, "content", {}, () => [e.rawContent ? (c(), O("span", {
					key: 0,
					innerHTML: e.content
				}, null, 8, Fe)) : (c(), O("span", Ie, o(e.content), 1))]), e.showArrow ? (c(), k(A(ie), { key: 0 })) : v("v-if", !0)]),
				_: 3
			}, 8, /* @__PURE__ */ "aria-label.boundaries-padding.content.disabled.effect.enterable.fallback-placements.hide-after.gpu-acceleration.offset.persistent.popper-class.popper-style.placement.popper-options.arrow-offset.pure.raw-content.reference-el.trigger-target-el.show-after.strategy.teleported.transition.virtual-triggering.z-index.append-to.loop".split("."))]),
			_: 3
		}, 8, ["role"]));
	}
}), Re = /* @__PURE__ */ e({
	ElTooltip: () => $,
	TOOLTIP_INJECTION_KEY: () => Y,
	default: () => $,
	tooltipEmits: () => Ae,
	useTooltipContentProps: () => q,
	useTooltipContentPropsDefaults: () => ve,
	useTooltipModelToggle: () => Oe,
	useTooltipModelToggleEmits: () => De,
	useTooltipModelToggleProps: () => Ee,
	useTooltipProps: () => ke,
	useTooltipTriggerProps: () => J,
	useTooltipTriggerPropsDefaults: () => ye
}), $ = M(Le);
//#endregion
export { q as i, Re as n, J as r, $ as t };
