globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { r as e } from "./shared/rolldown-runtime.js";
import { H as t, J as n, Mt as r, T as i, W as a, _ as o, b as s, p as c, tt as l, ut as u, x as d, y as f, yt as p } from "./vue.runtime.js";
import { t as m } from "./shared/element-plus/utils/vue/install.js";
import { r as h, t as g } from "./shared/element-plus/constants/event.js";
import { n as _, r as v } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as y } from "./shared/element-plus/utils/error.js";
import { r as b } from "./shared/element-plus/hooks/use-namespace.js";
import { f as x, m as S } from "./shared/element-plus-icons.js";
import { t as C } from "./el-icon.js";
import { r as w } from "./shared/element-plus/hooks/use-size.js";
import { n as T } from "./el-form/hooks/use-form-common-props.js";
import { n as E } from "./shared/element-plus/hooks/use-locale.js";
import { r as D } from "./shared/element-plus/hooks/use-empty-values.js";
import { t as O } from "./shared/dayjs.js";
import { n as k } from "./el-select.js";
import { t as A } from "./shared/dayjs/customParseFormat.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/time-select/src/time-select.mjs
var j = "09:00", M = "18:00", N = "00:30", P = _({
	format: {
		type: String,
		default: "HH:mm"
	},
	modelValue: { type: v(String) },
	disabled: {
		type: Boolean,
		default: void 0
	},
	editable: {
		type: Boolean,
		default: !0
	},
	effect: {
		type: v(String),
		default: "light"
	},
	clearable: {
		type: Boolean,
		default: !0
	},
	size: w,
	placeholder: String,
	start: {
		type: String,
		default: j
	},
	end: {
		type: String,
		default: M
	},
	step: {
		type: String,
		default: N
	},
	minTime: { type: v(String) },
	maxTime: { type: v(String) },
	includeEndTime: Boolean,
	name: String,
	prefixIcon: {
		type: v([String, Object]),
		default: () => S
	},
	clearIcon: {
		type: v([String, Object]),
		default: () => x
	},
	popperClass: {
		type: String,
		default: ""
	},
	popperStyle: { type: v([String, Object]) },
	...D
}), F = (e) => {
	let t = (e || "").split(":");
	if (t.length >= 2) {
		let n = Number.parseInt(t[0], 10), r = Number.parseInt(t[1], 10);
		if (Number.isNaN(n) || Number.isNaN(r)) return null;
		let i = e.toUpperCase();
		return i.includes("AM") && n === 12 ? n = 0 : i.includes("PM") && n !== 12 && (n += 12), {
			hours: n,
			minutes: r
		};
	}
	return null;
}, I = (e) => !!e && e.hours >= 0 && e.minutes >= 0 && !Number.isNaN(e.hours) && !Number.isNaN(e.minutes), L = (e, t) => {
	let n = F(e);
	if (!n) return -1;
	let r = F(t);
	if (!r) return -1;
	let i = n.minutes + n.hours * 60, a = r.minutes + r.hours * 60;
	return i === a ? 0 : i > a ? 1 : -1;
}, R = (e) => `${e}`.padStart(2, "0"), z = (e) => `${R(e.hours)}:${R(e.minutes)}`, B = (e, t) => {
	let n = F(e);
	if (!n) return "";
	let r = F(t);
	if (!r) return "";
	let i = {
		hours: n.hours,
		minutes: n.minutes
	};
	return i.minutes += r.minutes, i.hours += r.hours, i.hours += Math.floor(i.minutes / 60), i.minutes %= 60, z(i);
}, V = /* @__PURE__ */ e(O(), 1), H = /* @__PURE__ */ e(A(), 1), U = m(/* @__PURE__ */ i({
	name: "ElTimeSelect",
	__name: "time-select",
	props: P,
	emits: [
		g,
		"blur",
		"focus",
		"clear",
		h
	],
	setup(e, { expose: i }) {
		V.default.extend(H.default);
		let { Option: m } = k, h = e, g = b("input"), _ = u(), v = T(), { lang: x } = E(), S = (e, t, n, r = !0) => {
			let i = F(e);
			return !I(i) || !r && i.hours === 0 && i.minutes === 0 ? (y("ElTimeSelect", `invalid ${t}, fallback to default ${t} (${n}).`), n) : z(i);
		}, w = o(() => h.modelValue), D = o(() => S(h.start, "start", j)), O = o(() => S(h.end, "end", M)), A = o(() => {
			let e = F(h.minTime || "");
			return e ? z(e) : null;
		}), P = o(() => {
			let e = F(h.maxTime || "");
			return e ? z(e) : null;
		}), R = o(() => S(h.step, "step", N, !1)), U = o(() => {
			let e = [], t = (t, n) => {
				e.push({
					value: t,
					rawValue: n,
					disabled: L(n, A.value || "-1:-1") <= 0 || L(n, P.value || "100:100") >= 0
				});
			}, n = D.value;
			for (; L(n, O.value) <= 0;) t((0, V.default)(n, "HH:mm").locale(x.value).format(h.format), n), n = B(n, R.value);
			return h.includeEndTime && e[e.length - 1]?.rawValue !== O.value && t((0, V.default)(O.value, "HH:mm").locale(x.value).format(h.format), O.value), e;
		});
		return i({
			blur: () => {
				_.value?.blur?.();
			},
			focus: () => {
				_.value?.focus?.();
			}
		}), (i, o) => (t(), f(p(k), {
			ref_key: "select",
			ref: _,
			name: e.name,
			"model-value": w.value,
			disabled: p(v),
			clearable: e.clearable,
			"clear-icon": e.clearIcon,
			size: e.size,
			effect: e.effect,
			placeholder: e.placeholder,
			"default-first-option": "",
			filterable: e.editable,
			"empty-values": e.emptyValues,
			"value-on-clear": e.valueOnClear,
			"popper-class": e.popperClass,
			"popper-style": e.popperStyle,
			"onUpdate:modelValue": o[0] ||= (e) => i.$emit(p("update:modelValue"), e),
			onChange: o[1] ||= (e) => i.$emit(p("change"), e),
			onBlur: o[2] ||= (e) => i.$emit("blur", e),
			onFocus: o[3] ||= (e) => i.$emit("focus", e),
			onClear: o[4] ||= () => i.$emit("clear")
		}, {
			prefix: l(() => [e.prefixIcon ? (t(), f(p(C), {
				key: 0,
				class: r(p(g).e("prefix-icon"))
			}, {
				default: l(() => [(t(), f(n(e.prefixIcon)))]),
				_: 1
			}, 8, ["class"])) : s("v-if", !0)]),
			default: l(() => [(t(!0), d(c, null, a(U.value, (e) => (t(), f(p(m), {
				key: e.value,
				label: e.value,
				value: e.value,
				disabled: e.disabled
			}, null, 8, [
				"label",
				"value",
				"disabled"
			]))), 128))]),
			_: 1
		}, 8, [
			"name",
			"model-value",
			"disabled",
			"clearable",
			"clear-icon",
			"size",
			"effect",
			"placeholder",
			"filterable",
			"empty-values",
			"value-on-clear",
			"popper-class",
			"popper-style"
		]));
	}
}));
//#endregion
export { M as DEFAULT_END, j as DEFAULT_START, N as DEFAULT_STEP, U as ElTimeSelect, U as default, P as timeSelectProps };
