globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, I as i, N as a, T as o, U as s, _ as c, a as l, c as u, d, g as f, k as p, m, s as h, u as g, z as _ } from "./vue.runtime.js";
import { P as v, T as y, b, j as x, p as S, t as C } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { o as w, r as T, s as E, t as D } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-segmented/types.ts
var O = {
	...D,
	value: w([String, Number]),
	disabled: T(!1),
	options: {
		type: Array,
		required: !0,
		default: () => []
	},
	theme: E("card"),
	vibrateShort: T(!1)
}, k = ["onClick"], A = { class: "wd-segmented__item-label" }, j = /* @__PURE__ */ f({
	name: "wd-segmented",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: O,
	emits: [
		"update:value",
		"change",
		"click"
	],
	setup(f, { expose: w, emit: T, slots: E }) {
		let D = f, O = T, j = i({
			activeIndex: 0,
			activeStyle: ""
		}), M = h(() => D.disabled || (D.options[0] && y(D.options[0]) ? D.options[0].disabled : !1));
		a(() => D.value, () => {
			I(), P(), D.vibrateShort && uni.vibrateShort({});
		}, { immediate: !1 });
		let { proxy: N } = c();
		o(async () => {
			I(), await v(), P(!1);
		});
		function P(e = !0) {
			D.theme !== "outline" && S(".wd-segmented__item", !0, N).then((t) => {
				let n = t[j.activeIndex], r = {
					position: "absolute",
					width: C(n.width),
					"z-index": 0
				}, i = t.slice(0, j.activeIndex).reduce((e, t) => e + Number(t.width), 0);
				i && (r.transform = `translateX(${i}px)`), e && (r.transition = "all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)"), j.activeStyle = x(r);
			});
		}
		function F(e, t) {
			b(e, D.value) || (O("update:value", e), O("change", y(t) ? t : { value: e }));
		}
		function I() {
			let e = D.options.findIndex((e) => b(y(e) ? e.value : e, D.value));
			e >= 0 ? j.activeIndex = e : F(y(D.options[0]) ? D.options[0].value : D.options[0], D.options[0]);
		}
		function L(e, t) {
			if (D.disabled || y(e) && e.disabled) return;
			let n = y(e) ? e.value : e;
			j.activeIndex = t, P(), F(n, e), O("click", y(e) ? e : { value: n });
		}
		return w({ updateActiveStyle: P }), (i, a) => (n(), d("div", {
			class: t(`wd-segmented ${i.theme ? `wd-segmented--${i.theme}` : ""} ${i.customClass}`),
			style: r(i.customStyle)
		}, [(n(!0), d(l, null, p(i.options, (r, a) => (n(), d("div", {
			class: t(`wd-segmented__item ${j.activeIndex === a ? "is-active" : ""} ${i.disabled || _(y)(r) && r.disabled ? "is-disabled" : ""}`),
			onClick: (e) => L(r, a),
			key: a
		}, [u("div", A, [E.label ? e(i.$slots, "label", {
			key: 0,
			option: _(y)(r) ? r : { value: r }
		}) : (n(), d(l, { key: 1 }, [m(s(_(y)(r) ? r.value : r), 1)], 64))])], 10, k))), 128)), i.theme === "card" ? (n(), d("div", {
			key: 0,
			class: t(`wd-segmented__slider ${M.value ? "is-disabled" : ""}`),
			style: r(j.activeStyle)
		}, null, 6)) : g("", !0)], 6));
	}
});
//#endregion
export { j as default };
