globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, I as i, N as a, d as o, g as s, l as c, u as l } from "./vue.runtime.js";
import { g as u, y as d } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as f } from "./shared/wot-ui/composables/useChildren.ts.js";
import { r as p, t as m } from "./wd-toast.js";
import { r as h, t as g } from "./shared/wot-ui/components/wd-form/index.js";
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-form/wd-form.vue
var _ = /* @__PURE__ */ s({
	name: "wd-form",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: h,
	setup(s, { expose: h }) {
		let { show: _ } = p("wd-form-toast"), v = s, { children: y, linkChildren: b } = f(g), x = i({});
		b({
			props: v,
			errorMessages: x,
			validate: S
		}), a(() => v.model, () => {
			v.resetOnChange && w();
		}, {
			immediate: !0,
			deep: !0
		});
		async function S(e) {
			let t = u(e) ? e : d(e) ? [e] : [], n = (v.schema ? await Promise.resolve(v.schema.validate(v.model)) : []).filter((e) => e.path && e.path.length > 0 && e.message).map((e) => ({
				prop: e.path.map((e) => String(e)).join("."),
				message: e.message
			})), r = t.length > 0 ? n.filter((e) => t.some((t) => e.prop === t || e.prop.startsWith(`${t}.`) || t.startsWith(`${e.prop}.`))) : n, i = r.length === 0;
			return C(r), i && (t.length ? t.forEach(w) : w()), {
				valid: i,
				errors: r
			};
		}
		function C(e) {
			let t = y.map((e) => e.prop).filter(Boolean), n = e.filter((e) => e.message && t.includes(e.prop));
			n.length && (n.sort((e, n) => t.indexOf(e.prop) - t.indexOf(n.prop)), v.errorType === "toast" ? _(n[0].message) : v.errorType === "message" && n.forEach((e) => {
				x[e.prop] = e.message;
			}));
		}
		function w(e) {
			e ? x[e] = "" : Object.keys(x).forEach((e) => {
				x[e] = "";
			});
		}
		function T() {
			w();
		}
		return h({
			validate: S,
			reset: T
		}), (i, a) => (n(), o("div", {
			class: t(`wd-form ${i.customClass}`),
			style: r(i.customStyle)
		}, [e(i.$slots, "default"), v.errorType === "toast" ? (n(), c(m, {
			key: 0,
			selector: "wd-form-toast"
		})) : l("", !0)], 6));
	}
});
//#endregion
export { _ as default };
