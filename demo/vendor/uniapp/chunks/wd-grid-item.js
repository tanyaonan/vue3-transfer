globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, P as i, U as a, b as o, c as s, d as c, g as l, h as u, s as d, u as f } from "./vue.runtime.js";
import { M as p, c as m, k as h, t as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as v, r as y, s as b, t as x } from "./shared/wot-ui/common/props.ts.js";
import { t as S } from "./wd-icon.js";
import { t as C } from "./shared/wot-ui/composables/useParent.ts.js";
import { t as w } from "./wd-badge.js";
import { t as T } from "./shared/wot-ui/components/wd-grid/index.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-grid-item/types.ts
var E = {
	...x,
	customText: b(""),
	customIcon: b(""),
	text: String,
	url: String,
	linkType: b("navigateTo"),
	icon: b(""),
	iconColor: String,
	iconPrefix: String,
	value: v,
	isDot: Boolean,
	max: Number,
	badgeProps: Object,
	ellipsis: y(!1)
}, D = ["hover-class"], O = {
	key: 0,
	class: "wd-grid-item__wrapper"
}, k = /* @__PURE__ */ l({
	name: "wd-grid-item",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: E,
	emits: ["click"],
	setup(l, { emit: v, slots: y }) {
		let b = l, x = v, { parent: E, index: k } = C(T), A = d(() => Number(E.value?.props.gutter || 0)), j = d(() => !!E.value?.props.square), M = d(() => !!E.value?.props.border), N = d(() => E.value?.props.bgColor || ""), P = d(() => E.value?.props.column || 0), F = d(() => E.value?.children?.length || 0), I = d(() => E.value?.props.iconSize), L = d(() => {
			if (!M.value || A.value) return "";
			let e = [], t = P.value, n = k.value, r = F.value;
			if (t) {
				let i = r - 1 === n || (n + 1) % t === 0, a = n + 1 <= t;
				a && e.push("is-first"), i && e.push("is-right"), a || e.push("is-border");
			} else e.push("is-first");
			return r - 1 === n && e.push("is-last"), e.join(" ");
		}), R = d(() => {
			if (!E) return b.customStyle || "";
			let e = P.value || F.value, t = `${100 / e}%`, n = {
				flexBasis: t,
				width: t
			};
			if (j.value) n.paddingTop = t, n.paddingBottom = "0", A.value && (n.paddingRight = g(A.value));
			else if (A.value) {
				let t = g(A.value);
				n.paddingRight = t, k.value >= e && (n.marginTop = t);
			}
			return b.customStyle ? `${B(n)} ${b.customStyle}` : n;
		}), z = d(() => {
			if (!E) return "";
			let e = {};
			if (N.value && (e.background = N.value), j.value && A.value) {
				let t = g(A.value);
				e.right = t, e.bottom = t, e.height = "auto";
			}
			return e;
		});
		function B(e) {
			return Object.entries(e).map(([e, t]) => `${e.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${t};`).join("");
		}
		let V = d(() => {
			let e = ["wd-grid-item"];
			return L.value && e.push(L.value), j.value && e.push("is-square"), b.customClass && e.push(b.customClass), e.join(" ");
		}), H = d(() => {
			let e = ["wd-grid-item__content"];
			if (j.value && e.push("is-square"), M.value && A.value > 0 && e.push("is-around"), E.value) {
				let { center: t, direction: n, reverse: r } = E.value.props;
				t && e.push("is-center"), n === "horizontal" && e.push("is-horizontal"), r && e.push("is-reverse");
			}
			return e.join(" ");
		}), U = d(() => {
			let e = m(_(b.badgeProps) ? p(b.badgeProps, h) : {}, p({
				max: b.max,
				isDot: b.isDot,
				value: b.value
			}, h));
			return _(e.max) || (e.max = 99), e;
		}), W = d(() => E.value?.props.clickable ? E.value.props.hoverClass ? E.value.props.hoverClass : "wd-grid-item__content--hover" : "");
		function G() {
			if (E.value && !E.value.props.clickable) return;
			let { url: e, linkType: t } = b;
			if (x("click"), e) switch (t) {
				case "navigateTo":
					uni.navigateTo({ url: e });
					break;
				case "reLaunch":
					uni.reLaunch({ url: e });
					break;
				case "redirectTo":
					uni.redirectTo({ url: e });
					break;
				case "switchTab":
					uni.switchTab({ url: e });
					break;
				default:
					console.error(`[wot-design] warning(wd-grid-item): linkType can not be ${t}`);
					break;
			}
		}
		return (l, d) => (n(), c("div", {
			class: t(V.value),
			onClick: G,
			style: r(R.value)
		}, [s("div", {
			class: t(H.value),
			style: r(z.value),
			"hover-class": W.value
		}, [e(l.$slots, "default", {}, () => [l.icon || y.icon ? (n(), c("div", O, [u(w, o(U.value, { "custom-class": "wd-grid-item__badge" }), {
			default: i(() => [e(l.$slots, "icon", {}, () => [u(S, {
				name: l.icon,
				size: I.value,
				color: l.iconColor,
				"class-prefix": l.iconPrefix,
				"custom-class": `wd-grid-item__icon ${l.customIcon}`
			}, null, 8, [
				"name",
				"size",
				"color",
				"class-prefix",
				"custom-class"
			])])]),
			_: 3
		}, 16)])) : f("", !0), e(l.$slots, "text", {}, () => [l.text ? (n(), c("div", {
			key: 0,
			class: t(`wd-grid-item__text ${l.ellipsis ? "is-ellipsis" : ""} ${l.customText}`)
		}, a(l.text), 3)) : f("", !0)])])], 14, D)], 6));
	}
});
//#endregion
export { k as default };
