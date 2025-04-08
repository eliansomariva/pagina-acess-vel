document.addEventListener('DOMContentLoaded', function(){
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoAcessibilidade.addEventListener('click',function(){
    botaoAcessibilidade.classList.toggle('rotacao-botao');
    opcoesAcessibilidade.classList.toggle('apresenta-lista')


    })



    const aumentarFonteBotao = document.getElementByld('aumentar-fonte')
    const diminuirFonteBotao = document.getElementByld('diminuir-fonte')
    const alternaContraste = document.getElementById('alterna-contraste')
    let tamanhoAtualFonte= 1;

    aumentarFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0,1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
}
    
    )
    diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0,1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })




    
    