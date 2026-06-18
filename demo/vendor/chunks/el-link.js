globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { G as e, H as t, J as n, Mt as r, T as i, _ as a, b as o, tt as s, x as c, y as l, yt as u } from "./vue.runtime.js";
import { t as d } from "./shared/element-plus/utils/vue/install.js";
import { t as f } from "./shared/element-plus/utils/types.js";
import { n as p } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as m } from "./shared/element-plus/hooks/use-namespace.js";
import { a as h } from "./shared/element-plus/utils/vue/icon.js";
import { t as g } from "./el-icon.js";
import { t as _ } from "./shared/element-plus/hooks/use-deprecated.js";
import { r as v } from "./el-config-provider/constants.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/link/src/link.mjs
var y = p({
	type: {
		type: String,
		values: [
			"primary",
			"success",
			"warning",
			"info",
			"danger",
			"default"
		],
		default: void 0
	},
	underline: {
		type: [Boolean, String],
		values: [
			!0,
			!1,
			"always",
			"never",
			"hover"
		],
		default: void 0
	},
	disabled: Boolean,
	href: {
		type: String,
		default: ""
	},
	target: {
		type: String,
		default: "_self"
	},
	icon: { type: h }
}), b = { click: (e) => e instanceof MouseEvent }, x = ["href", "target"], S = d(/* @__PURE__ */ i({
	name: "ElLink",
	__name: "link",
	props: y,
	emits: b,
	setup(i, { emit: d }) {
		let p = i, h = d, y = v("link");
		_({
			scope: "el-link",
			from: "The underline option (boolean)",
			replacement: "'always' | 'hover' | 'never'",
			version: "3.0.0",
			ref: "https://element-plus.org/en-US/component/link.html#underline"
		}, a(() => f(p.underline)));
		let b = m("link"), S = a(() => [
			b.b(),
			b.m(p.type ?? y.value?.type ?? "default"),
			b.is("disabled", p.disabled),
			b.is("underline", C.value === "always"),
			b.is("hover-underline", C.value === "hover" && !p.disabled)
		]), C = a(() => f(p.underline) ? p.underline ? "hover" : "never" : p.underline ?? y.value?.underline ?? "hover");
		function w(e) {
			p.disabled || h("click", e);
		}
		return (a, d) => (t(), c("a", {
			class: r(S.value),
			href: i.disabled || !i.href ? void 0 : i.href,
			target: i.disabled || !i.href ? void 0 : i.target,
			onClick: w
		}, [
			i.icon ? (t(), l(u(g), { key: 0 }, {
				default: s(() => [(t(), l(n(i.icon)))]),
				_: 1
			})) : o("v-if", !0),
			a.$slots.default ? (t(), c("span", {
				key: 1,
				class: r(u(b).e("inner"))
			}, [e(a.$slots, "default")], 2)) : o("v-if", !0),
			a.$slots.icon ? e(a.$slots, "icon", { key: 2 }) : o("v-if", !0)
		], 10, x));
	}
}));
//#endregion
export { S as ElLink, S as default, b as linkEmits, y as linkProps };
