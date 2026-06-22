globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, F as i, H as a, L as o, U as s, a as c, c as l, d as u, g as d, h as f, i as p, r as m, s as h, u as g, z as _ } from "./vue.runtime.js";
import { j as v, k as y } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { r as b, s as x, t as S } from "./shared/wot-ui/common/props.ts.js";
import { t as C } from "./wd-icon.js";
import { t as w } from "./shared/wot-ui/composables/useGlobalConfig.ts.js";
import { t as T } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-tag/types.ts
var E = {
	...S,
	size: String,
	type: x("default"),
	icon: x(""),
	closable: b(!1),
	dynamic: b(!1),
	color: x(""),
	bgColor: x(""),
	round: {
		type: Boolean,
		default: void 0
	},
	mark: b(!1),
	variant: String
}, D = ["placeholder"], O = /*@__PURE__*/ d({
	name: "wd-tag",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: E,
	emits: [
		"click",
		"close",
		"confirm"
	],
	setup(e, { emit: d, slots: b }) {
		let x = e, S = d, { translate: E } = T("tag"), O = w(), k = h(() => x.size || O.value.tag?.size || "default"), A = h(() => x.variant || O.value.tag?.variant || "dark"), j = h(() => y(x.round) ? y(O.value.tag?.round) ? !1 : O.value.tag?.round : x.round), M = o(""), N = o(!1), P = h(() => {
			let { type: e, mark: t, customClass: n } = x, r = [];
			return e && r.push(`is-${e}`), A.value && r.push(`is-${A.value}`), k.value && r.push(`is-${k.value}`), j.value && r.push("is-round"), t && r.push("is-mark"), `wd-tag ${n} ${r.join(" ")}`;
		}), F = h(() => {
			let e = {};
			return A.value !== "plain" && A.value !== "dashed" && A.value !== "text" && x.bgColor && (e.background = x.bgColor), x.bgColor && (e["border-color"] = x.bgColor), `${v(e)}${x.customStyle}`;
		}), I = h(() => {
			let e = {};
			return x.color && (e.color = x.color), v(e);
		});
		function L(e) {
			S("click", e);
		}
		function R(e) {
			S("close", e);
		}
		function z() {
			N.value = !0, M.value = "";
		}
		function B() {
			H();
		}
		function V(e) {
			H(), S("confirm", { value: e.detail.value });
		}
		function H() {
			N.value = !1;
		}
		return (e, o) => (r(), u("div", {
			class: n(P.value),
			style: a(F.value),
			onClick: L
		}, [N.value && e.dynamic ? i((r(), u("input", {
			key: 0,
			class: "wd-tag__input",
			placeholder: _(E)("placeholder"),
			"placeholder-class": "wd-tag__placeholder",
			type: "text",
			focus: !0,
			"onUpdate:modelValue": o[0] ||= (e) => M.value = e,
			onBlur: B,
			onConfirm: V
		}, null, 40, D)), [[m, M.value]]) : e.dynamic ? (r(), u("div", {
			key: 1,
			class: "wd-tag__text",
			style: a(I.value),
			onClick: p(z, ["stop"])
		}, [t(e.$slots, "add", {}, () => [f(C, {
			name: "plus",
			"custom-class": "wd-tag__add"
		}), l("span", null, s(_(E)("add")), 1)])], 4)) : (r(), u(c, { key: 2 }, [
			b.icon || e.icon ? t(e.$slots, "icon", { key: 0 }, () => [f(C, {
				name: e.icon,
				"custom-class": "wd-tag__icon"
			}, null, 8, ["name"])]) : g("", !0),
			b.default ? (r(), u("div", {
				key: 1,
				class: "wd-tag__text",
				style: a(I.value)
			}, [t(e.$slots, "default")], 4)) : g("", !0),
			e.closable ? (r(), u("div", {
				key: 2,
				class: "wd-tag__close",
				onClick: p(R, ["stop"])
			}, [f(C, {
				name: "close",
				"custom-class": "wd-tag__close-icon"
			})])) : g("", !0)
		], 64))], 6));
	}
}), k = /* @__PURE__ */ e({ default: () => A }), A = O;
//#endregion
export { k as n, A as t };
