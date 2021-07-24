import { countTimeDiff } from './countTimeDiff.js';


function renderClock(selector) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selectorius turi buti tekstinio tipo');
        return false;
    }
    if (selector == '') {
        console.error('ERROR: selectorius negali buti tuscias tekstas');
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerasta vieta, kur sugeneruoti laikrodzio HTML turini');
        return false;
    }

    const time = countTimeDiff();

    const HTML = `<div class="time-box">
                    <div class="time">${time.days}</div>
                    <span>Days</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.seconds}</div>
                    <span>Seconds</span>
                </div>`;

    DOM.innerHTML = HTML;
    const timesDOM = DOM.querySelectorAll('.time');

    // paleidziame laikrodzio mechanizka
    let timePassed = 0;

    setInterval(() => {
        const time = countTimeDiff();
        timesDOM[0].innerText = time.days;
        timesDOM[1].innerText = time.hours;
        timesDOM[2].innerText = time.minutes;
        timesDOM[3].innerText = time.seconds;
    }, 1000);

    return true;
}

export { renderClock }