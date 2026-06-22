globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, P as a, U as o, V as s, c, d as l, g as u, h as d, m as f, s as p, u as m, v as h, z as g } from "./vue.runtime.js";
import { M as _, k as v, y } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as b } from "./shared/wot-ui/common/props.ts.js";
import { t as x } from "./wd-icon.js";
import { t as S } from "./wd-loading.js";
import { t as C } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as w } from "./wd-divider.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-loadmore/types.ts
var T = {
	...b,
	state: String,
	loadingText: String,
	finishedText: String,
	errorText: String,
	loadingProps: Object
}, E = { class: "wd-loadmore__text" }, D = { class: "wd-loadmore__refresh-text" }, O = { class: "wd-loadmore__text" }, k = /* @__PURE__ */ u({
	name: "wd-loadmore",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: T,
	emits: ["reload"],
	setup(u, { emit: b }) {
		let T = p(() => {
			let e = y(k.loadingProps) ? _(k.loadingProps, v) : {};
			return e.customClass = `wd-loadmore__loading ${e.customClass || ""}`, e;
		}), k = u, A = b, { translate: j } = C("loadmore"), M = i(null);
		function N() {
			k.state === "error" && (M.value = "loading", A("reload"));
		}
		return (i, u) => (n(), l("div", {
			class: t(["wd-loadmore", i.customClass]),
			style: r(i.customStyle),
			onClick: N
		}, [i.state === "finished" ? e(i.$slots, "finished", { key: 0 }, () => [d(w, { "custom-class": "wd-loadmore__divider" }, {
			default: a(() => [f(o(i.finishedText || g(j)("finished")), 1)]),
			_: 1
		})]) : i.state === "error" ? e(i.$slots, "error", { key: 1 }, () => [
			c("span", E, o(i.errorText || g(j)("error")), 1),
			c("span", D, o(g(j)("retry")), 1),
			d(x, {
				name: "refresh",
				"custom-class": "wd-loadmore__refresh"
			})
		]) : i.state === "loading" ? e(i.$slots, "loading", { key: 2 }, () => [d(S, s(h(T.value)), null, 16), c("span", O, o(i.loadingText || g(j)("loading")), 1)]) : m("", !0)], 6));
	}
});
//#endregion
export { k as default };
