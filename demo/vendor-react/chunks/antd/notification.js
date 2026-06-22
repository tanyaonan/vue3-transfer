globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Nt as n, On as r, Pt as i } from "../shared/core.js";
import { Dn as a, F as o, I as s, M as c, N as l, P as u, Sr as d, Tn as f, Wn as p, br as m, dn as h, j as g, wn as _ } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/notification/PureList.js
var v = /* @__PURE__ */ t(r()), y = (e) => {
	let { items: t, classNames: r, placement: i = "topRight", style: a } = e, { getPrefixCls: c } = d("notification"), l = c("notification"), u = p(l), [f, m] = h(l, u), g = `${l}-notice`, y = t.map((e) => {
		let { actions: t, description: n, duration: r, key: i, showProgress: a, title: c, type: l } = e, u = `${g}-icon-${l}`;
		return {
			key: i,
			actions: t,
			closable: { closeIcon: s(g) },
			description: n,
			duration: r,
			icon: o[l],
			showProgress: a,
			title: c,
			className: `${g}-${l}`,
			classNames: { icon: u }
		};
	});
	return /*#__PURE__*/ v.createElement(_, {
		prefixCls: l,
		placement: i,
		configList: y,
		className: n(f, m, u),
		classNames: r,
		style: a,
		stack: !1
	});
}, b = /* @__PURE__ */ e({
	actDestroy: () => I,
	actWrapper: () => F,
	default: () => N
}), x = null, S = (e) => e(), C = [], w = {};
function T() {
	let { getContainer: e, rtl: t, maxCount: n, top: r, bottom: i, showProgress: a, pauseOnHover: o } = w, s = e?.() || document.body;
	return {
		getContainer: () => s,
		rtl: t,
		maxCount: n,
		top: r,
		bottom: i,
		showProgress: a,
		pauseOnHover: o
	};
}
var E = /*#__PURE__*/ v.forwardRef((e, t) => {
	let { notificationConfig: n, sync: r } = e, { getPrefixCls: i } = (0, v.useContext)(m), a = w.prefixCls || i("notification"), o = (0, v.useContext)(g), [s, l] = c({
		...n,
		prefixCls: a,
		...o.notification
	});
	return v.useEffect(r, []), v.useImperativeHandle(t, () => {
		let e = { ...s };
		return Object.keys(e).forEach((t) => {
			e[t] = (...e) => (r(), s[t].apply(s, e));
		}), {
			instance: e,
			sync: r
		};
	}), l;
}), D = /*#__PURE__*/ v.forwardRef((e, t) => {
	let [n, r] = v.useState(T), i = () => {
		r(T);
	};
	v.useEffect(i, []);
	let o = a(), s = o.getRootPrefixCls(), c = o.getIconPrefixCls(), l = o.getTheme(), u = /*#__PURE__*/ v.createElement(E, {
		ref: t,
		sync: i,
		notificationConfig: n
	});
	return /*#__PURE__*/ v.createElement(f, {
		prefixCls: s,
		iconPrefixCls: c,
		theme: l
	}, o.holderRender ? o.holderRender(u) : u);
}), O = () => {
	if (!x) {
		let e = document.createDocumentFragment(), t = { fragment: e };
		x = t, S(() => {
			i(/*#__PURE__*/ v.createElement(D, { ref: (e) => {
				let { instance: n, sync: r } = e || {};
				Promise.resolve().then(() => {
					!t.instance && n && (t.instance = n, t.sync = r, O());
				});
			} }), e);
		});
		return;
	}
	x.instance && (C.forEach((e) => {
		switch (e.type) {
			case "open":
				S(() => {
					x.instance.open({
						...w,
						...e.config
					});
				});
				break;
			case "destroy":
				S(() => {
					x?.instance?.destroy(e.key);
				});
				break;
		}
	}), C = []);
};
function k(e) {
	w = {
		...w,
		...e
	}, S(() => {
		x?.sync?.();
	});
}
function A(e) {
	a(), C.push({
		type: "open",
		config: e
	}), O();
}
var j = (e) => {
	C.push({
		type: "destroy",
		key: e
	}), O();
}, M = [
	"success",
	"info",
	"warning",
	"error"
], N = {
	open: A,
	destroy: j,
	config: k,
	useNotification: l,
	_InternalPanelDoNotUseOrYouWillBeFired: u,
	_InternalListDoNotUseOrYouWillBeFired: y
};
M.forEach((e) => {
	N[e] = (t) => A({
		...t,
		type: e
	});
});
var P = () => {}, F = P, I = P;
//#endregion
export { b as t };
