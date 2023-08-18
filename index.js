// <div id="clock"></div>
const div = document.createElement('div');
div.id = 'clock';
document.body.append(div);

// <span class="hh">hh</span>:<span class="mm">mm</span>:<span class="ss">ss</span>
// hours
const spanHH = document.createElement('span');
spanHH.className = 'hh';
spanHH.textContent = 'hh';
spanHH.style.fontSize = '20px';
spanHH.style.color = 'red';

// minutes
const spanMM = document.createElement('span');
spanMM.className = 'mm';
spanMM.textContent = 'mm';
spanMM.style.fontSize = '20px';
spanMM.style.color = 'green';

// seconds
const spanSS = document.createElement('span');
spanSS.className = 'ss';
spanSS.textContent = 'ss';
spanSS.style.fontSize = '20px';
spanSS.style.color = 'blue';

div.appendChild(spanHH);
div.appendChild(document.createTextNode(':'));
div.appendChild(spanMM);
div.appendChild(document.createTextNode(':'));
div.appendChild(spanSS);

let isRunning = false;

setInterval(() => {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (isRunning === true) {
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        div.textContent = hours + ':' + minutes + ':' + seconds;

        spanHH.textContent = hours;
        spanMM.textContent = minutes;
        spanSS.textContent = seconds;
    }
});

// <button>Start</button>
const btnStart = document.createElement('button');
btnStart.innerHTML = 'Start';
document.body.append(btnStart);

// <button>Stop</button>
const btnStop = document.createElement('button');
btnStop.innerHTML = 'Stop';
document.body.append(btnStop);

btnStart.addEventListener('click', () => {
   isRunning = true;
});

btnStop.addEventListener('click', () => {
   isRunning = false;
});
