globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import "../common/AbortablePromise.ts.js";
import "../components/wd-config-provider/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useConfigProvider.ts
var e = "__CONFIG_PROVIDER__", t = (e) => (e = e.replace(e.charAt(0), e.charAt(0).toLocaleLowerCase()), e.replace(/([a-z])([A-Z])/g, (e, t, n) => t + "-" + n.toLowerCase()).replace(/([a-zA-Z])(\d)/g, "$1-$2").replace(/(\d)([a-zA-Z])/g, "$1-$2")), n = (e) => {
	if (!e) return;
	let n = {};
	return Object.keys(e).forEach((r) => {
		n[`--wot-${t(r)}`] = e[r];
	}), n;
};
//#endregion
export { n, e as t };
