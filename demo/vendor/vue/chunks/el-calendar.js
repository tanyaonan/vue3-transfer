globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { r as e } from "./shared/rolldown-runtime.js";
import { C as t, D as n, Dt as r, Et as i, Ft as a, G as o, H as s, M as c, Mt as l, Nt as u, Ot as d, S as f, T as p, Tt as m, W as h, _ as g, b as _, jt as v, p as y, tt as b, ut as x, v as S, w as C, x as w, y as T, yt as E } from "./vue.runtime.js";
import { t as D } from "./shared/element-plus/utils/vue/install.js";
import { n as O, r as k } from "./shared/element-plus/constants/event.js";
import { n as A, r as j } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as M } from "./shared/element-plus/utils/error.js";
import { r as N } from "./shared/element-plus/hooks/use-namespace.js";
import { n as P } from "./shared/element-plus/hooks/use-locale.js";
import { n as F, t as I } from "./el-button.js";
import { t as L } from "./shared/dayjs.js";
import { g as R, t as z } from "./el-time-picker/utils.js";
import { t as B } from "./shared/element-plus/constants/date.js";
import { t as V } from "./shared/dayjs/localeData.js";
import { n as H } from "./el-select.js";
var U = A({
	modelValue: { type: Date },
	range: {
		type: j(Array),
		validator: (e) => m(e) && e.length === 2 && e.every((e) => i(e))
	},
	controllerType: {
		type: String,
		values: ["button", "select"],
		default: "button"
	},
	formatter: { type: j(Function) }
}), W = {
	[k]: (e) => i(e),
	[O]: (e) => i(e)
}, G = (e, t) => {
	let n = e.subtract(1, "month").endOf("month").date();
	return R(t).map((e, r) => n - (t - r - 1));
}, K = (e) => R(e.daysInMonth()).map((e, t) => t + 1), q = (e) => R(e.length / 7).map((t) => {
	let n = t * 7;
	return e.slice(n, n + 7);
}), J = A({
	selectedDay: { type: j(Object) },
	range: { type: j(Array) },
	date: {
		type: j(Object),
		required: !0
	},
	hideHeader: { type: Boolean }
}), Y = { pick: (e) => d(e) }, X = /* @__PURE__ */ e(L(), 1), ee = /* @__PURE__ */ e(V(), 1), te = (e, t) => {
	X.default.extend(ee.default);
	let n = X.default.localeData().firstDayOfWeek(), { t: r, lang: i } = P(), a = (0, X.default)().locale(i.value), o = g(() => !!e.range && !!e.range.length), s = g(() => {
		let t = [];
		if (o.value) {
			let [n, r] = e.range, i = R(r.date() - n.date() + 1).map((e) => ({
				text: n.date() + e,
				type: "current"
			})), a = i.length % 7;
			a = a === 0 ? 0 : 7 - a;
			let o = R(a).map((e, t) => ({
				text: t + 1,
				type: "next"
			}));
			t = i.concat(o);
		} else {
			let r = e.date.startOf("month").day(), i = G(e.date, (r - n + 7) % 7).map((e) => ({
				text: e,
				type: "prev"
			})), a = K(e.date).map((e) => ({
				text: e,
				type: "current"
			}));
			t = [...i, ...a];
			let o = R(7 - (t.length % 7 || 7)).map((e, t) => ({
				text: t + 1,
				type: "next"
			}));
			t = t.concat(o);
		}
		return q(t);
	}), c = g(() => {
		let e = n;
		return e === 0 ? B.map((e) => r(`el.datepicker.weeks.${e}`)) : B.slice(e).concat(B.slice(0, e)).map((e) => r(`el.datepicker.weeks.${e}`));
	}), l = (t, n) => {
		switch (n) {
			case "prev": return e.date.startOf("month").subtract(1, "month").date(t);
			case "next": return e.date.startOf("month").add(1, "month").date(t);
			case "current": return e.date.date(t);
		}
	};
	return {
		now: a,
		isInRange: o,
		rows: s,
		weekDays: c,
		getFormattedDate: l,
		handlePickDay: ({ text: e, type: n }) => {
			t("pick", l(e, n));
		},
		getSlotData: ({ text: t, type: n }) => {
			let r = l(t, n);
			return {
				isSelected: r.isSame(e.selectedDay),
				type: `${n}-month`,
				day: r.format(z),
				date: r.toDate()
			};
		}
	};
}, ne = { key: 0 }, re = ["onClick"], Z = /* @__PURE__ */ p({
	name: "DateTable",
	__name: "date-table",
	props: J,
	emits: Y,
	setup(e, { expose: t, emit: n }) {
		let r = e, { isInRange: i, now: c, rows: u, weekDays: d, getFormattedDate: f, handlePickDay: p, getSlotData: m } = te(r, n), g = N("calendar-table"), v = N("calendar-day"), b = ({ text: e, type: t }) => {
			let n = [t];
			if (t === "current") {
				let i = f(e, t);
				i.isSame(r.selectedDay, "day") && n.push(v.is("selected")), i.isSame(c, "day") && n.push(v.is("today"));
			}
			return n;
		};
		return t({ getFormattedDate: f }), (t, n) => (s(), w("table", {
			class: l([E(g).b(), E(g).is("range", E(i))]),
			cellspacing: "0",
			cellpadding: "0"
		}, [e.hideHeader ? _("v-if", !0) : (s(), w("thead", ne, [S("tr", null, [(s(!0), w(y, null, h(E(d), (e) => (s(), w("th", {
			key: e,
			scope: "col"
		}, a(e), 1))), 128))])])), S("tbody", null, [(s(!0), w(y, null, h(E(u), (n, r) => (s(), w("tr", {
			key: r,
			class: l({
				[E(g).e("row")]: !0,
				[E(g).em("row", "hide-border")]: r === 0 && e.hideHeader
			})
		}, [(s(!0), w(y, null, h(n, (e, n) => (s(), w("td", {
			key: n,
			class: l(b(e)),
			onClick: (t) => E(p)(e)
		}, [S("div", { class: l(E(v).b()) }, [o(t.$slots, "date-cell", { data: E(m)(e) }, () => [S("span", null, a(e.text), 1)])], 2)], 10, re))), 128))], 2))), 128))])], 2));
	}
}), ie = (e, t) => {
	let n = e.endOf("month"), r = t.startOf("month"), i = n.isSame(r, "week") ? r.add(1, "week") : r;
	return [[e, n], [i.startOf("week"), t]];
}, ae = (e, t) => {
	let n = e.endOf("month"), r = e.add(1, "month").startOf("month"), i = n.isSame(r, "week") ? r.add(1, "week") : r, a = i.endOf("month"), o = t.startOf("month"), s = a.isSame(o, "week") ? o.add(1, "week") : o;
	return [
		[e, n],
		[i.startOf("week"), a],
		[s.startOf("week"), t]
	];
}, oe = (e, t, n) => {
	let { lang: r } = P(), a = x(), o = (0, X.default)().locale(r.value), s = g({
		get() {
			return e.modelValue ? l.value : a.value;
		},
		set(e) {
			if (!e) return;
			a.value = e;
			let n = e.toDate();
			t(O, n), t(k, n);
		}
	}), c = g(() => {
		if (!e.range || !m(e.range) || e.range.length !== 2 || e.range.some((e) => !i(e))) return [];
		let [t, a] = e.range.map((e) => (0, X.default)(e).locale(r.value));
		return t.isAfter(a) ? (M(n, "end time should be greater than start time"), []) : t.isSame(a, "month") || t.add(1, "month").isSame(a, "month") ? h(t, a) : (M(n, "start time and end time interval must not exceed two months"), []);
	}), l = g(() => e.modelValue ? (0, X.default)(e.modelValue).locale(r.value) : s.value || (c.value.length ? c.value[0][0] : o)), u = g(() => l.value.subtract(1, "month").date(1)), d = g(() => l.value.add(1, "month").date(1)), f = g(() => l.value.subtract(1, "year").date(1)), p = g(() => l.value.add(1, "year").date(1)), h = (e, t) => {
		let r = e.startOf("week"), i = t.endOf("week"), a = r.get("month"), o = i.get("month");
		return a === o ? [[r, i]] : (a + 1) % 12 === o ? ie(r, i) : a + 2 === o || (a + 1) % 11 === o ? ae(r, i) : (M(n, "start time and end time interval must not exceed two months"), []);
	}, _ = (e) => {
		s.value = e;
	}, v = (e) => {
		let t = {
			"prev-month": u.value,
			"next-month": d.value,
			"prev-year": f.value,
			"next-year": p.value,
			today: o
		}[e];
		t.isSame(l.value, "day") || _(t);
	};
	return {
		calculateValidatedDateRange: h,
		date: l,
		realSelectedDay: s,
		pickDay: _,
		selectDate: v,
		validatedRange: c,
		handleDateChange: (e) => {
			e === "today" ? v("today") : _(e);
		}
	};
}, se = /* @__PURE__ */ p({
	name: "SelectController",
	__name: "select-controller",
	props: A({
		date: {
			type: j(Object),
			required: !0
		},
		formatter: { type: j(Function) }
	}),
	emits: { "date-change": (e) => d(e) || v(e) },
	setup(e, { emit: n }) {
		let i = e, o = n, c = N("calendar-select"), { t: u, lang: d } = P(), f = Array.from({ length: 12 }, (e, t) => {
			let n = t + 1;
			return {
				value: n,
				label: r(i.formatter) ? i.formatter(n, "month") : n
			};
		}), p = g(() => i.date.year()), m = g(() => i.date.month() + 1), h = g(() => {
			let e = [];
			for (let t = -10; t < 10; t++) {
				let n = p.value + t;
				if (n > 0) {
					let t = r(i.formatter) ? i.formatter(n, "year") : n;
					e.push({
						value: n,
						label: t
					});
				}
			}
			return e;
		}), _ = (e) => {
			o("date-change", (0, X.default)(new Date(e, m.value - 1, 1)).locale(d.value));
		}, v = (e) => {
			o("date-change", (0, X.default)(new Date(p.value, e - 1, 1)).locale(d.value));
		}, x = () => {
			o("date-change", "today");
		};
		return (e, n) => (s(), w(y, null, [
			C(E(H), {
				"model-value": p.value,
				size: "small",
				class: l(E(c).e("year")),
				"validate-event": !1,
				options: h.value,
				onChange: _
			}, null, 8, [
				"model-value",
				"class",
				"options"
			]),
			C(E(H), {
				"model-value": m.value,
				size: "small",
				class: l(E(c).e("month")),
				"validate-event": !1,
				options: E(f),
				onChange: v
			}, null, 8, [
				"model-value",
				"class",
				"options"
			]),
			C(E(I), {
				size: "small",
				onClick: x
			}, {
				default: b(() => [t(a(E(u)("el.datepicker.today")), 1)]),
				_: 1
			})
		], 64));
	}
}), Q = "ElCalendar", $ = D(/* @__PURE__ */ p({
	name: Q,
	__name: "calendar",
	props: U,
	emits: W,
	setup(e, { expose: r, emit: i }) {
		let d = N("calendar"), { calculateValidatedDateRange: p, date: m, pickDay: v, realSelectedDay: x, selectDate: D, validatedRange: O, handleDateChange: k } = oe(e, i, Q), { t: A } = P(), j = g(() => {
			let e = `el.datepicker.month${m.value.format("M")}`;
			return `${m.value.year()} ${A("el.datepicker.year")} ${A(e)}`;
		});
		return r({
			selectedDay: x,
			pickDay: v,
			selectDate: D,
			calculateValidatedDateRange: p
		}), (r, i) => (s(), w("div", { class: l(E(d).b()) }, [S("div", { class: l(E(d).e("header")) }, [o(r.$slots, "header", { date: j.value }, () => [S("div", { class: l(E(d).e("title")) }, a(j.value), 3), E(O).length === 0 && e.controllerType === "button" ? (s(), w("div", {
			key: 0,
			class: l(E(d).e("button-group"))
		}, [C(E(F), null, {
			default: b(() => [
				C(E(I), {
					size: "small",
					onClick: i[0] ||= (e) => E(D)("prev-month")
				}, {
					default: b(() => [t(a(E(A)("el.datepicker.prevMonth")), 1)]),
					_: 1
				}),
				C(E(I), {
					size: "small",
					onClick: i[1] ||= (e) => E(D)("today")
				}, {
					default: b(() => [t(a(E(A)("el.datepicker.today")), 1)]),
					_: 1
				}),
				C(E(I), {
					size: "small",
					onClick: i[2] ||= (e) => E(D)("next-month")
				}, {
					default: b(() => [t(a(E(A)("el.datepicker.nextMonth")), 1)]),
					_: 1
				})
			]),
			_: 1
		})], 2)) : E(O).length === 0 && e.controllerType === "select" ? (s(), w("div", {
			key: 1,
			class: l(E(d).e("select-controller"))
		}, [C(se, {
			date: E(m),
			formatter: e.formatter,
			onDateChange: E(k)
		}, null, 8, [
			"date",
			"formatter",
			"onDateChange"
		])], 2)) : _("v-if", !0)])], 2), E(O).length === 0 ? (s(), w("div", {
			key: 0,
			class: l(E(d).e("body"))
		}, [C(Z, {
			date: E(m),
			"selected-day": E(x),
			onPick: E(v)
		}, f({ _: 2 }, [r.$slots["date-cell"] ? {
			name: "date-cell",
			fn: b((e) => [o(r.$slots, "date-cell", u(n(e)))]),
			key: "0"
		} : void 0]), 1032, [
			"date",
			"selected-day",
			"onPick"
		])], 2)) : (s(), w("div", {
			key: 1,
			class: l(E(d).e("body"))
		}, [(s(!0), w(y, null, h(E(O), (e, t) => (s(), T(Z, {
			key: t,
			date: e[0],
			"selected-day": E(x),
			range: e,
			"hide-header": t !== 0,
			onPick: E(v)
		}, f({ _: 2 }, [r.$slots["date-cell"] ? {
			name: "date-cell",
			fn: b((e) => [o(r.$slots, "date-cell", c({ ref_for: !0 }, e))]),
			key: "0"
		} : void 0]), 1032, [
			"date",
			"selected-day",
			"range",
			"hide-header",
			"onPick"
		]))), 128))], 2))], 2));
	}
}));
//#endregion
export { $ as ElCalendar, $ as default, W as calendarEmits, U as calendarProps };
