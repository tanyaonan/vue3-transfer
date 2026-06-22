globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { G as t, H as n, J as r, Mt as i, N as a, Pt as o, T as s, V as c, X as l, _ as u, tt as d, ut as f, y as p, z as m } from "./vue.runtime.js";
import { t as h } from "./shared/element-plus/utils/vue/install.js";
import { s as g } from "./shared/element-plus/utils/types.js";
import { n as _ } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as v } from "./shared/element-plus/hooks/use-namespace.js";
import { t as y } from "./shared/element-plus/constants/size.js";
import { r as b } from "./el-form/hooks/use-form-common-props.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/text/src/text.mjs
var x = _({
	type: {
		type: String,
		values: [
			"primary",
			"success",
			"info",
			"warning",
			"danger",
			""
		],
		default: ""
	},
	size: {
		type: String,
		values: y,
		default: ""
	},
	truncated: Boolean,
	lineClamp: { type: [String, Number] },
	tag: {
		type: String,
		default: "span"
	}
}), S = /* @__PURE__ */ s({
	name: "ElText",
	__name: "text",
	props: x,
	setup(e) {
		let s = e, h = l(), _ = f(), y = b(), x = v("text"), S = u(() => [
			x.b(),
			x.m(s.type),
			x.m(y.value),
			x.is("truncated", s.truncated),
			x.is("line-clamp", !g(s.lineClamp))
		]), C = async () => {
			if (await a(), h.title) return;
			let e = !1, t = _.value?.textContent || "";
			if (s.truncated) {
				let t = _.value?.offsetWidth, n = _.value?.scrollWidth;
				t && n && n > t && (e = !0);
			} else if (!g(s.lineClamp)) {
				let t = _.value?.offsetHeight, n = _.value?.scrollHeight;
				t && n && n > t && (e = !0);
			}
			e ? _.value?.setAttribute("title", t) : _.value?.removeAttribute("title");
		};
		return m(C), c(C), (a, s) => (n(), p(r(e.tag), {
			ref_key: "textRef",
			ref: _,
			class: i(S.value),
			style: o({ "-webkit-line-clamp": e.lineClamp })
		}, {
			default: d(() => [t(a.$slots, "default")]),
			_: 3
		}, 8, ["class", "style"]));
	}
}), C = /* @__PURE__ */ e({
	ElText: () => w,
	default: () => w,
	textProps: () => x
}), w = h(S);
//#endregion
export { C as n, w as t };
