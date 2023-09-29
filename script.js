const frases = [
    "Amor!!! Estarei junto contigo para o que der e vier, nunca vou soltar a sua mão.",
    "Solo necessiro 3 cosas: <br>1 - Verte <br>2 - Abrazarte <br>3 - Besarte.",
    "Eu nunca te trocaria por nada nem por ninguém.",
    "Assim como a Lua é iluminada pelo Sol, eu comecei a viver quando tu iluminaste a minha vida.",
    "Obrigado por me amares.",
    "Lembras-te do videozinho do cão? Relembra-te <a href='https://www.instagram.com/reel/Cw0mhGVpvkK/?igshid=MmU2YjMzNjRlOQ%3D%3D' target='_blank' rel='noopener noreferrer'>insta</a>.",
    "Não te trocaria por ninguém, mesmo que o nosso mundo se destrua, mesmo que esteja longe, mesmo que estejamos mal e nada funcione, sempre será você, nunca se esqueça disso. ❤️",
    "És sempre o primeiro pensamento do meu dia.",
    "Cada dia que passa eu tenho mais certeza que tu és o amor da minha vida...",
    "EU TE AMO </BR> em todos os segundos, </BR> em todos os minutos </BR> em todas as horas, </BR> em todos os dias, </BR> em todas as noites, </BR> em todos os momentos, </BR> de longe e de perto. </BR> Eu te amo genuinamente </BR> e com todas as forças que </BR> tenho, porque você é você, </BR> porque você sempre vale </BR> a pena. Eu te amo, tá bom?",
    "Não precisa me dar o mundo só segura a minha mão e vem comigo que a gente conquista o mundo juntos!",
    "Eu amo-te do tamanho do amor que o Sol tem pela Lua. É tanto que todo o Sol é fogo",
    "Amor me apego a você. Você é o meu presente e meu presente e meu futuro!",
    "Tô com muita, muita, muita, muita, muita, muita, muita, muita, muita, muita, muita, muita, muita SAUDADE SUA!!!",
    "<span style='color: red'>T</span>ô pensando <br> <span style='color: red'>E</span>m você <br> <span style='color: red'>A</span>gora <br> e se<span style='color: red'>M</span>pre <br> Am<span style='color: red'>O</span>r.",
];

const fraseElement = document.getElementById("frase");
const mostrarButton = document.getElementById("mostrar");

function mostrarFrase() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    const randomFrase = frases[randomIndex];
    fraseElement.innerHTML = randomFrase;
}

mostrarButton.addEventListener("click", mostrarFrase);
