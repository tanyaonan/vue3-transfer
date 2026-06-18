globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, Ft as n, H as r, Mt as i, N as a, O as o, Pt as s, T as c, Tt as l, U as u, W as d, _ as f, b as p, bt as m, ct as h, d as g, et as _, gt as v, jt as y, p as b, pt as ee, tt as x, ut as S, v as C, w, x as T, y as E, yt as D, z as O } from "./vue.runtime.js";
import { t as k } from "./shared/element-plus/utils/vue/install.js";
import { t as A } from "./shared/lodash/clamp.js";
import { t as j } from "./shared/element-plus/hooks/use-aria.js";
import { t as M } from "./shared/lodash/debounce.js";
import { i as N } from "./shared/element-plus/utils/types.js";
import { n as P, r as F, t as I } from "./shared/element-plus/constants/event.js";
import { n as L, r as R } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as te, t as z } from "./shared/element-plus/utils/error.js";
import { c as B } from "./shared/vueuse.js";
import { r as V } from "./shared/element-plus/hooks/use-namespace.js";
import { t as ne } from "./el-tooltip.js";
import { d as H } from "./el-popper.js";
import { r as U } from "./shared/element-plus/hooks/use-size.js";
import { a as W, n as re } from "./shared/element-plus/constants/aria.js";
import { n as ie, r as G } from "./el-form/hooks/use-form-common-props.js";
import { n as K, t as q } from "./el-form/hooks/use-form-item.js";
import { n as ae } from "./shared/element-plus/hooks/use-locale.js";
import { t as oe } from "./el-input-number.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/slider/src/constants.mjs
var se = Symbol("sliderContextKey"), J = L({
	modelValue: {
		type: R([Number, Array]),
		default: 0
	},
	id: {
		type: String,
		default: void 0
	},
	min: {
		type: Number,
		default: 0
	},
	max: {
		type: Number,
		default: 100
	},
	step: {
		type: R([Number, String]),
		default: 1
	},
	showInput: Boolean,
	showInputControls: {
		type: Boolean,
		default: !0
	},
	size: U,
	inputSize: U,
	showStops: Boolean,
	showTooltip: {
		type: Boolean,
		default: !0
	},
	formatTooltip: {
		type: R(Function),
		default: void 0
	},
	disabled: {
		type: Boolean,
		default: void 0
	},
	range: Boolean,
	vertical: Boolean,
	height: String,
	rangeStartLabel: {
		type: String,
		default: void 0
	},
	rangeEndLabel: {
		type: String,
		default: void 0
	},
	formatValueText: {
		type: R(Function),
		default: void 0
	},
	tooltipClass: {
		type: String,
		default: void 0
	},
	placement: {
		type: String,
		values: H,
		default: "top"
	},
	marks: { type: R(Object) },
	validateEvent: {
		type: Boolean,
		default: !0
	},
	persistent: {
		type: Boolean,
		default: !0
	},
	...j(["ariaLabel"])
}), Y = (e) => N(e) || l(e) && e.every(N), ce = {
	[F]: Y,
	[P]: Y,
	[I]: Y
}, le = (e, t, n) => {
	let r = S();
	return O(async () => {
		e.range ? (l(e.modelValue) ? (t.firstValue = Math.max(e.min, e.modelValue[0]), t.secondValue = Math.min(e.max, e.modelValue[1])) : (t.firstValue = e.min, t.secondValue = e.max), t.oldValue = [t.firstValue, t.secondValue]) : (!N(e.modelValue) || Number.isNaN(e.modelValue) ? t.firstValue = e.min : t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue)), t.oldValue = t.firstValue), B(window, "resize", n), await a(), n();
	}), { sliderWrapper: r };
}, ue = (e) => {
	let t = f(() => e.marks ? Object.keys(e.marks).map(Number.parseFloat).sort((e, t) => e - t).filter((t) => t <= e.max && t >= e.min).map((t) => ({
		point: t,
		position: (t - e.min) * 100 / (e.max - e.min),
		mark: e.marks[t]
	})) : []);
	return _(() => {
		if (e.step === "mark" && !e.marks && z("ElSlider", "marks prop must be provided when step is mark"), e.marks) {
			let n = Object.keys(e.marks), r = t.value.map((e) => e.point), i = n.filter((e) => {
				let t = Number.parseFloat(e);
				return Number.isNaN(t) || !r.includes(t);
			});
			i.length > 0 && z("ElSlider", `Some marks keys are invalid (not a number or out of [min, max]): [${i.map((e) => `'${e}'`).join(", ")}] and will be ignored.`);
		}
	}), t;
}, de = (e, t, n) => {
	let { formItem: r } = q(), i = ee(), o = S(), s = S(), c = {
		firstButton: o,
		secondButton: s
	}, l = ie(), u = f(() => Math.min(t.firstValue, t.secondValue)), d = f(() => Math.max(t.firstValue, t.secondValue)), p = f(() => e.range ? `${100 * (d.value - u.value) / (e.max - e.min)}%` : `${100 * (t.firstValue - e.min) / (e.max - e.min)}%`), m = f(() => e.range ? `${100 * (u.value - e.min) / (e.max - e.min)}%` : "0%"), h = f(() => e.vertical ? { height: e.height } : {}), g = f(() => e.vertical ? {
		height: p.value,
		bottom: m.value
	} : {
		width: p.value,
		left: m.value
	}), _ = () => {
		i.value && (t.sliderSize = i.value.getBoundingClientRect()[e.vertical ? "height" : "width"]);
	}, v = (n) => {
		let r = e.min + n * (e.max - e.min) / 100;
		if (!e.range) return o;
		let i;
		return i = Math.abs(u.value - r) < Math.abs(d.value - r) ? t.firstValue < t.secondValue ? "firstButton" : "secondButton" : t.firstValue > t.secondValue ? "firstButton" : "secondButton", c[i];
	}, y = (e) => {
		let t = v(e);
		return t.value.setPosition(e), t;
	}, b = (n) => {
		t.firstValue = n ?? e.min, C(e.range ? [u.value, d.value] : n ?? e.min);
	}, x = (n) => {
		t.secondValue = n, e.range && C([u.value, d.value]);
	}, C = (e) => {
		n(F, e), n(P, e);
	}, w = async () => {
		await a(), n(I, e.range ? [u.value, d.value] : e.modelValue);
	}, T = (n) => {
		if (l.value || t.dragging) return;
		_();
		let r = 0;
		if (e.vertical) {
			let e = n.touches?.item(0)?.clientY ?? n.clientY;
			r = (i.value.getBoundingClientRect().bottom - e) / t.sliderSize * 100;
		} else r = ((n.touches?.item(0)?.clientX ?? n.clientX) - i.value.getBoundingClientRect().left) / t.sliderSize * 100;
		if (!(r < 0 || r > 100)) return y(r);
	};
	return {
		elFormItem: r,
		slider: i,
		firstButton: o,
		secondButton: s,
		sliderDisabled: l,
		minValue: u,
		maxValue: d,
		runwayStyle: h,
		barStyle: g,
		resetSize: _,
		setPosition: y,
		emitChange: w,
		onSliderWrapperPrevent: (e) => {
			(c.firstButton.value?.dragging || c.secondButton.value?.dragging) && e.preventDefault();
		},
		onSliderClick: (e) => {
			T(e) && w();
		},
		onSliderDown: async (e) => {
			let t = T(e);
			t && (await a(), t.value.onButtonDown(e));
		},
		onSliderMarkerDown: (e) => {
			l.value || t.dragging || y(e) && w();
		},
		setFirstValue: b,
		setSecondValue: x
	};
}, fe = (e, t, n, r) => ({
	stops: f(() => {
		if (!e.showStops || e.min > e.max) return [];
		if (e.step === "mark" || e.step === 0) return e.step === 0 && z("ElSlider", "step should not be 0."), [];
		let i = Math.ceil((e.max - e.min) / e.step), a = 100 * e.step / (e.max - e.min), o = Array.from({ length: i - 1 }).map((e, t) => (t + 1) * a);
		return e.range ? o.filter((t) => t < 100 * (n.value - e.min) / (e.max - e.min) || t > 100 * (r.value - e.min) / (e.max - e.min)) : o.filter((n) => n > 100 * (t.firstValue - e.min) / (e.max - e.min));
	}),
	getStopStyle: (t) => e.vertical ? { bottom: `${t}%` } : { left: `${t}%` }
}), pe = (t, n, r, i, a, o) => {
	let s = (e) => {
		a(F, e), a(P, e);
	}, c = () => t.range ? ![r.value, i.value].every((e, t) => e === n.oldValue[t]) : t.modelValue !== n.oldValue, u = () => {
		t.min > t.max && te("Slider", "min should not be greater than max.");
		let e = t.modelValue;
		t.range && l(e) ? e[1] < t.min ? s([t.min, t.min]) : e[0] > t.max ? s([t.max, t.max]) : e[0] < t.min ? s([t.min, e[1]]) : e[1] > t.max ? s([e[0], t.max]) : (n.firstValue = e[0], n.secondValue = e[1], c() && (t.validateEvent && o?.validate?.("change").catch(m), n.oldValue = e.slice())) : !t.range && N(e) && !Number.isNaN(e) && (e < t.min ? s(t.min) : e > t.max ? s(t.max) : (n.firstValue = e, c() && (t.validateEvent && o?.validate?.("change").catch(m), n.oldValue = e)));
	};
	u(), e(() => n.dragging, (e) => {
		e || u();
	}), e(() => t.modelValue, (e, t) => {
		n.dragging || l(e) && l(t) && e.every((e, n) => e === t[n]) && n.firstValue === e[0] && n.secondValue === e[1] || u();
	}, { deep: !0 }), e(() => [t.min, t.max], () => {
		u();
	});
}, me = (e, t, n) => {
	let r = S(), i = S(!1), a = f(() => t.value instanceof Function);
	return {
		tooltip: r,
		tooltipVisible: i,
		formatValue: f(() => a.value && t.value(e.modelValue) || e.modelValue),
		displayTooltip: M(() => {
			n.value && (i.value = !0);
		}, 50),
		hideTooltip: M(() => {
			n.value && (i.value = !1);
		}, 50)
	};
}, he = (n, r, i) => {
	let { disabled: o, min: s, max: c, step: l, showTooltip: u, persistent: d, precision: p, sliderSize: m, formatTooltip: h, emitChange: g, resetSize: _, updateDragging: v, markList: y } = t(se), { tooltip: b, tooltipVisible: ee, formatValue: x, displayTooltip: C, hideTooltip: w } = me(n, h, u), T = S(), E = f(() => `${(n.modelValue - s.value) / (c.value - s.value) * 100}%`), D = f(() => n.vertical ? { bottom: E.value } : { left: E.value }), O = f(() => l.value === "mark" && y.value.length > 0), k = () => {
		r.hovering = !0, C();
	}, j = () => {
		r.hovering = !1, r.dragging || w();
	}, M = (e) => {
		o.value || (e.preventDefault(), ie(e), window.addEventListener("mousemove", G), window.addEventListener("touchmove", G), window.addEventListener("mouseup", K), window.addEventListener("touchend", K), window.addEventListener("contextmenu", K), T.value.focus());
	}, P = (e) => {
		o.value || (r.newPosition = Number.parseFloat(E.value) + e / (c.value - s.value) * 100, q(r.newPosition), g());
	}, I = (e) => {
		if (o.value || !y.value.length) return;
		let t = n.modelValue, r = 2 ** -52, i = Math.abs(e), a;
		if (e > 0) {
			let e = y.value.findIndex((e) => e.point > t + r);
			if (e !== -1) {
				let t = Math.min(e + i - 1, y.value.length - 1);
				a = y.value[t].point;
			}
		} else {
			let e = -1;
			for (let n = y.value.length - 1; n >= 0; n--) if (y.value[n].point < t - r) {
				e = n;
				break;
			}
			if (e !== -1) {
				let t = Math.max(e - (i - 1), 0);
				a = y.value[t].point;
			}
		}
		a !== void 0 && a !== t && (q((a - s.value) / (c.value - s.value) * 100), g());
	}, L = () => {
		O.value ? I(-1) : N(l.value) && P(-l.value);
	}, R = () => {
		O.value ? I(1) : N(l.value) && P(l.value);
	}, te = () => {
		O.value ? I(-4) : N(l.value) && P(-l.value * 4);
	}, z = () => {
		O.value ? I(4) : N(l.value) && P(l.value * 4);
	}, V = () => {
		o.value || (q(0), g());
	}, ne = () => {
		o.value || (q(100), g());
	}, H = (e) => {
		let t = re(e), n = !0;
		switch (t) {
			case W.left:
			case W.down:
				L();
				break;
			case W.right:
			case W.up:
				R();
				break;
			case W.home:
				V();
				break;
			case W.end:
				ne();
				break;
			case W.pageDown:
				te();
				break;
			case W.pageUp:
				z();
				break;
			default:
				n = !1;
				break;
		}
		n && e.preventDefault();
	}, U = (e) => {
		let t, n;
		return e.type.startsWith("touch") ? (n = e.touches[0].clientY, t = e.touches[0].clientX) : (n = e.clientY, t = e.clientX), {
			clientX: t,
			clientY: n
		};
	}, ie = (e) => {
		r.dragging = !0, r.isClick = !0;
		let { clientX: t, clientY: i } = U(e);
		n.vertical ? r.startY = i : r.startX = t, r.startPosition = Number.parseFloat(E.value), r.newPosition = r.startPosition;
	}, G = (e) => {
		if (r.dragging) {
			r.isClick = !1, C(), _();
			let t, { clientX: i, clientY: a } = U(e);
			n.vertical ? (r.currentY = a, t = (r.startY - r.currentY) / m.value * 100) : (r.currentX = i, t = (r.currentX - r.startX) / m.value * 100), r.newPosition = r.startPosition + t, q(r.newPosition);
		}
	}, K = () => {
		r.dragging && (setTimeout(() => {
			r.dragging = !1, r.hovering || w(), r.isClick || q(r.newPosition), g();
		}, 0), window.removeEventListener("mousemove", G), window.removeEventListener("touchmove", G), window.removeEventListener("mouseup", K), window.removeEventListener("touchend", K), window.removeEventListener("contextmenu", K));
	}, q = async (e) => {
		if (e === null || Number.isNaN(+e)) return;
		e = A(e, 0, 100);
		let t;
		if (l.value === "mark") t = y.value.length === 0 ? e <= 50 ? s.value : c.value : y.value.reduce((t, n) => Math.abs(n.position - e) < Math.abs(t.position - e) ? n : t).point;
		else {
			let n = Math.floor((c.value - s.value) / l.value), r = n * l.value / (c.value - s.value) * 100, i = r + (100 - r) / 2;
			if (e < r) {
				let i = r / n, a = Math.round(e / i);
				t = s.value + a * l.value;
			} else t = e < i ? s.value + n * l.value : c.value;
			t = Number.parseFloat(t.toFixed(p.value));
		}
		t !== n.modelValue && i(F, t), !r.dragging && n.modelValue !== r.oldValue && (r.oldValue = n.modelValue), await a(), r.dragging && C(), b.value.updatePopper();
	};
	return e(() => r.dragging, (e) => {
		v(e);
	}), B(T, "touchstart", M, { passive: !1 }), {
		disabled: o,
		button: T,
		tooltip: b,
		tooltipVisible: ee,
		showTooltip: u,
		persistent: d,
		wrapperStyle: D,
		formatValue: x,
		handleMouseEnter: k,
		handleMouseLeave: j,
		onButtonDown: M,
		onKeyDown: H,
		setPosition: q
	};
}, ge = L({
	modelValue: {
		type: Number,
		default: 0
	},
	vertical: Boolean,
	tooltipClass: String,
	placement: {
		type: String,
		values: H,
		default: "top"
	}
}), X = { [F]: (e) => N(e) }, _e = ["tabindex"], ve = /* @__PURE__ */ c({
	name: "ElSliderButton",
	__name: "button",
	props: ge,
	emits: X,
	setup(e, { expose: t, emit: a }) {
		let o = e, c = a, l = V("slider"), u = h({
			hovering: !1,
			dragging: !1,
			isClick: !1,
			startX: 0,
			currentX: 0,
			startY: 0,
			currentY: 0,
			startPosition: 0,
			newPosition: 0,
			oldValue: o.modelValue
		}), d = f(() => _.value ? y.value : !1), { disabled: p, button: m, tooltip: g, showTooltip: _, persistent: y, tooltipVisible: b, wrapperStyle: ee, formatValue: S, handleMouseEnter: E, handleMouseLeave: O, onButtonDown: k, onKeyDown: A, setPosition: j } = he(o, u, c), { hovering: M, dragging: N } = v(u);
		return t({
			onButtonDown: k,
			onKeyDown: A,
			setPosition: j,
			hovering: M,
			dragging: N
		}), (e, t) => (r(), T("div", {
			ref_key: "button",
			ref: m,
			class: i([D(l).e("button-wrapper"), {
				hover: D(M),
				dragging: D(N)
			}]),
			style: s(D(ee)),
			tabindex: D(p) ? void 0 : 0,
			onMouseenter: t[0] ||= (...e) => D(E) && D(E)(...e),
			onMouseleave: t[1] ||= (...e) => D(O) && D(O)(...e),
			onMousedown: t[2] ||= (...e) => D(k) && D(k)(...e),
			onFocus: t[3] ||= (...e) => D(E) && D(E)(...e),
			onBlur: t[4] ||= (...e) => D(O) && D(O)(...e),
			onKeydown: t[5] ||= (...e) => D(A) && D(A)(...e)
		}, [w(D(ne), {
			ref_key: "tooltip",
			ref: g,
			visible: D(b),
			placement: e.placement,
			"fallback-placements": [
				"top",
				"bottom",
				"right",
				"left"
			],
			"stop-popper-mouse-event": !1,
			"popper-class": e.tooltipClass,
			disabled: !D(_),
			persistent: d.value
		}, {
			content: x(() => [C("span", null, n(D(S)), 1)]),
			default: x(() => [C("div", { class: i([D(l).e("button"), {
				hover: D(M),
				dragging: D(N)
			}]) }, null, 2)]),
			_: 1
		}, 8, [
			"visible",
			"placement",
			"popper-class",
			"disabled",
			"persistent"
		])], 46, _e));
	}
}), ye = c({
	name: "ElSliderMarker",
	props: L({ mark: {
		type: R([String, Object]),
		default: void 0
	} }),
	setup(e) {
		let t = V("slider"), n = f(() => y(e.mark) ? e.mark : e.mark.label), r = f(() => y(e.mark) ? void 0 : e.mark.style);
		return () => o("div", {
			class: t.e("marks-text"),
			style: r.value
		}, n.value);
	}
}), be = [
	"id",
	"role",
	"aria-label",
	"aria-labelledby"
], xe = { key: 1 }, Z = k(/* @__PURE__ */ c({
	name: "ElSlider",
	__name: "slider",
	props: J,
	emits: ce,
	setup(e, { expose: t, emit: n }) {
		let a = e, o = n, c = V("slider"), { t: l } = ae(), m = h({
			firstValue: 0,
			secondValue: 0,
			oldValue: 0,
			dragging: !1,
			sliderSize: 1
		}), { elFormItem: _, slider: y, firstButton: ee, secondButton: x, sliderDisabled: S, minValue: O, maxValue: k, runwayStyle: A, barStyle: j, resetSize: M, emitChange: P, onSliderWrapperPrevent: F, onSliderClick: I, onSliderDown: L, onSliderMarkerDown: R, setFirstValue: te, setSecondValue: z } = de(a, m, o), { stops: ne, getStopStyle: H } = fe(a, m, O, k), { inputId: U, isLabeledByFormItem: W } = K(a, { formItemContext: _ }), re = G(), ie = f(() => a.inputSize || re.value), q = f(() => a.showInput && !a.range && a.step !== "mark"), J = f(() => a.ariaLabel || l("el.slider.defaultLabel", {
			min: a.min,
			max: a.max
		})), Y = f(() => a.range ? a.rangeStartLabel || l("el.slider.defaultRangeStartLabel") : J.value), ce = f(() => a.formatValueText ? a.formatValueText(Q.value) : `${Q.value}`), me = f(() => a.rangeEndLabel || l("el.slider.defaultRangeEndLabel")), he = f(() => a.formatValueText ? a.formatValueText($.value) : `${$.value}`), ge = f(() => [
			c.b(),
			c.m(re.value),
			c.is("vertical", a.vertical),
			{ [c.m("with-input")]: q.value }
		]), X = ue(a);
		pe(a, m, O, k, o, _);
		let _e = f(() => N(a.step) ? a.step : 1), Z = f(() => {
			let e = N(a.step) ? a.step : 1, t = [
				a.min,
				a.max,
				e
			].map((e) => {
				let t = `${e}`.split(".")[1];
				return t ? t.length : 0;
			});
			return Math.max.apply(null, t);
		}), { sliderWrapper: Se } = le(a, m, M), { firstValue: Q, secondValue: $, sliderSize: Ce } = v(m), we = (e) => {
			m.dragging = e;
		};
		return B(Se, "touchstart", F, { passive: !1 }), B(Se, "touchmove", F, { passive: !1 }), u(se, {
			...v(a),
			sliderSize: Ce,
			disabled: S,
			precision: Z,
			markList: X,
			emitChange: P,
			resetSize: M,
			updateDragging: we
		}), t({ onSliderClick: I }), (e, t) => (r(), T("div", {
			id: e.range ? D(U) : void 0,
			ref_key: "sliderWrapper",
			ref: Se,
			class: i(ge.value),
			role: e.range ? "group" : void 0,
			"aria-label": e.range && !D(W) ? J.value : void 0,
			"aria-labelledby": e.range && D(W) ? D(_)?.labelId : void 0
		}, [C("div", {
			ref_key: "slider",
			ref: y,
			class: i([
				D(c).e("runway"),
				{ "show-input": q.value },
				D(c).is("disabled", D(S))
			]),
			style: s(D(A)),
			onMousedown: t[0] ||= (...e) => D(L) && D(L)(...e),
			onTouchstartPassive: t[1] ||= (...e) => D(L) && D(L)(...e)
		}, [
			C("div", {
				class: i(D(c).e("bar")),
				style: s(D(j))
			}, null, 6),
			w(ve, {
				id: e.range ? void 0 : D(U),
				ref_key: "firstButton",
				ref: ee,
				"model-value": D(Q),
				vertical: e.vertical,
				"tooltip-class": e.tooltipClass,
				placement: e.placement,
				role: "slider",
				"aria-label": e.range || !D(W) ? Y.value : void 0,
				"aria-labelledby": !e.range && D(W) ? D(_)?.labelId : void 0,
				"aria-valuemin": e.min,
				"aria-valuemax": e.range ? D($) : e.max,
				"aria-valuenow": D(Q),
				"aria-valuetext": ce.value,
				"aria-orientation": e.vertical ? "vertical" : "horizontal",
				"aria-disabled": D(S),
				"onUpdate:modelValue": D(te)
			}, null, 8, [
				"id",
				"model-value",
				"vertical",
				"tooltip-class",
				"placement",
				"aria-label",
				"aria-labelledby",
				"aria-valuemin",
				"aria-valuemax",
				"aria-valuenow",
				"aria-valuetext",
				"aria-orientation",
				"aria-disabled",
				"onUpdate:modelValue"
			]),
			e.range ? (r(), E(ve, {
				key: 0,
				ref_key: "secondButton",
				ref: x,
				"model-value": D($),
				vertical: e.vertical,
				"tooltip-class": e.tooltipClass,
				placement: e.placement,
				role: "slider",
				"aria-label": me.value,
				"aria-valuemin": D(Q),
				"aria-valuemax": e.max,
				"aria-valuenow": D($),
				"aria-valuetext": he.value,
				"aria-orientation": e.vertical ? "vertical" : "horizontal",
				"aria-disabled": D(S),
				"onUpdate:modelValue": D(z)
			}, null, 8, [
				"model-value",
				"vertical",
				"tooltip-class",
				"placement",
				"aria-label",
				"aria-valuemin",
				"aria-valuemax",
				"aria-valuenow",
				"aria-valuetext",
				"aria-orientation",
				"aria-disabled",
				"onUpdate:modelValue"
			])) : p("v-if", !0),
			e.showStops ? (r(), T("div", xe, [(r(!0), T(b, null, d(D(ne), (e, t) => (r(), T("div", {
				key: t,
				class: i(D(c).e("stop")),
				style: s(D(H)(e))
			}, null, 6))), 128))])) : p("v-if", !0),
			D(X).length > 0 ? (r(), T(b, { key: 2 }, [C("div", null, [(r(!0), T(b, null, d(D(X), (e, t) => (r(), T("div", {
				key: t,
				style: s(D(H)(e.position)),
				class: i([D(c).e("stop"), D(c).e("marks-stop")])
			}, null, 6))), 128))]), C("div", { class: i(D(c).e("marks")) }, [(r(!0), T(b, null, d(D(X), (e, t) => (r(), E(D(ye), {
				key: t,
				mark: e.mark,
				style: s(D(H)(e.position)),
				onMousedown: g((t) => D(R)(e.position), ["stop"])
			}, null, 8, [
				"mark",
				"style",
				"onMousedown"
			]))), 128))], 2)], 64)) : p("v-if", !0)
		], 38), q.value ? (r(), E(D(oe), {
			key: 0,
			ref: "input",
			"model-value": D(Q),
			class: i(D(c).e("input")),
			step: _e.value,
			disabled: D(S),
			controls: e.showInputControls,
			min: e.min,
			max: e.max,
			precision: Z.value,
			size: ie.value,
			"onUpdate:modelValue": D(te),
			onChange: D(P)
		}, null, 8, [
			"model-value",
			"class",
			"step",
			"disabled",
			"controls",
			"min",
			"max",
			"precision",
			"size",
			"onUpdate:modelValue",
			"onChange"
		])) : p("v-if", !0)], 10, be));
	}
}));
//#endregion
export { Z as ElSlider, Z as default, se as sliderContextKey, ce as sliderEmits, J as sliderProps };
