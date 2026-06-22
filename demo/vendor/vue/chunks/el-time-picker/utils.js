globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { r as e } from "../shared/rolldown-runtime.js";
import { Et as t, Tt as n } from "../vue.runtime.js";
import { r } from "../shared/element-plus/utils/types.js";
import { t as i } from "../shared/dayjs.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/time-picker/src/utils.mjs
var a = /* @__PURE__ */ e(i(), 1), o = (e, t) => [
	e > 0 ? e - 1 : void 0,
	e,
	e < t ? e + 1 : void 0
], s = (e) => Array.from(Array.from({ length: e }).keys()), c = (e) => e.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim(), l = (e) => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim(), u = function(e, n) {
	let r = t(e), i = t(n);
	return r && i ? e.getTime() === n.getTime() : !r && !i ? e === n : !1;
}, d = function(e, t) {
	let r = n(e), i = n(t);
	return r && i ? e.length === t.length ? e.every((e, n) => u(e, t[n])) : !1 : !r && !i ? u(e, t) : !1;
}, f = function(e, t, n) {
	let i = r(t) || t === "x" ? (0, a.default)(e).locale(n) : (0, a.default)(e, t).locale(n);
	return i.isValid() ? i : void 0;
}, p = function(e, t, n) {
	return r(t) ? e : t === "x" ? +e : (0, a.default)(e).locale(n).format(t);
}, m = (e, t) => {
	let n = [], r = t?.();
	for (let t = 0; t < e; t++) n.push(r?.includes(t) ?? !1);
	return n;
}, h = (e) => n(e) ? e.map((e) => e.toDate()) : e.toDate(), g = [
	"hours",
	"minutes",
	"seconds"
], _ = "EP_PICKER_BASE", v = "ElPopperOptions", y = Symbol("commonPickerContextKey"), b = "HH:mm:ss", x = "YYYY-MM-DD", S = {
	date: x,
	dates: x,
	week: "gggg[w]ww",
	year: "YYYY",
	years: "YYYY",
	month: "YYYY-MM",
	months: "YYYY-MM",
	datetime: `${x} ${b}`,
	monthrange: "YYYY-MM",
	yearrange: "YYYY",
	daterange: x,
	datetimerange: `${x} ${b}`
};
//#endregion
export { d as _, v as a, o as c, c as d, l as f, s as g, f as h, _ as i, u as l, m, S as n, y as o, p, b as r, g as s, x as t, h as u };
