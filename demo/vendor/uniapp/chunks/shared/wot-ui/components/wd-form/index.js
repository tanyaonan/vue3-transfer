globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { c as e, o as t, r as n, t as r } from "../../common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-form/types.ts
var i = [
	"change",
	"blur",
	"submit"
], a = {
	...r,
	model: t(Object),
	schema: Object,
	validateTrigger: {
		type: [String, Array],
		default: "submit"
	},
	resetOnChange: n(!0),
	errorType: {
		type: String,
		default: "message"
	},
	border: n(!1),
	center: n(!1),
	size: String,
	titleWidth: e,
	layout: String,
	valueAlign: String,
	asteriskPosition: String,
	hideAsterisk: n(!1),
	ellipsis: n(!1)
}, o = Symbol("wd-form");
//#endregion
export { i as n, a as r, o as t };
