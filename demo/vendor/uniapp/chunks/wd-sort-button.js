globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { B as t, D as n, H as r, U as i, c as a, d as o, g as s, h as c } from "./vue.runtime.js";
import { i as l, r as u, s as d, t as f } from "./shared/wot-ui/common/props.ts.js";
import { t as p } from "./wd-icon.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-sort-button/types.ts
var m = {
	...f,
	modelValue: l(0),
	title: d(""),
	allowReset: u(!1),
	descFirst: u(!1),
	line: u(!1)
}, h = { class: "wd-sort-button__wrapper" }, g = { class: "wd-sort-button__right" }, _ = /*@__PURE__*/ s({
	name: "wd-sort-button",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: m,
	emits: ["update:modelValue", "change"],
	setup(e, { emit: s }) {
		let l = e, u = s;
		function d() {
			let { modelValue: e, allowReset: t, descFirst: n } = l, r;
			r = n ? e === 0 ? -1 : e === -1 ? 1 : t ? 0 : -1 : e === 0 ? 1 : e === 1 ? -1 : +!t, u("update:modelValue", r), u("change", { value: r });
		}
		return (e, s) => (n(), o("div", {
			class: t(`wd-sort-button ${e.line ? "wd-sort-button--line" : ""} ${e.customClass}`),
			style: r(e.customStyle),
			onClick: d
		}, [a("div", h, [a("div", { class: t(`wd-sort-button__left ${e.modelValue === 0 ? "" : "is-active"}`) }, i(e.title), 3), a("div", g, [c(p, {
			name: "caret-up",
			"custom-class": `wd-sort-button__icon-up ${e.modelValue === -1 ? "wd-sort-button__icon-up--active" : ""}`
		}, null, 8, ["custom-class"]), c(p, {
			name: "caret-down",
			"custom-class": `wd-sort-button__icon-down  ${e.modelValue === 1 ? "wd-sort-button__icon-down--active" : ""}`
		}, null, 8, ["custom-class"])])])], 6));
	}
}), v = /* @__PURE__ */ e({ default: () => y }), y = _;
//#endregion
export { v as n, y as t };
