globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./toNumber.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseClamp.js
function t(e, t, n) {
	return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/clamp.js
function n(n, r, i) {
	return i === void 0 && (i = r, r = void 0), i !== void 0 && (i = e(i), i = i === i ? i : 0), r !== void 0 && (r = e(r), r = r === r ? r : 0), t(e(n), r, i);
}
//#endregion
export { n as t };
