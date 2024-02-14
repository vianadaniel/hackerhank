function rearrangeArray(nums: number[]): number[] {
    const arrayPositive:number[] = []
    const arrayNegative:number[] = []
    for(const num of nums){
        if(num<0){ arrayNegative.push(num)}
        else{arrayPositive.push(num)}
    }
    
    const result:number[] = []
    for(let i = 0; i < arrayPositive.length; i++){
        result.push(arrayPositive[i],arrayNegative[i])
    }
    return result
};