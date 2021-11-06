const hola = async (nombre) => {
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`hola ${nombre}`);
            resolve(nombre);
        }, 1000)
    })
}

const hablar = async (nombre) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('bla bla bla bla bla bla bla bla');
            resolve(nombre);
        }, 1000)
    })
}

const adios = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve(nombre);
        }, 3000)
    })
}

async function main() {
    let nombre = await hola('Jhesus');
    await hablar();
    await adios(nombre);
}
main();