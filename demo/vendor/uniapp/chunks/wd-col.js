globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, N as i, d as a, g as o, s } from "./vue.runtime.js";
import { y as c } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as l, t as u } from "./shared/wot-ui/common/props.ts.js";
import { t as d } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as f } from "./shared/wot-ui/components/wd-row/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-col/types.ts
var p = /* @__PURE__ */ o({
	name: "wd-col",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...u,
		span: l(24),
		offset: l(0)
	},
	setup(o) {
		let l = o, { parent: u } = d(f), p = s(() => `wd-col ${l.customClass}`), m = s(() => {
			let e = c(u.value) && u.value.props.gutter || 0, { span: t, offset: n } = l, r = [];
			if (e > 0) {
				let t = `${e / 2}px`;
				r.push(`padding-left: ${t}`), r.push(`padding-right: ${t}`), r.push("background-clip: content-box");
			}
			if (t > 0 && t < 24) {
				let e = `${t / 24 * 100}%`;
				r.push(`width: ${e}`);
			} else t === 24 && r.push("width: 100%");
			if (n > 0) {
				let e = `${n / 24 * 100}%`;
				r.push(`margin-left: ${e}`);
			}
			return l.customStyle && r.push(l.customStyle), r.join(";");
		});
		i([() => l.span, () => l.offset], () => {
			h();
		});
		function h() {
			let { span: e, offset: t } = l;
			(e < 0 || t < 0) && console.error("[wot-design] warning(wd-col): attribute span/offset must be greater than or equal to 0");
		}
		return (i, o) => (n(), a("div", {
			class: t(p.value),
			style: r(m.value)
		}, [e(i.$slots, "default")], 6));
	}
});
//#endregion
export { p as default };
