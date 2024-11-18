import Tarea from "../Tarea/Tarea"
import { InterfazOrdenar } from "./InterfazOrdenar"

export class OrdenarPorFecha implements InterfazOrdenar{

    public ordenar(tareas: Map<number, Tarea>): Tarea[] {
       
        let array:Tarea[] = [];

        tareas.forEach((tarea:Tarea, _key:number)=>{
            array.push(tarea);
        });

        //Le paso por parametro a sort una funcion que compara 2 tareas
        //Aqui no ven los parentesis porque no le tengo que pasar la ejecusion de la 
        //funcion sino la funcion para que el método sort la ejecute
        array.sort(this.comparador);
        return array;
   
    }
   

    private comparador(t1: Tarea, t2: Tarea): number {
        const fecha1 = t1.getFechaVencimiento();
        const fecha2 = t2.getFechaVencimiento();
        let resultado: number = 0;
    
        //En este caso la fecha de la tarea es undefined, tome la desición de que las tareas que no tengan 
        //seteadas las fechas queden arriba
        if (!fecha1) {
            // Caso: t1 no tiene fecha y t2 sí
            resultado = -1;// t2 va primero
        } else if (!fecha2) {
            // Caso: t2 no tiene fecha y t1 sí
            resultado = 1; // t1 va primero
        } else if ((fecha1 as Date) < (fecha2 as Date)) {
            // Caso: Ambas fechas son válidas
            resultado = -1; // t1 va primero
        } else if ((fecha1 as Date) > (fecha2 as Date)) {
            resultado = 1; // t2 va primero
        }
    
        return resultado; // Fechas iguales
    }
}

