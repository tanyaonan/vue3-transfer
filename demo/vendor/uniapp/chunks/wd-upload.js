globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { A as e, B as t, D as n, H as r, L as i, N as a, U as o, a as s, c, d as l, g as u, h as d, k as f, s as p, u as m, z as ee } from "./vue.runtime.js";
import { A as h, C as g, D as te, L as ne, b as _, g as v, l as y, o as b, x, y as S } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { i as C, n as w, r as T, s as E, t as D } from "./shared/wot-ui/common/props.ts.js";
import { t as O } from "./wd-icon.js";
import { t as re } from "./wd-loading.js";
import { t as ie } from "./shared/wot-ui/locale/lang/zh-CN.ts.js";
import { t as k } from "./shared/wot-ui/common/interceptor.ts.js";
import { r as ae, t as A } from "./wd-video-preview.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/composables/useUpload.ts
var j = {
	PENDING: "pending",
	LOADING: "loading",
	SUCCESS: "success",
	FAIL: "fail"
};
function oe() {
	let e = null, t = (t) => {
		t ? t.abort() : e &&= (e.abort(), null);
	}, n = (n, r, i) => {
		i.abortPrevious && t();
		let a = uni.uploadFile({
			url: i.action,
			header: i.header,
			name: i.name,
			fileName: i.name,
			fileType: i.fileType,
			formData: r,
			filePath: n.url,
			success(e) {
				let t = i.statusCode;
				(v(t) ? t.includes(e.statusCode) : e.statusCode === t) ? i.onSuccess(e, n, r) : i.onError({
					...e,
					errMsg: e.errMsg || ""
				}, n, r);
			},
			fail(e) {
				i.onError(e, n, r);
			}
		});
		return e = a, a.onProgressUpdate((e) => {
			i.onProgress(e, n);
		}), a;
	}, r = (t, r) => {
		let { uploadMethod: i, formData: a = {}, action: o, name: s = "file", header: c = {}, fileType: l = "image", statusCode: u = 200, statusKey: d = "status", abortPrevious: f = !1 } = r;
		t[d] = j.LOADING;
		let p = {
			action: o,
			header: c,
			name: s,
			fileName: s,
			fileType: l,
			statusCode: u,
			abortPrevious: f,
			onSuccess: (t, n, i) => {
				n[d] = j.SUCCESS, e = null, r.onSuccess?.(t, n, i);
			},
			onError: (t, n, i) => {
				n[d] = j.FAIL, n.error = t.errMsg, e = null, r.onError?.(t, n, i);
			},
			onProgress: (e, t) => {
				t.percent = e.progress, r.onProgress?.(e, t);
			}
		};
		return x(i) ? i(t, a, p) : n(t, a, p);
	};
	function i(e) {
		return e.tempFiles = S(e.files) ? e.files : e.tempFiles, v(e.tempFiles) ? e.tempFiles.map((e) => ({
			path: e.path || "",
			name: e.name || "",
			size: e.size,
			type: "image",
			thumb: e.path || ""
		})) : [{
			path: e.tempFiles.path || "",
			name: e.tempFiles.name || "",
			size: e.tempFiles.size,
			type: "image",
			thumb: e.tempFiles.path || ""
		}];
	}
	function a(e) {
		return [{
			path: e.tempFilePath || e.filePath || "",
			name: e.name || "",
			size: e.size,
			type: "video",
			thumb: e.thumbTempFilePath || "",
			duration: e.duration
		}];
	}
	function o(e) {
		return e.tempFiles.map((e) => ({
			type: e.fileType,
			path: e.tempFilePath,
			thumb: e.fileType === "video" ? e.thumbTempFilePath : e.tempFilePath,
			size: e.size,
			duration: e.duration
		}));
	}
	function s({ multiple: e, sizeType: t, sourceType: n, maxCount: r, accept: s, compressed: c, maxDuration: l, camera: u, extension: d }) {
		return new Promise((f, p) => {
			switch (s) {
				case "image":
					uni.chooseMedia({
						count: e ? r : 1,
						mediaType: ["image"],
						sourceType: n,
						sizeType: t,
						camera: u,
						success: (e) => f(o(e)),
						fail: p
					}), uni.chooseImage({
						count: e ? r : 1,
						sizeType: t,
						sourceType: n,
						extension: d,
						success: (e) => f(i(e)),
						fail: p
					});
					break;
				case "video":
					uni.chooseMedia({
						count: e ? r : 1,
						mediaType: ["video"],
						sourceType: n,
						camera: u,
						maxDuration: l,
						success: (e) => f(o(e)),
						fail: p
					}), uni.chooseVideo({
						sourceType: n,
						compressed: c,
						maxDuration: l,
						camera: u,
						extension: d,
						success: (e) => f(a(e)),
						fail: p
					});
					break;
				case "media":
					uni.chooseMedia({
						count: e ? r : 1,
						sourceType: n,
						sizeType: t,
						camera: u,
						maxDuration: l,
						success: (e) => f(o(e)),
						fail: p
					});
					break;
				case "file":
					uni.chooseMessageFile({
						count: e ? S(r) ? r : 100 : 1,
						type: s,
						extension: d,
						success: (e) => f(e.tempFiles),
						fail: p
					});
					break;
				case "all":
					uni.chooseFile({
						count: e ? r : 1,
						type: s,
						extension: d,
						success: (e) => f(e.tempFiles),
						fail: p
					}), uni.chooseMessageFile({
						count: e ? Number(r) : 1,
						type: s,
						extension: d,
						success: (e) => f(e.tempFiles),
						fail: p
					});
					break;
				default:
					uni.chooseMedia({
						count: e ? r : 1,
						mediaType: ["image"],
						sourceType: n,
						sizeType: t,
						camera: u,
						success: (e) => f(o(e)),
						fail: p
					}), uni.chooseImage({
						count: e ? r : 1,
						sizeType: t,
						sourceType: n,
						extension: d,
						success: (e) => f(i(e)),
						fail: p
					});
					break;
			}
		});
	}
	return {
		startUpload: r,
		abort: t,
		UPLOAD_STATUS: j,
		chooseFile: s
	};
}
//#endregion
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-upload/types.ts
var M = {
	...D,
	fileList: w(),
	action: E(""),
	header: {
		type: Object,
		default: () => ({})
	},
	multiple: T(!1),
	disabled: T(!1),
	limit: Number,
	showLimitNum: T(!0),
	maxSize: C(Number.MAX_VALUE),
	sourceType: {
		type: Array,
		default: () => ["album", "camera"]
	},
	sizeType: {
		type: Array,
		default: () => ["original", "compressed"]
	},
	name: E("file"),
	formData: {
		type: Object,
		default: () => ({})
	},
	onPreviewFail: Function,
	beforeUpload: Function,
	beforeChoose: Function,
	beforeRemove: Function,
	beforePreview: Function,
	buildFormData: Function,
	loadingType: E("circular"),
	loadingColor: E("#ffffff"),
	accept: E("image"),
	statusKey: E("status"),
	loadingSize: E("24px"),
	compressed: T(!0),
	maxDuration: C(60),
	camera: E("back"),
	imageMode: E("aspectFit"),
	successStatus: {
		type: [Number, Array],
		default: 200
	},
	customEvokeClass: E(""),
	customPreviewClass: E(""),
	autoUpload: T(!0),
	reupload: T(!1),
	uploadMethod: Function,
	extension: Array
}, se = { class: "wd-upload__status-content" }, ce = [
	"src",
	"mode",
	"onClick"
], le = ["onClick"], ue = ["src", "mode"], de = ["onClick"], N = ["onClick"], P = { class: "wd-upload__file-name" }, F = {
	key: 0,
	class: "wd-upload__mask"
}, I = {
	key: 0,
	class: "wd-upload__status-content"
}, L = { class: "wd-upload__progress-txt" }, R = {
	key: 1,
	class: "wd-upload__status-content"
}, z = { class: "wd-upload__progress-txt" }, B = ["onClick"], V = {
	key: 0,
	class: "wd-upload__evoke-num"
}, H = /* @__PURE__ */ u({
	name: "wd-upload",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: M,
	emits: [
		"fail",
		"change",
		"success",
		"progress",
		"oversize",
		"chooseerror",
		"remove",
		"update:fileList"
	],
	setup(u, { expose: v, emit: x, slots: C }) {
		let w = u, T = x;
		v({
			submit: () => G(),
			abort: () => fe()
		});
		let { translate: E } = ie("upload"), D = i([]), j = p(() => !w.limit || D.value.length < w.limit), M = i(`videoPreview${ne()}`), { previewVideo: H } = ae(M.value), { startUpload: U, abort: fe, chooseFile: pe, UPLOAD_STATUS: me } = oe();
		a(() => w.fileList, (e) => {
			let { statusKey: t } = w;
			_(e, D.value) || (D.value = e.map((e) => (e[t] = e[t] || "success", e.response = e.response || "", {
				...e,
				uid: b.id++
			})));
		}, {
			deep: !0,
			immediate: !0
		}), a(() => w.limit, (e) => {
			e && e < D.value.length && console.error("[wot-design]Error: props limit must less than fileList.length");
		}, {
			deep: !0,
			immediate: !0
		});
		function W() {
			T("update:fileList", D.value);
		}
		function G() {
			let { buildFormData: e, formData: t = {}, statusKey: n } = w, { action: r, name: i, header: a = {}, accept: o, successStatus: s, uploadMethod: c } = w, l = S(s) ? s : 200;
			for (let s of D.value) if (s[n] === me.PENDING) if (e) {
				let u = e({
					file: s,
					formData: t
				});
				te(u) ? u.then((e) => {
					e && U(s, {
						action: r,
						header: a,
						name: i,
						formData: e,
						fileType: o,
						statusCode: l,
						statusKey: n,
						uploadMethod: c,
						onSuccess: q,
						onError: K,
						onProgress: J
					});
				}).catch(() => {}) : u && U(s, {
					action: r,
					header: a,
					name: i,
					formData: u,
					fileType: o,
					statusCode: l,
					statusKey: n,
					uploadMethod: c,
					onSuccess: q,
					onError: K,
					onProgress: J
				});
			} else U(s, {
				action: r,
				header: a,
				name: i,
				formData: t,
				fileType: o,
				statusCode: l,
				statusKey: n,
				uploadMethod: c,
				onSuccess: q,
				onError: K,
				onProgress: J
			});
		}
		function he(e) {
			return new Promise((t, n) => {
				uni.getImageInfo({
					src: e,
					success: (e) => {
						t(e);
					},
					fail: (e) => {
						n(e);
					}
				});
			});
		}
		function ge(e, t) {
			let { statusKey: n } = w, r = {
				uid: b.id++,
				name: e.name || "",
				thumb: e.thumb || "",
				[n]: "pending",
				size: e.size || 0,
				url: e.path,
				percent: 0
			};
			typeof t == "number" ? D.value.splice(t, 1, r) : D.value.push(r), w.autoUpload && G();
		}
		function K(e, t, n) {
			let { statusKey: r } = w, i = D.value.findIndex((e) => e.uid === t.uid);
			i > -1 && (D.value[i][r] = "fail", D.value[i].error = e.message, D.value[i].response = e, T("fail", {
				error: e,
				file: t,
				formData: n
			}), W());
		}
		function q(e, t, n) {
			let { statusKey: r } = w, i = D.value.findIndex((e) => e.uid === t.uid);
			i > -1 && (D.value[i][r] = "success", D.value[i].response = e.data, T("change", { fileList: D.value }), T("success", {
				file: t,
				fileList: D.value,
				formData: n
			}), W());
		}
		function J(e, t) {
			let n = D.value.findIndex((e) => e.uid === t.uid);
			n > -1 && (D.value[n].percent = e.progress, T("progress", {
				response: e,
				file: t
			}));
		}
		function _e(e) {
			let { multiple: t, maxSize: n, accept: r, sizeType: i, limit: a, sourceType: o, compressed: s, maxDuration: c, camera: l, beforeUpload: u, extension: d } = w;
			pe({
				multiple: S(e) ? !1 : t,
				sizeType: i,
				sourceType: o,
				maxCount: a && a - D.value.length,
				accept: r,
				compressed: s,
				maxDuration: c,
				camera: l,
				extension: d
			}).then((r) => {
				let i = r;
				t || (i = i.slice(0, 1));
				let a = async (t) => {
					for (let r = 0; r < t.length; r++) {
						let i = t[r];
						if (i.type === "image" && !i.size) {
							let e = await he(i.path);
							i.size = e.width * e.height;
						}
						Number(i.size) <= n ? ge(i, e) : T("oversize", { file: i });
					}
				};
				k(u, {
					args: [{
						files: i,
						fileList: D.value
					}],
					done: () => a(i)
				});
			}).catch((e) => {
				T("chooseerror", { error: e });
			});
		}
		function Y() {
			X();
		}
		function X(e) {
			if (w.disabled) return;
			let { beforeChoose: t } = w;
			k(t, {
				args: [{ fileList: D.value }],
				done: () => _e(e)
			});
		}
		function ve(e) {
			D.value.splice(D.value.findIndex((t) => t.uid === e.uid), 1), T("change", { fileList: D.value }), T("remove", { file: e }), W();
		}
		function ye(e) {
			let { beforeRemove: t } = w, n = e, r = D.value[n];
			k(t, {
				args: [{
					file: r,
					index: n,
					fileList: D.value
				}],
				done: () => ve(r)
			});
		}
		function be(e) {
			uni.openDocument({
				filePath: e.url,
				showMenu: !0
			});
		}
		function xe(e, t) {
			let { onPreviewFail: n } = w;
			uni.previewImage({
				urls: t,
				current: t[e],
				fail() {
					n ? n({
						index: e,
						imgList: t
					}) : uni.showToast({
						title: "预览图片失败",
						icon: "none"
					});
				}
			});
		}
		function Se(e, t) {
			let { onPreviewFail: n } = w;
			H({
				url: t[e].url,
				poster: t[e].thumb,
				title: t[e].name
			});
		}
		function Ce(e) {
			let { beforePreview: t, reupload: n } = w, r = y(D.value), i = r.findIndex((t) => t.url === e.url), a = r.filter((e) => $(e)).map((e) => e.url), o = a.findIndex((t) => t === e.url);
			n ? X(i) : k(t, {
				args: [{
					file: e,
					index: i,
					fileList: r,
					imgList: a
				}],
				done: () => xe(o, a)
			});
		}
		function Z(e) {
			let { beforePreview: t, reupload: n } = w, r = y(D.value), i = r.findIndex((t) => t.url === e.url), a = r.filter((e) => Q(e)), o = a.findIndex((t) => t.url === e.url);
			n ? X(i) : k(t, {
				args: [{
					file: e,
					index: i,
					fileList: r,
					imgList: []
				}],
				done: () => Se(o, a)
			});
		}
		function we(e) {
			let { beforePreview: t, reupload: n } = w, r = y(D.value), i = r.findIndex((t) => t.url === e.url);
			n ? X(i) : k(t, {
				args: [{
					file: e,
					index: i,
					fileList: r,
					imgList: []
				}],
				done: () => be(e)
			});
		}
		function Q(e) {
			return e.name && h(e.name) || h(e.url);
		}
		function $(e) {
			return e.name && g(e.name) || g(e.url);
		}
		return (i, a) => (n(), l(s, null, [c("div", {
			class: t(["wd-upload", i.customClass]),
			style: r(i.customStyle)
		}, [(n(!0), l(s, null, f(D.value, (r, a) => (n(), l("div", {
			class: t(["wd-upload__preview", i.customPreviewClass]),
			key: a
		}, [
			c("div", se, [$(r) ? (n(), l("img", {
				key: 0,
				src: r.url,
				mode: i.imageMode,
				class: "wd-upload__picture",
				onClick: (e) => Ce(r)
			}, null, 8, ce)) : Q(r) ? (n(), l(s, { key: 1 }, [r.thumb ? (n(), l("div", {
				key: 0,
				class: "wd-upload__video",
				onClick: (e) => Z(r)
			}, [c("img", {
				src: r.thumb,
				mode: i.imageMode,
				class: "wd-upload__picture"
			}, null, 8, ue), d(O, {
				name: "play-circle-fill",
				"custom-class": "wd-upload__video-play"
			})], 8, le)) : (n(), l("div", {
				key: 1,
				class: "wd-upload__video",
				onClick: (e) => Z(r)
			}, null, 8, de))], 64)) : (n(), l("div", {
				key: 2,
				class: "wd-upload__file",
				onClick: (e) => we(r)
			}, [d(O, {
				name: "file",
				"custom-class": "wd-upload__file-icon"
			}), c("div", P, o(r.name || r.url), 1)], 8, N))]),
			r[w.statusKey] === "success" ? m("", !0) : (n(), l("div", F, [r[w.statusKey] === "loading" ? (n(), l("div", I, [d(re, {
				type: i.loadingType,
				size: i.loadingSize,
				color: i.loadingColor
			}, null, 8, [
				"type",
				"size",
				"color"
			]), c("span", L, o(r.percent) + "%", 1)])) : m("", !0), r[w.statusKey] === "fail" ? (n(), l("div", R, [d(O, {
				name: "close-circle",
				"custom-class": "wd-upload__icon"
			}), c("span", z, o(r.error || ee(E)("error")), 1)])) : m("", !0)])),
			r[w.statusKey] !== "loading" && !i.disabled ? (n(), l("div", {
				key: 1,
				class: "wd-upload__close",
				onClick: (e) => ye(a)
			}, [d(O, {
				name: "close",
				"custom-class": "wd-upload__close-icon"
			})], 8, B)) : m("", !0),
			C["preview-cover"] ? e(i.$slots, "preview-cover", {
				key: 2,
				file: r,
				index: a
			}) : m("", !0)
		], 2))), 128)), j.value ? (n(), l(s, { key: 0 }, [C.default ? (n(), l("div", {
			key: 0,
			class: t(["wd-upload__evoke-slot", i.customEvokeClass]),
			onClick: Y
		}, [e(i.$slots, "default")], 2)) : (n(), l("div", {
			key: 1,
			onClick: Y,
			class: t([
				"wd-upload__evoke",
				i.disabled ? "is-disabled" : "",
				i.customEvokeClass
			])
		}, [d(O, {
			"custom-class": "wd-upload__evoke-icon",
			name: "camera-fill"
		}), i.limit && i.showLimitNum ? (n(), l("div", V, "（" + o(D.value.length) + "/" + o(i.limit) + "）", 1)) : m("", !0)], 2))], 64)) : m("", !0)], 6), d(A, { selector: M.value }, null, 8, ["selector"])], 64));
	}
});
//#endregion
export { H as default };
