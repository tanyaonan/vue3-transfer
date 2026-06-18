globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "../../shared/element-plus/utils/browser.js";
import { n as t, t as n } from "../../shared/element-plus/utils/raf.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/virtual-list/src/hooks/use-wheel.mjs
var r = ({ atEndEdge: r, atStartEdge: i, layout: a }, o) => {
	let s, c = 0, l = (e) => e < 0 && i.value || e > 0 && r.value;
	return {
		hasReachedEdge: l,
		onWheel: (r) => {
			n(s);
			let { deltaX: i, deltaY: u } = r;
			r.shiftKey && u !== 0 && (i = u, u = 0);
			let d = a.value === "horizontal" ? i : u;
			l(d) || (c += d, !e() && d !== 0 && r.preventDefault(), s = t(() => {
				o(c), c = 0;
			}));
		}
	};
};
//#endregion
export { r as t };
