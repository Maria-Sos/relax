gsap.to('h1, #btn, #myVideo', {
    duration: 2,
    scale: 1,
    opacity: 1,
    stagger: 0.1
});

document.querySelector('.btn-waves').addEventListener('mouseover', () => {
    gsap.to('.btn-waves', {
        duration: 1,
        scale: 1.5,
        repeat: 1,
        yoyo: 1
    })
});

document.querySelector('.btn-nature').addEventListener('mouseover', () => {
    gsap.to('.btn-nature', {
        duration: 1,
        scale: 1.5,
        repeat: 1,
        yoyo: 1
    })
});

document.querySelector('.btn-rain').addEventListener('mouseover', () => {
    gsap.to('.btn-rain', {
        duration: 1,
        scale: 1.5,
        repeat: 1,
        yoyo: 1
    })
});
