if (!String.prototype._slice) {
	String.prototype._slice = (function() {
		"use strict";

		var size = function(string) {
			return string.length;
		};

		var join = function(string, start, end) {
			var result = '',
				i = start,
				char;

			while (i < end) {
				char = string[i];
				result += char ? char : '';
				i += 1;
			}
			return result;
		};

		return function(start, end) {
			var from = 0,
				to = size(this);

			if (start !== undefined) {
				var num = Math.floor(+start);
				if (Number.isInteger(num)) {
					from = num >= 0 ? num : size(this) + num;
				}
			}
			if (end !== undefined) {
				num = Math.floor(+end);
				if (Number.isInteger(num)) {
					to = num;
				}
			}
			return join(this, from, to);
		};
	})();
}
