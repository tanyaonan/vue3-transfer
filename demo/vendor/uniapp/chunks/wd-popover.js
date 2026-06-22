globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, C as n, D as r, H as i, L as a, N as o, P as s, S as c, T as l, U as u, _ as d, a as f, c as p, d as m, g as h, h as g, i as _, k as v, l as y, u as b, y as x, z as S } from "./vue.runtime.js";
import { T as C, g as w } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { r as T, s as E, t as D } from "./shared/wot-ui/common/props.ts.js";
import { t as O } from "./wd-icon.js";
import { t as k } from "./wd-transition.js";
import { i as A, n as j, r as ee, t as M } from "./shared/wot-ui/common/clickoutside.ts.js";
import { t as N } from "./shared/wot-ui/composables/usePopover.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-popover/types.ts
var P = {
	...D,
	customArrow: E(""),
	customPop: E(""),
	visibleArrow: T(!0),
	content: { type: [String, Array] },
	placement: E("bottom"),
	offset: {
		type: [
			Number,
			Array,
			Object
		],
		default: 0
	},
	disabled: T(!1),
	showClose: T(!1),
	modelValue: T(!1),
	mode: E("normal")
}, F = {
	class: "wd-popover__pos wd-popover__hidden",
	id: "pos"
}, I = {
	key: 0,
	class: "wd-popover__inner"
}, L = {
	key: 1,
	class: "wd-popover__menu"
}, R = ["onClick"], z = {
	key: 0,
	class: "wd-popover__inner"
}, B = {
	key: 1,
	class: "wd-popover__menu"
}, V = ["onClick"], H = { class: "wd-popover__text" }, U = /* @__PURE__ */ h({
	name: "wd-popover",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: P,
	emits: [
		"update:modelValue",
		"menuclick",
		"change",
		"open",
		"close"
	],
	setup(h, { expose: T, emit: E, slots: D }) {
		let P = h, U = E, W = x(M, null), G = "popover", { proxy: K } = d(), q = N(P.visibleArrow), J = a(!1);
		o(() => P.content, (e) => {
			let { mode: t } = P;
			t === "normal" && typeof e != "string" ? console.error("The value type must be a string type in normal mode") : t === "menu" && !w(e) && console.error("The value type must be a Array type in menu mode");
		}), o(() => P.placement, () => {
			q.init(P.placement, P.visibleArrow, G);
		}), o(() => P.modelValue, (e) => {
			J.value = e;
		}), o(() => J.value, (e) => {
			e && (q.control(P.placement, P.offset), W && W.closeOther ? W.closeOther(K) : j(K)), q.showStyle.value = e ? "display: inline-block;" : "display: none;", U("change", { show: e }), U(`${e ? "open" : "close"}`);
		}), l(() => {
			q.init(P.placement, P.visibleArrow, G);
		}), c(() => {
			W && W.pushToQueue ? W.pushToQueue(K) : ee(K), q.showStyle.value = J.value ? "display: inline-block;" : "display: none;";
		}), n(() => {
			W && W.removeFromQueue ? W.removeFromQueue(K) : A(K);
		});
		function Y(e) {
			$(!1), U("menuclick", {
				item: P.content[e],
				index: e
			});
		}
		function X() {
			P.disabled || $(!J.value);
		}
		function Z() {
			$(!0);
		}
		function Q() {
			$(!1);
		}
		function te() {
			q.updatePosition(P.placement, P.offset);
		}
		function $(e) {
			J.value = e, U("update:modelValue", e);
		}
		return T({
			open: Z,
			close: Q,
			updatePosition: () => q.updatePosition(P.placement, P.offset)
		}), (n, a) => (r(), m("div", {
			class: t(`wd-popover ${n.customClass}`),
			style: i(n.customStyle),
			id: "popover",
			onClick: a[0] ||= _(() => {}, ["stop"])
		}, [
			p("div", F, [p("div", { class: t(`wd-popover__container ${n.customPop}`) }, [!D.content && n.mode === "normal" ? (r(), m("div", I, u(n.content), 1)) : b("", !0), !D.content && n.mode === "menu" && typeof n.content == "object" ? (r(), m("div", L, [(r(!0), m(f, null, v(n.content, (e, t) => (r(), m("div", {
				key: t,
				class: "wd-popover__menu-inner",
				onClick: (e) => Y(t)
			}, [e.iconClass ? (r(), y(O, {
				key: 0,
				name: e.iconClass,
				"custom-class": "wd-popover__icon"
			}, null, 8, ["name"])) : b("", !0), p("span", null, u(e.content), 1)], 8, R))), 128))])) : b("", !0)], 2)]),
			g(k, {
				"custom-class": "wd-popover__pos",
				"custom-style": S(q).popStyle.value,
				show: J.value,
				name: "fade",
				onAfterEnter: te
			}, {
				default: s(() => [p("div", {
					class: t(`wd-popover__container ${n.customPop}`),
					id: "content"
				}, [
					P.visibleArrow ? (r(), m("div", {
						key: 0,
						class: t(`wd-popover__arrow ${S(q).arrowClass.value} ${n.customArrow}`),
						style: i(S(q).arrowStyle.value)
					}, null, 6)) : b("", !0),
					e(n.$slots, "content", {}, () => [n.mode === "normal" ? (r(), m("div", z, u(n.content), 1)) : b("", !0), n.mode === "menu" ? (r(), m("div", B, [(r(!0), m(f, null, v(n.content, (e, n) => (r(), m("div", {
						key: n,
						class: t(["wd-popover__menu-inner", n === 0 ? "is-first" : ""]),
						onClick: (e) => Y(n)
					}, [S(C)(e) && e.iconClass ? (r(), y(O, {
						key: 0,
						name: e.iconClass,
						"custom-class": "wd-popover__menu-icon"
					}, null, 8, ["name"])) : b("", !0), p("div", H, u(S(C)(e) && e.content ? e.content : ""), 1)], 10, V))), 128))])) : b("", !0)]),
					n.showClose ? (r(), y(O, {
						key: 1,
						name: "close",
						"custom-class": "wd-popover__close-icon",
						onClick: X
					})) : b("", !0)
				], 2)]),
				_: 3
			}, 8, ["custom-style", "show"]),
			p("div", {
				onClick: X,
				class: "wd-popover__target",
				id: "target"
			}, [e(n.$slots, "default")])
		], 6));
	}
});
//#endregion
export { U as default };
