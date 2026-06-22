globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, L as a, d as o, g as s, h as c, s as l, u } from "./vue.runtime.js";
import { j as d, t as f, y as p } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as m, r as h, s as g, t as _ } from "./shared/wot-ui/common/props.ts.js";
import { t as v } from "./wd-icon.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-img/types.ts
var y = {
	..._,
	customImage: g(""),
	src: String,
	previewSrc: String,
	round: h(!1),
	mode: g("scaleToFill"),
	lazyLoad: h(!1),
	width: m,
	height: m,
	radius: m,
	enablePreview: h(!1),
	showMenuByLongpress: h(!1),
	showLoading: h(!0),
	showError: h(!0)
}, b = [
	"src",
	"mode",
	"show-menu-by-longpress",
	"lazy-load"
], x = {
	key: 1,
	class: "wd-img__loading"
}, S = {
	key: 2,
	class: "wd-img__error"
}, C = /*@__PURE__*/ s({
	name: "wd-img",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: y,
	emits: [
		"error",
		"click",
		"load"
	],
	setup(e, { emit: s }) {
		let m = e, h = s, g = l(() => {
			let e = {};
			return p(m.height) && (e.height = f(m.height)), p(m.width) && (e.width = f(m.width)), p(m.radius) && (e["border-radius"] = f(m.radius), e.overflow = "hidden"), `${d(e)}${m.customStyle}`;
		}), _ = l(() => `wd-img  ${m.round ? "is-round" : ""} ${m.customClass}`), y = a("loading");
		function C(e) {
			y.value = "error", h("error", e);
		}
		function w(e) {
			m.enablePreview && m.src && y.value == "success" && uni.previewImage({ urls: [m.previewSrc || m.src] }), h("click", e);
		}
		function T(e) {
			y.value = "success", h("load", e);
		}
		return (e, a) => (r(), o("div", {
			class: n(_.value),
			onClick: w,
			style: i(g.value)
		}, [
			y.value === "error" ? u("", !0) : (r(), o("img", {
				key: 0,
				class: n(`wd-img__image ${e.customImage}`),
				src: e.src,
				mode: e.mode,
				"show-menu-by-longpress": e.showMenuByLongpress,
				"lazy-load": e.lazyLoad,
				onLoad: T,
				onError: C
			}, null, 42, b)),
			y.value === "loading" && e.showLoading ? (r(), o("div", x, [t(e.$slots, "loading", {}, () => [c(v, {
				name: "image",
				"custom-class": "wd-img__loading-icon"
			})])])) : u("", !0),
			y.value === "error" && e.showError ? (r(), o("div", S, [t(e.$slots, "error", {}, () => [c(v, {
				name: "image-failloading",
				"custom-class": "wd-img__error-icon"
			})])])) : u("", !0)
		], 6));
	}
}), w = /* @__PURE__ */ e({ default: () => T }), T = C;
//#endregion
export { w as n, T as t };
