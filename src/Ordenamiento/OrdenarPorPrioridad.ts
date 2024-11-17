import { PrioridadTarea } from "../Tarea/Enumeradores/PrioridadTarea";
import Tarea from "../Tarea/Tarea"
import { InterfazOrdenar } from "./InterfazOrdenar"

export class OrdenarPorPrioridad implements InterfazOrdenar{

    public ordenar(tareas: Map<number, Tarea>): Tarea[] {
       
        let array:Tarea[] = [];

        tareas.forEach((tarea:Tarea, _key:number)=>{
            array.push(tarea);
        });

        array.sort(this.comparador);
        return array;
   
    }

    //TODO:
    private comparador(t1:Tarea, t2:Tarea):number{
       
        return 0;
    }

}

