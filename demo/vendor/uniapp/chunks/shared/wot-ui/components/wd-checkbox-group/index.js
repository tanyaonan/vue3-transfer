globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { i as e, r as t, s as n, t as r } from "../../common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-checkbox-group/types.ts
var i = Symbol("wd-checkbox-group"), a = {
	...r,
	modelValue: {
		type: Array,
		default: () => []
	},
	type: n("circle"),
	checkedColor: String,
	uncheckedColor: String,
	disabled: t(!1),
	readonly: t(!1),
	min: e(0),
	max: e(0),
	size: String,
	placement: n("left"),
	direction: n("vertical")
};
//#endregion
export { a as n, i as t };
