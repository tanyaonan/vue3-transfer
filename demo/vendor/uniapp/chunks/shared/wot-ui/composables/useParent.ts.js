globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { E as e, L as t, R as n, T as r, _ as i, s as a, y as o } from "../../../vue.runtime.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useParent.ts
function s(s) {
	let c = {
		parent: n(null),
		index: t(-1)
	};
	return r(() => {
		if (c.parent.value = o(s, null), c.parent.value) {
			let t = i(), { link: n, unlink: r, internalChildren: o } = c.parent.value;
			n(t), e(() => r(t)), c.index = a(() => o.indexOf(t));
		}
	}), c;
}
//#endregion
export { s as t };
