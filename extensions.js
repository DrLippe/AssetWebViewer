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