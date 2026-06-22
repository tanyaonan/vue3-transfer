globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { r as e, s as t, t as n } from "../../common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-radio-group/types.ts
var r = {
	...n,
	modelValue: [
		String,
		Number,
		Boolean
	],
	type: t("circle"),
	checkedColor: String,
	uncheckedColor: String,
	disabled: e(!1),
	readonly: e(!1),
	placement: t("left"),
	direction: t("vertical"),
	allowUncheck: e(!1)
}, i = Symbol("wd-radio-group");
//#endregion
export { r as n, i as t };
