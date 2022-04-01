export default {
    /**
     * Test whether a value is an numeric value.
     * 
     * @param x
     */
    isNumber(x: any) {
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
    isString(x: any) { return typeof x === 'string' },

    /**
     * Test whether a value is a boolean value.
     * 
     * @param x
     */
    isBoolean(x: any) { return typeof x === 'boolean' },

    /**
     * Test whether a value is a function.
     * 
     * @param x
     */
    isFunction(x: any) { return typeof x === 'function' },

    /**
     * Test whether a value is a date.
     * 
     * @param x
     */
    isDate(x: any) { return x instanceof Date },

    /**
     * Test whether a value is a regexp.
     * 
     * @param x
     */
    isRegExp(x: any) { return x instanceof RegExp },

    /**
     * Test whether a value is null.
     * 
     * @param x
     */
    isNull(x: any) { return x === null },

    /**
     * Test whether a value is undefined.
     * 
     * @param x
     */
    isUndefined(x: any) { x === undefined },

    /**
     * Test whether a value is zero.
     * 
     * @param x
     */
    isZero(x: any): void { x == 0 },

    /**
     * Test whether a value is negative.
     * 
     * @param x
     */
    isNegative(x: number): boolean { return x < 0 },


    /**
     * Test whether a value is positive.
     * 
     * @param x
     */
    isPositive(x: number) { return x > 0 },

    /**
     * Test whether a value is even.
     * 
     * @param x
     */
    isEven(n: number) { return n % 2 === 0 },

    /**
     * Test whether a value is odd.
     * 
     * @param x
     */
    isOdd(n: number): boolean {
        return !this.isEven(n);
    }
}