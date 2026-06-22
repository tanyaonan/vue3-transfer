globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, M as a, N as o, P as s, U as c, a as l, c as u, d, g as f, h as p, k as m, l as h, m as g, s as _, u as v } from "./vue.runtime.js";
import { a as y, i as b, r as x, s as S, t as C } from "./shared/wot-ui/common/props.ts.js";
import { t as w } from "./wd-icon.js";
import { t as T } from "./wd-popup.js";
import { t as E } from "./wd-loading.js";
import { t as D } from "./shared/wot-ui/composables/useTouch.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-keyboard/key/types.ts
var O = /* @__PURE__ */ f({
	name: "wd-key",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: {
		type: S(""),
		text: y(""),
		wider: x(!1),
		large: x(!1),
		loading: x(!1),
		isCar: x(!1)
	},
	emits: ["press"],
	setup(e, { emit: r }) {
		let a = e, o = r, s = D(), f = i(!1), p = _(() => `wd-key ${a.large ? "wd-key--large" : ""} ${a.type === "delete" ? "wd-key--delete" : ""} ${a.type === "close" ? "wd-key--close" : ""} ${a.isCar ? "is-car" : ""} ${f.value ? "wd-key--active" : ""}`);
		function m(e) {
			s.touchStart(e), f.value = !0;
		}
		function y(e) {
			s.touchMove(e), s.direction.value && (f.value = !1);
		}
		function b() {
			f.value && (f.value = !1, o("press", a.text, a.type));
		}
		return (e, r) => (n(), d("div", {
			class: t(`wd-key-wrapper ${e.wider ? "wd-key-wrapper--wider" : ""}`),
			onTouchstart: m,
			onTouchmove: y,
			onTouchend: b
		}, [u("div", { class: t(p.value) }, [a.loading ? (n(), h(E, {
			key: 0,
			"custom-class": "wd-key__loading-icon"
		})) : v("", !0), e.type === "delete" ? (n(), d(l, { key: 1 }, [e.text ? (n(), d(l, { key: 0 }, [g(c(e.text), 1)], 64)) : (n(), h(w, {
			key: 1,
			"custom-class": "wd-key__icon",
			name: "del",
			size: "22px"
		}))], 64)) : e.type === "extra" ? (n(), d(l, { key: 2 }, [e.text ? (n(), d(l, { key: 0 }, [g(c(e.text), 1)], 64)) : (n(), h(w, {
			key: 1,
			"custom-class": "wd-key__icon",
			name: "keyboard",
			size: "22px"
		}))], 64)) : (n(), d(l, { key: 3 }, [g(c(e.text), 1)], 64))], 2)], 34));
	}
}), k = {
	...C,
	visible: x(!1),
	modelValue: S(""),
	title: String,
	mode: S("default"),
	zIndex: b(100),
	maxlength: b(Infinity),
	showDeleteKey: x(!0),
	randomKeyOrder: x(!1),
	closeText: String,
	deleteText: String,
	closeButtonLoading: x(!1),
	modal: x(!1),
	hideOnClickOutside: x(!0),
	lockScroll: x(!0),
	safeAreaInsetBottom: x(!0),
	extraKey: [String, Array],
	rootPortal: x(!1),
	carLang: String,
	autoSwitchLang: x(!1)
}, A = /* @__PURE__ */ "京.沪.粤.津.冀.豫.云.辽.黑.湘.皖.鲁.苏.浙.赣.鄂.桂.甘.晋.陕.蒙.吉.闽.贵.渝.川.青.琼.宁.挂.藏.港.澳.新.使.学".split("."), j = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	0,
	"Q",
	"W",
	"E",
	"R",
	"T",
	"Y",
	"U",
	"P",
	"A",
	"S",
	"D",
	"F",
	"G",
	"H",
	"J",
	"K",
	"L",
	"Z",
	"X",
	"C",
	"V",
	"B",
	"N",
	"M"
], M = {
	key: 0,
	class: "wd-keyboard__header"
}, N = { class: "wd-keyboard__title" }, P = {
	key: 1,
	class: "wd-keyboard__body"
}, F = { class: "wd-keyboard__keys" }, I = {
	key: 0,
	class: "wd-keyboard__sidebar"
}, L = {
	key: 2,
	class: "wd-keyboard__body"
}, R = { class: "wd-keyboard__car-keys" }, z = /* @__PURE__ */ f({
	name: "wd-keyboard",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: k,
	emits: [
		"update:visible",
		"input",
		"close",
		"delete",
		"update:modelValue",
		"update:carLang"
	],
	setup(f, { emit: g }) {
		let y = f, b = g, x = a(), S = i(y.visible);
		o(() => y.visible, (e) => {
			S.value = e;
		});
		let C = i("zh"), w = _({
			get: () => y.carLang ? y.carLang : C.value,
			set: (e) => {
				C.value = e;
			}
		}), E = _(() => y.mode === "car" ? W() : y.mode === "custom" ? U() : H()), D = _(() => y.closeText && (y.mode === "default" || y.mode === "car")), k = _(() => !!y.title || !!x.title), z = _(() => k.value || D.value);
		function B(e) {
			let t = [...e];
			for (let e = t.length - 1; e > 0; e--) {
				let n = Math.floor(Math.random() * (e + 1));
				[t[e], t[n]] = [t[n], t[e]];
			}
			return t;
		}
		function V() {
			let e = Array.from({ length: 9 }, (e, t) => ({ text: t + 1 }));
			return y.randomKeyOrder ? B(e) : e;
		}
		function H() {
			return [
				...V(),
				{
					text: y.extraKey,
					type: "extra"
				},
				{ text: 0 },
				{
					text: y.showDeleteKey ? y.deleteText : "",
					type: y.showDeleteKey ? "delete" : ""
				}
			];
		}
		function U() {
			let e = V(), t = Array.isArray(y.extraKey) ? y.extraKey : [y.extraKey];
			return t.length === 1 ? e.push({
				text: 0,
				wider: !0
			}, {
				text: t[0],
				type: "extra"
			}) : t.length === 2 && e.push({
				text: t[0],
				type: "extra"
			}, { text: 0 }, {
				text: t[1],
				type: "extra"
			}), e;
		}
		function W() {
			let [e, t] = G();
			return [
				...e,
				{
					text: w.value === "zh" ? "ABC" : "省份",
					type: "extra",
					wider: !0
				},
				...t,
				{
					text: y.deleteText,
					type: "delete",
					wider: !0
				}
			];
		}
		function G() {
			let e = w.value === "zh" ? A.map((e) => ({ text: e })) : j.map((e) => ({ text: e }));
			return [e.slice(0, 30), e.slice(30)];
		}
		let K = () => {
			b("close"), b("update:visible", !1);
		}, q = (e, t) => {
			if (t === "extra") {
				if (e === "") return K();
				if (e === "ABC" || e === "省份") {
					let e = w.value === "zh" ? "en" : "zh";
					y.carLang ? b("update:carLang", e) : w.value = e;
					return;
				}
			}
			let n = y.modelValue;
			if (t === "delete") {
				b("delete");
				let e = n.slice(0, n.length - 1);
				b("update:modelValue", e), y.mode === "car" && e.length === 0 && y.autoSwitchLang && (w.value = "zh");
			} else if (t === "close") K();
			else if (n.length < +y.maxlength) {
				b("input", e);
				let t = n + e;
				b("update:modelValue", t), y.mode === "car" && t.length === 1 && y.autoSwitchLang && (w.value = "en");
			}
		};
		return (i, a) => (n(), h(T, {
			modelValue: S.value,
			"onUpdate:modelValue": a[0] ||= (e) => S.value = e,
			position: "bottom",
			"z-index": i.zIndex,
			"safe-area-inset-bottom": i.safeAreaInsetBottom,
			"modal-style": i.modal ? "" : "opacity: 0;",
			modal: i.hideOnClickOutside,
			lockScroll: i.lockScroll,
			"root-portal": i.rootPortal,
			onClickModal: K
		}, {
			default: s(() => [u("div", {
				class: t(`wd-keyboard ${i.customClass}`),
				style: r(i.customStyle)
			}, [
				z.value ? (n(), d("div", M, [k.value ? e(i.$slots, "title", { key: 0 }, () => [u("span", N, c(i.title), 1)]) : v("", !0), D.value ? (n(), d("div", {
					key: 1,
					class: "wd-keyboard__close",
					"hover-class": "wd-keyboard__close--hover",
					onClick: K
				}, [u("span", null, c(i.closeText), 1)])) : v("", !0)])) : v("", !0),
				i.mode === "car" ? v("", !0) : (n(), d("div", P, [u("div", F, [(n(!0), d(l, null, m(E.value, (e) => (n(), h(O, {
					key: e.text,
					text: e.text,
					type: e.type,
					wider: e.wider,
					onPress: q
				}, null, 8, [
					"text",
					"type",
					"wider"
				]))), 128))]), i.mode === "custom" ? (n(), d("div", I, [i.showDeleteKey ? (n(), h(O, {
					key: 0,
					large: "",
					text: i.deleteText,
					type: "delete",
					onPress: q
				}, null, 8, ["text"])) : v("", !0), p(O, {
					large: "",
					text: i.closeText,
					type: "close",
					loading: i.closeButtonLoading,
					onPress: q
				}, null, 8, ["text", "loading"])])) : v("", !0)])),
				i.mode === "car" ? (n(), d("div", L, [u("div", R, [(n(!0), d(l, null, m(E.value, (e) => (n(), h(O, {
					key: e.text,
					text: e.text,
					type: e.type,
					wider: e.wider,
					"is-car": "",
					onPress: q
				}, null, 8, [
					"text",
					"type",
					"wider"
				]))), 128))])])) : v("", !0)
			], 6)]),
			_: 3
		}, 8, [
			"modelValue",
			"z-index",
			"safe-area-inset-bottom",
			"modal-style",
			"modal",
			"lockScroll",
			"root-portal"
		]));
	}
});
//#endregion
export { z as default };
