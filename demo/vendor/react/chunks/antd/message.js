globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Mt as n, Nt as r, Pt as i, kn as a } from "../shared/core.js";
import { Dn as o, Sr as s, Tn as c, Wn as l, an as u, br as d, cn as f, j as p, ln as m, on as h, sn as g, un as _, wn as v } from "../shared/antd-core.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/message/PureList.js
var y = /* @__PURE__ */ t(a()), b = (e) => {
	let { items: t, classNames: n, style: i } = e, { getPrefixCls: a } = s("message"), o = a("message"), c = l(o), [u, d] = _(o, c), f = `${o}-notice`, p = t.map((e) => {
		let { content: t, duration: n, key: r, type: i } = e, a = i ? `${f}-icon-${i}` : void 0;
		return {
			key: r,
			duration: n,
			icon: m(i),
			title: t,
			className: `${f}-${i}`,
			classNames: {
				wrapper: `${o}-${i}`,
				icon: a
			}
		};
	});
	return /*#__PURE__*/ y.createElement(v, {
		prefixCls: o,
		placement: "top",
		configList: p,
		className: r(u, d, c),
		classNames: {
			...n,
			wrapper: n?.wrapper,
			title: n?.title
		},
		style: i,
		stack: !1
	});
}, x = /* @__PURE__ */ e({
	actDestroy: () => R,
	actWrapper: () => L,
	default: () => F
}), S = null, C = (e) => e(), w = [], T = {};
function E() {
	let { getContainer: e, duration: t, rtl: n, maxCount: r, top: i, stack: a } = T, o = e?.() || document.body;
	return {
		getContainer: () => o,
		duration: t,
		rtl: n,
		maxCount: r,
		top: i,
		stack: a
	};
}
var D = /*#__PURE__*/ y.forwardRef((e, t) => {
	let { messageConfig: n, sync: r } = e, { getPrefixCls: i } = (0, y.useContext)(d), a = T.prefixCls || i("message"), o = (0, y.useContext)(p), [s, c] = u({
		...n,
		prefixCls: a,
		...o.message
	});
	return y.useImperativeHandle(t, () => {
		let e = { ...s };
		return Object.keys(e).forEach((t) => {
			e[t] = (...e) => (r(), s[t].apply(s, e));
		}), {
			instance: e,
			sync: r
		};
	}), c;
}), O = /*#__PURE__*/ y.forwardRef((e, t) => {
	let [n, r] = y.useState(E), i = () => {
		r(E);
	};
	y.useEffect(i, []);
	let a = o(), s = a.getRootPrefixCls(), l = a.getIconPrefixCls(), u = a.getTheme(), d = /*#__PURE__*/ y.createElement(D, {
		ref: t,
		sync: i,
		messageConfig: n
	});
	return /*#__PURE__*/ y.createElement(c, {
		prefixCls: s,
		iconPrefixCls: l,
		theme: u
	}, a.holderRender ? a.holderRender(d) : d);
}), k = () => {
	if (!S) {
		let e = document.createDocumentFragment(), t = { fragment: e };
		S = t, C(() => {
			i(/*#__PURE__*/ y.createElement(O, { ref: (e) => {
				let { instance: n, sync: r } = e || {};
				Promise.resolve().then(() => {
					!t.instance && n && (t.instance = n, t.sync = r, k());
				});
			} }), e);
		});
		return;
	}
	S.instance && (w.forEach((e) => {
		let { type: t, skipped: r } = e;
		if (!r) switch (t) {
			case "open":
				C(() => {
					let t = S.instance.open({
						...T,
						...e.config
					});
					t?.then(e.resolve), e.setCloseFn(t);
				});
				break;
			case "destroy":
				C(() => {
					S?.instance.destroy(e.key);
				});
				break;
			default: C(() => {
				var r;
				let i = (r = S.instance)[t].apply(r, n(e.args));
				i?.then(e.resolve), e.setCloseFn(i);
			});
		}
	}), w = []);
};
function A(e) {
	T = {
		...T,
		...e
	}, C(() => {
		S?.sync?.();
	});
}
function j(e) {
	let t = g((t) => {
		let n, r = {
			type: "open",
			config: e,
			resolve: t,
			setCloseFn: (e) => {
				n = e;
			}
		};
		return w.push(r), () => {
			n ? C(() => {
				n();
			}) : r.skipped = !0;
		};
	});
	return k(), t;
}
function M(e, t) {
	o();
	let n = g((n) => {
		let r, i = {
			type: e,
			args: t,
			resolve: n,
			setCloseFn: (e) => {
				r = e;
			}
		};
		return w.push(i), () => {
			r ? C(() => {
				r();
			}) : i.skipped = !0;
		};
	});
	return k(), n;
}
var N = (e) => {
	w.push({
		type: "destroy",
		key: e
	}), k();
}, P = [
	"success",
	"info",
	"warning",
	"error",
	"loading"
], F = {
	open: j,
	destroy: N,
	config: A,
	useMessage: h,
	_InternalPanelDoNotUseOrYouWillBeFired: f,
	_InternalListDoNotUseOrYouWillBeFired: b
};
P.forEach((e) => {
	F[e] = (...t) => M(e, t);
});
var I = () => {}, L = I, R = I;
//#endregion
export { x as t };
