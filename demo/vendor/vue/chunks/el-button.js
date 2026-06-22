globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e } from "./shared/rolldown-runtime.js";
import { A as t, G as n, H as r, J as i, M as a, Mt as o, T as s, U as c, Z as l, _ as u, b as d, ct as f, h as p, ht as m, p as h, tt as g, ut as _, x as v, y, yt as b } from "./vue.runtime.js";
import { i as x, t as S } from "./shared/element-plus/utils/vue/install.js";
import { n as C, r as w } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as T } from "./shared/element-plus/hooks/use-namespace.js";
import { C as E } from "./shared/element-plus-icons.js";
import { a as D } from "./shared/element-plus/utils/vue/icon.js";
import { t as O } from "./el-icon.js";
import { r as k } from "./shared/element-plus/hooks/use-size.js";
import { n as A, r as j } from "./el-form/hooks/use-form-common-props.js";
import { t as M } from "./el-form/hooks/use-form-item.js";
import { t as N } from "./shared/element-plus/hooks/use-deprecated.js";
import { r as P } from "./el-config-provider/constants.js";
import { t as F } from "./shared/tinycolor.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/button/src/button.mjs
var I = [
	"default",
	"primary",
	"success",
	"warning",
	"info",
	"danger",
	"text",
	""
], L = [
	"button",
	"submit",
	"reset"
], R = C({
	size: k,
	disabled: {
		type: Boolean,
		default: void 0
	},
	type: {
		type: String,
		values: I,
		default: ""
	},
	icon: { type: D },
	nativeType: {
		type: String,
		values: L,
		default: "button"
	},
	loading: Boolean,
	loadingIcon: {
		type: D,
		default: () => E
	},
	plain: {
		type: Boolean,
		default: void 0
	},
	text: {
		type: Boolean,
		default: void 0
	},
	link: Boolean,
	bg: Boolean,
	autofocus: Boolean,
	round: {
		type: Boolean,
		default: void 0
	},
	circle: Boolean,
	dashed: {
		type: Boolean,
		default: void 0
	},
	color: String,
	dark: Boolean,
	autoInsertSpace: {
		type: Boolean,
		default: void 0
	},
	tag: {
		type: w([String, Object]),
		default: "button"
	}
}), z = { click: (e) => e instanceof MouseEvent }, B = Symbol("buttonGroupContextKey"), V = (e, n) => {
	N({
		from: "type.text",
		replacement: "link",
		version: "3.0.0",
		scope: "props",
		ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
	}, u(() => e.type === "text"));
	let r = t(B, void 0), i = P("button"), { form: a } = M(), o = j(u(() => r?.size)), s = A(), c = _(), d = l(), f = u(() => e.type || r?.type || i.value?.type || ""), m = u(() => e.autoInsertSpace ?? i.value?.autoInsertSpace ?? !1), h = u(() => e.plain ?? i.value?.plain ?? !1), g = u(() => e.round ?? i.value?.round ?? !1), v = u(() => e.text ?? i.value?.text ?? !1), y = u(() => e.dashed ?? i.value?.dashed ?? !1);
	return {
		_disabled: s,
		_size: o,
		_type: f,
		_ref: c,
		_props: u(() => e.tag === "button" ? {
			ariaDisabled: s.value || e.loading,
			disabled: s.value || e.loading,
			autofocus: e.autofocus,
			type: e.nativeType
		} : {}),
		_plain: h,
		_round: g,
		_text: v,
		_dashed: y,
		shouldAddSpace: u(() => {
			let e = d.default?.();
			if (m.value && e?.length === 1) {
				let t = e[0];
				if (t?.type === p) {
					let e = t.children;
					return /^\p{Unified_Ideograph}{2}$/u.test(e.trim());
				}
			}
			return !1;
		}),
		handleClick: (t) => {
			if (s.value || e.loading) {
				t.stopPropagation();
				return;
			}
			e.nativeType === "reset" && a?.resetFields(), n("click", t);
		}
	};
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/button/src/button-custom.mjs
function H(e, t = 20) {
	return e.mix("#141414", t).toString();
}
function U(e) {
	let t = A(), n = T("button");
	return u(() => {
		let r = {}, i = e.color;
		if (i) {
			let a = i.match(/var\((.*?)\)/);
			a && (i = window.getComputedStyle(window.document.documentElement).getPropertyValue(a[1]));
			let o = new F(i), s = e.dark ? o.tint(20).toString() : H(o, 20);
			if (e.plain) r = n.cssVarBlock({
				"bg-color": e.dark ? H(o, 90) : o.tint(90).toString(),
				"text-color": i,
				"border-color": e.dark ? H(o, 50) : o.tint(50).toString(),
				"hover-text-color": `var(${n.cssVarName("color-white")})`,
				"hover-bg-color": i,
				"hover-border-color": i,
				"active-bg-color": s,
				"active-text-color": `var(${n.cssVarName("color-white")})`,
				"active-border-color": s
			}), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? H(o, 90) : o.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? H(o, 50) : o.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? H(o, 80) : o.tint(80).toString());
			else if (e.link || e.text) {
				let a = e.dark ? H(o, 30) : o.tint(30).toString();
				if (r = n.cssVarBlock({
					"text-color": i,
					"hover-text-color": a,
					"active-text-color": s
				}), e.link && (r[n.cssVarBlockName("hover-link-text-color")] = a, r[n.cssVarBlockName("active-color")] = s), t.value) {
					let t = e.dark ? H(o, 50) : o.tint(50).toString();
					r[n.cssVarBlockName("disabled-bg-color")] = "transparent", r[n.cssVarBlockName("disabled-text-color")] = t, r[n.cssVarBlockName("disabled-border-color")] = "transparent";
				}
			} else {
				let a = e.dark ? H(o, 30) : o.tint(30).toString(), c = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
				if (r = n.cssVarBlock({
					"bg-color": i,
					"text-color": c,
					"border-color": i,
					"hover-bg-color": a,
					"hover-text-color": c,
					"hover-border-color": a,
					"active-bg-color": s,
					"active-border-color": s
				}), t.value) {
					let t = e.dark ? H(o, 50) : o.tint(50).toString();
					r[n.cssVarBlockName("disabled-bg-color")] = t, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = t;
				}
			}
		}
		return r;
	});
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/button/src/button2.mjs
var W = /* @__PURE__ */ s({
	name: "ElButton",
	__name: "button",
	props: R,
	emits: z,
	setup(e, { expose: t, emit: s }) {
		let c = e, l = s, f = U(c), p = T("button"), { _ref: m, _size: _, _type: x, _disabled: S, _props: C, _plain: w, _round: E, _text: D, _dashed: k, shouldAddSpace: A, handleClick: j } = V(c, l), M = u(() => [
			p.b(),
			p.m(x.value),
			p.m(_.value),
			p.is("disabled", S.value),
			p.is("loading", c.loading),
			p.is("plain", w.value),
			p.is("round", E.value),
			p.is("circle", c.circle),
			p.is("text", D.value),
			p.is("dashed", k.value),
			p.is("link", c.link),
			p.is("has-bg", c.bg)
		]);
		return t({
			ref: m,
			size: _,
			type: x,
			disabled: S,
			shouldAddSpace: A
		}), (t, s) => (r(), y(i(e.tag), a({
			ref_key: "_ref",
			ref: m
		}, b(C), {
			class: M.value,
			style: b(f),
			onClick: b(j)
		}), {
			default: g(() => [e.loading ? (r(), v(h, { key: 0 }, [t.$slots.loading ? n(t.$slots, "loading", { key: 0 }) : (r(), y(b(O), {
				key: 1,
				class: o(b(p).is("loading"))
			}, {
				default: g(() => [(r(), y(i(e.loadingIcon)))]),
				_: 1
			}, 8, ["class"]))], 64)) : e.icon || t.$slots.icon ? (r(), y(b(O), { key: 1 }, {
				default: g(() => [e.icon ? (r(), y(i(e.icon), { key: 0 })) : n(t.$slots, "icon", { key: 1 })]),
				_: 3
			})) : d("v-if", !0), t.$slots.default ? (r(), v("span", {
				key: 2,
				class: o({ [b(p).em("text", "expand")]: b(A) })
			}, [n(t.$slots, "default")], 2)) : d("v-if", !0)]),
			_: 3
		}, 16, [
			"class",
			"style",
			"onClick"
		]));
	}
}), G = /* @__PURE__ */ s({
	name: "ElButtonGroup",
	__name: "button-group",
	props: {
		size: R.size,
		type: R.type,
		direction: {
			type: w(String),
			values: ["horizontal", "vertical"],
			default: "horizontal"
		}
	},
	setup(e) {
		let t = e;
		c(B, f({
			size: m(t, "size"),
			type: m(t, "type")
		}));
		let i = T("button");
		return (e, a) => (r(), v("div", { class: o([b(i).b("group"), b(i).bm("group", t.direction)]) }, [n(e.$slots, "default")], 2));
	}
}), K = /* @__PURE__ */ e({
	ElButton: () => q,
	ElButtonGroup: () => J,
	buttonEmits: () => z,
	buttonGroupContextKey: () => B,
	buttonNativeTypes: () => L,
	buttonProps: () => R,
	buttonTypes: () => I,
	default: () => q
}), q = S(W, { ButtonGroup: G }), J = x(G);
//#endregion
export { I as i, J as n, K as r, q as t };
