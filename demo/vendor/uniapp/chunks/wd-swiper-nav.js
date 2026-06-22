globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { B as t, D as n, H as r, U as i, a, c as o, d as s, g as c, h as l, k as u, m as d, u as f } from "./vue.runtime.js";
import { i as p, r as m, s as h, t as g } from "./shared/wot-ui/common/props.ts.js";
import { t as _ } from "./wd-icon.js";
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-swiper-nav/wd-swiper-nav.vue?vue&type=script&setup=true&lang.ts
var v = /*@__PURE__*/ c({
	__name: "wd-swiper-nav",
	props: {
		...g,
		current: p(0),
		direction: h("horizontal"),
		minShowNum: p(2),
		indicatorPosition: h("bottom"),
		showControls: m(!1),
		total: p(0),
		type: h("dots")
	},
	emits: ["change"],
	setup(e, { emit: c }) {
		let p = c;
		function m(e) {
			p("change", {
				dir: e,
				source: "nav"
			});
		}
		return (e, c) => (n(), s(a, null, [e.showControls ? (n(), s(a, { key: 0 }, [o("div", {
			class: "wd-swiper-nav__btn wd-swiper-nav__btn--prev",
			onClick: c[0] ||= (e) => m("prev")
		}, [l(_, {
			name: "left",
			"custom-class": "wd-swiper-nav__btn-icon"
		})]), o("div", {
			class: "wd-swiper-nav__btn wd-swiper-nav__btn--next",
			onClick: c[1] ||= (e) => m("next")
		}, [l(_, {
			name: "right",
			"custom-class": "wd-swiper-nav__btn-icon"
		})])], 64)) : f("", !0), e.total >= e.minShowNum ? (n(), s("div", {
			key: 1,
			style: r(e.customStyle),
			class: t(`wd-swiper-nav wd-swiper-nav--${e.direction} wd-swiper-nav--${e.type} wd-swiper-nav--${e.indicatorPosition} ${e.customClass}`)
		}, [e.type === "dots" || e.type === "dots-bar" ? (n(!0), s(a, { key: 0 }, u(e.total, (r, i) => (n(), s("div", {
			key: i,
			class: t(`wd-swiper-nav__item--${e.type} ${e.current === i ? "is-active" : ""} is-${e.direction}`)
		}, null, 2))), 128)) : f("", !0), e.type === "fraction" ? (n(), s(a, { key: 1 }, [d(i(e.current + 1) + "/" + i(e.total), 1)], 64)) : f("", !0)], 6)) : f("", !0)], 64));
	}
}), y = /* @__PURE__ */ e({ default: () => b }), b = v;
//#endregion
export { y as n, b as t };
