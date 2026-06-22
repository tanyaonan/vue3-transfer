globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Bt as n, Gt as r, Mt as i, Nt as a, On as o, dn as s, fn as c } from "../shared/core.js";
import { $ as l, Sr as u, _r as d, o as f } from "../shared/antd-core.js";
//#region node_modules/.pnpm/@rc-component+mutate-observ_a72358b3f7d6c9d3afae3f428b826cf9/node_modules/@rc-component/mutate-observer/es/useMutateObserver.js
var p = /* @__PURE__ */ t(o()), m = {
	subtree: !0,
	childList: !0,
	attributeFilter: ["style", "class"]
}, h = (e, t, n = m) => {
	p.useEffect(() => {
		if (!s() || !e) return;
		let r, i = Array.isArray(e) ? e : [e];
		return "MutationObserver" in window && (r = new MutationObserver(t), i.forEach((e) => {
			r.observe(e, n);
		})), () => {
			r?.takeRecords(), r?.disconnect();
		};
	}, [n, e]);
}, g = (e, t, n = 1) => {
	let r = document.createElement("canvas"), i = r.getContext("2d"), a = e * n, o = t * n;
	return r.setAttribute("width", `${a}px`), r.setAttribute("height", `${o}px`), i.save(), [
		i,
		r,
		a,
		o
	];
}, _ = (e, t, n) => [e * Math.cos(n) - t * Math.sin(n), e * Math.sin(n) + t * Math.cos(n)], ee = () => p.useCallback((e, t, n, r, i, a, o, s) => {
	let [c, l, u, d] = g(r, i, n);
	if (e instanceof HTMLImageElement) c.drawImage(e, 0, 0, u, d);
	else {
		let { color: t, fontSize: r, fontStyle: o, fontWeight: s, fontFamily: l, textAlign: d } = a, p = Number(r) * n;
		c.font = `${o} normal ${s} ${p}px/${i}px ${l}`, c.fillStyle = t, c.textAlign = d, c.textBaseline = "top", f(e)?.forEach((e, t) => {
			c.fillText(e ?? "", u / 2, t * (p + 3 * n));
		});
	}
	let p = Math.PI / 180 * Number(t), m = Math.max(r, i), [h, ee, v] = g(m, m, n);
	h.translate(v / 2, v / 2), h.rotate(p), u > 0 && d > 0 && h.drawImage(l, -u / 2, -d / 2);
	let y = 0, b = 0, x = 0, S = 0, C = u / 2, w = d / 2;
	[
		[0 - C, 0 - w],
		[0 + C, 0 - w],
		[0 + C, 0 + w],
		[0 - C, 0 + w]
	].forEach(([e, t]) => {
		let [n, r] = _(e, t, p);
		y = Math.min(y, n), b = Math.max(b, n), x = Math.min(x, r), S = Math.max(S, r);
	});
	let T = y + v / 2, E = x + v / 2, D = b - y, O = S - x, k = o * n, A = s * n, j = (D + k) * 2, M = O + A, [N, P] = g(j, M), F = (e = 0, t = 0) => {
		N.drawImage(ee, T, E, D, O, e, t, D, O);
	};
	return F(), F(D + k, -O / 2 - A / 2), F(D + k, O / 2 + A / 2), [
		P.toDataURL(),
		j / n,
		M / n
	];
}, []);
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/watermark/useRafDebounce.js
function v(e) {
	let t = p.useRef(!1), r = p.useRef(null), i = c(e);
	return () => {
		t.current || (t.current = !0, i(), r.current = n(() => {
			t.current = !1;
		}));
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/watermark/useSingletonCache.js
function y() {
	let e = p.useRef([null, null]);
	return (t, n) => {
		let i = t.map((e) => e instanceof HTMLElement || Number.isNaN(e) ? "" : e);
		return r(e.current[0], i) || (e.current = [i, n()]), e.current[1];
	};
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/watermark/utils.js
function b(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function x(e) {
	return Object.keys(e).map((t) => `${b(t)}: ${e[t]};`).join(" ");
}
function S() {
	return window.devicePixelRatio || 1;
}
var C = (e, t) => {
	let n = !1;
	return e.removedNodes.length && (n = Array.from(e.removedNodes).some(t)), e.type === "attributes" && t(e.target) && (n = !0), n;
}, w = () => {}, T = { visibility: "visible !important" }, E = (e, t) => {
	let n = p.useRef(/* @__PURE__ */ new Map()), r = c(t ?? w);
	return [
		(i, a, o) => {
			if (o) {
				let s = n.current.get(o);
				if (!s) {
					let e = document.createElement("div");
					n.current.set(o, e);
				}
				let c = n.current.get(o);
				c.setAttribute("style", x({
					...e,
					backgroundImage: `url('${i}')`,
					backgroundSize: `${Math.floor(a)}px`,
					...T
				})), c.removeAttribute("class"), c.removeAttribute("hidden"), c.parentElement !== o && (s && t && r(), o.append(c));
			}
			return n.current.get(o);
		},
		(e) => {
			let t = n.current.get(e);
			t && e && e.removeChild(t), n.current.delete(e);
		},
		(e) => Array.from(n.current.values()).includes(e)
	];
}, D = /* @__PURE__ */ e({ default: () => N });
function O(e, t) {
	return e.size === t.size ? e : t;
}
var k = 100, A = 100, j = 1, M = {
	position: "relative",
	overflow: "hidden"
}, N = (e) => {
	let { zIndex: t, rotate: n = -22, width: r, height: o, image: s, content: m, font: g = {}, style: _, className: b, rootClassName: x, gap: w = [k, A], offset: T, children: D, inherit: N = !0, onRemove: P } = e, { className: F, style: te } = u("watermark"), ne = {
		...M,
		...te,
		..._
	}, [, I] = d(), L = t ?? I.zIndexPopupBase - j, { color: R = I.colorFill, fontSize: z = I.fontSizeLG, fontWeight: B = "normal", fontStyle: V = "normal", fontFamily: H = "sans-serif", textAlign: U = "center" } = g, [W = k, G = A] = w, K = W / 2, q = G / 2, J = T?.[0] ?? K, Y = T?.[1] ?? q, re = p.useMemo(() => {
		let e = {
			zIndex: L,
			position: "absolute",
			left: 0,
			top: 0,
			width: "100%",
			height: "100%",
			pointerEvents: "none",
			backgroundRepeat: "repeat"
		}, t = J - K, n = Y - q;
		return t > 0 && (e.left = `${t}px`, e.width = `calc(100% - ${t}px)`, t = 0), n > 0 && (e.top = `${n}px`, e.height = `calc(100% - ${n}px)`, n = 0), e.backgroundPosition = `${t}px ${n}px`, e;
	}, [
		L,
		J,
		K,
		Y,
		q
	]), [X, ie] = p.useState(), [Z, ae] = p.useState(() => /* @__PURE__ */ new Set()), Q = p.useMemo(() => {
		let e = X ? [X] : [];
		return [].concat(e, i(Array.from(Z)));
	}, [X, Z]), oe = (e) => {
		let t = 120, n = 64;
		if (!s && e.measureText) {
			e.font = `${Number(z)}px ${H}`;
			let r = f(m), a = r.map((t) => {
				let n = e.measureText(t);
				return [n.width, n.fontBoundingBoxAscent + n.fontBoundingBoxDescent];
			});
			t = Math.ceil(Math.max.apply(Math, i(a.map((e) => e[0])))), n = Math.ceil(Math.max.apply(Math, i(a.map((e) => e[1])))) * r.length + (r.length - 1) * 3;
		}
		return [r ?? t, o ?? n];
	}, se = ee(), ce = y(), [$, le] = p.useState(null), ue = v(() => {
		let e = document.createElement("canvas").getContext("2d");
		if (e) {
			let t = S(), [r, i] = oe(e), a = (e) => {
				let a = [
					e || "",
					n,
					t,
					r,
					i,
					{
						color: R,
						fontSize: z,
						fontStyle: V,
						fontWeight: B,
						fontFamily: H,
						textAlign: U
					},
					W,
					G
				], [o, s] = ce(a, () => se.apply(void 0, a));
				le([o, s]);
			};
			if (s) {
				let e = new Image();
				e.onload = () => {
					a(e);
				}, e.onerror = () => {
					a(m);
				}, e.crossOrigin = "anonymous", e.referrerPolicy = "no-referrer", e.src = s;
			} else a(m);
		}
	}), [de, fe, pe] = E(re, P);
	(0, p.useEffect)(() => {
		$ && Q.forEach((e) => {
			de($[0], $[1], e);
		});
	}, [$, Q]), h(Q, c((e) => {
		e.forEach((e) => {
			if (C(e, pe)) ue();
			else if (e.target === X && e.attributeName === "style") {
				let e = Object.keys(M);
				for (let t = 0; t < e.length; t += 1) {
					let n = e[t], r = ne[n], i = X.style[n];
					r && r !== i && (X.style[n] = r);
				}
			}
		});
	})), (0, p.useEffect)(ue, [
		n,
		L,
		r,
		o,
		s,
		m,
		R,
		z,
		B,
		V,
		H,
		U,
		W,
		G,
		J,
		Y
	]);
	let me = p.useMemo(() => ({
		add: (e) => {
			ae((t) => {
				let n = new Set(t);
				return n.add(e), O(t, n);
			});
		},
		remove: (e) => {
			fe(e), ae((t) => {
				let n = new Set(t);
				return n.delete(e), O(t, n);
			});
		}
	}), []), he = N ? /*#__PURE__*/ p.createElement(l.Provider, { value: me }, D) : D;
	return /*#__PURE__*/ p.createElement("div", {
		ref: ie,
		className: a(b, F, x),
		style: ne
	}, he);
};
//#endregion
export { D as t };
