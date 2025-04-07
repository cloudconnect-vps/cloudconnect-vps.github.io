const formReseña = document.getElementById('form-reseña');
const webhookUrl = 'https://discord.com/api/webhooks/1358928066893844560/IDJPomhdH-cNC7kkdBNzYIr_Fh85_mh-RZa1L15Ak5GnF8pVFp3e6GwfIGFHkHMHE_-u'; // Reemplaza con la URL del webhook

formReseña.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const puntuación = document.getElementById('puntuación').value;
    const descripción = document.getElementById('descripción').value;

    const reseña = {
        nombre,
        puntuación,
        descripción
    };

    const embed = {
        title: `Reseña de ${reseña.nombre}`,
        description: reseña.descripción,
        fields: [
            {
                name: 'Puntuación',
                value: reseña.puntuación,
                inline: true
            }
        ]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            embeds: [embed]
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

    formReseña.reset();
});