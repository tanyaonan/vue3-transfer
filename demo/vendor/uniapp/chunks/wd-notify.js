globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, P as o, U as s, c, g as l, h as u, l as d, s as f, u as p, y as m, z as h } from "./vue.runtime.js";
import { j as g, t as _, x as v } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as y, i as b, r as x, s as S, t as C } from "./shared/wot-ui/common/props.ts.js";
import { t as w } from "./wd-icon.js";
import { t as T } from "./wd-popup.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-notify/types.ts
var E = {
	...C,
	type: S("danger"),
	color: S(""),
	zIndex: b(99),
	visible: x(!1),
	message: y(""),
	selector: S(""),
	duration: b(3e3),
	position: S("top"),
	safeHeight: Number,
	background: S(""),
	rootPortal: x(!1),
	closable: x(!1),
	variant: S("filled")
}, D = "__NOTIFY_OPTION__", O = (e) => e ? `${D}${e}` : D, k = { class: "wd-notify__content" }, A = /* @__PURE__ */ l({
	name: "wd-notify",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: E,
	emits: [
		"update:visible",
		"click",
		"closed",
		"opened"
	],
	setup(l, { emit: y }) {
		let b = l, x = y, S = m(O(b.selector), i(b)), C = f(() => {
			let { type: e } = S.value;
			switch (e) {
				case "success": return "check-circle-fill";
				case "warning": return "exclamation-circle-fill";
				case "danger": return "close-circle-fill";
				default: return "info-circle-fill";
			}
		}), E = f(() => {
			let { safeHeight: e, position: t, variant: n } = S.value, r = {
				overflow: "unset",
				background: "transparent"
			};
			switch (t) {
				case "top":
					r.top = `calc(var(--window-top) + ${_(e || 0)})`;
					break;
				case "bottom":
					r.bottom = "var(--window-bottom)";
					break;
				default: break;
			}
			return n === "floating" && (r.left = "12px", r.right = "12px", r.width = "auto"), g(r);
		}), D = f(() => {
			let { customStyle: e } = b, t = {};
			return S.value.color && (t.color = S.value.color), S.value.background && (t.background = S.value.background), `${g(t)};${e}`;
		}), A = (e) => {
			if (v(S.value.onClick)) return S.value.onClick(e);
			x("click", e);
		}, j = () => {
			if (v(S.value.onClosed)) return S.value.onClosed();
			x("closed");
		}, M = () => {
			if (v(S.value.onOpened)) return S.value.onOpened();
			x("opened");
		}, N = () => {
			S.value.visible = !1;
		};
		return a(() => S.value.visible, (e) => {
			x("update:visible", e);
		}, { deep: !0 }), (i, a) => (n(), d(T, {
			modelValue: h(S).visible,
			"onUpdate:modelValue": a[0] ||= (e) => h(S).visible = e,
			"custom-style": E.value,
			position: h(S).position,
			"z-index": h(S).zIndex,
			modal: !1,
			"root-portal": h(S).rootPortal,
			onLeave: j,
			onEnter: M
		}, {
			default: o(() => [c("div", {
				class: t([
					"wd-notify",
					`wd-notify--${h(S).type}`,
					`wd-notify--${h(S).position}`,
					h(S).variant === "floating" ? "wd-notify--floating" : "",
					i.customClass
				]),
				style: r(D.value),
				onClick: A
			}, [
				e(i.$slots, "prefix", {}, () => [C.value ? (n(), d(w, {
					key: 0,
					name: C.value,
					"custom-class": "wd-notify__prefix"
				}, null, 8, ["name"])) : p("", !0)]),
				c("div", k, [e(i.$slots, "default", {}, () => [c("span", null, s(h(S).message), 1)])]),
				h(S).closable ? e(i.$slots, "close", { key: 0 }, () => [u(w, {
					name: "close",
					"custom-class": "wd-notify__close",
					onClick: N
				})]) : p("", !0)
			], 6)]),
			_: 3
		}, 8, [
			"modelValue",
			"custom-style",
			"position",
			"z-index",
			"root-portal"
		]));
	}
});
//#endregion
export { A as default };
