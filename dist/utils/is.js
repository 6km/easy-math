"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * Test whether a value is an numeric value.
     *
     * @param x
     */
    isNumber(x) {
        if (typeof x === 'number') {
            return x - x === 0;
        }
        if (typeof x === 'string' && x.trim() !== '') {
            return Number.isFinite ? Number.isFinite(+x) : isFinite(+x);
        }
        return false;
    },
    /**
     * Test whether a value is a string value.
     *
     * @param x
     */
    isString(x) { return typeof x === 'string'; },
    /**
     * Test whether a value is a boolean value.
     *
     * @param x
     */
    isBoolean(x) { return typeof x === 'boolean'; },
    /**
     * Test whether a value is a function.
     *
     * @param x
     */
    isFunction(x) { return typeof x === 'function'; },
    /**
     * Test whether a value is a date.
     *
     * @param x
     */
    isDate(x) { return x instanceof Date; },
    /**
     * Test whether a value is a regexp.
     *
     * @param x
     */
    isRegExp(x) { return x instanceof RegExp; },
    /**
     * Test whether a value is null.
     *
     * @param x
     */
    isNull(x) { return x === null; },
    /**
     * Test whether a value is undefined.
     *
     * @param x
     */
    isUndefined(x) { x === undefined; },
    /**
     * Test whether a value is zero.
     *
     * @param x
     */
    isZero(x) { x == 0; },
    /**
     * Test whether a value is negative.
     *
     * @param x
     */
    isNegative(x) { return x < 0; },
    /**
     * Test whether a value is positive.
     *
     * @param x
     */
    isPositive(x) { return x > 0; },
    /**
     * Test whether a value is even.
     *
     * @param x
     */
    isEven(n) { return n % 2 === 0; },
    /**
     * Test whether a value is odd.
     *
     * @param x
     */
    isOdd(n) {
        return !this.isEven(n);
    }
};
