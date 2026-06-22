globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { B as t, D as n, H as r, L as i, N as a, T as o, U as s, a as c, c as l, d as u, g as d, h as f, k as p, l as m, s as h, u as g, z as _ } from "./vue.runtime.js";
import { N as v, P as y, b, g as x, j as S, l as C, s as w, t as T, w as E, x as D } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as O, o as k, r as A, s as j, t as M } from "./shared/wot-ui/common/props.ts.js";
import { t as N } from "./wd-icon.js";
import { t as P } from "./shared/wot-ui/common/formatDate.ts.js";
import { t as F } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { r as I, t as L } from "./wd-toast.js";
import { t as ee } from "./wd-datetime-picker-view.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-calendar-view/utils.ts
var { translate: R } = F("calendar-view"), z = h(() => [
	R("weeks.sun"),
	R("weeks.mon"),
	R("weeks.tue"),
	R("weeks.wed"),
	R("weeks.thu"),
	R("weeks.fri"),
	R("weeks.sat")
]);
function B(e, t) {
	let n = new Date(e), r = new Date(t || ""), i = n.getFullYear(), a = r.getFullYear(), o = n.getMonth(), s = r.getMonth(), c = n.getDate(), l = r.getDate();
	return i === a ? o === s ? c === l ? 0 : c > l ? 1 : -1 : o === s ? 0 : o > s ? 1 : -1 : i > a ? 1 : -1;
}
function V(e) {
	return e.indexOf("range") > -1;
}
function H(e, t) {
	let n = new Date(e), r = new Date(t), i = n.getFullYear(), a = r.getFullYear(), o = n.getMonth(), s = r.getMonth();
	return i === a ? o === s ? 0 : o > s ? 1 : -1 : i > a ? 1 : -1;
}
function U(e, t) {
	let n = new Date(e), r = new Date(t), i = n.getFullYear(), a = r.getFullYear();
	return i === a ? 0 : i > a ? 1 : -1;
}
function W(e, t) {
	return 32 - new Date(e, t - 1, 32).getDate();
}
function te(e) {
	return P(e, R("monthTitle"));
}
function ne(e) {
	return e >= 7 && (e %= 7), z.value[e];
}
function G(e) {
	return P(e, R("yearTitle"));
}
function K(e, t) {
	let n = [], r = new Date(e);
	for (r.setDate(1); H(r.getTime(), t) < 1;) n.push(r.getTime()), r.setMonth(r.getMonth() + 1);
	return n;
}
function re(e, t) {
	let n = [], r = new Date(e);
	for (r.setMonth(0), r.setDate(1); U(r.getTime(), t) < 1;) n.push(r.getTime()), r.setFullYear(r.getFullYear() + 1);
	return n;
}
function q(e, t) {
	t >= 7 && (t %= 7);
	let n = new Date(e);
	n.setHours(0, 0, 0, 0);
	let r = n.getFullYear(), i = n.getMonth(), a = n.getDate(), o = n.getDay(), s = new Date(r, i, a - (7 + o - t) % 7), c = new Date(r, i, a + 6 - (7 + o - t) % 7);
	return [s.getTime(), c.getTime()];
}
function ie(e, t) {
	return (e - t) / (1440 * 60 * 1e3) + 1;
}
function J(e, t) {
	let n = new Date(e);
	return n.setDate(n.getDate() + t), n.getTime();
}
var ae = (e) => J(e, -1), oe = (e) => J(e, 1);
function se(e, t) {
	let n = new Date(e), r = new Date(t), i = n.getFullYear(), a = r.getFullYear(), o = n.getMonth(), s = r.getMonth();
	return o = (i - a) * 12 + o, o - s + 1;
}
function Y(e, t) {
	let n = new Date(e);
	return n.setMonth(n.getMonth() + t), n.getTime();
}
function ce(e) {
	if (x(e)) return [(e[0] || "00:00:00").split(":").map((e) => parseInt(e)), (e[1] || "00:00:00").split(":").map((e) => parseInt(e))];
	{
		let t = (e || "00:00:00").split(":").map((e) => parseInt(e));
		return [t, t];
	}
}
function le(e, t) {
	let n = new Date(e);
	return n.setHours(t[0]), n.setMinutes(t[1]), n.setSeconds(t[2]), n.getTime();
}
function X(e) {
	e = new Date(e), e.setHours(0, 0, 0, 0), e.setDate(e.getDate() + 3 - (e.getDay() + 6) % 7);
	let t = new Date(e.getFullYear(), 0, 4);
	return 1 + Math.round(((e.getTime() - t.getTime()) / 864e5 - 3 + (t.getDay() + 6) % 7) / 7);
}
function ue(e, t, n) {
	let r = ["is-" + e];
	return n.indexOf("range") > -1 && x(t) && (!t || !t[1]) && r.push("is-without-end"), r.join(" ");
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-calendar-view/year/types.ts
var de = {
	type: k(String),
	date: k(Number),
	value: k([Number, Array]),
	minDate: k(Number),
	maxDate: k(Number),
	formatter: Function,
	maxRange: Number,
	rangePrompt: String,
	allowSameDay: A(!1),
	defaultTime: { type: [Array] },
	showTitle: A(!0)
}, Z = { class: "wd-year year" }, fe = {
	key: 0,
	class: "wd-year__title"
}, pe = { class: "wd-year__months" }, me = ["onClick"], he = { class: "wd-year__month-container" }, ge = { class: "wd-year__month-top" }, _e = { class: "wd-year__month-text" }, ve = { class: "wd-year__month-bottom" }, ye = /* @__PURE__ */ d({
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	__name: "year",
	props: de,
	emits: ["change"],
	setup(e, { emit: r }) {
		let o = e, d = r, m = I("wd-year"), { translate: _ } = F("calendar-view"), v = i([]), y = h(() => (e) => ue(e, o.value, o.type)), b = h(() => (e) => G(e));
		a([
			() => o.type,
			() => o.date,
			() => o.value,
			() => o.minDate,
			() => o.maxDate,
			() => o.formatter
		], () => {
			w();
		}, {
			deep: !0,
			immediate: !0
		});
		function S(e) {
			return P(e, _("month", e));
		}
		function w() {
			let e = [], t = new Date(o.date).getFullYear(), n = o.value;
			if (o.type.indexOf("range") > -1 && n && !x(n)) {
				console.error("[wot-design] value should be array when type is range");
				return;
			}
			for (let n = 0; n < 12; n++) {
				let r = new Date(t, n, 1).getTime(), i = T(r);
				!i && H(r, Date.now()) === 0 && (i = "current");
				let a = j(r, n, i);
				e.push(a);
			}
			v.value = C(e);
		}
		function T(e) {
			if (o.type === "monthrange" && x(o.value)) {
				let [t, n] = o.value || [];
				return t && H(e, t) === 0 ? n && H(t, n) === 0 ? "same" : "start" : n && H(e, n) === 0 ? "end" : t && n && H(e, t) === 1 && H(e, n) === -1 ? "middle" : "";
			} else if (o.value && H(e, o.value) === 0) return "selected";
			else return "";
		}
		function E(e) {
			let t = v.value[e];
			if (!t.disabled) switch (o.type) {
				case "month":
					k(t);
					break;
				case "monthrange":
					A(t);
					break;
				default: k(t);
			}
		}
		function O(e) {
			return o.defaultTime && o.defaultTime.length > 0 ? le(e, o.defaultTime[0]) : e;
		}
		function k(e) {
			e.type !== "selected" && d("change", { value: O(e.date) });
		}
		function A(e) {
			let t = [], [n, r] = x(o.value) && o.value || [], i = H(e.date, n);
			!o.allowSameDay && !r && i === 0 || (n && !r && i > -1 ? o.maxRange && se(e.date, n) > o.maxRange ? (t = [n, O(Y(n, o.maxRange - 1))], m.show({ msg: o.rangePrompt || _("rangePromptMonth", o.maxRange) })) : t = [n, O(e.date)] : t = [O(e.date), null], d("change", { value: t }));
		}
		function j(e, t, n) {
			let r = {
				date: e,
				text: t + 1,
				topInfo: "",
				bottomInfo: "",
				type: n,
				disabled: H(e, o.minDate) === -1 || H(e, o.maxDate) === 1,
				isLastRow: t >= 8
			};
			return o.formatter && (D(o.formatter) ? r = o.formatter(r) : console.error("[wot-design] error(wd-calendar-view): the formatter prop of wd-calendar-view should be a function")), r;
		}
		return (e, r) => (n(), u(c, null, [f(L, { selector: "wd-year" }), l("div", Z, [e.showTitle ? (n(), u("div", fe, s(b.value(e.date)), 1)) : g("", !0), l("div", pe, [(n(!0), u(c, null, p(v.value, (e, r) => (n(), u("div", {
			key: r,
			class: t(`wd-year__month ${e.disabled ? "is-disabled" : ""} ${e.isLastRow ? "is-last-row" : ""} ${e.type ? y.value(e.type) : ""} ${e.customClass || ""}`),
			onClick: (e) => E(r)
		}, [l("div", he, [
			l("div", ge, s(e.topInfo), 1),
			l("div", _e, s(S(e.date)), 1),
			l("div", ve, s(e.bottomInfo), 1)
		])], 10, me))), 128))])])], 64));
	}
}), be = {
	type: k(String),
	value: k([Number, Array]),
	minDate: k(Number),
	maxDate: k(Number),
	formatter: Function,
	maxRange: Number,
	rangePrompt: String,
	allowSameDay: A(!1),
	showPanelTitle: A(!0),
	defaultTime: { type: [Array] },
	panelHeight: k(Number),
	switchMode: j("none")
}, xe = { class: "wd-year-panel" }, Se = {
	key: 0,
	class: "wd-year-panel__controls"
}, Ce = { class: "wd-year-panel__control" }, we = { class: "wd-year-panel__controls-title" }, Te = { class: "wd-year-panel__control" }, Ee = {
	key: 1,
	class: "wd-year-panel__title"
}, De = ["scroll-top"], Oe = ["id"], ke = /* @__PURE__ */ d({
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	__name: "year-panel",
	props: be,
	emits: ["change"],
	setup(e, { expose: t, emit: a }) {
		let d = e, m = a, _ = i(0), v = i(0), b = i((/* @__PURE__ */ new Date()).getFullYear()), S = h(() => d.panelHeight + (d.showPanelTitle ? 26 : 16)), C = h(() => re(d.minDate, d.maxDate).map((e, t) => ({
			date: e,
			height: t === 0 ? 188 : 228
		}))), w = h(() => new Date(b.value, 0, 1).getTime()), T = h(() => d.switchMode === "none" ? C.value : [{
			date: w.value,
			height: 188
		}]), D = h(() => G(w.value)), O = h(() => G(C.value[v.value].date)), k = h(() => {
			let e = new Date(d.minDate).getFullYear();
			return b.value <= e;
		}), A = h(() => {
			let e = new Date(d.maxDate).getFullYear();
			return b.value >= e;
		});
		function j(e) {
			b.value += e;
		}
		o(() => {
			d.switchMode !== "none" && M(), P();
		});
		function M() {
			let e = null;
			x(d.value) ? e = d.value[0] : E(d.value) && (e = d.value), e ||= Date.now(), b.value = new Date(e).getFullYear();
		}
		async function P() {
			await y();
			let e = null;
			x(d.value) ? e = d.value[0] : E(d.value) && (e = d.value), e ||= Date.now();
			let t = 0;
			for (let n = 0; n < C.value.length && U(C.value[n].date, e) !== 0; n++) t += C.value[n] ? Number(C.value[n].height) : 0;
			_.value = 0, t > 0 && (await y(), _.value = t + 40);
		}
		let F = (e) => {
			C.value.length <= 1 || I(Math.max(0, e.detail.scrollTop));
		};
		function I(e) {
			let t = 0;
			for (let n = 0; n < C.value.length; n++) if (t += C.value[n].height, e < t) {
				v.value = n;
				return;
			}
		}
		function L({ value: e }) {
			m("change", { value: e });
		}
		return t({ scrollIntoView: P }), (e, t) => (n(), u("div", xe, [
			e.switchMode === "none" ? g("", !0) : (n(), u("div", Se, [
				l("div", Ce, [f(N, {
					name: "left",
					"custom-class": `wd-year-panel__control-icon ${k.value ? "is-disabled" : ""}`,
					onClick: t[0] ||= (e) => !k.value && j(-1)
				}, null, 8, ["custom-class"])]),
				l("span", we, s(D.value), 1),
				l("div", Te, [f(N, {
					name: "right",
					"custom-class": `wd-year-panel__control-icon ${A.value ? "is-disabled" : ""}`,
					onClick: t[1] ||= (e) => !A.value && j(1)
				}, null, 8, ["custom-class"])])
			])),
			e.showPanelTitle && e.switchMode === "none" ? (n(), u("div", Ee, s(O.value), 1)) : g("", !0),
			l("div", {
				class: "wd-year-panel__container",
				style: r(`height: ${S.value}px`),
				"scroll-y": !0,
				"scroll-top": _.value,
				onScroll: t[2] ||= (t) => e.switchMode === "none" ? F(t) : void 0
			}, [(n(!0), u(c, null, p(T.value, (t, r) => (n(), u("div", {
				key: r,
				id: `year${r}`
			}, [f(ye, {
				type: e.type,
				date: t.date,
				value: e.value,
				"min-date": e.minDate,
				"max-date": e.maxDate,
				"max-range": e.maxRange,
				formatter: e.formatter,
				"range-prompt": e.rangePrompt,
				"allow-same-day": e.allowSameDay,
				"default-time": e.defaultTime,
				showTitle: e.switchMode === "none" && r !== 0,
				onChange: L
			}, null, 8, [
				"type",
				"date",
				"value",
				"min-date",
				"max-date",
				"max-range",
				"formatter",
				"range-prompt",
				"allow-same-day",
				"default-time",
				"showTitle"
			])], 8, Oe))), 128))], 44, De)
		]));
	}
}), Ae = {
	type: k(String),
	date: k(Number),
	value: k([
		Number,
		Array,
		null
	]),
	minDate: k(Number),
	maxDate: k(Number),
	firstDayOfWeek: k(Number),
	formatter: Function,
	maxRange: Number,
	rangePrompt: String,
	allowSameDay: A(!1),
	defaultTime: { type: [Array] },
	showTitle: A(!0)
}, je = { class: "wd-month" }, Me = {
	key: 0,
	class: "wd-month__title"
}, Ne = { class: "wd-month__days" }, Pe = ["onClick"], Fe = { class: "wd-month__day-container" }, Ie = { class: "wd-month__day-top" }, Le = { class: "wd-month__day-text" }, Re = { class: "wd-month__day-bottom" }, ze = /* @__PURE__ */ d({
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	__name: "month",
	props: Ae,
	emits: ["change"],
	setup(e, { emit: o }) {
		let d = e, m = o, { translate: _ } = F("calendar-view"), v = i([]), y = I("wd-month"), b = h(() => {
			let e = d.firstDayOfWeek >= 7 ? d.firstDayOfWeek % 7 : d.firstDayOfWeek;
			return (7 + new Date(d.date).getDay() - e) % 7;
		}), w = h(() => (e) => ue(e, d.value, d.type)), T = h(() => (e) => te(e)), E = h(() => {
			let e = {};
			return e.marginLeft = `${100 / 7 * b.value}%`, S(e);
		}), O = (e) => {
			let t = new Date(e), n = t.getDate(), r = W(t.getFullYear(), t.getMonth() + 1), i = b.value + r, a = Math.ceil(i / 7);
			return Math.ceil((b.value + n) / 7) === a;
		};
		a([
			() => d.type,
			() => d.date,
			() => d.value,
			() => d.minDate,
			() => d.maxDate,
			() => d.formatter
		], () => {
			k();
		}, {
			deep: !0,
			immediate: !0
		});
		function k() {
			let e = [], t = new Date(d.date), n = t.getFullYear(), r = t.getMonth(), i = W(n, r + 1), a = d.value;
			(d.type === "week" || d.type === "weekrange") && a && (a = ee());
			for (let t = 1; t <= i; t++) {
				let i = new Date(n, r, t).getTime(), o = A(i, a);
				!o && B(i, Date.now()) === 0 && (o = "current");
				let s = K(i, t, o);
				e.push(s);
			}
			v.value = e;
		}
		function A(e, t) {
			switch (d.type) {
				case "date":
				case "datetime": return j(e);
				case "dates": return M(e);
				case "daterange":
				case "datetimerange": return N(e, t);
				case "week": return P(e, t);
				case "weekrange": return P(e, t);
				default: return j(e);
			}
		}
		function j(e) {
			return d.value && B(e, d.value) === 0 ? "selected" : "";
		}
		function M(e) {
			let { value: t } = d, n = "";
			if (!x(t)) return n;
			let r = (e) => t.some((t) => B(e, t) === 0);
			if (r(e)) {
				let t = ae(e), i = oe(e), a = r(t), o = r(i);
				n = a && o ? "multiple-middle" : a ? "end" : o ? "start" : "multiple-selected";
			}
			return n;
		}
		function N(e, t) {
			let [n, r] = x(t) ? t : [];
			return n && B(e, n) === 0 ? d.allowSameDay && r && B(n, r) === 0 ? "same" : "start" : r && B(e, r) === 0 ? "end" : n && r && B(e, n) === 1 && B(e, r) === -1 ? "middle" : "";
		}
		function P(e, t) {
			let [n, r] = x(t) ? t : [];
			return n && B(e, n) === 0 ? "start" : r && B(e, r) === 0 ? "end" : n && r && B(e, n) === 1 && B(e, r) === -1 ? "middle" : "";
		}
		function ee() {
			if (d.type === "week") return q(d.value, d.firstDayOfWeek);
			{
				let [e, t] = d.value || [];
				if (e) {
					let n = q(e, d.firstDayOfWeek);
					if (t) {
						let e = q(t, d.firstDayOfWeek);
						return [n[0], e[1]];
					} else return n;
				}
				return [];
			}
		}
		function R(e) {
			let t = v.value[e];
			switch (d.type) {
				case "date":
				case "datetime":
					V(t);
					break;
				case "dates":
					H(t);
					break;
				case "daterange":
				case "datetimerange":
					U(t);
					break;
				case "week":
					ne(t);
					break;
				case "weekrange":
					G(t);
					break;
				default: V(t);
			}
		}
		function z(e, t = !1) {
			return e = d.defaultTime && d.defaultTime.length > 0 ? le(e, t ? d.defaultTime[1] : d.defaultTime[0]) : e, e < d.minDate ? d.minDate : e > d.maxDate ? d.maxDate : e;
		}
		function V(e) {
			e.disabled || e.type !== "selected" && m("change", {
				value: z(e.date),
				type: "start"
			});
		}
		function H(e) {
			if (e.disabled) return;
			let t = C(x(d.value) ? d.value : []), n = t.findIndex((t) => t && B(t, e.date) === 0);
			m("change", { value: n === -1 ? [...t, z(e.date)] : t.filter((e, t) => t !== n) });
		}
		function U(e) {
			if (e.disabled) return;
			let t = [], n = "", [r, i] = C(x(d.value) ? d.value : []), a = B(e.date, r);
			!d.allowSameDay && a === 0 && (d.type === "daterange" || d.type === "datetimerange") && !i || (r && !i && a > -1 ? d.maxRange && ie(e.date, r) > d.maxRange ? (t = [r, z(J(r, d.maxRange - 1), !0)], y.show({ msg: d.rangePrompt || _("rangePrompt", d.maxRange) })) : t = [r, z(e.date, !0)] : d.type === "datetimerange" && r && i ? a === 0 ? (n = "start", t = d.value) : B(e.date, i) === 0 ? (n = "end", t = d.value) : t = [z(e.date), null] : t = [z(e.date), null], m("change", {
				value: t,
				type: n || (t[1] ? "end" : "start")
			}));
		}
		function ne(e) {
			let [t] = q(e.date, d.firstDayOfWeek);
			K(t, new Date(t).getDate()).disabled || m("change", { value: z(t) + 1440 * 60 * 1e3 });
		}
		function G(e) {
			let [t] = q(e.date, d.firstDayOfWeek);
			if (K(t, new Date(t).getDate()).disabled) return;
			let n = [], [r, i] = C(x(d.value) ? d.value : []), [a] = r ? q(r, d.firstDayOfWeek) : [], o = B(t, a);
			if (r && !i && o > -1) {
				if (!d.allowSameDay && o === 0) return;
				n = [z(a) + 1440 * 60 * 1e3, z(t) + 1440 * 60 * 1e3];
			} else n = [z(t) + 1440 * 60 * 1e3, null];
			m("change", { value: n });
		}
		function K(e, t, n) {
			let r = {
				date: e,
				text: t,
				topInfo: "",
				bottomInfo: "",
				type: n,
				disabled: B(e, d.minDate) === -1 || B(e, d.maxDate) === 1,
				isLastRow: O(e)
			};
			return d.formatter && (D(d.formatter) ? r = d.formatter(r) : console.error("[wot-design] error(wd-calendar-view): the formatter prop of wd-calendar-view should be a function")), r;
		}
		return (e, i) => (n(), u("div", null, [f(L, { selector: "wd-month" }), l("div", je, [e.showTitle ? (n(), u("div", Me, s(T.value(e.date)), 1)) : g("", !0), l("div", Ne, [(n(!0), u(c, null, p(v.value, (e, i) => (n(), u("div", {
			key: i,
			class: t(`wd-month__day ${e.disabled ? "is-disabled" : ""} ${e.isLastRow ? "is-last-row" : ""} ${e.type ? w.value(e.type) : ""} ${e.customClass || ""}`),
			style: r(i === 0 ? E.value : ""),
			onClick: (e) => R(i)
		}, [l("div", Fe, [
			l("div", Ie, s(e.topInfo), 1),
			l("div", Le, s(e.text), 1),
			l("div", Re, s(e.bottomInfo), 1)
		])], 14, Pe))), 128))])])]));
	}
}), Q = /* @__PURE__ */ new Date(), Be = new Date(Q.getFullYear(), Q.getMonth() - 6, Q.getDate()).getTime(), Ve = new Date(Q.getFullYear(), Q.getMonth() + 6, Q.getDate(), 23, 59, 59).getTime(), He = {
	type: j("date"),
	value: {
		type: [
			Number,
			Array,
			null
		],
		default: null
	},
	minDate: O(Be),
	maxDate: O(Ve),
	firstDayOfWeek: O(0),
	formatter: Function,
	maxRange: Number,
	rangePrompt: String,
	allowSameDay: A(!1),
	showPanelTitle: A(!1),
	defaultTime: { type: [Array] },
	panelHeight: O(378),
	itemHeight: O(44),
	visibleItemCount: O(6),
	timeFilter: Function,
	timeFormatter: Function,
	hideSecond: A(!1),
	immediateChange: A(!1),
	switchMode: j("none")
}, Ue = { class: "wd-month-panel" }, We = {
	key: 0,
	class: "wd-month-panel__controls"
}, Ge = { class: "wd-month-panel__control" }, Ke = { class: "wd-month-panel__controls-title" }, qe = { class: "wd-month-panel__control" }, Je = { class: "wd-month-panel__weeks" }, Ye = {
	key: 1,
	class: "wd-month-panel__title"
}, Xe = ["scroll-top"], Ze = ["id"], Qe = {
	key: 2,
	class: "wd-month-panel__time"
}, $e = {
	key: 0,
	class: "wd-month-panel__time-label"
}, et = { class: "wd-month-panel__time-text" }, tt = { class: "wd-month-panel__time-picker" }, nt = /* @__PURE__ */ d({
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	__name: "month-panel",
	props: He,
	emits: [
		"change",
		"pickstart",
		"pickend"
	],
	setup(e, { expose: d, emit: C }) {
		let D = e, O = C, { translate: k } = F("calendar-view"), A = i(0), j = i(0), M = i(""), P = i({
			year: (/* @__PURE__ */ new Date()).getFullYear(),
			month: (/* @__PURE__ */ new Date()).getMonth()
		}), I = i(""), L = i(""), R = w((e) => {
			O("change", { value: e });
		}, 50), z = h(() => new Date(P.value.year, P.value.month, 1).getTime()), B = h(() => te(z.value)), V = h(() => te(Y.value[j.value].date));
		function U(e, t) {
			return new Date(e, t, 1).getTime();
		}
		let G = h(() => {
			let { year: e, month: t } = P.value;
			return U(e, t - 1) < U(new Date(D.minDate).getFullYear(), new Date(D.minDate).getMonth());
		}), re = h(() => {
			let { year: e, month: t } = P.value;
			return U(e, t + 1) > U(new Date(D.maxDate).getFullYear(), new Date(D.maxDate).getMonth());
		}), q = h(() => {
			let { year: e, month: t } = P.value, n = e - 1, r = new Date(D.minDate).getFullYear(), i = new Date(D.minDate).getMonth();
			return n < r || n === r && t < i;
		}), ie = h(() => {
			let { year: e, month: t } = P.value, n = e + 1, r = new Date(D.maxDate).getFullYear(), i = new Date(D.maxDate).getMonth();
			return n > r || n === r && t > i;
		});
		function J(e) {
			let { year: t, month: n } = P.value, r = new Date(t, n + e, 1);
			P.value = {
				year: r.getFullYear(),
				month: r.getMonth()
			};
		}
		function ae(e) {
			let { year: t, month: n } = P.value, r = new Date(t + e, n, 1);
			P.value = {
				year: r.getFullYear(),
				month: r.getMonth()
			};
		}
		let oe = h(() => (e) => ne(e - 1)), se = h(() => S({ height: I.value ? T(D.panelHeight - 120) : T(D.panelHeight) })), Y = h(() => K(D.minDate, D.maxDate).map((e, t) => {
			let n = (7 + new Date(e).getDay() - D.firstDayOfWeek) % 7, r = W(new Date(e).getFullYear(), new Date(e).getMonth() + 1), i = Math.ceil((n + r) / 7);
			return {
				height: i * 60 + (i - 1) * 4 + (t === 0 ? 0 : 40),
				date: e
			};
		})), ce = h(() => {
			if (D.switchMode === "none") return Y.value;
			let e = (7 + new Date(z.value).getDay() - D.firstDayOfWeek) % 7, t = W(P.value.year, P.value.month + 1), n = Math.ceil((e + t) / 7);
			return [{
				height: n * 60 + (n - 1) * 4,
				date: z.value
			}];
		});
		a(() => D.type, (e) => {
			(e === "datetime" && D.value || e === "datetimerange" && x(D.value) && D.value && D.value.length > 0 && D.value[0]) && Z(D.value, "start");
		}, {
			deep: !0,
			immediate: !0
		}), a(() => D.value, (e) => {
			b(e, L.value) || (D.type === "datetime" && e || D.type === "datetimerange" && e && x(e) && e.length > 0 && e[0]) && Z(e, "start");
		}, {
			deep: !0,
			immediate: !0
		}), o(() => {
			D.switchMode !== "none" && le(), X();
		});
		function le() {
			let e = null;
			x(D.value) ? e = [...D.value].sort((e, t) => (e || 0) - (t || 0))[0] : E(D.value) && (e = D.value), e ||= Date.now(), e < D.minDate ? e = D.minDate : e > D.maxDate && (e = D.maxDate);
			let t = new Date(e);
			P.value = {
				year: t.getFullYear(),
				month: t.getMonth()
			};
		}
		async function X() {
			await y();
			let e = 0;
			x(D.value) ? e = [...D.value].sort((e, t) => (e || 0) - (t || 0))[0] : E(D.value) && (e = D.value), e ||= Date.now();
			let t = 0, n = -1;
			for (let r = 0; r < Y.value.length; r++) {
				if (H(Y.value[r].date, e) === 0) {
					n = r;
					let i = new Date(e), a = i.getDate(), o = (7 + new Date(i.getFullYear(), i.getMonth(), 1).getDay() - D.firstDayOfWeek) % 7, s = Math.floor((o + a - 1) / 7);
					t += s * 60 + s * 4;
					break;
				}
				t += Y.value[r] ? Number(Y.value[r].height) : 0;
			}
			A.value = 0, t > 0 && (await y(), A.value = t + (n > 0 ? 40 : 0));
		}
		let ue = (e, t) => D.timeFormatter ? D.timeFormatter(e, t) : k(e, t);
		function de(e, t) {
			let n = /* @__PURE__ */ new Date();
			D.type === "datetime" ? n = new Date(e) : x(e) && (n = t === "start" ? new Date(e[0] || "") : new Date(e[1] || ""));
			let r = v(n.getHours()), i = v(n.getMinutes()), a = v(n.getSeconds());
			return D.hideSecond ? `${r}:${i}` : `${r}:${i}:${a}`;
		}
		function Z(e, t) {
			x(e) && e[0] && e[1] && t === "start" && I.value === "start" && (t = "end"), I.value = t || "", M.value = de(e, t || "");
		}
		function fe({ value: e, type: t }) {
			b(e, D.value) || (L.value = e, R(e)), D.type.indexOf("time") > -1 && Z(e, t);
		}
		function pe({ value: e }) {
			if (!D.value) return;
			let [t, n, r] = e.split(":").map(Number);
			if (D.type === "datetime" && E(D.value)) {
				let e = new Date(D.value);
				e.setHours(t), e.setMinutes(n), e.setSeconds(D.hideSecond ? 0 : r || 0), R(e.getTime());
			} else if (x(D.value) && D.type === "datetimerange") {
				let [e, i] = D.value, a = I.value === "start" ? e : i, o = new Date(a || "");
				o.setHours(t), o.setMinutes(n), o.setSeconds(D.hideSecond ? 0 : r || 0);
				let s = o.getTime();
				if (s === a) return;
				let c = [e, i];
				I.value === "start" ? c[0] = s : c[1] = s, L.value = c, R(c);
			}
		}
		function me() {
			O("pickstart");
		}
		function he() {
			O("pickend");
		}
		let ge = (e) => {
			Y.value.length <= 1 || _e(Math.max(0, e.detail.scrollTop));
		};
		function _e(e) {
			let t = 0;
			for (let n = 0; n < Y.value.length; n++) if (t += Y.value[n].height, e < t) {
				j.value = n;
				return;
			}
		}
		return d({ scrollIntoView: X }), (e, i) => (n(), u("div", Ue, [
			e.switchMode === "none" ? g("", !0) : (n(), u("div", We, [
				l("div", Ge, [e.switchMode === "year-month" ? (n(), m(N, {
					key: 0,
					name: "double-left",
					"custom-class": `wd-month-panel__control-icon ${q.value ? "is-disabled" : ""}`,
					onClick: i[0] ||= (e) => !q.value && ae(-1)
				}, null, 8, ["custom-class"])) : g("", !0), f(N, {
					name: "left",
					"custom-class": `wd-month-panel__control-icon ${G.value ? "is-disabled" : ""}`,
					onClick: i[1] ||= (e) => !G.value && J(-1)
				}, null, 8, ["custom-class"])]),
				l("span", Ke, s(B.value), 1),
				l("div", qe, [f(N, {
					name: "right",
					"custom-class": `wd-month-panel__control-icon ${re.value ? "is-disabled" : ""}`,
					onClick: i[2] ||= (e) => !re.value && J(1)
				}, null, 8, ["custom-class"]), e.switchMode === "year-month" ? (n(), m(N, {
					key: 0,
					name: "double-right",
					"custom-class": `wd-month-panel__control-icon ${ie.value ? "is-disabled" : ""}`,
					onClick: i[3] ||= (e) => !ie.value && ae(1)
				}, null, 8, ["custom-class"])) : g("", !0)])
			])),
			l("div", Je, [(n(), u(c, null, p(7, (t) => l("div", {
				key: t,
				class: "wd-month-panel__week"
			}, s(oe.value(t + e.firstDayOfWeek)), 1)), 64))]),
			e.showPanelTitle && e.switchMode === "none" ? (n(), u("div", Ye, s(V.value), 1)) : g("", !0),
			l("div", {
				class: t(`wd-month-panel__container ${I.value ? "wd-month-panel__container--time" : ""}`),
				style: r(se.value),
				"scroll-y": !0,
				"scroll-top": A.value,
				onScroll: i[4] ||= (t) => e.switchMode === "none" ? ge(t) : void 0
			}, [(n(!0), u(c, null, p(ce.value, (t, r) => (n(), u("div", {
				key: r,
				id: `month${r}`
			}, [f(ze, {
				type: e.type,
				date: t.date,
				value: e.value,
				"min-date": e.minDate,
				"max-date": e.maxDate,
				"first-day-of-week": e.firstDayOfWeek,
				formatter: e.formatter,
				"max-range": e.maxRange,
				"range-prompt": e.rangePrompt,
				"allow-same-day": e.allowSameDay,
				"default-time": e.defaultTime,
				showTitle: e.switchMode === "none" && r !== 0,
				onChange: fe
			}, null, 8, [
				"type",
				"date",
				"value",
				"min-date",
				"max-date",
				"first-day-of-week",
				"formatter",
				"max-range",
				"range-prompt",
				"allow-same-day",
				"default-time",
				"showTitle"
			])], 8, Ze))), 128))], 46, Xe),
			I.value ? (n(), u("div", Qe, [e.type === "datetimerange" ? (n(), u("div", $e, [l("div", et, s(I.value === "start" ? _(k)("startTime") : _(k)("endTime")), 1)])) : g("", !0), l("div", tt, [f(ee, {
				modelValue: M.value,
				"onUpdate:modelValue": i[5] ||= (e) => M.value = e,
				type: "time",
				"item-height": e.itemHeight,
				"visible-item-count": e.visibleItemCount,
				"immediate-change": e.immediateChange,
				filter: e.timeFilter,
				formatter: ue,
				"use-second": !e.hideSecond,
				onChange: pe,
				onPickstart: me,
				onPickend: he
			}, null, 8, [
				"modelValue",
				"item-height",
				"visible-item-count",
				"immediate-change",
				"filter",
				"use-second"
			])])])) : g("", !0)
		]));
	}
}), $ = /* @__PURE__ */ new Date(), rt = new Date($.getFullYear(), $.getMonth() - 6, $.getDate()).getTime(), it = new Date($.getFullYear(), $.getMonth() + 6, $.getDate(), 23, 59, 59).getTime(), at = /*@__PURE__*/ d({
	name: "wd-calendar-view",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...M,
		modelValue: k([
			Number,
			Array,
			null
		]),
		type: j("date"),
		minDate: O(rt),
		maxDate: O(it),
		firstDayOfWeek: O(0),
		formatter: Function,
		maxRange: Number,
		rangePrompt: String,
		allowSameDay: A(!1),
		showPanelTitle: A(!0),
		defaultTime: {
			type: [String, Array],
			default: "00:00:00"
		},
		panelHeight: O(316),
		timeFilter: Function,
		timeItemHeight: O(44),
		timeVisibleItemCount: O(3),
		hideSecond: A(!1),
		immediateChange: A(!1),
		switchMode: j("none")
	},
	emits: [
		"change",
		"update:modelValue",
		"pickstart",
		"pickend"
	],
	setup(e, { expose: r, emit: o }) {
		let s = e, c = o, l = i([]), d = i(), f = i();
		a(() => s.defaultTime, (e) => {
			l.value = ce(e);
		}, {
			deep: !0,
			immediate: !0
		});
		function p() {
			let e = h();
			e.scrollIntoView && e.scrollIntoView();
		}
		function h() {
			return s.type.indexOf("month") > -1 ? d.value : f.value;
		}
		function g({ value: e }) {
			c("update:modelValue", e), c("change", { value: e });
		}
		function _() {
			c("pickstart");
		}
		function v() {
			c("pickend");
		}
		return r({ scrollIntoView: p }), (e, r) => (n(), u("div", { class: t(`wd-calendar-view ${e.customClass}`) }, [e.type === "month" || e.type === "monthrange" ? (n(), m(ke, {
			key: 0,
			ref_key: "yearPanelRef",
			ref: d,
			type: e.type,
			value: e.modelValue,
			"min-date": e.minDate,
			"max-date": e.maxDate,
			formatter: e.formatter,
			"max-range": e.maxRange,
			"range-prompt": e.rangePrompt,
			"allow-same-day": e.allowSameDay,
			"show-panel-title": e.showPanelTitle,
			"default-time": l.value,
			"panel-height": e.panelHeight,
			"switch-mode": e.switchMode,
			onChange: g
		}, null, 8, [
			"type",
			"value",
			"min-date",
			"max-date",
			"formatter",
			"max-range",
			"range-prompt",
			"allow-same-day",
			"show-panel-title",
			"default-time",
			"panel-height",
			"switch-mode"
		])) : (n(), m(nt, {
			key: 1,
			ref_key: "monthPanelRef",
			ref: f,
			type: e.type,
			value: e.modelValue,
			"min-date": e.minDate,
			"max-date": e.maxDate,
			"first-day-of-week": e.firstDayOfWeek,
			formatter: e.formatter,
			"max-range": e.maxRange,
			"range-prompt": e.rangePrompt,
			"allow-same-day": e.allowSameDay,
			"show-panel-title": e.showPanelTitle,
			"default-time": l.value,
			"panel-height": e.panelHeight,
			"immediate-change": e.immediateChange,
			"time-filter": e.timeFilter,
			"hide-second": e.hideSecond,
			"item-height": e.timeItemHeight,
			"visible-item-count": e.timeVisibleItemCount,
			"switch-mode": e.switchMode,
			onChange: g,
			onPickstart: _,
			onPickend: v
		}, null, 8, [
			"type",
			"value",
			"min-date",
			"max-date",
			"first-day-of-week",
			"formatter",
			"max-range",
			"range-prompt",
			"allow-same-day",
			"show-panel-title",
			"default-time",
			"panel-height",
			"immediate-change",
			"time-filter",
			"hide-second",
			"item-height",
			"visible-item-count",
			"switch-mode"
		]))], 2));
	}
}), ot = /* @__PURE__ */ e({ default: () => st }), st = at;
//#endregion
export { V as i, ot as n, X as r, st as t };
