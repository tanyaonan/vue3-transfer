globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as ee, L as r, N as i, P as a, U as o, a as s, c, d as l, g as u, h as d, k as f, l as te, m as p, s as m, u as h, z as g } from "./vue.runtime.js";
import { N as _, P as v, b as y, g as b, l as x } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as S, n as C, o as w, r as T, s as E, t as D } from "./shared/wot-ui/common/props.ts.js";
import { t as O } from "./wd-action-sheet.js";
import { t as ne } from "./wd-button.js";
import { t as k } from "./shared/wot-ui/common/formatDate.ts.js";
import { t as re } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { i as ie, r as ae, t as oe } from "./wd-calendar-view.js";
import { t as se } from "./wd-tabs.js";
import { t as A } from "./wd-tab.js";
import { t as ce } from "./wd-tag.js";
import { t as le } from "./shared/wot-ui/common/interceptor.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-calendar/types.ts
var j = /* @__PURE__ */ new Date(), M = new Date(j.getFullYear(), j.getMonth() - 6, j.getDate()).getTime(), N = new Date(j.getFullYear(), j.getMonth() + 6, j.getDate(), 23, 59, 59).getTime(), P = {
	...D,
	modelValue: w([
		Number,
		Array,
		null
	]),
	type: E("date"),
	minDate: S(M),
	maxDate: S(N),
	firstDayOfWeek: S(0),
	formatter: Function,
	maxRange: Number,
	rangePrompt: String,
	allowSameDay: T(!1),
	defaultTime: { type: [String, Array] },
	timeFilter: Function,
	hideSecond: T(!1),
	title: String,
	closeOnClickModal: T(!0),
	zIndex: S(15),
	showConfirm: T(!0),
	confirmText: String,
	innerDisplayFormat: Function,
	ellipsis: T(!1),
	showTypeSwitch: T(!1),
	shortcuts: C(),
	onShortcutsClick: Function,
	safeAreaInsetBottom: T(!0),
	beforeConfirm: Function,
	customViewClass: E(""),
	immediateChange: T(!1),
	rootPortal: T(!1),
	visible: T(!1),
	panelHeight: S(316),
	showPanelTitle: T(!0),
	switchMode: E("none"),
	duration: S(200)
}, F = { class: "wd-calendar__header" }, I = {
	key: 0,
	class: "wd-calendar__tabs"
}, L = {
	key: 1,
	class: "wd-calendar__shortcuts"
}, R = {
	key: 0,
	class: "wd-calendar__range"
}, z = {
	key: 1,
	class: "wd-calendar__confirm"
}, B = { class: "wd-calendar__confirm-btn-wrapper" }, V = /* @__PURE__ */ u({
	name: "wd-calendar",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: P,
	emits: [
		"cancel",
		"change",
		"update:modelValue",
		"confirm",
		"open",
		"update:visible"
	],
	setup(u, { expose: S, emit: C }) {
		let w = u, T = C, { translate: E } = re("calendar"), D = r(!1), j = r(null), M = r(null), N = r(!0), P = r(0), V = r(0), H = r("date"), U = r(), W = r(!1), G = r(), K = r(), q = r(!1), J = r(-1), ue = (e, t, n) => {
			switch (n) {
				case "daterange": return e ? k(e, E("dateFormat")) : E(t === "end" ? "endTime" : "startTime");
				case "datetimerange": return e ? k(e, E("timeFormat")) : E(t === "end" ? "endTime" : "startTime");
				case "weekrange": return e ? E("weekFormat", new Date(e).getFullYear(), _(ae(e))) : E(t === "end" ? "endWeek" : "startWeek");
				case "monthrange": return e ? k(e, E("monthFormat")) : E(t === "end" ? "endMonth" : "startMonth");
			}
		}, Y = m(() => {
			let [e, t] = x(b(j.value) ? j.value : []);
			return [e, t].map((e, t) => (w.innerDisplayFormat || ue)(e, t === 0 ? "start" : "end", H.value));
		});
		i(() => w.modelValue, (e, t) => {
			y(e, t) || (j.value = x(e), N.value = Z(e));
		}, { immediate: !0 }), i(() => w.type, (e) => {
			w.showTypeSwitch && (P.value = e.indexOf("range") > -1 ? [
				"daterange",
				"weekrange",
				"monthrange"
			].indexOf(e) || 0 : [
				"date",
				"week",
				"month"
			].indexOf(e)), H.value = x(e);
		}, {
			deep: !0,
			immediate: !0
		}), i(() => w.visible, (e) => {
			D.value = e;
		}, { immediate: !0 });
		function de() {
			w.showTypeSwitch && (K.value && K.value.scrollIntoView(), K.value && K.value.updateLineStyle(!1));
		}
		function fe() {
			q.value ? q.value = !1 : (j.value = x(M.value), P.value = V.value, H.value = U.value || "date", N.value = Z(M.value));
		}
		i(D, async (e) => {
			T("update:visible", e), e ? (W.value = !0, M.value = x(j.value), V.value = P.value, U.value = H.value, await v(), pe(), T("open")) : q.value || T("cancel");
		});
		function pe() {
			G.value && G.value.scrollIntoView();
		}
		function me() {
			D.value = !0;
		}
		function X() {
			D.value = !1;
		}
		function he({ index: e }) {
			let t = w.type.indexOf("range") > -1 ? [
				"daterange",
				"weekrange",
				"monthrange"
			][e] : [
				"date",
				"week",
				"month"
			][e];
			P.value = e, H.value = t;
		}
		function Z(e) {
			let t = !1;
			return (w.type.indexOf("range") > -1 && (!b(e) || !e[0] || !e[1] || !e) || w.type === "dates" && (!b(e) || e.length === 0 || !e) || !e) && (t = !0), t;
		}
		function ge({ value: e }) {
			j.value = x(e), N.value = Z(e), J.value = -1, T("change", { value: e }), !w.showConfirm && !N.value && Q();
		}
		function Q() {
			le(w.beforeConfirm, {
				args: [j.value],
				done: $
			});
		}
		function $() {
			q.value = !0, D.value = !1, U.value = H.value, T("update:modelValue", j.value), T("confirm", {
				value: j.value,
				type: H.value
			});
		}
		function _e(e) {
			J.value = e, w.onShortcutsClick && typeof w.onShortcutsClick == "function" && (j.value = x(w.onShortcutsClick({
				item: w.shortcuts[e],
				index: e
			})), N.value = Z(j.value)), w.showConfirm || Q();
		}
		return S({
			close: X,
			open: me
		}), (r, i) => (n(), l("div", {
			class: t(`wd-calendar ${r.customClass}`),
			style: ee(r.customStyle)
		}, [d(O, {
			modelValue: D.value,
			"onUpdate:modelValue": i[2] ||= (e) => D.value = e,
			duration: r.duration,
			"close-on-click-modal": r.closeOnClickModal,
			"safe-area-inset-bottom": r.safeAreaInsetBottom,
			"z-index": r.zIndex,
			"root-portal": r.rootPortal,
			title: r.title || g(E)("title"),
			"custom-class": "wd-calendar__popup",
			onClose: X,
			onAfterEnter: de,
			onAfterLeave: fe
		}, {
			default: a(() => [
				c("div", F, [r.showTypeSwitch ? (n(), l("div", I, [d(se, {
					ref_key: "calendarTabs",
					ref: K,
					modelValue: P.value,
					"onUpdate:modelValue": i[0] ||= (e) => P.value = e,
					onChange: he
				}, {
					default: a(() => [
						d(A, {
							title: g(E)("day"),
							name: g(E)("day")
						}, null, 8, ["title", "name"]),
						d(A, {
							title: g(E)("week"),
							name: g(E)("week")
						}, null, 8, ["title", "name"]),
						d(A, {
							title: g(E)("month"),
							name: g(E)("month")
						}, null, 8, ["title", "name"])
					]),
					_: 1
				}, 8, ["modelValue"])])) : h("", !0), r.shortcuts.length > 0 ? (n(), l("div", L, [(n(!0), l(s, null, f(r.shortcuts, (e, t) => (n(), te(ce, {
					key: t,
					"custom-class": `wd-calendar__tag ${t === r.shortcuts.length - 1 ? "is-last-tag" : ""}`,
					type: J.value === t ? "primary" : "default",
					variant: J.value === t ? "dark" : "light",
					onClick: (e) => _e(t)
				}, {
					default: a(() => [p(o(e.text), 1)]),
					_: 2
				}, 1032, [
					"custom-class",
					"type",
					"variant",
					"onClick"
				]))), 128))])) : h("", !0)]),
				W.value ? (n(), l("div", {
					key: 0,
					class: t(`wd-calendar__view  ${H.value.indexOf("range") > -1 ? "is-range" : ""} ${r.showConfirm ? "is-show-confirm" : ""}`)
				}, [g(ie)(H.value) ? (n(), l("div", R, [
					c("div", { class: t(`wd-calendar__range-item ${!j.value || !g(b)(j.value) || !j.value[0] ? "is-placeholder" : ""}`) }, o(Y.value[0]), 3),
					i[3] ||= c("div", { class: "wd-calendar__range-separator" }, null, -1),
					c("div", { class: t(`wd-calendar__range-item ${!j.value || !g(b)(j.value) || !j.value[1] ? "is-placeholder" : ""}`) }, o(Y.value[1]), 3)
				])) : h("", !0), d(oe, {
					ref_key: "calendarViewRef",
					ref: G,
					modelValue: j.value,
					"onUpdate:modelValue": i[1] ||= (e) => j.value = e,
					type: H.value,
					"min-date": r.minDate,
					"max-date": r.maxDate,
					"first-day-of-week": r.firstDayOfWeek,
					formatter: r.formatter,
					"panel-height": r.panelHeight,
					"max-range": r.maxRange,
					"range-prompt": r.rangePrompt,
					"allow-same-day": r.allowSameDay,
					"default-time": r.defaultTime,
					"time-filter": r.timeFilter,
					"hide-second": r.hideSecond,
					"show-panel-title": r.showPanelTitle,
					"immediate-change": r.immediateChange,
					"switch-mode": r.switchMode,
					onChange: ge
				}, null, 8, [
					"modelValue",
					"type",
					"min-date",
					"max-date",
					"first-day-of-week",
					"formatter",
					"panel-height",
					"max-range",
					"range-prompt",
					"allow-same-day",
					"default-time",
					"time-filter",
					"hide-second",
					"show-panel-title",
					"immediate-change",
					"switch-mode"
				])], 2)) : h("", !0),
				r.showConfirm ? (n(), l("div", z, [
					e(r.$slots, "confirm-left"),
					c("div", B, [d(ne, {
						size: "large",
						block: "",
						disabled: N.value,
						onClick: Q
					}, {
						default: a(() => [p(o(r.confirmText || g(E)("confirm")), 1)]),
						_: 1
					}, 8, ["disabled"])]),
					e(r.$slots, "confirm-right")
				])) : h("", !0)
			]),
			_: 3
		}, 8, [
			"modelValue",
			"duration",
			"close-on-click-modal",
			"safe-area-inset-bottom",
			"z-index",
			"root-portal",
			"title"
		])], 6));
	}
});
//#endregion
export { V as default };
