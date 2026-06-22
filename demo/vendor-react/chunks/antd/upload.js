globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Cn as n, Dn as r, Ht as i, Mt as a, Nt as o, On as s, Tt as c, Ut as l, c as u, ft as d, i as f, kt as p, n as m, r as h, rt as g, sn as _, t as v, w as y, yt as b } from "../shared/core.js";
import { Cn as x, Gt as S, Jn as C, Mn as w, Qn as T, Rn as ee, Sr as E, Wt as D, Yn as O, br as k, gr as A, in as j, kn as te, lr as M, nr as ne, pr as N, rr as P, sr as F, xt as re, yn as ie, zn as ae } from "../shared/antd-core.js";
import { o as oe } from "./avatar.js";
import { t as se } from "./progress.js";
//#region node_modules/.pnpm/@rc-component+upload@1.1.1__f409274a03f44b3197cf7a6186adcbc9/node_modules/@rc-component/upload/es/attr-accept.js
var I = /* @__PURE__ */ t(s()), L = /* @__PURE__ */ t(r()), R = ((e, t) => {
	if (e && t) {
		let r = Array.isArray(t) ? t : t.split(","), i = e.name || "", a = e.type || "", o = a.replace(/\/.*$/, "");
		return r.some((e) => {
			let t = e.trim();
			if (/^\*(\/\*)?$/.test(e)) return !0;
			if (t.charAt(0) === ".") {
				let e = i.toLowerCase(), n = t.toLowerCase(), r = [n];
				return (n === ".jpg" || n === ".jpeg") && (r = [".jpg", ".jpeg"]), r.some((t) => e.endsWith(t));
			}
			return /\/\*$/.test(t) ? o === t.replace(/\/.*$/, "") : a === t ? !0 : /^\w+$/.test(t) ? (n(!1, `Upload takes an invalidate 'accept' type '${t}'.Skip for check.`), !0) : !1;
		});
	}
	return !0;
});
//#endregion
//#region node_modules/.pnpm/@rc-component+upload@1.1.1__f409274a03f44b3197cf7a6186adcbc9/node_modules/@rc-component/upload/es/request.js
function z(e, t) {
	let n = `cannot ${e.method} ${e.action} ${t.status}'`, r = Error(n);
	return r.status = t.status, r.method = e.method, r.url = e.action, r;
}
function B(e) {
	let t = e.responseText || e.response;
	if (!t) return t;
	try {
		return JSON.parse(t);
	} catch {
		return t;
	}
}
function V(e) {
	let t = new XMLHttpRequest();
	e.onProgress && t.upload && (t.upload.onprogress = function(t) {
		t.total > 0 && (t.percent = t.loaded / t.total * 100), e.onProgress(t);
	});
	let n = new FormData();
	e.data && Object.keys(e.data).forEach((t) => {
		let r = e.data[t];
		if (Array.isArray(r)) {
			r.forEach((e) => {
				n.append(`${t}[]`, e);
			});
			return;
		}
		n.append(t, r);
	}), e.file instanceof Blob ? n.append(e.filename, e.file, e.file.name) : n.append(e.filename, e.file), t.onerror = function(t) {
		e.onError(t);
	}, t.onload = function() {
		return t.status < 200 || t.status >= 300 ? e.onError(z(e, t), B(t)) : e.onSuccess(B(t), t);
	}, t.open(e.method, e.action, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
	let r = e.headers || {};
	return r["X-Requested-With"] !== null && t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(r).forEach((e) => {
		r[e] !== null && t.setRequestHeader(e, r[e]);
	}), t.send(n), { abort() {
		t.abort();
	} };
}
//#endregion
//#region node_modules/.pnpm/@rc-component+upload@1.1.1__f409274a03f44b3197cf7a6186adcbc9/node_modules/@rc-component/upload/es/traverseFileTree.js
var ce = async (e, t) => {
	let n = [], r = [];
	e.forEach((e) => r.push(e.webkitGetAsEntry()));
	async function i(e) {
		let t = e.createReader(), n = [];
		for (;;) {
			let e = await new Promise((e) => {
				t.readEntries(e, () => e([]));
			}), r = e.length;
			if (!r) break;
			for (let t = 0; t < r; t++) n.push(e[t]);
		}
		return n;
	}
	async function a(e) {
		return new Promise((n) => {
			e.file((r) => {
				t(r) ? (e.fullPath && !r.webkitRelativePath && (Object.defineProperties(r, { webkitRelativePath: { writable: !0 } }), r.webkitRelativePath = e.fullPath.replace(/^\//, ""), Object.defineProperties(r, { webkitRelativePath: { writable: !1 } })), n(r)) : n(null);
			});
		});
	}
	let o = async (e, t) => {
		if (e) {
			if (e.path = t || "", e.isFile) {
				let t = await a(e);
				t && n.push(t);
			} else if (e.isDirectory) {
				let t = await i(e);
				r.push(...t);
			}
		}
	}, s = 0;
	for (; s < r.length;) await o(r[s]), s++;
	return n;
}, H = +/* @__PURE__ */ new Date(), U = 0;
function W() {
	return `rc-upload-${H}-${++U}`;
}
//#endregion
//#region node_modules/.pnpm/@rc-component+upload@1.1.1__f409274a03f44b3197cf7a6186adcbc9/node_modules/@rc-component/upload/es/AjaxUploader.js
function G() {
	return G = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, G.apply(this, arguments);
}
var K = class extends I.Component {
	state = { uid: W() };
	reqs = {};
	fileInput;
	_isMounted;
	filterFile = (e, t = !1) => {
		let { accept: n, directory: r } = this.props, i, a;
		if (typeof n == "string") a = n;
		else {
			let { filter: e, format: t } = n || {};
			a = t, i = e === "native" ? () => !0 : e;
		}
		return (i || (r || t ? (e) => R(e, a) : () => !0))(e);
	};
	onChange = (e) => {
		let { files: t } = e.target, n = [...t].filter((e) => this.filterFile(e));
		this.uploadFiles(n), this.reset();
	};
	onClick = (e) => {
		let t = this.fileInput;
		if (!t) return;
		let n = e.target, { onClick: r } = this.props;
		n && n.tagName === "BUTTON" && (t.parentNode.focus(), n.blur()), t.click(), r && r(e);
	};
	onKeyDown = (e) => {
		e.key === "Enter" && this.onClick(e);
	};
	onDataTransferFiles = async (e, t) => {
		let { multiple: n, directory: r } = this.props, i = [...e.items || []], a = [...e.files || []];
		if ((a.length > 0 || i.some((e) => e.kind === "file")) && t?.(), r) a = await ce(Array.prototype.slice.call(i), this.filterFile), this.uploadFiles(a);
		else {
			let e = [...a].filter((e) => this.filterFile(e, !0));
			n === !1 && (e = a.slice(0, 1)), this.uploadFiles(e);
		}
	};
	onFilePaste = async (e) => {
		let { pastable: t } = this.props;
		if (t && e.type === "paste") {
			let t = e.clipboardData;
			return this.onDataTransferFiles(t, () => {
				e.preventDefault();
			});
		}
	};
	onFileDragOver = (e) => {
		e.preventDefault();
	};
	onFileDrop = async (e) => {
		if (e.preventDefault(), e.type === "drop") {
			let t = e.dataTransfer;
			return this.onDataTransferFiles(t);
		}
	};
	componentDidMount() {
		this._isMounted = !0;
		let { pastable: e } = this.props;
		e && document.addEventListener("paste", this.onFilePaste);
	}
	componentWillUnmount() {
		this._isMounted = !1, this.abort(), document.removeEventListener("paste", this.onFilePaste);
	}
	componentDidUpdate(e) {
		let { pastable: t } = this.props;
		t && !e.pastable ? document.addEventListener("paste", this.onFilePaste) : !t && e.pastable && document.removeEventListener("paste", this.onFilePaste);
	}
	uploadFiles = (e) => {
		let t = [...e], n = t.map((e) => (e.uid = W(), this.processFile(e, t)));
		Promise.all(n).then((e) => {
			let { onBatchStart: t } = this.props;
			t?.(e.map(({ origin: e, parsedFile: t }) => ({
				file: e,
				parsedFile: t
			}))), e.filter((e) => e.parsedFile !== null).forEach((e) => {
				this.post(e);
			});
		});
	};
	processFile = async (e, t) => {
		let { beforeUpload: n } = this.props, r = e;
		if (n) {
			try {
				r = await n(e, t);
			} catch {
				r = !1;
			}
			if (r === !1) return {
				origin: e,
				parsedFile: null,
				action: null,
				data: null
			};
		}
		let { action: i } = this.props, a;
		a = typeof i == "function" ? await i(e) : i;
		let { data: o } = this.props, s;
		s = typeof o == "function" ? await o(e) : o;
		let c = (typeof r == "object" || typeof r == "string") && r ? r : e, l;
		l = c instanceof File ? c : new File([c], e.name, { type: e.type });
		let u = l;
		return u.uid = e.uid, {
			origin: e,
			data: s,
			parsedFile: u,
			action: a
		};
	};
	post({ data: e, origin: t, action: n, parsedFile: r }) {
		if (!this._isMounted) return;
		let { onStart: i, customRequest: a, name: o, headers: s, withCredentials: c, method: l } = this.props, { uid: u } = t, d = a || V, f = {
			action: n,
			filename: o,
			data: e,
			file: r,
			headers: s,
			withCredentials: c,
			method: l || "post",
			onProgress: (e) => {
				let { onProgress: t } = this.props;
				t?.(e, r);
			},
			onSuccess: (e, t) => {
				let { onSuccess: n } = this.props;
				n?.(e, r, t), delete this.reqs[u];
			},
			onError: (e, t) => {
				let { onError: n } = this.props;
				n?.(e, t, r), delete this.reqs[u];
			}
		};
		i(t), this.reqs[u] = d(f, { defaultRequest: V });
	}
	reset() {
		this.setState({ uid: W() });
	}
	abort(e) {
		let { reqs: t } = this;
		if (e) {
			let n = e.uid ? e.uid : e;
			t[n] && t[n].abort && t[n].abort(), delete t[n];
		} else Object.keys(t).forEach((e) => {
			t[e] && t[e].abort && t[e].abort(), delete t[e];
		});
	}
	saveFileInput = (e) => {
		this.fileInput = e;
	};
	render() {
		let { component: e, prefixCls: t, className: n, classNames: r = {}, disabled: a, id: s, name: c, style: l, styles: u = {}, multiple: d, accept: f, capture: p, children: m, directory: h, openFileDialogOnClick: g, onMouseEnter: _, onMouseLeave: v, hasControlInside: y, ...b } = this.props, x = typeof f == "string" ? f : f?.format, S = o(t, {
			[`${t}-disabled`]: a,
			[n]: n
		}), C = h ? {
			directory: "directory",
			webkitdirectory: "webkitdirectory"
		} : {}, w = a ? {} : {
			onClick: g ? this.onClick : () => {},
			onKeyDown: g ? this.onKeyDown : () => {},
			onMouseEnter: _,
			onMouseLeave: v,
			onDrop: this.onFileDrop,
			onDragOver: this.onFileDragOver,
			tabIndex: y ? void 0 : "0"
		};
		return /*#__PURE__*/ I.createElement(e, G({}, w, {
			className: S,
			role: y ? void 0 : "button",
			style: l
		}), /*#__PURE__*/ I.createElement("input", G({}, i(b, {
			aria: !0,
			data: !0
		}), {
			id: s,
			name: c,
			disabled: a,
			type: "file",
			ref: this.saveFileInput,
			onClick: (e) => e.stopPropagation(),
			key: this.state.uid,
			style: {
				display: "none",
				...u.input
			},
			className: r.input,
			accept: x
		}, C, {
			multiple: d,
			onChange: this.onChange
		}, p == null ? {} : { capture: p })), m);
	}
};
//#endregion
//#region node_modules/.pnpm/@rc-component+upload@1.1.1__f409274a03f44b3197cf7a6186adcbc9/node_modules/@rc-component/upload/es/Upload.js
function q() {
	return q = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, q.apply(this, arguments);
}
function J() {}
//#endregion
//#region node_modules/.pnpm/@rc-component+upload@1.1.1__f409274a03f44b3197cf7a6186adcbc9/node_modules/@rc-component/upload/es/index.js
var le = class extends I.Component {
	static defaultProps = {
		component: "span",
		prefixCls: "rc-upload",
		data: {},
		headers: {},
		name: "file",
		multipart: !1,
		onStart: J,
		onError: J,
		onSuccess: J,
		multiple: !1,
		beforeUpload: null,
		customRequest: null,
		withCredentials: !1,
		openFileDialogOnClick: !0,
		hasControlInside: !1
	};
	uploader;
	abort(e) {
		this.uploader.abort(e);
	}
	saveUploader = (e) => {
		this.uploader = e;
	};
	render() {
		return /*#__PURE__*/ I.createElement(K, q({}, this.props, { ref: this.saveUploader }));
	}
}, Y = (e) => {
	let { componentCls: t, iconCls: n } = e;
	return { [`${t}-wrapper`]: { [`${t}-drag`]: {
		position: "relative",
		width: "100%",
		height: "100%",
		textAlign: "center",
		background: e.colorFillAlter,
		border: `${p(e.lineWidth)} dashed ${e.colorBorder}`,
		borderRadius: e.borderRadiusLG,
		cursor: "pointer",
		transition: `border-color ${e.motionDurationSlow}`,
		[t]: { padding: e.padding },
		[`${t}-btn`]: {
			display: "table",
			width: "100%",
			height: "100%",
			outline: "none",
			borderRadius: e.borderRadiusLG,
			"&:focus-visible": { outline: `${p(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}` }
		},
		[`${t}-drag-container`]: {
			display: "table-cell",
			verticalAlign: "middle"
		},
		[`
          &:not(${t}-disabled):hover,
          &-hover:not(${t}-disabled)
        `]: { borderColor: e.colorPrimaryHover },
		[`p${t}-drag-icon`]: {
			marginBottom: e.margin,
			[n]: {
				color: e.colorPrimary,
				fontSize: e.uploadThumbnailSize
			}
		},
		[`p${t}-text`]: {
			margin: `0 0 ${p(e.marginXXS)}`,
			color: e.colorTextHeading,
			fontSize: e.fontSizeLG
		},
		[`p${t}-hint`]: {
			color: e.colorTextDescription,
			fontSize: e.fontSize
		},
		[`&${t}-disabled`]: { [`p${t}-drag-icon ${n},
            p${t}-text,
            p${t}-hint
          `]: { color: e.colorTextDisabled } }
	} } };
}, X = (e) => {
	let { componentCls: t, iconCls: n, fontSize: r, lineHeight: i, motionDurationSlow: a, calc: o } = e, s = `${t}-list-item`, c = `${s}-actions`, l = `${s}-action`;
	return { [`${t}-wrapper`]: { [`${t}-list`]: {
		...M(),
		lineHeight: e.lineHeight,
		[s]: {
			position: "relative",
			height: o(e.lineHeight).mul(r).equal(),
			marginTop: e.marginXS,
			fontSize: r,
			display: "flex",
			alignItems: "center",
			transition: `background-color ${a}`,
			borderRadius: e.borderRadiusSM,
			"&:hover": { backgroundColor: e.controlItemBgHover },
			[`${s}-name`]: {
				...A,
				padding: `0 ${p(e.paddingXS)}`,
				lineHeight: i,
				flex: "auto",
				transition: `all ${a}`
			},
			[c]: {
				whiteSpace: "nowrap",
				[l]: { opacity: 0 },
				"@media (hover: none), (pointer: coarse)": { [l]: { opacity: 1 } },
				[n]: {
					color: e.actionsColor,
					transition: `all ${a}`
				},
				[`
              ${l}:focus-visible,
              &.picture ${l}
            `]: { opacity: 1 }
			},
			[`${t}-icon ${n}`]: {
				color: e.colorIcon,
				fontSize: r
			},
			[`${s}-progress`]: {
				position: "absolute",
				bottom: e.calc(e.uploadProgressOffset).mul(-1).equal(),
				width: "100%",
				paddingInlineStart: o(r).add(e.paddingXS).equal(),
				fontSize: r,
				lineHeight: 0,
				pointerEvents: "none",
				"> div": { margin: 0 }
			}
		},
		[`${s}:hover ${l}`]: { opacity: 1 },
		[`${s}-error`]: {
			color: e.colorError,
			[`${s}-name, ${t}-icon ${n}`]: { color: e.colorError },
			[c]: {
				[`${n}, ${n}:hover`]: { color: e.colorError },
				[l]: { opacity: 1 }
			}
		},
		[`${t}-list-item-container`]: {
			transition: ["opacity", "height"].map((e) => `${e} ${a}`).join(", "),
			"&::before": {
				display: "table",
				width: 0,
				height: 0,
				content: "\"\""
			}
		}
	} } };
}, ue = (e) => {
	let { componentCls: t } = e, n = new c("uploadAnimateInlineIn", { from: {
		width: 0,
		height: 0,
		padding: 0,
		opacity: 0,
		margin: e.calc(e.marginXS).div(-2).equal()
	} }), r = new c("uploadAnimateInlineOut", { to: {
		width: 0,
		height: 0,
		padding: 0,
		opacity: 0,
		margin: e.calc(e.marginXS).div(-2).equal()
	} }), i = `${t}-animate-inline`;
	return [
		{ [`${t}-wrapper`]: {
			[`${i}-appear, ${i}-enter, ${i}-leave`]: {
				animationDuration: e.motionDurationSlow,
				animationTimingFunction: e.motionEaseInOutCirc,
				animationFillMode: "forwards"
			},
			[`${i}-appear, ${i}-enter`]: { animationName: n },
			[`${i}-leave`]: { animationName: r }
		} },
		{ [`${t}-wrapper`]: D(e) },
		n,
		r
	];
}, de = (e) => {
	let { componentCls: t, iconCls: n, uploadThumbnailSize: r, uploadProgressOffset: i, calc: a } = e, o = `${t}-list`, s = `${o}-item`;
	return { [`${t}-wrapper`]: {
		[`
        ${o}${o}-picture,
        ${o}${o}-picture-card,
        ${o}${o}-picture-circle
      `]: {
			[s]: {
				position: "relative",
				height: a(r).add(a(e.lineWidth).mul(2)).add(a(e.paddingXS).mul(2)).equal(),
				padding: e.paddingXS,
				border: `${p(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
				borderRadius: e.borderRadiusLG,
				"&:hover": { background: "transparent" },
				[`${s}-thumbnail`]: {
					...A,
					width: r,
					height: r,
					lineHeight: p(a(r).add(e.paddingSM).equal()),
					textAlign: "center",
					flex: "none",
					[n]: {
						fontSize: e.fontSizeHeading2,
						color: e.colorPrimary
					},
					img: {
						display: "block",
						width: "100%",
						height: "100%",
						overflow: "hidden"
					}
				},
				[`${s}-progress`]: {
					bottom: a(e.fontSize).mul(e.lineHeight).div(2).add(i).equal(),
					width: `calc(100% - ${p(a(e.paddingSM).mul(2).equal())})`,
					marginTop: 0,
					paddingInlineStart: a(r).add(e.paddingXS).equal()
				}
			},
			[`${s}-error`]: {
				borderColor: e.colorError,
				[`${s}-thumbnail ${n}`]: {
					[`svg path[fill='${d[0]}']`]: { fill: e.colorErrorBg },
					[`svg path[fill='${d.primary}']`]: { fill: e.colorError }
				}
			},
			[`${s}-uploading`]: {
				borderStyle: "dashed",
				[`${s}-name`]: { marginBottom: i }
			}
		},
		[`${o}${o}-picture-circle ${s}`]: { [`&, &::before, ${s}-thumbnail`]: { borderRadius: "50%" } }
	} };
}, fe = (e) => {
	let { componentCls: t, iconCls: n, fontSizeLG: r, colorTextLightSolid: i, calc: a } = e, o = `${t}-list`, s = `${o}-item`, c = e.uploadPicCardSize;
	return {
		[`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]: {
			...M(),
			display: "block",
			[`${t}${t}-select`]: {
				width: c,
				height: c,
				textAlign: "center",
				verticalAlign: "top",
				backgroundColor: e.colorFillAlter,
				border: `${p(e.lineWidth)} dashed ${e.colorBorder}`,
				borderRadius: e.borderRadiusLG,
				cursor: "pointer",
				transition: `border-color ${e.motionDurationSlow}`,
				[`> ${t}`]: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100%",
					textAlign: "center"
				},
				[`&:not(${t}-disabled):hover`]: { borderColor: e.colorPrimary }
			},
			[`${o}${o}-picture-card, ${o}${o}-picture-circle`]: {
				display: "flex",
				flexWrap: "wrap",
				"&:not(:empty)": { minHeight: c },
				"@supports not (gap: 1px)": { "& > *": {
					marginBlockEnd: e.marginXS,
					marginInlineEnd: e.marginXS
				} },
				"@supports (gap: 1px)": { gap: e.marginXS },
				[`${o}-item-container`]: {
					display: "inline-block",
					width: c,
					height: c,
					verticalAlign: "top"
				},
				"&::after": { display: "none" },
				"&::before": { display: "none" },
				[s]: {
					height: "100%",
					margin: 0,
					"&::before": {
						position: "absolute",
						zIndex: 1,
						width: `calc(100% - ${p(a(e.paddingXS).mul(2).equal())})`,
						height: `calc(100% - ${p(a(e.paddingXS).mul(2).equal())})`,
						backgroundColor: e.colorBgMask,
						opacity: 0,
						transition: `all ${e.motionDurationSlow}`,
						content: "\" \""
					}
				},
				[`${s}:hover`]: { [`&::before, ${s}-actions`]: { opacity: 1 } },
				[`${s}-actions`]: {
					position: "absolute",
					insetInlineStart: 0,
					zIndex: 10,
					width: "100%",
					whiteSpace: "nowrap",
					textAlign: "center",
					opacity: 0,
					transition: `all ${e.motionDurationSlow}`,
					[`
            ${n}-eye,
            ${n}-download,
            ${n}-delete
          `]: {
						zIndex: 10,
						width: r,
						margin: `0 ${p(e.marginXXS)}`,
						fontSize: r,
						cursor: "pointer",
						transition: `all ${e.motionDurationSlow}`,
						color: i,
						"&:hover": { color: i },
						svg: { verticalAlign: "baseline" }
					}
				},
				[`${s}-thumbnail, ${s}-thumbnail img`]: {
					position: "static",
					display: "block",
					width: "100%",
					height: "100%",
					objectFit: "contain"
				},
				[`${s}-name`]: {
					display: "none",
					textAlign: "center"
				},
				[`${s}-file + ${s}-name`]: {
					position: "absolute",
					bottom: e.margin,
					display: "block",
					width: `calc(100% - ${p(a(e.paddingXS).mul(2).equal())})`
				},
				[`${s}-uploading`]: {
					[`&${s}`]: { backgroundColor: e.colorFillAlter },
					[`&::before, ${n}-eye, ${n}-download, ${n}-delete`]: { display: "none" }
				},
				[`${s}-progress`]: {
					bottom: e.marginXL,
					width: `calc(100% - ${p(a(e.paddingXS).mul(2).equal())})`,
					paddingInlineStart: 0
				}
			}
		},
		[`${t}-wrapper${t}-picture-circle-wrapper`]: { [`${t}${t}-select`]: { borderRadius: "50%" } }
	};
}, pe = (e) => {
	let { componentCls: t } = e;
	return { [`${t}-rtl`]: { direction: "rtl" } };
}, me = (e) => {
	let { componentCls: t, colorTextDisabled: n } = e;
	return { [`${t}-wrapper`]: {
		...N(e),
		[t]: {
			outline: 0,
			"input[type='file']": { cursor: "pointer" }
		},
		[`${t}-select`]: { display: "inline-block" },
		[`${t}-hidden`]: { display: "none" },
		[`${t}-disabled`]: {
			color: n,
			cursor: "not-allowed"
		}
	} };
}, he = F("Upload", (e) => {
	let { fontSizeHeading3: t, marginXS: n, lineWidth: r, pictureCardSize: i, calc: a } = e, o = b(e, {
		uploadThumbnailSize: a(t).mul(2).equal(),
		uploadProgressOffset: a(a(n).div(2)).add(r).equal(),
		uploadPicCardSize: i
	});
	return [
		me(o),
		Y(o),
		de(o),
		fe(o),
		X(o),
		ue(o),
		pe(o),
		S(o)
	];
}, (e) => ({
	actionsColor: e.colorIcon,
	pictureCardSize: e.controlHeightLG * 2.55
}));
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/upload/utils.js
function ge(e) {
	return {
		...e,
		lastModified: e.lastModified,
		lastModifiedDate: e.lastModifiedDate,
		name: e.name,
		size: e.size,
		type: e.type,
		uid: e.uid,
		percent: 0,
		originFileObj: e
	};
}
function _e(e, t) {
	let n = a(t), r = n.findIndex(({ uid: t }) => t === e.uid);
	return r === -1 ? n.push(e) : n[r] = e, n;
}
function ve(e, t) {
	let n = e.uid === void 0 ? "name" : "uid";
	return t.filter((t) => t[n] === e[n])[0];
}
function ye(e, t) {
	let n = e.uid === void 0 ? "name" : "uid", r = t.filter((t) => t[n] !== e[n]);
	return r.length === t.length ? null : r;
}
var be = (e = "") => {
	let t = e.split("/"), n = t[t.length - 1].split(/#|\?/)[0];
	return (/\.[^./\\]*$/.exec(n) || [""])[0];
}, xe = (e) => e.indexOf("image/") === 0, Se = [
	".avif",
	".bmp",
	".dpg",
	".gif",
	".heic",
	".heif",
	".ico",
	".jfif",
	".jpg",
	".jpeg",
	".png",
	".svg",
	".tif",
	".tiff",
	".webp"
], Ce = (e) => {
	if (e.type && !e.thumbUrl) return xe(e.type);
	let t = e.thumbUrl || e.url || "", n = be(t);
	return /^data:image\//.test(t) || Se.includes(n?.toLowerCase() || "") ? !0 : !(/^data:/.test(t) || n);
}, Z = 200;
function we(e) {
	return new Promise((t) => {
		if (!e.type || !xe(e.type)) {
			t("");
			return;
		}
		let n = document.createElement("canvas");
		n.width = Z, n.height = Z, n.style.cssText = `position: fixed; left: 0; top: 0; width: ${Z}px; height: ${Z}px; z-index: 9999; display: none;`, document.body.appendChild(n);
		let r = n.getContext("2d"), i = new Image();
		if (i.onload = () => {
			let { width: e, height: a } = i, o = Z, s = Z, c = 0, l = 0;
			e > a ? (s = Z / e * a, l = -(s - o) / 2) : (o = Z / a * e, c = -(o - s) / 2), r.drawImage(i, c, l, o, s);
			let u = n.toDataURL();
			document.body.removeChild(n), window.URL.revokeObjectURL(i.src), t(u);
		}, i.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
			let t = new FileReader();
			t.onload = () => {
				t.result && typeof t.result == "string" && (i.src = t.result);
			}, t.readAsDataURL(e);
		} else if (e.type.startsWith("image/gif")) {
			let n = new FileReader();
			n.onload = () => {
				n.result && t(n.result);
			}, n.readAsDataURL(e);
		} else i.src = window.URL.createObjectURL(e);
	});
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/upload/UploadList/ListItem.js
var Te = /*#__PURE__*/ I.forwardRef(({ prefixCls: e, className: t, style: n, classNames: r, styles: i, locale: a, listType: s, file: c, items: l, progress: d, iconRender: f, actionIconRender: p, itemRender: m, isImgUrl: h, showPreviewIcon: g, showRemoveIcon: _, showDownloadIcon: b, previewIcon: x, removeIcon: S, downloadIcon: C, extra: w, onPreview: T, onDownload: ee, onClose: E }, D) => {
	let { status: A } = c, [j, te] = I.useState(A);
	I.useEffect(() => {
		A !== "removed" && te(A);
	}, [A]);
	let [M, N] = I.useState(!1);
	I.useEffect(() => {
		let e = setTimeout(() => {
			N(!0);
		}, 300);
		return () => {
			clearTimeout(e);
		};
	}, []);
	let P = f(c), F = /*#__PURE__*/ I.createElement("div", { className: `${e}-icon` }, P);
	if (s === "picture" || s === "picture-card" || s === "picture-circle") if (j === "uploading" || !c.thumbUrl && !c.url) {
		let t = o(`${e}-list-item-thumbnail`, { [`${e}-list-item-file`]: j !== "uploading" });
		F = /*#__PURE__*/ I.createElement("div", { className: t }, P);
	} else {
		let t = h?.(c) ? /*#__PURE__*/ I.createElement("img", {
			src: c.thumbUrl || c.url,
			alt: c.name,
			className: `${e}-list-item-image`,
			crossOrigin: c.crossOrigin
		}) : P, n = o(`${e}-list-item-thumbnail`, { [`${e}-list-item-file`]: h && !h(c) });
		F = /*#__PURE__*/ I.createElement("a", {
			className: n,
			onClick: (e) => T(c, e),
			href: c.url || c.thumbUrl,
			target: "_blank",
			rel: "noopener noreferrer"
		}, t);
	}
	let re = o(`${e}-list-item`, `${e}-list-item-${j}`, r?.item), ie = typeof c.linkProps == "string" ? JSON.parse(c.linkProps) : c.linkProps, ae = (O(_) ? _(c) : _) ? p((O(S) ? S(c) : S) || /*#__PURE__*/ I.createElement(u, null), () => E(c), e, a.removeFile, !0) : null, L = (O(b) ? b(c) : b) && j === "done" ? p((O(C) ? C(c) : C) || /*#__PURE__*/ I.createElement(v, null), () => ee(c), e, a.downloadFile) : null, R = s !== "picture-card" && s !== "picture-circle" && /*#__PURE__*/ I.createElement("span", {
		key: "download-delete",
		className: o(`${e}-list-item-actions`, { picture: s === "picture" })
	}, L, ae), z = O(w) ? w(c) : w, B = z && /*#__PURE__*/ I.createElement("span", { className: `${e}-list-item-extra` }, z), V = o(`${e}-list-item-name`), ce = c.url ? /*#__PURE__*/ I.createElement("a", {
		key: "view",
		target: "_blank",
		rel: "noopener noreferrer",
		className: V,
		title: c.name,
		...ie,
		href: c.url,
		onClick: (e) => T(c, e)
	}, c.name, B) : /*#__PURE__*/ I.createElement("span", {
		key: "view",
		className: V,
		onClick: (e) => T(c, e),
		title: c.name
	}, c.name, B), H = (O(g) ? g(c) : g) && (c.url || c.thumbUrl) ? /*#__PURE__*/ I.createElement("a", {
		href: c.url || c.thumbUrl,
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: (e) => T(c, e),
		title: a.previewFile
	}, O(x) ? x(c) : x || /*#__PURE__*/ I.createElement(y, null)) : null, U = (s === "picture-card" || s === "picture-circle") && j !== "uploading" && /*#__PURE__*/ I.createElement("span", { className: `${e}-list-item-actions` }, H, j === "done" && L, ae), { getPrefixCls: W } = I.useContext(k), G = W(), K = /*#__PURE__*/ I.createElement("div", {
		className: re,
		style: i?.item
	}, F, ce, R, U, M && /*#__PURE__*/ I.createElement(ne, {
		motionName: `${G}-fade`,
		visible: j === "uploading",
		motionDeadline: 2e3
	}, ({ className: t }) => {
		let n = "percent" in c ? /*#__PURE__*/ I.createElement(se, {
			type: "line",
			percent: c.percent,
			"aria-label": c["aria-label"],
			"aria-labelledby": c["aria-labelledby"],
			...d
		}) : null;
		return /*#__PURE__*/ I.createElement("div", { className: o(`${e}-list-item-progress`, t) }, n);
	})), q = c.response && typeof c.response == "string" ? c.response : c.error?.statusText || c.error?.message || a.uploadError, J = j === "error" ? /*#__PURE__*/ I.createElement(oe, {
		title: q,
		getPopupContainer: (e) => e.parentNode
	}, K) : K;
	return /*#__PURE__*/ I.createElement("div", {
		className: o(`${e}-list-item-container`, t),
		style: n,
		ref: D
	}, m ? m(J, c, l, {
		download: ee.bind(null, c),
		preview: T.bind(null, c),
		remove: E.bind(null, c)
	}) : J);
}), Ee = /*#__PURE__*/ I.forwardRef((e, t) => {
	let { listType: n = "text", previewFile: r = we, onPreview: i, onDownload: s, onRemove: c, locale: u, iconRender: d, isImageUrl: p = Ce, prefixCls: _, items: v = [], showPreviewIcon: y = !0, showRemoveIcon: b = !0, showDownloadIcon: x = !1, removeIcon: S, previewIcon: C, downloadIcon: T, extra: ee, progress: E = {
		size: [-1, 2],
		showInfo: !1
	}, appendAction: D, appendActionVisible: A = !0, itemRender: te, disabled: M, classNames: N, styles: F } = e, [, ae] = ie(), [oe, se] = I.useState(!1), L = ["picture-card", "picture-circle"].includes(n);
	I.useEffect(() => {
		n.startsWith("picture") && (v || []).forEach((e) => {
			!(e.originFileObj instanceof File || e.originFileObj instanceof Blob) || e.thumbUrl !== void 0 || (e.thumbUrl = "", r?.(e.originFileObj).then((t) => {
				e.thumbUrl = t || "", ae();
			}));
		});
	}, [
		n,
		v,
		r
	]), I.useEffect(() => {
		se(!0);
	}, []);
	let R = (e, t) => {
		if (i) return t?.preventDefault(), i(e);
	}, z = (e) => {
		O(s) ? s(e) : e.url && window.open(e.url);
	}, B = (e) => {
		c?.(e);
	}, V = (e) => {
		if (d) return d(e, n);
		let t = e.status === "uploading";
		if (n.startsWith("picture")) {
			let r = n === "picture" ? /*#__PURE__*/ I.createElement(g, null) : u.uploading, i = p?.(e) ? /*#__PURE__*/ I.createElement(m, null) : /*#__PURE__*/ I.createElement(f, null);
			return t ? r : i;
		}
		return t ? /*#__PURE__*/ I.createElement(g, null) : /*#__PURE__*/ I.createElement(h, null);
	}, ce = (e, t, n, r, i) => {
		let a = {
			type: "text",
			size: "small",
			title: r,
			onClick: (n) => {
				t(), /*#__PURE__*/ I.isValidElement(e) && e.props.onClick?.(n);
			},
			className: `${n}-list-item-action`,
			disabled: i ? M : !1
		};
		return /*#__PURE__*/ I.isValidElement(e) ? /*#__PURE__*/ I.createElement(re, {
			...a,
			icon: w(e, {
				...e.props,
				onClick: () => {}
			})
		}) : /*#__PURE__*/ I.createElement(re, { ...a }, /*#__PURE__*/ I.createElement("span", null, e));
	};
	I.useImperativeHandle(t, () => ({
		handlePreview: R,
		handleDownload: z
	}));
	let { getPrefixCls: H } = I.useContext(k), U = H("upload", _), W = H(), G = o(`${U}-list`, `${U}-list-${n}`, N?.list), K = I.useMemo(() => l(j(W), [
		"onAppearEnd",
		"onEnterEnd",
		"onLeaveEnd"
	]), [W]), q = {
		...L ? {} : K,
		motionDeadline: 2e3,
		motionName: `${U}-${L ? "animate-inline" : "animate"}`,
		keys: a(v.map((e) => ({
			key: e.uid,
			file: e
		}))),
		motionAppear: oe
	};
	return /*#__PURE__*/ I.createElement("div", {
		className: G,
		style: F?.list
	}, /*#__PURE__*/ I.createElement(P, {
		...q,
		component: !1
	}, ({ key: e, file: t, className: r, style: i }) => /*#__PURE__*/ I.createElement(Te, {
		key: e,
		locale: u,
		prefixCls: U,
		className: r,
		style: i,
		classNames: N,
		styles: F,
		file: t,
		items: v,
		progress: E,
		listType: n,
		isImgUrl: p,
		showPreviewIcon: y,
		showRemoveIcon: b,
		showDownloadIcon: x,
		removeIcon: S,
		previewIcon: C,
		downloadIcon: T,
		extra: ee,
		iconRender: V,
		actionIconRender: ce,
		itemRender: te,
		onPreview: R,
		onDownload: z,
		onClose: B
	})), D && /*#__PURE__*/ I.createElement(ne, {
		...q,
		visible: A,
		forceRender: !0
	}, ({ className: e, style: t }) => w(D, (n) => ({
		className: o(n.className, e),
		style: {
			...t,
			pointerEvents: e ? "none" : void 0,
			...n.style
		}
	}))));
}), De = `__LIST_IGNORE_${Date.now()}__`, Oe = /*#__PURE__*/ I.forwardRef((e, t) => {
	let n = E("upload"), { fileList: r, defaultFileList: i, onRemove: s, showUploadList: c = !0, listType: l = "text", onPreview: u, onDownload: d, onChange: f, onDrop: p, previewFile: m, disabled: h, locale: g, iconRender: v, isImageUrl: y, progress: b, prefixCls: S, className: w, type: D = "select", children: k, style: A, itemRender: j, maxCount: M, data: ne = {}, multiple: N = !1, hasControlInside: P = !0, action: F = "", accept: re, supportServerRender: ie = !0, rootClassName: oe, styles: se, classNames: R } = e, z = I.useContext(te), B = h ?? z, V = e.customRequest || n.customRequest, ce = n.progress || b ? {
		...n.progress,
		...b
	} : void 0, H = x(re, n.accept, ""), [U, W] = _(i, r), G = U || [], [K, q] = I.useState("drop"), J = I.useRef(null), Y = I.useRef(null);
	I.useMemo(() => {
		let e = Date.now();
		(r || []).forEach((t, n) => {
			!t.uid && !Object.isFrozen(t) && (t.uid = `__AUTO__${e}_${n}__`);
		});
	}, [r]);
	let X = (e, t, n) => {
		let r = a(t), i = !1;
		M === 1 ? r = r.slice(-1) : M && (i = r.length > M, r = r.slice(0, M)), (0, L.flushSync)(() => {
			W(r);
		});
		let o = {
			file: e,
			fileList: r
		};
		n && (o.event = n), (!i || e.status === "removed" || r.some((t) => t.uid === e.uid)) && (0, L.flushSync)(() => {
			f?.(o);
		});
	}, ue = async (t, n) => {
		let { beforeUpload: r } = e, i = t;
		if (r) {
			let e = await r(t, n);
			if (e === !1) return !1;
			if (delete t[De], e === De) return Object.defineProperty(t, De, {
				value: !0,
				configurable: !0
			}), !1;
			T(e) && (i = e);
		}
		return i;
	}, de = (e) => {
		let t = e.filter((e) => !e.file[De]);
		if (!t.length) return;
		let n = t.map((e) => ge(e.file)), r = a(G);
		n.forEach((e) => {
			r = _e(e, r);
		}), n.forEach((e, n) => {
			let i = e;
			if (t[n].parsedFile) e.status = "uploading";
			else {
				let { originFileObj: t } = e, n;
				try {
					n = new File([t], t.name, { type: t.type });
				} catch {
					n = new Blob([t], { type: t.type }), n.name = t.name, n.lastModifiedDate = /* @__PURE__ */ new Date(), n.lastModified = (/* @__PURE__ */ new Date()).getTime();
				}
				n.uid = e.uid, i = n;
			}
			X(i, r);
		});
	}, fe = (e, t, n) => {
		try {
			typeof e == "string" && (e = JSON.parse(e));
		} catch {}
		if (!ve(t, G)) return;
		let r = ge(t);
		r.status = "done", r.percent = 100, r.response = e, r.xhr = n, X(r, _e(r, G));
	}, pe = (e, t) => {
		if (!ve(t, G)) return;
		let n = ge(t);
		n.status = "uploading", n.percent = e.percent, X(n, _e(n, G), e);
	}, me = (e, t, n) => {
		if (!ve(n, G)) return;
		let r = ge(n);
		r.error = e, r.response = t, r.status = "error", X(r, _e(r, G));
	}, be = (e) => {
		let t;
		Promise.resolve(O(s) ? s(e) : s).then((n) => {
			if (n === !1) return;
			let r = ye(e, G);
			r && (t = {
				...e,
				status: "removed"
			}, G?.forEach((e) => {
				let n = t.uid === void 0 ? "name" : "uid";
				e[n] === t[n] && !Object.isFrozen(e) && (e.status = "removed");
			}), J.current?.abort(t), X(t, r));
		});
	}, xe = (e) => {
		q(e.type), e.type === "drop" && p?.(e);
	};
	I.useImperativeHandle(t, () => ({
		onBatchStart: de,
		onSuccess: fe,
		onProgress: pe,
		onError: me,
		fileList: G,
		upload: J.current,
		nativeElement: Y.current
	}));
	let { getPrefixCls: Se, direction: Ce, className: Z, style: we, classNames: Te, styles: Oe } = E("upload"), Q = Se("upload", S), ke = {
		...e,
		listType: l,
		showUploadList: c,
		type: D,
		multiple: N,
		hasControlInside: P,
		supportServerRender: ie,
		disabled: B
	}, [$, Ae] = C([Te, R], [Oe, se], { props: ke }), je = {
		onBatchStart: de,
		onError: me,
		onProgress: pe,
		onSuccess: fe,
		...e,
		customRequest: V,
		data: ne,
		multiple: N,
		action: F,
		accept: H,
		supportServerRender: ie,
		prefixCls: Q,
		disabled: B,
		beforeUpload: ue,
		onChange: void 0,
		hasControlInside: P
	};
	delete je.className, delete je.style, (!k || B) && delete je.id;
	let Me = `${Q}-wrapper`, [Ne, Pe] = he(Q, Me), [Fe] = ee("Upload", ae.Upload), { showRemoveIcon: Ie, showPreviewIcon: Le, showDownloadIcon: Re, removeIcon: ze, previewIcon: Be, downloadIcon: Ve, extra: He } = typeof c == "boolean" ? {} : c, Ue = Ie === void 0 ? !B : Ie, We = (e, t) => c ? /*#__PURE__*/ I.createElement(Ee, {
		classNames: $,
		styles: Ae,
		prefixCls: Q,
		listType: l,
		items: G,
		previewFile: m,
		onPreview: u,
		onDownload: d,
		onRemove: be,
		showRemoveIcon: Ue,
		showPreviewIcon: Le,
		showDownloadIcon: Re,
		removeIcon: ze,
		previewIcon: Be,
		downloadIcon: Ve,
		iconRender: v,
		extra: He,
		locale: {
			...Fe,
			...g
		},
		isImageUrl: y,
		progress: ce,
		appendAction: e,
		appendActionVisible: t,
		itemRender: j,
		disabled: B
	}) : e, Ge = o(Me, w, oe, Ne, Pe, Z, $.root, {
		[`${Q}-rtl`]: Ce === "rtl",
		[`${Q}-picture-card-wrapper`]: l === "picture-card",
		[`${Q}-picture-circle-wrapper`]: l === "picture-circle"
	}), Ke = { ...Ae.root }, qe = {
		...we,
		...A
	};
	if (D === "drag") {
		let e = o(Ne, Q, `${Q}-drag`, {
			[`${Q}-drag-uploading`]: G.some((e) => e.status === "uploading"),
			[`${Q}-drag-hover`]: K === "dragover",
			[`${Q}-disabled`]: B,
			[`${Q}-rtl`]: Ce === "rtl"
		}, $.trigger);
		return /*#__PURE__*/ I.createElement("span", {
			className: Ge,
			ref: Y,
			style: Ke
		}, /*#__PURE__*/ I.createElement("div", {
			className: e,
			style: {
				...qe,
				...Ae.trigger
			},
			onDrop: xe,
			onDragOver: xe,
			onDragLeave: xe
		}, /*#__PURE__*/ I.createElement(le, {
			...je,
			ref: J,
			className: `${Q}-btn`
		}, /*#__PURE__*/ I.createElement("div", { className: `${Q}-drag-container` }, k))), We());
	}
	let Je = o(Q, `${Q}-select`, {
		[`${Q}-disabled`]: B,
		[`${Q}-hidden`]: !k
	}, $.trigger), Ye = /*#__PURE__*/ I.createElement("div", {
		className: Je,
		style: {
			...qe,
			...Ae.trigger
		}
	}, /*#__PURE__*/ I.createElement(le, {
		...je,
		ref: J
	}));
	return l === "picture-card" || l === "picture-circle" ? /*#__PURE__*/ I.createElement("span", {
		className: Ge,
		ref: Y,
		style: Ke
	}, We(Ye, !!k)) : /*#__PURE__*/ I.createElement("span", {
		className: Ge,
		ref: Y,
		style: Ke
	}, Ye, We());
}), Q = /*#__PURE__*/ I.forwardRef((e, t) => {
	let { style: n, height: r, hasControlInside: i = !1, children: a, ...o } = e, s = {
		...n,
		height: r
	};
	return /*#__PURE__*/ I.createElement(Oe, {
		ref: t,
		hasControlInside: i,
		...o,
		style: s,
		type: "drag"
	}, a);
}), ke = /* @__PURE__ */ e({ default: () => $ }), $ = Oe;
$.Dragger = Q, $.LIST_IGNORE = De;
//#endregion
export { ke as t };
