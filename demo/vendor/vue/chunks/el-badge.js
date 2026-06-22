globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { C as t, Ft as n, G as r, H as i, Mt as a, Pt as o, T as s, _ as c, b as l, n as u, tt as d, w as f, x as p, yt as m } from "./vue.runtime.js";
import { t as h } from "./shared/element-plus/utils/vue/install.js";
import { i as g } from "./shared/element-plus/utils/types.js";
import { n as _, r as v } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as y } from "./shared/element-plus/utils/dom/style.js";
import { r as b } from "./shared/element-plus/hooks/use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/badge/src/badge.mjs
var x = _({
	value: {
		type: [String, Number],
		default: ""
	},
	max: {
		type: Number,
		default: 99
	},
	isDot: Boolean,
	hidden: Boolean,
	type: {
		type: String,
		values: [
			"primary",
			"success",
			"warning",
			"info",
			"danger"
		],
		default: "danger"
	},
	showZero: {
		type: Boolean,
		default: !0
	},
	color: String,
	badgeStyle: {
		type: v([
			String,
			Object,
			Array,
			Boolean
		]),
		default: void 0
	},
	offset: {
		type: v(Array),
		default: () => [0, 0]
	},
	badgeClass: { type: String }
}), S = /* @__PURE__ */ s({
	name: "ElBadge",
	__name: "badge",
	props: x,
	setup(e, { expose: s }) {
		let h = e, _ = b("badge"), v = c(() => h.isDot ? "" : g(h.value) && g(h.max) && h.max < h.value ? `${h.max}+` : `${h.value}`), x = c(() => [{
			backgroundColor: h.color,
			marginRight: y(-h.offset[0]),
			marginTop: y(h.offset[1])
		}, h.badgeStyle ?? {}]);
		return s({ content: v }), (s, c) => (i(), p("div", { class: a(m(_).b()) }, [r(s.$slots, "default"), f(u, { name: `${m(_).namespace.value}-zoom-in-center` }, {
			default: d(() => [!e.hidden && (v.value || e.isDot || s.$slots.content) ? (i(), p("sup", {
				key: 0,
				class: a([
					m(_).e("content"),
					m(_).em("content", e.type),
					m(_).is("fixed", !!s.$slots.default),
					m(_).is("dot", e.isDot),
					m(_).is("hide-zero", !e.showZero && e.value === 0),
					e.badgeClass
				]),
				style: o(x.value)
			}, [r(s.$slots, "content", { value: v.value }, () => [t(n(v.value), 1)])], 6)) : l("v-if", !0)]),
			_: 3
		}, 8, ["name"])], 2));
	}
}), C = /* @__PURE__ */ e({
	ElBadge: () => w,
	badgeProps: () => x,
	default: () => w
}), w = h(S);
//#endregion
export { C as n, w as t };
