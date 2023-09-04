import {ConsonatsEncryptor} from './ConsonantsEncryptor.js'

const encryptor = new ConsonatsEncryptor() 
const arg = process.argv.splice(2)[0]
console.log(encryptor.encrypt(arg || '1 car is red'))
console.log(encryptor.decrypt(arg || '1 cocaror isos roredod'))
