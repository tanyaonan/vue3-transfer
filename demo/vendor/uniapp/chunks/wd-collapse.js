globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, S as o, U as s, a as c, c as l, d as u, g as d, h as f, z as p } from "./vue.runtime.js";
import { g as m, v as h, y as g } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as _ } from "./wd-icon.js";
import { t as v } from "./shared/wot-ui/composables/useChildren.ts.js";
import { t as y } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { n as b, t as x } from "./shared/wot-ui/components/wd-collapse/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-collapse/wd-collapse.vue?vue&type=script&setup=true&lang.ts
var S = { key: 1 }, C = { class: "wd-collapse__more-txt" }, w = /* @__PURE__ */ d({
	name: "wd-collapse",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: b,
	emits: ["change", "update:modelValue"],
	setup(d, { expose: b, emit: w }) {
		let T = d, E = w, { translate: D } = y("collapse"), O = i(0), { linkChildren: k, children: A } = v(x);
		k({
			props: T,
			toggle: M
		}), a(() => T.modelValue, (e) => {
			let { viewmore: t, accordion: n } = T;
			n && typeof e != "string" ? console.error("accordion value must be string") : !n && !t && !m(e) && console.error("value must be Array");
		}, { deep: !0 }), a(() => T.lineNum, (e) => {
			e <= 0 && console.error("lineNum must greater than 0");
		}, {
			deep: !0,
			immediate: !0
		}), o(() => {
			let { lineNum: e, viewmore: t, modelValue: n } = T;
			O.value = t && !n ? e : 0;
		});
		function j(e) {
			E("update:modelValue", e), E("change", { value: e });
		}
		function M(e, t) {
			let { accordion: n, modelValue: r } = T;
			j(n ? e === r ? "" : e : t ? r.concat(e) : r.filter((t) => t !== e));
		}
		let N = (e = {}) => {
			if (T.accordion) return;
			h(e) && (e = { expanded: e });
			let { expanded: t, skipDisabled: n } = e, r = [];
			A.forEach((e, i) => {
				e.disabled && n ? e.$.exposed.getExpanded() && r.push(e.name || i) : (g(t) ? t : !e.$.exposed.getExpanded()) && r.push(e.name || i);
			}), j(r);
		};
		function P() {
			E("update:modelValue", !T.modelValue), E("change", { value: !T.modelValue });
		}
		return b({ toggleAll: N }), (i, a) => (n(), u("div", {
			class: t(`wd-collapse ${i.viewmore ? "is-viewmore" : ""} ${i.customClass}`),
			style: r(i.customStyle)
		}, [i.viewmore ? (n(), u("div", S, [l("div", {
			class: t(`wd-collapse__content ${i.modelValue ? "" : "is-retract"} `),
			style: r(`-webkit-line-clamp: ${O.value}; -webkit-box-orient: vertical`)
		}, [e(i.$slots, "default")], 6), l("div", {
			class: "wd-collapse__more",
			onClick: P
		}, [i.useMoreSlot ? (n(), u("div", {
			key: 0,
			class: t(i.customMoreSlotClass)
		}, [e(i.$slots, "more")], 2)) : (n(), u(c, { key: 1 }, [l("span", C, s(i.modelValue ? p(D)("retract") : p(D)("expand")), 1), l("div", { class: t(`wd-collapse__arrow ${i.modelValue ? "is-retract" : ""}`) }, [f(_, { name: "down" })], 2)], 64))])])) : e(i.$slots, "default", { key: 0 })], 6));
	}
});
//#endregion
export { w as default };
