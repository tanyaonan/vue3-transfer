globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, N as r, T as i, d as a, g as o, h as s, s as c } from "./vue.runtime.js";
import { d as l, w as u } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as d, r as f, s as p, t as m } from "./shared/wot-ui/common/props.ts.js";
import { t as h } from "./shared/wot-ui/composables/useCountDown.ts.js";
import { t as g } from "./wd-text.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-count-to/types.ts
var _ = /* @__PURE__ */ o({
	name: "wd-count-to",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: {
		...m,
		color: p(""),
		type: p("default"),
		startVal: d(0),
		endVal: d(2024),
		duration: d(3e3),
		autoStart: f(!0),
		decimals: {
			type: Number,
			required: !1,
			default: 0,
			validator(e) {
				return e >= 0;
			}
		},
		decimal: p("."),
		separator: p(","),
		prefix: p(""),
		suffix: p(""),
		useEasing: f(!0)
	},
	emits: ["mounted", "finish"],
	setup(o, { expose: d, emit: f }) {
		let p = o, m = f, { start: _, pause: v, reset: y, current: b } = h({
			time: p.duration,
			millisecond: !0,
			onFinish: () => m("finish")
		}), x = c(() => `wd-count-to ${p.customClass}`), S = c(() => w(b.value.total));
		r([
			() => p.startVal,
			() => p.endVal,
			() => p.duration
		], C, { immediate: !1 }), i(() => {
			C(), m("mounted");
		});
		function C() {
			y(p.duration), p.autoStart && _();
		}
		function w(e) {
			let { startVal: t, endVal: n, duration: r, useEasing: i } = p, a = r - e, o = t > n, s = a / r, c;
			return c = i ? o ? t - l(a, 0, t - n, r) || 0 : l(a, t, n - t, r) : o ? t - (t - n) * s : t + (n - t) * s, c = o ? Math.max(n, c) : Math.min(n, c), T(c);
		}
		function T(e) {
			if (typeof e != "number" && (e = parseFloat(e), isNaN(e))) return "0";
			e = e.toFixed(p.decimals);
			let t = e.split("."), n = t[0], r = t.length > 1 ? p.decimal + t[1] : "", i = /(\d+)(\d{3})/;
			if (p.separator && !u(p.separator)) for (; i.test(n);) n = n.replace(i, "$1" + p.separator + "$2");
			return n + r;
		}
		return d({
			start: _,
			reset: C,
			pause: v
		}), (r, i) => (n(), a("div", { class: t(x.value) }, [
			e(r.$slots, "prefix", {}, () => [s(g, {
				"custom-class": "wd-count-to__separator-text",
				type: r.type,
				color: r.color,
				text: r.prefix
			}, null, 8, [
				"type",
				"color",
				"text"
			])]),
			e(r.$slots, "default", {}, () => [s(g, {
				"custom-class": "wd-count-to__main-text",
				type: r.type,
				color: r.color,
				text: S.value
			}, null, 8, [
				"type",
				"color",
				"text"
			])]),
			e(r.$slots, "suffix", {}, () => [s(g, {
				"custom-class": "wd-count-to__separator-text",
				type: r.type,
				color: r.color,
				text: r.suffix
			}, null, 8, [
				"type",
				"color",
				"text"
			])])
		], 2));
	}
});
//#endregion
export { _ as default };
