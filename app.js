function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}

// Example flashcards with new questions
criaCartao('História', 'Quem descobriu o Brasil?', 'Pedro Álvares Cabral em 1500');
criaCartao('Ciências', 'Qual é o maior planeta do sistema solar?', 'Júpiter');
criaCartao('Matemática', 'Qual é o valor de Pi?', 'Aproximadamente 3.14159');
criaCartao('Música', 'Quem é conhecido como o Rei do Rock?', 'Elvis Presley');
criaCartao('Geografia', 'Qual é o rio mais longo do mundo?', 'O rio Nilo');