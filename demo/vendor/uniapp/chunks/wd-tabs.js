globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, I as a, N as o, P as s, T as ee, U as c, _ as te, a as l, b as u, c as d, d as f, g as p, h as m, k as h, l as g, s as _, u as v, x as ne, z as y } from "./vue.runtime.js";
import { O as re, i as b, j as x, p as S, s as ie, t as C, w, y as T } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as E } from "./wd-icon.js";
import { t as ae } from "./shared/wot-ui/composables/useChildren.ts.js";
import { t as D } from "./wd-badge.js";
import { t as oe } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as se } from "./wd-sticky.js";
import { t as ce } from "./wd-sticky-box.js";
import { t as le } from "./shared/wot-ui/composables/useTouch.ts.js";
import { n as O, t as ue } from "./shared/wot-ui/components/wd-tabs/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-tabs/wd-tabs.vue?vue&type=script&setup=true&lang.ts
var de = { class: "wd-tabs__nav wd-tabs__nav--sticky" }, fe = { class: "wd-tabs__nav--wrap" }, pe = ["scroll-x", "scroll-left"], me = { class: "wd-tabs__nav-container" }, he = ["onClick"], ge = { class: "wd-tabs__nav-item-text" }, _e = {
	key: 1,
	class: "wd-tabs__nav-item-text"
}, ve = {
	key: 0,
	class: "wd-tabs__map"
}, ye = ["onClick"], be = { class: "wd-tabs__nav" }, xe = { class: "wd-tabs__nav--wrap" }, Se = ["scroll-x", "scroll-left"], k = { class: "wd-tabs__nav-container" }, A = ["onClick"], Ce = { class: "wd-tabs__nav-item-text" }, we = {
	key: 1,
	class: "wd-tabs__nav-item-text"
}, Te = {
	key: 0,
	class: "wd-tabs__map"
}, Ee = ["onClick"], j = /*@__PURE__*/ p({
	name: "wd-tabs",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: O,
	emits: [
		"change",
		"disabled",
		"click",
		"update:modelValue"
	],
	setup(e, { expose: p, emit: O }) {
		let j = ".wd-tabs__nav-item", M = e, N = O, { translate: P } = oe("tabs"), F = a({
			activeIndex: 0,
			lineStyle: "display:none;",
			useInnerLine: !1,
			inited: !1,
			animating: !1,
			mapShow: !1,
			scrollLeft: 0
		}), { children: I, linkChildren: De } = ae(ue);
		De({
			state: F,
			props: M
		});
		let { proxy: L } = te(), R = le(), z = _(() => M.slidable === "always" || I.length > M.slidableNum), B = _(() => {
			let e = {};
			return F.mapShow || (e.display = "none"), F.animating && (e.opacity = 1), x(e);
		}), V = _(() => M.animated ? x({
			left: -100 * F.activeIndex + "%",
			"transition-duration": M.duration + "ms",
			"-webkit-transition-duration": M.duration + "ms"
		}) : ""), H = (e, t) => T(e.name) ? e.name : t, U = (e) => {
			let { color: t, inactiveColor: n } = M, r = {};
			return F.activeIndex === e ? t && (r.color = t) : n && (r.color = n), x(r);
		}, Oe = (e) => {
			let { color: t, inactiveColor: n } = M, r = {};
			return F.activeIndex === e ? t && (r.color = t, r.borderColor = t) : n && (r.color = n), x(r);
		}, W = (e = 0, t = !1, n = !0) => {
			I.length !== 0 && (e = $(e), !I[e].disabled && (F.activeIndex = e, n && (q(t === !1), J()), ke()));
		}, G = ie(W, 100, { leading: !0 });
		o(() => M.modelValue, (e) => {
			G(e, !1, $(e) !== F.activeIndex);
		}, {
			immediate: !1,
			deep: !0
		}), o(() => M.slidableNum, (e) => {
			b(e, "slidableNum");
		}), o(() => M.mapNum, (e) => {
			b(e, "mapNum");
		}), ee(() => {
			F.inited = !0, ne(() => {
				W(M.modelValue, !0), F.useInnerLine = !0;
			});
		});
		function K() {
			F.mapShow ? (F.animating = !1, setTimeout(() => {
				F.mapShow = !1;
			}, 300)) : (F.mapShow = !0, setTimeout(() => {
				F.animating = !0;
			}, 100));
		}
		async function q(e = !0) {
			if (!F.inited) return;
			let { lineWidth: t, lineHeight: n, lineTheme: r } = M;
			try {
				let i = {};
				if (T(t)) i.width = C(t);
				else if (r === "text") {
					let e = await S(".wd-tabs__nav-item-text", !0, L);
					i.width = C(Number(e[F.activeIndex].width));
				} else if (r === "underline") {
					let e = await S(j, !0, L);
					i.width = C(Number(e[F.activeIndex].width));
				}
				T(n) && (i.height = C(n), i.borderRadius = `calc(${C(n)} / 2)`);
				let a = await S(j, !0, L), o = a[F.activeIndex], s = a.slice(0, F.activeIndex).reduce((e, t) => e + Number(t.width), 0) + Number(o.width) / 2;
				s && (i.transform = `translateX(${s}px) translateX(-50%)`, e && (i.transition = "width 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);"), F.useInnerLine = !1, F.lineStyle = x(i));
			} catch (e) {
				console.error("[wot ui] error(wd-tabs): update line style failed", e);
			}
		}
		function ke() {
			if (!F.inited) return;
			let e = H(I[F.activeIndex], F.activeIndex);
			e !== M.modelValue && (N("change", {
				index: F.activeIndex,
				name: e
			}), N("update:modelValue", e));
		}
		function J() {
			F.inited && Promise.all([S(j, !0, L), S(".wd-tabs__nav-container", !1, L)]).then(([e, t]) => {
				let n = e[F.activeIndex], r = e.slice(0, F.activeIndex).reduce((e, t) => e + t.width, 0) - (t.width - Number(n.width)) / 2;
				r === F.scrollLeft ? F.scrollLeft = r + Math.random() / 1e4 : F.scrollLeft = r;
			});
		}
		function Y(e) {
			if (e === void 0) return;
			let { disabled: t } = I[e], n = H(I[e], e);
			if (t) {
				N("disabled", {
					index: e,
					name: n
				});
				return;
			}
			F.mapShow && K(), G(e), N("click", {
				index: e,
				name: n
			});
		}
		function X(e) {
			M.swipeable && R.touchStart(e);
		}
		function Z(e) {
			M.swipeable && R.touchMove(e);
		}
		function Q() {
			if (!M.swipeable) return;
			let { direction: e, deltaX: t, offsetX: n } = R;
			e.value === "horizontal" && n.value >= 50 && (t.value > 0 && F.activeIndex !== 0 ? G(F.activeIndex - 1) : t.value < 0 && F.activeIndex !== I.length - 1 && G(F.activeIndex + 1));
		}
		function $(e) {
			if (w(e) && e >= I.length && (console.error("[wot ui] warning(wd-tabs): the type of tabs' value is Number shouldn't be less than its children"), e = 0), re(e)) {
				let t = I.findIndex((t) => t.name === e);
				e = t === -1 ? 0 : t;
			}
			return e;
		}
		return p({
			setActive: G,
			scrollIntoView: J,
			updateLineStyle: q
		}), (e, a) => e.sticky ? (r(), g(ce, { key: 0 }, {
			default: s(() => [d("div", {
				class: n(`wd-tabs ${e.customClass} ${z.value ? "is-slide" : ""} ${e.mapNum < y(I).length && e.mapNum !== 0 ? "is-map" : ""} ${e.showScrollbar ? "" : "is-hide-scrollbar"}`),
				style: i(e.customStyle)
			}, [
				m(se, { "offset-top": e.offsetTop }, {
					default: s(() => [d("div", de, [d("div", fe, [d("div", {
						"scroll-x": z.value,
						"scroll-with-animation": "",
						"scroll-left": F.scrollLeft
					}, [d("div", me, [(r(!0), f(l, null, h(y(I), (t, a) => (r(), f("div", {
						onClick: (e) => Y(a),
						key: a,
						class: n(`wd-tabs__nav-item  ${F.activeIndex === a ? "is-active" : ""} ${t.disabled ? "is-disabled" : ""}`),
						style: i(U(a))
					}, [t.badgeProps ? (r(), g(D, u({
						key: 0,
						ref_for: !0
					}, t.badgeProps), {
						default: s(() => [d("span", ge, c(t.title), 1)]),
						_: 2
					}, 1040)) : (r(), f("span", _e, c(t.title), 1)), F.activeIndex === a && F.useInnerLine ? (r(), f("div", {
						key: 2,
						class: n(`wd-tabs__line ${F.activeIndex === a && F.useInnerLine ? "is-" + e.lineTheme : ""} wd-tabs__line--inner`)
					}, null, 2)) : v("", !0)], 14, he))), 128)), d("div", {
						class: n(`wd-tabs__line ${"is-" + e.lineTheme}`),
						style: i(F.lineStyle)
					}, null, 6)])], 8, pe)]), e.mapNum < y(I).length && e.mapNum !== 0 ? (r(), f("div", ve, [
						d("div", {
							class: n(`wd-tabs__map-btn  ${F.animating ? "is-open" : ""}`),
							onClick: K
						}, [d("div", { class: n(`wd-tabs__map-arrow  ${F.animating ? "is-open" : ""}`) }, [m(E, {
							name: "down",
							"custom-class": "wd-tabs__map-arrow-icon"
						})], 2)], 2),
						d("div", {
							class: "wd-tabs__map-header",
							style: i(B.value)
						}, c(e.mapTitle || y(P)("all")), 5),
						d("div", {
							class: n(`wd-tabs__map-body  ${F.animating ? "is-open" : ""}`),
							style: i(F.mapShow ? "" : "display:none")
						}, [(r(!0), f(l, null, h(y(I), (e, t) => (r(), f("div", {
							class: "wd-tabs__map-nav-item",
							key: t,
							onClick: (e) => Y(t)
						}, [d("div", {
							class: n(`wd-tabs__map-nav-btn ${F.activeIndex === t ? "is-active" : ""}  ${e.disabled ? "is-disabled" : ""}`),
							style: i(Oe(t))
						}, c(e.title), 7)], 8, ye))), 128))], 6)
					])) : v("", !0)])]),
					_: 1
				}, 8, ["offset-top"]),
				d("div", {
					class: "wd-tabs__container",
					onTouchstart: X,
					onTouchmove: Z,
					onTouchend: Q,
					onTouchcancel: Q
				}, [d("div", {
					class: n(["wd-tabs__body", e.animated ? "is-animated" : ""]),
					style: i(V.value)
				}, [t(e.$slots, "default")], 6)], 32),
				d("div", {
					class: "wd-tabs__mask",
					style: i(B.value),
					onClick: K
				}, null, 4)
			], 6)]),
			_: 3
		})) : (r(), f("div", {
			key: 1,
			class: n(`wd-tabs ${e.customClass} ${z.value ? "is-slide" : ""} ${e.mapNum < y(I).length && e.mapNum !== 0 ? "is-map" : ""} ${e.showScrollbar ? "" : "is-hide-scrollbar"}`)
		}, [
			d("div", be, [d("div", xe, [d("div", {
				"scroll-x": z.value,
				"scroll-with-animation": "",
				"scroll-left": F.scrollLeft
			}, [d("div", k, [(r(!0), f(l, null, h(y(I), (t, a) => (r(), f("div", {
				onClick: (e) => Y(a),
				key: a,
				class: n(`wd-tabs__nav-item ${F.activeIndex === a ? "is-active" : ""} ${t.disabled ? "is-disabled" : ""}`),
				style: i(U(a))
			}, [t.badgeProps ? (r(), g(D, u({
				key: 0,
				"custom-class": "wd-tabs__nav-item-badge"
			}, { ref_for: !0 }, t.badgeProps), {
				default: s(() => [d("span", Ce, c(t.title), 1)]),
				_: 2
			}, 1040)) : (r(), f("span", we, c(t.title), 1)), F.activeIndex === a && F.useInnerLine ? (r(), f("div", {
				key: 2,
				class: n(`wd-tabs__line ${F.activeIndex === a && F.useInnerLine ? "is-" + e.lineTheme : ""} wd-tabs__line--inner`)
			}, null, 2)) : v("", !0)], 14, A))), 128)), d("div", {
				class: n(`wd-tabs__line ${"is-" + e.lineTheme}`),
				style: i(F.lineStyle)
			}, null, 6)])], 8, Se)]), e.mapNum < y(I).length && e.mapNum !== 0 ? (r(), f("div", Te, [
				d("div", {
					class: "wd-tabs__map-btn",
					onClick: K
				}, [d("div", { class: n(`wd-tabs__map-arrow ${F.animating ? "is-open" : ""}`) }, [m(E, {
					name: "down",
					"custom-class": "wd-tabs__map-arrow-icon"
				})], 2)]),
				d("div", {
					class: "wd-tabs__map-header",
					style: i(B.value)
				}, c(e.mapTitle || y(P)("all")), 5),
				d("div", {
					class: n(`wd-tabs__map-body ${F.animating ? "is-open" : ""}`),
					style: i(F.mapShow ? "" : "display:none")
				}, [(r(!0), f(l, null, h(y(I), (e, t) => (r(), f("div", {
					class: "wd-tabs__map-nav-item",
					key: t,
					onClick: (e) => Y(t)
				}, [d("div", { class: n(`wd-tabs__map-nav-btn ${F.activeIndex === t ? "is-active" : ""}  ${e.disabled ? "is-disabled" : ""}`) }, c(e.title), 3)], 8, Ee))), 128))], 6)
			])) : v("", !0)]),
			d("div", {
				class: "wd-tabs__container",
				onTouchstart: X,
				onTouchmove: Z,
				onTouchend: Q,
				onTouchcancel: Q
			}, [d("div", {
				class: n(["wd-tabs__body", e.animated ? "is-animated" : ""]),
				style: i(V.value)
			}, [t(e.$slots, "default")], 6)], 32),
			d("div", {
				class: "wd-tabs__mask",
				style: i(B.value),
				onClick: K
			}, null, 4)
		], 2));
	}
}), M = /* @__PURE__ */ e({ default: () => N }), N = j;
//#endregion
export { M as n, N as t };
