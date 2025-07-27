function solicitarInfo(modelo) {
  alert("Gracias por tu interés en el " + modelo + ". Nos pondremos en contacto contigo pronto.");
}

document.getElementById("formAuto").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const marca = document.getElementById("marca").value;
  const anio = document.getElementById("anio").value;
  const precio = document.getElementById("precio").value;
  const imagenInput = document.getElementById("imagen");

  const reader = new FileReader();
  reader.onload = function(event) {
    const imagenURL = event.target.result;

    const contenedorAuto = document.createElement("div");
    contenedorAuto.classList.add("auto");

    contenedorAuto.innerHTML = `
      <img src="${imagenURL}" alt="${nombre}">
      <h3>${nombre} - ${marca} (${anio})</h3>
      <p>Precio: $${precio}</p>
      <button onclick="solicitarInfo('${nombre}')">Solicitar información</button>
    `;

    document.querySelector(".grid-autos").appendChild(contenedorAuto);
    document.getElementById("formAuto").reset();
    alert("Auto agregado correctamente.");
  };

  if (imagenInput.files.length > 0) {
    reader.readAsDataURL(imagenInput.files[0]);
  } else {
    alert("Por favor, selecciona una imagen.");
  }
});
