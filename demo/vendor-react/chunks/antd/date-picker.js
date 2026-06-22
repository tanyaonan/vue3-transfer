globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { F as n, It as r, N as i, Nt as a, P as o, kn as s } from "../shared/core.js";
import { $t as c, E as l, Jn as u, O as d, Rn as ee, Sn as te, Sr as f, T as ne, Vn as re, Wn as ie, Xn as p, br as m, en as ae, fn as h, it as oe, kn as se, ot as ce, xt as g } from "../shared/antd-core.js";
import { l as le, o as _ } from "./auto-complete.js";
import { D as v, E as ue, T as de, n as fe } from "./calendar.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/date-picker/hooks/useMergedPickerSemantic.js
var y = /* @__PURE__ */ t(s()), b = (e, t, n, r, i, o) => {
	let { classNames: s, styles: c } = f(e), [l, d] = u([s, t], [c, n], { props: o }, { popup: { _default: "root" } });
	return y.useMemo(() => [{
		...l,
		popup: {
			...l.popup,
			root: a(l.popup?.root, r)
		}
	}, {
		...d,
		popup: {
			...d.popup,
			root: {
				...d.popup?.root,
				...i
			}
		}
	}], [
		l,
		d,
		r,
		i
	]);
}, pe = (e, t, n) => p(n) ? n : t === "year" && e.lang.yearPlaceholder ? e.lang.yearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.quarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.monthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.weekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.placeholder : e.lang.placeholder, me = (e, t, n) => p(n) ? n : t === "year" && e.lang.rangeYearPlaceholder ? e.lang.rangeYearPlaceholder : t === "quarter" && e.lang.rangeQuarterPlaceholder ? e.lang.rangeQuarterPlaceholder : t === "month" && e.lang.rangeMonthPlaceholder ? e.lang.rangeMonthPlaceholder : t === "week" && e.lang.rangeWeekPlaceholder ? e.lang.rangeWeekPlaceholder : t === "time" && e.timePickerLocale.rangePlaceholder ? e.timePickerLocale.rangePlaceholder : e.lang.rangePlaceholder, he = (e, t) => {
	let { allowClear: n = !0 } = e, { clearIcon: r, removeIcon: i } = _({
		...e,
		prefixCls: t,
		componentName: "DatePicker"
	});
	return [y.useMemo(() => n === !1 ? !1 : {
		clearIcon: r,
		...n === !0 ? {} : n
	}, [n, r]), i];
}, [x, S] = ["week", "WeekPicker"], [C, w] = ["month", "MonthPicker"], [T, E] = ["year", "YearPicker"], [D, O] = ["quarter", "QuarterPicker"], [k, A] = ["time", "TimePicker"], j = (e) => /*#__PURE__*/ y.createElement(g, {
	size: "small",
	type: "primary",
	...e
});
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/date-picker/generatePicker/useComponents.js
function ge(e) {
	return (0, y.useMemo)(() => ({
		button: j,
		...e
	}), [e]);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/date-picker/generatePicker/useSuffixIcon.js
var _e = ({ picker: e, hasFeedback: t, feedbackIcon: n, suffixIcon: r }) => r === null || r === !1 ? null : r === !0 || r === void 0 ? /*#__PURE__*/ y.createElement(y.Fragment, null, e === k ? /*#__PURE__*/ y.createElement(i, { "aria-hidden": "true" }) : /*#__PURE__*/ y.createElement(o, { "aria-hidden": "true" }), t && n) : r, M = (e) => /* @__PURE__ */ (0, y.forwardRef)((t, i) => {
	let { prefixCls: o, getPopupContainer: s, components: u, className: d, style: p, classNames: g, styles: _, placement: v, size: de, disabled: pe, bordered: he = !0, placeholder: x, status: S, variant: C, picker: w, dropdownClassName: T, popupClassName: E, popupStyle: D, rootClassName: O, suffixIcon: A, separator: j, allowClear: M, clearIcon: N, ...P } = t, F = w === k ? "timePicker" : "datePicker", { suffixIcon: I, clearIcon: ve, allowClear: ye } = f(F), [be, L] = b(F, g, _, E || T, D), R = y.useRef(null), { getPrefixCls: z, direction: B, getPopupContainer: V, rangePicker: H } = (0, y.useContext)(m), U = z("picker", o), { compactSize: W, compactItemClassnames: xe } = c(U, B), G = z(), Se = j ?? H?.separator, [Ce, K] = le("rangePicker", C, he), q = ie(U), [we, Te] = fe(U, q), J = a(we, Te, q, O), Ee = te({
		componentName: "RangePicker",
		allowClear: M,
		clearIcon: N,
		contextAllowClear: ye,
		contextClearIcon: ve,
		defaultAllowClear: !0
	}), De = ge(u), Y = ae((e) => de ?? W ?? e), Oe = y.useContext(se), X = pe ?? Oe, { hasFeedback: Z, status: Q, feedbackIcon: ke } = (0, y.useContext)(ce), Ae = _e({
		picker: w,
		hasFeedback: Z,
		feedbackIcon: ke,
		suffixIcon: A === void 0 ? I : A
	});
	(0, y.useImperativeHandle)(i, () => R.current);
	let [je] = ee("Calendar", re), $ = r(je, t.locale || {}), [Me] = h("DatePicker", L?.popup?.root?.zIndex);
	return /*#__PURE__*/ y.createElement(oe, { space: !0 }, /*#__PURE__*/ y.createElement(ue, {
		separator: /*#__PURE__*/ y.createElement("span", {
			"aria-label": "to",
			className: `${U}-separator`
		}, Se ?? /*#__PURE__*/ y.createElement(n, null)),
		disabled: X,
		ref: R,
		placement: v,
		placeholder: me($, w, x),
		suffixIcon: Ae,
		prevIcon: /*#__PURE__*/ y.createElement("span", { className: `${U}-prev-icon` }),
		nextIcon: /*#__PURE__*/ y.createElement("span", { className: `${U}-next-icon` }),
		superPrevIcon: /*#__PURE__*/ y.createElement("span", { className: `${U}-super-prev-icon` }),
		superNextIcon: /*#__PURE__*/ y.createElement("span", { className: `${U}-super-next-icon` }),
		transitionName: `${G}-slide-up`,
		picker: w,
		...P,
		locale: $.lang,
		getPopupContainer: s || V,
		generateConfig: e,
		components: De,
		direction: B,
		prefixCls: U,
		rootClassName: J,
		className: a({
			[`${U}-large`]: Y === "large",
			[`${U}-small`]: Y === "small",
			[`${U}-${Ce}`]: K
		}, l(U, ne(Q, S), Z), xe, d, H?.className),
		style: {
			...H?.style,
			...p
		},
		classNames: be,
		styles: {
			...L,
			popup: {
				...L.popup,
				root: {
					...L.popup.root,
					zIndex: Me
				}
			}
		},
		allowClear: Ee
	}));
}), N = (e) => {
	let t = (t, n = "DatePicker") => {
		let i = n === A ? "timePicker" : "datePicker";
		return /* @__PURE__ */ (0, y.forwardRef)((o, s) => {
			let { prefixCls: u, getPopupContainer: d, components: p, style: g, className: _, size: v, bordered: ue, placement: me, placeholder: x, disabled: S, status: C, variant: w, onCalendarChange: T, classNames: E, styles: D, dropdownClassName: O, popupClassName: k, popupStyle: j, rootClassName: M, suffixIcon: N, allowClear: P, clearIcon: F, ...I } = o, { suffixIcon: ve, clearIcon: ye, allowClear: be } = f(n === A ? "timePicker" : "datePicker"), { getPrefixCls: L, direction: R, getPopupContainer: z, [i]: B } = (0, y.useContext)(m), V = L("picker", u), { compactSize: H, compactItemClassnames: U } = c(V, R), W = ae((e) => v ?? H ?? e), xe = y.useContext(se), G = S ?? xe, Se = {
				...o,
				size: W,
				disabled: G,
				status: C,
				variant: w
			}, [Ce, K] = b(i, E, D, k || O, j, Se), q = y.useRef(null), [we, Te] = le("datePicker", w, ue), J = ie(V), [Ee, De] = fe(V, J), Y = a(Ee, De, J, M);
			(0, y.useImperativeHandle)(s, () => q.current);
			let Oe = { showToday: !0 }, X = t || o.picker, Z = L(), { onSelect: Q, multiple: ke } = I, Ae = Q && t === "time" && !ke, je = (e, t, n) => {
				T?.(e, t, n), Ae && Q(e);
			}, [, $] = he(o, V), Me = te({
				componentName: n,
				allowClear: P,
				clearIcon: F,
				contextAllowClear: be,
				contextClearIcon: ye,
				defaultAllowClear: !0
			}), Ne = ge(p), { hasFeedback: Pe, status: Fe, feedbackIcon: Ie } = (0, y.useContext)(ce), Le = _e({
				picker: X,
				hasFeedback: Pe,
				feedbackIcon: Ie,
				suffixIcon: N === void 0 ? ve : N
			}), [Re] = ee("DatePicker", re), ze = r(Re, o.locale || {}), [Be] = h("DatePicker", K?.popup?.root?.zIndex);
			return /*#__PURE__*/ y.createElement(oe, { space: !0 }, /*#__PURE__*/ y.createElement(de, {
				ref: q,
				placeholder: pe(ze, X, x),
				suffixIcon: Le,
				placement: me,
				prevIcon: /*#__PURE__*/ y.createElement("span", { className: `${V}-prev-icon` }),
				nextIcon: /*#__PURE__*/ y.createElement("span", { className: `${V}-next-icon` }),
				superPrevIcon: /*#__PURE__*/ y.createElement("span", { className: `${V}-super-prev-icon` }),
				superNextIcon: /*#__PURE__*/ y.createElement("span", { className: `${V}-super-next-icon` }),
				transitionName: `${Z}-slide-up`,
				picker: t,
				onCalendarChange: je,
				...Oe,
				...I,
				locale: ze.lang,
				getPopupContainer: d || z,
				generateConfig: e,
				components: Ne,
				direction: R,
				disabled: G,
				prefixCls: V,
				rootClassName: Y,
				className: a({
					[`${V}-large`]: W === "large",
					[`${V}-small`]: W === "small",
					[`${V}-${we}`]: Te
				}, l(V, ne(Fe, C), Pe), U, B?.className, _),
				style: {
					...B?.style,
					...g
				},
				classNames: Ce,
				styles: {
					...K,
					popup: {
						...K.popup,
						root: {
							...K.popup.root,
							zIndex: Be
						}
					}
				},
				allowClear: Me,
				removeIcon: $
			}));
		});
	}, n = t(), i = t(x, S), o = t(C, w), s = t(T, E), u = t(D, O);
	return {
		DatePicker: n,
		WeekPicker: i,
		MonthPicker: o,
		YearPicker: s,
		TimePicker: t(k, A),
		QuarterPicker: u
	};
}, P = (e) => {
	let { DatePicker: t, WeekPicker: n, MonthPicker: r, YearPicker: i, TimePicker: a, QuarterPicker: o } = N(e), s = M(e), c = t;
	return c.WeekPicker = n, c.MonthPicker = r, c.YearPicker = i, c.RangePicker = s, c.TimePicker = a, c.QuarterPicker = o, c;
}, F = /* @__PURE__ */ e({ default: () => I }), I = P(v);
I._InternalPanelDoNotUseOrYouWillBeFired = d(I, "popupAlign", void 0, "picker"), I._InternalRangePanelDoNotUseOrYouWillBeFired = d(I.RangePicker, "popupAlign", void 0, "picker"), I.generatePicker = P;
//#endregion
export { F as n, b as r, I as t };
