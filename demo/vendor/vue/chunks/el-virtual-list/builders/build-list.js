globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, Ct as t, E as n, J as r, M as i, N as a, O as o, P as s, T as c, V as l, _ as u, jt as d, p as f, ut as p, yt as m, z as h } from "../../vue.runtime.js";
import { i as g } from "../../shared/element-plus/utils/types.js";
import { n as _ } from "../../shared/element-plus/utils/error.js";
import { _ as ee, c as v, h as y } from "../../shared/vueuse.js";
import { r as b } from "../../shared/element-plus/hooks/use-namespace.js";
import { t as x } from "../../shared/element-plus/utils/numbers.js";
import { a as S, c as C, d as w, i as T, l as E, o as D, r as O, s as k, t as A, u as j } from "../defaults.js";
import { c as te, l as M, o as ne, r as N, s as P, t as F } from "../utils.js";
import { t as re } from "../hooks/use-wheel.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/virtual-list/src/builders/build-list.mjs
var I = ({ name: _, getOffset: w, getItemSize: O, getItemOffset: I, getEstimatedTotalSize: L, getStartIndexForOffset: ie, getStopIndexForStartIndex: ae, initCache: oe, clearCache: R, validateProps: se }) => c({
	name: _ ?? "ElVirtualList",
	props: N,
	emits: [
		D,
		j,
		T
	],
	setup(r, { emit: i, expose: o }) {
		se(r);
		let c = n(), d = b("vl"), f = p(oe(r, c)), _ = ne(), N = p(), F = p(), z = p(), B = p({
			isScrolling: !1,
			scrollDir: S,
			scrollOffset: g(r.initScrollOffset) ? r.initScrollOffset : 0,
			updateRequested: !1,
			isScrollbarDragging: !1
		}), V = u(() => {
			let { total: e, cache: t } = r, { isScrolling: n, scrollDir: i, scrollOffset: a } = m(B);
			if (e === 0) return [
				0,
				0,
				0,
				0
			];
			let o = ie(r, a, m(f)), s = ae(r, o, a, m(f)), c = !n || i === "backward" ? Math.max(1, t) : 1, l = !n || i === "forward" ? Math.max(1, t) : 1;
			return [
				Math.max(0, o - c),
				Math.max(0, Math.min(e - 1, s + l)),
				o,
				s
			];
		}), H = u(() => L(r, m(f))), U = u(() => M(r.layout)), ce = u(() => [
			{
				position: "relative",
				[`overflow-${U.value ? "x" : "y"}`]: "scroll",
				WebkitOverflowScrolling: "touch",
				willChange: "transform"
			},
			{
				direction: r.direction,
				height: g(r.height) ? `${r.height}px` : r.height,
				width: g(r.width) ? `${r.width}px` : r.width
			},
			r.style
		]), le = u(() => {
			let e = m(H), t = m(U), n = r.innerWidth;
			return {
				height: t ? "100%" : `${e}px`,
				pointerEvents: m(B).isScrolling ? "none" : void 0,
				width: t ? `${e}px` : n === void 0 ? "100%" : g(n) ? `${n}px` : n,
				margin: 0,
				boxSizing: "border-box"
			};
		}), W = u(() => U.value ? r.width : r.height), G = u(() => Math.max(0, H.value - W.value)), K = (e) => y(e, 0, G.value), ue = (e) => ({
			start: !x(e, 0, 1),
			end: !x(G.value, e, 1)
		}), de = u(() => K(B.value.scrollOffset)), q = u(() => ue(de.value)), J = q.value, { onWheel: Y } = re({
			atStartEdge: u(() => q.value.start),
			atEndEdge: u(() => q.value.end),
			layout: u(() => r.layout)
		}, (e) => {
			z.value.onMouseUp?.(), Q(Math.min(B.value.scrollOffset + e, G.value));
		});
		v(N, "wheel", Y, { passive: !1 });
		let X = () => {
			let { total: e } = r;
			if (e > 0) {
				let [e, t, n, r] = m(V);
				i(D, e, t, n, r);
			}
			let { scrollDir: t, scrollOffset: n, updateRequested: a } = m(B);
			i(j, t, n, a);
		}, fe = (e, t) => {
			let n = ue(t), a = r.direction === "rtl" ? "left" : "right", o = r.direction === "rtl" ? "right" : "left";
			e === "forward" && n.end && !J.end && i(T, U.value ? a : "bottom"), e === "backward" && n.start && !J.start && i(T, U.value ? o : "top"), J = n;
		}, Z = (e, { isScrolling: t, updateRequested: n }) => {
			let r = m(B), i = Math.max(e, 0);
			if (i === r.scrollOffset) return;
			let o = te(r.scrollOffset, i);
			B.value = {
				...r,
				isScrolling: t,
				scrollDir: o,
				scrollOffset: i,
				updateRequested: n
			}, fe(o, K(i)), a(ye);
		}, pe = (e) => {
			let { clientHeight: t, scrollHeight: n, scrollTop: r } = e.currentTarget;
			m(B).scrollOffset !== r && Z(Math.min(r, n - t), {
				isScrolling: !0,
				updateRequested: !1
			});
		}, me = (e) => {
			let { clientWidth: t, scrollLeft: n, scrollWidth: i } = e.currentTarget;
			if (m(B).scrollOffset === n) return;
			let { direction: a } = r, o = n;
			if (a === "rtl") switch (P()) {
				case k:
					o = -n;
					break;
				case E:
					o = i - t - n;
					break;
			}
			Z(Math.min(o, i - t), {
				isScrolling: !0,
				updateRequested: !1
			});
		}, he = (e) => {
			m(U) ? me(e) : pe(e), X();
		}, ge = (e, t) => {
			let n = G.value / t * e;
			Q(Math.min(G.value, n));
		}, Q = (e) => {
			Z(e, {
				isScrolling: m(B).isScrolling,
				updateRequested: !0
			});
		}, _e = (e, t = A) => {
			let { scrollOffset: n } = m(B);
			e = Math.max(0, Math.min(e, r.total - 1)), Q(w(r, e, t, n, m(f)));
		}, ve = (e) => {
			let { direction: n, itemSize: i, layout: a } = r, o = _.value(R && i, R && a, R && n), s;
			if (t(o, String(e))) s = o[e];
			else {
				let t = I(r, e, m(f)), i = O(r, e, m(f)), a = m(U), c = n === "rtl", l = a ? t : 0;
				o[e] = s = {
					position: "absolute",
					left: c ? void 0 : `${l}px`,
					right: c ? `${l}px` : void 0,
					top: a ? 0 : `${t}px`,
					height: a ? "100%" : `${i}px`,
					width: a ? `${i}px` : "100%"
				};
			}
			return s;
		}, ye = () => {
			B.value.isScrolling = !1, a(() => {
				_.value(-1, null, null);
			});
		}, $ = () => {
			let e = N.value;
			e && (e.scrollTop = 0);
		};
		h(() => {
			if (!ee) return;
			let { initScrollOffset: e } = r, t = m(N);
			g(e) && t && (m(U) ? t.scrollLeft = e : t.scrollTop = e), X();
		}), l(() => {
			let { direction: e, layout: t } = r, { scrollOffset: n, updateRequested: i } = m(B), a = m(N);
			if (i && a) if (t === "horizontal") if (e === "rtl") switch (P()) {
				case k:
					a.scrollLeft = -n;
					break;
				case C:
					a.scrollLeft = n;
					break;
				default: {
					let { clientWidth: e, scrollWidth: t } = a;
					a.scrollLeft = t - e - n;
					break;
				}
			}
			else a.scrollLeft = n;
			else a.scrollTop = n;
		}), s(() => {
			m(N).scrollTop = m(B).scrollOffset;
		}), e(G, () => {
			J = q.value;
		});
		let be = {
			ns: d,
			clientSize: W,
			estimatedTotalSize: H,
			windowStyle: ce,
			windowRef: N,
			innerRef: F,
			innerStyle: le,
			itemsToRender: V,
			scrollbarRef: z,
			states: B,
			getItemStyle: ve,
			onScroll: he,
			onScrollbarScroll: ge,
			onWheel: Y,
			scrollTo: Q,
			scrollToItem: _e,
			resetScrollTop: $
		};
		return o({
			windowRef: N,
			innerRef: F,
			getItemStyleCache: _,
			scrollTo: Q,
			scrollToItem: _e,
			resetScrollTop: $,
			states: B
		}), be;
	},
	render(e) {
		let { $slots: t, className: n, clientSize: a, containerElement: s, data: c, getItemStyle: l, innerElement: u, itemsToRender: p, innerStyle: m, layout: h, scrollbarAlwaysOn: g, total: _, onScroll: ee, onScrollbarScroll: v, states: y, useIsScrolling: b, windowStyle: x, ns: S } = e, [C, w] = p, T = r(s), E = r(u), D = [];
		if (_ > 0) for (let e = C; e <= w; e++) D.push(o(f, { key: e }, t.default?.({
			data: c,
			index: e,
			isScrolling: b ? y.isScrolling : void 0,
			style: l(e)
		})));
		let O = [o(E, i(e.innerProps, {
			style: m,
			ref: "innerRef"
		}), d(E) ? D : { default: () => D })], k = o(F, {
			ref: "scrollbarRef",
			clientSize: a,
			layout: h,
			onScroll: v,
			ratio: a * 100 / this.estimatedTotalSize,
			scrollFrom: y.scrollOffset / (this.estimatedTotalSize - a),
			total: _,
			alwaysOn: g
		}), A = o(T, {
			class: [S.e("window"), n],
			style: x,
			onScroll: ee,
			ref: "windowRef",
			key: 0
		}, d(T) ? [O] : { default: () => [O] });
		return o("div", {
			key: 0,
			class: [S.e("wrapper"), g ? "always-on" : ""]
		}, [A, k]);
	}
}), L = I({
	name: "ElFixedSizeList",
	getItemOffset: ({ itemSize: e }, t) => t * e,
	getItemSize: ({ itemSize: e }) => e,
	getEstimatedTotalSize: ({ total: e, itemSize: t }) => t * e,
	getOffset: ({ height: e, total: t, itemSize: n, layout: r, width: i }, a, o, s) => {
		let c = M(r) ? i : e;
		d(c) && _("[ElVirtualList]", "\n        You should set\n          width/height\n        to number when your layout is\n          horizontal/vertical\n      ");
		let l = Math.max(0, t * n - c), u = Math.min(l, a * n), f = Math.max(0, (a + 1) * n - c);
		switch (o === "smart" && (o = s >= f - c && s <= u + c ? A : O), o) {
			case w: return u;
			case "end": return f;
			case O: {
				let e = Math.round(f + (u - f) / 2);
				return e < Math.ceil(c / 2) ? 0 : e > l + Math.floor(c / 2) ? l : e;
			}
			case A:
			default: return s >= f && s <= u ? s : s < f ? f : u;
		}
	},
	getStartIndexForOffset: ({ total: e, itemSize: t }, n) => Math.max(0, Math.min(e - 1, Math.floor(n / t))),
	getStopIndexForStartIndex: ({ height: e, total: t, itemSize: n, layout: r, width: i }, a, o) => {
		let s = a * n, c = M(r) ? i : e, l = Math.ceil((c + o - s) / n);
		return Math.max(0, Math.min(t - 1, a + l - 1));
	},
	initCache() {},
	clearCache: !0,
	validateProps() {}
});
//#endregion
export { I as n, L as t };
