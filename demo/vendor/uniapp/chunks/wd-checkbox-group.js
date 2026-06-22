globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, N as a, d as o, g as s } from "./vue.runtime.js";
import { i as c, l, v as u } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as d } from "./shared/wot-ui/composables/useChildren.ts.js";
import { n as f, t as p } from "./shared/wot-ui/components/wd-checkbox-group/index.js";
var m = /*@__PURE__*/ s({
	name: "wd-checkbox-group",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: f,
	emits: ["change", "update:modelValue"],
	setup(e, { expose: s, emit: f }) {
		let m = e, h = f, { linkChildren: g, children: _ } = d(p);
		g({
			props: m,
			changeSelectState: v
		}), a(() => m.modelValue, (e) => {
			new Set(e).size !== e.length && console.error("checkboxGroup's bound value includes same value"), e.length < m.min && console.error("checkboxGroup's bound value's length can't be less than min"), m.max !== 0 && e.length > m.max && console.error("checkboxGroup's bound value's length can't be large than max");
		}, {
			deep: !0,
			immediate: !0
		}), a(() => m.type, (e) => {
			let t = [
				"circle",
				"square",
				"button",
				"dot"
			];
			t.indexOf(e) === -1 && console.error(`type must be one of ${t.toString()}`);
		}, {
			deep: !0,
			immediate: !0
		}), a(() => m.min, (e) => {
			c(e, "min");
		}, {
			deep: !0,
			immediate: !0
		}), a(() => m.max, (e) => {
			c(e, "max");
		}, {
			deep: !0,
			immediate: !0
		});
		function v(e) {
			let t = l(m.modelValue), n = t.indexOf(e);
			if (n > -1) t.splice(n, 1);
			else {
				if (m.max !== 0 && t.length >= m.max) return;
				t.push(e);
			}
			h("update:modelValue", t), h("change", { value: t });
		}
		return s({ toggleAll: (e = {}) => {
			let { modelValue: t } = m, n, r = !1;
			u(e) ? n = e : (n = e.checked, r = e.skipDisabled || !1);
			let i = [];
			_.forEach((e) => {
				if (r && e.disabled) t.includes(e.name) && i.push(e.name);
				else {
					let r = t.includes(e.name);
					(n === void 0 ? !r : n) && i.push(e.name);
				}
			}), h("update:modelValue", i), h("change", { value: i });
		} }), (e, a) => (r(), o("div", {
			class: n(`wd-checkbox-group ${e.customClass}`),
			style: i(e.customStyle)
		}, [t(e.$slots, "default")], 6));
	}
}), h = /* @__PURE__ */ e({ default: () => g }), g = m;
//#endregion
export { h as n, g as t };
