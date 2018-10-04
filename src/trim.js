if (!String.prototype._trim) {
	String.prototype._trim = (function() {
		"use strict";

		var length = function(x) {
			return x.length;
		};

		var has = function(chars, char) {
			for (var i = 0; i < length(chars); i += 1) {
				if (chars[i] === char) {
					return true;
				}
			}
			return false;
		};

		var startIndex = function(string, chars) {
			var index = 0;

			while (1) {
				if (!has(chars, string[index]) || !string[index]) {
					break;
				}
				index++;
			}
			return index;
		};

		var endIndex = function(string, chars) {
			var index = length(string) - 1;

			while (1) {
				if (!has(chars, string[index]) || !string[index]) {
					break;
				}
				index--;
			}
			return index;
		};

		var push = function(array, string, start, end) {
			for (var i = start; i <= end; i += 1) {
				array.push(string[i]);
			}
		};

		return function(chars) {
			chars = chars !== undefined ? '' + chars : ' ';
			var result = [],
				start = startIndex(this, chars),
				end = endIndex(this, chars);

			if (start <= end) {
				push(result, this, start, end);
				return result.join('');
			}
			return this;
		};
	})();
}
