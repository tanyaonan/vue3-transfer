globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, C as n, Ft as r, G as i, H as a, J as o, Mt as s, N as c, Pt as l, T as u, _ as d, b as f, d as ee, m as te, n as ne, ot as p, p as re, pt as ie, rt as ae, tt as m, ut as h, v as g, w as _, x as v, y, yt as b, z as oe } from "./vue.runtime.js";
import { r as se } from "./shared/element-plus/utils/objects.js";
import { t as x } from "./shared/element-plus/utils/vue/install.js";
import { i as S } from "./shared/element-plus/utils/types.js";
import { t as C } from "./shared/lodash/throttle.js";
import { n as w, r as T } from "./shared/element-plus/utils/vue/props/runtime.js";
import { c as E, h as ce } from "./shared/vueuse.js";
import { r as D } from "./shared/element-plus/hooks/use-namespace.js";
import { A as le, H as ue, M as de, V as fe, b as pe, h as me, j as he, n as ge, r as _e } from "./shared/element-plus-icons.js";
import { t as O } from "./el-icon.js";
import { t as k } from "./shared/element-plus/utils/typescript.js";
import { a as A, n as ve } from "./shared/element-plus/constants/aria.js";
import { t as ye } from "./el-focus-trap.js";
import { n as be } from "./shared/element-plus/hooks/use-z-index.js";
import { n as xe } from "./shared/element-plus/hooks/use-locale.js";
import { t as Se } from "./shared/element-plus/hooks/use-lockscreen.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/image-viewer/src/image-viewer.mjs
var j = w({
	urlList: {
		type: T(Array),
		default: () => k([])
	},
	zIndex: { type: Number },
	initialIndex: {
		type: Number,
		default: 0
	},
	infinite: {
		type: Boolean,
		default: !0
	},
	hideOnClickModal: Boolean,
	teleported: Boolean,
	closeOnPressEscape: {
		type: Boolean,
		default: !0
	},
	zoomRate: {
		type: Number,
		default: 1.2
	},
	scale: {
		type: Number,
		default: 1
	},
	minScale: {
		type: Number,
		default: .2
	},
	maxScale: {
		type: Number,
		default: 7
	},
	showProgress: Boolean,
	crossorigin: { type: T(String) }
}), M = {
	close: () => !0,
	error: (e) => e instanceof Event,
	switch: (e) => S(e),
	rotate: (e) => S(e)
}, Ce = ["src", "crossorigin"], N = /* @__PURE__ */ u({
	name: "ElImageViewer",
	__name: "image-viewer",
	props: j,
	emits: M,
	setup(e, { expose: u, emit: x }) {
		let S = {
			CONTAIN: {
				name: "contain",
				icon: p(pe)
			},
			ORIGINAL: {
				name: "original",
				icon: p(de)
			}
		}, w = e, T = x, k, { t: j } = xe(), M = D("image-viewer"), { nextZIndex: N } = be(), P = h(), F = h(), I = ae(), L = d(() => {
			let { scale: e, minScale: t, maxScale: n } = w;
			return ce(e, t, n);
		}), R = h(!0), z = h(!1), B = h(!1), V = h(w.initialIndex), H = ie(S.CONTAIN), U = h({
			scale: L.value,
			deg: 0,
			offsetX: 0,
			offsetY: 0,
			enableTransition: !1
		}), we = h(w.zIndex ?? N());
		Se(B, { ns: M });
		let Te = d(() => {
			let { urlList: e } = w;
			return e.length <= 1;
		}), W = d(() => V.value === 0), G = d(() => V.value === w.urlList.length - 1), K = d(() => w.urlList[V.value]), Ee = d(() => [
			M.e("btn"),
			M.e("prev"),
			M.is("disabled", !w.infinite && W.value)
		]), De = d(() => [
			M.e("btn"),
			M.e("next"),
			M.is("disabled", !w.infinite && G.value)
		]), Oe = d(() => {
			let { scale: e, deg: t, offsetX: n, offsetY: r, enableTransition: i } = U.value, a = n / e, o = r / e, s = t * Math.PI / 180, c = Math.cos(s), l = Math.sin(s);
			a = a * c + o * l, o = o * c - n / e * l;
			let u = {
				transform: `scale(${e}) rotate(${t}deg) translate(${a}px, ${o}px)`,
				transition: i ? "transform .3s" : ""
			};
			return H.value.name === S.CONTAIN.name && (u.maxWidth = u.maxHeight = "100%"), u;
		}), ke = d(() => `${V.value + 1} / ${w.urlList.length}`);
		function q() {
			je(), k?.(), B.value = !1, T("close");
		}
		function Ae() {
			let e = C((e) => {
				switch (ve(e)) {
					case A.esc:
						w.closeOnPressEscape && q();
						break;
					case A.space:
						Y();
						break;
					case A.left:
						Z();
						break;
					case A.up:
						$("zoomIn");
						break;
					case A.right:
						Q();
						break;
					case A.down:
						$("zoomOut");
						break;
				}
			}), t = C((e) => {
				$((e.deltaY || e.deltaX) < 0 ? "zoomIn" : "zoomOut", {
					zoomRate: w.zoomRate,
					enableTransition: !1
				});
			});
			I.run(() => {
				E(document, "keydown", e), E(P, "wheel", t);
			});
		}
		function je() {
			I.stop();
		}
		function Me() {
			R.value = !1;
		}
		function Ne(e) {
			z.value = !0, R.value = !1, T("error", e), e.target.alt = j("el.image.error");
		}
		function Pe(e) {
			if (R.value || e.button !== 0 || !P.value) return;
			U.value.enableTransition = !1;
			let { offsetX: t, offsetY: n } = U.value, r = e.pageX, i = e.pageY, a = C((e) => {
				U.value = {
					...U.value,
					offsetX: t + e.pageX - r,
					offsetY: n + e.pageY - i
				};
			}), o = E(document, "mousemove", a), s = E(document, "mouseup", () => {
				o(), s();
			});
			e.preventDefault();
		}
		function Fe(e) {
			if (R.value || !P.value || e.touches.length !== 1) return;
			U.value.enableTransition = !1;
			let { offsetX: t, offsetY: n } = U.value, { pageX: r, pageY: i } = e.touches[0], a = C((e) => {
				let a = e.touches[0];
				U.value = {
					...U.value,
					offsetX: t + a.pageX - r,
					offsetY: n + a.pageY - i
				};
			}), o = E(document, "touchmove", a), s = E(document, "touchend", () => {
				o(), s();
			});
			e.preventDefault();
		}
		function J() {
			U.value = {
				scale: L.value,
				deg: 0,
				offsetX: 0,
				offsetY: 0,
				enableTransition: !1
			};
		}
		function Y() {
			if (R.value || z.value) return;
			let e = se(S), t = Object.values(S), n = H.value.name;
			H.value = S[e[(t.findIndex((e) => e.name === n) + 1) % e.length]], J();
		}
		function X(e) {
			z.value = !1;
			let t = w.urlList.length;
			V.value = (e + t) % t;
		}
		function Z() {
			W.value && !w.infinite || X(V.value - 1);
		}
		function Q() {
			G.value && !w.infinite || X(V.value + 1);
		}
		function $(e, t = {}) {
			if (R.value || z.value) return;
			let { minScale: n, maxScale: r } = w, { zoomRate: i, rotateDeg: a, enableTransition: o } = {
				zoomRate: w.zoomRate,
				rotateDeg: 90,
				enableTransition: !0,
				...t
			};
			switch (e) {
				case "zoomOut":
					U.value.scale > n && (U.value.scale = Number.parseFloat((U.value.scale / i).toFixed(3)));
					break;
				case "zoomIn":
					U.value.scale < r && (U.value.scale = Number.parseFloat((U.value.scale * i).toFixed(3)));
					break;
				case "clockwise":
					U.value.deg += a, T("rotate", U.value.deg);
					break;
				case "anticlockwise":
					U.value.deg -= a, T("rotate", U.value.deg);
					break;
			}
			U.value.enableTransition = o;
		}
		function Ie(e) {
			e.detail?.focusReason === "pointer" && e.preventDefault();
		}
		function Le() {
			w.closeOnPressEscape && q();
		}
		function Re(e) {
			if (e.ctrlKey && (e.deltaY < 0 || e.deltaY > 0)) return e.preventDefault(), !1;
		}
		return t(() => L.value, (e) => {
			U.value.scale = e;
		}), t(K, () => {
			c(() => {
				F.value?.complete || (R.value = !0);
			});
		}), t(V, (e) => {
			J(), T("switch", e);
		}), oe(() => {
			B.value = !0, Ae(), k = E("wheel", Re, { passive: !1 });
		}), u({ setActiveItem: X }), (t, c) => (a(), y(te, {
			to: "body",
			disabled: !e.teleported
		}, [_(ne, {
			name: "viewer-fade",
			appear: ""
		}, {
			default: m(() => [g("div", {
				ref_key: "wrapper",
				ref: P,
				tabindex: -1,
				class: s(b(M).e("wrapper")),
				style: l({ zIndex: we.value })
			}, [_(b(ye), {
				loop: "",
				trapped: "",
				"focus-trap-el": P.value,
				"focus-start-el": "container",
				onFocusoutPrevented: Ie,
				onReleaseRequested: Le
			}, {
				default: m(() => [
					g("div", {
						class: s(b(M).e("mask")),
						onClick: c[0] ||= ee((t) => e.hideOnClickModal && q(), ["self"])
					}, null, 2),
					f(" CLOSE "),
					g("span", {
						class: s([b(M).e("btn"), b(M).e("close")]),
						onClick: q
					}, [_(b(O), null, {
						default: m(() => [_(b(me))]),
						_: 1
					})], 2),
					f(" ARROW "),
					Te.value ? f("v-if", !0) : (a(), v(re, { key: 0 }, [g("span", {
						class: s(Ee.value),
						onClick: Z
					}, [_(b(O), null, {
						default: m(() => [_(b(ge))]),
						_: 1
					})], 2), g("span", {
						class: s(De.value),
						onClick: Q
					}, [_(b(O), null, {
						default: m(() => [_(b(_e))]),
						_: 1
					})], 2)], 64)),
					t.$slots.progress || e.showProgress ? (a(), v("div", {
						key: 1,
						class: s([b(M).e("btn"), b(M).e("progress")])
					}, [i(t.$slots, "progress", {
						activeIndex: V.value,
						total: e.urlList.length
					}, () => [n(r(ke.value), 1)])], 2)) : f("v-if", !0),
					f(" ACTIONS "),
					g("div", { class: s([b(M).e("btn"), b(M).e("actions")]) }, [g("div", { class: s(b(M).e("actions__inner")) }, [i(t.$slots, "toolbar", {
						actions: $,
						prev: Z,
						next: Q,
						reset: Y,
						activeIndex: V.value,
						setActiveItem: X
					}, () => [
						_(b(O), { onClick: c[1] ||= (e) => $("zoomOut") }, {
							default: m(() => [_(b(ue))]),
							_: 1
						}),
						_(b(O), { onClick: c[2] ||= (e) => $("zoomIn") }, {
							default: m(() => [_(b(fe))]),
							_: 1
						}),
						g("i", { class: s(b(M).e("actions__divider")) }, null, 2),
						_(b(O), { onClick: Y }, {
							default: m(() => [(a(), y(o(H.value.icon)))]),
							_: 1
						}),
						g("i", { class: s(b(M).e("actions__divider")) }, null, 2),
						_(b(O), { onClick: c[3] ||= (e) => $("anticlockwise") }, {
							default: m(() => [_(b(le))]),
							_: 1
						}),
						_(b(O), { onClick: c[4] ||= (e) => $("clockwise") }, {
							default: m(() => [_(b(he))]),
							_: 1
						})
					])], 2)], 2),
					f(" CANVAS "),
					g("div", { class: s(b(M).e("canvas")) }, [z.value && t.$slots["viewer-error"] ? i(t.$slots, "viewer-error", {
						key: 0,
						activeIndex: V.value,
						src: K.value
					}) : (a(), v("img", {
						ref_key: "imgRef",
						ref: F,
						key: K.value,
						src: K.value,
						style: l(Oe.value),
						class: s(b(M).e("img")),
						crossorigin: e.crossorigin,
						onLoad: Me,
						onError: Ne,
						onMousedown: Pe,
						onTouchstart: Fe
					}, null, 46, Ce))], 2),
					i(t.$slots, "default")
				]),
				_: 3
			}, 8, ["focus-trap-el"])], 6)]),
			_: 3
		})], 8, ["disabled"]));
	}
}), P = /* @__PURE__ */ e({
	ElImageViewer: () => F,
	default: () => F,
	imageViewerEmits: () => M,
	imageViewerProps: () => j
}), F = x(N);
//#endregion
export { P as n, F as t };
