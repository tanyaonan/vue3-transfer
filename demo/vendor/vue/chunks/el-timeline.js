globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, Ft as t, G as n, H as r, J as i, Mt as a, O as o, Pt as s, T as c, U as l, _ as u, b as d, tt as f, v as p, x as m, y as h, yt as g } from "./vue.runtime.js";
import { i as _, t as v } from "./shared/element-plus/utils/vue/install.js";
import { n as y } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as b } from "./shared/element-plus/hooks/use-namespace.js";
import { a as x } from "./shared/element-plus/utils/vue/icon.js";
import { t as S } from "./shared/element-plus/utils/vue/vnode.js";
import { t as C } from "./el-icon.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/timeline/src/tokens.mjs
var w = "timeline", T = y({
	mode: {
		type: String,
		values: [
			"start",
			"alternate",
			"alternate-reverse",
			"end"
		],
		default: "start"
	},
	reverse: Boolean
}), E = c({
	name: "ElTimeline",
	props: T,
	setup(e, { slots: t }) {
		let n = b("timeline");
		l(w, {
			props: e,
			slots: t
		});
		let r = u(() => [n.b(), n.is(e.mode)]);
		return () => {
			let n = S(t.default?.() ?? []);
			return o("ul", { class: r.value }, e.reverse ? n.reverse() : n);
		};
	}
}), D = y({
	timestamp: {
		type: String,
		default: ""
	},
	hideTimestamp: Boolean,
	center: Boolean,
	placement: {
		type: String,
		values: ["top", "bottom"],
		default: "bottom"
	},
	type: {
		type: String,
		values: [
			"primary",
			"success",
			"warning",
			"danger",
			"info"
		],
		default: ""
	},
	color: {
		type: String,
		default: ""
	},
	size: {
		type: String,
		values: ["normal", "large"],
		default: "normal"
	},
	icon: { type: x },
	hollow: Boolean
}), O = /* @__PURE__ */ c({
	name: "ElTimelineItem",
	__name: "timeline-item",
	props: D,
	setup(o) {
		let c = o, { props: l } = e(w), _ = b("timeline-item"), v = u(() => [
			_.e("node"),
			_.em("node", c.size || ""),
			_.em("node", c.type || ""),
			_.is("hollow", c.hollow)
		]), y = u(() => [
			_.b(),
			{ [_.e("center")]: c.center },
			_.is(l.mode)
		]);
		return (e, c) => (r(), m("li", { class: a(y.value) }, [
			p("div", { class: a(g(_).e("tail")) }, null, 2),
			e.$slots.dot ? d("v-if", !0) : (r(), m("div", {
				key: 0,
				class: a(v.value),
				style: s({ backgroundColor: o.color })
			}, [o.icon ? (r(), h(g(C), {
				key: 0,
				class: a(g(_).e("icon"))
			}, {
				default: f(() => [(r(), h(i(o.icon)))]),
				_: 1
			}, 8, ["class"])) : d("v-if", !0)], 6)),
			e.$slots.dot ? (r(), m("div", {
				key: 1,
				class: a(g(_).e("dot"))
			}, [n(e.$slots, "dot")], 2)) : d("v-if", !0),
			p("div", { class: a(g(_).e("wrapper")) }, [
				!o.hideTimestamp && o.placement === "top" ? (r(), m("div", {
					key: 0,
					class: a([g(_).e("timestamp"), g(_).is("top")])
				}, t(o.timestamp), 3)) : d("v-if", !0),
				p("div", { class: a(g(_).e("content")) }, [n(e.$slots, "default")], 2),
				!o.hideTimestamp && o.placement === "bottom" ? (r(), m("div", {
					key: 1,
					class: a([g(_).e("timestamp"), g(_).is("bottom")])
				}, t(o.timestamp), 3)) : d("v-if", !0)
			], 2)
		], 2));
	}
}), k = v(E, { TimelineItem: O }), A = _(O);
//#endregion
export { k as ElTimeline, k as default, A as ElTimelineItem, w as TIMELINE_INJECTION_KEY, D as timelineItemProps, T as timelineProps };
