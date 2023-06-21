/* fetch('./db.json').then( (respuesta) =>
{
    /* console.log(respuesta) 
return respuesta.json() }
).then((data) => {
    console.log(data)
}) */

// .json transforma una respuesta a formato json


/* Conectar mediante fetch con un archivo json local, y cuando recibamos la data, ejecutar una función llamada
RenderizarPersonas(ListaDePersonas) que nos muestre un div con un h2 donde esté el nombre y un h3 con el apellido. */

/* Así lo hice yo:

const RenderizarPersonas( = (data) => {

data.forEach((usuario) => {
    containerHTML.innerHTML = containerHTML.innerHTML +  
    `<div>
        <h2>${usuario.nombre}</h2>
        <h3>${usuario.apellido}
        <hr>
    </div>`
})
})  */

/* Forma correcta: */

/* const container = document.getElementById("container")

const RenderizarPersonas = (listaDePersonas) => {
    console.log(listaDePersonas)
    listaDePersonas.forEach(persona => {
        container.innerHTML += `
        <h2>${persona.nombre}</h2>
        <h3>${persona.apellido}</h3>`        
    });
    
}

fetch('./db.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        RenderizarPersonas(data)
    }) */

/* Vamos a llamar a una API externa
 */

const URL_base = 'https://swapi.dev/'

fetch(URL_base + 'people').then(respuesta => {
    console.log(respuesta)
    return respuesta.json()

})
    .then(personas => {
    console.log(personas,results)
})

