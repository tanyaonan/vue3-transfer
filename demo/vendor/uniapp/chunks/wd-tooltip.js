globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, C as n, D as r, H as i, L as a, N as o, P as s, S as c, T as l, U as u, _ as d, c as f, d as p, g as m, h, i as g, l as _, u as v, y, z as b } from "./vue.runtime.js";
import { r as x, s as S, t as C } from "./shared/wot-ui/common/props.ts.js";
import { t as w } from "./wd-icon.js";
import { t as T } from "./wd-transition.js";
import { i as E, n as D, r as O, t as k } from "./shared/wot-ui/common/clickoutside.ts.js";
import { t as A } from "./shared/wot-ui/composables/usePopover.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-tooltip/types.ts
var j = {
	...C,
	customArrow: S(""),
	customPop: S(""),
	visibleArrow: x(!0),
	content: { type: [String, Array] },
	placement: S("bottom"),
	offset: {
		type: [
			Number,
			Array,
			Object
		],
		default: 0
	},
	disabled: x(!1),
	showClose: x(!1),
	modelValue: x(!1)
}, M = {
	class: "wd-tooltip__pos wd-tooltip__hidden",
	id: "pos"
}, N = {
	key: 0,
	class: "wd-tooltip__inner"
}, P = { class: "wd-tooltip__inner" }, F = /* @__PURE__ */ m({
	name: "wd-tooltip",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: j,
	emits: [
		"update:modelValue",
		"menuclick",
		"change",
		"open",
		"close"
	],
	setup(m, { expose: x, emit: S, slots: C }) {
		let j = m, F = S, I = A(j.visibleArrow), L = y(k, null), R = "tooltip", { proxy: z } = d(), B = a(!1);
		o(() => j.content, (e) => {
			e ?? console.error("[wot-design] warning(wd-tooltip): content can't be null or undefined");
		}), o(() => j.placement, () => {
			I.init(j.placement, j.visibleArrow, R);
		}), o(() => j.modelValue, (e) => {
			B.value = e;
		}), o(() => B.value, (e) => {
			e && (I.control(j.placement, j.offset), L && L.closeOther ? L.closeOther(z) : D(z)), I.showStyle.value = e ? "display: inline-block;" : "display: none;", F("change", { show: e }), F(`${e ? "open" : "close"}`);
		}), l(() => {
			I.init(j.placement, j.visibleArrow, R);
		}), c(() => {
			L && L.pushToQueue ? L.pushToQueue(z) : O(z), I.showStyle.value = j.modelValue ? "display: inline-block;" : "display: none;";
		}), n(() => {
			L && L.removeFromQueue ? L.removeFromQueue(z) : E(z);
		});
		function V() {
			j.disabled || G(!B.value);
		}
		function H() {
			G(!0);
		}
		function U() {
			G(!1);
		}
		function W() {
			I.updatePosition(j.placement, j.offset);
		}
		function G(e) {
			B.value = e, F("update:modelValue", e);
		}
		return x({
			open: H,
			close: U,
			updatePosition: () => I.updatePosition(j.placement, j.offset)
		}), (n, a) => (r(), p("div", {
			class: t(`wd-tooltip ${n.customClass}`),
			style: i(n.customStyle),
			id: "tooltip",
			onClick: a[0] ||= g(() => {}, ["stop"])
		}, [
			f("div", M, [f("div", { class: t(`wd-tooltip__container ${n.customPop}`) }, [C.content ? v("", !0) : (r(), p("div", N, u(n.content), 1))], 2)]),
			h(T, {
				"custom-class": "wd-tooltip__pos",
				"custom-style": b(I).popStyle.value,
				show: B.value,
				name: "fade",
				duration: 200,
				onAfterEnter: W
			}, {
				default: s(() => [f("div", {
					class: t(`wd-tooltip__container ${n.customPop}`),
					id: "content"
				}, [
					n.visibleArrow ? (r(), p("div", {
						key: 0,
						class: t(`wd-tooltip__arrow ${b(I).arrowClass.value} ${n.customArrow}`),
						style: i(b(I).arrowStyle.value)
					}, null, 6)) : v("", !0),
					e(n.$slots, "content", {}, () => [f("div", P, u(n.content), 1)]),
					n.showClose ? (r(), _(w, {
						key: 1,
						name: "close",
						"custom-class": "wd-tooltip__close-icon",
						onClick: V
					})) : v("", !0)
				], 2)]),
				_: 3
			}, 8, ["custom-style", "show"]),
			f("div", {
				onClick: V,
				class: "wd-tooltip__target",
				id: "target"
			}, [e(n.$slots, "default")])
		], 6));
	}
});
//#endregion
export { F as default };
