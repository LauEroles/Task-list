
import Estadistica from "../Estadistica/Estadistica";
import Tarea from "../Tarea/Tarea";
import List from "../-- Nodos/List";
import { PrioridadTarea } from "../Tarea/Enumeradores/prioridadTarea";
import Etiqueta from "../Etiqueta/Etiqueta";

export class App{
    
    private tareas: Map<number, Tarea> ;


    constructor(tareas: Map<number,Tarea>) {
        
        this.tareas = tareas;

    }


    
    public agregarTarea(tituloTarea:string): Tarea {
        
        //Genero el id  con una funcion, teniendo en cuenta el MaxId para no
        //repetir ni pisaer valores de Id
        let id: number =this.crearNuevoIdTarea();

        const nuevaTarea=new Tarea(id, tituloTarea);        
       //carga la tarea en el Map
        this.tareas.set(id,nuevaTarea);

        //devuelvo la nueva tarea con los valores por default de 
        //id y titulo
        //Luego en editar tarea tengo que setear los otros valores
        return nuevaTarea;
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

        }  //TODO: Aqui no le agregaria la tarea sino que tiraria una excepción
        //Revisar
        // else this.agregarTarea(tarea);
        
    }


    public eliminarTarea(tarea:Tarea):void{
        
        //si no lo puede eliminar es porque no existe y hago una excepcion
        if(!this.tareas.delete(tarea.getId())) {
            //TODO: hacer manejor de excepcion 

        }
    }

    public ordenarTareas(tareas:Tarea[]):void{

    }

    public buscarTareaPorId(id: number): Tarea{
    

    }

    public organizarTareasPorCategoria():Tarea{

    }

    
    public existeTarea (tarea:Tarea):boolean{

    }

    private obtenerMaxIdTarea():number{
        let maxId=0;

        this.tareas.forEach((_tarea,idTarea)=>{
            if(idTarea>maxId){
                maxId=idTarea;
            }
        })
        return maxId;     
    }

    private crearNuevoIdTarea():number{
        let nuevoIdTarea=this.obtenerMaxIdTarea()+1;
        return nuevoIdTarea;
    }
}