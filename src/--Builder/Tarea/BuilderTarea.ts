import { EstadoTarea } from "../../Tarea/Enumeradores/EstadoTarea";
import { PrioridadTarea } from "../../Tarea/Enumeradores/PrioridadTarea";
import Tarea from "../../Tarea/Tarea";
import { InterfazBuilder } from "./InterfazBuilder";

export class BuilderTarea implements InterfazBuilder{

    private tarea:Tarea | undefined;
    private maxIdTarea: number;

    constructor(maxIdTarea: number) {
        this.maxIdTarea = maxIdTarea;
        this.reset();

    }

    private reset(): void {
        let nuevoIdTarea = this.crearNuevoIdTarea();
        this.tarea = new Tarea(nuevoIdTarea, "");
    }

    public getTarea():Tarea {
        const result = this.tarea as Tarea;
        this.reset();
        return result;
    }
    
    

    //Genero el id  con una funcion crearNuevoIdTarea, teniendo en cuenta el MaxId que obtengo del
    // la clase App 
    private crearNuevoIdTarea(): number{ 
        this.maxIdTarea = this.maxIdTarea+1;

        return this.maxIdTarea;
    }
    
    //TODO:
    //Aqui si es undefine podria  gestionarnarlo como error
    public setTitulo(titulo:string):void{
        if (this.tarea!=undefined){
            (this.tarea as Tarea).setTitulo(titulo);
        }
            
    }


    public setDescripcion(descripcion:string):void{
        if(this.tarea!=undefined){
            (this.tarea as Tarea).setDescripcion(descripcion);
        }
    }

    public setPrioridad(prioridad:PrioridadTarea):void{
        if(this.tarea!=undefined){
            (this.tarea as Tarea).setPrioridad(prioridad);
        }
    }

    public agregarEtiqueta(etiqueta:string):void{
        if(this.tarea!=undefined){
            (this.tarea as Tarea).agregarEtiquetas(etiqueta);
        }
    }

    public setEstado(estado:EstadoTarea):void{
        if(this.tarea!=undefined){
            (this.tarea as Tarea).setEstado(estado);
        }
    }

    public setFechaVencimiento(fechaVencimiento:Date):void{
        if(this.tarea!=undefined){
            (this.tarea as Tarea).setFechaVencimiento(fechaVencimiento);
        }
    }



}