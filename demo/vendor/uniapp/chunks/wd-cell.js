globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, M as a, U as o, c as s, d as c, g as l, l as u, m as d, s as f, u as p, z as m } from "./vue.runtime.js";
import { t as h, y as g } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as _, c as v, r as y, s as b, t as x } from "./shared/wot-ui/common/props.ts.js";
import { t as S } from "./wd-icon.js";
import { t as C } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as w } from "./shared/wot-ui/components/wd-cell-group/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useCell.ts
function T() {
	let { parent: e, index: t } = C(w);
	return {
		border: f(() => e?.value && e.value.props.border && t.value),
		center: f(() => e.value?.props.center),
		size: f(() => e.value?.props.size),
		titleWidth: f(() => e.value?.props.titleWidth),
		layout: f(() => e.value?.props.layout || void 0),
		valueAlign: f(() => e.value?.props.valueAlign || void 0)
	};
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-cell/types.ts
var E = {
	...x,
	title: String,
	value: _(""),
	placeholder: String,
	prefixIcon: String,
	suffixIcon: String,
	iconSize: v,
	iconPrefix: String,
	label: String,
	to: String,
	replace: y(!1),
	clickable: y(!1),
	isLink: y(!1),
	size: String,
	border: y(void 0),
	titleWidth: v,
	center: y(void 0),
	required: y(!1),
	layout: String,
	valueAlign: String,
	ellipsis: y(!1),
	useTitleSlot: y(!0),
	asteriskPosition: b("start"),
	hideAsterisk: y(!1),
	arrowDirection: b("right"),
	customPrefixClass: b(""),
	customSuffixClass: b(""),
	customLabelClass: b(""),
	customValueClass: b(""),
	customTitleClass: b("")
}, D = ["hover-class"], O = {
	key: 0,
	class: "wd-cell__required wd-cell__required--left"
}, k = { class: "wd-cell__title" }, A = {
	key: 1,
	class: "wd-cell__required"
}, j = { class: "wd-cell__right" }, M = { class: "wd-cell__body" }, N = /*@__PURE__*/ l({
	name: "wd-cell",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: E,
	emits: ["click"],
	setup(e, { emit: l, slots: _ }) {
		let v = e, y = l, b = a(), x = T(), C = f(() => !!(g(v.border) ? v.border : x.border.value)), w = f(() => g(v.center) ? v.center : x.center?.value), E = f(() => g(v.size) ? v.size : x.size?.value), N = f(() => g(v.titleWidth) ? v.titleWidth : x.titleWidth?.value), P = f(() => g(v.layout) ? v.layout : x.layout?.value || "horizontal"), F = f(() => g(v.valueAlign) ? v.valueAlign : x.valueAlign?.value || "right"), I = f(() => {
			let e = b.prefix || v.prefixIcon, t = b.title && v.useTitleSlot || v.title, n = b.label || v.label;
			return e || t || n;
		}), L = f(() => !!(v.placeholder && (v.value === "" || v.value === void 0 || v.value === null) && !b.default));
		function R() {
			let e = v.to;
			(v.clickable || v.isLink) && y("click"), e && v.isLink && (v.replace ? uni.redirectTo({ url: e }) : uni.navigateTo({ url: e }));
		}
		return (e, a) => (r(), c("div", {
			class: n([
				"wd-cell",
				C.value ? "is-border" : "",
				E.value ? "is-" + E.value : "",
				w.value ? "is-center" : "",
				e.customClass
			]),
			style: i(e.customStyle),
			"hover-class": e.isLink || e.clickable ? "is-hover" : "none",
			"hover-stay-time": 70,
			onClick: R
		}, [s("div", { class: n(`wd-cell__wrapper wd-cell__wrapper--${P.value}`) }, [I.value ? (r(), c("div", {
			key: 0,
			class: "wd-cell__left",
			style: i(N.value ? "min-width:" + m(h)(N.value) + ";max-width:" + m(h)(N.value) + ";" : "")
		}, [
			e.required && !e.hideAsterisk && e.asteriskPosition === "start" ? (r(), c("span", O, "*")) : p("", !0),
			t(e.$slots, "prefix", {}, () => [e.prefixIcon ? (r(), u(S, {
				key: 0,
				name: e.prefixIcon,
				size: e.iconSize,
				"class-prefix": e.iconPrefix,
				"custom-class": `wd-cell__prefix ${e.customPrefixClass}`
			}, null, 8, [
				"name",
				"size",
				"class-prefix",
				"custom-class"
			])) : p("", !0)]),
			s("div", k, [e.useTitleSlot && _.title ? t(e.$slots, "title", { key: 0 }) : e.title ? (r(), c("span", {
				key: 1,
				class: n(e.customTitleClass)
			}, o(e.title), 3)) : p("", !0), t(e.$slots, "label", {}, () => [e.label ? (r(), c("div", {
				key: 0,
				class: n(`wd-cell__label ${e.customLabelClass}`)
			}, o(e.label), 3)) : p("", !0)])]),
			e.required && !e.hideAsterisk && e.asteriskPosition === "end" ? (r(), c("span", A, "*")) : p("", !0)
		], 4)) : p("", !0), s("div", j, [s("div", M, [s("div", { class: n(`wd-cell__value ${e.customValueClass} wd-cell__value--${F.value} ${e.ellipsis ? "wd-cell__value--ellipsis" : ""} ${L.value ? "wd-cell__placeholder" : ""}`) }, [t(e.$slots, "default", {}, () => [d(o(L.value ? e.placeholder : e.value), 1)])], 2), e.isLink ? (r(), u(S, {
			key: 0,
			"custom-class": "wd-cell__arrow-right",
			name: e.arrowDirection,
			"class-prefix": e.iconPrefix
		}, null, 8, ["name", "class-prefix"])) : t(e.$slots, "suffix", { key: 1 }, () => [e.suffixIcon ? (r(), u(S, {
			key: 0,
			name: e.suffixIcon,
			size: e.iconSize,
			"class-prefix": e.iconPrefix,
			"custom-class": `wd-cell__suffix ${e.customSuffixClass}`
		}, null, 8, [
			"name",
			"size",
			"class-prefix",
			"custom-class"
		])) : p("", !0)])])])], 2)], 14, D));
	}
}), P = /* @__PURE__ */ e({ default: () => F }), F = N;
//#endregion
export { P as n, F as t };
