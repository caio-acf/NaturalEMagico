var indexValue = 0;
function slideShow() {
    setTimeout(slideShow, 2500);
    var selecao;
    const img = document.querySelectorAll(".carousel__vendidos");
    for(selecao = 0; selecao < img.length; selecao++) {
        img[selecao].style.display = "none";
    }
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
}
slideShow();

