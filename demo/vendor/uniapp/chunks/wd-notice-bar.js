globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import "./shared/uniapp-stub.js";
import { A as e, B as t, D as n, H as r, I as i, L as a, N as o, T as s, U as c, _ as l, a as u, c as d, d as f, g as p, k as m, l as h, m as g, s as _, u as v, x as y } from "./vue.runtime.js";
import { g as b, j as x, p as S, y as C } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as w, r as T, s as E, t as D } from "./shared/wot-ui/common/props.ts.js";
import { t as O } from "./wd-icon.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-notice-bar/types.ts
var k = {
	...D,
	text: {
		type: [String, Array],
		default: ""
	},
	type: E("warning"),
	scrollable: T(!0),
	delay: w(1),
	speed: w(50),
	closable: T(!1),
	wrapable: T(!1),
	prefix: String,
	color: String,
	backgroundColor: String,
	direction: E("horizontal")
}, A = { class: "wd-notice-bar__wrap" }, j = { key: 0 }, M = /* @__PURE__ */ p({
	name: "wd-notice-bar",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: k,
	emits: [
		"close",
		"next",
		"click"
	],
	setup(p, { expose: w, emit: T }) {
		let E = p, D = T, k = a(0), M = a(!0), N = a(0), P = _(() => Array.isArray(E.text) ? E.text : [E.text]), F = _(() => P.value[N.value]), I = a(0), L = a(null), R = a(null), z = _(() => E.direction === "horizontal"), B = _(() => E.direction === "vertical"), V = i({
			transitionProperty: "unset",
			transitionDelay: "unset",
			transitionDuration: "unset",
			transform: "none",
			transitionTimingFunction: "linear"
		}), H = _(() => x(V)), U = _(() => {
			let e = {};
			return C(E.color) && (e.color = E.color), C(E.backgroundColor) && (e.background = E.backgroundColor), `${x(e)}${E.customStyle}`;
		}), W = _(() => {
			let { type: e, wrapable: t, scrollable: n } = E, r = [];
			return e && r.push(`is-${e}`), z.value ? !t && !n && r.push("wd-notice-bar--ellipse") : r.push("wd-notice-bar--ellipse"), t && !n && r.push("wd-notice-bar--wrap"), r.join(" ");
		}), { proxy: G } = l();
		o(() => E.text, () => {
			K();
		}, { deep: !0 }), s(() => {
			q();
		});
		function K() {
			J(), q();
		}
		function q() {
			y(() => $());
		}
		function J() {
			V.transitionProperty = "unset", V.transitionDelay = "unset", V.transitionDuration = "unset", V.transform = "none", V.transitionTimingFunction = "linear", N.value = 0, I.value = 0;
		}
		function Y() {
			M.value = !1, D("close");
		}
		function X({ duration: e, delay: t, translate: n }) {
			V.transitionProperty = "all", V.transitionDelay = `${t}s`, V.transitionDuration = `${e}s`, V.transform = `${E.direction === "vertical" ? "translateY" : "translateX"}(${n}px)`, V.transitionTimingFunction = "linear";
		}
		function Z() {
			return Promise.all([S(".wd-notice-bar__wrap", !1, G), S(".wd-notice-bar__content", !1, G)]);
		}
		async function Q(e) {
			let t = -(e / (P.value.length + 1)) * (N.value + 1);
			X({
				duration: e / (P.value.length + 1) / E.speed,
				delay: E.delay,
				translate: t
			});
		}
		async function $() {
			let [e, t] = await Z();
			!e.width || !t.width || !t.height || (L.value = e, R.value = t, k.value = e.width, z.value ? E.scrollable && X({
				duration: t.width / E.speed,
				delay: E.delay,
				translate: -t.width
			}) : P.value.length > 1 && Q(t.height));
		}
		function ee() {
			N.value >= P.value.length - 1 ? N.value = 0 : N.value++, D("next", N.value);
		}
		function te() {
			z.value ? X({
				duration: 0,
				delay: 0,
				translate: k.value + 1
			}) : ++I.value >= P.value.length && (I.value = 0, X({
				duration: 0,
				delay: 0,
				translate: 0
			}));
			let e = setTimeout(() => {
				ee(), y(async () => {
					try {
						let [e, t] = await Z();
						L.value = e, R.value = t, k.value = e.width || 0;
					} catch {}
					!R.value || !R.value.width || !R.value.height || (z.value ? X({
						duration: (k.value + R.value.width) / E.speed,
						delay: E.delay,
						translate: -R.value.width
					}) : Q(R.value.height));
				}), clearTimeout(e);
			}, 20);
		}
		function ne() {
			D("click", b(E.text) ? {
				index: N.value,
				text: E.text[N.value]
			} : {
				index: 0,
				text: E.text
			});
		}
		return w({ reset: K }), (i, a) => M.value ? (n(), f("div", {
			key: 0,
			class: t(`wd-notice-bar ${i.customClass} ${W.value}`),
			style: r(U.value)
		}, [
			i.prefix ? (n(), h(O, {
				key: 0,
				"custom-class": "wd-notice-bar__prefix",
				name: i.prefix
			}, null, 8, ["name"])) : e(i.$slots, "prefix", { key: 1 }),
			d("div", A, [d("div", {
				class: "wd-notice-bar__content",
				style: r(H.value),
				onTransitionend: te,
				onClick: ne
			}, [B.value ? (n(), f(u, { key: 0 }, [(n(!0), f(u, null, m(P.value, (e) => (n(), f("div", { key: e }, c(e), 1))), 128)), P.value.length > 1 ? (n(), f("div", j, c(P.value[0]), 1)) : v("", !0)], 64)) : e(i.$slots, "default", { key: 1 }, () => [g(c(F.value), 1)])], 36)]),
			e(i.$slots, "suffix", {}, () => [i.closable ? (n(), h(O, {
				key: 0,
				"custom-class": "wd-notice-bar__suffix",
				name: "close",
				onClick: Y
			})) : v("", !0)])
		], 6)) : v("", !0);
	}
});
//#endregion
export { M as default };
