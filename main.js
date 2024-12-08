document.getElementById('botao-adicao').addEventListener('click', () => {
    let input = document.getElementById('paragrafo-input')
    let div_conteudo = document.getElementById('conteudo-div')
    let dialogo = document.getElementById('caixa-dialogo')
    let dialogo_mensagem = document.getElementById('mensagem-dialogo')

    if (input.value.trim() !== '') {
        let paragrafo_novo = document.createElement('p')
        paragrafo_novo.textContent = input.value
        div_conteudo.appendChild(paragrafo_novo)
        input.value = ''

        let contador = div_conteudo.getElementsByTagName('p').length
        dialogo_mensagem.textContent = `${contador} linha(s) foi(foram) adicionada(s).`
        dialogo.showModal()
    } else {
        dialogo_mensagem.textContent = "Por favor, digite algum texto para o parágrafo!"
        dialogo.showModal()
    }
})

document.getElementById('botao-contar').addEventListener('click', () => {
    let div_conteudo = document.getElementById('conteudo-div')
    let paragrafos = div_conteudo.getElementsByTagName('p')
    let contador = paragrafos.length

    let dialogo = document.getElementById('caixa-dialogo')
    let dialogo_mensagem = document.getElementById('mensagem-dialogo')
    dialogo_mensagem.textContent = `${contador} linha(s) foi(foram) adicionada(s).`
    dialogo.showModal()
})

document.getElementById('fechar-dialogo').addEventListener('click', () => {
    let dialogo = document.getElementById('caixa-dialogo')
    dialogo.close()
})