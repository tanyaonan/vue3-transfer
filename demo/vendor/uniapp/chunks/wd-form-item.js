globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, D as t, N as n, P as r, U as i, d as a, f as o, g as s, l as c, s as l, u, z as d } from "./vue.runtime.js";
import { f, y as p } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as m } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as h } from "./shared/wot-ui/composables/useChildren.ts.js";
import { t as g } from "./wd-cell.js";
import { n as _, t as v } from "./shared/wot-ui/components/wd-form-item/index.js";
import { n as y, t as b } from "./shared/wot-ui/components/wd-form/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-form-item/wd-form-item.vue?vue&type=script&setup=true&lang.ts
var x = {
	key: 0,
	class: "wd-form-item__placeholder"
}, S = { key: 1 }, C = {
	key: 0,
	class: "wd-form-item__error-message"
}, w = /* @__PURE__ */ s({
	name: "wd-form-item",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: _,
	emits: ["click"],
	setup(s, { emit: _, slots: w }) {
		let T = s, { parent: E, index: D } = m(b), { linkChildren: O } = h(v), k = _;
		function A(e) {
			return (Array.isArray(e) ? e : e ? [e] : []).filter((e) => y.includes(e));
		}
		let j = l(() => {
			let e = E.value?.props.validateTrigger, t = p(T.validateTrigger) ? T.validateTrigger : e;
			return new Set(A(t));
		});
		function M(e) {
			return j.value.has(e);
		}
		async function N(e) {
			!T.prop || !M(e) || await E.value?.validate?.(T.prop);
		}
		let P = l(() => {
			if (T.prop) return f(E.value?.props.model, T.prop);
		});
		n(() => P.value, async () => {
			await N("change");
		}, { deep: !0 }), O({
			prop: T.prop,
			shouldTrigger: M,
			validateByTrigger: N
		});
		let F = l(() => E.value && T.prop && E.value.errorMessages && E.value.errorMessages[T.prop] ? E.value.errorMessages[T.prop] : ""), I = l(() => p(T.border) ? T.border : !!(D.value > 0 && E.value && E.value.props.border)), L = l(() => p(T.center) ? T.center : E.value?.props.center), R = l(() => p(T.size) ? T.size : E.value?.props.size), z = l(() => p(T.titleWidth) ? T.titleWidth : E.value?.props.titleWidth || "98px"), B = l(() => p(T.layout) ? T.layout : E.value?.props.layout || "horizontal"), V = l(() => p(T.valueAlign) ? T.valueAlign : E.value?.props.valueAlign || "left"), H = l(() => p(T.ellipsis) ? T.ellipsis : E.value?.props.ellipsis), U = l(() => p(T.asteriskPosition) ? T.asteriskPosition : E.value?.props.asteriskPosition || "start"), W = l(() => p(T.hideAsterisk) ? T.hideAsterisk : E.value?.props.hideAsterisk), G = l(() => !!(T.placeholder && (T.value === "" || T.value === void 0 || T.value === null))), K = l(() => T.required === !0 ? !0 : !T.prop || !E.value?.props.schema?.isRequired ? !1 : !!E.value.props.schema.isRequired(T.prop));
		return (n, s) => (t(), c(g, {
			"custom-class": `wd-form-item ${n.customClass}`,
			"custom-style": n.customStyle,
			"use-title-slot": !!w.title,
			title: n.title,
			label: n.label,
			"title-width": z.value,
			"prefix-icon": n.prefixIcon,
			"icon-size": n.iconSize,
			"icon-prefix": n.iconPrefix,
			required: K.value,
			size: R.value,
			"value-align": V.value,
			center: L.value,
			ellipsis: H.value,
			clickable: n.clickable,
			"is-link": n.isLink,
			"asterisk-position": U.value,
			border: I.value,
			"hide-asterisk": W.value,
			layout: B.value,
			"custom-prefix-class": n.customPrefixClass,
			"custom-label-class": n.customLabelClass,
			"custom-title-class": n.customTitleClass,
			"custom-value-class": n.customValueClass,
			onClick: s[0] ||= (e) => k("click")
		}, o({
			default: r(() => [e(n.$slots, "default", {}, () => [G.value ? (t(), a("span", x, i(n.placeholder), 1)) : d(p)(n.value) ? (t(), a("span", S, i(n.value), 1)) : u("", !0)]), F.value ? (t(), a("div", C, i(F.value), 1)) : u("", !0)]),
			_: 2
		}, [w.title ? {
			name: "title",
			fn: r(() => [e(n.$slots, "title")]),
			key: "0"
		} : void 0, w.label ? {
			name: "label",
			fn: r(() => [e(n.$slots, "label")]),
			key: "1"
		} : void 0]), 1032, [
			"custom-class",
			"custom-style",
			"use-title-slot",
			"title",
			"label",
			"title-width",
			"prefix-icon",
			"icon-size",
			"icon-prefix",
			"required",
			"size",
			"value-align",
			"center",
			"ellipsis",
			"clickable",
			"is-link",
			"asterisk-position",
			"border",
			"hide-asterisk",
			"layout",
			"custom-prefix-class",
			"custom-label-class",
			"custom-title-class",
			"custom-value-class"
		]));
	}
});
//#endregion
export { w as default };
