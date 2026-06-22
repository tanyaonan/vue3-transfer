globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { I as e, O as t, _ as n } from "../../../vue.runtime.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useChildren.ts
function r(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function i(e) {
	let t = [], n = (e) => {
		(Array.isArray(e) ? e : [e]).forEach((e) => {
			Array.isArray(e) ? n(e) : r(e) && e.component?.subTree ? (t.push(e), n(e.component.subTree)) : r(e) && Array.isArray(e.children) ? n(e.children) : r(e) && t.push(e);
		});
	};
	return n(e), t;
}
var a = (e, t) => {
	let n = e.indexOf(t);
	return n === -1 ? e.findIndex((e) => t.key !== void 0 && t.key !== null && e.type === t.type && e.key === t.key) : n;
};
function o(e, t, n) {
	let r = e && e.subTree && e.subTree.children ? i(e.subTree) : [];
	n.sort((e, t) => a(r, e.vnode) - a(r, t.vnode));
	let o = n.map((e) => e.proxy);
	t.sort((e, t) => {
		let n = (e) => {
			let t = e.$.uid;
			return o.findIndex((e) => e.$.uid === t);
		};
		return n(e) - n(t);
	});
}
function s(r) {
	let i = e([]), a = e([]), s = n();
	return {
		children: i,
		linkChildren: (e) => {
			t(r, Object.assign({
				link: (e) => {
					e.proxy && a.indexOf(e) === -1 && (a.unshift(e), i.unshift(e.proxy), a.push(e), i.push(e.proxy), o(s, i, a));
				},
				unlink: (e) => {
					let t = a.indexOf(e);
					i.splice(t, 1), a.splice(t, 1);
				},
				children: i,
				internalChildren: a
			}, e));
		}
	};
}
//#endregion
export { s as t };
