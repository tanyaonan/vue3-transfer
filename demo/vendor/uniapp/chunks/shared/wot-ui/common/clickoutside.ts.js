globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/clickoutside.ts
var e = [];
function t(t) {
	e.push(t);
}
function n(t) {
	e = e.filter((e) => e.$.uid !== t.$.uid);
}
function r(t) {
	e.forEach((e) => {
		e.$.uid !== t.$.uid && e.$.exposed.close();
	});
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useQueue.ts
var i = "__QUEUE_KEY__";
//#endregion
export { n as i, r as n, t as r, i as t };
