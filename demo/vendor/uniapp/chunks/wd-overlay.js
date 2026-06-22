globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, D as n, P as r, g as i, l as a } from "./vue.runtime.js";
import { i as o, r as s, t as c } from "./shared/wot-ui/common/props.ts.js";
import { t as l } from "./wd-transition.js";
import { t as u } from "./shared/wot-ui/composables/useLockScroll.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-overlay/types.ts
var d = /*@__PURE__*/ i({
	name: "wd-overlay",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: {
		...c,
		show: s(!1),
		duration: {
			type: [
				Object,
				Number,
				Boolean
			],
			default: 300
		},
		lockScroll: s(!0),
		zIndex: o(10)
	},
	emits: [
		"click",
		"before-enter",
		"enter",
		"after-enter",
		"before-leave",
		"leave",
		"after-leave"
	],
	setup(e, { emit: i }) {
		let o = e, s = i;
		function c() {
			s("click");
		}
		return u(() => o.show && o.lockScroll), (e, i) => (n(), a(l, {
			show: e.show,
			name: "fade",
			"custom-class": `wd-overlay ${e.customClass}`,
			duration: e.duration,
			"custom-style": `z-index: ${e.zIndex}; ${e.customStyle}`,
			"disable-touch-move": e.lockScroll,
			onBeforeEnter: i[0] ||= (e) => s("before-enter"),
			onEnter: i[1] ||= (e) => s("enter"),
			onAfterEnter: i[2] ||= (e) => s("after-enter"),
			onBeforeLeave: i[3] ||= (e) => s("before-leave"),
			onLeave: i[4] ||= (e) => s("leave"),
			onAfterLeave: i[5] ||= (e) => s("after-leave"),
			onClick: c
		}, {
			default: r(() => [t(e.$slots, "default")]),
			_: 3
		}, 8, [
			"show",
			"custom-class",
			"duration",
			"custom-style",
			"disable-touch-move"
		]));
	}
}), f = /* @__PURE__ */ e({ default: () => p }), p = d;
//#endregion
export { f as n, p as t };
