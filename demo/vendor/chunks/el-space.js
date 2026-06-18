globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, G as t, O as n, T as r, Tt as i, _ as a, et as o, f as s, j as c, jt as l, ut as u, w as d } from "./vue.runtime.js";
import { t as f } from "./shared/element-plus/utils/vue/install.js";
import { i as p } from "./shared/element-plus/utils/types.js";
import { n as m, r as h } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as g } from "./shared/element-plus/hooks/use-namespace.js";
import { a as _, i as v } from "./shared/element-plus/utils/vue/vnode.js";
import { t as y } from "./shared/element-plus/constants/size.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/space/src/item.mjs
var b = m({ prefixCls: { type: String } }), x = r({
	name: "ElSpaceItem",
	props: b,
	setup(e, { slots: r }) {
		let i = g("space"), o = a(() => `${e.prefixCls || i.b()}__item`);
		return () => n("div", { class: o.value }, t(r, "default"));
	}
}), S = {
	small: 8,
	default: 12,
	large: 16
};
function C(e) {
	let t = g("space"), n = a(() => [
		t.b(),
		t.m(e.direction),
		e.class
	]), r = u(0), s = u(0), c = a(() => [
		e.wrap || e.fill ? { flexWrap: "wrap" } : {},
		{ alignItems: e.alignment },
		{
			rowGap: `${s.value}px`,
			columnGap: `${r.value}px`
		},
		e.style
	]), l = a(() => e.fill ? {
		flexGrow: 1,
		minWidth: `${e.fillRatio}%`
	} : {});
	return o(() => {
		let { size: t = "small", wrap: n, direction: a, fill: o } = e;
		if (i(t)) {
			let [e = 0, n = 0] = t;
			r.value = e, s.value = n;
		} else {
			let e;
			e = p(t) ? t : S[t || "small"] || S.small, (n || o) && a === "horizontal" ? r.value = s.value = e : a === "horizontal" ? (r.value = e, s.value = 0) : (s.value = e, r.value = 0);
		}
	}), {
		classes: n,
		containerStyle: c,
		itemStyle: l
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/space/src/space.mjs
var w = m({
	direction: {
		type: String,
		values: ["horizontal", "vertical"],
		default: "horizontal"
	},
	class: {
		type: h([
			String,
			Object,
			Array
		]),
		default: ""
	},
	style: {
		type: h([
			String,
			Array,
			Object,
			Boolean
		]),
		default: ""
	},
	alignment: {
		type: h(String),
		default: "center"
	},
	prefixCls: { type: String },
	spacer: {
		type: h([
			Object,
			String,
			Number,
			Array
		]),
		default: null,
		validator: (e) => c(e) || p(e) || l(e)
	},
	wrap: Boolean,
	fill: Boolean,
	fillRatio: {
		type: Number,
		default: 100
	},
	size: {
		type: [
			String,
			Array,
			Number
		],
		values: y,
		validator: (e) => p(e) || i(e) && e.length === 2 && e.every(p)
	}
}), T = f(r({
	name: "ElSpace",
	props: w,
	setup(n, { slots: r }) {
		let { classes: a, containerStyle: o, itemStyle: l } = C(n);
		function u(e, t = "", r = []) {
			let { prefixCls: a } = n;
			return e.forEach((e, n) => {
				v(e) ? i(e.children) && e.children.forEach((e, n) => {
					v(e) && i(e.children) ? u(e.children, `${t + n}-`, r) : c(e) && e?.type === s ? r.push(e) : r.push(d(x, {
						style: l.value,
						prefixCls: a,
						key: `nested-${t + n}`
					}, { default: () => [e] }, 12, ["style", "prefixCls"]));
				}) : _(e) && r.push(d(x, {
					style: l.value,
					prefixCls: a,
					key: `LoopKey${t + n}`
				}, { default: () => [e] }, 12, ["style", "prefixCls"]));
			}), r;
		}
		return () => {
			let { spacer: s, direction: f } = n, p = t(r, "default", { key: 0 }, () => []);
			if ((p.children ?? []).length === 0) return null;
			if (i(p.children)) {
				let t = u(p.children);
				if (s) {
					let n = t.length - 1;
					t = t.reduce((t, r, i) => {
						let a = [...t, r];
						return i !== n && a.push(d("span", {
							style: [l.value, f === "vertical" ? "width: 100%" : null],
							key: i
						}, [c(s) ? s : e(s, 1)], 4)), a;
					}, []);
				}
				return d("div", {
					class: a.value,
					style: o.value
				}, t, 6);
			}
			return p.children;
		};
	}
}));
//#endregion
export { T as ElSpace, T as default, b as spaceItemProps, w as spaceProps, C as useSpace };
