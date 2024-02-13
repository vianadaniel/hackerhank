


const words = ["abc","car","ada","racecar","cool"]

function firstPalindrome(words: string[]): string {

    for (const word of words) {
        let reverseStrings: string = ""
        for (let i = word.length - 1; i >= 0; i--) {


            reverseStrings += word[i]

        }

        if (word == reverseStrings) return word

    }
    return ""
 
};

console.log(firstPalindrome(words))

function firstPalindrome2(words: string[]): string {
    for (const w of words) 
      if (w == w.split('').reverse().join('')) return w
    return ''
  }