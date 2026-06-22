globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, E as r, H as i, L as a, N as o, S as s, T as c, U as l, _ as u, c as d, d as f, g as p, s as m } from "./vue.runtime.js";
import { L as h, T as g, j as _, m as v, t as y } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as b, r as x, s as S, t as C } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-circle/types.ts
var w = {
	...C,
	modelValue: b(0),
	size: b(120),
	color: {
		type: [String, Object],
		default: "#1C64FD"
	},
	layerColor: S("#F2F3F5"),
	fill: String,
	speed: b(50),
	text: String,
	strokeWidth: b(18),
	strokeLinecap: S("round"),
	clockwise: x(!0)
}, T = [
	"width",
	"height",
	"id",
	"canvas-id"
], E = {
	key: 0,
	class: "wd-circle__text"
}, D = {
	key: 1,
	class: "wd-circle__text"
}, O = /* @__PURE__ */ p({
	name: "wd-circle",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: w,
	setup(p) {
		function b(e) {
			return Math.min(Math.max(e, 0), 100);
		}
		let x = 2 * Math.PI, S = -Math.PI / 2, C = p, { proxy: w } = u(), O = a(""), k = a(0), A = a(null), j = a(1), M = a(`wd-circle${h()}`), N = null, P = m(() => `${_({ color: g(C.color) ? "var(--wot-text-main)" : C.color })};${C.customStyle}`), F = m(() => C.size), I = m(() => C.strokeWidth), L = m(() => `${_({
			width: y(C.size),
			height: y(C.size)
		})}`);
		o(() => C.modelValue, () => {
			W();
		}, { immediate: !0 }), o(() => C.size, () => {
			let e = setTimeout(() => {
				U(k.value), clearTimeout(e);
			}, 50);
		}, { immediate: !1 }), o(() => C.color, () => {
			U(k.value);
		}, {
			immediate: !1,
			deep: !0
		}), s(() => {
			j.value = v().pixelRatio;
		}), c(() => {
			k.value = C.modelValue, U(k.value);
		}), r(() => {
			G();
		});
		function R() {
			return new Promise((e) => {
				if (N) return e(N);
				N = uni.createCanvasContext(M.value, w), e(N);
			});
		}
		function z(e, t, n, r, i) {
			let a = I.value, o = F.value / 2;
			i || (a /= 2);
			let s = o - a / 2;
			e.strokeStyle = t, e.setStrokeStyle(t), e.setLineWidth(a), e.setLineCap(C.strokeLinecap), e.beginPath(), e.arc(o, o, s, n, r, !C.clockwise), e.stroke(), i && (e.setLineWidth(a), e.setFillStyle(i), e.fill());
		}
		function B(e) {
			z(e, C.layerColor, 0, x, C.fill);
		}
		function V(e, t) {
			let n = t / 100 * x, r = C.clockwise ? S + n : 3 * Math.PI - (S + n);
			if (g(C.color)) {
				let t = e.createLinearGradient(F.value, 0, 0, 0);
				Object.keys(C.color).sort((e, t) => parseFloat(e) - parseFloat(t)).map((e) => t.addColorStop(parseFloat(e) / 100, C.color[e])), O.value = t;
			} else O.value = C.color;
			z(e, O.value, S, r);
		}
		function H(e) {
			let t = I.value, n = F.value / 2;
			if (g(C.color)) {
				let t = e.createLinearGradient(F.value, 0, 0, 0);
				Object.keys(C.color).sort((e, t) => parseFloat(e) - parseFloat(t)).map((e) => t.addColorStop(parseFloat(e) / 100, C.color[e])), O.value = t;
			} else O.value = C.color;
			e.beginPath(), e.arc(n, t / 4, t / 4, 0, x), e.setFillStyle(O.value), e.fill();
		}
		function U(e) {
			R().then((t) => {
				t.clearRect(0, 0, F.value, F.value), B(t);
				let n = b(e);
				n === 0 ? H(t) : V(t, n), t.draw();
			});
		}
		function W() {
			if (C.speed <= 0 || C.speed > 1e3) {
				U(C.modelValue);
				return;
			}
			G(), k.value = k.value || 0;
			let e = () => {
				A.value = setTimeout(() => {
					k.value === C.modelValue ? G() : (Math.abs(k.value - C.modelValue) < 1 ? k.value = C.modelValue : k.value < C.modelValue ? k.value += 1 : --k.value, U(k.value), e());
				}, 1e3 / C.speed);
			};
			e();
		}
		function G() {
			A.value && clearTimeout(A.value);
		}
		return (r, a) => (n(), f("div", {
			class: t(`wd-circle ${r.customClass}`),
			style: i(P.value)
		}, [d("canvas", {
			width: F.value,
			height: F.value,
			style: i(L.value),
			id: M.value,
			"canvas-id": M.value
		}, null, 12, T), r.text ? (n(), f("span", D, l(r.text), 1)) : (n(), f("div", E, [e(r.$slots, "default")]))], 6));
	}
});
//#endregion
export { O as default };
