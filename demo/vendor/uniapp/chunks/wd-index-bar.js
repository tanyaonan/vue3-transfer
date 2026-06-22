globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, I as r, L as i, N as a, T as o, U as s, _ as c, a as l, c as u, d, g as f, i as p, k as m, u as h, x as g, z as _ } from "./vue.runtime.js";
import { L as v, P as y, p as b, y as x } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as S } from "./shared/wot-ui/composables/useChildren.ts.js";
import { n as C, t as w } from "./shared/wot-ui/components/wd-index-bar/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-index-bar/wd-index-bar.vue?vue&type=script&setup=true&lang.ts
var T = ["id"], E = ["scrollTop"], D = {
	key: 0,
	class: "wd-index-bar__current-index"
}, O = /* @__PURE__ */ f({
	__name: "wd-index-bar",
	props: C,
	setup(f) {
		let C = f, O = i(`indexBar${v()}`), { proxy: k } = c(), A = r({ activeIndex: null }), { linkChildren: j, children: M } = S(w);
		j({
			props: C,
			anchorState: A
		}), a(() => M, (e) => {
			if (!e.length) {
				A.activeIndex = null;
				return;
			}
			(!x(A.activeIndex) || !e.find((e) => e.index === A.activeIndex)) && (A.activeIndex = e[0].index);
		}, {
			deep: !0,
			immediate: !0
		});
		let N = r({
			scrollTop: 0,
			prevScrollTop: 0,
			touching: !1
		}), P = 0, F = {
			offsetTop: 0,
			indexHeight: 24
		};
		function I() {
			setTimeout(() => {
				Promise.all([
					b(`#${O.value}`, !1, k),
					b(".wd-index-bar__sidebar", !1, k),
					b(".wd-index-bar__index", !1, k)
				]).then(([e, t, n]) => {
					P = e.top, F.offsetTop = t.top, F.indexHeight = n.height;
				});
			}, 100);
		}
		o(() => {
			I();
		});
		function L(e) {
			if (N.touching) return;
			let { detail: t } = e, n = Math.floor(t.scrollTop), r = M.find((e, t) => !x(M[t + 1]) || e.$.exposed.top.value - P <= n && M[t + 1].$.exposed.top.value - P > n);
			x(r) && A.activeIndex !== r.index && (A.activeIndex = r.index), N.prevScrollTop = n;
		}
		function R(e) {
			let t = e - F.offsetTop, n = Math.floor(t / F.indexHeight);
			return n < 0 ? n = 0 : n > M.length - 1 && (n = M.length - 1), M[n];
		}
		function z() {
			N.touching = !0;
		}
		function B(e) {
			let t = e.touches[0].pageY;
			A.activeIndex !== R(t).index && (A.activeIndex = R(t).index, H(R(t).$.exposed.top.value - P));
		}
		async function V(e) {
			let t = e.changedTouches[0].pageY;
			A.activeIndex = R(t).index, H(R(t).$.exposed.top.value - P), await y(), N.touching = !1;
		}
		function H(e) {
			N.scrollTop === e ? (N.scrollTop = N.prevScrollTop, g(() => {
				N.scrollTop = e;
			})) : N.scrollTop = e;
		}
		return (r, i) => (n(), d("div", {
			class: "wd-index-bar",
			id: O.value
		}, [
			u("div", {
				scrollTop: N.scrollTop,
				"scroll-y": !0,
				class: "wd-index-bar__content",
				onScroll: L
			}, [e(r.$slots, "default")], 40, E),
			N.touching ? (n(), d("div", D, s(A.activeIndex), 1)) : h("", !0),
			u("div", {
				class: "wd-index-bar__sidebar",
				onTouchstart: p(z, ["stop", "prevent"]),
				onTouchmove: p(B, ["stop", "prevent"]),
				onTouchend: p(V, ["stop", "prevent"]),
				onTouchcancel: p(V, ["stop", "prevent"])
			}, [(n(!0), d(l, null, m(_(M), (e) => (n(), d("div", {
				class: t(["wd-index-bar__index", { "is-active": e.index === A.activeIndex }]),
				key: e.index
			}, s(e.index), 3))), 128))], 32)
		], 8, T));
	}
});
//#endregion
export { O as default };
