// Referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")


formGuardar.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se capturan los datos del formulario
    const titulo = document.querySelector('#titulo').value;
    const detalle = document.querySelector('#detalle').value;
    const url_imagen = document.querySelector('#url_imagen').value;
    const fecha_publicacion = document.querySelector('#fecha_publicacion').value;
    const nombre_autor = document.querySelector("#nombre_autor").value;

    // Enviar al servidor
    const response = await fetch('/api/publicacion', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, detalle, url_imagen, fecha_publicacion, nombre_autor})
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/admin/publicaciones"

})