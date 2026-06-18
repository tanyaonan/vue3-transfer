globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, Dt as n, Ft as r, G as i, H as a, I as o, M as s, Mt as c, N as l, Pt as u, S as d, T as f, Tt as p, U as m, W as h, _ as g, b as _, bt as v, d as y, ht as b, jt as x, kt as S, p as C, pt as w, r as T, tt as E, u as D, ut as ee, v as O, w as k, x as A, y as j, yt as M } from "./vue.runtime.js";
import { t as te } from "./shared/element-plus/utils/objects.js";
import { t as N } from "./shared/lodash/flatten.js";
import { t as ne } from "./shared/element-plus/utils/vue/install.js";
import { t as P } from "./shared/lodash/cloneDeep.js";
import { t as re } from "./shared/lodash/isEqual.js";
import { l as F } from "./shared/element-plus/utils/types.js";
import { n as I, r as L } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as R, t as ie } from "./shared/element-plus/utils/error.js";
import { f as ae } from "./shared/vueuse.js";
import { r as z } from "./shared/element-plus/hooks/use-namespace.js";
import { V as oe, h as se, l as ce, u as le, v as ue, y as de } from "./shared/element-plus-icons.js";
import { t as B } from "./el-icon.js";
import { t as V } from "./shared/element-plus/utils/typescript.js";
import { n as H } from "./el-form/hooks/use-form-common-props.js";
import { n as fe } from "./shared/element-plus/hooks/use-locale.js";
import { t as pe } from "./el-progress.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/upload/src/ajax.mjs
var me = "ElUpload", he = class extends Error {
	constructor(e, t, n, r) {
		super(e), this.name = "UploadAjaxError", this.status = t, this.method = n, this.url = r;
	}
};
function U(e, t, n) {
	let r;
	return r = n.response ? `${n.response.error || n.response}` : n.responseText ? `${n.responseText}` : `fail to ${t.method} ${e} ${n.status}`, new he(r, n.status, t.method, e);
}
function ge(e) {
	let t = e.responseText || e.response;
	if (!t) return t;
	try {
		return JSON.parse(t);
	} catch {
		return t;
	}
}
var W = (e) => {
	typeof XMLHttpRequest > "u" && R(me, "XMLHttpRequest is undefined");
	let t = new XMLHttpRequest(), n = e.action;
	t.upload && t.upload.addEventListener("progress", (t) => {
		let n = t;
		n.percent = t.total > 0 ? t.loaded / t.total * 100 : 0, e.onProgress(n);
	});
	let r = new FormData();
	if (e.data) for (let [t, n] of Object.entries(e.data)) p(n) ? n.length === 2 && n[0] instanceof Blob && x(n[1]) ? r.append(t, n[0], n[1]) : n.forEach((e) => {
		r.append(t, e);
	}) : r.append(t, n);
	r.append(e.filename, e.file, e.file.name), t.addEventListener("error", () => {
		e.onError(U(n, e, t));
	}), t.addEventListener("load", () => {
		if (t.status < 200 || t.status >= 300) return e.onError(U(n, e, t));
		e.onSuccess(ge(t));
	}), t.open(e.method, n, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
	let i = e.headers || {};
	if (i instanceof Headers) i.forEach((e, n) => t.setRequestHeader(n, e));
	else for (let [e, n] of Object.entries(i)) F(n) || t.setRequestHeader(e, String(n));
	return t.send(r), t;
}, G = [
	"text",
	"picture",
	"picture-card"
], _e = 1, K = () => Date.now() + _e++, q = I({
	action: {
		type: String,
		default: "#"
	},
	headers: { type: L(Object) },
	method: {
		type: String,
		default: "post"
	},
	data: {
		type: L([
			Object,
			Function,
			Promise
		]),
		default: () => V({})
	},
	multiple: Boolean,
	name: {
		type: String,
		default: "file"
	},
	drag: Boolean,
	withCredentials: Boolean,
	showFileList: {
		type: Boolean,
		default: !0
	},
	accept: {
		type: String,
		default: ""
	},
	fileList: {
		type: L(Array),
		default: () => V([])
	},
	autoUpload: {
		type: Boolean,
		default: !0
	},
	listType: {
		type: String,
		values: G,
		default: "text"
	},
	httpRequest: {
		type: L(Function),
		default: W
	},
	disabled: {
		type: Boolean,
		default: void 0
	},
	limit: Number,
	directory: Boolean
}), J = I({
	...q,
	beforeUpload: {
		type: L(Function),
		default: v
	},
	beforeRemove: { type: L(Function) },
	onRemove: {
		type: L(Function),
		default: v
	},
	onChange: {
		type: L(Function),
		default: v
	},
	onPreview: {
		type: L(Function),
		default: v
	},
	onSuccess: {
		type: L(Function),
		default: v
	},
	onProgress: {
		type: L(Function),
		default: v
	},
	onError: {
		type: L(Function),
		default: v
	},
	onExceed: {
		type: L(Function),
		default: v
	},
	crossorigin: { type: L(String) }
}), Y = {
	action: "#",
	method: "post",
	data: () => V({}),
	name: "file",
	showFileList: !0,
	accept: "",
	fileList: () => V([]),
	autoUpload: !0,
	listType: "text",
	httpRequest: W,
	disabled: void 0
}, ve = {
	...Y,
	beforeUpload: v,
	onRemove: v,
	onChange: v,
	onPreview: v,
	onSuccess: v,
	onProgress: v,
	onError: v,
	onExceed: v
}, X = Symbol("uploadContextKey"), Z = I({
	files: {
		type: L(Array),
		default: () => V([])
	},
	disabled: {
		type: Boolean,
		default: void 0
	},
	handlePreview: {
		type: L(Function),
		default: v
	},
	listType: {
		type: String,
		values: G,
		default: "text"
	},
	crossorigin: { type: L(String) }
}), Q = { remove: (e) => !!e }, $ = I({
	...q,
	beforeUpload: {
		type: L(Function),
		default: v
	},
	onRemove: {
		type: L(Function),
		default: v
	},
	onStart: {
		type: L(Function),
		default: v
	},
	onSuccess: {
		type: L(Function),
		default: v
	},
	onProgress: {
		type: L(Function),
		default: v
	},
	onError: {
		type: L(Function),
		default: v
	},
	onExceed: {
		type: L(Function),
		default: v
	}
}), ye = {
	...Y,
	beforeUpload: v,
	onRemove: v,
	onStart: v,
	onSuccess: v,
	onProgress: v,
	onError: v,
	onExceed: v
}, be = I({
	disabled: {
		type: Boolean,
		default: void 0
	},
	directory: Boolean
}), xe = { file: (e) => p(e) }, Se = [
	"tabindex",
	"aria-disabled",
	"onKeydown"
], Ce = ["src", "crossorigin"], we = ["onClick"], Te = ["title"], Ee = ["onClick"], De = ["onClick"], Oe = /* @__PURE__ */ f({
	name: "ElUploadList",
	__name: "upload-list",
	props: Z,
	emits: Q,
	setup(e, { emit: t }) {
		let n = e, o = t, { t: s } = fe(), l = z("upload"), d = z("icon"), f = z("list"), p = H(), m = ee(!1), v = g(() => [
			l.b("list"),
			l.bm("list", n.listType),
			l.is("disabled", p.value)
		]), b = (e) => {
			o("remove", e);
		};
		return (t, n) => (a(), j(T, {
			tag: "ul",
			class: c(v.value),
			name: M(f).b()
		}, {
			default: E(() => [(a(!0), A(C, null, h(e.files, (o, f) => (a(), A("li", {
				key: o.uid || o.name,
				class: c([
					M(l).be("list", "item"),
					M(l).is(o.status),
					{ focusing: m.value }
				]),
				tabindex: M(p) ? void 0 : 0,
				"aria-disabled": M(p),
				role: "button",
				onKeydown: D((e) => !M(p) && b(o), ["delete"]),
				onFocus: n[0] ||= (e) => m.value = !0,
				onBlur: n[1] ||= (e) => m.value = !1,
				onClick: n[2] ||= (e) => m.value = !1
			}, [i(t.$slots, "default", {
				file: o,
				index: f
			}, () => [
				e.listType === "picture" || o.status !== "uploading" && e.listType === "picture-card" ? (a(), A("img", {
					key: 0,
					class: c(M(l).be("list", "item-thumbnail")),
					src: o.url,
					crossorigin: e.crossorigin,
					alt: ""
				}, null, 10, Ce)) : _("v-if", !0),
				o.status === "uploading" || e.listType !== "picture-card" ? (a(), A("div", {
					key: 1,
					class: c(M(l).be("list", "item-info"))
				}, [O("a", {
					class: c(M(l).be("list", "item-name")),
					onClick: y((t) => e.handlePreview(o), ["prevent"])
				}, [k(M(B), { class: c(M(d).m("document")) }, {
					default: E(() => [k(M(de))]),
					_: 1
				}, 8, ["class"]), O("span", {
					class: c(M(l).be("list", "item-file-name")),
					title: o.name
				}, r(o.name), 11, Te)], 10, we), o.status === "uploading" ? (a(), j(M(pe), {
					key: 0,
					type: e.listType === "picture-card" ? "circle" : "line",
					"stroke-width": e.listType === "picture-card" ? 6 : 2,
					percentage: Number(o.percentage),
					style: u(e.listType === "picture-card" ? "" : "margin-top: 0.5rem")
				}, null, 8, [
					"type",
					"stroke-width",
					"percentage",
					"style"
				])) : _("v-if", !0)], 2)) : _("v-if", !0),
				O("label", { class: c(M(l).be("list", "item-status-label")) }, [e.listType === "text" ? (a(), j(M(B), {
					key: 0,
					class: c([M(d).m("upload-success"), M(d).m("circle-check")])
				}, {
					default: E(() => [k(M(le))]),
					_: 1
				}, 8, ["class"])) : ["picture-card", "picture"].includes(e.listType) ? (a(), j(M(B), {
					key: 1,
					class: c([M(d).m("upload-success"), M(d).m("check")])
				}, {
					default: E(() => [k(M(ce))]),
					_: 1
				}, 8, ["class"])) : _("v-if", !0)], 2),
				M(p) ? _("v-if", !0) : (a(), j(M(B), {
					key: 2,
					class: c(M(d).m("close")),
					"aria-label": M(s)("el.upload.delete"),
					role: "button",
					tabindex: "0",
					onClick: (e) => b(o),
					onKeydown: D(y((e) => b(o), ["prevent"]), ["enter", "space"])
				}, {
					default: E(() => [k(M(se))]),
					_: 1
				}, 8, [
					"class",
					"aria-label",
					"onClick",
					"onKeydown"
				])),
				M(p) ? _("v-if", !0) : (a(), A("i", {
					key: 3,
					class: c(M(d).m("close-tip"))
				}, r(M(s)("el.upload.deleteTip")), 3)),
				e.listType === "picture-card" ? (a(), A("span", {
					key: 4,
					class: c(M(l).be("list", "item-actions"))
				}, [O("span", {
					class: c(M(l).be("list", "item-preview")),
					onClick: (t) => e.handlePreview(o)
				}, [k(M(B), { class: c(M(d).m("zoom-in")) }, {
					default: E(() => [k(M(oe))]),
					_: 1
				}, 8, ["class"])], 10, Ee), M(p) ? _("v-if", !0) : (a(), A("span", {
					key: 0,
					class: c(M(l).be("list", "item-delete")),
					onClick: (e) => b(o)
				}, [k(M(B), { class: c(M(d).m("delete")) }, {
					default: E(() => [k(M(ue))]),
					_: 1
				}, 8, ["class"])], 10, De))], 2)) : _("v-if", !0)
			])], 42, Se))), 128)), i(t.$slots, "append")]),
			_: 3
		}, 8, ["class", "name"]));
	}
}), ke = "ElUploadDrag", Ae = /* @__PURE__ */ f({
	name: ke,
	__name: "upload-dragger",
	props: be,
	emits: xe,
	setup(e, { emit: n }) {
		let r = e, o = n;
		t(X) || R(ke, "usage: <el-upload><el-upload-dragger /></el-upload>");
		let s = z("upload"), l = ee(!1), u = H(), d = (e) => new Promise((t, n) => e.file(t, n)), f = async (e) => {
			try {
				if (e.isFile) {
					let t = await d(e);
					return t.isDirectory = !1, [t];
				}
				if (e.isDirectory) {
					let t = e.createReader(), n = () => new Promise((e, n) => t.readEntries(e, n)), r = [], i = await n();
					for (; i.length > 0;) r.push(...i), i = await n();
					let a = r.map((e) => f(e).catch(() => []));
					return N(await Promise.all(a));
				}
			} catch {
				return [];
			}
			return [];
		}, p = async (e) => {
			if (u.value) return;
			l.value = !1, e.stopPropagation();
			let t = Array.from(e.dataTransfer.files), n = e.dataTransfer.items || [];
			if (r.directory) {
				let e = Array.from(n).map((e) => e?.webkitGetAsEntry?.()).filter((e) => e);
				o("file", N(await Promise.all(e.map(f))));
				return;
			}
			t.forEach((e, t) => {
				let r = n[t]?.webkitGetAsEntry?.();
				r && (e.isDirectory = r.isDirectory);
			}), o("file", t);
		}, m = () => {
			u.value || (l.value = !0);
		}, h = (e) => {
			e.currentTarget.contains(e.relatedTarget) || (l.value = !1);
		};
		return (e, t) => (a(), A("div", {
			class: c([M(s).b("dragger"), M(s).is("dragover", l.value)]),
			onDrop: y(p, ["prevent"]),
			onDragover: y(m, ["prevent"]),
			onDragleave: y(h, ["prevent"])
		}, [i(e.$slots, "default")], 34));
	}
}), je = [
	"tabindex",
	"aria-disabled",
	"onKeydown"
], Me = [
	"name",
	"disabled",
	"multiple",
	"accept",
	"webkitdirectory"
], Ne = /* @__PURE__ */ f({
	name: "ElUploadContent",
	inheritAttrs: !1,
	__name: "upload-content",
	props: $,
	setup(e, { expose: t }) {
		let r = e, o = z("upload"), s = H(), l = w({}), u = w(), d = (e) => {
			if (e.length === 0) return;
			let { autoUpload: t, limit: n, fileList: i, multiple: a, onStart: o, onExceed: s } = r;
			if (n && i.length + e.length > n) {
				s(e, i);
				return;
			}
			a || (e = e.slice(0, 1));
			for (let n of e) {
				let e = n;
				e.uid = K(), o(e), t && f(e);
			}
		}, f = async (e) => {
			if (u.value.value = "", !r.beforeUpload) return m(e);
			let t, n = {};
			try {
				let i = r.data, a = r.beforeUpload(e);
				n = S(r.data) ? P(r.data) : r.data, t = await a, S(r.data) && re(i, n) && (n = P(r.data));
			} catch {
				t = !1;
			}
			if (t === !1) {
				r.onRemove(e);
				return;
			}
			let i = e;
			t instanceof Blob && (i = t instanceof File ? t : new File([t], e.name, { type: e.type })), m(Object.assign(i, { uid: e.uid }), n);
		}, p = async (e, t) => n(e) ? e(t) : e, m = async (e, t) => {
			let { headers: n, data: i, method: a, withCredentials: o, name: s, action: c, onProgress: u, onSuccess: d, onError: f, httpRequest: m } = r;
			try {
				t = await p(t ?? i, e);
			} catch {
				r.onRemove(e);
				return;
			}
			let { uid: h } = e, g = {
				headers: n || {},
				withCredentials: o,
				file: e,
				data: t,
				method: a,
				filename: s,
				action: c,
				onProgress: (t) => {
					u(t, e);
				},
				onSuccess: (t) => {
					d(t, e), delete l.value[h];
				},
				onError: (t) => {
					f(t, e), delete l.value[h];
				}
			}, _ = m(g);
			l.value[h] = _, _ instanceof Promise && _.then(g.onSuccess, g.onError);
		}, h = (e) => {
			let t = e.target.files;
			t && d(Array.from(t));
		}, g = () => {
			s.value || (u.value.value = "", u.value.click());
		}, _ = () => {
			g();
		};
		return t({
			abort: (e) => {
				te(l.value).filter(e ? ([t]) => String(e.uid) === t : () => !0).forEach(([e, t]) => {
					t instanceof XMLHttpRequest && t.abort(), delete l.value[e];
				});
			},
			upload: f
		}), (t, n) => (a(), A("div", {
			class: c([
				M(o).b(),
				M(o).m(e.listType),
				M(o).is("drag", e.drag),
				M(o).is("disabled", M(s))
			]),
			tabindex: M(s) ? void 0 : 0,
			"aria-disabled": M(s),
			role: "button",
			onClick: g,
			onKeydown: D(y(_, ["self"]), ["enter", "space"])
		}, [e.drag ? (a(), j(Ae, {
			key: 0,
			disabled: M(s),
			directory: e.directory,
			onFile: d
		}, {
			default: E(() => [i(t.$slots, "default")]),
			_: 3
		}, 8, ["disabled", "directory"])) : i(t.$slots, "default", { key: 1 }), O("input", {
			ref_key: "inputRef",
			ref: u,
			class: c(M(o).e("input")),
			name: e.name,
			disabled: M(s),
			multiple: e.multiple,
			accept: e.accept,
			webkitdirectory: e.directory || void 0,
			type: "file",
			onChange: h,
			onClick: n[0] ||= y(() => {}, ["stop"])
		}, null, 42, Me)], 42, je));
	}
}), Pe = "ElUpload", Fe = (e) => {
	e.url?.startsWith("blob:") && URL.revokeObjectURL(e.url);
}, Ie = (t, n) => {
	let r = ae(t, "fileList", void 0, { passive: !0 }), i = (e) => r.value.find((t) => t.uid === e.uid);
	function a(e) {
		n.value?.abort(e);
	}
	function o(e = [
		"ready",
		"uploading",
		"success",
		"fail"
	]) {
		r.value = r.value.filter((t) => !e.includes(t.status));
	}
	function s(e) {
		r.value = r.value.filter((t) => t.uid !== e.uid);
	}
	let c = (e) => {
		l(() => t.onChange(e, r.value));
	}, u = (e, n) => {
		let a = i(n);
		a && (console.error(e), a.status = "fail", s(a), t.onError(e, a, r.value), c(a));
	}, d = (e, n) => {
		let a = i(n);
		a && (t.onProgress(e, a, r.value), a.status = "uploading", a.percentage = Math.round(e.percent));
	}, f = (e, n) => {
		let a = i(n);
		a && (a.status = "success", a.response = e, t.onSuccess(e, a, r.value), c(a));
	}, p = (e) => {
		F(e.uid) && (e.uid = K());
		let n = {
			name: e.name,
			percentage: 0,
			status: "ready",
			size: e.size,
			raw: e,
			uid: e.uid
		};
		if (t.listType === "picture-card" || t.listType === "picture") try {
			n.url = URL.createObjectURL(e);
		} catch (e) {
			ie(Pe, e.message), t.onError(e, n, r.value);
		}
		r.value = [...r.value, n], c(n);
	}, m = async (e) => {
		let n = e instanceof File ? i(e) : e;
		n || R(Pe, "file to be removed not found");
		let o = (e) => {
			a(e), s(e), t.onRemove(e, r.value), Fe(e);
		};
		t.beforeRemove ? await t.beforeRemove(n, r.value) !== !1 && o(n) : o(n);
	};
	function h() {
		r.value.filter(({ status: e }) => e === "ready").forEach(({ raw: e }) => e && n.value?.upload(e));
	}
	return e(() => t.listType, (e) => {
		e !== "picture-card" && e !== "picture" || (r.value = r.value.map((e) => {
			let { raw: n, url: i } = e;
			if (!i && n) try {
				e.url = URL.createObjectURL(n);
			} catch (n) {
				t.onError(n, e, r.value);
			}
			return e;
		}));
	}), e(r, (e) => {
		for (let t of e) t.uid ||= K(), t.status ||= "success";
	}, {
		immediate: !0,
		deep: !0
	}), {
		uploadFiles: r,
		abort: a,
		clearFiles: o,
		handleError: u,
		handleProgress: d,
		handleStart: p,
		handleSuccess: f,
		handleRemove: m,
		submit: h,
		revokeFileObjectURL: Fe
	};
}, Le = ne(/* @__PURE__ */ f({
	name: "ElUpload",
	__name: "upload",
	props: J,
	setup(e, { expose: t }) {
		let n = e, r = H(), c = w(), { abort: l, submit: u, clearFiles: f, uploadFiles: p, handleStart: h, handleError: v, handleRemove: y, handleSuccess: x, handleProgress: S, revokeFileObjectURL: C } = Ie(n, c), T = g(() => n.listType === "picture-card"), D = g(() => ({
			...n,
			fileList: p.value,
			onStart: h,
			onProgress: S,
			onSuccess: x,
			onError: v,
			onRemove: y
		}));
		return o(() => {
			p.value.forEach(C);
		}), m(X, { accept: b(n, "accept") }), t({
			abort: l,
			submit: u,
			clearFiles: f,
			handleStart: h,
			handleRemove: y
		}), (t, n) => (a(), A("div", null, [
			T.value && e.showFileList ? (a(), j(Oe, {
				key: 0,
				disabled: M(r),
				"list-type": e.listType,
				files: M(p),
				crossorigin: e.crossorigin,
				"handle-preview": e.onPreview,
				onRemove: M(y)
			}, d({
				append: E(() => [k(Ne, s({
					ref_key: "uploadRef",
					ref: c
				}, D.value), {
					default: E(() => [t.$slots.trigger ? i(t.$slots, "trigger", { key: 0 }) : _("v-if", !0), !t.$slots.trigger && t.$slots.default ? i(t.$slots, "default", { key: 1 }) : _("v-if", !0)]),
					_: 3
				}, 16)]),
				_: 2
			}, [t.$slots.file ? {
				name: "default",
				fn: E(({ file: e, index: n }) => [i(t.$slots, "file", {
					file: e,
					index: n
				})]),
				key: "0"
			} : void 0]), 1032, [
				"disabled",
				"list-type",
				"files",
				"crossorigin",
				"handle-preview",
				"onRemove"
			])) : _("v-if", !0),
			!T.value || T.value && !e.showFileList ? (a(), j(Ne, s({
				key: 1,
				ref_key: "uploadRef",
				ref: c
			}, D.value), {
				default: E(() => [t.$slots.trigger ? i(t.$slots, "trigger", { key: 0 }) : _("v-if", !0), !t.$slots.trigger && t.$slots.default ? i(t.$slots, "default", { key: 1 }) : _("v-if", !0)]),
				_: 3
			}, 16)) : _("v-if", !0),
			t.$slots.trigger ? i(t.$slots, "default", { key: 2 }) : _("v-if", !0),
			i(t.$slots, "tip"),
			!T.value && e.showFileList ? (a(), j(Oe, {
				key: 3,
				disabled: M(r),
				"list-type": e.listType,
				files: M(p),
				crossorigin: e.crossorigin,
				"handle-preview": e.onPreview,
				onRemove: M(y)
			}, d({ _: 2 }, [t.$slots.file ? {
				name: "default",
				fn: E(({ file: e, index: n }) => [i(t.$slots, "file", {
					file: e,
					index: n
				})]),
				key: "0"
			} : void 0]), 1032, [
				"disabled",
				"list-type",
				"files",
				"crossorigin",
				"handle-preview",
				"onRemove"
			])) : _("v-if", !0)
		]));
	}
}));
//#endregion
export { Le as ElUpload, Le as default, K as genFileId, q as uploadBaseProps, Y as uploadBasePropsDefaults, $ as uploadContentProps, ye as uploadContentPropsDefaults, X as uploadContextKey, xe as uploadDraggerEmits, be as uploadDraggerProps, Q as uploadListEmits, Z as uploadListProps, G as uploadListTypes, J as uploadProps, ve as uploadPropsDefaults };
