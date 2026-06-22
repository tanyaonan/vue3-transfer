globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
//#region demo/vendor-src/uniapp/uniapp-stub.ts
function e(e) {}
function t(e) {}
function n() {
	let e = "", t = null, n = !1;
	function r() {
		return t && t.$el ? t.$el : document;
	}
	function i() {
		let t = r();
		if (n) {
			let n = Array.from(t.querySelectorAll(e));
			return n.length > 0 ? n : [];
		}
		return t.querySelector(e);
	}
	return {
		in(e) {
			return t = e, this;
		},
		select(t) {
			return e = t, n = !1, this;
		},
		selectAll(t) {
			return e = t, n = !0, this;
		},
		boundingClientRect(e) {
			let t = i(), r = n ? t.map((e) => e.getBoundingClientRect()) : t ? t.getBoundingClientRect() : null;
			return e && e(r), this;
		},
		fields(e, t) {
			let r = i(), a = n ? r.map((e) => ({
				node: e,
				...e.getBoundingClientRect()
			})) : r ? {
				node: r,
				...r.getBoundingClientRect()
			} : null;
			return t && t(a), this;
		},
		exec(e) {
			e && e([]);
		}
	};
}
function r() {
	return [{
		route: typeof window < "u" ? window.location.pathname : "",
		options: {}
	}];
}
//#endregion
export { e as i, r as n, t as r, n as t };
