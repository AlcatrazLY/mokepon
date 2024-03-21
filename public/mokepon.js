//variables funcion IniciarJuego
const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionarAtaque')
const botonMascotaJugador = document.getElementById('botonMascota')
let botonFuego 
let botonAgua 
let botonTierra 
const botonReiniciar = document.getElementById('boton-reiniciar')
//variables funcion seleccionarMascotaJugador
const sectionSeleccionarMascota = document.getElementById('seleccionarMascota')

const mascotaJugador = document.getElementById('mascota-jugador')
//variables funcion seleccionarMascotaEnemigo
const mascotaEnemigo = document.getElementById('mascota-enemigo')
//variables funcion combate
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
//variables funcion vidasCorazones
const cora1 = document.getElementById('vida1')
const cora2 = document.getElementById('vida2')
const cora3 = document.getElementById('vida3')
const coraEnemigo1 = document.getElementById('vidaEnemigo1')
const coraEnemigo2 = document.getElementById('vidaEnemigo2')
const coraEnemigo3 = document.getElementById('vidaEnemigo3')
//variables funcion crarMensaje
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataquesDelJugador')
const ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const botonesAtaques = document.getElementById('ataquesLocacion')
//variables funcion revisarVidas
const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
let botones = []

let ataqueJugador = []
let ataqueEnemigo = []
let vidasJugador = 3 
let vidasEnemigo = 3
let victoriasJugador = 0
let victoriasEnemigo = 0
let opcionDeMokepones
let inputHipodoge  
let inputCapipepo 
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma 
let ataquesMokeponEnemigo
let inputPydos 
let mascotaJugadorAtaques
let opcionDeAtaques
let indexAtaqueJugador
let indexAtaqueEnemigo
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = 'images/map1.jpg'
let mascotaJugadorObjeto
 
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20
const anchoMaximoDelMapa = 600
const altoMaximoDelMapa = 450

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa -20
    alturaQueBuscamos = altoMaximoDelMapa
}
alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    //clase mokepones
    constructor(nombre,foto,vida, id = null){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(20,mapa.width - this.ancho)
        this.y = aleatorio(20,mapa.height - this.alto)
        
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
//objetos mokepon
let Hipodoge = new Mokepon('Spartan','images/spartan117.png',3)
let Capipepo = new Mokepon('Marine','images/jhonson.png',3)
let Ratigueya = new Mokepon('ODST','images/buck.png',3)
let Langostelvis = new Mokepon('Elite','images/elite.png',3)
let Tucapalma = new Mokepon('Grunt','images/grunt.png',3)
let Pydos = new Mokepon('Flood','images/flood.png',3)
//jugadores enemigos


const HIPODOGE_ATAQUES = [
    {nombre: 'FUEGO', id: 'AtaqueFuego',img:'images/ataqueFuego.png'},
    {nombre: 'PLASMA', id: 'AtaqueAgua',img:'images/ataquePlasma.png'},
    {nombre: 'CRISTAL', id: 'AtaqueTierra',img:'images/ataquePiedra.png'}
]
const CAPIPEPO_ATAQUES =[
    {nombre: 'FUEGO', id: 'AtaqueFuego',img:'images/ataqueFuego.png'},
    {nombre: 'PLASMA', id: 'AtaqueAgua',img:'images/ataquePlasma.png'},
    {nombre: 'CRISTAL', id: 'AtaqueTierra',img:'images/ataquePiedra.png'}
]
const RATIGUEYA_ATAQUES = [
    {nombre: 'FUEGO', id: 'AtaqueFuego',img:'images/ataqueFuego.png'},
    {nombre: 'PLASMA', id: 'AtaqueAgua',img:'images/ataquePlasma.png'},
    {nombre: 'CRISTAL', id: 'AtaqueTierra',img:'images/ataquePiedra.png'}
]
const LANGOSTELVIS_ATAQUES =[
    {nombre: 'FUEGO', id: 'AtaqueFuego',img:'images/ataqueFuego.png'},
    {nombre: 'PLASMA', id: 'AtaqueAgua',img:'images/ataquePlasma.png'},
    {nombre: 'CRISTAL', id: 'AtaqueTierra',img:'images/ataquePiedra.png'}
]
const TUCAPALMA_ATAQUES = [
    {nombre: 'FUEGO', id: 'AtaqueFuego',img:'images/ataqueFuego.png'},
    {nombre: 'PLASMA', id: 'AtaqueAgua',img:'images/ataquePlasma.png'},
    {nombre: 'CRISTAL', id: 'AtaqueTierra',img:'images/ataquePiedra.png'}
]
const PYDOS_ATAQUES =[
    {nombre: 'FUEGO', id: 'AtaqueFuego',img:'images/ataqueFuego.png'},
    {nombre: 'PLASMA', id: 'AtaqueAgua',img:'images/ataquePlasma.png'},
    {nombre: 'CRISTAL', id: 'AtaqueTierra',img:'images/ataquePiedra.png'}
]
Hipodoge.ataques.push(...HIPODOGE_ATAQUES)
Capipepo.ataques.push(...CAPIPEPO_ATAQUES)
Ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
Langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)
Tucapalma.ataques.push(...TUCAPALMA_ATAQUES)
Pydos.ataques.push(...PYDOS_ATAQUES)

