const button = document.getElementById('btn')


// importo de forma dinamica el modulo esto permite cargar las paginas de forma mas rapido sin esperar a que carguen.
//  todos los modulos perdiendo tiempo de inicio
button.addEventListener('click', async () => {
  const module = await import('./module.js')

  console.log(module)
  module.hello()
})