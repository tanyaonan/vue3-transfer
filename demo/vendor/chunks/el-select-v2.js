globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, C as n, D as r, Dt as i, Ft as a, G as o, H as s, It as c, J as l, K as u, M as d, Mt as f, N as p, Nt as m, Ot as h, Pt as g, S as ee, T as _, Tt as v, U as y, W as b, Z as te, _ as x, b as S, bt as ne, ct as re, d as C, et as ie, gt as w, l as T, mt as E, nt as D, p as O, q as ae, tt as k, u as A, ut as j, v as M, w as N, x as P, y as F, yt as I, z as oe } from "./vue.runtime.js";
import { a as L } from "./shared/element-plus/utils/objects.js";
import { n as se, r as ce, t as le } from "./el-select-v2/useProps.js";
import { t as R } from "./shared/element-plus/utils/vue/install.js";
import { t as z } from "./shared/lodash/isEqual.js";
import { t as ue } from "./shared/element-plus/hooks/use-aria.js";
import { i as de, r as fe, s as pe, t as me } from "./shared/element-plus/utils/types.js";
import { r as he, t as ge } from "./shared/element-plus/constants/event.js";
import { n as _e, r as B } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as ve } from "./shared/element-plus/utils/error.js";
import { i as V } from "./shared/element-plus/utils/dom/aria.js";
import { S as ye, d as H, v as U } from "./shared/vueuse.js";
import { n as be } from "./shared/element-plus/utils/strings.js";
import { r as W } from "./shared/element-plus/hooks/use-namespace.js";
import { f as G, t as xe } from "./shared/element-plus-icons.js";
import { a as Se, i as Ce } from "./shared/element-plus/utils/vue/icon.js";
import { t as K } from "./el-icon.js";
import { i as q, t as we } from "./el-tooltip.js";
import { d as Te } from "./el-popper.js";
import { r as Ee } from "./shared/element-plus/hooks/use-size.js";
import { a as De, n as Oe } from "./shared/element-plus/constants/aria.js";
import { t as ke } from "./shared/element-plus/hooks/use-id.js";
import { n as Ae, r as je } from "./el-form/hooks/use-form-common-props.js";
import { t as J } from "./shared/element-plus/virtual/_plugin-vue_export-helper.js";
import { n as Me, t as Ne } from "./shared/element-plus/hooks/use-focus-controller.js";
import { n as Pe, t as Fe } from "./el-form/hooks/use-form-item.js";
import { t as Ie } from "./el-scrollbar/scrollbar.js";
import { n as Le } from "./shared/element-plus/hooks/use-locale.js";
import { n as Re, r as ze } from "./shared/element-plus/hooks/use-empty-values.js";
import { r as Be, t as Ve } from "./el-tag.js";
import { t as He } from "./shared/element-plus/hooks/use-calc-input-width.js";
import { t as Ue } from "./shared/element-plus/directives/click-outside.js";
import { t as Y } from "./el-virtual-list/builders/build-list.js";
import { t as X } from "./el-virtual-list/components/dynamic-size-list.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/select-v2/src/token.mjs
var Z = Symbol("ElSelectV2Injection"), We = _e({
	allowCreate: Boolean,
	autocomplete: {
		type: B(String),
		default: "none"
	},
	automaticDropdown: Boolean,
	clearable: Boolean,
	clearIcon: {
		type: Se,
		default: G
	},
	effect: {
		type: B(String),
		default: "light"
	},
	collapseTags: Boolean,
	collapseTagsTooltip: Boolean,
	tagTooltip: {
		type: B(Object),
		default: () => ({})
	},
	maxCollapseTags: {
		type: Number,
		default: 1
	},
	defaultFirstOption: Boolean,
	disabled: {
		type: Boolean,
		default: void 0
	},
	estimatedOptionHeight: {
		type: Number,
		default: void 0
	},
	filterable: Boolean,
	filterMethod: { type: B(Function) },
	height: {
		type: Number,
		default: 274
	},
	itemHeight: {
		type: Number,
		default: 34
	},
	id: String,
	loading: Boolean,
	loadingText: String,
	modelValue: {
		type: B([
			Array,
			String,
			Number,
			Boolean,
			Object
		]),
		default: void 0
	},
	multiple: Boolean,
	multipleLimit: {
		type: Number,
		default: 0
	},
	name: String,
	noDataText: String,
	noMatchText: String,
	remoteMethod: { type: B(Function) },
	reserveKeyword: {
		type: Boolean,
		default: !0
	},
	options: {
		type: B(Array),
		required: !0
	},
	placeholder: { type: String },
	teleported: q.teleported,
	persistent: {
		type: Boolean,
		default: !0
	},
	popperClass: q.popperClass,
	popperStyle: q.popperStyle,
	popperOptions: {
		type: B(Object),
		default: () => ({})
	},
	remote: Boolean,
	debounce: {
		type: Number,
		default: 300
	},
	size: Ee,
	props: {
		type: B(Object),
		default: () => le
	},
	valueKey: {
		type: String,
		default: "value"
	},
	scrollbarAlwaysOn: Boolean,
	validateEvent: {
		type: Boolean,
		default: !0
	},
	offset: {
		type: Number,
		default: 12
	},
	remoteShowSuffix: Boolean,
	showArrow: {
		type: Boolean,
		default: !0
	},
	placement: {
		type: B(String),
		values: Te,
		default: "bottom-start"
	},
	fallbackPlacements: {
		type: B(Array),
		default: [
			"bottom-start",
			"top-start",
			"right",
			"left"
		]
	},
	tagType: {
		...Be.type,
		default: "info"
	},
	tagEffect: {
		...Be.effect,
		default: "light"
	},
	tabindex: {
		type: [String, Number],
		default: 0
	},
	appendTo: q.appendTo,
	fitInputWidth: {
		type: [Boolean, Number],
		default: !0,
		validator(e) {
			return me(e) || de(e);
		}
	},
	suffixIcon: {
		type: Se,
		default: xe
	},
	...ze,
	...ue(["ariaLabel"])
}), Ge = _e({
	data: Array,
	disabled: Boolean,
	hovering: Boolean,
	item: {
		type: B(Object),
		required: !0
	},
	index: Number,
	style: Object,
	selected: Boolean,
	created: Boolean
}), Q = {
	[he]: (e) => !0,
	[ge]: (e) => !0,
	"end-reached": Ie["end-reached"],
	"remove-tag": (e) => !0,
	"visible-change": (e) => !0,
	focus: (e) => e instanceof FocusEvent,
	blur: (e) => e instanceof FocusEvent,
	clear: () => !0
}, Ke = {
	hover: (e) => de(e),
	select: (e, t) => !0
}, qe = _({
	props: {
		item: {
			type: Object,
			required: !0
		},
		style: { type: Object },
		height: Number
	},
	setup() {
		return { ns: W("select") };
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/select-v2/src/group-item.mjs
function Je(e, t, n, r, i, o) {
	return s(), P("div", {
		class: f(e.ns.be("group", "title")),
		style: g({
			...e.style,
			lineHeight: `${e.height}px`
		})
	}, a(e.item.label), 7);
}
var Ye = /* @__PURE__ */ J(qe, [["render", Je]]);
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/select-v2/src/useOption.mjs
function Xe(e, { emit: t }) {
	return {
		hoverItem: () => {
			e.disabled || t("hover", e.index);
		},
		selectOptionClick: () => {
			e.disabled || t("select", e.item, e.index);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/select-v2/src/option-item.vue_vue_type_script_lang.mjs
var Ze = _({
	props: Ge,
	emits: Ke,
	setup(e, { emit: n }) {
		let r = t(Z), i = W("select"), a = U ? null : "mousemove", { hoverItem: o, selectOptionClick: s } = Xe(e, { emit: n }), { getLabel: c } = se(r.props);
		return {
			ns: i,
			contentId: r.contentId,
			mouseMoveEventName: a,
			hoverItem: o,
			handleMousedown: (e) => {
				let t = e.target, n = e.currentTarget;
				for (; t && t !== n;) {
					if (V(t)) return;
					t = t.parentElement;
				}
				e.preventDefault();
			},
			selectOptionClick: s,
			getLabel: c
		};
	}
}), Qe = [
	"id",
	"aria-selected",
	"aria-disabled"
];
function $e(e, t, n, r, i, l) {
	return s(), P("li", d({
		id: `${e.contentId}-${e.index}`,
		role: "option",
		"aria-selected": e.selected,
		"aria-disabled": e.disabled || void 0,
		style: e.style,
		class: [
			e.ns.be("dropdown", "item"),
			e.ns.is("selected", e.selected),
			e.ns.is("disabled", e.disabled),
			e.ns.is("created", e.created),
			e.ns.is("hovering", e.hovering)
		]
	}, { [c(e.mouseMoveEventName)]: t[0] ||= (...t) => e.hoverItem && e.hoverItem(...t) }, {
		onMousedown: t[1] ||= (...t) => e.handleMousedown && e.handleMousedown(...t),
		onClick: t[2] ||= C((...t) => e.selectOptionClick && e.selectOptionClick(...t), ["stop"])
	}), [o(e.$slots, "default", {
		item: e.item,
		index: e.index,
		disabled: e.disabled
	}, () => [M("span", null, a(e.getLabel(e.item)), 1)])], 16, Qe);
}
var et = /* @__PURE__ */ J(Ze, [["render", $e]]), tt = /* @__PURE__ */ _({
	name: "ElSelectDropdown",
	props: {
		loading: Boolean,
		data: {
			type: Array,
			required: !0
		},
		hoveringIndex: Number,
		width: Number,
		id: String,
		ariaLabel: String
	},
	emits: { "end-reached": Ie["end-reached"] },
	setup(n, { slots: r, expose: i, emit: a }) {
		let o = t(Z), s = W("select"), { getLabel: c, getValue: l, getDisabled: u } = se(o.props), f = j([]), p = j(), m = x(() => n.data.length);
		e(() => m.value, () => {
			o.tooltipRef.value?.updatePopper?.();
		});
		let g = x(() => pe(o.props.estimatedOptionHeight)), ee = x(() => g.value ? { itemSize: o.props.itemHeight } : {
			estimatedSize: o.props.estimatedOptionHeight,
			itemSize: (e) => f.value[e]
		}), _ = (e = [], t) => {
			let { props: { valueKey: n } } = o;
			return h(t) ? e && e.some((e) => E(L(e, n)) === L(t, n)) : e.includes(t);
		}, v = (e, t) => {
			if (h(t)) {
				let { valueKey: n } = o.props;
				return L(e, n) === L(t, n);
			} else return e === t;
		}, y = (e, t) => o.props.multiple ? _(e, l(t)) : v(e, l(t)), b = (e, t) => {
			let { disabled: n, multiple: r, multipleLimit: i } = o.props;
			return n || !t && (r ? i > 0 && e.length >= i : !1);
		}, te = (e) => n.hoveringIndex === e;
		i({
			listRef: p,
			isSized: g,
			isItemDisabled: b,
			isItemHovering: te,
			isItemSelected: y,
			scrollToItem: (e) => {
				let t = p.value;
				t && t.scrollToItem(e);
			},
			resetScrollTop: () => {
				let e = p.value;
				e && e.resetScrollTop();
			}
		});
		let S = (e) => {
			let { index: t, data: n, style: i } = e, a = I(g), { itemSize: s, estimatedSize: l } = I(ee), { modelValue: f } = o.props, { onSelect: p, onHover: m } = o, h = n[t];
			if (h.type === "Group") return N(Ye, {
				item: h,
				style: i,
				height: a ? s : l
			}, null);
			let _ = y(f, h), v = b(f, _), x = te(t);
			return N(et, d(e, {
				selected: _,
				disabled: u(h) || v,
				created: !!h.created,
				hovering: x,
				item: h,
				onSelect: p,
				onHover: m
			}), { default: (e) => r.default?.(e) || N("span", null, [c(h)]) });
		}, { onKeyboardNavigate: ne, onKeyboardSelect: re } = o, C = () => {
			ne("forward");
		}, ie = () => {
			ne("backward");
		}, w = (e) => {
			let t = Oe(e), { tab: n, esc: r, down: i, up: a, enter: o, numpadEnter: s } = De;
			switch ([
				r,
				i,
				a,
				o,
				s
			].includes(t) && (e.preventDefault(), e.stopPropagation()), t) {
				case n:
				case r: break;
				case i:
					C();
					break;
				case a:
					ie();
					break;
				case o:
				case s:
					re();
					break;
			}
		}, T = (e) => {
			a("end-reached", e);
		};
		return () => {
			let { data: e, width: t } = n, { height: i, multiple: a, scrollbarAlwaysOn: c } = o.props, l = U ? !0 : c, u = I(g) ? Y : X;
			return N("div", {
				class: [s.b("dropdown"), s.is("multiple", a)],
				style: { width: `${t}px` }
			}, [
				r.header?.(),
				r.loading?.() || r.empty?.() || N(u, d({ ref: p }, I(ee), {
					className: s.be("dropdown", "list"),
					scrollbarAlwaysOn: l,
					data: e,
					height: i,
					width: t,
					total: e.length,
					innerElement: "ul",
					innerProps: {
						id: n.id,
						role: "listbox",
						"aria-label": n.ariaLabel,
						"aria-orientation": "vertical"
					},
					onEndReached: T,
					onKeydown: w
				}), { default: (e) => N(S, e, null) }),
				r.footer?.()
			]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/select-v2/src/useAllowCreate.mjs
function nt(t, n) {
	let { aliasProps: r, getLabel: i, getValue: a } = se(t), o = j(0), s = j(), c = x(() => t.allowCreate && t.filterable);
	e(() => t.options, (e) => {
		let t = new Set(e.map((e) => i(e)));
		n.createdOptions = n.createdOptions.filter((e) => !t.has(i(e)));
	});
	function l(e) {
		let r = (t) => i(t) === e;
		return t.options && t.options.some(r) || n.createdOptions.some(r);
	}
	function u(e) {
		c.value && (t.multiple && e.created ? o.value++ : s.value = e);
	}
	function d(e) {
		if (c.value) if (e && e.length > 0) {
			if (l(e)) {
				n.createdOptions = n.createdOptions.filter((e) => i(e) !== n.previousQuery);
				return;
			}
			let t = {
				[r.value.value]: e,
				[r.value.label]: e,
				created: !0,
				[r.value.disabled]: !1
			};
			n.createdOptions.length >= o.value ? n.createdOptions[o.value] = t : n.createdOptions.push(t);
		} else if (t.multiple) n.createdOptions.length = o.value;
		else {
			let e = s.value;
			n.createdOptions.length = 0, e && e.created && n.createdOptions.push(e);
		}
	}
	function f(e) {
		if (!c.value || !e || !e.created || e.created && t.reserveKeyword && n.inputValue === i(e)) return;
		let r = n.createdOptions.findIndex((t) => a(t) === a(e));
		~r && (n.createdOptions.splice(r, 1), o.value--);
	}
	function p() {
		c.value && (n.createdOptions.length = 0, o.value = 0);
	}
	return {
		createNewOption: d,
		removeNewOption: f,
		selectNewOption: u,
		clearAllNewOption: p
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/select-v2/src/useSelect.mjs
var rt = (t, n) => {
	let { t: r } = Le(), a = te(), o = W("select"), s = W("input"), { form: c, formItem: l } = Fe(), { inputId: u } = Pe(t, { formItemContext: l }), { aliasProps: d, getLabel: f, getValue: m, getDisabled: g, getOptions: ee } = se(t), { valueOnClear: _, isEmptyValue: y } = Re(t), b = re({
		inputValue: "",
		cachedOptions: [],
		createdOptions: [],
		hoveringIndex: -1,
		inputHovering: !1,
		selectionWidth: 0,
		collapseItemWidth: 0,
		previousQuery: null,
		previousValue: void 0,
		selectedLabel: "",
		menuVisibleOnFocus: !1,
		isBeforeHide: !1
	}), S = j(-1), C = j(!1), w = j(), T = j(), E = j(), D = j(), O = j(), ae = j(), k = j(), A = j(), M = j(), N = j(), { isComposing: P, handleCompositionStart: F, handleCompositionEnd: I, handleCompositionUpdate: le } = Ne({ afterComposition: (e) => Pt(e) }), R = Ae(), { wrapperRef: ue, isFocused: me, handleBlur: _e } = Me(O, {
		disabled: R,
		afterFocus() {
			t.automaticDropdown && !G.value && (G.value = !0, b.menuVisibleOnFocus = !0);
		},
		beforeBlur(e) {
			return E.value?.isFocusInsideContent(e) || D.value?.isFocusInsideContent(e);
		},
		afterBlur() {
			G.value = !1, b.menuVisibleOnFocus = !1, t.validateEvent && l?.validate?.("blur").catch(ne);
		}
	}), B = x(() => He("")), V = x(() => t.loading ? !1 : t.options.length > 0 || b.createdOptions.length > 0), U = j([]), G = j(!1), xe = x(() => c?.statusIcon ?? !1), Se = x(() => {
		let e = U.value.length * t.itemHeight;
		return e > t.height ? t.height : e;
	}), K = x(() => t.multiple ? v(t.modelValue) && t.modelValue.length > 0 : !y(t.modelValue)), q = x(() => t.clearable && !R.value && K.value && (me.value || b.inputHovering)), we = x(() => t.remote && t.filterable && !t.remoteShowSuffix ? "" : t.suffixIcon), Te = x(() => we.value && o.is("reverse", G.value)), Ee = x(() => l?.validateState || ""), ke = x(() => {
		if (Ee.value) return Ce[Ee.value];
	}), J = x(() => t.remote ? t.debounce : 0), Ie = x(() => t.remote && !b.inputValue && !V.value), ze = x(() => t.loading ? t.loadingText || r("el.select.loading") : t.filterable && b.inputValue && V.value && U.value.length === 0 ? t.noMatchText || r("el.select.noMatch") : V.value ? null : t.noDataText || r("el.select.noData")), Be = x(() => t.filterable && i(t.filterMethod)), Ve = x(() => t.filterable && t.remote && i(t.remoteMethod)), He = (e) => {
		let n = new RegExp(be(e), "i"), r = (t) => Be.value || Ve.value ? !0 : e ? n.test(f(t) || "") : !0;
		return t.loading ? [] : [...b.createdOptions, ...t.options].reduce((e, n) => {
			let i = ee(n);
			if (v(i)) {
				let t = i.filter(r);
				t.length > 0 && e.push({
					label: f(n),
					type: "Group"
				}, ...t);
			} else (t.remote || r(n)) && e.push(n);
			return e;
		}, []);
	}, Ue = () => {
		U.value = He(b.inputValue);
	}, Y = x(() => {
		let e = /* @__PURE__ */ new Map();
		return B.value.forEach((t, n) => {
			e.set($(m(t)), {
				option: t,
				index: n
			});
		}), e;
	}), X = x(() => {
		let e = /* @__PURE__ */ new Map();
		return U.value.forEach((t, n) => {
			e.set($(m(t)), {
				option: t,
				index: n
			});
		}), e;
	}), Z = x(() => U.value.every((e) => g(e))), We = je(), Ge = x(() => We.value === "small" ? "small" : "default"), Q = () => {
		if (de(t.fitInputWidth)) {
			S.value = t.fitInputWidth;
			return;
		}
		let e = w.value?.offsetWidth || 200;
		!t.fitInputWidth && V.value ? p(() => {
			S.value = Math.max(e, Ke());
		}) : S.value = e;
	}, Ke = () => {
		let e = document.createElement("canvas").getContext("2d"), t = o.be("dropdown", "item"), n = (A.value?.listRef?.innerRef || document).querySelector(`.${t}`);
		if (n === null || e === null) return 0;
		let r = getComputedStyle(n), i = Number.parseFloat(r.paddingLeft) + Number.parseFloat(r.paddingRight);
		return e.font = `bold ${r.font.replace(RegExp(`\\b${r.fontWeight}\\b`), "")}`, U.value.reduce((t, n) => {
			let r = e.measureText(f(n));
			return Math.max(r.width, t);
		}, 0) + i;
	}, qe = () => {
		if (!T.value) return 0;
		let e = window.getComputedStyle(T.value);
		return Number.parseFloat(e.gap || "6px");
	}, Je = x(() => {
		let e = qe(), n = t.filterable ? e + 11 : 0;
		return { maxWidth: `${N.value && t.maxCollapseTags === 1 ? b.selectionWidth - b.collapseItemWidth - e - n : b.selectionWidth - n}px` };
	}), Ye = x(() => ({ maxWidth: `${b.selectionWidth}px` })), Xe = x(() => v(t.modelValue) ? t.modelValue.length === 0 && !b.inputValue : t.filterable ? !b.inputValue : !0), Ze = x(() => {
		let e = t.placeholder ?? r("el.select.placeholder");
		return t.multiple || !K.value ? e : b.selectedLabel;
	}), Qe = x(() => E.value?.popperRef?.contentRef), $e = x(() => {
		if (t.multiple) {
			let e = t.modelValue.length;
			if (e > 0 && X.value.has(t.modelValue[e - 1])) {
				let { index: n } = X.value.get(t.modelValue[e - 1]);
				return n;
			}
		} else if (!y(t.modelValue) && X.value.has(t.modelValue)) {
			let { index: e } = X.value.get(t.modelValue);
			return e;
		}
		return -1;
	}), et = x({
		get() {
			return G.value && (t.loading || !Ie.value || t.remote && !!a.empty) && (!C.value || !fe(b.previousQuery) || V.value);
		},
		set(e) {
			G.value = e;
		}
	}), tt = x(() => t.multiple ? t.collapseTags ? b.cachedOptions.slice(0, t.maxCollapseTags) : b.cachedOptions : []), rt = x(() => t.multiple && t.collapseTags ? b.cachedOptions.slice(t.maxCollapseTags) : []), { createNewOption: it, removeNewOption: at, selectNewOption: ot, clearAllNewOption: st } = nt(t, b), ct = (e) => {
		R.value || t.filterable && G.value && e && !k.value?.contains(e.target) || (b.menuVisibleOnFocus ? b.menuVisibleOnFocus = !1 : G.value = !G.value);
	}, lt = () => {
		b.inputValue.length > 0 && !G.value && (G.value = !0), it(b.inputValue), p(() => {
			dt(b.inputValue);
		});
	}, ut = ye(() => {
		lt(), C.value = !1;
	}, J), dt = (e) => {
		b.previousQuery === e || P.value || (b.previousQuery = e, t.filterable && i(t.filterMethod) ? t.filterMethod(e) : t.filterable && t.remote && i(t.remoteMethod) && t.remoteMethod(e), t.defaultFirstOption && (t.filterable || t.remote) && U.value.length ? p(ft) : p(Nt));
	}, ft = () => {
		let e = U.value.filter((e) => !e.disabled && e.type !== "Group"), t = e.find((e) => e.created), n = e[0];
		b.hoveringIndex = ht(U.value, t || n);
	}, pt = (e) => {
		z(t.modelValue, e) || n(ge, e);
	}, mt = (e) => {
		n(he, e), pt(e), b.previousValue = t.multiple ? String(e) : e, p(() => {
			if (t.multiple && v(t.modelValue)) {
				let e = b.cachedOptions.slice(), n = t.modelValue.map((t) => Rt(t, e));
				z(b.cachedOptions, n) || (b.cachedOptions = n);
			} else Bt(!0);
		});
	}, ht = (e = [], n) => {
		if (!h(n)) return e.indexOf(n);
		let r = t.valueKey, i = -1;
		return e.some((e, t) => L(e, r) === L(n, r) ? (i = t, !0) : !1), i;
	}, $ = (e) => h(e) ? L(e, t.valueKey) : e, gt = () => {
		Q();
	}, _t = (e) => {
		n("end-reached", e);
	}, vt = () => {
		b.selectionWidth = Number.parseFloat(window.getComputedStyle(T.value).width);
	}, yt = () => {
		b.collapseItemWidth = N.value.getBoundingClientRect().width;
	}, bt = () => {
		E.value?.updatePopper?.();
	}, xt = () => {
		D.value?.updatePopper?.();
	}, St = (e) => {
		let n = m(e);
		if (t.multiple) {
			let r = t.modelValue.slice(), i = ht(r, n);
			i > -1 ? (r = [...r.slice(0, i), ...r.slice(i + 1)], b.cachedOptions.splice(i, 1), at(e)) : (t.multipleLimit <= 0 || r.length < t.multipleLimit) && (r = [...r, n], b.cachedOptions.push(e), ot(e)), mt(r), e.created && dt(""), t.filterable && (e.created || !t.reserveKeyword) && (b.inputValue = "");
		} else b.selectedLabel = f(e), !z(t.modelValue, n) && mt(n), G.value = !1, ot(e), e.created || st();
		wt();
	}, Ct = (e, r) => {
		let i = t.modelValue.slice(), a = ht(i, m(r));
		a > -1 && !R.value && (i = [...t.modelValue.slice(0, a), ...t.modelValue.slice(a + 1)], b.cachedOptions.splice(a, 1), mt(i), n("remove-tag", m(r)), at(r)), e.stopPropagation(), wt();
	}, wt = () => {
		O.value?.focus();
	}, Tt = () => {
		if (G.value) {
			G.value = !1, p(() => O.value?.blur());
			return;
		}
		O.value?.blur();
	}, Et = () => {
		b.inputValue.length > 0 ? b.inputValue = "" : G.value = !1;
	}, Dt = (e) => ce(e, (e) => !b.cachedOptions.some((t) => m(t) === e && g(t))), Ot = (e) => {
		let r = Oe(e);
		if (t.multiple && r !== De.delete && b.inputValue.length === 0) {
			e.preventDefault();
			let r = t.modelValue.slice(), i = Dt(r);
			if (i < 0) return;
			let a = r[i];
			r.splice(i, 1);
			let o = b.cachedOptions[i];
			b.cachedOptions.splice(i, 1), at(o), mt(r), n("remove-tag", a);
		}
	}, kt = () => {
		let e;
		e = v(t.modelValue) ? [] : _.value, b.selectedLabel = "", G.value = !1, mt(e), n("clear"), st(), wt();
	}, At = (e, t = void 0) => {
		let n = U.value;
		if (!["forward", "backward"].includes(e) || R.value || n.length <= 0 || Z.value || P.value) return;
		if (!G.value) return ct();
		pe(t) && (t = b.hoveringIndex);
		let r = -1;
		e === "forward" ? (r = t + 1, r >= n.length && (r = 0)) : e === "backward" && (r = t - 1, (r < 0 || r >= n.length) && (r = n.length - 1));
		let i = n[r];
		if (g(i) || i.type === "Group") return At(e, r);
		b.hoveringIndex = r, Lt(r);
	}, jt = () => {
		if (G.value) ~b.hoveringIndex && U.value[b.hoveringIndex] && St(U.value[b.hoveringIndex]);
		else return ct();
	}, Mt = (e) => {
		b.hoveringIndex = e ?? -1;
	}, Nt = () => {
		if (!t.multiple) b.hoveringIndex = U.value.findIndex((e) => $(m(e)) === $(t.modelValue));
		else {
			let e = t.modelValue.length;
			if (e > 0) {
				let n = t.modelValue[e - 1];
				b.hoveringIndex = U.value.findIndex((e) => $(n) === $(m(e)));
			} else b.hoveringIndex = -1;
		}
	}, Pt = (e) => {
		if (b.inputValue = e.target.value, t.remote) C.value = !0, ut();
		else return lt();
	}, Ft = (e) => {
		G.value = !1, me.value && _e(new FocusEvent("blur", e));
	}, It = () => (b.isBeforeHide = !1, p(() => {
		~$e.value && Lt($e.value);
	})), Lt = (e) => {
		A.value.scrollToItem(e);
	}, Rt = (e, t) => {
		let n = $(e);
		if (Y.value.has(n)) {
			let { option: e } = Y.value.get(n);
			return e;
		}
		if (t && t.length) {
			let e = t.find((e) => $(m(e)) === n);
			if (e) return e;
		}
		return {
			[d.value.value]: e,
			[d.value.label]: e
		};
	}, zt = (e) => Y.value.get(m(e))?.index ?? -1, Bt = (e = !1) => {
		if (t.multiple) if (t.modelValue.length > 0) {
			let e = b.cachedOptions.slice();
			b.cachedOptions.length = 0, b.previousValue = t.modelValue.toString();
			for (let n of t.modelValue) {
				let t = Rt(n, e);
				b.cachedOptions.push(t);
			}
		} else b.cachedOptions = [], b.previousValue = void 0;
		else if (K.value) {
			b.previousValue = t.modelValue;
			let n = U.value, r = n.findIndex((e) => $(m(e)) === $(t.modelValue));
			~r ? b.selectedLabel = f(n[r]) : (!b.selectedLabel || e) && (b.selectedLabel = $(t.modelValue));
		} else b.selectedLabel = "", b.previousValue = void 0;
		st(), Q();
	};
	e(() => t.fitInputWidth, () => {
		Q();
	}), e(G, (e) => {
		e ? (t.persistent || Q(), dt("")) : (b.inputValue = "", b.previousQuery = null, b.isBeforeHide = !0, b.menuVisibleOnFocus = !1, it(""));
	}), e(() => t.modelValue, (e, n) => {
		(!e || v(e) && e.length === 0 || t.multiple && !z(e.toString(), b.previousValue) || !t.multiple && $(e) !== $(b.previousValue)) && Bt(!0), !z(e, n) && t.validateEvent && l?.validate?.("change").catch(ne);
	}, { deep: !0 }), e(() => t.options, () => {
		let e = O.value;
		(!e || e && document.activeElement !== e) && Bt();
	}, {
		deep: !0,
		flush: "post"
	}), e(() => U.value, () => (Q(), A.value && p(A.value.resetScrollTop))), ie(() => {
		b.isBeforeHide || Ue();
	}), ie(() => {
		let { valueKey: e, options: n } = t, r = /* @__PURE__ */ new Map();
		for (let t of n) {
			let n = m(t), i = n;
			if (h(i) && (i = L(n, e)), r.get(i)) {
				ve("ElSelectV2", "The option values you provided seem to be duplicated, which may cause some problems, please check.");
				break;
			} else r.set(i, !0);
		}
	}), oe(() => {
		Bt();
	}), H(w, gt), H(T, vt), H(ue, bt), H(M, xt), H(N, yt);
	let Vt;
	return e(() => et.value, (e) => {
		e ? Vt = H(A, bt).stop : (Vt?.(), Vt = void 0), n("visible-change", e);
	}), {
		inputId: u,
		collapseTagSize: Ge,
		currentPlaceholder: Ze,
		expanded: G,
		emptyText: ze,
		popupHeight: Se,
		debounce: J,
		allOptions: B,
		allOptionsValueMap: Y,
		filteredOptions: U,
		iconComponent: we,
		iconReverse: Te,
		tagStyle: Je,
		collapseTagStyle: Ye,
		popperSize: S,
		dropdownMenuVisible: et,
		hasModelValue: K,
		shouldShowPlaceholder: Xe,
		selectDisabled: R,
		selectSize: We,
		needStatusIcon: xe,
		showClearBtn: q,
		states: b,
		isFocused: me,
		nsSelect: o,
		nsInput: s,
		inputRef: O,
		menuRef: A,
		tagMenuRef: M,
		tooltipRef: E,
		tagTooltipRef: D,
		selectRef: w,
		wrapperRef: ue,
		selectionRef: T,
		prefixRef: ae,
		suffixRef: k,
		collapseItemRef: N,
		popperRef: Qe,
		validateState: Ee,
		validateIcon: ke,
		showTagList: tt,
		collapseTagList: rt,
		debouncedOnInputChange: ut,
		deleteTag: Ct,
		getLabel: f,
		getValue: m,
		getDisabled: g,
		getValueKey: $,
		getIndex: zt,
		handleClear: kt,
		handleClickOutside: Ft,
		handleDel: Ot,
		handleEsc: Et,
		focus: wt,
		blur: Tt,
		handleMenuEnter: It,
		handleResize: gt,
		resetSelectionWidth: vt,
		updateTooltip: bt,
		updateTagTooltip: xt,
		updateOptions: Ue,
		toggleMenu: ct,
		scrollTo: Lt,
		onInput: Pt,
		onKeyboardNavigate: At,
		onKeyboardSelect: jt,
		onEndReached: _t,
		onSelect: St,
		onHover: Mt,
		handleCompositionStart: F,
		handleCompositionEnd: I,
		handleCompositionUpdate: le
	};
}, it = _({
	name: "ElSelectV2",
	components: {
		ElSelectMenu: tt,
		ElTag: Ve,
		ElTooltip: we,
		ElIcon: K
	},
	directives: { ClickOutside: Ue },
	props: We,
	emits: Q,
	setup(e, { emit: t }) {
		let n = x(() => {
			let { modelValue: t, multiple: n } = e, r = n ? [] : void 0;
			return v(t) ? n ? t : r : n ? r : t;
		}), r = rt(re({
			...w(e),
			modelValue: n
		}), t), { calculatorRef: i, inputStyle: a } = He(), o = ke();
		y(Z, {
			props: re({
				...w(e),
				height: r.popupHeight,
				modelValue: n
			}),
			expanded: r.expanded,
			tooltipRef: r.tooltipRef,
			contentId: o,
			onSelect: r.onSelect,
			onHover: r.onHover,
			onKeyboardNavigate: r.onKeyboardNavigate,
			onKeyboardSelect: r.onKeyboardSelect
		});
		let s = x(() => e.multiple ? r.states.cachedOptions.map((e) => r.getLabel(e)) : r.states.selectedLabel);
		return {
			...r,
			modelValue: n,
			selectedLabel: s,
			calculatorRef: i,
			inputStyle: a,
			contentId: o,
			BORDER_HORIZONTAL_WIDTH: 2
		};
	}
}), at = [
	"id",
	"value",
	"autocomplete",
	"tabindex",
	"aria-expanded",
	"aria-label",
	"disabled",
	"aria-controls",
	"aria-activedescendant",
	"readonly",
	"name"
], ot = ["textContent"], st = { key: 1 };
function ct(e, t, i, c, d, p) {
	let h = u("el-tag"), _ = u("el-tooltip"), v = u("el-icon"), y = u("el-select-menu"), te = ae("click-outside");
	return D((s(), P("div", {
		ref: "selectRef",
		class: f([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
		onMouseenter: t[15] ||= (t) => e.states.inputHovering = !0,
		onMouseleave: t[16] ||= (t) => e.states.inputHovering = !1
	}, [N(_, {
		ref: "tooltipRef",
		visible: e.dropdownMenuVisible,
		teleported: e.teleported,
		"popper-class": [e.nsSelect.e("popper"), e.popperClass],
		"popper-style": e.popperStyle,
		"gpu-acceleration": !1,
		"stop-popper-mouse-event": !1,
		"popper-options": e.popperOptions,
		"fallback-placements": e.fallbackPlacements,
		effect: e.effect,
		placement: e.placement,
		pure: "",
		transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
		trigger: "click",
		persistent: e.persistent,
		"append-to": e.appendTo,
		"show-arrow": e.showArrow,
		offset: e.offset,
		onBeforeShow: e.handleMenuEnter,
		onHide: t[14] ||= (t) => e.states.isBeforeHide = !1
	}, {
		default: k(() => [M("div", {
			ref: "wrapperRef",
			class: f([
				e.nsSelect.e("wrapper"),
				e.nsSelect.is("focused", e.isFocused),
				e.nsSelect.is("hovering", e.states.inputHovering),
				e.nsSelect.is("filterable", e.filterable),
				e.nsSelect.is("disabled", e.selectDisabled)
			]),
			onClick: t[11] ||= C((...t) => e.toggleMenu && e.toggleMenu(...t), ["prevent"])
		}, [
			e.$slots.prefix ? (s(), P("div", {
				key: 0,
				ref: "prefixRef",
				class: f(e.nsSelect.e("prefix"))
			}, [o(e.$slots, "prefix")], 2)) : S("v-if", !0),
			M("div", {
				ref: "selectionRef",
				class: f([e.nsSelect.e("selection"), e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.modelValue.length)])
			}, [
				e.multiple ? o(e.$slots, "tag", {
					key: 0,
					data: e.states.cachedOptions,
					deleteTag: e.deleteTag,
					selectDisabled: e.selectDisabled
				}, () => [(s(!0), P(O, null, b(e.showTagList, (t) => (s(), P("div", {
					key: e.getValueKey(e.getValue(t)),
					class: f(e.nsSelect.e("selected-item"))
				}, [N(h, {
					closable: !e.selectDisabled && !e.getDisabled(t),
					size: e.collapseTagSize,
					type: e.tagType,
					effect: e.tagEffect,
					"disable-transitions": "",
					style: g(e.tagStyle),
					onClose: (n) => e.deleteTag(n, t)
				}, {
					default: k(() => [M("span", { class: f(e.nsSelect.e("tags-text")) }, [o(e.$slots, "label", {
						index: e.getIndex(t),
						label: e.getLabel(t),
						value: e.getValue(t)
					}, () => [n(a(e.getLabel(t)), 1)])], 2)]),
					_: 2
				}, 1032, [
					"closable",
					"size",
					"type",
					"effect",
					"style",
					"onClose"
				])], 2))), 128)), e.collapseTags && e.states.cachedOptions.length > e.maxCollapseTags ? (s(), F(_, {
					key: 0,
					ref: "tagTooltipRef",
					disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
					"fallback-placements": e.tagTooltip?.fallbackPlacements ?? [
						"bottom",
						"top",
						"right",
						"left"
					],
					effect: e.tagTooltip?.effect ?? e.effect,
					placement: e.tagTooltip?.placement ?? "bottom",
					"popper-class": e.tagTooltip?.popperClass ?? e.popperClass,
					"popper-style": e.tagTooltip?.popperStyle ?? e.popperStyle,
					teleported: e.tagTooltip?.teleported ?? e.teleported,
					"append-to": e.tagTooltip?.appendTo ?? e.appendTo,
					"popper-options": e.tagTooltip?.popperOptions ?? e.popperOptions,
					transition: e.tagTooltip?.transition,
					"show-after": e.tagTooltip?.showAfter,
					"hide-after": e.tagTooltip?.hideAfter,
					"auto-close": e.tagTooltip?.autoClose,
					offset: e.tagTooltip?.offset
				}, {
					default: k(() => [M("div", {
						ref: "collapseItemRef",
						class: f(e.nsSelect.e("selected-item"))
					}, [N(h, {
						closable: !1,
						size: e.collapseTagSize,
						type: e.tagType,
						effect: e.tagEffect,
						style: g(e.collapseTagStyle),
						"disable-transitions": ""
					}, {
						default: k(() => [M("span", { class: f(e.nsSelect.e("tags-text")) }, " + " + a(e.states.cachedOptions.length - e.maxCollapseTags), 3)]),
						_: 1
					}, 8, [
						"size",
						"type",
						"effect",
						"style"
					])], 2)]),
					content: k(() => [M("div", {
						ref: "tagMenuRef",
						class: f(e.nsSelect.e("selection"))
					}, [(s(!0), P(O, null, b(e.collapseTagList, (t) => (s(), P("div", {
						key: e.getValueKey(e.getValue(t)),
						class: f(e.nsSelect.e("selected-item"))
					}, [N(h, {
						class: "in-tooltip",
						closable: !e.selectDisabled && !e.getDisabled(t),
						size: e.collapseTagSize,
						type: e.tagType,
						effect: e.tagEffect,
						"disable-transitions": "",
						onClose: (n) => e.deleteTag(n, t)
					}, {
						default: k(() => [M("span", { class: f(e.nsSelect.e("tags-text")) }, [o(e.$slots, "label", {
							index: e.getIndex(t),
							label: e.getLabel(t),
							value: e.getValue(t)
						}, () => [n(a(e.getLabel(t)), 1)])], 2)]),
						_: 2
					}, 1032, [
						"closable",
						"size",
						"type",
						"effect",
						"onClose"
					])], 2))), 128))], 2)]),
					_: 3
				}, 8, [
					"disabled",
					"fallback-placements",
					"effect",
					"placement",
					"popper-class",
					"popper-style",
					"teleported",
					"append-to",
					"popper-options",
					"transition",
					"show-after",
					"hide-after",
					"auto-close",
					"offset"
				])) : S("v-if", !0)]) : S("v-if", !0),
				M("div", { class: f([
					e.nsSelect.e("selected-item"),
					e.nsSelect.e("input-wrapper"),
					e.nsSelect.is("hidden", !e.filterable || e.selectDisabled || e.multiple && !e.states.inputValue && !e.isFocused)
				]) }, [M("input", {
					id: e.inputId,
					ref: "inputRef",
					value: e.states.inputValue,
					style: g(e.inputStyle),
					autocomplete: e.autocomplete,
					tabindex: e.tabindex,
					"aria-autocomplete": "none",
					"aria-haspopup": "listbox",
					autocapitalize: "off",
					"aria-expanded": e.expanded,
					"aria-label": e.ariaLabel,
					class: f([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
					disabled: e.selectDisabled,
					role: "combobox",
					"aria-controls": e.contentId,
					"aria-activedescendant": e.states.hoveringIndex >= 0 ? `${e.contentId}-${e.states.hoveringIndex}` : "",
					readonly: !e.filterable,
					spellcheck: "false",
					type: "text",
					name: e.name,
					onInput: t[0] ||= (...t) => e.onInput && e.onInput(...t),
					onChange: t[1] ||= C(() => {}, ["stop"]),
					onCompositionstart: t[2] ||= (...t) => e.handleCompositionStart && e.handleCompositionStart(...t),
					onCompositionupdate: t[3] ||= (...t) => e.handleCompositionUpdate && e.handleCompositionUpdate(...t),
					onCompositionend: t[4] ||= (...t) => e.handleCompositionEnd && e.handleCompositionEnd(...t),
					onKeydown: [
						t[5] ||= A(C((t) => e.onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"]),
						t[6] ||= A(C((t) => e.onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"]),
						t[7] ||= A(C((...t) => e.onKeyboardSelect && e.onKeyboardSelect(...t), ["stop", "prevent"]), ["enter"]),
						t[8] ||= A(C((...t) => e.handleEsc && e.handleEsc(...t), ["stop", "prevent"]), ["esc"]),
						t[9] ||= A(C((...t) => e.handleDel && e.handleDel(...t), ["stop"]), ["delete"])
					],
					onClick: t[10] ||= C((...t) => e.toggleMenu && e.toggleMenu(...t), ["stop"])
				}, null, 46, at), e.filterable ? (s(), P("span", {
					key: 0,
					ref: "calculatorRef",
					"aria-hidden": "true",
					class: f(e.nsSelect.e("input-calculator")),
					textContent: a(e.states.inputValue)
				}, null, 10, ot)) : S("v-if", !0)], 2),
				e.shouldShowPlaceholder ? (s(), P("div", {
					key: 1,
					class: f([
						e.nsSelect.e("selected-item"),
						e.nsSelect.e("placeholder"),
						e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
					])
				}, [e.hasModelValue ? o(e.$slots, "label", {
					key: 0,
					index: e.allOptionsValueMap.get(e.modelValue)?.index ?? -1,
					label: e.currentPlaceholder,
					value: e.modelValue
				}, () => [M("span", null, a(e.currentPlaceholder), 1)]) : (s(), P("span", st, a(e.currentPlaceholder), 1))], 2)) : S("v-if", !0)
			], 2),
			M("div", {
				ref: "suffixRef",
				class: f(e.nsSelect.e("suffix"))
			}, [
				e.iconComponent ? D((s(), F(v, {
					key: 0,
					class: f([
						e.nsSelect.e("caret"),
						e.nsInput.e("icon"),
						e.iconReverse
					])
				}, {
					default: k(() => [(s(), F(l(e.iconComponent)))]),
					_: 1
				}, 8, ["class"])), [[T, !e.showClearBtn]]) : S("v-if", !0),
				e.showClearBtn && e.clearIcon ? (s(), F(v, {
					key: 1,
					class: f([
						e.nsSelect.e("caret"),
						e.nsInput.e("icon"),
						e.nsSelect.e("clear")
					]),
					onClick: C(e.handleClear, ["prevent", "stop"])
				}, {
					default: k(() => [(s(), F(l(e.clearIcon)))]),
					_: 1
				}, 8, ["class", "onClick"])) : S("v-if", !0),
				e.validateState && e.validateIcon && e.needStatusIcon ? (s(), F(v, {
					key: 2,
					class: f([
						e.nsInput.e("icon"),
						e.nsInput.e("validateIcon"),
						e.nsInput.is("loading", e.validateState === "validating")
					])
				}, {
					default: k(() => [(s(), F(l(e.validateIcon)))]),
					_: 1
				}, 8, ["class"])) : S("v-if", !0)
			], 2)
		], 2)]),
		content: k(() => [N(y, {
			id: e.contentId,
			ref: "menuRef",
			data: e.filteredOptions,
			width: e.popperSize - e.BORDER_HORIZONTAL_WIDTH,
			"hovering-index": e.states.hoveringIndex,
			"scrollbar-always-on": e.scrollbarAlwaysOn,
			"aria-label": e.ariaLabel,
			onEndReached: e.onEndReached
		}, ee({
			default: k((t) => [o(e.$slots, "default", m(r(t)))]),
			_: 2
		}, [
			e.$slots.header ? {
				name: "header",
				fn: k(() => [M("div", {
					class: f(e.nsSelect.be("dropdown", "header")),
					onClick: t[12] ||= C(() => {}, ["stop"])
				}, [o(e.$slots, "header")], 2)]),
				key: "0"
			} : void 0,
			e.$slots.loading && e.loading ? {
				name: "loading",
				fn: k(() => [M("div", { class: f(e.nsSelect.be("dropdown", "loading")) }, [o(e.$slots, "loading")], 2)]),
				key: "1"
			} : e.loading || e.filteredOptions.length === 0 ? {
				name: "empty",
				fn: k(() => [M("div", { class: f(e.nsSelect.be("dropdown", "empty")) }, [o(e.$slots, "empty", {}, () => [M("span", null, a(e.emptyText), 1)])], 2)]),
				key: "2"
			} : void 0,
			e.$slots.footer ? {
				name: "footer",
				fn: k(() => [M("div", {
					class: f(e.nsSelect.be("dropdown", "footer")),
					onClick: t[13] ||= C(() => {}, ["stop"])
				}, [o(e.$slots, "footer")], 2)]),
				key: "3"
			} : void 0
		]), 1032, [
			"id",
			"data",
			"width",
			"hovering-index",
			"scrollbar-always-on",
			"aria-label",
			"onEndReached"
		])]),
		_: 3
	}, 8, [
		"visible",
		"teleported",
		"popper-class",
		"popper-style",
		"popper-options",
		"fallback-placements",
		"effect",
		"placement",
		"transition",
		"persistent",
		"append-to",
		"show-arrow",
		"offset",
		"onBeforeShow"
	])], 34)), [[
		te,
		e.handleClickOutside,
		e.popperRef
	]]);
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/select-v2/index.mjs
var lt = R(/* @__PURE__ */ J(it, [["render", ct]]));
//#endregion
export { lt as ElSelectV2, lt as default, Z as selectV2InjectionKey };
