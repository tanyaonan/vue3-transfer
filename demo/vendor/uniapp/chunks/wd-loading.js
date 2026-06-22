globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, U as a, a as o, c as s, d as c, g as l, k as u, m as d, s as f, u as p, z as m } from "./vue.runtime.js";
import { j as h, t as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as v, s as y, t as b } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-loading/types.ts
var x = {
	...b,
	customSpinnerClass: y(""),
	type: y("circular"),
	color: String,
	size: v,
	direction: y("vertical"),
	text: String,
	inheritColor: Boolean
}, S = {
	key: 0,
	class: "wd-loading__spinner-wraper"
}, C = {
	key: 1,
	class: "wd-loading__spinner-wraper"
}, w = {
	key: 2,
	class: "wd-loading__spinner-wraper"
}, T = {
	key: 3,
	class: "wd-loading__spinner-wraper"
}, E = {
	key: 0,
	class: "wd-loading__text"
}, D = /*@__PURE__*/ l({
	name: "wd-loading",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: x,
	setup(e, { slots: l }) {
		let v = e, y = Array.from({ length: 12 }, (e, t) => t), b = f(() => {
			let e = {};
			return _(v.color) && (e.color = v.color), v.inheritColor && (e.color = "inherit"), `${h(e)} ${v.customStyle}`;
		}), x = f(() => {
			let e = {};
			return _(v.size) && (e.height = g(v.size), e.width = g(v.size)), h(e);
		});
		return (e, f) => (r(), c("div", {
			class: n(`wd-loading wd-loading--${e.direction} ${e.customClass}`),
			style: i(b.value)
		}, [s("div", {
			class: n(`wd-loading__spinner wd-loading__spinner--${e.type} ${e.customSpinnerClass}`),
			style: i(x.value)
		}, [e.type === "circular" ? (r(), c("div", S)) : p("", !0), e.type === "spinner" ? (r(), c("div", C, [(r(!0), c(o, null, u(m(y), (e) => (r(), c("div", {
			class: "wd-loading__spinner-dot",
			key: e
		}))), 128))])) : e.type === "dots" ? (r(), c("div", w, [(r(), c(o, null, u(3, (e) => s("div", {
			class: "wd-loading__spinner-dot",
			key: e
		})), 64))])) : e.type === "wave" ? (r(), c("div", T, [(r(), c(o, null, u(4, (e) => s("div", {
			class: "wd-loading__spinner-wave-bar",
			key: e
		}, [...f[0] ||= [s("div", { class: "wd-loading__spinner-wave-bar-inner" }, null, -1)]])), 64))])) : p("", !0)], 6), l.default || e.text ? (r(), c("div", E, [t(e.$slots, "default", {}, () => [d(a(e.text), 1)])])) : p("", !0)], 6));
	}
}), O = /* @__PURE__ */ e({ default: () => k }), k = D;
//#endregion
export { O as n, k as t };
