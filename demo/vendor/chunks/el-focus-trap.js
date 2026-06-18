globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, G as n, I as r, N as i, T as a, U as o, jt as s, ut as c, yt as l, z as u } from "./vue.runtime.js";
import { l as d } from "./shared/element-plus/utils/types.js";
import { t as f } from "./shared/element-plus/utils/dom/aria.js";
import { _ as p } from "./shared/vueuse.js";
import { a as m, n as h } from "./shared/element-plus/constants/aria.js";
import { t as g } from "./shared/element-plus/virtual/_plugin-vue_export-helper.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/focus-trap/src/tokens.mjs
var _ = "focus-trap.focus-after-trapped", v = "focus-trap.focus-after-released", y = "focus-trap.focusout-prevented", b = {
	cancelable: !0,
	bubbles: !1
}, x = {
	cancelable: !0,
	bubbles: !1
}, S = "focusAfterTrapped", C = "focusAfterReleased", w = Symbol("elFocusTrap"), T = c(), E = c(0), D = c(0), O = 0, k = (e) => {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 || e === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}, A = (e, t) => {
	for (let n of e) if (!j(n, t)) return n;
}, j = (e, t) => {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}, M = (e) => {
	let t = k(e);
	return [A(t, e), A(t.reverse(), e)];
}, N = (e) => e instanceof HTMLInputElement && "select" in e, P = (e, t) => {
	if (e) {
		let n = document.activeElement;
		f(e, { preventScroll: !0 }), D.value = window.performance.now(), e !== n && N(e) && t && e.select();
	}
};
function F(e, t) {
	let n = [...e], r = e.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
var I = () => {
	let e = [];
	return {
		push: (t) => {
			let n = e[0];
			n && t !== n && n.pause(), e = F(e, t), e.unshift(t);
		},
		remove: (t) => {
			e = F(e, t), e[0]?.resume?.();
		}
	};
}, L = (e, t = !1) => {
	let n = document.activeElement;
	for (let r of e) if (P(r, t), document.activeElement !== n) return;
}, R = I(), z = () => E.value > D.value, B = () => {
	T.value = "pointer", E.value = window.performance.now();
}, V = () => {
	T.value = "keyboard", E.value = window.performance.now();
}, H = () => (u(() => {
	O === 0 && (document.addEventListener("mousedown", B), document.addEventListener("touchstart", B), document.addEventListener("keydown", V)), O++;
}), r(() => {
	O--, O <= 0 && (document.removeEventListener("mousedown", B), document.removeEventListener("touchstart", B), document.removeEventListener("keydown", V));
}), {
	focusReason: T,
	lastUserFocusTimestamp: E,
	lastAutomatedFocusTimestamp: D
}), U = (e) => new CustomEvent(y, {
	...x,
	detail: e
}), W = [], G = (e) => {
	h(e) === m.esc && W.forEach((t) => t(e));
}, K = (e) => {
	u(() => {
		W.length === 0 && document.addEventListener("keydown", G), p && W.push(e);
	}), r(() => {
		W = W.filter((t) => t !== e), W.length === 0 && p && document.removeEventListener("keydown", G);
	});
}, q = a({
	name: "ElFocusTrap",
	inheritAttrs: !1,
	props: {
		loop: Boolean,
		trapped: Boolean,
		focusTrapEl: Object,
		focusStartEl: {
			type: [Object, String],
			default: "first"
		}
	},
	emits: [
		S,
		C,
		"focusin",
		"focusout",
		"focusout-prevented",
		"release-requested"
	],
	setup(e, { emit: n }) {
		let a = c(), f, p, { focusReason: g } = H();
		K((t) => {
			e.trapped && !y.paused && n("release-requested", t);
		});
		let y = {
			paused: !1,
			pause() {
				this.paused = !0;
			},
			resume() {
				this.paused = !1;
			}
		}, x = (t) => {
			if (!e.loop && !e.trapped || y.paused) return;
			let { altKey: r, ctrlKey: i, metaKey: a, currentTarget: o, shiftKey: s } = t, { loop: c } = e, l = h(t) === m.tab && !r && !i && !a, u = document.activeElement;
			if (l && u) {
				let e = o, [r, i] = M(e);
				if (!(r && i)) {
					if (u === e) {
						let e = U({ focusReason: g.value });
						n("focusout-prevented", e), e.defaultPrevented || t.preventDefault();
					}
				} else if (!s && u === i) {
					let e = U({ focusReason: g.value });
					n("focusout-prevented", e), e.defaultPrevented || (t.preventDefault(), c && P(r, !0));
				} else if (s && [r, e].includes(u)) {
					let e = U({ focusReason: g.value });
					n("focusout-prevented", e), e.defaultPrevented || (t.preventDefault(), c && P(i, !0));
				}
			}
		};
		o(w, {
			focusTrapRef: a,
			onKeydown: x
		}), t(() => e.focusTrapEl, (e) => {
			e && (a.value = e);
		}, { immediate: !0 }), t([a], ([e], [t]) => {
			e && (e.addEventListener("keydown", x), e.addEventListener("focusin", D), e.addEventListener("focusout", O)), t && (t.removeEventListener("keydown", x), t.removeEventListener("focusin", D), t.removeEventListener("focusout", O));
		});
		let T = (e) => {
			n(S, e);
		}, E = (e) => n(C, e), D = (t) => {
			let r = l(a);
			if (!r) return;
			let i = t.target, o = t.relatedTarget, s = i && r.contains(i);
			e.trapped || o && r.contains(o) || (f = o), s && n("focusin", t), !y.paused && e.trapped && (s ? p = i : P(p, !0));
		}, O = (t) => {
			let r = l(a);
			if (!(y.paused || !r)) if (e.trapped) {
				let i = t.relatedTarget;
				!d(i) && !r.contains(i) && setTimeout(() => {
					if (!y.paused && e.trapped) {
						let e = U({ focusReason: g.value });
						n("focusout-prevented", e), e.defaultPrevented || P(p, !0);
					}
				}, 0);
			} else {
				let e = t.target;
				e && r.contains(e) || n("focusout", t);
			}
		};
		async function A() {
			await i();
			let t = l(a);
			if (t) {
				R.push(y);
				let n = t.contains(document.activeElement) ? f : document.activeElement;
				if (f = n, !t.contains(n)) {
					let r = new Event(_, b);
					t.addEventListener(_, T), t.dispatchEvent(r), r.defaultPrevented || i(() => {
						let r = e.focusStartEl;
						s(r) || (P(r), document.activeElement !== r && (r = "first")), r === "first" && L(k(t), !0), (document.activeElement === n || r === "container") && P(t);
					});
				}
			}
		}
		function j() {
			let e = l(a);
			if (e) {
				e.removeEventListener(_, T);
				let t = new CustomEvent(v, {
					...b,
					detail: { focusReason: g.value }
				});
				e.addEventListener(v, E), e.dispatchEvent(t), !t.defaultPrevented && (g.value == "keyboard" || !z() || e.contains(document.activeElement)) && P(f ?? document.body), e.removeEventListener(v, E), R.remove(y), f = null, p = null;
			}
		}
		return u(() => {
			e.trapped && A(), t(() => e.trapped, (e) => {
				e ? A() : j();
			});
		}), r(() => {
			e.trapped && j(), a.value &&= (a.value.removeEventListener("keydown", x), a.value.removeEventListener("focusin", D), a.value.removeEventListener("focusout", O), void 0), f = null, p = null;
		}), { onKeydown: x };
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/focus-trap/src/focus-trap.mjs
function J(e, t, r, i, a, o) {
	return n(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Y = /* @__PURE__ */ g(q, [["render", J]]), X = /* @__PURE__ */ e({
	ElFocusTrap: () => Y,
	FOCUSOUT_PREVENTED: () => y,
	FOCUSOUT_PREVENTED_OPTS: () => x,
	FOCUS_AFTER_RELEASED: () => v,
	FOCUS_AFTER_TRAPPED: () => _,
	FOCUS_AFTER_TRAPPED_OPTS: () => b,
	FOCUS_TRAP_INJECTION_KEY: () => w,
	ON_RELEASE_FOCUS_EVT: () => C,
	ON_TRAP_FOCUS_EVT: () => S,
	createFocusOutPreventedEvent: () => U,
	default: () => Z,
	focusFirstDescendant: () => L,
	focusableStack: () => R,
	getEdges: () => M,
	getVisibleElement: () => A,
	isFocusCausedByUserEvent: () => z,
	isHidden: () => j,
	obtainAllFocusableElements: () => k,
	tryFocus: () => P,
	useFocusReason: () => H
}), Z = Y;
//#endregion
export { X as n, w as r, Z as t };
