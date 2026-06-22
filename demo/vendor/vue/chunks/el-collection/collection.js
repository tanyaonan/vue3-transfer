globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, G as t, I as n, T as r, U as i, ut as a, yt as o, z as s } from "../vue.runtime.js";
import { t as c } from "../shared/element-plus/virtual/_plugin-vue_export-helper.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/collection/src/collection.vue_vue_type_script_lang.mjs
var l = r({ inheritAttrs: !1 });
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/collection/src/collection2.mjs
function u(e, n, r, i, a, o) {
	return t(e.$slots, "default");
}
var d = /* @__PURE__ */ c(l, [["render", u]]), f = r({
	name: "ElCollectionItem",
	inheritAttrs: !1
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/collection/src/collection-item.mjs
function p(e, n, r, i, a, o) {
	return t(e.$slots, "default");
}
var m = /* @__PURE__ */ c(f, [["render", p]]), h = "data-el-collection-item", g = (t) => {
	let r = `El${t}Collection`, c = `${r}Item`, l = Symbol(r), u = Symbol(c);
	return {
		COLLECTION_INJECTION_KEY: l,
		COLLECTION_ITEM_INJECTION_KEY: u,
		ElCollection: Object.assign({}, d, {
			name: r,
			setup() {
				let e = a(), t = /* @__PURE__ */ new Map();
				i(l, {
					itemMap: t,
					getItems: (() => {
						let n = o(e);
						if (!n) return [];
						let r = Array.from(n.querySelectorAll(`[${h}]`));
						return [...t.values()].sort((e, t) => r.indexOf(e.ref) - r.indexOf(t.ref));
					}),
					collectionRef: e
				});
			}
		}),
		ElCollectionItem: Object.assign({}, m, {
			name: c,
			setup(t, { attrs: r }) {
				let c = a(), d = e(l, void 0);
				i(u, { collectionItemRef: c }), s(() => {
					let e = o(c);
					e && d.itemMap.set(e, {
						ref: e,
						...r
					});
				}), n(() => {
					let e = o(c);
					d.itemMap.delete(e);
				});
			}
		})
	};
};
//#endregion
export { g as n, h as t };
