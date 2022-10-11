const ar = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

const cod =   `${ar.length + 1}`.length  === 1
? `C${`0000${ar.length + 1}`}`
: `C${`0000${ar.length + 1}`.slice(
      `${ar.length + 1}`.length - 1,
  )}`

console.log(cod)


const codPadStart = `C${`${ar.length + 1}`.padStart(5,0)}`

console.log(codPadStart)