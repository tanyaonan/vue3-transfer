globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, M as i, d as a, g as o, l as s, s as c, u as l } from "./vue.runtime.js";
import { O as u, j as d, t as f } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as p, r as m, t as h } from "./wd-avatar.js";
import { t as g } from "./shared/wot-ui/composables/useChildren.ts.js";
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-avatar-group/wd-avatar-group.vue
var _ = /* @__PURE__ */ o({
	name: "wd-avatar-group",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: p,
	setup(o) {
		let p = o, _ = i(), { children: v, linkChildren: y } = g(m);
		y({ props: p });
		let b = c(() => `wd-avatar-group wd-avatar-group--${p.cascading} ${p.customClass} ${p.vertical ? "is-vertical" : ""}`), x = c(() => {
			if (!p.maxCount) return 0;
			let e = typeof p.maxCount == "number" ? p.maxCount : parseInt(p.maxCount, 10);
			return isNaN(e) || e <= 0 ? 0 : e;
		}), S = c(() => x.value > 0 && v.length > x.value), C = c(() => x.value <= 0 ? 0 : Math.max(0, v.length - x.value)), w = c(() => p.collapseAvatar || `+${C.value}`), T = c(() => !!_.default), E = c(() => {
			let e = {};
			if (p.cascading === "left-up" ? e.zIndex = (x.value > 0 ? x.value : v.length) + 1 : e.zIndex = 0, T.value) {
				let t = u(p.size) && [
					"large",
					"medium",
					"normal",
					"small"
				].includes(p.size) ? "var(--wot-avatar-overlap)" : `calc(${f(p.size)} * -0.25)`;
				p.vertical ? e.marginTop = t : e.marginLeft = t;
			}
			return d(e);
		});
		return (i, o) => (n(), a("div", {
			class: t(b.value),
			style: r(i.customStyle)
		}, [e(i.$slots, "default"), S.value ? (n(), s(h, {
			key: 0,
			"custom-style": E.value,
			_internal: "",
			text: w.value,
			shape: i.shape,
			size: i.size,
			"bg-color": "#ebedf0",
			color: "#969799"
		}, null, 8, [
			"custom-style",
			"text",
			"shape",
			"size"
		])) : l("", !0)], 6));
	}
});
//#endregion
export { _ as default };
