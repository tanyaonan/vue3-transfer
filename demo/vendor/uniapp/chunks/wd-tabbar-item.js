globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, P as i, U as a, V as o, c as s, d as c, g as l, h as u, l as d, s as f, u as p, v as m } from "./vue.runtime.js";
import { M as h, c as g, j as _, k as v, y } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as b, t as x } from "./shared/wot-ui/common/props.ts.js";
import { t as S } from "./wd-icon.js";
import { t as C } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as w } from "./wd-badge.js";
import { t as T } from "./shared/wot-ui/components/wd-tabbar/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-tabbar-item/types.ts
var E = {
	...x,
	title: String,
	name: b,
	icon: String,
	value: [Number, String],
	isDot: Boolean,
	max: Number,
	badgeProps: Object
}, D = { class: "wd-tabbar-item__body" }, O = /* @__PURE__ */ l({
	name: "wd-tabbar-item",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: E,
	setup(l, { slots: b }) {
		let x = l, { parent: E, index: O } = C(T), k = f(() => {
			let e = g(y(x.badgeProps) ? h(x.badgeProps, v) : {}, h({
				max: x.max,
				isDot: x.isDot,
				value: x.value
			}, v));
			return y(e.max) || (e.max = 99), e;
		}), A = f(() => {
			let e = {};
			return E.value && (j.value && E.value.props.activeColor && (e.color = E.value.props.activeColor), !j.value && E.value.props.inactiveColor && (e.color = E.value.props.inactiveColor)), `${_(e)}`;
		}), j = f(() => {
			let e = y(x.name) ? x.name : O.value;
			return E.value ? E.value.props.modelValue === e : !1;
		});
		function M() {
			let e = y(x.name) ? x.name : O.value;
			E.value && E.value.setChange({ name: e });
		}
		return (l, f) => (n(), c("div", {
			class: t(`wd-tabbar-item ${l.customClass}`),
			style: r(l.customStyle),
			onClick: M
		}, [e(l.$slots, "default", {}, () => [u(w, o(m(k.value)), {
			default: i(() => [s("div", D, [
				e(l.$slots, "icon", { active: j.value }),
				!b.icon && l.icon ? (n(), d(S, {
					key: 0,
					name: l.icon,
					"custom-style": A.value,
					"custom-class": `wd-tabbar-item__body-icon ${j.value ? "is-active" : "is-inactive"}`
				}, null, 8, [
					"name",
					"custom-style",
					"custom-class"
				])) : p("", !0),
				l.title ? (n(), c("span", {
					key: 1,
					style: r(A.value),
					class: t(`wd-tabbar-item__body-title ${j.value ? "is-active" : "is-inactive"}`)
				}, a(l.title), 7)) : p("", !0)
			])]),
			_: 3
		}, 16)])], 6));
	}
});
//#endregion
export { O as default };
