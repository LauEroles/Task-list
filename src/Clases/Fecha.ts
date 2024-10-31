export default class Fecha{
    private dia: number;
    private mes: number;
    private año: number; 

    constructor(dia :  number, mes :  number,año :  number){
        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }

    //setters & getters
    public getDia(): number {
        return this.dia;
    }
    public setDia(value: number) {
        this.dia = value;
    }

    public getMes(): number {
    return this.mes;
    }
    public setMes(value: number) {
    this.mes = value;
    }

    public getAño(): number {
        return this.año;
    }
    public setAño(value: number) {
        this.año = value;
    }
}