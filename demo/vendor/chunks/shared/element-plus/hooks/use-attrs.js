globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { E as e, _ as t } from "../../../vue.runtime.js";
import { t as n } from "../../lodash/fromPairs.js";
import { t as r } from "../utils/error.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-attrs/index.mjs
var i = ["class", "style"], a = /^on[A-Z]/, o = (o = {}) => {
	let { excludeListeners: s = !1, excludeKeys: c } = o, l = t(() => (c?.value || []).concat(i)), u = e();
	return u ? t(() => n(Object.entries(u.proxy?.$attrs).filter(([e]) => !l.value.includes(e) && !(s && a.test(e))))) : (r("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), t(() => ({})));
};
//#endregion
export { o as t };
