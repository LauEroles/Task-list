import { PrioridadTarea } from "../Tarea/Enumeradores/PrioridadTarea";
import Tarea from "../Tarea/Tarea"
import { InterfazOrdenar } from "./InterfazOrdenar"

export class OrdenarPorPrioridad implements InterfazOrdenar{

    public ordenar(tareas: Map<number, Tarea>): Tarea[] {
       
        let array:Tarea[] = [];

        tareas.forEach((tarea:Tarea, _key:number)=>{
            array.push(tarea);
        });

        array.sort(this.comparadorDescendente);
        return array;
   
    }

    //TODO:
    // Compara de mayor prioridad a menor prioridad
    private comparadorDescendente(t1:Tarea, t2:Tarea):number{
        
        let value:number = 0;


        if(t1.getPrioridad() > t2.getPrioridad()){
            value=-1;
        }else if(t1.getPrioridad() < t2.getPrioridad()){
            value=1;
        }
        return value;

    }


    
}

