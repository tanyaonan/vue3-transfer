globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { C as e, Ft as t, G as n, H as r, J as i, Mt as a, T as o, b as s, tt as c, v as l, w as u, x as d, y as f, yt as p } from "./vue.runtime.js";
import { t as m } from "./shared/element-plus/utils/vue/install.js";
import { n as h } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as g } from "./shared/element-plus/hooks/use-namespace.js";
import { a as _ } from "./shared/element-plus-icons.js";
import { a as v } from "./shared/element-plus/utils/vue/icon.js";
import { t as y } from "./el-icon.js";
import { n as b } from "./shared/element-plus/hooks/use-locale.js";
import { t as x } from "./el-divider.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/page-header/src/page-header.mjs
var S = h({
	icon: {
		type: v,
		default: () => _
	},
	title: String,
	content: {
		type: String,
		default: ""
	}
}), C = { back: () => !0 }, w = ["aria-label"], T = m(/* @__PURE__ */ o({
	name: "ElPageHeader",
	__name: "page-header",
	props: S,
	emits: C,
	setup(o, { emit: m }) {
		let h = m, { t: _ } = b(), v = g("page-header");
		function S() {
			h("back");
		}
		return (m, h) => (r(), d("div", { class: a([
			p(v).b(),
			p(v).is("contentful", !!m.$slots.default),
			{
				[p(v).m("has-breadcrumb")]: !!m.$slots.breadcrumb,
				[p(v).m("has-extra")]: !!m.$slots.extra
			}
		]) }, [
			m.$slots.breadcrumb ? (r(), d("div", {
				key: 0,
				class: a(p(v).e("breadcrumb"))
			}, [n(m.$slots, "breadcrumb")], 2)) : s("v-if", !0),
			l("div", { class: a(p(v).e("header")) }, [l("div", { class: a(p(v).e("left")) }, [
				l("div", {
					class: a(p(v).e("back")),
					role: "button",
					tabindex: "0",
					onClick: S
				}, [o.icon || m.$slots.icon ? (r(), d("div", {
					key: 0,
					"aria-label": o.title || p(_)("el.pageHeader.title"),
					class: a(p(v).e("icon"))
				}, [n(m.$slots, "icon", {}, () => [o.icon ? (r(), f(p(y), { key: 0 }, {
					default: c(() => [(r(), f(i(o.icon)))]),
					_: 1
				})) : s("v-if", !0)])], 10, w)) : s("v-if", !0), l("div", { class: a(p(v).e("title")) }, [n(m.$slots, "title", {}, () => [e(t(o.title || p(_)("el.pageHeader.title")), 1)])], 2)], 2),
				u(p(x), { direction: "vertical" }),
				l("div", { class: a(p(v).e("content")) }, [n(m.$slots, "content", {}, () => [e(t(o.content), 1)])], 2)
			], 2), m.$slots.extra ? (r(), d("div", {
				key: 0,
				class: a(p(v).e("extra"))
			}, [n(m.$slots, "extra")], 2)) : s("v-if", !0)], 2),
			m.$slots.default ? (r(), d("div", {
				key: 1,
				class: a(p(v).e("main"))
			}, [n(m.$slots, "default")], 2)) : s("v-if", !0)
		], 2));
	}
}));
//#endregion
export { T as ElPageHeader, T as default, C as pageHeaderEmits, S as pageHeaderProps };
