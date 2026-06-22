globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, U as i, c as a, d as o, g as s, u as c } from "./vue.runtime.js";
import { t as l } from "./shared/wot-ui/composables/useChildren.ts.js";
import { n as u, t as d } from "./shared/wot-ui/components/wd-cell-group/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-cell-group/wd-cell-group.vue?vue&type=script&setup=true&lang.ts
var f = {
	key: 0,
	class: "wd-cell-group__title"
}, p = { class: "wd-cell-group__left" }, m = { key: 0 }, h = { class: "wd-cell-group__right" }, g = { key: 0 }, _ = { class: "wd-cell-group__body" }, v = /* @__PURE__ */ s({
	name: "wd-cell-group",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: u,
	setup(s, { slots: u }) {
		let v = s, { linkChildren: y } = l(d);
		return y({ props: v }), (s, l) => (n(), o("div", {
			class: t([
				"wd-cell-group",
				s.border ? "is-border" : "",
				s.customClass,
				s.insert ? "wd-cell-group--insert" : ""
			]),
			style: r(s.customStyle)
		}, [s.title || s.value || u.title || u.value ? (n(), o("div", f, [a("div", p, [u.title ? e(s.$slots, "title", { key: 1 }) : (n(), o("span", m, i(s.title), 1))]), a("div", h, [u.value ? e(s.$slots, "value", { key: 1 }) : (n(), o("span", g, i(s.value), 1))])])) : c("", !0), a("div", _, [e(s.$slots, "default")])], 6));
	}
});
//#endregion
export { v as default };
