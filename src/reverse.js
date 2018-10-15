if (!String.prototype._reverse) {
	String.prototype._reverse = (function() {
		"use strict";

		var size = function(sequence) {
			return sequence.length;
		};

		var toArray = function(string) {
			var result = [],
				i = 0,
				char;

			while (i < size(string)) {
				char = string[i];
				result.push(char);
				i += 1;
			}
			return result;
		};

		var swap = function(array, firstIndex, secondIndex) {
			var temp = array[firstIndex];
			array[firstIndex] = array[secondIndex];
			array[secondIndex] = temp;
		};

		var reverse = function(array) {
			var i = 0,
				j = size(array) - 1;

			while (i < j) {
				swap(array, i++, j--);
			}
		};

		return function() {
			var chars = toArray(this);

			reverse(chars);
			return chars.join('');
		};
	})();
}