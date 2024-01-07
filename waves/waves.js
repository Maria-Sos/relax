const time = 0.5;
let minutesTime = time *60;

const calculateTime = () => {
    const waves = document.querySelector('#waves');
    let minutes = Math.floor(minutesTime/60);
    let sec = minutesTime%60

    waves.textContent = `${minutes} : ${sec}`;
    minutesTime--

    console.log(minutesTime)
    if(minutesTime < 0) {
        clearInterval(timer);
        minutesTime = 0;
    }

}

let timer = setInterval(calculateTime, 1000);