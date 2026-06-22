globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, C as n, D as r, H as i, L as a, N as o, S as s, T as c, _ as l, c as u, d, g as f, i as p, y as m } from "./vue.runtime.js";
import { p as h } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { r as g, s as _, t as v } from "./shared/wot-ui/common/props.ts.js";
import { t as y } from "./shared/wot-ui/composables/useTouch.ts.js";
import { t as b } from "./shared/wot-ui/common/interceptor.ts.js";
import { i as x, n as S, r as C, t as w } from "./shared/wot-ui/common/clickoutside.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-swipe-action/types.ts
var T = /* @__PURE__ */ f({
	name: "wd-swipe-action",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...v,
		modelValue: _("close"),
		disabled: g(!1),
		beforeClose: Function
	},
	emits: ["click", "update:modelValue"],
	setup(f, { expose: g, emit: _ }) {
		let v = f, T = _, E = m(w, null), D = a(""), O = a(0), k = a(0), A = a(!1), j = y(), { proxy: M } = l();
		o(() => v.modelValue, (e, t) => {
			N(e, t);
		}, { deep: !0 }), s(() => {
			E && E.pushToQueue ? E.pushToQueue(M) : C(M), O.value = 0, k.value = 0, A.value = !1;
		}), c(() => {
			A.value = !0, N(v.modelValue), A.value = !1;
		}), n(() => {
			E && E.removeFromQueue ? E.removeFromQueue(M) : x(M);
		});
		function N(e, t) {
			v.disabled || P().then(([n, r]) => {
				switch (e) {
					case "close":
						if (k.value === 0) return;
						B("value", t);
						break;
					case "left":
						F(n);
						break;
					case "right":
						F(-r);
						break;
				}
			});
		}
		function P() {
			return Promise.all([h(".wd-swipe-action__left", !1, M).then((e) => e.width ? e.width : 0), h(".wd-swipe-action__right", !1, M).then((e) => e.width ? e.width : 0)]);
		}
		function F(e = 0) {
			let t = `translate3d(${e}px, 0, 0)`, n = A.value ? "none" : ".6s cubic-bezier(0.18, 0.89, 0.32, 1)";
			D.value = `
        -webkit-transform: ${t};
        -webkit-transition: ${n};
        transform: ${t};
        transition: ${n};
      `, k.value = e;
		}
		function I(e) {
			if (v.disabled || k.value === 0) return;
			let t = e || "inside";
			B("click", t, () => {
				T("click", { value: t });
			});
		}
		function L(e) {
			v.disabled || (O.value = k.value, j.touchStart(e), E && E.closeOther ? E.closeOther(M) : S(M));
		}
		function R(e) {
			if (v.disabled || (j.touchMove(e), j.direction.value === "vertical")) return;
			e.preventDefault(), e.stopPropagation(), A.value = !0;
			let t = O.value + j.deltaX.value;
			P().then(([n, r]) => {
				if (n === 0 && t > 0 || r === 0 && t < 0) return F(0), L(e);
				if (n !== 0 && t >= n) return F(n), L(e);
				if (r !== 0 && -t >= r) return F(-r), L(e);
				F(t);
			});
		}
		function z() {
			if (v.disabled) return;
			let e = .3;
			A.value = !1, P().then(([t, n]) => {
				O.value < 0 && k.value < 0 && k.value - O.value < n * e ? (F(-n), T("update:modelValue", "right")) : O.value > 0 && k.value > 0 && O.value - k.value < t * e ? (F(t), T("update:modelValue", "left")) : n > 0 && O.value >= 0 && k.value < 0 && Math.abs(k.value) > n * e ? (F(-n), T("update:modelValue", "right")) : t > 0 && O.value <= 0 && k.value > 0 && Math.abs(k.value) > t * e ? (F(t), T("update:modelValue", "left")) : B("swipe");
			});
		}
		function B(e, t, n) {
			if (e === "swipe" && O.value === 0) return F(0);
			let r = t;
			e === "swipe" && O.value > 0 ? r = "left" : e === "swipe" && O.value < 0 && (r = "right");
			let i = () => {
				F(0), v.modelValue !== "close" && T("update:modelValue", "close"), n?.();
			};
			e && r ? b(v.beforeClose, {
				args: [e, r],
				done: i
			}) : i();
		}
		return g({ close: B }), (n, a) => (r(), d("div", {
			class: t(`wd-swipe-action ${n.customClass}`),
			style: i(n.customStyle),
			onClick: a[2] ||= p((e) => I(), ["stop"]),
			onTouchstart: L,
			onTouchmove: R,
			onTouchend: z,
			onTouchcancel: z
		}, [u("div", {
			class: "wd-swipe-action__wrapper",
			style: i(D.value)
		}, [
			u("div", {
				class: "wd-swipe-action__left",
				onClick: a[0] ||= p((e) => I("left"), ["stop"])
			}, [e(n.$slots, "left")]),
			e(n.$slots, "default"),
			u("div", {
				class: "wd-swipe-action__right",
				onClick: a[1] ||= p((e) => I("right"), ["stop"])
			}, [e(n.$slots, "right")])
		], 4)], 38));
	}
});
//#endregion
export { T as default };
