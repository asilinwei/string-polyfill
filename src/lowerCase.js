if (!String.prototype._lowerCase) {
	String.prototype._lowerCase = (function() {
		"use strict";

		var size = function(hasLength) {
			return hasLength.length;
		};

		var isUpperCase = function(char) {
			return char >= 'A' && char <= 'Z';
		};

		var toLowerCase = function(char) {
			var code = char.charCodeAt();

			return String.fromCharCode(code + 32);
		};

		var low = function(char) {
			return isUpperCase(char) ? toLowerCase(char) : char;
		};

		var wordLowerCase = function(word) {
			var result = '',
				i = 0,
				char;

			while (i < size(word)) {
				char = word[i];
				result += low(char);
				i += 1;
			}
			return result;
		};

		var lowerCase = function(array) {
			var result = '',
				i = 0,
				word;

			while (i < size(array)) {
				word = array[i];
				array[i] = wordLowerCase(word);
				i += 1;
			}
		};

		return function() {
			var regWord = /[A-Z]+(?=[A-Z][a-z]+)|[A-Z][a-z]+|[A-Z]+|[a-z]+/g,
				match = this.match(regWord) || [];

			lowerCase(match);
			return match.join(' ');
		};
	})();
}