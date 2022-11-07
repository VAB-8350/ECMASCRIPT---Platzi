// declarando
class User {}
// instancia de una clase
// const newUser = new User()

class user {
  // metodos
  greeting () {
    return 'Hello'
  }
}

const andres = new user()
console.log(andres.greeting())

const bebeloper = new user()
console.log(bebeloper.greeting())


// constructor

class user {
  constructor () {
    console.log('Nuevo usuario')
  }

  greeting () {
    return 'Hello'
  }
}

const david = new user()

// this
class user {
  constructor (name) {
    this.name = name
  }

  //metodos
  speak () {
    return 'Hello'
  }

  greeting () {
    return `${this.speak()} ${this.name}!!`
  }
}

const ana = new user('Ana')
console.log(ana.greeting())

// setters and getters
class user {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  //metodos
  speak() {
    return 'Hello'
  }

  greeting () {
    return `${this.speak()} ${this.name}!!`
  }

  get uAge () {
    return this.age
  }

  set uAge (u) {
    this.age = u
  }
}

const algo = new user('david', 12)
console.log(algo.uAge)
console.log(algo.uAge = 20)
console.log(algo.age)
algo.age = 60
console.log(algo.age, algo.uAge)