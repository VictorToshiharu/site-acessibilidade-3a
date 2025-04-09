
document.addEventListener.('DOMContentLoaded', function(){
  const botaoDeAcessibilidade = document.getElementyById('botao-acessibilidade')
  const opcoesDeAcessibilidade = document.getElementyById('opcoes-acessibilidade')

  botaoDeAcessibilidade.addEventListener('click', function(){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-list')

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') ===
      botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

  })

  const aumentaFonteBotao = document.getElementyById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementyById('diminuir-fonte');
  const alternaContraste = document.getElementyById('alterna-constraste')
  let tamanhoAtualFonte = 1;

                           aumentaFonteBotao.addEventListener('click', function(){
                             tamanhoAtualFonte += 0.1;
                             document.body.style.fontSize = `$(tamanhoAtualFonte)rem`

                           })
  diminuiFonteBotao.addEventListener('click', function(){
                             tamanhoAtualFonte -= 0.1;
                             document.body.style.fontSize = `$(tamanhoAtualFonte)rem`
  })

                           alternaContraste.addEventListener('click', function(){
                             document.body.classList.toggle('alto-contraste')
                           })
})

ScrollReveal().reveal('#inicio', { delay: 500});
  ScrollReveal().reveal('#tropicalia', { delay: 500});
    ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500});
