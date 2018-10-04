if (!String.prototype._upperCase) {
	String.prototype._upperCase = (function() {
		"use strict";

		var length = function(array) {
			return array.length;
		};

		var isLow = function(char) {
			return char >= 'a' && char <= 'z';
		};

		var toUpper = function(char) {
			var code = char.charCodeAt();
			return String.fromCharCode(code - 32);
		};

		var modify = function(array) {
			for (var i = 0, j, chunk; i < length(array); i += 1) {
				chunk = Array.from(array[i]);
				for (j = 0; j < length(chunk); j += 1) {
					if (isLow(chunk[j])) {
						chunk[j] = toUpper(chunk[j]);
					}
				}
				array[i] = chunk.join('');
			}
		};

		return function() {
			var wordPattern = /[A-Za-z][a-z]+|[A-Za-z]+/g,
				match = this.match(wordPattern);

			modify(match);
			return match.join(' ');
		};
	})();
}