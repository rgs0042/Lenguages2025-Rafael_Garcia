function btnCalcular() {

    const ancho = parseFloat(document.getElementById("ancho").value);
    const alto = parseFloat(document.getElementById("alto").value);
    const largo = parseFloat(document.getElementById("largo").value);
    const material = document.getElementById("material").value;
    const preciobase = parseFloat(document.getElementById("preciob").value);
    const incrementoPla = parseFloat(document.getElementById("plas").value);
    const incrementoCar = parseFloat(document.getElementById("car").value);
    const incrementoMade = parseFloat(document.getElementById("made").value);
    const iva = parseFloat(document.getElementById("iva").value);

    const volumen = ancho * alto * largo;

    const area = alto * ancho;

    const superficie = area * 6;

    let precioSinIva = 0;



    if (material == "Plástico") {
        precioSinIva = preciobase * (incrementoPla / 100);
    } else if (material == "Cartón") {
        precioSinIva = preciobase * (incrementoCar / 100);
    } else {
        precioSinIva = preciobase * (incrementoMade / 100);
    }

    let precioConIva = precioSinIva * (iva / 100);


    if (ancho < 5 || alto < 5 || largo < 5 || ancho > 100 || alto > 100 || largo > 100) {
        alert("LAS DIMENSIONES TIENEN QUE SER MAYOR QUE 5 Y MENOR QUE 100")
        document.getElementById("texto").innerHTML = ``;
    }
    else {
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
}