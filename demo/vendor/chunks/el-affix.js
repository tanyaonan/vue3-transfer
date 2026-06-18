globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, G as t, H as n, Mt as r, N as i, P as a, Pt as o, R as s, T as c, _ as l, et as u, m as d, pt as f, ut as p, v as m, x as h, y as g, yt as _, z as v } from "./vue.runtime.js";
import { t as y } from "./shared/element-plus/utils/vue/install.js";
import { i as b, t as x } from "./shared/element-plus/utils/types.js";
import { t as S } from "./shared/element-plus/constants/event.js";
import { n as C, r as w } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as T } from "./shared/element-plus/utils/error.js";
import { c as E, m as D, o as O } from "./shared/vueuse.js";
import { n as k } from "./shared/element-plus/utils/dom/style.js";
import { r as A } from "./shared/element-plus/utils/easings.js";
import { r as j } from "./shared/element-plus/hooks/use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/affix/src/affix.mjs
var M = C({
	zIndex: {
		type: w([Number, String]),
		default: 100
	},
	target: {
		type: String,
		default: ""
	},
	offset: {
		type: Number,
		default: 0
	},
	position: {
		type: String,
		values: ["top", "bottom"],
		default: "top"
	},
	teleported: Boolean,
	appendTo: {
		type: w([String, Object]),
		default: "body"
	}
}), N = {
	scroll: ({ scrollTop: e, fixed: t }) => b(e) && x(t),
	[S]: (e) => x(e)
}, P = "ElAffix", F = y(/* @__PURE__ */ c({
	name: P,
	__name: "affix",
	props: M,
	emits: N,
	setup(c, { expose: y, emit: b }) {
		let x = c, C = b, w = j("affix"), M = f(), N = f(), F = f(), { height: I } = D(), { height: L, width: R, top: z, bottom: B, left: V, update: H } = O(N, { windowScroll: !1 }), U = O(M), W = p(!1), G = p(0), K = p(0), q = l(() => !x.teleported || !W.value), J = l(() => ({
			display: "flow-root",
			height: W.value ? `${L.value}px` : "",
			width: W.value ? `${R.value}px` : ""
		})), Y = l(() => {
			if (!W.value) return {};
			let e = k(x.offset);
			return {
				height: `${L.value}px`,
				width: `${R.value}px`,
				top: x.position === "top" ? e : "",
				bottom: x.position === "bottom" ? e : "",
				left: x.teleported ? `${V.value}px` : "",
				transform: K.value ? `translateY(${K.value}px)` : "",
				zIndex: x.zIndex
			};
		}), X = () => {
			if (!F.value) return;
			G.value = F.value instanceof Window ? document.documentElement.scrollTop : F.value.scrollTop || 0;
			let { position: e, target: t, offset: n } = x, r = n + L.value;
			if (e === "top") if (t) {
				let e = U.bottom.value - r;
				W.value = n > z.value && U.bottom.value > 0, K.value = e < 0 ? e : 0;
			} else W.value = n > z.value;
			else if (t) {
				let e = I.value - U.top.value - r;
				W.value = I.value - n < B.value && I.value > U.top.value, K.value = e < 0 ? -e : 0;
			} else W.value = I.value - n < B.value;
		}, Z = async () => {
			if (!W.value) {
				H();
				return;
			}
			W.value = !1, await i(), H(), W.value = !0;
		};
		return e(W, (e) => C(S, e)), v(() => {
			x.target ? (M.value = document.querySelector(x.target) ?? void 0, M.value || T(P, `Target does not exist: ${x.target}`)) : M.value = document.documentElement, F.value = A(N.value, !0), H();
		}), a(() => {
			i(Z);
		}), s(() => {
			W.value = !1;
		}), E(F, "scroll", async () => {
			H(), await i(), C("scroll", {
				scrollTop: G.value,
				fixed: W.value
			});
		}), u(X), y({
			update: X,
			updateRoot: Z
		}), (e, i) => (n(), h("div", {
			ref_key: "root",
			ref: N,
			class: r(_(w).b()),
			style: o(J.value)
		}, [(n(), g(d, {
			disabled: q.value,
			to: c.appendTo
		}, [m("div", {
			class: r({ [_(w).m("fixed")]: W.value }),
			style: o(Y.value)
		}, [t(e.$slots, "default")], 6)], 8, ["disabled", "to"]))], 6));
	}
}));
//#endregion
export { F as ElAffix, F as default, N as affixEmits, M as affixProps };
