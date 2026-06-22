globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { G as e, H as t, Mt as n, Pt as r, T as i, Z as a, _ as o, x as s, yt as c } from "./vue.runtime.js";
import { i as l, t as u } from "./shared/element-plus/utils/vue/install.js";
import { r as d } from "./shared/element-plus/hooks/use-namespace.js";
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/container/src/container.mjs
var f = /* @__PURE__ */ i({
	name: "ElContainer",
	__name: "container",
	props: { direction: {
		type: String,
		required: !1
	} },
	setup(r) {
		let i = r, l = a(), u = d("container"), f = o(() => i.direction === "vertical" ? !0 : i.direction === "horizontal" ? !1 : l && l.default ? l.default().some((e) => {
			let t = e.type.name;
			return t === "ElHeader" || t === "ElFooter";
		}) : !1);
		return (r, i) => (t(), s("section", { class: n([c(u).b(), c(u).is("vertical", f.value)]) }, [e(r.$slots, "default")], 2));
	}
}), p = /* @__PURE__ */ i({
	name: "ElAside",
	__name: "aside",
	props: { width: {
		type: [String, null],
		required: !1,
		default: null
	} },
	setup(i) {
		let a = i, l = d("aside"), u = o(() => a.width ? l.cssVarBlock({ width: a.width }) : {});
		return (i, a) => (t(), s("aside", {
			class: n(c(l).b()),
			style: r(u.value)
		}, [e(i.$slots, "default")], 6));
	}
}), m = /* @__PURE__ */ i({
	name: "ElFooter",
	__name: "footer",
	props: { height: {
		type: [String, null],
		required: !1,
		default: null
	} },
	setup(i) {
		let a = i, l = d("footer"), u = o(() => a.height ? l.cssVarBlock({ height: a.height }) : {});
		return (i, a) => (t(), s("footer", {
			class: n(c(l).b()),
			style: r(u.value)
		}, [e(i.$slots, "default")], 6));
	}
}), h = /* @__PURE__ */ i({
	name: "ElHeader",
	__name: "header",
	props: { height: {
		type: [String, null],
		required: !1,
		default: null
	} },
	setup(i) {
		let a = i, l = d("header"), u = o(() => a.height ? l.cssVarBlock({ height: a.height }) : {});
		return (i, a) => (t(), s("header", {
			class: n(c(l).b()),
			style: r(u.value)
		}, [e(i.$slots, "default")], 6));
	}
}), g = /* @__PURE__ */ i({
	name: "ElMain",
	__name: "main",
	setup(r) {
		let i = d("main");
		return (r, a) => (t(), s("main", { class: n(c(i).b()) }, [e(r.$slots, "default")], 2));
	}
}), _ = u(f, {
	Aside: p,
	Footer: m,
	Header: h,
	Main: g
}), v = l(p), y = l(m), b = l(h), x = l(g);
//#endregion
export { v as ElAside, _ as ElContainer, _ as default, y as ElFooter, b as ElHeader, x as ElMain };
