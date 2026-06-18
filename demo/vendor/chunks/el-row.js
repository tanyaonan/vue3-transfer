globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { G as e, H as t, J as n, Mt as r, Pt as i, T as a, U as o, _ as s, tt as c, y as l } from "./vue.runtime.js";
import { t as u } from "./shared/element-plus/utils/vue/install.js";
import { n as d } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as f } from "./shared/element-plus/hooks/use-namespace.js";
import { t as p } from "./el-row/constants.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/row/src/row.mjs
var m = [
	"start",
	"center",
	"end",
	"space-around",
	"space-between",
	"space-evenly"
], h = [
	"top",
	"middle",
	"bottom"
], g = d({
	tag: {
		type: String,
		default: "div"
	},
	gutter: {
		type: Number,
		default: 0
	},
	justify: {
		type: String,
		values: m,
		default: "start"
	},
	align: {
		type: String,
		values: h
	}
}), _ = u(/* @__PURE__ */ a({
	name: "ElRow",
	__name: "row",
	props: g,
	setup(a) {
		let u = a, d = f("row");
		o(p, { gutter: s(() => u.gutter) });
		let m = s(() => {
			let e = {};
			return u.gutter && (e.marginRight = e.marginLeft = `-${u.gutter / 2}px`), e;
		}), h = s(() => [
			d.b(),
			d.is(`justify-${u.justify}`, u.justify !== "start"),
			d.is(`align-${u.align}`, !!u.align)
		]);
		return (o, s) => (t(), l(n(a.tag), {
			class: r(h.value),
			style: i(m.value)
		}, {
			default: c(() => [e(o.$slots, "default")]),
			_: 3
		}, 8, ["class", "style"]));
	}
}));
//#endregion
export { _ as ElRow, _ as default, h as RowAlign, m as RowJustify, p as rowContextKey, g as rowProps };
