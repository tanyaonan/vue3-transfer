globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, L as a, M as o, N as s, U as c, _ as l, a as u, c as d, d as f, g as p, k as m, l as h, s as g, u as _, z as v } from "./vue.runtime.js";
import { A as y, C as b, L as x, T as S, j as C, t as w, y as T } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as E, c as D, i as O, r as k, s as A, t as j } from "./shared/wot-ui/common/props.ts.js";
import { t as M } from "./wd-swiper-nav.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-swiper/types.ts
var N = {
	...j,
	autoplay: k(!0),
	current: O(0),
	direction: A("horizontal"),
	displayMultipleItems: O(1),
	duration: O(300),
	easingFunction: A("default"),
	height: E("192"),
	interval: O(5e3),
	list: {
		type: Array,
		default: () => []
	},
	loop: k(!0),
	videoLoop: k(!0),
	muted: k(!0),
	nextMargin: E("0"),
	indicatorPosition: A("bottom"),
	previousMargin: E("0"),
	radius: D,
	snapToEdge: k(!1),
	indicator: {
		type: [Boolean, Object],
		default: !0
	},
	imageMode: A("aspectFill"),
	showMenuByLongpress: k(!1),
	valueKey: A("value"),
	textKey: A("text"),
	autoplayVideo: k(!0),
	stopPreviousVideo: k(!0),
	stopAutoplayWhenVideoPlay: k(!1),
	adjustHeight: A("highest"),
	adjustVerticalHeight: k(!1),
	customIndicatorClass: A(""),
	customImageClass: A(""),
	customPrevImageClass: A(""),
	customNextImageClass: A(""),
	customItemClass: A(""),
	customPrevClass: A(""),
	customNextClass: A(""),
	customTextClass: A(""),
	customTextStyle: A("")
}, P = [
	"adjust-height",
	"adjust-vertical-height",
	"autoplay",
	"current",
	"interval",
	"duration",
	"circular",
	"vertical",
	"easing-function",
	"previous-margin",
	"next-margin",
	"snap-to-edge",
	"display-multiple-items"
], ee = [
	"id",
	"src",
	"poster",
	"loop",
	"muted",
	"autoplay",
	"onClick"
], F = [
	"src",
	"mode",
	"show-menu-by-longpress",
	"onClick"
], I = /*@__PURE__*/ p({
	name: "wd-swiper",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: N,
	emits: [
		"click",
		"change",
		"animationfinish",
		"update:current"
	],
	setup(e, { emit: p, slots: E }) {
		let D = o(), O = e, k = p, A = a(O.current), j = a(O.current), N = (e, t = !1) => {
			j.value = e, t && (A.value = e), k("update:current", e);
		}, I = a(!1), { proxy: L } = l(), R = a(x());
		s(() => O.current, (e) => {
			e < 0 ? O.loop ? K() : G() : e >= O.list.length ? O.loop ? G() : K() : W(e);
		});
		let z = g(() => {
			let e = { height: w(O.height) };
			return T(O.radius) && (e.borderRadius = w(O.radius)), C(e);
		}), B = g(() => `wd-swiper__item ${D.default ? "wd-swiper__item--slot" : ""}`), V = g(() => {
			let { list: e, direction: t, indicatorPosition: n, indicator: r } = O, i = {
				current: j.value || 0,
				total: e.length || 0,
				direction: t || "horizontal",
				indicatorPosition: n || "bottom"
			};
			return S(r) && (i.type = r.type || "dots", i.minShowNum = r.minShowNum || 2, i.showControls = r.showControls || !1), i;
		}), H = (e, t) => {
			let n = (e) => t === "video" ? y(e) : b(e);
			return S(e) ? e.type && ["video", "image"].includes(e.type) ? e.type === t : n(e[O.valueKey]) : n(e);
		}, U = (e) => H(e, "video");
		function W(e) {
			e !== j.value && N(e, !0);
		}
		function G() {
			W(0);
		}
		function K() {
			W(O.list.length - 1);
		}
		function q() {
			O.stopAutoplayWhenVideoPlay && (I.value = !0);
		}
		function J() {
			I.value = !1;
		}
		function Y(e, t, n) {
			return (e - 1 + n.length) % n.length === t;
		}
		function X(e, t, n) {
			return (e + 1 + n.length) % n.length === t;
		}
		function Z(e, t, n) {
			let r = "";
			return Y(e, t, n) && (r = O.customPrevClass || O.customPrevImageClass), X(e, t, n) && (r = O.customNextClass || O.customNextImageClass), r;
		}
		function Q(e) {
			let { current: t, source: n } = e.detail, r = j.value;
			k("change", {
				current: t,
				source: n
			}), t !== j.value && N(t, n === "autoplay" || n === "touch"), te(r, t);
		}
		function te(e, t) {
			re(e), ne(t);
		}
		function ne(e) {
			if (O.autoplayVideo) {
				let t = O.list[e];
				T(t) && U(t) && uni.createVideoContext(`video-${e}-${R.value}`, L).play();
			}
		}
		function re(e) {
			if (O.stopPreviousVideo) {
				let t = O.list[e];
				T(t) && U(t) && uni.createVideoContext(`video-${e}-${R.value}`, L).pause();
			} else O.stopAutoplayWhenVideoPlay && J();
		}
		function ie(e) {
			let { current: t, source: n } = e.detail;
			t !== j.value && N(t, n === "autoplay" || n === "touch"), k("animationfinish", {
				current: t,
				source: n
			});
		}
		function $(e, t) {
			k("click", {
				index: e,
				item: t
			});
		}
		function ae({ dir: e }) {
			let { list: t, loop: n } = O, r = t.length, i = e === "next" ? j.value + 1 : j.value - 1;
			i = n ? e === "next" ? (j.value + 1) % r : (j.value - 1 + r) % r : i < 0 || i >= r ? j.value : i, i !== j.value && W(i);
		}
		return (e, a) => (r(), f("div", {
			class: n(`wd-swiper ${e.customClass}`),
			style: i(e.customStyle)
		}, [d("div", {
			"adjust-height": e.adjustHeight,
			"adjust-vertical-height": e.adjustVerticalHeight,
			class: "wd-swiper__track",
			autoplay: e.autoplay && !I.value,
			current: A.value,
			interval: e.interval,
			duration: e.duration,
			circular: e.loop,
			vertical: e.direction == "vertical",
			"easing-function": e.easingFunction,
			"previous-margin": v(w)(e.previousMargin),
			"next-margin": v(w)(e.nextMargin),
			"snap-to-edge": e.snapToEdge,
			"display-multiple-items": e.displayMultipleItems,
			style: i(z.value),
			onChange: Q,
			onAnimationfinish: ie
		}, [(r(!0), f(u, null, m(e.list, (a, o) => (r(), f("div", {
			key: o,
			class: n(B.value)
		}, [t(e.$slots, "default", {
			item: a,
			index: o
		}, () => [U(a) ? (r(), f("video", {
			key: 0,
			id: `video-${o}-${R.value}`,
			style: i({ height: v(w)(e.height) }),
			src: v(S)(a) ? a[e.valueKey] : a,
			poster: v(S)(a) ? a.poster : "",
			class: n(`wd-swiper__video ${e.customItemClass} ${Z(j.value, o, e.list)}`),
			onPlay: q,
			onPause: J,
			"enable-progress-gesture": !1,
			loop: e.videoLoop,
			muted: e.muted,
			autoplay: e.autoplayVideo,
			objectFit: "cover",
			onClick: (e) => $(o, a)
		}, null, 46, ee)) : (r(), f("img", {
			key: 1,
			src: v(S)(a) ? a[e.valueKey] : a,
			class: n(`wd-swiper__image ${e.customImageClass} ${e.customItemClass} ${Z(j.value, o, e.list)}`),
			style: i({ height: v(w)(e.height) }),
			mode: e.imageMode,
			"show-menu-by-longpress": e.showMenuByLongpress,
			onClick: (e) => $(o, a)
		}, null, 14, F)), v(S)(a) && a[e.textKey] ? (r(), f("span", {
			key: 2,
			class: n(`wd-swiper__text ${e.customTextClass}`),
			style: i(e.customTextStyle)
		}, c(a[e.textKey]), 7)) : _("", !0)])], 2))), 128))], 44, P), e.indicator ? (r(), f(u, { key: 0 }, [t(e.$slots, "indicator", {
			current: j.value,
			total: e.list.length
		}), E.indicator ? _("", !0) : (r(), h(M, {
			key: 0,
			"custom-class": e.customIndicatorClass,
			type: V.value.type,
			current: V.value.current,
			total: V.value.total,
			direction: V.value.direction,
			"indicator-position": V.value.indicatorPosition,
			"min-show-num": V.value.minShowNum,
			"show-controls": V.value.showControls,
			onChange: ae
		}, null, 8, [
			"custom-class",
			"type",
			"current",
			"total",
			"direction",
			"indicator-position",
			"min-show-num",
			"show-controls"
		]))], 64)) : _("", !0)], 6));
	}
}), L = /* @__PURE__ */ e({ default: () => R }), R = I;
//#endregion
export { L as n, R as t };
