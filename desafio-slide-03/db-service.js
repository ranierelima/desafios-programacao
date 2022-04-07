function recuperarDados(){
    let lista = window.localStorage.getItem('contatos');
    if(lista) {
        lista = JSON.parse(lista).map(item => JSON.parse(item));
    }
        
    return lista || [];
}

function salvarDados(contato){
    let contatos = recuperarDados();
 
    let indexContato = contatos.indexOf(c => JSON.stringify(c) == JSON.stringify(contato) );

    if(indexContato == -1 ){
        contatos.push(JSON.stringify(contato));
    } else {
        contatos[indexContato] = JSON.stringify(contato);
    }
    
    window.localStorage.setItem('contatos', JSON.stringify(contatos));

    return contatos;
}
