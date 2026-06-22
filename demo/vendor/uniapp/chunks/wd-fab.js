globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, C as n, D as r, H as i, I as a, L as o, N as s, P as c, T as l, _ as u, c as d, d as f, g as p, h as m, i as h, l as g, s as _, u as v, y } from "./vue.runtime.js";
import { S as b, j as x, m as S, p as C, y as w } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as T, r as E, s as D, t as O } from "./shared/wot-ui/common/props.ts.js";
import { t as k } from "./wd-transition.js";
import { t as A } from "./wd-button.js";
import { t as j } from "./shared/wot-ui/composables/useRaf.ts.js";
import { i as M, n as N, r as P, t as F } from "./shared/wot-ui/common/clickoutside.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-fab/types.ts
var I = /* @__PURE__ */ p({
	name: "wd-fab",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: {
		...O,
		active: E(!1),
		type: D("primary"),
		position: D("right-bottom"),
		direction: D("top"),
		disabled: E(!1),
		inactiveIcon: D("plus"),
		activeIcon: D("close"),
		zIndex: T(99),
		draggable: E(!1),
		gap: {
			type: Object,
			default: () => ({})
		},
		expandable: E(!0)
	},
	emits: ["update:active", "click"],
	setup(p, { expose: T, emit: E }) {
		let D = p, O = E, I = o(!1), L = o(!1), R = y(F, null), { proxy: z } = u();
		s(() => D.active, (e) => {
			L.value = e;
		}, {
			immediate: !0,
			deep: !0
		}), s(() => L.value, (e) => {
			e && (R && R.closeOther ? R.closeOther(z) : N(z));
		});
		let B = o(D.direction);
		s(() => D.direction, (e) => B.value = e), s(() => D.position, () => q());
		let V = o(0), H = o(0), U = a({
			width: 0,
			height: 0
		}), W = a({
			width: 56,
			height: 56
		}), G = a({
			minTop: 0,
			minLeft: 0,
			maxTop: 0,
			maxLeft: 0
		});
		async function K() {
			let e = S();
			try {
				let e = await C("#trigger", !1, z);
				W.width = e.width || 56, W.height = e.height || 56;
			} catch (e) {
				console.log(e);
			}
			let { top: t = 16, left: n = 16, right: r = 16, bottom: i = 16 } = D.gap;
			U.width = e.windowWidth, U.height = b ? e.windowTop + e.windowHeight : e.windowHeight, G.minTop = b ? e.windowTop + t : t, G.minLeft = n, G.maxLeft = U.width - W.width - r, G.maxTop = U.height - W.height - i;
		}
		function q() {
			let e = D.position, { minLeft: t, minTop: n, maxLeft: r, maxTop: i } = G, a = (i + n) / 2, o = (r + t) / 2;
			switch (e) {
				case "left-top":
					V.value = n, H.value = t;
					break;
				case "right-top":
					V.value = n, H.value = r;
					break;
				case "left-bottom":
					V.value = i, H.value = t;
					break;
				case "right-bottom":
					V.value = i, H.value = r;
					break;
				case "left-center":
					V.value = a, H.value = t;
					break;
				case "right-center":
					V.value = a, H.value = r;
					break;
				case "top-center":
					V.value = n, H.value = o;
					break;
				case "bottom-center":
					V.value = i, H.value = o;
					break;
			}
		}
		let J = a({
			x: 0,
			y: 0
		}), Y = o(!1);
		function X(e) {
			if (D.draggable === !1) return;
			let t = e.touches[0];
			J.x = t.clientX - H.value, J.y = t.clientY - V.value, Y.value = !1;
		}
		function Z(e) {
			if (D.draggable === !1) return;
			let t = e.touches[0], { minLeft: n, minTop: r, maxLeft: i, maxTop: a } = G, o = t.clientX - J.x, s = t.clientY - J.y;
			o < n ? o = n : o > i && (o = i), s < r ? s = r : s > a && (s = a), V.value = s, H.value = o;
		}
		function Q() {
			if (D.draggable === !1) return;
			let e = U.width / 2, t = H.value + W.width / 2;
			Y.value = !0, t < e ? (H.value = G.minLeft, B.value = "right") : (H.value = G.maxLeft, B.value = "left");
		}
		let $ = _(() => {
			let e = {
				top: V.value + "px",
				left: H.value + "px",
				transition: Y.value ? "all ease 0.3s" : "none"
			};
			return w(D.zIndex) && (e["z-index"] = D.zIndex), `${x(e)}${D.customStyle}`;
		});
		l(() => {
			R && R.pushToQueue ? R.pushToQueue(z) : P(z);
			let { start: e } = j(async () => {
				await K(), q(), I.value = !0;
			});
			e();
		}), n(() => {
			R && R.removeFromQueue ? R.removeFromQueue(z) : M(z);
		});
		function ee() {
			if (!D.disabled) {
				if (!D.expandable) {
					O("click");
					return;
				}
				L.value = !L.value, O("update:active", L.value);
			}
		}
		function te() {
			L.value = !0, O("update:active", !0);
		}
		function ne() {
			L.value = !1, O("update:active", !1);
		}
		return T({
			open: te,
			close: ne
		}), (n, a) => (r(), f("div", {
			onTouchmove: h(Z, ["stop", "prevent"]),
			onTouchstart: X,
			onTouchend: Q,
			class: t(`wd-fab ${n.customClass}`),
			style: i($.value),
			onClick: a[1] ||= h(() => {}, ["stop"])
		}, [d("div", {
			onClick: a[0] ||= h(() => {}, ["stop"]),
			style: i({ visibility: I.value ? "visible" : "hidden" }),
			id: "trigger"
		}, [e(n.$slots, "trigger", { disabled: n.disabled }, () => [m(A, {
			onClick: ee,
			icon: L.value ? n.activeIcon : n.inactiveIcon,
			"custom-class": "wd-fab__trigger",
			round: "",
			type: n.type,
			disabled: n.disabled
		}, null, 8, [
			"icon",
			"type",
			"disabled"
		])])], 4), n.expandable ? (r(), g(k, {
			key: 0,
			"enter-class": `wd-fab__transition-enter--${B.value}`,
			"enter-active-class": "wd-fab__transition-enter-active",
			"leave-to-class": `wd-fab__transition-leave-to--${B.value}`,
			"leave-active-class": "wd-fab__transition-leave-active",
			"custom-class": `wd-fab__actions wd-fab__actions--${B.value}`,
			show: L.value,
			duration: 300
		}, {
			default: c(() => [e(n.$slots, "default")]),
			_: 3
		}, 8, [
			"enter-class",
			"leave-to-class",
			"custom-class",
			"show"
		])) : v("", !0)], 38));
	}
});
//#endregion
export { I as default };
