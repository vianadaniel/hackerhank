$s = [[5, 3, 4], 
      [1, 5, 8], 
      [6, 4, 2]]
$c = [[8, 3, 4], 
      [1, 5, 9], 
       [6, 7, 2]]

function square($s, $c) {
    var sum = []
    var result = 0
    for(var i = 0; i < $s[0].length; i++){
       if($s[0][i] !== $c[0][i]){
        sum.push(Math.abs($s[0][i] - $c[0][i]))
       }
    }
    for(var i = 0; i < $s[0].length; i++){
        if($s[1][i] !== $c[1][i]){
         sum.push(Math.abs($s[1][i] - $c[1][i]))
        }
     }
     for(var i = 0; i < $s[0].length; i++){
        if($s[2][i] !== $c[2][i]){
            
         sum.push(Math.abs($s[2][i] - $c[2][i]))
        }
     }
     for (var i=0; i<sum.length; i++){
  
        result += sum[i]
}  
   return result
}
square($s, $c)