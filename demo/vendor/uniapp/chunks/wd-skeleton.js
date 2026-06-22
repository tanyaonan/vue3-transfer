globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, a as o, d as s, g as c, k as l, s as u } from "./vue.runtime.js";
import { t as d, w as f } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { n as p, r as m, s as h } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-skeleton/types.ts
var g = {
	theme: h("text"),
	rowCol: p(),
	loading: m(!0),
	animation: {
		type: String,
		default: ""
	},
	customClass: {
		type: [
			String,
			Array,
			Object
		],
		default: ""
	},
	customStyle: {
		type: Object,
		default() {
			return {};
		}
	}
}, _ = {
	key: 0,
	class: "wd-skeleton__content"
}, v = { key: 1 }, y = /* @__PURE__ */ c({
	name: "wd-skeleton",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: g,
	setup(c) {
		let p = {
			avatar: [{
				type: "circle",
				height: "64px",
				width: "64px"
			}],
			image: [{
				type: "rect",
				height: "64px",
				width: "64px"
			}],
			text: [1, [{
				width: "24%",
				height: "16px",
				marginRight: "16px"
			}, {
				width: "76%",
				height: "16px"
			}]],
			paragraph: [
				1,
				1,
				1,
				{ width: "55%" }
			]
		}, m = c, h = i([]), g = u(() => h.value.map((e) => {
			if (f(e)) return [{
				class: y({ type: "text" }),
				style: {}
			}];
			if (Array.isArray(e)) return e.map((e) => ({
				...e,
				class: y(e),
				style: b(e)
			}));
			let t = e;
			return [{
				...t,
				class: y(t),
				style: b(t)
			}];
		}));
		function y(e) {
			return [
				"wd-skeleton__col",
				`wd-skeleton--type-${e.type || "text"}`,
				{ [`wd-skeleton--animation-${m.animation}`]: m.animation }
			];
		}
		function b(e) {
			let t = {};
			for (let n of [
				"size",
				"width",
				"height",
				"margin",
				"background",
				"marginLeft",
				"marginRight",
				"borderRadius",
				"backgroundColor"
			]) if (Object.prototype.hasOwnProperty.call(e, n)) {
				let r = d(e[n]);
				n === "size" ? (t.width = r, t.height = r) : t[n] = r;
			}
			return t;
		}
		a(() => m.rowCol, (e) => {
			h.value = [...Array.isArray(e) && e.length ? m.rowCol : p[m.theme]];
		}, { immediate: !0 });
		let x = u(() => m.loading == null || m.loading === !0);
		return (i, a) => (n(), s("div", {
			class: t(`wd-skeleton ${i.customClass}`),
			style: r(i.customStyle)
		}, [x.value ? (n(), s("div", _, [(n(!0), s(o, null, l(g.value, (e, i) => (n(), s("div", {
			class: "wd-skeleton__row",
			key: `row-${i}`
		}, [(n(!0), s(o, null, l(e, (e, i) => (n(), s("div", {
			key: `col-${i}`,
			class: t(e.class),
			style: r(e.style)
		}, null, 6))), 128))]))), 128))])) : (n(), s("div", v, [e(i.$slots, "default")]))], 6));
	}
});
//#endregion
export { y as default };
