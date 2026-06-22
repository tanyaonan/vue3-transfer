globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { r as e } from "./chunks/rolldown-runtime.js";
import { Dn as t, En as n, Tn as r, kn as i } from "./chunks/shared/core.js";
//#region demo/vendor-src/react/entry.ts
var a = /* @__PURE__ */ e(i(), 1), o = /* @__PURE__ */ e(t(), 1), s = /* @__PURE__ */ e(n(), 1), c = {
	Button: { path: "button" },
	"Button.Group": { path: "button" },
	Icon: { path: "icon" },
	Typography: { path: "typography" },
	Grid: { path: "grid" },
	Row: { path: "grid" },
	Col: { path: "grid" },
	Layout: { path: "layout" },
	Space: { path: "space" },
	SpaceCompact: { path: "space" },
	Flex: { path: "flex" },
	Anchor: { path: "anchor" },
	Breadcrumb: { path: "breadcrumb" },
	Dropdown: { path: "dropdown" },
	Menu: { path: "menu" },
	Pagination: { path: "pagination" },
	Steps: { path: "steps" },
	Tabs: { path: "tabs" },
	AutoComplete: { path: "auto-complete" },
	Cascader: { path: "cascader" },
	Checkbox: { path: "checkbox" },
	ColorPicker: { path: "color-picker" },
	DatePicker: { path: "date-picker" },
	Form: { path: "form" },
	Input: { path: "input" },
	InputNumber: { path: "input-number" },
	Mentions: { path: "mentions" },
	Radio: { path: "radio" },
	Rate: { path: "rate" },
	Select: { path: "select" },
	Slider: { path: "slider" },
	Switch: { path: "switch" },
	TimePicker: { path: "time-picker" },
	Transfer: { path: "transfer" },
	TreeSelect: { path: "tree-select" },
	Upload: { path: "upload" },
	Avatar: { path: "avatar" },
	Badge: { path: "badge" },
	Calendar: { path: "calendar" },
	Card: { path: "card" },
	CardGrid: { path: "card" },
	CardMeta: { path: "card" },
	Carousel: { path: "carousel" },
	Collapse: { path: "collapse" },
	Descriptions: { path: "descriptions" },
	Empty: { path: "empty" },
	Image: { path: "image" },
	List: { path: "list" },
	Popover: { path: "popover" },
	QRCode: { path: "qrcode" },
	Segmented: { path: "segmented" },
	Statistic: { path: "statistic" },
	Table: { path: "table" },
	Tag: { path: "tag" },
	Timeline: { path: "timeline" },
	Tooltip: { path: "tooltip" },
	Tour: { path: "tour" },
	Tree: { path: "tree" },
	Alert: { path: "alert" },
	Drawer: { path: "drawer" },
	Modal: { path: "modal" },
	Notification: { path: "notification" },
	Popconfirm: { path: "popconfirm" },
	Progress: { path: "progress" },
	Result: { path: "result" },
	Skeleton: { path: "skeleton" },
	Spin: { path: "spin" },
	App: { path: "app" },
	ConfigProvider: { path: "config-provider" },
	FloatButton: { path: "float-button" },
	Watermark: { path: "watermark" },
	Affix: { path: "affix" },
	BackTop: { path: "back-top" },
	message: { path: "message" },
	notification: { path: "notification" }
};
function l(e) {
	let t = /* @__PURE__ */ new Set(), n = e.matchAll(/import\s+\{([^}]+)\}\s+from\s+['"]antd['"];?/gi);
	for (let e of n) for (let n of e[1].split(",")) {
		let e = n.trim().split(/\s+as\s+/i).pop()?.trim();
		e && t.add(e);
	}
	let r = e.matchAll(/<\s*([A-Z][A-Za-z0-9]*)/g);
	for (let e of r) c[e[1]] && t.add(e[1]);
	return [...t];
}
async function u(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) {
		let e = c[n];
		e && t.add(e.path);
	}
	let n = /* #__PURE__ */ Object.assign({
		"/node_modules/antd/es/affix/index.js": () => import("./chunks/antd/affix.js").then((e) => e.n),
		"/node_modules/antd/es/alert/index.js": () => import("./chunks/antd/alert.js").then((e) => e.t),
		"/node_modules/antd/es/anchor/index.js": () => import("./chunks/antd/anchor.js").then((e) => e.t),
		"/node_modules/antd/es/app/index.js": () => import("./chunks/shared/antd-core.js").then((e) => e.A),
		"/node_modules/antd/es/auto-complete/index.js": () => import("./chunks/antd/auto-complete.js").then((e) => e.t),
		"/node_modules/antd/es/avatar/index.js": () => import("./chunks/antd/avatar.js").then((e) => e.t),
		"/node_modules/antd/es/back-top/index.js": () => import("./chunks/antd/back-top.js").then((e) => e.t),
		"/node_modules/antd/es/badge/index.js": () => import("./chunks/antd/badge.js").then((e) => e.n),
		"/node_modules/antd/es/border-beam/index.js": () => import("./chunks/antd/border-beam.js").then((e) => e.t),
		"/node_modules/antd/es/breadcrumb/index.js": () => import("./chunks/antd/breadcrumb.js").then((e) => e.t),
		"/node_modules/antd/es/button/index.js": () => import("./chunks/antd/button.js").then((e) => e.n),
		"/node_modules/antd/es/calendar/index.js": () => import("./chunks/antd/calendar.js").then((e) => e.t),
		"/node_modules/antd/es/card/index.js": () => import("./chunks/antd/card.js").then((e) => e.t),
		"/node_modules/antd/es/carousel/index.js": () => import("./chunks/antd/carousel.js").then((e) => e.t),
		"/node_modules/antd/es/cascader/index.js": () => import("./chunks/antd/cascader.js").then((e) => e.t),
		"/node_modules/antd/es/checkbox/index.js": () => import("./chunks/antd/checkbox.js").then((e) => e.n),
		"/node_modules/antd/es/col/index.js": () => import("./chunks/antd/col.js").then((e) => e.t),
		"/node_modules/antd/es/collapse/index.js": () => import("./chunks/shared/antd-core.js").then((e) => e.At),
		"/node_modules/antd/es/color-picker/index.js": () => import("./chunks/antd/color-picker.js").then((e) => e.t),
		"/node_modules/antd/es/config-provider/index.js": () => import("./chunks/shared/antd-core.js").then((e) => e.En),
		"/node_modules/antd/es/date-picker/index.js": () => import("./chunks/antd/date-picker.js").then((e) => e.n),
		"/node_modules/antd/es/descriptions/index.js": () => import("./chunks/antd/descriptions.js").then((e) => e.t),
		"/node_modules/antd/es/divider/index.js": () => import("./chunks/antd/color-picker.js").then((e) => e.u),
		"/node_modules/antd/es/drawer/index.js": () => import("./chunks/antd/drawer.js").then((e) => e.t),
		"/node_modules/antd/es/dropdown/index.js": () => import("./chunks/antd/dropdown.js").then((e) => e.n),
		"/node_modules/antd/es/empty/index.js": () => import("./chunks/shared/antd-core.js").then((e) => e.w),
		"/node_modules/antd/es/flex/index.js": () => import("./chunks/antd/flex.js").then((e) => e.n),
		"/node_modules/antd/es/float-button/index.js": () => import("./chunks/antd/float-button.js").then((e) => e.t),
		"/node_modules/antd/es/form/index.js": () => import("./chunks/antd/form.js").then((e) => e.t),
		"/node_modules/antd/es/grid/index.js": () => import("./chunks/antd/col.js").then((e) => e.n),
		"/node_modules/antd/es/image/index.js": () => import("./chunks/antd/image.js").then((e) => e.t),
		"/node_modules/antd/es/input/index.js": () => import("./chunks/antd/input.js").then((e) => e.t),
		"/node_modules/antd/es/input-number/index.js": () => import("./chunks/antd/color-picker.js").then((e) => e.s),
		"/node_modules/antd/es/layout/index.js": () => import("./chunks/antd/layout.js").then((e) => e.t),
		"/node_modules/antd/es/list/index.js": () => import("./chunks/antd/list.js").then((e) => e.t),
		"/node_modules/antd/es/locale/index.js": () => import("./chunks/shared/antd-core.js").then((e) => e.Ln),
		"/node_modules/antd/es/masonry/index.js": () => import("./chunks/antd/masonry.js").then((e) => e.t),
		"/node_modules/antd/es/mentions/index.js": () => import("./chunks/antd/mentions.js").then((e) => e.t),
		"/node_modules/antd/es/menu/index.js": () => import("./chunks/antd/breadcrumb.js").then((e) => e.i),
		"/node_modules/antd/es/message/index.js": () => import("./chunks/antd/message.js").then((e) => e.t),
		"/node_modules/antd/es/modal/index.js": () => import("./chunks/antd/modal.js").then((e) => e.t),
		"/node_modules/antd/es/notification/index.js": () => import("./chunks/antd/notification.js").then((e) => e.t),
		"/node_modules/antd/es/pagination/index.js": () => import("./chunks/antd/list.js").then((e) => e.a),
		"/node_modules/antd/es/popconfirm/index.js": () => import("./chunks/antd/popconfirm.js").then((e) => e.t),
		"/node_modules/antd/es/popover/index.js": () => import("./chunks/antd/avatar.js").then((e) => e.r),
		"/node_modules/antd/es/progress/index.js": () => import("./chunks/antd/progress.js").then((e) => e.n),
		"/node_modules/antd/es/qr-code/index.js": () => import("./chunks/antd/qr-code.js").then((e) => e.n),
		"/node_modules/antd/es/qrcode/index.js": () => import("./chunks/antd/qrcode.js").then((e) => e.t),
		"/node_modules/antd/es/radio/index.js": () => import("./chunks/antd/calendar.js").then((e) => e.v),
		"/node_modules/antd/es/rate/index.js": () => import("./chunks/antd/rate.js").then((e) => e.t),
		"/node_modules/antd/es/result/index.js": () => import("./chunks/antd/result.js").then((e) => e.t),
		"/node_modules/antd/es/row/index.js": () => import("./chunks/antd/row.js").then((e) => e.t),
		"/node_modules/antd/es/segmented/index.js": () => import("./chunks/antd/color-picker.js").then((e) => e.l),
		"/node_modules/antd/es/select/index.js": () => import("./chunks/antd/auto-complete.js").then((e) => e.r),
		"/node_modules/antd/es/skeleton/index.js": () => import("./chunks/shared/antd-core.js").then((e) => e.nt),
		"/node_modules/antd/es/slider/index.js": () => import("./chunks/antd/color-picker.js").then((e) => e.n),
		"/node_modules/antd/es/space/index.js": () => import("./chunks/antd/dropdown.js").then((e) => e.i),
		"/node_modules/antd/es/spin/index.js": () => import("./chunks/antd/list.js").then((e) => e.r),
		"/node_modules/antd/es/splitter/index.js": () => import("./chunks/antd/splitter.js").then((e) => e.t),
		"/node_modules/antd/es/statistic/index.js": () => import("./chunks/antd/statistic.js").then((e) => e.t),
		"/node_modules/antd/es/steps/index.js": () => import("./chunks/antd/steps.js").then((e) => e.n),
		"/node_modules/antd/es/style/index.js": () => import("./chunks/shared/antd-core.js").then((e) => e.hr),
		"/node_modules/antd/es/switch/index.js": () => import("./chunks/antd/switch.js").then((e) => e.t),
		"/node_modules/antd/es/table/index.js": () => import("./chunks/antd/table.js").then((e) => e.t),
		"/node_modules/antd/es/tabs/index.js": () => import("./chunks/antd/card.js").then((e) => e.n),
		"/node_modules/antd/es/tag/index.js": () => import("./chunks/antd/tag.js").then((e) => e.t),
		"/node_modules/antd/es/theme/index.js": () => import("./chunks/shared/antd-core.js").then((e) => e.i),
		"/node_modules/antd/es/time-picker/index.js": () => import("./chunks/antd/time-picker.js").then((e) => e.t),
		"/node_modules/antd/es/timeline/index.js": () => import("./chunks/antd/timeline.js").then((e) => e.t),
		"/node_modules/antd/es/tooltip/index.js": () => import("./chunks/antd/avatar.js").then((e) => e.s),
		"/node_modules/antd/es/tour/index.js": () => import("./chunks/antd/tour.js").then((e) => e.t),
		"/node_modules/antd/es/transfer/index.js": () => import("./chunks/antd/transfer.js").then((e) => e.t),
		"/node_modules/antd/es/tree/index.js": () => import("./chunks/antd/table.js").then((e) => e.n),
		"/node_modules/antd/es/tree-select/index.js": () => import("./chunks/antd/tree-select.js").then((e) => e.t),
		"/node_modules/antd/es/typography/index.js": () => import("./chunks/antd/typography.js").then((e) => e.t),
		"/node_modules/antd/es/upload/index.js": () => import("./chunks/antd/upload.js").then((e) => e.t),
		"/node_modules/antd/es/version/index.js": () => import("./chunks/shared/antd-core.js").then((e) => e.vr),
		"/node_modules/antd/es/watermark/index.js": () => import("./chunks/antd/watermark.js").then((e) => e.t)
	}), r = {};
	for (let i of t) {
		let t = n[`/node_modules/antd/es/${i}/index.js`];
		if (!t) {
			console.warn(`[vue3-transfer] Ant Design component not found: ${i}`);
			continue;
		}
		let a = await t();
		for (let t of e) c[t]?.path === i && (a.default ? r[t] = a.default : a[t] && (r[t] = a[t]));
	}
	return r;
}
//#endregion
var d = a.default, f = o.default;
export { d as React, f as ReactDOM, s as ReactJSXRuntime, u as loadAntd, l as resolveAntdTags, r as styled };
