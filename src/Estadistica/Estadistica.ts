
import GestorDeFechas from "../GestorDeFechas/GestorDeFechas";
import { EstadoTarea } from "../Tarea/Enumeradores/EstadoTarea";
import Tarea from "../Tarea/Tarea";

export default class Estadistica{

    private gestorDeFecha : GestorDeFechas = new GestorDeFechas();


    public tareasCompletadas(tareas : Tarea[]) :Tarea[] {
        return this.filtrarPorEstadoTareas(tareas,EstadoTarea.COMPLETADO);
    }


    public TareasPendientes(tareas : Tarea[]) :Tarea[]{
        return this.filtrarPorEstadoTareas(tareas,EstadoTarea.PENDIENTE);
    }


    private filtrarPorEstadoTareas (tareas: Tarea[],estado :EstadoTarea) : Tarea[] { //revisitar
        let tareasFiltradas : Tarea[] = tareas.filter((tarea)=> {
            tarea.getEstadoTarea() === estado;
        });

        return tareasFiltradas;
    }
    
    public tasaFinalizacionTareas(tareas : Tarea[]) : number{   // % Cant tareas finalizadas
        
        let cantidadTareas : number = tareas.length;
        let cantidadFinalizada : number = this.tareasCompletadas(tareas).length;
        
        return cantidadTareas / cantidadFinalizada; //agregar try catch por division 0?
    }

    /* 
    public tiempoDedicadoATareas(tareas : Tarea[]) : number{
        let tiempoDedicado : number = 0;

        tareas.forEach((tarea)=> {
            tiempoDedicado += this.tiempoDedicadoATarea(tarea);
        });

        return tiempoDedicado;
    }

    VER BIEN ESTO PORQUE EL TIEMPO TRANSCURRIDO NO ES IGUAL AL TIEMPO DEDICADO, PUEDE PASAR UN AÑO Y NO HABERLE DEDICADO TIEMPO A LA TAREA

    public tiempoDedicadoATarea(tarea : Tarea) : number{

        let fechaInicio : Date = tarea.getFechaInicio();

        let tiempoDedicado : number = this.gestorDeFecha.tiempoTranscurridoEnMilisegundos(fechaInicio);

        return tiempoDedicado;
    }
    */
}