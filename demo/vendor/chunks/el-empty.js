globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { Ft as t, G as n, H as r, Mt as i, Pt as a, T as o, _ as s, b as c, v as l, w as u, x as d, yt as f } from "./vue.runtime.js";
import { t as p } from "./shared/element-plus/utils/vue/install.js";
import { n as m } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as h } from "./shared/element-plus/utils/dom/style.js";
import { r as g } from "./shared/element-plus/hooks/use-namespace.js";
import { t as _ } from "./shared/element-plus/hooks/use-id.js";
import { n as v } from "./shared/element-plus/hooks/use-locale.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/empty/src/empty.mjs
var y = m({
	image: {
		type: String,
		default: ""
	},
	imageSize: Number,
	description: {
		type: String,
		default: ""
	}
}), b = {
	viewBox: "0 0 79 86",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink"
}, x = ["id"], S = ["stop-color"], C = ["stop-color"], w = ["id"], T = ["stop-color"], E = ["stop-color"], D = ["id"], O = {
	stroke: "none",
	"stroke-width": "1",
	fill: "none",
	"fill-rule": "evenodd"
}, k = { transform: "translate(-1268.000000, -535.000000)" }, A = { transform: "translate(1268.000000, 535.000000)" }, j = ["fill"], M = ["fill"], N = { transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)" }, P = ["fill"], F = ["fill"], I = ["fill"], L = ["fill"], R = ["fill"], z = { transform: "translate(53.000000, 45.000000)" }, B = ["fill", "xlink:href"], V = ["fill", "mask"], H = ["fill"], U = /* @__PURE__ */ o({
	name: "ImgEmpty",
	__name: "img-empty",
	setup(e) {
		let t = g("empty"), n = _();
		return (e, i) => (r(), d("svg", b, [l("defs", null, [
			l("linearGradient", {
				id: `linearGradient-1-${f(n)}`,
				x1: "38.8503086%",
				y1: "0%",
				x2: "61.1496914%",
				y2: "100%"
			}, [l("stop", {
				"stop-color": `var(${f(t).cssVarBlockName("fill-color-1")})`,
				offset: "0%"
			}, null, 8, S), l("stop", {
				"stop-color": `var(${f(t).cssVarBlockName("fill-color-4")})`,
				offset: "100%"
			}, null, 8, C)], 8, x),
			l("linearGradient", {
				id: `linearGradient-2-${f(n)}`,
				x1: "0%",
				y1: "9.5%",
				x2: "100%",
				y2: "90.5%"
			}, [l("stop", {
				"stop-color": `var(${f(t).cssVarBlockName("fill-color-1")})`,
				offset: "0%"
			}, null, 8, T), l("stop", {
				"stop-color": `var(${f(t).cssVarBlockName("fill-color-6")})`,
				offset: "100%"
			}, null, 8, E)], 8, w),
			l("rect", {
				id: `path-3-${f(n)}`,
				x: "0",
				y: "0",
				width: "17",
				height: "36"
			}, null, 8, D)
		]), l("g", O, [l("g", k, [l("g", A, [
			l("path", {
				d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
				fill: `var(${f(t).cssVarBlockName("fill-color-3")})`
			}, null, 8, j),
			l("polygon", {
				fill: `var(${f(t).cssVarBlockName("fill-color-7")})`,
				transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
				points: "13 58 53 58 42 45 2 45"
			}, null, 8, M),
			l("g", N, [
				l("polygon", {
					fill: `var(${f(t).cssVarBlockName("fill-color-7")})`,
					transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
					points: "2.84078316e-14 3 18 3 23 7 5 7"
				}, null, 8, P),
				l("polygon", {
					fill: `var(${f(t).cssVarBlockName("fill-color-5")})`,
					points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
				}, null, 8, F),
				l("rect", {
					fill: `url(#linearGradient-1-${f(n)})`,
					transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
					x: "38",
					y: "7",
					width: "17",
					height: "36"
				}, null, 8, I),
				l("polygon", {
					fill: `var(${f(t).cssVarBlockName("fill-color-2")})`,
					transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
					points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
				}, null, 8, L)
			]),
			l("rect", {
				fill: `url(#linearGradient-2-${f(n)})`,
				x: "13",
				y: "45",
				width: "40",
				height: "36"
			}, null, 8, R),
			l("g", z, [l("use", {
				fill: `var(${f(t).cssVarBlockName("fill-color-8")})`,
				transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
				"xlink:href": `#path-3-${f(n)}`
			}, null, 8, B), l("polygon", {
				fill: `var(${f(t).cssVarBlockName("fill-color-9")})`,
				mask: `url(#mask-4-${f(n)})`,
				transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
				points: "7 0 24 0 20 18 7 16.5"
			}, null, 8, V)]),
			l("polygon", {
				fill: `var(${f(t).cssVarBlockName("fill-color-2")})`,
				transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
				points: "62 45 79 45 70 58 53 58"
			}, null, 8, H)
		])])])]));
	}
}), W = ["src"], G = { key: 1 }, K = /* @__PURE__ */ o({
	name: "ElEmpty",
	__name: "empty",
	props: y,
	setup(e) {
		let o = e, { t: p } = v(), m = g("empty"), _ = s(() => o.description || p("el.table.emptyText")), y = s(() => ({ width: h(o.imageSize) }));
		return (o, s) => (r(), d("div", { class: i(f(m).b()) }, [
			l("div", {
				class: i(f(m).e("image")),
				style: a(y.value)
			}, [e.image ? (r(), d("img", {
				key: 0,
				src: e.image,
				ondragstart: "return false"
			}, null, 8, W)) : n(o.$slots, "image", { key: 1 }, () => [u(U)])], 6),
			l("div", { class: i(f(m).e("description")) }, [o.$slots.description ? n(o.$slots, "description", { key: 0 }) : (r(), d("p", G, t(_.value), 1))], 2),
			o.$slots.default ? (r(), d("div", {
				key: 0,
				class: i(f(m).e("bottom"))
			}, [n(o.$slots, "default")], 2)) : c("v-if", !0)
		], 2));
	}
}), q = /* @__PURE__ */ e({
	ElEmpty: () => J,
	default: () => J,
	emptyProps: () => y
}), J = p(K);
//#endregion
export { q as n, J as t };
