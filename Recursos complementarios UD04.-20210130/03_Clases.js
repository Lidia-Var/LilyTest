

class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre); // undefined, no puedo acceder a lsa propiedades del objeto (this.)
        console.log('Hola a todos, soy un método stático');
    }

    /*static mensaje2(nombre) {
        console.log( nombre ); //funciona
        console.log('Hola a todos, soy un método stático');
    }*/

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
        // podríamos incrementar el número de instancias cada vez que se crea un objeto
        Persona._conteo++; //esto solo vale para los estáticos y suma cada vez q se hacen personas
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }

}
//mensaje2("pepe");
//persona1 es una instancia:
const persona1 = new Persona( 'Perico Pérez', 'Perico', 'Tengo un nombre conocido por todos' );
const persona2 = new Persona( 'Fulanito De Tal', 'Fulanito', 'Puedes llamarme Tal' );

// acceso normal a los métodos, a través del objeto
persona1.quienSoy();
persona1.miFrase();

// Mostrar propiedades estáticas. No utilizamos las instancias de los objetos creadas.
console.log('Conteo stático', Persona._conteo );
Persona.mensaje();
//Mostrar el objeto. Fijarse que el método get conteo aparece como la propiedad conteo (distinta de _conteo)
console.log( Persona );