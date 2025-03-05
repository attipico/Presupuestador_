# Presupuestador_
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presupuestador de Mobiliario</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Presupuestador de Mobiliario</h2>
    <form id="presupuestoForm">
        <label>Tipo de mueble:</label>
        <select id="tipoMueble">
            <option value="mesa">Mesa</option>
            <option value="silla">Silla</option>
            <option value="armario">Armario</option>
        </select>

        <label>Material:</label>
        <select id="material">
            <option value="madera">Madera</option>
            <option value="metal">Metal</option>
        </select>

        <label>Cantidad:</label>
        <input type="number" id="cantidad" value="1">

        <button type="button" onclick="calcularPresupuesto()">Calcular</button>
    </form>

    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 50px;
}

form {
    display: inline-block;
    text-align: left;
}

button {
    display: block;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

function calcularPresupuesto() {
    let tipo = document.getElementById("tipoMueble").value;
    let material = document.getElementById("material").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    
    let precios = {
        mesa: { madera: 100, metal: 150 },
        silla: { madera: 50, metal: 75 },
        armario: { madera: 200, metal: 300 }
    };

    let costoUnitario = precios[tipo][material];
    let total = costoUnitario * cantidad;
    
    document.getElementById("resultado").innerText = "Total: $" + total;
}
