module.exports = Object.assign({}, {
    ...require('./constants').default,
    ...require('./statistics'),
    ...require('./probability'),
    ...require('./trigonometric'),
    utils: require('./utils')
})