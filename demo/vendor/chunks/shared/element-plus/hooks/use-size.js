globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, _ as t, yt as n } from "../../../vue.runtime.js";
import { t as r } from "../utils/vue/props/runtime.js";
import { t as i } from "../constants/size.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-size/index.mjs
var a = r({
	type: String,
	values: i,
	required: !1
}), o = Symbol("size"), s = () => {
	let r = e(o, {});
	return t(() => n(r.size) || "");
};
//#endregion
export { s as n, a as r, o as t };
