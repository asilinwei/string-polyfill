if (!String.prototype._trimStart) {
   String.prototype._trimStart = (function() {
      "use strict";

      var size = function(string) {
         return string.length;
      };

      var toString = function(value) {
         return '' + value;
      };

      var has = function(chars, char) {
         var i = 0;

         while (i < size(chars)) {
            if (chars[i] === char) {
               return true;
            }
            i++;
         }
         return false;
      };

      var start = function(string, chars) {
         var index = 0;

         while (1) {
            if (!has(chars, string[index])) {
               break;
            }
            index++;
         }
         return index;
      };

      var trim = function(string, chars) {
         var i = start(string, chars),
            result = '';

         while (i < size(string)) {
            result += string[i];
            i++;
         }
         return result;
      };

      return function(chars) {
         if (chars === undefined) {
            chars = ' ';
         } else {
            chars = toString(chars);
         }
         return trim(this, chars);
      };
   })();
}