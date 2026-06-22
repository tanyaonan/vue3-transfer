globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, S as o, c as s, d as c, g as l, i as u, s as d } from "./vue.runtime.js";
import { a as f, j as p, m, t as h } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as g, i as _, l as v, n as y, r as b, t as x } from "./shared/wot-ui/common/props.ts.js";
import { t as S } from "./shared/wot-ui/composables/useTouch.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-floating-panel/type.ts
var C = {
	...x,
	height: _(0),
	anchors: y(),
	safeAreaInsetBottom: b(!1),
	showScrollbar: v,
	duration: g(300),
	contentDraggable: v
}, w = ["show-scrollbar"], T = /* @__PURE__ */ l({
	name: "wd-floating-panel",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: C,
	emits: ["update:height", "height-change"],
	setup(l, { emit: g }) {
		let _ = S(), v = l, y = g, b = i(v.height), x = .2, C, T = i(0), E = i(!1), D = d(() => ({
			min: v.anchors[0] ? v.anchors[0] : 100,
			max: v.anchors[v.anchors.length - 1] ? v.anchors[v.anchors.length - 1] : Math.round(T.value * .6)
		})), O = d(() => v.anchors.length >= 2 ? v.anchors : [D.value.min, D.value.max]), k = d(() => `${p({
			height: h(D.value.max),
			transform: `translateY(calc(100% + ${h(-b.value)}))`,
			transition: E.value ? "none" : `transform ${v.duration}ms cubic-bezier(0.18, 0.89, 0.32, 1.28)`
		})}${v.customStyle}`), A = (e) => {
			b.value = e, y("update:height", e);
		}, j = (e) => {
			_.touchStart(e), E.value = !0, C = -b.value;
		}, M = (e) => {
			e.currentTarget.dataset.id == "content" && !v.contentDraggable || (_.touchMove(e), A(-P(_.deltaY.value + C)));
		}, N = () => {
			E.value = !1, A(f(O.value, b.value)), b.value !== -C && y("height-change", { height: b.value });
		}, P = (e) => {
			let t = Math.abs(e), { min: n, max: r } = D.value;
			return t > r ? -(r + (t - r) * x) : t < n ? -(n - (n - t) * x) : e;
		};
		return a(() => v.height, (e) => {
			b.value = e;
		}), a(D, () => {
			A(f(O.value, b.value));
		}, { immediate: !0 }), o(() => {
			let { windowHeight: e } = m();
			T.value = e;
		}), (i, a) => (n(), c("div", {
			class: t(`wd-floating-panel ${i.customClass} ${i.safeAreaInsetBottom ? "is-safe" : ""}`),
			style: r(k.value),
			onTouchstartPassive: j,
			onTouchmovePassive: M,
			onTouchend: N,
			onTouchcancel: N
		}, [a[0] ||= s("div", { class: t("wd-floating-panel__header") }, [s("div", { class: t("wd-floating-panel__header-bar") })], -1), s("div", {
			class: t("wd-floating-panel__content"),
			"data-id": "content",
			"show-scrollbar": i.showScrollbar,
			"scroll-y": "",
			onTouchmove: u(M, ["stop", "prevent"])
		}, [e(i.$slots, "default")], 40, w)], 38));
	}
});
//#endregion
export { T as default };
