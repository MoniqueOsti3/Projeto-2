const scenes = {
    start: {
        text: "Você inicia sua aventura no Rio de Janeiro. A cidade está vibrante com turistas e moradores. Para onde você quer ir?",
        img: "https://example.com/rio-de-janeiro.jpg",  // Insira uma URL válida
        choices: [
            { text: "Explorar o Cristo Redentor", nextScene: "cristo" },
            { text: "Ir para a Floresta Amazônica", nextScene: "amazonia" }
        ]
    },
    cristo: {
        text: "Você está de frente para o Cristo Redentor. A vista é incrível! Mas de repente, uma tempestade mágica começa. O que você faz?",
        img: "https://example.com/cristo-redentor.jpg",  // Insira uma URL válida
        choices: [
            { text: "Buscar abrigo na floresta", nextScene: "floresta" },
            { text: "Subir a montanha mágica", nextScene: "montanhaMagica" }
        ]
    },
    amazonia: {
        text: "Você entrou na Floresta Amazônica. A natureza ao seu redor parece viva de uma forma diferente. Um espírito da floresta aparece. O que você faz?",
        img: "https://example.com/amazonia.jpg",  // Insira uma URL válida
        choices: [
            { text: "Conversar com o espírito", nextScene: "espirito" },
            { text: "Fugir da floresta", nextScene: "fuga" }
        ]
    },
    floresta: {
        text: "Você encontrou abrigo em uma caverna, mas lá dentro encontra uma passagem secreta para um mundo subterrâneo. Você segue em frente?",
        img: "https://example.com/floresta.jpg",  // Insira uma URL válida
        choices: [
            { text: "Entrar na passagem", nextScene: "subterraneo" },
            { text: "Voltar para a cidade", nextScene: "cidade" }
        ]
    },
    montanhaMagica: {
        text: "Você escalou a montanha mágica e encontrou um dragão guardião. Ele te oferece um desafio.",
        img: "https://example.com/montanha.jpg",  // Insira uma URL válida
        choices: [
            { text: "Aceitar o desafio", nextScene: "desafio" },
            { text: "Recusar e fugir", nextScene: "fuga" }
        ]
    },
    espirito: {
        text: "O espírito revela que você é o escolhido para proteger a floresta. Você agora tem poderes mágicos!",
        img: "https://example.com/espirito.jpg",  // Insira uma URL válida
        choices: [
            { text: "Usar os poderes para o bem", nextScene: "heroi" },
            { text: "Abusar dos poderes", nextScene: "vilao" }
        ]
    },
    // Outras cenas podem ser adicionadas aqui
};

function startGame() {
    showScene("start");
}

function showScene(sceneKey) {
    const scene = scenes[sceneKey];
    document.getElementById("story-text").innerText = scene.text;
    document.getElementById("scene-image").src = scene.img;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";  // Limpa as escolhas anteriores

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.classList.add("choice-btn");
        button.onclick = () => showScene(choice.nextScene);
        choicesDiv.appendChild(button);
    });
}

window.onload = startGame;

