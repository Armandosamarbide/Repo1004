console.log(new Date())

// Generar una lista de al menos 5 productos con los campos precio, nombre y categoría
// Generar una función llamada renderizarLista, que recibirá un array y devolverá un string en el siguiente formato:

/* Productos disponibles
1 - primer producto
2 - segundo producto
3 - tercer producto */

/* Solicitar al usuario si quiere comprar, que escriba Si si desea comprarEn caso de escribir Si, 
se solicitará el número del producto de la lista(Usar la función renderizarLista).
Cuando tengamos el número, buscar el producto en el array y preguntaremos qué cantidad del producto
quiere comprar.Si la cantidad supera el stock, alertar "no hay suficiente stock"
Si no se procederá a agregar el producto con un nuevo campo llamado cantidad con la cantidad 
comprada al array  */


const productos = [
  { precio: 10, nombre: "Magnum .357", categoria: "Electrónica", stock: 5 },
  { precio: 20, nombre: "M16", categoria: "Ropa", stock: 3 },
  { precio: 15, nombre: "AK-47", categoria: "Hogar", stock: 10 },
  { precio: 12, nombre: "Fusil de francotirador M40", categoria: "Electrónica", stock: 8 },
  { precio: 25, nombre: "Minigun", categoria: "Ropa", stock: 2 }
];

// Esta función recibe un array y devuelve un string

const renderizarLista = (array) => {
    let listaResultante = 'Lista de productos disponibles: \n'
    array.forEach((element, index) => {
        listaResultante = listaResultante + (index + 1) + '- ' + element.nombre + '\n'
    });
    return listaResultante
}
const carrito = ['']
let decision = prompt('Quiere comprar?')

while (decision == 'SI') {
    const producto = productos[prompt(renderizarLista(productos)) - 1]
    console.log(producto)
    let cantidad = prompt('Cuántos ' + producto.nombre + ' quiere comprar')
    if (cantidad <= producto.stock) {
        producto.cantidad = cantidad
        carrito.push(producto)
    }else {alert('sin stock')}
    decision = prompt('Quiere seguir comprando?')
}