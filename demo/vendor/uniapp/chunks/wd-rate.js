globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { B as e, D as t, H as n, L as r, N as i, _ as a, a as o, d as s, g as c, h as l, i as u, k as d, s as f, u as p, z as m } from "./vue.runtime.js";
import { p as h, t as g, y as _ } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { c as v, i as y, r as b, s as x, t as S } from "./shared/wot-ui/common/props.ts.js";
import { t as C } from "./wd-icon.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-rate/types.ts
var w = {
	...S,
	num: y(5),
	modelValue: {
		type: [
			String,
			Number,
			null
		],
		default: null
	},
	readonly: b(!1),
	size: String,
	space: v,
	color: String,
	activeColor: { type: [String, Array] },
	icon: x("star-fill"),
	activeIcon: x("star-fill"),
	disabled: b(!1),
	allowHalf: b(!1),
	clearable: b(!1),
	block: b(!1)
}, T = ["data-index"], E = ["onClick"], D = /* @__PURE__ */ c({
	name: "wd-rate",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: w,
	emits: ["update:modelValue", "change"],
	setup(c, { emit: v }) {
		let { proxy: y } = a(), b = c, x = v, S = r([]), w = f(() => b.color ? `background:${b.color};` : ""), D = f(() => _(b.size) ? `font-size:${g(b.size)};` : ""), O = f(() => {
			let { activeColor: e, modelValue: t, num: n } = b, r = "";
			return Array.isArray(e) ? e.length === 0 ? console.error("activeColor cannot be an empty array") : r = Number(t) <= n * .6 || !e[1] ? e[0] : e[1] : r = e, `background:${r};`;
		});
		i([() => b.num, () => b.modelValue], () => {
			A();
		}, {
			immediate: !0,
			deep: !0
		});
		let k = (e) => e !== "0";
		function A() {
			let { modelValue: e, num: t, allowHalf: n } = b;
			if (e === null || !t) return;
			if (typeof e != "number") {
				console.error("[wot ui] error(wd-rate): the value of wd-rate should be a number");
				return;
			}
			let r = [], i = Math.floor(e);
			for (let a = 0; a < t; a++) a < i ? r.push("100%") : a === i && n && e % 1 != 0 ? r.push("50%") : r.push("0");
			S.value = r;
		}
		function j(e, t) {
			let { readonly: n, disabled: r, clearable: i, allowHalf: a, modelValue: o } = b;
			if (n || r) return;
			let s = t ? e + .5 : e + 1;
			i && s === o && s === (a ? .5 : 1) && (s = 0), M(s);
		}
		function M(e) {
			x("update:modelValue", e), x("change", { value: e });
		}
		async function N(e) {
			if (b.readonly || b.disabled) return;
			let { clientX: t } = e.touches[0], n = await h(".wd-rate__item", !0, y), r = Array.from(n).findIndex((e) => t >= e.left && t <= e.right);
			if (r !== -1) {
				let e = n[r], i = e.width, a = b.allowHalf && t - e.left < i / 2;
				(a ? r + .5 : r + 1) >= .5 && M(a ? r + .5 : r + 1);
			}
		}
		return (r, i) => (t(), s("div", {
			class: e(`wd-rate ${r.disabled ? "is-disabled" : ""} ${r.block ? "is-block" : ""} ${r.customClass}`),
			style: n(r.customStyle),
			onTouchmove: N
		}, [(t(!0), s(o, null, d(S.value, (e, i) => (t(), s("div", {
			key: i,
			"data-index": i,
			class: "wd-rate__item",
			style: n(`${m(_)(r.space) ? `margin-right: ${i == S.value.length - 1 ? 0 : m(g)(r.space)}` : ""}`)
		}, [l(C, {
			"custom-class": `wd-rate__item-star ${e === "100%" ? "wd-rate__item-star--active" : ""}`,
			name: k(e) ? r.activeIcon : r.icon,
			"custom-style": `${e === "100%" ? O.value : w.value} ${D.value}`,
			onClick: (e) => j(i, !1)
		}, null, 8, [
			"custom-class",
			"name",
			"custom-style",
			"onClick"
		]), b.allowHalf ? (t(), s("div", {
			key: 0,
			class: "wd-rate__item-half",
			onClick: u((e) => j(i, !0), ["stop"])
		}, [l(C, {
			"custom-class": `wd-rate__item-star ${e === "0" ? "" : "wd-rate__item-star--active"}`,
			name: k(e) ? r.activeIcon : r.icon,
			"custom-style": `${e === "0" ? w.value : O.value} ${D.value}`
		}, null, 8, [
			"custom-class",
			"name",
			"custom-style"
		])], 8, E)) : p("", !0)], 12, T))), 128))], 38));
	}
});
//#endregion
export { D as default };
