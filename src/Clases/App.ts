import Estadistica from "./Estadistica";

export class App{

    private tareas: Tarea[];
    private estadisticas: Estadistica[];

    constructor(tareas: Tarea[],estadisticas:Estadistica[]) {
        this.tareas = tareas;
        this.estadisticas = estadisticas;
    }

    public agregarTarea():Tarea[]{
        // Hacerlo con List 
        // let tarea1 = new Tarea();
        // return this.tareas.add(tarea1);
    }


    public editarTarea(tarea:Tarea,parametro:parametroTarea):void{

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