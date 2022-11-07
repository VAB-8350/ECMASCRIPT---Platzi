// capturo el error
try {
  hello()
} catch (error) {
  console.log(error)
}

// no capturo el error
try {
  anotherFn()
} catch {
  console.log('esto es un error')
}