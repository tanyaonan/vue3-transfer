globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { G as t, O as n, T as r, bt as i, w as a } from "./vue.runtime.js";
import { n as o, r as s } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as c } from "./shared/element-plus/hooks/use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-same-target/index.mjs
var l = (e) => {
	if (!e) return {
		onClick: i,
		onMousedown: i,
		onMouseup: i
	};
	let t = !1, n = !1;
	return {
		onClick: (r) => {
			t && n && e(r), t = n = !1;
		},
		onMousedown: (e) => {
			t = e.target === e.currentTarget;
		},
		onMouseup: (e) => {
			n = e.target === e.currentTarget;
		}
	};
}, u = o({
	mask: {
		type: Boolean,
		default: !0
	},
	customMaskEvent: Boolean,
	overlayClass: { type: s([
		String,
		Array,
		Object
	]) },
	zIndex: { type: s([String, Number]) }
}), d = { click: (e) => e instanceof MouseEvent }, f = "overlay", p = r({
	name: "ElOverlay",
	props: u,
	emits: d,
	setup(e, { slots: r, emit: i }) {
		let o = c(f), { onClick: s, onMousedown: u, onMouseup: d } = l(e.customMaskEvent ? void 0 : (e) => {
			i("click", e);
		});
		return () => e.mask ? a("div", {
			class: [o.b(), e.overlayClass],
			style: { zIndex: e.zIndex },
			onClick: s,
			onMousedown: u,
			onMouseup: d
		}, [t(r, "default")], 14, [
			"onClick",
			"onMouseup",
			"onMousedown"
		]) : n("div", {
			class: e.overlayClass,
			style: {
				zIndex: e.zIndex,
				position: "fixed",
				top: "0px",
				right: "0px",
				bottom: "0px",
				left: "0px"
			}
		}, [t(r, "default")]);
	}
}), m = /* @__PURE__ */ e({
	ElOverlay: () => h,
	default: () => h,
	overlayEmits: () => d,
	overlayProps: () => u
}), h = p;
//#endregion
export { m as n, l as r, h as t };
