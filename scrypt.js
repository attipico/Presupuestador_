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