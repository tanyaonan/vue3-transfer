globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, N as a, S as o, _ as s, d as c, g as l, h as u, s as d, u as f } from "./vue.runtime.js";
import { f as p, y as m } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as h } from "./shared/wot-ui/common/props.ts.js";
import { t as g } from "./wd-icon.js";
import { t as _ } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as v } from "./shared/wot-ui/components/wd-checkbox-group/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-checkbox/types.ts
var y = {
	...h,
	modelValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: !1
	},
	name: {
		type: [
			String,
			Number,
			Boolean
		],
		default: ""
	},
	type: { type: String },
	checkedColor: String,
	uncheckedColor: String,
	disabled: {
		type: [Boolean, null],
		default: null
	},
	indeterminate: {
		type: Boolean,
		default: !1
	},
	readonly: {
		type: [Boolean, null],
		default: null
	},
	trueValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: !0
	},
	falseValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: !1
	},
	size: String,
	maxWidth: String,
	placement: String,
	direction: String,
	customLabelClass: String
}, b = {
	key: 0,
	class: "wd-checkbox__shape"
}, x = {
	key: 2,
	class: "wd-checkbox__shape"
}, S = /*@__PURE__*/ l({
	name: "wd-checkbox",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: y,
	emits: ["change", "update:modelValue"],
	setup(e, { expose: l, emit: h, slots: y }) {
		let S = e, C = h;
		l({ toggle: R });
		let { parent: w } = _(v), { proxy: T } = s(), E = d(() => w.value ? w.value.props.modelValue.indexOf(S.name) > -1 : S.modelValue === S.trueValue), D = d(() => S.type || p(w.value, "props.type") || "circle"), O = d(() => D.value === "button"), k = d(() => {
			if (S.indeterminate && !O.value) return "minus-circle-fill";
			let e = "";
			switch (D.value) {
				case "circle":
					e = E.value ? "check-circle-fill" : "uncheck-circle";
					break;
				case "square":
					e = E.value ? "check-square-fill" : "uncheck-square";
					break;
				case "dot":
					e = E.value ? "check-circle-radio-fill" : "uncheck-circle";
					break;
				case "button":
					e = E.value ? "check" : "";
					break;
			}
			return e;
		}), A = d(() => S.checkedColor || p(w.value, "props.checkedColor")), j = d(() => S.uncheckedColor || p(w.value, "props.uncheckedColor")), M = d(() => {
			if (m(S.disabled)) return S.disabled;
			if (w.value) {
				let { max: e, min: t, modelValue: n, disabled: r } = w.value.props;
				if (e && n.length >= e && !E.value || t && n.length <= t && E.value || r) return !0;
			}
			return !1;
		}), N = d(() => m(S.readonly) ? S.readonly : p(w.value, "props.readonly") || !1), P = d(() => m(S.direction) ? S.direction : p(w.value, "props.direction") || "vertical"), F = d(() => m(S.placement) ? S.placement : p(w.value, "props.placement") || "left"), I = d(() => O.value ? "" : (E.value || S.indeterminate) && A.value ? `color: ${A.value}` : !E.value && j.value ? `color: ${j.value}` : "");
		a(() => S.name, () => {
			w.value && L();
		}), a(() => S.type, (e) => {
			let t = [
				"circle",
				"square",
				"button",
				"dot"
			];
			m(e) && t.indexOf(e) === -1 && console.error(`type must be one of ${t.toString()}`);
		}), o(() => {
			S.modelValue === null && !w.value && console.warn("checkbox's value must be set"), w.value && !S.name && console.warn("checkbox's name must be set when used in checkbox-group");
		});
		function L() {
			w.value && w.value.children && w.value.children.forEach((e) => {
				e.$.uid !== T.$.uid && e.name === S.name && console.error(`The checkbox's bound value: ${S.name} has been used`);
			});
		}
		function R() {
			if (!(M.value || N.value)) if (w.value) w.value.changeSelectState(S.name);
			else {
				let e = S.modelValue === S.trueValue ? S.falseValue : S.trueValue;
				C("update:modelValue", e), C("change", { value: e });
			}
		}
		return (e, a) => (r(), c("div", {
			class: n(`wd-checkbox wd-checkbox--${F.value} ${O.value ? "is-button" : "wd-checkbox--" + P.value} ${E.value ? "is-checked" : ""} ${e.indeterminate ? "is-indeterminate" : ""} ${M.value ? "is-disabled" : ""} ${e.customClass}`),
			style: i(e.customStyle),
			onClick: R
		}, [y.default ? (r(), c("div", {
			key: 0,
			class: n(`wd-checkbox__label ${e.customLabelClass || ""}`)
		}, [t(e.$slots, "default")], 2)) : f("", !0), O.value ? t(e.$slots, "icon", {
			key: 1,
			isChecked: E.value
		}, () => [E.value ? (r(), c("div", b, [u(g, {
			"custom-class": "wd-checkbox__icon",
			"custom-style": I.value,
			name: k.value
		}, null, 8, ["custom-style", "name"])])) : f("", !0)]) : (r(), c("div", x, [t(e.$slots, "icon", { isChecked: E.value }, () => [u(g, {
			"custom-class": "wd-checkbox__icon",
			"custom-style": I.value,
			name: k.value
		}, null, 8, ["custom-style", "name"])])]))], 6));
	}
}), C = /* @__PURE__ */ e({ default: () => w }), w = S;
//#endregion
export { C as n, w as t };
