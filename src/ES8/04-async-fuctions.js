const fnAsinc = () => {
  return new Promise((resolve, reject) => {
    true 
      ? setTimeout(() =>  resolve('Asinc!!'), 2000)
      : reject(new Error('Error!'))
  })
}

const anotherFn = async () => {
  const something = await fnAsinc()
  console.log(something)
  console.log('Hello!')
}

console.log('before')
anotherFn()
console.log('after')