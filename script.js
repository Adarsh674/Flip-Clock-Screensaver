var previousTime = null;

function initializeClock() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    if (hours >= 10) {
        setDigit('hour1', 1);
    }
    else {
        var hour1Digit = document.querySelector('.hour1');
        hour1Digit.style.display = hours >= 10 ? 'block' : 'none';
    }

    setDigit('hour2', hours % 10);
    setDigit('minute1', minutes.charAt(0));
    setDigit('minute2', minutes.charAt(1));
    setDigit('second1', seconds.charAt(0));
    setDigit('second2', seconds.charAt(1));
    setAmPm(ampm);
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    if (hours >= 10) {
        setDigit('hour1', 1);
    }
    else {
        var hour1Digit = document.querySelector('.hour1');
        hour1Digit.style.display = hours >= 10 ? 'block' : 'none';
    }

    animateFlip('hour1', Math.floor(hours / 10));
    animateFlip('hour2', hours % 10);
    animateFlip('minute1', minutes.charAt(0));
    animateFlip('minute2', minutes.charAt(1));
    animateFlip('second1', seconds.charAt(0));
    animateFlip('second2', seconds.charAt(1));
    animateAmPm(ampm);
}

function animateFlip(className, value) {
    var digit = document.getElementsByClassName(className)[0];
    if (digit.textContent !== value.toString()) {
        digit.classList.remove('flip-down');
        digit.classList.add('flip-up');
        setTimeout(function() {
            digit.textContent = value;
            digit.classList.remove('flip-up');
            digit.classList.add('flip-down');
        }, 500);
    }
}

function setDigit(className, value) {
    var digit = document.getElementsByClassName(className)[0];
    digit.textContent = value;
}

function setAmPm(value) {
    var ampmElement = document.querySelector('.ampm');
    ampmElement.textContent = value;
    
}

function animateAmPm(value) {
    var ampmElement = document.querySelector('.ampm');
    if (ampmElement.textContent[0] !== value[0]) {
        ampmElement.classList.remove('flip-down');
        ampmElement.classList.add('flip-up');
        setTimeout(function() {
            ampmElement.textContent = value;
            ampmElement.classList.remove('flip-up');
            ampmElement.classList.add('flip-down');
        }, 500);
    }
}

initializeClock();
setInterval(updateClock, 1000);
