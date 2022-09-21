
let alumnos = [
    {
        nombre: "David",
        edad: 43,
        superpoder: "Relajarme",
        vehiculo: "Moto"
    },
    {
        nombre: "Paula",
        edad: 31,
        superpoder: "Invisibilidad",
        vehiculo: "Coche"
    },
    {
        nombre: "Cristian",
        edad: 26,
        superpoder: "Volar",
        vehiculo: "Cuadriceps"
    },
    {
        nombre: "Rocio",
        edad: 34,
        superpoder: "Meditación",
        vehiculo: "Coche"
    },
    {
        nombre: "Mirka",
        edad: 25,
        superpoder: "Paciencia",
        vehiculo: "Coche"
    },
    {
        nombre: "Yuri",
        edad: 30,
        superpoder: "Tranquilidad",
        vehiculo: "Coche"
    }
];

let cajonContenido = document.getElementById("cajon");
let mensajeSecreto = document.getElementById("mensajeSecreto");

cajonContenido.innerHTML = `Los mejores alumnos de momento son...`;

cajonContenido.addEventListener("click", () => {
    //Aqui procederemos a "pintar" los alumnos.
    mensajeSecreto.innerHTML =

        alumnos.map(
            persona => {

                return `
                        <div class="cardPersona">
                            <div class="datosPersona">${persona.edad}</div>
                            <div class="datosPersona">${persona.nombre}</div>
                            <div class="datosPersona">${persona.superpoder}</div>
                        </div>
                    `
            }
        ).join('');
});