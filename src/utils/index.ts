module.exports = {
    ...require('./is').default,
    sum: (...arr: Array<number>): number => {
        var result = 0;

        arr.forEach(v => Array.isArray(v) ? result += v.reduce((prev, x) => x + prev) : result += v)

        return result;
    }
}