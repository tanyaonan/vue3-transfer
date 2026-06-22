globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, N as a, d as o, g as s } from "./vue.runtime.js";
import { t as c } from "./shared/wot-ui/composables/useChildren.ts.js";
import { n as l, t as u } from "./shared/wot-ui/components/wd-radio-group/index.js";
var d = /*@__PURE__*/ s({
	name: "wd-radio-group",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: l,
	emits: ["change", "update:modelValue"],
	setup(e, { emit: s }) {
		let l = e, d = s, { linkChildren: f } = c(u);
		f({
			props: l,
			updateValue: p
		}), a(() => l.type, (e) => {
			let t = [
				"circle",
				"dot",
				"button",
				"square"
			];
			t.indexOf(e) === -1 && console.error(`type must be one of ${t.toString()}`);
		}, {
			deep: !0,
			immediate: !0
		});
		function p(e) {
			d("update:modelValue", e), d("change", { value: e });
		}
		return (e, a) => (r(), o("div", {
			class: n(`wd-radio-group  ${e.customClass}`),
			style: i(e.customStyle)
		}, [t(e.$slots, "default")], 6));
	}
}), f = /* @__PURE__ */ e({ default: () => p }), p = d;
//#endregion
export { f as n, p as t };
