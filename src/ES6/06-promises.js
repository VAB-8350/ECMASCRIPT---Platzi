const anotherFunction = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (true) {
        resolve('Heey')
      } else {
        reject('Upps!')
      }
    }, 1000)
  })
}

anotherFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error))