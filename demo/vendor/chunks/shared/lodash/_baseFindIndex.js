globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
//#region node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFindIndex.js
function e(e, t, n, r) {
	for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
	return -1;
}
//#endregion
export { e as t };
