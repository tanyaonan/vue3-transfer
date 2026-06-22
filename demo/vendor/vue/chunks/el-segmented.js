globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, C as t, Ft as n, G as r, H as i, Mt as a, Ot as o, Pt as s, T as c, W as l, _ as u, b as d, bt as f, ct as p, jt as m, p as h, ut as g, v as _, x as v, yt as y } from "./vue.runtime.js";
import { t as b } from "./shared/element-plus/utils/vue/install.js";
import { t as x } from "./shared/element-plus/hooks/use-aria.js";
import { i as S, t as C } from "./shared/element-plus/utils/types.js";
import { r as w, t as T } from "./shared/element-plus/constants/event.js";
import { n as E, r as D } from "./shared/element-plus/utils/vue/props/runtime.js";
import { d as O, r as k } from "./shared/vueuse.js";
import { r as A } from "./shared/element-plus/hooks/use-namespace.js";
import { r as j } from "./shared/element-plus/hooks/use-size.js";
import { t as M } from "./shared/element-plus/hooks/use-id.js";
import { n as N, r as P } from "./el-form/hooks/use-form-common-props.js";
import { n as F, t as I } from "./el-form/hooks/use-form-item.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/segmented/src/segmented.mjs
var L = {
	label: "label",
	value: "value",
	disabled: "disabled"
}, R = E({
	direction: {
		type: D(String),
		default: "horizontal"
	},
	options: {
		type: D(Array),
		default: () => []
	},
	modelValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	props: {
		type: D(Object),
		default: () => L
	},
	block: Boolean,
	size: j,
	disabled: {
		type: Boolean,
		default: void 0
	},
	validateEvent: {
		type: Boolean,
		default: !0
	},
	id: String,
	name: String,
	...x(["ariaLabel"])
}), z = {
	[w]: (e) => m(e) || S(e) || C(e),
	[T]: (e) => m(e) || S(e) || C(e)
}, B = [
	"id",
	"aria-label",
	"aria-labelledby"
], V = [
	"name",
	"disabled",
	"checked",
	"onChange"
], H = b(/* @__PURE__ */ c({
	name: "ElSegmented",
	__name: "segmented",
	props: R,
	emits: z,
	setup(c, { emit: m }) {
		let b = c, x = m, S = A("segmented"), C = M(), E = P(), D = N(), { formItem: j } = I(), { inputId: R, isLabeledByFormItem: z } = F(b, { formItemContext: j }), H = g(null), U = k(), W = p({
			isInit: !1,
			width: 0,
			height: 0,
			translateX: 0,
			translateY: 0,
			focusVisible: !1
		}), G = (e, t) => {
			let n = q(t);
			x(w, n), x(T, n), e.target.checked = n === b.modelValue;
		}, K = u(() => ({
			...L,
			...b.props
		})), q = (e) => o(e) ? e[K.value.value] : e, J = (e) => o(e) ? e[K.value.label] : e, Y = (e) => !!(D.value || o(e) && e[K.value.disabled]), X = (e) => b.modelValue === q(e), Z = (e) => b.options.find((t) => q(t) === e), Q = (e) => [
			S.e("item"),
			S.is("selected", X(e)),
			S.is("disabled", Y(e))
		], $ = () => {
			if (!H.value) return;
			let e = H.value.querySelector(".is-selected"), t = H.value.querySelector(".is-selected input");
			if (!e || !t) {
				W.width = 0, W.height = 0, W.translateX = 0, W.translateY = 0, W.focusVisible = !1;
				return;
			}
			W.isInit = !0, b.direction === "vertical" ? (W.height = e.offsetHeight, W.translateY = e.offsetTop) : (W.width = e.offsetWidth, W.translateX = e.offsetLeft);
			try {
				W.focusVisible = t.matches(":focus-visible");
			} catch {}
		}, ee = u(() => [
			S.b(),
			S.m(E.value),
			S.is("block", b.block)
		]), te = u(() => ({
			width: b.direction === "vertical" ? "100%" : `${W.width}px`,
			height: b.direction === "vertical" ? `${W.height}px` : "100%",
			transform: b.direction === "vertical" ? `translateY(${W.translateY}px)` : `translateX(${W.translateX}px)`,
			display: W.isInit ? "block" : "none"
		})), ne = u(() => [
			S.e("item-selected"),
			S.is("disabled", Y(Z(b.modelValue))),
			S.is("focus-visible", W.focusVisible)
		]), re = u(() => b.name || C.value);
		return O(H, $), e(U, $), e(() => b.options, $, {
			deep: !0,
			flush: "post"
		}), e(() => b.modelValue, () => {
			$(), b.validateEvent && j?.validate?.("change").catch(f);
		}, { flush: "post" }), (e, o) => c.options.length ? (i(), v("div", {
			key: 0,
			id: y(R),
			ref_key: "segmentedRef",
			ref: H,
			class: a(ee.value),
			role: "radiogroup",
			"aria-label": y(z) ? void 0 : c.ariaLabel || "segmented",
			"aria-labelledby": y(z) ? y(j).labelId : void 0
		}, [_("div", { class: a([y(S).e("group"), y(S).m(c.direction)]) }, [_("div", {
			style: s(te.value),
			class: a(ne.value)
		}, null, 6), (i(!0), v(h, null, l(c.options, (o, s) => (i(), v("label", {
			key: s,
			class: a(Q(o))
		}, [_("input", {
			class: a(y(S).e("item-input")),
			type: "radio",
			name: re.value,
			disabled: Y(o),
			checked: X(o),
			onChange: (e) => G(e, o)
		}, null, 42, V), _("div", { class: a(y(S).e("item-label")) }, [r(e.$slots, "default", { item: o }, () => [t(n(J(o)), 1)])], 2)], 2))), 128))], 2)], 10, B)) : d("v-if", !0);
	}
}));
//#endregion
export { H as ElSegmented, H as default, L as defaultProps, z as segmentedEmits, R as segmentedProps };
