function recuperarDados(){
    return window.localStorage.getItem('contatos') || [];
}

function salvarDados(contato){
    let contatos = recuperarDados();
 
    contatos.push(contato);
    window.localStorage.setItem('contatos', contatos);
}