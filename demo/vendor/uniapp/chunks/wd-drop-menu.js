globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, S as o, U as s, _ as c, a as l, c as u, d, g as f, h as p, i as m, k as h, l as g, s as _, u as v, y, z as b } from "./vue.runtime.js";
import { L as x, m as S, p as C } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as w } from "./wd-icon.js";
import { t as T } from "./wd-overlay.js";
import { t as E } from "./shared/wot-ui/composables/useChildren.ts.js";
import { n as D, t as O } from "./shared/wot-ui/common/clickoutside.ts.js";
import { n as k, t as A } from "./shared/wot-ui/components/wd-drop-menu/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-drop-menu/wd-drop-menu.vue?vue&type=script&setup=true&lang.ts
var j = ["id"], M = { class: "wd-drop-menu__list" }, N = ["onClick"], P = { class: "wd-drop-menu__option-title" }, F = { class: "wd-drop-menu__option-title-text" }, I = /* @__PURE__ */ f({
	name: "wd-drop-menu",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: k,
	setup(f) {
		let k = f, I = y(O, null), L = i(`dropMenuId${x()}`), R = i(0), z = i(0), B = _(() => k.direction === "down" ? `top: calc(var(--window-top) + ${R.value}px); bottom: 0;` : `top: 0; bottom: calc(var(--window-bottom) + ${R.value}px)`), { proxy: V } = c(), { linkChildren: H, children: U } = E(A), W = _(() => U.some((e) => e.$.exposed.getShowPop())), G = i(!1), K;
		a(W, (e) => {
			K && clearTimeout(K), e ? G.value = !0 : K = setTimeout(() => {
				G.value = !1, K = null;
			}, 16);
		}), H({
			props: k,
			fold: X,
			offset: R
		}), a(() => k.direction, (e) => {
			["up", "down"].includes(e) || console.error("[wot ui] warning(wd-drop-menu): direction must be 'up' or 'down'");
		}, {
			deep: !0,
			immediate: !0
		}), o(() => {
			z.value = S().windowHeight;
		});
		function q() {}
		function J(e) {
			let { title: t, modelValue: n, options: r, valueKey: i, labelKey: a } = e;
			if (t) return t;
			for (let e = 0, t = r.length; e < t; e++) if (n === r[e][i]) return r[e][a];
			console.error("[wot-design] warning(wd-drop-menu-item): no value is matched in the options option.");
		}
		function Y(e) {
			e && !e.disabled && (I && I.closeOther ? I.closeOther(e) : D(e), X(e));
		}
		function X(e) {
			C(`#${L.value}`, !1, V).then((t) => {
				if (!t) return;
				let { top: n, bottom: r } = t;
				k.direction === "down" ? R.value = Number(r) : R.value = z.value - Number(n), e.$.exposed.toggle();
			});
		}
		function Z() {
			k.closeOnClickModal && U.forEach((e) => {
				e.$.exposed.close();
			});
		}
		return (i, a) => (n(), d("div", {
			style: r(i.customStyle),
			class: t(`wd-drop-menu ${i.customClass}`),
			onClick: m(q, ["stop", "prevent"]),
			id: L.value
		}, [
			i.modal ? (n(), g(T, {
				key: 0,
				show: G.value,
				duration: i.duration,
				"z-index": 12,
				"custom-style": B.value,
				onClick: Z,
				onTouchmove: q
			}, null, 8, [
				"show",
				"duration",
				"custom-style"
			])) : v("", !0),
			u("div", M, [(n(!0), d(l, null, h(b(U), (e, r) => (n(), d("div", {
				key: r,
				onClick: (t) => Y(e),
				class: t(`wd-drop-menu__option ${e.disabled ? "is-disabled" : ""} ${e.$.exposed.getShowPop() ? "is-active" : ""}`)
			}, [u("div", P, [u("div", F, s(J(e)), 1), p(w, {
				name: e.icon,
				size: e.iconSize,
				"custom-class": "wd-drop-menu__arrow"
			}, null, 8, ["name", "size"])])], 10, N))), 128))]),
			e(i.$slots, "default")
		], 14, j));
	}
});
//#endregion
export { I as default };
