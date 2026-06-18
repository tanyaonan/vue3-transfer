globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, At as t, Ft as n, G as r, H as i, J as a, Mt as o, N as s, Pt as ee, S as te, T as c, W as ne, X as re, Z as ie, _ as l, b as u, bt as ae, c as oe, d, l as f, nt as p, p as m, tt as h, u as se, ut as g, v as _, w as v, x as y, y as b, yt as x, z as ce } from "./vue.runtime.js";
import { t as le } from "./shared/element-plus/utils/vue/install.js";
import { t as ue } from "./shared/lodash/clamp.js";
import { t as de } from "./shared/lodash/cloneDeep.js";
import { r as fe, t as pe } from "./el-cascader-panel.js";
import { i as me, t as he } from "./shared/element-plus/utils/types.js";
import { r as ge, t as _e } from "./shared/element-plus/constants/event.js";
import { n as S, r as C } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as ve, r as ye } from "./shared/element-plus/utils/dom/aria.js";
import { S as be, _ as xe, d as Se, i as Ce } from "./shared/vueuse.js";
import { r as we } from "./shared/element-plus/hooks/use-namespace.js";
import { f as Te, l as Ee, t as De } from "./shared/element-plus-icons.js";
import { a as Oe } from "./shared/element-plus/utils/vue/icon.js";
import { t as w } from "./el-icon.js";
import { i as T, t as ke } from "./el-tooltip.js";
import { d as E } from "./el-popper.js";
import { r as D } from "./shared/element-plus/hooks/use-size.js";
import { t as Ae } from "./el-input.js";
import { a as O, n as je } from "./shared/element-plus/constants/aria.js";
import { n as Me, r as Ne } from "./el-form/hooks/use-form-common-props.js";
import { n as Pe, t as Fe } from "./shared/element-plus/hooks/use-focus-controller.js";
import { t as Ie } from "./el-form/hooks/use-form-item.js";
import { t as Le } from "./el-scrollbar.js";
import { n as Re } from "./shared/element-plus/hooks/use-locale.js";
import { n as ze, r as k } from "./shared/element-plus/hooks/use-empty-values.js";
import { r as Be, t as Ve } from "./el-tag.js";
import { t as He } from "./shared/element-plus/directives/click-outside.js";
import { t as Ue } from "./el-virtual-list/builders/build-list.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/cascader/src/cascader.mjs
var A = S({
	...fe,
	size: D,
	placeholder: String,
	disabled: {
		type: Boolean,
		default: void 0
	},
	clearable: Boolean,
	clearIcon: {
		type: Oe,
		default: Te
	},
	filterable: Boolean,
	filterMethod: {
		type: C(Function),
		default: (e, t) => e.text.includes(t)
	},
	separator: {
		type: String,
		default: " / "
	},
	showAllLevels: {
		type: Boolean,
		default: !0
	},
	collapseTags: Boolean,
	maxCollapseTags: {
		type: Number,
		default: 1
	},
	collapseTagsTooltip: Boolean,
	maxCollapseTagsTooltipHeight: { type: [String, Number] },
	debounce: {
		type: Number,
		default: 300
	},
	beforeFilter: {
		type: C(Function),
		default: () => !0
	},
	placement: {
		type: C(String),
		values: E,
		default: "bottom-start"
	},
	fallbackPlacements: {
		type: C(Array),
		default: [
			"bottom-start",
			"bottom",
			"top-start",
			"top",
			"right",
			"left"
		]
	},
	popperClass: T.popperClass,
	popperStyle: T.popperStyle,
	teleported: T.teleported,
	effect: {
		type: C(String),
		default: "light"
	},
	tagType: {
		...Be.type,
		default: "info"
	},
	tagEffect: {
		...Be.effect,
		default: "light"
	},
	validateEvent: {
		type: Boolean,
		default: !0
	},
	persistent: {
		type: Boolean,
		default: !0
	},
	showCheckedStrategy: {
		type: String,
		values: ["parent", "child"],
		default: "child"
	},
	checkOnClickNode: Boolean,
	showPrefix: {
		type: Boolean,
		default: !0
	},
	fitInputWidth: {
		type: [Boolean, Number],
		default: !1
	},
	...k
}), j = (e) => !0, M = {
	[ge]: j,
	[_e]: j,
	focus: (e) => e instanceof FocusEvent,
	blur: (e) => e instanceof FocusEvent,
	clear: () => !0,
	visibleChange: (e) => he(e),
	expandChange: (e) => !!e,
	removeTag: (e) => !!e
}, We = ["placeholder"], Ge = ["onClick"], Ke = [
	"id",
	"data-suggestion-index",
	"onClick"
], qe = 34, Je = le(/* @__PURE__ */ c({
	name: "ElCascader",
	__name: "cascader",
	props: A,
	emits: M,
	setup(c, { expose: le, emit: fe }) {
		let he = { modifiers: [{
			name: "arrowPosition",
			enabled: !0,
			phase: "main",
			fn: ({ state: e }) => {
				let { modifiersData: t, placement: n } = e;
				[
					"right",
					"left",
					"bottom",
					"top"
				].includes(n) || t.arrow && (t.arrow.x = 35);
			},
			requires: ["arrow"]
		}] }, S = c, C = fe, Te = re(), Oe = ie(), T = 0, E = 0, D = we("cascader"), k = we("input"), Be = {
			small: 7,
			default: 11,
			large: 15
		}, { t: A } = Re(), { formItem: j } = Ie(), M = Me(), { valueOnClear: Je } = ze(S), { isComposing: Ye, handleComposition: N } = Fe({ afterComposition(e) {
			let t = e.target?.value;
			Bt(t);
		} }), P = g(), Xe = g(), F = g(), Ze = g(), I = g(), L = g(), R = g(), z = g(!1), Qe = g(!1), B = g(!1), V = g(""), H = g(""), U = g([]), W = g([]), $e = g("100%"), et = l(() => !!Oe["suggestion-item"]), tt = l(() => ue(W.value.length * S.itemSize, S.itemSize, S.height)), nt = l(() => S.props.multiple ? S.collapseTags ? U.value.slice(0, S.maxCollapseTags) : U.value : []), rt = l(() => S.props.multiple && S.collapseTags ? U.value.slice(S.maxCollapseTags) : []), it = l(() => Te.style), at = l(() => S.placeholder ?? A("el.cascader.placeholder")), ot = l(() => H.value || U.value.length > 0 || Ye.value ? "" : at.value), G = Ne(), st = l(() => G.value === "small" ? "small" : "default"), K = l(() => !!S.props.multiple), ct = l(() => !S.filterable || K.value), lt = l(() => K.value ? H.value : V.value), q = l(() => I.value?.checkedNodes || []), { wrapperRef: ut, isFocused: dt, handleBlur: ft } = Pe(F, {
			disabled: M,
			beforeBlur(e) {
				return P.value?.isFocusInsideContent(e) || Xe.value?.isFocusInsideContent(e);
			},
			afterBlur() {
				S.validateEvent && j?.validate?.("blur").catch(ae);
			}
		}), pt = l(() => !S.clearable || M.value || B.value || !Qe.value && !dt.value ? !1 : !!q.value.length), J = l(() => {
			let { showAllLevels: e, separator: t } = S, n = q.value;
			return n.length ? K.value ? "" : n[0].calcText(e, t) : "";
		}), mt = l(() => j?.validateState || ""), ht = l({
			get() {
				return de(S.modelValue);
			},
			set(e) {
				let t = e ?? Je.value;
				C(ge, t), C(_e, t), S.validateEvent && j?.validate("change").catch(ae);
			}
		}), gt = l(() => [
			D.b(),
			D.m(G.value),
			D.is("disabled", M.value),
			Te.class
		]), _t = l(() => [
			k.e("icon"),
			"icon-arrow-down",
			D.is("reverse", z.value)
		]), vt = l(() => D.is("focus", dt.value)), yt = l(() => P.value?.popperRef?.contentRef), bt = (e) => {
			dt.value && ft(new FocusEvent("blur", e)), Y(!1);
		}, Y = (e) => {
			M.value || (e ??= !z.value, e !== z.value && (z.value = e, F.value?.input?.setAttribute("aria-expanded", `${e}`), e ? (X(), I.value && s(I.value.scrollToExpandingNode)) : S.filterable && Pt(), C("visibleChange", e)));
		}, X = () => {
			s(() => {
				P.value?.updatePopper();
			});
		}, xt = () => {
			B.value = !1;
		}, St = (e) => {
			let { showAllLevels: t, separator: n } = S;
			return {
				node: e,
				key: e.uid,
				text: e.calcText(t, n),
				hitState: !1,
				closable: !M.value && !e.isDisabled
			};
		}, Z = (e) => {
			let t = e.node;
			t.doCheck(!1), I.value?.calculateCheckedValue(), C("removeTag", t.valueByOption);
		}, Ct = () => {
			switch (S.showCheckedStrategy) {
				case "child": return q.value;
				case "parent": {
					let e = At(!1), t = e.map((e) => e.value);
					return e.filter((e) => !e.parent || !t.includes(e.parent.value));
				}
				default: return [];
			}
		}, wt = () => {
			if (!K.value) return;
			let e = Ct(), t = [];
			e.forEach((e) => t.push(St(e))), U.value = t;
		}, Tt = () => {
			let { filterMethod: e, showAllLevels: t, separator: n } = S, r = I.value?.getFlattedNodes(!S.props.checkStrictly)?.filter((r) => r.isDisabled ? !1 : (r.calcText(t, n), e(r, lt.value)));
			K.value && U.value.forEach((e) => {
				e.hitState = !1;
			}), B.value = !0, W.value = r, s(() => {
				S.virtualScroll && W.value.length > 0 && R.value?.scrollToItem(0), $();
			}), X();
		}, Q = (e) => {
			let t = L.value;
			return e ? t?.querySelector(e) ?? void 0 : t;
		}, Et = () => {
			let e;
			e = B.value && L.value ? Q(`.${D.e("suggestion-item")}`) : I.value?.$el.querySelector(`.${D.b("node")}[tabindex="-1"]`), e && (e.focus(), !B.value && e.getAttribute("aria-haspopup") === "true" && e.click());
		}, Dt = (e) => {
			let t = Q();
			if (!t) return;
			let n = me(S.fitInputWidth) ? `${S.fitInputWidth}px` : `${e}px`, r = (e) => {
				S.fitInputWidth === !1 ? (e.style.width = "", e.style.minWidth = n) : (e.style.width = n, e.style.minWidth = "");
			};
			if (r(t), S.virtualScroll) {
				$e.value = S.fitInputWidth === !1 ? et.value ? `${e}px` : `${Math.max(e, kt())}px` : n;
				return;
			}
			let i = Q(`.${D.e("suggestion-list")}`);
			i && r(i);
		}, Ot = () => {
			if (!Oe.prefix) return 0;
			let e = F.value?.$el.querySelector(`.${k.e("prefix")}`);
			if (!e) return 0;
			let t = e.getBoundingClientRect().width;
			return t <= 0 ? 0 : t + Be[G.value || "default"];
		}, $ = () => {
			let e = F.value?.input, t = F.value?.$el;
			if (!xe || !e || !t) return;
			L.value && Dt(t.getBoundingClientRect().width);
			let n = Ze.value;
			if (n) {
				let t = U.value.length > 0 ? `${Math.max(n.offsetHeight, T) - 2}px` : `${T}px`;
				e.style.height = t, n.style.left = `${Ot()}px`, X();
			}
		}, kt = () => {
			if (et.value || !W.value.length) return 0;
			let e = document.createElement("canvas").getContext("2d");
			if (!e) return 0;
			let t = Q(`.${D.e("suggestion-item")}`);
			if (!t || !xe) return 0;
			let n = getComputedStyle(t), r = Number.parseFloat(n.paddingLeft) + Number.parseFloat(n.paddingRight);
			e.font = `bold ${n.fontSize} ${n.fontFamily}`;
			let i = 0, a = !1;
			for (let t of W.value) {
				let n = t.text || "", r = e.measureText(n);
				i = Math.max(i, r.width), t.checked && !a && (a = !0);
			}
			return i + r + (a ? qe : 0);
		}, At = (e) => I.value?.getCheckedNodes(e), jt = (e) => {
			X(), C("expandChange", e);
		}, Mt = (e) => {
			if (!Ye.value) switch (je(e)) {
				case O.enter:
				case O.numpadEnter:
					Y();
					break;
				case O.down:
					Y(!0), s(Et), e.preventDefault();
					break;
				case O.esc:
					z.value === !0 && (e.preventDefault(), e.stopPropagation(), Y(!1));
					break;
				case O.tab:
					Y(!1);
					break;
			}
		}, Nt = () => {
			I.value?.clearCheckedNodes(), !z.value && S.filterable && Pt(), Y(!1), C("clear");
		}, Pt = () => {
			let { value: e } = J;
			V.value = e, H.value = e;
		}, Ft = (e) => {
			let { checked: t } = e;
			K.value ? I.value?.handleCheckChange(e, !t, !1) : (!t && I.value?.handleCheckChange(e, !0, !1), Y(!1));
		}, It = (e) => {
			let t = e.closest("[data-suggestion-index]")?.dataset.suggestionIndex;
			if (!t) return -1;
			let n = Number.parseInt(t, 10);
			return Number.isNaN(n) || n < 0 || n >= W.value.length ? -1 : n;
		}, Lt = (e) => {
			let t = e.target, n = je(e);
			switch (n) {
				case O.up:
				case O.down: {
					e.preventDefault();
					let r = n === O.up ? -1 : 1;
					if (S.virtualScroll && R.value) {
						let e = It(t);
						if (e >= 0) {
							let t = W.value.length, n = (e + r + t) % t;
							R.value.scrollToItem(n), s(() => {
								let e = Q(`#suggestion-${W.value[n].uid}`);
								e && ve(e);
							});
							return;
						}
					}
					ve(ye(t, r, `.${D.e("suggestion-item")}[tabindex="-1"]`));
					break;
				}
				case O.enter:
				case O.numpadEnter:
					t.click();
					break;
			}
		}, Rt = () => {
			let e = U.value[U.value.length - 1];
			E = H.value ? 0 : E + 1, !(!e || !E || S.collapseTags && U.value.length > 1) && (e.hitState ? Z(e) : e.hitState = !0);
		}, zt = be(() => {
			let { value: e } = lt;
			if (!e) return;
			let n = S.beforeFilter(e);
			t(n) ? n.then(Tt).catch(() => {}) : n === !1 ? xt() : Tt();
		}, l(() => S.debounce)), Bt = (e, n) => {
			if (!z.value && Y(!0), !n?.isComposing) if (e) zt();
			else {
				let e = S.beforeFilter("");
				t(e) && e.catch(() => {}), xt();
			}
		}, Vt = (e) => Number.parseFloat(Ce(k.cssVarName("input-height"), e).value) - 2;
		return e(B, X), e([
			q,
			M,
			() => S.collapseTags,
			() => S.maxCollapseTags
		], wt), e(U, () => {
			s(() => $());
		}), e(G, async () => {
			await s();
			let e = F.value.input;
			T = Vt(e) || T, $();
		}), e(J, Pt, { immediate: !0 }), e(() => z.value, (e) => {
			e && S.props.lazy && S.props.lazyLoad && I.value?.loadLazyRootNodes();
		}), ce(() => {
			let e = F.value.input, t = F.value.$el, n = Vt(e);
			T = e.offsetHeight || n, Se(t, $);
		}), le({
			getCheckedNodes: At,
			cascaderPanelRef: I,
			togglePopperVisible: Y,
			contentRef: yt,
			presentText: J,
			focus: () => {
				F.value?.focus();
			},
			blur: () => {
				F.value?.blur();
			}
		}), (e, t) => (i(), b(x(ke), {
			ref_key: "tooltipRef",
			ref: P,
			visible: z.value,
			teleported: c.teleported,
			"popper-class": [x(D).e("dropdown"), c.popperClass],
			"popper-style": c.popperStyle,
			"popper-options": he,
			"fallback-placements": c.fallbackPlacements,
			"stop-popper-mouse-event": !1,
			"gpu-acceleration": !1,
			placement: c.placement,
			transition: `${x(D).namespace.value}-zoom-in-top`,
			effect: c.effect,
			pure: "",
			persistent: c.persistent,
			onHide: xt
		}, {
			default: h(() => [p((i(), y("div", {
				ref_key: "wrapperRef",
				ref: ut,
				class: o(gt.value),
				style: ee(it.value),
				onClick: t[8] ||= () => Y(ct.value ? void 0 : !0),
				onKeydown: Mt,
				onMouseenter: t[9] ||= (e) => Qe.value = !0,
				onMouseleave: t[10] ||= (e) => Qe.value = !1
			}, [v(x(Ae), {
				ref_key: "inputRef",
				ref: F,
				modelValue: V.value,
				"onUpdate:modelValue": t[1] ||= (e) => V.value = e,
				placeholder: ot.value,
				readonly: ct.value,
				disabled: x(M),
				"validate-event": !1,
				size: x(G),
				class: o(vt.value),
				tabindex: K.value && c.filterable && !x(M) ? -1 : void 0,
				onCompositionstart: x(N),
				onCompositionupdate: x(N),
				onCompositionend: x(N),
				onInput: Bt
			}, te({
				suffix: h(() => [pt.value ? (i(), b(x(w), {
					key: "clear",
					class: o([x(k).e("icon"), "icon-circle-close"]),
					onClick: d(Nt, ["stop"])
				}, {
					default: h(() => [(i(), b(a(c.clearIcon)))]),
					_: 1
				}, 8, ["class"])) : (i(), b(x(w), {
					key: "arrow-down",
					class: o(_t.value),
					onClick: t[0] ||= d((e) => Y(), ["stop"])
				}, {
					default: h(() => [v(x(De))]),
					_: 1
				}, 8, ["class"]))]),
				_: 2
			}, [e.$slots.prefix ? {
				name: "prefix",
				fn: h(() => [r(e.$slots, "prefix")]),
				key: "0"
			} : void 0]), 1032, [
				"modelValue",
				"placeholder",
				"readonly",
				"disabled",
				"size",
				"class",
				"tabindex",
				"onCompositionstart",
				"onCompositionupdate",
				"onCompositionend"
			]), K.value ? (i(), y("div", {
				key: 0,
				ref_key: "tagWrapper",
				ref: Ze,
				class: o([x(D).e("tags"), x(D).is("validate", !!mt.value)])
			}, [
				r(e.$slots, "tag", {
					data: U.value,
					deleteTag: Z
				}, () => [(i(!0), y(m, null, ne(nt.value, (e) => (i(), b(x(Ve), {
					key: e.key,
					type: c.tagType,
					size: st.value,
					effect: c.tagEffect,
					hit: e.hitState,
					closable: e.closable,
					"disable-transitions": "",
					onClose: (t) => Z(e)
				}, {
					default: h(() => [_("span", null, n(e.text), 1)]),
					_: 2
				}, 1032, [
					"type",
					"size",
					"effect",
					"hit",
					"closable",
					"onClose"
				]))), 128))]),
				c.collapseTags && U.value.length > c.maxCollapseTags ? (i(), b(x(ke), {
					key: 0,
					ref_key: "tagTooltipRef",
					ref: Xe,
					disabled: z.value || !c.collapseTagsTooltip,
					"fallback-placements": [
						"bottom",
						"top",
						"right",
						"left"
					],
					placement: "bottom",
					"popper-class": c.popperClass,
					"popper-style": c.popperStyle,
					effect: c.effect,
					persistent: c.persistent
				}, {
					default: h(() => [v(x(Ve), {
						closable: !1,
						size: st.value,
						type: c.tagType,
						effect: c.tagEffect,
						"disable-transitions": ""
					}, {
						default: h(() => [_("span", { class: o(x(D).e("tags-text")) }, " + " + n(U.value.length - c.maxCollapseTags), 3)]),
						_: 1
					}, 8, [
						"size",
						"type",
						"effect"
					])]),
					content: h(() => [v(x(Le), { "max-height": c.maxCollapseTagsTooltipHeight }, {
						default: h(() => [_("div", { class: o(x(D).e("collapse-tags")) }, [(i(!0), y(m, null, ne(rt.value, (e, t) => (i(), y("div", {
							key: t,
							class: o(x(D).e("collapse-tag"))
						}, [(i(), b(x(Ve), {
							key: e.key,
							class: "in-tooltip",
							type: c.tagType,
							size: st.value,
							effect: c.tagEffect,
							hit: e.hitState,
							closable: e.closable,
							"disable-transitions": "",
							onClose: (t) => Z(e)
						}, {
							default: h(() => [_("span", null, n(e.text), 1)]),
							_: 2
						}, 1032, [
							"type",
							"size",
							"effect",
							"hit",
							"closable",
							"onClose"
						]))], 2))), 128))], 2)]),
						_: 1
					}, 8, ["max-height"])]),
					_: 1
				}, 8, [
					"disabled",
					"popper-class",
					"popper-style",
					"effect",
					"persistent"
				])) : u("v-if", !0),
				c.filterable && !x(M) ? p((i(), y("input", {
					key: 1,
					"onUpdate:modelValue": t[2] ||= (e) => H.value = e,
					type: "text",
					class: o(x(D).e("search-input")),
					placeholder: J.value ? "" : at.value,
					onInput: t[3] ||= (e) => Bt(H.value, e),
					onClick: t[4] ||= d((e) => Y(!0), ["stop"]),
					onKeydown: se(Rt, ["delete"]),
					onCompositionstart: t[5] ||= (...e) => x(N) && x(N)(...e),
					onCompositionupdate: t[6] ||= (...e) => x(N) && x(N)(...e),
					onCompositionend: t[7] ||= (...e) => x(N) && x(N)(...e)
				}, null, 42, We)), [[oe, H.value]]) : u("v-if", !0)
			], 2)) : u("v-if", !0)], 38)), [[
				x(He),
				bt,
				yt.value
			]])]),
			content: h(() => [
				e.$slots.header ? (i(), y("div", {
					key: 0,
					class: o(x(D).e("header")),
					onClick: t[11] ||= d(() => {}, ["stop"])
				}, [r(e.$slots, "header")], 2)) : u("v-if", !0),
				p(v(x(pe), {
					ref_key: "cascaderPanelRef",
					ref: I,
					modelValue: ht.value,
					"onUpdate:modelValue": t[12] ||= (e) => ht.value = e,
					options: c.options,
					props: S.props,
					border: !1,
					"render-label": e.$slots.default,
					"virtual-scroll": c.virtualScroll,
					"item-size": c.itemSize,
					height: c.height,
					onExpandChange: jt,
					onClose: t[13] ||= (t) => e.$nextTick(() => Y(!1))
				}, {
					empty: h(() => [r(e.$slots, "empty")]),
					_: 3
				}, 8, [
					"modelValue",
					"options",
					"props",
					"render-label",
					"virtual-scroll",
					"item-size",
					"height"
				]), [[f, !B.value]]),
				c.filterable ? (i(), y(m, { key: 1 }, [c.virtualScroll ? p((i(), y("div", {
					key: 1,
					ref_key: "suggestionPanel",
					ref: L,
					class: o(x(D).e("suggestion-panel")),
					onKeydown: Lt
				}, [p(v(x(Ue), {
					ref_key: "suggestionVirtualListRef",
					ref: R,
					height: tt.value,
					"item-size": c.itemSize,
					data: W.value,
					total: W.value.length,
					"class-name": x(D).e("suggestion-list"),
					"inner-element": "ul",
					"inner-width": $e.value
				}, {
					default: h(({ data: t, index: a, style: s }) => [(i(), y("li", {
						id: `suggestion-${t[a].uid}`,
						key: t[a].uid,
						"data-suggestion-index": a,
						class: o([x(D).e("suggestion-item"), x(D).is("checked", t[a].checked)]),
						tabindex: -1,
						style: ee(s),
						onClick: (e) => Ft(t[a])
					}, [r(e.$slots, "suggestion-item", { item: t[a] }, () => [_("span", null, n(t[a].text), 1), t[a].checked ? (i(), b(x(w), { key: 0 }, {
						default: h(() => [v(x(Ee))]),
						_: 1
					})) : u("v-if", !0)])], 14, Ke))]),
					_: 3
				}, 8, [
					"height",
					"item-size",
					"data",
					"total",
					"class-name",
					"inner-width"
				]), [[f, W.value.length]]), W.value.length ? u("v-if", !0) : r(e.$slots, "empty", { key: 0 }, () => [_("ul", { class: o(x(D).e("suggestion-list")) }, [_("li", { class: o(x(D).e("empty-text")) }, n(x(A)("el.cascader.noMatch")), 3)], 2)])], 34)), [[f, B.value]]) : p((i(), b(x(Le), {
					key: 0,
					ref: (e) => L.value = e?.$el,
					tag: "ul",
					class: o(x(D).e("suggestion-panel")),
					"wrap-class": x(D).e("suggestion-wrap"),
					"view-class": x(D).e("suggestion-list"),
					onKeydown: Lt
				}, {
					default: h(() => [W.value.length ? (i(!0), y(m, { key: 0 }, ne(W.value, (t) => (i(), y("li", {
						key: t.uid,
						class: o([x(D).e("suggestion-item"), x(D).is("checked", t.checked)]),
						tabindex: -1,
						onClick: (e) => Ft(t)
					}, [r(e.$slots, "suggestion-item", { item: t }, () => [_("span", null, n(t.text), 1), t.checked ? (i(), b(x(w), { key: 0 }, {
						default: h(() => [v(x(Ee))]),
						_: 1
					})) : u("v-if", !0)])], 10, Ge))), 128)) : r(e.$slots, "empty", { key: 1 }, () => [_("li", { class: o(x(D).e("empty-text")) }, n(x(A)("el.cascader.noMatch")), 3)])]),
					_: 3
				}, 8, [
					"class",
					"wrap-class",
					"view-class"
				])), [[f, B.value]])], 64)) : u("v-if", !0),
				e.$slots.footer ? (i(), y("div", {
					key: 2,
					class: o(x(D).e("footer")),
					onClick: t[14] ||= d(() => {}, ["stop"])
				}, [r(e.$slots, "footer")], 2)) : u("v-if", !0)
			]),
			_: 3
		}, 8, [
			"visible",
			"teleported",
			"popper-class",
			"popper-style",
			"fallback-placements",
			"placement",
			"transition",
			"effect",
			"persistent"
		]));
	}
}));
//#endregion
export { Je as ElCascader, Je as default, M as cascaderEmits, A as cascaderProps };
