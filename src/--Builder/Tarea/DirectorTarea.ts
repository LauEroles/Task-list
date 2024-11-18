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

    public crearTarea(ultimoIdTarea:number,titulo:string):Tarea{ // es el equivalente al Make de la teoria

        this.builder.reset(ultimoIdTarea);
        this.builder.setTitulo(titulo);
        this.builder.setDescripcion("");
        this.builder.setPorcentajeAvance(0);
        this.builder.setPrioridad(PrioridadTarea.BAJA);
        this.builder.setEstadoTarea(EstadoTarea.PENDIENTE);

        return this.builder.getTarea();

    }

    //Aprovechando el patrón builder, agrego una manera de crear una tarea a partir de otra
    //duplicando la misma
    public duplicarTarea(ultimoIdTarea:number,tarea:Tarea):Tarea{ // es el equivalente al Make de la teoria

        this.builder.reset(ultimoIdTarea);
        this.builder.setTitulo(tarea.getTitulo());
        this.builder.setDescripcion(tarea.getDescripcion());
        this.builder.setPorcentajeAvance(tarea.getPorcentajeAvance());
        this.builder.setPrioridad(tarea.getPrioridad());
        this.builder.setEstadoTarea(tarea.getEstadoTarea());
        this.builder.setFechaVencimiento(tarea.getFechaVencimiento());

        return this.builder.getTarea();

    }




}