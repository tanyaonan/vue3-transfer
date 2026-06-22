globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, N as i, T as a, U as o, a as s, d as c, g as l, m as u, s as d, z as f } from "./vue.runtime.js";
import { N as p } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { o as m, r as h, s as g, t as _ } from "./shared/wot-ui/common/props.ts.js";
import { t as v } from "./shared/wot-ui/composables/useCountDown.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-count-down/utils.ts
function y(e, t) {
	let { days: n } = t, { hours: r, minutes: i, seconds: a, milliseconds: o } = t;
	if (e.includes("DD") ? e = e.replace("DD", p(n)) : r += n * 24, e.includes("HH") ? e = e.replace("HH", p(r)) : i += r * 60, e.includes("mm") ? e = e.replace("mm", p(i)) : a += i * 60, e.includes("ss") ? e = e.replace("ss", p(a)) : o += a * 1e3, e.includes("S")) {
		let t = p(o, 3);
		e = e.includes("SSS") ? e.replace("SSS", t) : e.includes("SS") ? e.replace("SS", t.slice(0, 2)) : e.replace("S", t.charAt(0));
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-count-down/types.ts
var b = /* @__PURE__ */ l({
	name: "wd-count-down",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: {
		..._,
		time: m(Number),
		millisecond: h(!1),
		format: g("HH:mm:ss"),
		autoStart: h(!0)
	},
	emits: ["change", "finish"],
	setup(l, { expose: p, emit: m, slots: h }) {
		let g = l, _ = m, { start: b, pause: x, reset: S, current: C } = v({
			time: g.time,
			millisecond: g.millisecond,
			onChange: (e) => _("change", e),
			onFinish: () => _("finish")
		}), w = d(() => y(g.format, C.value)), T = () => {
			S(g.time), g.autoStart && b();
		};
		return i(() => g.time, T, { immediate: !1 }), a(() => {
			T();
		}), p({
			start: b,
			pause: x,
			reset: T
		}), (i, a) => (n(), c("div", {
			class: t(`wd-count-down ${i.customClass}`),
			style: r(i.customStyle)
		}, [h.default ? e(i.$slots, "default", {
			key: 0,
			current: f(C)
		}) : (n(), c(s, { key: 1 }, [u(o(w.value), 1)], 64))], 6));
	}
});
//#endregion
export { b as default };
