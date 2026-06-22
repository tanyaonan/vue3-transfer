globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, C as t, Ft as n, G as r, H as i, J as a, M as o, Mt as s, Pt as c, T as l, Tt as u, W as d, X as f, Z as p, _ as m, at as h, b as g, bt as _, c as v, ct as y, d as b, jt as x, l as S, nt as C, p as w, pt as T, tt as E, ut as D, v as O, w as k, x as A, y as j, yt as M } from "./vue.runtime.js";
import { t as N } from "./shared/element-plus/utils/vue/install.js";
import { t as ee } from "./shared/lodash/castArray.js";
import { i as P, s as F } from "./shared/element-plus/utils/types.js";
import { n as I, r as L, t as R } from "./shared/element-plus/constants/event.js";
import { n as z, r as B } from "./shared/element-plus/utils/vue/props/runtime.js";
import { d as V } from "./shared/vueuse.js";
import { t as te } from "./shared/element-plus/utils/browser.js";
import { o as H, r as ne } from "./shared/element-plus/utils/dom/style.js";
import { r as U } from "./shared/element-plus/hooks/use-namespace.js";
import { f as re } from "./shared/element-plus-icons.js";
import { a as ie, i as ae } from "./shared/element-plus/utils/vue/icon.js";
import { t as oe } from "./el-icon.js";
import { t as se } from "./el-tooltip.js";
import { r as ce } from "./shared/element-plus/hooks/use-size.js";
import { a as W, n as G } from "./shared/element-plus/constants/aria.js";
import { n as le, r as ue } from "./el-form/hooks/use-form-common-props.js";
import { t as de } from "./shared/element-plus/hooks/use-attrs.js";
import { n as K, t as q } from "./shared/element-plus/hooks/use-focus-controller.js";
import { n as fe, t as pe } from "./el-form/hooks/use-form-item.js";
import { r as J, t as Y } from "./el-tag.js";
import { t as me } from "./shared/element-plus/hooks/use-calc-input-width.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input-tag/src/input-tag.mjs
var X = z({
	modelValue: { type: B(Array) },
	max: Number,
	tagType: {
		...J.type,
		default: "info"
	},
	tagEffect: J.effect,
	effect: {
		type: B(String),
		default: "light"
	},
	trigger: {
		type: B(String),
		default: W.enter
	},
	draggable: Boolean,
	delimiter: {
		type: [String, RegExp],
		default: ""
	},
	size: ce,
	clearable: Boolean,
	clearIcon: {
		type: ie,
		default: re
	},
	disabled: {
		type: Boolean,
		default: void 0
	},
	validateEvent: {
		type: Boolean,
		default: !0
	},
	readonly: Boolean,
	autofocus: Boolean,
	id: {
		type: String,
		default: void 0
	},
	tabindex: {
		type: [String, Number],
		default: 0
	},
	maxlength: { type: [String, Number] },
	minlength: { type: [String, Number] },
	placeholder: String,
	autocomplete: {
		type: B(String),
		default: "off"
	},
	saveOnBlur: {
		type: Boolean,
		default: !0
	},
	collapseTags: Boolean,
	collapseTagsTooltip: Boolean,
	maxCollapseTags: {
		type: Number,
		default: 1
	},
	ariaLabel: String
}), Z = {
	[L]: (e) => u(e) || F(e),
	[R]: (e) => u(e) || F(e),
	[I]: (e) => x(e),
	"add-tag": (e) => x(e) || u(e),
	"remove-tag": (e, t) => x(e) && P(t),
	"drag-tag": (e, t, n) => P(e) && P(t) && x(n),
	focus: (e) => e instanceof FocusEvent,
	blur: (e) => e instanceof FocusEvent,
	clear: () => !0
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input-tag/src/composables/use-drag-tag.mjs
function he({ wrapperRef: e, handleDragged: t, afterDragged: n }) {
	let r = U("input-tag"), i = T(), a = D(!1), o, s, c, l;
	function u(e) {
		return `.${r.e("inner")} .${r.namespace.value}-tag:nth-child(${e + 1})`;
	}
	function d(t, n) {
		o = n, s = e.value.querySelector(u(n)), s && (s.style.opacity = "0.5"), t.dataTransfer.effectAllowed = "move";
	}
	function f(t, n) {
		if (c = n, t.preventDefault(), t.dataTransfer.dropEffect = "move", F(o) || o === n) {
			a.value = !1;
			return;
		}
		let s = e.value.querySelector(u(n)).getBoundingClientRect(), d = o + 1 !== n, f = o - 1 !== n, p = t.clientX - s.left, m = d ? f ? .5 : 1 : -1, h = f ? d ? .5 : 0 : 1;
		l = p <= s.width * m ? "before" : p > s.width * h ? "after" : void 0;
		let g = e.value.querySelector(`.${r.e("inner")}`), _ = g.getBoundingClientRect(), v = Number.parseFloat(ne(g, "gap")) / 2, y = s.top - _.top, b = -9999;
		if (l === "before") b = Math.max(s.left - _.left - v, Math.floor(-v / 2));
		else if (l === "after") {
			let e = s.right - _.left;
			b = e + (_.width === e ? Math.floor(v / 2) : v);
		}
		H(i.value, {
			top: `${y}px`,
			left: `${b}px`
		}), a.value = !!l;
	}
	function p(e) {
		e.preventDefault(), s && (s.style.opacity = ""), l && !F(o) && !F(c) && o !== c && t(o, c, l), a.value = !1, o = void 0, s = null, c = void 0, l = void 0, n?.();
	}
	return {
		dropIndicatorRef: i,
		showDropIndicator: a,
		handleDragStart: d,
		handleDragOver: f,
		handleDragEnd: p
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input-tag/src/composables/use-hovering.mjs
function ge() {
	let e = D(!1);
	return {
		hovering: e,
		handleMouseEnter: () => {
			e.value = !0;
		},
		handleMouseLeave: () => {
			e.value = !1;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input-tag/src/composables/use-input-tag.mjs
function _e({ props: t, emit: n, formItem: r }) {
	let i = le(), a = ue(), o = T(), s = D(), c = D(), l = m(() => ["small"].includes(a.value) ? "small" : "default"), u = m(() => t.modelValue?.length ? void 0 : t.placeholder), d = m(() => !(t.readonly || i.value)), f = m(() => F(t.max) ? !1 : (t.modelValue?.length ?? 0) >= t.max), p = m(() => t.collapseTags ? t.modelValue?.slice(0, t.maxCollapseTags) : t.modelValue), h = m(() => t.collapseTags ? t.modelValue?.slice(t.maxCollapseTags) : []), g = (e) => {
		let r = [...t.modelValue ?? [], ...ee(e)];
		n(L, r), n(R, r), n("add-tag", e), s.value = void 0;
	}, v = (e) => {
		let n = e.split(t.delimiter), r = n.length > 1 ? n.map((e) => e.trim()).filter(Boolean) : [];
		if (t.max) {
			let e = t.max - (t.modelValue?.length ?? 0);
			r.splice(e);
		}
		return r.length === 1 ? r[0] : r;
	}, y = (e) => {
		let r = e.clipboardData?.getData("text");
		if (t.readonly || f.value || !t.delimiter || !r) return;
		let { selectionStart: i = 0, selectionEnd: a = 0, value: o } = e.target, s = o.slice(0, i) + r + o.slice(a), c = v(s);
		c.length && (g(c), n(I, s), e.preventDefault());
	}, b = (e) => {
		if (f.value) {
			s.value = void 0;
			return;
		}
		if (!N.value) {
			if (t.delimiter && s.value) {
				let e = v(s.value);
				e.length && g(e);
			}
			n(I, e.target.value);
		}
	}, x = (e) => {
		if (!N.value) switch (G(e)) {
			case t.trigger:
				e.preventDefault(), e.stopPropagation(), C();
				break;
			case W.numpadEnter:
				t.trigger === W.enter && (e.preventDefault(), e.stopPropagation(), C());
				break;
			case W.backspace:
				!s.value && t.modelValue?.length && (e.preventDefault(), e.stopPropagation(), w(t.modelValue.length - 1));
				break;
		}
	}, S = (e) => {
		if (!(N.value || !te())) switch (G(e)) {
			case W.space:
				t.trigger === W.space && (e.preventDefault(), e.stopPropagation(), C());
				break;
		}
	}, C = () => {
		let e = s.value?.trim();
		!e || f.value || g(e);
	}, w = (e) => {
		let r = (t.modelValue ?? []).slice(), [i] = r.splice(e, 1);
		n(L, r), n(R, r), n("remove-tag", i, e);
	}, E = () => {
		s.value = void 0, n(L, void 0), n(R, void 0), n("clear");
	}, O = (e, r, i) => {
		let a = (t.modelValue ?? []).slice(), [o] = a.splice(e, 1), s = r > e && i === "before" ? -1 : +(r < e && i === "after");
		a.splice(r + s, 0, o), n(L, a), n(R, a), n("drag-tag", e, r + s, o);
	}, k = () => {
		o.value?.focus();
	}, A = () => {
		o.value?.blur();
	}, { wrapperRef: j, isFocused: M } = K(o, {
		disabled: i,
		beforeBlur(e) {
			return c.value?.isFocusInsideContent(e);
		},
		afterBlur() {
			t.saveOnBlur ? C() : s.value = void 0, t.validateEvent && r?.validate?.("blur").catch(_);
		}
	}), { isComposing: N, handleCompositionStart: P, handleCompositionUpdate: z, handleCompositionEnd: B } = q({ afterComposition: b });
	return e(() => t.modelValue, () => {
		t.validateEvent && r?.validate?.(R).catch(_);
	}), {
		inputRef: o,
		wrapperRef: j,
		tagTooltipRef: c,
		isFocused: M,
		isComposing: N,
		inputValue: s,
		size: a,
		tagSize: l,
		placeholder: u,
		closable: d,
		disabled: i,
		inputLimit: f,
		showTagList: p,
		collapseTagList: h,
		handleDragged: O,
		handlePaste: y,
		handleInput: b,
		handleKeydown: x,
		handleKeyup: S,
		handleAddTag: C,
		handleRemoveTag: w,
		handleClear: E,
		handleCompositionStart: P,
		handleCompositionUpdate: z,
		handleCompositionEnd: B,
		focus: k,
		blur: A
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input-tag/src/composables/use-input-tag-dom.mjs
function ve({ props: e, isFocused: t, hovering: n, disabled: r, inputValue: i, size: a, validateState: o, validateIcon: s, needStatusIcon: c }) {
	let l = f(), u = p(), d = U("input-tag"), h = U("input"), g = D(), _ = D(), v = m(() => [
		d.b(),
		d.is("focused", t.value),
		d.is("hovering", n.value),
		d.is("disabled", r.value),
		d.m(a.value),
		d.e("wrapper"),
		l.class
	]), b = m(() => [l.style]), x = m(() => [
		d.e("inner"),
		d.is("draggable", e.draggable),
		d.is("left-space", !e.modelValue?.length && !u.prefix),
		d.is("right-space", !e.modelValue?.length && !C.value)
	]), S = m(() => e.clearable && !r.value && !e.readonly && (e.modelValue?.length || i.value) && (t.value || n.value)), C = m(() => u.suffix || S.value || o.value && s.value && c.value), w = y({
		innerWidth: 0,
		collapseItemWidth: 0
	}), T = () => {
		if (!_.value) return 0;
		let e = window.getComputedStyle(_.value);
		return Number.parseFloat(e.gap || "6px");
	}, E = () => {
		w.innerWidth = Number.parseFloat(window.getComputedStyle(_.value).width);
	}, O = () => {
		w.collapseItemWidth = g.value.getBoundingClientRect().width;
	}, k = m(() => {
		if (!e.collapseTags) return {};
		let t = T(), n = t + 11, r = g.value && e.maxCollapseTags === 1 ? w.innerWidth - w.collapseItemWidth - t - n : w.innerWidth - n;
		return { maxWidth: `${Math.max(r, 0)}px` };
	});
	return V(_, E), V(g, O), {
		ns: d,
		nsInput: h,
		containerKls: v,
		containerStyle: b,
		innerKls: x,
		showClear: S,
		showSuffix: C,
		tagStyle: k,
		collapseItemRef: g,
		innerRef: _
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input-tag/src/input-tag.vue_vue_type_script_setup_true_lang.mjs
var ye = [
	"id",
	"minlength",
	"maxlength",
	"disabled",
	"readonly",
	"autocomplete",
	"tabindex",
	"placeholder",
	"autofocus",
	"ariaLabel"
], be = ["textContent"], Q = N(/* @__PURE__ */ l({
	name: "ElInputTag",
	inheritAttrs: !1,
	__name: "input-tag",
	props: X,
	emits: Z,
	setup(e, { expose: l, emit: u }) {
		let f = e, y = u, x = de(), T = p(), { form: D, formItem: N } = pe(), { inputId: ee } = fe(f, { formItemContext: N }), P = m(() => D?.statusIcon ?? !1), F = m(() => N?.validateState || ""), I = m(() => F.value && ae[F.value]), { inputRef: L, wrapperRef: R, tagTooltipRef: z, isFocused: B, inputValue: V, size: te, tagSize: H, placeholder: ne, closable: U, disabled: re, showTagList: ie, collapseTagList: ce, handleDragged: W, handlePaste: G, handleInput: le, handleKeydown: ue, handleKeyup: K, handleRemoveTag: q, handleClear: J, handleCompositionStart: X, handleCompositionUpdate: Z, handleCompositionEnd: Q, focus: xe, blur: Se } = _e({
			props: f,
			emit: y,
			formItem: N
		}), { hovering: Ce, handleMouseEnter: we, handleMouseLeave: Te } = ge(), { calculatorRef: Ee, inputStyle: De } = me(), { dropIndicatorRef: Oe, showDropIndicator: ke, handleDragStart: Ae, handleDragOver: je, handleDragEnd: Me } = he({
			wrapperRef: R,
			handleDragged: W,
			afterDragged: xe
		}), { ns: $, nsInput: Ne, containerKls: Pe, containerStyle: Fe, innerKls: Ie, showClear: Le, showSuffix: Re, tagStyle: ze, collapseItemRef: Be, innerRef: Ve } = ve({
			props: f,
			hovering: Ce,
			isFocused: B,
			inputValue: V,
			disabled: re,
			size: te,
			validateState: F,
			validateIcon: I,
			needStatusIcon: P
		});
		return l({
			focus: xe,
			blur: Se
		}), (l, u) => (i(), A("div", {
			ref_key: "wrapperRef",
			ref: R,
			class: s(M(Pe)),
			style: c(M(Fe)),
			onMouseenter: u[9] ||= (...e) => M(we) && M(we)(...e),
			onMouseleave: u[10] ||= (...e) => M(Te) && M(Te)(...e)
		}, [
			M(T).prefix ? (i(), A("div", {
				key: 0,
				class: s(M($).e("prefix"))
			}, [r(l.$slots, "prefix")], 2)) : g("v-if", !0),
			O("div", {
				ref_key: "innerRef",
				ref: Ve,
				class: s(M(Ie))
			}, [
				(i(!0), A(w, null, d(M(ie), (a, o) => (i(), j(M(Y), {
					key: o,
					size: M(H),
					closable: M(U),
					type: e.tagType,
					effect: e.tagEffect,
					draggable: M(U) && e.draggable,
					style: c(M(ze)),
					"disable-transitions": "",
					onClose: (e) => M(q)(o),
					onDragstart: (e) => M(Ae)(e, o),
					onDragover: (e) => M(je)(e, o),
					onDragend: M(Me),
					onDrop: u[0] ||= b(() => {}, ["stop"])
				}, {
					default: E(() => [r(l.$slots, "tag", {
						value: a,
						index: o
					}, () => [t(n(a), 1)])]),
					_: 2
				}, 1032, [
					"size",
					"closable",
					"type",
					"effect",
					"draggable",
					"style",
					"onClose",
					"onDragstart",
					"onDragover",
					"onDragend"
				]))), 128)),
				e.collapseTags && e.modelValue && e.modelValue.length > e.maxCollapseTags ? (i(), j(M(se), {
					key: 0,
					ref_key: "tagTooltipRef",
					ref: z,
					disabled: !e.collapseTagsTooltip,
					"fallback-placements": [
						"bottom",
						"top",
						"right",
						"left"
					],
					effect: e.effect,
					placement: "bottom"
				}, {
					default: E(() => [O("div", {
						ref_key: "collapseItemRef",
						ref: Be,
						class: s(M($).e("collapse-tag"))
					}, [k(M(Y), {
						closable: !1,
						size: M(H),
						type: e.tagType,
						effect: e.tagEffect,
						"disable-transitions": ""
					}, {
						default: E(() => [t(" + " + n(e.modelValue.length - e.maxCollapseTags), 1)]),
						_: 1
					}, 8, [
						"size",
						"type",
						"effect"
					])], 2)]),
					content: E(() => [O("div", { class: s(M($).e("input-tag-list")) }, [(i(!0), A(w, null, d(M(ce), (a, o) => (i(), j(M(Y), {
						key: o,
						size: M(H),
						closable: M(U),
						type: e.tagType,
						effect: e.tagEffect,
						"disable-transitions": "",
						onClose: (t) => M(q)(o + e.maxCollapseTags)
					}, {
						default: E(() => [r(l.$slots, "tag", {
							value: a,
							index: o + e.maxCollapseTags
						}, () => [t(n(a), 1)])]),
						_: 2
					}, 1032, [
						"size",
						"closable",
						"type",
						"effect",
						"onClose"
					]))), 128))], 2)]),
					_: 3
				}, 8, ["disabled", "effect"])) : g("v-if", !0),
				O("div", { class: s(M($).e("input-wrapper")) }, [C(O("input", o({
					id: M(ee),
					ref_key: "inputRef",
					ref: L,
					"onUpdate:modelValue": u[1] ||= (e) => h(V) ? V.value = e : null
				}, M(x), {
					type: "text",
					minlength: e.minlength,
					maxlength: e.maxlength,
					disabled: M(re),
					readonly: e.readonly,
					autocomplete: e.autocomplete,
					tabindex: e.tabindex,
					placeholder: M(ne),
					autofocus: e.autofocus,
					ariaLabel: e.ariaLabel,
					class: M($).e("input"),
					style: M(De),
					onCompositionstart: u[2] ||= (...e) => M(X) && M(X)(...e),
					onCompositionupdate: u[3] ||= (...e) => M(Z) && M(Z)(...e),
					onCompositionend: u[4] ||= (...e) => M(Q) && M(Q)(...e),
					onPaste: u[5] ||= (...e) => M(G) && M(G)(...e),
					onInput: u[6] ||= (...e) => M(le) && M(le)(...e),
					onKeydown: u[7] ||= (...e) => M(ue) && M(ue)(...e),
					onKeyup: u[8] ||= (...e) => M(K) && M(K)(...e)
				}), null, 16, ye), [[v, M(V)]]), O("span", {
					ref_key: "calculatorRef",
					ref: Ee,
					"aria-hidden": "true",
					class: s(M($).e("input-calculator")),
					textContent: n(M(V))
				}, null, 10, be)], 2),
				C(O("div", {
					ref_key: "dropIndicatorRef",
					ref: Oe,
					class: s(M($).e("drop-indicator"))
				}, null, 2), [[S, M(ke)]])
			], 2),
			M(Re) ? (i(), A("div", {
				key: 1,
				class: s(M($).e("suffix"))
			}, [
				r(l.$slots, "suffix"),
				M(Le) ? (i(), j(M(oe), {
					key: 0,
					class: s([M($).e("icon"), M($).e("clear")]),
					onMousedown: b(M(_), ["prevent"]),
					onClick: M(J)
				}, {
					default: E(() => [(i(), j(a(e.clearIcon)))]),
					_: 1
				}, 8, [
					"class",
					"onMousedown",
					"onClick"
				])) : g("v-if", !0),
				F.value && I.value && P.value ? (i(), j(M(oe), {
					key: 1,
					class: s([
						M(Ne).e("icon"),
						M(Ne).e("validateIcon"),
						M(Ne).is("loading", F.value === "validating")
					])
				}, {
					default: E(() => [(i(), j(a(I.value)))]),
					_: 1
				}, 8, ["class"])) : g("v-if", !0)
			], 2)) : g("v-if", !0)
		], 38));
	}
}));
//#endregion
export { Q as ElInputTag, Q as default, Z as inputTagEmits, X as inputTagProps };
