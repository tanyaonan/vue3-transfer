globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { C as t, Dt as n, Ft as r, G as i, H as a, Mt as o, Pt as s, T as c, _ as l, b as u, v as d, x as f, yt as p } from "./vue.runtime.js";
import { t as m } from "./shared/element-plus/utils/vue/install.js";
import { i as h } from "./shared/element-plus/utils/types.js";
import { n as g, r as _ } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as v } from "./shared/element-plus/hooks/use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/statistic/src/statistic.mjs
var y = g({
	decimalSeparator: {
		type: String,
		default: "."
	},
	groupSeparator: {
		type: String,
		default: ","
	},
	precision: {
		type: Number,
		default: 0
	},
	formatter: Function,
	value: {
		type: _([Number, Object]),
		default: 0
	},
	prefix: String,
	suffix: String,
	title: String,
	valueStyle: {
		type: _([
			String,
			Object,
			Array,
			Boolean
		]),
		default: void 0
	}
}), b = /* @__PURE__ */ c({
	name: "ElStatistic",
	__name: "statistic",
	props: y,
	setup(e, { expose: c }) {
		let m = e, g = v("statistic"), _ = l(() => {
			let { value: e, formatter: t, precision: r, decimalSeparator: i, groupSeparator: a } = m;
			if (n(t)) return t(e);
			if (!h(e) || Number.isNaN(e)) return e;
			let [o, s = ""] = String(e).split(".");
			return s = s.padEnd(r, "0").slice(0, r > 0 ? r : 0), o = o.replace(/\B(?=(\d{3})+(?!\d))/g, a), [o, s].join(s ? i : "");
		});
		return c({ displayValue: _ }), (n, c) => (a(), f("div", { class: o(p(g).b()) }, [n.$slots.title || e.title ? (a(), f("div", {
			key: 0,
			class: o(p(g).e("head"))
		}, [i(n.$slots, "title", {}, () => [t(r(e.title), 1)])], 2)) : u("v-if", !0), d("div", { class: o(p(g).e("content")) }, [
			n.$slots.prefix || e.prefix ? (a(), f("div", {
				key: 0,
				class: o(p(g).e("prefix"))
			}, [i(n.$slots, "prefix", {}, () => [d("span", null, r(e.prefix), 1)])], 2)) : u("v-if", !0),
			d("span", {
				class: o(p(g).e("number")),
				style: s(e.valueStyle)
			}, r(_.value), 7),
			n.$slots.suffix || e.suffix ? (a(), f("div", {
				key: 1,
				class: o(p(g).e("suffix"))
			}, [i(n.$slots, "suffix", {}, () => [d("span", null, r(e.suffix), 1)])], 2)) : u("v-if", !0)
		], 2)], 2));
	}
}), x = /* @__PURE__ */ e({
	ElStatistic: () => S,
	default: () => S,
	statisticProps: () => y
}), S = m(b);
//#endregion
export { x as n, S as t };
