if (!String.prototype._startsWith) {
	String.prototype._startsWith = (function() {
		"use strict";

		return function(target, position) {
			var string = '',
				start = 0,
				substring;

			if (target !== undefined) {
				string = '' + target;
				if (!string) {
					return true;
				}
			}
			if (position !== undefined) {
				var index = Math.floor(+position);
				if (Number.isInteger(index) && index >= 0) {
					start = index;
				}
			}
			substring = this.slice(start);
			return !!string && !substring.indexOf(string);
		};
	})();
}