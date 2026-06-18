globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/utils/dom/position.mjs
var e = (e) => {
	let t = 0, n = e;
	for (; n;) t += n.offsetTop, n = n.offsetParent;
	return t;
}, t = (t, n) => Math.abs(e(t) - e(n)), n = (e) => {
	let t, n;
	return e.type === "touchend" ? (n = e.changedTouches[0].clientY, t = e.changedTouches[0].clientX) : e.type.startsWith("touch") ? (n = e.touches[0].clientY, t = e.touches[0].clientX) : (n = e.clientY, t = e.clientX), {
		clientX: t,
		clientY: n
	};
};
//#endregion
export { t as n, n as t };
