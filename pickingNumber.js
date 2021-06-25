a =[4, 6, 5, 3, 3, 1]

a.sort((a, b) => a-b)

function pick(a){
    let sum = []
for(var i=0; i<a.length; i++){

    if((a[i + 1] - a[i]) <= 1){
sum.push(a[i])
    }
    for(var j=0; j<sum.length; j++){
if((sum[j+1] - sum[j]) ){
    console.log(sum[j+1], sum[j])
}
    }
}
console.log(sum)
}
pick(a)
