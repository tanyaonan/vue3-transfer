globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, C as n, E as r, Ft as i, G as a, H as o, I as s, J as c, Mt as l, Pt as u, T as d, U as f, _ as p, b as m, tt as h, ut as g, v as _, w as v, x as y, y as b, yt as x, z as S } from "./vue.runtime.js";
import { i as C, t as w } from "./shared/element-plus/utils/vue/install.js";
import { i as T } from "./shared/element-plus/utils/types.js";
import { t as E } from "./shared/element-plus/constants/event.js";
import { n as D } from "./shared/element-plus/utils/vue/props/runtime.js";
import { r as O } from "./shared/element-plus/hooks/use-namespace.js";
import { h as k, l as A } from "./shared/element-plus-icons.js";
import { a as j } from "./shared/element-plus/utils/vue/icon.js";
import { t as M } from "./el-icon.js";
import { t as N } from "./shared/element-plus/hooks/use-ordered-children.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/steps/src/steps.mjs
var P = D({
	space: {
		type: [Number, String],
		default: ""
	},
	active: {
		type: Number,
		default: 0
	},
	direction: {
		type: String,
		default: "horizontal",
		values: ["horizontal", "vertical"]
	},
	alignCenter: { type: Boolean },
	simple: { type: Boolean },
	finishStatus: {
		type: String,
		values: [
			"wait",
			"process",
			"finish",
			"error",
			"success"
		],
		default: "finish"
	},
	processStatus: {
		type: String,
		values: [
			"wait",
			"process",
			"finish",
			"error",
			"success"
		],
		default: "process"
	}
}), F = { [E]: (e, t) => [e, t].every(T) }, I = "ElSteps", L = /* @__PURE__ */ d({
	name: "ElSteps",
	__name: "steps",
	props: P,
	emits: F,
	setup(t, { emit: n }) {
		let i = t, s = n, c = O("steps"), { children: u, addChild: d, removeChild: p, ChildrenSorter: m } = N(r(), "ElStep");
		return e(u, () => {
			u.value.forEach((e, t) => {
				e.setIndex(t);
			});
		}), f(I, {
			props: i,
			steps: u,
			addStep: d,
			removeStep: p
		}), e(() => i.active, (e, t) => {
			s(E, e, t);
		}), (e, n) => (o(), y("div", { class: l([x(c).b(), x(c).m(t.simple ? "simple" : t.direction)]) }, [a(e.$slots, "default"), v(x(m))], 2));
	}
}), R = D({
	title: {
		type: String,
		default: ""
	},
	icon: { type: j },
	description: {
		type: String,
		default: ""
	},
	status: {
		type: String,
		values: [
			"",
			"wait",
			"process",
			"finish",
			"error",
			"success"
		],
		default: ""
	}
}), z = /* @__PURE__ */ d({
	name: "ElStep",
	__name: "item",
	props: R,
	setup(d) {
		let f = d, C = O("step"), w = g(-1), E = g({}), D = g(""), j = t(I), N = r(), P = 0, F = 0;
		S(() => {
			e([
				() => j.props.active,
				() => j.props.processStatus,
				() => j.props.finishStatus
			], ([e], [t]) => {
				F = t || 0, P = e - F, Y(e);
			}, { immediate: !0 });
		});
		let L = p(() => f.status || D.value), R = p(() => {
			let e = j.steps.value[w.value - 1];
			return e ? e.internalStatus.value : "wait";
		}), z = p(() => j.props.alignCenter), B = p(() => j.props.direction === "vertical"), V = p(() => j.props.simple), H = p(() => j.steps.value.length), U = p(() => j.steps.value[H.value - 1]?.uid === N.uid), W = p(() => V.value ? "" : j.props.space), G = p(() => [
			C.b(),
			C.is(V.value ? "simple" : j.props.direction),
			C.is("flex", U.value && !W.value && !z.value),
			C.is("center", z.value && !B.value && !V.value)
		]), K = p(() => {
			let e = { flexBasis: T(W.value) ? `${W.value}px` : W.value ? W.value : `${100 / (H.value - +!z.value)}%` };
			return B.value || U.value && (e.maxWidth = `${100 / H.value}%`), e;
		}), q = (e) => {
			w.value = e;
		}, J = (e) => {
			let t = e === "wait", n = { transitionDelay: `${Math.abs(P) === 1 ? 0 : P > 0 ? (w.value + 1 - F) * 150 : -(w.value + 1 - j.props.active) * 150}ms` }, r = e === j.props.processStatus || t ? 0 : 100;
			n.borderWidth = r && !V.value ? "1px" : 0, n[j.props.direction === "vertical" ? "height" : "width"] = `${r}%`, E.value = n;
		}, Y = (e) => {
			e > w.value ? D.value = j.props.finishStatus : e === w.value && R.value !== "error" ? D.value = j.props.processStatus : D.value = "wait";
			let t = j.steps.value[w.value - 1];
			t && t.calcProgress(D.value);
		}, X = {
			uid: N.uid,
			getVnode: () => N.vnode,
			currentStatus: L,
			internalStatus: D,
			setIndex: q,
			calcProgress: J
		};
		return j.addStep(X), s(() => {
			j.removeStep(X);
		}), (e, t) => (o(), y("div", {
			style: u(K.value),
			class: l(G.value)
		}, [
			m(" icon & line "),
			_("div", { class: l([x(C).e("head"), x(C).is(L.value)]) }, [V.value ? m("v-if", !0) : (o(), y("div", {
				key: 0,
				class: l(x(C).e("line"))
			}, [_("i", {
				class: l(x(C).e("line-inner")),
				style: u(E.value)
			}, null, 6)], 2)), _("div", { class: l([x(C).e("icon"), x(C).is(d.icon || e.$slots.icon ? "icon" : "text")]) }, [a(e.$slots, "icon", {}, () => [d.icon ? (o(), b(x(M), {
				key: 0,
				class: l(x(C).e("icon-inner"))
			}, {
				default: h(() => [(o(), b(c(d.icon)))]),
				_: 1
			}, 8, ["class"])) : L.value === "success" ? (o(), b(x(M), {
				key: 1,
				class: l([x(C).e("icon-inner"), x(C).is("status")])
			}, {
				default: h(() => [v(x(A))]),
				_: 1
			}, 8, ["class"])) : L.value === "error" ? (o(), b(x(M), {
				key: 2,
				class: l([x(C).e("icon-inner"), x(C).is("status")])
			}, {
				default: h(() => [v(x(k))]),
				_: 1
			}, 8, ["class"])) : V.value ? m("v-if", !0) : (o(), y("div", {
				key: 3,
				class: l(x(C).e("icon-inner"))
			}, i(w.value + 1), 3))])], 2)], 2),
			m(" title & description "),
			_("div", { class: l(x(C).e("main")) }, [_("div", { class: l([x(C).e("title"), x(C).is(L.value)]) }, [a(e.$slots, "title", {}, () => [n(i(d.title), 1)])], 2), V.value ? (o(), y("div", {
				key: 0,
				class: l(x(C).e("arrow"))
			}, null, 2)) : (o(), y("div", {
				key: 1,
				class: l([x(C).e("description"), x(C).is(L.value)])
			}, [a(e.$slots, "description", {}, () => [n(i(d.description), 1)])], 2))], 2)
		], 6));
	}
}), B = w(L, { Step: z }), V = C(z);
//#endregion
export { V as ElStep, B as ElSteps, B as default, I as STEPS_INJECTION_KEY, R as stepProps, F as stepsEmits, P as stepsProps };
