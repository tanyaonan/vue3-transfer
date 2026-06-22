globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Mt as n, Nt as r, Ut as i, fn as a, kn as o, sn as s, vn as c } from "../shared/core.js";
import { Jn as l, Sr as u, Wn as d, Zn as f, br as p, er as m, kn as h, nn as g, ot as _, tn as v } from "../shared/antd-core.js";
import { b as y, y as b } from "./calendar.js";
import { r as x } from "./cascader.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/checkbox/GroupContext.js
var S = /* @__PURE__ */ t(o()), C = /*#__PURE__*/ S.createContext(null), w = /*#__PURE__*/ S.forwardRef((e, t) => {
	let { prefixCls: n, children: i, indeterminate: o = !1, onMouseEnter: f, onMouseLeave: p, skipGroup: w = !1, disabled: T, rootClassName: E, className: D, style: O, classNames: k, styles: A, name: j, value: M, checked: N, defaultChecked: P, onChange: F, ...I } = e, { getPrefixCls: L, direction: R, className: z, style: B, classNames: ee, styles: te } = u("checkbox"), V = S.useContext(C), { isFormItemInput: H } = S.useContext(_), U = S.useContext(h), W = (V?.disabled || T) ?? U, [ne, re] = s(P, N), G = ne, ie = a((e) => {
		re(e.target.checked), F?.(e), !w && V?.toggleOption && V.toggleOption({
			label: i,
			value: M
		});
	});
	V && !w && (G = V.value.includes(M));
	let K = S.useRef(null), q = c(t, K);
	S.useEffect(() => {
		if (!(w || !V)) return V.registerValue(M), () => {
			V.cancelValue(M);
		};
	}, [M, w]), S.useEffect(() => {
		K.current?.input && (K.current.input.indeterminate = o);
	}, [o]);
	let J = L("checkbox", n), Y = d(J), [X, ae] = x(J, Y), Z = { ...I }, oe = {
		...e,
		indeterminate: o,
		disabled: W,
		checked: G
	}, [Q, $] = l([ee, k], [te, A], { props: oe }), se = r(`${J}-wrapper`, {
		[`${J}-rtl`]: R === "rtl",
		[`${J}-wrapper-checked`]: G,
		[`${J}-wrapper-disabled`]: W,
		[`${J}-wrapper-in-form-item`]: H
	}, z, D, Q.root, E, ae, Y, X), ce = r(Q.icon, { [`${J}-indeterminate`]: o }, g, X), [le, ue] = b(Z.onClick);
	return /*#__PURE__*/ S.createElement(v, {
		component: "Checkbox",
		disabled: W
	}, /*#__PURE__*/ S.createElement("label", {
		className: se,
		style: {
			...$.root,
			...B,
			...O
		},
		onMouseEnter: f,
		onMouseLeave: p,
		onClick: le
	}, /*#__PURE__*/ S.createElement(y, {
		...Z,
		name: !w && V ? V.name : j,
		checked: G,
		onClick: ue,
		onChange: ie,
		prefixCls: J,
		className: ce,
		style: $.icon,
		disabled: W,
		ref: q,
		value: M
	}), m(i) && /*#__PURE__*/ S.createElement("span", {
		className: r(`${J}-label`, Q.label),
		style: $.label
	}, i)));
}), T = /*#__PURE__*/ S.forwardRef((e, t) => {
	let { defaultValue: a, children: o, options: s = [], prefixCls: c, className: l, rootClassName: u, style: m, onChange: h, role: g = "group", ..._ } = e, { getPrefixCls: v, direction: y } = S.useContext(p), [b, T] = S.useState(_.value || a || []), [E, D] = S.useState([]);
	S.useEffect(() => {
		"value" in _ && T(_.value || []);
	}, [_.value]);
	let O = S.useMemo(() => s.map((e) => typeof e == "string" || f(e) ? {
		label: e,
		value: e
	} : e), [s]), k = (e) => {
		D((t) => t.filter((t) => t !== e));
	}, A = (e) => {
		D((t) => [].concat(n(t), [e]));
	}, j = (e) => {
		let t = b.indexOf(e.value), r = n(b);
		t === -1 ? r.push(e.value) : r.splice(t, 1), "value" in _ || T(r), h?.(r.filter((e) => E.includes(e)).sort((e, t) => O.findIndex((t) => t.value === e) - O.findIndex((e) => e.value === t)));
	}, M = v("checkbox", c), N = `${M}-group`, P = d(M), [F, I] = x(M, P), L = i(_, ["value", "disabled"]), R = s.length ? O.map((e) => /*#__PURE__*/ S.createElement(w, {
		prefixCls: M,
		key: e.value.toString(),
		disabled: "disabled" in e ? e.disabled : _.disabled,
		value: e.value,
		checked: b.includes(e.value),
		onChange: e.onChange,
		className: r(`${N}-item`, e.className),
		style: e.style,
		title: e.title,
		id: e.id,
		required: e.required
	}, e.label)) : o, z = S.useMemo(() => ({
		toggleOption: j,
		value: b,
		disabled: _.disabled,
		name: _.name,
		registerValue: A,
		cancelValue: k
	}), [
		j,
		b,
		_.disabled,
		_.name,
		A,
		k
	]), B = r(N, { [`${N}-rtl`]: y === "rtl" }, l, u, I, P, F);
	return /*#__PURE__*/ S.createElement("div", {
		className: B,
		style: m,
		role: g,
		...L,
		ref: t
	}, /*#__PURE__*/ S.createElement(C.Provider, { value: z }, R));
}), E = /* @__PURE__ */ e({ default: () => D }), D = w;
D.Group = T, D.__ANT_CHECKBOX = !0;
//#endregion
export { E as n, D as t };
