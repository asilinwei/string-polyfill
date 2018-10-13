if (!String.prototype._toLowerCase) {
	String.prototype._toLowerCase = (function() {
		"use strict";

		var strSize = function(string) {
			return string.length;
		};

		var isUp = function(char) {
			return char >= 'A' && char <= 'Z';
		};

		var toLow = function(char) {
			var code = char.charCodeAt();

			return String.fromCharCode(code + 32);
		};

		var toLowerCase = function(string) {
			var result = '',
				i = 0,
				char;

			while (i < strSize(string)) {
				char = string[i];
				result += isUp(char) ? toLow(char) : char;
				i += 1;
			}
			return result;
		};

		return function() {
			return toLowerCase(this);
		};
	})();
}