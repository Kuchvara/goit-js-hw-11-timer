const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
    timer: document.querySelector('#timer-1')
}

class CountdownTimer {

    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.intervalId = null;
    }

    start() {
        const startTime = this.targetDate.getTime()

       this.intervalId = setInterval(() => {
            const currentTime = Date.now();
           const deltaTime = startTime - currentTime;
           
           if (deltaTime <= 0) {
               this.stop()
           }

            this.updateClock(deltaTime);
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        refs.days.textContent = '';
        refs.hours.textContent = '';
        refs.mins.textContent = '';
        refs.secs.textContent = '';
    }

    updateClock(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
    }

    pad(value) {
        return String(value).padStart(2, '0')
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Mar 01, 2021'),
});

timer.start();

//  через брак часу роблю мінімальний життєздатний продукт так би мовити))))