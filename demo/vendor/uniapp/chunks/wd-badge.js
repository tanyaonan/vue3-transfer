globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, U as a, d as o, g as s, s as c, u as l } from "./vue.runtime.js";
import { j as u, t as d, w as f, y as p } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as m, r as h, s as g, t as _ } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-badge/types.ts
var v = /*@__PURE__*/ s({
	name: "wd-badge",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		..._,
		shape: g("circle"),
		value: m,
		showZero: h(!1),
		bgColor: String,
		max: Number,
		isDot: Boolean,
		hidden: Boolean,
		type: String,
		top: m,
		right: m,
		border: h(!1)
	},
	setup(e) {
		let s = e, m = c(() => {
			let { value: e, max: t, isDot: n } = s;
			return n ? "" : e && t && f(e) && !Number.isNaN(e) && !Number.isNaN(t) && t < e ? `${t}+` : e;
		}), h = c(() => {
			let e = {};
			return p(s.bgColor) && (e.backgroundColor = s.bgColor), p(s.top) && (e.top = d(s.top)), p(s.right) && (e.right = d(s.right)), u(e);
		}), g = c(() => !s.hidden && (m.value || m.value === 0 && s.showZero || s.isDot));
		return (e, c) => (r(), o("div", {
			class: n(["wd-badge", e.customClass]),
			style: i(e.customStyle)
		}, [t(e.$slots, "default"), g.value ? (r(), o("div", {
			key: 0,
			class: n([
				"wd-badge__content",
				s.border ? "is-border" : "",
				"is-fixed",
				e.type ? "wd-badge__content--" + e.type : "",
				e.isDot ? "is-dot" : "",
				e.shape ? "is-" + e.shape : ""
			]),
			style: i(h.value)
		}, a(m.value), 7)) : l("", !0)], 6));
	}
}), y = /* @__PURE__ */ e({ default: () => b }), b = v;
//#endregion
export { y as n, b as t };
