if (!String.prototype._escape) {
    String.prototype._escape = (function() {
        "use strict";

        var length = function(string) {
            return string.length;
        };

        var escape = function(char) {
            switch (char) {
                case '&':
                    return '&amp;';
                case '>':
                    return '&gt;';
                case '<':
                    return '&lt;';
                case '"':
                    return '&quot;';
                case '\'':
                    return '&apos;';
                default:
                    return char;
            }
        };

        var process = function(string, str) {
            var i = 0;
            while (1) {
                str += escape(string[i++]);
                if (!string[i]) {
                    break;
                }
            }
            return str;
        };

        return function() {
            if (!/[&<>"']/.test(this)) {
                return this;
            }
            return process(this, '');
        };
    })();
}