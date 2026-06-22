globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, T as a, d as o, g as s, s as c, u as l, x as u } from "./vue.runtime.js";
import { L as d, _ as f, j as p, m, n as h, t as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as v, i as y, r as b, s as x, t as S } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-watermark/types.ts
var C = {
	...S,
	content: x(""),
	image: x(""),
	imageHeight: y(100),
	imageWidth: y(100),
	gutterX: y(0),
	gutterY: y(0),
	width: y(100),
	height: y(100),
	fullScreen: b(!0),
	color: x("#C9CBD4"),
	size: y(14),
	fontStyle: x("normal"),
	fontWeight: v("normal"),
	fontFamily: x("PingFang SC"),
	rotate: y(-25),
	zIndex: y(1100),
	opacity: Number,
	layout: x("grid")
}, w = ["canvas-id", "id"], T = /* @__PURE__ */ s({
	name: "wd-watermark",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: C,
	setup(s) {
		let v = s;
		i(() => v, () => {
			k();
		}, { deep: !0 });
		let y = r(`water${d()}`), b = r(""), x = r(uni.canIUse("createOffscreenCanvas") && !!uni.createOffscreenCanvas), S = r(m().pixelRatio), C = r((v.height + v.gutterY) * S.value), T = r((v.width + v.gutterX) * S.value), E = r(!0), D = c(() => {
			let e = "wd-watermark";
			return v.fullScreen && (e = `${e} is-fullscreen`), `${e} ${v.customClass}`;
		}), O = c(() => {
			let e = v.width + v.gutterX;
			v.layout === "staggered" && (e *= 2);
			let t = {
				backgroundSize: g(e),
				zIndex: v.zIndex
			};
			return _(v.opacity) && (t.opacity = v.opacity), b.value && (t.backgroundImage = `url('${b.value}')`), `${p(t)}${v.customStyle}`;
		});
		a(() => {
			A();
		});
		function k() {
			E.value = !0;
			let e = v.layout === "staggered" ? 2 : 1, t = v.layout === "staggered" ? 2 : 1;
			C.value = (v.height + v.gutterY) * S.value * t, T.value = (v.width + v.gutterX) * S.value * e, u(() => {
				A();
			});
		}
		function A() {
			E.value = !1;
			let { width: e, height: t, color: n, size: r, fontStyle: i, fontWeight: a, fontFamily: o, content: s, rotate: c, gutterX: l, gutterY: u, image: d, imageHeight: f, imageWidth: p, layout: m } = v;
			j(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m);
		}
		async function j(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
			let h = m === "staggered" ? 2 : 1, g = m === "staggered" ? 2 : 1;
			await M((t + u) * S.value * g, (e + l) * S.value * h, e * S.value, t * S.value, c, r * S.value, o, i, a, n, s, d, f, p, m);
		}
		async function M(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
			let h = document.createElement("canvas"), g = h.getContext("2d");
			h.setAttribute("width", `${t}px`), h.setAttribute("height", `${e}px`), g ? d ? I(g, new Image(), d, f, p, i, n, r, h, m) : await F(g, u, n, r, i, a, o, s, c, l, h, m) : console.error("无法获取canvas上下文，请确认当前环境是否支持canvas");
		}
		function N(e, t) {
			return new Promise((n) => {
				let r = e.measureText(t);
				r && typeof r.width == "number" ? n(r.width) : n(0);
			});
		}
		async function P(e, t, n) {
			let r = [], i = "";
			for (let a = 0; a < t.length; a++) {
				let o = t[a], s = i + o;
				await N(e, s) > n && a > 0 ? (r.push(i), i = o) : i = s;
			}
			return r.push(i), r;
		}
		async function F(e, t, n, r, i, a, o, s, c, l, u, d) {
			e.font = `${s} normal ${c} ${a}px/${r}px ${o}`;
			let f = await P(e, t, n), p = a * 1.2, m = -(f.length * p) / 2 + p / 2, h = d === "staggered" ? 2 : 1, g = d === "staggered" ? 2 : 1, _ = d === "staggered" ? 2 : 1, v = u.width, y = u.height, x = v / g, S = y / _;
			for (let t = 0; t < h; t++) {
				let u = t === 1 ? x : 0, d = t === 1 ? S : 0;
				e.save(), e.textBaseline = "middle", e.textAlign = "center", e.translate(u + n / 2, d + r / 2), e.rotate(Math.PI / 180 * i), e.font = `${s} normal ${c} ${a}px/${r}px ${o}`, e.fillStyle = l, f.forEach((t, n) => {
					e.fillText(t, 0, m + n * p);
				}), e.restore();
			}
			b.value = u.toDataURL();
		}
		function I(e, t, n, r, i, a, o, s, c, l) {
			t.crossOrigin = "anonymous", t.referrerPolicy = "no-referrer", f(n) ? t.src = n : t.src = h(n, { timestamp: `${(/* @__PURE__ */ new Date()).getTime()}` }), t.onload = () => {
				let n = l === "staggered" ? 2 : 1, u = l === "staggered" ? 2 : 1, d = l === "staggered" ? 2 : 1, f = c.width, p = c.height, m = f / u, h = p / d;
				for (let c = 0; c < n; c++) {
					let n = c === 1 ? m : 0, l = c === 1 ? h : 0;
					e.save(), e.translate(n + o / 2, l + s / 2), e.rotate(Math.PI / 180 * Number(a)), e.drawImage(t, -i * S.value / 2, -r * S.value / 2, i * S.value, r * S.value), e.restore();
				}
				b.value = c.toDataURL();
			};
		}
		return (r, i) => (t(), o("div", {
			class: e(D.value),
			style: n(O.value)
		}, [!x.value && E.value ? (t(), o("canvas", {
			key: 0,
			type: "2d",
			style: n({
				height: C.value + "px",
				width: T.value + "px",
				visibility: "hidden"
			}),
			"canvas-id": y.value,
			id: y.value
		}, null, 12, w)) : l("", !0)], 6));
	}
});
//#endregion
export { T as default };
