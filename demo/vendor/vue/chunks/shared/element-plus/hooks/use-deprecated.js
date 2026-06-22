globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, yt as t } from "../../../vue.runtime.js";
import { t as n } from "../utils/error.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-deprecated/index.mjs
var r = ({ from: r, replacement: i, scope: a, version: o, ref: s, type: c = "API" }, l) => {
	e(() => t(l), (e) => {
		e && n(a, `[${c}] ${r} is about to be deprecated in version ${o}, please use ${i} instead.
For more detail, please visit: ${s}
`);
	}, { immediate: !0 });
};
//#endregion
export { r as t };