mokepones.push(Hipodoge,Capipepo,Ratigueya,Langostelvis,Tucapalma,Pydos)

function iniciarJuego(){
    // para ocultar el boton reinicio que esta en la 
    sectionReiniciar.style.display = 'none'         //seccion mensajes
    sectionVerMapa.style.display = 'none'       //seccion ver mapa
    mokepones.forEach((mokepon)=>{
        opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.nombre} /> 
            <label class="tarjetaDeMokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p><!-- Hipodoge -->
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label> <br>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })
    
     inputHipodoge = document.getElementById('Spartan')
     inputCapipepo = document.getElementById('Marine')
     inputRatigueya = document.getElementById('ODST')
     inputLangostelvis = document.getElementById('Elite')
     inputTucapalma = document.getElementById('Grunt')
     inputPydos = document.getElementById('Flood')
    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)

    unirseAlJuego()
}
function unirseAlJuego(){
    fetch("http://192.168.10.134:8080/unirse")
        .then(function(res){
            if(res.ok){
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta);
                        jugadorId = respuesta
                    })
            }
        })
}
function seleccionarMascotaJugador(){
    //mostrar seleccion de ataques
    //sectionSeleccionarAtaque.style.display = 'flex'
    let jugar = 1
    if(inputHipodoge.checked == true){     
        mascotaJugador.innerHTML = inputHipodoge.id  
        mascotaJugadorAtaques = inputHipodoge.id
        console.log(mascotaJugador)
    }else if(inputCapipepo.checked == true){
        mascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugadorAtaques = inputCapipepo.id
    }else if(inputRatigueya.checked == true){
        mascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugadorAtaques = inputRatigueya.id
    }else if(inputLangostelvis.checked == true){
        mascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugadorAtaques = inputLangostelvis.id
    }else if(inputTucapalma.checked == true){
        mascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugadorAtaques = inputTucapalma.id
    }else if(inputPydos.checked == true){
        mascotaJugador.innerHTML = inputPydos.id
        mascotaJugadorAtaques = inputPydos.id
    }else{
        alert("Debes seleccionar una mascota para poder continuar")
        
        jugar = 0
        return
    }
    if(jugar == 1){
        sectionSeleccionarMascota.style.display = 'none'
        seleccionarMokepon(mascotaJugadorAtaques)
        //console.log(mascotaJugador);
        extraerAtaques(mascotaJugadorAtaques)
        console.log(mascotaJugadorAtaques)
        sectionVerMapa.style.display = 'flex'
        iniciarMapa()
        
    }
    
} 

