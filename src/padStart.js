if (!String.prototype._padStart) {
   String.prototype._padStart = (function() {
      "use strict";

      var size = function(string) {
         return string.length;
      };

      var toString = function(value) {
         return '' + value;
      };

      var toInteger = function(value) {
         var integer = Math.floor(+value);

         return integer === integer ? integer : 0;
      };

      var pad = function(chars, padSize) {
         var i = 0,
            j = 0,
            result = '';

         while (i < padSize) {
            if (j === size(chars)) {
               j = 0;
            }
            result += chars[j++];
            i++;
         }
         return result;
      };

      var join = function(string, length, chars) {
         var padSize = length - size(string);

         return pad(chars, padSize) + string;
      };

      return function(length, chars) {
         if (length === undefined) {
            length = 0;
         } else {
            length = toInteger(length);
         }
         if (chars === undefined) {
            chars = ' ';
         } else if (!chars) {
            return this;
         } else {
            chars = toString(chars);
         }
         return join(this, length, chars);
      };
   })();
}