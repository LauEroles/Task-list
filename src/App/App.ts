
import Estadistica from "../Estadistica/Estadistica";
import Tarea from "../Tarea/Tarea";
import List from "../-- Nodos/List";

export class App{
    
    private tareas: List<Tarea>; //reemplazar con Map<number,Tarea> (idTarea,tarea)
    private estadisticas: List<Estadistica>;

    constructor(tareas: List<Tarea>,estadisticas:List<Estadistica>) {
        this.tareas = tareas;
        this.estadisticas = estadisticas;
    }

    public agregarTarea(): List<Tarea> {

        //Ver de hacer sobrecarga que inicialice el constructor con
        //valor de titulo por default como unico valor necesario
        const tarea1 = new Tarea();
        this.tareas.push(tarea1);
        return this.tareas;
       
    }


    //Vamos a revisarla bien, podemos pasar un objeto dentro de un map para
    //setear los parámetros que debamos modificar
    
    public editarTarea(tarea:Tarea):void{ 
        //como no es una API, la modificacion de la tarea sale de la tarea en si, podemos recibir la tarea y actualizarla en el map.
        // en un mapa si ya existe la entrada, en este caso el ID, la updatea con el nuevo valor(objeto). seria mas un actualizarTarea.
        //y si no la tenemos la agregamos al map.
        let idTarea = tarea.getId();

        if(this.tareas.has(idTarea)){

            this.tareas.set(idTarea,tarea);

        } else this.agregarTarea(tarea);
        
        return;
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