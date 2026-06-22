globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { r as e } from "../../shared/rolldown-runtime.js";
import { $ as t, A as n, C as r, Ft as i, H as a, Mt as o, N as s, T as c, Tt as l, W as u, _ as d, _t as f, b as p, n as ee, nt as m, p as h, tt as g, ut as _, v, w as y, x as b, y as x, yt as S, z as te } from "../../vue.runtime.js";
import { t as C } from "../../shared/lodash/isEqual.js";
import { t as ne } from "../../shared/lodash/debounce.js";
import { i as re, s as w } from "../../shared/element-plus/utils/types.js";
import { r as T, t as E } from "../../shared/element-plus/constants/event.js";
import { n as D, r as O } from "../../shared/element-plus/utils/vue/props/runtime.js";
import { r as k } from "../../shared/element-plus/utils/dom/style.js";
import { n as ie } from "../../shared/element-plus/utils/raf.js";
import { r as ae } from "../../shared/element-plus/hooks/use-namespace.js";
import { i as A, t as oe } from "../../shared/element-plus-icons.js";
import { t as j } from "../../el-icon.js";
import { a as se, n as M } from "../../shared/element-plus/constants/aria.js";
import { t as N } from "../../el-scrollbar.js";
import { n as P } from "../../shared/element-plus/hooks/use-locale.js";
import { t as F } from "../../shared/dayjs.js";
import { _ as I, c as L, h as R, i as ce, m as z, p as B, s as V, u as H } from "../utils.js";
import { t as U } from "../../shared/element-plus/directives/repeat-click.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/time-picker/src/props/shared.mjs
var W = D({
	disabledHours: { type: O(Function) },
	disabledMinutes: { type: O(Function) },
	disabledSeconds: { type: O(Function) }
}), G = D({
	visible: Boolean,
	actualVisible: {
		type: Boolean,
		default: void 0
	},
	format: {
		type: String,
		default: ""
	}
}), K = (e, t) => {
	let { lang: n } = P(), r = _(!1), i = _(!1), a = _(null), o = d(() => {
		let { modelValue: t } = e;
		return !t || l(t) && !t.filter(Boolean).length;
	}), s = (r) => {
		if (!I(e.modelValue, r)) {
			let i;
			l(r) ? i = r.map((t) => B(t, e.valueFormat, n.value)) : r && (i = B(r, e.valueFormat, n.value)), t(T, r && i, n.value);
		}
	}, c = d(() => {
		let t;
		if (o.value ? u.value.getDefaultValue && (t = u.value.getDefaultValue()) : t = l(e.modelValue) ? e.modelValue.map((t) => R(t, e.valueFormat, n.value)) : R(e.modelValue ?? "", e.valueFormat, n.value), u.value.getRangeAvailableTime) {
			let e = u.value.getRangeAvailableTime(t);
			C(e, t) || (t = e, o.value || s(H(t)));
		}
		return l(t) && t.some((e) => !e) && (t = []), t;
	}), u = _({});
	return {
		parsedValue: c,
		pickerActualVisible: i,
		pickerOptions: u,
		pickerVisible: r,
		userInput: a,
		valueIsEmpty: o,
		emitInput: s,
		onCalendarChange: (e) => {
			t("calendar-change", e);
		},
		onPanelChange: (e, n, r) => {
			t("panel-change", e, n, r);
		},
		onPick: (e = "", t = !1) => {
			r.value = t;
			let n;
			n = l(e) ? e.map((e) => e.toDate()) : e && e.toDate(), a.value = null, s(n);
		},
		onSetPickerOption: (e) => {
			u.value[e[0]] = e[1], u.value.panelReady = !0;
		}
	};
}, q = D({
	...G,
	datetimeRole: String,
	parsedValue: { type: O(Object) }
}), J = ({ getAvailableHours: e, getAvailableMinutes: t, getAvailableSeconds: n }) => {
	let r = (r, i, a, o) => {
		let s = {
			hour: e,
			minute: t,
			second: n
		}, c = r;
		return [
			"hour",
			"minute",
			"second"
		].forEach((e) => {
			if (s[e]) {
				let t, n = s[e];
				switch (e) {
					case "minute":
						t = n(c.hour(), i, o);
						break;
					case "second":
						t = n(c.hour(), c.minute(), i, o);
						break;
					default:
						t = n(i, o);
						break;
				}
				if (t?.length && !t.includes(c[e]())) {
					let n = a ? 0 : t.length - 1;
					c = c[e](t[n]);
				}
			}
		}), c;
	}, i = {};
	return {
		timePickerOptions: i,
		getAvailableTime: r,
		onSetOption: ([e, t]) => {
			i[e] = t;
		}
	};
}, Y = (e) => e.map((e, t) => e || t).filter((e) => e !== !0), le = (e, t, n) => ({
	getHoursList: (t, n) => z(24, e && (() => e?.(t, n))),
	getMinutesList: (e, n, r) => z(60, t && (() => t?.(e, n, r))),
	getSecondsList: (e, t, r, i) => z(60, n && (() => n?.(e, t, r, i)))
}), X = (e, t, n) => {
	let { getHoursList: r, getMinutesList: i, getSecondsList: a } = le(e, t, n);
	return {
		getAvailableHours: (e, t) => Y(r(e, t)),
		getAvailableMinutes: (e, t, n) => Y(i(e, t, n)),
		getAvailableSeconds: (e, t, n, r) => Y(a(e, t, n, r))
	};
}, Z = (e, n) => {
	let r = _(e.parsedValue);
	return t(() => e.visible, (t) => {
		let i = f(n.modelValue), a = f(n.valueOnClear);
		if (t && i === a) {
			r.value = a;
			return;
		}
		t || (r.value = e.parsedValue);
	}), r;
}, ue = D({
	role: {
		type: String,
		required: !0
	},
	spinnerDate: {
		type: O(Object),
		required: !0
	},
	showSeconds: {
		type: Boolean,
		default: !0
	},
	arrowControl: Boolean,
	amPmMode: {
		type: O(String),
		default: ""
	},
	...W
}), de = ["onClick"], fe = ["onMouseenter"], Q = /* @__PURE__ */ c({
	__name: "basic-time-spinner",
	props: ue,
	emits: [
		E,
		"select-range",
		"set-option"
	],
	setup(e, { emit: c }) {
		let l = e, { isRange: f, format: ee, saveOnBlur: C } = n(ce).props, w = c, T = ae("time"), { getHoursList: D, getMinutesList: O, getSecondsList: se } = le(l.disabledHours, l.disabledMinutes, l.disabledSeconds), M = !1, P = {
			hours: !1,
			minutes: !1,
			seconds: !1
		}, F = _(), I = {
			hours: _(),
			minutes: _(),
			seconds: _()
		}, R = d(() => l.showSeconds ? V : V.slice(0, 2)), z = d(() => {
			let { spinnerDate: e } = l;
			return {
				hours: e.hour(),
				minutes: e.minute(),
				seconds: e.second()
			};
		}), B = d(() => {
			let { hours: e, minutes: t } = S(z), { role: n, spinnerDate: r } = l, i = f ? void 0 : r;
			return {
				hours: D(n, i),
				minutes: O(e, n, i),
				seconds: se(e, t, n, i)
			};
		}), H = d(() => {
			let { hours: e, minutes: t, seconds: n } = S(z);
			return {
				hours: L(e, 23),
				minutes: L(t, 59),
				seconds: L(n, 59)
			};
		}), W = ne((e) => {
			M = !1, q(e);
		}, 200), G = (e) => {
			if (!l.amPmMode) return "";
			let t = l.amPmMode === "A", n = e < 12 ? " am" : " pm";
			return t && (n = n.toUpperCase()), n;
		}, K = (e) => {
			let t = [0, 0], n = ee || "HH:mm:ss", r = n.indexOf("HH"), i = n.indexOf("mm"), a = n.indexOf("ss");
			switch (e) {
				case "hours":
					r !== -1 && (t = [r, r + 2]);
					break;
				case "minutes":
					i !== -1 && (t = [i, i + 2]);
					break;
				case "seconds":
					a !== -1 && (t = [a, a + 2]);
					break;
			}
			let [o, s] = t;
			w("select-range", o, s), F.value = e;
		}, q = (e) => {
			X(e, S(z)[e]);
		}, J = () => {
			q("hours"), q("minutes"), q("seconds");
		}, Y = (e) => e.querySelector(`.${T.namespace.value}-scrollbar__wrap`), X = (e, t) => {
			if (l.arrowControl) return;
			let n = S(I[e]);
			n && n.$el && (C || (P[e] = !0, ie(() => {
				P[e] = !1;
			})), Y(n.$el).scrollTop = Math.max(0, t * Z(e)));
		}, Z = (e) => {
			let t = S(I[e])?.$el.querySelector("li");
			return t && Number.parseFloat(k(t, "height")) || 0;
		}, ue = () => {
			$(1);
		}, Q = () => {
			$(-1);
		}, $ = (e) => {
			F.value || K("hours");
			let t = F.value, n = S(z)[t], r = pe(t, n, e, F.value === "hours" ? 24 : 60);
			me(t, r), X(t, r), s(() => K(t));
		}, pe = (e, t, n, r) => {
			let i = (t + n + r) % r, a = S(B)[e];
			for (; a[i] && i !== t;) i = (i + n + r) % r;
			return i;
		}, me = (e, t) => {
			if (S(B)[e][t]) return;
			let { hours: n, minutes: r, seconds: i } = S(z), a;
			switch (e) {
				case "hours":
					a = l.spinnerDate.hour(t).minute(r).second(i);
					break;
				case "minutes":
					a = l.spinnerDate.hour(n).minute(t).second(i);
					break;
				case "seconds":
					a = l.spinnerDate.hour(n).minute(r).second(t);
					break;
			}
			w(E, a);
		}, he = (e, { value: t, disabled: n }) => {
			n || (me(e, t), K(e), X(e, t));
		}, ge = (e) => {
			if (!C && P[e]) return;
			let t = S(I[e]);
			t && (M = !0, W(e), me(e, Math.min(Math.round((Y(t.$el).scrollTop - (_e(e) * .5 - 10) / Z(e) + 3) / Z(e)), e === "hours" ? 23 : 59)));
		}, _e = (e) => S(I[e]).$el.offsetHeight, ve = () => {
			let e = (e) => {
				let t = S(I[e]);
				t && t.$el && (Y(t.$el).onscroll = () => {
					ge(e);
				});
			};
			e("hours"), e("minutes"), e("seconds");
		};
		te(() => {
			s(() => {
				!l.arrowControl && ve(), J(), l.role === "start" && K("hours");
			});
		});
		let ye = (e, t) => {
			I[t].value = e ?? void 0;
		};
		return w("set-option", [`${l.role}_scrollDown`, $]), w("set-option", [`${l.role}_emitSelectRange`, K]), t(() => l.spinnerDate, () => {
			M || J();
		}), (e, t) => (a(), b("div", { class: o([S(T).b("spinner"), { "has-seconds": e.showSeconds }]) }, [e.arrowControl ? p("v-if", !0) : (a(!0), b(h, { key: 0 }, u(R.value, (t) => (a(), x(S(N), {
			key: t,
			ref_for: !0,
			ref: (e) => ye(e, t),
			class: o(S(T).be("spinner", "wrapper")),
			"wrap-style": "max-height: inherit;",
			"view-class": S(T).be("spinner", "list"),
			noresize: "",
			tag: "ul",
			onMouseenter: (e) => K(t),
			onMousemove: (e) => q(t)
		}, {
			default: g(() => [(a(!0), b(h, null, u(B.value[t], (n, s) => (a(), b("li", {
				key: s,
				class: o([
					S(T).be("spinner", "item"),
					S(T).is("active", s === z.value[t]),
					S(T).is("disabled", n)
				]),
				onClick: (e) => he(t, {
					value: s,
					disabled: n
				})
			}, [t === "hours" ? (a(), b(h, { key: 0 }, [r(i(("0" + (e.amPmMode ? s % 12 || 12 : s)).slice(-2)) + i(G(s)), 1)], 64)) : (a(), b(h, { key: 1 }, [r(i(("0" + s).slice(-2)), 1)], 64))], 10, de))), 128))]),
			_: 2
		}, 1032, [
			"class",
			"view-class",
			"onMouseenter",
			"onMousemove"
		]))), 128)), e.arrowControl ? (a(!0), b(h, { key: 1 }, u(R.value, (t) => (a(), b("div", {
			key: t,
			class: o([S(T).be("spinner", "wrapper"), S(T).is("arrow")]),
			onMouseenter: (e) => K(t)
		}, [
			m((a(), x(S(j), { class: o(["arrow-up", S(T).be("spinner", "arrow")]) }, {
				default: g(() => [y(S(A))]),
				_: 1
			}, 8, ["class"])), [[S(U), Q]]),
			m((a(), x(S(j), { class: o(["arrow-down", S(T).be("spinner", "arrow")]) }, {
				default: g(() => [y(S(oe))]),
				_: 1
			}, 8, ["class"])), [[S(U), ue]]),
			v("ul", { class: o(S(T).be("spinner", "list")) }, [(a(!0), b(h, null, u(H.value[t], (n, s) => (a(), b("li", {
				key: s,
				class: o([
					S(T).be("spinner", "item"),
					S(T).is("active", n === z.value[t]),
					S(T).is("disabled", B.value[t][n])
				])
			}, [S(re)(n) ? (a(), b(h, { key: 0 }, [t === "hours" ? (a(), b(h, { key: 0 }, [r(i(("0" + (e.amPmMode ? n % 12 || 12 : n)).slice(-2)) + i(G(n)), 1)], 64)) : (a(), b(h, { key: 1 }, [r(i(("0" + n).slice(-2)), 1)], 64))], 64)) : p("v-if", !0)], 2))), 128))], 2)
		], 42, fe))), 128)) : p("v-if", !0)], 2));
	}
}), $ = /* @__PURE__ */ e(F(), 1), pe = /* @__PURE__ */ c({
	__name: "panel-time-pick",
	props: q,
	emits: [
		"pick",
		"select-range",
		"set-picker-option"
	],
	setup(e, { emit: t }) {
		let r = e, c = t, l = n(ce), { arrowControl: u, disabledHours: f, disabledMinutes: m, disabledSeconds: h, defaultValue: te } = l.props, { getAvailableHours: C, getAvailableMinutes: ne, getAvailableSeconds: re } = X(f, m, h), T = ae("time"), { t: E, lang: D } = P(), O = _([0, 2]), k = Z(r, {
			modelValue: d(() => l.props.modelValue),
			valueOnClear: d(() => l?.emptyValues ? l.emptyValues.valueOnClear.value : null)
		}), ie = d(() => w(r.actualVisible) ? `${T.namespace.value}-zoom-in-top` : ""), A = d(() => r.format.includes("ss")), oe = d(() => r.format.includes("A") ? "A" : r.format.includes("a") ? "a" : ""), j = (e) => {
			let t = (0, $.default)(e).locale(D.value), n = U(t);
			return t.isSame(n);
		}, N = () => {
			let e = k.value;
			c("pick", e, !1), s(() => {
				k.value = e;
			});
		}, F = (e = !1, t = !1) => {
			t || c("pick", r.parsedValue, e);
		}, I = (e) => {
			r.visible && c("pick", U(e).millisecond(0), !0);
		}, L = (e, t) => {
			c("select-range", e, t), O.value = [e, t];
		}, R = (e) => {
			let t = r.format, n = t.indexOf("HH"), i = t.indexOf("mm"), a = t.indexOf("ss"), o = [], s = [];
			n !== -1 && (o.push(n), s.push("hours")), i !== -1 && (o.push(i), s.push("minutes")), a !== -1 && A.value && (o.push(a), s.push("seconds"));
			let c = (o.indexOf(O.value[0]) + e + o.length) % o.length;
			B.start_emitSelectRange(s[c]);
		}, z = (e) => {
			let t = M(e), { left: n, right: r, up: i, down: a } = se;
			if ([n, r].includes(t)) {
				R(t === n ? -1 : 1), e.preventDefault();
				return;
			}
			if ([i, a].includes(t)) {
				let n = t === i ? -1 : 1;
				B.start_scrollDown(n), e.preventDefault();
				return;
			}
		}, { timePickerOptions: B, onSetOption: V, getAvailableTime: H } = J({
			getAvailableHours: C,
			getAvailableMinutes: ne,
			getAvailableSeconds: re
		}), U = (e) => H(e, r.datetimeRole || "", !0);
		return c("set-picker-option", ["isValidValue", j]), c("set-picker-option", ["parseUserInput", (e) => e ? (0, $.default)(e, r.format).locale(D.value) : null]), c("set-picker-option", ["handleKeydownInput", z]), c("set-picker-option", ["getRangeAvailableTime", U]), c("set-picker-option", ["getDefaultValue", () => (0, $.default)(te).locale(D.value)]), c("set-picker-option", ["handleCancel", N]), (e, t) => (a(), x(ee, { name: ie.value }, {
			default: g(() => [e.actualVisible || e.visible ? (a(), b("div", {
				key: 0,
				class: o(S(T).b("panel"))
			}, [v("div", { class: o([S(T).be("panel", "content"), { "has-seconds": A.value }]) }, [y(Q, {
				ref: "spinner",
				role: e.datetimeRole || "start",
				"arrow-control": S(u),
				"show-seconds": A.value,
				"am-pm-mode": oe.value,
				"spinner-date": e.parsedValue,
				"disabled-hours": S(f),
				"disabled-minutes": S(m),
				"disabled-seconds": S(h),
				onChange: I,
				onSetOption: S(V),
				onSelectRange: L
			}, null, 8, [
				"role",
				"arrow-control",
				"show-seconds",
				"am-pm-mode",
				"spinner-date",
				"disabled-hours",
				"disabled-minutes",
				"disabled-seconds",
				"onSetOption"
			])], 2), v("div", { class: o(S(T).be("panel", "footer")) }, [v("button", {
				type: "button",
				class: o([S(T).be("panel", "btn"), "cancel"]),
				onClick: N
			}, i(S(E)("el.datepicker.cancel")), 3), v("button", {
				type: "button",
				class: o([S(T).be("panel", "btn"), "confirm"]),
				onClick: t[0] ||= (e) => F()
			}, i(S(E)("el.datepicker.confirm")), 3)], 2)], 2)) : p("v-if", !0)]),
			_: 1
		}, 8, ["name"]));
	}
});
//#endregion
export { J as a, G as c, Z as i, Q as n, K as o, X as r, W as s, pe as t };
