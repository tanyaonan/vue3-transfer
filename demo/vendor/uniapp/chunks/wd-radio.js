globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, N as a, d as o, g as s, h as c, s as l, u } from "./vue.runtime.js";
import { f as d, y as f } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { o as p, t as m } from "./shared/wot-ui/common/props.ts.js";
import { t as h } from "./wd-icon.js";
import { t as g } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as _ } from "./shared/wot-ui/components/wd-radio-group/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-radio/types.ts
var v = {
	...m,
	value: p([
		String,
		Number,
		Boolean
	]),
	type: String,
	checkedColor: String,
	uncheckedColor: String,
	disabled: {
		type: Boolean,
		default: void 0
	},
	readonly: {
		type: Boolean,
		default: void 0
	},
	direction: String,
	placement: String,
	customLabelClass: String
}, y = {
	key: 0,
	class: "wd-radio__shape"
}, b = {
	key: 2,
	class: "wd-radio__shape"
}, x = /*@__PURE__*/ s({
	name: "wd-radio",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: v,
	setup(e, { slots: s }) {
		let p = e, { parent: m } = g(_), v = l(() => m.value ? p.value === m.value.props.modelValue : !1), x = l(() => p.type || d(m.value, "props.type")), S = l(() => {
			let e = "";
			switch (x.value) {
				case "circle":
					e = v.value ? "check-circle-fill" : "uncheck-circle";
					break;
				case "square":
					e = v.value ? "check-square-fill" : "uncheck-square";
					break;
				case "dot":
					e = v.value ? "check-circle-radio-fill" : "uncheck-circle";
					break;
				case "button":
					e = v.value ? "check" : "";
					break;
				default: break;
			}
			return e;
		}), C = l(() => p.checkedColor || d(m.value, "props.checkedColor")), w = l(() => p.uncheckedColor || d(m.value, "props.uncheckedColor")), T = l(() => f(p.readonly) ? p.readonly : d(m.value, "props.readonly")), E = l(() => D.value ? "" : v.value && C.value ? `color: ${C.value}` : !v.value && w.value ? `color: ${w.value}` : ""), D = l(() => x.value === "button"), O = l(() => f(p.disabled) ? p.disabled : d(m.value, "props.disabled")), k = l(() => f(p.direction) ? p.direction : d(m.value, "props.direction")), A = l(() => f(p.placement) ? p.placement : d(m.value, "props.placement"));
		a(() => p.type, (e) => {
			let t = [
				"check",
				"dot",
				"button",
				"square"
			];
			(!e || t.indexOf(e) === -1) && console.error(`type must be one of ${t.toString()}`);
		});
		function j() {
			let { value: e } = p;
			!O.value && !T.value && m.value && f(e) && (m.value.props.allowUncheck && v.value ? m.value.updateValue(null) : m.value.updateValue(e));
		}
		return (e, a) => (r(), o("div", {
			class: n(`wd-radio wd-radio--${A.value}  ${D.value ? "is-button" : "wd-radio--" + k.value} ${v.value ? "is-checked" : ""} ${O.value ? "is-disabled" : ""} ${e.customClass}`),
			style: i(e.customStyle),
			onClick: j
		}, [s.default ? (r(), o("div", {
			key: 0,
			class: n(`wd-radio__label ${e.customLabelClass || ""}`)
		}, [t(e.$slots, "default")], 2)) : u("", !0), D.value ? t(e.$slots, "icon", {
			key: 1,
			isChecked: v.value
		}, () => [v.value ? (r(), o("div", y, [c(h, {
			"custom-class": "wd-radio__icon",
			"custom-style": E.value,
			name: S.value
		}, null, 8, ["custom-style", "name"])])) : u("", !0)]) : (r(), o("div", b, [t(e.$slots, "icon", { isChecked: v.value }, () => [c(h, {
			"custom-class": "wd-radio__icon",
			"custom-style": E.value,
			name: S.value
		}, null, 8, ["custom-style", "name"])])]))], 6));
	}
}), S = /* @__PURE__ */ e({ default: () => C }), C = x;
//#endregion
export { S as n, C as t };
