globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, C as n, D as r, H as i, L as a, T as o, U as s, _ as c, c as l, d as ee, g as u, h as d, i as f, m as p, s as m } from "./vue.runtime.js";
import { L as h, j as g, p as _, y as v } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as y, r as b, s as x, t as S } from "./shared/wot-ui/common/props.ts.js";
import { t as C } from "./wd-icon.js";
import { t as w } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as T } from "./shared/wot-ui/composables/useTouch.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-slide-verify/types.ts
var E = {
	...S,
	tolerance: {
		type: Number,
		default: 10
	},
	text: x(""),
	successText: x(""),
	disabled: b(!1),
	backgroundColor: String,
	activeBackgroundColor: String,
	icon: x("double-right"),
	successIcon: x("check-circle-fill"),
	iconSize: y,
	successIconSize: y
}, D = ["id"], O = { class: "wd-slide-verify__text" }, k = { class: "wd-slide-verify__text-inner" }, A = { class: "wd-slide-verify__track-text" }, j = /* @__PURE__ */ u({
	name: "wd-slide-verify",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: E,
	emits: ["success", "fail"],
	setup(u, { expose: y, emit: b }) {
		let x = u, S = b, E = a(`wd-slide-verify-${h()}`), { proxy: j } = c(), M = T(), { translate: N } = w("slideVerify"), P = m(() => v(x.text) && x.text !== "" ? x.text : N("text")), F = m(() => v(x.successText) && x.successText !== "" ? x.successText : N("successText")), I = m(() => [
			"wd-slide-verify",
			{
				"is-disabled": x.disabled,
				"is-success": K.value,
				"is-dragging": q.value
			},
			x.customClass
		]), L = m(() => {
			let e = {};
			return v(x.backgroundColor) && (e.background = x.backgroundColor), `${g(e)}${x.customStyle}`;
		}), R = m(() => {
			let e = {
				width: `${W.value + B.value}px`,
				transition: J.value ? "all 0.3s ease" : "none"
			};
			return v(x.activeBackgroundColor) && (e.background = x.activeBackgroundColor), W.value === 0 && (e.background = "transparent"), g(e);
		}), z = a(0), B = a(0), V = async () => {
			try {
				let e = await _(`#${E.value}`, !1, j);
				z.value = e.width || 0, B.value = e.height || 0;
			} catch {
				z.value = 0, B.value = 0;
			}
		};
		o(async () => {
			await V();
		});
		let H = m(() => {
			let { value: e } = z, { value: t } = B;
			return e <= 0 || t <= 0 ? 0 : Math.max(0, e - t);
		}), U = m(() => Math.abs(H.value - W.value) <= x.tolerance), W = a(0), G = a(0), K = a(!1), q = a(!1), J = a(!1), Y = (e, t, n) => Math.max(t, Math.min(e, n)), X = (e) => {
			W.value = Y(e, 0, H.value);
		}, Z = m(() => x.disabled || K.value), Q = (e) => {
			Z.value || q.value || (M.touchStart(e), G.value = W.value, q.value = !0);
		}, te = (e) => {
			Z.value || !q.value || (M.touchMove(e), X(G.value + M.deltaX.value));
		}, $ = a(null), ne = () => {
			Z.value || !q.value || (q.value = !1, U.value ? (X(H.value), K.value = !0, S("success")) : (J.value = !0, X(0), S("fail"), $.value = setTimeout(() => {
				J.value = !1;
			}, 300)));
		};
		return n(() => {
			$.value !== null && (clearTimeout($.value), $.value = null);
		}), y({
			reset: () => {
				$.value !== null && (clearTimeout($.value), $.value = null), J.value = !0, W.value = 0, G.value = 0, K.value = !1, q.value = !1, $.value = setTimeout(() => {
					J.value = !1;
				}, 300);
			},
			init: V
		}), (n, a) => (r(), ee("div", {
			class: t(I.value),
			id: E.value,
			style: i(L.value)
		}, [l("div", O, [e(n.$slots, "text", {}, () => [l("span", k, s(P.value), 1)])]), l("div", {
			class: "wd-slide-verify__track",
			style: i(R.value)
		}, [l("div", A, [e(n.$slots, "success-text", {}, () => [p(s(F.value), 1)])]), l("div", {
			class: "wd-slide-verify__button",
			onTouchstart: f(Q, ["prevent"]),
			onTouchmove: f(te, ["prevent"]),
			onTouchend: ne
		}, [K.value ? e(n.$slots, "success-icon", { key: 0 }, () => [d(C, {
			"custom-class": "wd-slide-verify__button-icon wd-slide-verify__button-icon--success",
			name: n.successIcon,
			size: n.successIconSize
		}, null, 8, ["name", "size"])]) : e(n.$slots, "icon", { key: 1 }, () => [d(C, {
			"custom-class": "wd-slide-verify__button-icon",
			name: n.icon,
			size: n.iconSize
		}, null, 8, ["name", "size"])])], 32)], 4)], 14, D));
	}
});
//#endregion
export { j as default };
