globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, D as t, H as n, L as r, N as i, P as a, c as o, g as s, h as c, l, s as u } from "./vue.runtime.js";
import { i as d, r as f, s as p, t as m } from "./shared/wot-ui/common/props.ts.js";
import { t as h } from "./wd-icon.js";
import { t as g } from "./wd-popup.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-curtain/types.ts
var _ = {
	...m,
	value: f(!1),
	modelValue: f(!1),
	closePosition: p("inset"),
	src: String,
	to: String,
	width: Number,
	closeOnClickModal: f(!1),
	hideWhenClose: f(!0),
	zIndex: d(10),
	customCloseClass: p(""),
	customCloseStyle: p(""),
	rootPortal: f(!1),
	showMenuByLongpress: f(!1),
	closeOnClick: f(!0)
}, v = { class: "wd-curtain__content" }, y = ["src", "show-menu-by-longpress"], b = /* @__PURE__ */ s({
	name: "wd-curtain",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: _,
	emits: [
		"beforeenter",
		"enter",
		"afterenter",
		"beforeleave",
		"leave",
		"afterleave",
		"close",
		"closed",
		"click-modal",
		"load",
		"error",
		"click",
		"update:modelValue"
	],
	setup(s, { emit: d }) {
		let f = s, p = d, m = r(f.modelValue || f.value);
		i(() => f.modelValue, (e) => {
			m.value = e;
		}), i(() => f.value, (e) => {
			m.value = e;
		}), i(m, (e) => {
			p("update:modelValue", e), e || p("close");
		});
		let _ = r(!0), b = r(1), x = u(() => {
			let e = "";
			return f.width && (e += `width: ${f.width}px ;`, e += `height: ${f.width / b.value}px`), e;
		});
		function S() {
			p("beforeenter");
		}
		function C() {
			p("enter");
		}
		function w() {
			p("afterenter");
		}
		function T() {
			p("beforeleave");
		}
		function E() {
			p("leave");
		}
		function D() {
			p("afterleave"), p("closed");
		}
		function O() {
			m.value = !1;
		}
		function k() {
			p("click-modal");
		}
		function A(e) {
			let { height: t, width: n } = e.detail;
			b.value = n / t, _.value = !0, p("load");
		}
		function j() {
			_.value = !1, p("error");
		}
		function M() {
			f.to && uni.navigateTo({ url: f.to }), p("click"), f.closeOnClick && O();
		}
		return (r, i) => (t(), l(g, {
			modelValue: m.value,
			"onUpdate:modelValue": i[0] ||= (e) => m.value = e,
			transition: "zoom-in",
			position: "center",
			"close-on-click-modal": r.closeOnClickModal,
			"hide-when-close": r.hideWhenClose,
			"z-index": r.zIndex,
			"root-portal": r.rootPortal,
			onBeforeEnter: S,
			onEnter: C,
			onAfterEnter: w,
			onBeforeLeave: T,
			onLeave: E,
			onAfterLeave: D,
			onClose: O,
			onClickModal: k,
			"custom-class": `wd-curtain ${r.customClass}`,
			"custom-style": r.customStyle
		}, {
			default: a(() => [o("div", v, [o("img", {
				src: r.src,
				class: "wd-curtain__content-img",
				style: n(x.value),
				"show-menu-by-longpress": r.showMenuByLongpress,
				onClick: M,
				onError: j,
				onLoad: A
			}, null, 44, y), e(r.$slots, "close", {}, () => [c(h, {
				name: "close-circle",
				"custom-class": `wd-curtain__content-close ${r.closePosition} ${r.customCloseClass}`,
				"custom-style": r.customCloseStyle,
				onClick: O
			}, null, 8, ["custom-class", "custom-style"])])])]),
			_: 3
		}, 8, [
			"modelValue",
			"close-on-click-modal",
			"hide-when-close",
			"z-index",
			"root-portal",
			"custom-class",
			"custom-style"
		]));
	}
});
//#endregion
export { b as default };
