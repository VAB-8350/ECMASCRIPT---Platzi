function* iterate(array) {
  for(let value of array) {
    yield value
  }
}

const it = iterate(['oscar', 'andres', 'ana', 'ulices', 'david'])
console.log(it.next())