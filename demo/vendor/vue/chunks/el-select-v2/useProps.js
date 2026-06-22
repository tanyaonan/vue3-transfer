globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, ut as t } from "../vue.runtime.js";
import { a as n } from "../shared/element-plus/utils/objects.js";
import { t as r } from "../shared/lodash/toNumber.js";
import { t as i } from "../shared/lodash/_baseFindIndex.js";
import { t as a } from "../shared/lodash/isEqual.js";
import { t as o } from "../shared/lodash/_baseIteratee.js";
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toFinite.js
var s = Infinity, c = 17976931348623157e292;
function l(e) {
	return e ? (e = r(e), e === s || e === -s ? (e < 0 ? -1 : 1) * c : e === e ? e : 0) : e === 0 ? e : 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toInteger.js
function u(e) {
	var t = l(e), n = t % 1;
	return t === t ? n ? t - n : t : 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/findLastIndex.js
var d = Math.max, f = Math.min;
function p(e, t, n) {
	var r = e == null ? 0 : e.length;
	if (!r) return -1;
	var a = r - 1;
	return n !== void 0 && (a = u(n), a = n < 0 ? d(r + a, 0) : f(a, r - 1)), i(e, o(t, 3), a, !0);
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/select-v2/src/useProps.mjs
var m = {
	label: "label",
	value: "value",
	disabled: "disabled",
	options: "options"
};
function h(r) {
	let i = t({
		...m,
		...r.props
	}), o = { ...r.props };
	return e(() => r.props, (e) => {
		a(e, o) || (i.value = {
			...m,
			...e
		}, o = { ...e });
	}, { deep: !0 }), {
		aliasProps: i,
		getLabel: (e) => n(e, i.value.label),
		getValue: (e) => n(e, i.value.value),
		getDisabled: (e) => n(e, i.value.disabled),
		getOptions: (e) => n(e, i.value.options)
	};
}
//#endregion
export { h as n, p as r, m as t };
