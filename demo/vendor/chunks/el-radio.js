globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, A as n, C as r, Ft as i, G as a, H as o, J as s, M as c, Mt as l, N as u, Pt as d, T as f, U as p, W as m, _ as h, at as g, bt as _, ct as v, d as y, gt as b, jt as x, nt as S, p as ee, s as C, ut as w, v as T, x as E, y as te, yt as D, z as ne } from "./vue.runtime.js";
import { i as O, t as k } from "./shared/element-plus/utils/vue/install.js";
import { t as re } from "./shared/lodash/omit.js";
import { t as ie } from "./shared/lodash/isEqual.js";
import { t as A } from "./shared/element-plus/hooks/use-aria.js";
import { a as j, i as M, t as N } from "./shared/element-plus/utils/types.js";
import { r as P, t as F } from "./shared/element-plus/constants/event.js";
import { n as I, r as L } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as R } from "./shared/element-plus/hooks/use-namespace.js";
import { r as z } from "./shared/element-plus/hooks/use-size.js";
import { t as ae } from "./shared/element-plus/hooks/use-id.js";
import { n as oe, r as se } from "./el-form/hooks/use-form-common-props.js";
import { n as ce, t as le } from "./el-form/hooks/use-form-item.js";
import { t as ue } from "./shared/element-plus/hooks/use-deprecated.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/radio/src/radio.mjs
var B = I({
	modelValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	size: z,
	disabled: {
		type: Boolean,
		default: void 0
	},
	label: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	value: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	name: {
		type: String,
		default: void 0
	}
}), V = I({
	...B,
	border: Boolean
}), H = {
	[P]: (e) => x(e) || M(e) || N(e),
	[F]: (e) => x(e) || M(e) || N(e)
}, U = {
	modelValue: void 0,
	disabled: void 0,
	label: void 0,
	value: void 0,
	name: void 0,
	border: !1
}, W = Symbol("radioGroupKey"), G = (e, t) => {
	let r = w(), i = n(W, void 0), a = h(() => !!i), o = h(() => j(e.value) ? e.label : e.value), s = h({
		get() {
			return a.value ? i.modelValue : e.modelValue;
		},
		set(n) {
			a.value ? i.changeEvent(n) : t && t("update:modelValue", n), r.value.checked = e.modelValue === o.value;
		}
	}), c = se(h(() => i?.size)), l = oe(h(() => i?.disabled)), u = w(!1), d = h(() => l.value || a.value && s.value !== o.value ? -1 : 0);
	return ue({
		from: "label act as value",
		replacement: "value",
		version: "3.0.0",
		scope: "el-radio",
		ref: "https://element-plus.org/en-US/component/radio.html"
	}, h(() => a.value && j(e.value))), {
		radioRef: r,
		isGroup: a,
		radioGroup: i,
		focus: u,
		size: c,
		disabled: l,
		tabIndex: d,
		modelValue: s,
		actualValue: o
	};
}, de = [
	"value",
	"name",
	"disabled",
	"checked"
], K = /* @__PURE__ */ f({
	name: "ElRadio",
	__name: "radio",
	props: V,
	emits: H,
	setup(e, { emit: t }) {
		let n = e, s = t, c = R("radio"), { radioRef: d, radioGroup: f, focus: p, size: m, disabled: h, modelValue: _, actualValue: v } = G(n, s);
		function b() {
			u(() => s(F, _.value));
		}
		return (t, n) => (o(), E("label", { class: l([
			D(c).b(),
			D(c).is("disabled", D(h)),
			D(c).is("focus", D(p)),
			D(c).is("bordered", e.border),
			D(c).is("checked", D(_) === D(v)),
			D(c).m(D(m))
		]) }, [T("span", { class: l([
			D(c).e("input"),
			D(c).is("disabled", D(h)),
			D(c).is("checked", D(_) === D(v))
		]) }, [S(T("input", {
			ref_key: "radioRef",
			ref: d,
			"onUpdate:modelValue": n[0] ||= (e) => g(_) ? _.value = e : null,
			class: l(D(c).e("original")),
			value: D(v),
			name: e.name || D(f)?.name,
			disabled: D(h),
			checked: D(_) === D(v),
			type: "radio",
			onFocus: n[1] ||= (e) => p.value = !0,
			onBlur: n[2] ||= (e) => p.value = !1,
			onChange: b,
			onClick: n[3] ||= y(() => {}, ["stop"])
		}, null, 42, de), [[C, D(_)]]), T("span", { class: l(D(c).e("inner")) }, null, 2)], 2), T("span", {
			class: l(D(c).e("label")),
			onKeydown: n[4] ||= y(() => {}, ["stop"])
		}, [a(t.$slots, "default", {}, () => [r(i(e.label), 1)])], 34)], 2));
	}
}), q = I({ ...B }), fe = {
	modelValue: void 0,
	disabled: void 0,
	label: void 0,
	value: void 0,
	name: void 0
}, pe = [
	"value",
	"name",
	"disabled"
], J = /* @__PURE__ */ f({
	name: "ElRadioButton",
	__name: "radio-button",
	props: q,
	setup(e) {
		let t = e, n = R("radio"), { radioRef: s, focus: c, size: u, disabled: f, modelValue: p, radioGroup: m, actualValue: _ } = G(t), v = h(() => ({
			backgroundColor: m?.fill || "",
			borderColor: m?.fill || "",
			boxShadow: m?.fill ? `-1px 0 0 0 ${m.fill}` : "",
			color: m?.textColor || ""
		}));
		return (t, h) => (o(), E("label", { class: l([
			D(n).b("button"),
			D(n).is("active", D(p) === D(_)),
			D(n).is("disabled", D(f)),
			D(n).is("focus", D(c)),
			D(n).bm("button", D(u))
		]) }, [S(T("input", {
			ref_key: "radioRef",
			ref: s,
			"onUpdate:modelValue": h[0] ||= (e) => g(p) ? p.value = e : null,
			class: l(D(n).be("button", "original-radio")),
			value: D(_),
			type: "radio",
			name: e.name || D(m)?.name,
			disabled: D(f),
			onFocus: h[1] ||= (e) => c.value = !0,
			onBlur: h[2] ||= (e) => c.value = !1,
			onClick: h[3] ||= y(() => {}, ["stop"])
		}, null, 42, pe), [[C, D(p)]]), T("span", {
			class: l(D(n).be("button", "inner")),
			style: d(D(p) === D(_) ? v.value : {}),
			onKeydown: h[4] ||= y(() => {}, ["stop"])
		}, [a(t.$slots, "default", {}, () => [r(i(e.label), 1)])], 38)], 2));
	}
}), Y = {
	label: "label",
	value: "value",
	disabled: "disabled"
}, X = I({
	id: {
		type: String,
		default: void 0
	},
	size: z,
	disabled: {
		type: Boolean,
		default: void 0
	},
	modelValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	fill: {
		type: String,
		default: ""
	},
	textColor: {
		type: String,
		default: ""
	},
	name: {
		type: String,
		default: void 0
	},
	validateEvent: {
		type: Boolean,
		default: !0
	},
	options: { type: L(Array) },
	props: {
		type: L(Object),
		default: () => Y
	},
	type: {
		type: String,
		values: ["radio", "button"],
		default: "radio"
	},
	...A(["ariaLabel"])
}), Z = H, me = {
	id: void 0,
	disabled: void 0,
	modelValue: void 0,
	fill: "",
	textColor: "",
	name: void 0,
	validateEvent: !0,
	props: () => Y,
	type: "radio"
}, he = [
	"id",
	"aria-label",
	"aria-labelledby"
], Q = /* @__PURE__ */ f({
	name: "ElRadioGroup",
	__name: "radio-group",
	props: X,
	emits: Z,
	setup(e, { emit: n }) {
		let r = e, i = n, d = R("radio"), f = ae(), g = w(), { formItem: y } = le(), { inputId: x, isLabeledByFormItem: S } = ce(r, { formItemContext: y }), C = (e) => {
			i(P, e), u(() => i(F, e));
		};
		ne(() => {
			let e = g.value.querySelectorAll("[type=radio]"), t = e[0];
			!Array.from(e).some((e) => e.checked) && t && (t.tabIndex = 0);
		});
		let T = h(() => r.name || f.value), O = h(() => ({
			...Y,
			...r.props
		})), k = (e) => {
			let { label: t, value: n, disabled: r } = O.value, i = {
				label: e[t],
				value: e[n],
				disabled: e[r]
			};
			return {
				...re(e, [
					t,
					n,
					r
				]),
				...i
			};
		}, A = h(() => r.type === "button" ? J : K);
		return p(W, v({
			...b(r),
			changeEvent: C,
			name: T
		})), t(() => r.modelValue, (e, t) => {
			r.validateEvent && !ie(e, t) && y?.validate("change").catch(_);
		}), (t, n) => (o(), E("div", {
			id: D(x),
			ref_key: "radioGroupRef",
			ref: g,
			class: l(D(d).b("group")),
			role: "radiogroup",
			"aria-label": D(S) ? void 0 : e.ariaLabel || "radio-group",
			"aria-labelledby": D(S) ? D(y).labelId : void 0
		}, [a(t.$slots, "default", {}, () => [(o(!0), E(ee, null, m(e.options, (e, t) => (o(), te(s(A.value), c({ key: t }, { ref_for: !0 }, k(e)), null, 16))), 128))])], 10, he));
	}
}), ge = /* @__PURE__ */ e({
	ElRadio: () => $,
	ElRadioButton: () => ve,
	ElRadioGroup: () => _e,
	default: () => $,
	radioButtonProps: () => q,
	radioButtonPropsDefaults: () => fe,
	radioDefaultProps: () => Y,
	radioEmits: () => H,
	radioGroupEmits: () => Z,
	radioGroupKey: () => W,
	radioGroupProps: () => X,
	radioGroupPropsDefaults: () => me,
	radioProps: () => V,
	radioPropsBase: () => B,
	radioPropsDefaults: () => U
}), $ = k(K, {
	RadioButton: J,
	RadioGroup: Q
}), _e = O(Q), ve = O(J);
//#endregion
export { ge as n, $ as t };
