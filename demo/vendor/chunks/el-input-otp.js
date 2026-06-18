globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, Dt as t, G as n, H as r, J as i, Mt as a, T as o, W as s, _ as c, b as l, bt as u, jt as d, p as f, ut as p, v as m, x as h, y as g, yt as _ } from "./vue.runtime.js";
import { t as v } from "./shared/element-plus/utils/vue/install.js";
import { r as y, t as b } from "./shared/element-plus/constants/event.js";
import { h as x } from "./shared/vueuse.js";
import { n as S } from "./shared/element-plus/utils/raf.js";
import { r as C } from "./shared/element-plus/hooks/use-namespace.js";
import { a as w, n as T } from "./shared/element-plus/constants/aria.js";
import { n as E } from "./el-form/hooks/use-form-common-props.js";
import { n as D, t as O } from "./el-form/hooks/use-form-item.js";
import { n as k } from "./shared/element-plus/hooks/use-locale.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input-otp/src/input-otp.mjs
var A = {
	[y]: (e) => d(e),
	[b]: (e) => d(e),
	finish: (e) => d(e),
	focus: (e) => e instanceof FocusEvent,
	blur: (e) => e instanceof FocusEvent
}, j = [
	"id",
	"aria-label",
	"aria-labelledby"
], M = [
	"value",
	"type",
	"disabled",
	"readonly",
	"inputmode",
	"aria-label",
	"onClick",
	"onKeydown",
	"onInput"
], N = v(/* @__PURE__ */ o({
	name: "ElInputOtp",
	__name: "input-otp",
	props: {
		modelValue: {
			type: [String, Number],
			required: !1
		},
		length: {
			type: Number,
			required: !1,
			default: 6
		},
		validator: {
			type: Function,
			required: !1,
			default: () => !0
		},
		inputmode: {
			type: null,
			required: !1
		},
		type: {
			type: String,
			required: !1,
			default: "outlined"
		},
		size: {
			type: null,
			required: !1,
			default: "default"
		},
		mask: {
			type: Boolean,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		readonly: {
			type: Boolean,
			required: !1
		},
		id: {
			type: String,
			required: !1
		},
		validateEvent: {
			type: Boolean,
			required: !1,
			default: !0
		},
		separator: {
			type: [
				String,
				Object,
				Function
			],
			required: !1
		},
		ariaLabel: {
			type: String,
			required: !1
		}
	},
	emits: A,
	setup(o, { expose: d, emit: v }) {
		let A = o, N = v, P = c(() => {
			let e = String(A.modelValue ?? "");
			return Array.from({ length: A.length }, (t, n) => e.charAt(n));
		}), F = c(() => {
			let { separator: e } = A, n = t(e) ? e : () => e;
			return Array.from({ length: A.length - 1 }, (e, t) => n(t));
		}), I = p(P.value), L = p(!1), R = p([]), z = C("input-otp"), { t: B } = k(), { formItem: V } = O(), { inputId: H, isLabeledByFormItem: U } = D(A, { formItemContext: V }), W = E(), G = A.modelValue, K = (e) => {
			let t = I.value.findIndex((t, n) => !t && n <= e);
			return t === -1 ? e : t;
		}, q = (e) => {
			R.value?.includes(e.relatedTarget) || (L.value = !0, N("focus", e));
		}, J = (e) => {
			R.value?.includes(e.relatedTarget) || (L.value = !1, N("blur", e), A.validateEvent && V?.validate?.("blur").catch(u));
		}, Y = (e = !0) => {
			let t = I.value.join("").slice(0, A.length);
			t !== A.modelValue && (N(y, t), e && t.length === A.length && N("finish", t));
		}, X = (e, t) => {
			let n = T(e), r = !0;
			switch (n) {
				case w.backspace:
					if (A.readonly) break;
					I.value[t] = "", $(t - 1), Y();
					break;
				case w.delete:
					if (A.readonly) break;
					I.value[t] = "", $(t), Y();
					break;
				case w.up:
				case w.left:
					$(t - 1);
					break;
				case w.down:
				case w.right:
					$(t + 1);
					break;
				default: r = !1;
			}
			r && e.preventDefault();
		}, Z = (e, t) => {
			let n = e.target, r = K(t), i = r + 1, a = n.value;
			if (a.length > 1) {
				let e = Q(a, r);
				n.value = I.value[t] ?? "", e.forEach((e, t) => I.value[r + t] = e), $(r + e.length), Y();
				return;
			}
			A.validator(a, r) || (n.value = I.value[t] ?? "", a = n.value, i = r), I.value[r] = a, r !== t && (n.value = I.value[t] ?? ""), $(i), Y();
		}, Q = (e, t = 0) => {
			let n = `${e ?? ""}`.split(""), r = [];
			for (let e of n) {
				if (r.length + t >= A.length) break;
				A.validator(e, r.length + t) && r.push(e);
			}
			return r;
		}, $ = (e = 0) => {
			let t = x(e, 0, A.length - 1), n = R.value?.[t];
			document.activeElement !== n && n?.focus(), S(() => {
				!A.readonly && document.activeElement === n && n?.select();
			});
		};
		return e(() => A.modelValue, () => {
			I.value = P.value, A.validateEvent && V?.validate?.("change").catch(u);
		}), e(() => A.length, () => {
			I.value = P.value, Y(!1);
		}), e(L, (e) => {
			if (e) {
				G = A.modelValue;
				return;
			}
			G !== A.modelValue && N(b, A.modelValue);
		}), d({
			inputRefs: R,
			focus: $,
			blur: () => {
				(R.value?.find((e) => document.activeElement === e))?.blur();
			}
		}), (e, t) => (r(), h("div", {
			id: _(H),
			class: a([
				_(z).b(),
				_(z).m(o.size),
				_(z).m(o.type),
				_(z).is("disabled", _(W))
			]),
			role: "group",
			"aria-label": _(U) ? void 0 : o.ariaLabel || _(B)("el.inputOTP.groupLabel"),
			"aria-labelledby": _(U) ? _(V)?.labelId : void 0
		}, [(r(!0), h(f, null, s(o.length, (t, s) => (r(), h(f, { key: s }, [m("label", { class: a(_(z).e("input-field")) }, [m("input", {
			ref_for: !0,
			ref_key: "inputRefs",
			ref: R,
			value: I.value[s],
			class: a(_(z).e("input")),
			type: o.mask ? "password" : "text",
			disabled: _(W),
			readonly: o.readonly,
			inputmode: o.inputmode,
			autocomplete: "one-time-code",
			"aria-label": _(B)("el.inputOTP.defaultLabel", { index: s + 1 }),
			onFocus: q,
			onBlur: J,
			onClick: (e) => $(s),
			onKeydown: (e) => X(e, s),
			onInput: (e) => Z(e, s)
		}, null, 42, M)], 2), (e.$slots.separator || F.value[s]) && s < o.length - 1 ? n(e.$slots, "separator", {
			key: 0,
			index: s
		}, () => [(r(), g(i(() => F.value[s])))]) : l("v-if", !0)], 64))), 128))], 10, j));
	}
}));
//#endregion
export { N as ElInputOtp, N as default, A as inputOtpEmits };
