// enahced object literals

function newUser(user, age, country, uId) {
  return{
    id: uId,
    user,
    age,
    country
  }
}

console.log(newUser('gndx', 23, 'MX', 1))