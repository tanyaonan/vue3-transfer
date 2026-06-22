globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, M as a, d as o, g as s, s as c, u as l } from "./vue.runtime.js";
import { j as u } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { r as d, s as f, t as p } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-divider/types.ts
var m = /*@__PURE__*/ s({
	name: "wd-divider",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: {
		...p,
		color: String,
		contentPosition: f("center"),
		dashed: Boolean,
		vertical: d(!1),
		hairline: d(!0)
	},
	setup(e) {
		let s = e, d = a(), f = c(() => {
			let { color: e, customStyle: t } = s, n = {};
			return e && (n.color = e), `${u(n)}${t}`;
		}), p = c(() => {
			let e = "wd-divider";
			return {
				[e]: !0,
				"is-dashed": s.dashed,
				"is-hairline": s.hairline,
				[`${e}--vertical`]: s.vertical,
				[`${e}--center`]: !s.vertical && s.contentPosition === "center" && !!d.default,
				[`${e}--left`]: !s.vertical && s.contentPosition === "left",
				[`${e}--right`]: !s.vertical && s.contentPosition === "right",
				[s.customClass]: !!s.customClass
			};
		});
		return (e, a) => (r(), o("div", {
			class: n(p.value),
			style: i(f.value)
		}, [e.vertical ? l("", !0) : t(e.$slots, "default", { key: 0 })], 6));
	}
}), h = /* @__PURE__ */ e({ default: () => g }), g = m;
//#endregion
export { h as n, g as t };
