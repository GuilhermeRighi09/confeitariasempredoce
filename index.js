// Criar a lista de imagens

let imagens = [
    'assets/img/bolo-capa-1.jpg',
    'assets/img/bolo-capa-2.jpg',
    'assets/img/bolo-capa-3.jpeg'
]

let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrossel = document.getElementById('img-carrossel')
    imagemCarrossel.src = imagens[indiceAtualListaImagens]
}
// Lógica para exibir as imagens a cada 4 Segundos
setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++

    //verifica se chegou ao fim da imagem e reinicia 
    if(indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0
    }
}, 4000);

    exibirImagem()
    indiceAtualListaImagens++