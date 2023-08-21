const language =  document.documentElement;
language.lang = "pt-br";

const metaChartset = document.createElement("meta");
metaChartset.setAttribute("charset", "utf-8");
document.head.appendChild(metaChartset);

const metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(metaViewport);

const linkFavIcon = document.createElement("link");
linkFavIcon.setAttribute("rel", "shortcut icon");
linkFavIcon.setAttribute("type", "image/x-icon");
linkFavIcon.setAttribute("href", "/imagens/iconeFavorito.ico");
document.head.appendChild(linkFavIcon);

const style = document.createElement("style");
style.innerHTML = ` 
@font-face {
    font-family: "Super Mario World";
    src: url(/fontes/SuperMarioWorld.ttf);
}

* { margin: 0; padding: 0; border: none; box-sizing: border-box; font-family: "Super Mario World"; } 
.marioJump {
    animation: marioJump 500ms ease-out;
}
@keyframes marioJump {
    0% {
        bottom: 72px;
    }
    50% {
        bottom: 212px;
    }
    60% {
        bottom: 212px;
    }
    
    70% {
        bottom: 212px;
    }
    80% {
        bottom: 212px;
    }
    90% {
        bottom: 212px;
    }
    100% {
        bottom: 72px;
    }
}

.animeEnemy {
    animation: animeEnemy 15s infinite linear;
}

@keyframes animeEnemy {
    from {
        right: -100px;
    }
    to {
        right: 105%;
    }
}

`;
document.head.appendChild(style);

const title = document.createElement("title");
title.textContent = "mario Jogo";
document.head.appendChild(title);

const body = document.body;
body.style.overflow = "hidden";

const container = document.createElement("div");
container.style.position = "absolute";
container.style.width = "100vw";
container.style.height = "100vh";
container.style.backgroundImage = "url(/imagens/cenario.png)";
container.style.backgroundRepeat = "no-repeat";
container.style.backgroundPosition = "right";
container.style.backgroundSize = "auto 100%";
container.style.left = "0";
container.style.top = "0";
container.style.zIndex = "1";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
body.appendChild(container);

const buttonStart = document.createElement("button");
buttonStart.id = "buttonstart";
buttonStart.textContent = "Iniciar Jogo";
buttonStart.style.padding = "10px 20px"
buttonStart.style.cursor = "pointer";
container.appendChild(buttonStart);

const sky = document.createElement("div");
sky.style.position = "absolute";
sky.style.width = "100vw";
sky.style.height = "100vh";
sky.style.backgroundImage = "url(/imagens/cenarioceu.png)";
sky.style.backgroundRepeat = "no-repeat";
sky.style.backgroundPosition = "center";
sky.style.backgroundSize = "auto 100%";
sky.style.left = "0";
sky.style.top = "0";
sky.style.zIndex = "0";
body.appendChild(sky);

const imageMenu = new Image();
imageMenu.src = "/imagens/menuDoJogo.png";
imageMenu.setAttribute("alt", "Imagem menu do Jogo");
imageMenu.style.position = "absolute";
imageMenu.style.top = "0";
container.appendChild(imageMenu);

const timer = document.createElement("div");
timer.textContent = "400";
timer.id = "timer";
timer.style.position = "absolute";
timer.style.color = "#ffdf73";
timer.style.top = "65px";
timer.style.left = "840px";
timer.style.fontSize = "25px";
container.appendChild(timer);

const lifes = document.createElement("div");
lifes.textContent = "5";
lifes.id = "lifes";
lifes.style.position = "absolute";
lifes.style.color = "white";
lifes.style.top = "68px";
lifes.style.left = "200px";
lifes.style.fontSize = "25px";
container.appendChild(lifes);

const points = document.createElement("div");
points.textContent = "0";
points.id = "points";
points.style.position = "absolute";
points.style.color = "white";
points.style.top = "72px";
points.style.right = "150px";
points.style.fontSize = "25px";
container.appendChild(points);

const coins = document.createElement("div");
coins.textContent = "0";
coins.id = "coins";
coins.style.position = "absolute";
coins.style.color = "white";
coins.style.top = "42px";
coins.style.right = "150px";
coins.style.fontSize = "25px";
container.appendChild(coins);

const mario = document.createElement("div");
mario.style.position = "absolute";
mario.style.width = "60px";
mario.style.height = "50px";
mario.style.backgroundImage = "url(/imagens/marioParadoLadoDireito.png)";
mario.style.backgroundRepeat = "no-repeat";
mario.style.backgroundPosition = "center";
mario.style.backgroundSize = "100% 100%";
mario.style.bottom = "72px"
mario.style.left = "172px"
container.appendChild(mario);

