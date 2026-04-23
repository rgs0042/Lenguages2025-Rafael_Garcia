function btnCalcular() {

    const numa = parseFloat(document.getElementById("numa").value);
    const numb = parseFloat(document.getElementById("numb").value);
    const numc = parseFloat(document.getElementById("numc").value);

    let mayor ;

    let menor

    if (numero1 > numero2) {
                mayor = numero1;
            } else if (numero2 > numero1) {
                mayor = numero2;
            } else {
                mayor = "Los números son iguales";
            }


    
        document.getElementById("texto").innerHTML = `
        <h2>Sección de Resultados</h2>

        <p>Dimensiones de la caja: ${ancho} x ${alto} x ${largo} cm</p>
        <p>Volumen en cm<sup>3</sup>: ${volumen}</p>
        <p>Superficie en cm<sup>2</sup>: ${superficie}</p>
        <p>Material seleccionado: ${material}</p>
        <p>Precio sin IVA: ${precioSinIva}</p>
        <p>Precio con IVA: ${precioConIva}</p>



    `;
    
}