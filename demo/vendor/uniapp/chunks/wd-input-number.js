globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, c as a, d as o, g as s, i as c, s as l, u, x as d } from "./vue.runtime.js";
import { b as f, y as p } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as m, c as h, i as g, o as _, r as v, s as y, t as b } from "./shared/wot-ui/common/props.ts.js";
import { t as x } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as S } from "./shared/wot-ui/common/interceptor.ts.js";
import { t as C } from "./shared/wot-ui/components/wd-form-item/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-input-number/types.ts
var w = {
	...b,
	modelValue: _(h),
	min: g(1),
	max: g(2 ** 53 - 1),
	step: g(1),
	stepStrictly: v(!1),
	precision: m(0),
	disabled: v(!1),
	disableInput: v(!1),
	disableMinus: v(!1),
	disablePlus: v(!1),
	withoutInput: v(!1),
	inputWidth: h,
	allowNull: v(!1),
	placeholder: y(""),
	adjustPosition: v(!0),
	beforeChange: Function,
	longPress: v(!1),
	immediateChange: v(!0),
	updateOnInit: v(!0),
	inputType: y("digit"),
	theme: y("default"),
	round: Boolean
}, T = [
	"type",
	"input-mode",
	"disabled",
	"value",
	"placeholder",
	"adjust-position"
], E = /* @__PURE__ */ s({
	name: "wd-input-number",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: w,
	emits: [
		"change",
		"focus",
		"blur",
		"update:modelValue"
	],
	setup(s, { emit: m }) {
		let h = s, { parent: g } = x(C), _ = m, v = r(E()), y = null, b = l(() => {
			let e = k(v.value);
			return h.disabled || e <= h.min || L(e, -h.step) < h.min;
		}), w = l(() => {
			let e = k(v.value);
			return h.disabled || e >= h.max || L(e, h.step) > h.max;
		});
		i(() => h.modelValue, (e) => {
			v.value = M(e);
		}), i([
			() => h.max,
			() => h.min,
			() => h.precision
		], () => {
			v.value = M(k(v.value));
		});
		function E() {
			if (!h.updateOnInit) return N(h.modelValue);
			let e = M(h.modelValue);
			return f(String(e), String(h.modelValue)) || _("update:modelValue", e), e;
		}
		function D(e) {
			if (!p(e)) return 0;
			let t = e.toString(), n = t.indexOf(".");
			return n === -1 ? 0 : t.length - n - 1;
		}
		function O(e) {
			let t = Number(h.precision);
			return Math.round(e * 10 ** t) / 10 ** t;
		}
		function k(e) {
			if (h.allowNull && (!p(e) || e === "")) return NaN;
			if (!p(e) || e === "") return h.min;
			let t = String(e);
			if (t.endsWith(".") && (t = t.slice(0, -1)), t.startsWith(".") && (t = "0" + t), t.startsWith("-.") && (t = "-0" + t.substring(1)), t === "-" || t === "") return h.min;
			let n = Number(t);
			return isNaN(n) && (n = h.min), A(n);
		}
		function A(e) {
			let t = e;
			if (h.stepStrictly) {
				let e = 10 ** D(h.step);
				t = Math.round(t / h.step) * e * h.step / e;
			}
			return t = h.stepStrictly ? j(t, h.min, h.max) : Math.min(Math.max(t, h.min), h.max), p(h.precision) && (t = O(t)), t;
		}
		function j(e, t, n) {
			if (e >= t && e <= n) return e;
			let r = 10 ** D(h.step);
			if (e < t) {
				let e = O(Math.ceil(t * r / (h.step * r)) * h.step * r / r);
				return e > n ? O(Math.floor(n * r / (h.step * r)) * h.step * r / r) : e;
			}
			if (e > n) {
				let e = O(Math.floor(n * r / (h.step * r)) * h.step * r / r);
				return e < t ? O(Math.ceil(t * r / (h.step * r)) * h.step * r / r) : e;
			}
			return e;
		}
		function M(e) {
			if (h.allowNull && (!p(e) || e === "")) return "";
			let t = k(e), n = Number(h.precision);
			return p(h.precision) ? n === 0 ? Number(t.toFixed(0)) : t.toFixed(n) : t;
		}
		function N(e) {
			if (h.allowNull && (!p(e) || e === "")) return "";
			if (!p(e) || e === "") return h.min;
			let t = Number(e);
			if (isNaN(t)) return h.min;
			let n = Number(h.precision);
			return p(h.precision) ? n === 0 ? Number(t.toFixed(0)) : t.toFixed(n) : t;
		}
		function P(e) {
			if (!e) return !1;
			let t = String(e);
			return t.endsWith(".") || t.startsWith(".") || t.startsWith("-.") || t === "-" || Number(h.precision) > 0 && t.indexOf(".") === -1;
		}
		function F(e) {
			if (!e) return "";
			let t = e.replace(/[^\d.-]/g, ""), n = t.startsWith("-");
			if (t = t.replace(/-/g, ""), n && (t = "-" + t), Number(h.precision) > 0) {
				let e = t.split(".");
				e.length > 2 && (t = e[0] + "." + e.slice(1).join(""));
			} else t = t.split(".")[0];
			return t.startsWith(".") ? "0" + t : t.startsWith("-.") ? "-0" + t.substring(1) : t;
		}
		function I(e) {
			if (h.allowNull && (!p(e) || e === "")) {
				if (f("", String(h.modelValue))) {
					v.value = "";
					return;
				}
				S(h.beforeChange, {
					args: [""],
					done: () => {
						v.value = "", _("update:modelValue", ""), _("change", { value: "" });
					}
				});
				return;
			}
			let t = k(e), n = M(e);
			if (f(String(t), String(h.modelValue))) {
				v.value = n;
				return;
			}
			S(h.beforeChange, {
				args: [t],
				done: () => {
					v.value = n, _("update:modelValue", t), _("change", { value: t });
				}
			});
		}
		function L(e, t) {
			let n = Number(e);
			if (isNaN(n)) return A(h.min);
			let r = 10 ** Math.max(D(n), D(t));
			return A((n * r + t * r) / r);
		}
		function R(e) {
			let t = e === "add" ? h.step : -h.step;
			t < 0 && (b.value || h.disableMinus) || t > 0 && (w.value || h.disablePlus) || I(L(v.value, t));
		}
		function z(e) {
			let t = e.detail.value || "";
			v.value = t, d(() => {
				if (t === "") {
					v.value = "", h.immediateChange && h.allowNull && I("");
					return;
				}
				let e = F(t);
				if (Number(h.precision) > 0 && P(e)) {
					v.value = e;
					return;
				}
				v.value = e, h.immediateChange && I(e);
			});
		}
		function B(e) {
			let t = e.detail.value || "";
			I(t), _("blur", { value: t }), g.value?.validateByTrigger("blur");
		}
		function V(e) {
			_("focus", e.detail);
		}
		function H(e) {
			G(), y = setTimeout(() => {
				R(e), H(e);
			}, 250);
		}
		function U(e) {
			h.longPress && (G(), y = setTimeout(() => {
				R(e), H(e);
			}, 600));
		}
		function W() {
			h.longPress && G();
		}
		function G() {
			y &&= (clearTimeout(y), null);
		}
		return (r, i) => (t(), o("div", {
			class: e(`wd-input-number wd-input-number--${r.theme} ${r.customClass} ${r.disabled ? "is-disabled" : ""} ${r.withoutInput ? "is-without-input" : ""} ${r.round ? "is-round" : ""}`),
			style: n(r.customStyle)
		}, [
			a("div", {
				class: e(`wd-input-number__action wd-input-number__sub ${b.value || r.disableMinus ? "is-disabled" : ""}`),
				onClick: i[0] ||= (e) => R("sub"),
				onTouchstart: i[1] ||= (e) => U("sub"),
				onTouchend: c(W, ["stop"])
			}, [...i[5] ||= [a("div", { class: "wd-input-number__action-divider" }, null, -1)]], 34),
			r.withoutInput ? u("", !0) : (t(), o("div", {
				key: 0,
				class: "wd-input-number__inner",
				onClick: i[2] ||= c(() => {}, ["stop"])
			}, [a("input", {
				class: "wd-input-number__input",
				style: n(`${r.inputWidth ? "width: " + r.inputWidth : ""}`),
				type: r.inputType,
				"input-mode": r.precision ? "decimal" : "numeric",
				disabled: r.disabled || r.disableInput,
				value: String(v.value),
				placeholder: r.placeholder,
				"adjust-position": r.adjustPosition,
				onInput: z,
				onFocus: V,
				onBlur: B
			}, null, 44, T)])),
			a("div", {
				class: e(`wd-input-number__action wd-input-number__add ${w.value || r.disablePlus ? "is-disabled" : ""}`),
				onClick: i[3] ||= (e) => R("add"),
				onTouchstart: i[4] ||= (e) => U("add"),
				onTouchend: c(W, ["stop"])
			}, [...i[6] ||= [a("div", { class: "wd-input-number__action-divider" }, null, -1)]], 34)
		], 6));
	}
});
//#endregion
export { E as default };
