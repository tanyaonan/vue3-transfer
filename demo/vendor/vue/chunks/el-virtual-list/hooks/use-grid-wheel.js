globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { Ct as e, Dt as t, E as n, J as r, M as i, N as a, O as o, T as s, _ as c, jt as l, p as u, ut as d, yt as f, z as p } from "../../vue.runtime.js";
import { i as m, s as h } from "../../shared/element-plus/utils/types.js";
import { n as g } from "../../shared/element-plus/utils/error.js";
import { _ as ee, c as _ } from "../../shared/vueuse.js";
import { n as te } from "../../shared/element-plus/utils/easings.js";
import { n as v, t as y } from "../../shared/element-plus/utils/raf.js";
import { r as ne } from "../../shared/element-plus/hooks/use-namespace.js";
import { a as b, c as re, d as x, l as ie, o as S, r as C, s as w, t as T, u as E } from "../defaults.js";
import { c as D, n as O, o as ae, s as oe, t as se, u as ce } from "../utils.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/virtual-list/src/hooks/use-grid-wheel.mjs
var le = ({ atXEndEdge: e, atXStartEdge: t, atYEndEdge: n, atYStartEdge: r }, i) => {
	let a = null, o = 0, s = 0, c = (i, a) => {
		let o = i < 0 && t.value || i > 0 && e.value, s = a < 0 && r.value || a > 0 && n.value;
		return o || s;
	};
	return {
		hasReachedEdge: c,
		onWheel: (e) => {
			y(a);
			let t = e.deltaX, n = e.deltaY;
			if (Math.abs(t) > Math.abs(n) ? n = 0 : t = 0, e.shiftKey && n !== 0 && (t = n, n = 0), c(t, n)) {
				e.deltaX !== 0 && t === 0 && e.preventDefault();
				return;
			}
			o += t, s += n, e.preventDefault(), a = v(() => {
				i(o, s), o = 0, s = 0;
			});
		}
	};
}, ue = (e, t, n, r, i, a, o) => {
	let s = d(0), c = d(0), l, u = 0, p = 0, m = (e) => {
		y(l), s.value = e.touches[0].clientX, c.value = e.touches[0].clientY, u = 0, p = 0;
	}, h = (e) => {
		e.preventDefault(), y(l), u += s.value - e.touches[0].clientX, p += c.value - e.touches[0].clientY, s.value = e.touches[0].clientX, c.value = e.touches[0].clientY, l = v(() => {
			let e = r.value - f(a), s = i.value - f(o);
			n({
				scrollLeft: Math.min(t.value.scrollLeft + u, e),
				scrollTop: Math.min(t.value.scrollTop + p, s)
			}), u = 0, p = 0;
		});
	};
	return _(e, "touchstart", m, { passive: !0 }), _(e, "touchmove", h, { passive: !1 }), {
		touchStartX: s,
		touchStartY: c,
		handleTouchStart: m,
		handleTouchMove: h
	};
}, k = ({ name: t, clearCache: h, getColumnPosition: g, getColumnStartIndexForOffset: v, getColumnStopIndexForStartIndex: y, getEstimatedTotalHeight: x, getEstimatedTotalWidth: C, getColumnOffset: k, getRowOffset: A, getRowPosition: j, getRowStartIndexForOffset: M, getRowStopIndexForStartIndex: N, initCache: P, injectToInstance: F, validateProps: I }) => s({
	name: t ?? "ElVirtualList",
	props: O,
	emits: [S, E],
	setup(t, { emit: s, expose: O, slots: L }) {
		let R = ne("vl");
		I(t);
		let z = n(), B = d(P(t, z));
		F?.(z, B);
		let V = d(), H = d(), U = d(), W = d(), G = d({
			isScrolling: !1,
			scrollLeft: m(t.initScrollLeft) ? t.initScrollLeft : 0,
			scrollTop: m(t.initScrollTop) ? t.initScrollTop : 0,
			updateRequested: !1,
			xAxisScrollDir: b,
			yAxisScrollDir: b
		}), K = ae(), q = c(() => Number.parseInt(`${t.height}`, 10)), J = c(() => Number.parseInt(`${t.width}`, 10)), de = c(() => {
			let { totalColumn: e, totalRow: n, columnCache: r } = t, { isScrolling: i, xAxisScrollDir: a, scrollLeft: o } = f(G);
			if (e === 0 || n === 0) return [
				0,
				0,
				0,
				0
			];
			let s = v(t, o, f(B)), c = y(t, s, o, f(B)), l = !i || a === "backward" ? Math.max(1, r) : 1, u = !i || a === "forward" ? Math.max(1, r) : 1;
			return [
				Math.max(0, s - l),
				Math.max(0, Math.min(e - 1, c + u)),
				s,
				c
			];
		}), fe = c(() => {
			let { totalColumn: e, totalRow: n, rowCache: r } = t, { isScrolling: i, yAxisScrollDir: a, scrollTop: o } = f(G);
			if (e === 0 || n === 0) return [
				0,
				0,
				0,
				0
			];
			let s = M(t, o, f(B)), c = N(t, s, o, f(B)), l = !i || a === "backward" ? Math.max(1, r) : 1, u = !i || a === "forward" ? Math.max(1, r) : 1;
			return [
				Math.max(0, s - l),
				Math.max(0, Math.min(n - 1, c + u)),
				s,
				c
			];
		}), Y = c(() => x(t, f(B))), X = c(() => C(t, f(B))), pe = c(() => [
			{
				position: "relative",
				overflow: "hidden",
				WebkitOverflowScrolling: "touch",
				willChange: "transform"
			},
			{
				direction: t.direction,
				height: m(t.height) ? `${t.height}px` : t.height,
				width: m(t.width) ? `${t.width}px` : t.width
			},
			t.style ?? {}
		]), me = c(() => {
			let e = `${f(X)}px`;
			return {
				height: `${f(Y)}px`,
				pointerEvents: f(G).isScrolling ? "none" : void 0,
				width: e,
				margin: 0,
				boxSizing: "border-box"
			};
		}), Z = () => {
			let { totalColumn: e, totalRow: n } = t;
			if (e > 0 && n > 0) {
				let [e, t, n, r] = f(de), [i, a, o, c] = f(fe);
				s(S, {
					columnCacheStart: e,
					columnCacheEnd: t,
					rowCacheStart: i,
					rowCacheEnd: a,
					columnVisibleStart: n,
					columnVisibleEnd: r,
					rowVisibleStart: o,
					rowVisibleEnd: c
				});
			}
			let { scrollLeft: r, scrollTop: i, updateRequested: a, xAxisScrollDir: o, yAxisScrollDir: c } = f(G);
			s(E, {
				xAxisScrollDir: o,
				scrollLeft: r,
				yAxisScrollDir: c,
				scrollTop: i,
				updateRequested: a
			});
		}, he = (e) => {
			let { clientHeight: n, clientWidth: r, scrollHeight: i, scrollLeft: o, scrollTop: s, scrollWidth: c } = e.currentTarget, l = f(G);
			if (l.scrollTop === s && l.scrollLeft === o) return;
			let u = o;
			if (ce(t.direction)) switch (oe()) {
				case w:
					u = -o;
					break;
				case ie:
					u = c - r - o;
					break;
			}
			G.value = {
				...l,
				isScrolling: !0,
				scrollLeft: u,
				scrollTop: Math.max(0, Math.min(s, i - n)),
				updateRequested: !0,
				xAxisScrollDir: D(l.scrollLeft, u),
				yAxisScrollDir: D(l.scrollTop, s)
			}, a(() => Te()), $(), Z();
		}, ge = (e, t) => {
			let n = f(q), r = (Y.value - n) / t * e;
			Q({ scrollTop: Math.min(Y.value - n, r) });
		}, _e = (e, t) => {
			let n = f(J), r = (X.value - n) / t * e;
			Q({ scrollLeft: Math.min(X.value - n, r) });
		}, { onWheel: ve } = le({
			atXStartEdge: c(() => G.value.scrollLeft <= 0),
			atXEndEdge: c(() => G.value.scrollLeft >= X.value - f(J)),
			atYStartEdge: c(() => G.value.scrollTop <= 0),
			atYEndEdge: c(() => G.value.scrollTop >= Y.value - f(q))
		}, (e, t) => {
			H.value?.onMouseUp?.(), U.value?.onMouseUp?.();
			let n = f(J), r = f(q);
			Q({
				scrollLeft: Math.min(G.value.scrollLeft + e, X.value - n),
				scrollTop: Math.min(G.value.scrollTop + t, Y.value - r)
			});
		});
		_(V, "wheel", ve, { passive: !1 });
		let Q = ({ scrollLeft: e = G.value.scrollLeft, scrollTop: t = G.value.scrollTop }) => {
			e = Math.max(e, 0), t = Math.max(t, 0);
			let n = f(G);
			t === n.scrollTop && e === n.scrollLeft || (G.value = {
				...n,
				xAxisScrollDir: D(n.scrollLeft, e),
				yAxisScrollDir: D(n.scrollTop, t),
				scrollLeft: e,
				scrollTop: t,
				updateRequested: !0
			}, a(() => Te()), $(), Z());
		}, { touchStartX: ye, touchStartY: be, handleTouchStart: xe, handleTouchMove: Se } = ue(V, G, Q, X, Y, J, q), Ce = (e = 0, n = 0, r = T) => {
			let i = f(G);
			n = Math.max(0, Math.min(n, t.totalColumn - 1)), e = Math.max(0, Math.min(e, t.totalRow - 1));
			let a = te(R.namespace.value), o = f(B), s = x(t, o), c = C(t, o);
			Q({
				scrollLeft: k(t, n, r, i.scrollLeft, o, c > t.width ? a : 0),
				scrollTop: A(t, e, r, i.scrollTop, o, s > t.height ? a : 0)
			});
		}, we = (n, r) => {
			let { columnWidth: i, direction: a, rowHeight: o } = t, s = K.value(h && i, h && o, h && a), c = `${n},${r}`;
			if (e(s, c)) return s[c];
			{
				let [, e] = g(t, r, f(B)), i = f(B), o = ce(a), [l, u] = j(t, n, i), [d] = g(t, r, i);
				return s[c] = {
					position: "absolute",
					left: o ? void 0 : `${e}px`,
					right: o ? `${e}px` : void 0,
					top: `${u}px`,
					height: `${l}px`,
					width: `${d}px`
				}, s[c];
			}
		}, Te = () => {
			G.value.isScrolling = !1, a(() => {
				K.value(-1, null, null);
			});
		};
		p(() => {
			if (!ee) return;
			let { initScrollLeft: e, initScrollTop: n } = t, r = f(V);
			r && (m(e) && (r.scrollLeft = e), m(n) && (r.scrollTop = n)), Z();
		});
		let $ = () => {
			let { direction: e } = t, { scrollLeft: n, scrollTop: r, updateRequested: i } = f(G), a = f(V);
			if (i && a) {
				if (e === "rtl") switch (oe()) {
					case w:
						a.scrollLeft = -n;
						break;
					case re:
						a.scrollLeft = n;
						break;
					default: {
						let { clientWidth: e, scrollWidth: t } = a;
						a.scrollLeft = t - e - n;
						break;
					}
				}
				else a.scrollLeft = Math.max(0, n);
				a.scrollTop = Math.max(0, r);
			}
		}, { resetAfterColumnIndex: Ee, resetAfterRowIndex: De, resetAfter: Oe } = z.proxy;
		O({
			windowRef: V,
			innerRef: W,
			getItemStyleCache: K,
			touchStartX: ye,
			touchStartY: be,
			handleTouchStart: xe,
			handleTouchMove: Se,
			scrollTo: Q,
			scrollToItem: Ce,
			states: G,
			resetAfterColumnIndex: Ee,
			resetAfterRowIndex: De,
			resetAfter: Oe
		});
		let ke = () => {
			let { scrollbarAlwaysOn: e, scrollbarStartGap: n, scrollbarEndGap: r, totalColumn: i, totalRow: a } = t, s = f(J), c = f(q), l = f(X), u = f(Y), { scrollLeft: d, scrollTop: p } = f(G);
			return {
				horizontalScrollbar: o(se, {
					ref: H,
					alwaysOn: e,
					startGap: n,
					endGap: r,
					class: R.e("horizontal"),
					clientSize: s,
					layout: "horizontal",
					onScroll: _e,
					ratio: s * 100 / l,
					scrollFrom: d / (l - s),
					total: a,
					visible: !0
				}),
				verticalScrollbar: o(se, {
					ref: U,
					alwaysOn: e,
					startGap: n,
					endGap: r,
					class: R.e("vertical"),
					clientSize: c,
					layout: "vertical",
					onScroll: ge,
					ratio: c * 100 / u,
					scrollFrom: p / (u - c),
					total: i,
					visible: !0
				})
			};
		}, Ae = () => {
			let [e, n] = f(de), [r, i] = f(fe), { data: a, totalColumn: s, totalRow: c, useIsScrolling: l, itemKey: d } = t, p = [];
			if (c > 0 && s > 0) for (let t = r; t <= i; t++) for (let r = e; r <= n; r++) {
				let e = d({
					columnIndex: r,
					data: a,
					rowIndex: t
				});
				p.push(o(u, { key: e }, L.default?.({
					columnIndex: r,
					data: a,
					isScrolling: l ? f(G).isScrolling : void 0,
					style: we(t, r),
					rowIndex: t
				})));
			}
			return p;
		}, je = () => {
			let e = r(t.innerElement), n = Ae();
			return [o(e, i(t.innerProps, {
				style: f(me),
				ref: W
			}), l(e) ? n : { default: () => n })];
		};
		return () => {
			let e = r(t.containerElement), { horizontalScrollbar: n, verticalScrollbar: i } = ke(), a = je();
			return o("div", {
				key: 0,
				class: R.e("wrapper"),
				role: t.role
			}, [
				o(e, {
					class: t.className,
					style: f(pe),
					onScroll: he,
					ref: V
				}, l(e) ? a : { default: () => a }),
				n,
				i
			]);
		};
	}
}), A = "ElFixedSizeGrid", j = k({
	name: "ElFixedSizeGrid",
	getColumnPosition: ({ columnWidth: e }, t) => [e, t * e],
	getRowPosition: ({ rowHeight: e }, t) => [e, t * e],
	getEstimatedTotalHeight: ({ totalRow: e, rowHeight: t }) => t * e,
	getEstimatedTotalWidth: ({ totalColumn: e, columnWidth: t }) => t * e,
	getColumnOffset: ({ totalColumn: e, columnWidth: t, width: n }, r, i, a, o, s) => {
		n = Number(n);
		let c = Math.max(0, e * t - n), l = Math.min(c, r * t), u = Math.max(0, r * t - n + s + t);
		switch (i === "smart" && (i = a >= u - n && a <= l + n ? T : C), i) {
			case x: return l;
			case "end": return u;
			case C: {
				let e = Math.round(u + (l - u) / 2);
				return e < Math.ceil(n / 2) ? 0 : e > c + Math.floor(n / 2) ? c : e;
			}
			case T:
			default: return a >= u && a <= l ? a : u > l || a < u ? u : l;
		}
	},
	getRowOffset: ({ rowHeight: e, height: t, totalRow: n }, r, i, a, o, s) => {
		t = Number(t);
		let c = Math.max(0, n * e - t), l = Math.min(c, r * e), u = Math.max(0, r * e - t + s + e);
		switch (i === "smart" && (i = a >= u - t && a <= l + t ? T : C), i) {
			case x: return l;
			case "end": return u;
			case C: {
				let e = Math.round(u + (l - u) / 2);
				return e < Math.ceil(t / 2) ? 0 : e > c + Math.floor(t / 2) ? c : e;
			}
			case T:
			default: return a >= u && a <= l ? a : u > l || a < u ? u : l;
		}
	},
	getColumnStartIndexForOffset: ({ columnWidth: e, totalColumn: t }, n) => Math.max(0, Math.min(t - 1, Math.floor(n / e))),
	getColumnStopIndexForStartIndex: ({ columnWidth: e, totalColumn: t, width: n }, r, i) => {
		let a = r * e, o = Math.ceil((n + i - a) / e);
		return Math.max(0, Math.min(t - 1, r + o - 1));
	},
	getRowStartIndexForOffset: ({ rowHeight: e, totalRow: t }, n) => Math.max(0, Math.min(t - 1, Math.floor(n / e))),
	getRowStopIndexForStartIndex: ({ rowHeight: e, totalRow: t, height: n }, r, i) => {
		let a = r * e, o = Math.ceil((n + i - a) / e);
		return Math.max(0, Math.min(t - 1, r + o - 1));
	},
	initCache: () => void 0,
	clearCache: !0,
	validateProps: ({ columnWidth: e, rowHeight: t }) => {
		m(e) || g(A, `
          "columnWidth" must be passed as number,
            instead ${typeof e} was given.
        `), m(t) || g(A, `
          "columnWidth" must be passed as number,
            instead ${typeof t} was given.
        `);
	}
}), { max: M, min: N, floor: P } = Math, F = "ElDynamicSizeGrid", I = {
	column: "columnWidth",
	row: "rowHeight"
}, L = {
	column: "lastVisitedColumnIndex",
	row: "lastVisitedRowIndex"
}, R = (e, t, n, r) => {
	let [i, a, o] = [
		n[r],
		e[I[r]],
		n[L[r]]
	];
	if (t > o) {
		let e = 0;
		if (o >= 0) {
			let t = i[o];
			e = t.offset + t.size;
		}
		for (let n = o + 1; n <= t; n++) {
			let t = a(n);
			i[n] = {
				offset: e,
				size: t
			}, e += t;
		}
		n[L[r]] = t;
	}
	return i[t];
}, z = (e, t, n, r, i, a) => {
	for (; n <= r;) {
		let o = n + P((r - n) / 2), s = R(e, o, t, a).offset;
		if (s === i) return o;
		s < i ? n = o + 1 : r = o - 1;
	}
	return M(0, n - 1);
}, B = (e, t, n, r, i) => {
	let a = i === "column" ? e.totalColumn : e.totalRow, o = 1;
	for (; n < a && R(e, n, t, i).offset < r;) n += o, o *= 2;
	return z(e, t, P(n / 2), N(n, a - 1), r, i);
}, V = (e, t, n, r) => {
	let [i, a] = [t[r], t[L[r]]];
	return (a > 0 ? i[a].offset : 0) >= n ? z(e, t, 0, a, n, r) : B(e, t, M(0, a), n, r);
}, H = ({ totalRow: e }, { estimatedRowHeight: t, lastVisitedRowIndex: n, row: r }) => {
	let i = 0;
	if (n >= e && (n = e - 1), n >= 0) {
		let e = r[n];
		i = e.offset + e.size;
	}
	let a = (e - n - 1) * t;
	return i + a;
}, U = ({ totalColumn: e }, { column: t, estimatedColumnWidth: n, lastVisitedColumnIndex: r }) => {
	let i = 0;
	if (r > e && (r = e - 1), r >= 0) {
		let e = t[r];
		i = e.offset + e.size;
	}
	let a = (e - r - 1) * n;
	return i + a;
}, W = {
	column: U,
	row: H
}, G = (e, t, n, r, i, a, o) => {
	let [s, c] = [a === "row" ? e.height : e.width, W[a]], l = R(e, t, i, a), u = M(0, N(c(e, i) - s, l.offset)), d = M(0, l.offset - s + o + l.size);
	switch (n === "smart" && (n = r >= d - s && r <= u + s ? T : C), n) {
		case x: return u;
		case "end": return d;
		case C: return Math.round(d + (u - d) / 2);
		case T:
		default: return r >= d && r <= u ? r : d > u || r < d ? d : u;
	}
}, K = k({
	name: "ElDynamicSizeGrid",
	getColumnPosition: (e, t, n) => {
		let r = R(e, t, n, "column");
		return [r.size, r.offset];
	},
	getRowPosition: (e, t, n) => {
		let r = R(e, t, n, "row");
		return [r.size, r.offset];
	},
	getColumnOffset: (e, t, n, r, i, a) => G(e, t, n, r, i, "column", a),
	getRowOffset: (e, t, n, r, i, a) => G(e, t, n, r, i, "row", a),
	getColumnStartIndexForOffset: (e, t, n) => V(e, n, t, "column"),
	getColumnStopIndexForStartIndex: (e, t, n, r) => {
		let i = R(e, t, r, "column"), a = n + e.width, o = i.offset + i.size, s = t;
		for (; s < e.totalColumn - 1 && o < a;) s++, o += R(e, t, r, "column").size;
		return s;
	},
	getEstimatedTotalHeight: H,
	getEstimatedTotalWidth: U,
	getRowStartIndexForOffset: (e, t, n) => V(e, n, t, "row"),
	getRowStopIndexForStartIndex: (e, t, n, r) => {
		let { totalRow: i, height: a } = e, o = R(e, t, r, "row"), s = n + a, c = o.size + o.offset, l = t;
		for (; l < i - 1 && c < s;) l++, c += R(e, l, r, "row").size;
		return l;
	},
	injectToInstance: (e, t) => {
		let n = ({ columnIndex: n, rowIndex: r }, i) => {
			i = h(i) ? !0 : i, m(n) && (t.value.lastVisitedColumnIndex = Math.min(t.value.lastVisitedColumnIndex, n - 1)), m(r) && (t.value.lastVisitedRowIndex = Math.min(t.value.lastVisitedRowIndex, r - 1)), e.exposed?.getItemStyleCache.value(-1, null, null), i && e.proxy?.$forceUpdate();
		};
		Object.assign(e.proxy, {
			resetAfterColumnIndex: (e, t) => {
				n({ columnIndex: e }, t);
			},
			resetAfterRowIndex: (e, t) => {
				n({ rowIndex: e }, t);
			},
			resetAfter: n
		});
	},
	initCache: ({ estimatedColumnWidth: e = 50, estimatedRowHeight: t = 50 }) => ({
		column: {},
		estimatedColumnWidth: e,
		estimatedRowHeight: t,
		lastVisitedColumnIndex: -1,
		lastVisitedRowIndex: -1,
		row: {}
	}),
	clearCache: !1,
	validateProps: ({ columnWidth: e, rowHeight: n }) => {
		t(e) || g(F, `
          "columnWidth" must be passed as function,
            instead ${typeof e} was given.
        `), t(n) || g(F, `
          "rowHeight" must be passed as function,
            instead ${typeof n} was given.
        `);
	}
});
//#endregion
export { j as n, K as t };
