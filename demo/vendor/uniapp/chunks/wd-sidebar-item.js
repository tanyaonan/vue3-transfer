globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, P as i, U as a, b as o, d as s, g as c, h as l, l as u, m as d, s as f, u as p } from "./vue.runtime.js";
import { M as m, c as h, k as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { o as v, r as y, t as b } from "./shared/wot-ui/common/props.ts.js";
import { t as x } from "./wd-icon.js";
import { t as S } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as C } from "./wd-badge.js";
import { t as w } from "./shared/wot-ui/components/wd-sidebar/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-sidebar-item/types.ts
var T = /* @__PURE__ */ c({
	name: "wd-sidebar-item",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...b,
		label: v(String),
		value: v([Number, String]),
		badge: [String, Number],
		badgeProps: Object,
		icon: String,
		isDot: {
			type: Boolean,
			default: void 0
		},
		max: Number,
		disabled: y(!1)
	},
	setup(c, { slots: v }) {
		let y = c, { parent: b } = S(w), T = f(() => {
			let e = h(_(y.badgeProps) ? m(y.badgeProps, g) : {}, m({
				max: y.max,
				isDot: y.isDot,
				value: y.badge
			}, g));
			return _(e.max) || (e.max = 99), e;
		}), E = f(() => {
			let e = !1;
			return b.value && b.value.props.modelValue === y.value && (e = !0), e;
		}), D = f(() => {
			let e = !1;
			if (b.value) {
				let t = b.value.children.findIndex((e) => e.value === b.value.props.modelValue);
				b.value.children.findIndex((e) => e.value === y.value) === t - 1 && (e = !0);
			}
			return e;
		}), O = f(() => {
			let e = !1;
			if (b.value) {
				let t = b.value.children.findIndex((e) => e.value === b.value.props.modelValue);
				b.value.children.findIndex((e) => e.value === y.value) === t + 1 && (e = !0);
			}
			return e;
		});
		function k() {
			y.disabled || b.value && b.value.setChange(y.value, y.label);
		}
		return (c, f) => (n(), s("div", {
			onClick: k,
			class: t(`wd-sidebar-item ${E.value ? "wd-sidebar-item--active" : ""} ${D.value ? "wd-sidebar-item--prefix" : ""}  ${O.value ? "wd-sidebar-item--suffix" : ""} ${c.disabled ? "wd-sidebar-item--disabled" : ""} ${c.customClass}`),
			style: r(c.customStyle)
		}, [
			e(c.$slots, "icon"),
			!v.icon && c.icon ? (n(), u(x, {
				key: 0,
				"custom-class": "wd-sidebar-item__icon",
				name: c.icon
			}, null, 8, ["name"])) : p("", !0),
			l(C, o(T.value, { "custom-class": "wd-sidebar-item__badge" }), {
				default: i(() => [d(a(c.label), 1)]),
				_: 1
			}, 16)
		], 6));
	}
});
//#endregion
export { T as default };
