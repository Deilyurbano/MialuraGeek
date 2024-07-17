document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('precio');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = form.productNombre.value;
        const precio = form.precio.value;

        resultDiv.innerHTML = `
            <p>Producto agregado:</p>
            <p>Nombre: ${nombre}</p>
            <p>Precio: $${precio}</p>
        `;

        form.reset();
    });
});