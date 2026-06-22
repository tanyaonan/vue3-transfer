globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, T as a, U as o, _ as s, d as c, g as l, m as u, s as d } from "./vue.runtime.js";
import { L as f, p, y as m } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { o as h, t as g } from "./shared/wot-ui/common/props.ts.js";
import { t as _ } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as v } from "./shared/wot-ui/components/wd-index-bar/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-index-anchor/type.ts
var y = {
	...g,
	index: h([String, Number])
}, b = ["id"], x = /* @__PURE__ */ l({
	__name: "wd-index-anchor",
	props: y,
	setup(l, { expose: h }) {
		let g = l, { parent: y } = _(v), x = i(`indexBar${f()}`), { proxy: S } = s(), C = i(0), w = d(() => y.value && y.value.props.sticky && y.value.anchorState.activeIndex === g.index);
		function T() {
			p(`#${x.value}`, !1, S).then((e) => {
				m(y.value) && (C.value = Math.floor(e.top));
			});
		}
		return a(() => {
			T();
		}), h({ top: C }), (i, a) => (n(), c("div", {
			class: t(`wd-index-anchor ${w.value ? "is-sticky" : ""} ${i.customClass}`),
			style: r(i.customStyle),
			id: x.value
		}, [e(i.$slots, "default", {}, () => [u(o(i.index), 1)])], 14, b));
	}
});
//#endregion
export { x as default };
