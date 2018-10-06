if (!String.prototype._repeat) {
	String.prototype._repeat = (function() {
		"use strict";

		var isNumber = function(value) {
			return typeof value === 'number' && isFinite(value);
		};

		var repeat = function(string, num) {
			return num > 0 ? string += repeat(string, num - 1) : '';
		};

		return function(n) {
			n = n !== undefined ? Math.floor(+n) : 1;

			if (!isNumber(n)) {
				return '';
			}
			return repeat(this, n);
		};
	})();
}