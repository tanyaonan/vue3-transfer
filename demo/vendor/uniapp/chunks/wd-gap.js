globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, d as r, g as i, s as a } from "./vue.runtime.js";
import { j as o, t as s, y as c } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as l, r as u, s as d, t as f } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-gap/types.ts
var p = /* @__PURE__ */ i({
	name: "wd-gap",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...f,
		bgColor: d("transparent"),
		safeAreaBottom: u(!1),
		height: l(14)
	},
	setup(i) {
		let l = i, u = a(() => {
			let e = {};
			return c(l.bgColor) && (e.background = l.bgColor), c(l.height) && (e.height = s(l.height)), `${o(e)}${l.customStyle}`;
		});
		return (i, a) => (t(), r("div", {
			class: e(`wd-gap ${i.safeAreaBottom ? "wd-gap--safe" : ""} ${i.customClass}`),
			style: n(u.value)
		}, null, 6));
	}
});
//#endregion
export { p as default };
