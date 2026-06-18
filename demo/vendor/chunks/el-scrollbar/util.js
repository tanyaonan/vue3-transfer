globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/scrollbar/src/util.mjs
var e = 4, t = {
	vertical: {
		offset: "offsetHeight",
		scroll: "scrollTop",
		scrollSize: "scrollHeight",
		size: "height",
		key: "vertical",
		axis: "Y",
		client: "clientY",
		direction: "top"
	},
	horizontal: {
		offset: "offsetWidth",
		scroll: "scrollLeft",
		scrollSize: "scrollWidth",
		size: "width",
		key: "horizontal",
		axis: "X",
		client: "clientX",
		direction: "left"
	}
}, n = ({ move: e, size: t, bar: n }) => ({
	[n.size]: t,
	transform: `translate${n.axis}(${e}%)`
});
//#endregion
export { e as n, n as r, t };
