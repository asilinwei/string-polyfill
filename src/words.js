if (!String.prototype._words) {
	String.prototype._words = (function() {
		"use strict";

		var regTag = '[object RegExp]',
			toString = Object.prototype.toString;

		var isRegExp = function(o) {
			return toString.apply(o) === regTag;
		};

		var other = function(string, pattern) {
			var patternString = '' + pattern,
				reg = new RegExp(patternString);

			return string.match(reg) || [];
		};

		return function(pattern) {
			pattern = pattern !== undefined ? pattern : /[a-z]+/ig;

			return isRegExp(pattern) ? this.match(pattern) || [] : other(this, pattern);
		};
	})();
}