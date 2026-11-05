function mostrar(){
    Promise.resolve(f1()) //rodou
    .then(val=> f2(val))//f1 vem como val
    .then(val2 => console.log(val2)) //f2 vem como val2
    .catch(error=> (console.error(error.message)))
}