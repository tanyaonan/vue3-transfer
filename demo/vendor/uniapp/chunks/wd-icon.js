globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { B as t, D as n, H as r, d as i, g as a, s as o, u as s } from "./vue.runtime.js";
import { j as c, t as l, y as u } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as d, s as f, t as p } from "./shared/wot-ui/common/props.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-icon/types.ts
var m = {
	...p,
	name: f(""),
	color: String,
	size: d,
	classPrefix: f("wd-icon"),
	cssIcon: {
		type: [Boolean, String],
		default: !1
	}
}, h = ["src"], g = /*@__PURE__*/ a({
	name: "wd-icon",
	options: {
		virtualHost: !0,
		externalClasses: ["custom-class"],
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: m,
	emits: ["click", "touch"],
	setup(e, { emit: a }) {
		let d = e, f = a, p = o(() => !d.cssIcon && u(d.name) && d.name.includes("/")), m = o(() => {
			let e = { "wd-icon": !0 };
			return d.cssIcon ? (e["wd-icon--css"] = !0, typeof d.cssIcon == "string" ? e[d.cssIcon] = !0 : e[d.name] = !0) : p.value ? e["wd-icon--image"] = !0 : (e[d.classPrefix] = !0, e[`${d.classPrefix}-${d.name}`] = !0), t([e, d.customClass]);
		}), g = o(() => {
			let e = {};
			if (d.color && (e.color = d.color), d.size) {
				let t = l(d.size);
				e["font-size"] = t, (d.cssIcon || p.value) && (e.width = t, e.height = t);
			}
			return `${c(e)} ${d.customStyle}`;
		});
		function _(e) {
			f("click", e);
		}
		return (e, a) => (n(), i("div", {
			class: t(m.value),
			style: r(g.value),
			onClick: _
		}, [p.value ? (n(), i("img", {
			key: 0,
			class: "wd-icon__image",
			src: e.name
		}, null, 8, h)) : s("", !0)], 6));
	}
}), _ = /* @__PURE__ */ e({ default: () => v }), v = g;
//#endregion
export { _ as n, v as t };
