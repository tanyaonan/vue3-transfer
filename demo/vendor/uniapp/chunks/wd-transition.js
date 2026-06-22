globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, L as a, N as o, S as s, d as c, g as l, i as u, s as d, u as f } from "./vue.runtime.js";
import { D as p, P as m, R as h, T as g } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { r as _, s as v, t as y } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-transition/types.ts
var b = /*@__PURE__*/ l({
	name: "wd-transition",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...y,
		show: _(!1),
		duration: {
			type: [
				Object,
				Number,
				Boolean
			],
			default: 300
		},
		lazyRender: _(!1),
		name: [String, Array],
		destroy: _(!0),
		enterClass: v(""),
		enterActiveClass: v(""),
		enterToClass: v(""),
		leaveClass: v(""),
		leaveActiveClass: v(""),
		leaveToClass: v(""),
		disableTouchMove: _(!1)
	},
	emits: [
		"click",
		"before-enter",
		"enter",
		"before-leave",
		"leave",
		"after-leave",
		"after-enter"
	],
	setup(e, { emit: l }) {
		let _ = (e) => {
			let t = (e, t) => `wd-transition--${e}-${t}`, n = `${v.enterClass} ${v.enterActiveClass}`, r = `${v.enterToClass} ${v.enterActiveClass}`, i = `${v.leaveClass} ${v.leaveActiveClass}`, a = `${v.leaveToClass} ${v.leaveActiveClass}`;
			if (Array.isArray(e)) for (let o = 0; o < e.length; o++) n = `${t(e[o], "enter")} ${t(e[o], "enter-active")} ${n}`, r = `${t(e[o], "enter-to")} ${t(e[o], "enter-active")} ${r}`, i = `${t(e[o], "leave")} ${t(e[o], "leave-active")} ${i}`, a = `${t(e[o], "leave-to")} ${t(e[o], "leave-active")} ${a}`;
			else e && (n = `${t(e, "enter")} ${t(e, "enter-active")} ${n}`, r = `${t(e, "enter-to")} ${t(e, "enter-active")} ${r}`, i = `${t(e, "leave")} ${t(e, "leave-active")} ${i}`, a = `${t(e, "leave-to")} ${t(e, "leave-active")} ${a}`);
			return {
				enter: n,
				"enter-to": r,
				leave: i,
				"leave-to": a
			};
		}, v = e, y = l, b = a(!1), x = a(!1), S = a(""), C = a(!1), w = a(300), T = a(""), E = a(null), D = a(null), O = a(null), k = d(() => `-webkit-transition-duration:${w.value}ms;transition-duration:${w.value}ms;${x.value || !v.destroy ? "" : "display: none;"}${v.customStyle}`), A = d(() => `wd-transition ${v.customClass}  ${T.value}`), j = d(() => !v.lazyRender || b.value);
		s(() => {
			v.show && F();
		}), o(() => v.show, (e) => {
			N(e);
		}, { deep: !0 });
		function M() {
			y("click");
		}
		function N(e) {
			e ? (P(), F()) : I();
		}
		function P() {
			p(E.value) && E.value.abort(), p(D.value) && D.value.abort(), p(O.value) && O.value.abort(), E.value = null, D.value = null, O.value = null;
		}
		function F() {
			E.value = new h(async (e) => {
				try {
					let t = _(v.name), n = g(v.duration) ? v.duration.enter : v.duration;
					S.value = "enter", y("before-enter"), D.value = m(), await D.value, y("enter"), T.value = t.enter, w.value = n, D.value = m(), await D.value, b.value = !0, x.value = !0, D.value = m(), await D.value, D.value = null, C.value = !1, T.value = t["enter-to"], e();
				} catch {}
			});
		}
		async function I() {
			if (!E.value) return C.value = !1, R();
			try {
				if (await E.value, !x.value) return;
				let e = _(v.name), t = g(v.duration) ? v.duration.leave : v.duration;
				S.value = "leave", y("before-leave"), w.value = t, O.value = m(), await O.value, y("leave"), T.value = e.leave, O.value = m(), await O.value, C.value = !1, T.value = e["leave-to"], O.value = L(w.value), await O.value, O.value = null, R(), E.value = null;
			} catch {}
		}
		function L(e) {
			return new h((t) => {
				let n = setTimeout(() => {
					clearTimeout(n), t();
				}, e);
			});
		}
		function R() {
			C.value || (C.value = !0, S.value === "leave" ? y("after-leave") : S.value === "enter" && y("after-enter"), !v.show && x.value && (x.value = !1));
		}
		function z() {}
		return (e, a) => j.value && e.disableTouchMove ? (r(), c("div", {
			key: 0,
			class: n(A.value),
			style: i(k.value),
			onTransitionend: R,
			onClick: M,
			onTouchmove: u(z, ["stop", "prevent"])
		}, [t(e.$slots, "default")], 38)) : j.value && !e.disableTouchMove ? (r(), c("div", {
			key: 1,
			class: n(A.value),
			style: i(k.value),
			onTransitionend: R,
			onClick: M
		}, [t(e.$slots, "default")], 38)) : f("", !0);
	}
}), x = /* @__PURE__ */ e({ default: () => S }), S = b;
//#endregion
export { x as n, S as t };
