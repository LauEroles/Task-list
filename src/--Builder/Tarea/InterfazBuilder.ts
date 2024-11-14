import Tarea from "../../Tarea/Tarea";
import { PrioridadTarea } from "../../Tarea/Enumeradores/prioridadTarea";
import { EstadoTarea } from "../../Tarea/Enumeradores/EstadoTarea";

export interface InterfazBuilder {

    getTarea():Tarea;    //es el equivalente al reset de los apuntes, solo que yo al reset lo puse como privado dentro de BuilderTarea de ahi getTarea lo llama
    
    //son los equivalentes a buildStepA(),buildStepB(),buildStepC()
    setTitulo(titulo:string):void;
    setDescripcion(descripcion:string):void;
    setPrioridad(prioridad:PrioridadTarea):void;
    agregarEtiqueta(etiqueta:string):void;
    setEstado(estado:EstadoTarea):void;
    setFechaVencimiento(fechaVencimiento:Date):void;
    

}