globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, G as t, H as n, M as r, Mt as i, Nt as a, Ot as o, T as s, W as c, b as l, ht as u, p as d, ut as f, w as p, x as m, y as h, yt as g, z as _ } from "./vue.runtime.js";
import { i as v, t as y } from "./shared/element-plus/utils/vue/install.js";
import { i as b, s as x } from "./shared/element-plus/utils/types.js";
import { n as S, r as C } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as w } from "./shared/element-plus/hooks/use-namespace.js";
import { D as T } from "./shared/element-plus-icons.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/skeleton/src/skeleton.mjs
var E = S({
	animated: Boolean,
	count: {
		type: Number,
		default: 1
	},
	rows: {
		type: Number,
		default: 3
	},
	loading: {
		type: Boolean,
		default: !0
	},
	throttle: { type: C([Number, Object]) }
}), D = S({ variant: {
	type: String,
	values: [
		"circle",
		"rect",
		"h1",
		"h3",
		"text",
		"caption",
		"p",
		"image",
		"button"
	],
	default: "text"
} }), O = /* @__PURE__ */ s({
	name: "ElSkeletonItem",
	__name: "skeleton-item",
	props: D,
	setup(e) {
		let t = w("skeleton");
		return (r, a) => (n(), m("div", { class: i([g(t).e("item"), g(t).e(e.variant)]) }, [e.variant === "image" ? (n(), h(g(T), { key: 0 })) : l("v-if", !0)], 2));
	}
}), k = (t, n = 0) => {
	if (n === 0) return t;
	let r = f(o(n) && !!n.initVal), i = null, a = (e) => {
		if (x(e)) {
			r.value = t.value;
			return;
		}
		i && clearTimeout(i), i = setTimeout(() => {
			r.value = t.value;
		}, e);
	}, s = (e) => {
		e === "leading" ? b(n) ? a(n) : a(n.leading) : o(n) ? a(n.trailing) : r.value = !1;
	};
	return _(() => s("leading")), e(() => t.value, (e) => {
		s(e ? "leading" : "trailing");
	}), r;
}, A = y(/* @__PURE__ */ s({
	name: "ElSkeleton",
	__name: "skeleton",
	props: E,
	setup(e, { expose: o }) {
		let s = e, f = w("skeleton"), _ = k(u(s, "loading"), s.throttle);
		return o({ uiLoading: _ }), (o, s) => g(_) ? (n(), m("div", r({
			key: 0,
			class: [g(f).b(), g(f).is("animated", e.animated)]
		}, o.$attrs), [(n(!0), m(d, null, c(e.count, (r) => (n(), m(d, { key: r }, [g(_) ? t(o.$slots, "template", { key: r }, () => [p(O, {
			class: i(g(f).is("first")),
			variant: "p"
		}, null, 8, ["class"]), (n(!0), m(d, null, c(e.rows, (t) => (n(), h(O, {
			key: t,
			class: i([g(f).e("paragraph"), g(f).is("last", t === e.rows && e.rows > 1)]),
			variant: "p"
		}, null, 8, ["class"]))), 128))]) : l("v-if", !0)], 64))), 128))], 16)) : t(o.$slots, "default", a(r({ key: 1 }, o.$attrs)));
	}
}), { SkeletonItem: O }), j = v(O);
//#endregion
export { A as ElSkeleton, A as default, j as ElSkeletonItem, D as skeletonItemProps, E as skeletonProps };
