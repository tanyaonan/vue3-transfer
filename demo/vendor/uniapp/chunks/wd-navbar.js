globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, T as o, U as s, _ as c, a as l, c as u, d, g as f, l as p, m, s as h, u as g, x as _, z as v } from "./vue.runtime.js";
import { j as y, p as b, t as x, y as S } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as C, r as w, t as T } from "./shared/wot-ui/common/props.ts.js";
import { t as E } from "./wd-icon.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-navbar/types.ts
var D = {
	...T,
	title: String,
	leftText: String,
	rightText: String,
	leftArrow: w(!1),
	bordered: w(!1),
	fixed: w(!1),
	placeholder: w(!1),
	zIndex: C(10),
	safeAreaInsetTop: w(!1),
	leftDisabled: w(!1),
	rightDisabled: w(!1)
}, O = i({
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	width: 0,
	height: 0
}), k = i({
	width: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
}), A = i(0), j = i(0), M = i(0), N = i(0), P = i(0), F = i(!1);
function I() {
	try {
		let e = uni.getSystemInfoSync();
		e.safeArea && (O.value = {
			left: e.safeArea.left,
			right: e.screenWidth - e.safeArea.right,
			top: e.safeArea.top,
			bottom: e.safeArea.bottom,
			width: e.safeArea.width,
			height: e.safeArea.height
		}), A.value = e.statusBarHeight || 0, j.value = e.screenWidth, M.value = e.screenHeight, N.value = e.windowWidth, P.value = e.windowHeight;
		let t = uni.getMenuButtonBoundingClientRect();
		t && (k.value = {
			width: t.width,
			height: t.height,
			left: t.left,
			right: e.screenWidth - t.right,
			top: t.top,
			bottom: t.bottom
		}), F.value = !0;
	} catch (e) {
		console.error("获取设备信息失败", e);
	}
}
function L() {
	I();
}
function R() {
	F.value || I();
	let e = h(() => M.value - O.value.bottom), t = h(() => O.value.top), n = h(() => k.value.height + (k.value.top - A.value) * 2);
	return {
		safeArea: O,
		capsule: k,
		statusBarHeight: A,
		screenWidth: j,
		screenHeight: M,
		windowWidth: N,
		windowHeight: P,
		initialized: F,
		safeAreaBottomHeight: e,
		safeAreaTopHeight: t,
		navBarHeight: n,
		navBarTotalHeight: h(() => n.value + A.value),
		init: I,
		update: L
	};
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-navbar/wd-navbar.vue?vue&type=script&setup=true&lang.ts
var z = { class: "wd-navbar__content" }, B = {
	key: 0,
	class: "wd-navbar__capsule"
}, V = {
	key: 1,
	class: "wd-navbar__text"
}, H = { class: "wd-navbar__title" }, U = {
	key: 0,
	class: "wd-navbar__text",
	"hover-class": "wd-navbar__text--hover",
	"hover-stay-time": 70
}, W = /* @__PURE__ */ f({
	name: "wd-navbar",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: D,
	emits: ["click-left", "click-right"],
	setup(f, { emit: C, slots: w }) {
		let T = f, D = C, O = i(""), { statusBarHeight: k, navBarHeight: A } = R();
		a([() => T.fixed, () => T.placeholder], () => {
			F();
		}, {
			deep: !0,
			immediate: !1
		});
		let j = h(() => {
			let e = {};
			return T.fixed && S(T.zIndex) && (e["z-index"] = T.zIndex), T.safeAreaInsetTop && (e["padding-top"] = x(k.value || 0)), A.value && (e.height = x(A.value), e["line-height"] = x(A.value)), `${y(e)}${T.customStyle}`;
		});
		o(() => {
			T.fixed && T.placeholder && _(() => {
				F();
			});
		});
		function M() {
			T.leftDisabled || D("click-left");
		}
		function N() {
			T.rightDisabled || D("click-right");
		}
		let { proxy: P } = c();
		function F() {
			!T.fixed || !T.placeholder || b(".wd-navbar", !1, P).then((e) => {
				O.value = e.height;
			});
		}
		return (i, a) => (n(), d("div", { style: r({ height: v(x)(O.value) }) }, [u("div", {
			class: t(`wd-navbar ${i.customClass} ${i.fixed ? "is-fixed" : ""} ${i.bordered ? "is-border" : ""}`),
			style: r(j.value)
		}, [u("div", z, [
			w.capsule ? (n(), d("div", B, [e(i.$slots, "capsule")])) : w.left ? (n(), d("div", {
				key: 2,
				class: t(`wd-navbar__left ${i.leftDisabled ? "is-disabled" : ""}`),
				onClick: M
			}, [e(i.$slots, "left")], 2)) : (n(), d("div", {
				key: 1,
				class: t(`wd-navbar__left ${i.leftDisabled ? "is-disabled" : ""}`),
				onClick: M
			}, [i.leftArrow ? (n(), p(E, {
				key: 0,
				name: "left",
				"custom-class": "wd-navbar__arrow"
			})) : g("", !0), i.leftText ? (n(), d("div", V, s(i.leftText), 1)) : g("", !0)], 2)),
			u("div", H, [e(i.$slots, "title"), !w.title && i.title ? (n(), d(l, { key: 0 }, [m(s(i.title), 1)], 64)) : g("", !0)]),
			w.right || i.rightText ? (n(), d("div", {
				key: 3,
				class: t(`wd-navbar__right ${i.rightDisabled ? "is-disabled" : ""}`),
				onClick: N
			}, [e(i.$slots, "right"), !w.right && i.rightText ? (n(), d("div", U, s(i.rightText), 1)) : g("", !0)], 2)) : g("", !0)
		])], 6)], 4));
	}
});
//#endregion
export { W as default };
