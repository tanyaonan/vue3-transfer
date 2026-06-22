globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, T as o, _ as s, c, d as l, g as u, s as d, x as f, z as p } from "./vue.runtime.js";
import { j as m, p as h, t as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as v } from "./shared/wot-ui/composables/useChildren.ts.js";
import { t as y } from "./shared/wot-ui/common/interceptor.ts.js";
import { n as b, t as x } from "./shared/wot-ui/components/wd-tabbar/index.js";
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-tabbar/wd-tabbar.vue
var S = /* @__PURE__ */ u({
	name: "wd-tabbar",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: b,
	emits: ["change", "update:modelValue"],
	setup(u, { emit: b }) {
		let S = u, C = b, w = i(""), { proxy: T } = s(), { linkChildren: E } = v(x);
		E({
			props: S,
			setChange: O
		});
		let D = d(() => {
			let e = {};
			return _(S.zIndex) && (e["z-index"] = S.zIndex), `${m(e)}${S.customStyle}`;
		});
		a([() => S.fixed, () => S.placeholder], () => {
			k();
		}, {
			deep: !0,
			immediate: !1
		}), o(() => {
			S.fixed && S.placeholder && f(() => {
				k();
			});
		});
		function O(e) {
			let t = e.name;
			t !== S.modelValue && y(S.beforeChange, {
				args: [t],
				done: () => {
					C("update:modelValue", t), C("change", { value: t });
				}
			});
		}
		function k() {
			!S.fixed || !S.placeholder || h(".wd-tabbar", !1, T).then((e) => {
				w.value = Number(e.height);
			});
		}
		return (i, a) => (n(), l("div", {
			class: t({ "wd-tabbar__placeholder": i.fixed && i.placeholder && i.safeAreaInsetBottom && i.shape === "round" }),
			style: r({ height: p(g)(w.value) })
		}, [c("div", {
			class: t(`wd-tabbar wd-tabbar--${i.shape} ${i.customClass} ${i.fixed ? "is-fixed" : ""} ${i.safeAreaInsetBottom ? "is-safe" : ""} ${i.bordered ? "is-border" : ""}`),
			style: r(D.value)
		}, [e(i.$slots, "default")], 6)], 6));
	}
});
//#endregion
export { S as default };
