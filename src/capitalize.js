if (!String.prototype._capitalize) {
	String.prototype._capitalize = (function() {
		"use strict";

		var length = function(string) {
			return string.length;
		};

		var isUpper = function(char) {
			return char >= 'A' && char <= 'Z';
		};

		var isLower = function(char) {
			return char >= 'a' && char <= 'z';
		};

		var to = function(char) {
			var code = char.charCodeAt(),
				toCode;

			if (isUpper(char)) {
				toCode = code + 32;
			}
			if (isLower(char)) {
				toCode = code - 32;
			}
			return String.fromCharCode(toCode);
		};

		var process = function(string) {
			for (var i = 0, str = ''; i < length(string); i += 1) {
				if (!isLower(string[i]) && !isUpper(string[i])) {
					str += string[i];
					continue;
				}
				if (!i) {
					str += isLower(string[i]) ? to(string[i]) : string[i];
				} else {
					str += isUpper(string[i]) ? to(string[i]) : string[i];
				}
			}
			return str;
		};

		return function() {
			return process(this);
		};
	})();
}