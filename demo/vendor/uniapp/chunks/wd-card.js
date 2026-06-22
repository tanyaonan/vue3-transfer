globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, U as i, c as a, d as o, g as s, u as c } from "./vue.runtime.js";
import { s as l, t as u } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-card/types.ts
var d = {
	...u,
	title: String,
	type: String,
	customTitleClass: l(""),
	customContentClass: l(""),
	customFooterClass: l("")
}, f = {
	key: 0,
	class: "wd-card__title-text"
}, p = /* @__PURE__ */ s({
	name: "wd-card",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: d,
	setup(s, { slots: l }) {
		return (s, u) => (n(), o("div", {
			class: t(`wd-card ${s.type ? `wd-card--${s.type}` : ""} ${s.customClass}`),
			style: r(s.customStyle)
		}, [
			s.title || l.title ? (n(), o("div", {
				key: 0,
				class: t(`wd-card__title ${s.customTitleClass}`)
			}, [e(s.$slots, "title", {}, () => [s.title ? (n(), o("span", f, i(s.title), 1)) : c("", !0)])], 2)) : c("", !0),
			a("div", { class: t(`wd-card__content ${s.customContentClass}`) }, [e(s.$slots, "default")], 2),
			l.footer ? (n(), o("div", {
				key: 1,
				class: t(`wd-card__footer ${s.customFooterClass}`)
			}, [e(s.$slots, "footer")], 2)) : c("", !0)
		], 6));
	}
});
//#endregion
export { p as default };
