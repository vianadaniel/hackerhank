// const b = 60
// const keybords = [40,50,60]
// const drives = [5,8,12]

const b = 10
const keyboards = [3,1]
const drives = [5,2,8]



function eletronic (keyboards, drives, b){
    let result = []
    
    
    for (let i = 0; i < keyboards.length; i++){
        for (let j = 0; j < drives.length; j++){
            let sum = keyboards[i] + drives[j]
            
            if(sum <= b){
                result.push(sum)
                
            }
            
        }
    }
    console.log(result)
    if (result.length === 0){
        return -1
    }
    return Math.max.apply(null, result)
}
console.log(eletronic(keyboards, drives,b))

