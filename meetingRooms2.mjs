import test from 'node:test'
import assert from 'node:assert'

// Given an array of meeting time intervals consisting of start and end times ([s1,e1),
//     [$2,e2], ... ] (s; < ej), return the minimum number of conference rooms required.

/**
 * @param {number[][]} interval
 * @returns {number}
 */
function meetingRooms(interval) {
    interval.sort((a, b) => a[0] - b[0])

    let end = 0
    let start = 0
    let count = 1

    for (let i = 1; i < interval.length; i++) {
        end = interval[i - 1][1]

        start = interval[i][0]


        if (end <= start) {

        } else count++

    }

    return count
}

test("should pass", t => {
    const testCases = [{
        input: [[0, 30], [5, 10], [15, 20]],
        output: 2
    }, {
        input: [[7, 10], [2, 4]],
        output: 1
    }]

    for (const testCase of testCases) {

        const result = meetingRooms(testCase.input)

        assert.strictEqual(result, testCase.output, `Expect ${result} to be equal ${testCase.output} for input ${testCase.input}`)
    }
})
