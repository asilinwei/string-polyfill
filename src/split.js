if (!String.prototype._split) {
	String.prototype._split = (function() {
		"use strict";

		var toString = Object.prototype.toString,
			regTag = '[object RegExp]';

		var size = function(hasLength) {
			return hasLength.length;
		};

		var isRegExp = function(obj) {
			return toString.apply(obj) === regTag;
		};

		var pop = function(array, limit) {
			if (limit !== undefined) {
				while (size(array) > limit) {
					array.pop();
				}
			}
		};

		var regExp = function(result, string, sep, limit) {
			var start = 0,
				end,
				match,
				substring;

			if (!sep.global) {
				sep = new RegExp(sep.source, sep.flags + 'g');
			}
			sep.lastIndex = 0;
			while (match = sep.exec(string)) {
				end = match.index;
				substring = string.slice(start, end);
				result.push(substring);
				start = sep.lastIndex;
			}
			substring = string.slice(start);
			result.push(substring);
			pop(result, limit);
		};

		var string = function(result, string, sep, limit) {
			var separator = '' + sep,
				slice = string,
				substring,
				end;

			while (slice.indexOf(separator) !== -1) {
				end = slice.indexOf(separator);
				substring = slice.slice(0, end);
				slice = slice.slice(end + size(separator));
				result.push(substring);
			}
			result.push(slice);
			pop(result, limit);
		};

		return function(separator, limit) {
			var result = [];

			if (separator === undefined) {
				result.push(this);
				return result;
			}
			if (limit !== undefined) {
				var length = Math.floor(+limit);
				if (length < 0) {
					return result;
				}
				if (Number.isInteger(length)) {
					limit = length;
				}
			}
			if (isRegExp(separator)) {
				regExp(result, this, separator, limit);
			} else {
				string(result, this, separator, limit);
			}
			return result;
		};
	})();
}
