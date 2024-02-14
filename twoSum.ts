function twoSum(nums: number[], target: number): number[] {
   

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length && i != j; j++){
            if((nums[i]+nums[j]) == target) return [i,j] as number[]
        }

    }
    
   return []
};

function twoSum2(nums: number[], target: number): number[] {
    const hash={}
    let res: number[] =[]
    nums?.forEach((num, idx)=>{
        const difference = target -num
        if(difference in hash) res= [hash?.[difference], idx]
        hash[num]= idx
    
    })
    return res
};

// function twoSum(nums: number[], target: number): number[] {
//     // Store original array // O(n)
//     const originalArray = [];
//     for (let i = 0; i < nums.length; i++) {
//         originalArray.push(nums[i])
//     }

//     // sort  // O(nlog(n))
//     nums.sort((a, b) => a - b);

//     // check // O(n)

//     let start = 0;
//     let end = nums.length - 1;

//     while (start < end) {
//         if (nums[start] + nums[end] === target) {
//             break;
//         }
//         if (nums[start] + nums[end] < target) {
//             start++;
//         }
//         if (nums[start] + nums[end] > target) {
//             end--;
//         }
//     }

//     // Search for postion  // O(n)
//     let a = null;
//     let b = null;
//     for (let i = 0; i < originalArray.length; i++) {
//         if (nums[start] === originalArray[i] && a===null) {
//             a = i;
//         }
//         if (nums[end] === originalArray[i] && i !== a && b===null) {
//             b = i;
//         }
//     }

//     return [a, b]
// };