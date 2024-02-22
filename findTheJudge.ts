function findJudge(n: number, trust: number[][]): number {
    if(n == 1 && trust.length == 0) return 1
    const map = new Map()
    const people = []
    for(let i = 0; i < trust.length; i++){
        map.set(trust[i][1], map.get(trust[i][1]) + 1 || 1)
        if(trust[i][1] != trust[i][0])people.push(trust[i][0])
    }

    for(const [a,b] of map){
        if(b == n-1 && !people.includes(a)) return a
    }

   return -1
};