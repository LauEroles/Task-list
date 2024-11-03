import Estadistica from "../Estadistica/Estadistica";
import Tarea from "../Tarea/Tarea";
import List from "../-- Nodos/List";

export class App{

    private tareas: List<Tarea>;
    private estadisticas: List<Estadistica>;

    constructor(tareas: List<Tarea>,estadisticas:List<Estadistica>) {
        this.tareas = tareas;
        this.estadisticas = estadisticas;
    }

    public agregarTarea(): List<Tarea> {

        // Hacerlo con List 
        //const tarea1 = new Tarea ();
        //return this.tareas.push(tarea1);
       
    }


    //Vamos a revisarla bien, podemos pasar un objeto dentro de un map para
    //setear los parámetros que debamos modificar
    public editarTarea(tarea:Map<Tarea,Key>):void{

    }


    public eliminarTarea(tarea:Tarea):void{
        //pop tarea de la lista ver como gestionamos
        //e implementamos el tema del ordenamiento
        //Me parece que lo mas natural es manejarlo con List
        
    }

    public ordenarTareas(tareas:Tarea[]):void{

    }

    public buscarTareaPor(tarea:Tarea,valorAbuscar): Tarea{

    }

    public organizarTareasPorCategoria():Tarea{

    }

    
    public existeTarea (tarea:Tarea):boolean{

    }


}