globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, L as a, N as o, _ as s, d as c, g as l, s as u, u as d } from "./vue.runtime.js";
import { O as f, j as p, w as m, y as h } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as g, r as _, t as v } from "./shared/wot-ui/common/props.ts.js";
import { t as y } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as b } from "./shared/wot-ui/components/wd-tabs/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-tab/types.ts
var x = /*@__PURE__*/ l({
	name: "wd-tab",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...v,
		name: g,
		title: String,
		disabled: _(!1),
		lazy: _(!0),
		badgeProps: Object
	},
	setup(e) {
		let l = e, { proxy: g } = s(), { parent: _, index: v } = y(b), x = u(() => h(_.value) ? _.value.state.activeIndex === v.value : !1), S = a(x.value), C = u(() => {
			let e = {};
			return !x.value && (!h(_.value) || !_.value.props.animated) && (e.display = "none"), p(e);
		}), w = u(() => !l.lazy || S.value || x.value);
		o(x, (e) => {
			e && (S.value = !0);
		}), o(() => l.name, (e) => {
			if (h(e) && !m(e) && !f(e)) {
				console.error("[wot ui] error(wd-tab): the type of name should be number or string");
				return;
			}
			_.value && T(g);
		}, {
			deep: !0,
			immediate: !0
		});
		function T(e) {
			let { name: t } = l;
			t == null || t === "" || _.value && _.value.children.forEach((n) => {
				n.$.uid !== e.$.uid && n.name === t && console.error(`The tab's bound value: ${t} has been used`);
			});
		}
		return (e, a) => (r(), c("div", {
			class: n(`wd-tab ${e.customClass}`),
			style: i(e.customStyle)
		}, [w.value ? (r(), c("div", {
			key: 0,
			class: n(["wd-tab__body", { "wd-tab__body--inactive": !x.value }]),
			style: i(C.value)
		}, [t(e.$slots, "default")], 6)) : d("", !0)], 6));
	}
}), S = /* @__PURE__ */ e({ default: () => C }), C = x;
//#endregion
export { S as n, C as t };
