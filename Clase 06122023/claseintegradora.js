/* const personas = [
    { nombre: 'juan', edad: 25, ciudad: 'Madrid' },
    { nombre: 'jorge', edad: 18, ciudad: 'Barcelona' },
    { nombre: 'ana', edad: 15, ciudad: 'Valencia' },
    { nombre: 'juan', edad: 25, ciudad: 'Madrid' },

    { nombre:'carolina',edad: 35, ciudad: 'Málaga'}
] */

// obtener un array de nombre -MAP: porque devuelve un array y busca el nombre de todos los objetos.
/* 
console.log(personas.map(persona => persona.nombre)) */

// personas mayores de 30 años -FILTER:

/* const MayoresDeTreinta = (personas) => personas.filter(persona => persona.edad > 30);
const mayoresDeTreinta = MayoresDeTreinta(personas);
console.log(mayoresDeTreinta) */

// encontrar a la primer persona de Madrid -FIND: porque devuelve un elemento. En este caso, el primero.

/* console.log(personas.find(persona =>persona.ciudad === "Madrid")) */

/* const nombres = []

const nombres = document.getElementById('names')

const obtenerNombres = (personas) => {
    personas.forEach(persona => {
    personas.innerHTML += `
    <div>
    <p>${persona.nombre}</p><br/>
    </div>`


    nombres = persona.nombre
        
});
return nombres
}

console.log(nombres) */


// encontrar el empleado con ID = 3

// Mostrar empleados con salarios superiores a 4000

const empleados = [
{id:1, nombre: 'juan', salario: 4000},
{id:2, nombre: 'pedro', salario: 5000 },
{id:3, nombre: 'sara', salario: 12000},
{id:4, nombre: 'jessica', salario: 3000}
]

/* const masde4k = (empleados) => empleados.filter(empleado => empleado.salario > 4000);
const Masde4k = masde4k(empleados);
console.log(Masde4k) */

// incrementar el salario de todos los empleados en un 10%

// Lo que intenté hacer yo

/* const aumento = (empleados) => {
    empleados.forEach(empleado => {
        let sal = salario + salario/10
        
    })
    console.log(empleado.nombre + ' cobraba ' + empleado.salario + '. Ahora cobra ' + sal)
} */

// Así está bien hecho:

/* const empleadosConIncremento = empleados.map(empleado => ({ ...empleado, salario: empleado.salario * 1.1 }));

console.log(empleadosConIncremento); */

// Otra forma

/* const empleadosConIncremento = empleados.map(empleado =>{
        empleado.salario = empleado.salario * 1.1
        return empleado
    })

    console.log(empleadosConIncremento); */

