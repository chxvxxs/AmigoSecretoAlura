let amigos = [];

function adicionarAmigo() {
    let nomeAmigoInput = document.getElementById('amigo');
    let nomeAmigo = nomeAmigoInput.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    nomeAmigoInput.value = ''; 
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>🎉 Amigo Secreto: <strong>${amigoSorteado}</strong></li>`;
}
