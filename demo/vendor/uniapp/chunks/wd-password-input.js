globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, U as r, a as i, c as a, d as o, g as s, k as c, u as l, z as u } from "./vue.runtime.js";
import { t as d } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as f, i as p, r as m, s as h, t as g } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-password-input/types.ts
var _ = {
	...g,
	modelValue: h(""),
	mask: m(!0),
	info: h(""),
	errorInfo: h(""),
	gutter: f(0),
	length: p(6),
	focused: m(!0)
}, v = {
	key: 0,
	class: "wd-password-input__cursor"
}, y = {
	key: 1,
	class: /*@__PURE__*/ e("wd-password-input__value")
}, b = { key: 0 }, x = /* @__PURE__ */ s({
	name: "wd-password-input",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: _,
	emits: ["focus"],
	setup(s, { emit: f }) {
		let p = f;
		function m(e) {
			p("focus", e);
		}
		return (s, f) => (t(), o("div", {
			class: e(`wd-password-input ${s.customClass}`),
			style: n(s.customStyle)
		}, [a("div", {
			onTouchstart: m,
			class: "wd-password-input__security"
		}, [(t(!0), o(i, null, c(s.length, (i, c) => (t(), o("div", {
			key: c,
			class: e(`wd-password-input__item ${s.gutter ? "" : "is-border"}`),
			style: n({ marginLeft: c !== 0 && s.gutter ? u(d)(s.gutter) : 0 })
		}, [s.focused && c === s.modelValue.length ? (t(), o("div", v)) : (t(), o("div", y, [a("div", {
			style: n({ visibility: s.mask && s.modelValue[c] ? "visible" : "hidden" }),
			class: "wd-password-input__mask"
		}, null, 4), !s.mask && s.modelValue[c] ? (t(), o("span", b, r(s.modelValue[c]), 1)) : l("", !0)]))], 6))), 128))], 32), s.info || s.errorInfo ? (t(), o("div", {
			key: 0,
			class: e(`wd-password-input__info ${s.errorInfo ? "is-error" : ""}`)
		}, r(s.errorInfo || s.info), 3)) : l("", !0)], 6));
	}
});
//#endregion
export { x as default };
