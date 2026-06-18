globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, C as t, Ct as n, Dt as r, Ft as i, G as a, H as o, J as s, Mt as c, N as l, Pt as u, T as d, _ as f, a as p, b as m, d as ee, dt as h, j as g, jt as _, l as te, n as ne, nt as re, p as ie, tt as v, ut as y, v as b, w as x, x as S, y as C, yt as w, z as ae } from "./vue.runtime.js";
import { r as T } from "./shared/element-plus/utils/vue/install.js";
import { i as E, n as D, t as O } from "./shared/element-plus/utils/types.js";
import { n as k, r as A } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as j } from "./shared/element-plus/utils/error.js";
import { _ as M, c as N, d as oe, w as se } from "./shared/vueuse.js";
import { a as P, n as ce, r as F } from "./shared/element-plus/utils/vue/icon.js";
import { t as I } from "./el-icon.js";
import { t as L } from "./shared/element-plus/utils/typescript.js";
import { a as le, n as ue } from "./shared/element-plus/constants/aria.js";
import { t as de } from "./el-badge.js";
import { n as fe } from "./el-config-provider/constants.js";
import { n as R } from "./el-config-provider/config-provider-props.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/message/src/message.mjs
var z = [
	"primary",
	"success",
	"info",
	"warning",
	"error"
], B = [
	"top",
	"top-left",
	"top-right",
	"bottom",
	"bottom-left",
	"bottom-right"
], V = "top", H = L({
	customClass: "",
	dangerouslyUseHTMLString: !1,
	duration: 3e3,
	icon: void 0,
	id: "",
	message: "",
	onClose: void 0,
	showClose: !1,
	type: "info",
	plain: !1,
	offset: 16,
	placement: void 0,
	zIndex: 0,
	grouping: !1,
	repeatNum: 1,
	appendTo: M ? document.body : void 0
}), U = k({
	customClass: {
		type: String,
		default: H.customClass
	},
	dangerouslyUseHTMLString: {
		type: Boolean,
		default: H.dangerouslyUseHTMLString
	},
	duration: {
		type: Number,
		default: H.duration
	},
	icon: {
		type: P,
		default: H.icon
	},
	id: {
		type: String,
		default: H.id
	},
	message: {
		type: A([
			String,
			Object,
			Function
		]),
		default: H.message
	},
	onClose: {
		type: A(Function),
		default: H.onClose
	},
	showClose: {
		type: Boolean,
		default: H.showClose
	},
	type: {
		type: String,
		values: z,
		default: H.type
	},
	plain: {
		type: Boolean,
		default: H.plain
	},
	offset: {
		type: Number,
		default: H.offset
	},
	placement: {
		type: String,
		values: B,
		default: H.placement
	},
	zIndex: {
		type: Number,
		default: H.zIndex
	},
	grouping: {
		type: Boolean,
		default: H.grouping
	},
	repeatNum: {
		type: Number,
		default: H.repeatNum
	}
}), W = { destroy: () => !0 }, G = h({}), K = (e) => (G[e] || (G[e] = h([])), G[e]), q = (e, t) => {
	let n = G[t] || [], r = n.findIndex((t) => t.id === e), i = n[r], a;
	return r > 0 && (a = n[r - 1]), {
		current: i,
		prev: a
	};
}, pe = (e, t) => {
	let { prev: n } = q(e, t);
	return n ? n.vm.exposed.bottom.value : 0;
}, me = (e, t, n) => (G[n] || []).findIndex((t) => t.id === e) > 0 ? 16 : t, he = ["id"], ge = ["innerHTML"], J = /* @__PURE__ */ d({
	name: "ElMessage",
	__name: "message",
	props: U,
	emits: W,
	setup(n, { expose: r, emit: d }) {
		let { Close: p } = ce, h = n, g = d, _ = y(!1), { ns: T, zIndex: E } = fe("message"), { currentZIndex: D, nextZIndex: O } = E, k = y(), A = y(!1), j = y(0), M, P = f(() => h.type ? h.type === "error" ? "danger" : h.type : "info"), L = f(() => {
			let e = h.type;
			return { [T.bm("icon", e)]: e && F[e] };
		}), R = f(() => h.icon || F[h.type] || ""), z = f(() => h.placement || "top"), B = f(() => pe(h.id, z.value)), V = f(() => Math.max(me(h.id, h.offset, z.value) + B.value, h.offset)), H = f(() => j.value + V.value), U = f(() => z.value.includes("left") ? T.is("left") : z.value.includes("right") ? T.is("right") : T.is("center")), W = f(() => z.value.startsWith("top") ? "top" : "bottom"), G = f(() => ({
			[W.value]: `${V.value}px`,
			zIndex: D.value
		}));
		function K() {
			h.duration !== 0 && ({stop: M} = se(() => {
				J();
			}, h.duration));
		}
		function q() {
			M?.();
		}
		function J() {
			A.value = !1, l(() => {
				_.value || (h.onClose?.(), g("destroy"));
			});
		}
		function Y(e) {
			ue(e) === le.esc && J();
		}
		return ae(() => {
			K(), O(), A.value = !0;
		}), e(() => h.repeatNum, () => {
			q(), K();
		}), N(document, "keydown", Y), oe(k, () => {
			j.value = k.value.getBoundingClientRect().height;
		}), r({
			visible: A,
			bottom: H,
			close: J
		}), (e, r) => (o(), C(ne, {
			name: w(T).b("fade"),
			onBeforeEnter: r[0] ||= (e) => _.value = !0,
			onBeforeLeave: n.onClose,
			onAfterLeave: r[1] ||= (t) => e.$emit("destroy"),
			persisted: ""
		}, {
			default: v(() => [re(b("div", {
				id: n.id,
				ref_key: "messageRef",
				ref: k,
				class: c([
					w(T).b(),
					{ [w(T).m(n.type)]: n.type },
					w(T).is("closable", n.showClose),
					w(T).is("plain", n.plain),
					w(T).is("bottom", W.value === "bottom"),
					U.value,
					n.customClass
				]),
				style: u(G.value),
				role: "alert",
				onMouseenter: q,
				onMouseleave: K
			}, [
				n.repeatNum > 1 ? (o(), C(w(de), {
					key: 0,
					value: n.repeatNum,
					type: P.value,
					class: c(w(T).e("badge"))
				}, null, 8, [
					"value",
					"type",
					"class"
				])) : m("v-if", !0),
				R.value ? (o(), C(w(I), {
					key: 1,
					class: c([w(T).e("icon"), L.value])
				}, {
					default: v(() => [(o(), C(s(R.value)))]),
					_: 1
				}, 8, ["class"])) : m("v-if", !0),
				!n.dangerouslyUseHTMLString || e.$slots.default ? (o(), S("p", {
					key: 2,
					class: c(w(T).e("content"))
				}, [a(e.$slots, "default", {}, () => [t(i(n.message), 1)])], 2)) : (o(), S(ie, { key: 3 }, [m(" Caution here, message could've been compromised, never use user's input as message "), b("p", {
					class: c(w(T).e("content")),
					innerHTML: n.message
				}, null, 10, ge)], 2112)),
				n.showClose ? (o(), C(w(I), {
					key: 4,
					class: c(w(T).e("closeBtn")),
					onClick: ee(J, ["stop"])
				}, {
					default: v(() => [x(w(p))]),
					_: 1
				}, 8, ["class"])) : m("v-if", !0)
			], 46, he), [[te, A.value]])]),
			_: 3
		}, 8, ["name", "onBeforeLeave"]));
	}
}), Y = 1, X = (e) => {
	if (!e.appendTo) e.appendTo = document.body;
	else if (_(e.appendTo)) {
		let t = document.querySelector(e.appendTo);
		D(t) || (j("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), t = document.body), e.appendTo = t;
	}
}, _e = (e) => {
	!e.placement && _(R.placement) && R.placement && (e.placement = R.placement), e.placement ||= "top", B.includes(e.placement) || (j("ElMessage", `Invalid placement: ${e.placement}. Falling back to 'top'.`), e.placement = "top");
}, Z = (e) => {
	let t = !e || _(e) || g(e) || r(e) ? { message: e } : e, n = {
		...H,
		...t
	};
	return X(n), _e(n), O(R.grouping) && !n.grouping && (n.grouping = R.grouping), E(R.duration) && n.duration === 3e3 && (n.duration = R.duration), E(R.offset) && n.offset === 16 && (n.offset = R.offset), O(R.showClose) && !n.showClose && (n.showClose = R.showClose), O(R.plain) && !n.plain && (n.plain = R.plain), n;
}, ve = (e) => {
	let t = G[e.props.placement || "top"], n = t.indexOf(e);
	if (n === -1) return;
	t.splice(n, 1);
	let { handler: r } = e;
	r.close();
}, ye = ({ appendTo: e, ...t }, n) => {
	let i = `message_${Y++}`, a = t.onClose, o = document.createElement("div"), s = {
		...t,
		id: i,
		onClose: () => {
			a?.(), ve(u);
		},
		onDestroy: () => {
			p(null, o);
		}
	}, c = x(J, s, r(s.message) || g(s.message) ? { default: r(s.message) ? s.message : () => s.message } : null);
	c.appContext = n || Q._context, p(c, o), e.appendChild(o.firstElementChild);
	let l = c.component, u = {
		id: i,
		vnode: c,
		vm: l,
		handler: { close: () => {
			l.exposed.close();
		} },
		props: c.component.props
	};
	return u;
}, Q = (e = {}, t) => {
	if (!M) return { close: () => void 0 };
	let n = Z(e), r = K(n.placement || "top");
	if (n.grouping && r.length) {
		let e = r.find(({ vnode: e }) => e.props?.message === n.message);
		if (e) return e.props.repeatNum += 1, e.props.type = n.type, e.handler;
	}
	if (E(R.max) && r.length >= R.max) return { close: () => void 0 };
	let i = ye(n, t);
	return r.push(i), i.handler;
};
z.forEach((e) => {
	Q[e] = (t = {}, n) => Q({
		...Z(t),
		type: e
	}, n);
});
function be(e) {
	for (let t in G) if (n(G, t)) {
		let n = [...G[t]];
		for (let t of n) (!e || e === t.props.type) && t.handler.close();
	}
}
function xe(e) {
	G[e] && [...G[e]].forEach((e) => e.handler.close());
}
Q.closeAll = be, Q.closeAllByPlacement = xe, Q._context = null;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/message/index.mjs
var $ = T(Q, "$message");
//#endregion
export { $ as ElMessage, $ as default, V as MESSAGE_DEFAULT_PLACEMENT, H as messageDefaults, W as messageEmits, B as messagePlacement, U as messageProps, z as messageTypes };
