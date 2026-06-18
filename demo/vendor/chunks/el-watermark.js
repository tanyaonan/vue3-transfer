globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, G as t, H as n, I as r, Pt as i, T as a, Tt as o, _ as s, pt as c, ut as l, x as u, z as d } from "./vue.runtime.js";
import { t as f } from "./shared/element-plus/utils/vue/install.js";
import { s as p } from "./shared/element-plus/utils/types.js";
import { n as m, r as h } from "./shared/element-plus/utils/vue/props/runtime.js";
import { u as g } from "./shared/vueuse.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/watermark/src/watermark.mjs
var _ = m({
	zIndex: {
		type: Number,
		default: 9
	},
	rotate: {
		type: Number,
		default: -22
	},
	width: Number,
	height: Number,
	image: String,
	content: {
		type: h([String, Array]),
		default: "Element Plus"
	},
	font: { type: h(Object) },
	gap: {
		type: h(Array),
		default: () => [100, 100]
	},
	offset: { type: h(Array) }
});
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/watermark/src/utils.mjs
function v(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function y(e) {
	return Object.keys(e).map((t) => `${v(t)}: ${e[t]};`).join(" ");
}
function b() {
	return window.devicePixelRatio || 1;
}
var x = (e, t) => {
	let n = !1;
	return e.removedNodes.length && t && (n = Array.from(e.removedNodes).includes(t)), e.type === "attributes" && e.target === t && (n = !0), n;
}, S = {
	left: [0, .5],
	start: [0, .5],
	center: [.5, 0],
	right: [1, -.5],
	end: [1, -.5]
};
function C(e, t, n = 1) {
	let r = document.createElement("canvas"), i = r.getContext("2d"), a = e * n, o = t * n;
	return r.setAttribute("width", `${a}px`), r.setAttribute("height", `${o}px`), i.save(), [
		i,
		r,
		a,
		o
	];
}
function w() {
	function e(e, t, n, r, i, a, s, c, l) {
		let [u, d, f, p] = C(r, i, n), m = 0;
		if (e instanceof HTMLImageElement) u.drawImage(e, 0, 0, f, p);
		else {
			let { color: t, fontSize: r, fontStyle: s, fontWeight: c, fontFamily: d, textAlign: p, textBaseline: h } = a, g = Number(r) * n;
			u.font = `${s} normal ${c} ${g}px/${i}px ${d}`, u.fillStyle = t, u.textAlign = p, u.textBaseline = h;
			let _ = o(e) ? e : [e];
			if (h !== "top" && _[0]) {
				let e = u.measureText(_[0]);
				u.textBaseline = "top";
				let t = u.measureText(_[0]);
				m = e.actualBoundingBoxAscent - t.actualBoundingBoxAscent;
			}
			_?.forEach((e, t) => {
				let [r, i] = S[p];
				u.fillText(e ?? "", f * r + l * i, t * (g + a.fontGap * n));
			});
		}
		let h = Math.PI / 180 * Number(t), g = Math.max(r, i), [_, v, y] = C(g, g, n);
		_.translate(y / 2, y / 2), _.rotate(h), f > 0 && p > 0 && _.drawImage(d, -f / 2, -p / 2);
		function b(e, t) {
			return [e * Math.cos(h) - t * Math.sin(h), e * Math.sin(h) + t * Math.cos(h)];
		}
		let x = 0, w = 0, T = 0, E = 0, D = f / 2, O = p / 2;
		[
			[0 - D, 0 - O],
			[0 + D, 0 - O],
			[0 + D, 0 + O],
			[0 - D, 0 + O]
		].forEach(([e, t]) => {
			let [n, r] = b(e, t);
			x = Math.min(x, n), w = Math.max(w, n), T = Math.min(T, r), E = Math.max(E, r);
		});
		let k = x + y / 2, A = T + y / 2, j = w - x, M = E - T, N = s * n, P = c * n, F = (j + N) * 2, I = M + P, [L, R] = C(F, I);
		function z(e = 0, t = 0) {
			L.drawImage(v, k, A, j, M, e, t + m, j, M);
		}
		return z(), z(j + N, -M / 2 - P / 2), z(j + N, M / 2 + P / 2), [
			R.toDataURL(),
			F / n,
			I / n
		];
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/watermark/index.mjs
var T = f(/* @__PURE__ */ a({
	name: "ElWatermark",
	__name: "watermark",
	props: _,
	setup(a) {
		let f = { position: "relative" }, m = a, h = s(() => m.font?.fontGap ?? 3), _ = s(() => m.font?.color ?? "rgba(0,0,0,.15)"), v = s(() => m.font?.fontSize ?? 16), S = s(() => m.font?.fontWeight ?? "normal"), C = s(() => m.font?.fontStyle ?? "normal"), T = s(() => m.font?.fontFamily ?? "sans-serif"), E = s(() => m.font?.textAlign ?? "center"), D = s(() => m.font?.textBaseline ?? "hanging"), O = s(() => m.gap[0]), k = s(() => m.gap[1]), A = s(() => O.value / 2), j = s(() => k.value / 2), M = s(() => m.offset?.[0] ?? A.value), N = s(() => m.offset?.[1] ?? j.value), P = () => {
			let e = {
				zIndex: m.zIndex,
				position: "absolute",
				left: 0,
				top: 0,
				width: "100%",
				height: "100%",
				pointerEvents: "none",
				backgroundRepeat: "repeat"
			}, t = M.value - A.value, n = N.value - j.value;
			return t > 0 && (e.left = `${t}px`, e.width = `calc(100% - ${t}px)`, t = 0), n > 0 && (e.top = `${n}px`, e.height = `calc(100% - ${n}px)`, n = 0), e.backgroundPosition = `${t}px ${n}px`, e;
		}, F = c(null), I = c(), L = l(!1), R = () => {
			I.value &&= (I.value.remove(), void 0);
		}, z = (e, t) => {
			F.value && I.value && (L.value = !0, I.value.setAttribute("style", y({
				...P(),
				backgroundImage: `url('${e}')`,
				backgroundSize: `${Math.floor(t)}px`
			})), F.value?.append(I.value), setTimeout(() => {
				L.value = !1;
			}));
		}, B = (e) => {
			let t = 120, n = 64, r = 0, { image: i, content: a, width: s, height: c, rotate: l } = m;
			if (!i && e.measureText) {
				e.font = `${Number(v.value)}px ${T.value}`;
				let i = o(a) ? a : [a], s = 0, c = 0;
				i.forEach((t) => {
					let { width: n, fontBoundingBoxAscent: r, fontBoundingBoxDescent: i, actualBoundingBoxAscent: a, actualBoundingBoxDescent: o } = e.measureText(t), l = p(r) ? a + o : r + i;
					n > s && (s = Math.ceil(n)), l > c && (c = Math.ceil(l));
				}), t = s, n = c * i.length + (i.length - 1) * h.value;
				let u = Math.PI / 180 * Number(l);
				r = Math.ceil(Math.abs(Math.sin(u) * n) / 2), t += r;
			}
			return [
				s ?? t,
				c ?? n,
				r
			];
		}, V = w(), H = () => {
			let e = document.createElement("canvas").getContext("2d"), t = m.image, n = m.content, r = m.rotate;
			if (e) {
				I.value ||= document.createElement("div");
				let i = b(), [a, o, s] = B(e), c = (e) => {
					let [t, n] = V(e || "", r, i, a, o, {
						color: _.value,
						fontSize: v.value,
						fontStyle: C.value,
						fontWeight: S.value,
						fontFamily: T.value,
						fontGap: h.value,
						textAlign: E.value,
						textBaseline: D.value
					}, O.value, k.value, s);
					z(t, n);
				};
				if (t) {
					let e = new Image();
					e.onload = () => {
						c(e);
					}, e.onerror = () => {
						c(n);
					}, e.crossOrigin = "anonymous", e.referrerPolicy = "no-referrer", e.src = t;
				} else c(n);
			}
		};
		return d(() => {
			H();
		}), e(() => m, () => {
			H();
		}, {
			deep: !0,
			flush: "post"
		}), r(() => {
			R();
		}), g(F, (e) => {
			L.value || e.forEach((e) => {
				x(e, I.value) && (R(), H());
			});
		}, {
			attributes: !0,
			subtree: !0,
			childList: !0
		}), (e, r) => (n(), u("div", {
			ref_key: "containerRef",
			ref: F,
			style: i([f])
		}, [t(e.$slots, "default")], 4));
	}
}));
//#endregion
export { T as ElWatermark, T as default, _ as watermarkProps };
