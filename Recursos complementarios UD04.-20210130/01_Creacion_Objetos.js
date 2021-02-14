const carrito1 = [
    {nombre: 'Monitor 27 pulgadas', precio: 150},
    {nombre: 'TV 56 Pulgadas', precio: 600 },
    {nombre: 'Móvil', precio: 850 },
    {nombre: 'Tablet Smasung', precio: 400 },
    {nombre: 'AUriculares', precio: 80 }
]

// Convertir en un array de objetos
class Producto {
    constructor(nombre ='sin nombre', precio = 0){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const carrito2=[];
carrito2.push(new Producto ('Monitor 27 pulgadas', 150));
carrito2.push(new Producto ('TV 56 Pulgadas', 600));
carrito2.push(new Producto ('Móvil', 850));
carrito2.push(new Producto ('Tablet Smasung', 400));
carrito2.push(new Producto ('AUriculares',80));

console.log(carrito1);
console.log(carrito2);