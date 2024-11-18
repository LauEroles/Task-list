import Tarea from "../Tarea/Tarea"
import { InterfazOrdenar } from "./InterfazOrdenar"

export class OrdenarPorTitulo implements InterfazOrdenar{

    public ordenar(tareas: Map<number, Tarea>): Tarea[] {
       
        let array:Tarea[] = [];

        tareas.forEach((tarea:Tarea, _key:number)=>{
            array.push(tarea);
        });

        array.sort(this.comparador);
        return array;
   
    }

    private comparador(t1:Tarea, t2:Tarea):number{
        let value:number = 0;


        if(t1.getTitulo() < t2.getTitulo()){
            value=-1;
        }else if(t1.getTitulo() > t2.getTitulo()){
            value=1;
        }
        return value;
    }

}

