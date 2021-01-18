function countLetters(str) {
  // Cria um objeto pra guardar o resultado
  const result = {}

  // Itera por cada caractere da string
  for (let char of str) {
    // Verifica se o objeto, na chave char, é vazio
    if (!result[char]) {
      // Se for vazio, aribui 1 a ele
      // Supondo que char é "a" e result é {},
      // depois dessa operação result é {a: 1}
      result[char] = 1
    } else {
      // Se não for vazio, soma 1 a ele
      // Supondo que char é "a" e result é {a: 1},
      // depois dessa operação result é {a: 2}
      result[char] += 1
    }
  }

  // Retorna o result
  return result
}

console.log(countLetters("aaabbbcccc"))
