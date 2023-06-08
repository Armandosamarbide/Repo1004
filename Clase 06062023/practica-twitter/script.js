/* const recomendedUsers = [
    {
        nombre: 'Lucas',
        username: '@LucasOk',
        image: 'https://lh3.googleusercontent.com/ONpvLgqVCiILt1f5_bAl_FJn8Y2ZTWd1iABITTUce-UmHV3dkXHy-x7YNK668HnjDa0hoL5t7x0hCy91zdjyvOtdohOcoJ_w5Wuf2Cu5Uz3TmSI76GQ=w500-rp-e30'
    },
    {
        nombre: 'Amanda',
        username: '@ahugnkiss',
        image: 'https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30'
    },
    {
        nombre: 'Pepe',
        username: '@PepeGrilloOk',
        image: 'https://lh3.googleusercontent.com/LxD7qhuSHIr45NYir7jj_68wEkkrCtaYzCrSHGgPT9mm0pWmXHoB0iLq42CsV4U9jPT7FdwSPPTPOvs1W8yV0Jzp0HccqF6gegtAvX2U-3iA_krgtPfB=w500-rp-e30'
    },
    {
        nombre: 'Juan',
        username: '@yosoyjuan',
        image: 'https://lh3.googleusercontent.com/v6rNJ9lk1JgiNayMmPfg8ee2pDBm8_BP7xxjP2v0wm-NAZ2dR-XZ-0sLAxKFGnDsyRu6M3UxEu871dRsfhcAJYGnvbTDHjGXqpLgoM1k51RK8pYp3vM=w500-rp-e30'
    },
    {
        nombre: 'Tess T. Culls',
        username: '@tesstculls',
        image: 'https://lh3.googleusercontent.com/nasUP3DdF_4ufAaEUyyzjFSMeUsfVCUOAcbIxtWnvUQyeielXpnZJG2AVdo3EL7SQp-juEEG98rOwd0EqcsKosUd4Qn3dcMjQ9N6sKq16n7Q8HYp2y7_=w500-rp-e30'
    },
    
    {
        nombre: 'Seymour Butts',
        username: '@seybutts',
        image: 'https://lh3.googleusercontent.com/dtJP3K1J86RV1SVB7AFNmU3onx-ZLuIH0ayZvFwkWd4GHUjhdqdB5_aX-0OXLeLIhFCTF24bw8iJ3miUJx5yUM3mykncQbSpP4raMPOTj_mzveDgnQ=w500-rp-e30'
    },
    {
        nombre: 'Al Cohólica',
        username: '@al-coholic',
        image: 'https://lh3.googleusercontent.com/eDru_j-XN5UGxN8E0DmWjYnobu5UbK-SrcWOwIlV2iIPiFBgpjk7qu8bLl7HtBU-guErN-cWu-aHd0dGwtK_NOkU18ixB0a1tPyTy092empyXTGTOiHT=w500-rp-e30'
    },
]

const recomendedListHTML = document.querySelector('.recomendedPeopleList')

recomendedUsers.forEach((user) =>{
    recomendedListHTML.innerHTML += `
        <div class="recomendedUserCard">
            <div class="userRecomendedImage">
                <img src=${user.image} alt="user image">
            </div>
            <div class="userRecomendedInfo">
                <h3>${user.nombre}</h3>
                <span class="user-name">${user.username}</span>
            </div>
            <div class="botonFollow">
            <button class="btn-follow">Follow</button>
            </div>
        </div>
        
    `
    
})

const comentarios = [
  {
    nombre: "John Doe",
    usuarioTwitter: "@johndoe",
    tiempoTranscurrido: "Hace 2 horas",
    likes: 10,
    retweets: 5,
    comentarios: 3
  },
  {
    nombre: "Jane Smith",
    usuarioTwitter: "@janesmith",
    tiempoTranscurrido: "Hace 1 día",
    likes: 25,
    retweets: 12,
    comentarios: 8
  },
  {
    nombre: "David Johnson",
    usuarioTwitter: "@davidjohnson",
    tiempoTranscurrido: "Hace 5 minutos",
    likes: 5,
    retweets: 2,
    comentarios: 1
  },
  {
    nombre: "Sarah Williams",
    usuarioTwitter: "@sarahwilliams",
    tiempoTranscurrido: "Hace 3 horas",
    likes: 15,
    retweets: 8,
    comentarios: 4
  },
  {
    nombre: "Michael Brown",
    usuarioTwitter: "@michaelbrown",
    tiempoTranscurrido: "Hace 1 semana",
    likes: 50,
    retweets: 20,
    comentarios: 15
  }
]; */

/* const saludar = () => {
    console.log("Hola")
} */
/* Obtenemos al elemento con el id='btn' y lo guardamos en una constante */

/* const btnClick = document.getElementById('btn') */

/* btnClick.onclick = saludar
 */
/* btnClick.addEventListener('focus', () => {
    console.log("se presionó el botón")}
)

btnClick.addEventListener('click', () => {
    console.log("se presionó el botón y se levntó el dedo")}
) */

/* search.addEventListener('input', () => {
    console.log('el input ahora vale' + search.value)
    let valorDelInput = search.value.toLowerCase()
    console.log(valorDelInput)

    console.log(posts.filter(post, post.content.includes(valorDelInput)))
} ) */

/* EL que hice yo
 */
/* const btnClick

contador = 0

btnClick.addEventListener('click', () => {
    if (btnClick.getElementById('menos')) {
        contador = contador - 1
    }
    else if (btnClick.getElementById('mas')) {
        contador = contador + 1
    }
    return contador
}
)

console.log(contador) */

/* Hecho por uno de los chicos */

/* const aumentarHTML = document.getElementById('aumentar')
const disminuirHTML = document.getElementById('disminuir')
const valor = document.getElementById('valor')

aumentarHTML.addEventListener('click', () => {
    let num = parseInt(document.getElementById('valor').innerText)
    if(num < 10){
        valor.innerHTML = num + 1
    }
})

disminuir.addEventListener('click', () => {
    let num = parseInt(document.getElementById('valor').innerText)
    if(num > 1){
        valor.innerHTML = num - 1
    }
}) */

const numero = document.getElementById("numero")

const suma = document.getElementById("suma")

const resta = document.getElementById("resta")

let num = 0

suma.addEventListener("click", () =>{

    if (num < 10) { 
        num = num + 1;
        numero.innerHTML = num
    }
    
})

resta.addEventListener("click", () =>{

    if (num > 1) { 
        num = num - 1;
        numero.innerHTML = num
    }
    
})

const confirmar = document.getElementById("confirmar")

const numConfirmado = document.getElementById("numConfirmado")

confirmar.addEventListener("click", () =>{

    numConfirmado.innerHTML = "El numero es " + num 
} )