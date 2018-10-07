if (!String.prototype._truncate) {
	String.prototype._truncate = (function() {
		"use strict";

		var regTag = '[object RegExp]',
			toString = Object.prototype.toString;

		var isRegExp = function(o) {
			return toString.apply(o) === regTag;
		};

		var isObject = function(o) {
			return typeof o === 'object' &&
				o !== null ||
				typeof o === 'function';
		};

		var isNumber = function(value) {
			return typeof value === 'number' && isFinite(value);
		};

		var length = function(hasLength) {
			return hasLength.length;
		};

		var regExp = function(reg, sub, end, omission) {
			var match,
				newEnd;

			if (!reg.global) {
				reg = new RegExp(reg.source, reg.flags + 'g');
			}
			reg.lastIndex = 0;
			while (match = reg.exec(sub)) {
				newEnd = match.index;
			}
			sub = sub.slice(0, newEnd === undefined ? end : newEnd);
			return sub + omission;
		};

		var string = function(string, str, sub, end, omission) {
			var index = string.lastIndexOf(str);
			sub = sub.slice(0, index === -1 ? end : index);
			return sub + omission;
		};

		return function(obj) {
			var len = 30,
				omission = '...',
				separator;

			if (isObject(obj)) {
				if ('length' in obj) {
					if (isNumber(length(obj))) {
						len = Math.floor(+length(obj));
					}
				}
				if ('omission' in obj) {
					omission = '' + obj.omission;
				}
				if ('separator' in obj) {
					separator = obj.separator;
				}
			}
			if (len >= length(this)) {
				return this;
			}
			var end = len - length(omission);
			if (end < 1) {
				return omission;
			}
			var result = this.slice(0, end);
			if (separator === undefined) {
				return result + omission;
			}
			return isRegExp(separator) ?
				regExp(separator, result, end, omission) :
				string(this, separator, result, end, omission);
		};
	})();
}