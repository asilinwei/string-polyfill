if (!String.prototype._concat) {
	String.prototype._concat = (function() {
		"use strict";

		var size = function(obj) {
			return obj.length;
		};

		var join = function() {
			var args = arguments,
				result = this,
				i = 0;

			while (i < size(args)) {
				result += args[i];
				i += 1;
			}
			return result;
		};

		return function() {
			return join.apply(this, arguments);
		};
	})();
}