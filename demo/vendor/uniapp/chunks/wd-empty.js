globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, U as i, d as a, g as o, h as s, s as c, u as l } from "./vue.runtime.js";
import { j as u, t as d } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { s as f, t as p } from "./shared/wot-ui/common/props.ts.js";
import { t as m } from "./wd-icon.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-empty/types.ts
var h = {
	...p,
	icon: f("empty"),
	iconSize: [String, Number],
	tip: f("")
}, g = {
	key: 0,
	class: "wd-empty__text"
}, _ = /* @__PURE__ */ o({
	name: "wd-empty",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: h,
	setup(o) {
		let f = o, p = c(() => {
			let e = {};
			return f.iconSize && (e["font-size"] = d(f.iconSize), e.width = d(f.iconSize), e.height = d(f.iconSize)), `${u(e)}`;
		});
		return (o, c) => (n(), a("div", {
			class: t(`wd-empty  ${o.customClass}`),
			style: r(o.customStyle)
		}, [
			e(o.$slots, "image", {}, () => [s(m, {
				name: o.icon,
				"custom-class": "wd-empty__icon",
				"custom-style": p.value
			}, null, 8, ["name", "custom-style"])]),
			o.tip ? (n(), a("div", g, i(o.tip), 1)) : l("", !0),
			e(o.$slots, "bottom")
		], 6));
	}
});
//#endregion
export { _ as default };
