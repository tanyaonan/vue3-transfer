globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, L as a, M as o, U as s, d as c, g as l, l as u, s as d, u as f } from "./vue.runtime.js";
import { O as p, f as m, j as h, t as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { s as v, t as y } from "./shared/wot-ui/common/props.ts.js";
import { t as b } from "./wd-icon.js";
import { t as x } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as S } from "./wd-img.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-avatar/types.ts
var C = {
	...y,
	src: v(""),
	text: v(""),
	size: { type: [String, Number] },
	shape: String,
	bgColor: v(""),
	color: v(""),
	icon: v(""),
	alt: v(""),
	mode: v("aspectFill"),
	_internal: Boolean
}, w = Symbol("wd-avatar-group"), T = {
	...y,
	maxCount: Number,
	cascading: v("left-up"),
	shape: {
		type: String,
		default: "round"
	},
	size: {
		type: [String, Number],
		default: "normal"
	},
	collapseAvatar: v(""),
	vertical: Boolean
}, E = {
	key: 2,
	class: "wd-avatar__text"
}, D = /*@__PURE__*/ l({
	name: "wd-avatar",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: C,
	emits: ["error", "click"],
	setup(e, { emit: l }) {
		let v = e, y = l, C = o(), { parent: T, index: D } = v._internal ? {
			parent: a(null),
			index: a(-1)
		} : x(w), O = d(() => {
			if (!T.value) return !0;
			let e = T.value.props.maxCount;
			if (!_(e)) return !0;
			let t = typeof e == "number" ? e : parseInt(e, 10);
			return isNaN(t) || t <= 0 ? !0 : D.value < t;
		}), k = d(() => v.size || m(T.value, "props.size") || "normal"), A = d(() => p(k.value) && [
			"large",
			"medium",
			"normal",
			"small"
		].includes(k.value)), j = d(() => v.shape || m(T.value, "props.shape") || "round"), M = d(() => !!C.default), N = d(() => {
			let e = ["wd-avatar", v.customClass];
			return e.push(`is-${j.value}`), A.value && e.push(`wd-avatar--${k.value}`), T.value && (e.push("wd-avatar__group-item"), T.value.props.vertical && e.push("wd-avatar__group-item--vertical")), e.join(" ");
		}), P = d(() => {
			let e = {};
			if (_(k.value) && !A.value && (e.width = g(k.value), e.height = g(k.value), e.fontSize = `calc(${g(k.value)} * 0.45)`, T.value && (e["--wot-avatar-overlap"] = `calc(${g(k.value)} * -0.25)`)), T.value) {
				let t = T.value.props.cascading;
				if (t === "left-up") e.zIndex = D.value + 1;
				else if (t === "right-up") {
					let t = T.value.props.maxCount, n = T.value.children ? T.value.children.length : 0;
					if (_(t)) {
						let e = typeof t == "number" ? t : parseInt(t, 10);
						!isNaN(e) && e > 0 && (n = e);
					}
					e.zIndex = n - D.value;
				}
			}
			return v.color && (e.color = v.color), v.bgColor && (e.background = v.bgColor, v.color || (e.color = "#fff")), `${h(e)} ${v.customStyle}`;
		}), F = (e) => {
			y("error", e);
		}, I = () => {
			y("click");
		};
		return (e, a) => O.value ? (r(), c("div", {
			key: 0,
			class: n(N.value),
			style: i(P.value),
			onClick: I
		}, [M.value ? t(e.$slots, "default", { key: 0 }) : e.src ? (r(), u(S, {
			key: 1,
			src: e.src,
			mode: e.mode,
			"custom-class": "wd-avatar__img",
			onError: F
		}, null, 8, ["src", "mode"])) : e.text ? (r(), c("span", E, s(e.text), 1)) : e.icon ? (r(), u(b, {
			key: 3,
			name: e.icon,
			"custom-class": "wd-avatar__icon"
		}, null, 8, ["name"])) : f("", !0)], 6)) : f("", !0);
	}
}), O = /* @__PURE__ */ e({ default: () => k }), k = D;
//#endregion
export { T as i, O as n, w as r, k as t };
