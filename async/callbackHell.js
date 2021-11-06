/*let nombre = 'Jhesus';
const hola = (nombre, micallback) => {
    //console.log('Hola, soy una funcion asíncrona');
    const timeout = 0
    setTimeout(() => {
        console.log('Hola,' + nombre)
        micallback(nombre);
    }, timeout);
}

const hablar = (callbackHablar)=> {
    setTimeout(() => {
        console.log('Bla bla bla');
        callbackHablar();
    })
}
const adios = (nombre, micallback)=> {
    setTimeout(() => {console.log(`Adios ${nombre}`)})
}

const conversation = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(()=> {
            conversation(nombre, --veces, callback);
        })
    }else {
        adios();
    }
}
console.log('Iniciando proceso...');
conversation(hola, 15, adios);
console.log('Terminando proceso...');*/
/*
hola(':',  (nombre)=>{ 
    hablar(()=>{
        hablar(()=>{
            hablar(() => {
                adios(nombre, ()=>{
                    console.log('Terminando proceso...');
                })
            })
        })
         
    })
    })
    */
//hola('Jhesus', ()=>{});
//adios('Jhesus', ()=>{})
function hola(micallback) {
    setTimeout( function () {
        console.log('hola')
        micallback();
    }, 10)
}
function hablar(otrocallback) {
    
    setTimeout( function () {
        console.log('bla bla bla')
        otrocallback();
    }, 10)
    
}
function adios(otrocallback) {
    setTimeout( function () {
        console.log('adios');
    }, 10)
}
/*
hola(function () {
    
    hablar(function () {
        hablar(function(){
            hablar(function() {
                   adios(function(){
                       console.log('Terminando proceso...')
                        
                    }) 
            })   
        })    
    })
})
*/
function conversation( cont, callback ) {
    if (cont> 0) {
        hablar(function() {
            conversation(--cont, callback);
        })
    }else {
        callback();
    }
    
}
console.log('iniciando proceso...');
hola(function() {
    conversation(3, adios)
});
console.log('Proceso terminado...');