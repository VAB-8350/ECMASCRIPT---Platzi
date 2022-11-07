function newUser(name, age, country) {
  var name = name || 'pepe'
  var age = age || 32
  var country = country || 'ARS'

  console.log(name, age, country)
}
newUser()
newUser('andres', 23, 'argentina')

function newAdmin(name = 'pepe', age = 312, country = 'CL') {
  console.log(name, age, country)
}

newAdmin()
newAdmin('andres', 23, 'argentina')