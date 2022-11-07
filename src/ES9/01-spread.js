const user = {username: 'gndx', age: 34, country: 'CO'}

// con esto separo a "username" del resto de valores de el objeto "user"
const {username, ...values} = user

console.log(username)
console.log(values)