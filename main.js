const boton = document.querySelector('.boton');
const opciones = document.querySelector('.opciones');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

boton.addEventListener('click', () => {
    opciones.style.display = 'block';
    overlay.classList.add('show-overlay');
    document.body.appendChild(overlay);
});

overlay.addEventListener('click', () => {
    opciones.style.display = 'none';
    overlay.classList.remove('show-overlay');
    overlay.remove();
});