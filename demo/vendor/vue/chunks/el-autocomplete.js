globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, Ft as t, G as n, H as r, I as i, M as a, Mt as o, Ot as s, Pt as c, S as ee, T as l, Tt as u, W as te, X as ne, _ as d, b as re, bt as f, d as p, jt as m, p as ie, tt as h, ut as g, v as _, w as v, x as y, y as ae, yt as b, z as oe } from "./vue.runtime.js";
import { t as x } from "./shared/element-plus/utils/vue/install.js";
import { n as se } from "./shared/element-plus/hooks/use-aria.js";
import { i as S } from "./shared/element-plus/utils/types.js";
import { n as C, r as w, t as T } from "./shared/element-plus/constants/event.js";
import { n as E, r as D } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as ce } from "./shared/element-plus/utils/error.js";
import { S as le, t as ue } from "./shared/vueuse.js";
import { r as de } from "./shared/element-plus/hooks/use-namespace.js";
import { C as fe } from "./shared/element-plus-icons.js";
import { t as pe } from "./el-icon.js";
import { i as O, t as me } from "./el-tooltip.js";
import { r as k, t as A } from "./el-input.js";
import { a as j, n as he } from "./shared/element-plus/constants/aria.js";
import { t as ge } from "./shared/element-plus/hooks/use-id.js";
import { n as _e } from "./el-form/hooks/use-form-common-props.js";
import { t as ve } from "./el-scrollbar.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/autocomplete/src/autocomplete.mjs
var M = E({
	...k,
	valueKey: {
		type: String,
		default: "value"
	},
	modelValue: {
		type: [String, Number],
		default: ""
	},
	debounce: {
		type: Number,
		default: 300
	},
	placement: {
		type: D(String),
		values: [
			"top",
			"top-start",
			"top-end",
			"bottom",
			"bottom-start",
			"bottom-end"
		],
		default: "bottom-start"
	},
	fetchSuggestions: {
		type: D([Function, Array]),
		default: f
	},
	popperClass: O.popperClass,
	popperStyle: O.popperStyle,
	popperOptions: O.popperOptions,
	showArrow: {
		type: Boolean,
		default: !0
	},
	triggerOnFocus: {
		type: Boolean,
		default: !0
	},
	selectWhenUnmatched: Boolean,
	hideLoading: Boolean,
	teleported: O.teleported,
	appendTo: O.appendTo,
	highlightFirstItem: Boolean,
	fitInputWidth: Boolean,
	loopNavigation: {
		type: Boolean,
		default: !0
	}
}), N = {
	[w]: (e) => m(e) || S(e),
	[C]: (e) => m(e) || S(e),
	[T]: (e) => m(e) || S(e),
	focus: (e) => e instanceof FocusEvent,
	blur: (e) => e instanceof FocusEvent,
	clear: () => !0,
	select: (e) => s(e)
}, ye = ["aria-expanded", "aria-owns"], be = { key: 0 }, xe = [
	"id",
	"aria-selected",
	"onClick"
], P = "ElAutocomplete", F = x(/* @__PURE__ */ l({
	name: P,
	inheritAttrs: !1,
	__name: "autocomplete",
	props: M,
	emits: N,
	setup(s, { expose: l, emit: f }) {
		let m = s, x = f, S = d(() => {
			let e = A.props ?? [];
			return se(m, u(e) ? e : Object.keys(e));
		}), E = ne(), D = _e(), O = de("autocomplete"), k = g(), M = g(), N = g(), F = g(), I = !1, L = !1, R = g([]), z = g(-1), B = g(""), V = g(!1), H = g(!1), U = g(!1), W = ge(), Se = d(() => E.style), G = d(() => (R.value.length > 0 || U.value) && V.value), K = d(() => !m.hideLoading && U.value), Ce = d(() => k.value ? Array.from(k.value.$el.querySelectorAll("input")) : []), we = () => {
			G.value && (B.value = `${k.value.$el.offsetWidth}px`);
		}, Te = () => {
			z.value = -1;
		}, q = async (e) => {
			if (H.value) return;
			let t = (e) => {
				U.value = !1, !H.value && (u(e) ? (R.value = e, z.value = m.highlightFirstItem ? 0 : -1) : ce(P, "autocomplete suggestions must be an array"));
			};
			if (U.value = !0, u(m.fetchSuggestions)) t(m.fetchSuggestions);
			else {
				let n = await m.fetchSuggestions(e, t);
				u(n) && t(n);
			}
		}, J = le(q, d(() => m.debounce)), Ee = (e) => {
			let t = !!e;
			if (x(C, e), x(w, e), H.value = !1, V.value ||= t, !m.triggerOnFocus && !e) {
				H.value = !0, R.value = [];
				return;
			}
			J(e);
		}, De = (e) => {
			D.value || (e.target?.tagName !== "INPUT" || Ce.value.includes(document.activeElement)) && (V.value = !0);
		}, Oe = (e) => {
			x(T, e);
		}, ke = (e) => {
			if (L) L = !1;
			else {
				V.value = !0, x("focus", e);
				let t = m.modelValue ?? "";
				m.triggerOnFocus && !I && J(String(t));
			}
		}, Y = (e) => {
			setTimeout(() => {
				if (N.value?.isFocusInsideContent()) {
					L = !0;
					return;
				}
				V.value && Z(), x("blur", e);
			});
		}, Ae = () => {
			V.value = !1, x(w, ""), x("clear");
		}, X = async () => {
			k.value?.isComposing || (G.value && z.value >= 0 && z.value < R.value.length ? Q(R.value[z.value]) : (m.selectWhenUnmatched && (x("select", { value: m.modelValue }), R.value = [], z.value = -1), V.value = !0, J(String(m.modelValue))));
		}, je = (e) => {
			G.value && (e.preventDefault(), e.stopPropagation(), Z());
		}, Z = () => {
			V.value = !1;
		}, Me = () => {
			k.value?.focus();
		}, Ne = () => {
			k.value?.blur();
		}, Q = async (e) => {
			x(C, e[m.valueKey]), x(w, e[m.valueKey]), x("select", e), R.value = [], z.value = -1;
		}, $ = (e) => {
			if (!G.value || U.value) return;
			if (e < 0) {
				if (!m.loopNavigation) {
					z.value = -1;
					return;
				}
				e = R.value.length - 1;
			}
			e >= R.value.length && (e = m.loopNavigation ? 0 : R.value.length - 1);
			let [t, n] = Pe(), r = n[e], i = t.scrollTop, { offsetTop: a, scrollHeight: o } = r;
			a + o > i + t.clientHeight && (t.scrollTop = a + o - t.clientHeight), a < i && (t.scrollTop = a), z.value = e, k.value?.ref?.setAttribute("aria-activedescendant", `${W.value}-item-${z.value}`);
		}, Pe = () => {
			let e = M.value.querySelector(`.${O.be("suggestion", "wrap")}`);
			return [e, e.querySelectorAll(`.${O.be("suggestion", "list")} li`)];
		}, Fe = ue(F, (e) => {
			if (N.value?.isFocusInsideContent()) return;
			let t = L;
			L = !1, G.value && (t ? Y(new FocusEvent("blur", e)) : Z());
		}), Ie = (e) => {
			switch (he(e)) {
				case j.up:
					e.preventDefault(), $(z.value - 1);
					break;
				case j.down:
					e.preventDefault(), $(z.value + 1);
					break;
				case j.enter:
				case j.numpadEnter:
					e.preventDefault(), X();
					break;
				case j.tab:
					Z();
					break;
				case j.esc:
					je(e);
					break;
				case j.home:
					e.preventDefault(), $(0);
					break;
				case j.end:
					e.preventDefault(), $(R.value.length - 1);
					break;
				case j.pageUp:
					e.preventDefault(), $(Math.max(0, z.value - 10));
					break;
				case j.pageDown:
					e.preventDefault(), $(Math.min(R.value.length - 1, z.value + 10));
					break;
			}
		};
		return i(() => {
			Fe?.();
		}), oe(() => {
			let e = k.value?.ref;
			e && ([
				{
					key: "role",
					value: "textbox"
				},
				{
					key: "aria-autocomplete",
					value: "list"
				},
				{
					key: "aria-controls",
					value: W.value
				},
				{
					key: "aria-activedescendant",
					value: `${W.value}-item-${z.value}`
				}
			].forEach(({ key: t, value: n }) => e.setAttribute(t, n)), I = e.hasAttribute("readonly"));
		}), l({
			highlightedIndex: z,
			activated: V,
			loading: U,
			inputRef: k,
			popperRef: N,
			suggestions: R,
			handleSelect: Q,
			handleKeyEnter: X,
			focus: Me,
			blur: Ne,
			close: Z,
			highlight: $,
			getData: q
		}), (i, l) => (r(), ae(b(me), {
			ref_key: "popperRef",
			ref: N,
			visible: G.value,
			placement: s.placement,
			"fallback-placements": ["bottom-start", "top-start"],
			"popper-class": [b(O).e("popper"), s.popperClass],
			"popper-style": s.popperStyle,
			"popper-options": s.popperOptions,
			"show-arrow": s.showArrow,
			teleported: s.teleported,
			"append-to": s.appendTo,
			"gpu-acceleration": !1,
			pure: "",
			"manual-mode": "",
			effect: "light",
			trigger: "click",
			transition: `${b(O).namespace.value}-zoom-in-top`,
			persistent: "",
			role: "listbox",
			onBeforeShow: we,
			onHide: Te
		}, {
			content: h(() => [_("div", {
				ref_key: "regionRef",
				ref: M,
				class: o([b(O).b("suggestion"), b(O).is("loading", K.value)]),
				style: c({
					[s.fitInputWidth ? "width" : "minWidth"]: B.value,
					outline: "none"
				}),
				role: "region"
			}, [
				i.$slots.header ? (r(), y("div", {
					key: 0,
					class: o(b(O).be("suggestion", "header")),
					onClick: l[0] ||= p(() => {}, ["stop"])
				}, [n(i.$slots, "header")], 2)) : re("v-if", !0),
				v(b(ve), {
					id: b(W),
					tag: "ul",
					"wrap-class": b(O).be("suggestion", "wrap"),
					"view-class": b(O).be("suggestion", "list"),
					role: "listbox"
				}, {
					default: h(() => [K.value ? (r(), y("li", be, [n(i.$slots, "loading", {}, () => [v(b(pe), { class: o(b(O).is("loading")) }, {
						default: h(() => [v(b(fe))]),
						_: 1
					}, 8, ["class"])])])) : (r(!0), y(ie, { key: 1 }, te(R.value, (a, c) => (r(), y("li", {
						id: `${b(W)}-item-${c}`,
						key: c,
						class: o({ highlighted: z.value === c }),
						role: "option",
						"aria-selected": z.value === c,
						onClick: (e) => Q(a)
					}, [n(i.$slots, "default", { item: a }, () => [e(t(a[s.valueKey]), 1)])], 10, xe))), 128))]),
					_: 3
				}, 8, [
					"id",
					"wrap-class",
					"view-class"
				]),
				i.$slots.footer ? (r(), y("div", {
					key: 1,
					class: o(b(O).be("suggestion", "footer")),
					onClick: l[1] ||= p(() => {}, ["stop"])
				}, [n(i.$slots, "footer")], 2)) : re("v-if", !0)
			], 6)]),
			default: h(() => [_("div", {
				ref_key: "listboxRef",
				ref: F,
				class: o([b(O).b(), i.$attrs.class]),
				style: c(Se.value),
				role: "combobox",
				"aria-haspopup": "listbox",
				"aria-expanded": G.value,
				"aria-owns": b(W)
			}, [v(b(A), a({
				ref_key: "inputRef",
				ref: k
			}, a(S.value, i.$attrs), {
				"model-value": s.modelValue,
				disabled: b(D),
				onInput: Ee,
				onChange: Oe,
				onFocus: ke,
				onBlur: Y,
				onClear: Ae,
				onKeydown: Ie,
				onMousedown: De
			}), ee({ _: 2 }, [
				i.$slots.prepend ? {
					name: "prepend",
					fn: h(() => [n(i.$slots, "prepend")]),
					key: "0"
				} : void 0,
				i.$slots.append ? {
					name: "append",
					fn: h(() => [n(i.$slots, "append")]),
					key: "1"
				} : void 0,
				i.$slots.prefix ? {
					name: "prefix",
					fn: h(() => [n(i.$slots, "prefix")]),
					key: "2"
				} : void 0,
				i.$slots.suffix ? {
					name: "suffix",
					fn: h(() => [n(i.$slots, "suffix")]),
					key: "3"
				} : void 0
			]), 1040, ["model-value", "disabled"])], 14, ye)]),
			_: 3
		}, 8, [
			"visible",
			"placement",
			"popper-class",
			"popper-style",
			"popper-options",
			"show-arrow",
			"teleported",
			"append-to",
			"transition"
		]));
	}
}));
//#endregion
export { F as ElAutocomplete, F as default, N as autocompleteEmits, M as autocompleteProps };
