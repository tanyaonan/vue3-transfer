globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, T as a, U as o, _ as ee, a as te, c as s, d as c, g as l, h as u, i as d, j as ne, k as re, s as f, u as p } from "./vue.runtime.js";
import { L as ie, b as m, g as h, j as g, l as _, p as v, y } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as b, r as x, s as S, t as C } from "./shared/wot-ui/common/props.ts.js";
import { t as ae } from "./shared/wot-ui/composables/useTouch.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-slider/types.ts
var w = {
	...C,
	modelValue: {
		type: [Number, Array],
		default: 0
	},
	min: b(0),
	max: b(100),
	step: b(1),
	range: x(!1),
	vertical: x(!1),
	theme: S("default"),
	disabled: x(!1),
	showExtremeValue: x(!1),
	popoverVisible: S("normal"),
	marks: [Array, Object],
	activeColor: S(""),
	inactiveColor: S("")
}, oe = {
	key: 0,
	class: /*@__PURE__*/ e("wd-slider__value wd-slider__value--min")
}, se = ["id"], ce = ["id"], le = { class: "wd-slider__dot-popover-text" }, ue = { class: "wd-slider__dot-slider" }, T = { class: "wd-slider__dot-popover-text" }, de = { class: "wd-slider__dot-slider" }, E = {
	key: 1,
	class: /*@__PURE__*/ e("wd-slider__value wd-slider__value--max")
}, D = /* @__PURE__ */ l({
	name: "wd-slider",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: w,
	emits: [
		"dragstart",
		"dragmove",
		"dragend",
		"change",
		"update:modelValue"
	],
	setup(l, { expose: b, emit: x }) {
		let S = l, C = x, w = r(`wd-slider-${ie()}`), D = r(`${w.value}-track`), O = ae(), k = r(0), A = r(!1), { proxy: j } = ee(), M = r(0), N = r(0), P = r(G()), F = f(() => S.max - S.min), I = f(() => S.step <= 0 ? (console.warn("[wot ui] warning(wd-slider): step must be greater than 0"), 1) : S.step), L = f(() => S.range && h(P.value) ? K(P.value) : [P.value, 0]), R = f(() => y(S.marks)), z = f(() => {
			if (!S.marks) return [];
			let e = [], t = {};
			return h(S.marks) ? e = S.marks : (e = Object.keys(S.marks).map(Number), t = S.marks), e.map((e) => ({
				val: e,
				label: y(t[e]) ? t[e] : String(e),
				position: F.value === 0 ? 0 : (e - S.min) / F.value * 100
			}));
		}), B = f(() => {
			let e = ["wd-slider"];
			return e.push(`wd-slider--theme-${S.theme}`), S.disabled && e.push("is-disabled"), S.vertical ? e.push("wd-slider--vertical") : e.push("wd-slider--horizontal"), R.value && e.push("wd-slider--marks"), S.showExtremeValue && e.push("wd-slider--with-extreme"), S.range && e.push("is-range"), S.customClass && e.push(S.customClass), e.join(" ");
		}), V = f(() => S.customStyle || ""), fe = f(() => {
			let e = ["wd-slider__bar", `wd-slider__bar--${S.theme}`];
			return S.disabled && e.push("is-disabled"), e.join(" ");
		}), H = f(() => {
			let e = {};
			return S.inactiveColor && (e.background = S.inactiveColor), g(e);
		}), pe = f(() => {
			let e = ["wd-slider__line", `wd-slider__line--${S.theme}`];
			return S.range || e.push("wd-slider__line--single"), S.disabled && e.push("is-disabled"), e.join(" ");
		}), me = f(() => {
			let e = {};
			if (F.value === 0) return g(e);
			let t = S.vertical ? "height" : "width", n = S.vertical ? "top" : "left";
			if (S.range) {
				let [r, i] = L.value, a = (r - S.min) / F.value * 100, o = (i - r) / F.value * 100;
				e[n] = `${a}%`, e[t] = `${o}%`;
			} else {
				let r = (P.value - S.min) / F.value * 100;
				e[n] = "0", e[t] = `${r}%`;
			}
			return S.activeColor && (e.background = S.activeColor), g(e);
		});
		i(() => S.modelValue, (e) => {
			m(e, P.value) || (P.value = G());
		}, { deep: !0 }), i(P, (e) => {
			C("update:modelValue", e);
		}), a(() => {
			W();
		});
		function U(e, t, n) {
			return Math.min(Math.max(e, t), n);
		}
		function W() {
			v(`#${D.value}`, !1, j).then((e) => {
				S.vertical ? M.value = Number(e.height) : M.value = Number(e.width);
			});
		}
		function he(e) {
			return S.vertical ? Number(y(e.detail?.y) ? e.detail?.y : y(e.clientY) ? e.clientY : y(e.touches?.[0]?.clientY) ? e.touches?.[0]?.clientY : 0) : Number(y(e.detail?.x) ? e.detail?.x : y(e.clientX) ? e.clientX : y(e.touches?.[0]?.clientX) ? e.touches?.[0]?.clientX : 0);
		}
		function G() {
			return S.range ? h(S.modelValue) ? K(S.modelValue) : [S.min, S.max] : U(S.modelValue, S.min, S.max);
		}
		function K(e) {
			if (!Array.isArray(e) || e.length < 2) return console.warn("[wot ui] warning(wd-slider): range value should be an array with at least 2 elements"), [S.min, S.max];
			let t = U(e[0], S.min, S.max), n = U(e[1], S.min, S.max);
			return t > n ? [n, t] : [t, n];
		}
		function q(e) {
			e = U(e, S.min, S.max);
			let t = Math.round((e - S.min) / I.value);
			return parseFloat((S.min + t * I.value).toFixed(10));
		}
		function J(e) {
			let t = _(e);
			t = S.range && h(t) ? K(t).map((e) => q(e)) : q(t), m(t, P.value) || (P.value = t);
		}
		function ge(e) {
			return M.value === 0 ? S.min : e / M.value * F.value + S.min;
		}
		function _e(e) {
			let t = ["wd-slider__scale-item", `wd-slider__scale-item--${S.theme}`];
			return (Array.isArray(P.value) ? e >= P.value[0] && e <= P.value[1] : e <= P.value) && t.push("is-active"), S.disabled && t.push("is-disabled"), t.join(" ");
		}
		function ve(e) {
			return S.vertical ? `top: ${e}%;` : `left: ${e}%;`;
		}
		function Y(e) {
			if (!S.range) return P.value;
			let t = L.value;
			return y(t[e]) ? t[e] : t[0];
		}
		function X(e) {
			let t = S.popoverVisible;
			return t === "always" ? !0 : t === "normal" ? A.value && k.value === e : !1;
		}
		function Z(e, t) {
			S.disabled || (k.value = t, A.value = !0, O.touchStart(e), N.value = _(P.value), C("dragstart", { value: P.value }));
		}
		function Q(e) {
			if (S.disabled) return;
			O.touchMove(e);
			let t = (S.vertical ? O.deltaY.value : O.deltaX.value) / M.value * F.value, n = _(N.value);
			S.range && h(n) ? n[k.value] += t : n += t, J(n), C("dragmove", { value: P.value });
		}
		function $() {
			S.disabled || (A.value = !1, C("dragend", { value: P.value }), C("change", P.value));
		}
		function ye(e) {
			S.disabled || v(`#${D.value}`, !1, j).then((t) => {
				be(he(e) - (S.vertical ? Number(t.top) : Number(t.left)));
			});
		}
		function be(e) {
			let t = q(ge(e));
			if (S.range) {
				let [e, n] = L.value, r = Math.abs(t - e), i = Math.abs(t - n), a = [...P.value];
				r <= i ? a[0] = t : a[1] = t, J(a);
			} else J(t);
			C("change", P.value);
		}
		return b({ initSlider: W }), (r, i) => {
			let a = ne("wd-icon");
			return t(), c("div", {
				class: e(B.value),
				style: n(V.value)
			}, [
				r.showExtremeValue ? (t(), c("div", oe, o(r.min), 1)) : p("", !0),
				s("div", {
					id: w.value,
					class: e(fe.value),
					style: n(H.value),
					onClick: d(ye, ["stop"])
				}, [s("div", {
					id: D.value,
					class: "wd-slider__track"
				}, [R.value ? (t(!0), c(te, { key: 0 }, re(z.value, (r, i) => (t(), c("div", {
					key: i,
					class: e(_e(r.val)),
					style: n(ve(r.position))
				}, [r.label ? (t(), c("div", {
					key: 0,
					class: e(`wd-slider__scale-desc ${S.theme === "capsule" ? "wd-slider__scale-desc--capsule" : "wd-slider__scale-desc--default"}`)
				}, o(r.label), 3)) : p("", !0)], 6))), 128)) : p("", !0)], 8, ce), s("div", {
					class: e(pe.value),
					style: n(me.value)
				}, [s("div", {
					class: e(`wd-slider__dot ${r.range ? "wd-slider__dot--left" : ""}`),
					onTouchstart: i[0] ||= d((e) => Z(e, 0), ["stop"]),
					onTouchmove: d(Q, ["stop", "prevent"]),
					onTouchend: d($, ["stop"]),
					onTouchcancel: d($, ["stop"])
				}, [r.popoverVisible === "never" ? p("", !0) : (t(), c("div", {
					key: 0,
					class: e(["wd-slider__dot-popover", { "is-visible": X(0) }])
				}, [s("span", le, o(Y(0)), 1), i[2] ||= s("div", { class: "wd-slider__dot-popover-arrow" }, null, -1)], 2)), s("div", ue, [u(a, {
					name: "multiple-horizontal",
					size: "14px",
					color: "#868a9c"
				})])], 34), r.range ? (t(), c("div", {
					key: 0,
					class: e("wd-slider__dot wd-slider__dot--right"),
					onTouchstart: i[1] ||= d((e) => Z(e, 1), ["stop"]),
					onTouchmove: d(Q, ["stop", "prevent"]),
					onTouchend: d($, ["stop"]),
					onTouchcancel: d($, ["stop"])
				}, [r.popoverVisible === "never" ? p("", !0) : (t(), c("div", {
					key: 0,
					class: e(["wd-slider__dot-popover", { "is-visible": X(1) }])
				}, [s("span", T, o(Y(1)), 1), i[3] ||= s("div", { class: "wd-slider__dot-popover-arrow" }, null, -1)], 2)), s("div", de, [u(a, {
					name: "multiple-horizontal",
					size: "14px",
					color: "#868a9c"
				})])], 32)) : p("", !0)], 6)], 14, se),
				r.showExtremeValue ? (t(), c("div", E, o(r.max), 1)) : p("", !0)
			], 6);
		};
	}
});
//#endregion
export { D as default };
