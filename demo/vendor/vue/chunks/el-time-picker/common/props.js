globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, Ft as n, G as r, H as i, I as a, J as o, M as ee, Mt as s, N as c, Pt as l, T as u, Tt as d, U as te, X as ne, _ as f, b as p, bt as m, ct as re, d as h, tt as g, ut as _, v, x as ie, y, yt as b } from "../../vue.runtime.js";
import { t as x } from "../../shared/element-plus/hooks/use-aria.js";
import { r as S, t as ae } from "../../shared/element-plus/constants/event.js";
import { n as C, r as w } from "../../shared/element-plus/utils/vue/props/runtime.js";
import { n as oe, t as se } from "../../shared/vueuse.js";
import { r as T } from "../../shared/element-plus/hooks/use-namespace.js";
import { f as E, m as ce, o as le } from "../../shared/element-plus-icons.js";
import { t as D } from "../../el-icon.js";
import { i as O, t as ue } from "../../el-tooltip.js";
import { d as de } from "../../el-popper.js";
import { r as fe } from "../../shared/element-plus/hooks/use-size.js";
import { t as pe } from "../../el-input.js";
import { a as k, n as me } from "../../shared/element-plus/constants/aria.js";
import { n as he, r as ge } from "../../el-form/hooks/use-form-common-props.js";
import { t as A } from "../../shared/element-plus/hooks/use-attrs.js";
import { n as _e } from "../../shared/element-plus/hooks/use-focus-controller.js";
import { n as j, t as ve } from "../../el-form/hooks/use-form-item.js";
import { n as ye, r as M } from "../../shared/element-plus/hooks/use-empty-values.js";
import { _ as be, a as xe, i as Se, o as Ce, u as we } from "../utils.js";
import { o as Te, s as N } from "../props/shared.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/time-picker/src/common/props.mjs
var P = C({
	automaticDropdown: {
		type: Boolean,
		default: !0
	},
	id: { type: w([Array, String]) },
	name: { type: w([Array, String]) },
	popperClass: O.popperClass,
	popperStyle: O.popperStyle,
	format: String,
	valueFormat: String,
	dateFormat: String,
	timeFormat: String,
	type: {
		type: String,
		default: ""
	},
	clearable: {
		type: Boolean,
		default: !0
	},
	clearIcon: {
		type: w([String, Object]),
		default: E
	},
	editable: {
		type: Boolean,
		default: !0
	},
	saveOnBlur: {
		type: Boolean,
		default: !0
	},
	prefixIcon: {
		type: w([String, Object]),
		default: ""
	},
	size: fe,
	readonly: Boolean,
	disabled: {
		type: Boolean,
		default: void 0
	},
	placeholder: {
		type: String,
		default: ""
	},
	popperOptions: {
		type: w(Object),
		default: () => ({})
	},
	modelValue: {
		type: w([
			Date,
			Array,
			String,
			Number
		]),
		default: ""
	},
	rangeSeparator: {
		type: String,
		default: "-"
	},
	startPlaceholder: String,
	endPlaceholder: String,
	defaultValue: { type: w([Date, Array]) },
	defaultTime: { type: w([Date, Array]) },
	isRange: Boolean,
	...N,
	disabledDate: { type: Function },
	cellClassName: { type: Function },
	shortcuts: {
		type: Array,
		default: () => []
	},
	arrowControl: Boolean,
	tabindex: {
		type: w([String, Number]),
		default: 0
	},
	validateEvent: {
		type: Boolean,
		default: !0
	},
	unlinkPanels: Boolean,
	singlePanel: Boolean,
	placement: {
		type: w(String),
		values: de,
		default: "bottom"
	},
	fallbackPlacements: {
		type: w(Array),
		default: [
			"bottom",
			"top",
			"right",
			"left"
		]
	},
	...M,
	...x(["ariaLabel"]),
	showNow: {
		type: Boolean,
		default: !0
	},
	showConfirm: {
		type: Boolean,
		default: !0
	},
	showFooter: {
		type: Boolean,
		default: !0
	},
	showWeekNumber: Boolean
}), F = C({
	id: { type: w(Array) },
	name: { type: w(Array) },
	modelValue: { type: w([Array, String]) },
	startPlaceholder: String,
	endPlaceholder: String,
	disabled: Boolean
}), Ee = F, I = [
	"id",
	"name",
	"placeholder",
	"value",
	"disabled"
], L = [
	"id",
	"name",
	"placeholder",
	"value",
	"disabled"
], De = /* @__PURE__ */ u({
	name: "PickerRangeTrigger",
	inheritAttrs: !1,
	__name: "picker-range-trigger",
	props: F,
	emits: [
		"mouseenter",
		"mouseleave",
		"click",
		"touchstart",
		"focus",
		"blur",
		"startInput",
		"endInput",
		"startChange",
		"endChange"
	],
	setup(e, { expose: t, emit: n }) {
		let a = e, o = n, { formItem: c } = ve(), { inputId: u } = j(re({ id: f(() => a.id?.[0]) }), { formItemContext: c }), d = A(), te = T("date"), ne = T("range"), p = _(), m = _(), { wrapperRef: h, isFocused: g } = _e(p, { disabled: f(() => a.disabled) }), y = (e) => {
			o("click", e);
		}, x = (e) => {
			o("mouseenter", e);
		}, S = (e) => {
			o("mouseleave", e);
		}, ae = (e) => {
			o("touchstart", e);
		}, C = (e) => {
			o("startInput", e);
		}, w = (e) => {
			o("endInput", e);
		}, oe = (e) => {
			o("startChange", e);
		}, se = (e) => {
			o("endChange", e);
		};
		return t({
			focus: () => {
				p.value?.focus();
			},
			blur: () => {
				p.value?.blur(), m.value?.blur();
			}
		}), (e, t) => (i(), ie("div", {
			ref_key: "wrapperRef",
			ref: h,
			class: s([b(te).is("active", b(g)), e.$attrs.class]),
			style: l(e.$attrs.style),
			onClick: y,
			onMouseenter: x,
			onMouseleave: S,
			onTouchstartPassive: ae
		}, [
			r(e.$slots, "prefix"),
			v("input", ee(b(d), {
				id: b(u),
				ref_key: "inputRef",
				ref: p,
				name: e.name && e.name[0],
				placeholder: e.startPlaceholder,
				value: e.modelValue && e.modelValue[0],
				class: b(ne).b("input"),
				disabled: e.disabled,
				onInput: C,
				onChange: oe
			}), null, 16, I),
			r(e.$slots, "range-separator"),
			v("input", ee(b(d), {
				id: e.id && e.id[1],
				ref_key: "endInputRef",
				ref: m,
				name: e.name && e.name[1],
				placeholder: e.endPlaceholder,
				value: e.modelValue && e.modelValue[1],
				class: b(ne).b("input"),
				disabled: e.disabled,
				onInput: w,
				onChange: se
			}), null, 16, L),
			r(e.$slots, "suffix")
		], 38));
	}
}), R = /* @__PURE__ */ u({
	name: "Picker",
	__name: "picker",
	props: P,
	emits: [
		S,
		ae,
		"focus",
		"blur",
		"clear",
		"calendar-change",
		"panel-change",
		"visible-change",
		"keydown"
	],
	setup(u, { expose: re, emit: ie }) {
		let x = u, S = ie, C = ne(), w = T("date"), E = T("input"), O = T("range"), { formItem: de } = ve(), fe = t(xe, {}), A = ye(x, null), j = _(), M = _(), N = _(null), P = !1, F = he(), Ee = Te(x, S), { parsedValue: I, pickerActualVisible: L, userInput: R, pickerVisible: z, pickerOptions: B, valueIsEmpty: V, emitInput: H, onPick: U, onSetPickerOption: Oe, onCalendarChange: ke, onPanelChange: Ae } = Ee, { isFocused: W, handleFocus: je, handleBlur: Me } = _e(M, {
			disabled: F,
			beforeFocus() {
				return x.readonly;
			},
			afterFocus() {
				x.automaticDropdown && (z.value = !0);
			},
			beforeBlur(e) {
				return !P && j.value?.isFocusInsideContent(e);
			},
			afterBlur() {
				J.value && !x.saveOnBlur ? V.value || B.value.handleCancel?.() : tt(), z.value = !1, P = !1, x.validateEvent && de?.validate("blur").catch(m);
			}
		}), G = _(!1), Ne = f(() => [
			w.b("editor"),
			w.bm("editor", x.type),
			E.e("wrapper"),
			w.is("disabled", F.value),
			w.is("active", z.value),
			O.b("editor"),
			Qe ? O.bm("editor", Qe.value) : "",
			C.class
		]), Pe = f(() => [
			E.e("icon"),
			O.e("close-icon"),
			X.value ? "" : O.em("close-icon", "hidden")
		]);
		e(z, (e) => {
			e ? c(() => {
				e && (N.value = x.modelValue);
			}) : (R.value = null, c(() => {
				K(x.modelValue);
			}));
		});
		let K = (e, t) => {
			(t || !be(e, N.value)) && (S(ae, e), t && (N.value = e), x.validateEvent && de?.validate("change").catch(m));
		}, Fe = (e) => {
			S("keydown", e);
		}, Ie = f(() => M.value ? Array.from(M.value.$el.querySelectorAll("input")) : []), Le = (e, t, n) => {
			let r = Ie.value;
			r.length && (!n || n === "min" ? (r[0].setSelectionRange(e, t), r[0].focus()) : n === "max" && (r[1].setSelectionRange(e, t), r[1].focus()));
		}, Re = () => {
			L.value = !0;
		}, ze = () => {
			S("visible-change", !0);
		}, Be = () => {
			L.value = !1, z.value = !1, S("visible-change", !1);
		}, Ve = () => {
			z.value = !0;
		}, He = () => {
			z.value = !1;
		}, q = f(() => {
			let e = nt(I.value);
			return d(R.value) ? [R.value[0] ?? (e && e[0]) ?? "", R.value[1] ?? (e && e[1]) ?? ""] : R.value === null ? J.value && V.value && !x.saveOnBlur || !J.value && V.value || !z.value && V.value ? "" : e ? We.value || Ge.value || Ke.value ? e.join(", ") : e : "" : R.value;
		}), Ue = f(() => x.type.includes("time")), J = f(() => x.type.startsWith("time")), We = f(() => x.type === "dates"), Ge = f(() => x.type === "months"), Ke = f(() => x.type === "years"), Y = f(() => x.prefixIcon || (Ue.value ? ce : le)), X = f(() => x.clearable && !F.value && !x.readonly && !V.value && (G.value || W.value)), qe = (e) => {
			x.readonly || F.value || (X.value && (e?.stopPropagation(), B.value.handleClear ? B.value.handleClear() : H(A.valueOnClear.value), K(A.valueOnClear.value, !0), Be()), S("clear"));
		}, Z = async (e) => {
			x.readonly || F.value || (e.target?.tagName !== "INPUT" || W.value || !x.automaticDropdown) && (z.value = !0);
		}, Je = () => {
			x.readonly || F.value || !V.value && x.clearable && (G.value = !0);
		}, Ye = () => {
			G.value = !1;
		}, Xe = (e) => {
			x.readonly || F.value || (e.touches[0].target?.tagName !== "INPUT" || W.value || !x.automaticDropdown) && (z.value = !0);
		}, Ze = f(() => x.type.includes("range")), Qe = ge(), $e = f(() => b(j)?.popperRef?.contentRef), et = se(M, (e) => {
			let t = b($e), n = oe(M);
			t && (e.target === t || e.composedPath().includes(t)) || e.target === n || n && e.composedPath().includes(n) || (z.value = !1);
		});
		a(() => {
			et?.();
		});
		let tt = () => {
			if (J.value && !x.saveOnBlur) return;
			let e = d(R.value) && R.value.every((e) => e === "");
			if (R.value && !e) {
				let e = Q(q.value);
				e && ($(e) && H(we(e)), R.value = null);
			}
			(R.value === "" || e) && (H(A.valueOnClear.value), K(A.valueOnClear.value, !0), R.value = null);
		}, Q = (e) => e ? B.value.parseUserInput(e) : null, nt = (e) => e ? d(e) ? e.map((e) => e.format(x.format)) : e.format(x.format) : null, $ = (e) => B.value.isValidValue(e), rt = async (e) => {
			if (x.readonly || F.value) return;
			let t = me(e);
			if (Fe(e), t === k.esc) {
				z.value === !0 && (z.value = !1, e.preventDefault(), e.stopPropagation());
				return;
			}
			if (t === k.down && (B.value.handleFocusPicker && (e.preventDefault(), e.stopPropagation()), z.value === !1 && (z.value = !0, await c()), B.value.handleFocusPicker)) {
				B.value.handleFocusPicker();
				return;
			}
			if (t === k.tab) {
				P = !0;
				return;
			}
			if (t === k.enter || t === k.numpadEnter) {
				z.value ? (R.value === null || R.value === "" || $(Q(q.value))) && (tt(), z.value = !1) : z.value = !0, e.preventDefault(), e.stopPropagation();
				return;
			}
			if (R.value) {
				e.stopPropagation();
				return;
			}
			B.value.handleKeydownInput && B.value.handleKeydownInput(e);
		}, it = (e) => {
			R.value = e, z.value ||= !0;
		}, at = (e) => {
			let t = e.target;
			R.value ? R.value = [t.value, R.value[1]] : R.value = [t.value, null];
		}, ot = (e) => {
			let t = e.target;
			R.value ? R.value = [R.value[0], t.value] : R.value = [null, t.value];
		}, st = () => {
			let e = R.value, t = Q(e && e[0]), n = b(I);
			if (t && t.isValid()) {
				R.value = [nt(t), q.value?.[1] || null];
				let e = [t, n && (n[1] || null)];
				$(e) && (H(we(e)), R.value = null);
			}
		}, ct = () => {
			let e = b(R), t = Q(e && e[1]), n = b(I);
			if (t && t.isValid()) {
				R.value = [b(q)?.[0] || null, nt(t)];
				let e = [n && n[0], t];
				$(e) && (H(we(e)), R.value = null);
			}
		};
		return te(Se, {
			props: x,
			emptyValues: A
		}), te(Ce, Ee), re({
			focus: () => {
				M.value?.focus();
			},
			blur: () => {
				M.value?.blur();
			},
			handleOpen: Ve,
			handleClose: He,
			onPick: U
		}), (e, t) => (i(), y(b(ue), ee({
			ref_key: "refPopper",
			ref: j,
			visible: b(z),
			effect: "light",
			pure: "",
			trigger: "click"
		}, e.$attrs, {
			role: "dialog",
			teleported: "",
			transition: `${b(w).namespace.value}-zoom-in-top`,
			"popper-class": [`${b(w).namespace.value}-picker__popper`, e.popperClass],
			"popper-style": e.popperStyle,
			"popper-options": b(fe),
			"fallback-placements": e.fallbackPlacements,
			"gpu-acceleration": !1,
			placement: e.placement,
			"stop-popper-mouse-event": !1,
			"hide-after": 0,
			persistent: "",
			onBeforeShow: Re,
			onShow: ze,
			onHide: Be
		}), {
			default: g(() => [Ze.value ? (i(), y(De, {
				key: 1,
				id: e.id,
				ref_key: "inputRef",
				ref: M,
				"model-value": q.value,
				name: e.name,
				disabled: b(F),
				readonly: !e.editable || e.readonly,
				"start-placeholder": e.startPlaceholder,
				"end-placeholder": e.endPlaceholder,
				class: s(Ne.value),
				style: l(e.$attrs.style),
				"aria-label": e.ariaLabel,
				tabindex: e.tabindex,
				autocomplete: "off",
				role: "combobox",
				onClick: Z,
				onFocus: b(je),
				onBlur: b(Me),
				onStartInput: at,
				onStartChange: st,
				onEndInput: ot,
				onEndChange: ct,
				onMousedown: Z,
				onMouseenter: Je,
				onMouseleave: Ye,
				onTouchstartPassive: Xe,
				onKeydown: rt
			}, {
				prefix: g(() => [Y.value ? (i(), y(b(D), {
					key: 0,
					class: s([b(E).e("icon"), b(O).e("icon")])
				}, {
					default: g(() => [(i(), y(o(Y.value)))]),
					_: 1
				}, 8, ["class"])) : p("v-if", !0)]),
				"range-separator": g(() => [r(e.$slots, "range-separator", {}, () => [v("span", { class: s(b(O).b("separator")) }, n(e.rangeSeparator), 3)])]),
				suffix: g(() => [e.clearIcon ? (i(), y(b(D), {
					key: 0,
					class: s(Pe.value),
					onMousedown: h(b(m), ["prevent"]),
					onClick: qe
				}, {
					default: g(() => [(i(), y(o(e.clearIcon)))]),
					_: 1
				}, 8, ["class", "onMousedown"])) : p("v-if", !0)]),
				_: 3
			}, 8, [
				"id",
				"model-value",
				"name",
				"disabled",
				"readonly",
				"start-placeholder",
				"end-placeholder",
				"class",
				"style",
				"aria-label",
				"tabindex",
				"onFocus",
				"onBlur"
			])) : (i(), y(b(pe), {
				key: 0,
				id: e.id,
				ref_key: "inputRef",
				ref: M,
				"container-role": "combobox",
				"model-value": q.value,
				name: e.name,
				size: b(Qe),
				disabled: b(F),
				placeholder: e.placeholder,
				class: s([
					b(w).b("editor"),
					b(w).bm("editor", e.type),
					b(w).is("focus", b(z)),
					e.$attrs.class
				]),
				style: l(e.$attrs.style),
				readonly: !e.editable || e.readonly || We.value || Ge.value || Ke.value || e.type === "week",
				"aria-label": e.ariaLabel,
				tabindex: e.tabindex,
				"validate-event": !1,
				onInput: it,
				onFocus: b(je),
				onBlur: b(Me),
				onKeydown: rt,
				onChange: tt,
				onMousedown: Z,
				onMouseenter: Je,
				onMouseleave: Ye,
				onTouchstartPassive: Xe,
				onClick: t[0] ||= h(() => {}, ["stop"])
			}, {
				prefix: g(() => [Y.value ? (i(), y(b(D), {
					key: 0,
					class: s(b(E).e("icon")),
					onMousedown: h(Z, ["prevent"]),
					onTouchstartPassive: Xe
				}, {
					default: g(() => [(i(), y(o(Y.value)))]),
					_: 1
				}, 8, ["class"])) : p("v-if", !0)]),
				suffix: g(() => [X.value && e.clearIcon ? (i(), y(b(D), {
					key: 0,
					class: s(`${b(E).e("icon")} clear-icon`),
					onMousedown: h(b(m), ["prevent"]),
					onClick: qe
				}, {
					default: g(() => [(i(), y(o(e.clearIcon)))]),
					_: 1
				}, 8, ["class", "onMousedown"])) : p("v-if", !0)]),
				_: 1
			}, 8, [
				"id",
				"model-value",
				"name",
				"size",
				"disabled",
				"placeholder",
				"class",
				"style",
				"readonly",
				"aria-label",
				"tabindex",
				"onFocus",
				"onBlur"
			]))]),
			content: g(() => [r(e.$slots, "default", {
				visible: b(z),
				actualVisible: b(L),
				parsedValue: b(I),
				format: e.format,
				dateFormat: e.dateFormat,
				timeFormat: e.timeFormat,
				unlinkPanels: e.unlinkPanels,
				type: e.type,
				defaultValue: e.defaultValue,
				showNow: e.showNow,
				showConfirm: e.showConfirm,
				showFooter: e.showFooter,
				showWeekNumber: e.showWeekNumber,
				singlePanel: e.singlePanel,
				onPick: t[1] ||= (...e) => b(U) && b(U)(...e),
				onSelectRange: Le,
				onSetPickerOption: t[2] ||= (...e) => b(Oe) && b(Oe)(...e),
				onCalendarChange: t[3] ||= (...e) => b(ke) && b(ke)(...e),
				onClear: qe,
				onPanelChange: t[4] ||= (...e) => b(Ae) && b(Ae)(...e),
				onMousedown: t[5] ||= h(() => {}, ["stop"])
			})]),
			_: 3
		}, 16, [
			"visible",
			"transition",
			"popper-class",
			"popper-style",
			"popper-options",
			"fallback-placements",
			"placement"
		]));
	}
});
//#endregion
export { Ee as i, P as n, F as r, R as t };
