a =[4, 6, 5, 3, 3, 1]



function pick(a){
    
    // console.log(a.map((e,i,ar) => ar.filter(ee => ((e-ee)==0||(e-ee)==1)).length).reduce((x,y)=>Math.max(x,y)));
    a.sort((a, b) => b - a);
    
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        console.log(a[i])
      let count = 1;
      for (let j = 0; j < a.length; j++) {
          console.log(a[j])
        if (i < j) {
          if (a[i] - a[j] <= 1) {
            
            count++;
          }
        }
      }
      arr.push(count);
    }
    // console.log(arr)
    return Math.max(...arr)

}
pick(a)