const enemy = document.createElement("div");
enemy.id = "enemy";
enemy.style.position = "absolute";
enemy.style.width = "60px";
enemy.style.height = "50px";
enemy.style.backgroundImage = "url(/imagens/inimigoLadoEsquerdo.gif)";
enemy.style.backgroundRepeat = "no-repeat";
enemy.style.backgroundPosition = "center";
enemy.style.backgroundSize = "100% 100%";
enemy.style.bottom = "72px"
enemy.style.right = "-100px"
container.appendChild(enemy);

const block = document.createElement("div");
block.id = "block";
block.style.position = "absolute";
block.style.width = "55px";
block.style.height = "40px";
block.style.backgroundImage = "url(/imagens/bloco.png)";
block.style.backgroundRepeat = "no-repeat";
block.style.backgroundPosition = "center";
block.style.backgroundSize = "100% 100%";
block.style.bottom = "260px"
block.style.right = "420px"
container.appendChild(block);

const buttonRestart = document.createElement("button");
buttonRestart.id = "buttonRestart";
buttonRestart.textContent = "Reiniciar Jogo";
buttonRestart.style.padding = "10px 20px"
buttonRestart.style.cursor = "pointer";
buttonRestart.style.display = "none";
buttonRestart.addEventListener("click", applyReset);
container.appendChild(buttonRestart);

function applyReset() {
lifesCurrent = 5;
lifes.textContent = lifesCurrent;
localStorage.setItem("lifesCurrent", lifesCurrent);
coinsCurrent = 0;
coins.textContent = coinsCurrent;
localStorage.setItem("coinsCurrent", coinsCurrent);
pointsCurrent = 0;
points.textContent = pointsCurrent;
localStorage.setItem("pointsCurrent", pointsCurrent);
location.reload();
}

const containerWidth = container.offsetWidth;
const marioWidth = mario.offsetWidth;

const audioWaiting = new Audio("/audios/audioEsperandoIniciarJogo.mp3");
const audioPlayingNormal = new Audio("/audios/audioMissaoNormal.mp3");
const audioPlayingHurry = new Audio("/audios/audioMissaoRapido.mp3");
const audioTimeEnding = new Audio("/audios/audioTempoAcabando.wav");
const audioLifeLose = new Audio("/audios/audioPerdeuVida.mp3");
const audioGameOver = new Audio("/audios/audioGameOver.mp3");
const audioLifeWinExtra = new Audio("/audios/audioVidaExtra.wav");
const audioCollectedCoin = new Audio("/audios/audioMoeda.wav");
const audioJump = new Audio("/audios/audioPulo.wav");

let timerCurrent = 400;
let lifesCurrent = parseInt(localStorage.getItem("lifesCurrent")) || 5;
let coinsCurrent = parseInt(localStorage.getItem("coinsCurrent")) || 0;
let pointsCurrent = parseInt(localStorage.getItem("pointsCurrent")) || 0;
lifes.textContent = lifesCurrent;
coins.textContent = coinsCurrent;
points.textContent = pointsCurrent;
let position = 172;
let direction = 0;
let timeJump;
let timeReload;
let checkCollisionBlock;
let isRunning = false;
let isJumping = false;

function timing() {
    timerCurrent--;
    timer.textContent = timerCurrent;
    if (timerCurrent === 100) {
        audioPlayingNormal.volume = 0.5;
        audioTimeEnding.play();
        setTimeout(() => {
            audioPlayingNormal.volume = 0;
            audioPlayingHurry.play();
        }, 3000);
    } else if (timerCurrent === 0) {
        mario.style.backgroundImage = "url(/imagens/marioMorto.gif)";
        audioJump.volume = 0;
        audioPlayingHurry.volume = 0;
        audioGameOver.play();
        clearTimeout(timeJump);
        enemy.remove();
        removeHandleKeys();
        clearInterval(checkTiming);
        cancelAnimationFrame(checkKeys);
        cancelAnimationFrame(checkCollision);
        lifesCurrent = 0;
        lifes.textContent = lifesCurrent;
        localStorage.setItem("lifesCurrent", lifesCurrent);
        coinsCurrent = 0;
        coins.textContent = coinsCurrent;
        localStorage.setItem("coinsCurrent", coinsCurrent);
        pointsCurrent = 0;
        points.textContent = pointsCurrent;
        localStorage.setItem("pointsCurrent", pointsCurrent);
        setTimeout(() => {
            buttonRestart.style.display = "block";
        },3000)
    }
}

