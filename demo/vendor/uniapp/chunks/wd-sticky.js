globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, I as a, L as o, P as s, _ as c, c as l, d as u, g as d, h as f, s as p } from "./vue.runtime.js";
import { L as m, P as h, j as g, p as _, t as v } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as y, t as b } from "./shared/wot-ui/common/props.ts.js";
import { t as x } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as S } from "./wd-resize.js";
import { t as C } from "./shared/wot-ui/components/wd-sticky-box/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-sticky/types.ts
var w = {
	...b,
	zIndex: y(1),
	offsetTop: y(0)
}, T = ["id"], E = /*@__PURE__*/ d({
	name: "wd-sticky",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: w,
	setup(e, { expose: d }) {
		let y = e, b = o(`wd-sticky${m()}`), w = o([]), E = a({
			position: "absolute",
			boxLeaved: !1,
			top: 0,
			height: 0,
			width: 0,
			state: ""
		}), { parent: D } = x(C), { proxy: O } = c(), k = p(() => {
			let e = {
				"z-index": y.zIndex,
				height: v(E.height),
				width: v(E.width)
			};
			return E.boxLeaved || (e.position = "relative"), `${g(e)}${y.customStyle}`;
		}), A = p(() => {
			let e = {
				"z-index": y.zIndex,
				height: v(E.height),
				width: v(E.width)
			};
			return E.boxLeaved || (e.position = "relative"), `${g(e)}`;
		}), j = p(() => g({
			position: E.position,
			top: v(E.top)
		})), M = p(() => {
			let e = 0;
			return e = 44, e + y.offsetTop;
		});
		function N() {
			for (; w.value.length !== 0;) w.value.pop().disconnect();
		}
		function P() {
			let e = uni.createIntersectionObserver(O, { thresholds: [0, .5] });
			return w.value.push(e), e;
		}
		async function F(e) {
			E.width = e.width, E.height = e.height, await h(), I(), !(!D.value || !D.value.observerForChild) && D.value.observerForChild(O);
		}
		function I() {
			if (E.height === 0 && E.width === 0) return;
			let e = M.value + E.height;
			N(), P().relativeToViewport({ top: -e }).observe(`#${b.value}`, (e) => {
				L(e);
			}), _(`#${b.value}`, !1, O).then((t) => {
				t.bottom = Number(t.bottom) + 44, Number(t.bottom) <= e && L({ boundingClientRect: t });
			});
		}
		function L({ boundingClientRect: e }) {
			if (D.value && D.value.boxStyle && E.height >= D.value.boxStyle.height) {
				E.position = "absolute", E.top = 0;
				return;
			}
			let t = e.top <= M.value;
			t = e.top < M.value, t ? (E.state = "sticky", E.boxLeaved = !1, E.position = "fixed", E.top = M.value) : (E.state = "normal", E.boxLeaved = !1, E.position = "absolute", E.top = 0);
		}
		function R(e, t, n) {
			E.boxLeaved = e, E.position = t, E.top = n;
		}
		return d({
			setPosition: R,
			stickyState: E,
			offsetTop: y.offsetTop
		}), (e, a) => (r(), u("div", { style: i(`${k.value};display: inline-block;`) }, [l("div", {
			class: n(`wd-sticky ${e.customClass}`),
			style: i(A.value),
			id: b.value
		}, [l("div", {
			class: "wd-sticky__container",
			style: i(j.value)
		}, [f(S, {
			onResize: F,
			"custom-style": "display: inline-block;"
		}, {
			default: s(() => [t(e.$slots, "default")]),
			_: 3
		})], 4)], 14, T)], 4));
	}
}), D = /* @__PURE__ */ e({ default: () => O }), O = E;
//#endregion
export { D as n, O as t };
