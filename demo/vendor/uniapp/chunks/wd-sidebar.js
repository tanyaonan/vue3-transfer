globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, c as i, d as a, g as o } from "./vue.runtime.js";
import { t as s } from "./shared/wot-ui/composables/useChildren.ts.js";
import { t as c } from "./shared/wot-ui/common/interceptor.ts.js";
import { n as l, t as u } from "./shared/wot-ui/components/wd-sidebar/index.js";
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-sidebar/wd-sidebar.vue
var d = /* @__PURE__ */ o({
	name: "wd-sidebar",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: l,
	emits: ["change", "update:modelValue"],
	setup(o, { emit: l }) {
		let d = o, f = l, { linkChildren: p } = s(u);
		p({
			props: d,
			setChange: m
		});
		function m(e, t) {
			c(d.beforeChange, {
				args: [e],
				done: () => h(e, t)
			});
		}
		function h(e, t) {
			f("update:modelValue", e), f("change", {
				value: e,
				label: t
			});
		}
		return (o, s) => (n(), a("div", {
			class: t(`wd-sidebar ${o.customClass}`),
			style: r(o.customStyle)
		}, [e(o.$slots, "default"), s[0] ||= i("div", { class: "wd-sidebar__padding" }, null, -1)], 6));
	}
});
//#endregion
export { d as default };
