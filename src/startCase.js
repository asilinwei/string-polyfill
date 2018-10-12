if (!String.prototype._startCase) {
	String.prototype._startCase = (function() {
		"use strict";

		var length = function(hasLength) {
			return hasLength.length;
		};

		var startCase = function(string) {
			var str = '',
				char;

			for (var i = 0; i < length(string); i += 1) {
				char = string[i];
				str += i ? char : char.toUpperCase();
			}
			return str;
		};

		var modify = function(array) {
			for (var i = 0, word; i < length(array); i += 1) {
				word = array[i];
				array[i] = startCase(word);
			}
		};

		return function() {
			var regWord = /[A-Z]+(?=[A-Z][a-z]+)|[A-Z][a-z]+|[A-Z]+|[a-z]+/g,
				match = this.match(regWord) || [];

			if (!length(match)) {
				return '';
			}
			modify(match);
			return match.join(' ');
		};
	})();
}