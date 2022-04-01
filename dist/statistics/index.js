var { sum } = require("../utils");
module.exports = {
    min(arr) {
        return Math.min.apply(null, arr);
    },
    max(arr) {
        return Math.max.apply(null, arr);
    },
    /* Returns the mean of numbers */
    mean(...values) {
        return sum(values) / values.length;
    }
};
