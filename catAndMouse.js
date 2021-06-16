var x = 2
var y = 5
var z = 4

function cat(x, y, z) {
    let a = Math.abs(z - y)
    let b = Math.abs(z - x)
    
    if(a > b ){
        return 'Cat A'
    }else if(a < b){
        return 'Cat B'
    }else{
        return 'Mouse C'
    }
}
console.log(cat(x, y, z))