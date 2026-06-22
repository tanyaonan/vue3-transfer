globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, U as a, a as o, c as s, d as c, g as l, l as u, s as d, u as f, z as p } from "./vue.runtime.js";
import { O as m, P as h, T as g, g as _, j as v, y } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as b, r as x, t as S } from "./shared/wot-ui/common/props.ts.js";
import { t as C } from "./wd-icon.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-progress/types.ts
var w = {
	...S,
	color: { type: [String, Array] },
	duration: b(30),
	percentage: b(0),
	hideText: x(!1),
	status: String,
	percentPosition: {
		type: Object,
		default: () => ({
			align: "right",
			type: "outer"
		})
	}
}, T = { class: "wd-progress__outer" }, E = {
	key: 0,
	class: "wd-progress__label"
}, D = /* @__PURE__ */ l({
	name: "wd-progress",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: w,
	setup(l) {
		let b = l, x = r(""), S = r(0), w = r(0), D = null, O = d(() => v({
			background: x.value,
			width: `${S.value}%`,
			"transition-duration": `${w.value * b.duration * .001}s`
		})), k = d(() => {
			let e = "";
			switch (b.status) {
				case "danger":
					e = "close-circle-fill";
					break;
				case "success":
					e = "check-circle-fill";
					break;
				case "warning":
					e = "exclamation-circle-fill";
					break;
				default: break;
			}
			return e;
		});
		i(() => [
			b.percentage,
			b.color,
			b.duration
		], () => {
			A(b.percentage), N();
		}, { immediate: !0 });
		function A(e) {
			(Number.isNaN(e) || e < 0 || e > 100) && console.error("The value of percentage must be between 0 and 100");
		}
		function j(e, t) {
			return e.some((n, r) => {
				if (S.value < n.percentage && n.percentage <= t) return R(n.percentage, n.color), !0;
				r === e.length - 1 && R(t, n.color);
			});
		}
		function M(e, t) {
			return e.some((e) => {
				if (t <= e.percentage) return R(t, e.color), !0;
			});
		}
		async function N() {
			let { percentage: e, color: t } = b;
			if (!y(t) || _(t) && t.length === 0) {
				w.value = Math.abs(e - S.value), await h(), S.value = e;
				return;
			}
			if (S.value === e) return;
			let n = _(t) ? t : [t];
			I(n);
			let r = L(n);
			S.value > e ? M(r, e) : j(r, e);
		}
		function P(e) {
			return e.every((e) => g(e) && Object.prototype.hasOwnProperty.call(e, "color") && Object.prototype.hasOwnProperty.call(e, "percentage"));
		}
		function F(e) {
			return e.every((e) => typeof e == "string");
		}
		function I(e) {
			let t = F(e), n = P(e);
			if (!t && !n) throw Error("Color must be String or Object with color and percentage");
			if (n && e.some(({ percentage: e }) => Number.isNaN(e))) throw Error("All the percentage must can be formatted to Number");
		}
		function L(e) {
			let t = 100 / e.length;
			return P(e) ? e.sort((e, t) => e.percentage - t.percentage) : e.map((e, n) => ({
				color: e,
				percentage: (n + 1) * t
			}));
		}
		function R(e, t) {
			if (D) return;
			let { duration: n } = b;
			w.value = Math.abs(e - S.value), setTimeout(() => {
				S.value = e, x.value = t, D = setTimeout(() => {
					D && clearTimeout(D), D = null, N();
				}, w.value * n);
			}, 50);
		}
		return (r, i) => (t(), c("div", {
			class: e(`wd-progress ${r.percentPosition.type === "inner" ? "wd-progress--inner" : ""} ${r.status ? "wd-progress--" + r.status : ""} ${r.percentage === 0 ? "is-zero" : ""} ${r.customClass}`),
			style: n(r.customStyle)
		}, [s("div", T, [s("div", {
			class: "wd-progress__inner",
			style: n(O.value)
		}, [r.percentPosition.type === "inner" ? (t(), c(o, { key: 0 }, [r.hideText ? r.status ? (t(), u(C, {
			key: 1,
			"custom-class": `wd-progress__label wd-progress__icon ${r.hideText ? "is-hide-text" : ""} ${r.percentPosition.align ? `is-align-${r.percentPosition.align}` : ""}`,
			name: k.value,
			color: p(m)(r.color) ? r.color : ""
		}, null, 8, [
			"custom-class",
			"name",
			"color"
		])) : f("", !0) : (t(), c("div", {
			key: 0,
			class: e(["wd-progress__label", r.percentPosition.align ? `is-align-${r.percentPosition.align}` : ""])
		}, a(r.percentage) + "% ", 3))], 64)) : f("", !0)], 4)]), r.percentPosition.type === "outer" ? (t(), c(o, { key: 0 }, [r.hideText ? r.status ? (t(), u(C, {
			key: 1,
			"custom-class": `wd-progress__label wd-progress__icon ${r.hideText ? "is-hide-text" : ""}`,
			name: k.value,
			color: p(m)(r.color) ? r.color : ""
		}, null, 8, [
			"custom-class",
			"name",
			"color"
		])) : f("", !0) : (t(), c("div", E, a(r.percentage) + "%", 1))], 64)) : f("", !0)], 6));
	}
});
//#endregion
export { D as default };
