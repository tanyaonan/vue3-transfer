globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { $ as t, Ft as n, G as r, H as i, I as a, J as o, M as s, Mt as c, N as l, Ot as ee, Pt as u, T as te, X as ne, Z as d, _ as f, b as p, bt as m, d as h, ht as re, jt as g, ot as _, p as ie, pt as ae, tt as v, ut as y, v as b, x, y as S, yt as C, z as oe } from "./vue.runtime.js";
import { t as w } from "./shared/element-plus/utils/vue/install.js";
import { t as se } from "./shared/element-plus/hooks/use-aria.js";
import { i as T, l as ce } from "./shared/element-plus/utils/types.js";
import { n as le, r as E, t as ue } from "./shared/element-plus/constants/event.js";
import { n as de, r as D } from "./shared/element-plus/utils/vue/props/runtime.js";
import { t as fe } from "./shared/element-plus/utils/error.js";
import { _ as pe, d as me } from "./shared/vueuse.js";
import { n as O } from "./shared/element-plus/utils/browser.js";
import { n as he, t as ge } from "./shared/element-plus/utils/raf.js";
import { r as _e } from "./shared/element-plus/hooks/use-namespace.js";
import { f as k, x as ve, z as ye } from "./shared/element-plus-icons.js";
import { a as A, i as be } from "./shared/element-plus/utils/vue/icon.js";
import { t as j } from "./el-icon.js";
import { t as M } from "./shared/element-plus/utils/typescript.js";
import { r as xe } from "./shared/element-plus/hooks/use-size.js";
import { n as Se, r as Ce } from "./el-form/hooks/use-form-common-props.js";
import { t as we } from "./shared/element-plus/hooks/use-attrs.js";
import { n as Te, t as Ee } from "./shared/element-plus/hooks/use-focus-controller.js";
import { n as De, t as Oe } from "./el-form/hooks/use-form-item.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input/src/input.mjs
var N = de({
	id: {
		type: String,
		default: void 0
	},
	size: xe,
	disabled: {
		type: Boolean,
		default: void 0
	},
	modelValue: {
		type: D([
			String,
			Number,
			Object
		]),
		default: ""
	},
	modelModifiers: {
		type: D(Object),
		default: () => ({})
	},
	maxlength: { type: [String, Number] },
	minlength: { type: [String, Number] },
	type: {
		type: D(String),
		default: "text"
	},
	resize: {
		type: String,
		values: [
			"none",
			"both",
			"horizontal",
			"vertical"
		]
	},
	autosize: {
		type: D([Boolean, Object]),
		default: !1
	},
	autocomplete: {
		type: D(String),
		default: "off"
	},
	formatter: { type: Function },
	parser: { type: Function },
	placeholder: { type: String },
	form: { type: String },
	readonly: Boolean,
	clearable: Boolean,
	clearIcon: {
		type: A,
		default: k
	},
	showPassword: Boolean,
	showWordLimit: Boolean,
	wordLimitPosition: {
		type: String,
		values: ["inside", "outside"],
		default: "inside"
	},
	suffixIcon: { type: A },
	prefixIcon: { type: A },
	containerRole: {
		type: String,
		default: void 0
	},
	tabindex: {
		type: [String, Number],
		default: 0
	},
	validateEvent: {
		type: Boolean,
		default: !0
	},
	inputStyle: {
		type: D([
			Object,
			Array,
			String,
			Boolean
		]),
		default: () => M({})
	},
	countGraphemes: { type: D(Function) },
	autofocus: Boolean,
	rows: {
		type: Number,
		default: 2
	},
	...se(["ariaLabel"]),
	inputmode: {
		type: D(String),
		default: void 0
	},
	name: String
}), P = {
	[E]: (e) => g(e),
	input: (e) => g(e),
	change: (e, t) => g(e) && (t instanceof Event || t === void 0),
	focus: (e) => e instanceof FocusEvent,
	blur: (e) => e instanceof FocusEvent,
	clear: (e) => e === void 0 || e instanceof MouseEvent,
	mouseleave: (e) => e instanceof MouseEvent,
	mouseenter: (e) => e instanceof MouseEvent,
	keydown: (e) => e instanceof Event,
	compositionstart: (e) => e instanceof CompositionEvent,
	compositionupdate: (e) => e instanceof CompositionEvent,
	compositionend: (e) => e instanceof CompositionEvent
}, F = {
	disabled: void 0,
	modelValue: "",
	modelModifiers: () => ({}),
	type: "text",
	autocomplete: "off",
	clearIcon: _(k),
	wordLimitPosition: "inside",
	tabindex: 0,
	validateEvent: !0,
	inputStyle: () => ({}),
	rows: 2
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/hooks/use-cursor/index.mjs
function ke(e) {
	let t;
	function n() {
		if (e.value == null) return;
		let { selectionStart: n, selectionEnd: r, value: i } = e.value;
		n == null || r == null || (t = {
			selectionStart: n,
			selectionEnd: r,
			value: i,
			beforeTxt: i.slice(0, Math.max(0, n)),
			afterTxt: i.slice(Math.max(0, r))
		});
	}
	function r() {
		if (e.value == null || t == null) return;
		let { value: n } = e.value, { beforeTxt: r, afterTxt: i, selectionStart: a } = t;
		if (r == null || i == null || a == null) return;
		let o = n.length;
		if (n.endsWith(i)) o = n.length - i.length;
		else if (n.startsWith(r)) o = r.length;
		else {
			let e = r[a - 1], t = n.indexOf(e, a - 1);
			t !== -1 && (o = t + 1);
		}
		e.value.setSelectionRange(o, o);
	}
	return [n, r];
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input/src/utils.mjs
var I = void 0, L = {
	height: "0",
	visibility: "hidden",
	overflow: O() ? "" : "hidden",
	position: "absolute",
	"z-index": "-1000",
	top: "0",
	right: "0"
}, R = [
	"letter-spacing",
	"line-height",
	"padding-top",
	"padding-bottom",
	"font-family",
	"font-weight",
	"font-size",
	"text-rendering",
	"text-transform",
	"width",
	"text-indent",
	"padding-left",
	"padding-right",
	"border-width",
	"box-sizing",
	"word-break"
], Ae = (e) => {
	let t = Number.parseFloat(e);
	return Number.isNaN(t) ? e : t;
};
function z(e) {
	let t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), i = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
	return {
		contextStyle: R.map((e) => [e, t.getPropertyValue(e)]),
		paddingSize: r,
		borderSize: i,
		boxSizing: n
	};
}
function je(e, t = 1, n) {
	if (!I) {
		I = document.createElement("textarea");
		let t = document.body;
		!O() && e.parentNode && (t = e.parentNode), t.appendChild(I);
	}
	let { paddingSize: r, borderSize: i, boxSizing: a, contextStyle: o } = z(e);
	o.forEach(([e, t]) => I?.style.setProperty(e, t)), Object.entries(L).forEach(([e, t]) => I?.style.setProperty(e, t, "important")), I.value = e.value || e.placeholder || "";
	let s = I.scrollHeight, c = {};
	a === "border-box" ? s += i : a === "content-box" && (s -= r), I.value = "";
	let l = I.scrollHeight - r;
	if (T(t)) {
		let e = l * t;
		a === "border-box" && (e = e + r + i), s = Math.max(e, s), c.minHeight = `${e}px`;
	}
	if (T(n)) {
		let e = l * n;
		a === "border-box" && (e = e + r + i), s = Math.min(e, s);
	}
	return c.height = `${s}px`, I.parentNode?.removeChild(I), I = void 0, c;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/input/src/input.vue_vue_type_script_setup_true_lang.mjs
var Me = [
	"id",
	"name",
	"minlength",
	"maxlength",
	"type",
	"disabled",
	"readonly",
	"autocomplete",
	"tabindex",
	"aria-label",
	"placeholder",
	"form",
	"autofocus",
	"role",
	"inputmode"
], Ne = [
	"id",
	"name",
	"minlength",
	"maxlength",
	"tabindex",
	"disabled",
	"readonly",
	"autocomplete",
	"aria-label",
	"placeholder",
	"form",
	"autofocus",
	"rows",
	"role",
	"inputmode"
], Pe = "ElInput", B = /* @__PURE__ */ te({
	name: Pe,
	inheritAttrs: !1,
	__name: "input",
	props: N,
	emits: P,
	setup(e, { expose: te, emit: g }) {
		let _ = e, w = g, se = ne(), T = d(), de = f(() => [
			_.type === "textarea" ? I.b() : F.b(),
			F.m(N.value),
			F.is("disabled", P.value),
			F.is("exceed", Je.value),
			{
				[F.b("group")]: T.prepend || T.append,
				[F.m("prefix")]: T.prefix || _.prefixIcon,
				[F.m("suffix")]: T.suffix || _.suffixIcon || _.clearable || _.showPassword,
				[F.bm("suffix", "password-clear")]: J.value && Ke.value,
				[F.b("hidden")]: _.type === "hidden"
			},
			se.class
		]), D = f(() => [F.e("wrapper"), F.is("focus", Le.value)]), O = we(), k = f(() => _.maxlength?.toString()), { form: A, formItem: M } = Oe(), { inputId: xe } = De(_, { formItemContext: M }), N = Ce(), P = Se(), F = _e("input"), I = _e("textarea"), L = ae(), R = ae(), z = y(!1), B = y(!1), Fe = y(), V = y(), H = ae(_.inputStyle), U = y(""), W = y(), G = f(() => L.value || R.value), { wrapperRef: Ie, isFocused: Le, handleFocus: Re, handleBlur: ze } = Te(G, {
			disabled: P,
			afterBlur() {
				_.validateEvent && M?.validate?.("blur").catch(m);
			}
		}), Be = f(() => A?.statusIcon ?? !1), K = f(() => M?.validateState || ""), Ve = f(() => K.value && be[K.value]), He = f(() => B.value ? ye : ve), Ue = f(() => [se.style]), We = f(() => [
			_.inputStyle,
			H.value,
			{ resize: _.resize },
			W.value ? { height: W.value } : void 0
		]), q = f(() => ce(_.modelValue) ? "" : String(_.modelValue)), Ge = f(() => _.clearable && !P.value && !_.readonly), J = f(() => Ge.value && !!q.value && (Le.value || z.value)), Ke = f(() => _.showPassword && !P.value && !!q.value), Y = f(() => _.showWordLimit && !!k.value && (_.type === "text" || _.type === "textarea") && !P.value && !_.readonly && !_.showPassword), qe = f(() => _.countGraphemes && _.showWordLimit ? _.countGraphemes(q.value) : q.value.length), Je = f(() => !!Y.value && qe.value > Number(k.value)), Ye = f(() => !!T.suffix || !!_.suffixIcon || _.clearable || _.showPassword || Y.value || !!K.value && Be.value), Xe = f(() => !!Object.keys(_.modelModifiers).length), [Ze, Qe] = ke(L), X;
		me(R, (e) => {
			if ($e(), !Y.value && !Ge.value || _.resize !== "both" && _.resize !== "horizontal") return;
			let { width: t } = e[0].target.getBoundingClientRect();
			X && ge(X), X = he(() => {
				X = void 0, Fe.value = { right: `calc(100% - ${t - 10}px)` }, V.value = { right: `calc(100% - ${t - 11}px)` };
			});
		});
		let Z = () => {
			let { type: e, autosize: t } = _;
			if (!(!pe || e !== "textarea" || !R.value)) if (t) {
				let e = ee(t) ? t.minRows : void 0, n = ee(t) ? t.maxRows : void 0, r = je(R.value, e, n);
				H.value = {
					overflowY: "hidden",
					...r
				}, l(() => {
					R.value.offsetHeight, H.value = r;
				});
			} else H.value = { minHeight: je(R.value).minHeight };
		}, $e = ((e) => {
			let t = !1;
			return () => {
				if (t || !_.autosize) {
					_.resize !== "none" && setTimeout(() => {
						W.value = R.value?.style.height;
					});
					return;
				}
				R.value?.offsetParent !== null && (setTimeout(e), t = !0);
			};
		})(Z), Q = () => {
			let e = G.value, t = _.formatter ? _.formatter(q.value) : q.value;
			!e || e.value === t || _.type === "file" || (e.value = t);
		}, et = (e) => {
			let { trim: t, number: n } = _.modelModifiers;
			return t && (e = e.trim()), n && (e = `${Ae(e)}`), _.formatter && _.parser && (e = _.parser(e)), e;
		}, tt = async (e) => {
			if (rt.value) return;
			let { lazy: t } = _.modelModifiers, { value: n } = e.target, r = !1;
			if (t) {
				w(le, n);
				return;
			}
			if (n = et(n), _.countGraphemes && k.value != null) {
				let e = Number(k.value), t = _.countGraphemes(n), i = _.countGraphemes(U.value);
				if (t > e && t > i) if (i > e) n = U.value, r = !0;
				else {
					let t = U.value, a = n, o = 0;
					for (; o < t.length && o < a.length && t[o] === a[o];) o++;
					let s = t.length, c = a.length;
					for (; s > o && c > o && t[s - 1] === a[c - 1];) s--, c--;
					let l = a.slice(0, o), ee = t.slice(o, s), u = a.slice(o, c), te = a.slice(c), ne = i - _.countGraphemes(ee), d = Math.max(0, e - ne), f = "";
					if (d > 0) if (typeof Intl < "u" && "Segmenter" in Intl) {
						let e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
						for (let { segment: t } of e.segment(u)) {
							let e = f + t;
							if (_.countGraphemes(e) > d) break;
							f = e;
						}
					} else for (let e of Array.from(u)) {
						let t = f + e;
						if (_.countGraphemes(t) > d) break;
						f = t;
					}
					n = l + f + te, r = !0;
				}
			}
			if (String(n) === q.value) {
				if (_.formatter || r) {
					let t = e.target, n = t.value, i = t.selectionStart, a = t.selectionEnd;
					if (Q(), r && G.value && i != null && a != null) {
						let e = G.value.value, t = n.slice(Math.max(0, a)), r = Math.min(i, e.length);
						t && e.endsWith(t) && (r = e.length - t.length), G.value.setSelectionRange(r, r);
					}
				}
				return;
			}
			U.value = n, Ze(), w(E, n), w(le, n), await l(), (_.formatter && _.parser || !Xe.value) && Q(), Qe();
		}, nt = async (e) => {
			let { value: t } = e.target;
			t = et(t), _.modelModifiers.lazy && w(E, t), w(ue, t, e), await l(), Q();
		}, { isComposing: rt, handleCompositionStart: $, handleCompositionUpdate: it, handleCompositionEnd: at } = Ee({
			emit: w,
			afterComposition: tt
		}), ot = () => {
			B.value = !B.value;
		}, st = () => G.value?.focus(), ct = () => G.value?.blur(), lt = (e) => {
			z.value = !1, w("mouseleave", e);
		}, ut = (e) => {
			z.value = !0, w("mouseenter", e);
		}, dt = (e) => {
			w("keydown", e);
		}, ft = () => {
			G.value?.select();
		}, pt = (e) => {
			w(E, ""), w(ue, ""), w("clear", e), w(le, "");
		};
		return t(() => _.modelValue, () => {
			l(() => {
				Z(), _.autosize && (W.value = void 0);
			}), _.validateEvent && M?.validate?.("change").catch(m);
		}), t(() => q.value, (e) => {
			U.value = e;
		}, { immediate: !0 }), t(q, (e) => {
			if (!G.value) return;
			let { trim: t, number: n } = _.modelModifiers, r = G.value.value, i = (n || _.type === "number") && !/^0\d/.test(r) ? `${Ae(r)}` : r;
			i !== e && (document.activeElement === G.value && G.value.type !== "range" && t && i.trim() === e || Q());
		}), t(() => _.type, async () => {
			await l(), Q(), Z();
		}), oe(() => {
			!_.formatter && _.parser && fe(Pe, "If you set the parser, you also need to set the formatter."), Q(), l(Z);
		}), a(() => {
			X && ge(X);
		}), te({
			input: L,
			textarea: R,
			ref: G,
			textareaStyle: We,
			autosize: re(_, "autosize"),
			isComposing: rt,
			passwordVisible: B,
			focus: st,
			blur: ct,
			select: ft,
			clear: pt,
			resizeTextarea: Z
		}), (t, a) => (i(), x("div", {
			class: c([de.value, {
				[C(F).bm("group", "append")]: t.$slots.append,
				[C(F).bm("group", "prepend")]: t.$slots.prepend
			}]),
			style: u(Ue.value),
			onMouseenter: ut,
			onMouseleave: lt
		}, [p(" input "), e.type === "textarea" ? (i(), x(ie, { key: 1 }, [
			p(" textarea "),
			b("textarea", s({
				id: C(xe),
				ref_key: "textarea",
				ref: R,
				class: [
					C(I).e("inner"),
					C(F).is("focus", C(Le)),
					C(I).is("clearable", e.clearable)
				]
			}, C(O), {
				name: e.name,
				minlength: e.countGraphemes ? void 0 : e.minlength,
				maxlength: e.countGraphemes ? void 0 : k.value,
				tabindex: e.tabindex,
				disabled: C(P),
				readonly: e.readonly,
				autocomplete: e.autocomplete,
				style: We.value,
				"aria-label": e.ariaLabel,
				placeholder: e.placeholder,
				form: e.form,
				autofocus: e.autofocus,
				rows: e.rows,
				role: e.containerRole,
				inputmode: e.inputmode,
				onCompositionstart: a[3] ||= (...e) => C($) && C($)(...e),
				onCompositionupdate: a[4] ||= (...e) => C(it) && C(it)(...e),
				onCompositionend: a[5] ||= (...e) => C(at) && C(at)(...e),
				onInput: tt,
				onFocus: a[6] ||= (...e) => C(Re) && C(Re)(...e),
				onBlur: a[7] ||= (...e) => C(ze) && C(ze)(...e),
				onChange: nt,
				onKeydown: dt
			}), null, 16, Ne),
			J.value ? (i(), S(C(j), {
				key: 0,
				class: c([C(I).e("icon"), C(I).e("clear")]),
				style: u(V.value),
				onMousedown: h(C(m), ["prevent"]),
				onClick: pt
			}, {
				default: v(() => [(i(), S(o(e.clearIcon)))]),
				_: 1
			}, 8, [
				"class",
				"style",
				"onMousedown"
			])) : p("v-if", !0),
			Y.value ? (i(), x("span", {
				key: 1,
				style: u(Fe.value),
				class: c([C(F).e("count"), C(F).is("outside", e.wordLimitPosition === "outside")])
			}, n(qe.value) + " / " + n(k.value), 7)) : p("v-if", !0)
		], 64)) : (i(), x(ie, { key: 0 }, [
			p(" prepend slot "),
			t.$slots.prepend ? (i(), x("div", {
				key: 0,
				class: c(C(F).be("group", "prepend"))
			}, [r(t.$slots, "prepend")], 2)) : p("v-if", !0),
			b("div", {
				ref_key: "wrapperRef",
				ref: Ie,
				class: c(D.value)
			}, [
				p(" prefix slot "),
				t.$slots.prefix || e.prefixIcon ? (i(), x("span", {
					key: 0,
					class: c(C(F).e("prefix"))
				}, [b("span", { class: c(C(F).e("prefix-inner")) }, [r(t.$slots, "prefix"), e.prefixIcon ? (i(), S(C(j), {
					key: 0,
					class: c(C(F).e("icon"))
				}, {
					default: v(() => [(i(), S(o(e.prefixIcon)))]),
					_: 1
				}, 8, ["class"])) : p("v-if", !0)], 2)], 2)) : p("v-if", !0),
				b("input", s({
					id: C(xe),
					ref_key: "input",
					ref: L,
					class: C(F).e("inner")
				}, C(O), {
					name: e.name,
					minlength: e.countGraphemes ? void 0 : e.minlength,
					maxlength: e.countGraphemes ? void 0 : k.value,
					type: e.showPassword ? B.value ? "text" : "password" : e.type,
					disabled: C(P),
					readonly: e.readonly,
					autocomplete: e.autocomplete,
					tabindex: e.tabindex,
					"aria-label": e.ariaLabel,
					placeholder: e.placeholder,
					style: e.inputStyle,
					form: e.form,
					autofocus: e.autofocus,
					role: e.containerRole,
					inputmode: e.inputmode,
					onCompositionstart: a[0] ||= (...e) => C($) && C($)(...e),
					onCompositionupdate: a[1] ||= (...e) => C(it) && C(it)(...e),
					onCompositionend: a[2] ||= (...e) => C(at) && C(at)(...e),
					onInput: tt,
					onChange: nt,
					onKeydown: dt
				}), null, 16, Me),
				p(" suffix slot "),
				Ye.value ? (i(), x("span", {
					key: 1,
					class: c(C(F).e("suffix"))
				}, [b("span", { class: c(C(F).e("suffix-inner")) }, [
					Ge.value ? (i(), S(C(j), {
						key: 0,
						class: c([C(F).e("icon"), C(F).e("clear")]),
						style: u({ visibility: J.value ? "visible" : "hidden" }),
						onMousedown: h(C(m), ["prevent"]),
						onClick: pt
					}, {
						default: v(() => [(i(), S(o(e.clearIcon)))]),
						_: 1
					}, 8, [
						"class",
						"style",
						"onMousedown"
					])) : p("v-if", !0),
					!J.value || !Ke.value || !Y.value ? (i(), x(ie, { key: 1 }, [r(t.$slots, "suffix"), e.suffixIcon ? (i(), S(C(j), {
						key: 0,
						class: c(C(F).e("icon"))
					}, {
						default: v(() => [(i(), S(o(e.suffixIcon)))]),
						_: 1
					}, 8, ["class"])) : p("v-if", !0)], 64)) : p("v-if", !0),
					Ke.value ? (i(), S(C(j), {
						key: 2,
						class: c([C(F).e("icon"), C(F).e("password")]),
						onClick: ot,
						onMousedown: h(C(m), ["prevent"]),
						onMouseup: h(C(m), ["prevent"])
					}, {
						default: v(() => [r(t.$slots, "password-icon", { visible: B.value }, () => [(i(), S(o(He.value)))])]),
						_: 3
					}, 8, [
						"class",
						"onMousedown",
						"onMouseup"
					])) : p("v-if", !0),
					Y.value ? (i(), x("span", {
						key: 3,
						class: c([C(F).e("count"), C(F).is("outside", e.wordLimitPosition === "outside")])
					}, [b("span", { class: c(C(F).e("count-inner")) }, n(qe.value) + " / " + n(k.value), 3)], 2)) : p("v-if", !0),
					K.value && Ve.value && Be.value ? (i(), S(C(j), {
						key: 4,
						class: c([
							C(F).e("icon"),
							C(F).e("validateIcon"),
							C(F).is("loading", K.value === "validating")
						])
					}, {
						default: v(() => [(i(), S(o(Ve.value)))]),
						_: 1
					}, 8, ["class"])) : p("v-if", !0)
				], 2)], 2)) : p("v-if", !0)
			], 2),
			p(" append slot "),
			t.$slots.append ? (i(), x("div", {
				key: 1,
				class: c(C(F).be("group", "append"))
			}, [r(t.$slots, "append")], 2)) : p("v-if", !0)
		], 64))], 38));
	}
}), Fe = /* @__PURE__ */ e({
	ElInput: () => V,
	default: () => V,
	inputEmits: () => P,
	inputProps: () => N,
	inputPropsDefaults: () => F
}), V = w(B);
//#endregion
export { Fe as n, N as r, V as t };
