const start = document.querySelector('#btn');
const back = document.querySelector('.back');

back.addEventListener('click', function() {
    history.back();
});

start.addEventListener('click', function() {
    const audio = document.querySelector("#player");
    audio.paused ? audio.play() : audio.pause();
    document.querySelector('#myVideo').play();
});

const time = 5;
let minutesTime = time *60;

const calculateTime = () => {
    const waves = document.querySelector('#rain');
    let minutes = Math.floor(minutesTime/60);
    let sec = minutesTime%60

    if(sec < 10) sec = `0${sec}`;

    waves.textContent = `${minutes} : ${sec}`;
    minutesTime--

    if(minutesTime < 0) {
        clearInterval(timer);
        minutesTime = 0;
    }
}

let timer = setInterval(calculateTime, 1000);

gsap.to('#rain, #myVideo, #btn', {
    duration: 2,
    disply: 1,
    opacity: 1,
})
