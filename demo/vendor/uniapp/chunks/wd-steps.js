globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, d as i, g as a } from "./vue.runtime.js";
import { t as o } from "./shared/wot-ui/composables/useChildren.ts.js";
import { n as s, t as c } from "./shared/wot-ui/components/wd-steps/index.js";
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-steps/wd-steps.vue
var l = /* @__PURE__ */ a({
	name: "wd-steps",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: s,
	setup(a) {
		let s = a, { linkChildren: l } = o(c);
		return l({ props: s }), (a, o) => (n(), i("div", {
			class: t(`wd-steps ${a.customClass} ${a.vertical ? "is-vertical" : ""}`),
			style: r(a.customStyle)
		}, [e(a.$slots, "default")], 6));
	}
});
//#endregion
export { l as default };
