const INTERVAL = 75;
const ATTEMPTS = 40;

const cb = () => {
    let zenRemoved = false;
    let attempts = ATTEMPTS;

    const handle = setInterval(() => {
        if (document.head) {
            // Prevents zen flickering
            const style = document.createElement('style');
            document.head.appendChild(style);
            style.appendChild(document.createTextNode(`#zen {
                display: none;
            }`));
            zenRemoved = true;
        }

        if (zenRemoved || (attempts-- === 0)) {
            clearInterval(handle);
        }
    }, INTERVAL);
};

cb();
