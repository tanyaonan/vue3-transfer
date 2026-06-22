globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, D as t, Ft as n, G as r, H as i, M as a, Mt as o, N as ee, Nt as s, S as te, T as c, Tt as ne, X as l, _ as u, b as d, jt as f, p, tt as m, ut as h, v as g, x as _, y as v, yt as y, z as b } from "./vue.runtime.js";
import { t as x } from "./shared/element-plus/utils/vue/install.js";
import { t as S } from "./shared/lodash/fromPairs.js";
import { c as C, i as w, n as re } from "./shared/element-plus/utils/types.js";
import { n as T, r as E } from "./shared/element-plus/utils/vue/props/runtime.js";
import { C as D, _ as O, l as k } from "./shared/vueuse.js";
import { r as A } from "./shared/element-plus/utils/easings.js";
import { r as j } from "./shared/element-plus/hooks/use-namespace.js";
import { t as M } from "./shared/element-plus/utils/typescript.js";
import { t as ie } from "./shared/element-plus/hooks/use-attrs.js";
import { n as ae } from "./shared/element-plus/hooks/use-locale.js";
import { t as oe } from "./el-image-viewer.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/image/src/image.mjs
var N = T({
	hideOnClickModal: Boolean,
	src: {
		type: String,
		default: ""
	},
	fit: {
		type: String,
		values: [
			"",
			"contain",
			"cover",
			"fill",
			"none",
			"scale-down"
		],
		default: ""
	},
	loading: {
		type: String,
		values: ["eager", "lazy"]
	},
	lazy: Boolean,
	scrollContainer: { type: E([String, Object]) },
	previewSrcList: {
		type: E(Array),
		default: () => M([])
	},
	previewTeleported: Boolean,
	zIndex: { type: Number },
	initialIndex: {
		type: Number,
		default: 0
	},
	infinite: {
		type: Boolean,
		default: !0
	},
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
	crossorigin: { type: E(String) }
}), P = {
	load: (e) => e instanceof Event,
	error: (e) => e instanceof Event,
	switch: (e) => w(e),
	close: () => !0,
	show: () => !0
}, F = [
	"src",
	"loading",
	"crossorigin"
], I = { key: 0 }, L = x(/* @__PURE__ */ c({
	name: "ElImage",
	inheritAttrs: !1,
	__name: "image",
	props: N,
	emits: P,
	setup(c, { expose: x, emit: w }) {
		let T = c, E = w, { t: M } = ae(), N = j("image"), P = l(), L = u(() => S(Object.entries(P).filter(([e]) => /^(data-|on[A-Z])/i.test(e) || ["id", "style"].includes(e)))), R = ie({
			excludeListeners: !0,
			excludeKeys: u(() => Object.keys(L.value))
		}), z = h(), B = h(!1), V = h(!0), H = h(!1), U = h(), W = h(), G = O && "loading" in HTMLImageElement.prototype, K, se = u(() => [
			N.e("inner"),
			q.value && N.e("preview"),
			V.value && N.is("loading")
		]), ce = u(() => {
			let { fit: e } = T;
			return O && e ? { objectFit: e } : {};
		}), q = u(() => {
			let { previewSrcList: e } = T;
			return ne(e) && e.length > 0;
		}), le = u(() => {
			let { previewSrcList: e, initialIndex: t } = T, n = t;
			return t > e.length - 1 && (n = 0), n;
		}), J = u(() => T.loading === "eager" ? !1 : !G && T.loading === "lazy" || T.lazy), Y = () => {
			O && (V.value = !0, B.value = !1, z.value = T.src);
		};
		function ue(e) {
			V.value = !1, B.value = !1, E("load", e);
		}
		function de(e) {
			V.value = !1, B.value = !0, E("error", e);
		}
		function fe(e) {
			e && (Y(), Q());
		}
		let X = D(fe, 200, !0);
		async function Z() {
			if (!O) return;
			await ee();
			let { scrollContainer: e } = T;
			if (re(e)) W.value = e;
			else if (f(e) && e !== "") W.value = document.querySelector(e) ?? void 0;
			else if (U.value) {
				let e = A(U.value);
				W.value = C(e) ? void 0 : e;
			}
			let { stop: t } = k(U, ([e]) => {
				X(e.isIntersecting);
			}, { root: W });
			K = t;
		}
		function Q() {
			!O || !X || (K?.(), W.value = void 0, K = void 0);
		}
		function $() {
			q.value && (H.value = !0, E("show"));
		}
		function pe() {
			H.value = !1, E("close");
		}
		function me(e) {
			E("switch", e);
		}
		return e(() => T.src, () => {
			J.value ? (V.value = !0, B.value = !1, Q(), Z()) : Y();
		}), b(() => {
			J.value ? Z() : Y();
		}), x({ showPreview: $ }), (e, ee) => (i(), _("div", a({
			ref_key: "container",
			ref: U
		}, L.value, { class: [y(N).b(), e.$attrs.class] }), [B.value ? r(e.$slots, "error", { key: 0 }, () => [g("div", { class: o(y(N).e("error")) }, n(y(M)("el.image.error")), 3)]) : (i(), _(p, { key: 1 }, [z.value === void 0 ? d("v-if", !0) : (i(), _("img", a({ key: 0 }, y(R), {
			src: z.value,
			loading: c.loading,
			style: ce.value,
			class: se.value,
			crossorigin: c.crossorigin,
			onClick: $,
			onLoad: ue,
			onError: de
		}), null, 16, F)), V.value ? (i(), _("div", {
			key: 1,
			class: o(y(N).e("wrapper"))
		}, [r(e.$slots, "placeholder", {}, () => [g("div", { class: o(y(N).e("placeholder")) }, null, 2)])], 2)) : d("v-if", !0)], 64)), q.value ? (i(), _(p, { key: 2 }, [H.value ? (i(), v(y(oe), {
			key: 0,
			"z-index": c.zIndex,
			"initial-index": le.value,
			infinite: c.infinite,
			"zoom-rate": c.zoomRate,
			"min-scale": c.minScale,
			"max-scale": c.maxScale,
			"show-progress": c.showProgress,
			"url-list": c.previewSrcList,
			scale: c.scale,
			crossorigin: c.crossorigin,
			"hide-on-click-modal": c.hideOnClickModal,
			teleported: c.previewTeleported,
			"close-on-press-escape": c.closeOnPressEscape,
			onClose: pe,
			onSwitch: me
		}, te({
			toolbar: m((n) => [r(e.$slots, "toolbar", s(t(n)))]),
			default: m(() => [e.$slots.viewer ? (i(), _("div", I, [r(e.$slots, "viewer")])) : d("v-if", !0)]),
			_: 2
		}, [e.$slots.progress ? {
			name: "progress",
			fn: m((n) => [r(e.$slots, "progress", s(t(n)))]),
			key: "0"
		} : void 0, e.$slots["viewer-error"] ? {
			name: "viewer-error",
			fn: m((n) => [r(e.$slots, "viewer-error", s(t(n)))]),
			key: "1"
		} : void 0]), 1032, [
			"z-index",
			"initial-index",
			"infinite",
			"zoom-rate",
			"min-scale",
			"max-scale",
			"show-progress",
			"url-list",
			"scale",
			"crossorigin",
			"hide-on-click-modal",
			"teleported",
			"close-on-press-escape"
		])) : d("v-if", !0)], 64)) : d("v-if", !0)], 16));
	}
}));
//#endregion
export { L as ElImage, L as default, P as imageEmits, N as imageProps };
