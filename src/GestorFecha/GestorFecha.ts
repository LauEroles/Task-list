
//esta clase nos permitira manipular con mayor facilidad los objetos nativos de tipo Date

export default class GestorFecha {

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
    };

    public nuevaFecha(dia:number,mes:number,año:number):Date {  //validacion de fecha? un poco ya tiene el date
        return new Date(año,mes,dia);
    }

    public tiempoTranscurridoEnMilisegundos(fechaInicio:Date):number{

        let ahoraEnMilisegundos : number = Date.now();
        let fechaInicioEnMilisegundos = fechaInicio.getTime();

        return ahoraEnMilisegundos - fechaInicioEnMilisegundos;
    }
        
//    (((((Milisegundo/1000)/3600)/24)/30)/12) //de milisegundos a segundos, a hora, a dia a mes a año

   /* public convertirDeMilisegundoAFecha(FechaEnMilisegundos:number):Date{ //de momento no hace falta
        return new Date(FechaEnMilisegundos);
    }
*/

}