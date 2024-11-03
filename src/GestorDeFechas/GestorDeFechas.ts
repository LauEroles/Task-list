
//esta clase nos permitira manipular con mayor facilidad los objetos nativos de tipo Date

export default class GestorDeFechas {

    public diaFecha(fecha:Date):Number {
        return fecha.getDate();
    }

    public mesFecha(fecha:Date):Number {
        return fecha.getMonth();
    }

    public añoFecha(fecha:Date):Number {
        return fecha.getFullYear();
    }

    public capturarFechaActual():Date { 
        return new Date(Date.now());
    }

    public nuevaFecha(dia:number,mes:number,año:number):Date {  //validacion de fecha? un poco ya tiene el date
        return new Date(año,mes,dia);
    }

    public tiempoTranscurridoEnMilisegundos(fechaInicio:Date):number{

        let ahoraEnMilisegundos : number = Date.now();
        let fechaInicioEnMilisegundos = fechaInicio.getTime();

        return ahoraEnMilisegundos - fechaInicioEnMilisegundos;
    }
    
    public milisegundosAAño(miliSegundos : number) :number {
        let años: number = miliSegundos /(1000 * 60 * 60 * 24 * 30 * 12)
        return this.parteEntera(años);
    }

    public milisegundosAMes(miliSegundos : number) :number {
        let meses: number = miliSegundos / (1000 * 60 * 60 * 24 * 30);
        return this.parteEntera(meses);
    }
    public milisegundosAdia(miliSegundos : number) :number {
        let dias: number = miliSegundos / (1000 * 60 * 60 * 24);
        return this.parteEntera(dias);
    }
    
    public milisegundoAHora(miliSegundos : number) :number {
        let horas : number = miliSegundos / (1000 * 60 * 60)
        return this.parteEntera(horas);
    }

    public milisegundoAminuto(miliSegundos : number) :number {
        let minutos : number = miliSegundos / (1000 * 60)
        return this.parteEntera(minutos);
    }

    public milisegundoASegundo(miliSegundos : number) :number {
        let segundos : number = miliSegundos / 1000;
        return this.parteEntera(segundos);
    }

    private parteEntera (numero : number):number{
        return Math.trunc(numero);
    }

   /* public convertirDeMilisegundoAFecha(FechaEnMilisegundos:number):Date{ //de momento no hace falta
        return new Date(FechaEnMilisegundos);
    }
    */

}