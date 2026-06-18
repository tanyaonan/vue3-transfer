globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, C as t, D as n, Dt as r, Ft as i, G as a, H as o, M as s, Mt as c, N as l, Nt as u, Ot as d, Pt as f, S as p, T as m, Tt as h, W as g, _, b as v, d as y, jt as b, l as x, nt as S, p as C, tt as w, ut as T, v as E, w as D, x as O, yt as k } from "./vue.runtime.js";
import { t as A } from "./shared/element-plus/utils/vue/install.js";
import { t as j } from "./shared/lodash/castArray.js";
import { n as M } from "./shared/element-plus/hooks/use-aria.js";
import { n as N, r as P } from "./shared/element-plus/constants/event.js";
import { n as F, r as I } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as L } from "./shared/element-plus/utils/browser.js";
import { o as ee } from "./shared/element-plus/utils/easings.js";
import { r as R } from "./shared/element-plus/hooks/use-namespace.js";
import { i as z, t as te } from "./el-tooltip.js";
import { r as B, t as V } from "./el-input.js";
import { a as H, n as ne } from "./shared/element-plus/constants/aria.js";
import { t as re } from "./shared/element-plus/hooks/use-id.js";
import { n as ie } from "./el-form/hooks/use-form-common-props.js";
import { n as ae } from "./shared/element-plus/hooks/use-focus-controller.js";
import { t as U } from "./el-scrollbar.js";
import { n as W } from "./shared/element-plus/hooks/use-locale.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/mention/src/helper.mjs
var G = (e, t) => {
	let n = e.toLowerCase();
	return (t.label || t.value || "").toLowerCase().includes(n);
}, oe = (e, t, n) => {
	let { selectionEnd: r } = e;
	if (r === null) return;
	let i = e.value, a = j(t), o = -1, s;
	for (let e = r - 1; e >= 0; --e) {
		let t = i[e];
		if (o === -1 && (t === n || t === "\n" || t === "\r")) {
			o = e;
			continue;
		}
		if (a.includes(t)) {
			let n = o === -1 ? r : o;
			s = {
				pattern: i.slice(e + 1, n),
				start: e + 1,
				end: n,
				prefix: t,
				prefixIndex: e,
				splitIndex: o,
				selectionEnd: r
			};
			break;
		}
	}
	return s;
}, se = (e, t = {
	debug: !1,
	useSelectionEnd: !1
}) => {
	let n = e.selectionStart === null ? 0 : e.selectionStart, r = e.selectionEnd === null ? 0 : e.selectionEnd, i = t.useSelectionEnd ? r : n, a = /* @__PURE__ */ "direction.boxSizing.width.height.overflowX.overflowY.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing.tabSize.MozTabSize".split(".");
	if (t.debug) {
		let e = document.querySelector("#input-textarea-caret-position-mirror-div");
		e?.parentNode && e.parentNode.removeChild(e);
	}
	let o = document.createElement("div");
	o.id = "input-textarea-caret-position-mirror-div", document.body.appendChild(o);
	let s = o.style, c = window.getComputedStyle(e), l = e.nodeName === "INPUT";
	s.whiteSpace = l ? "nowrap" : "pre-wrap", l || (s.wordWrap = "break-word"), s.position = "absolute", t.debug || (s.visibility = "hidden"), a.forEach((e) => {
		if (l && e === "lineHeight") if (c.boxSizing === "border-box") {
			let e = Number.parseInt(c.height), t = Number.parseInt(c.paddingTop) + Number.parseInt(c.paddingBottom) + Number.parseInt(c.borderTopWidth) + Number.parseInt(c.borderBottomWidth), n = t + Number.parseInt(c.lineHeight);
			e > n ? s.lineHeight = `${e - t}px` : e === n ? s.lineHeight = c.lineHeight : s.lineHeight = "0";
		} else s.lineHeight = c.height;
		else s[e] = c[e];
	}), L() ? e.scrollHeight > Number.parseInt(c.height) && (s.overflowY = "scroll") : s.overflow = "hidden", o.textContent = e.value.slice(0, Math.max(0, i)), l && o.textContent && (o.textContent = o.textContent.replace(/\s/g, "\xA0"));
	let u = document.createElement("span");
	u.textContent = e.value.slice(Math.max(0, i)) || ".", u.style.position = "relative", u.style.left = `${-e.scrollLeft}px`, u.style.top = `${-e.scrollTop}px`, o.appendChild(u);
	let d = {
		top: u.offsetTop + Number.parseInt(c.borderTopWidth),
		left: u.offsetLeft + Number.parseInt(c.borderLeftWidth),
		height: Number.parseInt(c.fontSize) * 1.5
	};
	return t.debug ? u.style.backgroundColor = "#aaa" : document.body.removeChild(o), d.left >= e.clientWidth && (d.left = e.clientWidth), d;
}, K = F({
	...B,
	options: {
		type: I(Array),
		default: () => []
	},
	prefix: {
		type: I([String, Array]),
		default: "@",
		validator: (e) => b(e) ? e.length === 1 : e.every((e) => b(e) && e.length === 1)
	},
	split: {
		type: String,
		default: " ",
		validator: (e) => e.length === 1
	},
	filterOption: {
		type: I([Boolean, Function]),
		default: () => G,
		validator: (e) => e === !1 ? !0 : r(e)
	},
	placement: {
		type: I(String),
		default: "bottom"
	},
	showArrow: Boolean,
	offset: {
		type: Number,
		default: 0
	},
	whole: Boolean,
	checkIsWhole: { type: I(Function) },
	modelValue: String,
	loading: Boolean,
	popperClass: z.popperClass,
	popperStyle: z.popperStyle,
	popperOptions: {
		type: I(Object),
		default: () => ({})
	},
	props: {
		type: I(Object),
		default: () => J
	}
}), q = {
	[P]: (e) => b(e),
	"whole-remove": (e, t) => b(e) && b(t),
	input: (e) => b(e),
	search: (e, t) => b(e) && b(t),
	select: (e, t) => d(e) && b(t),
	focus: (e) => e instanceof FocusEvent,
	blur: (e) => e instanceof FocusEvent
}, J = {
	value: "value",
	label: "label",
	disabled: "disabled"
}, ce = F({
	options: {
		type: I(Array),
		default: () => []
	},
	loading: Boolean,
	disabled: Boolean,
	contentId: String,
	ariaLabel: String
}), le = { select: (e) => b(e.value) }, Y = [
	"id",
	"aria-disabled",
	"aria-selected",
	"onMousemove",
	"onClick"
], ue = /* @__PURE__ */ m({
	name: "ElMentionDropdown",
	__name: "mention-dropdown",
	props: ce,
	emits: le,
	setup(n, { expose: r, emit: s }) {
		let u = n, d = s, f = R("mention"), { t: p } = W(), m = T(-1), h = T(), b = T(), A = T(), j = (e, t) => [
			f.be("dropdown", "item"),
			f.is("hovering", m.value === t),
			f.is("disabled", e.disabled || u.disabled)
		], M = (e) => {
			e.disabled || u.disabled || d("select", e);
		}, N = (e) => {
			m.value = e;
		}, P = _(() => u.disabled || u.options.every((e) => e.disabled)), F = _(() => u.options[m.value]), I = () => {
			!F.value || F.value.disabled || u.disabled || d("select", F.value);
		}, L = (e) => {
			let { options: t } = u;
			if (t.length === 0 || P.value) return;
			e === "next" ? (m.value++, m.value === t.length && (m.value = 0)) : e === "prev" && (m.value--, m.value < 0 && (m.value = t.length - 1));
			let n = t[m.value];
			if (n.disabled) {
				L(e);
				return;
			}
			l(() => z(n));
		}, z = (e) => {
			let { options: t } = u, n = t.findIndex((t) => t.value === e.value), r = b.value?.[n];
			if (r) {
				let e = A.value?.querySelector?.(`.${f.be("dropdown", "wrap")}`);
				e && ee(e, r);
			}
			h.value?.handleScroll();
		};
		return e(() => u.options, () => {
			P.value || u.options.length === 0 ? m.value = -1 : m.value = u.options.findIndex((e) => !e.disabled);
		}, { immediate: !0 }), r({
			hoveringIndex: m,
			navigateOptions: L,
			selectHoverOption: I,
			hoverOption: F
		}), (e, r) => (o(), O("div", {
			ref_key: "dropdownRef",
			ref: A,
			class: c(k(f).b("dropdown"))
		}, [
			e.$slots.header ? (o(), O("div", {
				key: 0,
				class: c(k(f).be("dropdown", "header"))
			}, [a(e.$slots, "header")], 2)) : v("v-if", !0),
			S(D(k(U), {
				id: n.contentId,
				ref_key: "scrollbarRef",
				ref: h,
				tag: "ul",
				"wrap-class": k(f).be("dropdown", "wrap"),
				"view-class": k(f).be("dropdown", "list"),
				role: "listbox",
				"aria-label": n.ariaLabel,
				"aria-orientation": "vertical"
			}, {
				default: w(() => [(o(!0), O(C, null, g(n.options, (t, r) => (o(), O("li", {
					id: `${n.contentId}-${r}`,
					ref_for: !0,
					ref_key: "optionRefs",
					ref: b,
					key: r,
					class: c(j(t, r)),
					role: "option",
					"aria-disabled": t.disabled || n.disabled || void 0,
					"aria-selected": m.value === r,
					onMousemove: (e) => N(r),
					onClick: y((e) => M(t), ["stop"])
				}, [a(e.$slots, "label", {
					item: t,
					index: r
				}, () => [E("span", null, i(t.label ?? t.value), 1)])], 42, Y))), 128))]),
				_: 3
			}, 8, [
				"id",
				"wrap-class",
				"view-class",
				"aria-label"
			]), [[x, n.options.length > 0 && !n.loading]]),
			n.loading ? (o(), O("div", {
				key: 1,
				class: c(k(f).be("dropdown", "loading"))
			}, [a(e.$slots, "loading", {}, () => [t(i(k(p)("el.mention.loading")), 1)])], 2)) : v("v-if", !0),
			e.$slots.footer ? (o(), O("div", {
				key: 2,
				class: c(k(f).be("dropdown", "footer"))
			}, [a(e.$slots, "footer")], 2)) : v("v-if", !0)
		], 2));
	}
}), X = A(/* @__PURE__ */ m({
	name: "ElMention",
	inheritAttrs: !1,
	__name: "mention",
	props: K,
	emits: q,
	setup(e, { expose: t, emit: i }) {
		let d = e, m = i, v = _(() => {
			let e = V.props ?? [];
			return M(d, h(e) ? e : Object.keys(e));
		}), b = R("mention"), x = ie(), S = re(), C = T(), A = T(), j = T(), F = T(!1), I = T(), L = T(), ee = _(() => d.showArrow ? d.placement : `${d.placement}-start`), z = _(() => d.showArrow ? ["bottom", "top"] : ["bottom-start", "top-start"]), B = _(() => ({
			...J,
			...d.props
		})), U = (e) => {
			let t = {
				label: e[B.value.label],
				value: e[B.value.value],
				disabled: e[B.value.disabled]
			};
			return {
				...e,
				...t
			};
		}, W = _(() => d.options.map(U)), G = _(() => {
			let { filterOption: e } = d;
			return !L.value || !e ? W.value : W.value.filter((t) => e(L.value.pattern, t));
		}), K = _(() => F.value && (!!G.value.length || d.loading)), q = _(() => `${S.value}-${j.value?.hoveringIndex}`), ce = (e) => {
			m(P, e), m(N, e), Q();
		}, le = (e) => {
			if (C.value?.isComposing) return;
			let t = ne(e);
			switch (t) {
				case H.left:
				case H.right:
					Q();
					break;
				case H.up:
				case H.down:
					if (!F.value) return;
					e.preventDefault(), j.value?.navigateOptions(t === H.up ? "prev" : "next");
					break;
				case H.enter:
				case H.numpadEnter:
					if (!F.value) {
						d.type !== "textarea" && Q();
						return;
					}
					e.preventDefault(), j.value?.hoverOption ? j.value?.selectHoverOption() : F.value = !1;
					break;
				case H.esc:
					if (!F.value) return;
					e.preventDefault(), F.value = !1;
					break;
				case H.backspace: if (d.whole && L.value) {
					let { splitIndex: t, selectionEnd: n, pattern: i, prefixIndex: a, prefix: o } = L.value, s = Z();
					if (!s) return;
					let c = s.value, u = W.value.find((e) => e.value === i);
					if ((r(d.checkIsWhole) ? d.checkIsWhole(i, o) : u) && t !== -1 && t + 1 === n) {
						e.preventDefault();
						let n = c.slice(0, a) + c.slice(t + 1);
						m(P, n), m(N, n), m("whole-remove", i, o);
						let r = a;
						l(() => {
							s.selectionStart = r, s.selectionEnd = r, $();
						});
					}
				}
			}
		}, { wrapperRef: Y } = ae(C, {
			disabled: x,
			afterFocus() {
				Q();
			},
			beforeBlur(e) {
				return A.value?.isFocusInsideContent(e);
			},
			afterBlur() {
				F.value = !1;
			}
		}), X = () => {
			Q();
		}, de = (e) => d.options.find((t) => e.value === t[B.value.value]), fe = (e) => {
			if (!L.value) return;
			let t = Z();
			if (!t) return;
			let n = t.value, { split: r } = d, i = n.slice(L.value.end), a = i.startsWith(r), o = `${e.value}${a ? "" : r}`, s = n.slice(0, L.value.start) + o + i;
			m(P, s), m(N, s), m("select", de(e), L.value.prefix);
			let c = L.value.start + o.length + +!!a;
			l(() => {
				t.selectionStart = c, t.selectionEnd = c, t.focus(), $();
			});
		}, Z = () => d.type === "textarea" ? C.value?.textarea : C.value?.input, Q = () => {
			setTimeout(() => {
				pe(), $(), l(() => A.value?.updatePopper());
			}, 0);
		}, pe = () => {
			let e = Z();
			if (!e) return;
			let t = se(e), n = e.getBoundingClientRect(), r = Y.value.getBoundingClientRect();
			I.value = {
				position: "absolute",
				width: 0,
				height: `${t.height}px`,
				left: `${t.left + n.left - r.left}px`,
				top: `${t.top + n.top - r.top}px`
			};
		}, $ = () => {
			let e = Z();
			if (document.activeElement !== e) {
				F.value = !1;
				return;
			}
			let { prefix: t, split: n } = d;
			if (L.value = oe(e, t, n), L.value && L.value.splitIndex === -1) {
				F.value = !0, m("search", L.value.pattern, L.value.prefix);
				return;
			}
			F.value = !1;
		};
		return t({
			input: C,
			tooltip: A,
			dropdownVisible: K
		}), (t, r) => (o(), O("div", {
			ref_key: "wrapperRef",
			ref: Y,
			class: c(k(b).b())
		}, [D(k(V), s(s(v.value, t.$attrs), {
			ref_key: "elInputRef",
			ref: C,
			"model-value": e.modelValue,
			disabled: k(x),
			role: K.value ? "combobox" : void 0,
			"aria-activedescendant": K.value ? q.value || "" : void 0,
			"aria-controls": K.value ? k(S) : void 0,
			"aria-expanded": K.value || void 0,
			"aria-label": e.ariaLabel,
			"aria-autocomplete": K.value ? "none" : void 0,
			"aria-haspopup": K.value ? "listbox" : void 0,
			onInput: ce,
			onKeydown: le,
			onMousedown: X
		}), p({ _: 2 }, [g(t.$slots, (e, r) => ({
			name: r,
			fn: w((e) => [a(t.$slots, r, u(n(e)))])
		}))]), 1040, [
			"model-value",
			"disabled",
			"role",
			"aria-activedescendant",
			"aria-controls",
			"aria-expanded",
			"aria-label",
			"aria-autocomplete",
			"aria-haspopup"
		]), D(k(te), {
			ref_key: "tooltipRef",
			ref: A,
			visible: K.value,
			"popper-class": [k(b).e("popper"), e.popperClass],
			"popper-style": e.popperStyle,
			"popper-options": e.popperOptions,
			placement: ee.value,
			"fallback-placements": z.value,
			effect: "light",
			pure: "",
			offset: e.offset,
			"show-arrow": e.showArrow
		}, {
			default: w(() => [E("div", { style: f(I.value) }, null, 4)]),
			content: w(() => [D(ue, {
				ref_key: "dropdownRef",
				ref: j,
				options: G.value,
				disabled: k(x),
				loading: e.loading,
				"content-id": k(S),
				"aria-label": e.ariaLabel,
				onSelect: fe,
				onClick: r[0] ||= y((e) => C.value?.focus(), ["stop"])
			}, p({ _: 2 }, [g(t.$slots, (e, r) => ({
				name: r,
				fn: w((e) => [a(t.$slots, r, u(n(e)))])
			}))]), 1032, [
				"options",
				"disabled",
				"loading",
				"content-id",
				"aria-label"
			])]),
			_: 3
		}, 8, [
			"visible",
			"popper-class",
			"popper-style",
			"popper-options",
			"placement",
			"fallback-placements",
			"offset",
			"show-arrow"
		])], 2));
	}
}));
//#endregion
export { X as ElMention, X as default, J as mentionDefaultProps, q as mentionEmits, K as mentionProps };
