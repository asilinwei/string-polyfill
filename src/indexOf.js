if (!String.prototype._indexOf) {
    String.prototype._indexOf = (function() {
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

        var find = function(string, search, pos) {
            var str = '',
                i = pos,
                j,
                target = search[0];

            while (i < size(string)) {
                if (string[i] === target) {
                    j = i;
                    while (j < size(string)) {
                        str += string[j];
                        if (string[j] !== search[j - i]) {
                            break;
                        }
                        if (str === search) {
                            return i;
                        }
                        j += 1;
                    }
                    str = '';
                }
                i += 1;
            }
            return -1;
        };

        return function(search, position) {
            if (search === undefined) {
                return -1;
            }
            search = toString(search);

            if (!search) {
                return 0;
            }
            if (position === undefined) {
                position = 0;
            } else {
                position = toInteger(position);
            }
            return find(this, search, position);
        };
    })();
}
