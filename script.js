document.getElementById('visualizar-btn').addEventListener('click', function() {
    const ciudad = document.getElementById('ciudad').value;
    const fechaInicio = document.getElementById('fecha-inicio').value;
    const fechaFin = document.getElementById('fecha-fin').value;

    // Validar que las fechas son correctas
    if (!ciudad || !fechaInicio || !fechaFin) {
        console.error('Por favor complete todos los campos de entrada.');
        return;
    }

    // Validar formato de fechas (MM/DD/YYYY)
    const fechaInicioValida = /^\d{2}/.test(fechaInicio);
    const fechaFinValida = /^\d{2}/.test(fechaFin);
    if (!fechaInicioValida || !fechaFinValida) {
        console.error('Por favor introduzca fechas en el formato correcto (MM/DD/YYYY).');
        return;
    }

    // Aquí se llamaría a la API para obtener los datos del clima (por ejemplo, usando fetch o axios)
    // Importante: Asegúrate de manejar los errores al hacer la llamada a la API.
    console.log(`Datos para ${ciudad} desde ${fechaInicio} hasta ${fechaFin}`);
    // Lógica para visualizar los datos utilizará D3.js
});