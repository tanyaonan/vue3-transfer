globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { G as e, H as t, Mt as n, T as r, _ as i, x as a } from "./vue.runtime.js";
import { t as o } from "./shared/element-plus/utils/vue/install.js";
import { t as s } from "./shared/element-plus/utils/types.js";
import { t as c } from "./shared/element-plus/constants/event.js";
import { n as l } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as u } from "./shared/element-plus/hooks/use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/check-tag/src/check-tag.mjs
var d = l({
	checked: Boolean,
	disabled: Boolean,
	type: {
		type: String,
		values: [
			"primary",
			"success",
			"info",
			"warning",
			"danger"
		],
		default: "primary"
	}
}), f = {
	"update:checked": (e) => s(e),
	[c]: (e) => s(e)
}, p = o(/* @__PURE__ */ r({
	name: "ElCheckTag",
	__name: "check-tag",
	props: d,
	emits: f,
	setup(r, { emit: o }) {
		let s = r, l = o, d = u("check-tag"), f = i(() => [
			d.b(),
			d.is("checked", s.checked),
			d.is("disabled", s.disabled),
			d.m(s.type || "primary")
		]), p = () => {
			if (s.disabled) return;
			let e = !s.checked;
			l(c, e), l("update:checked", e);
		};
		return (r, i) => (t(), a("span", {
			class: n(f.value),
			onClick: p
		}, [e(r.$slots, "default")], 2));
	}
}));
//#endregion
export { p as ElCheckTag, p as default, f as checkTagEmits, d as checkTagProps };
