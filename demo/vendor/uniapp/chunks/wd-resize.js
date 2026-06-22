globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, L as a, T as o, _ as s, c, d as l, g as u, s as d, z as f } from "./vue.runtime.js";
import { L as p, j as m, t as h } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { s as g, t as _ } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-resize/types.ts
var v = {
	..._,
	customContainerClass: g("")
}, y = ["id"], b = ["scroll-top", "scroll-left"], x = ["scroll-top", "scroll-left"], S = /*@__PURE__*/ u({
	name: "wd-resize",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: v,
	emits: ["resize"],
	setup(e, { emit: u }) {
		let g = e, _ = u, v = a(0), S = a(0), C = a(0), w = a(0), T = a(0), E = a(0), D = a(0), O = d(() => `${m({
			width: h(E.value),
			height: h(T.value)
		})}${g.customStyle}`), k = () => {}, { proxy: A } = s(), j = a(`resize${p()}`);
		o(() => {
			uni.createSelectorQuery().in(A).select(`#${j.value}`).boundingClientRect().exec(([e]) => {
				let t = e.height, n = e.width;
				T.value = t, E.value = n, k = () => {
					uni.createSelectorQuery().in(A).select(`#${j.value}`).boundingClientRect().exec(([e]) => {
						if (D.value++ === 0) {
							let t = {};
							[
								"bottom",
								"top",
								"left",
								"right",
								"height",
								"width"
							].forEach((n) => {
								t[n] = e[n];
							}), _("resize", t);
						}
						if (D.value < 3) return;
						let r = e.height, i = e.width;
						T.value = r, E.value = i;
						let a = [];
						if (r !== t && (t = r, a.push(1)), i !== n && (n = i, a.push(1)), a.length !== 0) {
							let t = {};
							[
								"bottom",
								"top",
								"left",
								"right",
								"height",
								"width"
							].forEach((n) => {
								t[n] = e[n];
							}), _("resize", t);
						}
						M({
							lastWidth: n,
							lastHeight: t
						});
					});
				}, M({
					lastWidth: n,
					lastHeight: t
				});
			});
		});
		function M({ lastWidth: e, lastHeight: t }) {
			v.value = 1e5 + t, S.value = 3 * T.value + t, C.value = 1e5 + e, w.value = 3 * E.value + e;
		}
		return (e, a) => (r(), l("div", {
			class: n(`wd-resize ${e.customClass}`),
			style: i(O.value)
		}, [c("div", {
			id: j.value,
			class: n(`wd-resize__container ${e.customContainerClass}`)
		}, [
			t(e.$slots, "default"),
			c("div", {
				class: "wd-resize__wrapper",
				"scroll-y": !0,
				"scroll-top": v.value,
				"scroll-x": !0,
				"scroll-left": C.value,
				onScroll: a[0] ||= (...e) => f(k) && f(k)(...e)
			}, [...a[2] ||= [c("div", {
				class: "wd-resize__wrapper--placeholder",
				style: {
					height: "100000px",
					width: "100000px"
				}
			}, null, -1)]], 40, b),
			c("div", {
				class: "wd-resize__wrapper",
				"scroll-y": !0,
				"scroll-top": S.value,
				"scroll-x": !0,
				"scroll-left": w.value,
				onScroll: a[1] ||= (...e) => f(k) && f(k)(...e)
			}, [...a[3] ||= [c("div", {
				class: "wd-resize__wrapper--placeholder",
				style: {
					height: "250%",
					width: "250%"
				}
			}, null, -1)]], 40, x)
		], 10, y)], 6));
	}
}), C = /* @__PURE__ */ e({ default: () => w }), w = S;
//#endregion
export { C as n, w as t };
