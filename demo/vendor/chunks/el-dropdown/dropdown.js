globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../shared/element-plus/utils/vue/props/runtime.js";
import { a as n } from "../shared/element-plus/utils/vue/icon.js";
import { i as r, r as i } from "../el-tooltip.js";
import { s as a } from "../el-popper.js";
import { a as o } from "../shared/element-plus/constants/aria.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/dropdown/src/dropdown.mjs
var s = e({
	trigger: {
		...i.trigger,
		type: t([String, Array])
	},
	triggerKeys: {
		type: t(Array),
		default: () => [
			o.enter,
			o.numpadEnter,
			o.space,
			o.down
		]
	},
	virtualTriggering: i.virtualTriggering,
	virtualRef: i.virtualRef,
	effect: {
		...r.effect,
		default: "light"
	},
	type: { type: t(String) },
	placement: {
		type: t(String),
		default: "bottom"
	},
	popperOptions: {
		type: t(Object),
		default: () => ({})
	},
	id: String,
	size: {
		type: String,
		default: ""
	},
	splitButton: Boolean,
	hideOnClick: {
		type: Boolean,
		default: !0
	},
	loop: {
		type: Boolean,
		default: !0
	},
	showArrow: {
		type: Boolean,
		default: !0
	},
	showTimeout: {
		type: Number,
		default: 150
	},
	hideTimeout: {
		type: Number,
		default: 150
	},
	tabindex: {
		type: t([Number, String]),
		default: 0
	},
	maxHeight: {
		type: t([Number, String]),
		default: ""
	},
	popperClass: r.popperClass,
	popperStyle: r.popperStyle,
	disabled: Boolean,
	role: {
		type: String,
		values: a,
		default: "menu"
	},
	buttonProps: { type: t(Object) },
	teleported: r.teleported,
	appendTo: r.appendTo,
	persistent: {
		type: Boolean,
		default: !0
	}
}), c = e({
	command: {
		type: [
			Object,
			String,
			Number
		],
		default: () => ({})
	},
	disabled: Boolean,
	divided: Boolean,
	textValue: String,
	icon: { type: n }
}), l = e({ onKeydown: { type: t(Function) } }), u = [
	o.down,
	o.pageDown,
	o.home
], d = [
	o.up,
	o.pageUp,
	o.end
], f = [...u, ...d];
//#endregion
export { l as a, c as i, f as n, s as o, d as r, u as t };
