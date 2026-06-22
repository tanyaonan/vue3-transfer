globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, I as r, L as i, N as a, P as o, U as s, d as c, g as l, h as u, i as d, l as f, s as p, u as m, y as h } from "./vue.runtime.js";
import { x as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as v, r as y, s as b, t as x } from "./shared/wot-ui/common/props.ts.js";
import { t as S } from "./wd-icon.js";
import { t as C } from "./wd-overlay.js";
import { t as w } from "./wd-swiper.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-image-preview/types.ts
var T = {
	...x,
	selector: b(""),
	images: {
		type: Array,
		default: () => []
	},
	startPosition: v(0),
	showIndex: y(!0),
	loop: y(!0),
	closeable: y(!0),
	closeIcon: b("close"),
	closeIconPosition: b("top-right"),
	closeOnClick: y(!0),
	showMenuByLongpress: y(!0),
	onOpen: Function,
	onClose: Function,
	onChange: Function,
	onLongPress: Function,
	zIndex: v(1e3)
}, E = "__IMAGE_PREVIEW_OPTION__", D = {
	images: [],
	startPosition: 0,
	showIndex: !0,
	loop: !0,
	closeable: !0,
	closeIcon: "close",
	closeIconPosition: "top-right",
	closeOnClick: !0,
	showMenuByLongpress: !0,
	show: !1,
	zIndex: 1e3
}, O = (e) => e ? `${E}${e}` : E, k = {
	key: 0,
	class: "wd-image-preview__index"
}, A = /* @__PURE__ */ l({
	name: "wd-image-preview",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: T,
	emits: [
		"open",
		"close",
		"click",
		"change",
		"long-press"
	],
	setup(l, { expose: v, emit: y }) {
		let b = l, x = y, T = r({
			show: !1,
			visible: !1,
			currentIndex: 0,
			images: []
		}), E = h(O(b.selector), i(D)), A = p(() => ({
			showIndex: _(E.value.showIndex) ? E.value.showIndex : b.showIndex,
			loop: _(E.value.loop) ? E.value.loop : b.loop,
			closeable: _(E.value.closeable) ? E.value.closeable : b.closeable,
			closeIcon: _(E.value.closeIcon) ? E.value.closeIcon : b.closeIcon,
			closeIconPosition: _(E.value.closeIconPosition) ? E.value.closeIconPosition : b.closeIconPosition,
			closeOnClick: _(E.value.closeOnClick) ? E.value.closeOnClick : b.closeOnClick,
			showMenuByLongpress: _(E.value.showMenuByLongpress) ? E.value.showMenuByLongpress : b.showMenuByLongpress,
			zIndex: _(E.value.zIndex) ? E.value.zIndex : b.zIndex,
			onOpen: E.value.onOpen || b.onOpen || null,
			onClose: E.value.onClose || b.onClose || null,
			onChange: E.value.onChange || b.onChange || null,
			onLongPress: E.value.onLongPress || b.onLongPress || null
		}));
		a(() => E.value, (e) => {
			j(e);
		}, {
			deep: !0,
			immediate: !0
		}), a(() => T.show, (e, t) => {
			e && !t ? (x("open"), g(A.value.onOpen) && A.value.onOpen()) : !e && t && (x("close"), g(A.value.onClose) && A.value.onClose());
		});
		function j(e) {
			T.show = _(e.show) ? e.show : !1, T.show && (T.images = _(e.images) ? e.images : b.images || [], T.currentIndex = _(e.startPosition) ? e.startPosition : b.startPosition);
		}
		function M() {
			T.visible = !0;
		}
		function N() {
			T.visible = !1, T.images = [], T.currentIndex = 0;
		}
		function P(e) {
			e && (Array.isArray(e) ? T.images = e : (T.images = _(e.images) ? e.images : b.images || [], T.currentIndex = _(e.startPosition) ? e.startPosition : b.startPosition)), T.show = !0;
		}
		function F() {
			T.show = !1;
		}
		function I(e) {
			e >= 0 && e < T.images.length && (T.currentIndex = e);
		}
		function L({ current: e }) {
			T.currentIndex = e, x("change", { index: e }), g(A.value.onChange) && A.value.onChange(e);
		}
		function R({ index: e }) {
			x("click", { index: e }), A.value.closeOnClick && F();
		}
		return v({
			open: P,
			close: F,
			setActive: I
		}), (r, i) => (n(), f(C, {
			show: T.show,
			"z-index": A.value.zIndex,
			"lock-scroll": !0,
			"custom-class": `wd-image-preview ${r.customClass}`,
			"custom-style": r.customStyle,
			onEnter: M,
			onAfterLeave: N
		}, {
			default: o(() => [
				e(r.$slots, "close", { close: F }, () => [A.value.closeable ? (n(), c("div", {
					key: 0,
					class: t(`wd-image-preview__close wd-image-preview__close--${A.value.closeIconPosition}`),
					onClick: d(F, ["stop"])
				}, [u(S, {
					"custom-class": "wd-image-preview__close-icon",
					name: A.value.closeIcon
				}, null, 8, ["name"])], 2)) : m("", !0)]),
				T.visible ? (n(), f(w, {
					key: 0,
					"custom-class": "wd-image-preview__swiper",
					list: T.images,
					current: T.currentIndex,
					"onUpdate:current": i[0] ||= (e) => T.currentIndex = e,
					autoplay: !1,
					loop: A.value.loop,
					"show-menu-by-longpress": A.value.showMenuByLongpress,
					"image-mode": "aspectFit",
					height: "100%",
					onClick: R,
					onChange: L
				}, {
					indicator: o(({ total: t, current: i }) => [e(r.$slots, "indicator", {
						total: t,
						current: i
					}, () => [A.value.showIndex && t > 1 ? (n(), c("div", k, s(i + 1) + " / " + s(t), 1)) : m("", !0)])]),
					_: 3
				}, 8, [
					"list",
					"current",
					"loop",
					"show-menu-by-longpress"
				])) : m("", !0),
				e(r.$slots, "default", {
					current: T.currentIndex,
					total: T.images.length,
					images: T.images,
					close: F
				})
			]),
			_: 3
		}, 8, [
			"show",
			"z-index",
			"custom-class",
			"custom-style"
		]));
	}
});
//#endregion
export { A as default };
