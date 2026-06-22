globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "../shared/element-plus/hooks/use-aria.js";
import { i as t } from "../shared/element-plus/utils/types.js";
import { n, r } from "../shared/element-plus/utils/vue/props/runtime.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/scrollbar/src/scrollbar.mjs
var i = n({
	distance: {
		type: Number,
		default: 0
	},
	height: {
		type: [String, Number],
		default: ""
	},
	maxHeight: {
		type: [String, Number],
		default: ""
	},
	native: Boolean,
	wrapStyle: {
		type: r([
			String,
			Object,
			Array,
			Boolean
		]),
		default: ""
	},
	wrapClass: {
		type: [String, Array],
		default: ""
	},
	viewClass: {
		type: [String, Array],
		default: ""
	},
	viewStyle: {
		type: r([
			String,
			Object,
			Array,
			Boolean
		]),
		default: ""
	},
	noresize: Boolean,
	tag: {
		type: String,
		default: "div"
	},
	always: Boolean,
	minSize: {
		type: Number,
		default: 20
	},
	tabindex: {
		type: [String, Number],
		default: void 0
	},
	id: String,
	role: String,
	...e(["ariaLabel", "ariaOrientation"])
}), a = {
	"end-reached": (e) => [
		"left",
		"right",
		"top",
		"bottom"
	].includes(e),
	scroll: ({ scrollTop: e, scrollLeft: n }) => [e, n].every(t)
};
//#endregion
export { i as n, a as t };
