globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { _ as e, pt as t, ut as n } from "../../../vue.runtime.js";
import { d as r } from "../../vueuse.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-calc-input-width/index.mjs
function i() {
	let i = t(), a = n(0), o = e(() => ({ minWidth: `${Math.max(a.value, 11)}px` }));
	return r(i, () => {
		a.value = i.value?.getBoundingClientRect().width ?? 0;
	}), {
		calculatorRef: i,
		calculatorWidth: a,
		inputStyle: o
	};
}
//#endregion
export { i as t };
