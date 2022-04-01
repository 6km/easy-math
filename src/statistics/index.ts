var { sum } = require("../utils")

module.exports = {
    min(arr: Array<any>): number {
        return Math.min.apply(null, arr);
    },

    max(arr: Array<any>): number {
        return Math.max.apply(null, arr);
    },

    /* Returns the mean of numbers */
    mean(...values: Array<number>): number {
        return sum(values) / values.length
    }
}