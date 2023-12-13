const promsessa = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})
 promsessa
    .then((value) => {
        console.log(value)
    })
    .catch((erro) => {
        console.log(erro)
    })
    .finally(() => {
        console.log('finalizou')
    })