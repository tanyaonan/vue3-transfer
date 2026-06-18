globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { N as e, O as t, Ot as n, T as r, at as i, ct as a, gt as o, i as s, jt as c, l, n as u, nt as d, tt as f, ut as p, w as m, wt as h } from "./vue.runtime.js";
import { _ as g } from "./shared/vueuse.js";
import { a as _, r as v, t as y } from "./shared/element-plus/utils/dom/style.js";
import { n as b } from "./el-config-provider/constants.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/loading/src/loading.mjs
function x(e, n) {
	let i, c = p(!1), h = a({
		...e,
		originalPosition: "",
		originalOverflow: "",
		visible: !1
	});
	function g(e) {
		h.text = e;
	}
	function v() {
		let e = h.parent, t = w.ns;
		if (!e.vLoadingAddClassList) {
			let n = e.getAttribute("loading-number");
			n = Number.parseInt(n) - 1, n ? e.setAttribute("loading-number", n.toString()) : (_(e, t.bm("parent", "relative")), e.removeAttribute("loading-number")), _(e, t.bm("parent", "hidden"));
		}
		y(), C.unmount();
	}
	function y() {
		w.$el?.parentNode?.removeChild(w.$el);
	}
	function x() {
		e.beforeClose && !e.beforeClose() || (c.value = !0, clearTimeout(i), i = setTimeout(S, 400), h.visible = !1, e.closed?.());
	}
	function S() {
		if (!c.value) return;
		let e = h.parent;
		c.value = !1, e.vLoadingAddClassList = void 0, v();
	}
	let C = s(r({
		name: "ElLoading",
		setup(e, { expose: n }) {
			let { ns: r, zIndex: i } = b("loading");
			return n({
				ns: r,
				zIndex: i
			}), () => {
				let e = h.spinner || h.svg, n = t("svg", {
					class: "circular",
					viewBox: h.svgViewBox ? h.svgViewBox : "0 0 50 50",
					...e ? { innerHTML: e } : {}
				}, [t("circle", {
					class: "path",
					cx: "25",
					cy: "25",
					r: "20",
					fill: "none"
				})]), i = h.text ? t("p", { class: r.b("text") }, [h.text]) : void 0;
				return t(u, {
					name: r.b("fade"),
					onAfterLeave: S
				}, { default: f(() => [d(m("div", {
					style: { backgroundColor: h.background || "" },
					class: [
						r.b("mask"),
						h.customClass,
						r.is("fullscreen", h.fullscreen)
					]
				}, [t("div", { class: r.b("spinner") }, [n, i])]), [[l, h.visible]])]) });
			};
		}
	}));
	Object.assign(C._context, n ?? {});
	let w = C.mount(document.createElement("div"));
	return {
		...o(h),
		setText: g,
		removeElLoadingChild: y,
		close: x,
		handleAfterLeave: S,
		vm: w,
		get $el() {
			return w.$el;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/loading/src/service.mjs
var S = void 0, C = function(t = {}, n) {
	if (!g) return;
	let r = w(t);
	if (r.fullscreen && S) return S;
	let i = x({
		...r,
		closed: () => {
			r.closed?.(), r.fullscreen && (S = void 0);
		}
	}, n ?? C._context);
	T(r, r.parent, i), E(r, r.parent, i), r.parent.vLoadingAddClassList = () => E(r, r.parent, i);
	let a = r.parent.getAttribute("loading-number");
	return a = a ? `${Number.parseInt(a) + 1}` : "1", r.parent.setAttribute("loading-number", a), r.parent.appendChild(i.$el), e(() => i.visible.value = r.visible), r.fullscreen && (S = i), i;
}, w = (e) => {
	let t;
	return t = c(e.target) ? document.querySelector(e.target) ?? document.body : e.target || document.body, {
		parent: t === document.body || e.body ? document.body : t,
		background: e.background || "",
		svg: e.svg || "",
		svgViewBox: e.svgViewBox || "",
		spinner: e.spinner || !1,
		text: e.text || "",
		fullscreen: t === document.body && (e.fullscreen ?? !0),
		lock: e.lock ?? !1,
		customClass: e.customClass || "",
		visible: e.visible ?? !0,
		beforeClose: e.beforeClose,
		closed: e.closed,
		target: t
	};
}, T = async (t, n, r) => {
	let { nextZIndex: i } = r.vm.zIndex || r.vm._.exposed.zIndex, a = {};
	if (t.fullscreen) r.originalPosition.value = v(document.body, "position"), r.originalOverflow.value = v(document.body, "overflow"), a.zIndex = i();
	else if (t.parent === document.body) {
		r.originalPosition.value = v(document.body, "position"), await e();
		for (let e of ["top", "left"]) {
			let n = e === "top" ? "scrollTop" : "scrollLeft";
			a[e] = `${t.target.getBoundingClientRect()[e] + document.body[n] + document.documentElement[n] - Number.parseInt(v(document.body, `margin-${e}`), 10)}px`;
		}
		for (let e of ["height", "width"]) a[e] = `${t.target.getBoundingClientRect()[e]}px`;
	} else r.originalPosition.value = v(n, "position");
	for (let [e, t] of Object.entries(a)) r.$el.style[e] = t;
}, E = (e, t, n) => {
	let r = n.vm.ns || n.vm._.exposed.ns;
	[
		"absolute",
		"fixed",
		"sticky"
	].includes(n.originalPosition.value) ? _(t, r.bm("parent", "relative")) : y(t, r.bm("parent", "relative")), e.fullscreen && e.lock ? y(t, r.bm("parent", "hidden")) : _(t, r.bm("parent", "hidden"));
};
C._context = null;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/loading/src/directive.mjs
var D = Symbol("ElLoading"), O = (e) => `element-loading-${h(e)}`, k = (e, t) => {
	let r = t.instance, i = (e) => n(t.value) ? t.value[e] : void 0, a = (e) => p(c(e) && r?.[e] || e), o = (t) => a(i(t) || e.getAttribute(O(t))), s = i("fullscreen") ?? t.modifiers.fullscreen, l = {
		text: o("text"),
		svg: o("svg"),
		svgViewBox: o("svgViewBox"),
		spinner: o("spinner"),
		background: o("background"),
		customClass: o("customClass"),
		fullscreen: s,
		target: i("target") ?? (s ? void 0 : e),
		body: i("body") ?? t.modifiers.body,
		lock: i("lock") ?? t.modifiers.lock
	}, u = C(l);
	u._context = j._context, e[D] = {
		options: l,
		instance: u
	};
}, A = (e, t) => {
	for (let n of Object.keys(e)) i(e[n]) && (e[n].value = t[n]);
}, j = {
	mounted(e, t) {
		t.value && k(e, t);
	},
	updated(e, t) {
		let r = e[D];
		if (!t.value) {
			r?.instance.close(), e[D] = null;
			return;
		}
		r ? A(r.options, n(t.value) ? t.value : {
			text: e.getAttribute(O("text")),
			svg: e.getAttribute(O("svg")),
			svgViewBox: e.getAttribute(O("svgViewBox")),
			spinner: e.getAttribute(O("spinner")),
			background: e.getAttribute(O("background")),
			customClass: e.getAttribute(O("customClass"))
		}) : k(e, t);
	},
	unmounted(e) {
		e[D]?.instance.close(), e[D] = null;
	}
};
j._context = null;
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/loading/index.mjs
var M = {
	install(e) {
		C._context = e._context, j._context = e._context, e.directive("loading", j), e.config.globalProperties.$loading = C;
	},
	directive: j,
	service: C
};
//#endregion
export { M as ElLoading, M as default, j as ElLoadingDirective, j as vLoading, C as ElLoadingService };
