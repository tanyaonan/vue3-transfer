globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, U as i, c as a, d as o, g as s, l as c, s as l, u, z as d } from "./vue.runtime.js";
import { j as f, y as p } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { t as m } from "./shared/wot-ui/common/props.ts.js";
import { t as h } from "./wd-icon.js";
import { t as g } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as _ } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as v } from "./shared/wot-ui/components/wd-steps/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-step/types.ts
var y = {
	...m,
	title: String,
	description: String,
	icon: String,
	status: String
}, b = {
	key: 0,
	class: "wd-step__dot"
}, x = {
	key: 2,
	class: "wd-step__circle"
}, S = {
	key: 2,
	class: "wd-step__circle-text"
}, C = {
	key: 0,
	class: "wd-step__line"
}, w = {
	key: 0,
	class: "wd-step__content"
}, T = { class: "wd-step__title" }, E = { class: "wd-step__description" }, D = /* @__PURE__ */ s({
	name: "wd-step",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: y,
	setup(s, { slots: m }) {
		let y = s, { parent: D, index: O } = g(v), { translate: k } = _("steps"), A = l(() => L(O.value)), j = l(() => R(A.value)), M = l(() => {
			let e = {};
			if (D.value) {
				let { vertical: t, space: n } = D.value.props;
				t ? n && n !== "" && (e.height = n) : e.width = n && n !== "" ? n : 100 / D.value.children.length + "%";
			}
			return `${f(e)}${y.customStyle}`;
		}), N = l(() => {
			if (p(D.value)) {
				let { vertical: e, alignCenter: t } = D.value.props;
				return !!(!e && t);
			} else return !1;
		}), P = l(() => p(D.value) ? !!D.value.props.vertical : !1), F = l(() => p(D.value) ? !!D.value.props.dot : !1), I = l(() => p(D.value) ? Number(D.value.children.length) : 0);
		function L(e) {
			if (y.status) return y.status;
			if (D.value) {
				let { active: t } = D.value.props;
				return Number(t) > e ? "finished" : Number(t) === e ? "process" : "wait";
			} else return "wait";
		}
		function R(e) {
			if (y.title) return y.title;
			switch (e) {
				case "finished": return k("finished");
				case "error": return k("failed");
				case "process": return k("process");
				default: return k("wait");
			}
		}
		return (s, l) => A.value ? (n(), o("div", {
			key: 0,
			class: t(`wd-step wd-step--${A.value} ${s.customClass} ${N.value ? "is-center" : ""}  ${P.value ? "is-vertical" : ""}`),
			style: r(M.value)
		}, [a("div", { class: t(`wd-step__header ${F.value ? "is-dot" : ""}`) }, [a("div", { class: t(`wd-step__indicator  ${F.value ? "is-dot" : s.icon || m.icon ? "is-icon" : "is-text"}`) }, [F.value ? (n(), o("div", b)) : m.icon || s.icon ? e(s.$slots, "icon", { key: 1 }, () => [s.icon ? (n(), c(h, {
			key: 0,
			"custom-class": "wd-step__icon",
			name: s.icon
		}, null, 8, ["name"])) : u("", !0)]) : (n(), o("div", x, [A.value === "finished" ? (n(), c(h, {
			key: 0,
			"custom-class": "wd-step__finished-icon",
			name: "check"
		})) : A.value === "error" ? (n(), c(h, {
			key: 1,
			"custom-class": "wd-step__error-icon",
			name: "close"
		})) : (n(), o("span", S, i(d(O) + 1), 1))]))], 2), d(O) < I.value - 1 ? (n(), o("div", C)) : u("", !0)], 2), m.title || j.value || m.description || s.description ? (n(), o("div", w, [m.title || j.value ? e(s.$slots, "title", { key: 0 }, () => [a("span", T, i(j.value), 1)]) : u("", !0), m.description || s.description ? e(s.$slots, "description", { key: 1 }, () => [a("span", E, i(s.description), 1)]) : u("", !0)])) : u("", !0)], 6)) : u("", !0);
	}
});
//#endregion
export { D as default };
