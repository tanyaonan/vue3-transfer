globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { G as t, H as n, M as r, T as i, Y as a, n as o, tt as s, y as c, yt as l } from "./vue.runtime.js";
import { t as u } from "./shared/element-plus/utils/vue/install.js";
import { r as d } from "./shared/element-plus/hooks/use-namespace.js";
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/collapse-transition/src/collapse-transition.mjs
var f = /* @__PURE__ */ i({
	name: "ElCollapseTransition",
	__name: "collapse-transition",
	setup(e) {
		let i = d("collapse-transition"), u = (e) => {
			e.style.maxHeight = "", e.style.overflow = e.dataset.oldOverflow, e.style.paddingTop = e.dataset.oldPaddingTop, e.style.paddingBottom = e.dataset.oldPaddingBottom;
		}, f = {
			beforeEnter(e) {
				e.dataset ||= {}, e.dataset.oldPaddingTop = e.style.paddingTop, e.dataset.oldPaddingBottom = e.style.paddingBottom, e.style.height && (e.dataset.elExistsHeight = e.style.height), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
			},
			enter(e) {
				requestAnimationFrame(() => {
					e.dataset.oldOverflow = e.style.overflow, e.dataset.elExistsHeight ? e.style.maxHeight = e.dataset.elExistsHeight : e.scrollHeight === 0 ? e.style.maxHeight = 0 : e.style.maxHeight = `${e.scrollHeight}px`, e.style.paddingTop = e.dataset.oldPaddingTop, e.style.paddingBottom = e.dataset.oldPaddingBottom, e.style.overflow = "hidden";
				});
			},
			afterEnter(e) {
				e.style.maxHeight = "", e.style.overflow = e.dataset.oldOverflow;
			},
			enterCancelled(e) {
				u(e);
			},
			beforeLeave(e) {
				e.dataset ||= {}, e.dataset.oldPaddingTop = e.style.paddingTop, e.dataset.oldPaddingBottom = e.style.paddingBottom, e.dataset.oldOverflow = e.style.overflow, e.style.maxHeight = `${e.scrollHeight}px`, e.style.overflow = "hidden";
			},
			leave(e) {
				e.scrollHeight !== 0 && (e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0);
			},
			afterLeave(e) {
				u(e);
			},
			leaveCancelled(e) {
				u(e);
			}
		};
		return (e, u) => (n(), c(o, r({ name: l(i).b() }, a(f)), {
			default: s(() => [t(e.$slots, "default")]),
			_: 3
		}, 16, ["name"]));
	}
}), p = /* @__PURE__ */ e({
	ElCollapseTransition: () => m,
	default: () => m
}), m = u(f);
//#endregion
export { p as n, m as t };
