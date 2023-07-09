let counter = 0;

const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function (c) {
    c.addEventListener('click', function (e) {
        const classes = (e.currentTarget.classList)

        if (classes.contains('decrease')) {
            counter--;
        } else if (classes.contains('increase')) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter < 0) {
            value.style.color = 'red';
        } else if (counter > 0) {
            value.style.color = 'green'
        } else {
            value.style.color = 'black'
        }
        value.textContent = counter;
    })
})