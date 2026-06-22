globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, T as o, U as s, _ as c, c as l, d as u, g as d, h as f, s as p } from "./vue.runtime.js";
import { L as m, O as h, P as g, g as _, j as v, p as y, t as b, y as x } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { o as S, r as C, s as w, t as T } from "./shared/wot-ui/common/props.ts.js";
import { t as E } from "./wd-icon.js";
import { t as D } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as O } from "./shared/wot-ui/common/interceptor.ts.js";
import { t as k } from "./shared/wot-ui/components/wd-collapse/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-collapse-item/types.ts
var A = {
	...T,
	customBodyClass: w(""),
	customBodyStyle: w(""),
	title: w(""),
	disabled: C(!1),
	name: S(String),
	beforeExpend: Function,
	border: C(!0)
}, j = { class: "wd-collapse-item__title" }, M = ["id"], N = /* @__PURE__ */ d({
	name: "wd-collapse-item",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: A,
	setup(d, { expose: S, slots: C }) {
		let w = i(`collapseId${m()}`), T = d, { parent: A, index: N } = D(k), P = i(""), F = i(!1), I = i(!1), { proxy: L } = c(), R = p(() => N.value === 0), z = p(() => {
			let e = {};
			return F.value && (e.transition = "height 0.3s ease-in-out"), I.value ? P.value && (e.height = b(P.value)) : e.height = "0px", v(e);
		}), B = p(() => {
			let e = A.value && A.value.props.modelValue || [], { name: t } = T;
			return h(e) && e === t || _(e) && e.indexOf(t) >= 0;
		});
		a(() => B.value, (e) => {
			V(e);
		}), o(() => {
			V(B.value);
		});
		async function V(e = !0) {
			try {
				e && await G(), H();
			} catch {}
		}
		function H() {
			y(`#${w.value}`, !1, L).then(async (e) => {
				let { height: t } = e;
				P.value = x(t) ? Number(t) : "", await g(), B.value ? I.value = !0 : I.value = !1, F.value ||= !0;
			});
		}
		function U() {
			I.value && (P.value = "");
		}
		async function W() {
			if (!T.disabled) try {
				await V();
				let { name: e } = T;
				A.value && A.value.toggle(e, !I.value);
			} catch {}
		}
		function G() {
			return new Promise((e, t) => {
				let { name: n } = T;
				I.value ? e() : O(T.beforeExpend, {
					args: [n],
					done: e,
					canceled: t,
					error: t
				});
			});
		}
		function K() {
			return I.value;
		}
		return S({
			getExpanded: K,
			updateExpand: V
		}), (i, a) => (n(), u("div", {
			class: t(`wd-collapse-item ${i.disabled ? "is-disabled" : ""} ${i.border ? "is-border" : ""} ${i.customClass}`),
			style: r(i.customStyle)
		}, [l("div", {
			class: t(`wd-collapse-item__header ${I.value ? "is-expanded" : ""} ${R.value ? "wd-collapse-item__header-first" : ""} ${C.title ? "is-custom" : ""}`),
			onClick: W
		}, [e(i.$slots, "title", {
			expanded: I.value,
			disabled: i.disabled,
			isFirst: R.value
		}, () => [l("span", j, s(i.title), 1), f(E, {
			name: "down",
			"custom-class": `wd-collapse-item__arrow ${I.value ? "is-retract" : ""}`
		}, null, 8, ["custom-class"])])], 2), l("div", {
			class: "wd-collapse-item__wrapper",
			style: r(z.value),
			onTransitionend: U
		}, [l("div", {
			class: t(["wd-collapse-item__body", i.customBodyClass]),
			style: r(i.customBodyStyle),
			id: w.value
		}, [e(i.$slots, "default")], 14, M)], 36)], 6));
	}
});
//#endregion
export { N as default };
