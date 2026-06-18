globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { G as e, H as t, Mt as n, Pt as r, T as i, _ as a, b as o, d as s, n as c, pt as l, tt as u, ut as d, w as f, x as p, y as m, yt as h, z as g } from "./vue.runtime.js";
import { t as _ } from "./shared/element-plus/utils/vue/install.js";
import { n as v } from "./shared/element-plus/utils/error.js";
import { C as y, c as b } from "./shared/vueuse.js";
import { r as x } from "./shared/element-plus/hooks/use-namespace.js";
import { c as S } from "./shared/element-plus-icons.js";
import { t as C } from "./el-icon.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/backtop/src/backtop.mjs
var w = {
	visibilityHeight: {
		type: Number,
		default: 200
	},
	target: {
		type: String,
		default: ""
	},
	right: {
		type: Number,
		default: 40
	},
	bottom: {
		type: Number,
		default: 40
	}
}, T = { click: (e) => e instanceof MouseEvent }, E = (e, t, n) => {
	let r = l(), i = l(), a = d(!1), o = () => {
		r.value && (a.value = r.value.scrollTop >= e.visibilityHeight);
	};
	return b(i, "scroll", y(o, 300, !0)), g(() => {
		i.value = document, r.value = document.documentElement, e.target && (r.value = document.querySelector(e.target) ?? void 0, r.value || v(n, `target does not exist: ${e.target}`), i.value = r.value), o();
	}), {
		visible: a,
		handleClick: (e) => {
			r.value?.scrollTo({
				top: 0,
				behavior: "smooth"
			}), t("click", e);
		}
	};
}, D = "ElBacktop", O = _(/* @__PURE__ */ i({
	name: D,
	__name: "backtop",
	props: w,
	emits: T,
	setup(i, { emit: l }) {
		let d = i, g = l, _ = x("backtop"), { handleClick: v, visible: y } = E(d, g, D), b = a(() => ({
			right: `${d.right}px`,
			bottom: `${d.bottom}px`
		}));
		return (i, a) => (t(), m(c, { name: `${h(_).namespace.value}-fade-in` }, {
			default: u(() => [h(y) ? (t(), p("div", {
				key: 0,
				style: r(b.value),
				class: n(h(_).b()),
				onClick: a[0] ||= s((...e) => h(v) && h(v)(...e), ["stop"])
			}, [e(i.$slots, "default", {}, () => [f(h(C), { class: n(h(_).e("icon")) }, {
				default: u(() => [f(h(S))]),
				_: 1
			}, 8, ["class"])])], 6)) : o("v-if", !0)]),
			_: 3
		}, 8, ["name"]));
	}
}));
//#endregion
export { O as ElBacktop, O as default, T as backtopEmits, w as backtopProps };
