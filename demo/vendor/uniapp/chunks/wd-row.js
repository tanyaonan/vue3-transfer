globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, d as i, g as a, s as o } from "./vue.runtime.js";
import { j as s, t as c } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as l } from "./shared/wot-ui/composables/useChildren.ts.js";
import { n as u, t as d } from "./shared/wot-ui/components/wd-row/index.js";
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-row/wd-row.vue
var f = /* @__PURE__ */ a({
	name: "wd-row",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: u,
	setup(a) {
		let u = a, { linkChildren: f } = l(d);
		f({ props: u });
		let p = {
			start: "flex-start",
			center: "center",
			end: "flex-end",
			"space-between": "space-between",
			"space-around": "space-around",
			"space-evenly": "space-evenly"
		}, m = {
			top: "flex-start",
			middle: "center",
			bottom: "flex-end"
		}, h = o(() => `wd-row ${u.customClass}`), g = o(() => {
			let e = {}, { gutter: t, justify: n, align: r } = u;
			return t < 0 ? console.error("[wot ui] warning(wd-row): attribute gutter must be greater than or equal to 0") : t && (e.marginLeft = c(-t / 2), e.marginRight = c(-t / 2)), n && n !== "start" && (e.justifyContent = p[n] || n), r && r !== "top" && (e.alignItems = m[r] || r), `${s(e)}${u.customStyle}`;
		});
		return (a, o) => (n(), i("div", {
			class: t(h.value),
			style: r(g.value)
		}, [e(a.$slots, "default")], 6));
	}
});
//#endregion
export { f as default };
