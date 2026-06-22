globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Ht as n, Nt as r, On as i, fn as a, yt as o } from "../shared/core.js";
import { Jn as s, Mn as c, Sr as l, Yn as u, Zn as d, pr as f, sr as p, tt as m } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/statistic/Number.js
var h = /* @__PURE__ */ t(i()), g = (e) => {
	let { value: t, formatter: n, precision: r, decimalSeparator: i, groupSeparator: a = "", prefixCls: o, className: s, style: c } = e, l;
	if (u(n)) l = n(t);
	else {
		let e = String(t), n = e.match(/^(-?)(\d*)(\.(\d+))?$/);
		if (!n || e === "-") l = e;
		else {
			let e = n[1], t = n[2] || "0", s = n[4] || "";
			t = t.replace(/\B(?=(\d{3})+(?!\d))/g, a), d(r) && (s = s.padEnd(r, "0").slice(0, r > 0 ? r : 0)), s &&= `${i}${s}`, l = [/*#__PURE__*/ h.createElement("span", {
				key: "int",
				className: `${o}-content-value-int`
			}, e, t), s && /*#__PURE__*/ h.createElement("span", {
				key: "decimal",
				className: `${o}-content-value-decimal`
			}, s)];
		}
	}
	return /*#__PURE__*/ h.createElement("span", {
		className: s,
		style: c
	}, l);
}, _ = (e) => {
	let { componentCls: t, marginXXS: n, padding: r, colorTextDescription: i, titleFontSize: a, colorTextHeading: o, contentFontSize: s, fontFamily: c } = e;
	return { [t]: {
		...f(e),
		[`${t}-header`]: {
			paddingBottom: n,
			[`${t}-title`]: {
				color: i,
				fontSize: a
			}
		},
		[`${t}-skeleton`]: { paddingTop: r },
		[`${t}-content`]: {
			color: o,
			fontSize: s,
			fontFamily: c,
			[`${t}-content-value`]: {
				display: "inline-block",
				direction: "ltr"
			},
			[`${t}-content-prefix, ${t}-content-suffix`]: { display: "inline-block" },
			[`${t}-content-prefix`]: { marginInlineEnd: n },
			[`${t}-content-suffix`]: { marginInlineStart: n }
		}
	} };
}, v = p("Statistic", (e) => _(o(e, {})), (e) => {
	let { fontSizeHeading3: t, fontSize: n } = e;
	return {
		titleFontSize: n,
		contentFontSize: t
	};
}), y = /*#__PURE__*/ h.forwardRef((e, t) => {
	let { prefixCls: i, className: a, rootClassName: o, style: c, valueStyle: d, value: f = 0, title: p, valueRender: _, prefix: y, suffix: b, loading: x = !1, formatter: S, precision: C, decimalSeparator: w = ".", groupSeparator: T = ",", onMouseEnter: E, onMouseLeave: D, styles: O, classNames: k, ...A } = e, { getPrefixCls: j, direction: M, className: N, style: P, classNames: F, styles: I } = l("statistic"), L = j("statistic", i), [R, z] = v(L), B = {
		...e,
		decimalSeparator: w,
		groupSeparator: T,
		loading: x,
		value: f
	}, [V, H] = s([F, k], [I, O], { props: B }), U = r(L, { [`${L}-rtl`]: M === "rtl" }, N, a, o, V.root, R, z), W = r(`${L}-header`, V.header), G = r(`${L}-title`, V.title), K = r(`${L}-content`, V.content), q = r(`${L}-content-value`, V.value), J = r(`${L}-content-prefix`, V.prefix), Y = r(`${L}-content-suffix`, V.suffix), X = /*#__PURE__*/ h.createElement(g, {
		decimalSeparator: w,
		groupSeparator: T,
		prefixCls: L,
		formatter: S,
		precision: C,
		value: f,
		className: q,
		style: H.value
	}), Z = h.useRef(null);
	h.useImperativeHandle(t, () => ({ nativeElement: Z.current }));
	let Q = n(A, {
		aria: !0,
		data: !0
	});
	return /*#__PURE__*/ h.createElement("div", {
		...Q,
		className: U,
		style: {
			...H.root,
			...P,
			...c
		},
		ref: Z,
		onMouseEnter: E,
		onMouseLeave: D
	}, p && /*#__PURE__*/ h.createElement("div", {
		className: W,
		style: H.header
	}, /*#__PURE__*/ h.createElement("div", {
		className: G,
		style: H.title
	}, p)), /*#__PURE__*/ h.createElement(m, {
		paragraph: !1,
		loading: x,
		className: `${L}-skeleton`,
		active: !0
	}, /*#__PURE__*/ h.createElement("div", {
		className: K,
		style: {
			...d,
			...H.content
		}
	}, y && /*#__PURE__*/ h.createElement("span", {
		className: J,
		style: H.prefix
	}, y), u(_) ? _(X) : X, b && /*#__PURE__*/ h.createElement("span", {
		className: Y,
		style: H.suffix
	}, b))));
}), b = [
	["Y", 1e3 * 60 * 60 * 24 * 365],
	["M", 1e3 * 60 * 60 * 24 * 30],
	["D", 1e3 * 60 * 60 * 24],
	["H", 1e3 * 60 * 60],
	["m", 1e3 * 60],
	["s", 1e3],
	["S", 1]
];
function x(e, t) {
	let n = e, r = /\[[^\]]*]/g, i = (t.match(r) || []).map((e) => e.slice(1, -1)), a = t.replace(r, "[]"), o = b.reduce((e, [t, r]) => {
		if (e.includes(t)) {
			let i = Math.floor(n / r);
			return n -= i * r, e.replace(RegExp(`${t}+`, "g"), (e) => {
				let t = e.length;
				return i.toString().padStart(t, "0");
			});
		}
		return e;
	}, a), s = 0;
	return o.replace(r, () => {
		let e = i[s];
		return s += 1, e;
	});
}
function S(e, t, n) {
	let { format: r = "" } = t, i = new Date(e).getTime(), a = Date.now();
	return x(Math.max(n ? i - a : a - i, 0), r);
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/statistic/Timer.js
var C = 1e3 / 60;
function w(e) {
	return new Date(e).getTime();
}
var T = (e) => {
	let { value: t, format: n = "HH:mm:ss", onChange: r, onFinish: i, type: o, ...s } = e, l = o === "countdown", [u, d] = h.useState(null), f = a(() => {
		let e = Date.now(), n = w(t);
		d({});
		let a = l ? n - e : e - n;
		return r?.(a), l && n < e ? (i?.(), !1) : !0;
	});
	h.useEffect(() => {
		let e, t = () => {
			f() || window.clearInterval(e);
		}, n = () => {
			e = window.setInterval(t, C);
		}, r = () => {
			window.clearInterval(e);
		};
		return n(), () => {
			r();
		};
	}, [t, l]), h.useEffect(() => {
		d({});
	}, []);
	let p = (e, t) => u ? S(e, {
		...t,
		format: n
	}, l) : "-", m = (e) => c(e, { title: void 0 });
	return /*#__PURE__*/ h.createElement(y, {
		...s,
		value: t,
		valueRender: m,
		formatter: p
	});
}, E = /*#__PURE__*/ h.memo((e) => /*#__PURE__*/ h.createElement(T, {
	...e,
	type: "countdown"
})), D = /* @__PURE__ */ e({ default: () => O });
y.Timer = T, y.Countdown = E;
var O = y;
//#endregion
export { D as t };
