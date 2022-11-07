// setters and getters
class user {
  constructor(name, age) {
    this.name = name
    this.#_age = age // no funciona
  }

  //metodos
  #speak() {
    return 'Hello'
  }

  greeting () {
    return `${this.#speak()} ${this.name}!!` // solo me funciono en funciones
  }

  // get age () {
  //   return this._age
  // }

  // set age (u) {
  //   this._age = u
  // }
}

const algo = new user('david', 12)

try{
  console.log(algo.greeting())
} catch (error) {
  console.log(error)
}