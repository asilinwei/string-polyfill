if (!String.prototype._padEnd) {
	String.prototype._padEnd = (function() {
		"use strict";

		var strSize = function(string) {
			return string.length;
		};

		var pad = function(pads, len) {
			for (var i = 0, j = 0, str = ''; i < len; i += 1, j += 1) {
				if (!pads[j]) {
					j = 0;
				}
				str += pads[j];
			}
			return str;
		};

		return function(length, chars) {
			var len = 0,
				pads = ' ';

			if (length !== undefined) {
				var num = Math.floor(+length);
				if (Number.isInteger(num)) {
					len = num;
				}
			}
			if (chars !== undefined) {
				pads = '' + chars;
				if (!pads) {
					return this;
				}
			}
			var padLength = len - strSize(this);

			return this + pad(pads, padLength);
		};
	})();
}