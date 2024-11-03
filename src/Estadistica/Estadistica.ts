
import { EstadoTarea } from "../Tarea/Enumeradores/estadoTarea";
import Tarea from "../Tarea/Tarea";

export default class Estadistica{

    public tareasCompletadas(tareas : Tarea[]) :Tarea[] {

        return this.filtrarEstadoTareasPor(tareas,EstadoTarea.COMPLETADO);
    }

    public TareasPendientes(tareas : Tarea[]) :Tarea[]{

        return this.filtrarEstadoTareasPor(tareas,EstadoTarea.PENDIENTE);
    }
    
    //a desarrollar con date una vez implementado..
    public tazaFinalizacionTarea(tarea : Tarea) : number{   
        return 1;
    }

    public tiempoDedicadoATarea(tarea : Tarea) : number{
        return 1;
    }

    private filtrarEstadoTareasPor (tareas: Tarea[],filtro : string){ //revisitar
        
        let tareasFiltradas : Tarea[] = 
        
        tareas.filter((tarea)=> {
            tarea.getEstado() === filtro;
        });

        return tareasFiltradas;
    }
}