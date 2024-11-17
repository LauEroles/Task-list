import Tarea from "../Tarea/Tarea"
import { InterfazOrdenar } from "./InterfazOrdenar"

export class OrdenarPorFecha implements InterfazOrdenar{

    public ordenar(tareas: Map<number, Tarea>): Tarea[] {
       
        let array:Tarea[] = [];

        tareas.forEach((tarea:Tarea, _key:number)=>{
            array.push(tarea);
        });

        array.sort(this.comparador);
        return array;
   
    }
   

    private comparador(t1: Tarea, t2: Tarea): number {
        const fecha1 = t1.getFechaVencimiento();
        const fecha2 = t2.getFechaVencimiento();
        let resultado: number = 0;
    
        if (!fecha1) {
            // Caso: t1 no tiene fecha y t2 sí
            resultado = 1;// t2 va primero
        } else if (!fecha2) {
            // Caso: t2 no tiene fecha y t1 sí
            resultado = -1; // t1 va primero
        } else if ((fecha1 as Date) < (fecha2 as Date)) {
            // Caso: Ambas fechas son válidas
            resultado = -1; // t1 va primero
        } else if ((fecha1 as Date) > (fecha2 as Date)) {
            resultado = 1; // t2 va primero
        }
    
        return resultado; // Fechas iguales
    }
}

