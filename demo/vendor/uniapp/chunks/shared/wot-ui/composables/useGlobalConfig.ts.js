globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { s as e, y as t } from "../../../vue.runtime.js";
import { r as n, t as r } from "../components/wd-config-provider/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useGlobalConfig.ts
function i() {
	let i = t(r, null);
	return i ? i.globalConfig : e(() => ({ ...n }));
}
//#endregion
export { i as t };
