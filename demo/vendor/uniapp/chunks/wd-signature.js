globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, D as t, H as n, I as r, L as i, N as a, P as o, S as s, T as c, U as l, _ as u, a as d, c as f, d as p, g as m, h, m as g, s as _, u as v, z as y } from "./vue.runtime.js";
import { L as b, j as x, p as S, t as C, y as w } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as T, t as E } from "./shared/wot-ui/common/props.ts.js";
import { t as D } from "./wd-button.js";
import { t as O } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-signature/types.ts
var k = {
	...E,
	penColor: {
		type: String,
		default: "#000"
	},
	lineWidth: {
		type: Number,
		default: 3
	},
	confirmText: String,
	clearText: String,
	revokeText: String,
	restoreText: String,
	fileType: {
		type: String,
		default: "png"
	},
	quality: {
		type: Number,
		default: 1
	},
	exportScale: {
		type: Number,
		default: 1
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	height: T,
	width: T,
	backgroundColor: String,
	disableScroll: {
		type: Boolean,
		default: !0
	},
	enableHistory: {
		type: Boolean,
		default: !1
	},
	step: {
		type: Number,
		default: 1
	},
	undoText: String,
	redoText: String,
	pressure: {
		type: Boolean,
		default: !1
	},
	maxWidth: {
		type: Number,
		default: 6
	},
	minWidth: {
		type: Number,
		default: 2
	},
	minSpeed: {
		type: Number,
		default: 1.5
	}
}, ee = { class: "wd-signature" }, te = { class: "wd-signature__content" }, ne = [
	"canvas-id",
	"width",
	"height",
	"id",
	"disable-scroll"
], re = { class: "wd-signature__footer" }, A = /* @__PURE__ */ m({
	name: "wd-signature",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: k,
	emits: [
		"start",
		"end",
		"signing",
		"confirm",
		"clear"
	],
	setup(m, { expose: T, emit: E }) {
		let k = m, A = E, { translate: j } = O("signature"), { proxy: M } = u(), N = i(`signature${b()}`), P = i(!1), F = i(1), I = r({
			canvasWidth: 0,
			canvasHeight: 0,
			ctx: null
		});
		function L(e) {
			if (!e || [
				"transparent",
				"#0000",
				"#00000000"
			].includes(e.toLowerCase())) return !0;
			let t = e.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+))?\)$/i);
			if (t) return (t[4] ? parseFloat(t[4]) : 1) === 0;
			let n = e.match(/^hsla?\(\s*(\d+)(?:deg)?\s*,\s*(\d+)%\s*,\s*(\d+)%(?:\s*,\s*(\d*\.?\d+))?\)$/i);
			if (n) return (n[4] ? parseFloat(n[4]) : 1) === 0;
			let r = e.match(/^#([0-9a-f]{8}|[0-9a-f]{4})$/i);
			if (r) {
				let e = r[1], t = e.length === 8 ? e.slice(6, 8) : e.slice(3, 4).repeat(2);
				return parseInt(t, 16) === 0;
			}
			return !1;
		}
		a(() => k.penColor, () => {
			$();
		}), a(() => k.lineWidth, () => {
			$();
		});
		let R = _(() => {
			let e = {};
			return w(k.width) && (e.width = C(k.width)), w(k.height) && (e.height = C(k.height)), `${x(e)}`;
		}), z = _(() => k.disableScroll), B = _(() => k.enableHistory), V = i([]), H = i([]), U = i(), W = i(0);
		function ie(e) {
			if (!k.pressure) return k.lineWidth;
			let t = k.minSpeed || 1.5, n = Math.min(t * 10, Math.max(t, e)), r = (k.maxWidth - k.minWidth) * (n - t) / t, i = Math.max(k.maxWidth - r, k.minWidth);
			return Math.min(i, k.maxWidth);
		}
		let G = () => k.pressure ? (k.maxWidth + k.minWidth) / 2 : k.lineWidth, ae = (e) => {
			e.preventDefault(), P.value = !0, $(), A("start", e);
			let { x: t, y: n } = e.touches[0];
			U.value = {
				points: [{
					x: t,
					y: n,
					t: Date.now()
				}],
				color: k.penColor,
				width: G(),
				backgroundColor: k.backgroundColor,
				isPressure: k.pressure
			}, H.value = [], Y(e);
		}, oe = (e) => {
			e.preventDefault(), P.value = !1, U.value && (V.value.push({
				...U.value,
				points: U.value.points.map((e) => ({
					...e,
					t: e.t,
					speed: e.speed,
					distance: e.distance,
					lineWidth: e.lineWidth,
					lastX1: e.lastX1,
					lastY1: e.lastY1,
					lastX2: e.lastX2,
					lastY2: e.lastY2,
					isFirstPoint: e.isFirstPoint
				}))
			}), W.value = V.value.length), U.value = void 0;
			let { ctx: t } = I;
			t && t.beginPath(), A("end", e);
		}, K = (e = !1) => {
			!e && I.canvasHeight && I.canvasWidth || ce().then(() => {
				let { ctx: e } = I;
				e && w(k.backgroundColor) && (e.setFillStyle(k.backgroundColor), e.fillRect(0, 0, I.canvasWidth, I.canvasHeight), e.draw());
			});
		}, q = () => {
			V.value = [], H.value = [], W.value = 0, de(), A("clear");
		}, J = () => {
			ue();
		}, Y = (e) => {
			e.preventDefault();
			let { ctx: t } = I;
			if (!P.value || k.disabled || !t) return;
			let { x: n, y: r } = e.touches[0], i = {
				x: n,
				y: r,
				t: Date.now()
			};
			if (U.value) {
				let e = U.value.points, a = e[e.length - 1];
				if (a.t === i.t || a.x === n && a.y === r) return;
				if (i.distance = Math.sqrt((i.x - a.x) ** 2 + (i.y - a.y) ** 2), i.speed = i.distance / (i.t - a.t || .1), k.pressure && (i.lineWidth = ie(i.speed), e.length >= 2 && e[e.length - 2].lineWidth && a.lineWidth)) {
					let e = (i.lineWidth - a.lineWidth) / a.lineWidth, t = .2;
					if (Math.abs(e) > t) {
						let n = e > 0 ? t : -.2;
						i.lineWidth = a.lineWidth * (1 + n);
					}
				}
				e.push(i), k.pressure ? e.length >= 2 && se(a, i) : (t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(i.x, i.y), t.stroke(), t.draw(!0));
			}
			A("signing", e);
		}, X = () => {
			let { ctx: e } = I;
			if (e) {
				if (L(k.backgroundColor) ? e.clearRect(0, 0, I.canvasWidth, I.canvasHeight) : (e.setFillStyle(k.backgroundColor), e.fillRect(0, 0, I.canvasWidth, I.canvasHeight)), V.value.length === 0) {
					e.draw();
					return;
				}
				V.value.forEach((t) => {
					t.points.length && (e.setStrokeStyle(t.color), e.setLineJoin("round"), e.setLineCap("round"), t.isPressure && k.pressure ? t.points.forEach((n, r) => {
						if (r === 0) return;
						let i = t.points[r - 1], a = n.x - i.x, o = n.y - i.y;
						if (Math.sqrt(a * a + o * o) <= 2) n.lastX1 = n.lastX2 = i.x + a * .5, n.lastY1 = n.lastY2 = i.y + o * .5;
						else {
							let e = n.speed || 0, t = k.minSpeed || 1.5, r = Math.max(.1, Math.min(.9, e / (t * 10)));
							n.lastX1 = i.x + a * (.2 + r * .3), n.lastY1 = i.y + o * (.2 + r * .3), n.lastX2 = i.x + a * (.8 - r * .3), n.lastY2 = i.y + o * (.8 - r * .3);
						}
						let s = n.lineWidth || t.width;
						typeof i.lastX1 == "number" ? (e.setLineWidth(s), e.beginPath(), e.moveTo(i.lastX2, i.lastY2), e.quadraticCurveTo(i.x, i.y, n.lastX1, n.lastY1), e.stroke(), i.isFirstPoint || (e.beginPath(), e.moveTo(i.lastX1, i.lastY1), e.quadraticCurveTo(i.x, i.y, i.lastX2, i.lastY2), e.stroke())) : n.isFirstPoint = !0;
					}) : (e.setLineWidth(t.width), t.points.forEach((n, r) => {
						if (r === 0) return;
						let i = t.points[r - 1];
						e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(n.x, n.y), e.stroke();
					})));
				}), e.draw();
			}
		}, Z = () => {
			if (!V.value.length) return;
			let e = Math.min(k.step, V.value.length), t = V.value.splice(V.value.length - e);
			H.value.push(...t), W.value = Math.max(0, W.value - e), X();
		}, Q = () => {
			if (!H.value.length) return;
			let e = Math.min(k.step, H.value.length), t = H.value.splice(H.value.length - e);
			V.value.push(...t), W.value = Math.min(V.value.length, W.value + e), X();
		};
		function se(e, t) {
			let { ctx: n } = I;
			if (!n) return;
			let r = t.x - e.x, i = t.y - e.y;
			if (Math.sqrt(r * r + i * i) <= 2) t.lastX1 = t.lastX2 = e.x + r * .5, t.lastY1 = t.lastY2 = e.y + i * .5;
			else {
				let n = t.speed || 0, a = k.minSpeed || 1.5, o = Math.max(.1, Math.min(.9, n / (a * 10)));
				t.lastX1 = e.x + r * (.2 + o * .3), t.lastY1 = e.y + i * (.2 + o * .3), t.lastX2 = e.x + r * (.8 - o * .3), t.lastY2 = e.y + i * (.8 - o * .3);
			}
			let a = t.lineWidth || k.lineWidth;
			typeof e.lastX1 == "number" ? (n.setLineWidth(a), n.beginPath(), n.moveTo(e.lastX2, e.lastY2), n.quadraticCurveTo(e.x, e.y, t.lastX1, t.lastY1), n.stroke(), e.isFirstPoint || (n.beginPath(), n.moveTo(e.lastX1, e.lastY1), n.quadraticCurveTo(e.x, e.y, e.lastX2, e.lastY2), n.stroke()), n.draw(!0)) : t.isFirstPoint = !0;
		}
		c(() => {
			K();
		}), s(() => {});
		function ce() {
			return new Promise((e) => {
				let { ctx: t } = I;
				if (t) return e(t);
				S(`#${N.value}`, !1, M).then((t) => {
					le(t.width, t.height), I.ctx = uni.createCanvasContext(N.value, M), I.ctx && I.ctx.scale(F.value, F.value), e(I.ctx);
				});
			});
		}
		function le(e, t) {
			I.canvasHeight = t * F.value, I.canvasWidth = e * F.value;
		}
		function $() {
			let { ctx: e } = I;
			e && (e.setLineWidth(G()), e.setStrokeStyle(k.penColor), e.setLineJoin("round"), e.setLineCap("round"));
		}
		function ue() {
			let { fileType: e, quality: t, exportScale: n } = k, { canvasWidth: r, canvasHeight: i } = I;
			uni.canvasToTempFilePath({
				width: r,
				height: i,
				destWidth: r * n,
				destHeight: i * n,
				fileType: e,
				quality: t,
				canvasId: N.value,
				canvas: null,
				success: (e) => {
					A("confirm", {
						tempFilePath: e.tempFilePath,
						width: r * n / F.value,
						height: i * n / F.value,
						success: !0
					});
				},
				fail: () => {
					A("confirm", {
						tempFilePath: "",
						width: r * n / F.value,
						height: i * n / F.value,
						success: !1
					});
				}
			}, M);
		}
		function de() {
			let { canvasWidth: e, canvasHeight: t, ctx: n } = I;
			n && (n.clearRect(0, 0, e, t), L(k.backgroundColor) || (n.setFillStyle(k.backgroundColor), n.fillRect(0, 0, e, t)), n.draw());
		}
		return T({
			init: K,
			clear: q,
			confirm: J,
			restore: Q,
			revoke: Z
		}), (r, i) => (t(), p("div", ee, [f("div", te, [f("canvas", {
			class: "wd-signature__content-canvas",
			"canvas-id": N.value,
			style: n(R.value),
			width: I.canvasWidth,
			height: I.canvasHeight,
			id: N.value,
			"disable-scroll": z.value,
			onTouchstart: ae,
			onTouchend: oe,
			onTouchmove: Y
		}, null, 44, ne)]), f("div", re, [e(r.$slots, "footer", {
			clear: q,
			confirm: J,
			currentStep: W.value,
			revoke: Z,
			restore: Q,
			canUndo: V.value.length > 0,
			canRedo: H.value.length > 0,
			historyList: V.value
		}, () => [
			B.value ? (t(), p(d, { key: 0 }, [h(D, {
				"custom-class": "wd-signature__button",
				size: "small",
				plain: "",
				onClick: Z,
				disabled: V.value.length <= 0
			}, {
				default: o(() => [g(l(r.revokeText || y(j)("revokeText")), 1)]),
				_: 1
			}, 8, ["disabled"]), h(D, {
				"custom-class": "wd-signature__button",
				size: "small",
				plain: "",
				onClick: Q,
				disabled: H.value.length <= 0
			}, {
				default: o(() => [g(l(r.restoreText || y(j)("restoreText")), 1)]),
				_: 1
			}, 8, ["disabled"])], 64)) : v("", !0),
			h(D, {
				"custom-class": "wd-signature__button",
				size: "small",
				plain: "",
				onClick: q
			}, {
				default: o(() => [g(l(r.clearText || y(j)("clearText")), 1)]),
				_: 1
			}),
			h(D, {
				"custom-class": "wd-signature__button",
				size: "small",
				onClick: J
			}, {
				default: o(() => [g(l(r.confirmText || y(j)("confirmText")), 1)]),
				_: 1
			})
		])])]));
	}
});
//#endregion
export { A as default };
