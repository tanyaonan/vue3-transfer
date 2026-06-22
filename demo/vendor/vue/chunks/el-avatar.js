globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, C as n, G as r, H as i, J as a, Mt as o, Pt as s, T as c, U as l, _ as u, ct as d, g as f, ht as p, j as m, jt as h, tt as g, ut as _, w as v, x as y, y as b, yt as x } from "./vue.runtime.js";
import { i as S, t as C } from "./shared/element-plus/utils/vue/install.js";
import { i as w } from "./shared/element-plus/utils/types.js";
import { n as T, r as E } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as D } from "./shared/element-plus/utils/dom/style.js";
import { r as O } from "./shared/element-plus/hooks/use-namespace.js";
import { a as k } from "./shared/element-plus/utils/vue/icon.js";
import { t as A } from "./shared/element-plus/utils/vue/vnode.js";
import { t as j } from "./el-icon.js";
import { i as M, t as N } from "./el-tooltip.js";
import { d as P } from "./el-popper.js";
import { t as F } from "./shared/element-plus/constants/size.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/avatar/src/avatar.mjs
var I = T({
	size: {
		type: [Number, String],
		values: F,
		validator: (e) => w(e)
	},
	shape: {
		type: String,
		values: ["circle", "square"]
	},
	icon: { type: k },
	src: {
		type: String,
		default: ""
	},
	alt: String,
	srcSet: String,
	fit: {
		type: E(String),
		default: "cover"
	}
}), L = { error: (e) => e instanceof Event }, R = Symbol("avatarGroupContextKey"), z = [
	"src",
	"alt",
	"srcset"
], B = /* @__PURE__ */ c({
	name: "ElAvatar",
	__name: "avatar",
	props: I,
	emits: L,
	setup(n, { emit: c }) {
		let l = n, d = c, f = t(R, void 0), p = O("avatar"), m = _(!1), v = u(() => l.size ?? f?.size), S = u(() => l.shape ?? f?.shape ?? "circle"), C = u(() => {
			let { icon: e } = l, t = [p.b()];
			return h(v.value) && t.push(p.m(v.value)), e && t.push(p.m("icon")), S.value && t.push(p.m(S.value)), t;
		}), T = u(() => w(v.value) ? p.cssVarBlock({ size: D(v.value) }) : void 0), E = u(() => ({ objectFit: l.fit }));
		e(() => [l.src, l.srcSet], () => m.value = !1);
		function k(e) {
			m.value = !0, d("error", e);
		}
		return (e, t) => (i(), y("span", {
			class: o(C.value),
			style: s(T.value)
		}, [(n.src || n.srcSet) && !m.value ? (i(), y("img", {
			key: 0,
			src: n.src,
			alt: n.alt,
			srcset: n.srcSet,
			style: s(E.value),
			onError: k
		}, null, 44, z)) : n.icon ? (i(), b(x(j), { key: 1 }, {
			default: g(() => [(i(), b(a(n.icon)))]),
			_: 1
		})) : r(e.$slots, "default", { key: 2 })], 6));
	}
}), V = {
	size: {
		type: E([Number, String]),
		values: F,
		validator: (e) => w(e)
	},
	shape: {
		type: E(String),
		values: ["circle", "square"]
	},
	collapseAvatars: Boolean,
	collapseAvatarsTooltip: Boolean,
	maxCollapseAvatars: {
		type: Number,
		default: 1
	},
	effect: {
		type: E(String),
		default: "light"
	},
	placement: {
		type: E(String),
		values: P,
		default: "top"
	},
	popperClass: M.popperClass,
	popperStyle: M.popperStyle,
	collapseClass: String,
	collapseStyle: {
		type: E([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	}
}, H = /* @__PURE__ */ c({
	name: "ElAvatarGroup",
	props: V,
	setup(e, { slots: t }) {
		let r = O("avatar-group");
		return l(R, d({
			size: p(e, "size"),
			shape: p(e, "shape")
		})), () => {
			let i = A(t.default?.() ?? []), a = i;
			if (e.collapseAvatars && i.length > e.maxCollapseAvatars) {
				a = i.slice(0, e.maxCollapseAvatars);
				let t = i.slice(e.maxCollapseAvatars);
				a.push(v(N, {
					popperClass: e.popperClass,
					popperStyle: e.popperStyle,
					placement: e.placement,
					effect: e.effect,
					disabled: !e.collapseAvatarsTooltip
				}, {
					default: () => v(B, {
						size: e.size,
						shape: e.shape,
						class: e.collapseClass,
						style: e.collapseStyle
					}, { default: () => [n("+ "), t.length] }),
					content: () => v("div", { class: r.e("collapse-avatars") }, [t.map((e, t) => m(e) ? f(e, { key: e.key ?? t }) : e)])
				}));
			}
			return v("div", { class: r.b() }, [a]);
		};
	}
}), U = C(B, { AvatarGroup: H }), W = S(H);
//#endregion
export { U as ElAvatar, U as default, W as ElAvatarGroup, L as avatarEmits, R as avatarGroupContextKey, V as avatarGroupProps, I as avatarProps };
