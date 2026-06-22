globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { n as e, r as t } from "../rolldown-runtime.js";
import { Ct as n, Ht as r, Nt as i, Ut as a, _t as o, kn as s, kt as c, tt as l, x as u, yt as d } from "../shared/core.js";
import { Jn as f, Rn as p, Sr as m, Zn as h, _r as g, pr as _, sr as v, xt as y } from "../shared/antd-core.js";
import { n as b } from "./list.js";
//#region node_modules/.pnpm/@rc-component+qrcode@2.0.0__e569b5a3cf1cf86abf8bf268a6f13f97/node_modules/@rc-component/qrcode/es/libs/qrcodegen.js
var x = /* @__PURE__ */ t(s());
function S(e, t, n) {
	if (t < 0 || t > 31 || e >>> t) throw RangeError("Value out of range");
	for (let r = t - 1; r >= 0; r--) n.push(e >>> r & 1);
}
function C(e, t) {
	return (e >>> t & 1) != 0;
}
function w(e) {
	if (!e) throw Error("Assertion error");
}
var T = class e {
	static #e = (n(this, "NUMERIC", new e(1, [
		10,
		12,
		14
	])), n(this, "ALPHANUMERIC", new e(2, [
		9,
		11,
		13
	])), n(this, "BYTE", new e(4, [
		8,
		16,
		16
	])), n(this, "KANJI", new e(8, [
		8,
		10,
		12
	])), n(this, "ECI", new e(7, [
		0,
		0,
		0
	])), void 0);
	modeBits;
	numBitsCharCount;
	constructor(e, t) {
		this.modeBits = e, this.numBitsCharCount = t;
	}
	numCharCountBits(e) {
		return this.numBitsCharCount[Math.floor((e + 7) / 17)];
	}
}, E = class e {
	static #e = (n(this, "LOW", new e(0, 1)), n(this, "MEDIUM", new e(1, 0)), n(this, "QUARTILE", new e(2, 3)), n(this, "HIGH", new e(3, 2)), void 0);
	ordinal;
	formatBits;
	constructor(e, t) {
		this.ordinal = e, this.formatBits = t;
	}
}, D = class e {
	static makeBytes(t) {
		let n = [];
		for (let e of t) S(e, 8, n);
		return new e(T.BYTE, t.length, n);
	}
	static makeNumeric(t) {
		if (!e.isNumeric(t)) throw RangeError("String contains non-numeric characters");
		let n = [];
		for (let e = 0; e < t.length;) {
			let r = Math.min(t.length - e, 3);
			S(parseInt(t.substring(e, e + r), 10), r * 3 + 1, n), e += r;
		}
		return new e(T.NUMERIC, t.length, n);
	}
	static makeAlphanumeric(t) {
		if (!e.isAlphanumeric(t)) throw RangeError("String contains unencodable characters in alphanumeric mode");
		let n = [], r;
		for (r = 0; r + 2 <= t.length; r += 2) {
			let i = e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)) * 45;
			i += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r + 1)), S(i, 11, n);
		}
		return r < t.length && S(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)), 6, n), new e(T.ALPHANUMERIC, t.length, n);
	}
	static makeSegments(t) {
		return t == "" ? [] : e.isNumeric(t) ? [e.makeNumeric(t)] : e.isAlphanumeric(t) ? [e.makeAlphanumeric(t)] : [e.makeBytes(e.toUtf8ByteArray(t))];
	}
	static makeEci(t) {
		let n = [];
		if (t < 0) throw RangeError("ECI assignment value out of range");
		if (t < 128) S(t, 8, n);
		else if (t < 16384) S(2, 2, n), S(t, 14, n);
		else if (t < 1e6) S(6, 3, n), S(t, 21, n);
		else throw RangeError("ECI assignment value out of range");
		return new e(T.ECI, 0, n);
	}
	static isNumeric(t) {
		return e.NUMERIC_REGEX.test(t);
	}
	static isAlphanumeric(t) {
		return e.ALPHANUMERIC_REGEX.test(t);
	}
	mode;
	numChars;
	bitData;
	constructor(e, t, n) {
		if (this.mode = e, this.numChars = t, this.bitData = n, t < 0) throw RangeError("Invalid argument");
		this.bitData = n.slice();
	}
	getData() {
		return this.bitData.slice();
	}
	static getTotalBits(e, t) {
		let n = 0;
		for (let r of e) {
			let e = r.mode.numCharCountBits(t);
			if (r.numChars >= 1 << e) return Infinity;
			n += 4 + e + r.bitData.length;
		}
		return n;
	}
	static toUtf8ByteArray(e) {
		let t = encodeURI(e), n = [];
		for (let e = 0; e < t.length; e++) t.charAt(e) == "%" ? (n.push(parseInt(t.substring(e + 1, e + 3), 16)), e += 2) : n.push(t.charCodeAt(e));
		return n;
	}
	static NUMERIC_REGEX = /^[0-9]*$/;
	static ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
	static ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
}, O = class e {
	static encodeText(t, n) {
		let r = D.makeSegments(t);
		return e.encodeSegments(r, n);
	}
	static encodeBinary(t, n) {
		let r = D.makeBytes(t);
		return e.encodeSegments([r], n);
	}
	static encodeSegments(t, n, r = 1, i = 40, a = -1, o = !0) {
		if (!(e.MIN_VERSION <= r && r <= i && i <= e.MAX_VERSION) || a < -1 || a > 7) throw RangeError("Invalid value");
		let s, c;
		for (s = r;; s++) {
			let r = e.getNumDataCodewords(s, n) * 8, a = D.getTotalBits(t, s);
			if (a <= r) {
				c = a;
				break;
			}
			if (s >= i) throw RangeError("Data too long");
		}
		let l = n;
		for (let t of [
			E.MEDIUM,
			E.QUARTILE,
			E.HIGH
		]) o && c <= e.getNumDataCodewords(s, t) * 8 && (l = t);
		let u = [];
		for (let e of t) {
			S(e.mode.modeBits, 4, u), S(e.numChars, e.mode.numCharCountBits(s), u);
			for (let t of e.getData()) u.push(t);
		}
		w(u.length == c);
		let d = e.getNumDataCodewords(s, l) * 8;
		w(u.length <= d), S(0, Math.min(4, d - u.length), u), S(0, (8 - u.length % 8) % 8, u), w(u.length % 8 == 0);
		for (let e = 236; u.length < d; e ^= 253) S(e, 8, u);
		let f = [];
		for (; f.length * 8 < u.length;) f.push(0);
		return u.forEach((e, t) => {
			f[t >>> 3] |= e << 7 - (t & 7);
		}), new e(s, l, f, a);
	}
	size;
	mask;
	modules = [];
	isFunction = [];
	version;
	errorCorrectionLevel;
	constructor(t, n, r, i) {
		let a = i;
		if (this.version = t, this.errorCorrectionLevel = n, t < e.MIN_VERSION || t > e.MAX_VERSION) throw RangeError("Version value out of range");
		if (a < -1 || a > 7) throw RangeError("Mask value out of range");
		this.size = t * 4 + 17;
		let o = [];
		for (let e = 0; e < this.size; e++) o.push(!1);
		for (let e = 0; e < this.size; e++) this.modules.push(o.slice()), this.isFunction.push(o.slice());
		this.drawFunctionPatterns();
		let s = this.addEccAndInterleave(r);
		if (this.drawCodewords(s), a == -1) {
			let e = 1e9;
			for (let t = 0; t < 8; t++) {
				this.applyMask(t), this.drawFormatBits(t);
				let n = this.getPenaltyScore();
				n < e && (a = t, e = n), this.applyMask(t);
			}
		}
		w(0 <= a && a <= 7), this.mask = a, this.applyMask(a), this.drawFormatBits(a), this.isFunction = [];
	}
	getModule(e, t) {
		return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e];
	}
	getModules() {
		return this.modules;
	}
	drawFunctionPatterns() {
		for (let e = 0; e < this.size; e++) this.setFunctionModule(6, e, e % 2 == 0), this.setFunctionModule(e, 6, e % 2 == 0);
		this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
		let e = this.getAlignmentPatternPositions(), t = e.length;
		for (let n = 0; n < t; n++) for (let r = 0; r < t; r++) n == 0 && r == 0 || n == 0 && r == t - 1 || n == t - 1 && r == 0 || this.drawAlignmentPattern(e[n], e[r]);
		this.drawFormatBits(0), this.drawVersion();
	}
	drawFormatBits(e) {
		let t = this.errorCorrectionLevel.formatBits << 3 | e, n = t;
		for (let e = 0; e < 10; e++) n = n << 1 ^ (n >>> 9) * 1335;
		let r = (t << 10 | n) ^ 21522;
		w(r >>> 15 == 0);
		for (let e = 0; e <= 5; e++) this.setFunctionModule(8, e, C(r, e));
		this.setFunctionModule(8, 7, C(r, 6)), this.setFunctionModule(8, 8, C(r, 7)), this.setFunctionModule(7, 8, C(r, 8));
		for (let e = 9; e < 15; e++) this.setFunctionModule(14 - e, 8, C(r, e));
		for (let e = 0; e < 8; e++) this.setFunctionModule(this.size - 1 - e, 8, C(r, e));
		for (let e = 8; e < 15; e++) this.setFunctionModule(8, this.size - 15 + e, C(r, e));
		this.setFunctionModule(8, this.size - 8, !0);
	}
	drawVersion() {
		if (this.version < 7) return;
		let e = this.version;
		for (let t = 0; t < 12; t++) e = e << 1 ^ (e >>> 11) * 7973;
		let t = this.version << 12 | e;
		w(t >>> 18 == 0);
		for (let e = 0; e < 18; e++) {
			let n = C(t, e), r = this.size - 11 + e % 3, i = Math.floor(e / 3);
			this.setFunctionModule(r, i, n), this.setFunctionModule(i, r, n);
		}
	}
	drawFinderPattern(e, t) {
		for (let n = -4; n <= 4; n++) for (let r = -4; r <= 4; r++) {
			let i = Math.max(Math.abs(r), Math.abs(n)), a = e + r, o = t + n;
			0 <= a && a < this.size && 0 <= o && o < this.size && this.setFunctionModule(a, o, i != 2 && i != 4);
		}
	}
	drawAlignmentPattern(e, t) {
		for (let n = -2; n <= 2; n++) for (let r = -2; r <= 2; r++) this.setFunctionModule(e + r, t + n, Math.max(Math.abs(r), Math.abs(n)) != 1);
	}
	setFunctionModule(e, t, n) {
		this.modules[t][e] = n, this.isFunction[t][e] = !0;
	}
	addEccAndInterleave(t) {
		let n = this.version, r = this.errorCorrectionLevel;
		if (t.length != e.getNumDataCodewords(n, r)) throw RangeError("Invalid argument");
		let i = e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n], a = e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n], o = Math.floor(e.getNumRawDataModules(n) / 8), s = i - o % i, c = Math.floor(o / i), l = [], u = e.reedSolomonComputeDivisor(a);
		for (let n = 0, r = 0; n < i; n++) {
			let i = t.slice(r, r + c - a + (n < s ? 0 : 1));
			r += i.length;
			let o = e.reedSolomonComputeRemainder(i, u);
			n < s && i.push(0), l.push(i.concat(o));
		}
		let d = [];
		for (let e = 0; e < l[0].length; e++) l.forEach((t, n) => {
			(e != c - a || n >= s) && d.push(t[e]);
		});
		return w(d.length == o), d;
	}
	drawCodewords(t) {
		if (t.length != Math.floor(e.getNumRawDataModules(this.version) / 8)) throw RangeError("Invalid argument");
		let n = 0;
		for (let e = this.size - 1; e >= 1; e -= 2) {
			e == 6 && (e = 5);
			for (let r = 0; r < this.size; r++) for (let i = 0; i < 2; i++) {
				let a = e - i, o = e + 1 & 2 ? r : this.size - 1 - r;
				!this.isFunction[o][a] && n < t.length * 8 && (this.modules[o][a] = C(t[n >>> 3], 7 - (n & 7)), n++);
			}
		}
		w(n == t.length * 8);
	}
	applyMask(e) {
		if (e < 0 || e > 7) throw RangeError("Mask value out of range");
		for (let t = 0; t < this.size; t++) for (let n = 0; n < this.size; n++) {
			let r;
			switch (e) {
				case 0:
					r = (n + t) % 2 == 0;
					break;
				case 1:
					r = t % 2 == 0;
					break;
				case 2:
					r = n % 3 == 0;
					break;
				case 3:
					r = (n + t) % 3 == 0;
					break;
				case 4:
					r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
					break;
				case 5:
					r = n * t % 2 + n * t % 3 == 0;
					break;
				case 6:
					r = (n * t % 2 + n * t % 3) % 2 == 0;
					break;
				case 7:
					r = ((n + t) % 2 + n * t % 3) % 2 == 0;
					break;
				default: throw Error("Unreachable");
			}
			!this.isFunction[t][n] && r && (this.modules[t][n] = !this.modules[t][n]);
		}
	}
	getPenaltyScore() {
		let t = 0;
		for (let n = 0; n < this.size; n++) {
			let r = !1, i = 0, a = [
				0,
				0,
				0,
				0,
				0,
				0,
				0
			];
			for (let o = 0; o < this.size; o++) this.modules[n][o] == r ? (i++, i == 5 ? t += e.PENALTY_N1 : i > 5 && t++) : (this.finderPenaltyAddHistory(i, a), r || (t += this.finderPenaltyCountPatterns(a) * e.PENALTY_N3), r = this.modules[n][o], i = 1);
			t += this.finderPenaltyTerminateAndCount(r, i, a) * e.PENALTY_N3;
		}
		for (let n = 0; n < this.size; n++) {
			let r = !1, i = 0, a = [
				0,
				0,
				0,
				0,
				0,
				0,
				0
			];
			for (let o = 0; o < this.size; o++) this.modules[o][n] == r ? (i++, i == 5 ? t += e.PENALTY_N1 : i > 5 && t++) : (this.finderPenaltyAddHistory(i, a), r || (t += this.finderPenaltyCountPatterns(a) * e.PENALTY_N3), r = this.modules[o][n], i = 1);
			t += this.finderPenaltyTerminateAndCount(r, i, a) * e.PENALTY_N3;
		}
		for (let n = 0; n < this.size - 1; n++) for (let r = 0; r < this.size - 1; r++) {
			let i = this.modules[n][r];
			i == this.modules[n][r + 1] && i == this.modules[n + 1][r] && i == this.modules[n + 1][r + 1] && (t += e.PENALTY_N2);
		}
		let n = 0;
		for (let e of this.modules) n = e.reduce((e, t) => e + +!!t, n);
		let r = this.size * this.size, i = Math.ceil(Math.abs(n * 20 - r * 10) / r) - 1;
		return w(0 <= i && i <= 9), t += i * e.PENALTY_N4, w(0 <= t && t <= 2568888), t;
	}
	getAlignmentPatternPositions() {
		if (this.version == 1) return [];
		{
			let e = Math.floor(this.version / 7) + 2, t = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2, n = [6];
			for (let r = this.size - 7; n.length < e; r -= t) n.splice(1, 0, r);
			return n;
		}
	}
	static getNumRawDataModules(t) {
		if (t < e.MIN_VERSION || t > e.MAX_VERSION) throw RangeError("Version number out of range");
		let n = (16 * t + 128) * t + 64;
		if (t >= 2) {
			let e = Math.floor(t / 7) + 2;
			n -= (25 * e - 10) * e - 55, t >= 7 && (n -= 36);
		}
		return w(208 <= n && n <= 29648), n;
	}
	static getNumDataCodewords(t, n) {
		return Math.floor(e.getNumRawDataModules(t) / 8) - e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t] * e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t];
	}
	static reedSolomonComputeDivisor(t) {
		if (t < 1 || t > 255) throw RangeError("Degree out of range");
		let n = [];
		for (let e = 0; e < t - 1; e++) n.push(0);
		n.push(1);
		let r = 1;
		for (let i = 0; i < t; i++) {
			for (let t = 0; t < n.length; t++) n[t] = e.reedSolomonMultiply(n[t], r), t + 1 < n.length && (n[t] ^= n[t + 1]);
			r = e.reedSolomonMultiply(r, 2);
		}
		return n;
	}
	static reedSolomonComputeRemainder(t, n) {
		let r = n.map(() => 0);
		for (let i of t) {
			let t = i ^ r.shift();
			r.push(0), n.forEach((n, i) => {
				r[i] ^= e.reedSolomonMultiply(n, t);
			});
		}
		return r;
	}
	static reedSolomonMultiply(e, t) {
		if (e >>> 8 || t >>> 8) throw RangeError("Byte out of range");
		let n = 0;
		for (let r = 7; r >= 0; r--) n = n << 1 ^ (n >>> 7) * 285, n ^= (t >>> r & 1) * e;
		return w(n >>> 8 == 0), n;
	}
	finderPenaltyCountPatterns(e) {
		let t = e[1];
		w(t <= this.size * 3);
		let n = t > 0 && e[2] == t && e[3] == t * 3 && e[4] == t && e[5] == t;
		return (n && e[0] >= t * 4 && e[6] >= t ? 1 : 0) + (n && e[6] >= t * 4 && e[0] >= t ? 1 : 0);
	}
	finderPenaltyTerminateAndCount(e, t, n) {
		let r = t;
		return e && (this.finderPenaltyAddHistory(r, n), r = 0), r += this.size, this.finderPenaltyAddHistory(r, n), this.finderPenaltyCountPatterns(n);
	}
	finderPenaltyAddHistory(e, t) {
		let n = e;
		t[0] == 0 && (n += this.size), t.pop(), t.unshift(n);
	}
	static MIN_VERSION = 1;
	static MAX_VERSION = 40;
	static PENALTY_N1 = 3;
	static PENALTY_N2 = 3;
	static PENALTY_N3 = 40;
	static PENALTY_N4 = 10;
	static ECC_CODEWORDS_PER_BLOCK = [
		[
			-1,
			7,
			10,
			15,
			20,
			26,
			18,
			20,
			24,
			30,
			18,
			20,
			24,
			26,
			30,
			22,
			24,
			28,
			30,
			28,
			28,
			28,
			28,
			30,
			30,
			26,
			28,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30
		],
		[
			-1,
			10,
			16,
			26,
			18,
			24,
			16,
			18,
			22,
			22,
			26,
			30,
			22,
			22,
			24,
			24,
			28,
			28,
			26,
			26,
			26,
			26,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28
		],
		[
			-1,
			13,
			22,
			18,
			26,
			18,
			24,
			18,
			22,
			20,
			24,
			28,
			26,
			24,
			20,
			30,
			24,
			28,
			28,
			26,
			30,
			28,
			30,
			30,
			30,
			30,
			28,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30
		],
		[
			-1,
			17,
			28,
			22,
			16,
			22,
			28,
			26,
			26,
			24,
			28,
			24,
			28,
			22,
			24,
			24,
			30,
			28,
			28,
			26,
			28,
			30,
			24,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30
		]
	];
	static NUM_ERROR_CORRECTION_BLOCKS = [
		[
			-1,
			1,
			1,
			1,
			1,
			1,
			2,
			2,
			2,
			2,
			4,
			4,
			4,
			4,
			4,
			6,
			6,
			6,
			6,
			7,
			8,
			8,
			9,
			9,
			10,
			12,
			12,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			19,
			20,
			21,
			22,
			24,
			25
		],
		[
			-1,
			1,
			1,
			1,
			2,
			2,
			4,
			4,
			4,
			5,
			5,
			5,
			8,
			9,
			9,
			10,
			10,
			11,
			13,
			14,
			16,
			17,
			17,
			18,
			20,
			21,
			23,
			25,
			26,
			28,
			29,
			31,
			33,
			35,
			37,
			38,
			40,
			43,
			45,
			47,
			49
		],
		[
			-1,
			1,
			1,
			2,
			2,
			4,
			4,
			6,
			6,
			8,
			8,
			8,
			10,
			12,
			16,
			12,
			17,
			16,
			18,
			21,
			20,
			23,
			23,
			25,
			27,
			29,
			34,
			34,
			35,
			38,
			40,
			43,
			45,
			48,
			51,
			53,
			56,
			59,
			62,
			65,
			68
		],
		[
			-1,
			1,
			1,
			2,
			4,
			4,
			4,
			5,
			6,
			8,
			8,
			11,
			11,
			16,
			16,
			18,
			16,
			19,
			21,
			25,
			25,
			25,
			34,
			30,
			32,
			35,
			37,
			40,
			42,
			45,
			48,
			51,
			54,
			57,
			60,
			63,
			66,
			70,
			74,
			77,
			81
		]
	];
}, k = {
	L: E.LOW,
	M: E.MEDIUM,
	Q: E.QUARTILE,
	H: E.HIGH
}, A = "#FFFFFF", j = "#000000", M = .1, N = (e, t = 0) => {
	let n = [];
	return e.forEach((e, r) => {
		let i = null;
		e.forEach((a, o) => {
			if (!a && i !== null) {
				n.push(`M${i + t} ${r + t}h${o - i}v1H${i + t}z`), i = null;
				return;
			}
			if (o === e.length - 1) {
				if (!a) return;
				i === null ? n.push(`M${o + t},${r + t} h1v1H${o + t}z`) : n.push(`M${i + t},${r + t} h${o + 1 - i}v1H${i + t}z`);
				return;
			}
			a && i === null && (i = o);
		});
	}), n.join("");
}, P = (e, t) => e.slice().map((e, n) => n < t.y || n >= t.y + t.h ? e : e.map((e, n) => n < t.x || n >= t.x + t.w ? e : !1)), F = (e, t, n, r) => {
	if (r == null) return null;
	let i = e.length + n * 2, a = Math.floor(t * M), o = i / t, s = (r.width || a) * o, c = (r.height || a) * o, l = r.x == null ? e.length / 2 - s / 2 : r.x * o, u = r.y == null ? e.length / 2 - c / 2 : r.y * o, d = r.opacity == null ? 1 : r.opacity, f = null;
	if (r.excavate) {
		let e = Math.floor(l), t = Math.floor(u);
		f = {
			x: e,
			y: t,
			w: Math.ceil(s + l - e),
			h: Math.ceil(c + u - t)
		};
	}
	let p = r.crossOrigin;
	return {
		x: l,
		y: u,
		h: c,
		w: s,
		excavation: f,
		opacity: d,
		crossOrigin: p
	};
}, I = (e, t) => t == null ? e ? 4 : 0 : Math.max(Math.floor(t), 0), L = (() => {
	try {
		new Path2D().addPath(new Path2D());
	} catch {
		return !1;
	}
	return !0;
})(), R = (e) => {
	let { value: t, level: n, minVersion: r, includeMargin: i, marginSize: a, imageSettings: o, size: s, boostLevel: c } = e, l = x.useMemo(() => {
		let e = (Array.isArray(t) ? t : [t]).reduce((e, t) => (e.push(...D.makeSegments(t)), e), []);
		return O.encodeSegments(e, k[n], r, void 0, void 0, c);
	}, [
		t,
		n,
		r,
		c
	]);
	return x.useMemo(() => {
		let e = l.getModules(), t = I(i, a);
		return {
			cells: e,
			margin: t,
			numCells: e.length + t * 2,
			calculatedImageSettings: F(e, s, t, o),
			qrcode: l
		};
	}, [
		l,
		s,
		o,
		i,
		a
	]);
}, z = /*#__PURE__*/ x.forwardRef((e, t) => {
	let { value: n, size: r = 128, level: i = "L", bgColor: a = A, fgColor: o = j, includeMargin: s = !1, minVersion: c = 1, marginSize: u, style: d, imageSettings: f, boostLevel: p, ...m } = e, h = f?.src, g = x.useRef(null), _ = x.useRef(null), v = x.useCallback((e) => {
		g.current = e, typeof t == "function" ? t(e) : t && (t.current = e);
	}, [t]), [, y] = x.useState(!1), { margin: b, cells: S, numCells: C, calculatedImageSettings: w } = R({
		value: n,
		level: i,
		minVersion: c,
		includeMargin: s,
		marginSize: u,
		imageSettings: f,
		size: r,
		boostLevel: p
	});
	x.useEffect(() => {
		if (g.current) {
			let e = g.current, t = e.getContext("2d");
			if (!t) return;
			let n = S, i = _.current, s = w != null && i !== null && i.complete && i.naturalHeight !== 0 && i.naturalWidth !== 0;
			s && w.excavation != null && (n = P(S, w.excavation));
			let c = window.devicePixelRatio || 1;
			e.height = e.width = r * c;
			let l = r / C * c;
			t.scale(l, l), t.fillStyle = a, t.fillRect(0, 0, C, C), t.fillStyle = o, L ? t.fill(new Path2D(N(n, b))) : S.forEach((e, n) => {
				e.forEach((e, r) => {
					e && t.fillRect(r + b, n + b, 1, 1);
				});
			}), w && (t.globalAlpha = w.opacity), s && t.drawImage(i, w.x + b, w.y + b, w.w, w.h);
		}
	}), x.useEffect(() => {
		y(!1);
	}, [h]);
	let T = {
		height: r,
		width: r,
		...d
	}, E = null;
	return h != null && (E = /*#__PURE__*/ x.createElement("img", {
		alt: "QR-Code",
		src: h,
		key: h,
		style: { display: "none" },
		onLoad: () => {
			y(!0);
		},
		ref: _,
		crossOrigin: w?.crossOrigin
	})), /*#__PURE__*/ x.createElement(x.Fragment, null, /*#__PURE__*/ x.createElement("canvas", l({
		style: T,
		height: r,
		width: r,
		ref: v,
		role: "img"
	}, m)), E);
}), B = /*#__PURE__*/ x.forwardRef((e, t) => {
	let { value: n, size: r = 128, level: i = "L", bgColor: a = A, fgColor: o = j, includeMargin: s = !1, minVersion: c = 1, title: u, marginSize: d, imageSettings: f, boostLevel: p, ...m } = e, { margin: h, cells: g, numCells: _, calculatedImageSettings: v } = R({
		value: n,
		level: i,
		minVersion: c,
		includeMargin: s,
		marginSize: d,
		imageSettings: f,
		size: r,
		boostLevel: p
	}), y = g, b = null;
	f != null && v != null && (v.excavation != null && (y = P(g, v.excavation)), b = /*#__PURE__*/ x.createElement("image", {
		href: f.src,
		height: v.h,
		width: v.w,
		x: v.x + h,
		y: v.y + h,
		preserveAspectRatio: "none",
		opacity: v.opacity,
		crossOrigin: v.crossOrigin
	}));
	let S = N(y, h);
	return /*#__PURE__*/ x.createElement("svg", l({
		height: r,
		width: r,
		viewBox: `0 0 ${_} ${_}`,
		ref: t,
		role: "img"
	}, m), !!u && /*#__PURE__*/ x.createElement("title", null, u), /*#__PURE__*/ x.createElement("path", {
		fill: a,
		d: `M0,0 h${_}v${_}H0z`,
		shapeRendering: "crispEdges"
	}), /*#__PURE__*/ x.createElement("path", {
		fill: o,
		d: S,
		shapeRendering: "crispEdges"
	}), b);
}), V = /*#__PURE__*/ x.createElement(b, null);
function H({ prefixCls: e, locale: t, onRefresh: n, statusRender: r, status: i }) {
	let a = {
		expired: /* @__PURE__ */ x.createElement(x.Fragment, null, /*#__PURE__*/ x.createElement("p", { className: `${e}-expired` }, t?.expired), n && /*#__PURE__*/ x.createElement(y, {
			type: "link",
			icon: /*#__PURE__*/ x.createElement(u, null),
			onClick: n
		}, t?.refresh)),
		loading: V,
		scanned: /* @__PURE__ */ x.createElement("p", { className: `${e}-scanned` }, t?.scanned)
	};
	return (r ?? ((e) => a[e.status]))({
		status: i,
		locale: t,
		onRefresh: n
	});
}
//#endregion
//#region node_modules/.pnpm/antd@6.4.4_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/antd/es/qr-code/style/index.js
var U = (e) => {
	let { componentCls: t, lineWidth: n, lineType: r, colorSplit: i } = e;
	return {
		[t]: {
			..._(e),
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			padding: e.paddingSM,
			backgroundColor: e.colorWhite,
			borderRadius: e.borderRadiusLG,
			border: `${c(n)} ${r} ${i}`,
			position: "relative",
			overflow: "hidden",
			[`& > ${t}-cover`]: {
				position: "absolute",
				insetBlockStart: 0,
				insetInlineStart: 0,
				zIndex: 10,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100%",
				color: e.colorText,
				lineHeight: e.lineHeight,
				background: e.QRCodeCoverBackgroundColor,
				textAlign: "center",
				[`& > ${t}-expired, & > ${t}-scanned`]: { color: e.QRCodeTextColor }
			},
			"> canvas": {
				alignSelf: "stretch",
				flex: "auto",
				minWidth: 0
			},
			"&-icon": {
				marginBlockEnd: e.marginXS,
				fontSize: e.controlHeight
			}
		},
		[`${t}-borderless`]: {
			borderColor: "transparent",
			padding: 0,
			borderRadius: 0
		}
	};
}, W = v("QRCode", (e) => U(d(e, { QRCodeTextColor: e.colorText })), (e) => ({ QRCodeCoverBackgroundColor: new o(e.colorBgContainer).setA(.96).toRgbString() })), G = /* @__PURE__ */ e({ default: () => K }), K = (e) => {
	let [, t] = g(), { value: n, type: o = "canvas", icon: s = "", size: c = 160, iconSize: l, color: u = t.colorText, errorLevel: d = "M", status: _ = "active", bordered: v = !0, onRefresh: y, style: b, className: S, rootClassName: C, prefixCls: w, bgColor: T = "transparent", marginSize: E, statusRender: D, classNames: O, styles: k, boostLevel: A, ...j } = e, { getPrefixCls: M, className: N, style: P, classNames: F, styles: I } = m("qrcode"), L = {
		...e,
		bgColor: T,
		type: o,
		size: c,
		status: _,
		bordered: v,
		errorLevel: d
	}, [R, V] = f([F, O], [I, k], { props: L }), U = M("qrcode", w), [G, K] = W(U), q = {
		src: s,
		x: void 0,
		y: void 0,
		height: h(l) ? l : l?.height ?? 40,
		width: h(l) ? l : l?.width ?? 40,
		excavate: !0,
		crossOrigin: "anonymous"
	}, J = r(j, !0), Y = a(j, Object.keys(J)), X = {
		value: n,
		size: c,
		level: d,
		bgColor: T,
		fgColor: u,
		style: {
			width: b?.width,
			height: b?.height
		},
		imageSettings: s ? q : void 0,
		marginSize: E,
		boostLevel: A,
		...J
	}, [Z] = p("QRCode");
	if (!n) return null;
	let Q = i(U, S, C, G, K, N, R.root, { [`${U}-borderless`]: !v }), $ = {
		backgroundColor: T,
		...V.root,
		...P,
		...b,
		width: b?.width ?? c,
		height: b?.height ?? c
	};
	return /*#__PURE__*/ x.createElement("div", {
		...Y,
		className: Q,
		style: $
	}, _ !== "active" && /*#__PURE__*/ x.createElement("div", {
		className: i(`${U}-cover`, R.cover),
		style: V.cover
	}, /*#__PURE__*/ x.createElement(H, {
		prefixCls: U,
		locale: Z,
		status: _,
		onRefresh: y,
		statusRender: D
	})), o === "canvas" ? /*#__PURE__*/ x.createElement(z, { ...X }) : /*#__PURE__*/ x.createElement(B, { ...X }));
};
//#endregion
export { G as n, K as t };
