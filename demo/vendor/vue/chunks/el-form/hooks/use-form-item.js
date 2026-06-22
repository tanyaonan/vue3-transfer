globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, B as n, E as r, _ as i, ht as a, ut as o, z as s } from "../../vue.runtime.js";
import { t as c } from "../../shared/element-plus/hooks/use-id.js";
import { n as l, t as u } from "../constants.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/form/src/hooks/use-form-item.mjs
var d = () => ({
	form: t(u, void 0),
	formItem: t(l, void 0)
}), f = (t, { formItemContext: l, disableIdGeneration: u, disableIdManagement: d }) => {
	u ||= o(!1), d ||= o(!1);
	let f = r(), p = () => {
		let e = f?.parent;
		for (; e;) {
			if (e.type.name === "ElFormItem") return !1;
			if (e.type.name === "ElLabelWrap") return !0;
			e = e.parent;
		}
		return !1;
	}, m = o(), h, g = i(() => !!(!(t.label || t.ariaLabel) && l && l.inputIds && l.inputIds?.length <= 1));
	return s(() => {
		h = e([a(t, "id"), u], ([e, t]) => {
			let n = e ?? (t ? void 0 : c().value);
			n !== m.value && (l?.removeInputId && !p() && (m.value && l.removeInputId(m.value), !d?.value && !t && n && l.addInputId(n)), m.value = n);
		}, { immediate: !0 });
	}), n(() => {
		h && h(), l?.removeInputId && m.value && l.removeInputId(m.value);
	}), {
		isLabeledByFormItem: g,
		inputId: m
	};
};
//#endregion
export { f as n, d as t };