function collision() {
    const enemyRect = enemy.getBoundingClientRect();
    const marioRect = mario.getBoundingClientRect();
    if (
        enemyRect.left < marioRect.right &&
        enemyRect.right > marioRect.left &&
        enemyRect.top < marioRect.bottom &&
        enemyRect.bottom > marioRect.top
    ) {
        mario.style.backgroundImage = "url(/imagens/marioMorto.gif)";
        audioJump.volume = 0;
        audioPlayingNormal.volume = 0;
        audioLifeLose.play();
        clearTimeout(timeJump);
        enemy.remove();
        removeHandleKeys();
        clearInterval(checkTiming);
        clearInterval(checkKeys);
        clearInterval(checkCollision);
        lifesCurrent--;
        lifes.textContent = lifesCurrent;
        localStorage.setItem("lifesCurrent", lifesCurrent);
       timeReload = setTimeout(() => {
        if (lifesCurrent >=1) {
            location.reload();
            } else {
                if (lifesCurrent === 0) {
                    mario.style.backgroundImage = "url(/imagens/marioMorto.gif)";
                    audioJump.volume = 0;
                    audioPlayingHurry.volume = 0;
                    audioGameOver.play();
                    setTimeout(() => {
                        buttonRestart.style.display = "block";
                    },3000)
                }
            }
        }, 3500);
    } 
}

function collisionBlock() {
    const marioRect = mario.getBoundingClientRect();
    const blockRect = block.getBoundingClientRect();
    if (
        blockRect.left < marioRect.right &&
        blockRect.right > marioRect.left &&
        blockRect.top < marioRect.bottom &&
        blockRect.bottom > marioRect.top
    ) {
        audioCollectedCoin.play();
        coinsCurrent++;
        coins.textContent = coinsCurrent;
        localStorage.setItem("coinsCurrent", coinsCurrent);
        pointsCurrent += 10;
        points.textContent = pointsCurrent;
        localStorage.setItem("pointsCurrent", pointsCurrent);
        checkValueCurrent();
        clearInterval(checkCollisionBlock);
        setTimeout(() => {
            checkCollisionBlock = setInterval(collisionBlock);
        }, 500);

    }
}

function checkValueCurrent() {
    if (coinsCurrent === 20) {
        lifesCurrent++;
        lifes.textContent = lifesCurrent;
        localStorage.setItem("lifesCurrent", lifesCurrent);
        coinsCurrent = 0;
        coins.textContent = coinsCurrent;
        localStorage.setItem("coinsCurrent", coinsCurrent);
        audioLifeWinExtra.play();
    }
}

function handleKeydown(event) {
    if (event.key === "ArrowRight") {
        direction = +10;
        mario.style.backgroundImage = "url(/imagens/marioAndandoLadoDireito.gif)";
    } else if (event.key === "ArrowLeft") {
        direction = -10;
        mario.style.backgroundImage = "url(/imagens/marioAndandoLadoEsquerdo.gif)";
    } else if (!isJumping && event.key === " ") {
        mario.classList.add("marioJump");
        audioJump.play();
        isJumping = true;
       timeJump = setTimeout(() => {
        isJumping = false;
            mario.classList.remove("marioJump");
        }, 500);
    }
}

function handleKeyup(event) {
    if (event.key === "ArrowRight") {
        direction = +0;
        mario.style.backgroundImage =  "url(/imagens/marioParadoLadoDireito.png)";
    } else if (event.key === "ArrowLeft") {
        direction = -0;
        mario.style.backgroundImage =  "url(/imagens/marioParadoLadoEsquerdo.png)";
    }
}

function updateKeys() {
    position += direction;
    if (position < 0) {
        position = 0;
    } else if (position + marioWidth > containerWidth) {
        position = containerWidth - marioWidth;
    }
    mario.style.left = position + "px";
}

function removeHandleKeys() {
    document.removeEventListener("keydown", handleKeydown);
    document.removeEventListener("keyup", handleKeyup);
}

buttonStart.addEventListener("click", function () {
    isRunning = true;
    audioCollectedCoin.play();
    buttonStart.style.display = "none";
    audioWaiting.volume = 0;
    audioPlayingNormal.play();
    enemy.classList.add("animeEnemy");
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);
    checkKeys = setInterval(updateKeys, 40);
    checkCollision = setInterval(collision, 10);
    checkCollisionBlock = setInterval(collisionBlock, 10);
    checkTiming = setInterval(timing, 1000);
})

document.addEventListener("keydown", function (event) {
    if (!isRunning && event.key === "Enter") {
    audioCollectedCoin.play();
    buttonStart.style.display = "none";
    audioWaiting.volume = 0;
    audioPlayingNormal.play();
    enemy.classList.add("animeEnemy");
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);
    checkKeys = setInterval(updateKeys, 40);
    checkCollision = setInterval(collision, 10);
    checkCollisionBlock = setInterval(collisionBlock, 10);
    checkTiming = setInterval(timing, 1000);
    isRunning = true;
    } else if (isRunning && event.key === "Enter") {
        alert("Jogo ja foi iniciado");
    }
})

window.addEventListener("DOMContentLoaded", function () {
    audioWaiting.loop = true;
    audioWaiting.play();
})
