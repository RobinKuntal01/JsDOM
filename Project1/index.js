const buttons = document.querySelectorAll('.button');
console.log(buttons);

const body = document.querySelector('body')
console.log(body);

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        let colorID = e.target.id;
        console.log(colorID);
        switch (colorID) {
            case 'red':
                console.log(colorID)
                body.style.backgroundColor = colorID
                break;
            case 'blue':
                body.style.backgroundColor = colorID
                break;
            case 'yellow':
                body.style.backgroundColor = colorID
                break;
            case 'green':
                body.style.backgroundColor = colorID
                break;
            default:
                break;
        }
    })
});
