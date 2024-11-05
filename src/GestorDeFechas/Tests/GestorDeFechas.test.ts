import GestorDeFechas from "../GestorDeFechas"
import {mock} from "jest-mock-extended";

describe ("Tests clase GestorDeFecha", () => { 

    let gestorDeFechas : GestorDeFechas; 

    beforeEach(() =>{   
    
        gestorDeFechas = new GestorDeFechas();
     
    })

    test ("capturar Fecha actual correcta", ()=>{

      expect(gestorDeFechas.capturarFechaActual())toEqual.(new Date(Date.now()));

    })

    test ("capturar dia Correcto", ()=>{

        expect(gestorDeFechas.())toEqual.();
  
    })

    test ("capturar mes Correcto", ()=>{

        expect(gestorDeFechas.())toEqual.();
  
    })

    test ("capturar año Correcto", ()=>{

        expect(gestorDeFechas.())toEqual.();
  
    })

    test ("capturar tiempo Transcurrido En Milisegundos Correcto", ()=>{

        expect(gestorDeFechas.())toEqual.();
  
    })

    test ("capturar fecha nueva Correcta", ()=>{

        expect(gestorDeFechas.())toEqual.();
  
    })

}

/*
+diaFecha(fecha:Date):Number
+mesFecha(fecha:Date):Number
+añoFecha(fecha:Date):Number
+capturarFechaActual():Date
+nuevaFecha(dia:number,mes:number,año:number):Date
+tiempoTranscurridoEnMilisegundos(fechaInicio:Date):number

//+Funciones De conversiones
milisegundoA
*/