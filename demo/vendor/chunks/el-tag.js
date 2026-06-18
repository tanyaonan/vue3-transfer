globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { G as t, H as n, Mt as r, Pt as i, T as a, _ as o, b as s, d as c, n as l, tt as u, v as d, w as f, x as p, y as m, yt as h } from "./vue.runtime.js";
import { t as g } from "./shared/element-plus/utils/vue/install.js";
import { n as _ } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as v } from "./shared/element-plus/hooks/use-namespace.js";
import { h as y } from "./shared/element-plus-icons.js";
import { t as b } from "./el-icon.js";
import { t as x } from "./shared/element-plus/constants/size.js";
import { r as S } from "./el-form/hooks/use-form-common-props.js";
import { n as C } from "./shared/element-plus/hooks/use-locale.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/tag/src/tag.mjs
var w = _({
	type: {
		type: String,
		values: [
			"primary",
			"success",
			"info",
			"warning",
			"danger"
		],
		default: "primary"
	},
	closable: Boolean,
	disableTransitions: Boolean,
	hit: Boolean,
	color: String,
	size: {
		type: String,
		values: x
	},
	effect: {
		type: String,
		values: [
			"dark",
			"light",
			"plain"
		],
		default: "light"
	},
	round: Boolean
}), T = {
	close: (e) => e instanceof MouseEvent,
	click: (e) => e instanceof MouseEvent
}, E = ["aria-label"], D = ["aria-label"], O = /* @__PURE__ */ a({
	name: "ElTag",
	__name: "tag",
	props: w,
	emits: T,
	setup(e, { emit: a }) {
		let g = e, _ = a, x = S(), { t: w } = C(), T = v("tag"), O = o(() => {
			let { type: e, hit: t, effect: n, closable: r, round: i } = g;
			return [
				T.b(),
				T.is("closable", r),
				T.m(e || "primary"),
				T.m(x.value),
				T.m(n),
				T.is("hit", t),
				T.is("round", i)
			];
		}), k = (e) => {
			_("close", e);
		}, A = (e) => {
			_("click", e);
		}, j = (e) => {
			e?.component?.subTree?.component?.bum && (e.component.subTree.component.bum = null);
		};
		return (a, o) => e.disableTransitions ? (n(), p("span", {
			key: 0,
			class: r(O.value),
			style: i({ backgroundColor: e.color }),
			onClick: A
		}, [d("span", { class: r(h(T).e("content")) }, [t(a.$slots, "default")], 2), e.closable ? (n(), p("button", {
			key: 0,
			"aria-label": h(w)("el.tag.close"),
			class: r(h(T).e("close")),
			type: "button",
			onClick: c(k, ["stop"])
		}, [f(h(b), null, {
			default: u(() => [f(h(y))]),
			_: 1
		})], 10, E)) : s("v-if", !0)], 6)) : (n(), m(l, {
			key: 1,
			name: `${h(T).namespace.value}-zoom-in-center`,
			appear: "",
			onVnodeMounted: j
		}, {
			default: u(() => [d("span", {
				class: r(O.value),
				style: i({ backgroundColor: e.color }),
				onClick: A
			}, [d("span", { class: r(h(T).e("content")) }, [t(a.$slots, "default")], 2), e.closable ? (n(), p("button", {
				key: 0,
				"aria-label": h(w)("el.tag.close"),
				class: r(h(T).e("close")),
				type: "button",
				onClick: c(k, ["stop"])
			}, [f(h(b), null, {
				default: u(() => [f(h(y))]),
				_: 1
			})], 10, D)) : s("v-if", !0)], 6)]),
			_: 3
		}, 8, ["name"]));
	}
}), k = /* @__PURE__ */ e({
	ElTag: () => A,
	default: () => A,
	tagEmits: () => T,
	tagProps: () => w
}), A = g(O);
//#endregion
export { k as n, w as r, A as t };
