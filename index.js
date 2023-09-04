const [,, arg, decrypt] = process.argv
console.log(arg);

function encrypt(sentence, decrypt = false) {
    if (decrypt) {
        let newSentence = ''
        for (let i = 0; i < sentence.length; i++) {
            const letter = sentence[i];
            const nextLetter = sentence[i + 1] || null
            const thirdLetter = sentence[i + 2] || null
            if (letter === thirdLetter && nextLetter == 'o') {
                newSentence += letter
                i += 2
                continue
            } else {
                newSentence += letter
            }
        }
        return newSentence
    }

    return sentence.split('').map(letter => {
        if(isConsonant(letter) && letter !== ' ') {
            return `${letter}o${letter}`
        }
        return letter 
    }).join('') 
}

const consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
]

function isConsonant(letter) { 
    return consonants.includes(letter)
//    return Object.values(vowels).some(vowel => vowel === letter)

}

// console.log(isVowel('k'))
console.log(encrypt(arg || '1 car is red', false))
console.log(encrypt(arg || '1 cocaror isos roredod', true))
