globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/props.ts
var e = [Number, String], t = {
	type: Boolean,
	default: !0
}, n = (e) => ({
	type: e,
	required: !0
}), r = () => ({
	type: Array,
	default: () => []
}), i = (e) => ({
	type: Boolean,
	default: e
}), a = (e) => ({
	type: Number,
	default: e
}), o = (t) => ({
	type: e,
	default: t
}), s = (e) => ({
	type: String,
	default: e
}), c = {
	customStyle: s(""),
	customClass: s("")
};
//#endregion
export { o as a, e as c, a as i, t as l, r as n, n as o, i as r, s, c as t };
