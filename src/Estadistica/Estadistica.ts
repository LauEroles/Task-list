
import GestorDeFechas from "../GestorDeFechas/GestorDeFechas";
import { EstadoTarea } from "../Tarea/Enumeradores/estadoTarea";
import Tarea from "../Tarea/Tarea";

export default class Estadistica{

    private gestorDeFecha : GestorDeFechas = new GestorDeFechas();

    public tareasCompletadas(tareas : Tarea[]) :Tarea[] {

        return this.filtrarPorEstadoTareas(tareas,EstadoTarea.COMPLETADO);
    }

    public TareasPendientes(tareas : Tarea[]) :Tarea[]{

        return this.filtrarPorEstadoTareas(tareas,EstadoTarea.PENDIENTE);
    }

    private filtrarPorEstadoTareas (tareas: Tarea[],filtro : string) : Tarea[] { //revisitar
        
        let tareasFiltradas : Tarea[] = 
        
        tareas.filter((tarea)=> {
            tarea.getEstado() === filtro;
        });

        return tareasFiltradas;
    }
    
    public tazaFinalizacionTareas(tareas : Tarea[]) : number{   // % Cant tareas finalizadas
        
        let cantidadTareas : number = tareas.length;
        let cantidadFinalizada : number = this.tareasCompletadas(tareas).length;
        
        return cantidadTareas / cantidadFinalizada; //agregar try catch por division 0?
    }

    public tiempoDedicadoATareas(tareas : Tarea[]) : number{
        let tiempoDedicado : number = 0;

        tareas.forEach((tarea)=> {
            tiempoDedicado += this.tiempoDedicadoATarea(tarea);
        });

        return tiempoDedicado;
    }

    public tiempoDedicadoATarea(tarea : Tarea) : number{

        let fechaInicio : Date = tarea.getFechaInicio();

        let tiempoDedicado : number = this.gestorDeFecha.tiempoTranscurridoEnMilisegundos(fechaInicio);

        return tiempoDedicado;
    }

}