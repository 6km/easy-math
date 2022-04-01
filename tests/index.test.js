const { utils } = require('../dist')

require('../dist')

describe('easy-math', () => {
    describe('utils', () => {
        test('isNumber works as expected', () => {
            try {
                expect(utils.isNumber(19111)).toBeTruthy();
            } catch (err) {
                expect(utils.isNumber('math')).toBeFalsy();
            }
        })
    })
})