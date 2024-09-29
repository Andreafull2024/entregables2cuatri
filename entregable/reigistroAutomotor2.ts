

/*Implementar la clase Registro Automotor (Autos, Motos,Camiones) y deben tener los metodos: Agregar vehiculo, get y set, 
modficar un vehiculo, dar de baja, incorporando encapsulamiento y composicion*/


class Transporte {    /*Aqui englobo las caracteristicas comunes de los vehiculos*/
    private tipo: string;
    private marca: string;
    private modelo: string;
    private año: number;
    private patente: number;

    constructor(tipo: string, marca: string, modelo: string, año: number, patente: number) {  //nueva instancia
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.patente = patente;
    }
 
    public getTipo(): string {       /*le aplico get y set a cada una*/
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getAño(): number {
        return this.año;
    }

    public setAño(año: number): void {
        this.año = año;
    }

    public getPatente(): number {
        return this.patente;
    }

    public setPatente(patente: number): void {
        this.patente = patente;
    }
}

/*Tengo que seguir completando porque tengo dudas*/