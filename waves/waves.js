const start = document.querySelector('#btn');

start.addEventListener('click', function() {
    const audio = document.querySelector("#player");
    audio.paused ? audio.play() : audio.pause();
    document.querySelector('#myVideo').play();
});

const time = 5;
let minutesTime = time *60;

const calculateTime = () => {
    const waves = document.querySelector('#waves');
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