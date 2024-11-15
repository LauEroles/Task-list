import { InterfazBuilder } from "./InterfazBuilder";
import Tarea from "../../Tarea/Tarea";
import { PrioridadTarea } from "../../Tarea/Enumeradores/PrioridadTarea";
import { EstadoTarea } from "../../Tarea/Enumeradores/EstadoTarea";


export class DirectorTarea{

    private builder:InterfazBuilder;

    //recibo cualquier objeto que implemente la interfaz InterfazBuilder
    //En este caso seran las BuilderTarea
    constructor(builder:InterfazBuilder) {
        this.builder = builder;
    }

    public crearTarea(titulo:string):Tarea{ // es el equivalente al Make de la teoria

        
        this.builder.setTitulo(titulo);
        this.builder.setDescripcion("");
        this.builder.setPrioridad(PrioridadTarea.BAJA);
        this.builder.setEstado(EstadoTarea.PENDIENTE);
        this.builder.setFechaVencimiento(new Date(Date.now()));

        return this.builder.getTarea();

    }

    //crear diferentes tareas con diferentes parametros por default
    //Puedo duplicar una tarea, ver como podria hacer esta logica
    





}