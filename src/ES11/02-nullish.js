// este operador "??" verifica si el valor que estamos intentando asignar es null o undefined, de ser asi asigna el segundo valor que pasemos
const anotherNumber = null
const validate = anotherNumber ?? 5

console.log(validate)