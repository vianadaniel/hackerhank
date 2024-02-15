function largestPerimeter(nums: number[]): number {
    nums.sort((a,b) => a - b)

    let total = 0

    for(let i = 0; i < nums.length; i++){
       total += nums[i]
    }

    for(let j = nums.length -1; j >= 2; j--){
        if((total - nums[j])> nums[j]) return total
        total -= nums[j]
    }

    return -1

};