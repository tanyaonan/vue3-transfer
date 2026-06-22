globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, G as t, T as n } from "../vue.runtime.js";
import { n as r, r as i } from "../shared/element-plus/utils/vue/props/runtime.js";
import { r as a } from "../shared/element-plus/hooks/use-size.js";
import { r as o } from "../shared/element-plus/hooks/use-empty-values.js";
import { t as s } from "./constants.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/config-provider/src/config-provider-props.mjs
var c = r({
	a11y: {
		type: Boolean,
		default: !0
	},
	locale: { type: i(Object) },
	size: a,
	button: { type: i(Object) },
	card: { type: i(Object) },
	dialog: { type: i(Object) },
	link: { type: i(Object) },
	experimentalFeatures: { type: i(Object) },
	keyboardNavigation: {
		type: Boolean,
		default: !0
	},
	message: { type: i(Object) },
	zIndex: Number,
	namespace: {
		type: String,
		default: "el"
	},
	table: { type: i(Object) },
	...o
}), l = { placement: "top" }, u = n({
	name: "ElConfigProvider",
	props: c,
	setup(n, { slots: r }) {
		let i = s(n);
		return e(() => n.message, (e) => {
			Object.assign(l, i?.value?.message ?? {}, e ?? {});
		}, {
			immediate: !0,
			deep: !0
		}), () => t(r, "default", { config: i?.value });
	}
});
//#endregion
export { l as n, c as r, u as t };
