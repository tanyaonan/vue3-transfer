globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, d as i, g as a, s as o } from "./vue.runtime.js";
import { j as s, t as c, y as l } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as u } from "./shared/wot-ui/composables/useChildren.ts.js";
import { n as d, t as f } from "./shared/wot-ui/components/wd-grid/index.js";
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-grid/wd-grid.vue
var p = /* @__PURE__ */ a({
	name: "wd-grid",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: d,
	setup(a) {
		let d = a, { linkChildren: p } = u(f);
		p({ props: d });
		let m = o(() => {
			let e = {};
			return l(d.gutter) && (e.paddingLeft = c(d.gutter), d.square && (e.marginBottom = c(-d.gutter))), `${s(e)}${d.customStyle || ""}`;
		});
		return (a, o) => (n(), i("div", {
			class: t(`wd-grid ${a.customClass}`),
			style: r(m.value)
		}, [e(a.$slots, "default")], 6));
	}
});
//#endregion
export { p as default };
