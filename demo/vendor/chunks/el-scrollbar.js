globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, A as n, G as r, H as i, I as a, J as o, Mt as s, N as c, Ot as l, P as u, Pt as d, T as f, U as p, V as m, _ as h, b as g, ct as _, d as v, ht as y, l as b, n as x, nt as S, p as C, tt as w, ut as T, v as E, w as D, x as O, y as k, yt as A, z as j } from "./vue.runtime.js";
import { t as M } from "./shared/element-plus/utils/vue/install.js";
import { i as N } from "./shared/element-plus/utils/types.js";
import { n as P } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as F, t as I } from "./shared/element-plus/utils/error.js";
import { _ as L, c as R, d as z } from "./shared/vueuse.js";
import { n as B } from "./shared/element-plus/utils/dom/style.js";
import { r as V } from "./shared/element-plus/hooks/use-namespace.js";
import { n as H, t as U } from "./el-scrollbar/scrollbar.js";
import { r as W, t as G } from "./el-scrollbar/util.js";
import { t as K } from "./shared/element-plus/utils/numbers.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/scrollbar/src/thumb.mjs
var q = P({
	vertical: Boolean,
	size: String,
	move: Number,
	ratio: {
		type: Number,
		required: !0
	},
	always: Boolean
}), J = Symbol("scrollbarContextKey"), ee = P({
	always: {
		type: Boolean,
		default: !0
	},
	minSize: {
		type: Number,
		required: !0
	}
}), te = "Thumb", Y = /* @__PURE__ */ f({
	__name: "thumb",
	props: q,
	setup(e) {
		let t = e, r = n(J), o = V("scrollbar");
		r || F(te, "can not inject scrollbar context");
		let c = T(), l = T(), u = T({}), f = T(!1), p = !1, m = !1, g = 0, _ = 0, C = L ? document.onselectstart : null, D = h(() => G[t.vertical ? "vertical" : "horizontal"]), O = h(() => W({
			size: t.size,
			move: t.move,
			bar: D.value
		})), j = h(() => c.value[D.value.offset] ** 2 / r.wrapElement[D.value.scrollSize] / t.ratio / l.value[D.value.offset]), M = (e) => {
			if (e.stopPropagation(), e.ctrlKey || [1, 2].includes(e.button)) return;
			window.getSelection()?.removeAllRanges(), P(e);
			let t = e.currentTarget;
			t && (u.value[D.value.axis] = t[D.value.offset] - (e[D.value.client] - t.getBoundingClientRect()[D.value.direction]));
		}, N = (e) => {
			if (!l.value || !c.value || !r.wrapElement) return;
			let t = (Math.abs(e.target.getBoundingClientRect()[D.value.direction] - e[D.value.client]) - l.value[D.value.offset] / 2) * 100 * j.value / c.value[D.value.offset];
			r.wrapElement[D.value.scroll] = t * r.wrapElement[D.value.scrollSize] / 100;
		}, P = (e) => {
			e.stopImmediatePropagation(), p = !0, g = r.wrapElement.scrollHeight, _ = r.wrapElement.scrollWidth, document.addEventListener("mousemove", I), document.addEventListener("mouseup", z), C = document.onselectstart, document.onselectstart = () => !1;
		}, I = (e) => {
			if (!c.value || !l.value || p === !1) return;
			let t = u.value[D.value.axis];
			if (!t) return;
			let n = ((c.value.getBoundingClientRect()[D.value.direction] - e[D.value.client]) * -1 - (l.value[D.value.offset] - t)) * 100 * j.value / c.value[D.value.offset];
			D.value.scroll === "scrollLeft" ? r.wrapElement[D.value.scroll] = n * _ / 100 : r.wrapElement[D.value.scroll] = n * g / 100;
		}, z = () => {
			p = !1, u.value[D.value.axis] = 0, document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", z), U(), m && (f.value = !1);
		}, B = () => {
			m = !1, f.value = !!t.size;
		}, H = () => {
			m = !0, f.value = p;
		};
		a(() => {
			U(), document.removeEventListener("mouseup", z);
		});
		let U = () => {
			document.onselectstart !== C && (document.onselectstart = C);
		};
		return R(y(r, "scrollbarElement"), "mousemove", B), R(y(r, "scrollbarElement"), "mouseleave", H), (t, n) => (i(), k(x, {
			name: A(o).b("fade"),
			persisted: ""
		}, {
			default: w(() => [S(E("div", {
				ref_key: "instance",
				ref: c,
				class: s([A(o).e("bar"), A(o).is(D.value.key)]),
				onMousedown: N,
				onClick: n[0] ||= v(() => {}, ["stop"])
			}, [E("div", {
				ref_key: "thumb",
				ref: l,
				class: s(A(o).e("thumb")),
				style: d(O.value),
				onMousedown: M
			}, null, 38)], 34), [[b, e.always || f.value]])]),
			_: 1
		}, 8, ["name"]));
	}
}), ne = /* @__PURE__ */ f({
	__name: "bar",
	props: ee,
	setup(e, { expose: t }) {
		let r = e, a = n(J), o = T(0), s = T(0), c = T(""), l = T(""), u = T(1), d = T(1);
		return t({
			handleScroll: (e) => {
				if (e) {
					let t = e.offsetHeight - 4, n = e.offsetWidth - 4;
					s.value = e.scrollTop * 100 / t * u.value, o.value = e.scrollLeft * 100 / n * d.value;
				}
			},
			update: () => {
				let e = a?.wrapElement;
				if (!e) return;
				let t = e.offsetHeight - 4, n = e.offsetWidth - 4, i = t ** 2 / e.scrollHeight, o = n ** 2 / e.scrollWidth, s = Math.max(i, r.minSize), f = Math.max(o, r.minSize);
				u.value = i / (t - i) / (s / (t - s)), d.value = o / (n - o) / (f / (n - f)), l.value = s + 4 < t ? `${s}px` : "", c.value = f + 4 < n ? `${f}px` : "";
			}
		}), (t, n) => (i(), O(C, null, [D(Y, {
			move: o.value,
			ratio: d.value,
			size: c.value,
			always: e.always
		}, null, 8, [
			"move",
			"ratio",
			"size",
			"always"
		]), D(Y, {
			move: s.value,
			ratio: u.value,
			size: l.value,
			vertical: "",
			always: e.always
		}, null, 8, [
			"move",
			"ratio",
			"size",
			"always"
		])], 64));
	}
}), re = ["tabindex"], X = "ElScrollbar", Z = /* @__PURE__ */ f({
	name: X,
	__name: "scrollbar",
	props: H,
	emits: U,
	setup(e, { expose: n, emit: a }) {
		let f = e, v = a, y = V("scrollbar"), b, x, S, C = 0, D = 0, M = "", P = {
			bottom: !1,
			top: !1,
			right: !1,
			left: !1
		}, F = T(), L = T(), H = T(), U = T(), W = h(() => {
			let e = {}, t = B(f.height), n = B(f.maxHeight);
			return t && (e.height = t), n && (e.maxHeight = n), [f.wrapStyle, e];
		}), G = h(() => [
			f.wrapClass,
			y.e("wrap"),
			{ [y.em("wrap", "hidden-default")]: !f.native }
		]), q = h(() => [y.e("view"), f.viewClass]), ee = (e) => P[e] ?? !1, te = {
			top: "bottom",
			bottom: "top",
			left: "right",
			right: "left"
		}, Y = (e) => {
			let t = te[M];
			if (!t) return;
			let n = e[M], r = e[t];
			n && !P[M] && (P[M] = !0), !r && P[t] && (P[t] = !1);
		}, Z = () => {
			if (L.value) {
				U.value?.handleScroll(L.value);
				let e = C, t = D;
				C = L.value.scrollTop, D = L.value.scrollLeft;
				let n = {
					bottom: !K(L.value.scrollHeight - f.distance, L.value.clientHeight + C),
					top: C <= f.distance && e !== 0,
					right: !K(L.value.scrollWidth - f.distance, L.value.clientWidth + D) && t !== D,
					left: D <= f.distance && t !== 0
				};
				if (v("scroll", {
					scrollTop: C,
					scrollLeft: D
				}), e !== C && (M = C > e ? "bottom" : "top"), t !== D && (M = D > t ? "right" : "left"), f.distance > 0) {
					if (ee(M)) return;
					Y(n);
				}
				n[M] && v("end-reached", M);
			}
		};
		function ie(e, t) {
			l(e) ? L.value.scrollTo(e) : N(e) && N(t) && L.value.scrollTo(e, t);
		}
		let Q = (e) => {
			if (!N(e)) {
				I(X, "value must be a number");
				return;
			}
			L.value.scrollTop = e;
		}, ae = (e) => {
			if (!N(e)) {
				I(X, "value must be a number");
				return;
			}
			L.value.scrollLeft = e;
		}, $ = () => {
			U.value?.update(), P[M] = !1, L.value && U.value?.handleScroll(L.value);
		};
		return t(() => f.noresize, (e) => {
			e ? (b?.(), x?.(), S?.()) : ({stop: b} = z(H, $), {stop: x} = z(L, $), S = R("resize", $));
		}, { immediate: !0 }), t(() => [f.maxHeight, f.height], () => {
			f.native || c(() => {
				$();
			});
		}), p(J, _({
			scrollbarElement: F,
			wrapElement: L
		})), u(() => {
			L.value && (L.value.scrollTop = C, L.value.scrollLeft = D);
		}), j(() => {
			f.native || c(() => {
				$();
			});
		}), m(() => $()), n({
			wrapRef: L,
			update: $,
			scrollTo: ie,
			setScrollTop: Q,
			setScrollLeft: ae,
			handleScroll: Z
		}), (t, n) => (i(), O("div", {
			ref_key: "scrollbarRef",
			ref: F,
			class: s(A(y).b())
		}, [E("div", {
			ref_key: "wrapRef",
			ref: L,
			class: s(G.value),
			style: d(W.value),
			tabindex: e.tabindex,
			onScroll: Z
		}, [(i(), k(o(e.tag), {
			id: e.id,
			ref_key: "resizeRef",
			ref: H,
			class: s(q.value),
			style: d(e.viewStyle),
			role: e.role,
			"aria-label": e.ariaLabel,
			"aria-orientation": e.ariaOrientation
		}, {
			default: w(() => [r(t.$slots, "default")]),
			_: 3
		}, 8, [
			"id",
			"class",
			"style",
			"role",
			"aria-label",
			"aria-orientation"
		]))], 46, re), e.native ? g("v-if", !0) : (i(), k(ne, {
			key: 0,
			ref_key: "barRef",
			ref: U,
			always: e.always,
			"min-size": e.minSize
		}, null, 8, ["always", "min-size"]))], 2));
	}
}), ie = /* @__PURE__ */ e({
	BAR_MAP: () => G,
	ElScrollbar: () => Q,
	GAP: () => 4,
	default: () => Q,
	renderThumbStyle: () => W,
	scrollbarContextKey: () => J,
	scrollbarEmits: () => U,
	scrollbarProps: () => H,
	thumbProps: () => q
}), Q = M(Z);
//#endregion
export { ie as n, Q as t };
