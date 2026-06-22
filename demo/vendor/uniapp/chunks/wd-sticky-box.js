globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, I as a, L as o, P as s, S as c, _ as l, c as u, d, g as f, h as p } from "./vue.runtime.js";
import { L as m, p as h } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as g } from "./shared/wot-ui/common/props.ts.js";
import { t as _ } from "./shared/wot-ui/composables/useChildren.ts.js";
import { t as v } from "./wd-resize.js";
import { t as y } from "./shared/wot-ui/components/wd-sticky-box/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-sticky-box/wd-sticky-box.vue?vue&type=script&setup=true&lang.ts
var b = { style: { position: "relative" } }, x = ["id"], S = /*@__PURE__*/ f({
	name: "wd-sticky-box",
	options: {
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: g,
	setup(e) {
		let f = e, g = o(`wd-sticky-box${m()}`), S = o(/* @__PURE__ */ new Map()), C = a({
			height: 0,
			width: 0
		}), { proxy: w } = l(), { children: T, linkChildren: E } = _(y);
		E({
			boxStyle: C,
			observerForChild: A
		}), c(() => {
			S.value = /* @__PURE__ */ new Map();
		});
		function D(e) {
			C.width = e.width, C.height = e.height;
			let t = S.value;
			S.value = /* @__PURE__ */ new Map();
			for (let [e] of t) A(T.find((t) => t.$.uid === e));
			t.forEach((e) => {
				e.disconnect();
			}), t.clear();
		}
		function O(e) {
			let t = S.value.get(e.$.uid);
			t && (t.disconnect(), S.value.delete(e.$.uid));
		}
		function k(e) {
			let t = uni.createIntersectionObserver(w, { thresholds: [0, .5] });
			return S.value.set(e.$.uid, t), t;
		}
		function A(e) {
			O(e);
			let t = k(e), n = e.$.exposed, r = n.stickyState.height + n.offsetTop;
			r += 44, C.height <= n.stickyState.height && n.setPosition(!1, "absolute", 0), t.relativeToViewport({ top: -r }).observe(`#${g.value}`, (e) => {
				j(n, e);
			}), h(`#${g.value}`, !1, w).then((e) => {
				e.bottom = Number(e.bottom) + 44, Number(e.bottom) <= r && j(n, { boundingClientRect: e });
			}).catch((e) => {
				console.log(e);
			});
		}
		function j(e, { boundingClientRect: t }) {
			let n = e.offsetTop;
			n += 44;
			let r = e.stickyState.height + n, i = t.bottom <= r;
			if (i = t.bottom < r, i) e.setPosition(!0, "absolute", t.height - e.stickyState.height);
			else if (t.top <= r && !i) {
				if (e.stickyState.state === "normal") return;
				e.setPosition(!1, "fixed", n);
			}
		}
		return (e, a) => (r(), d("div", b, [u("div", {
			class: n(`wd-sticky-box ${f.customClass}`),
			style: i(e.customStyle),
			id: g.value
		}, [p(v, { onResize: D }, {
			default: s(() => [t(e.$slots, "default")]),
			_: 3
		})], 14, x)]));
	}
}), C = /* @__PURE__ */ e({ default: () => w }), w = S;
//#endregion
export { C as n, w as t };
