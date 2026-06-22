globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { D as t, I as n, L as r, N as i, O as a, P as o, c as s, d as c, g as l, h as u, i as d, l as f, s as p, u as m, y as h } from "./vue.runtime.js";
import { u as g, x as _, y as v } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as y, s as b, t as x } from "./shared/wot-ui/common/props.ts.js";
import { t as S } from "./wd-icon.js";
import { t as C } from "./wd-overlay.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-video-preview/types.ts
var w = {
	...x,
	selector: b(""),
	zIndex: y(1e3),
	onOpen: Function,
	onClose: Function
}, T = "__VIDEO_PREVIEW_OPTION__", E = {
	url: "",
	poster: "",
	title: "",
	show: !1,
	zIndex: 1e3
}, D = Symbol("None");
function O(e = "") {
	let t = k(e), n = h(t, r(D));
	return n.value === D && (n.value = E, a(t, n)), {
		previewVideo: (e) => {
			n.value = g(g(E, e), { show: !0 });
		},
		closeVideoPreview: () => {
			n.value = { show: !1 };
		}
	};
}
var k = (e) => e ? `${T}${e}` : T, A = [
	"poster",
	"title",
	"src"
], j = /*@__PURE__*/ l({
	name: "wd-video-preview",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: w,
	emits: ["open", "close"],
	setup(e, { expose: a, emit: l }) {
		let g = e, y = l, b = n({
			show: !1,
			visible: !1
		}), x = n({
			url: "",
			poster: "",
			title: ""
		}), w = h(k(g.selector), r(E)), T = p(() => ({
			zIndex: v(w.value.zIndex) ? w.value.zIndex : g.zIndex,
			onOpen: w.value.onOpen || g.onOpen || null,
			onClose: w.value.onClose || g.onClose || null
		}));
		i(() => w.value, (e) => {
			D(e);
		}, {
			deep: !0,
			immediate: !0
		}), i(() => b.show, (e, t) => {
			e && !t ? (y("open"), _(T.value.onOpen) && T.value.onOpen()) : !e && t && (y("close"), _(T.value.onClose) && T.value.onClose());
		});
		function D(e) {
			b.show = v(e.show) ? e.show : !1, b.show && (x.url = e.url, x.poster = e.poster, x.title = e.title);
		}
		function O() {
			b.visible = !0;
		}
		function j() {
			b.visible = !1, x.url = "", x.poster = "", x.title = "";
		}
		function M() {
			b.show = !1;
		}
		function N(e) {
			x.url = e.url, x.poster = e.poster, x.title = e.title, b.show = !0;
		}
		return a({
			open: N,
			close: M
		}), (e, n) => (t(), f(C, {
			show: b.show,
			"z-index": T.value.zIndex,
			"lock-scroll": !0,
			"custom-class": `wd-video-preview ${e.customClass}`,
			"custom-style": e.customStyle,
			onClick: M,
			onEnter: O,
			onAfterLeave: j
		}, {
			default: o(() => [s("div", {
				class: "wd-video-preview__video",
				onClick: n[0] ||= d(() => {}, ["stop"])
			}, [b.visible && x.url ? (t(), c("video", {
				key: 0,
				class: "wd-video-preview__video",
				controls: !0,
				poster: x.poster,
				title: x.title,
				"play-btn-position": "center",
				enableNative: !0,
				src: x.url,
				"enable-progress-gesture": !1
			}, null, 8, A)) : m("", !0)]), s("div", {
				class: "wd-video-preview__close",
				onClick: d(M, ["stop"])
			}, [u(S, {
				name: "close",
				"custom-class": "wd-video-preview__close-icon"
			})])]),
			_: 1
		}, 8, [
			"show",
			"z-index",
			"custom-class",
			"custom-style"
		]));
	}
}), M = /* @__PURE__ */ e({ default: () => N }), N = j;
//#endregion
export { M as n, O as r, N as t };
