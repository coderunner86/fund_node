const hola = (nombre)=>{
   return new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log(`hola mi amigo ${nombre} hablemos`);
        resolve(nombre);
    }, 1000)

   })     
}

const hablar = (nombre)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla me aburres despidamonos');
            resolve(nombre);
        })
    })
}

const adios = (nombre)=> {
    return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    console.log(`adios ${nombre}`);
                    //resolve(nombre);
                    reject('Hay un error en la despedida')
                })
    })
}

hola('Jhesus')
.then(hablar)
.then(adios)
.then(() =>{
    console.log(`terminado proceso`);
})
.catch((err) => {
    console.log('ERROR')
    console.error(err)
})