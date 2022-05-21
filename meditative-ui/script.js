const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTimeOfAnimation = 7500;
const breatheTime = (totalTimeOfAnimation / 5) * 2;
const holdTime = totalTimeOfAnimation / 5;

breatheAnimation();

function breatheAnimation() {
    text.innerText = 'Breathe in...';
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold...';

        setTimeout(() => {
            text.innerText = 'Breathe out...'
            container.className = 'container shrink'
        }, holdTime);
    }, breatheTime);
}

setInterval(breatheAnimation, totalTimeOfAnimation);