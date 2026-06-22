globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, Ft as n, H as r, J as i, Mt as a, Ot as o, Pt as s, T as c, Tt as l, W as ee, _ as u, b as te, jt as d, l as f, nt as p, ot as m, p as h, tt as g, ut as _, w as v, x as y, y as b, yt as x } from "./vue.runtime.js";
import { t as S } from "./shared/element-plus/utils/vue/install.js";
import { t as C } from "./shared/lodash/clamp.js";
import { t as w } from "./shared/element-plus/hooks/use-aria.js";
import { i as T } from "./shared/element-plus/utils/types.js";
import { r as E, t as D } from "./shared/element-plus/constants/event.js";
import { n as O, r as k } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as A } from "./shared/element-plus/hooks/use-namespace.js";
import { I as j, L as M } from "./shared/element-plus-icons.js";
import { a as N } from "./shared/element-plus/utils/vue/icon.js";
import { t as P } from "./el-icon.js";
import { t as F } from "./shared/element-plus/utils/typescript.js";
import { r as I } from "./shared/element-plus/hooks/use-size.js";
import { a as L, n as ne } from "./shared/element-plus/constants/aria.js";
import { n as re, r as ie } from "./el-form/hooks/use-form-common-props.js";
import { n as ae } from "./el-form/constants.js";
import { n as oe } from "./el-form/hooks/use-form-item.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/rate/src/rate.mjs
var R = O({
	modelValue: {
		type: Number,
		default: 0
	},
	id: {
		type: String,
		default: void 0
	},
	lowThreshold: {
		type: Number,
		default: 2
	},
	highThreshold: {
		type: Number,
		default: 4
	},
	max: {
		type: Number,
		default: 5
	},
	colors: {
		type: k([Array, Object]),
		default: () => F([
			"",
			"",
			""
		])
	},
	voidColor: {
		type: String,
		default: ""
	},
	disabledVoidColor: {
		type: String,
		default: ""
	},
	icons: {
		type: k([Array, Object]),
		default: () => [
			M,
			M,
			M
		]
	},
	voidIcon: {
		type: N,
		default: () => j
	},
	disabledVoidIcon: {
		type: N,
		default: () => M
	},
	disabled: {
		type: Boolean,
		default: void 0
	},
	allowHalf: Boolean,
	showText: Boolean,
	showScore: Boolean,
	textColor: {
		type: String,
		default: ""
	},
	texts: {
		type: k(Array),
		default: () => F([
			"Extremely bad",
			"Disappointed",
			"Fair",
			"Satisfied",
			"Surprise"
		])
	},
	scoreTemplate: {
		type: String,
		default: "{value}"
	},
	size: I,
	clearable: Boolean,
	...w(["ariaLabel"])
}), z = {
	[D]: (e) => T(e),
	[E]: (e) => T(e)
}, se = [
	"id",
	"aria-label",
	"aria-labelledby",
	"aria-valuenow",
	"aria-valuetext",
	"aria-valuemax",
	"tabindex",
	"aria-disabled"
], ce = ["onMousemove", "onClick"], B = S(/* @__PURE__ */ c({
	name: "ElRate",
	__name: "rate",
	props: R,
	emits: z,
	setup(c, { expose: S, emit: w }) {
		function T(e, t) {
			let n = (e) => o(e), r = t[Object.keys(t).map((e) => +e).filter((r) => {
				let i = t[r];
				return n(i) && i.excluded ? e < r : e <= r;
			}).sort((e, t) => e - t)[0]];
			return n(r) && r.value || r;
		}
		let O = c, k = w, j = t(ae, void 0), M = ie(), N = A("rate"), { inputId: F, isLabeledByFormItem: I } = oe(O, { formItemContext: j }), R = _(C(O.modelValue, 0, O.max)), z = _(-1), B = _(!0), V = _([]), H = u(() => V.value.map((e) => e.$el.clientWidth)), U = u(() => [N.b(), N.m(M.value)]), W = re(), le = u(() => N.cssVarBlock({
			"void-color": O.voidColor,
			"disabled-void-color": O.disabledVoidColor,
			"fill-color": q.value
		})), G = u(() => {
			let e = "";
			return O.showScore ? e = O.scoreTemplate.replace(/\{\s*value\s*\}/, W.value ? `${O.modelValue}` : `${R.value}`) : O.showText && (e = O.texts[Math.ceil(R.value) - 1]), e;
		}), K = u(() => O.modelValue * 100 - Math.floor(O.modelValue) * 100), ue = u(() => l(O.colors) ? {
			[O.lowThreshold]: O.colors[0],
			[O.highThreshold]: {
				value: O.colors[1],
				excluded: !0
			},
			[O.max]: O.colors[2]
		} : O.colors), q = u(() => {
			let e = T(R.value, ue.value);
			return o(e) ? "" : e;
		}), de = u(() => {
			let e = "";
			return W.value ? e = `${K.value}%` : O.allowHalf && (e = "50%"), {
				color: q.value,
				width: e
			};
		}), J = u(() => {
			let e = l(O.icons) ? [...O.icons] : { ...O.icons };
			return e = m(e), l(e) ? {
				[O.lowThreshold]: e[0],
				[O.highThreshold]: {
					value: e[1],
					excluded: !0
				},
				[O.max]: e[2]
			} : e;
		}), fe = u(() => T(O.modelValue, J.value)), Y = u(() => W.value ? d(O.disabledVoidIcon) ? O.disabledVoidIcon : m(O.disabledVoidIcon) : d(O.voidIcon) ? O.voidIcon : m(O.voidIcon)), pe = u(() => T(R.value, J.value));
		function X(e) {
			let t = W.value && K.value > 0 && e - 1 < O.modelValue && e > O.modelValue, n = O.allowHalf && B.value && e - .5 <= R.value && e > R.value;
			return t || n;
		}
		function Z(e) {
			O.clearable && e === O.modelValue && (e = 0), k(E, e), O.modelValue !== e && k(D, e);
		}
		function me(e) {
			W.value || (O.allowHalf && B.value ? Z(R.value) : Z(e));
		}
		function he(e) {
			if (W.value) return;
			let t = ne(e), n = O.allowHalf ? .5 : 1, r = R.value;
			switch (t) {
				case L.up:
				case L.right:
					r += n;
					break;
				case L.left:
				case L.down:
					r -= n;
					break;
			}
			if (r = C(r, 0, O.max), r !== R.value) return e.stopPropagation(), e.preventDefault(), k(E, r), k(D, r), r;
		}
		function Q(e, t) {
			W.value || (O.allowHalf && t ? (B.value = t.offsetX * 2 <= H.value[e - 1], R.value = B.value ? e - .5 : e) : R.value = e, z.value = e);
		}
		function $() {
			W.value || (O.allowHalf && (B.value = O.modelValue !== Math.floor(O.modelValue)), R.value = C(O.modelValue, 0, O.max), z.value = -1);
		}
		return e(() => O.modelValue, (e) => {
			R.value = C(e, 0, O.max), B.value = O.modelValue !== Math.floor(O.modelValue);
		}), O.modelValue || k(E, 0), S({
			setCurrentValue: Q,
			resetCurrentValue: $
		}), (e, t) => (r(), y("div", {
			id: x(F),
			class: a([U.value, x(N).is("disabled", x(W))]),
			role: "slider",
			"aria-label": x(I) ? void 0 : c.ariaLabel || "rating",
			"aria-labelledby": x(I) ? x(j)?.labelId : void 0,
			"aria-valuenow": R.value,
			"aria-valuetext": G.value || void 0,
			"aria-valuemin": "0",
			"aria-valuemax": c.max,
			style: s(le.value),
			tabindex: x(W) ? void 0 : 0,
			"aria-disabled": x(W),
			onKeydown: he
		}, [(r(!0), y(h, null, ee(c.max, (e, t) => (r(), y("span", {
			key: t,
			class: a(x(N).e("item")),
			onMousemove: (t) => Q(e, t),
			onMouseleave: $,
			onClick: (t) => me(e)
		}, [v(x(P), {
			ref_for: !0,
			ref_key: "iconRefs",
			ref: V,
			class: a([
				x(N).e("icon"),
				{ hover: z.value === e },
				x(N).is("active", e <= R.value),
				x(N).is("focus-visible", e === Math.ceil(R.value || 1))
			])
		}, {
			default: g(() => [
				p((r(), b(i(pe.value), null, null, 512)), [[f, !X(e) && e <= R.value]]),
				p((r(), b(i(Y.value), null, null, 512)), [[f, !X(e) && e > R.value]]),
				p((r(), b(i(Y.value), { class: a([x(N).em("decimal", "box")]) }, null, 8, ["class"])), [[f, X(e)]]),
				p(v(x(P), {
					style: s(de.value),
					class: a([x(N).e("icon"), x(N).e("decimal")])
				}, {
					default: g(() => [(r(), b(i(fe.value)))]),
					_: 1
				}, 8, ["style", "class"]), [[f, X(e)]])
			]),
			_: 2
		}, 1032, ["class"])], 42, ce))), 128)), c.showText || c.showScore ? (r(), y("span", {
			key: 0,
			class: a(x(N).e("text")),
			style: s({ color: c.textColor })
		}, n(G.value), 7)) : te("v-if", !0)], 46, se));
	}
}));
//#endregion
export { B as ElRate, B as default, z as rateEmits, R as rateProps };
