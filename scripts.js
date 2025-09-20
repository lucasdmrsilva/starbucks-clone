let circulo = document.querySelector(".circulo");
let imagemCopo = document.querySelector(".imagem-copo")

function mudarCorEImagem(cor, img) {
    console.log(cor, img);

    circulo.style.backgroundColor = cor;
    imagemCopo.src = img;
}