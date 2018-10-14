if (!String.prototype._trimEnd) {
	String.prototype._trimEnd = (function() {
		"use strict";

		var strSize = function(string) {
			return string.length;
		};

		var has = function(string, char) {
			for (var i = 0; i < strSize(string); i += 1) {
				if (string[i] === char) {
					return true;
				}
			}
			return false;
		};

		var last = function(string, chars) {
			var i = strSize(string) - 1;

			while (has(chars, string[i])) {
				i--;
			}
			return i;
		};

		var join = function(string, end) {
			for (var i = 0, str = ''; i <= end; i += 1) {
				str += string[i];
			}
			return str;
		};

		return function(chars) {
			var remove = ' ',
				end;
				
			if (chars !== undefined) {
				remove = '' + chars;
			}
			end = last(this, remove);
			return join(this, end);
		};
	})();
}