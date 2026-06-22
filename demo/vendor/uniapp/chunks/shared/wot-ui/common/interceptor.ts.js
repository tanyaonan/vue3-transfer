globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { D as e } from "./AbortablePromise.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/interceptor.ts
function t() {}
function n(n, { args: r = [], done: i, canceled: a, error: o }) {
	if (n) {
		let s = n.apply(null, r);
		e(s) ? s.then((e) => {
			e ? i() : a && a();
		}).catch(o || t) : s ? i() : a && a();
	} else i();
}
//#endregion
export { n as t };
