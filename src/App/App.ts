
import Estadistica from "../Estadistica/Estadistica";
import Tarea from "../Tarea/Tarea";
import List from "../-- Nodos/List";
import { PrioridadTarea } from "../Tarea/Enumeradores/PrioridadTarea";
import { DirectorTarea } from "../--Builder/Tarea/DirectorTarea";

export class App{
    
    private tareas: Map<number, Tarea> ;
    private directorTarea: DirectorTarea



    constructor(tareas: Map<number,Tarea>, director: DirectorTarea) {    
        
        this.tareas = tareas;
        this.directorTarea = director;

    }

    
    public agregarTarea(tituloTarea:string): Tarea {
        
        

        // Creo una nueva Tarea --> en realidad la crea el Director, quien a su vez recibe un
        // TareaBuilder (quien tiene tambien responabilidad de generar el id, en base a la info que le brinda la app desde
        // el metodo obtenerMaxIdTarea() )
        const nuevaTarea: Tarea= this.directorTarea.crearTarea(tituloTarea);        
        
        //carga la tarea en el Map
        this.tareas.set(nuevaTarea.getId(),nuevaTarea);

        //devuelvo la nueva tarea con los valores por default de 
        //id y titulo
        //Luego en editar tarea tengo que setear los otros valores --> revisar se hará en BuildTarea
        return nuevaTarea;
    }


    //Vamos a revisarla bien, podemos pasar un objeto dentro de un map para
    //setear los parámetros que debamos modificar

    public editarTarea(tarea:Tarea):void{ 
        //como no es una API, la modificacion de la tarea sale de la tarea en si, podemos recibir la tarea y actualizarla en el map.
        // en un mapa si ya existe la entrada, en este caso el ID, la updatea con el nuevo valor(objeto). seria mas un actualizarTarea.
        //y si no la tenemos la agregamos al map. ?? Ya no aplicariaaa esto asi como esta aqui, revisar mas tarde, estoy quemada
       
        let idTarea = tarea.getId();

        if(this.tareas.has(idTarea)){

            this.tareas.set(idTarea,tarea);

        }  //TODO: si no encuentro la tarea tiro una excepción o la agrego??
        //Revisar
        // else this.agregarTarea(tarea);
        
    }

    //TODO: editar: porcentajeAvance,fechaVencimiento,estadoTarea,prioridadTarea


    /* busca la tarea en el Map usando el id de la tarea proporcionada (tarea.getId()).
       Encadenamiento Opcional (?.): uso ?. para intentar llamar a setTitulo solo si la tarea fue encontrada en el Map. 
       Si this.tareas.get(tarea.getId()) devuelve undefined (porque no se encontró la tarea), el operador ?. evita que ocurra un error.
       Actualizar el Título: Si la tarea es encontrada, se llama a setTitulo(titulo) para cambiar el título de la tarea. */
     public editarTituloTarea(tarea:Tarea,titulo:string):void{
        this.tareas.get(tarea.getId())?.setTitulo(titulo);

    }

    public editarDescripcion(tarea:Tarea,descripcion:string):void{
        this.tareas.get(tarea.getId())?.setDescripcion(descripcion);

    }

    //Recibe la tarea, la etiqueta dentro de la tarea y la etiqueta que necesit cambiar por parametro
    //Este metodo como todos los editar de esta clase, son pasamanos, 
    //Voy a obtener la tarea que necesito identificar para cambiar su etiqueta
    //Luego llamo al setter de etiquetas que esta en la clase Tarea
    //que es quien se encarga de cambiar el valor de la etiqueta
    public editarEtiqueta(tarea:Tarea, etiqueta:string,etiquetaACambiar:string):void{
        this.tareas.get(tarea.getId())?.setEtiquetas(etiqueta,etiquetaACambiar)
    }


    //TODO
    //en standby por ahora mañana viernes termino esta y otras mas
    public editarPorcentajeAvance(tarea:Tarea):void{


    }
    

    
    public eliminarTarea(tarea:Tarea):void{
        
        //si no lo puede eliminar es porque no existe y hago una excepcion
        if(!this.tareas.delete(tarea.getId())) {
            //TODO: hacer manejo de excepcion 

        }
    }

    //TODO
    public ordenarTareas(tareas:Tarea[]):void{

    }

    //TODO
    public buscarTareaPorId(id: number): Tarea{
        let t=new Tarea(12,"tt")
        return t;
    }

    //TODO
    public organizarTareasPorCategoria():Tarea{
        let t=new Tarea(12,"tt")
        return t;
    }

    public existeTarea (tarea:Tarea):boolean{
        return this.tareas.has(tarea.getId());
    }

    
    public obtenerMaxIdTarea():number{

        let maxId=0;

        this.tareas.forEach((_tarea,idTarea)=>{

            if(idTarea>maxId){

                maxId=idTarea;
            }
        })

        return maxId;     
    }


}