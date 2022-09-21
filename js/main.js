
let alumnos = [
    {
        nombre: "David",
        edad: 43,
        superpoder: "Relajarme",
        vehiculo: "Moto",
        key: 1
    },
    {
        nombre: "Paula",
        edad: 31,
        superpoder: "Invisibilidad",
        vehiculo: "Coche",
        key: 2
    },
    {
        nombre: "Cristian",
        edad: 26,
        superpoder: "Volar",
        vehiculo: "Cuadriceps",
        key: 3
    },
    {
        nombre: "Rocio",
        edad: 34,
        superpoder: "Meditación",
        vehiculo: "Coche",
        key: 4
    },
    {
        nombre: "Mirka",
        edad: 25,
        superpoder: "Paciencia",
        vehiculo: "Coche",
        key: 5
    },
    {
        nombre: "Yuri",
        edad: 30,
        superpoder: "Tranquilidad",
        vehiculo: "Coche",
        key: 6
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
                        <div key='${persona.key}' onclick='Saludar("${persona.nombre}")' class="cardPersona">
                            <div  class="datosPersona">${persona.edad}</div>
                            <div  class="datosPersona">${persona.nombre}</div>
                            <div  class="datosPersona">${persona.superpoder}</div>
                        </div>
                    `
            }
        ).join('');
});

const Saludar = (quien) => {
    console.log(`Hola ${quien}`);
    // console.log("funciona");
};