import GestorDeFechas from "../GestorDeFechas"
import {mock} from "jest-mock-extended";

describe ("Tests clase GestorDeFecha", () => { 

    let gestorDeFechas : GestorDeFechas; 

    beforeEach(() =>{   
    
        gestorDeFechas = new GestorDeFechas();
     
    })

    test ("capturar Fecha actual correcta", ()=>{

        let fechaActual:Date = new Date(Date.now());

        expect(gestorDeFechas.capturarFechaActual()).toEqual(fechaActual);

    })

    test ("capturar dia Correcto", ()=>{

        let diaCatorce :Date = new Date (1998,3,14)

        expect(gestorDeFechas.diaFecha(diaCatorce)).toEqual(14);
  
    })

    test ("capturar mes Correcto", ()=>{

        let mesAbril :Date = new Date (1998,3,14)

        expect(gestorDeFechas.mesFecha(mesAbril)).toEqual(3); //Date toma los meses desde 0 a 11
  
    })

    test ("capturar año Correcto", ()=>{

        let añoNoventaYOcho :Date = new Date (1998,3,14)

        expect(gestorDeFechas.añoFecha(añoNoventaYOcho)).toEqual(1998);
  
    })

    test ("capturar tiempo Transcurrido En Milisegundos Correcto", ()=>{
        let fechaInicio :Date = new Date (1998,3,14)
        expect(gestorDeFechas.tiempoTranscurridoEnMilisegundos(fechaInicio)).toEqual(1);
        
    })

    test ("capturar fecha nueva Correcta", ()=>{

        let fechaDate :Date = new Date (1998,3,14)

        expect(gestorDeFechas.nuevaFecha(14,4,1998)).toEqual(fechaDate);
  
    })

})

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