globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/common/formatDate.ts
function e(e, t) {
	let n = e instanceof Date ? e : new Date(e);
	if (isNaN(n.getTime())) return "Invalid Date";
	let r = n.getFullYear(), i = n.getMonth() + 1, a = n.getDate(), o = n.getHours(), s = n.getMinutes(), c = n.getSeconds(), l = {
		YYYY: String(r),
		YY: String(r).slice(-2),
		MM: String(i).padStart(2, "0"),
		M: String(i),
		DD: String(a).padStart(2, "0"),
		D: String(a),
		HH: String(o).padStart(2, "0"),
		H: String(o),
		mm: String(s).padStart(2, "0"),
		m: String(s),
		ss: String(c).padStart(2, "0"),
		s: String(c)
	}, u = Object.keys(l).sort((e, t) => t.length - e.length).join("|");
	return t.replace(new RegExp(u, "g"), (e) => l[e] || e);
}
//#endregion
export { e as t };
