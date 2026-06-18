globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, C as n, E as r, Ft as i, G as a, H as o, I as s, M as c, Mt as l, N as u, O as d, Ot as f, T as p, Tt as m, U as h, _ as g, ct as _, et as v, ht as y, jt as b, l as x, n as S, nt as C, p as w, tt as T, ut as E, v as D, x as O, y as k, yt as A, z as j } from "./vue.runtime.js";
import { i as M, t as N } from "./shared/element-plus/utils/vue/install.js";
import { l as P, s as F } from "./shared/element-plus/utils/types.js";
import { n as I, r as L } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as R } from "./shared/element-plus/utils/error.js";
import { c as z, t as B } from "./shared/element-plus/utils/dom/aria.js";
import { d as V, n as H, w as U } from "./shared/vueuse.js";
import { a as W, i as G, t as K } from "./shared/element-plus/utils/dom/style.js";
import { r as q } from "./shared/element-plus/hooks/use-namespace.js";
import { T as ee, r as te, t as ne } from "./shared/element-plus-icons.js";
import { a as J } from "./shared/element-plus/utils/vue/icon.js";
import { t as re } from "./shared/element-plus/utils/vue/vnode.js";
import { t as ie } from "./el-icon.js";
import { t as ae } from "./el-tooltip.js";
import { t as oe } from "./shared/element-plus/utils/typescript.js";
import { a as Y, n as se } from "./shared/element-plus/constants/aria.js";
import { t as ce } from "./shared/tinycolor.js";
import { t as le } from "./shared/element-plus/directives/click-outside.js";
import { t as ue } from "./el-collapse-transition.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/menu/src/tokens.mjs
var X = "rootMenu", Z = "subMenu:";
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/menu/src/use-menu.mjs
function de(e, t) {
	let n = g(() => {
		let n = e.parent, r = [t.value];
		for (; n.type.name !== "ElMenu";) n.props.index && r.unshift(n.props.index), n = n.parent;
		return r;
	});
	return {
		parentMenu: g(() => {
			let t = e.parent;
			for (; t && !["ElMenu", "ElSubMenu"].includes(t.type.name);) t = t.parent;
			return t;
		}),
		indexPath: n
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/menu/src/use-menu-color.mjs
function Q(e) {
	return g(() => {
		let t = e.backgroundColor;
		return t ? new ce(t).shade(20).toString() : "";
	});
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/menu/src/use-menu-css-var.mjs
var fe = (e, t) => {
	let n = q("menu");
	return g(() => n.cssVarBlock({
		"text-color": e.textColor || "",
		"hover-text-color": e.textColor || "",
		"bg-color": e.backgroundColor || "",
		"hover-bg-color": Q(e).value || "",
		"active-color": e.activeTextColor || "",
		level: `${t}`
	}));
}, $ = I({
	index: {
		type: String,
		required: !0
	},
	showTimeout: Number,
	hideTimeout: Number,
	popperClass: String,
	popperStyle: { type: L([String, Object]) },
	disabled: Boolean,
	teleported: {
		type: Boolean,
		default: void 0
	},
	popperOffset: Number,
	expandCloseIcon: { type: J },
	expandOpenIcon: { type: J },
	collapseCloseIcon: { type: J },
	collapseOpenIcon: { type: J }
}), pe = "ElSubMenu", me = p({
	name: pe,
	props: $,
	setup(n, { slots: i, expose: a }) {
		let o = r(), { indexPath: c, parentMenu: l } = de(o, g(() => n.index)), f = q("menu"), p = q("sub-menu"), m = t(X);
		m || R(pe, "can not inject root menu");
		let v = t(`${Z}${l.value.uid}`);
		v || R(pe, "can not inject sub menu");
		let y = E({}), S = E({}), T, D = E(!1), O = E(), k = E(), A = g(() => v.level === 0), M = g(() => H.value === "horizontal" && A.value ? "bottom-start" : "right-start"), N = g(() => H.value === "horizontal" && A.value || H.value === "vertical" && !m.props.collapse ? n.expandCloseIcon && n.expandOpenIcon ? z.value ? n.expandOpenIcon : n.expandCloseIcon : ne : n.collapseCloseIcon && n.collapseOpenIcon ? z.value ? n.collapseOpenIcon : n.collapseCloseIcon : te), P = g(() => {
			let e = n.teleported;
			return F(e) ? A.value : e;
		}), I = g(() => m.props.collapse ? `${f.namespace.value}-zoom-in-left` : `${f.namespace.value}-zoom-in-top`), L = g(() => H.value === "horizontal" && A.value ? [
			"bottom-start",
			"bottom-end",
			"top-start",
			"top-end",
			"right-start",
			"left-start"
		] : [
			"right-start",
			"right",
			"right-end",
			"left-start",
			"bottom-start",
			"bottom-end",
			"top-start",
			"top-end"
		]), z = g(() => m.openedMenus.includes(n.index)), V = g(() => [...Object.values(y.value), ...Object.values(S.value)].some(({ active: e }) => e)), H = g(() => m.props.mode), W = g(() => m.props.persistent), G = _({
			index: n.index,
			indexPath: c,
			active: V
		}), K = fe(m.props, v.level + 1), ee = g(() => n.popperOffset ?? m.props.popperOffset), J = g(() => n.popperClass ?? m.props.popperClass), re = g(() => n.popperStyle ?? m.props.popperStyle), oe = g(() => n.showTimeout ?? m.props.showTimeout), Y = g(() => n.hideTimeout ?? m.props.hideTimeout), se = () => k.value?.popperRef?.popperInstanceRef?.destroy(), ce = (e) => {
			e || se();
		}, le = () => {
			m.props.menuTrigger === "hover" && m.props.mode === "horizontal" || m.props.collapse && m.props.mode === "vertical" || n.disabled || m.handleSubMenuClick({
				index: n.index,
				indexPath: c.value,
				active: V.value
			});
		}, Q = (e, t = oe.value) => {
			if (e.type !== "focus") {
				if (m.props.menuTrigger === "click" && m.props.mode === "horizontal" || !m.props.collapse && m.props.mode === "vertical" || n.disabled) {
					v.mouseInChild.value = !0;
					return;
				}
				v.mouseInChild.value = !0, T?.(), {stop: T} = U(() => {
					m.openMenu(n.index, c.value);
				}, t), P.value && l.value.vnode.el?.dispatchEvent(new MouseEvent("mouseenter")), e.type === "mouseenter" && e.target && u(() => {
					B(e.target, { preventScroll: !0 });
				});
			}
		}, $ = (e = !1) => {
			if (m.props.menuTrigger === "click" && m.props.mode === "horizontal" || !m.props.collapse && m.props.mode === "vertical") {
				v.mouseInChild.value = !1;
				return;
			}
			T?.(), v.mouseInChild.value = !1, {stop: T} = U(() => !D.value && m.closeMenu(n.index, c.value), Y.value), P.value && e && v.handleMouseleave?.(!0);
		};
		return e(() => m.props.collapse, (e) => ce(!!e)), h(`${Z}${o.uid}`, {
			addSubMenu: (e) => {
				S.value[e.index] = e;
			},
			removeSubMenu: (e) => {
				delete S.value[e.index];
			},
			handleMouseleave: $,
			mouseInChild: D,
			level: v.level + 1
		}), a({ opened: z }), j(() => {
			m.addSubMenu(G), v.addSubMenu(G);
		}), s(() => {
			v.removeSubMenu(G), m.removeSubMenu(G);
		}), () => {
			let e = [i.title?.(), d(ie, {
				class: p.e("icon-arrow"),
				style: { transform: z.value ? n.expandCloseIcon && n.expandOpenIcon || n.collapseCloseIcon && n.collapseOpenIcon && m.props.collapse ? "none" : "rotateZ(180deg)" : "none" }
			}, { default: () => b(N.value) ? d(o.appContext.components[N.value]) : d(N.value) })], t = m.isMenuPopup ? d(ae, {
				ref: k,
				visible: z.value,
				effect: "light",
				pure: !0,
				offset: ee.value,
				showArrow: !1,
				persistent: W.value,
				popperClass: J.value,
				popperStyle: re.value,
				placement: M.value,
				teleported: P.value,
				fallbackPlacements: L.value,
				transition: I.value,
				gpuAcceleration: !1
			}, {
				content: () => d("div", {
					class: [
						f.m(H.value),
						f.m("popup-container"),
						J.value
					],
					onMouseenter: (e) => Q(e, 100),
					onMouseleave: () => $(!0),
					onFocus: (e) => Q(e, 100)
				}, [d("ul", {
					class: [
						f.b(),
						f.m("popup"),
						f.m(`popup-${M.value}`)
					],
					style: K.value
				}, [i.default?.()])]),
				default: () => d("div", {
					class: p.e("title"),
					onClick: le
				}, e)
			}) : d(w, {}, [d("div", {
				class: p.e("title"),
				ref: O,
				onClick: le
			}, e), d(ue, {}, { default: () => C(d("ul", {
				role: "menu",
				class: [f.b(), f.m("inline")],
				style: K.value
			}, [i.default?.()]), [[x, z.value]]) })]);
			return d("li", {
				class: [
					p.b(),
					p.is("active", V.value),
					p.is("opened", z.value),
					p.is("disabled", n.disabled)
				],
				role: "menuitem",
				ariaHaspopup: !0,
				ariaExpanded: z.value,
				onMouseenter: Q,
				onMouseleave: () => $(),
				onFocus: Q
			}, [t]);
		};
	}
}), he = class {
	constructor(e, t) {
		this.parent = e, this.domNode = t, this.subIndex = 0, this.subMenuItems = this.domNode.querySelectorAll("li"), this.addListeners();
	}
	gotoSubIndex(e) {
		e === this.subMenuItems.length ? e = 0 : e < 0 && (e = this.subMenuItems.length - 1), this.subMenuItems[e].focus(), this.subIndex = e;
	}
	addListeners() {
		let e = this.parent.domNode;
		this.subMenuItems.forEach((t) => {
			t.addEventListener("keydown", (t) => {
				let n = se(t), r = !1;
				switch (n) {
					case Y.down:
						this.gotoSubIndex(this.subIndex + 1), r = !0;
						break;
					case Y.up:
						this.gotoSubIndex(this.subIndex - 1), r = !0;
						break;
					case Y.tab:
						z(e, "mouseleave");
						break;
					case Y.enter:
					case Y.numpadEnter:
					case Y.space:
						r = !0, t.currentTarget.click();
						break;
				}
				return r && (t.preventDefault(), t.stopPropagation()), !1;
			});
		});
	}
}, ge = class {
	constructor(e, t) {
		this.domNode = e, this.submenu = null, this.init(t);
	}
	init(e) {
		this.domNode.setAttribute("tabindex", "0");
		let t = this.domNode.querySelector(`.${e}-menu`);
		t && (this.submenu = new he(this, t)), this.addListeners();
	}
	addListeners() {
		this.domNode.addEventListener("keydown", (e) => {
			let t = se(e), n = !1;
			switch (t) {
				case Y.down:
					z(e.currentTarget, "mouseenter"), this.submenu?.gotoSubIndex(0), n = !0;
					break;
				case Y.up:
					z(e.currentTarget, "mouseenter"), this.submenu?.gotoSubIndex(this.submenu.subMenuItems.length - 1), n = !0;
					break;
				case Y.tab:
					z(e.currentTarget, "mouseleave");
					break;
				case Y.enter:
				case Y.numpadEnter:
				case Y.space:
					n = !0, e.currentTarget.click();
					break;
			}
			n && e.preventDefault();
		});
	}
}, _e = class {
	constructor(e, t) {
		this.domNode = e, this.init(t);
	}
	init(e) {
		let t = this.domNode.childNodes;
		Array.from(t).forEach((t) => {
			t.nodeType === 1 && new ge(t, e);
		});
	}
}, ve = /* @__PURE__ */ p({
	name: "ElMenuCollapseTransition",
	__name: "menu-collapse-transition",
	setup(e) {
		let t = q("menu"), n = {
			onBeforeEnter: (e) => e.style.opacity = "0.2",
			onEnter(e, n) {
				K(e, `${t.namespace.value}-opacity-transition`), e.style.opacity = "1", n();
			},
			onAfterEnter(e) {
				W(e, `${t.namespace.value}-opacity-transition`), e.style.opacity = "";
			},
			onBeforeLeave(e) {
				e.dataset ||= {}, G(e, t.m("collapse")) ? (W(e, t.m("collapse")), e.dataset.oldOverflow = e.style.overflow, e.dataset.scrollWidth = e.clientWidth.toString(), K(e, t.m("collapse"))) : (K(e, t.m("collapse")), e.dataset.oldOverflow = e.style.overflow, e.dataset.scrollWidth = e.clientWidth.toString(), W(e, t.m("collapse"))), e.style.width = `${e.scrollWidth}px`, e.style.overflow = "hidden";
			},
			onLeave(e) {
				K(e, "horizontal-collapse-transition"), e.style.width = `${e.dataset.scrollWidth}px`;
			}
		};
		return (e, t) => (o(), k(S, c({ mode: "out-in" }, n), {
			default: T(() => [a(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ye = I({
	mode: {
		type: String,
		values: ["horizontal", "vertical"],
		default: "vertical"
	},
	defaultActive: {
		type: String,
		default: ""
	},
	defaultOpeneds: {
		type: L(Array),
		default: () => oe([])
	},
	uniqueOpened: Boolean,
	router: Boolean,
	menuTrigger: {
		type: String,
		values: ["hover", "click"],
		default: "hover"
	},
	collapse: Boolean,
	backgroundColor: String,
	textColor: String,
	activeTextColor: String,
	closeOnClickOutside: Boolean,
	collapseTransition: {
		type: Boolean,
		default: !0
	},
	ellipsis: {
		type: Boolean,
		default: !0
	},
	popperOffset: {
		type: Number,
		default: 6
	},
	ellipsisIcon: {
		type: J,
		default: () => ee
	},
	popperEffect: {
		type: L(String),
		default: "dark"
	},
	popperClass: String,
	popperStyle: { type: L([String, Object]) },
	showTimeout: {
		type: Number,
		default: 300
	},
	hideTimeout: {
		type: Number,
		default: 300
	},
	persistent: {
		type: Boolean,
		default: !0
	}
}), be = (e) => m(e) && e.every((e) => b(e)), xe = {
	close: (e, t) => b(e) && be(t),
	open: (e, t) => b(e) && be(t),
	select: (e, t, n, r) => b(e) && be(t) && f(n) && (F(r) || r instanceof Promise)
}, Se = 64, Ce = p({
	name: "ElMenu",
	props: ye,
	emits: xe,
	setup(t, { emit: n, slots: i, expose: a }) {
		let o = r(), s = o.appContext.config.globalProperties.$router, c = E(), l = E(), f = q("menu"), p = q("sub-menu"), m = Se, y = E(-1), b = E(t.defaultOpeneds && !t.collapse ? t.defaultOpeneds.slice(0) : []), x = E(t.defaultActive), S = E({}), w = E({}), T = g(() => t.mode === "horizontal" || t.mode === "vertical" && t.collapse), D = () => {
			let e = x.value && S.value[x.value];
			!e || t.mode === "horizontal" || t.collapse || e.indexPath.forEach((e) => {
				let t = w.value[e];
				t && O(e, t.indexPath);
			});
		}, O = (e, r) => {
			b.value.includes(e) || (t.uniqueOpened && (b.value = b.value.filter((e) => r.includes(e))), b.value.push(e), n("open", e, r));
		}, k = (e) => {
			let t = b.value.indexOf(e);
			t !== -1 && b.value.splice(t, 1);
		}, A = (e, t) => {
			k(e), n("close", e, t);
		}, M = ({ index: e, indexPath: t }) => {
			b.value.includes(e) ? A(e, t) : O(e, t);
		}, N = (e) => {
			(t.mode === "horizontal" || t.collapse) && (b.value = []);
			let { index: r, indexPath: i } = e;
			if (!(P(r) || P(i))) if (t.router && s) {
				let t = e.route || r, a = s.push(t).then((e) => (e || (x.value = r), e));
				n("select", r, i, {
					index: r,
					indexPath: i,
					route: t
				}, a);
			} else x.value = r, n("select", r, i, {
				index: r,
				indexPath: i
			});
		}, F = (e) => {
			let n = S.value;
			x.value = (n[e] || x.value && n[x.value] || n[t.defaultActive])?.index ?? e;
		}, I = (e) => {
			let t = getComputedStyle(e), n = Number.parseInt(t.marginLeft, 10), r = Number.parseInt(t.marginRight, 10);
			return e.offsetWidth + n + r || 0;
		}, L = () => {
			if (!c.value) return -1;
			let e = Array.from(c.value.childNodes).filter((e) => e.nodeName !== "#comment" && (e.nodeName !== "#text" || e.nodeValue)), t = getComputedStyle(c.value), n = Number.parseInt(t.paddingLeft, 10), r = Number.parseInt(t.paddingRight, 10), i = c.value.clientWidth - n - r, a = 0, o = 0;
			return e.forEach((e, t) => {
				a += I(e), a <= i - m && (o = t + 1);
			}), o === e.length ? -1 : o;
		}, R = (e) => w.value[e].indexPath, z = (e, t = 33.34) => {
			let n;
			return () => {
				n && clearTimeout(n), n = setTimeout(() => {
					e();
				}, t);
			};
		}, B = !0, U = () => {
			let e = H(l);
			if (e && (m = I(e) || Se), y.value === L()) return;
			let t = () => {
				y.value = -1, u(() => {
					y.value = L();
				});
			};
			B ? t() : z(t)(), B = !1;
		};
		e(() => t.defaultActive, (e) => {
			S.value[e] || (x.value = ""), F(e);
		}), e(() => t.collapse, (e) => {
			e && (b.value = []);
		}), e(S.value, D);
		let W;
		v(() => {
			t.mode === "horizontal" && t.ellipsis ? W = V(c, U).stop : W?.();
		});
		let G = E(!1);
		{
			let e = (e) => {
				w.value[e.index] = e;
			}, n = (e) => {
				delete w.value[e.index];
			};
			h(X, _({
				props: t,
				openedMenus: b,
				items: S,
				subMenus: w,
				activeIndex: x,
				isMenuPopup: T,
				addMenuItem: (e) => {
					S.value[e.index] = e;
				},
				removeMenuItem: (e) => {
					delete S.value[e.index];
				},
				addSubMenu: e,
				removeSubMenu: n,
				openMenu: O,
				closeMenu: A,
				handleMenuItemClick: N,
				handleSubMenuClick: M
			})), h(`${Z}${o.uid}`, {
				addSubMenu: e,
				removeSubMenu: n,
				mouseInChild: G,
				level: 0
			});
		}
		j(() => {
			t.mode === "horizontal" && new _e(o.vnode.el, f.namespace.value);
		}), a({
			open: (e) => {
				let { indexPath: t } = w.value[e];
				t.forEach((e) => O(e, t));
			},
			close: k,
			updateActiveIndex: F,
			handleResize: U
		});
		let K = fe(t, 0);
		return () => {
			let e = i.default?.() ?? [], r = [];
			if (t.mode === "horizontal" && c.value) {
				let n = re(e).filter((e) => e?.shapeFlag !== 8), i = y.value === -1 ? n : n.slice(0, y.value), a = y.value === -1 ? [] : n.slice(y.value);
				a?.length && t.ellipsis && (e = i, r.push(d(me, {
					ref: l,
					index: "sub-menu-more",
					class: p.e("hide-arrow"),
					popperOffset: t.popperOffset
				}, {
					title: () => d(ie, { class: p.e("icon-more") }, { default: () => d(t.ellipsisIcon) }),
					default: () => a
				})));
			}
			let a = t.closeOnClickOutside ? [[le, () => {
				b.value.length && (G.value || (b.value.forEach((e) => n("close", e, R(e))), b.value = []));
			}]] : [], o = C(d("ul", {
				key: String(t.collapse),
				role: "menubar",
				ref: c,
				style: K.value,
				class: {
					[f.b()]: !0,
					[f.m(t.mode)]: !0,
					[f.m("collapse")]: t.collapse
				}
			}, [...e, ...r]), a);
			return t.collapseTransition && t.mode === "vertical" ? d(ve, () => o) : o;
		};
	}
}), we = I({
	index: {
		type: String,
		required: !0
	},
	route: { type: L([String, Object]) },
	disabled: Boolean
}), Te = { click: (e) => b(e.index) && m(e.indexPath) }, Ee = "ElMenuItem", De = /* @__PURE__ */ p({
	name: Ee,
	__name: "menu-item",
	props: we,
	emits: Te,
	setup(e, { expose: n, emit: i }) {
		let c = e, u = i, d = r(), f = t(X), p = q("menu"), m = q("menu-item");
		f || R(Ee, "can not inject root menu");
		let { parentMenu: h, indexPath: v } = de(d, y(c, "index")), b = t(`${Z}${h.value.uid}`);
		b || R(Ee, "can not inject sub menu");
		let x = g(() => c.index === f.activeIndex), S = _({
			index: c.index,
			indexPath: v,
			active: x
		}), C = () => {
			c.disabled || (f.handleMenuItemClick({
				index: c.index,
				indexPath: v.value,
				route: c.route
			}), u("click", S));
		};
		return j(() => {
			b.addSubMenu(S), f.addMenuItem(S);
		}), s(() => {
			b.removeSubMenu(S), f.removeMenuItem(S);
		}), n({
			parentMenu: h,
			rootMenu: f,
			active: x,
			nsMenu: p,
			nsMenuItem: m,
			handleClick: C
		}), (t, n) => (o(), O("li", {
			class: l([
				A(m).b(),
				A(m).is("active", x.value),
				A(m).is("disabled", e.disabled)
			]),
			role: "menuitem",
			tabindex: "-1",
			onClick: C
		}, [A(h).type.name === "ElMenu" && A(f).props.collapse && t.$slots.title ? (o(), k(A(ae), {
			key: 0,
			effect: A(f).props.popperEffect,
			placement: "right",
			"fallback-placements": ["left"],
			"popper-class": A(f).props.popperClass,
			"popper-style": A(f).props.popperStyle,
			persistent: A(f).props.persistent,
			"focus-on-target": ""
		}, {
			content: T(() => [a(t.$slots, "title")]),
			default: T(() => [D("div", { class: l(A(p).be("tooltip", "trigger")) }, [a(t.$slots, "default")], 2)]),
			_: 3
		}, 8, [
			"effect",
			"popper-class",
			"popper-style",
			"persistent"
		])) : (o(), O(w, { key: 1 }, [a(t.$slots, "default"), a(t.$slots, "title")], 64))], 2));
	}
}), Oe = { title: String }, ke = /* @__PURE__ */ p({
	name: "ElMenuItemGroup",
	__name: "menu-item-group",
	props: Oe,
	setup(e) {
		let t = q("menu-item-group");
		return (r, s) => (o(), O("li", { class: l(A(t).b()) }, [D("div", { class: l(A(t).e("title")) }, [r.$slots.title ? a(r.$slots, "title", { key: 1 }) : (o(), O(w, { key: 0 }, [n(i(e.title), 1)], 64))], 2), D("ul", null, [a(r.$slots, "default")])], 2));
	}
}), Ae = N(Ce, {
	MenuItem: De,
	MenuItemGroup: ke,
	SubMenu: me
}), je = M(De), Me = M(ke), Ne = M(me);
//#endregion
export { Ae as ElMenu, Ae as default, je as ElMenuItem, Me as ElMenuItemGroup, Ne as ElSubMenu, X as MENU_INJECTION_KEY, Z as SUB_MENU_INJECTION_KEY, xe as menuEmits, Te as menuItemEmits, Oe as menuItemGroupProps, we as menuItemProps, ye as menuProps, $ as subMenuProps };
