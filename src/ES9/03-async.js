async function* anotherGenerator () {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

const other = anotherGenerator()
other.next().then(res => console.log(res))
other.next().then(res => console.log(res))
other.next().then(res => console.log(res))
console.log('heey')



async function arrayOfNames (array) {

  for await (let value of array){
    console.log(value)
  }
}

const name = arrayOfNames(['oscar', 'ana', 'pepe', 'andres'])
console.log('after')
