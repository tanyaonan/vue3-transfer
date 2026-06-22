globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { E as e, L as t } from "../../../vue.runtime.js";
import { S as n, w as r, y as i } from "../common/AbortablePromise.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useRaf.ts
function a(a) {
	let o = t(null), s = () => {
		let e = (e) => {
			a(e);
		};
		n ? o.value = requestAnimationFrame(e) : o.value = setTimeout(() => e(Date.now()), 1e3 / 30);
	}, c = () => {
		n && r(o.value) ? cancelAnimationFrame(o.value) : i(o.value) && clearTimeout(o.value);
	};
	return e(() => {
		c();
	}), {
		start: s,
		cancel: c
	};
}
//#endregion
export { a as t };
