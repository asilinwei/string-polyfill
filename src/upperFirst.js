if (!String.prototype._upperFirst) {
	String.prototype._upperFirst = (function() {
		"use strict";

		var size = function(string) {
			return string.length;
		};

		var isLow = function(char) {
			return char >= 'a' && char <= 'z';
		};

		var toUp = function(char) {
			var code = char.charCodeAt();
			
			return String.fromCharCode(code - 32);
		};

		var upperFirst = function(string) {
			for (var i = 0, str = '', char; i < size(string); i += 1) {
				char = string[i];
				if (!i) {
					str += isLow(char) ? toUp(char) : char;
				} else {
					str += char;
				}
			}
			return str;
		};

		return function() {
			return upperFirst(this);
		};
	})();
}