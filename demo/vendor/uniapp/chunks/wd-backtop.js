globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, P as i, U as a, c as o, d as s, g as c, h as l, l as u, s as d, u as f } from "./vue.runtime.js";
import { i as p, o as m, s as h, t as g } from "./shared/wot-ui/common/props.ts.js";
import { t as _ } from "./wd-icon.js";
import { t as v } from "./wd-transition.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-backtop/types.ts
var y = {
	...g,
	scrollTop: m(Number),
	text: String,
	top: p(300),
	duration: p(100),
	zIndex: p(10),
	iconStyle: h(""),
	shape: h("circle"),
	bottom: p(100),
	right: p(20)
}, b = { class: "wd-backtop__content" }, x = {
	key: 0,
	class: "wd-backtop__text"
}, S = /* @__PURE__ */ c({
	name: "wd-backtop",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: y,
	setup(c) {
		let p = c, m = d(() => p.scrollTop > p.top);
		function h() {
			uni.pageScrollTo({
				scrollTop: 0,
				duration: p.duration
			});
		}
		return (c, d) => (n(), u(v, {
			show: m.value,
			name: "fade"
		}, {
			default: i(() => [o("div", {
				class: t(`wd-backtop ${c.customClass} is-${c.shape}`),
				style: r(`z-index: ${c.zIndex}; bottom: ${c.bottom}px; right: ${c.right}px; ${c.customStyle}`),
				onClick: h
			}, [e(c.$slots, "default", {}, () => [o("div", b, [l(_, {
				"custom-class": "wd-backtop__backicon",
				name: "to-top",
				"custom-style": c.iconStyle
			}, null, 8, ["custom-style"]), c.text ? (n(), s("span", x, a(c.text), 1)) : f("", !0)])])], 6)]),
			_: 3
		}, 8, ["show"]));
	}
});
//#endregion
export { S as default };
