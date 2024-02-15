import test from 'node:test'
import assert from 'node:assert'

/**
 * @description Given a string, reverse it.
 * @param {String} s
 * @returns {String}
 */
function reverseString(s) {
    if (s.length <= 1) {
        return s
    } else {
        const [char, ...rest] = s

        return reverseString(rest) + char
    }


    // let result = ""
    // for (let i = s.length - 1; i >= 0; i--) {
    //     result += s[i]
    // }
    // return result
    //   return s.split('').reverse().join('')

}

test("should reverse string", t => {
    const testCases = [{
        input: '',
        output: ''
    }, {
        input: 'Lucas',
        output: 'sacuL'
    }]

    for (const testCase of testCases) {

        const result = reverseString(testCase.input)

        assert.strictEqual(result, testCase.output, `Expect ${result} to be equal ${testCase.output} for input ${testCase.input}`)
    }
})
