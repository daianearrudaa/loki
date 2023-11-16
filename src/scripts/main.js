
document.addEventListener('DOMContentLoaded', function () {
    const imagem = document.getElementsByClassName('hero__content__img')[0];
    const video = document.getElementsByClassName('hero__content__video')[0];
    const icon = document.getElementsByClassName('hero__content__icon')[0];
    

    function funcaoclick() {
        // Oculta a imagem e o ícone (define display como "none")
        imagem.style.display = "none";
        icon.style.display = "none";

        // Exibe o vídeo (pode ser necessário ajustar as propriedades do vídeo)
        video.style.display = "block";
        
        
    }

    imagem.addEventListener('click', funcaoclick);
    icon.addEventListener('click', funcaoclick);
    
});


const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
