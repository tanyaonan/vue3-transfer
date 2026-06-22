globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, kn as r } from "../shared/core.js";
import { Cr as i, Sr as a, br as o, sr as s, wr as c } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/affix/style/index.js
var l = /* @__PURE__ */ t(r()), u = s("Affix", (e) => {
	let { componentCls: t } = e;
	return { [t]: {
		position: "fixed",
		zIndex: e.zIndexPopup
	} };
}, (e) => ({ zIndexPopup: e.zIndexBase + 10 }));
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/affix/utils.js
function d(e) {
	return e === window ? {
		top: 0,
		bottom: window.innerHeight
	} : e.getBoundingClientRect();
}
function f(e, t, n) {
	if (n !== void 0 && Math.round(t.top) > Math.round(e.top) - n) return n + t.top;
}
function p(e, t, n) {
	if (n !== void 0 && Math.round(t.bottom) < Math.round(e.bottom) + n) return n + (window.innerHeight - t.bottom);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/affix/index.js
var m = /* @__PURE__ */ e({ default: () => y }), h = [
	"resize",
	"scroll",
	"touchstart",
	"touchmove",
	"touchend",
	"pageshow",
	"load"
], g = () => typeof window < "u" ? window : null, _ = 0, v = 1, y = /*#__PURE__*/ l.forwardRef((e, t) => {
	let { style: r, offsetTop: s, offsetBottom: m, prefixCls: y, className: b, rootClassName: x, children: S, target: C, onChange: w, onTestUpdatePosition: ee, ...T } = e, { getPrefixCls: E, className: D, style: O } = a("affix"), { getTargetContainer: k } = l.useContext(o), A = E("affix", y), [j, M] = l.useState(!1), [N, P] = l.useState(), [F, I] = l.useState(), L = l.useRef(_), R = l.useRef(null), z = l.useRef(null), B = l.useRef(null), V = l.useRef(null), H = l.useRef(null), U = C ?? k ?? g, W = m === void 0 && s === void 0 ? 0 : s, G = () => {
		if (L.current !== v || !V.current || !B.current || !U) return;
		let e = U();
		if (e) {
			let t = { status: _ }, n = d(B.current);
			if (n.top === 0 && n.left === 0 && n.width === 0 && n.height === 0) return;
			let r = d(e), i = f(n, r, W), a = p(n, r, m);
			i === void 0 ? a !== void 0 && (t.affixStyle = {
				position: "fixed",
				bottom: a,
				width: n.width,
				height: n.height
			}, t.placeholderStyle = {
				width: n.width,
				height: n.height
			}) : (t.affixStyle = {
				position: "fixed",
				top: i,
				width: n.width,
				height: n.height
			}, t.placeholderStyle = {
				width: n.width,
				height: n.height
			}), t.lastAffix = !!t.affixStyle, j !== t.lastAffix && w?.(t.lastAffix), L.current = t.status, P(t.affixStyle), I(t.placeholderStyle), M(t.lastAffix);
		}
	}, K = () => {
		L.current = v, G();
	}, q = i(() => {
		K();
	}), J = i(() => {
		if (U && N) {
			let e = U();
			if (e && B.current) {
				let t = d(e), n = d(B.current), r = f(n, t, W), i = p(n, t, m);
				if (r !== void 0 && N.top === r || i !== void 0 && N.bottom === i) return;
			}
		}
		K();
	}), Y = () => {
		let e = U?.();
		e && (h.forEach((t) => {
			z.current && R.current?.removeEventListener(t, z.current), e?.addEventListener(t, J);
		}), R.current = e, z.current = J);
	}, X = () => {
		let e = U?.();
		h.forEach((t) => {
			e?.removeEventListener(t, J), z.current && R.current?.removeEventListener(t, z.current);
		}), q.cancel(), J.cancel();
	};
	l.useImperativeHandle(t, () => ({ updatePosition: q })), l.useEffect(() => (H.current = setTimeout(Y), () => {
		H.current &&= (clearTimeout(H.current), null), X();
	}), []), l.useEffect(() => (Y(), () => X()), [
		C,
		N,
		j,
		s,
		m
	]), l.useEffect(() => {
		q();
	}, [
		C,
		s,
		m
	]);
	let [Z, Q] = u(A), $ = n({ [n(x, Z, A, Q)]: N });
	return /*#__PURE__*/ l.createElement(c, { onResize: q }, /*#__PURE__*/ l.createElement("div", {
		style: {
			...O,
			...r
		},
		className: n(b, D),
		ref: B,
		...T
	}, N && /*#__PURE__*/ l.createElement("div", {
		style: F,
		"aria-hidden": "true"
	}), /*#__PURE__*/ l.createElement("div", {
		className: $,
		ref: V,
		style: N
	}, /*#__PURE__*/ l.createElement(c, { onResize: q }, S))));
});
//#endregion
export { m as n, y as t };
