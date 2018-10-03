if (!String.prototype._pad) {
	String.prototype._pad = (function() {
		"use strict";

		var length = function(string) {
			return string.length;
		};

		var isNumber = function(value) {
			return typeof value === 'number' && isFinite(value);
		};

		var isString = function(value) {
			return typeof value === 'string';
		};

		var pad = function(string, chars, padLength) {
			var left = '',
				right = '';

			for (var i = 0, j = 0, k = 0; i < padLength; i += 1) {
				if (!(i % 2)) {
					if (!chars[j]) {
						j = 0;
					}
					right += chars[j++];
				} else {
					if (!chars[k]) {
						k = 0;
					}
					left += chars[k++];
				}
			}

			return left + string + right;
		};

		return function(len, chars) {
			len = len !== undefined ? Math.floor(+len) : 0;
			chars = chars !== undefined ? '' + chars : ' ';

			if (isNumber(len) && isString(chars)) {
				return pad(this, chars, len - length(this));
			}
			return this;
		};
	})();
}