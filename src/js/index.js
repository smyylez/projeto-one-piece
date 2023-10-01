const personagens = document.querySelectorAll(".personagem");

const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        removerSelecaoBotao();
        removerSelecaoPersonagem();

        botao.classList.add("selecionado");
        personagens[index].classList.add("selecionado");
    });
});


function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function removerSelecaoBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}