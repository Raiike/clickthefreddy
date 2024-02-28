let clickImg = document.querySelector('#thanos')
let loop = null
let score = 0
let x = 100
let y = 100
totalSecondes = 62
let scorehtml = document.querySelector('#score')
let cmon = ``
let audio = new Audio("./assets/sound/fnaf.mp4")
let fnaf = new Audio ("./assets/sound/boite.mp4")
let timer = null

function speed(swift) {
    clearInterval(loop)
loop = setInterval(() => {
    x = randomize(0 , 60)
    y = randomize(0 , 85)
    clickImg.style.top = x + "%"
    clickImg .style.left = y + "%"
}, swift);
}
speed(1500) 
timerOut()

function clickReact(element) {
    console.log(score);
    audio.play()
    fnaf.play()
        console.log("+1")
        score++
        scorehtml.innerHTML = `Your score : ${score} ${cmon}`
        if (score >= 5) {
            speed(500) 
            cmon = `<br> Tu t'en sort bien continue comme ca !`
        }
        if (score >= 10) {
            speed(400) 
            cmon = `<br> WOW tu grind fort là !`
        }
        if (score >= 20) {
            speed(300) 
            cmon = `<br> Tes la machine  !`
        }
        if (totalSecondes===0) {
            scorehtml.innerHTML = `Your score :${score} <br> Click on reset to retry !`
            score = 0
            clearInterval(loop)
        }
}
function restart() {
    document.querySelector('#reset').classList.add("hidden");
    totalSecondes = 62
    score = 0
    clearInterval(timer)
    clearInterval(loop)
    speed(1500)
    timerOut()
}
function timerOut() {
        timer = setInterval(() => {
        totalSecondes--
        document.querySelector("#time").textContent = `Temps Restant : ${totalSecondes}`
        if (totalSecondes===0) {
            clearInterval(loop)
            clearInterval(timer)
            clearInterval(score)
            document.querySelector('#reset').classList.remove("hidden");
        }
}, 1000);
}




function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
