import test from 'node:test'
import assert from 'node:assert'

/*
Given an array of integers arr and an integer k.
Find the least number of unique integers after removing exactly k elements.

Example 1:

Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.

Example 2:

Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
*/

function findLeastNumOfUniqueInts(arr, k) {
    let result = new Map()
    for (const num of arr) {

        result.set(num, result.get(num) + 1 || 1)

    }
    const uniqueFrequencies = Array.from(result.values()).sort((a, b) => a - b);

    let total = uniqueFrequencies.length

    for (const frequency of uniqueFrequencies) {
        if (k >= frequency) {
            k -= frequency;
            total--;
        } else {
            break;
        }
    }

    return total
};


test("should reverse string", t => {
    const testCases = [{
        input: [5, 5, 4],
        output: 1,
        k: 1
    }, {
        input: [4, 3, 1, 1, 3, 3, 2],
        output: 2,
        k: 3
    }
    ]

    for (const testCase of testCases) {

        const result = findLeastNumOfUniqueInts(testCase.input, testCase.k)

        assert.strictEqual(result, testCase.output, `Expect ${result} to be equal ${testCase.output} for input ${testCase.input}`)
    }
})
