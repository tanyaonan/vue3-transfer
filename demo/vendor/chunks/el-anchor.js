globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, C as n, Ft as r, G as i, H as a, I as o, Mt as s, N as c, Pt as l, T as u, U as d, Z as f, _ as p, b as m, jt as h, ut as g, v as _, x as v, yt as y, z as b } from "./vue.runtime.js";
import { i as x, t as S } from "./shared/element-plus/utils/vue/install.js";
import { c as C, s as w } from "./shared/element-plus/utils/types.js";
import { t as T } from "./shared/element-plus/constants/event.js";
import { n as E, r as D } from "./shared/element-plus/utils/vue/props/runtime.js";
import { _ as O, c as k } from "./shared/vueuse.js";
import { a as A, i as j, t as M } from "./shared/element-plus/utils/easings.js";
import { n as N, t as P } from "./shared/element-plus/utils/raf.js";
import { r as F } from "./shared/element-plus/hooks/use-namespace.js";
import { n as I } from "./shared/element-plus/utils/dom/position.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/anchor/src/anchor.mjs
var L = E({
	container: { type: D([String, Object]) },
	offset: {
		type: Number,
		default: 0
	},
	bound: {
		type: Number,
		default: 15
	},
	duration: {
		type: Number,
		default: 300
	},
	marker: {
		type: Boolean,
		default: !0
	},
	type: {
		type: D(String),
		default: "default"
	},
	direction: {
		type: D(String),
		default: "vertical"
	},
	selectScrollTop: Boolean
}), R = {
	change: (e) => h(e),
	click: (e, t) => e instanceof MouseEvent && (h(t) || w(t))
}, z = ((e) => {
	if (!O || e === "") return null;
	if (h(e)) try {
		return document.querySelector(e);
	} catch {
		return null;
	}
	return e;
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/throttleByRaf.mjs
function B(e) {
	let t = 0, n = (...n) => {
		t && P(t), t = N(() => {
			e(...n), t = 0;
		});
	};
	return n.cancel = () => {
		P(t), t = 0;
	}, n;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/anchor/src/constants.mjs
var V = Symbol("anchor"), H = /* @__PURE__ */ u({
	name: "ElAnchor",
	__name: "anchor",
	props: L,
	emits: R,
	setup(t, { expose: n, emit: r }) {
		let o = t, u = r, h = f(), x = g(""), S = g({}), E = g(null), D = g(null), O = g(), N = {}, P = !1, L = 0, R = F("anchor"), H = p(() => [
			R.b(),
			o.type === "underline" ? R.m("underline") : "",
			R.m(o.direction)
		]), U = (e) => {
			N[e.href] = e.el;
		}, W = (e) => {
			delete N[e];
		}, G = (e) => {
			x.value !== e && (x.value = e, u(T, e));
		}, K = null, q = "", J = (e) => {
			if (!O.value) return;
			let t = z(e);
			if (!t) return;
			if (K) {
				if (q === e) return;
				K();
			}
			q = e, P = !0;
			let n = j(t, O.value), r = I(t, n), i = n.scrollHeight - n.clientHeight, a = Math.min(r - o.offset, i);
			K = M(O.value, L, a, o.duration, () => {
				setTimeout(() => {
					P = !1, q = "";
				}, 20);
			});
		}, Y = (e) => {
			e && (G(e), J(e));
		}, X = (e, t) => {
			u("click", e, t), Y(t);
		}, Z = B(() => {
			O.value && (L = A(O.value));
			let e = ee();
			P || w(e) || G(e);
		}), ee = () => {
			if (!O.value) return;
			let e = A(O.value), t = [];
			for (let e of Object.keys(N)) {
				let n = z(e);
				if (!n) continue;
				let r = I(n, j(n, O.value));
				t.push({
					top: r - o.offset - o.bound,
					href: e
				});
			}
			t.sort((e, t) => e.top - t.top);
			for (let n = 0; n < t.length; n++) {
				let r = t[n], i = t[n + 1];
				if (n === 0 && e === 0) return o.selectScrollTop ? r.href : "";
				if (r.top <= e && (!i || i.top > e)) return r.href;
			}
		}, Q = () => {
			let e = z(o.container);
			!e || C(e) ? O.value = window : O.value = e;
		};
		k(O, "scroll", Z);
		let $ = () => {
			c(() => {
				if (!E.value || !D.value || !x.value) {
					S.value = {};
					return;
				}
				let e = N[x.value];
				if (!e) {
					S.value = {};
					return;
				}
				let t = E.value.getBoundingClientRect(), n = D.value.getBoundingClientRect(), r = e.getBoundingClientRect();
				o.direction === "horizontal" ? S.value = {
					left: `${r.left - t.left}px`,
					width: `${r.width}px`,
					opacity: 1
				} : S.value = {
					top: `${r.top - t.top + (r.height - n.height) / 2}px`,
					opacity: 1
				};
			});
		};
		return e(x, $), e(() => h.default?.(), $), b(() => {
			Q();
			let e = decodeURIComponent(window.location.hash);
			z(e) ? Y(e) : Z();
		}), e(() => o.container, () => {
			Q();
		}), d(V, {
			ns: R,
			direction: o.direction,
			currentAnchor: x,
			addLink: U,
			removeLink: W,
			handleClick: X
		}), n({ scrollTo: Y }), (e, n) => (a(), v("div", {
			ref_key: "anchorRef",
			ref: E,
			class: s(H.value)
		}, [t.marker ? (a(), v("div", {
			key: 0,
			ref_key: "markerRef",
			ref: D,
			class: s(y(R).e("marker")),
			style: l(S.value)
		}, null, 6)) : m("v-if", !0), _("div", { class: s(y(R).e("list")) }, [i(e.$slots, "default")], 2)], 2));
	}
}), U = E({
	title: String,
	href: String
}), W = ["href"], G = /* @__PURE__ */ u({
	name: "ElAnchorLink",
	__name: "anchor-link",
	props: U,
	setup(l) {
		let u = l, d = g(null), { ns: f, direction: h, currentAnchor: x, addLink: S, removeLink: C, handleClick: w } = t(V), T = p(() => [f.e("link"), f.is("active", x.value === u.href)]), E = (e) => {
			w(e, u.href);
		};
		return e(() => u.href, (e, t) => {
			c(() => {
				t && C(t), e && S({
					href: e,
					el: d.value
				});
			});
		}), b(() => {
			let { href: e } = u;
			e && S({
				href: e,
				el: d.value
			});
		}), o(() => {
			let { href: e } = u;
			e && C(e);
		}), (e, t) => (a(), v("div", { class: s(y(f).e("item")) }, [_("a", {
			ref_key: "linkRef",
			ref: d,
			class: s(T.value),
			href: l.href,
			onClick: E
		}, [i(e.$slots, "default", {}, () => [n(r(l.title), 1)])], 10, W), e.$slots["sub-link"] && y(h) === "vertical" ? (a(), v("div", {
			key: 0,
			class: s(y(f).e("list"))
		}, [i(e.$slots, "sub-link")], 2)) : m("v-if", !0)], 2));
	}
}), K = S(H, { AnchorLink: G }), q = x(G);
//#endregion
export { K as ElAnchor, K as default, q as ElAnchorLink, R as anchorEmits, L as anchorProps };
