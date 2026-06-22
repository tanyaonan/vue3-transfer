globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { A as t, B as n, D as r, H as i, L as a, N as o, U as s, c, d as l, g as u, m as d, s as f, u as p } from "./vue.runtime.js";
import { j as m, y as h } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { a as g, r as _, s as v, t as y } from "./shared/wot-ui/common/props.ts.js";
import { t as b } from "./shared/wot-ui/common/formatDate.ts.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-text/types.ts
var x = /*@__PURE__*/ u({
	name: "wd-text",
	options: {
		virtualHost: !0,
		addGlobalClass: !0,
		styleIsolation: "shared"
	},
	props: {
		...y,
		type: v("default"),
		text: g(""),
		size: v(""),
		mode: v("text"),
		decoration: v("none"),
		call: _(!1),
		bold: _(!1),
		format: _(!1),
		color: v(""),
		prefix: String,
		suffix: String,
		lines: Number,
		lineHeight: v(""),
		customStyle: v(""),
		customClass: v("")
	},
	emits: ["click"],
	setup(e, { emit: u, slots: g }) {
		let _ = e, v = u, y = a("");
		o(() => ({
			type: _.type,
			text: _.text,
			mode: _.mode,
			color: _.color,
			bold: _.bold,
			lines: _.lines,
			format: _.format
		}), ({ type: e }) => {
			let t = [
				"primary",
				"error",
				"warning",
				"success",
				"default"
			];
			e && !t.includes(e) && console.error(`type must be one of ${t.toString()}`), C();
		}, {
			deep: !0,
			immediate: !0
		});
		let x = f(() => `wd-text ${_.customClass} ${y.value}`), S = f(() => {
			let e = {};
			return _.color && (e.color = _.color), _.size && (e["font-size"] = `${_.size}`), _.lineHeight && (e["line-height"] = `${_.lineHeight}`), _.decoration && (e["text-decoration"] = `${_.decoration}`), `${m(e)}${_.customStyle}`;
		});
		function C() {
			let { type: e, color: t, bold: n, lines: r } = _, i = [];
			t || i.push(`is-${e}`), h(r) && i.push(`is-lines-${r}`), n && i.push("is-bold"), y.value = i.join(" ");
		}
		function w(e, t, n) {
			if (t) {
				if (n === "phone") return e.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
				if (n === "name") return e.replace(/^(.).*(.)$/, "$1**$2");
				throw Error("mode must be one of phone or name for encryption");
			}
			return e;
		}
		function T(e) {
			e = Number(e).toFixed(2);
			let t = e.split("."), n = t[0], r = t.length > 1 ? "." + t[1] : "", i = /(\d+)(\d{3})/;
			for (; i.test(n);) n = n.replace(i, "$1,$2");
			return n + r;
		}
		let E = f(() => {
			let { text: e, mode: t, format: n } = _;
			return t === "date" ? b(Number(e), "YYYY-MM-DD") : t === "price" ? T(e) : w(`${e}`, n, t);
		});
		function D(e) {
			v("click", e);
		}
		return (e, a) => (r(), l("span", {
			onClick: D,
			class: n(x.value),
			style: i(S.value)
		}, [
			g.prefix || e.prefix ? t(e.$slots, "prefix", { key: 0 }, () => [d(s(e.prefix), 1)]) : p("", !0),
			c("span", null, s(E.value), 1),
			g.suffix || e.suffix ? t(e.$slots, "suffix", { key: 1 }, () => [d(s(e.suffix), 1)]) : p("", !0)
		], 6));
	}
}), S = /* @__PURE__ */ e({ default: () => C }), C = x;
//#endregion
export { S as n, C as t };
