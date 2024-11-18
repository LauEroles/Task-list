import { EstadoTarea } from "../../Tarea/Enumeradores/EstadoTarea";
import { PrioridadTarea } from "../../Tarea/Enumeradores/PrioridadTarea";
import Tarea from "../../Tarea/Tarea";
import { InterfazBuilder } from "./InterfazBuilder";

export class BuilderTarea implements InterfazBuilder{

    private tarea:Tarea;

    constructor() {
        this.tarea = new Tarea(0, "");

    }

    public reset(ultimoIdTarea:number): void {
        let nuevoIdTarea = this.crearNuevoIdTarea(ultimoIdTarea);
        this.tarea = new Tarea(nuevoIdTarea, "");
    }

    public getTarea():Tarea {
        return this.tarea;
    }
    

    //Genero el id  con una funcion crearNuevoIdTarea, teniendo en cuenta el MaxId que recibo de
    // la clase App 
    private crearNuevoIdTarea(ultimoIdTarea:number): number{ 
        return ultimoIdTarea+1;
    }
    
    
    public setTitulo(titulo:string):void{
        this.tarea.setTitulo(titulo);
            
    }


    public setDescripcion(descripcion:string):void{
         this.tarea.setDescripcion(descripcion);
        
    }

    
    public setPorcentajeAvance(porcentaje:number):void{
         this.tarea.setPorcentajeAvance(porcentaje);
    
    }

    public setPrioridad(prioridad:PrioridadTarea):void{
        if(this.tarea!=undefined){
            this.tarea.setPrioridad(prioridad);
        }
    }

    public agregarEtiqueta(etiqueta:string):void{
            this.tarea.agregarEtiqueta(etiqueta);
        
    }

    public setEstadoTarea(estado:EstadoTarea):void{
            this.tarea.setEstadoTarea(estado);
        
    }

    public setFechaVencimiento(fechaVencimiento:Date|undefined):void{
            this.tarea.setFechaVencimiento(fechaVencimiento);
        
    }





}