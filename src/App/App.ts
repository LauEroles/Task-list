
import Estadistica from "../Estadistica/Estadistica";
import Tarea from "../Tarea/Tarea";
import List from "../-- Nodos/List";
import { PrioridadTarea } from "../Tarea/Enumeradores/PrioridadTarea";
import { DirectorTarea } from "../--Builder/Tarea/DirectorTarea";
import { EstadoTarea } from "../Tarea/Enumeradores/EstadoTarea";
import { Ordenamiento } from "../--FactoryMethod/Ordenamiento/Ordenamiento";
import { OrdenamientoPorFechaVto } from "../--FactoryMethod/Ordenamiento/PorFechaVenciminto";
import { OrdenamientoPorTitulo } from "../--FactoryMethod/Ordenamiento/PorTitulo";
import { OrdenamientoPorPrioridad } from "../--FactoryMethod/Ordenamiento/PorPrioridad";
import { InterfazOrdenar } from "../Ordenamiento/InterfazOrdenar";

export class App{
    
    private tareas: Map<number, Tarea> ;
    private directorTarea: DirectorTarea

    private factoryOrdenarPorTitulo: Ordenamiento;
    private factoryOrdenarPorFechaVto: Ordenamiento;
    private factoryOrdenarPorPrioridad: Ordenamiento;


    constructor(tareas: Map<number,Tarea>, director: DirectorTarea) {    
        
        this.tareas = tareas;
        this.directorTarea = director;

        this.factoryOrdenarPorTitulo = new OrdenamientoPorTitulo()
        this.factoryOrdenarPorFechaVto = new OrdenamientoPorFechaVto()
        this.factoryOrdenarPorPrioridad = new OrdenamientoPorPrioridad()

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

    public editarTarea(tarea:Tarea, titulo:string):void{ 
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

    //Para editar un porcentaje desde aqui, solo identifico el numero de tarea
   //llamo al metodo que se encuentra en la clase Tarea actualizarPorcentaje y si la tarea es válida
   //cambio el valor del progreso de la tarea
   public editarPorcentajeAvance(tarea:Tarea,porcentaje:number):void{
    this.tareas.get(tarea.getId())?.actualizarPorcentajeAvance(porcentaje);

    }

    //Recibo una tarea y una prioridad y la edito llamando al metodo set en Tarea
    public editarPrioridad(tarea:Tarea,prioridad:PrioridadTarea):void{
        this.tareas.get(tarea.getId())?.setPrioridad(prioridad);
    }

    //Recibe la tarea, la etiqueta dentro de la tarea y la etiqueta que necesit cambiar por parametro
    //Este metodo como todos los editar de esta clase, son pasamanos, 
    //Voy a obtener la tarea que necesito identificar para cambiar su etiqueta
    //Luego llamo al setter de etiquetas que esta en la clase Tarea
    //que es quien se encarga de cambiar el valor de la etiqueta
    public editarEtiqueta(tarea:Tarea, etiqueta:string,etiquetaACambiar:string):void{
        this.tareas.get(tarea.getId())?.setEtiquetas(etiqueta,etiquetaACambiar)
    }

    public editarEstadoTarea(tarea:Tarea, estado:EstadoTarea){
        this.tareas.get(tarea.getId())?.setEstadoTarea(estado);
    }

    public editarFechaVencimiento(tarea:Tarea, fecha:Date){
        this.tareas.get(tarea.getId())?.setFechaVencimiento(fecha);
    }




    public eliminarTarea(tarea:Tarea):void{
        
        //si no lo puede eliminar es porque no existe y hago una excepcion
        //esta raris este metodo revisar bien
        if(!this.tareas.delete(tarea.getId())) {

            //TODO: REVISION HACER EL TRY CATCH EN EL MAIN
            throw new Error(`La tarea con ID ${tarea.getId()} no existe, por ello no puedo eliminarla`);

        }
    }

    //TODO
    public ordenarTareasPorTitulo(): Tarea[]{
        let ordenamientoTitulo: InterfazOrdenar = this.factoryOrdenarPorTitulo.crearOrdenamiento();
        return ordenamientoTitulo.ordenar(this.tareas);
    }
    //TODO
    public ordenarTareasPorFechaVto(): Tarea[]{
        let ordenamientoFecha:InterfazOrdenar=this.factoryOrdenarPorFechaVto.crearOrdenamiento();
        return ordenamientoFecha.ordenar(this.tareas);
    }
    //TODO
    public ordenarTareasPorPrioridad(): Tarea[]{
        let ordenamientoPrioridad:InterfazOrdenar=this.factoryOrdenarPorPrioridad.crearOrdenamiento();
        return ordenamientoPrioridad.ordenar(this.tareas);
    }

    //Buscar tarea por título
    public buscarTareaPorTitulo(titulo:string): Tarea|undefined{
        let tareaEncontrada:Tarea|undefined=undefined;
    
        this.tareas.forEach((tarea:Tarea,_key:number)=>{
            if(tarea.getTitulo()==titulo){
                tareaEncontrada=tarea;
            }
        });

        return tareaEncontrada;
    }

    //Buscar tarea por feccha
    public buscarTareaPorFecha(fecha:Date): Tarea|undefined{
       let tareaEncontrada:Tarea|undefined = undefined;

       this.tareas.forEach((tarea:Tarea,_key:number)=>{

            if(tarea.getFechaVencimiento()==fecha){
                tareaEncontrada=tarea;
            }
            return tareaEncontrada;

       });

       
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