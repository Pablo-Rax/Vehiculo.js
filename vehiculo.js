
// Inicializamos creando la clase vehiculo...

class Vehiculo{
    constructor(marca, modelo, color){
        
        // Añadimos atributos a nuestro objeto...
        
        this.marca=marca;
        this.modelo=modelo;
        this.color=color;
    }
    VerMarca(){
        return `${this.marca}`;
    }
    VerModelo(){
        return `${this.modelo}`;
    }
    VerColor(){
        return `${this.color}`;
    }
}

// Creamos nuestros tres objetos a mostrar en la consola...

let vehiculo1 = new Vehiculo("Honda", 2020, "Negro");
let vehiculo2 = new Vehiculo("Nissan", 2015, "Blanco");
let vehiculo3 = new Vehiculo("Toyota", 2024, "Azul");

// Imprimimos los tres objetos creados en la consola...

console.log(vehiculo1);
console.log(vehiculo2);
console.log(vehiculo3);

// Fin...
