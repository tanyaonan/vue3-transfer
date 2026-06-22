globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, A as n, D as r, G as i, H as a, K as o, N as s, Nt as c, T as l, U as u, _ as d, ht as f, lt as p, tt as m, ut as h, w as g, y as _, yt as v } from "./vue.runtime.js";
import { n as y, r as b } from "./shared/element-plus/utils/vue/props/runtime.js";
import { c as x } from "./shared/vueuse.js";
import { a as S, n as C, t as w } from "./shared/element-plus/constants/aria.js";
import { t as T } from "./shared/element-plus/hooks/use-id.js";
import { t as E } from "./shared/element-plus/virtual/_plugin-vue_export-helper.js";
import { n as D } from "./el-collection/collection.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/roving-focus-group/src/roving-focus-group.mjs
var O = y({
	style: {
		type: b([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	},
	currentTabId: { type: b(String) },
	defaultCurrentTabId: String,
	loop: Boolean,
	dir: {
		type: String,
		values: ["ltr", "rtl"],
		default: "ltr"
	},
	orientation: { type: b(String) },
	onBlur: Function,
	onFocus: Function,
	onMousedown: Function
}), { ElCollection: k, ElCollectionItem: A, COLLECTION_INJECTION_KEY: j, COLLECTION_ITEM_INJECTION_KEY: M } = D("RovingFocusGroup"), N = Symbol("elRovingFocusGroup"), P = Symbol("elRovingFocusGroupItem"), F = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
}, I = (e, t) => {
	if (t !== "rtl") return e;
	switch (e) {
		case S.right: return S.left;
		case S.left: return S.right;
		default: return e;
	}
}, L = (e, t, n) => {
	let r = I(C(e), n);
	if (!(t === "vertical" && [S.left, S.right].includes(r)) && !(t === "horizontal" && [S.up, S.down].includes(r))) return F[r];
}, R = (e, t) => e.map((n, r) => e[(r + t) % e.length]), z = (e) => {
	let { activeElement: t } = document;
	for (let n of e) if (n === t || (n.focus(), t !== document.activeElement)) return;
}, B = "currentTabIdChange", V = "rovingFocusGroup.entryFocus", H = {
	bubbles: !1,
	cancelable: !0
}, U = l({
	name: "ElRovingFocusGroupImpl",
	inheritAttrs: !1,
	props: O,
	emits: [B, "entryFocus"],
	setup(e, { emit: r }) {
		let i = h((e.currentTabId || e.defaultCurrentTabId) ?? null), a = h(!1), o = h(!1), c = h(), { getItems: l } = n(j, void 0), m = d(() => [{ outline: "none" }, e.style]), g = (e) => {
			r(B, e);
		}, _ = () => {
			a.value = !0;
		}, y = w((t) => {
			e.onMousedown?.(t);
		}, () => {
			o.value = !0;
		}), b = w((t) => {
			e.onFocus?.(t);
		}, (e) => {
			let t = !v(o), { target: n, currentTarget: r } = e;
			if (n === r && t && !v(a)) {
				let e = new Event(V, H);
				if (r?.dispatchEvent(e), !e.defaultPrevented) {
					let e = l().filter((e) => e.focusable);
					z([
						e.find((e) => e.active),
						e.find((e) => e.id === v(i)),
						...e
					].filter(Boolean).map((e) => e.ref));
				}
			}
			o.value = !1;
		}), S = w((t) => {
			e.onBlur?.(t);
		}, () => {
			a.value = !1;
		});
		u(N, {
			currentTabbedId: p(i),
			loop: f(e, "loop"),
			tabIndex: d(() => v(a) ? -1 : 0),
			rovingFocusGroupRef: c,
			rovingFocusGroupRootStyle: m,
			orientation: f(e, "orientation"),
			dir: f(e, "dir"),
			onItemFocus: g,
			onItemShiftTab: _,
			onBlur: S,
			onFocus: b,
			onMousedown: y,
			onKeydown: (t) => {
				let n = L(t);
				if (n) {
					t.preventDefault();
					let r = l().filter((e) => e.focusable).map((e) => e.ref);
					switch (n) {
						case "last":
							r.reverse();
							break;
						case "prev":
						case "next": {
							n === "prev" && r.reverse();
							let i = r.indexOf(t.currentTarget);
							r = e.loop ? R(r, i + 1) : r.slice(i + 1);
							break;
						}
						default: break;
					}
					s(() => {
						z(r);
					});
				}
			}
		}), t(() => e.currentTabId, (e) => {
			i.value = e ?? null;
		}), x(c, V, (...e) => {
			r("entryFocus", ...e);
		});
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/roving-focus-group/src/roving-focus-group-impl.mjs
function W(e, t, n, r, a, o) {
	return i(e.$slots, "default");
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/roving-focus-group/src/roving-focus-group.vue_vue_type_script_lang.mjs
var G = l({
	name: "ElRovingFocusGroup",
	components: {
		ElFocusGroupCollection: k,
		ElRovingFocusGroupImpl: /* @__PURE__ */ E(U, [["render", W]])
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/roving-focus-group/src/roving-focus-group2.mjs
function K(e, t, n, s, l, u) {
	let d = o("el-roving-focus-group-impl"), f = o("el-focus-group-collection");
	return a(), _(f, null, {
		default: m(() => [g(d, c(r(e.$attrs)), {
			default: m(() => [i(e.$slots, "default")]),
			_: 3
		}, 16)]),
		_: 3
	});
}
var q = /* @__PURE__ */ E(G, [["render", K]]), J = l({
	components: { ElRovingFocusCollectionItem: A },
	props: {
		focusable: {
			type: Boolean,
			default: !0
		},
		active: Boolean
	},
	emits: [
		"mousedown",
		"focus",
		"keydown"
	],
	setup(e, { emit: t }) {
		let { currentTabbedId: r, onItemFocus: i, onItemShiftTab: a, onKeydown: o } = n(N, void 0), s = T(), c = h(), l = w((e) => {
			t("mousedown", e);
		}, (t) => {
			e.focusable ? i(v(s)) : t.preventDefault();
		}), f = w((e) => {
			t("focus", e);
		}, () => {
			i(v(s));
		}), p = w((e) => {
			t("keydown", e);
		}, (e) => {
			let { shiftKey: t, target: n, currentTarget: r } = e;
			if (C(e) === S.tab && t) {
				a();
				return;
			}
			n === r && o(e);
		}), m = d(() => r.value === v(s));
		return u(P, {
			rovingFocusGroupItemRef: c,
			tabIndex: d(() => v(m) ? 0 : -1),
			handleMousedown: l,
			handleFocus: f,
			handleKeydown: p
		}), {
			id: s,
			handleKeydown: p,
			handleFocus: f,
			handleMousedown: l
		};
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/roving-focus-group/src/roving-focus-item.mjs
function Y(e, t, n, r, s, c) {
	let l = o("el-roving-focus-collection-item");
	return a(), _(l, {
		id: e.id,
		focusable: e.focusable,
		active: e.active
	}, {
		default: m(() => [i(e.$slots, "default")]),
		_: 3
	}, 8, [
		"id",
		"focusable",
		"active"
	]);
}
var X = /* @__PURE__ */ E(J, [["render", Y]]), Z = /* @__PURE__ */ e({
	ElRovingFocusGroup: () => q,
	ElRovingFocusItem: () => X,
	ROVING_FOCUS_COLLECTION_INJECTION_KEY: () => j,
	ROVING_FOCUS_GROUP_INJECTION_KEY: () => N,
	ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY: () => P,
	ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY: () => M,
	default: () => Q,
	focusFirst: () => z,
	getFocusIntent: () => L,
	reorderArray: () => R
}), Q = q;
//#endregion
export { P as a, N as i, Z as n, j as o, X as r, M as s, Q as t };
