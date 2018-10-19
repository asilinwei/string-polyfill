if (!String.prototype._lastIndexOf) {
   String.prototype._lastIndexOf = (function() {
      "use strict";

      var size = function(string) {
         return string.length;
      };

      var toString = function(value) {
         return '' + value;
      };

      var toInteger = function(value, string) {
         var integer = Math.floor(+value);

         return integer === integer ? integer : size(string) - 1;
      };

      var last = function(string) {
         return string[size(string) - 1];
      };

      var find = function(string, search, pos) {
         var target = last(search),
             str = '',
             j,
             i = pos,
             index;

         while (i >= 0) {
            if (string[i] === target) {
               j = i;
               while (j >= 0) {
                  str = string[j] + str;
                  index = size(search) - 1 - (i - j);
                  if (string[j] !== search[index]) {
                     break;
                  }
                  if (str === search) {
                     return j;
                  }
                  j--;
               }
               str = '';
            }
            i--;
         }  
         return -1;      
      };

      return function(search, position) {
         if (search === undefined) {
            return -1;
         }
         search = toString(search);
         if (!search) {
            return size(this);
         }
         if (position === undefined) {
            position = size(this) - 1;
         } else {
            position = toInteger(position, this);
         }
         return find(this, search, position);
      };
   })();
}