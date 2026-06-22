globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, P as a, U as o, _ as ee, c as s, d as te, g as c, h as l, l as ne, m as u, p as re, s as ie, u as d, z as f } from "./vue.runtime.js";
import { L as ae, j as oe, m as p, t as m } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as h, i as g, r as _, s as v, t as y } from "./shared/wot-ui/common/props.ts.js";
import { t as se } from "./wd-icon.js";
import { t as ce } from "./shared/wot-ui/composables/useLockScroll.ts.js";
import { t as b } from "./wd-button.js";
import { t as le } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-img-cropper/types.ts
var x = {
	...y,
	modelValue: _(!1),
	cancelButtonText: String,
	confirmButtonText: String,
	disabledRotate: _(!1),
	fileType: v("png"),
	quality: g(1),
	exportScale: g(2),
	imgSrc: v(""),
	imgWidth: h(""),
	imgHeight: h(""),
	maxScale: g(3),
	aspectRatio: v("1:1")
}, ue = { class: "wd-img-cropper__wrapper" }, de = { class: "wd-img-cropper__cut" }, fe = ["src"], pe = ["canvas-id", "id"], me = { class: "wd-img-cropper__footer" }, he = { class: "wd-img-cropper__footer-btn" }, S = /*#__PURE__*/ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ c({
	name: "wd-img-cropper",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: x,
	emits: [
		"imgloaded",
		"imgloaderror",
		"cancel",
		"confirm",
		"update:modelValue"
	],
	setup(c, { expose: h, emit: g }) {
		let _ = .85, v = r(`cropper${ae()}`), y = null, x = null, S = null, C = c, w = g, { translate: T } = le("img-cropper"), E = r(0), D = r(!1), O = r(0), k = r(0), A = r(0), j = r(0), M = r(20), N = r(0), P = r(0), F = r(""), I = r(""), L = r(2), R = r(1), z = r(p().windowWidth / 2), B = r(p().windowHeight / 2 * _), V = r(null), H = r(p()), U = r(!1), W = r([{
			x: "",
			y: ""
		}, {
			x: "",
			y: ""
		}]), G = r(""), K = r(null), { proxy: q } = ee();
		i(() => C.modelValue, (e) => {
			if (e) {
				x = C.imgWidth, S = C.imgHeight, H.value = p();
				let [e, t] = C.aspectRatio.split(":").map(Number), n = H.value.windowWidth - M.value * 2, r = n * t / e;
				A.value = n, j.value = r, P.value = (H.value.windowHeight * _ - r) / 2, N.value = M.value, L.value = C.exportScale, I.value = r, F.value = n, ye(), ve(), C.imgSrc && Z();
			} else X();
		}, {
			deep: !0,
			immediate: !0
		}), i(() => C.imgSrc, (e) => {
			e && Z();
		}, {
			deep: !0,
			immediate: !0
		}), i(() => E.value, (e) => {
			e % 90 && (E.value = Math.round(e / 90) * 90);
		}, {
			deep: !0,
			immediate: !0
		}), i(() => D.value, (e) => {
			y && clearTimeout(y), e && (y = setTimeout(() => {
				J(!1), clearTimeout(y);
			}, 300));
		}, {
			deep: !0,
			immediate: !0
		});
		let ge = ie(() => oe({
			width: O.value ? m(O.value) : "auto",
			height: k.value ? m(k.value) : "auto",
			transform: `translate(${m(z.value - O.value / 2)}, ${m(B.value - k.value / 2)}) scale(${R.value}) rotate(${E.value}deg)`,
			"transition-duration": (D.value ? 300 : 0) + "ms"
		}));
		function J(e) {
			typeof e == "boolean" ? D.value = e : D.value = e.value;
		}
		function Y(e) {
			if (!e || C.disabledRotate) return;
			J(!0), E.value = e;
			let t = O.value, n = k.value;
			e / 90 % 2 && (t = k.value, n = O.value);
			let r = A.value / t, i = j.value / n;
			R.value = Math.max(r, i), Q();
		}
		function X() {
			let { windowHeight: e, windowWidth: t } = p();
			R.value = 1, E.value = 0, z.value = t / 2, B.value = e / 2 * _;
		}
		function Z() {
			C.imgSrc && uni.getImageInfo({
				src: C.imgSrc,
				success: (e) => {
					V.value = e, _e(), X();
				},
				fail: () => {
					w("imgloaderror", { src: C.imgSrc });
				}
			});
		}
		function _e() {
			let e = O.value, t = k.value;
			if (!S && !x) {
				let n = V.value.width / V.value.height;
				n > A.value / j.value ? (t = j.value, e = t * n) : (e = A.value, t = e / n);
			} else S && !x ? (t = Number(S), e = V.value.width / V.value.height * t) : (!S && x || S && x) && (e = Number(x), t = V.value.height / V.value.width * e);
			let n = A.value / e, r = j.value / t, i = Math.max(n, r);
			O.value = e, k.value = t, R.value = i;
		}
		function ve() {
			K.value ||= uni.createCanvasContext(v.value, q);
		}
		function ye() {
			if (x && typeof x == "string" && x.indexOf("%") !== -1) {
				let e = x.replace("%", "");
				x = H.value.windowWidth / 100 * Number(e), O.value = x;
			} else x && typeof x == "number" && (O.value = x);
			if (S && typeof S == "string" && S.indexOf("%") !== -1) {
				let e = C.imgHeight.replace("%", "");
				S = H.value.windowHeight / 100 * Number(e), k.value = S;
			} else S && typeof S == "number" && (k.value = Number(S));
		}
		function Q(e) {
			let t = e || R.value, n = z.value, r = B.value, i = O.value, a = k.value;
			E.value / 90 % 2 && (i = k.value, a = O.value), n = i * t / 2 + N.value >= n ? n : i * R.value / 2 + N.value, n = N.value + A.value - i * t / 2 <= n ? n : N.value + A.value - i * t / 2, r = a * t / 2 + P.value >= r ? r : a * t / 2 + P.value, r = P.value + j.value - a * t / 2 <= r ? r : P.value + j.value - a * t / 2, R.value = t, B.value = r, z.value = n;
		}
		function be() {
			let e = O.value, t = k.value, n = R.value;
			E.value / 90 % 2 && (e = k.value, t = O.value), e * n < A.value && (n = A.value / e), t * n < j.value && (n = j.value / t), Q(n);
		}
		function xe(e) {
			if (U.value = !0, e.touches.length === 1) W.value[0] = {
				x: e.touches[0].clientX - z.value,
				y: e.touches[0].clientY - B.value
			};
			else {
				let t = Math.abs(e.touches[1].clientX - e.touches[0].clientX), n = Math.abs(e.touches[1].clientY - e.touches[0].clientY);
				G.value = Math.sqrt(t ** 2 + n ** 2);
			}
		}
		function Se(e) {
			if (e.touches.length === 1) {
				let { x: t, y: n } = W.value[0], r = e.touches[0].clientX - Number(t), i = e.touches[0].clientY - Number(n);
				z.value = r, B.value = i, Q();
			} else {
				let t = Math.abs(e.touches[1].clientX - e.touches[0].clientX), n = Math.abs(e.touches[1].clientY - e.touches[0].clientY), r = Math.sqrt(t ** 2 + n ** 2), i = R.value * (r / Number(G.value));
				R.value = Math.min(i, C.maxScale), be(), G.value = Math.sqrt(t ** 2 + n ** 2);
			}
		}
		function $() {
			U.value = !1;
		}
		function Ce(e) {
			w("imgloaded", e);
		}
		function we(e) {
			w("imgloaderror", e);
		}
		function Te() {
			Y(E.value - 90);
		}
		function Ee() {
			w("cancel"), w("update:modelValue", !1);
		}
		function De() {
			ke();
		}
		function Oe() {
			let { fileType: e, quality: t, exportScale: n } = C;
			uni.canvasToTempFilePath({
				width: A.value * n,
				height: Math.round(j.value * n),
				destWidth: A.value * n,
				destHeight: Math.round(j.value * n),
				fileType: e,
				quality: t,
				canvasId: v.value,
				success: (e) => {
					w("confirm", {
						tempFilePath: e.tempFilePath,
						width: A.value * n,
						height: j.value * n
					});
				},
				complete: () => {
					w("update:modelValue", !1);
				}
			}, q);
		}
		function ke() {
			C.imgSrc && (I.value = j.value, F.value = A.value, (() => {
				let e = O.value * R.value * C.exportScale, t = k.value * R.value * C.exportScale, n = z.value - N.value, r = B.value - P.value;
				K.value.translate(n * C.exportScale, r * C.exportScale), C.disabledRotate || K.value.rotate(E.value * Math.PI / 180), K.value.drawImage(C.imgSrc, -e / 2, -t / 2, e, t), K.value.restore(), K.value.draw(!1, () => {
					Oe();
				});
			})());
		}
		function Ae() {}
		return ce(() => C.modelValue), h({
			revertIsAnimation: J,
			setRotate: Y,
			resetImg: X
		}), (r, i) => r.modelValue ? (t(), te("div", {
			key: 0,
			class: e(`wd-img-cropper ${r.customClass}`),
			style: n(r.customStyle),
			onTouchmove: Ae
		}, [
			s("div", ue, [s("div", de, [
				s("div", {
					class: e(`wd-img-cropper__overlay ${U.value ? "is-highlight" : ""}`),
					style: n(`height: ${P.value}px;`)
				}, null, 6),
				s("div", {
					class: "wd-img-cropper__cut-middle",
					style: n(`height: ${j.value}px;`)
				}, [
					s("div", {
						class: e(`wd-img-cropper__overlay ${U.value ? "is-highlight" : ""}`),
						style: n(`width: ${N.value}px; height: ${j.value}px;`)
					}, null, 6),
					s("div", {
						class: "wd-img-cropper__cut-body",
						style: n(`width: ${A.value}px; height: ${j.value}px;`)
					}, [...i[0] ||= [re("<div class=\"wd-img-cropper__gridline wd-img-cropper__gridline--x\" data-v-fd486ce2></div><div class=\"wd-img-cropper__gridline wd-img-cropper__gridline--y\" data-v-fd486ce2></div><div class=\"wd-img-cropper__corner wd-img-cropper__corner--left-top\" data-v-fd486ce2></div><div class=\"wd-img-cropper__corner wd-img-cropper__corner--left-bottom\" data-v-fd486ce2></div><div class=\"wd-img-cropper__corner wd-img-cropper__corner--right-top\" data-v-fd486ce2></div><div class=\"wd-img-cropper__corner wd-img-cropper__corner--right-bottom\" data-v-fd486ce2></div>", 6)]], 4),
					s("div", { class: e(`wd-img-cropper__overlay wd-img-cropper__overlay-right ${U.value ? "is-highlight" : ""}`) }, null, 2)
				], 4),
				s("div", { class: e(`wd-img-cropper__overlay wd-img-cropper__overlay-bottom ${U.value ? "is-highlight" : ""}`) }, null, 2)
			]), s("img", {
				class: "wd-img-cropper__img",
				src: r.imgSrc,
				style: n(ge.value),
				"lazy-load": !1,
				onTouchstart: xe,
				onTouchmove: Se,
				onTouchend: $,
				onError: we,
				onLoad: Ce
			}, null, 44, fe)]),
			s("canvas", {
				"canvas-id": v.value,
				id: v.value,
				class: "wd-img-cropper__canvas",
				"disable-scroll": !0,
				style: n(`width: ${Number(F.value) * L.value}px; height: ${Number(I.value) * L.value}px;`)
			}, null, 12, pe),
			s("div", me, [r.disabledRotate ? d("", !0) : (t(), ne(se, {
				key: 0,
				"custom-class": "wd-img-cropper__rotate",
				name: "refresh",
				onClick: Te
			})), s("div", he, [l(b, {
				"custom-class": "wd-img-cropper__cancel",
				size: "large",
				type: "info",
				variant: "text",
				onClick: Ee
			}, {
				default: a(() => [u(o(r.cancelButtonText || f(T)("cancel")), 1)]),
				_: 1
			}), l(b, {
				size: "large",
				onClick: De
			}, {
				default: a(() => [u(o(r.confirmButtonText || f(T)("confirm")), 1)]),
				_: 1
			})])])
		], 38)) : d("", !0);
	}
}), [["__scopeId", "data-v-fd486ce2"]]);
//#endregion
export { S as default };
