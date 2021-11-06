function soyAsincrona(micallback) {
    //console.log('Hola, soy una funcion asíncrona');
    const timeout = 3000
    setTimeout(() => {
        console.log('Hola, ahora estoy en modo asíncrono')
        micallback();
    }, timeout);
}
console.log('Iniciando proceso...');
soyAsincrona(()=>{console.log('Terminando proceso...')});
//console.log('Terminando proceso...');