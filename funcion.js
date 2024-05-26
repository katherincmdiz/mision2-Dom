document.getElementById('changeButton').addEventListener('click', function() {

    const image = document.getElementById('image');
    if (image.src.includes('imagenes/elemento1.jpg')) {
        image.src = 'imagenes/elemento2.jpg';
        image.classList.add('changed');
    } else {
        image.src = 'imagenes/elemento1.jpg';
        image.classList.remove('changed');
    }

    const paragraph = document.getElementById('paragraph');
    if (paragraph.textContent === 'La felicidad tiene cuatro patas y una cola que nunca deja de moverse.') {
        paragraph.textContent = 'El mejor terapeuta tiene pelaje y cuatro patas.';
    } else {
        paragraph.textContent = 'La felicidad tiene cuatro patas y una cola que nunca deja de moverse.';
    }
});
