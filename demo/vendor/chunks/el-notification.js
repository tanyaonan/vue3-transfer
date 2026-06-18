globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Dt as e, Ft as t, G as n, H as r, J as i, Mt as a, Pt as o, T as s, _ as c, a as l, b as u, d, j as f, jt as p, l as m, n as h, nt as g, p as _, tt as v, ut as y, v as b, w as x, x as S, y as C, yt as w, z as ee } from "./vue.runtime.js";
import { r as T } from "./shared/element-plus/utils/vue/install.js";
import { n as E, s as D } from "./shared/element-plus/utils/types.js";
import { n as O, r as k } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as A } from "./shared/element-plus/utils/error.js";
import { _ as j, c as M, w as N } from "./shared/vueuse.js";
import { h as P } from "./shared/element-plus-icons.js";
import { a as F, r as I } from "./shared/element-plus/utils/vue/icon.js";
import { t as L } from "./el-icon.js";
import { a as R, n as z } from "./shared/element-plus/constants/aria.js";
import { n as B } from "./el-config-provider/constants.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/notification/src/notification.mjs
var V = [
	"primary",
	"success",
	"info",
	"warning",
	"error"
], H = O({
	customClass: {
		type: String,
		default: ""
	},
	dangerouslyUseHTMLString: Boolean,
	duration: {
		type: Number,
		default: 4500
	},
	icon: { type: F },
	id: {
		type: String,
		default: ""
	},
	message: {
		type: k([
			String,
			Object,
			Function
		]),
		default: ""
	},
	offset: {
		type: Number,
		default: 0
	},
	onClick: {
		type: k(Function),
		default: () => void 0
	},
	onClose: {
		type: k(Function),
		required: !0
	},
	position: {
		type: String,
		values: [
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		],
		default: "top-right"
	},
	showClose: {
		type: Boolean,
		default: !0
	},
	title: {
		type: String,
		default: ""
	},
	type: {
		type: String,
		values: [...V, ""],
		default: ""
	},
	zIndex: Number,
	closeIcon: {
		type: F,
		default: P
	}
}), U = { destroy: () => !0 }, W = ["id"], G = ["textContent"], K = { key: 0 }, q = ["innerHTML"], J = /* @__PURE__ */ s({
	name: "ElNotification",
	__name: "notification",
	props: H,
	emits: U,
	setup(e, { expose: s }) {
		let l = e, { ns: f, zIndex: p } = B("notification"), { nextZIndex: x, currentZIndex: T } = p, E = y(!1), D, O = c(() => {
			let e = l.type;
			return e && I[l.type] ? f.m(e) : "";
		}), k = c(() => l.type && I[l.type] || l.icon), A = c(() => l.position.endsWith("right") ? "right" : "left"), j = c(() => l.position.startsWith("top") ? "top" : "bottom"), P = c(() => ({
			[j.value]: `${l.offset}px`,
			zIndex: l.zIndex ?? T.value
		}));
		function F() {
			l.duration > 0 && ({stop: D} = N(() => {
				E.value && H();
			}, l.duration));
		}
		function V() {
			D?.();
		}
		function H() {
			E.value = !1;
		}
		function U(e) {
			switch (z(e)) {
				case R.delete:
				case R.backspace:
					V();
					break;
				case R.esc:
					E.value && H();
					break;
				default:
					F();
					break;
			}
		}
		return ee(() => {
			F(), x(), E.value = !0;
		}), M(document, "keydown", U), s({
			visible: E,
			close: H
		}), (s, c) => (r(), C(h, {
			name: w(f).b("fade"),
			onBeforeLeave: e.onClose,
			onAfterLeave: c[1] ||= (e) => s.$emit("destroy"),
			persisted: ""
		}, {
			default: v(() => [g(b("div", {
				id: e.id,
				class: a([
					w(f).b(),
					e.customClass,
					A.value
				]),
				style: o(P.value),
				role: "alert",
				onMouseenter: V,
				onMouseleave: F,
				onClick: c[0] ||= (...t) => e.onClick && e.onClick(...t)
			}, [k.value ? (r(), C(w(L), {
				key: 0,
				class: a([w(f).e("icon"), O.value])
			}, {
				default: v(() => [(r(), C(i(k.value)))]),
				_: 1
			}, 8, ["class"])) : u("v-if", !0), b("div", { class: a(w(f).e("group")) }, [
				b("h2", {
					class: a(w(f).e("title")),
					textContent: t(e.title)
				}, null, 10, G),
				g(b("div", {
					class: a(w(f).e("content")),
					style: o(e.title ? void 0 : { margin: 0 })
				}, [n(s.$slots, "default", {}, () => [e.dangerouslyUseHTMLString ? (r(), S(_, { key: 1 }, [u(" Caution here, message could've been compromised, never use user's input as message "), b("p", { innerHTML: e.message }, null, 8, q)], 2112)) : (r(), S("p", K, t(e.message), 1))])], 6), [[m, e.message]]),
				e.showClose ? (r(), C(w(L), {
					key: 0,
					class: a(w(f).e("closeBtn")),
					onClick: d(H, ["stop"])
				}, {
					default: v(() => [(r(), C(i(e.closeIcon)))]),
					_: 1
				}, 8, ["class"])) : u("v-if", !0)
			], 2)], 46, W), [[m, E.value]])]),
			_: 3
		}, 8, ["name", "onBeforeLeave"]));
	}
}), Y = {
	"top-left": [],
	"top-right": [],
	"bottom-left": [],
	"bottom-right": []
}, X = 16, Z = 1, Q = function(t = {}, n) {
	if (!j) return { close: () => void 0 };
	(p(t) || f(t)) && (t = { message: t });
	let r = t.position || "top-right", i = t.offset || 0;
	Y[r].forEach(({ vm: e }) => {
		i += (e.el?.offsetHeight || 0) + X;
	}), i += X;
	let a = `notification_${Z++}`, o = t.onClose, s = {
		...t,
		offset: i,
		id: a,
		onClose: () => {
			te(a, r, o);
		}
	}, c = document.body;
	E(t.appendTo) ? c = t.appendTo : p(t.appendTo) && (c = document.querySelector(t.appendTo)), E(c) || (A("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), c = document.body);
	let u = document.createElement("div"), d = x(J, s, e(s.message) ? s.message : f(s.message) ? () => s.message : null);
	return d.appContext = D(n) ? Q._context : n, d.props.onDestroy = () => {
		l(null, u);
	}, l(d, u), Y[r].push({ vm: d }), c.appendChild(u.firstElementChild), { close: () => {
		d.component.exposed.visible.value = !1;
	} };
};
V.forEach((e) => {
	Q[e] = (t = {}, n) => ((p(t) || f(t)) && (t = { message: t }), Q({
		...t,
		type: e
	}, n));
});
function te(e, t, n) {
	let r = Y[t], i = r.findIndex(({ vm: t }) => t.component?.props.id === e);
	if (i === -1) return;
	let { vm: a } = r[i];
	if (!a) return;
	n?.(a);
	let o = a.el.offsetHeight, s = t.split("-")[0];
	r.splice(i, 1);
	let c = r.length;
	if (!(c < 1)) for (let e = i; e < c; e++) {
		let { el: t, component: n } = r[e].vm, i = Number.parseInt(t.style[s], 10) - o - X;
		n.props.offset = i;
	}
}
function ne() {
	for (let e of Object.values(Y)) e.forEach(({ vm: e }) => {
		e.component.exposed.visible.value = !1;
	});
}
function re(e = "top-right") {
	let t = Y[e][0]?.vm.component?.props?.offset || 0;
	for (let { vm: n } of Y[e]) n.component.props.offset = t, t += (n.el?.offsetHeight || 0) + X;
}
Q.closeAll = ne, Q.updateOffsets = re, Q._context = null;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/notification/index.mjs
var $ = T(Q, "$notify");
//#endregion
export { $ as ElNotification, $ as default, U as notificationEmits, H as notificationProps, V as notificationTypes };
