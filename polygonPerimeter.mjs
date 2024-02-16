import test from 'node:test'
import assert from 'node:assert'

/*
You are given an array of positive integers nums of length n.

A polygon is a closed plane figure that has at least 3 sides.
The longest side of a polygon is smaller than the sum of its other sides.

Conversely, if you have k (k >= 3) positive real numbers a1, a2, a3, ...,
ak where a1 <= a2 <= a3 <= ... <= ak and a1 + a2 + a3 + ... + ak-1 > ak,
then there always exists a polygon with k sides whose lengths are a1, a2, a3, ..., ak.

The perimeter of a polygon is the sum of lengths of its sides.

Return the largest possible perimeter of a polygon whose sides can be formed from nums,
or -1 if it is not possible to create a polygon.
*/

function largestPerimeter(nums) {
    nums.sort((a, b) => a - b)

    let total = 0

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }

    for (let j = nums.length - 1; j >= 2; j--) {
        if ((total - nums[j]) > nums[j]) return total
        total -= nums[j]
    }

    return -1

};


test("should pass", t => {
    const testCases = [{
        input: [5, 5, 5],
        output: 15
    }, {
        input: [1, 12, 1, 2, 5, 50, 3],
        output: 12
    },
    {
        input: [5, 5, 50],
        output: -1
    }
    ]

    for (const testCase of testCases) {

        const result = largestPerimeter(testCase.input)

        assert.strictEqual(result, testCase.output, `Expect ${result} to be equal ${testCase.output} for input ${testCase.input}`)
    }
})
