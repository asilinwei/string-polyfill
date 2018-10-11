if (!String.prototype._toUpperCase) {
	String.prototype._toUpperCase = (function() {
		"use strict";

		var length = function(string) {
			return string.length;
		};

		var isLow = function(char) {
			return char >= 'a' && char <= 'z';
		};

		var toUp = function(char) {
			var code = char.charCodeAt();

			return String.fromCharCode(code - 32);
		};

		var join = function(string) {
			var str = '',
				char;

			for (var i = 0; i < length(string); i += 1) {
				char = string[i];
				str += isLow(char) ? toUp(char) : char;
			}
			return str;
		};

		return function() {
			if (!length(this)) {
				return '';
			}
			return join(this);
		};
	})();
}