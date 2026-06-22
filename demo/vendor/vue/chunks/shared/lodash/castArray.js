globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { _ as e } from "../element-plus/utils/objects.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/castArray.js
function t() {
	if (!arguments.length) return [];
	var t = arguments[0];
	return e(t) ? t : [t];
}
//#endregion
export { t };
