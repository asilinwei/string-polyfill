if (!String.prototype._escapeRegExp) {
	String.prototype._escapeRegExp = (function() {
		"use strict";

		var length = function(string) {
			return string.length;
		};

		var escape = function(char) {
			switch (char) {
				case '^':
				case '$':
				case '.':
				case '*':
				case '+':
				case '?':
				case '(':
				case ')':
				case '[':
				case ']':
				case '{':
				case '}':
				case '|':
					return '\\' + char;
				default:
					return char;
			}
		};

		var accumulate = function(string) {
			var str = '',
				i = 0;

			while (i < length(string)) {
				str += escape(string[i]);
				i += 1;
			}
			return str;
		};

		return function() {
			return accumulate(this);
		};
	})();
}