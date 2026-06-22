globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, C as t, Ft as n, G as r, H as i, Mt as a, O as o, T as s, U as c, W as l, Z as u, _ as d, b as f, nt as p, p as m, v as h, w as g, x as _, y as v, yt as y } from "./vue.runtime.js";
import { i as b, t as x } from "./shared/element-plus/utils/vue/install.js";
import { l as S } from "./shared/element-plus/utils/types.js";
import { n as C, r as w } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as T } from "./shared/element-plus/utils/dom/style.js";
import { r as E } from "./shared/element-plus/hooks/use-namespace.js";
import { n as D, t as O } from "./shared/element-plus/utils/vue/vnode.js";
import { r as k } from "./shared/element-plus/hooks/use-size.js";
import { r as A } from "./el-form/hooks/use-form-common-props.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/descriptions/src/description.mjs
var j = C({
	border: Boolean,
	column: {
		type: Number,
		default: 3
	},
	direction: {
		type: String,
		values: ["horizontal", "vertical"],
		default: "horizontal"
	},
	size: k,
	title: {
		type: String,
		default: ""
	},
	extra: {
		type: String,
		default: ""
	},
	labelWidth: { type: [String, Number] }
}), M = Symbol("elDescriptions"), N = C({ row: {
	type: w(Array),
	default: () => []
} }), P = s({
	name: "ElDescriptionsCell",
	props: {
		cell: { type: Object },
		tag: {
			type: String,
			default: "td"
		},
		type: { type: String }
	},
	setup() {
		return { descriptions: e(M, {}) };
	},
	render() {
		let e = D(this.cell), t = (this.cell?.dirs || []).map((e) => {
			let { dir: t, arg: n, modifiers: r, value: i } = e;
			return [
				t,
				i,
				n,
				r
			];
		}), { border: n, direction: r } = this.descriptions, i = r === "vertical", a = () => this.cell?.children?.label?.() || e.label, s = () => this.cell?.children?.default?.(), c = e.span, l = e.rowspan, u = e.align ? `is-${e.align}` : "", d = e.labelAlign ? `is-${e.labelAlign}` : u, f = e.className, m = e.labelClassName, h = {
			width: T(this.type === "label" ? e.labelWidth ?? this.descriptions.labelWidth ?? e.width : e.width),
			minWidth: T(e.minWidth)
		}, g = E("descriptions");
		switch (this.type) {
			case "label": return p(o(this.tag, {
				style: h,
				class: [
					g.e("cell"),
					g.e("label"),
					g.is("bordered-label", n),
					g.is("vertical-label", i),
					d,
					m
				],
				colSpan: i ? c : 1,
				rowspan: i ? 1 : l
			}, a()), t);
			case "content": return p(o(this.tag, {
				style: h,
				class: [
					g.e("cell"),
					g.e("content"),
					g.is("bordered-content", n),
					g.is("vertical-content", i),
					u,
					f
				],
				colSpan: i ? c : c * 2 - 1,
				rowspan: i ? l * 2 - 1 : l
			}, s()), t);
			default: {
				let n = a(), r = {}, i = T(e.labelWidth ?? this.descriptions.labelWidth);
				return i && (r.width = i, r.display = "inline-block"), p(o("td", {
					style: h,
					class: [g.e("cell"), u],
					colSpan: c,
					rowspan: l
				}, [S(n) ? void 0 : o("span", {
					style: r,
					class: [g.e("label"), m]
				}, n), o("span", { class: [g.e("content"), f] }, s())]), t);
			}
		}
	}
}), F = { key: 1 }, I = /* @__PURE__ */ s({
	name: "ElDescriptionsRow",
	__name: "descriptions-row",
	props: N,
	setup(t) {
		let n = e(M, {});
		return (e, r) => y(n).direction === "vertical" ? (i(), _(m, { key: 0 }, [h("tr", null, [(i(!0), _(m, null, l(t.row, (e, t) => (i(), v(y(P), {
			key: `tr1-${t}`,
			cell: e,
			tag: "th",
			type: "label"
		}, null, 8, ["cell"]))), 128))]), h("tr", null, [(i(!0), _(m, null, l(t.row, (e, t) => (i(), v(y(P), {
			key: `tr2-${t}`,
			cell: e,
			tag: "td",
			type: "content"
		}, null, 8, ["cell"]))), 128))])], 64)) : (i(), _("tr", F, [(i(!0), _(m, null, l(t.row, (e, t) => (i(), _(m, { key: `tr3-${t}` }, [y(n).border ? (i(), _(m, { key: 0 }, [g(y(P), {
			cell: e,
			tag: "td",
			type: "label"
		}, null, 8, ["cell"]), g(y(P), {
			cell: e,
			tag: "td",
			type: "content"
		}, null, 8, ["cell"])], 64)) : (i(), v(y(P), {
			key: 1,
			cell: e,
			tag: "td",
			type: "both"
		}, null, 8, ["cell"]))], 64))), 128))]));
	}
}), L = "ElDescriptionsItem", R = /* @__PURE__ */ s({
	name: "ElDescriptions",
	__name: "description",
	props: j,
	setup(e) {
		let o = e, s = E("descriptions"), p = A(), g = u();
		c(M, o);
		let b = d(() => [s.b(), s.m(p.value)]), x = (e, t, n, r = !1) => (e.props ||= {}, t > n && (e.props.span = n), r && (e.props.span = t), e), S = () => {
			if (!g.default) return [];
			let e = O(g.default()).filter((e) => e?.type?.name === L), t = [], n = [], r = o.column, i = 0, a = [];
			return e.forEach((s, c) => {
				let l = s.props?.span || 1, u = s.props?.rowspan || 1, d = t.length;
				if (a[d] ||= 0, u > 1) for (let e = 1; e < u; e++) a[d + e] ||= 0, a[d + e]++, i++;
				if (a[d] > 0 && (r -= a[d], a[d] = 0), c < e.length - 1 && (i += l > r ? r : l), c === e.length - 1) {
					let e = o.column - i % o.column;
					n.push(x(s, e, r, !0)), t.push(n);
					return;
				}
				l < r ? (r -= l, n.push(s)) : (n.push(x(s, l, r)), t.push(n), r = o.column, n = []);
			}), t;
		};
		return (o, c) => (i(), _("div", { class: a(b.value) }, [e.title || e.extra || o.$slots.title || o.$slots.extra ? (i(), _("div", {
			key: 0,
			class: a(y(s).e("header"))
		}, [h("div", { class: a(y(s).e("title")) }, [r(o.$slots, "title", {}, () => [t(n(e.title), 1)])], 2), h("div", { class: a(y(s).e("extra")) }, [r(o.$slots, "extra", {}, () => [t(n(e.extra), 1)])], 2)], 2)) : f("v-if", !0), h("div", { class: a(y(s).e("body")) }, [h("table", { class: a([y(s).e("table"), y(s).is("bordered", e.border)]) }, [h("tbody", null, [(i(!0), _(m, null, l(S(), (e, t) => (i(), v(I, {
			key: t,
			row: e
		}, null, 8, ["row"]))), 128))])], 2)], 2)], 2));
	}
}), z = [
	"left",
	"center",
	"right"
], B = C({
	label: {
		type: String,
		default: ""
	},
	span: {
		type: Number,
		default: 1
	},
	rowspan: {
		type: Number,
		default: 1
	},
	width: {
		type: [String, Number],
		default: ""
	},
	minWidth: {
		type: [String, Number],
		default: ""
	},
	labelWidth: { type: [String, Number] },
	align: {
		type: String,
		values: z,
		default: "left"
	},
	labelAlign: {
		type: String,
		values: z
	},
	className: {
		type: String,
		default: ""
	},
	labelClassName: {
		type: String,
		default: ""
	}
}), V = s({
	name: L,
	props: B
}), H = x(R, { DescriptionsItem: V }), U = b(V);
//#endregion
export { H as ElDescriptions, H as default, U as ElDescriptionsItem, B as descriptionItemProps, j as descriptionProps };
