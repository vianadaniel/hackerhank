function pivotInteger(n: number): number {
    let total = n * (n + 1)/2;
    while(n >= 1){

        let sum1 = n * ( n + 1)/2
        if(sum1 === total - sum1 + n){
            return n
        }
        n--
    }
    return -1
};