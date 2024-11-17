import Tarea from "../Tarea/Tarea";

export interface InterfazOrdenar{
    ordenar(tareas:Map<number,Tarea>):Tarea[];
}

