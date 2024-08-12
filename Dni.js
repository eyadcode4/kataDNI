import { letrasDni } from "./LetrasDni";

export	class DNI {
    constructor (numeroDni){
        if ( !Number.isInteger (numeroDni) || numeroDni<0 || numeroDni>99999999){
            throw new Error  ("the number is incorrect");
        }
        this.numeroDni = numeroDni;
    }
    calcularLetra (){
        const rest = this.numeroDni % 23;
        console.log(`Number: ${this.numeroDni}, Rest: ${rest}, letter: ${letrasDni[rest]}`); 
        return letrasDni[rest];
    }
}


