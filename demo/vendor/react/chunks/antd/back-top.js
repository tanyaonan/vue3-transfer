globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, Ut as r, Z as i, kn as a, kt as o, yt as s } from "../shared/core.js";
import { Cr as c, Gn as l, Kn as u, Mn as d, Wn as f, br as p, nr as m, pr as h, sr as g } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/back-top/style/index.js
var _ = /* @__PURE__ */ t(a()), v = (e) => {
	let { componentCls: t, backTopFontSize: n, backTopSize: r, zIndexPopup: i } = e;
	return { [t]: {
		...h(e),
		position: "fixed",
		insetInlineEnd: e.backTopInlineEnd,
		insetBlockEnd: e.backTopBlockEnd,
		zIndex: i,
		width: 40,
		height: 40,
		cursor: "pointer",
		"&:empty": { display: "none" },
		[`${t}-content`]: {
			width: r,
			height: r,
			overflow: "hidden",
			color: e.backTopColor,
			textAlign: "center",
			backgroundColor: e.backTopBackground,
			borderRadius: r,
			transition: `all ${e.motionDurationMid}`,
			"&:hover": {
				backgroundColor: e.backTopHoverBackground,
				transition: `all ${e.motionDurationMid}`
			}
		},
		[`${t}-icon`]: {
			fontSize: n,
			lineHeight: o(r)
		}
	} };
}, y = (e) => {
	let { componentCls: t, screenMD: n, screenXS: r, backTopInlineEndMD: i, backTopInlineEndXS: a } = e;
	return {
		[`@media (max-width: ${o(n)})`]: { [t]: { insetInlineEnd: i } },
		[`@media (max-width: ${o(r)})`]: { [t]: { insetInlineEnd: a } }
	};
}, b = g("BackTop", (e) => {
	let { fontSizeHeading3: t, colorTextDescription: n, colorTextLightSolid: r, colorText: i, controlHeightLG: a, calc: o } = e, c = s(e, {
		backTopBackground: n,
		backTopColor: r,
		backTopHoverBackground: i,
		backTopFontSize: t,
		backTopSize: a,
		backTopBlockEnd: o(a).mul(1.25).equal(),
		backTopInlineEnd: o(a).mul(2.5).equal(),
		backTopInlineEndMD: o(a).mul(1.5).equal(),
		backTopInlineEndXS: o(a).mul(.5).equal()
	});
	return [v(c), y(c)];
}, (e) => ({ zIndexPopup: e.zIndexBase + 10 })), x = /* @__PURE__ */ e({ default: () => S }), S = (e) => {
	let { prefixCls: t, className: a, rootClassName: o, visibilityHeight: s = 400, target: h, onClick: g, duration: v = 450, children: y } = e, [x, S] = _.useState(s === 0), C = _.useRef(null), w = () => C.current?.ownerDocument || window, T = c((e) => {
		S(u(e.target) >= s);
	});
	_.useEffect(() => {
		let e = (h || w)();
		return T({ target: e }), e?.addEventListener("scroll", T), () => {
			T.cancel(), e?.removeEventListener("scroll", T);
		};
	}, [h]);
	let E = (e) => {
		l(0, {
			getContainer: h || w,
			duration: v
		}), g?.(e);
	}, { getPrefixCls: D, direction: O } = _.useContext(p), k = D("back-top", t), A = D(), [j, M] = b(k, f(k)), N = n(j, M, k, { [`${k}-rtl`]: O === "rtl" }, a, o), P = r(e, [
		"prefixCls",
		"className",
		"rootClassName",
		"children",
		"visibilityHeight",
		"target"
	]), F = /*#__PURE__*/ _.createElement("div", { className: `${k}-content` }, /*#__PURE__*/ _.createElement("div", { className: `${k}-icon` }, /*#__PURE__*/ _.createElement(i, null)));
	return /*#__PURE__*/ _.createElement("div", {
		...P,
		className: N,
		onClick: E,
		ref: C
	}, /*#__PURE__*/ _.createElement(m, {
		visible: x,
		motionName: `${A}-fade`
	}, ({ className: e }) => d(y || F, ({ className: t }) => ({ className: n(e, t) }))));
};
//#endregion
export { x as t };
