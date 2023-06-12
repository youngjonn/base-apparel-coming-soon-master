document.querySelector('.arrow').addEventListener('click', () => {
    let input = document.querySelector('form input');
    let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    if (input.value.match(valid)) {
        document.querySelector('form').classList.add('active');
    } 
    else {
        document.querySelector('form').classList.remove('active');
    }


    document.querySelector('form').classList.toggle('active')
})