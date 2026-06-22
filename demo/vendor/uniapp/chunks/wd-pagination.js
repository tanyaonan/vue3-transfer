globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, U as o, c as s, d as c, g as l, h as u, u as d, z as f } from "./vue.runtime.js";
import { i as p, o as m, r as h, t as g } from "./shared/wot-ui/common/props.ts.js";
import { t as _ } from "./wd-button.js";
import { t as v } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-pagination/types.ts
var y = {
	...g,
	modelValue: m(Number),
	totalPage: p(1),
	showIcon: h(!1),
	buttonVariant: {
		type: String,
		default: "text"
	},
	showMessage: h(!1),
	total: p(0),
	pageSize: p(10),
	prevText: String,
	nextText: String,
	hideIfOnePage: h(!1)
}, b = { class: "wd-pagination__content" }, x = { class: "wd-pagination__size" }, S = { class: "wd-pagination__current" }, C = { class: "wd-pagination__total" }, w = { class: "wd-pagination__message" }, T = { key: 0 }, E = /* @__PURE__ */ l({
	name: "wd-pagination",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: y,
	emits: ["change", "update:modelValue"],
	setup(l, { emit: p }) {
		let { translate: m } = v("pagination"), h = l, g = p, y = i(0);
		a(() => h.totalPage, (e) => {
			!y.value && e && (y.value = e);
		}, {
			immediate: !0,
			deep: !0
		}), a(() => h.total, () => {
			O();
		}, {
			immediate: !0,
			deep: !0
		});
		function E() {
			let { modelValue: e } = h;
			e > y.value - 1 || (g("change", { value: e + 1 }), g("update:modelValue", e + 1));
		}
		function D() {
			let { modelValue: e } = h;
			e < 2 || (g("change", { value: e - 1 }), g("update:modelValue", e - 1));
		}
		function O() {
			let { total: e, pageSize: t } = h;
			y.value = Math.ceil(e / t);
		}
		return (i, a) => i.hideIfOnePage && y.value === 1 ? d("", !0) : (n(), c("div", {
			key: 0,
			class: t(`wd-pagination ${i.customClass}`),
			style: r(i.customStyle)
		}, [s("div", b, [
			e(i.$slots, "prev", {
				modelValue: i.modelValue,
				totalPageNum: y.value,
				total: i.total,
				pageSize: i.pageSize
			}, () => [u(_, {
				plain: i.modelValue > 1,
				type: "info",
				variant: i.buttonVariant,
				size: "small",
				disabled: i.modelValue <= 1,
				"custom-class": "wd-pagination__nav",
				icon: i.showIcon ? "left" : "",
				text: i.showIcon ? "" : i.prevText || f(m)("prev"),
				onClick: D
			}, null, 8, [
				"plain",
				"variant",
				"disabled",
				"icon",
				"text"
			])]),
			e(i.$slots, "size", {
				modelValue: i.modelValue,
				totalPageNum: y.value,
				total: i.total,
				pageSize: i.pageSize
			}, () => [s("div", x, [
				s("span", S, o(i.modelValue), 1),
				a[0] ||= s("span", { class: "wd-pagination__separator" }, "/", -1),
				s("span", C, o(y.value), 1)
			])]),
			e(i.$slots, "next", {
				modelValue: i.modelValue,
				totalPageNum: y.value,
				total: i.total,
				pageSize: i.pageSize
			}, () => [u(_, {
				plain: i.modelValue < y.value,
				type: "primary",
				variant: i.buttonVariant,
				size: "small",
				disabled: i.modelValue >= y.value,
				"custom-class": "wd-pagination__nav",
				icon: i.showIcon ? "right" : "",
				text: i.showIcon ? "" : i.nextText || f(m)("next"),
				onClick: E
			}, null, 8, [
				"plain",
				"variant",
				"disabled",
				"icon",
				"text"
			])])
		]), i.showMessage ? e(i.$slots, "message", {
			key: 0,
			modelValue: i.modelValue,
			totalPageNum: y.value,
			total: i.total,
			pageSize: i.pageSize
		}, () => [s("div", w, [
			s("span", null, o(f(m)("page", i.modelValue)) + "，", 1),
			i.total ? (n(), c("span", T, o(f(m)("total", i.total)) + "，", 1)) : d("", !0),
			s("span", null, o(f(m)("size", i.pageSize)), 1)
		])]) : d("", !0)], 6));
	}
});
//#endregion
export { E as default };
