globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, A as n, Ct as r, E as i, G as a, H as o, Mt as s, N as c, Pt as l, T as u, U as d, W as f, _ as p, b as m, bt as h, ct as g, et as _, jt as v, p as y, pt as b, ut as x, v as S, w as C, x as w, y as T, yt as E, z as D } from "./vue.runtime.js";
import { t as O } from "./shared/element-plus/utils/vue/install.js";
import { l as k } from "./shared/element-plus/utils/types.js";
import { r as A } from "./shared/element-plus/constants/event.js";
import { n as j, r as M } from "./shared/element-plus/utils/vue/props/runtime.js";
import { _ as N } from "./shared/vueuse.js";
import { n as P } from "./shared/element-plus/utils/dom/style.js";
import { r as F } from "./shared/element-plus/hooks/use-namespace.js";
import { t as I } from "./shared/element-plus/utils/dom/position.js";
import { t as ee } from "./el-input.js";
import { a as L, n as te } from "./shared/element-plus/constants/aria.js";
import { n as ne } from "./el-form/hooks/use-form-common-props.js";
import { t as re } from "./el-form/hooks/use-form-item.js";
import { n as R } from "./shared/element-plus/hooks/use-locale.js";
import { t as z } from "./shared/tinycolor.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/color-picker-panel/src/color-picker-panel.mjs
var B = j({
	modelValue: {
		type: M(String),
		default: void 0
	},
	border: {
		type: Boolean,
		default: !0
	},
	showAlpha: Boolean,
	colorFormat: { type: M(String) },
	disabled: Boolean,
	predefine: { type: M(Array) },
	validateEvent: {
		type: Boolean,
		default: !0
	},
	hueSliderClass: { type: M([
		String,
		Array,
		Object
	]) },
	hueSliderStyle: {
		type: M([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	}
}), V = { [A]: (e) => v(e) || k(e) }, H = Symbol("colorCommonPickerKey"), U = Symbol("colorPickerPanelContextKey"), ie = j({
	color: {
		type: M(Object),
		required: !0
	},
	vertical: Boolean,
	disabled: Boolean
}), ae = ie, W = !1;
function G(e, t) {
	if (!N) return;
	let n = function(e) {
		t.drag?.(e);
	}, r = function(e) {
		document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", r), document.onselectstart = null, document.ondragstart = null, W = !1, t.end?.(e);
	}, i = function(e) {
		W || (document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", n), document.addEventListener("mouseup", r), document.addEventListener("touchmove", n), document.addEventListener("touchend", r), W = !0, t.start?.(e));
	};
	e.addEventListener("mousedown", i), e.addEventListener("touchstart", i, { passive: !1 });
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/color-picker-panel/src/composables/use-slider.mjs
var K = (e, { key: t, minValue: n, maxValue: r }) => {
	let a = i(), o = b(), s = b(), c = p(() => e.color.get(t));
	function l(t) {
		e.disabled || (t.target !== o.value && u(t), o.value?.focus());
	}
	function u(n) {
		if (!s.value || !o.value || e.disabled) return;
		let i = a.vnode.el.getBoundingClientRect(), { clientX: c, clientY: l } = I(n), u;
		if (e.vertical) {
			let e = l - i.top;
			e = Math.max(o.value.offsetHeight / 2, e), e = Math.min(e, i.height - o.value.offsetHeight / 2), u = Math.round((e - o.value.offsetHeight / 2) / (i.height - o.value.offsetHeight) * r);
		} else {
			let e = c - i.left;
			e = Math.max(o.value.offsetWidth / 2, e), e = Math.min(e, i.width - o.value.offsetWidth / 2), u = Math.round((e - o.value.offsetWidth / 2) / (i.width - o.value.offsetWidth) * r);
		}
		e.color.set(t, u);
	}
	function d(i) {
		if (e.disabled) return;
		let { shiftKey: a } = i, o = te(i), s = a ? 10 : 1, c = t === "hue" ? -1 : 1, l = !0;
		switch (o) {
			case L.left:
			case L.down:
				f(-s * c);
				break;
			case L.right:
			case L.up:
				f(s * c);
				break;
			case L.home:
				e.color.set(t, t === "hue" ? r : n);
				break;
			case L.end:
				e.color.set(t, t === "hue" ? n : r);
				break;
			case L.pageDown:
				f(-4 * c);
				break;
			case L.pageUp:
				f(4 * c);
				break;
			default:
				l = !1;
				break;
		}
		l && i.preventDefault();
	}
	function f(i) {
		let a = c.value + i;
		a = a < n ? n : a > r ? r : a, e.color.set(t, a);
	}
	return {
		thumb: o,
		bar: s,
		currentValue: c,
		handleDrag: u,
		handleClick: l,
		handleKeydown: d
	};
}, q = (e, { namespace: n, maxValue: r, bar: a, thumb: o, currentValue: s, handleDrag: c, getBackground: l }) => {
	let u = i(), d = F(n), f = x(0), m = x(0), h = x();
	function g() {
		if (!o.value || e.vertical) return 0;
		let t = u.vnode.el, n = s.value;
		return t ? Math.round(n * (t.offsetWidth - o.value.offsetWidth / 2) / r) : 0;
	}
	function _() {
		if (!o.value) return 0;
		let t = u.vnode.el;
		if (!e.vertical) return 0;
		let n = s.value;
		return t ? Math.round(n * (t.offsetHeight - o.value.offsetHeight / 2) / r) : 0;
	}
	function v() {
		f.value = g(), m.value = _(), h.value = l?.();
	}
	D(() => {
		if (!a.value || !o.value) return;
		let e = {
			drag: (e) => {
				c(e);
			},
			end: (e) => {
				c(e);
			}
		};
		G(a.value, e), G(o.value, e), v();
	}), t(s, () => v()), t(() => e.color.value, () => v());
	let y = p(() => [
		d.b(),
		d.is("vertical", e.vertical),
		d.is("disabled", e.disabled)
	]), b = p(() => d.e("bar")), S = p(() => d.e("thumb"));
	return {
		rootKls: y,
		barKls: b,
		barStyle: p(() => ({ background: h.value })),
		thumbKls: S,
		thumbStyle: p(() => ({
			left: P(f.value),
			top: P(m.value)
		})),
		thumbLeft: f,
		thumbTop: m,
		update: v
	};
}, oe = [
	"aria-label",
	"aria-valuenow",
	"aria-valuetext",
	"aria-orientation",
	"tabindex",
	"aria-disabled"
], J = 0, Y = 100, se = /* @__PURE__ */ u({
	name: "ElColorAlphaSlider",
	__name: "alpha-slider",
	props: ie,
	setup(e, { expose: t }) {
		let n = e, { currentValue: r, bar: i, thumb: a, handleDrag: c, handleClick: u, handleKeydown: d } = K(n, {
			key: "alpha",
			minValue: J,
			maxValue: Y
		}), { rootKls: f, barKls: m, barStyle: h, thumbKls: g, thumbStyle: _, update: v } = q(n, {
			namespace: "color-alpha-slider",
			maxValue: Y,
			currentValue: r,
			bar: i,
			thumb: a,
			handleDrag: c,
			getBackground: C
		}), { t: y } = R(), b = p(() => y("el.colorpicker.alphaLabel")), x = p(() => y("el.colorpicker.alphaDescription", {
			alpha: r.value,
			color: n.color.value
		}));
		function C() {
			if (n.color && n.color.value) {
				let { r: e, g: t, b: r } = n.color.toRgb();
				return `linear-gradient(to right, rgba(${e}, ${t}, ${r}, 0) 0%, rgba(${e}, ${t}, ${r}, 1) 100%)`;
			}
			return "";
		}
		return t({
			update: v,
			bar: i,
			thumb: a
		}), (t, n) => (o(), w("div", { class: s(E(f)) }, [S("div", {
			ref_key: "bar",
			ref: i,
			class: s(E(m)),
			style: l(E(h)),
			onClick: n[0] ||= (...e) => E(u) && E(u)(...e)
		}, null, 6), S("div", {
			ref_key: "thumb",
			ref: a,
			class: s(E(g)),
			style: l(E(_)),
			"aria-label": b.value,
			"aria-valuenow": E(r),
			"aria-valuetext": x.value,
			"aria-orientation": e.vertical ? "vertical" : "horizontal",
			"aria-valuemin": J,
			"aria-valuemax": Y,
			role: "slider",
			tabindex: e.disabled ? void 0 : 0,
			"aria-disabled": e.disabled,
			onKeydown: n[1] ||= (...e) => E(d) && E(d)(...e)
		}, null, 46, oe)], 2));
	}
}), ce = [
	"aria-label",
	"aria-valuenow",
	"aria-valuetext",
	"aria-orientation",
	"tabindex",
	"aria-disabled"
], X = 0, Z = 360, le = /* @__PURE__ */ u({
	name: "ElColorHueSlider",
	__name: "hue-slider",
	props: ae,
	setup(e, { expose: t }) {
		let n = e, { currentValue: r, bar: i, thumb: a, handleDrag: c, handleClick: u, handleKeydown: d } = K(n, {
			key: "hue",
			minValue: X,
			maxValue: Z
		}), { rootKls: f, barKls: m, thumbKls: h, thumbStyle: g, thumbTop: _, update: v } = q(n, {
			namespace: "color-hue-slider",
			maxValue: Z,
			currentValue: r,
			bar: i,
			thumb: a,
			handleDrag: c
		}), { t: y } = R(), b = p(() => y("el.colorpicker.hueLabel")), x = p(() => y("el.colorpicker.hueDescription", {
			hue: r.value,
			color: n.color.value
		}));
		return t({
			bar: i,
			thumb: a,
			thumbTop: _,
			update: v
		}), (t, n) => (o(), w("div", { class: s(E(f)) }, [S("div", {
			ref_key: "bar",
			ref: i,
			class: s(E(m)),
			onClick: n[0] ||= (...e) => E(u) && E(u)(...e)
		}, null, 2), S("div", {
			ref_key: "thumb",
			ref: a,
			class: s(E(h)),
			style: l(E(g)),
			"aria-label": b.value,
			"aria-valuenow": E(r),
			"aria-valuetext": x.value,
			"aria-orientation": e.vertical ? "vertical" : "horizontal",
			"aria-valuemin": X,
			"aria-valuemax": Z,
			role: "slider",
			tabindex: e.disabled ? void 0 : 0,
			"aria-disabled": e.disabled,
			onKeydown: n[1] ||= (...e) => E(d) && E(d)(...e)
		}, null, 46, ce)], 2));
	}
}), ue = j({
	colors: {
		type: M(Array),
		required: !0
	},
	color: {
		type: M(Object),
		required: !0
	},
	enableAlpha: {
		type: Boolean,
		required: !0
	},
	disabled: Boolean
}), Q = class {
	constructor(e = {}) {
		this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this._tiny = new z(), this._isValid = !1, this.enableAlpha = !1, this.format = "", this.value = "";
		for (let t in e) r(e, t) && (this[t] = e[t]);
		e.value ? this.fromString(e.value) : this.doOnChange();
	}
	set(e, t) {
		if (arguments.length === 1 && typeof e == "object") {
			for (let t in e) r(e, t) && this.set(t, e[t]);
			return;
		}
		this[`_${e}`] = t, this._isValid = !0, this.doOnChange();
	}
	get(e) {
		return [
			"hue",
			"saturation",
			"value",
			"alpha"
		].includes(e) ? Math.round(this[`_${e}`]) : this[`_${e}`];
	}
	toRgb() {
		return this._isValid ? this._tiny.toRgb() : {
			r: 255,
			g: 255,
			b: 255,
			a: 0
		};
	}
	fromString(e) {
		let t = new z(e);
		if (this._isValid = t.isValid, t.isValid) {
			let { h: e, s: n, v: r, a: i } = t.toHsv();
			this._hue = e, this._saturation = n * 100, this._value = r * 100, this._alpha = i * 100;
		} else this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100;
		this.doOnChange();
	}
	clear() {
		this._isValid = !1, this.value = "", this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100;
	}
	compare(e) {
		let t = new z({
			h: e._hue,
			s: e._saturation / 100,
			v: e._value / 100,
			a: e._alpha / 100
		});
		return this._tiny.equals(t);
	}
	doOnChange() {
		let { _hue: e, _saturation: t, _value: n, _alpha: r, format: i, enableAlpha: a } = this, o = i || (a ? "rgb" : "hex");
		i === "hex" && a && (o = "hex8"), this._tiny = new z({
			h: e,
			s: t / 100,
			v: n / 100,
			a: r / 100
		}), this.value = this._isValid ? this._tiny.toString(o) : "";
	}
}, de = (e) => {
	let { currentColor: r } = n(U), i = x(o(e.colors, e.color));
	t(() => r.value, (t) => {
		let n = new Q({
			value: t,
			enableAlpha: e.enableAlpha
		});
		i.value.forEach((e) => {
			e.selected = n.compare(e);
		});
	}), _(() => {
		i.value = o(e.colors, e.color);
	});
	function a(t) {
		e.color.fromString(e.colors[t]);
	}
	function o(t, n) {
		return t.map((t) => {
			let r = new Q({
				value: t,
				enableAlpha: e.enableAlpha
			});
			return r.selected = r.compare(n), r;
		});
	}
	return {
		rgbaColors: i,
		handleSelect: a
	};
}, fe = (e) => {
	let t = F("color-predefine"), n = p(() => [t.b(), t.is("disabled", e.disabled)]), r = p(() => t.e("colors"));
	function i(e) {
		return [
			t.e("color-selector"),
			t.is("alpha", e.get("alpha") < 100),
			{ selected: e.selected }
		];
	}
	return {
		rootKls: n,
		colorsKls: r,
		colorSelectorKls: i
	};
}, pe = [
	"disabled",
	"aria-label",
	"onClick"
], me = /* @__PURE__ */ u({
	name: "ElColorPredefine",
	__name: "predefine",
	props: ue,
	setup(e) {
		let t = e, { rgbaColors: n, handleSelect: r } = de(t), { rootKls: i, colorsKls: a, colorSelectorKls: c } = fe(t), { t: u } = R(), d = (e) => u("el.colorpicker.predefineDescription", { value: e });
		return (t, u) => (o(), w("div", { class: s(E(i)) }, [S("div", { class: s(E(a)) }, [(o(!0), w(y, null, f(E(n), (t, n) => (o(), w("button", {
			key: e.colors[n],
			type: "button",
			disabled: e.disabled,
			"aria-label": d(t.value),
			class: s(E(c)(t)),
			onClick: (e) => E(r)(n)
		}, [S("div", { style: l({ backgroundColor: t.value }) }, null, 4)], 10, pe))), 128))], 2)], 2));
	}
}), he = j({
	color: {
		type: M(Object),
		required: !0
	},
	disabled: Boolean
}), ge = (e) => {
	let t = i(), n = x(), r = x(0), a = x(0), o = x("hsl(0, 100%, 50%)"), s = p(() => e.color.get("saturation")), c = p(() => e.color.get("value")), l = p(() => e.color.get("hue"));
	function u(t) {
		e.disabled || (t.target !== n.value && d(t), n.value?.focus({ preventScroll: !0 }));
	}
	function d(n) {
		if (e.disabled) return;
		let i = t.vnode.el.getBoundingClientRect(), { clientX: o, clientY: s } = I(n), c = o - i.left, l = s - i.top;
		c = Math.max(0, c), c = Math.min(c, i.width), l = Math.max(0, l), l = Math.min(l, i.height), a.value = c, r.value = l, e.color.set({
			saturation: c / i.width * 100,
			value: 100 - l / i.height * 100
		});
	}
	function f(t) {
		if (e.disabled) return;
		let { shiftKey: n } = t, r = te(t), i = n ? 10 : 1, a = !0;
		switch (r) {
			case L.left:
				m(-i);
				break;
			case L.right:
				m(i);
				break;
			case L.up:
				h(i);
				break;
			case L.down:
				h(-i);
				break;
			default:
				a = !1;
				break;
		}
		a && t.preventDefault();
	}
	function m(t) {
		let n = s.value + t;
		n = n < 0 ? 0 : n > 100 ? 100 : n, e.color.set("saturation", n);
	}
	function h(t) {
		let n = c.value + t;
		n = n < 0 ? 0 : n > 100 ? 100 : n, e.color.set("value", n);
	}
	return {
		cursorRef: n,
		cursorTop: r,
		cursorLeft: a,
		background: o,
		saturation: s,
		brightness: c,
		hue: l,
		handleClick: u,
		handleDrag: d,
		handleKeydown: f
	};
}, _e = (e, { cursorTop: n, cursorLeft: r, background: a, handleDrag: o }) => {
	let s = i(), c = F("color-svpanel");
	function l() {
		let t = e.color.get("saturation"), i = e.color.get("value"), { clientWidth: o, clientHeight: c } = s.vnode.el;
		r.value = t * o / 100, n.value = (100 - i) * c / 100, a.value = `hsl(${e.color.get("hue")}, 100%, 50%)`;
	}
	return D(() => {
		G(s.vnode.el, {
			drag: (e) => {
				o(e);
			},
			end: (e) => {
				o(e);
			}
		}), l();
	}), t([
		() => e.color.get("hue"),
		() => e.color.get("value"),
		() => e.color.value
	], () => l()), {
		rootKls: p(() => c.b()),
		cursorKls: p(() => c.e("cursor")),
		rootStyle: p(() => ({ backgroundColor: a.value })),
		cursorStyle: p(() => ({
			top: P(n.value),
			left: P(r.value)
		})),
		update: l
	};
}, ve = [
	"tabindex",
	"aria-disabled",
	"aria-label",
	"aria-valuenow",
	"aria-valuetext"
], ye = /* @__PURE__ */ u({
	name: "ElSvPanel",
	__name: "sv-panel",
	props: he,
	setup(e, { expose: t }) {
		let n = e, { cursorRef: r, cursorTop: i, cursorLeft: a, background: c, saturation: u, brightness: d, handleClick: f, handleDrag: m, handleKeydown: h } = ge(n), { rootKls: g, cursorKls: _, rootStyle: v, cursorStyle: y, update: b } = _e(n, {
			cursorTop: i,
			cursorLeft: a,
			background: c,
			handleDrag: m
		}), { t: x } = R(), C = p(() => x("el.colorpicker.svLabel")), T = p(() => x("el.colorpicker.svDescription", {
			saturation: u.value,
			brightness: d.value,
			color: n.color.value
		}));
		return t({ update: b }), (t, n) => (o(), w("div", {
			class: s(E(g)),
			style: l(E(v)),
			onClick: n[1] ||= (...e) => E(f) && E(f)(...e)
		}, [S("div", {
			ref_key: "cursorRef",
			ref: r,
			class: s(E(_)),
			style: l(E(y)),
			tabindex: e.disabled ? void 0 : 0,
			"aria-disabled": e.disabled,
			role: "slider",
			"aria-valuemin": "0,0",
			"aria-valuemax": "100,100",
			"aria-label": C.value,
			"aria-valuenow": `${E(u)},${E(d)}`,
			"aria-valuetext": T.value,
			onKeydown: n[0] ||= (...e) => E(h) && E(h)(...e)
		}, null, 46, ve)], 6));
	}
}), be = (e, n) => {
	let r = g(new Q({
		enableAlpha: e.showAlpha,
		format: e.colorFormat || "",
		value: e.modelValue
	}));
	return t(() => [e.colorFormat, e.showAlpha], () => {
		r.enableAlpha = e.showAlpha, r.format = e.colorFormat || r.format, r.doOnChange(), n(A, r.value);
	}), { color: r };
}, xe = /* @__PURE__ */ u({
	name: "ElColorPickerPanel",
	__name: "color-picker-panel",
	props: B,
	emits: V,
	setup(e, { expose: r, emit: i }) {
		let u = e, f = i, g = F("color-picker-panel"), { formItem: _ } = re(), v = ne(), y = x(), b = x(), O = x(), k = x(), j = x(""), { color: M } = n(H, () => be(u, f), !0);
		function N() {
			M.fromString(j.value), M.value !== j.value && (j.value = M.value);
		}
		function P() {
			u.validateEvent && _?.validate?.("blur").catch(h);
		}
		function I() {
			y.value?.update(), b.value?.update(), O.value?.update();
		}
		return D(() => {
			u.modelValue && (j.value = M.value), c(I);
		}), t(() => u.modelValue, (e) => {
			e !== M.value && (e ? M.fromString(e) : M.clear());
		}), t(() => M.value, (e) => {
			f(A, e), j.value = e, u.validateEvent && _?.validate("change").catch(h);
		}), d(U, { currentColor: p(() => M.value) }), r({
			color: M,
			inputRef: k,
			update: I
		}), (t, n) => (o(), w("div", {
			class: s([
				E(g).b(),
				E(g).is("disabled", E(v)),
				E(g).is("border", e.border)
			]),
			onFocusout: P
		}, [
			S("div", { class: s(E(g).e("wrapper")) }, [C(le, {
				ref_key: "hueRef",
				ref: y,
				color: E(M),
				vertical: "",
				disabled: E(v),
				class: s(["hue-slider", e.hueSliderClass]),
				style: l(e.hueSliderStyle)
			}, null, 8, [
				"color",
				"disabled",
				"class",
				"style"
			]), C(ye, {
				ref_key: "svRef",
				ref: b,
				color: E(M),
				disabled: E(v)
			}, null, 8, ["color", "disabled"])], 2),
			e.showAlpha ? (o(), T(se, {
				key: 0,
				ref_key: "alphaRef",
				ref: O,
				color: E(M),
				disabled: E(v)
			}, null, 8, ["color", "disabled"])) : m("v-if", !0),
			e.predefine ? (o(), T(me, {
				key: 1,
				ref: "predefine",
				"enable-alpha": e.showAlpha,
				color: E(M),
				colors: e.predefine,
				disabled: E(v)
			}, null, 8, [
				"enable-alpha",
				"color",
				"colors",
				"disabled"
			])) : m("v-if", !0),
			S("div", { class: s(E(g).e("footer")) }, [C(E(ee), {
				ref_key: "inputRef",
				ref: k,
				modelValue: j.value,
				"onUpdate:modelValue": n[0] ||= (e) => j.value = e,
				"validate-event": !1,
				size: "small",
				disabled: E(v),
				onChange: N
			}, null, 8, ["modelValue", "disabled"]), a(t.$slots, "footer")], 2)
		], 34));
	}
}), Se = /* @__PURE__ */ e({
	ElColorPickerPanel: () => $,
	ROOT_COMMON_COLOR_INJECTION_KEY: () => H,
	colorPickerPanelContextKey: () => U,
	colorPickerPanelEmits: () => V,
	colorPickerPanelProps: () => B,
	default: () => $
}), $ = O(xe);
//#endregion
export { H as a, Q as i, Se as n, B as o, be as r, $ as t };
