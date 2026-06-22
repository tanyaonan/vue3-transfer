globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Bt as n, Gt as r, Mt as i, Nt as a, On as o, fn as s, ln as c, pn as l } from "../shared/core.js";
import { Jn as u, Sr as d, Wn as f, Zn as p, or as ee, rr as te, sr as m, wr as h, y as g } from "../shared/antd-core.js";
import { u as ne } from "./avatar.js";
import { i as re } from "./col.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/masonry/hooks/useDelay.js
var _ = /* @__PURE__ */ t(o());
function v(e) {
	let t = _.useRef(0), r = () => {
		n.cancel(t.current);
	};
	return _.useEffect(() => r, []), s(() => {
		r(), t.current = n(e);
	});
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/masonry/hooks/usePositions.js
function y(e, t, n) {
	let [r, a] = _.useMemo(() => {
		let r = Array(t).fill(0), a = /* @__PURE__ */ new Map();
		for (let o = 0; o < e.length; o += 1) {
			let [s, c, l] = e[o], u = l ?? r.indexOf(Math.min.apply(Math, i(r)));
			u = Math.min(u, t - 1);
			let d = r[u];
			a.set(s, {
				column: u,
				top: d
			}), r[u] += c + n;
		}
		return [a, Math.max(0, Math.max.apply(Math, i(r)) - n)];
	}, [
		t,
		e,
		n
	]);
	return [r, a];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/masonry/hooks/useRefs.js
function b() {
	let e = _.useRef(null);
	return e.current === null && (e.current = /* @__PURE__ */ new Map()), [(t, n) => {
		e.current.set(t, n);
	}, (t) => e.current.get(t)];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/masonry/MasonryItem.js
var x = /*#__PURE__*/ _.forwardRef((e, t) => {
	let { item: n, style: r, prefixCls: i, itemRender: o, className: s, index: c, column: l, onResize: u } = e, d = `${i}-item`, f = (0, _.useMemo)(() => n.children ?? o?.({
		...n,
		index: c,
		column: l
	}), [
		n,
		o,
		l,
		c
	]), p = /*#__PURE__*/ _.createElement("div", {
		ref: t,
		style: r,
		className: a(d, s)
	}, f);
	return u && (p = /*#__PURE__*/ _.createElement(h, { onResize: u }, p)), p;
}), ie = m("Masonry", (e) => {
	let { componentCls: t } = e, n = `${t}-item`;
	return { [t]: {
		position: "relative",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		"&-rtl": { direction: "rtl" },
		[`& > ${n}`]: {
			boxSizing: "border-box",
			"&-fade": {
				"&-appear": {
					transition: `opacity ${e.motionDurationSlow} ${e.motionEaseOut}`,
					opacity: 0,
					"&-active": { opacity: 1 }
				},
				"&-leave": {
					transition: `opacity ${e.motionDurationFast} ${e.motionEaseOut}`,
					opacity: 1,
					"&-active": { opacity: 0 }
				}
			},
			[`&:not(${n}-fade)`]: { transition: [
				"left",
				"right",
				"top"
			].map((t) => `${t} ${e.motionDurationSlow} ${e.motionEaseOut}`).join(",") }
		}
	} };
}), S = /*#__PURE__*/ _.forwardRef((e, t) => {
	let { rootClassName: n, className: i, style: o, classNames: s, styles: m, columns: S, prefixCls: C, gutter: w = 0, items: T, itemRender: E, onLayoutChange: D, fresh: ae } = e, { getPrefixCls: O, direction: oe, className: se, style: k, classNames: A, styles: j } = d("masonry"), M = O("masonry", C), N = O(), [P, F] = ie(M, f(M)), [I, L] = ee(N, "masonry"), R = _.useRef(null);
	_.useImperativeHandle(t, () => ({ nativeElement: R.current }));
	let [z, B] = b(), [V, H] = _.useState([]);
	_.useEffect(() => {
		H(T || []);
	}, [T]);
	let U = ne(), [W = 0, G = W] = re(w, U), K = _.useMemo(() => {
		if (!S) return 3;
		if (p(S)) return S;
		let e = g.find((e) => U[e] && S[e] !== void 0);
		return e ? S[e] : S.xs ?? 1;
	}, [S, U]), q = {
		...e,
		columns: K
	}, [J, Y] = u([A, s], [j, m], { props: q }), [ce, le] = _.useState([]), X = v(() => {
		let e = V.map((e, t) => {
			let n = e.key ?? t, r = B(n)?.getBoundingClientRect();
			return [
				n,
				r ? r.height : 0,
				e.column
			];
		});
		le((t) => r(t, e) ? t : e);
	}), [Z, ue] = y(ce, K, G), Q = _.useMemo(() => V.map((e, t) => {
		let n = e.key ?? t;
		return {
			item: e,
			itemIndex: t,
			itemKey: n,
			key: n,
			position: Z.get(n)
		};
	}), [V, Z]);
	_.useEffect(() => {
		X();
	}, [V, K]);
	let [$, de] = _.useState([]);
	return c(() => {
		D && Q.every(({ position: e }) => e) && de((e) => {
			let t = Q.map(({ item: e, position: t }) => [e, t.column]);
			return r(e, t) ? e : t;
		});
	}, [Q]), c(() => {
		D && T && T.length === $.length && D($.map(([e, t]) => ({
			...e,
			column: t
		})));
	}, [$]), /*#__PURE__*/ _.createElement(h, { onResize: X }, /*#__PURE__*/ _.createElement("div", {
		ref: R,
		className: a(M, se, J.root, n, i, P, F, { [`${M}-rtl`]: oe === "rtl" }),
		style: {
			height: ue,
			...Y.root,
			...k,
			...o
		},
		onLoad: X,
		onError: X
	}, /*#__PURE__*/ _.createElement(te, {
		keys: Q,
		component: !1,
		motionAppear: !0,
		motionLeave: !0,
		motionName: `${M}-item-fade`
	}, (e, t) => {
		let { item: n, itemKey: r, position: i = {}, itemIndex: o, key: s, className: c, style: u } = e, { column: d = 0 } = i, f = {
			[I("item-width")]: `calc((100% + ${W}px) / ${K})`,
			insetInlineStart: `calc(${L("item-width")} * ${d})`,
			width: `calc(${L("item-width")} - ${W}px)`,
			top: i.top,
			position: "absolute"
		};
		return /*#__PURE__*/ _.createElement(x, {
			prefixCls: M,
			key: s,
			item: n,
			style: {
				...u,
				...Y.item,
				...f
			},
			className: a(J.item, c),
			ref: l(t, (e) => z(r, e)),
			index: o,
			itemRender: E,
			column: d,
			onResize: ae ? X : null
		});
	})));
}), C = /* @__PURE__ */ e({ default: () => w }), w = S;
//#endregion
export { C as t };
