globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { M as e, T as t, U as n, _ as r, ct as i, ht as a, j as o, ut as s, w as c } from "./vue.runtime.js";
import { t as l } from "./shared/element-plus/utils/vue/install.js";
import { r as u } from "./shared/element-plus/constants/event.js";
import { n as d, r as f } from "./shared/element-plus/utils/vue/props/runtime.js";
import { a as p, n as m } from "./el-time-picker/utils.js";
import { r as h, t as g } from "./el-date-picker-panel.js";
import { n as _, t as v } from "./el-time-picker/common/props.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/date-picker/src/props.mjs
var y = d({
	..._,
	type: {
		type: f(String),
		default: "date"
	}
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/date-picker/src/date-picker.mjs
function b(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !o(e);
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/date-picker/index.mjs
var x = l(/* @__PURE__ */ t({
	name: "ElDatePicker",
	install: null,
	props: y,
	emits: [u],
	setup(t, { expose: o, emit: l, slots: d }) {
		n(h, r(() => !t.format)), n(p, i(a(t, "popperOptions")));
		let f = s();
		o({
			focus: () => {
				f.value?.focus();
			},
			blur: () => {
				f.value?.blur();
			},
			handleOpen: () => {
				f.value?.handleOpen();
			},
			handleClose: () => {
				f.value?.handleClose();
			}
		});
		let _ = (e) => {
			l(u, e);
		};
		return () => c(v, e(t, {
			format: t.format ?? (m[t.type] || "YYYY-MM-DD"),
			type: t.type,
			ref: f,
			"onUpdate:modelValue": _
		}), {
			default: (n) => c(g, e({
				disabled: t.disabled,
				editable: t.editable,
				border: !1
			}, n), b(d) ? d : { default: () => [d] }),
			"range-separator": d["range-separator"]
		});
	}
}));
//#endregion
export { x as ElDatePicker, x as default, y as datePickerProps };
