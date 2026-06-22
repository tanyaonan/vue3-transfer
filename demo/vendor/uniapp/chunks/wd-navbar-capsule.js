globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, d as r, g as i, h as a } from "./vue.runtime.js";
import { t as o } from "./shared/wot-ui/common/props.ts.js";
import { t as s } from "./wd-icon.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-navbar-capsule/types.ts
var c = /* @__PURE__ */ i({
	name: "wd-navbar-capsule",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: { ...o },
	emits: ["back", "back-home"],
	setup(i, { emit: o }) {
		let c = o;
		function l() {
			c("back");
		}
		function u() {
			c("back-home");
		}
		return (i, o) => (t(), r("div", {
			class: e(`wd-navbar-capsule ${i.customClass}`),
			style: n(i.customStyle)
		}, [a(s, {
			onClick: l,
			name: "left",
			"custom-class": "wd-navbar-capsule__icon"
		}), a(s, {
			onClick: u,
			name: "home",
			"custom-class": "wd-navbar-capsule__icon"
		})], 6));
	}
});
//#endregion
export { c as default };
