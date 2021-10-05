'use strict';

Array.prototype.distinct = function() {
    function unique(value, index, self) {
        return self.indexOf(value) === index;
    }

    return this.filter(unique);
};

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * (this.length - 1))];
}

Array.prototype.joinClose = function(separator, close) {
    if (this.length > 1 && close != null)
        return this.slice(0, -1).join(separator) + ` ${close} ` + this.slice(-1);
    return this.join(separator);
}