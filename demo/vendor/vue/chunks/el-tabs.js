globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, E as n, G as r, H as i, I as a, L as o, Mt as s, N as c, Pt as l, T as u, U as d, V as f, Z as p, _ as m, b as h, ct as g, jt as _, l as v, nt as y, pt as b, ut as x, vt as S, w as C, x as w, yt as T, z as E } from "./vue.runtime.js";
import { i as D, t as O } from "./shared/element-plus/utils/vue/install.js";
import { t as k } from "./shared/lodash/omit.js";
import { t as ee } from "./shared/lodash/clamp.js";
import { i as A, s as j } from "./shared/element-plus/utils/types.js";
import { t as te } from "./shared/lodash/isUndefined.js";
import { r as M } from "./shared/element-plus/constants/event.js";
import { n as N, r as P } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as F } from "./shared/element-plus/utils/error.js";
import { a as ne, d as I, p as re, s as ie } from "./shared/vueuse.js";
import { t as L } from "./shared/element-plus/utils/strings.js";
import { n as ae } from "./shared/element-plus/utils/raf.js";
import { r as R } from "./shared/element-plus/hooks/use-namespace.js";
import { O as oe, h as se, n as ce, r as le } from "./shared/element-plus-icons.js";
import { t as z } from "./el-icon.js";
import { t as B } from "./shared/element-plus/utils/dom/position.js";
import { t as V } from "./shared/element-plus/utils/typescript.js";
import { a as H, n as U } from "./shared/element-plus/constants/aria.js";
import { t as W } from "./shared/element-plus/utils/numbers.js";
import { t as ue } from "./shared/element-plus/hooks/use-ordered-children.js";
import { t as de } from "./el-virtual-list/hooks/use-wheel.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tabs/src/constants.mjs
var G = Symbol("tabsRootContextKey"), K = N({
	tabs: {
		type: P(Array),
		default: () => V([])
	},
	tabRefs: {
		type: P(Object),
		default: () => V({})
	}
}), q = "ElTabBar", fe = /* @__PURE__ */ u({
	name: q,
	__name: "tab-bar",
	props: K,
	setup(n, { expose: r }) {
		let o = n, u = t(G);
		u || F(q, "<el-tabs><el-tab-bar /></el-tabs>");
		let d = R("tabs"), f = x(), p = x(), g = m(() => j(u.props.defaultValue) || !!p.value?.transform), _ = () => {
			let e = 0, t = 0, n = ["top", "bottom"].includes(u.props.tabPosition) ? "width" : "height", r = n === "width" ? "x" : "y", i = r === "x" ? "left" : "top";
			return o.tabs.every((r) => {
				if (j(r.paneName)) return !1;
				let a = o.tabRefs[r.paneName];
				if (!a) return !1;
				if (!r.active) return !0;
				e = a[`offset${L(i)}`], t = a[`client${L(n)}`];
				let s = window.getComputedStyle(a);
				return n === "width" && (t -= Number.parseFloat(s.paddingLeft) + Number.parseFloat(s.paddingRight), e += Number.parseFloat(s.paddingLeft)), !1;
			}), {
				[n]: `${t}px`,
				transform: `translate${L(r)}(${e}px)`
			};
		}, v = () => p.value = _(), y = [], b = () => {
			y.forEach((e) => e.stop()), y.length = 0, Object.values(o.tabRefs).forEach((e) => {
				y.push(I(e, v));
			});
		};
		e(() => o.tabs, async () => {
			await c(), v(), b();
		}, { immediate: !0 });
		let S = I(f, () => v());
		return a(() => {
			y.forEach((e) => e.stop()), y.length = 0, S.stop();
		}), r({
			ref: f,
			update: v
		}), (e, t) => g.value ? (i(), w("div", {
			key: 0,
			ref_key: "barRef",
			ref: f,
			class: s([T(d).e("active-bar"), T(d).is(T(u).props.tabPosition)]),
			style: l(p.value)
		}, null, 6)) : h("v-if", !0);
	}
}), pe = 5, me = ({ scrollable: e, navOffset: t, navSize: n, navContainerSize: r, isHorizontal: i }) => {
	let a = x(!1), o = m(() => Math.max(n.value - r.value, 0)), s, c, l = (n) => {
		if (!e.value || n.touches.length !== 1) return;
		let { clientX: r, clientY: i } = B(n);
		s = {
			startX: r,
			startY: i,
			startOffset: t.value
		}, c = void 0;
	}, u = (n) => {
		if (!s || !e.value) return;
		if (n.touches.length !== 1) {
			d();
			return;
		}
		let { clientX: r, clientY: l } = B(n), u = s.startX - r, f = s.startY - l, p = i.value ? u : f, m = i.value ? f : u, h = Math.abs(p), g = Math.abs(m);
		if (te(c)) {
			if (Math.max(h, g) <= pe) return;
			c = h > g;
		}
		if (!c) return;
		let _ = ee(s.startOffset + p, 0, o.value);
		o.value <= 0 || _ === t.value || !n.cancelable || (n.preventDefault(), a.value = !0, t.value = _);
	}, d = () => {
		s = void 0, c = void 0, a.value = !1;
	};
	return {
		isTouchScrolling: a,
		handleTouchStart: l,
		handleTouchMove: u,
		handleTouchEnd: d
	};
}, J = N({
	panes: {
		type: P(Array),
		default: () => V([])
	},
	currentName: {
		type: [String, Number],
		default: ""
	},
	editable: Boolean,
	type: {
		type: String,
		values: [
			"card",
			"border-card",
			""
		],
		default: ""
	},
	stretch: Boolean,
	tabindex: {
		type: [String, Number],
		default: void 0
	}
}), Y = {
	tabClick: (e, t, n) => n instanceof Event,
	tabRemove: (e, t) => t instanceof Event
}, he = "ElTabNav", X = /* @__PURE__ */ u({
	name: he,
	props: J,
	emits: Y,
	setup(n, { expose: r, emit: i }) {
		let a = t(G);
		a || F(he, "<el-tabs><tab-nav /></el-tabs>");
		let o = R("tabs"), s = ne(), l = re(), u = x(), d = x(), p = x(), h = x({}), g = x(), _ = x(!1), v = x(0), y = x(!1), w = x(!0), T = x(!1), D = b(), O = m(() => ["top", "bottom"].includes(a.props.tabPosition)), k = m(() => O.value ? "width" : "height"), A = m(() => {
			let e = k.value === "width" ? "X" : "Y";
			return {
				transition: T.value || V.value ? "none" : void 0,
				transform: `translate${e}(-${v.value}px)`
			};
		}), { width: j, height: te } = ie(u), { width: M, height: N } = ie(d, {
			width: 0,
			height: 0
		}, { box: "border-box" }), P = m(() => O.value ? j.value : te.value), L = m(() => O.value ? M.value : N.value), { onWheel: oe } = de({
			atStartEdge: m(() => v.value <= 0),
			atEndEdge: m(() => L.value - v.value <= P.value),
			layout: m(() => O.value ? "horizontal" : "vertical")
		}, (e) => {
			v.value = ee(v.value + e, 0, L.value - P.value);
		}), B = (e) => {
			T.value = !0, oe(e), ae(() => {
				T.value = !1;
			});
		}, { isTouchScrolling: V, handleTouchStart: ue, handleTouchMove: K, handleTouchEnd: q } = me({
			scrollable: _,
			navOffset: v,
			navSize: L,
			navContainerSize: P,
			isHorizontal: O
		}), pe = () => {
			if (!u.value) return;
			let e = u.value.getBoundingClientRect()[k.value], t = v.value;
			t && (v.value = t > e ? t - e : 0);
		}, J = () => {
			if (!u.value || !d.value) return;
			let e = d.value.getBoundingClientRect()[k.value], t = u.value.getBoundingClientRect()[k.value], n = v.value;
			W(e - n, t) && (v.value = e - n > t * 2 ? n + t : e - t);
		}, Y = async () => {
			let e = d.value;
			if (!_.value || !p.value || !u.value || !e) return;
			await c();
			let t = h.value[n.currentName];
			if (!t) return;
			let r = u.value, i = t.getBoundingClientRect(), a = r.getBoundingClientRect(), o = a.left + 1, s = a.right - 1, l = e.getBoundingClientRect(), f = O.value ? l.width - a.width : l.height - a.height, m = v.value, g = m;
			O.value ? (i.left < o && (g = m - (o - i.left)), i.right > s && (g = m + i.right - s)) : (i.top < a.top && (g = m - (a.top - i.top)), i.bottom > a.bottom && (g = m + (i.bottom - a.bottom))), g = Math.max(g, 0), v.value = Math.min(g, f);
		}, X = () => {
			if (!d.value || !u.value) return;
			n.stretch && g.value?.update();
			let e = d.value.getBoundingClientRect()[k.value], t = u.value.getBoundingClientRect()[k.value], r = v.value;
			t < e ? (_.value = _.value || {}, _.value.prev = r, _.value.next = W(e, r + t), W(t, e - r) && (v.value = e - t)) : (_.value = !1, r > 0 && (v.value = 0));
		}, Z = (e) => {
			let t = U(e), n = 0;
			switch (t) {
				case H.left:
				case H.up:
					n = -1;
					break;
				case H.right:
				case H.down:
					n = 1;
					break;
				default: return;
			}
			let r = Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")), i = r.indexOf(e.target) + n;
			i < 0 ? i = r.length - 1 : i >= r.length && (i = 0), r[i].focus({ preventScroll: !0 }), r[i].click(), Q();
		}, Q = () => {
			w.value && (y.value = !0);
		}, $ = () => y.value = !1, ge = (e, t) => {
			h.value[t] = e;
		};
		return e(s, (e) => {
			e === "hidden" ? w.value = !1 : e === "visible" && setTimeout(() => w.value = !0, 50);
		}), e(l, (e) => {
			e ? setTimeout(() => w.value = !0, 50) : w.value = !1;
		}), I(p, () => {
			ae(X);
		}), E(() => setTimeout(() => Y(), 0)), f(() => X()), r({
			scrollToActiveTab: Y,
			removeFocus: $,
			focusActiveTab: async () => {
				await c(), h.value[n.currentName]?.focus({ preventScroll: !0 });
			},
			tabListRef: d,
			tabBarRef: g,
			scheduleRender: () => S(D)
		}), () => {
			let e = _.value ? [C("span", {
				class: [o.e("nav-prev"), o.is("disabled", !_.value.prev)],
				onClick: pe
			}, [C(z, null, { default: () => [C(ce, null, null)] })]), C("span", {
				class: [o.e("nav-next"), o.is("disabled", !_.value.next)],
				onClick: J
			}, [C(z, null, { default: () => [C(le, null, null)] })])] : null, t = n.panes.map((e, t) => {
				let r = e.uid, s = e.props.disabled, c = e.props.name ?? e.index ?? `${t}`, l = !s && (e.isClosable || e.props.closable !== !1 && n.editable);
				e.index = `${t}`;
				let u = l ? C(z, {
					class: "is-icon-close",
					onClick: (t) => i("tabRemove", e, t)
				}, { default: () => [C(se, null, null)] }) : null, d = e.slots.label?.() || e.props.label, f = !s && e.active ? n.tabindex ?? a.props.tabindex : -1;
				return C("div", {
					ref: (e) => ge(e, c),
					class: [
						o.e("item"),
						o.is(a.props.tabPosition),
						o.is("active", e.active),
						o.is("disabled", s),
						o.is("closable", l),
						o.is("focus", y.value)
					],
					id: `tab-${c}`,
					key: `tab-${r}`,
					"aria-controls": `pane-${c}`,
					role: "tab",
					"aria-selected": e.active,
					tabindex: f,
					onFocus: () => Q(),
					onBlur: () => $(),
					onClick: (t) => {
						$(), i("tabClick", e, c, t);
					},
					onKeydown: (t) => {
						let n = U(t);
						l && (n === H.delete || n === H.backspace) && i("tabRemove", e, t);
					}
				}, [d, u]);
			});
			return D.value, C("div", {
				ref: p,
				class: [
					o.e("nav-wrap"),
					o.is("scrollable", !!_.value),
					o.is(a.props.tabPosition)
				]
			}, [e, C("div", {
				class: o.e("nav-scroll"),
				ref: u
			}, [n.panes.length > 0 ? C("div", {
				class: [
					o.e("nav"),
					o.is(a.props.tabPosition),
					o.is("stretch", n.stretch && ["top", "bottom"].includes(a.props.tabPosition))
				],
				ref: d,
				style: A.value,
				role: "tablist",
				onKeydown: Z,
				onWheel: B,
				onTouchstart: ue,
				onTouchmove: K,
				onTouchend: q,
				onTouchcancel: q
			}, [n.type ? null : C(fe, {
				ref: g,
				tabs: [...n.panes],
				tabRefs: h.value
			}, null), t]) : null])]);
		};
	}
}), Z = N({
	type: {
		type: String,
		values: [
			"card",
			"border-card",
			""
		],
		default: ""
	},
	closable: Boolean,
	addable: Boolean,
	modelValue: { type: [String, Number] },
	defaultValue: { type: [String, Number] },
	editable: Boolean,
	tabPosition: {
		type: String,
		values: [
			"top",
			"right",
			"bottom",
			"left"
		],
		default: "top"
	},
	beforeLeave: {
		type: P(Function),
		default: () => !0
	},
	stretch: Boolean,
	tabindex: {
		type: [String, Number],
		default: 0
	}
}), Q = (e) => _(e) || A(e), $ = {
	[M]: (e) => Q(e),
	tabClick: (e, t) => t instanceof Event,
	tabChange: (e) => Q(e),
	edit: (e, t) => ["remove", "add"].includes(t),
	tabRemove: (e) => Q(e),
	tabAdd: () => !0
}, ge = /* @__PURE__ */ u({
	name: "ElTabs",
	props: Z,
	emits: $,
	setup(t, { emit: i, slots: a, expose: o }) {
		let s = R("tabs"), l = m(() => ["left", "right"].includes(t.tabPosition)), { children: u, addChild: f, removeChild: p, ChildrenSorter: h } = ue(n(), "ElTabPane"), g = x(), _ = x((j(t.modelValue) ? t.defaultValue : t.modelValue) ?? "0"), v = async (e, n = !1) => {
			if (!(_.value === e || j(e))) try {
				let r;
				if (t.beforeLeave) {
					let n = t.beforeLeave(e, _.value);
					r = n instanceof Promise ? await n : n;
				} else r = !0;
				if (r !== !1) {
					let t = u.value.find((e) => e.paneName === _.value)?.isFocusInsidePane();
					_.value = e, n && (i(M, e), i("tabChange", e)), g.value?.removeFocus?.(), t && g.value?.focusActiveTab();
				}
			} catch {}
		}, y = (e, t, n) => {
			e.props.disabled || (i("tabClick", e, n), v(t, !0));
		}, b = (e, t) => {
			e.props.disabled || j(e.props.name) || (t.stopPropagation(), i("edit", e.props.name, "remove"), i("tabRemove", e.props.name));
		}, S = () => {
			i("edit", void 0, "add"), i("tabAdd");
		}, w = (e) => {
			let t = U(e);
			[H.enter, H.numpadEnter].includes(t) && S();
		}, T = (e) => {
			let n = e.el.firstChild, r = ["bottom", "right"].includes(t.tabPosition) ? e.children[0].el : e.children[1].el;
			n !== r && n.before(r);
		};
		return e(() => t.modelValue, (e) => v(e)), e(_, async () => {
			await c(), g.value?.scrollToActiveTab();
		}), d(G, {
			props: t,
			currentName: _,
			registerPane: f,
			unregisterPane: p,
			nav$: g
		}), o({
			currentName: _,
			get tabNavRef() {
				return k(g.value, ["scheduleRender"]);
			}
		}), () => {
			let e = a["add-icon"], n = t.editable || t.addable ? C("div", {
				class: [s.e("new-tab"), l.value && s.e("new-tab-vertical")],
				tabindex: t.tabindex,
				onClick: S,
				onKeydown: w
			}, [e ? r(a, "add-icon") : C(z, { class: s.is("icon-plus") }, { default: () => [C(oe, null, null)] })]) : null, i = C("div", { class: [
				s.e("header"),
				l.value && s.e("header-vertical"),
				s.is(t.tabPosition)
			] }, [C(h, null, {
				default: () => C(X, {
					ref: g,
					currentName: _.value,
					editable: t.editable,
					type: t.type,
					panes: u.value,
					stretch: t.stretch,
					onTabClick: y,
					onTabRemove: b
				}, null),
				$stable: !0
			}), n]), o = C("div", { class: s.e("content") }, [r(a, "default")]);
			return C("div", {
				class: [
					s.b(),
					s.m(t.tabPosition),
					{
						[s.m("card")]: t.type === "card",
						[s.m("border-card")]: t.type === "border-card"
					}
				],
				onVnodeMounted: T,
				onVnodeUpdated: T
			}, [o, i]);
		};
	}
}), _e = N({
	label: {
		type: String,
		default: ""
	},
	name: { type: [String, Number] },
	closable: {
		type: Boolean,
		default: void 0
	},
	disabled: Boolean,
	lazy: Boolean
}), ve = [
	"id",
	"aria-hidden",
	"aria-labelledby"
], ye = "ElTabPane", be = /* @__PURE__ */ u({
	name: ye,
	__name: "tab-pane",
	props: _e,
	setup(c) {
		let l = c, u = n(), d = p(), f = t(G);
		f || F(ye, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
		let _ = R("tab-pane"), b = x(), S = x(), C = m(() => l.closable ?? f.props.closable), E = m(() => f.currentName.value === (l.name ?? S.value)), D = x(E.value), O = m(() => l.name ?? S.value), k = m(() => !l.lazy || D.value || E.value), ee = () => b.value?.contains(document.activeElement);
		e(E, (e) => {
			e && (D.value = !0);
		});
		let A = g({
			uid: u.uid,
			getVnode: () => u.vnode,
			slots: d,
			props: l,
			paneName: O,
			active: E,
			index: S,
			isClosable: C,
			isFocusInsidePane: ee
		});
		return f.registerPane(A), a(() => {
			f.unregisterPane(A);
		}), o(() => {
			d.label && f.nav$.value?.scheduleRender();
		}), (e, t) => k.value ? y((i(), w("div", {
			key: 0,
			id: `pane-${O.value}`,
			ref_key: "paneRef",
			ref: b,
			class: s(T(_).b()),
			role: "tabpanel",
			"aria-hidden": !E.value,
			"aria-labelledby": `tab-${O.value}`
		}, [r(e.$slots, "default")], 10, ve)), [[v, E.value]]) : h("v-if", !0);
	}
}), xe = O(ge, { TabPane: be }), Se = D(be);
//#endregion
export { Se as ElTabPane, xe as ElTabs, xe as default, K as tabBarProps, Y as tabNavEmits, J as tabNavProps, _e as tabPaneProps, $ as tabsEmits, Z as tabsProps, G as tabsRootContextKey };
