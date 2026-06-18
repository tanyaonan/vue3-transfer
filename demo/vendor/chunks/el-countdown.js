globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, G as t, H as n, I as r, S as i, T as a, W as o, _ as s, tt as c, ut as l, y as u, yt as d, z as f } from "./vue.runtime.js";
import { t as p } from "./shared/element-plus/utils/vue/install.js";
import { i as m } from "./shared/element-plus/utils/types.js";
import { t as h } from "./shared/element-plus/constants/event.js";
import { n as g, r as _ } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as v, t as y } from "./shared/element-plus/utils/raf.js";
import { t as b } from "./el-statistic.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/countdown/src/countdown.mjs
var x = g({
	format: {
		type: String,
		default: "HH:mm:ss"
	},
	prefix: String,
	suffix: String,
	title: String,
	value: {
		type: _([Number, Object]),
		default: 0
	},
	valueStyle: {
		type: _([
			String,
			Object,
			Array,
			Boolean
		]),
		default: void 0
	}
}), S = {
	finish: () => !0,
	[h]: (e) => m(e)
}, C = [
	["Y", 1e3 * 60 * 60 * 24 * 365],
	["M", 1e3 * 60 * 60 * 24 * 30],
	["D", 1e3 * 60 * 60 * 24],
	["H", 1e3 * 60 * 60],
	["m", 1e3 * 60],
	["s", 1e3],
	["S", 1]
], w = (e) => m(e) ? new Date(e).getTime() : e.valueOf(), T = (e, t) => {
	let n = e;
	return C.reduce((e, [t, r]) => {
		let i = RegExp(`${t}+(?![^\\[\\]]*\\])`, "g");
		if (i.test(e)) {
			let t = Math.floor(n / r);
			return n -= t * r, e.replace(i, (e) => String(t).padStart(e.length, "0"));
		}
		return e;
	}, t).replace(/\[([^\]]*)]/g, "$1");
}, E = p(/* @__PURE__ */ a({
	name: "ElCountdown",
	__name: "countdown",
	props: x,
	emits: S,
	setup(a, { expose: p, emit: m }) {
		let g = a, _ = m, x, S = l(0), C = s(() => T(S.value, g.format)), E = (e) => T(e, g.format), D = () => {
			x &&= (y(x), void 0);
		}, O = () => {
			let e = w(g.value), t = () => {
				let n = e - Date.now();
				_(h, n), n <= 0 ? (n = 0, D(), _("finish")) : x = v(t), S.value = n;
			};
			x = v(t);
		};
		return f(() => {
			S.value = w(g.value) - Date.now(), e(() => [g.value, g.format], () => {
				D(), O();
			}, { immediate: !0 });
		}), r(() => {
			D();
		}), p({ displayValue: C }), (e, r) => (n(), u(d(b), {
			value: S.value,
			title: a.title,
			prefix: a.prefix,
			suffix: a.suffix,
			"value-style": a.valueStyle,
			formatter: E
		}, i({ _: 2 }, [o(e.$slots, (n, r) => ({
			name: r,
			fn: c(() => [t(e.$slots, r)])
		}))]), 1032, [
			"value",
			"title",
			"prefix",
			"suffix",
			"value-style"
		]));
	}
}));
//#endregion
export { E as ElCountdown, E as default, S as countdownEmits, x as countdownProps };
