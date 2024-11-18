
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
    private directorTarea: DirectorTarea;

    private factoryOrdenarPorTitulo: Ordenamiento;
    private factoryOrdenarPorFechaVto: Ordenamiento;
    private factoryOrdenarPorPrioridad: Ordenamiento;


    constructor(tareas: Map<number,Tarea>, director: DirectorTarea,estadisticas:Estadistica[]) {    
        
        this.tareas = tareas;
        this.directorTarea = director;


        this.factoryOrdenarPorTitulo = new OrdenamientoPorTitulo();
        this.factoryOrdenarPorFechaVto = new OrdenamientoPorFechaVto();
        this.factoryOrdenarPorPrioridad = new OrdenamientoPorPrioridad();

    }

    
    public agregarTarea(tituloTarea:string): Tarea {
        
        

        // Creo una nueva Tarea --> en realidad la crea el Director, quien a su vez recibe un
        // TareaBuilder (quien tiene tambien responabilidad de generar el id, en base a la info que le brinda la app desde
        // el metodo obtenerMaxIdTarea() )
        const nuevaTarea: Tarea= this.directorTarea.crearTarea(this.obtenerMaxIdTarea(),tituloTarea);        
        
        //carga la tarea en el Map
        this.tareas.set(nuevaTarea.getId(),nuevaTarea);

        //devuelvo la nueva tarea con los valores por default de 
        //id y titulo
        //Luego en editar tarea tengo que setear los otros valores --> revisar se hará en BuildTarea
        return nuevaTarea;
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

    //TODO: preguntar al profe si puedo dejar esta funcion porque no termino mas :( Me falta un montonaso)
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

    private conversorMapaAVector():Tarea[]{
        let array:Tarea[] = [];

        this.tareas.forEach((tarea:Tarea, _key:number)=>{
            array.push(tarea);
        });
        return array;
    }


}