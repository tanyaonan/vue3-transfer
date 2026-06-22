globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, Ft as t, G as n, H as r, J as i, Mt as a, T as o, Z as s, _ as c, b as l, l as u, n as d, nt as f, p, tt as m, ut as h, v as g, w as _, x as v, y, yt as b } from "./vue.runtime.js";
import { r as x } from "./shared/element-plus/utils/objects.js";
import { t as S } from "./shared/element-plus/utils/vue/install.js";
import { n as C } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as w } from "./shared/element-plus/hooks/use-namespace.js";
import { n as T, r as E } from "./shared/element-plus/utils/vue/icon.js";
import { r as D, t as O } from "./shared/element-plus/utils/vue/vnode.js";
import { t as k } from "./el-icon.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/alert/src/alert.mjs
var A = ["light", "dark"], j = C({
	title: {
		type: String,
		default: ""
	},
	description: {
		type: String,
		default: ""
	},
	type: {
		type: String,
		values: x(E),
		default: "info"
	},
	closable: {
		type: Boolean,
		default: !0
	},
	closeText: {
		type: String,
		default: ""
	},
	showIcon: Boolean,
	center: Boolean,
	effect: {
		type: String,
		values: A,
		default: "light"
	}
}), M = { close: (e) => e instanceof MouseEvent }, N = S(/* @__PURE__ */ o({
	name: "ElAlert",
	__name: "alert",
	props: j,
	emits: M,
	setup(o, { emit: x }) {
		let { Close: S } = T, C = o, A = x, j = s(), M = w("alert"), N = h(!0), P = c(() => E[C.type]), F = c(() => {
			if (C.description) return !0;
			let e = j.default?.();
			return e ? O(e).some((e) => !D(e)) : !1;
		}), I = (e) => {
			N.value = !1, A("close", e);
		};
		return (s, c) => (r(), y(d, {
			name: b(M).b("fade"),
			persisted: ""
		}, {
			default: m(() => [f(g("div", {
				class: a([
					b(M).b(),
					b(M).m(o.type),
					b(M).is("center", o.center),
					b(M).is(o.effect)
				]),
				role: "alert"
			}, [o.showIcon && (s.$slots.icon || P.value) ? (r(), y(b(k), {
				key: 0,
				class: a([b(M).e("icon"), b(M).is("big", F.value)])
			}, {
				default: m(() => [n(s.$slots, "icon", {}, () => [(r(), y(i(P.value)))])]),
				_: 3
			}, 8, ["class"])) : l("v-if", !0), g("div", { class: a(b(M).e("content")) }, [
				o.title || s.$slots.title ? (r(), v("span", {
					key: 0,
					class: a([b(M).e("title"), { "with-description": F.value }])
				}, [n(s.$slots, "title", {}, () => [e(t(o.title), 1)])], 2)) : l("v-if", !0),
				F.value ? (r(), v("p", {
					key: 1,
					class: a(b(M).e("description"))
				}, [n(s.$slots, "default", {}, () => [e(t(o.description), 1)])], 2)) : l("v-if", !0),
				o.closable ? (r(), v(p, { key: 2 }, [o.closeText ? (r(), v("div", {
					key: 0,
					class: a([b(M).e("close-btn"), b(M).is("customed")]),
					onClick: I
				}, t(o.closeText), 3)) : (r(), y(b(k), {
					key: 1,
					class: a(b(M).e("close-btn")),
					onClick: I
				}, {
					default: m(() => [_(b(S))]),
					_: 1
				}, 8, ["class"]))], 64)) : l("v-if", !0)
			], 2)], 2), [[u, N.value]])]),
			_: 3
		}, 8, ["name"]));
	}
}));
//#endregion
export { N as ElAlert, N as default, A as alertEffects, M as alertEmits, j as alertProps };
