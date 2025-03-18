function showInfo(cardNumber) {
    let card1 = document.getElementById('card1');
    let card2 = document.getElementById('card2');
    let info1 = document.getElementById('info1');
    let info2 = document.getElementById('info2');
    let button1 = document.querySelector("#card1 button");
    let button2 = document.querySelector("#card2 button");

    // Impede abrir um card se o outro já está aberto
    if ((cardNumber === 1 && info2.style.opacity === "1") || (cardNumber === 2 && info1.style.opacity === "1")) {
        return;
    }

    if (cardNumber === 1) {
        if (info1.style.opacity === "1") {
            info1.style.opacity = "0";
            info1.style.visibility = "hidden";
            button1.innerText = "Ver Mais";
            card1.style.transition = "transform 0.5s ease-in-out";
            card2.style.transition = "transform 0.5s ease-in-out";
            card1.style.transform = "translateX(0)";
            card2.style.transform = "translateX(0)";
            card2.classList.remove("desfocado");
            card2.classList.add("desfazer-desfoque");
            setTimeout(() => card2.classList.remove("desfazer-desfoque"), 500);
        } else {
            card1.style.transition = "transform 0.5s ease-in-out";
            card2.style.transition = "transform 0.5s ease-in-out";
            card1.style.transform = "translateX(100px)";
            card2.style.transform = "translateX(110px)";
            setTimeout(() => {
                info1.style.display = "block";
                info1.style.visibility = "visible";
                info1.style.opacity = "1";
            }, 300);
            button1.innerText = "Fechar";
            setTimeout(() => card2.classList.add("desfocado"), 500);
        }
    } else {
        if (info2.style.opacity === "1") {
            info2.style.opacity = "0";
            info2.style.visibility = "hidden";
            button2.innerText = "Ver Mais";
            card1.style.transition = "transform 0.5s ease-in-out";
            card2.style.transition = "transform 0.5s ease-in-out";
            card1.style.transform = "translateX(0)";
            card2.style.transform = "translateX(0)";
            card1.classList.remove("desfocado");
            card1.classList.add("desfazer-desfoque");
            setTimeout(() => card1.classList.remove("desfazer-desfoque"), 500);
        } else {
            card1.style.transition = "transform 0.5s ease-in-out";
            card2.style.transition = "transform 0.5s ease-in-out";
            card2.style.transform = "translateX(-100px)";
            card1.style.transform = "translateX(-110px)";
            setTimeout(() => {
                info2.style.display = "block";
                info2.style.visibility = "visible";
                info2.style.opacity = "1";
            }, 300);
            button2.innerText = "Fechar";
            setTimeout(() => card1.classList.add("desfocado"), 500);
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const nomeTexto = document.getElementById('nome-texto');
    const nomeTexto2 = document.getElementById('nome-texto2');
    const nome = "Luis Otavio Bertolucci Oliveira";
    const nome2 = "José Miguel Bossonaro";
    let index = 0;
    let apagando = false;

    function animarNome() {
        if (!apagando) {
            if (index < nome.length) {
                nomeTexto.textContent += nome.charAt(index);
                nomeTexto2.textContent += nome2.charAt(index);
                index++;
                setTimeout(animarNome, 100);
            } else {
                setTimeout(() => {
                    apagando = true;
                    animarNome();
                }, 1000);
            }
        } else {
            if (index > 0) {
                nomeTexto.textContent = nome.substring(0, index - 1);
                nomeTexto2.textContent = nome2.substring(0, index - 1);
                index--;
                setTimeout(animarNome, 100);
            } else {
                apagando = false;
                setTimeout(animarNome, 1000);
            }
        }
    }

    animarNome();
});

