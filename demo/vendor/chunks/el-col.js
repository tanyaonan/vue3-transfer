globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, G as t, H as n, J as r, Mt as i, Ot as a, Pt as o, T as s, _ as c, tt as l, y as u } from "./vue.runtime.js";
import { t as d } from "./shared/element-plus/utils/vue/install.js";
import { i as f } from "./shared/element-plus/utils/types.js";
import { n as p, r as m } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as h } from "./shared/element-plus/hooks/use-namespace.js";
import { t as g } from "./shared/element-plus/utils/typescript.js";
import { t as _ } from "./el-row/constants.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/col/src/col.mjs
var v = p({
	tag: {
		type: String,
		default: "div"
	},
	span: {
		type: Number,
		default: 24
	},
	offset: {
		type: Number,
		default: 0
	},
	pull: {
		type: Number,
		default: 0
	},
	push: {
		type: Number,
		default: 0
	},
	xs: {
		type: m([Number, Object]),
		default: () => g({})
	},
	sm: {
		type: m([Number, Object]),
		default: () => g({})
	},
	md: {
		type: m([Number, Object]),
		default: () => g({})
	},
	lg: {
		type: m([Number, Object]),
		default: () => g({})
	},
	xl: {
		type: m([Number, Object]),
		default: () => g({})
	}
}), y = d(/* @__PURE__ */ s({
	name: "ElCol",
	__name: "col",
	props: v,
	setup(s) {
		let d = s, { gutter: p } = e(_, { gutter: c(() => 0) }), m = h("col"), g = c(() => {
			let e = {};
			return p.value && (e.paddingLeft = e.paddingRight = `${p.value / 2}px`), e;
		}), v = c(() => {
			let e = [];
			return [
				"span",
				"offset",
				"pull",
				"push"
			].forEach((t) => {
				let n = d[t];
				f(n) && (t === "span" ? e.push(m.b(`${d[t]}`)) : n > 0 && e.push(m.b(`${t}-${d[t]}`)));
			}), [
				"xs",
				"sm",
				"md",
				"lg",
				"xl"
			].forEach((t) => {
				f(d[t]) ? e.push(m.b(`${t}-${d[t]}`)) : a(d[t]) && Object.entries(d[t]).forEach(([n, r]) => {
					e.push(n === "span" ? m.b(`${t}-${r}`) : m.b(`${t}-${n}-${r}`));
				});
			}), p.value && e.push(m.is("guttered")), [m.b(), e];
		});
		return (e, a) => (n(), u(r(s.tag), {
			class: i(v.value),
			style: o(g.value)
		}, {
			default: l(() => [t(e.$slots, "default")]),
			_: 3
		}, 8, ["class", "style"]));
	}
}));
//#endregion
export { y as ElCol, y as default, v as colProps };
