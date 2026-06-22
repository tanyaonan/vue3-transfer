globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { $ as n, Ht as r, Mt as i, Nt as a, On as o, Q as s, Ut as c, X as l, c as u, fn as d, kt as f, nt as p, sn as m, yt as h } from "../shared/core.js";
import { E as g, Jn as _, Qn as v, Rn as y, S as b, Sr as ee, T as te, Xn as x, Yn as S, Zn as C, _n as w, fr as ne, gr as re, kn as T, mr as E, n as D, ot as ie, pr as O, r as ae, sr as k, tr as oe, xt as se, zn as A } from "../shared/antd-core.js";
import { t as ce } from "./checkbox.js";
import { r as j } from "./color-picker.js";
import { t as le } from "./dropdown.js";
import { i as M } from "./list.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/transfer/Actions.js
var N = /* @__PURE__ */ t(o());
function P(e, t) {
	let n = e === "right";
	return t === "rtl" ? n ? /*#__PURE__*/ N.createElement(l, null) : /*#__PURE__*/ N.createElement(p, null) : n ? /*#__PURE__*/ N.createElement(p, null) : /*#__PURE__*/ N.createElement(l, null);
}
var F = ({ type: e, actions: t, moveToLeft: n, moveToRight: r, leftActive: i, rightActive: a, direction: o, disabled: s }) => {
	let c = e === "right", l = c ? t[0] : t[1], u = c ? r : n, d = c ? a : i, f = P(e, o);
	if (/*#__PURE__*/ N.isValidElement(l)) {
		let e = l;
		return /*#__PURE__*/ N.cloneElement(e, {
			disabled: s || !d,
			onClick: (t) => {
				e?.props?.onClick?.(t), u?.(t);
			}
		});
	}
	return /*#__PURE__*/ N.createElement(se, {
		type: "primary",
		size: "small",
		disabled: s || !d,
		onClick: (e) => u?.(e),
		icon: f
	}, l);
}, I = (e) => {
	let { className: t, style: n, oneWay: r, actions: i, ...a } = e;
	return /*#__PURE__*/ N.createElement("div", {
		className: t,
		style: n
	}, /*#__PURE__*/ N.createElement(F, {
		type: "right",
		actions: i,
		...a
	}), !r && /*#__PURE__*/ N.createElement(F, {
		type: "left",
		actions: i,
		...a
	}), i.slice(r ? 1 : 2));
}, ue = (e, t, n) => {
	let r = N.useMemo(() => (e || []).map((e) => t ? {
		...e,
		key: t(e)
	} : e), [e, t]), [i, a] = N.useMemo(() => {
		let e = [], t = Array.from({ length: n?.length ?? 0 }), i = ae(n || []);
		return r.forEach((n) => {
			if (i.has(n.key)) {
				let e = i.get(n.key);
				t[e] = n;
			} else e.push(n);
		}), [e, t];
	}, [r, n]);
	return [
		r,
		i.filter(Boolean),
		a.filter(Boolean)
	];
}, L = [];
function R(e, t) {
	let n = e.filter((e) => t.has(e));
	return e.length === n.length ? e : n;
}
function z(e) {
	return Array.from(e).join(";");
}
function de(e, t, n) {
	let [r, a] = N.useMemo(() => [new Set(e.map((e) => e?.key)), new Set(t.map((e) => e?.key))], [e, t]), [o, s] = m(L, n), c = N.useMemo(() => R(o, r), [o, r]), l = N.useMemo(() => R(o, a), [o, a]);
	return N.useEffect(() => {
		s([].concat(i(R(o, r)), i(R(o, a))));
	}, [z(r), z(a)]), [
		c,
		l,
		d((e) => {
			s([].concat(i(e), i(l)));
		}),
		d((e) => {
			s([].concat(i(c), i(e)));
		})
	];
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/transfer/search.js
var fe = (e) => {
	let { placeholder: t = "", value: n, prefixCls: r, disabled: i, onChange: a, handleClear: o } = e, c = N.useCallback((e) => {
		a?.(e), e.target.value === "" && o?.();
	}, [a]);
	return /*#__PURE__*/ N.createElement(j, {
		placeholder: t,
		className: r,
		value: n,
		onChange: c,
		disabled: i,
		allowClear: !0,
		prefix: /*#__PURE__*/ N.createElement(s, null)
	});
}, pe = /*#__PURE__*/ N.memo((e) => {
	let { prefixCls: t, classNames: n, styles: r, renderedText: i, renderedEl: o, item: s, checked: c, disabled: l, onClick: d, onRemove: f, showRemove: p } = e, m = l || s?.disabled, h = a(`${t}-content-item`, n.item, {
		[`${t}-content-item-disabled`]: m,
		[`${t}-content-item-checked`]: c && !m
	}), g;
	(typeof i == "string" || C(i)) && (g = String(i));
	let [_] = y("Transfer", A.Transfer), v = {
		className: h,
		style: r.item,
		title: g
	}, b = /*#__PURE__*/ N.createElement("span", {
		className: a(`${t}-content-item-text`, n.itemContent),
		style: r.itemContent
	}, o);
	return p ? /*#__PURE__*/ N.createElement("li", { ...v }, b, /*#__PURE__*/ N.createElement("button", {
		type: "button",
		disabled: m,
		className: `${t}-content-item-remove`,
		"aria-label": _?.remove,
		onClick: () => f?.(s)
	}, /*#__PURE__*/ N.createElement(u, null))) : (v.onClick = m ? void 0 : (e) => d(s, e), /*#__PURE__*/ N.createElement("li", { ...v }, /*#__PURE__*/ N.createElement(ce, {
		className: a(`${t}-checkbox`, n.itemIcon),
		style: r.itemIcon,
		checked: c,
		disabled: m
	}), b));
}), me = [
	"handleFilter",
	"handleClear",
	"checkedKeys"
], he = (e) => ({
	simple: !0,
	showSizeChanger: !1,
	showLessItems: !1,
	...e
}), ge = /*#__PURE__*/ N.forwardRef((e, t) => {
	let { prefixCls: n, classNames: r, styles: i, filteredRenderItems: o, selectedKeys: s, disabled: c, showRemove: l, pagination: u, onScroll: d, onItemSelect: f, onItemRemove: p } = e, [h, g] = N.useState(1), _ = N.useMemo(() => u ? he(v(u) ? u : {}) : null, [u]), [y, b] = m(10, _?.pageSize);
	N.useEffect(() => {
		if (_) {
			let e = Math.ceil(o.length / y);
			g(Math.min(h, e));
		}
	}, [
		o,
		_,
		y
	]);
	let ee = (e, t) => {
		f(e.key, !s.includes(e.key), t);
	}, te = (e) => {
		p?.([e.key]);
	}, x = (e) => {
		g(e);
	}, S = (e, t) => {
		g(e), b(t);
	}, C = N.useMemo(() => _ ? o.slice((h - 1) * y, h * y) : o, [
		h,
		o,
		_,
		y
	]);
	N.useImperativeHandle(t, () => ({ items: C }));
	let w = _ ? /*#__PURE__*/ N.createElement(M, {
		size: "small",
		disabled: c,
		simple: _.simple,
		pageSize: y,
		showLessItems: _.showLessItems,
		showSizeChanger: _.showSizeChanger,
		className: `${n}-pagination`,
		total: o.length,
		current: h,
		onChange: x,
		onShowSizeChange: S
	}) : null;
	return /*#__PURE__*/ N.createElement(N.Fragment, null, /*#__PURE__*/ N.createElement("ul", {
		className: a(`${n}-content`, r.list, { [`${n}-content-show-remove`]: l }),
		style: i.list,
		onScroll: d
	}, (C || []).map(({ renderedEl: e, renderedText: t, item: a }) => /*#__PURE__*/ N.createElement(pe, {
		key: a.key,
		prefixCls: n,
		classNames: r,
		styles: i,
		item: a,
		renderedText: t,
		renderedEl: e,
		showRemove: l,
		onClick: ee,
		onRemove: te,
		checked: s.includes(a.key),
		disabled: c
	}))), w);
}), _e = () => null;
function ve(e) {
	return x(e) && v(e) && !/*#__PURE__*/ N.isValidElement(e);
}
function B(e) {
	return e.reduce((e, t) => (t.disabled || e.push(t.key), e), []);
}
function ye(e, t) {
	for (let n of [
		e,
		t.title,
		t.key
	]) {
		if (oe(n)) return n;
		if (C(n)) return String(n);
	}
	return "";
}
var be = (e) => e !== void 0, xe = (e) => v(e) ? {
	...e,
	defaultValue: e.defaultValue || ""
} : {
	defaultValue: "",
	placeholder: ""
}, V = (e) => {
	let { prefixCls: t, style: r, classNames: o, styles: s, dataSource: l = [], titleText: u = "", checkedKeys: d, disabled: f, showSearch: p = !1, searchPlaceholder: m, notFoundContent: h, selectAll: g, deselectAll: _, selectCurrent: v, selectInvert: y, removeAll: b, removeCurrent: ee, showSelectAll: te = !0, showRemove: x, pagination: C, direction: w, itemsUnit: ne, itemUnit: re, selectAllLabel: T, selectionsIcon: E, footer: D, renderList: ie, onItemSelectAll: O, onItemRemove: k, handleFilter: oe, handleClear: se, filterOption: A, render: j = _e } = e, M = `${t}-section`, P = `${t}-list`, F = xe(p), [I, ue] = (0, N.useState)(F.defaultValue), L = (0, N.useRef)({}), R = (e) => {
		ue(e.target.value), oe(e);
	}, z = () => {
		ue(""), se();
	}, de = (e, t) => S(A) ? A(I, t, w) : e.includes(I), pe = (e) => {
		let t = ie ? ie({
			...e,
			onItemSelect: (t, n) => e.onItemSelect(t, n)
		}) : null, n = !!t;
		return n || (t = /*#__PURE__*/ N.createElement(ge, {
			ref: L,
			...e,
			prefixCls: P
		})), {
			customize: n,
			bodyContent: t
		};
	}, he = (e) => {
		let t = j(e), n = ve(t);
		return {
			item: e,
			renderedEl: n ? t.label : t,
			renderedText: n ? t.value : ye(t, e)
		};
	}, V = (0, N.useMemo)(() => Array.isArray(h) ? h[w === "left" ? 0 : 1] : h, [h, w]), [H, Se] = (0, N.useMemo)(() => {
		let e = [], t = [];
		return l.forEach((n) => {
			let r = he(n);
			I && !de(r.renderedText, n) || (e.push(n), t.push(r));
		}), [e, t];
	}, [
		l,
		I,
		A,
		w
	]), U = (0, N.useMemo)(() => H.filter((e) => d.includes(e.key) && !e.disabled), [d, H]), W = (0, N.useMemo)(() => {
		if (U.length === 0) return "none";
		let e = ae(d);
		return H.every((t) => e.has(t.key) || !!t.disabled) ? "all" : "part";
	}, [
		U.length,
		d,
		H
	]), Ce = () => {
		let t = p ? /*#__PURE__*/ N.createElement("div", { className: `${P}-body-search-wrapper` }, /*#__PURE__*/ N.createElement(fe, {
			prefixCls: `${P}-search`,
			onChange: R,
			handleClear: z,
			placeholder: F.placeholder || m,
			value: I,
			disabled: f
		})) : null, { customize: n, bodyContent: r } = pe({
			...c(e, me),
			filteredItems: H,
			filteredRenderItems: Se,
			selectedKeys: d,
			classNames: o,
			styles: s
		}), i;
		return i = n ? /*#__PURE__*/ N.createElement("div", { className: `${P}-body-customize-wrapper` }, r) : H.length ? r : /*#__PURE__*/ N.createElement("div", { className: `${P}-body-not-found` }, V), /*#__PURE__*/ N.createElement("div", {
			className: a(`${P}-body`, { [`${P}-body-with-search`]: p }, o.body),
			style: s.body
		}, t, i);
	}, we = /*#__PURE__*/ N.createElement(ce, {
		disabled: !l.some((e) => !e.disabled) || f,
		checked: W === "all",
		indeterminate: W === "part",
		className: `${P}-checkbox`,
		onChange: () => {
			O?.(B(H), W !== "all");
		}
	}), Te = (e, t) => {
		if (T) return S(T) ? T({
			selectedCount: e,
			totalCount: t
		}) : T;
		let n = t > 1 ? ne : re;
		return /*#__PURE__*/ N.createElement(N.Fragment, null, (e > 0 ? `${e}/` : "") + t, " ", n);
	}, G = D && (D.length < 2 ? D(e) : D(e, { direction: w })), K = G ? /*#__PURE__*/ N.createElement("div", {
		className: a(`${P}-footer`, o.footer),
		style: s.footer
	}, G) : null, q = !x && !C && we, J;
	J = x ? [C ? {
		key: "removeCurrent",
		label: ee,
		onClick() {
			let e = B((L.current?.items || []).map((e) => e.item));
			k?.(e);
		}
	} : null, {
		key: "removeAll",
		label: b,
		onClick() {
			k?.(B(H));
		}
	}].filter(Boolean) : [
		{
			key: "selectAll",
			label: W === "all" ? _ : g,
			onClick() {
				let e = B(H);
				O?.(e, e.length !== d.length);
			}
		},
		C ? {
			key: "selectCurrent",
			label: v,
			onClick() {
				let e = L.current?.items || [];
				O?.(B(e.map((e) => e.item)), !0);
			}
		} : null,
		{
			key: "selectInvert",
			label: y,
			onClick() {
				let e = B((L.current?.items || []).map((e) => e.item)), t = new Set(d), n = new Set(t);
				e.forEach((e) => {
					t.has(e) ? n.delete(e) : n.add(e);
				}), O?.(i(n), "replace");
			}
		}
	];
	let Y = /*#__PURE__*/ N.createElement(le, {
		className: `${P}-header-dropdown`,
		menu: { items: J },
		disabled: f
	}, be(E) ? E : /*#__PURE__*/ N.createElement(n, null));
	return /*#__PURE__*/ N.createElement("div", {
		className: a(M, o.section, {
			[`${M}-with-pagination`]: !!C,
			[`${M}-with-footer`]: !!G
		}),
		style: {
			...r,
			...s.section
		}
	}, /*#__PURE__*/ N.createElement("div", {
		className: a(`${P}-header`, o.header),
		style: s.header
	}, te ? /*#__PURE__*/ N.createElement(N.Fragment, null, q, Y) : null, /*#__PURE__*/ N.createElement("span", { className: `${P}-header-selected` }, Te(U.length, H.length)), /*#__PURE__*/ N.createElement("span", {
		className: a(`${P}-header-title`, o.title),
		style: s.title
	}, u)), Ce(), K);
}, H = (e) => {
	let { antCls: t, componentCls: n, listHeight: r, controlHeightLG: i } = e, a = `${t}-table`, o = `${t}-input`;
	return { [`${n}-customize-list`]: {
		[`${n}-section`]: {
			flex: "1 1 50%",
			width: "auto",
			height: "auto",
			minHeight: r,
			minWidth: 0
		},
		[`${a}-wrapper`]: {
			[`${a}-small`]: {
				border: 0,
				borderRadius: 0,
				[`${a}-selection-column`]: {
					width: i,
					minWidth: i
				}
			},
			[`${a}-pagination${a}-pagination`]: {
				margin: 0,
				padding: e.paddingXS
			}
		},
		[`${o}[disabled]`]: { backgroundColor: "transparent" }
	} };
}, Se = (e, t) => {
	let { componentCls: n, colorBorder: r } = e;
	return { [`${n}-section`]: {
		borderColor: t,
		[`${n}-list-search:not([disabled])`]: { borderColor: r }
	} };
}, U = (e) => {
	let { componentCls: t } = e;
	return {
		[`${t}-status-error`]: { ...Se(e, e.colorError) },
		[`${t}-status-warning`]: { ...Se(e, e.colorWarning) }
	};
}, W = (e) => {
	let { componentCls: t, colorBorder: n, colorSplit: r, lineWidth: i, itemHeight: a, headerHeight: o, transferHeaderVerticalPadding: s, itemPaddingBlock: c, controlItemBgActive: l, colorTextDisabled: u, colorTextSecondary: d, listHeight: p, listWidth: m, listWidthLG: h, fontSizeIcon: g, marginXS: _, paddingSM: v, lineType: y, antCls: b, iconCls: ee, motionDurationSlow: te, controlItemBgHover: x, borderRadiusLG: S, colorBgContainer: C, colorText: w, controlItemBgActiveHover: T } = e, D = f(e.calc(S).sub(i).equal());
	return {
		display: "flex",
		flexDirection: "column",
		width: m,
		height: p,
		border: `${f(i)} ${y} ${n}`,
		borderRadius: e.borderRadiusLG,
		"&-with-pagination": {
			width: h,
			height: "auto"
		},
		[`${t}-list`]: {
			"&-search": { [`${ee}-search`]: { color: u } },
			"&-header": {
				display: "flex",
				flex: "none",
				alignItems: "center",
				height: o,
				padding: `${f(e.calc(s).sub(i).equal())} ${f(v)} ${f(s)}`,
				color: w,
				background: C,
				borderBottom: `${f(i)} ${y} ${r}`,
				borderRadius: `${f(S)} ${f(S)} 0 0`,
				"> *:not(:last-child)": { marginInlineEnd: 4 },
				"> *": { flex: "none" },
				"&-title": {
					...re,
					flex: "0 1 auto",
					textAlign: "end",
					marginInlineStart: "auto"
				},
				"&-dropdown": {
					...E(),
					fontSize: g,
					transform: "translateY(10%)",
					cursor: "pointer",
					"&[disabled]": { cursor: "not-allowed" }
				}
			},
			"&-body": {
				display: "flex",
				flex: "auto",
				flexDirection: "column",
				fontSize: e.fontSize,
				minHeight: 0,
				"&-search-wrapper": {
					position: "relative",
					flex: "none",
					padding: v
				}
			},
			"&-content": {
				flex: "auto",
				margin: 0,
				padding: 0,
				overflow: "auto",
				listStyle: "none",
				borderRadius: `0 0 ${D} ${D}`,
				"&-item": {
					display: "flex",
					alignItems: "center",
					minHeight: a,
					padding: `${f(c)} ${f(v)}`,
					transition: `all ${te}`,
					"> *:not(:last-child)": { marginInlineEnd: _ },
					"> *": { flex: "none" },
					"&-text": {
						...re,
						flex: "auto"
					},
					"&-remove": {
						...ne(e),
						color: n,
						"&:hover, &:focus": { color: d },
						"&:disabled": {
							color: u,
							cursor: "not-allowed"
						}
					},
					[`&:not(${t}-list-content-item-disabled)`]: {
						"&:hover": {
							backgroundColor: x,
							cursor: "pointer"
						},
						[`&${t}-list-content-item-checked:hover`]: { backgroundColor: T }
					},
					"&-checked": { backgroundColor: l },
					"&-disabled": {
						color: u,
						cursor: "not-allowed"
					}
				},
				[`&-show-remove ${t}-list-content-item:not(${t}-list-content-item-disabled):hover`]: {
					background: "transparent",
					cursor: "default"
				}
			},
			"&-pagination": {
				padding: e.paddingXS,
				textAlign: "end",
				borderTop: `${f(i)} ${y} ${r}`,
				[`${b}-pagination-options`]: { paddingInlineEnd: e.paddingXS }
			},
			"&-body-not-found": {
				flex: "none",
				width: "100%",
				margin: "auto 0",
				color: u,
				textAlign: "center"
			},
			"&-footer": { borderTop: `${f(i)} ${y} ${r}` },
			"&-checkbox": { lineHeight: 1 }
		}
	};
}, Ce = (e) => {
	let { antCls: t, iconCls: n, componentCls: r, marginXS: i, marginXXS: a, fontSizeIcon: o, colorBgContainerDisabled: s } = e;
	return { [r]: {
		...O(e),
		position: "relative",
		display: "flex",
		alignItems: "stretch",
		[`${r}-disabled`]: { [`${r}-section`]: { background: s } },
		[`${r}-section`]: W(e),
		[`${r}-actions`]: {
			display: "flex",
			flex: "none",
			flexDirection: "column",
			alignSelf: "center",
			margin: `0 ${f(i)}`,
			verticalAlign: "middle",
			gap: a,
			[`${t}-btn ${n}`]: { fontSize: o }
		}
	} };
}, we = (e) => {
	let { componentCls: t } = e;
	return { [`${t}-rtl`]: { direction: "rtl" } };
}, Te = k("Transfer", (e) => {
	let t = h(e);
	return [
		Ce(t),
		H(t),
		U(t),
		we(t)
	];
}, (e) => {
	let { fontSize: t, lineHeight: n, controlHeight: r, controlHeightLG: i, lineWidth: a } = e, o = Math.round(t * n);
	return {
		listWidth: 180,
		listHeight: 200,
		listWidthLG: 250,
		headerHeight: i,
		itemHeight: r,
		itemPaddingBlock: (r - o) / 2,
		transferHeaderVerticalPadding: Math.ceil((i - a - o) / 2)
	};
}), G = /* @__PURE__ */ e({ default: () => K }), K = (e) => {
	let { prefixCls: t, className: n, rootClassName: o, classNames: s, styles: c, style: l, listStyle: u, operationStyle: d, operations: f, actions: p, dataSource: m, targetKeys: h = [], selectedKeys: v, selectAllLabels: x = [], locale: C = {}, titles: ne, disabled: re, showSearch: E = !1, showSelectAll: O, oneWay: k, pagination: oe, status: se, selectionsIcon: ce, filterOption: j, render: le, footer: M, children: P, rowKey: F, onScroll: L, onChange: R, onSearch: z, onSelectChange: fe, ...pe } = e, { getPrefixCls: me, renderEmpty: he, direction: ge, className: _e, style: ve, classNames: B, styles: ye, selectionsIcon: be } = ee("transfer"), xe = (0, N.useContext)(T), H = re ?? xe, Se = {
		...e,
		disabled: H
	}, U = me("transfer", t), [W, Ce] = Te(U), we = p || f || [], G = ge === "rtl", [K, q, J] = ue(m, F, h), [Y, X, Ee, De] = de(q, J, v), [Oe, ke] = w((e) => e.key), [Ae, je] = w((e) => e.key), Me = (0, N.useCallback)((e, t) => {
		e === "left" ? Ee(S(t) ? t(Y || []) : t) : De(S(t) ? t(X || []) : t);
	}, [Y, X]), Z = (e, t) => {
		(e === "left" ? ke : je)(t);
	}, Ne = (0, N.useCallback)((e, t) => {
		e === "left" ? fe?.(t, X) : fe?.(Y, t);
	}, [Y, X]), Pe = (e) => ne ?? e.titles ?? [], Fe = (e) => {
		L?.("left", e);
	}, Ie = (e) => {
		L?.("right", e);
	}, Le = (e) => {
		let t = e === "right" ? Y : X, n = D(K), r = t.filter((e) => !n.has(e)), i = ae(r), a = e === "right" ? r.concat(h) : h.filter((e) => !i.has(e)), o = e === "right" ? "left" : "right";
		Me(o, []), Ne(o, []), R?.(a, e, r);
	}, Re = () => {
		Le("left"), Z("left", null);
	}, ze = () => {
		Le("right"), Z("right", null);
	}, Be = (e, t, n) => {
		Me(e, (r) => {
			let a = [];
			if (n === "replace") a = t;
			else if (n) a = Array.from(new Set([].concat(i(r), i(t))));
			else {
				let e = ae(t);
				a = r.filter((t) => !e.has(t));
			}
			return Ne(e, a), a;
		}), Z(e, null);
	}, Ve = (e, t) => Be("left", e, t), He = (e, t) => Be("right", e, t), Ue = (e) => z?.("left", e.target.value), We = (e) => z?.("right", e.target.value), Ge = () => z?.("left", ""), Ke = () => z?.("right", ""), qe = (e, t, n, r, i) => {
		t.has(n) && (t.delete(n), Z(e, null)), r && (t.add(n), Z(e, i));
	}, Je = (e, t, n, r) => {
		(e === "left" ? Oe : Ae)(r, t, n);
	}, Ye = (t, n, r, i) => {
		let a = t === "left", o = a ? Y : X, s = new Set(o), c = (a ? q : J).filter((e) => !e.disabled), l = c.findIndex((e) => e.key === n);
		i && o.length > 0 ? Je(t, c, s, l) : qe(t, s, n, r, l);
		let u = Array.from(s);
		Ne(t, u), e.selectedKeys || Me(t, u);
	}, Xe = (e, t, n) => {
		Ye("left", e, t, n?.shiftKey);
	}, Ze = (e, t, n) => {
		Ye("right", e, t, n?.shiftKey);
	}, Qe = (e) => {
		Me("right", []), R?.(h.filter((t) => !e.includes(t)), "left", i(e));
	}, $e = (e) => S(u) ? u({ direction: e }) : u || {}, { hasFeedback: et, status: tt } = (0, N.useContext)(ie), nt = (e) => ({
		...e,
		notFoundContent: he?.("Transfer") || /*#__PURE__*/ N.createElement(b, { componentName: "Transfer" }),
		...C
	}), rt = te(tt, se), it = !P && oe, at = J.filter((e) => X.includes(e.key) && !e.disabled).length > 0, ot = q.filter((e) => Y.includes(e.key) && !e.disabled).length > 0, [Q, $] = _([B, s], [ye, c], { props: Se }, {
		source: {},
		target: {}
	}), st = a(U, {
		[`${U}-disabled`]: H,
		[`${U}-customize-list`]: !!P,
		[`${U}-rtl`]: G
	}, g(U, rt, et), _e, n, o, W, Ce, Q.root), [ct] = y("Transfer", A.Transfer), lt = nt(ct), [ut, dt] = Pe(lt), ft = ce ?? be, pt = [
		"section",
		"header",
		"title",
		"body",
		"list",
		"item",
		"itemIcon",
		"itemContent",
		"footer"
	], mt = (e) => {
		let t = { ...Q }, n = Q[e];
		return pt.forEach((e) => {
			t[e] = a(Q[e], n?.[e]);
		}), t;
	}, ht = (e) => {
		let t = { ...$ }, n = $[e];
		return pt.forEach((e) => {
			t[e] = {
				...$[e],
				...n?.[e]
			};
		}), t;
	}, gt = mt("source"), _t = mt("target"), vt = ht("source"), yt = ht("target"), bt = r(pe, {
		aria: !0,
		data: !0
	});
	return /*#__PURE__*/ N.createElement("div", {
		...bt,
		className: st,
		style: {
			...ve,
			...$.root,
			...l
		}
	}, /*#__PURE__*/ N.createElement(V, {
		prefixCls: U,
		style: $e("left"),
		classNames: gt,
		styles: vt,
		titleText: ut,
		dataSource: q,
		filterOption: j,
		checkedKeys: Y,
		handleFilter: Ue,
		handleClear: Ge,
		onItemSelect: Xe,
		onItemSelectAll: Ve,
		render: le,
		showSearch: E,
		renderList: P,
		footer: M,
		onScroll: Fe,
		disabled: H,
		direction: G ? "right" : "left",
		showSelectAll: O,
		selectAllLabel: x[0],
		pagination: it,
		selectionsIcon: ft,
		...lt
	}), /*#__PURE__*/ N.createElement(I, {
		className: a(`${U}-actions`, Q.actions),
		rightActive: ot,
		moveToRight: ze,
		leftActive: at,
		actions: we,
		moveToLeft: Re,
		style: {
			...d,
			...$.actions
		},
		disabled: H,
		direction: ge,
		oneWay: k
	}), /*#__PURE__*/ N.createElement(V, {
		prefixCls: U,
		style: $e("right"),
		classNames: _t,
		styles: yt,
		titleText: dt,
		dataSource: J,
		filterOption: j,
		checkedKeys: X,
		handleFilter: We,
		handleClear: Ke,
		onItemSelect: Ze,
		onItemSelectAll: He,
		onItemRemove: Qe,
		render: le,
		showSearch: E,
		renderList: P,
		footer: M,
		onScroll: Ie,
		disabled: H,
		direction: G ? "left" : "right",
		showSelectAll: O,
		selectAllLabel: x[1],
		showRemove: k,
		pagination: it,
		selectionsIcon: ft,
		...lt
	}));
};
K.List = V, K.Search = fe, K.Operation = I;
//#endregion
export { G as t };
