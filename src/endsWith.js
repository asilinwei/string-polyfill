if (!String.prototype._endsWith) {
	String.prototype._endsWith = (function() {
		"use strict";

		var length = function(string) {
			return string.length;
		};

		var endsWith = function(string, target, pos) {
			var substring = string.slice(0, pos),
				start = pos - length(target);

			return substring.lastIndexOf(target) === start;
		};

		return function(target, position) {
			var pos = length(this);

			if (target === undefined) {
				return false;
			}
			if (!('' + target)) {
				return true;
			}
			if (position !== undefined) {
				pos = Math.floor(+position);
			}
			return endsWith(this, '' + target, pos);
		};
	})();
}