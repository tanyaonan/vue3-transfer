globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { Dt as t, Ft as n, G as r, H as i, J as a, Mt as o, Pt as s, T as c, _ as l, b as u, jt as d, tt as f, v as p, x as m, y as h, yt as g } from "./vue.runtime.js";
import { t as _ } from "./shared/element-plus/utils/vue/install.js";
import { n as v, r as y } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as b } from "./shared/element-plus/hooks/use-namespace.js";
import { B as x, f as S, h as C, l as w, u as T } from "./shared/element-plus-icons.js";
import { t as E } from "./el-icon.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/progress/src/progress.mjs
var D = v({
	type: {
		type: String,
		default: "line",
		values: [
			"line",
			"circle",
			"dashboard"
		]
	},
	percentage: {
		type: Number,
		default: 0,
		validator: (e) => e >= 0 && e <= 100
	},
	status: {
		type: String,
		default: "",
		values: [
			"",
			"success",
			"exception",
			"warning"
		]
	},
	indeterminate: Boolean,
	duration: {
		type: Number,
		default: 3
	},
	strokeWidth: {
		type: Number,
		default: 6
	},
	strokeLinecap: {
		type: y(String),
		default: "round"
	},
	textInside: Boolean,
	width: {
		type: Number,
		default: 126
	},
	showText: {
		type: Boolean,
		default: !0
	},
	color: {
		type: y([
			String,
			Array,
			Function
		]),
		default: ""
	},
	striped: Boolean,
	stripedFlow: Boolean,
	format: {
		type: y(Function),
		default: (e) => `${e}%`
	}
}), O = ["aria-valuenow"], k = { viewBox: "0 0 100 100" }, A = [
	"d",
	"stroke",
	"stroke-linecap",
	"stroke-width"
], j = [
	"d",
	"stroke",
	"opacity",
	"stroke-linecap",
	"stroke-width"
], M = { key: 0 }, N = /* @__PURE__ */ c({
	name: "ElProgress",
	__name: "progress",
	props: D,
	setup(e) {
		let c = {
			success: "#13ce66",
			exception: "#ff4949",
			warning: "#e6a23c",
			default: "#20a0ff"
		}, _ = e, v = b("progress"), y = l(() => {
			let e = {
				width: `${_.percentage}%`,
				animationDuration: `${_.duration}s`
			}, t = G(_.percentage);
			return t.includes("gradient") ? e.background = t : e.backgroundColor = t, e;
		}), D = l(() => (_.strokeWidth / _.width * 100).toFixed(1)), N = l(() => ["circle", "dashboard"].includes(_.type) ? Number.parseInt(`${50 - Number.parseFloat(D.value) / 2}`, 10) : 0), P = l(() => {
			let e = N.value, t = _.type === "dashboard";
			return `
          M 50 50
          m 0 ${t ? "" : "-"}${e}
          a ${e} ${e} 0 1 1 0 ${t ? "-" : ""}${e * 2}
          a ${e} ${e} 0 1 1 0 ${t ? "" : "-"}${e * 2}
          `;
		}), F = l(() => 2 * Math.PI * N.value), I = l(() => _.type === "dashboard" ? .75 : 1), L = l(() => `${-1 * F.value * (1 - I.value) / 2}px`), R = l(() => ({
			strokeDasharray: `${F.value * I.value}px, ${F.value}px`,
			strokeDashoffset: L.value
		})), z = l(() => ({
			strokeDasharray: `${F.value * I.value * (_.percentage / 100)}px, ${F.value}px`,
			strokeDashoffset: L.value,
			transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
		})), B = l(() => {
			let e;
			return e = _.color ? G(_.percentage) : c[_.status] || c.default, e;
		}), V = l(() => _.status === "warning" ? x : _.type === "line" ? _.status === "success" ? T : S : _.status === "success" ? w : C), H = l(() => _.type === "line" ? 12 + _.strokeWidth * .4 : _.width * .111111 + 2), U = l(() => _.format(_.percentage));
		function W(e) {
			let t = 100 / e.length;
			return e.map((e, n) => d(e) ? {
				color: e,
				percentage: (n + 1) * t
			} : e).sort((e, t) => e.percentage - t.percentage);
		}
		let G = (e) => {
			let { color: n } = _;
			if (t(n)) return n(e);
			if (d(n)) return n;
			{
				let t = W(n);
				for (let n of t) if (n.percentage > e) return n.color;
				return t[t.length - 1]?.color;
			}
		};
		return (t, c) => (i(), m("div", {
			class: o([
				g(v).b(),
				g(v).m(e.type),
				g(v).is(e.status),
				{
					[g(v).m("without-text")]: !e.showText,
					[g(v).m("text-inside")]: e.textInside
				}
			]),
			role: "progressbar",
			"aria-valuenow": e.percentage,
			"aria-valuemin": "0",
			"aria-valuemax": "100"
		}, [e.type === "line" ? (i(), m("div", {
			key: 0,
			class: o(g(v).b("bar"))
		}, [p("div", {
			class: o(g(v).be("bar", "outer")),
			style: s({ height: `${e.strokeWidth}px` })
		}, [p("div", {
			class: o([
				g(v).be("bar", "inner"),
				{ [g(v).bem("bar", "inner", "indeterminate")]: e.indeterminate },
				{ [g(v).bem("bar", "inner", "striped")]: e.striped },
				{ [g(v).bem("bar", "inner", "striped-flow")]: e.stripedFlow }
			]),
			style: s(y.value)
		}, [(e.showText || t.$slots.default) && e.textInside ? (i(), m("div", {
			key: 0,
			class: o(g(v).be("bar", "innerText"))
		}, [r(t.$slots, "default", { percentage: e.percentage }, () => [p("span", null, n(U.value), 1)])], 2)) : u("v-if", !0)], 6)], 6)], 2)) : (i(), m("div", {
			key: 1,
			class: o(g(v).b("circle")),
			style: s({
				height: `${e.width}px`,
				width: `${e.width}px`
			})
		}, [(i(), m("svg", k, [p("path", {
			class: o(g(v).be("circle", "track")),
			d: P.value,
			stroke: `var(${g(v).cssVarName("fill-color-light")}, #e5e9f2)`,
			"stroke-linecap": e.strokeLinecap,
			"stroke-width": D.value,
			fill: "none",
			style: s(R.value)
		}, null, 14, A), p("path", {
			class: o(g(v).be("circle", "path")),
			d: P.value,
			stroke: B.value,
			fill: "none",
			opacity: +!!e.percentage,
			"stroke-linecap": e.strokeLinecap,
			"stroke-width": D.value,
			style: s(z.value)
		}, null, 14, j)]))], 6)), (e.showText || t.$slots.default) && !e.textInside ? (i(), m("div", {
			key: 2,
			class: o(g(v).e("text")),
			style: s({ fontSize: `${H.value}px` })
		}, [r(t.$slots, "default", { percentage: e.percentage }, () => [e.status ? (i(), h(g(E), { key: 1 }, {
			default: f(() => [(i(), h(a(V.value)))]),
			_: 1
		})) : (i(), m("span", M, n(U.value), 1))])], 6)) : u("v-if", !0)], 10, O));
	}
}), P = /* @__PURE__ */ e({
	ElProgress: () => F,
	default: () => F,
	progressProps: () => D
}), F = _(N);
//#endregion
export { P as n, F as t };
