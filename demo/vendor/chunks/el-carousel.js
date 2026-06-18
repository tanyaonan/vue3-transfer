globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, E as n, Ft as r, G as i, H as a, I as o, Mt as s, Pt as c, T as l, U as u, W as d, Z as f, _ as p, b as m, ct as h, d as g, j as _, jt as v, l as y, n as b, nt as x, p as S, pt as C, tt as w, ut as T, v as E, w as D, x as O, y as k, yt as A, z as j } from "./vue.runtime.js";
import { i as M, t as N } from "./shared/element-plus/utils/vue/install.js";
import { i as P, s as F } from "./shared/element-plus/utils/types.js";
import { t as I } from "./shared/lodash/throttle.js";
import { t as L } from "./shared/element-plus/constants/event.js";
import { n as R } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as z } from "./shared/element-plus/utils/error.js";
import { d as B } from "./shared/vueuse.js";
import { r as V } from "./shared/element-plus/hooks/use-namespace.js";
import { n as H, r as ee } from "./shared/element-plus-icons.js";
import { t as te } from "./shared/element-plus/utils/vue/vnode.js";
import { t as U } from "./el-icon.js";
import { n as ne } from "./shared/element-plus/hooks/use-locale.js";
import { t as re } from "./shared/element-plus/hooks/use-ordered-children.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/carousel/src/carousel.mjs
var W = R({
	initialIndex: {
		type: Number,
		default: 0
	},
	height: {
		type: String,
		default: ""
	},
	trigger: {
		type: String,
		values: ["hover", "click"],
		default: "hover"
	},
	autoplay: {
		type: Boolean,
		default: !0
	},
	interval: {
		type: Number,
		default: 3e3
	},
	indicatorPosition: {
		type: String,
		values: [
			"",
			"none",
			"outside"
		],
		default: ""
	},
	arrow: {
		type: String,
		values: [
			"always",
			"hover",
			"never"
		],
		default: "hover"
	},
	type: {
		type: String,
		values: ["", "card"],
		default: ""
	},
	cardScale: {
		type: Number,
		default: .83
	},
	loop: {
		type: Boolean,
		default: !0
	},
	direction: {
		type: String,
		values: ["horizontal", "vertical"],
		default: "horizontal"
	},
	pauseOnHover: {
		type: Boolean,
		default: !0
	},
	motionBlur: Boolean
}), G = { change: (e, t) => [e, t].every(P) }, K = Symbol("carouselContextKey"), q = "ElCarouselItem", J = 300, ie = (t, r, i) => {
	let { children: a, addChild: s, removeChild: c, ChildrenSorter: l } = re(n(), q), d = f(), m = T(-1), h = T(null), g = T(!1), y = T(), b = T(0), x = T(!0), S = p(() => t.arrow !== "never" && !A(D)), w = p(() => a.value.some((e) => e.props.label.toString().length > 0)), E = p(() => t.type === "card"), D = p(() => t.direction === "vertical"), O = p(() => t.height === "auto" ? {
		height: `${b.value}px`,
		overflow: "hidden"
	} : { height: t.height }), k = I((e) => {
		V(e);
	}, J, { trailing: !0 }), M = I((e) => {
		ae(e);
	}, J), N = (e) => x.value ? m.value <= 1 ? e <= 1 : e > 1 : !0;
	function P() {
		h.value &&= (clearInterval(h.value), null);
	}
	function F() {
		t.interval <= 0 || !t.autoplay || h.value || (h.value = setInterval(() => R(), t.interval));
	}
	let R = () => {
		m.value < a.value.length - 1 ? m.value += 1 : t.loop && (m.value = 0);
	};
	function V(e) {
		if (v(e)) {
			let t = a.value.filter((t) => t.props.name === e);
			t.length > 0 && (e = a.value.indexOf(t[0]));
		}
		if (e = Number(e), Number.isNaN(e) || e !== Math.floor(e)) {
			z(i, "index must be integer.");
			return;
		}
		let n = a.value.length, r = m.value;
		e < 0 ? m.value = t.loop ? n - 1 : 0 : e >= n ? m.value = t.loop ? 0 : n - 1 : m.value = e, r === m.value && H(r), Y();
	}
	function H(e) {
		a.value.forEach((t, n) => {
			t.translateItem(n, m.value, e);
		});
	}
	function ee(e, t) {
		let n = A(a), r = n.length;
		if (r === 0 || !e.states.inStage) return !1;
		let i = t + 1, o = t - 1, s = r - 1, c = n[s].states.active, l = n[0].states.active, u = n[i]?.states?.active, d = n[o]?.states?.active;
		return t === s && l || u ? "left" : t === 0 && c || d ? "right" : !1;
	}
	function U() {
		g.value = !0, t.pauseOnHover && P();
	}
	function ne() {
		g.value = !1, F();
	}
	function W(e) {
		A(D) || a.value.forEach((t, n) => {
			e === ee(t, n) && (t.states.hover = !0);
		});
	}
	function G() {
		A(D) || a.value.forEach((e) => {
			e.states.hover = !1;
		});
	}
	function ie(e) {
		m.value = e;
	}
	function ae(e) {
		t.trigger === "hover" && e !== m.value && (m.value = e);
	}
	function oe() {
		V(m.value - 1);
	}
	function se() {
		V(m.value + 1);
	}
	function Y() {
		P(), (!t.pauseOnHover || !g.value) && F();
	}
	function ce(e) {
		t.height === "auto" && (b.value = e);
	}
	function le() {
		let e = d.default?.();
		if (!e) return null;
		let n = te(e).filter((e) => _(e) && e.type.name === "ElCarouselItem");
		return n?.length === 2 && t.loop && !E.value ? (x.value = !0, n) : (x.value = !1, null);
	}
	e(() => m.value, (e, t) => {
		H(t), x.value && (e %= 2, t %= 2), t > -1 && r(L, e, t);
	});
	let X = p({
		get: () => x.value ? m.value % 2 : m.value,
		set: (e) => m.value = e
	});
	e(() => t.autoplay, (e) => {
		e ? F() : P();
	}), e(() => t.loop, () => {
		V(m.value);
	}), e(() => t.interval, () => {
		Y();
	});
	let Z = C();
	return j(() => {
		e(() => a.value, () => {
			a.value.length > 0 && V(t.initialIndex);
		}, { immediate: !0 }), Z.value = B(y.value, () => {
			H();
		}), F();
	}), o(() => {
		P(), y.value && Z.value && Z.value.stop();
	}), u(K, {
		root: y,
		isCardType: E,
		isVertical: D,
		items: a,
		loop: t.loop,
		cardScale: t.cardScale,
		addItem: s,
		removeItem: c,
		setActiveItem: V,
		setContainerHeight: ce
	}), {
		root: y,
		activeIndex: m,
		exposeActiveIndex: X,
		arrowDisplay: S,
		hasLabel: w,
		hover: g,
		isCardType: E,
		items: a,
		isVertical: D,
		containerStyle: O,
		isItemsTwoLength: x,
		handleButtonEnter: W,
		handleButtonLeave: G,
		handleIndicatorClick: ie,
		handleMouseEnter: U,
		handleMouseLeave: ne,
		setActiveItem: V,
		prev: oe,
		next: se,
		PlaceholderItem: le,
		isTwoLengthShow: N,
		ItemsSorter: l,
		throttledArrowClick: k,
		throttledIndicatorHover: M
	};
}, ae = ["aria-label"], oe = ["aria-label"], se = ["onMouseenter", "onClick"], Y = ["aria-label"], ce = { key: 0 }, le = {
	key: 2,
	xmlns: "http://www.w3.org/2000/svg",
	version: "1.1",
	style: { display: "none" }
}, X = "ElCarousel", Z = /* @__PURE__ */ l({
	name: X,
	__name: "carousel",
	props: W,
	emits: G,
	setup(e, { expose: t, emit: n }) {
		let o = e, { root: l, activeIndex: u, exposeActiveIndex: f, arrowDisplay: h, hasLabel: _, hover: v, isCardType: C, items: T, isVertical: j, containerStyle: M, handleButtonEnter: N, handleButtonLeave: P, handleIndicatorClick: F, handleMouseEnter: I, handleMouseLeave: L, setActiveItem: R, prev: z, next: B, PlaceholderItem: te, isTwoLengthShow: re, ItemsSorter: W, throttledArrowClick: G, throttledIndicatorHover: K } = ie(o, n, X), q = V("carousel"), { t: J } = ne(), Z = p(() => {
			let e = [q.b(), q.m(o.direction)];
			return A(C) && e.push(q.m("card")), e.push(q.is("vertical-outside", A(j) && o.indicatorPosition === "outside")), e;
		}), Q = p(() => {
			let e = [q.e("indicators"), q.em("indicators", o.direction)];
			return A(_) && e.push(q.em("indicators", "labels")), o.indicatorPosition === "outside" && e.push(q.em("indicators", "outside")), A(j) && e.push(q.em("indicators", "right")), e;
		});
		function ue(e) {
			if (!o.motionBlur) return;
			let t = A(j) ? `${q.namespace.value}-transitioning-vertical` : `${q.namespace.value}-transitioning`;
			e.currentTarget.classList.add(t);
		}
		function $(e) {
			if (!o.motionBlur) return;
			let t = A(j) ? `${q.namespace.value}-transitioning-vertical` : `${q.namespace.value}-transitioning`;
			e.currentTarget.classList.remove(t);
		}
		return t({
			activeIndex: f,
			setActiveItem: R,
			prev: z,
			next: B
		}), (t, n) => (a(), O("div", {
			ref_key: "root",
			ref: l,
			class: s(Z.value),
			onMouseenter: n[6] ||= g((...e) => A(I) && A(I)(...e), ["stop"]),
			onMouseleave: n[7] ||= g((...e) => A(L) && A(L)(...e), ["stop"])
		}, [
			A(h) ? (a(), k(b, {
				key: 0,
				name: "carousel-arrow-left",
				persisted: ""
			}, {
				default: w(() => [x(E("button", {
					type: "button",
					class: s([A(q).e("arrow"), A(q).em("arrow", "left")]),
					"aria-label": A(J)("el.carousel.leftArrow"),
					onMouseenter: n[0] ||= (e) => A(N)("left"),
					onMouseleave: n[1] ||= (...e) => A(P) && A(P)(...e),
					onClick: n[2] ||= g((e) => A(G)(A(u) - 1), ["stop"])
				}, [D(A(U), null, {
					default: w(() => [D(A(H))]),
					_: 1
				})], 42, ae), [[y, (e.arrow === "always" || A(v)) && (e.loop || A(u) > 0)]])]),
				_: 1
			})) : m("v-if", !0),
			A(h) ? (a(), k(b, {
				key: 1,
				name: "carousel-arrow-right",
				persisted: ""
			}, {
				default: w(() => [x(E("button", {
					type: "button",
					class: s([A(q).e("arrow"), A(q).em("arrow", "right")]),
					"aria-label": A(J)("el.carousel.rightArrow"),
					onMouseenter: n[3] ||= (e) => A(N)("right"),
					onMouseleave: n[4] ||= (...e) => A(P) && A(P)(...e),
					onClick: n[5] ||= g((e) => A(G)(A(u) + 1), ["stop"])
				}, [D(A(U), null, {
					default: w(() => [D(A(ee))]),
					_: 1
				})], 42, oe), [[y, (e.arrow === "always" || A(v)) && (e.loop || A(u) < A(T).length - 1)]])]),
				_: 1
			})) : m("v-if", !0),
			E("div", {
				class: s(A(q).e("container")),
				style: c(A(M)),
				onTransitionstart: ue,
				onTransitionend: $
			}, [D(A(te)), i(t.$slots, "default")], 38),
			D(A(W), null, {
				default: w(() => [e.indicatorPosition === "none" ? m("v-if", !0) : (a(), O("ul", {
					key: 0,
					class: s(Q.value)
				}, [(a(!0), O(S, null, d(A(T), (t, n) => x((a(), O("li", {
					key: n,
					class: s([
						A(q).e("indicator"),
						A(q).em("indicator", e.direction),
						A(q).is("active", n === A(u))
					]),
					onMouseenter: (e) => A(K)(n),
					onClick: g((e) => A(F)(n), ["stop"])
				}, [E("button", {
					class: s(A(q).e("button")),
					"aria-label": A(J)("el.carousel.indicator", { index: n + 1 })
				}, [A(_) ? (a(), O("span", ce, r(t.props.label), 1)) : m("v-if", !0)], 10, Y)], 42, se)), [[y, A(re)(n)]])), 128))], 2))]),
				_: 1
			}),
			e.motionBlur ? (a(), O("svg", le, [...n[8] ||= [E("defs", null, [E("filter", { id: "elCarouselHorizontal" }, [E("feGaussianBlur", {
				in: "SourceGraphic",
				stdDeviation: "12,0"
			})]), E("filter", { id: "elCarouselVertical" }, [E("feGaussianBlur", {
				in: "SourceGraphic",
				stdDeviation: "0,10"
			})])], -1)]])) : m("v-if", !0)
		], 34));
	}
}), Q = R({
	name: {
		type: String,
		default: ""
	},
	label: {
		type: [String, Number],
		default: ""
	}
}), ue = (e) => {
	let r = t(K), i = n();
	r || z(q, "usage: <el-carousel></el-carousel-item></el-carousel>"), i || z(q, "compositional hook can only be invoked inside setups");
	let a = T(), s = T(!1), c = T(0), l = T(1), u = T(!1), d = T(!1), f = T(!1), p = T(!1), { isCardType: m, isVertical: g, cardScale: _ } = r;
	function v(e, t, n) {
		let r = n - 1, i = t - 1, a = t + 1, o = n / 2;
		return t === 0 && e === r ? -1 : t === r && e === 0 ? n : e < i && t - e >= o ? n + 1 : e > a && e - t >= o ? -2 : e;
	}
	function y(e, t) {
		let n = A(g) ? r.root.value?.offsetHeight || 0 : r.root.value?.offsetWidth || 0;
		return f.value ? n * ((2 - _) * (e - t) + 1) / 4 : e < t ? -(1 + _) * n / 4 : (3 + _) * n / 4;
	}
	function b(e, t, n) {
		let i = r.root.value;
		return i ? ((n ? i.offsetHeight : i.offsetWidth) || 0) * (e - t) : 0;
	}
	let x = (e, t, n) => {
		let i = A(m), o = r.items.value.length ?? NaN, s = e === t;
		!i && !F(n) && (p.value = s || e === n), !s && o > 2 && r.loop && (e = v(e, t, o));
		let h = A(g);
		u.value = s, i ? (f.value = Math.round(Math.abs(e - t)) <= 1, c.value = y(e, t), l.value = A(u) ? 1 : _) : c.value = b(e, t, h), d.value = !0, s && a.value && r.setContainerHeight(a.value.offsetHeight);
	};
	function S() {
		if (r && A(m)) {
			let e = r.items.value.findIndex(({ uid: e }) => e === i.uid);
			r.setActiveItem(e);
		}
	}
	let C = {
		props: e,
		states: h({
			hover: s,
			translate: c,
			scale: l,
			active: u,
			ready: d,
			inStage: f,
			animating: p
		}),
		uid: i.uid,
		getVnode: () => i.vnode,
		translateItem: x
	};
	return r.addItem(C), o(() => {
		r.removeItem(C);
	}), {
		carouselItemRef: a,
		active: u,
		animating: p,
		hover: s,
		inStage: f,
		isVertical: g,
		translate: c,
		isCardType: m,
		scale: l,
		ready: d,
		handleItemClick: S
	};
}, $ = /* @__PURE__ */ l({
	name: q,
	__name: "carousel-item",
	props: Q,
	setup(e) {
		let t = e, n = V("carousel"), { carouselItemRef: r, active: o, animating: l, hover: u, inStage: d, isVertical: f, translate: h, isCardType: g, scale: _, ready: v, handleItemClick: b } = ue(t), S = p(() => [
			n.e("item"),
			n.is("active", o.value),
			n.is("in-stage", d.value),
			n.is("hover", u.value),
			n.is("animating", l.value),
			{
				[n.em("item", "card")]: g.value,
				[n.em("item", "card-vertical")]: g.value && f.value
			}
		]), C = p(() => ({ transform: [`${`translate${A(f) ? "Y" : "X"}`}(${A(h)}px)`, `scale(${A(_)})`].join(" ") }));
		return (e, t) => x((a(), O("div", {
			ref_key: "carouselItemRef",
			ref: r,
			class: s(S.value),
			style: c(C.value),
			onClick: t[0] ||= (...e) => A(b) && A(b)(...e)
		}, [A(g) ? x((a(), O("div", {
			key: 0,
			class: s(A(n).e("mask"))
		}, null, 2)), [[y, !A(o)]]) : m("v-if", !0), i(e.$slots, "default")], 6)), [[y, A(v)]]);
	}
}), de = N(Z, { CarouselItem: $ }), fe = M($);
//#endregion
export { q as CAROUSEL_ITEM_NAME, de as ElCarousel, de as default, fe as ElCarouselItem, K as carouselContextKey, G as carouselEmits, Q as carouselItemProps, W as carouselProps };
