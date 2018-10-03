/**
 * 2018-10-03
 * @copyright 2018 LinWei
 * @author LinWei
 * 
 * @description 
 * Pads string on the left and right sides if it is shorter
 * than len. Padding characters are truncated if they can not
 * be evenly divided by len.
 * 
 * @param {number} [len=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @return {string} Return the padding string.
 * @example
 *
 * var string = 'abc';
 *
 * string._pad(8)
 * // => '  abc   '
 *
 * string._pad(8, '12')
 * // => '12abc121'
 *
 * string._pad(3)
 * // => 'abc'
 */
if (!String.prototype._pad) {
	String.prototype._pad = (function() {
		"use strict";

		var length = function(string) {
			return string.length;
		};

		// check if it is number.
		var isNumber = function(value) {
			return typeof value === 'number' && isFinite(value);
		};

		// check if it is string.
		var isString = function(value) {
			return typeof value === 'string';
		};

		var pad = function(string, chars, padLength) {
			var left = '',
				right = '';

			for (var i = 0, j = 0, k = 0; i < padLength; i += 1) {
				if (!(i % 2)) {
					if (!chars[j]) {
						j = 0;
					}
					right += chars[j++];
				} else {
					if (!chars[k]) {
						k = 0;
					}
					left += chars[k++];
				}
			}

			return left + string + right;
		};

		return function(len, chars) {
			len = len !== undefined ? Math.floor(+len) : 0;
			chars = chars !== undefined ? '' + chars : ' ';

			if (isNumber(len) && isString(chars)) {
				return pad(this, chars, len - length(this));
			}
			return this;
		};
	})();
}