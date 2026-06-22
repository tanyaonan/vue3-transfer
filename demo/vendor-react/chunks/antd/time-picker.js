globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { On as n } from "../shared/core.js";
import { O as r } from "../shared/antd-core.js";
import { l as i } from "./auto-complete.js";
import { r as a, t as o } from "./date-picker.js";
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/time-picker/index.js
var s = /* @__PURE__ */ e({ default: () => f }), c = /* @__PURE__ */ t(n()), { TimePicker: l, RangePicker: u } = o, d = /*#__PURE__*/ c.forwardRef((e, t) => /*#__PURE__*/ c.createElement(u, {
	...e,
	picker: "time",
	mode: void 0,
	ref: t
})), f = /*#__PURE__*/ c.forwardRef((e, t) => {
	let { addon: n, renderExtraFooter: r, variant: o, bordered: s, classNames: u, styles: d, popupClassName: f, popupStyle: p, ...m } = e, [h] = i("timePicker", o, s), g = c.useMemo(() => {
		if (r) return r;
		if (n) return n;
	}, [n, r]), [_, v] = a("timePicker", u, d, f, p, {
		...e,
		variant: h
	});
	return /*#__PURE__*/ c.createElement(l, {
		...m,
		mode: void 0,
		ref: t,
		renderExtraFooter: g,
		variant: h,
		classNames: _,
		styles: v
	});
}), p = r(f, "popupAlign", void 0, "picker");
f._InternalPanelDoNotUseOrYouWillBeFired = p, f.RangePicker = d, f._InternalPanelDoNotUseOrYouWillBeFired = p;
//#endregion
export { s as t };
