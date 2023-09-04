import {Encryptor} from './Encryptor.js'

export class ConsonatsEncryptor extends Encryptor {
    consonants = [
        'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
    ]
 constructor() {
    super()
 }

 isConsonant(letter) { 
    return this.consonants.includes(letter)
  }


  encrypt(sentence) {
    return sentence.split('').map(letter => {
        if(this.isConsonant(letter) && letter !== ' ') {
            return `${letter}o${letter}`
        }
        return letter 
    }).join('') 
}


 decrypt(sentence) {
    let newSentence = ''
    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i];
        const nextLetter = sentence[i + 1] || null
        const thirdLetter = sentence[i + 2] || null
        if (letter === thirdLetter && nextLetter == 'o' && this.isConsonant(letter))  {
            newSentence += letter
            i += 2
            continue
        } else {
            newSentence += letter
        }
    }
    return newSentence
}

}