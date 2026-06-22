globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { O as e, T as t, j as n, pt as r, vt as i, z as a } from "../../../vue.runtime.js";
import { t as o } from "../utils/vue/vnode.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-ordered-children/index.mjs
var s = (e, t, r) => o(e.subTree).filter((e) => n(e) && e.type?.name === t && !!e.component).map((e) => e.component.uid).map((e) => r[e]).filter((e) => !!e), c = (n, o) => {
	let c = r({}), l = r([]), u = /* @__PURE__ */ new WeakMap(), d = (e) => {
		c.value[e.uid] = e, i(c), a(() => {
			let t = e.getVnode().el, n = t.parentNode;
			if (!u.has(n)) {
				u.set(n, []);
				let e = n.insertBefore.bind(n);
				n.insertBefore = (t, r) => (u.get(n).some((e) => t === e || r === e) && i(c), e(t, r));
			}
			u.get(n).push(t);
		});
	}, f = (e) => {
		delete c.value[e.uid], i(c);
		let t = e.getVnode().el, n = t.parentNode, r = u.get(n), a = r.indexOf(t);
		r.splice(a, 1);
	}, p = () => {
		l.value = s(n, o, c.value);
	}, m = (e) => e.render();
	return {
		children: l,
		addChild: d,
		removeChild: f,
		ChildrenSorter: t({ setup(t, { slots: n }) {
			return () => (p(), n.default ? e(m, { render: n.default }) : null);
		} })
	};
};
//#endregion
export { c as t };
