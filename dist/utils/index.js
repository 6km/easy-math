module.exports = Object.assign(Object.assign({}, require('./is').default), { sum: (...arr) => {
        var result = 0;
        arr.forEach(v => Array.isArray(v) ? result += v.reduce((prev, x) => x + prev) : result += v);
        return result;
    } });
