if (!String.prototype._kebabCase) {
	String.prototype._kebabCase = (function() {
		"use strict";

		var isUpper = function(char) {
			return char >= 'A' && char <= 'Z';
		};

		var toLower = function(char) {
			var code = char.charCodeAt();

			return String.fromCharCode(code + 32);
		};

		var length = function(array) {
			return array.length;
		};

		var modify = function(array) {
			for (var i = 0, j, chunk; i < length(array); i += 1) {
				chunk = Array.from(array[i]);
				for (j = 0; j < length(chunk); j += 1) {
					if (isUpper(chunk[j])) {
						chunk[j] = toLower(chunk[j]);
					}
				}
				array[i] = chunk.join('');
			}
		};

		return function() {
			var wordPattern = /[A-Z]+(?=[A-Z][a-z]+)|[A-Z][a-z]+|[A-Z]+|[a-z]+/g,
				match = this.match(wordPattern) || [];

			modify(match);
			return match.join('-');
		};
	})();
}