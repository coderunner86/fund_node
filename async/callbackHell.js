let nombre = 'Jhesus';
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
const adios = (nombre, otrocallback)=> {
    setTimeout(() => {console.log(`Adios ${nombre}`)})
}

const conversation = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(()=> {
            conversation(nombre, --veces, callback);
        })
    }else {
        adios(nombre, callback);
    }
}
console.log('Iniciando proceso...');
conversation(hola, 15, adios);
console.log('Terminando proceso...');
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