function seleccionarMokepon(mascotaJugadorAtaques){
    fetch(`http://192.168.10.134:8080/mokepon/${jugadorId}`,{method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        mokepon: mascotaJugadorAtaques
    })
})
}
function extraerAtaques(mascotaJugadorAtaques){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugadorAtaques === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        opcionDeAtaques = `
        <button id=${ataque.id} class="tamanoAtaques BAtaques" >${ataque.nombre}<img src=${ataque.img} alt=${ataques.nombre}></button>
        `
        botonesAtaques.innerHTML += opcionDeAtaques
    });
    botonFuego = document.getElementById('AtaqueFuego')
    botonAgua = document.getElementById('AtaqueAgua')
    botonTierra = document.getElementById('AtaqueTierra')

    botones = document.querySelectorAll('.BAtaques')
    secuenciaAtaque()
} 
function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener( 'click', (e) => {
            if (e.target.textContent === 'FUEGO') {
                ataqueJugador.push('FUEGO')
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if (e.target.textContent === 'PLASMA') {
                ataqueJugador.push('PLASMA')
                boton.style.background = '#112f58'
                boton.disabled = true
            }else {
                ataqueJugador.push('CRISTAL')
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            if (ataqueJugador.length === 5) {
                enviarAtaques()
            }
        })
    })
    
}

//FUNCION ENVIAR ATAQUES
function enviarAtaques() {
    fetch(`http://192.168.10.134:8080/mokepon/${jugadorId}/ataques`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

//FUNCION PARA OBTENER ATAQUES
function obtenerAtaques() {
    fetch(`http://192.168.10.134:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res){
            if(res.ok){
                res.json()
                    .then(function({ataques}){
                        console.log(ataques);
                        if (ataques.length === 3){
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}
//FUNCION SELECCIONAR MASCOTA ENEMIGO
function seleccionarMascotaEnemigo(enemigo){
    mascotaEnemigo.innerHTML = enemigo.nombre 
    ataquesMokeponEnemigo = enemigo.ataques
}
//FUNCION NUMERO ALEATORIO PARA ELEGIR MASCOTA JUGADOR
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
} 
//FUNCIONES DE LOS BOTONES DE ATAQUE

//FUNCION ATAQUE ENEMIGO
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    if (ataqueAleatorio == 0){  
        ataqueEnemigo.push ('FUEGO') 
    }else if (ataqueAleatorio == 1)
    {
        ataqueEnemigo.push('PLASMA')   
    }else {
        ataqueEnemigo.push('CRISTAL') 
    }

    iniciarPelea()
}
function iniciarPelea() {
    if (ataqueJugador.length === 3) {
        combate()
    }
}
function vidasCorazones(){
    switch(victoriasJugador){
        case 2:
            cora3.style.display = 'none'
            break;
        case 1:
            cora3.style.display = 'none'
            cora2.style.display = 'none'
            break;
        case 0:
            cora3.style.display = 'none'
            cora2.style.display = 'none'
            cora1.style.display = 'none'
            break;
    }
    switch(victoriasEnemigo){
        case 2:
            coraEnemigo3.style.display = 'none'
            break;
        case 1:
            coraEnemigo3.style.display = 'none'
            coraEnemigo2.style.display = 'none'
            break;
        case 0:
            coraEnemigo3.style.display = 'none'
            coraEnemigo2.style.display = 'none'
            coraEnemigo1.style.display = 'none'
            break;
    }
}

function indexAmbosOponente(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate(){
    clearInterval(intervalo)
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index,index)
            crearMensaje('EMPATE')
        }else if((ataqueJugador[index] == 'FUEGO' && ataqueEnemigo[index] == 'CRISTAL' ) || (ataqueJugador[index] == 'CRISTAL' && ataqueEnemigo[index] == 'PLASMA' ) || (ataqueJugador[index] == 'PLASMA' && ataqueEnemigo[index] == 'FUEGO' ) ) {
            indexAmbosOponente(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else {
            indexAmbosOponente(index,index)
            crearMensaje('PERDISTE')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }
    
        
        //Revisar Vidas
        revisarVictorias()
        vidasCorazones() 
}

function revisarVictorias(){   
    //let parrafo = document.createElement('p') 
    //sectionMensajes.appendChild(parrafo)
    if(victoriasJugador === victoriasEnemigo){
        //parrafo.innerHTML = 'El Juego ha terminado, GANASTE! '
        sectionReiniciar.style.display = 'block'  
    }else if (victoriasJugador > victoriasEnemigo){
        //parrafo.innerHTML = 'El Juego ha terminado, PERDISTE! '
        sectionReiniciar.style.display = 'block'
    } else {
        sectionReiniciar.style.display = 'block' 
    } 
}

function reiniciarJuego(){
    location.reload()
}
function crearMensaje(resultado){
    sectionMensajes.innerHTML = resultado
    ataquesDelJugador.innerHTML = indexAtaqueJugador
    ataquesDelEnemigo.innerHTML = indexAtaqueEnemigo
}

function pintarCanvas(){
    
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height) //la funcion .clearRect limpia el canvas, indicarle que limpiar "(0,0,w,h)"
    lienzo.drawImage(
        mapaBackground,
        0,
        0, 
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    enviarPosicion(mascotaJugadorObjeto.x,mascotaJugadorObjeto.y)
    mokeponesEnemigos.forEach(function(mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })

    /* if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColision(HipodogeEnemigo)
        revisarColision(CapipepoEnemigo)
        revisarColision(RatigueyaEnemigo)
        revisarColision(LangostelvisEnemigo)
        revisarColision(TucapalmaEnemigo)
        revisarColision(PydosEnemigo)
    } */
        
}
//ENVAIR POSICION
function enviarPosicion(x,y){
    fetch(`http://192.168.10.134:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
           x,
           y 
        })
    })
    .then(function (res){
        if (res.ok){
            res.json()
                .then(function ( {enemigos} ){
                    console.log(enemigos);
                    mokeponesEnemigos = enemigos.map(function(enemigo) {
                        let mokeponEnemigo = null
                        const mokeponNombre = (enemigo.mokepon && enemigo.mokepon.nombre) || ""
                        if (mokeponNombre === "Spartan") {
                            mokeponEnemigo = new Mokepon('Spartan','images/spartan117.png',3,80,120,enemigo.id)
                        }else if (mokeponNombre === "Marine") {
                            mokeponEnemigo = new Mokepon('Marine','images/jhonson.png',3,150,95,enemigo.id)
                        }else if (mokeponNombre === "ODST") {
                            mokeponEnemigo = new Mokepon('ODST','images/buck.png',3,450,200,enemigo.id)
                        }else if (mokeponNombre === "Elite") {
                            mokeponEnemigo = new Mokepon('Elite','images/elite.png',3,600,300,enemigo.id)                        
                        }else if (mokeponNombre === "Grunt") {
                            mokeponEnemigo = new Mokepon('Grunt','images/grunt.png',3,50,400)                       
                        }else if (mokeponNombre === "Flood") {
                            mokeponEnemigo = new Mokepon('Flood','images/flood.png',3,400,250)                        
                        }  
                        
                            mokeponEnemigo.x = enemigo.x
                            mokeponEnemigo.y = enemigo.y
                            return mokeponEnemigo
                        
                    })
                })
        }
    })
}
    


