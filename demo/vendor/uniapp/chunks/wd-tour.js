globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, P as o, U as s, c, d as l, g as u, h as d, i as f, m as p, s as m, u as h, x as g } from "./vue.runtime.js";
import { j as _, m as v, p as y, t as b, y as x } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as S, n as C, r as w, t as T } from "./shared/wot-ui/common/props.ts.js";
import { t as E } from "./wd-button.js";
import { t as ee } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as D } from "./shared/wot-ui/composables/useRaf.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-tour/types.ts
var O = {
	...T,
	modelValue: w(!1),
	steps: C(),
	current: S(0),
	mask: w(!0),
	maskColor: String,
	offset: S(20),
	duration: S(300),
	borderRadius: S(4),
	padding: S(8),
	prevText: String,
	nextText: String,
	skipText: String,
	finishText: String,
	bottomSafetyOffset: S(100),
	topSafetyOffset: S(0),
	customNav: w(!1),
	clickMaskNext: w(!1),
	highlightStyle: {
		type: Object,
		default: () => ({})
	},
	zIndex: Number,
	showTourButtons: w(!0),
	scope: { type: Object },
	missingStrategy: {
		type: String,
		default: "stop"
	}
}, te = { class: "wd-tour__info" }, ne = ["nodes"], re = {
	key: 0,
	class: "wd-tour__buttons"
}, k = /* @__PURE__ */ u({
	name: "wd-tour",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: O,
	emits: [
		"update:modelValue",
		"update:current",
		"change",
		"prev",
		"next",
		"finish",
		"skip",
		"error"
	],
	setup(u, { expose: S, emit: C }) {
		let w = u, T = C, { translate: O } = ee("tour"), k = m(() => x(w.prevText) ? w.prevText : O("prev")), ie = m(() => x(w.nextText) ? w.nextText : O("next")), ae = m(() => x(w.skipText) ? w.skipText : O("skip")), oe = m(() => x(w.finishText) ? w.finishText : O("finish")), A = i(0), j = i({
			top: 0,
			left: 0,
			width: 0,
			height: 0
		}), M = i(0), N = i(0), P = i(!0), F = i(0), I = i(0);
		i(null);
		let L = i(0), se = m(() => {
			let e = {};
			return x(w.zIndex) && (e.zIndex = w.zIndex), _(e);
		}), ce = m(() => `wd-tour__highlight ${w.mask ? "wd-tour__highlight--mask" : ""}`), R = m(() => w.steps[A.value] || {});
		function z() {
			return { transition: w.duration + "ms all" };
		}
		function B(e) {
			return {
				transition: w.duration + "ms all,boxShadow 0s,height 0s,width 0s",
				borderRadius: b(w.borderRadius),
				padding: b(e)
			};
		}
		let V = m(() => {
			if (!j.value.width && !j.value.height) return z();
			let e = Number(x(R.value.padding) ? R.value.padding : w.padding), t = {
				...B(e),
				top: b((j.value.top || 0) - e),
				left: b((j.value.left || 0) - e),
				height: b(j.value.height || 0),
				width: b(j.value.width || 0)
			};
			return x(w.mask) && x(w.maskColor) && (t.boxShadow = `0 0 0 100vh ${w.maskColor}`), _([{ ...t }, w.highlightStyle]);
		}), H = m(() => {
			let e = {};
			x(w.zIndex) && (e.zIndex = Number(w.zIndex) + 1, e.transitionDuration = `${w.duration}ms`);
			let t = Number(x(R.value.offset) ? R.value.offset : w.offset), n = x(R.value.placement) ? R.value.placement : "auto";
			return n === "bottom" || n === "auto" && P.value ? e.top = b((j.value.top || 0) + (j.value.height || 0) + Number(t)) : e.bottom = b(M.value + N.value - (j.value.top || 0) + Number(t)), _(e);
		}), U = m(() => {
			let e = Number(x(R.value.padding) ? R.value.padding : w.padding);
			if (!j.value.width && !j.value.height) return z();
			let t = {
				...B(e),
				top: b((j.value.top || 0) - e),
				left: b((j.value.left || 0) - e),
				width: b((j.value.width || 0) + e * 2),
				height: b((j.value.height || 0) + e * 2)
			};
			return x(w.mask) && x(w.maskColor) && (t.boxShadow = `0 0 0 100vh ${w.maskColor}`), t;
		});
		function W() {}
		async function G() {
			K();
			let e = R.value.element;
			if (e) try {
				let t = await y(e, !1, w.scope);
				le(t);
				let n = ue();
				fe(t, de(t, n), n), me(t);
			} catch (t) {
				console.error("updateElementInfo error:", t), T("error", {
					message: "无法找到指定的引导元素",
					element: e
				}), w.missingStrategy === "skip" ? Y() : w.missingStrategy === "hide" && T("update:modelValue", !1);
			}
		}
		function K() {
			let e = v();
			M.value = e.windowHeight, N.value = e.windowTop || 0, I.value = e.statusBarHeight || 0;
		}
		function le(e) {
			j.value = e, j.value.top = (e.top || 0) + N.value, j.value.bottom = (e.bottom === void 0 ? (e.top || 0) + (e.height || 0) : e.bottom) + N.value;
		}
		function ue() {
			return {
				top: N.value + Number(L.value),
				bottom: M.value
			};
		}
		function de(e, t) {
			return {
				up: Number(e.top) < t.top,
				down: (e.bottom === void 0 ? 0 : e.bottom) + Number(w.bottomSafetyOffset) > t.bottom
			};
		}
		function fe(e, t, n) {
			t.up ? q(e, n) : t.down && pe(e);
		}
		function q(e, t) {
			let n = F.value + Number(e.top) - w.padding - t.top;
			j.value.top = t.top + w.padding, j.value.bottom = M.value - (t.top + w.padding), uni.pageScrollTo({
				scrollTop: n,
				duration: Number(w.duration),
				success: () => {
					F.value = n;
				}
			});
		}
		function pe(e) {
			let t = e.bottom || 0, n = t - M.value + w.padding + Number(w.bottomSafetyOffset);
			j.value.top = M.value - t - w.padding - Number(w.bottomSafetyOffset), j.value.bottom = M.value - w.padding - Number(w.bottomSafetyOffset), uni.pageScrollTo({
				scrollTop: n + F.value,
				duration: Number(w.duration),
				success: () => {
					F.value = n + F.value;
				}
			});
		}
		function me(e) {
			let t = I.value, n = (M.value + t) / 2 + N.value;
			(e.top || 0) + (e.height || 0) / 2 + N.value < n ? P.value = !0 : P.value = !1;
		}
		function J() {
			if (A.value > 0) {
				let e = A.value;
				A.value--, T("prev", {
					prevCurrent: e,
					current: A.value,
					total: w.steps.length,
					isElementInTop: P.value
				}), T("change", { current: A.value });
			}
		}
		function Y() {
			if (A.value < w.steps.length - 1) {
				let e = A.value;
				A.value++, T("next", {
					prevCurrent: e,
					current: A.value,
					total: w.steps.length,
					isElementInTop: P.value
				}), T("change", { current: A.value });
			} else X();
		}
		function X() {
			T("finish", {
				current: A.value,
				total: w.steps.length
			}), A.value = 0, F.value = 0, T("update:modelValue", !1);
		}
		function Z() {
			T("skip", {
				current: A.value,
				total: w.steps.length
			}), A.value = 0, F.value = 0, T("update:modelValue", !1);
		}
		function he() {
			w.clickMaskNext && Y();
		}
		a(() => w.current, (e) => {
			A.value = e;
		});
		let Q = D(G), $ = D(() => {
			G(), T("update:current", A.value);
		});
		return a(() => A.value, (e) => {
			Q.cancel(), g(() => {
				Q.start();
			}), T("update:current", e);
		}), a(() => w.modelValue, (e) => {
			e && (F.value = 0, K(), $.cancel(), g(() => {
				$.start();
			}));
		}, { immediate: !0 }), w.customNav ? w.topSafetyOffset && Number(w.topSafetyOffset) > 0 && (L.value = Number(w.topSafetyOffset)) : L.value = Number(w.topSafetyOffset) || 0, S({
			handlePrev: J,
			handleNext: Y,
			handleFinish: X,
			handleSkip: Z
		}), (i, a) => i.modelValue ? (n(), l("div", {
			key: 0,
			class: "wd-tour",
			style: r(se.value),
			onTouchmove: f(W, ["stop", "prevent"])
		}, [c("div", {
			class: "wd-tour__mask",
			onClick: f(he, ["stop"])
		}, [e(i.$slots, "highlight", { elementInfo: U.value }, () => [c("div", {
			class: t(ce.value),
			style: r(V.value)
		}, null, 6)]), c("div", {
			class: "wd-tour__popover",
			style: r(H.value)
		}, [c("div", te, [e(i.$slots, "content", {}, () => [c("div", { nodes: R.value.content }, null, 8, ne)])]), i.showTourButtons ? (n(), l("div", re, [
			A.value > 0 ? (n(), l("div", {
				key: 0,
				class: "wd-tour__prev",
				onClick: f(J, ["stop"])
			}, [e(i.$slots, "prev", {}, () => [d(E, {
				class: "wd-tour__prev-default",
				size: "mini",
				variant: "text"
			}, {
				default: o(() => [p(s(k.value), 1)]),
				_: 1
			})])])) : h("", !0),
			c("div", {
				class: "wd-tour__skip",
				onClick: f(Z, ["stop"])
			}, [e(i.$slots, "skip", {}, () => [d(E, {
				class: "wd-tour__skip-default",
				size: "mini",
				variant: "text"
			}, {
				default: o(() => [p(s(ae.value), 1)]),
				_: 1
			})])]),
			A.value === i.steps.length - 1 ? h("", !0) : (n(), l("div", {
				key: 1,
				class: "wd-tour__next",
				onClick: f(Y, ["stop"])
			}, [e(i.$slots, "next", {}, () => [d(E, {
				class: "wd-tour__next-default",
				size: "mini"
			}, {
				default: o(() => [p(s(`${ie.value}(${A.value + 1}/${i.steps.length})`), 1)]),
				_: 1
			})])])),
			A.value === i.steps.length - 1 ? (n(), l("div", {
				key: 2,
				class: "wd-tour__finish",
				onClick: f(X, ["stop"])
			}, [e(i.$slots, "finish", {}, () => [d(E, {
				class: "wd-tour__finish-default",
				size: "mini",
				type: "primary"
			}, {
				default: o(() => [p(s(oe.value), 1)]),
				_: 1
			})])])) : h("", !0)
		])) : h("", !0)], 4)])], 36)) : h("", !0);
	}
});
//#endregion
export { k as default };
