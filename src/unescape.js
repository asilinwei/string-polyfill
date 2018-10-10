if (!String.prototype._unescape) {
	String.prototype._unescape = (function() {
		"use strict";

		var regEscapeHtml = /&(?:amp|lt|gt|quot|#39);/g;

		var unescape = function(string) {
			var str = '',
				start = 0,
				end,
				match;

			regEscapeHtml.lastIndex = 0;
			while (match = regEscapeHtml.exec(string)) {
				end = match.index;
				switch (match[0]) {
					case '&amp;':
						str += splice(string, '&', start, end);
						break;
					case '&lt;':
						str += splice(string, '<', start, end);
						break;
					case '&gt;':
						str += splice(string, '>', start, end);
						break;
					case '&quot;':
						str += splice(string, '"', start, end);
						break;
					case '&#39;':
						str += splice(string, '\'', start, end);
				}
				start = regEscapeHtml.lastIndex;
			}
			return str + string.slice(start);
		};

		var splice = function(string, char, start, end) {
			return string.slice(start, end) + char;
		};

		return function() {
			if (!this || !regEscapeHtml.test(this)) {
				return this;
			}
			return unescape(this);
		};
	})();
}