function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function teclaPresionada(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowDown' :
            moverAbajo()
            break;
        case 'ArrowRight' :
            moverDerecha()
            break;
        case 'ArrowLeft' :
            moverIzquierda()
            break;
        case 'w':
            moverArriba()
            break;
        case 's' :
            moverAbajo()
            break;
        case 'd' :
            moverDerecha()
            break;
        case 'a' :
            moverIzquierda()
            break;
        default:
            break;
    }
}

function iniciarMapa() {
    //mapa.width = 500
    //mapa.height = 350
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugadorAtaques)
    console.log(mascotaJugador)
    intervalo = setInterval(pintarCanvas,35)

    window.addEventListener('keydown',teclaPresionada)
    window.addEventListener('keyup',detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugadorAtaques === mokepones[i].nombre) { //se usa mascotaJugadorAtaques ya que
            return mokepones[i]                              //si captura el objeto mokepon y no mascotaJugador
        }
    }
    return null
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 
    
    const arribaMascota = mascotaJugadorObjeto.y  
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x 

    if (abajoMascota < arribaEnemigo ||
        
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo) {
        
            return
     }
     detenerMovimiento()  
     console.log("colision detectada");
     enemigoId = enemigo.id
     clearInterval(intervalo)
     sectionSeleccionarAtaque.style.display = 'flex'
     sectionVerMapa.style.display = 'none'
     seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)
