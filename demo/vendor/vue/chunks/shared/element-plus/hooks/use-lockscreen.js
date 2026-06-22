globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, _ as t, at as n, st as r } from "../../../vue.runtime.js";
import { n as i } from "../utils/error.js";
import { a, i as o, r as s, t as c } from "../utils/dom/style.js";
import { n as l } from "../utils/easings.js";
import { r as u } from "./use-namespace.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-lockscreen/index.mjs
var d = (d, f = {}) => {
	n(d) || i("[useLockscreen]", "You need to pass a ref param to this function");
	let p = f.ns || u("popup"), m = t(() => p.bm("parent", "hidden")), h = 0, g = !1, _ = "0", v = !1, y = () => {
		v || (v = !0, setTimeout(() => {
			typeof document > "u" || g && document && (document.body.style.width = _, a(document.body, m.value));
		}, 200));
	};
	e(d, (e) => {
		if (!e) {
			y();
			return;
		}
		v = !1, g = !o(document.body, m.value), g && (_ = document.body.style.width, c(document.body, m.value)), h = l(p.namespace.value);
		let t = document.documentElement.clientHeight < document.body.scrollHeight, n = s(document.body, "overflowY");
		h > 0 && (t || n === "scroll") && g && (document.body.style.width = `calc(100% - ${h}px)`);
	}), r(() => y());
};
//#endregion
export { d as t };
