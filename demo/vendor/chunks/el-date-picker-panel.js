globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t, t as n } from "./shared/rolldown-runtime.js";
import { $ as r, A as i, C as a, Dt as o, E as s, Ft as c, G as l, H as u, I as d, M as f, Mt as p, N as m, T as h, Tt as g, U as _, W as v, X as y, Z as b, _ as x, b as S, ct as ee, d as C, gt as w, ht as T, j as E, jt as D, l as O, nt as te, p as ne, tt as k, u as re, ut as A, v as j, w as M, x as N, y as P, yt as F } from "./vue.runtime.js";
import { t as I } from "./shared/lodash/flatten.js";
import { t as L } from "./shared/element-plus/utils/vue/install.js";
import { t as R } from "./shared/lodash/omit.js";
import { t as z } from "./shared/lodash/isEqual.js";
import { s as ie } from "./shared/element-plus/utils/types.js";
import { r as B } from "./shared/element-plus/constants/event.js";
import { n as V, r as H } from "./shared/element-plus/utils/vue/props/runtime.js";
import { i as ae } from "./shared/element-plus/utils/dom/style.js";
import { r as U } from "./shared/element-plus/hooks/use-namespace.js";
import { _ as oe, g as se, n as W, r as ce } from "./shared/element-plus-icons.js";
import { t as G } from "./el-icon.js";
import { t as le } from "./el-input.js";
import { a as K, n as ue } from "./shared/element-plus/constants/aria.js";
import { n as de } from "./el-form/hooks/use-form-common-props.js";
import { n as q, t as J } from "./shared/element-plus/utils/arrays.js";
import { n as fe } from "./shared/element-plus/hooks/use-locale.js";
import { t as pe } from "./el-button.js";
import { t as me } from "./shared/dayjs.js";
import { d as he, f as ge, g as _e, i as ve, o as ye } from "./el-time-picker/utils.js";
import { n as be } from "./shared/element-plus/constants/date.js";
import { t as xe } from "./shared/dayjs/localeData.js";
import { t as Se } from "./shared/element-plus/directives/click-outside.js";
import { o as Ce, s as we, t as Te } from "./el-time-picker/props/shared.js";
import { t as Y } from "./shared/dayjs/customParseFormat.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/date-picker-panel/src/props/date-picker-panel.mjs
var Ee = V({
	valueFormat: String,
	dateFormat: String,
	timeFormat: String,
	disabled: {
		type: Boolean,
		default: void 0
	},
	modelValue: {
		type: H([
			Date,
			Array,
			String,
			Number
		]),
		default: ""
	},
	defaultValue: { type: H([Date, Array]) },
	defaultTime: { type: H([Date, Array]) },
	isRange: Boolean,
	...we,
	disabledDate: { type: Function },
	cellClassName: { type: Function },
	shortcuts: {
		type: Array,
		default: () => []
	},
	arrowControl: Boolean,
	unlinkPanels: Boolean,
	showNow: {
		type: Boolean,
		default: !0
	},
	showConfirm: Boolean,
	showFooter: Boolean,
	showWeekNumber: Boolean,
	type: {
		type: H(String),
		default: "date"
	},
	clearable: {
		type: Boolean,
		default: !0
	},
	border: {
		type: Boolean,
		default: !0
	},
	editable: {
		type: Boolean,
		default: !0
	}
}), De = Symbol("rootPickerContextKey"), Oe = "ElIsDefaultFormat", ke = [
	"date",
	"dates",
	"year",
	"years",
	"month",
	"months",
	"week",
	"range"
], X = V({
	cellClassName: { type: H(Function) },
	disabledDate: { type: H(Function) },
	date: {
		type: H(Object),
		required: !0
	},
	minDate: { type: H(Object) },
	maxDate: { type: H(Object) },
	parsedValue: { type: H([Object, Array]) },
	rangeState: {
		type: H(Object),
		default: () => ({
			endDate: null,
			selecting: !1
		})
	},
	disabled: Boolean
}), Ae = V({
	type: {
		type: H(String),
		required: !0,
		values: be
	},
	dateFormat: String,
	timeFormat: String,
	showNow: {
		type: Boolean,
		default: !0
	},
	showConfirm: Boolean,
	showFooter: {
		type: Boolean,
		default: !0
	},
	showWeekNumber: Boolean,
	border: Boolean,
	disabled: Boolean,
	editable: {
		type: Boolean,
		default: !0
	}
}), je = V({
	unlinkPanels: Boolean,
	visible: {
		type: Boolean,
		default: !0
	},
	showConfirm: Boolean,
	showFooter: {
		type: Boolean,
		default: !0
	},
	border: Boolean,
	disabled: Boolean,
	parsedValue: { type: H(Array) },
	singlePanel: Boolean
}), Z = (e) => ({
	type: String,
	values: ke,
	default: e
}), Me = V({
	...Ae,
	parsedValue: { type: H([Object, Array]) },
	visible: {
		type: Boolean,
		default: !0
	},
	format: {
		type: String,
		default: ""
	}
}), Q = /* @__PURE__ */ t(me(), 1), Ne = (e) => {
	if (!g(e)) return !1;
	let [t, n] = e;
	return Q.default.isDayjs(t) && Q.default.isDayjs(n) && (0, Q.default)(t).isValid() && (0, Q.default)(n).isValid() && t.isSameOrBefore(n);
}, Pe = (e, { lang: t, step: n = 1, unit: r, unlinkPanels: i }) => {
	let a;
	if (g(e)) {
		let [a, o] = e.map((e) => (0, Q.default)(e).locale(t));
		return i || (o = a.add(n, r)), [a, o];
	} else a = e ? (0, Q.default)(e) : (0, Q.default)();
	return a = a.locale(t), [a, a.add(n, r)];
}, Fe = (e, t, { columnIndexOffset: n, startDate: r, nextEndDate: i, now: a, unit: o, relativeDateGetter: s, setCellMetadata: c, setRowMetadata: l }) => {
	for (let u = 0; u < e.row; u++) {
		let d = t[u];
		for (let t = 0; t < e.column; t++) {
			let l = d[t + n];
			l ||= {
				row: u,
				column: t,
				type: "normal",
				inRange: !1,
				start: !1,
				end: !1
			};
			let f = s(u * e.column + t);
			l.dayjs = f, l.date = f.toDate(), l.timestamp = f.valueOf(), l.type = "normal", l.inRange = !!(r && f.isSameOrAfter(r, o) && i && f.isSameOrBefore(i, o)) || !!(r && f.isSameOrBefore(r, o) && i && f.isSameOrAfter(i, o)), r?.isSameOrAfter(i) ? (l.start = !!i && f.isSame(i, o), l.end = r && f.isSame(r, o)) : (l.start = !!r && f.isSame(r, o), l.end = !!i && f.isSame(i, o)), f.isSame(a, o) && (l.type = "today"), c?.(l, {
				rowIndex: u,
				columnIndex: t
			}), d[t + n] = l;
		}
		l?.(d);
	}
}, Ie = (e, t, n, r) => {
	let i = (0, Q.default)().locale(r).startOf("month").month(n).year(t).hour(e.hour()).minute(e.minute()).second(e.second());
	return _e(i.daysInMonth()).map((e) => i.add(e, "day").toDate());
}, Le = (e, t, n, r, i) => {
	let a = (0, Q.default)().year(t).month(n).startOf("month").hour(e.hour()).minute(e.minute()).second(e.second()), o = Ie(e, t, n, r).find((e) => !i?.(e));
	return o ? (0, Q.default)(o).locale(r) : a.locale(r);
}, Re = (e, t, n) => {
	let r = e.year();
	if (!n?.(e.toDate())) return e.locale(t);
	let i = e.month();
	if (!Ie(e, r, i, t).every(n)) return Le(e, r, i, t, n);
	for (let i = 0; i < 12; i++) if (!Ie(e, r, i, t).every(n)) return Le(e, r, i, t, n);
	return e;
}, ze = (e, t, n, r) => {
	if (g(e)) return e.map((e) => ze(e, t, n, r));
	if (D(e)) {
		let n = r?.value ? (0, Q.default)(e) : (0, Q.default)(e, t);
		if (!n.isValid()) return n;
	}
	return (0, Q.default)(e, t).locale(n);
}, Be = V({
	...X,
	showWeekNumber: Boolean,
	selectionMode: Z("date")
}), Ve = [
	"changerange",
	"pick",
	"select"
], He = (e = "") => ["normal", "today"].includes(e), Ue = (e, t) => {
	let { lang: n } = fe(), i = A(), a = A(), o = A(), s = A(), c = A([
		[],
		[],
		[],
		[],
		[],
		[]
	]), l = !1, u = e.date.$locale().weekStart || 7, d = e.date.locale("en").localeData().weekdaysShort().map((e) => e.toLowerCase()), f = x(() => u > 3 ? 7 - u : -u), p = x(() => {
		let t = e.date.startOf("month");
		return t.subtract(t.day() || 7, "day");
	}), h = x(() => d.concat(d).slice(u, u + 7)), _ = x(() => I(F(C)).some((e) => e.isCurrent)), v = x(() => {
		let t = e.date.startOf("month");
		return {
			startOfMonthDay: t.day() || 7,
			dateCountOfMonth: t.daysInMonth(),
			dateCountOfLastMonth: t.subtract(1, "month").daysInMonth()
		};
	}), y = x(() => e.selectionMode === "dates" ? J(e.parsedValue) : []), b = (e, { count: t, rowIndex: n, columnIndex: r }) => {
		let { startOfMonthDay: i, dateCountOfMonth: a, dateCountOfLastMonth: o } = F(v), s = F(f);
		if (n >= 0 && n <= 1) {
			let a = i + s < 0 ? 7 + i + s : i + s;
			if (r + n * 7 >= a) return e.text = t, !0;
			e.text = o - (a - r % 7) + 1 + n * 7, e.type = "prev-month";
		} else return t <= a ? e.text = t : (e.text = t - a, e.type = "next-month"), !0;
		return !1;
	}, S = (t, { columnIndex: n, rowIndex: r }, i) => {
		let { disabledDate: a, cellClassName: o } = e, s = F(y), c = b(t, {
			count: i,
			rowIndex: r,
			columnIndex: n
		}), l = t.dayjs.toDate();
		return t.selected = s.find((e) => e.isSame(t.dayjs, "day")), t.isSelected = !!t.selected, t.isCurrent = T(t), t.disabled = a?.(l), t.customClass = o?.(l), c;
	}, ee = (t) => {
		if (e.selectionMode === "week") {
			let [n, r] = e.showWeekNumber ? [1, 7] : [0, 6], i = L(t[n + 1]);
			t[n].inRange = i, t[n].start = i, t[r].inRange = i, t[r].end = i;
		}
	}, C = x(() => {
		let { minDate: t, maxDate: r, rangeState: i, showWeekNumber: a } = e, o = F(f), s = F(c), l = 1;
		if (Fe({
			row: 6,
			column: 7
		}, s, {
			startDate: t,
			columnIndexOffset: +!!a,
			nextEndDate: i.endDate || r || i.selecting && t || null,
			now: (0, Q.default)().locale(F(n)).startOf("day"),
			unit: "day",
			relativeDateGetter: (e) => F(p).add(e - o, "day"),
			setCellMetadata: (...e) => {
				S(...e, l) && (l += 1);
			},
			setRowMetadata: ee
		}), a) for (let e = 0; e < 6; e++) s[e][1].dayjs && (s[e][0] = {
			type: "week",
			text: s[e][1].dayjs.week()
		});
		return s;
	});
	r(() => e.date, async () => {
		F(i)?.contains(document.activeElement) && (await m(), await w());
	});
	let w = async () => F(a)?.focus(), T = (t) => e.selectionMode === "date" && He(t.type) && E(t, e.parsedValue), E = (t, r) => r ? (0, Q.default)(r).locale(F(n)).isSame(e.date.date(Number(t.text)), "day") : !1, D = (t, n) => {
		let r = F(v).startOfMonthDay, i = F(f), a = r + i < 0 ? 7 + r + i : r + i, o = t * 7 + (n - +!!e.showWeekNumber);
		return e.date.startOf("month").subtract(a, "day").add(o, "day");
	}, O = (n) => {
		if (!e.rangeState.selecting) return;
		let r = n.target;
		if (r.tagName === "SPAN" && (r = r.parentNode?.parentNode), r.tagName === "DIV" && (r = r.parentNode), r.tagName !== "TD") return;
		let i = r.parentNode.rowIndex - 1, a = r.cellIndex;
		F(C)[i][a].disabled || (i !== F(o) || a !== F(s)) && (o.value = i, s.value = a, t("changerange", {
			selecting: !0,
			endDate: D(i, a)
		}));
	}, te = (e) => !F(_) && e?.text === 1 && He(e.type) || e.isCurrent, ne = (t) => {
		l || F(_) || e.selectionMode !== "date" || P(t, !0);
	}, k = (e) => {
		e.target.closest("td") && (l = !0);
	}, re = (e) => {
		e.target.closest("td") && (l = !1);
	}, j = (n) => {
		!e.rangeState.selecting || !e.minDate ? (t("pick", {
			minDate: n,
			maxDate: null
		}), t("select", !0)) : (n >= e.minDate ? t("pick", {
			minDate: e.minDate,
			maxDate: n
		}) : t("pick", {
			minDate: n,
			maxDate: e.minDate
		}), t("select", !1));
	}, M = (e) => {
		let n = e.week(), r = `${e.year()}w${n}`;
		t("pick", {
			year: e.year(),
			week: n,
			value: r,
			date: e.startOf("week")
		});
	}, N = (n, r) => {
		t("pick", r ? J(e.parsedValue).filter((e) => e?.valueOf() !== n.valueOf()) : J(e.parsedValue).concat([n]));
	}, P = (n, r = !1) => {
		if (e.disabled) return;
		let i = n.target.closest("td");
		if (!i) return;
		let a = i.parentNode.rowIndex - 1, o = i.cellIndex, s = F(C)[a][o];
		if (s.disabled || s.type === "week") return;
		let c = D(a, o);
		switch (e.selectionMode) {
			case "range":
				j(c);
				break;
			case "date":
				t("pick", c, r);
				break;
			case "week":
				M(c);
				break;
			case "dates":
				N(c, !!s.selected);
				break;
			default: break;
		}
	}, L = (t) => {
		if (e.selectionMode !== "week") return !1;
		let n = e.date.startOf("day");
		if (t.type === "prev-month" && (n = n.subtract(1, "month")), t.type === "next-month" && (n = n.add(1, "month")), n = n.date(Number.parseInt(t.text, 10)), e.parsedValue && !g(e.parsedValue)) {
			let t = (e.parsedValue.day() - u + 7) % 7 - 1;
			return e.parsedValue.subtract(t, "day").isSame(n, "day");
		}
		return !1;
	};
	return {
		WEEKS: h,
		rows: C,
		tbodyRef: i,
		currentCellRef: a,
		focus: w,
		isCurrent: T,
		isWeekActive: L,
		isSelectedCell: te,
		handlePickDate: P,
		handleMouseUp: re,
		handleMouseDown: k,
		handleMouseMove: O,
		handleFocus: ne
	};
}, We = (e, { isCurrent: t, isWeekActive: n }) => {
	let r = U("date-table"), { t: i } = fe();
	return {
		tableKls: x(() => [r.b(), r.is("week-mode", e.selectionMode === "week" && !e.disabled)]),
		tableLabel: x(() => i("el.datepicker.dateTablePrompt")),
		weekHeaderClass: r.e("week-header"),
		getCellClasses: (n) => {
			let r = [];
			return He(n.type) && !n.disabled ? (r.push("available"), n.type === "today" && r.push("today")) : r.push(n.type), t(n) && r.push("current"), n.inRange && (He(n.type) || e.selectionMode === "week") && (r.push("in-range"), n.start && r.push("start-date"), n.end && r.push("end-date")), (n.disabled || e.disabled) && r.push("disabled"), n.selected && r.push("selected"), n.customClass && r.push(n.customClass), r.join(" ");
		},
		getRowKls: (e) => [r.e("row"), { current: n(e) }],
		t: i
	};
}, Ge = /* @__PURE__ */ h({
	name: "ElDatePickerCell",
	props: V({ cell: { type: H(Object) } }),
	setup(e) {
		let t = U("date-table-cell"), { slots: n } = i(De);
		return () => {
			let { cell: r } = e;
			return l(n, "default", { ...r }, () => [M("div", { class: t.b() }, [M("span", { class: t.e("text") }, [r?.renderText ?? r?.text])])]);
		};
	}
}), Ke = ["aria-label"], qe = ["aria-label"], Je = [
	"aria-current",
	"aria-selected",
	"tabindex",
	"aria-disabled"
], Ye = /* @__PURE__ */ h({
	__name: "basic-date-table",
	props: Be,
	emits: Ve,
	setup(e, { expose: t, emit: n }) {
		let r = e, { WEEKS: i, rows: a, tbodyRef: o, currentCellRef: s, focus: l, isCurrent: f, isWeekActive: m, isSelectedCell: h, handlePickDate: g, handleMouseUp: _, handleMouseDown: y, handleMouseMove: b, handleFocus: x } = Ue(r, n), { tableLabel: ee, tableKls: C, getCellClasses: w, getRowKls: T, weekHeaderClass: E, t: D } = We(r, {
			isCurrent: f,
			isWeekActive: m
		}), O = !1;
		return d(() => {
			O = !0;
		}), t({ focus: l }), (e, t) => (u(), N("table", {
			"aria-label": F(ee),
			class: p(F(C)),
			cellspacing: "0",
			cellpadding: "0",
			role: "grid",
			onClick: t[1] ||= (...e) => F(g) && F(g)(...e),
			onMousemove: t[2] ||= (...e) => F(b) && F(b)(...e),
			onMousedown: t[3] ||= (...e) => F(y) && F(y)(...e),
			onMouseup: t[4] ||= (...e) => F(_) && F(_)(...e)
		}, [j("tbody", {
			ref_key: "tbodyRef",
			ref: o
		}, [j("tr", null, [e.showWeekNumber ? (u(), N("th", {
			key: 0,
			scope: "col",
			class: p(F(E))
		}, null, 2)) : S("v-if", !0), (u(!0), N(ne, null, v(F(i), (e, t) => (u(), N("th", {
			key: t,
			"aria-label": F(D)("el.datepicker.weeksFull." + e),
			scope: "col"
		}, c(F(D)("el.datepicker.weeks." + e)), 9, qe))), 128))]), (u(!0), N(ne, null, v(F(a), (n, r) => (u(), N("tr", {
			key: r,
			class: p(F(T)(e.showWeekNumber ? n[2] : n[1]))
		}, [(u(!0), N(ne, null, v(n, (n, i) => (u(), N("td", {
			key: `${r}.${i}`,
			ref_for: !0,
			ref: (e) => !F(O) && F(h)(n) && (s.value = e),
			class: p(F(w)(n)),
			"aria-current": n.isCurrent ? "date" : void 0,
			"aria-selected": n.isCurrent,
			tabindex: e.disabled ? void 0 : F(h)(n) ? 0 : -1,
			"aria-disabled": e.disabled,
			onFocus: t[0] ||= (...e) => F(x) && F(x)(...e)
		}, [M(F(Ge), { cell: n }, null, 8, ["cell"])], 42, Je))), 128))], 2))), 128))], 512)], 42, Ke));
	}
}), Xe = V({
	...X,
	selectionMode: Z("month")
}), Ze = ["aria-label"], Qe = [
	"aria-selected",
	"aria-label",
	"tabindex",
	"onKeydown"
], $e = /* @__PURE__ */ h({
	__name: "basic-month-table",
	props: Xe,
	emits: [
		"changerange",
		"pick",
		"select"
	],
	setup(e, { expose: t, emit: n }) {
		let i = e, a = n, o = U("month-table"), { t: s, lang: c } = fe(), l = A(), d = A(), f = A(i.date.locale("en").localeData().monthsShort().map((e) => e.toLowerCase())), h = A([
			[],
			[],
			[]
		]), g = A(), _ = A(), y = x(() => {
			let e = h.value, t = (0, Q.default)().locale(c.value).startOf("month");
			for (let n = 0; n < 3; n++) {
				let r = e[n];
				for (let e = 0; e < 4; e++) {
					let a = r[e] ||= {
						row: n,
						column: e,
						type: "normal",
						inRange: !1,
						start: !1,
						end: !1,
						text: -1,
						disabled: !1,
						isSelected: !1,
						customClass: void 0,
						date: void 0,
						dayjs: void 0,
						isCurrent: void 0,
						selected: void 0,
						renderText: void 0,
						timestamp: void 0
					};
					a.type = "normal";
					let o = n * 4 + e, s = i.date.startOf("year").month(o), c = i.rangeState.endDate || i.maxDate || i.rangeState.selecting && i.minDate || null;
					a.inRange = !!(i.minDate && s.isSameOrAfter(i.minDate, "month") && c && s.isSameOrBefore(c, "month")) || !!(i.minDate && s.isSameOrBefore(i.minDate, "month") && c && s.isSameOrAfter(c, "month")), i.minDate?.isSameOrAfter(c) ? (a.start = !!(c && s.isSame(c, "month")), a.end = i.minDate && s.isSame(i.minDate, "month")) : (a.start = !!(i.minDate && s.isSame(i.minDate, "month")), a.end = !!(c && s.isSame(c, "month"))), t.isSame(s) && (a.type = "today");
					let l = s.toDate();
					a.text = o, a.disabled = i.disabledDate?.(l) || !1, a.date = l, a.customClass = i.cellClassName?.(l), a.dayjs = s, a.timestamp = s.valueOf(), a.isSelected = ee(a);
				}
			}
			return e;
		}), b = () => {
			d.value?.focus();
		}, S = (e) => {
			let t = {}, n = i.date.year(), r = /* @__PURE__ */ new Date(), a = e.text;
			return t.disabled = i.disabled || (i.disabledDate ? Ie(i.date, n, a, c.value).every(i.disabledDate) : !1), t.current = J(i.parsedValue).some((e) => Q.default.isDayjs(e) && e.year() === n && e.month() === a), t.today = r.getFullYear() === n && r.getMonth() === a, e.customClass && (t[e.customClass] = !0), e.inRange && (t["in-range"] = !0, e.start && (t["start-date"] = !0), e.end && (t["end-date"] = !0)), t;
		}, ee = (e) => {
			let t = i.date.year(), n = e.text;
			return J(i.date).some((e) => e.year() === t && e.month() === n);
		}, w = (e) => {
			if (!i.rangeState.selecting) return;
			let t = e.target;
			if (t.tagName === "SPAN" && (t = t.parentNode?.parentNode), t.tagName === "DIV" && (t = t.parentNode), t.tagName !== "TD") return;
			let n = t.parentNode.rowIndex, r = t.cellIndex;
			y.value[n][r].disabled || (n !== g.value || r !== _.value) && (g.value = n, _.value = r, a("changerange", {
				selecting: !0,
				endDate: i.date.startOf("year").month(n * 4 + r)
			}));
		}, T = (e) => {
			if (i.disabled) return;
			let t = e.target?.closest("td");
			if (t?.tagName !== "TD" || ae(t, "disabled")) return;
			let n = t.cellIndex, r = t.parentNode.rowIndex * 4 + n, o = i.date.startOf("year").month(r);
			if (i.selectionMode === "months") {
				if (e.type === "keydown") {
					a("pick", J(i.parsedValue), !1);
					return;
				}
				let n = Le(i.date, i.date.year(), r, c.value, i.disabledDate);
				a("pick", ae(t, "current") ? J(i.parsedValue).filter((e) => e?.year() !== n.year() || e?.month() !== n.month()) : J(i.parsedValue).concat([(0, Q.default)(n)]));
			} else i.selectionMode === "range" ? i.rangeState.selecting ? (i.minDate && o >= i.minDate ? a("pick", {
				minDate: i.minDate,
				maxDate: o
			}) : a("pick", {
				minDate: o,
				maxDate: i.minDate
			}), a("select", !1)) : (a("pick", {
				minDate: o,
				maxDate: null
			}), a("select", !0)) : a("pick", r);
		};
		return r(() => i.date, async () => {
			l.value?.contains(document.activeElement) && (await m(), d.value?.focus());
		}), t({ focus: b }), (e, t) => (u(), N("table", {
			role: "grid",
			"aria-label": F(s)("el.datepicker.monthTablePrompt"),
			class: p(F(o).b()),
			onClick: T,
			onMousemove: w
		}, [j("tbody", {
			ref_key: "tbodyRef",
			ref: l
		}, [(u(!0), N(ne, null, v(y.value, (e, t) => (u(), N("tr", { key: t }, [(u(!0), N(ne, null, v(e, (e, t) => (u(), N("td", {
			key: t,
			ref_for: !0,
			ref: (t) => e.isSelected && (d.value = t),
			class: p(S(e)),
			"aria-selected": !!e.isSelected,
			"aria-label": F(s)(`el.datepicker.month${+e.text + 1}`),
			tabindex: e.isSelected ? 0 : -1,
			onKeydown: [re(C(T, ["prevent", "stop"]), ["space"]), re(C(T, ["prevent", "stop"]), ["enter"])]
		}, [M(F(Ge), { cell: {
			...e,
			renderText: F(s)("el.datepicker.months." + f.value[e.text])
		} }, null, 8, ["cell"])], 42, Qe))), 128))]))), 128))], 512)], 42, Ze));
	}
}), et = V({
	...X,
	selectionMode: Z("year")
}), tt = ["aria-label"], $ = [
	"aria-selected",
	"aria-label",
	"tabindex",
	"onKeydown"
], nt = /* @__PURE__ */ h({
	__name: "basic-year-table",
	props: et,
	emits: [
		"changerange",
		"pick",
		"select"
	],
	setup(e, { expose: t, emit: n }) {
		let i = (e, t) => {
			let n = (0, Q.default)(String(e)).locale(t).startOf("year");
			return _e(n.endOf("year").dayOfYear()).map((e) => n.add(e, "day").toDate());
		}, a = e, o = n, s = U("year-table"), { t: c, lang: l } = fe(), d = A(), f = A(), h = x(() => Math.floor(a.date.year() / 10) * 10), g = A([
			[],
			[],
			[]
		]), _ = A(), y = A(), b = x(() => {
			let e = g.value, t = (0, Q.default)().locale(l.value).startOf("year");
			for (let n = 0; n < 3; n++) {
				let r = e[n];
				for (let e = 0; e < 4 && !(n * 4 + e >= 10); e++) {
					let i = r[e];
					i ||= {
						row: n,
						column: e,
						type: "normal",
						inRange: !1,
						start: !1,
						end: !1,
						text: -1,
						disabled: !1,
						isSelected: !1,
						customClass: void 0,
						date: void 0,
						dayjs: void 0,
						isCurrent: void 0,
						selected: void 0,
						renderText: void 0,
						timestamp: void 0
					}, i.type = "normal";
					let o = n * 4 + e + h.value, s = (0, Q.default)().year(o), c = a.rangeState.endDate || a.maxDate || a.rangeState.selecting && a.minDate || null;
					i.inRange = !!(a.minDate && s.isSameOrAfter(a.minDate, "year") && c && s.isSameOrBefore(c, "year")) || !!(a.minDate && s.isSameOrBefore(a.minDate, "year") && c && s.isSameOrAfter(c, "year")), a.minDate?.isSameOrAfter(c) ? (i.start = !!(c && s.isSame(c, "year")), i.end = !!(a.minDate && s.isSame(a.minDate, "year"))) : (i.start = !!(a.minDate && s.isSame(a.minDate, "year")), i.end = !!(c && s.isSame(c, "year"))), t.isSame(s) && (i.type = "today"), i.text = o;
					let l = s.toDate();
					i.disabled = a.disabledDate?.(l) || !1, i.date = l, i.customClass = a.cellClassName?.(l), i.dayjs = s, i.timestamp = s.valueOf(), i.isSelected = w(i), r[e] = i;
				}
			}
			return e;
		}), S = () => {
			f.value?.focus();
		}, ee = (e) => {
			let t = {}, n = (0, Q.default)().locale(l.value), r = e.text;
			return t.disabled = a.disabled || (a.disabledDate ? i(r, l.value).every(a.disabledDate) : !1), t.today = n.year() === r, t.current = J(a.parsedValue).some((e) => e.year() === r), e.customClass && (t[e.customClass] = !0), e.inRange && (t["in-range"] = !0, e.start && (t["start-date"] = !0), e.end && (t["end-date"] = !0)), t;
		}, w = (e) => {
			let t = e.text;
			return J(a.date).some((e) => e.year() === t);
		}, T = (e) => {
			if (a.disabled) return;
			let t = e.target?.closest("td");
			if (!t || !t.textContent || ae(t, "disabled")) return;
			let n = t.cellIndex, r = t.parentNode.rowIndex * 4 + n + h.value, i = (0, Q.default)().year(r);
			if (a.selectionMode === "range") a.rangeState.selecting ? (a.minDate && i >= a.minDate ? o("pick", {
				minDate: a.minDate,
				maxDate: i
			}) : o("pick", {
				minDate: i,
				maxDate: a.minDate
			}), o("select", !1)) : (o("pick", {
				minDate: i,
				maxDate: null
			}), o("select", !0));
			else if (a.selectionMode === "years") {
				if (e.type === "keydown") {
					o("pick", J(a.parsedValue), !1);
					return;
				}
				let n = Re(i.startOf("year"), l.value, a.disabledDate);
				o("pick", ae(t, "current") ? J(a.parsedValue).filter((e) => e?.year() !== r) : J(a.parsedValue).concat([n]));
			} else o("pick", r);
		}, E = (e) => {
			if (!a.rangeState.selecting) return;
			let t = e.target?.closest("td");
			if (!t) return;
			let n = t.parentNode.rowIndex, r = t.cellIndex;
			b.value[n][r].disabled || (n !== _.value || r !== y.value) && (_.value = n, y.value = r, o("changerange", {
				selecting: !0,
				endDate: (0, Q.default)().year(h.value).add(n * 4 + r, "year")
			}));
		};
		return r(() => a.date, async () => {
			d.value?.contains(document.activeElement) && (await m(), f.value?.focus());
		}), t({ focus: S }), (e, t) => (u(), N("table", {
			role: "grid",
			"aria-label": F(c)("el.datepicker.yearTablePrompt"),
			class: p(F(s).b()),
			onClick: T,
			onMousemove: E
		}, [j("tbody", {
			ref_key: "tbodyRef",
			ref: d
		}, [(u(!0), N(ne, null, v(b.value, (e, t) => (u(), N("tr", { key: t }, [(u(!0), N(ne, null, v(e, (e, n) => (u(), N("td", {
			key: `${t}_${n}`,
			ref_for: !0,
			ref: (t) => e.isSelected && (f.value = t),
			class: p(["available", ee(e)]),
			"aria-selected": e.isSelected,
			"aria-label": String(e.text),
			tabindex: e.isSelected ? 0 : -1,
			onKeydown: [re(C(T, ["prevent", "stop"]), ["space"]), re(C(T, ["prevent", "stop"]), ["enter"])]
		}, [M(F(Ge), { cell: e }, null, 8, ["cell"])], 42, $))), 128))]))), 128))], 512)], 42, tt));
	}
}), rt = ["disabled", "onClick"], it = ["aria-label", "disabled"], at = ["aria-label", "disabled"], ot = ["tabindex", "aria-disabled"], st = ["tabindex", "aria-disabled"], ct = ["aria-label", "disabled"], lt = ["aria-label", "disabled"], ut = /* @__PURE__ */ h({
	__name: "panel-date-pick",
	props: Me,
	emits: [
		"pick",
		"set-picker-option",
		"panel-change"
	],
	setup(e, { emit: t }) {
		let n = (e, t, n) => !0, s = e, d = t, f = U("picker-panel"), h = U("date-picker"), _ = y(), ee = b(), { t: C, lang: w } = fe(), E = i(ve), D = i(Oe, void 0), { shortcuts: I, disabledDate: L, cellClassName: R, defaultTime: z } = E.props, ie = T(E.props, "defaultValue"), B = A(), V = A((0, Q.default)().locale(w.value)), H = A(!1), ae = !1, J = x(() => (0, Q.default)(z).locale(w.value)), me = x(() => V.value.month()), _e = x(() => V.value.year()), ye = A([]), be = A(null), xe = A(null), Ce = (e) => ye.value.length > 0 ? n(e, ye.value, s.format || "HH:mm:ss") : !0, we = (e) => z && !Qe.value && !H.value && !ae ? J.value.year(e.year()).month(e.month()).date(e.date()) : He.value ? e.millisecond(0) : e.startOf("day"), Y = (e, ...t) => {
			e ? g(e) ? d("pick", e.map(we), ...t) : d("pick", we(e), ...t) : d("pick", e, ...t), be.value = null, xe.value = null, H.value = !1, ae = !1;
		}, Ee = async (e, t) => {
			if (Z.value === "date" && Q.default.isDayjs(e)) {
				let n = q(s.parsedValue), r = n ? n.year(e.year()).month(e.month()).date(e.date()) : e;
				Ce(r) || (r = ye.value[0][0].year(e.year()).month(e.month()).date(e.date())), V.value = r, Y(r, He.value || t);
			} else Z.value === "week" ? Y(e.date) : Z.value === "dates" && Y(e, !0);
		}, De = (e) => {
			let t = e ? "add" : "subtract";
			V.value = V.value[t](1, "month"), St("month");
		}, ke = (e) => {
			let t = V.value, n = e ? "add" : "subtract";
			V.value = X.value === "year" ? t[n](10, "year") : t[n](1, "year"), St("year");
		}, X = A("date"), Ae = x(() => {
			let e = C("el.datepicker.year");
			if (X.value === "year") {
				let t = Math.floor(_e.value / 10) * 10;
				return e ? `${t} ${e} - ${t + 9} ${e}` : `${t} - ${t + 9}`;
			}
			return `${_e.value} ${e}`;
		}), je = (e) => {
			let t = o(e.value) ? e.value() : e.value;
			if (t) {
				ae = !0, Y((0, Q.default)(t).locale(w.value));
				return;
			}
			e.onClick && e.onClick({
				attrs: _,
				slots: ee,
				emit: d
			});
		}, Z = x(() => {
			let { type: e } = s;
			return [
				"week",
				"month",
				"months",
				"year",
				"years",
				"dates"
			].includes(e) ? e : "date";
		}), Me = x(() => Z.value === "dates" || Z.value === "months" || Z.value === "years"), Ne = x(() => Z.value === "date" ? X.value : Z.value), Pe = x(() => !!I.length), Fe = async (e, t) => {
			Z.value === "month" ? (V.value = Le(V.value, V.value.year(), e, w.value, L), Y(V.value, !1)) : Z.value === "months" ? Y(e, t ?? !0) : (V.value = Le(V.value, V.value.year(), e, w.value, L), X.value = "date", [
				"month",
				"year",
				"date",
				"week"
			].includes(Z.value) && (Y(V.value, !0), await m(), vt())), St("month");
		}, Ie = async (e, t) => {
			Z.value === "year" ? (V.value = Re(V.value.startOf("year").year(e), w.value, L), Y(V.value, !1)) : Z.value === "years" ? Y(e, t ?? !0) : (V.value = Re(V.value.year(e), w.value, L), X.value = "month", [
				"month",
				"year",
				"date",
				"week"
			].includes(Z.value) && (Y(V.value, !0), await m(), vt())), St("year");
		}, Be = de(), Ve = async (e) => {
			Be.value || (X.value = e, await m(), vt());
		}, He = x(() => s.type === "datetime" || s.type === "datetimerange"), Ue = x(() => {
			let e = He.value || Z.value === "dates", t = Z.value === "years", n = Z.value === "months", r = X.value === "date", i = X.value === "year", a = X.value === "month";
			return e && r || t && i || n && a;
		}), We = x(() => !Me.value && s.showNow || s.showConfirm), Ge = x(() => L ? s.parsedValue ? g(s.parsedValue) ? L(s.parsedValue[0].toDate()) : L(s.parsedValue.toDate()) : !0 : !1), Ke = () => {
			if (Me.value) Y(s.parsedValue);
			else {
				let e = q(s.parsedValue);
				if (!e) {
					let t = (0, Q.default)(z).locale(w.value), n = _t();
					e = t.year(n.year()).month(n.month()).date(n.date());
				}
				V.value = e, Y(e);
			}
		}, qe = x(() => L ? L((0, Q.default)().locale(w.value).toDate()) : !1), Je = () => {
			let e = (0, Q.default)().locale(w.value).toDate();
			H.value = !0, (!L || !L(e)) && Ce(e) && (V.value = (0, Q.default)().locale(w.value), Y(V.value));
		}, Xe = x(() => s.timeFormat || ge(s.format) || "HH:mm:ss"), Ze = x(() => s.dateFormat || he(s.format) || "YYYY-MM-DD"), Qe = x(() => {
			if (xe.value) return xe.value;
			if (!(!s.parsedValue && !ie.value)) return (q(s.parsedValue) || V.value).format(Xe.value);
		}), et = x(() => {
			if (be.value) return be.value;
			if (!(!s.parsedValue && !ie.value)) return (q(s.parsedValue) || V.value).format(Ze.value);
		}), tt = A(!1), $ = () => {
			tt.value = !0;
		}, ut = () => {
			tt.value = !1;
		}, dt = (e) => ({
			hour: e.hour(),
			minute: e.minute(),
			second: e.second(),
			year: e.year(),
			month: e.month(),
			date: e.date()
		}), ft = (e, t, n) => {
			let { hour: r, minute: i, second: a } = dt(e), o = q(s.parsedValue);
			V.value = o ? o.hour(r).minute(i).second(a) : e, Y(V.value, !0), n || (tt.value = t);
		}, pt = (e) => {
			let t = (0, Q.default)(e, Xe.value).locale(w.value);
			if (t.isValid() && Ce(t)) {
				let { year: e, month: n, date: r } = dt(V.value);
				V.value = t.year(e).month(n).date(r), xe.value = null, tt.value = !1, Y(V.value, !0);
			}
		}, mt = (e) => {
			let t = ze(e, Ze.value, w.value, D);
			if (t.isValid()) {
				if (L && L(t.toDate())) return;
				let { hour: e, minute: n, second: r } = dt(V.value);
				V.value = t.hour(e).minute(n).second(r), be.value = null, Y(V.value, !0);
			}
		}, ht = (e) => Q.default.isDayjs(e) && e.isValid() && (L ? !L(e.toDate()) : !0), gt = (e) => ze(e, s.format, w.value, D), _t = () => {
			let e = (0, Q.default)(ie.value).locale(w.value);
			if (!ie.value) {
				let e = J.value;
				return (0, Q.default)().hour(e.hour()).minute(e.minute()).second(e.second()).locale(w.value);
			}
			return e;
		}, vt = () => {
			[
				"week",
				"month",
				"year",
				"date"
			].includes(Z.value) && B.value?.focus();
		}, yt = () => {
			vt(), Z.value === "week" && xt(K.down);
		}, bt = (e) => {
			let t = ue(e);
			[
				K.up,
				K.down,
				K.left,
				K.right,
				K.home,
				K.end,
				K.pageUp,
				K.pageDown
			].includes(t) && (xt(t), e.stopPropagation(), e.preventDefault()), [
				K.enter,
				K.space,
				K.numpadEnter
			].includes(t) && be.value === null && xe.value === null && (e.preventDefault(), Y(V.value, !1));
		}, xt = (e) => {
			let { up: t, down: n, left: r, right: i, home: a, end: s, pageUp: c, pageDown: l } = K, u = {
				year: {
					[t]: -4,
					[n]: 4,
					[r]: -1,
					[i]: 1,
					offset: (e, t) => e.setFullYear(e.getFullYear() + t)
				},
				month: {
					[t]: -4,
					[n]: 4,
					[r]: -1,
					[i]: 1,
					offset: (e, t) => e.setMonth(e.getMonth() + t)
				},
				week: {
					[t]: -1,
					[n]: 1,
					[r]: -1,
					[i]: 1,
					offset: (e, t) => e.setDate(e.getDate() + t * 7)
				},
				date: {
					[t]: -7,
					[n]: 7,
					[r]: -1,
					[i]: 1,
					[a]: (e) => -e.getDay(),
					[s]: (e) => -e.getDay() + 6,
					[c]: (e) => -new Date(e.getFullYear(), e.getMonth(), 0).getDate(),
					[l]: (e) => new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
					offset: (e, t) => e.setDate(e.getDate() + t)
				}
			}, f = V.value.toDate();
			for (; Math.abs(V.value.diff(f, "year", !0)) < 1;) {
				let t = u[Ne.value];
				if (!t) return;
				if (t.offset(f, o(t[e]) ? t[e](f) : t[e] ?? 0), L && L(f)) break;
				let n = (0, Q.default)(f).locale(w.value);
				V.value = n, d("pick", n, !0);
				break;
			}
		}, St = (e) => {
			d("panel-change", V.value.toDate(), e, X.value);
		};
		return r(() => Z.value, (e) => {
			if (["month", "year"].includes(e)) {
				X.value = e;
				return;
			} else if (e === "years") {
				X.value = "year";
				return;
			} else if (e === "months") {
				X.value = "month";
				return;
			}
			X.value = "date";
		}, { immediate: !0 }), r(() => ie.value, (e) => {
			e && (V.value = _t());
		}, { immediate: !0 }), r(() => s.parsedValue, (e) => {
			if (e) {
				if (Me.value || g(e)) return;
				V.value = e;
			} else V.value = _t();
		}, { immediate: !0 }), d("set-picker-option", ["isValidValue", ht]), d("set-picker-option", ["parseUserInput", gt]), d("set-picker-option", ["handleFocusPicker", yt]), (e, t) => (u(), N("div", { class: p([
			F(f).b(),
			F(h).b(),
			F(f).is("border", e.border),
			F(f).is("disabled", F(Be)),
			{
				"has-sidebar": e.$slots.sidebar || Pe.value,
				"has-time": He.value
			}
		]) }, [j("div", { class: p(F(f).e("body-wrapper")) }, [
			l(e.$slots, "sidebar", { class: p(F(f).e("sidebar")) }),
			Pe.value ? (u(), N("div", {
				key: 0,
				class: p(F(f).e("sidebar"))
			}, [(u(!0), N(ne, null, v(F(I), (e, t) => (u(), N("button", {
				key: t,
				type: "button",
				disabled: F(Be),
				class: p(F(f).e("shortcut")),
				onClick: (t) => je(e)
			}, c(e.text), 11, rt))), 128))], 2)) : S("v-if", !0),
			j("div", { class: p(F(f).e("body")) }, [
				He.value ? (u(), N("div", {
					key: 0,
					class: p(F(h).e("time-header"))
				}, [j("span", { class: p(F(h).e("editor-wrap")) }, [M(F(le), {
					placeholder: F(C)("el.datepicker.selectDate"),
					"model-value": et.value,
					size: "small",
					"validate-event": !1,
					disabled: F(Be),
					readonly: !e.editable,
					onInput: t[0] ||= (e) => be.value = e,
					onChange: mt
				}, null, 8, [
					"placeholder",
					"model-value",
					"disabled",
					"readonly"
				])], 2), te((u(), N("span", { class: p(F(h).e("editor-wrap")) }, [M(F(le), {
					placeholder: F(C)("el.datepicker.selectTime"),
					"model-value": Qe.value,
					size: "small",
					"validate-event": !1,
					disabled: F(Be),
					readonly: !e.editable,
					onFocus: $,
					onInput: t[1] ||= (e) => xe.value = e,
					onChange: pt
				}, null, 8, [
					"placeholder",
					"model-value",
					"disabled",
					"readonly"
				]), M(F(Te), {
					visible: tt.value,
					format: Xe.value,
					"parsed-value": V.value,
					onPick: ft
				}, null, 8, [
					"visible",
					"format",
					"parsed-value"
				])], 2)), [[F(Se), ut]])], 2)) : S("v-if", !0),
				te(j("div", { class: p([F(h).e("header"), (X.value === "year" || X.value === "month") && F(h).em("header", "bordered")]) }, [
					j("span", { class: p(F(h).e("prev-btn")) }, [j("button", {
						type: "button",
						"aria-label": F(C)("el.datepicker.prevYear"),
						class: p(["d-arrow-left", F(f).e("icon-btn")]),
						disabled: F(Be),
						onClick: t[2] ||= (e) => ke(!1)
					}, [l(e.$slots, "prev-year", {}, () => [M(F(G), null, {
						default: k(() => [M(F(se))]),
						_: 1
					})])], 10, it), te(j("button", {
						type: "button",
						"aria-label": F(C)("el.datepicker.prevMonth"),
						class: p([F(f).e("icon-btn"), "arrow-left"]),
						disabled: F(Be),
						onClick: t[3] ||= (e) => De(!1)
					}, [l(e.$slots, "prev-month", {}, () => [M(F(G), null, {
						default: k(() => [M(F(W))]),
						_: 1
					})])], 10, at), [[O, X.value === "date"]])], 2),
					j("span", {
						role: "button",
						class: p(F(h).e("header-label")),
						"aria-live": "polite",
						tabindex: e.disabled ? void 0 : 0,
						"aria-disabled": e.disabled,
						onKeydown: t[4] ||= re((e) => Ve("year"), ["enter"]),
						onClick: t[5] ||= (e) => Ve("year")
					}, c(Ae.value), 43, ot),
					te(j("span", {
						role: "button",
						"aria-live": "polite",
						tabindex: e.disabled ? void 0 : 0,
						"aria-disabled": e.disabled,
						class: p([F(h).e("header-label"), { active: X.value === "month" }]),
						onKeydown: t[6] ||= re((e) => Ve("month"), ["enter"]),
						onClick: t[7] ||= (e) => Ve("month")
					}, c(F(C)(`el.datepicker.month${me.value + 1}`)), 43, st), [[O, X.value === "date"]]),
					j("span", { class: p(F(h).e("next-btn")) }, [te(j("button", {
						type: "button",
						"aria-label": F(C)("el.datepicker.nextMonth"),
						class: p([F(f).e("icon-btn"), "arrow-right"]),
						disabled: F(Be),
						onClick: t[8] ||= (e) => De(!0)
					}, [l(e.$slots, "next-month", {}, () => [M(F(G), null, {
						default: k(() => [M(F(ce))]),
						_: 1
					})])], 10, ct), [[O, X.value === "date"]]), j("button", {
						type: "button",
						"aria-label": F(C)("el.datepicker.nextYear"),
						class: p([F(f).e("icon-btn"), "d-arrow-right"]),
						disabled: F(Be),
						onClick: t[9] ||= (e) => ke(!0)
					}, [l(e.$slots, "next-year", {}, () => [M(F(G), null, {
						default: k(() => [M(F(oe))]),
						_: 1
					})])], 10, lt)], 2)
				], 2), [[O, X.value !== "time"]]),
				j("div", {
					class: p(F(f).e("content")),
					onKeydown: bt
				}, [
					X.value === "date" ? (u(), P(Ye, {
						key: 0,
						ref_key: "currentViewRef",
						ref: B,
						"selection-mode": Z.value,
						date: V.value,
						"parsed-value": e.parsedValue,
						"disabled-date": F(L),
						disabled: F(Be),
						"cell-class-name": F(R),
						"show-week-number": e.showWeekNumber,
						onPick: Ee
					}, null, 8, [
						"selection-mode",
						"date",
						"parsed-value",
						"disabled-date",
						"disabled",
						"cell-class-name",
						"show-week-number"
					])) : S("v-if", !0),
					X.value === "year" ? (u(), P(nt, {
						key: 1,
						ref_key: "currentViewRef",
						ref: B,
						"selection-mode": Z.value,
						date: V.value,
						"disabled-date": F(L),
						disabled: F(Be),
						"parsed-value": e.parsedValue,
						"cell-class-name": F(R),
						onPick: Ie
					}, null, 8, [
						"selection-mode",
						"date",
						"disabled-date",
						"disabled",
						"parsed-value",
						"cell-class-name"
					])) : S("v-if", !0),
					X.value === "month" ? (u(), P($e, {
						key: 2,
						ref_key: "currentViewRef",
						ref: B,
						"selection-mode": Z.value,
						date: V.value,
						"parsed-value": e.parsedValue,
						"disabled-date": F(L),
						disabled: F(Be),
						"cell-class-name": F(R),
						onPick: Fe
					}, null, 8, [
						"selection-mode",
						"date",
						"parsed-value",
						"disabled-date",
						"disabled",
						"cell-class-name"
					])) : S("v-if", !0)
				], 34)
			], 2)
		], 2), e.showFooter && Ue.value && We.value ? (u(), N("div", {
			key: 0,
			class: p(F(f).e("footer"))
		}, [te(M(F(pe), {
			text: "",
			size: "small",
			class: p(F(f).e("link-btn")),
			disabled: qe.value,
			onClick: Je
		}, {
			default: k(() => [a(c(F(C)("el.datepicker.now")), 1)]),
			_: 1
		}, 8, ["class", "disabled"]), [[O, !Me.value && e.showNow]]), e.showConfirm ? (u(), P(F(pe), {
			key: 0,
			plain: "",
			size: "small",
			class: p(F(f).e("link-btn")),
			disabled: Ge.value,
			onClick: Ke
		}, {
			default: k(() => [a(c(F(C)("el.datepicker.confirm")), 1)]),
			_: 1
		}, 8, ["class", "disabled"])) : S("v-if", !0)], 2)) : S("v-if", !0)], 2));
	}
}), dt = V({
	...Ae,
	...je
}), ft = (e) => {
	let { emit: t } = s(), n = y(), r = b();
	return (i) => {
		let a = o(i.value) ? i.value() : i.value;
		if (a) {
			t("pick", [(0, Q.default)(a[0]).locale(e.value), (0, Q.default)(a[1]).locale(e.value)]);
			return;
		}
		i.onClick && i.onClick({
			attrs: n,
			slots: r,
			emit: t
		});
	};
}, pt = (e, { defaultValue: t, defaultTime: n, leftDate: a, rightDate: o, step: c, unit: l, sortDates: u }) => {
	let { emit: d } = s(), { pickerNs: f } = i(De), p = U("date-range-picker"), { t: m, lang: h } = fe(), _ = ft(h), v = A(), y = A(), b = A({
		endDate: null,
		selecting: !1
	}), x = (e) => {
		b.value = e;
	}, S = (e = !1) => {
		let t = F(v), n = F(y);
		Ne([t, n]) && d("pick", [t, n], e);
	}, ee = (e) => {
		b.value.selecting = e, e || (b.value.endDate = null);
	}, C = (e) => {
		if (g(e) && e.length === 2) {
			let [t, n] = e;
			v.value = t, a.value = t, y.value = n, u(F(v), F(y));
		} else w();
	}, w = () => {
		let [r, i] = Pe(F(t), {
			lang: F(h),
			step: c,
			unit: l,
			unlinkPanels: e.unlinkPanels
		}), s = (e) => e.diff(e.startOf("d"), "ms"), u = F(n);
		if (u) {
			let e = 0, t = 0;
			if (g(u)) {
				let [n, r] = u.map(Q.default);
				e = s(n), t = s(r);
			} else {
				let n = s((0, Q.default)(u));
				e = n, t = n;
			}
			r = r.startOf("d").add(e, "ms"), i = i.startOf("d").add(t, "ms");
		}
		v.value = void 0, y.value = void 0, a.value = r, o.value = i;
	};
	return r(t, (e) => {
		e && w();
	}, { immediate: !0 }), r(() => e.parsedValue, (e) => {
		(!e?.length || !z(e, [v.value, y.value])) && C(e);
	}, { immediate: !0 }), r(() => e.visible, () => {
		e.visible && C(e.parsedValue);
	}, { immediate: !0 }), {
		minDate: v,
		maxDate: y,
		rangeState: b,
		lang: h,
		ppNs: f,
		drpNs: p,
		handleChangeRange: x,
		handleRangeConfirm: S,
		handleShortcutClick: _,
		onSelect: ee,
		parseValue: C,
		t: m
	};
}, mt = (e, t, n, r) => {
	let a = A("date"), o = A(), s = A("date"), c = A(), { disabledDate: l } = i(ve).props, { t: u, lang: d } = fe(), f = x(() => n.value.year()), p = x(() => n.value.month()), h = x(() => r.value.year()), g = x(() => r.value.month());
	function _(e, t) {
		let n = u("el.datepicker.year");
		if (e.value === "year") {
			let e = Math.floor(t.value / 10) * 10;
			return n ? `${e} ${n} - ${e + 9} ${n}` : `${e} - ${e + 9}`;
		}
		return `${t.value} ${n}`;
	}
	function v(e) {
		e?.focus();
	}
	async function y(t, n) {
		if (e.disabled) return;
		let r = t === "left" ? a : s, i = t === "left" ? o : c;
		r.value = n, await m(), v(i.value);
	}
	async function b(t, i, u) {
		if (e.disabled) return;
		let f = i === "left", p = f ? n : r, h = f ? r : n, g = f ? a : s, _ = f ? o : c;
		t === "year" && (p.value = Re(p.value.year(u), d.value, l)), t === "month" && (p.value = Le(p.value, p.value.year(), u, d.value, l)), e.unlinkPanels || (h.value = i === "left" ? p.value.add(1, "month") : p.value.subtract(1, "month")), g.value = t === "year" ? "month" : "date", await m(), v(_.value), S(t);
	}
	function S(e) {
		t("panel-change", [n.value.toDate(), r.value.toDate()], e);
	}
	function ee(e, t, n) {
		let r = n ? "add" : "subtract";
		return e === "year" ? t[r](10, "year") : t[r](1, "year");
	}
	return {
		leftCurrentView: a,
		rightCurrentView: s,
		leftCurrentViewRef: o,
		rightCurrentViewRef: c,
		leftYear: f,
		rightYear: h,
		leftMonth: p,
		rightMonth: g,
		leftYearLabel: x(() => _(a, f)),
		rightYearLabel: x(() => _(s, h)),
		showLeftPicker: (e) => y("left", e),
		showRightPicker: (e) => y("right", e),
		handleLeftYearPick: (e) => b("year", "left", e),
		handleRightYearPick: (e) => b("year", "right", e),
		handleLeftMonthPick: (e) => b("month", "left", e),
		handleRightMonthPick: (e) => b("month", "right", e),
		handlePanelChange: S,
		adjustDateByView: ee
	};
}, ht = ["disabled", "onClick"], gt = ["aria-label", "disabled"], _t = ["aria-label", "disabled"], vt = ["disabled", "aria-label"], yt = ["disabled", "aria-label"], bt = ["tabindex", "aria-disabled"], xt = ["tabindex", "aria-disabled"], St = ["disabled", "aria-label"], Ct = ["disabled", "aria-label"], wt = ["aria-label", "disabled"], Tt = ["disabled", "aria-label"], Et = ["tabindex", "aria-disabled"], Dt = ["tabindex", "aria-disabled"], Ot = "month", kt = /* @__PURE__ */ h({
	__name: "panel-date-range",
	props: dt,
	emits: [
		"pick",
		"set-picker-option",
		"calendar-change",
		"panel-change",
		"clear"
	],
	setup(e, { emit: t }) {
		let n = e, o = t, s = i(ve), d = i(Oe, void 0), { disabledDate: f, cellClassName: h, defaultTime: g, clearable: _ } = s.props, y = T(s.props, "format"), b = T(s.props, "shortcuts"), ee = T(s.props, "defaultValue"), { lang: C } = fe(), w = A((0, Q.default)().locale(C.value)), E = A((0, Q.default)().locale(C.value).add(1, Ot)), { minDate: D, maxDate: I, rangeState: L, ppNs: R, drpNs: z, handleChangeRange: ie, handleRangeConfirm: B, handleShortcutClick: V, onSelect: H, parseValue: ae, t: U } = pt(n, {
			defaultValue: ee,
			defaultTime: g,
			leftDate: w,
			rightDate: E,
			unit: Ot,
			sortDates: Lt
		});
		r(() => n.visible, (e) => {
			!e && L.value.selecting && (ae(n.parsedValue), H(!1));
		});
		let K = A({
			min: null,
			max: null
		}), ue = A({
			min: null,
			max: null
		}), { leftCurrentView: q, rightCurrentView: J, leftCurrentViewRef: me, rightCurrentViewRef: _e, leftYear: ye, rightYear: be, leftMonth: xe, rightMonth: Ce, leftYearLabel: we, rightYearLabel: Y, showLeftPicker: Ee, showRightPicker: De, handleLeftYearPick: ke, handleRightYearPick: X, handleLeftMonthPick: Ae, handleRightMonthPick: je, handlePanelChange: Z, adjustDateByView: Me } = mt(n, o, w, E), Fe = x(() => !!b.value.length), Ie = x(() => K.value.min === null ? D.value ? D.value.format(He.value) : "" : K.value.min), Le = x(() => K.value.max === null ? I.value || D.value ? (I.value || D.value).format(He.value) : "" : K.value.max), Re = x(() => ue.value.min === null ? D.value ? D.value.format(Ve.value) : "" : ue.value.min), Be = x(() => ue.value.max === null ? I.value || D.value ? (I.value || D.value).format(Ve.value) : "" : ue.value.max), Ve = x(() => n.timeFormat || ge(y.value || "") || "HH:mm:ss"), He = x(() => n.dateFormat || he(y.value || "") || "YYYY-MM-DD"), Ue = (e) => Ne(e) && (f ? !f(e[0].toDate()) && !f(e[1].toDate()) : !0), We = () => {
			w.value = Me(q.value, w.value, !1), n.unlinkPanels || (E.value = w.value.add(1, "month")), Z("year");
		}, Ge = () => {
			w.value = w.value.subtract(1, "month"), n.unlinkPanels || (E.value = w.value.add(1, "month")), Z("month");
		}, Ke = () => {
			n.unlinkPanels ? E.value = Me(J.value, E.value, !0) : (w.value = Me(J.value, w.value, !0), E.value = w.value.add(1, "month")), Z("year");
		}, qe = () => {
			n.unlinkPanels ? E.value = E.value.add(1, "month") : (w.value = w.value.add(1, "month"), E.value = w.value.add(1, "month")), Z("month");
		}, Je = () => {
			w.value = Me(q.value, w.value, !0), Z("year");
		}, Xe = () => {
			w.value = w.value.add(1, "month"), Z("month");
		}, Ze = () => {
			E.value = Me(J.value, E.value, !1), Z("year");
		}, Qe = () => {
			E.value = E.value.subtract(1, "month"), Z("month");
		}, et = x(() => {
			let e = (xe.value + 1) % 12, t = +(xe.value + 1 >= 12);
			return n.singlePanel || n.unlinkPanels && new Date(ye.value + t, e) < new Date(be.value, Ce.value);
		}), tt = x(() => n.singlePanel || n.unlinkPanels && be.value * 12 + Ce.value - (ye.value * 12 + xe.value + 1) >= 12), $ = de(), rt = x(() => !(D.value && I.value && !L.value.selecting && Ne([D.value, I.value]) && !$.value)), it = x(() => n.type === "datetime" || n.type === "datetimerange"), at = (e, t) => {
			if (e) return g ? (0, Q.default)(g[t] || g).locale(C.value).year(e.year()).month(e.month()).date(e.date()) : e;
		}, ot = (e, t = !0) => {
			let n = e.minDate, r = e.maxDate, i = at(n, 0), a = at(r, 1);
			I.value === a && D.value === i || (o("calendar-change", [n.toDate(), r && r.toDate()]), I.value = a, D.value = i, !it.value && t && (t = !i || !a), B(t));
		}, st = A(!1), ct = A(!1), lt = () => {
			st.value = !1;
		}, ut = () => {
			ct.value = !1;
		}, dt = (e, t) => {
			if (!f || !f(e.toDate())) return e;
			let n = e.isBefore(t), r = e;
			for (; n ? r.isBefore(t) : r.isAfter(t);) if (r = n ? r.add(1, "day") : r.subtract(1, "day"), !f(r.toDate())) return r;
			return e;
		}, ft = (e, t) => {
			K.value[t] = e;
			let r = (0, Q.default)(e, He.value).locale(C.value);
			if (r.isValid()) {
				if (f && f(r.toDate())) return;
				if (t === "min") {
					if (w.value = r, D.value = (D.value || w.value).year(r.year()).month(r.month()).date(r.date()), !n.unlinkPanels && !I.value) {
						let e = dt(D.value.add(1, "month"), D.value);
						E.value = e, I.value = e;
					}
				} else if (E.value = r, I.value = (I.value || E.value).year(r.year()).month(r.month()).date(r.date()), !n.unlinkPanels && !D.value) {
					let e = dt(I.value.subtract(1, "month"), I.value);
					w.value = e, D.value = e;
				}
				Lt(D.value, I.value), B(!0);
			}
		}, kt = (e, t) => {
			if (K.value[t] = null, t === "min") {
				if (!n.unlinkPanels && I.value && D.value && I.value.isBefore(D.value)) {
					let e = dt(D.value.add(1, "month"), D.value);
					E.value = e, I.value = e;
				}
			} else if (!n.unlinkPanels && D.value && I.value && D.value.isAfter(I.value)) {
				let e = dt(I.value.subtract(1, "month"), I.value);
				w.value = e, D.value = e;
			}
			Lt(D.value, I.value), B(!0);
		}, At = (e, t) => {
			ue.value[t] = e;
			let n = (0, Q.default)(e, Ve.value).locale(C.value);
			n.isValid() && (t === "min" ? (st.value = !0, D.value = (D.value || w.value).hour(n.hour()).minute(n.minute()).second(n.second()), w.value = D.value) : (ct.value = !0, I.value = (I.value || E.value).hour(n.hour()).minute(n.minute()).second(n.second()), E.value = I.value));
		}, jt = (e, t) => {
			ue.value[t] = null, t === "min" ? (w.value = D.value, st.value = !1, (!I.value || I.value.isBefore(D.value)) && (I.value = D.value)) : (E.value = I.value, ct.value = !1, I.value && I.value.isBefore(D.value) && (D.value = I.value)), B(!0);
		}, Mt = (e, t, r) => {
			ue.value.min || (e && (D.value = (D.value || w.value).hour(e.hour()).minute(e.minute()).second(e.second())), r || (st.value = t), (!I.value || I.value.isBefore(D.value)) && (I.value = D.value, E.value = e, m(() => {
				ae(n.parsedValue);
			})), B(!0));
		}, Nt = (e, t, n) => {
			ue.value.max || (e && (I.value = (I.value || E.value).hour(e.hour()).minute(e.minute()).second(e.second())), n || (ct.value = t), I.value && I.value.isBefore(D.value) && (D.value = I.value), B(!0));
		}, Pt = () => {
			Ft(), o("clear");
		}, Ft = () => {
			let e = null;
			s?.emptyValues && (e = s.emptyValues.valueOnClear.value), w.value = Pe(F(ee), {
				lang: F(C),
				unit: "month",
				unlinkPanels: n.unlinkPanels
			})[0], E.value = w.value.add(1, "month"), I.value = void 0, D.value = void 0, B(!0), o("pick", e);
		}, It = (e) => ze(e, y.value || "", C.value, d);
		function Lt(e, t) {
			if (n.unlinkPanels && t) {
				let n = e?.year() || 0, r = e?.month() || 0, i = t.year(), a = t.month();
				E.value = n === i && r === a ? t.add(1, Ot) : t;
			} else E.value = w.value.add(1, Ot), t && (E.value = E.value.hour(t.hour()).minute(t.minute()).second(t.second()));
		}
		return o("set-picker-option", ["isValidValue", Ue]), o("set-picker-option", ["parseUserInput", It]), o("set-picker-option", ["handleClear", Ft]), (e, t) => (u(), N("div", { class: p([
			F(R).b(),
			F(z).b(),
			F(R).is("border", e.border),
			F(R).is("disabled", F($)),
			{
				"has-sidebar": e.$slots.sidebar || Fe.value,
				"has-time": it.value,
				"single-panel": e.singlePanel
			}
		]) }, [j("div", { class: p(F(R).e("body-wrapper")) }, [
			l(e.$slots, "sidebar", { class: p(F(R).e("sidebar")) }),
			Fe.value ? (u(), N("div", {
				key: 0,
				class: p(F(R).e("sidebar"))
			}, [(u(!0), N(ne, null, v(b.value, (e, t) => (u(), N("button", {
				key: t,
				type: "button",
				disabled: F($),
				class: p(F(R).e("shortcut")),
				onClick: (t) => F(V)(e)
			}, c(e.text), 11, ht))), 128))], 2)) : S("v-if", !0),
			j("div", { class: p(F(R).e("body")) }, [
				it.value ? (u(), N("div", {
					key: 0,
					class: p(F(z).e("time-header"))
				}, [
					j("span", { class: p(F(z).e("editors-wrap")) }, [j("span", { class: p(F(z).e("time-picker-wrap")) }, [M(F(le), {
						size: "small",
						disabled: F(L).selecting || F($),
						placeholder: F(U)("el.datepicker.startDate"),
						class: p(F(z).e("editor")),
						"model-value": Ie.value,
						"validate-event": !1,
						readonly: !e.editable,
						onInput: t[0] ||= (e) => ft(e, "min"),
						onChange: t[1] ||= (e) => kt(e, "min")
					}, null, 8, [
						"disabled",
						"placeholder",
						"class",
						"model-value",
						"readonly"
					])], 2), te((u(), N("span", { class: p(F(z).e("time-picker-wrap")) }, [M(F(le), {
						size: "small",
						class: p(F(z).e("editor")),
						disabled: F(L).selecting || F($),
						placeholder: F(U)("el.datepicker.startTime"),
						"model-value": Re.value,
						"validate-event": !1,
						readonly: !e.editable,
						onFocus: t[2] ||= (e) => st.value = !0,
						onInput: t[3] ||= (e) => At(e, "min"),
						onChange: t[4] ||= (e) => jt(e, "min")
					}, null, 8, [
						"class",
						"disabled",
						"placeholder",
						"model-value",
						"readonly"
					]), M(F(Te), {
						visible: st.value,
						format: Ve.value,
						"datetime-role": "start",
						"parsed-value": F(D) || w.value,
						onPick: Mt
					}, null, 8, [
						"visible",
						"format",
						"parsed-value"
					])], 2)), [[F(Se), lt]])], 2),
					j("span", null, [M(F(G), null, {
						default: k(() => [M(F(ce))]),
						_: 1
					})]),
					j("span", { class: p([F(z).e("editors-wrap"), "is-right"]) }, [j("span", { class: p(F(z).e("time-picker-wrap")) }, [M(F(le), {
						size: "small",
						class: p(F(z).e("editor")),
						disabled: F(L).selecting || F($),
						placeholder: F(U)("el.datepicker.endDate"),
						"model-value": Le.value,
						readonly: !F(D) || !e.editable,
						"validate-event": !1,
						onInput: t[5] ||= (e) => ft(e, "max"),
						onChange: t[6] ||= (e) => kt(e, "max")
					}, null, 8, [
						"class",
						"disabled",
						"placeholder",
						"model-value",
						"readonly"
					])], 2), te((u(), N("span", { class: p(F(z).e("time-picker-wrap")) }, [M(F(le), {
						size: "small",
						class: p(F(z).e("editor")),
						disabled: F(L).selecting || F($),
						placeholder: F(U)("el.datepicker.endTime"),
						"model-value": Be.value,
						readonly: !F(D) || !e.editable,
						"validate-event": !1,
						onFocus: t[7] ||= (e) => F(D) && (ct.value = !0),
						onInput: t[8] ||= (e) => At(e, "max"),
						onChange: t[9] ||= (e) => jt(e, "max")
					}, null, 8, [
						"class",
						"disabled",
						"placeholder",
						"model-value",
						"readonly"
					]), M(F(Te), {
						"datetime-role": "end",
						visible: ct.value,
						format: Ve.value,
						"parsed-value": F(I) || E.value,
						onPick: Nt
					}, null, 8, [
						"visible",
						"format",
						"parsed-value"
					])], 2)), [[F(Se), ut]])], 2)
				], 2)) : S("v-if", !0),
				j("div", { class: p([
					F(R).e("content"),
					F(z).e("content"),
					F(z).is("left", !e.singlePanel)
				]) }, [
					j("div", { class: p(F(z).e("header")) }, [
						j("button", {
							type: "button",
							class: p([F(R).e("icon-btn"), "d-arrow-left"]),
							"aria-label": F(U)("el.datepicker.prevYear"),
							disabled: F($),
							onClick: We
						}, [l(e.$slots, "prev-year", {}, () => [M(F(G), null, {
							default: k(() => [M(F(se))]),
							_: 1
						})])], 10, gt),
						te(j("button", {
							type: "button",
							class: p([F(R).e("icon-btn"), "arrow-left"]),
							"aria-label": F(U)("el.datepicker.prevMonth"),
							disabled: F($),
							onClick: Ge
						}, [l(e.$slots, "prev-month", {}, () => [M(F(G), null, {
							default: k(() => [M(F(W))]),
							_: 1
						})])], 10, _t), [[O, F(q) === "date"]]),
						e.unlinkPanels || e.singlePanel ? (u(), N("button", {
							key: 0,
							type: "button",
							disabled: !tt.value || F($),
							class: p([[F(R).e("icon-btn"), F(R).is("disabled", !tt.value || F($))], "d-arrow-right"]),
							"aria-label": F(U)("el.datepicker.nextYear"),
							onClick: Je
						}, [l(e.$slots, "next-year", {}, () => [M(F(G), null, {
							default: k(() => [M(F(oe))]),
							_: 1
						})])], 10, vt)) : S("v-if", !0),
						e.unlinkPanels && F(q) === "date" || e.singlePanel ? (u(), N("button", {
							key: 1,
							type: "button",
							disabled: !et.value || F($),
							class: p([[F(R).e("icon-btn"), F(R).is("disabled", !et.value || F($))], "arrow-right"]),
							"aria-label": F(U)("el.datepicker.nextMonth"),
							onClick: Xe
						}, [l(e.$slots, "next-month", {}, () => [M(F(G), null, {
							default: k(() => [M(F(ce))]),
							_: 1
						})])], 10, yt)) : S("v-if", !0),
						j("div", null, [j("span", {
							role: "button",
							class: p(F(z).e("header-label")),
							"aria-live": "polite",
							tabindex: e.disabled ? void 0 : 0,
							"aria-disabled": e.disabled,
							onKeydown: t[10] ||= re((e) => F(Ee)("year"), ["enter"]),
							onClick: t[11] ||= (e) => F(Ee)("year")
						}, c(F(we)), 43, bt), te(j("span", {
							role: "button",
							"aria-live": "polite",
							tabindex: e.disabled ? void 0 : 0,
							"aria-disabled": e.disabled,
							class: p([F(z).e("header-label"), { active: F(q) === "month" }]),
							onKeydown: t[12] ||= re((e) => F(Ee)("month"), ["enter"]),
							onClick: t[13] ||= (e) => F(Ee)("month")
						}, c(F(U)(`el.datepicker.month${w.value.month() + 1}`)), 43, xt), [[O, F(q) === "date"]])])
					], 2),
					F(q) === "date" ? (u(), P(Ye, {
						key: 0,
						ref_key: "leftCurrentViewRef",
						ref: me,
						"selection-mode": "range",
						date: w.value,
						"min-date": F(D),
						"max-date": F(I),
						"range-state": F(L),
						"disabled-date": F(f),
						"cell-class-name": F(h),
						"show-week-number": e.showWeekNumber,
						disabled: F($),
						onChangerange: F(ie),
						onPick: ot,
						onSelect: F(H)
					}, null, 8, [
						"date",
						"min-date",
						"max-date",
						"range-state",
						"disabled-date",
						"cell-class-name",
						"show-week-number",
						"disabled",
						"onChangerange",
						"onSelect"
					])) : S("v-if", !0),
					F(q) === "year" ? (u(), P(nt, {
						key: 1,
						ref_key: "leftCurrentViewRef",
						ref: me,
						"selection-mode": "year",
						date: w.value,
						"disabled-date": F(f),
						"parsed-value": e.parsedValue,
						disabled: F($),
						onPick: F(ke)
					}, null, 8, [
						"date",
						"disabled-date",
						"parsed-value",
						"disabled",
						"onPick"
					])) : S("v-if", !0),
					F(q) === "month" ? (u(), P($e, {
						key: 2,
						ref_key: "leftCurrentViewRef",
						ref: me,
						"selection-mode": "month",
						date: w.value,
						"parsed-value": e.parsedValue,
						"disabled-date": F(f),
						disabled: F($),
						onPick: F(Ae)
					}, null, 8, [
						"date",
						"parsed-value",
						"disabled-date",
						"disabled",
						"onPick"
					])) : S("v-if", !0)
				], 2),
				e.singlePanel ? S("v-if", !0) : (u(), N("div", {
					key: 1,
					class: p([[F(R).e("content"), F(z).e("content")], "is-right"])
				}, [
					j("div", { class: p(F(z).e("header")) }, [
						e.unlinkPanels ? (u(), N("button", {
							key: 0,
							type: "button",
							disabled: !tt.value || F($),
							class: p([[F(R).e("icon-btn"), F(R).is("disabled", !tt.value || F($))], "d-arrow-left"]),
							"aria-label": F(U)("el.datepicker.prevYear"),
							onClick: Ze
						}, [l(e.$slots, "prev-year", {}, () => [M(F(G), null, {
							default: k(() => [M(F(se))]),
							_: 1
						})])], 10, St)) : S("v-if", !0),
						e.unlinkPanels && F(J) === "date" ? (u(), N("button", {
							key: 1,
							type: "button",
							disabled: !et.value || F($),
							class: p([[F(R).e("icon-btn"), F(R).is("disabled", !et.value || F($))], "arrow-left"]),
							"aria-label": F(U)("el.datepicker.prevMonth"),
							onClick: Qe
						}, [l(e.$slots, "prev-month", {}, () => [M(F(G), null, {
							default: k(() => [M(F(W))]),
							_: 1
						})])], 10, Ct)) : S("v-if", !0),
						j("button", {
							type: "button",
							"aria-label": F(U)("el.datepicker.nextYear"),
							class: p([F(R).e("icon-btn"), "d-arrow-right"]),
							disabled: F($),
							onClick: Ke
						}, [l(e.$slots, "next-year", {}, () => [M(F(G), null, {
							default: k(() => [M(F(oe))]),
							_: 1
						})])], 10, wt),
						te(j("button", {
							type: "button",
							class: p([F(R).e("icon-btn"), "arrow-right"]),
							disabled: F($),
							"aria-label": F(U)("el.datepicker.nextMonth"),
							onClick: qe
						}, [l(e.$slots, "next-month", {}, () => [M(F(G), null, {
							default: k(() => [M(F(ce))]),
							_: 1
						})])], 10, Tt), [[O, F(J) === "date"]]),
						j("div", null, [j("span", {
							role: "button",
							class: p(F(z).e("header-label")),
							"aria-live": "polite",
							tabindex: e.disabled ? void 0 : 0,
							"aria-disabled": e.disabled,
							onKeydown: t[14] ||= re((e) => F(De)("year"), ["enter"]),
							onClick: t[15] ||= (e) => F(De)("year")
						}, c(F(Y)), 43, Et), te(j("span", {
							role: "button",
							"aria-live": "polite",
							tabindex: e.disabled ? void 0 : 0,
							"aria-disabled": e.disabled,
							class: p([F(z).e("header-label"), { active: F(J) === "month" }]),
							onKeydown: t[16] ||= re((e) => F(De)("month"), ["enter"]),
							onClick: t[17] ||= (e) => F(De)("month")
						}, c(F(U)(`el.datepicker.month${E.value.month() + 1}`)), 43, Dt), [[O, F(J) === "date"]])])
					], 2),
					F(J) === "date" ? (u(), P(Ye, {
						key: 0,
						ref_key: "rightCurrentViewRef",
						ref: _e,
						"selection-mode": "range",
						date: E.value,
						"min-date": F(D),
						"max-date": F(I),
						"range-state": F(L),
						"disabled-date": F(f),
						"cell-class-name": F(h),
						"show-week-number": e.showWeekNumber,
						disabled: F($),
						onChangerange: F(ie),
						onPick: ot,
						onSelect: F(H)
					}, null, 8, [
						"date",
						"min-date",
						"max-date",
						"range-state",
						"disabled-date",
						"cell-class-name",
						"show-week-number",
						"disabled",
						"onChangerange",
						"onSelect"
					])) : S("v-if", !0),
					F(J) === "year" ? (u(), P(nt, {
						key: 1,
						ref_key: "rightCurrentViewRef",
						ref: _e,
						"selection-mode": "year",
						date: E.value,
						"disabled-date": F(f),
						"parsed-value": e.parsedValue,
						disabled: F($),
						onPick: F(X)
					}, null, 8, [
						"date",
						"disabled-date",
						"parsed-value",
						"disabled",
						"onPick"
					])) : S("v-if", !0),
					F(J) === "month" ? (u(), P($e, {
						key: 2,
						ref_key: "rightCurrentViewRef",
						ref: _e,
						"selection-mode": "month",
						date: E.value,
						"parsed-value": e.parsedValue,
						"disabled-date": F(f),
						disabled: F($),
						onPick: F(je)
					}, null, 8, [
						"date",
						"parsed-value",
						"disabled-date",
						"disabled",
						"onPick"
					])) : S("v-if", !0)
				], 2))
			], 2)
		], 2), e.showFooter && it.value && (e.showConfirm || F(_)) ? (u(), N("div", {
			key: 0,
			class: p(F(R).e("footer"))
		}, [F(_) ? (u(), P(F(pe), {
			key: 0,
			text: "",
			size: "small",
			class: p(F(R).e("link-btn")),
			onClick: Pt
		}, {
			default: k(() => [a(c(F(U)("el.datepicker.clear")), 1)]),
			_: 1
		}, 8, ["class"])) : S("v-if", !0), e.showConfirm ? (u(), P(F(pe), {
			key: 1,
			plain: "",
			size: "small",
			class: p(F(R).e("link-btn")),
			disabled: rt.value,
			onClick: t[18] ||= (e) => F(B)(!1)
		}, {
			default: k(() => [a(c(F(U)("el.datepicker.confirm")), 1)]),
			_: 1
		}, 8, ["class", "disabled"])) : S("v-if", !0)], 2)) : S("v-if", !0)], 2));
	}
}), At = V({ ...je }), jt = [
	"pick",
	"set-picker-option",
	"calendar-change"
], Mt = ({ unlinkPanels: e, leftDate: t, rightDate: n }) => {
	let { t: r } = fe();
	return {
		leftPrevYear: () => {
			t.value = t.value.subtract(1, "year"), e.value || (n.value = n.value.subtract(1, "year"));
		},
		rightNextYear: () => {
			e.value || (t.value = t.value.add(1, "year")), n.value = n.value.add(1, "year");
		},
		leftNextYear: () => {
			t.value = t.value.add(1, "year");
		},
		rightPrevYear: () => {
			n.value = n.value.subtract(1, "year");
		},
		leftLabel: x(() => `${t.value.year()} ${r("el.datepicker.year")}`),
		rightLabel: x(() => `${n.value.year()} ${r("el.datepicker.year")}`),
		leftYear: x(() => t.value.year()),
		rightYear: x(() => n.value.year() === t.value.year() ? t.value.year() + 1 : n.value.year())
	};
}, Nt = ["disabled", "onClick"], Pt = ["disabled"], Ft = ["disabled"], It = ["disabled"], Lt = ["disabled"], Rt = "year", zt = /* @__PURE__ */ h({
	name: "DatePickerMonthRange",
	__name: "panel-month-range",
	props: At,
	emits: jt,
	setup(e, { emit: t }) {
		let n = e, a = t, { lang: o } = fe(), s = i(ve), d = i(Oe, void 0), { shortcuts: f, disabledDate: m, cellClassName: h } = s.props, g = T(s.props, "format"), _ = T(s.props, "defaultValue"), y = A((0, Q.default)().locale(o.value)), b = A((0, Q.default)().locale(o.value).add(1, Rt)), { minDate: ee, maxDate: C, rangeState: w, ppNs: E, drpNs: D, handleChangeRange: O, handleRangeConfirm: te, handleShortcutClick: re, onSelect: P, parseValue: I } = pt(n, {
			defaultValue: _,
			leftDate: y,
			rightDate: b,
			unit: Rt,
			sortDates: ue
		}), L = x(() => !!f.length), { leftPrevYear: R, rightNextYear: z, leftNextYear: ie, rightPrevYear: B, leftLabel: V, rightLabel: H, leftYear: ae, rightYear: U } = Mt({
			unlinkPanels: T(n, "unlinkPanels"),
			leftDate: y,
			rightDate: b
		}), W = x(() => n.singlePanel || n.unlinkPanels && U.value > ae.value + 1), ce = (e, t = !0) => {
			let n = e.minDate, r = e.maxDate;
			C.value === r && ee.value === n || (a("calendar-change", [n.toDate(), r && r.toDate()]), C.value = r, ee.value = n, t && te());
		}, le = () => {
			let e = null;
			s?.emptyValues && (e = s.emptyValues.valueOnClear.value), y.value = Pe(F(_), {
				lang: F(o),
				unit: "year",
				unlinkPanels: n.unlinkPanels
			})[0], b.value = y.value.add(1, "year"), a("pick", e);
		}, K = (e) => ze(e, g.value, o.value, d);
		function ue(e, t) {
			n.unlinkPanels && t ? b.value = (e?.year() || 0) === t.year() ? t.add(1, Rt) : t : b.value = y.value.add(1, Rt);
		}
		let q = de();
		return r(() => n.visible, (e) => {
			!e && w.value.selecting && (I(n.parsedValue), P(!1));
		}), a("set-picker-option", ["isValidValue", Ne]), a("set-picker-option", ["parseUserInput", K]), a("set-picker-option", ["handleClear", le]), (e, t) => (u(), N("div", { class: p([
			F(E).b(),
			F(D).b(),
			F(E).is("border", e.border),
			F(E).is("disabled", F(q)),
			{
				"has-sidebar": !!e.$slots.sidebar || L.value,
				"single-panel": e.singlePanel
			}
		]) }, [j("div", { class: p(F(E).e("body-wrapper")) }, [
			l(e.$slots, "sidebar", { class: p(F(E).e("sidebar")) }),
			L.value ? (u(), N("div", {
				key: 0,
				class: p(F(E).e("sidebar"))
			}, [(u(!0), N(ne, null, v(F(f), (e, t) => (u(), N("button", {
				key: t,
				type: "button",
				class: p(F(E).e("shortcut")),
				disabled: F(q),
				onClick: (t) => F(re)(e)
			}, c(e.text), 11, Nt))), 128))], 2)) : S("v-if", !0),
			j("div", { class: p(F(E).e("body")) }, [j("div", { class: p([
				F(E).e("content"),
				F(D).e("content"),
				F(D).is("left", !e.singlePanel)
			]) }, [j("div", { class: p(F(D).e("header")) }, [
				j("button", {
					type: "button",
					class: p([F(E).e("icon-btn"), "d-arrow-left"]),
					disabled: F(q),
					onClick: t[0] ||= (...e) => F(R) && F(R)(...e)
				}, [l(e.$slots, "prev-year", {}, () => [M(F(G), null, {
					default: k(() => [M(F(se))]),
					_: 1
				})])], 10, Pt),
				e.unlinkPanels || e.singlePanel ? (u(), N("button", {
					key: 0,
					type: "button",
					disabled: !W.value || F(q),
					class: p([[F(E).e("icon-btn"), F(E).is("disabled", !W.value || F(q))], "d-arrow-right"]),
					onClick: t[1] ||= (...e) => F(ie) && F(ie)(...e)
				}, [l(e.$slots, "next-year", {}, () => [M(F(G), null, {
					default: k(() => [M(F(oe))]),
					_: 1
				})])], 10, Ft)) : S("v-if", !0),
				j("div", null, c(F(V)), 1)
			], 2), M($e, {
				"selection-mode": "range",
				date: y.value,
				"min-date": F(ee),
				"max-date": F(C),
				"range-state": F(w),
				"disabled-date": F(m),
				disabled: F(q),
				"cell-class-name": F(h),
				onChangerange: F(O),
				onPick: ce,
				onSelect: F(P)
			}, null, 8, [
				"date",
				"min-date",
				"max-date",
				"range-state",
				"disabled-date",
				"disabled",
				"cell-class-name",
				"onChangerange",
				"onSelect"
			])], 2), e.singlePanel ? S("v-if", !0) : (u(), N("div", {
				key: 0,
				class: p([[F(E).e("content"), F(D).e("content")], "is-right"])
			}, [j("div", { class: p(F(D).e("header")) }, [
				e.unlinkPanels ? (u(), N("button", {
					key: 0,
					type: "button",
					disabled: !W.value || F(q),
					class: p([[F(E).e("icon-btn"), F(E).is("disabled", !W.value || F(q))], "d-arrow-left"]),
					onClick: t[2] ||= (...e) => F(B) && F(B)(...e)
				}, [l(e.$slots, "prev-year", {}, () => [M(F(G), null, {
					default: k(() => [M(F(se))]),
					_: 1
				})])], 10, It)) : S("v-if", !0),
				j("button", {
					type: "button",
					class: p([F(E).e("icon-btn"), "d-arrow-right"]),
					disabled: F(q),
					onClick: t[3] ||= (...e) => F(z) && F(z)(...e)
				}, [l(e.$slots, "next-year", {}, () => [M(F(G), null, {
					default: k(() => [M(F(oe))]),
					_: 1
				})])], 10, Lt),
				j("div", null, c(F(H)), 1)
			], 2), M($e, {
				"selection-mode": "range",
				date: b.value,
				"min-date": F(ee),
				"max-date": F(C),
				"range-state": F(w),
				"disabled-date": F(m),
				disabled: F(q),
				"cell-class-name": F(h),
				onChangerange: F(O),
				onPick: ce,
				onSelect: F(P)
			}, null, 8, [
				"date",
				"min-date",
				"max-date",
				"range-state",
				"disabled-date",
				"disabled",
				"cell-class-name",
				"onChangerange",
				"onSelect"
			])], 2))], 2)
		], 2)], 2));
	}
}), Bt = V({ ...je }), Vt = [
	"pick",
	"set-picker-option",
	"calendar-change"
], Ht = ({ unlinkPanels: e, leftDate: t, rightDate: n }) => ({
	leftPrevYear: () => {
		t.value = t.value.subtract(10, "year"), e.value || (n.value = n.value.subtract(10, "year"));
	},
	rightNextYear: () => {
		e.value || (t.value = t.value.add(10, "year")), n.value = n.value.add(10, "year");
	},
	leftNextYear: () => {
		t.value = t.value.add(10, "year");
	},
	rightPrevYear: () => {
		n.value = n.value.subtract(10, "year");
	},
	leftLabel: x(() => {
		let e = Math.floor(t.value.year() / 10) * 10;
		return `${e}-${e + 9}`;
	}),
	rightLabel: x(() => {
		let e = Math.floor(n.value.year() / 10) * 10;
		return `${e}-${e + 9}`;
	}),
	leftYear: x(() => Math.floor(t.value.year() / 10) * 10 + 9),
	rightYear: x(() => Math.floor(n.value.year() / 10) * 10)
}), Ut = ["disabled", "onClick"], Wt = ["disabled"], Gt = ["disabled"], Kt = ["disabled"], qt = ["disabled"], Jt = 10, Yt = "year", Xt = /* @__PURE__ */ h({
	name: "DatePickerYearRange",
	__name: "panel-year-range",
	props: Bt,
	emits: Vt,
	setup(e, { emit: t }) {
		let n = e, a = t, { lang: o } = fe(), s = A((0, Q.default)().locale(o.value)), d = A((0, Q.default)().locale(o.value).add(Jt, Yt)), f = i(Oe, void 0), m = i(ve), { shortcuts: h, disabledDate: g, cellClassName: _ } = m.props, y = T(m.props, "format"), ee = T(m.props, "defaultValue"), { minDate: C, maxDate: w, rangeState: E, ppNs: D, drpNs: O, handleChangeRange: te, handleRangeConfirm: re, handleShortcutClick: P, onSelect: I, parseValue: L } = pt(n, {
			defaultValue: ee,
			leftDate: s,
			rightDate: d,
			step: Jt,
			unit: Yt,
			sortDates: ge
		}), { leftPrevYear: R, rightNextYear: z, leftNextYear: ie, rightPrevYear: B, leftLabel: V, rightLabel: H, leftYear: ae, rightYear: U } = Ht({
			unlinkPanels: T(n, "unlinkPanels"),
			leftDate: s,
			rightDate: d
		}), W = de(), ce = x(() => !!h.length), le = x(() => [
			D.b(),
			O.b(),
			D.is("border", n.border),
			D.is("disabled", W.value),
			{
				"has-sidebar": !!b().sidebar || ce.value,
				"single-panel": n.singlePanel
			}
		]), K = x(() => ({
			content: [
				D.e("content"),
				O.e("content"),
				O.is("left", !n.singlePanel)
			],
			arrowLeftBtn: [D.e("icon-btn"), "d-arrow-left"],
			arrowRightBtn: [
				D.e("icon-btn"),
				D.is("disabled", !q.value || W.value),
				"d-arrow-right"
			]
		})), ue = x(() => ({
			content: [
				D.e("content"),
				O.e("content"),
				"is-right"
			],
			arrowLeftBtn: [
				D.e("icon-btn"),
				D.is("disabled", !q.value || W.value),
				"d-arrow-left"
			],
			arrowRightBtn: [D.e("icon-btn"), "d-arrow-right"]
		})), q = x(() => n.singlePanel || n.unlinkPanels && U.value > ae.value + 1), J = (e, t = !0) => {
			let n = e.minDate, r = e.maxDate;
			w.value === r && C.value === n || (a("calendar-change", [n.toDate(), r && r.toDate()]), w.value = r, C.value = n, t && re());
		}, pe = (e) => ze(e, y.value, o.value, f), me = (e) => Ne(e) && (g ? !g(e[0].toDate()) && !g(e[1].toDate()) : !0), he = () => {
			let e = null;
			m?.emptyValues && (e = m.emptyValues.valueOnClear.value);
			let t = Pe(F(ee), {
				lang: F(o),
				step: Jt,
				unit: Yt,
				unlinkPanels: n.unlinkPanels
			});
			s.value = t[0], d.value = t[1], a("pick", e);
		};
		function ge(e, t) {
			if (n.unlinkPanels && t) {
				let n = e?.year() || 0, r = t.year();
				d.value = n + Jt > r ? t.add(Jt, Yt) : t;
			} else d.value = s.value.add(Jt, Yt);
		}
		return r(() => n.visible, (e) => {
			!e && E.value.selecting && (L(n.parsedValue), I(!1));
		}), a("set-picker-option", ["isValidValue", me]), a("set-picker-option", ["parseUserInput", pe]), a("set-picker-option", ["handleClear", he]), (e, t) => (u(), N("div", { class: p(le.value) }, [j("div", { class: p(F(D).e("body-wrapper")) }, [
			l(e.$slots, "sidebar", { class: p(F(D).e("sidebar")) }),
			ce.value ? (u(), N("div", {
				key: 0,
				class: p(F(D).e("sidebar"))
			}, [(u(!0), N(ne, null, v(F(h), (e, t) => (u(), N("button", {
				key: t,
				type: "button",
				class: p(F(D).e("shortcut")),
				disabled: F(W),
				onClick: (t) => F(P)(e)
			}, c(e.text), 11, Ut))), 128))], 2)) : S("v-if", !0),
			j("div", { class: p(F(D).e("body")) }, [j("div", { class: p(K.value.content) }, [j("div", { class: p(F(O).e("header")) }, [
				j("button", {
					type: "button",
					class: p(K.value.arrowLeftBtn),
					disabled: F(W),
					onClick: t[0] ||= (...e) => F(R) && F(R)(...e)
				}, [l(e.$slots, "prev-year", {}, () => [M(F(G), null, {
					default: k(() => [M(F(se))]),
					_: 1
				})])], 10, Wt),
				e.unlinkPanels || e.singlePanel ? (u(), N("button", {
					key: 0,
					type: "button",
					disabled: !q.value || F(W),
					class: p(K.value.arrowRightBtn),
					onClick: t[1] ||= (...e) => F(ie) && F(ie)(...e)
				}, [l(e.$slots, "next-year", {}, () => [M(F(G), null, {
					default: k(() => [M(F(oe))]),
					_: 1
				})])], 10, Gt)) : S("v-if", !0),
				j("div", null, c(F(V)), 1)
			], 2), M(nt, {
				"selection-mode": "range",
				date: s.value,
				"min-date": F(C),
				"max-date": F(w),
				"range-state": F(E),
				"disabled-date": F(g),
				disabled: F(W),
				"cell-class-name": F(_),
				onChangerange: F(te),
				onPick: J,
				onSelect: F(I)
			}, null, 8, [
				"date",
				"min-date",
				"max-date",
				"range-state",
				"disabled-date",
				"disabled",
				"cell-class-name",
				"onChangerange",
				"onSelect"
			])], 2), e.singlePanel ? S("v-if", !0) : (u(), N("div", {
				key: 0,
				class: p(ue.value.content)
			}, [j("div", { class: p(F(O).e("header")) }, [
				e.unlinkPanels ? (u(), N("button", {
					key: 0,
					type: "button",
					disabled: !q.value || F(W),
					class: p(ue.value.arrowLeftBtn),
					onClick: t[2] ||= (...e) => F(B) && F(B)(...e)
				}, [l(e.$slots, "prev-year", {}, () => [M(F(G), null, {
					default: k(() => [M(F(se))]),
					_: 1
				})])], 10, Kt)) : S("v-if", !0),
				j("button", {
					type: "button",
					class: p(ue.value.arrowRightBtn),
					disabled: F(W),
					onClick: t[3] ||= (...e) => F(z) && F(z)(...e)
				}, [l(e.$slots, "next-year", {}, () => [M(F(G), null, {
					default: k(() => [M(F(oe))]),
					_: 1
				})])], 10, qt),
				j("div", null, c(F(H)), 1)
			], 2), M(nt, {
				"selection-mode": "range",
				date: d.value,
				"min-date": F(C),
				"max-date": F(w),
				"range-state": F(E),
				"disabled-date": F(g),
				disabled: F(W),
				"cell-class-name": F(_),
				onChangerange: F(te),
				onPick: J,
				onSelect: F(I)
			}, null, 8, [
				"date",
				"min-date",
				"max-date",
				"range-state",
				"disabled-date",
				"disabled",
				"cell-class-name",
				"onChangerange",
				"onSelect"
			])], 2))], 2)
		], 2)], 2));
	}
}), Zt = function(e) {
	switch (e) {
		case "daterange":
		case "datetimerange": return kt;
		case "monthrange": return zt;
		case "yearrange": return Xt;
		default: return ut;
	}
}, Qt = /* @__PURE__ */ n(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).dayjs_plugin_advancedFormat = r();
	})(e, (function() {
		return function(e, t) {
			var n = t.prototype, r = n.format;
			n.format = function(e) {
				var t = this, n = this.$locale();
				if (!this.isValid()) return r.bind(this)(e);
				var i = this.$utils(), a = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(e) {
					switch (e) {
						case "Q": return Math.ceil((t.$M + 1) / 3);
						case "Do": return n.ordinal(t.$D);
						case "gggg": return t.weekYear();
						case "GGGG": return t.isoWeekYear();
						case "wo": return n.ordinal(t.week(), "W");
						case "w":
						case "ww": return i.s(t.week(), e === "w" ? 1 : 2, "0");
						case "W":
						case "WW": return i.s(t.isoWeek(), e === "W" ? 1 : 2, "0");
						case "k":
						case "kk": return i.s(String(t.$H === 0 ? 24 : t.$H), e === "k" ? 1 : 2, "0");
						case "X": return Math.floor(t.$d.getTime() / 1e3);
						case "x": return t.$d.getTime();
						case "z": return "[" + t.offsetName() + "]";
						case "zzz": return "[" + t.offsetName("long") + "]";
						default: return e;
					}
				}));
				return r.bind(this)(a);
			};
		};
	}));
})), $t = /* @__PURE__ */ n(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).dayjs_plugin_weekOfYear = r();
	})(e, (function() {
		var e = "week", t = "year";
		return function(n, r, i) {
			var a = r.prototype;
			a.week = function(n) {
				if (n === void 0 && (n = null), n !== null) return this.add(7 * (n - this.week()), "day");
				var r = this.$locale().yearStart || 1;
				if (this.month() === 11 && this.date() > 25) {
					var a = i(this).startOf(t).add(1, t).date(r), o = i(this).endOf(e);
					if (a.isBefore(o)) return 1;
				}
				var s = i(this).startOf(t).date(r).startOf(e).subtract(1, "millisecond"), c = this.diff(s, e, !0);
				return c < 0 ? i(this).startOf("week").week() : Math.ceil(c);
			}, a.weeks = function(e) {
				return e === void 0 && (e = null), this.week(e);
			};
		};
	}));
})), en = /* @__PURE__ */ n(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).dayjs_plugin_weekYear = r();
	})(e, (function() {
		return function(e, t) {
			t.prototype.weekYear = function() {
				var e = this.month(), t = this.week(), n = this.year();
				return t === 1 && e === 11 ? n + 1 : e === 0 && t >= 52 ? n - 1 : n;
			};
		};
	}));
})), tn = /* @__PURE__ */ n(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).dayjs_plugin_dayOfYear = r();
	})(e, (function() {
		return function(e, t, n) {
			t.prototype.dayOfYear = function(e) {
				var t = Math.round((n(this).startOf("day") - n(this).startOf("year")) / 864e5) + 1;
				return e == null ? t : this.add(e - t, "day");
			};
		};
	}));
})), nn = /* @__PURE__ */ n(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).dayjs_plugin_isSameOrAfter = r();
	})(e, (function() {
		return function(e, t) {
			t.prototype.isSameOrAfter = function(e, t) {
				return this.isSame(e, t) || this.isAfter(e, t);
			};
		};
	}));
})), rn = /* @__PURE__ */ n(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).dayjs_plugin_isSameOrBefore = r();
	})(e, (function() {
		return function(e, t) {
			t.prototype.isSameOrBefore = function(e, t) {
				return this.isSame(e, t) || this.isBefore(e, t);
			};
		};
	}));
})), an = /* @__PURE__ */ t(Y(), 1), on = /* @__PURE__ */ t(xe(), 1), sn = /* @__PURE__ */ t(Qt(), 1), cn = /* @__PURE__ */ t($t(), 1), ln = /* @__PURE__ */ t(en(), 1), un = /* @__PURE__ */ t(tn(), 1), dn = /* @__PURE__ */ t(nn(), 1), fn = /* @__PURE__ */ t(rn(), 1);
function pn(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !E(e);
}
Q.default.extend(on.default), Q.default.extend(sn.default), Q.default.extend(an.default), Q.default.extend(cn.default), Q.default.extend(ln.default), Q.default.extend(un.default), Q.default.extend(dn.default), Q.default.extend(fn.default);
var mn = /* @__PURE__ */ h({
	name: "ElDatePickerPanel",
	install: null,
	inheritAttrs: !1,
	props: Ee,
	emits: [
		B,
		"calendar-change",
		"panel-change",
		"visible-change",
		"clear"
	],
	setup(e, { slots: t, emit: n, attrs: r }) {
		let a = U("picker-panel");
		ie(i("EP_PICKER_BASE", void 0)) && _(ve, { props: ee({ ...w(e) }) }), _(De, {
			slots: t,
			pickerNs: a
		});
		let { parsedValue: o, onCalendarChange: s, onPanelChange: c, onSetPickerOption: l, onPick: u } = i(ye, () => Ce(e, n), !0);
		return () => M(Zt(e.type), f(R(r, "onPick"), e, {
			parsedValue: o.value,
			"onSet-picker-option": l,
			"onCalendar-change": s,
			"onPanel-change": c,
			onClear: () => n("clear"),
			onPick: u
		}), pn(t) ? t : { default: () => [t] });
	}
}), hn = /* @__PURE__ */ e({
	ElDatePickerPanel: () => gn,
	ROOT_PICKER_INJECTION_KEY: () => De,
	ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY: () => Oe,
	datePickerPanelProps: () => Ee,
	default: () => gn
}), gn = L(mn);
//#endregion
export { hn as n, Oe as r, gn as t };
