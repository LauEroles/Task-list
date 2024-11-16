import GestorDeFechas from "../../GestorDeFechas/GestorDeFechas";
import { EstadoTarea } from "../Enumeradores/EstadoTarea";
import { PrioridadTarea } from "../Enumeradores/PrioridadTarea";
import Tarea from "../Tarea";

describe ("Tests clase Tarea", () => { 

    let instance: Tarea;

    beforeEach(() => {
      instance = new Tarea(1, "prueba");
    });
  
    it("Verifico obtener instancia de Tarea con Id 1, Descripcion prueba y valores por defecto", () => {
        expect(instance).toBeInstanceOf(Tarea);

        expect(instance.getId()).toBe(1);
        expect(instance.getTitulo()).toBe("prueba");

        // Verifico valores por defecto del constructor de la tarea
        expect(instance.getDescripcion()).toBe("");
        expect(instance.getPorcentajeAvance()).toBe(0);
        expect(instance.getPrioridad()).toBe(PrioridadTarea.BAJA);
        expect(instance.getEtiquetas().length).toBe(0);
        expect(instance.getEstadoTarea()).toBe(EstadoTarea.PENDIENTE);
        expect(instance.getFechaVencimiento()).toBe(undefined);
    });
    
    it("Verifico al cambiar el titulo, que tome el nuevo valor asignado", () => {
        const nuevoTitulo:string="Nuevo título";
        instance.setTitulo(nuevoTitulo);
        expect(instance.getTitulo()).toBe(nuevoTitulo);
    })

    it("Verifico al cambiar la descripción, que tome el nuevo valor asignado", () => {
        const nuevaDescripcion:string="Una Descripción";
        instance.setDescripcion(nuevaDescripcion);
        expect(instance.getDescripcion()).toBe(nuevaDescripcion);
    })

    it("Verifico al cambiar el porcentaje de Avance, que tome el nuevo valor asignado", () => {
        const nuevoPorcentaje:number=0;
        instance.setPorcentajeAvance(nuevoPorcentaje);
        expect(instance.getPorcentajeAvance()).toBe(nuevoPorcentaje);
    })

    it("Verifico al cambiar la prioridad, que tome el nuevo valor asignado", () => {
        const prioridad:PrioridadTarea=PrioridadTarea.BAJA;
        instance.setPrioridad(prioridad);
        expect(instance.getPorcentajeAvance()).toBe(prioridad);
    })

    it("Verifico al cambiar etiqueta, que tome el nuevo valor asignado", () => {
        //ver bien porque no me toma las lineas de la 96 a las 101 que tiene la logica de edicion de etiqueta :(  !!
        const etiqueta:string="Trabajo";
        const etiquetaACambiar:string="Trabajo";
        instance.setEtiquetas(etiqueta,etiquetaACambiar);
        expect(instance.getEtiquetas()).toBe(etiquetaACambiar);
    })


    it("Verifico al cambiar el estado de la tarea, que tome el nuevo valor asignado", () => {
        const estado:EstadoTarea=EstadoTarea.PENDIENTE;
        instance.setEstadoTarea(estado);
        expect(instance.getEstadoTarea()).toBe(estado);
    })
  
    it("Verifico al cambiar la fecha de la tarea, que tome el nuevo valor asignado", () => {
        const fechaFutura=new Date("2024-1205");
        instance.setFechaVencimiento(fechaFutura);
        expect(instance.getFechaVencimiento()).toBe(fechaFutura);
    })

    it("Verifico si una Tarea puede crear una etiqueta",()=>{
        let etiquetaAAgregar:string="etiquetaAgregada";
        expect(instance.agregarEtiquetas(etiquetaAAgregar)).toBe(etiquetaAAgregar);


    })
   
    it("Verifico si una etiqueta existe en una tarea", ()=>{
        let etiquetaExistente:string="si esxiste";
        instance.agregarEtiquetas(etiquetaExistente);
        expect(instance.existeEtiqueta(etiquetaExistente)).toBe(true);
    })



})

/*

public EliminarEtiqueta(etiqueta: string): void {
    //Podri haber eliminado tambien con IndexOf y splice? revisar despues esto
    this.etiquetas = this.etiquetas.filter(etiquetaBuscada => etiquetaBuscada !== etiqueta);
}


//settear Avance poircentaje tarea

public actualizarPorcentajeAvance(porcentaje:number):void{
    const porcentajesValidos=[0,25,50,100];
    if(porcentajesValidos.includes(porcentaje)){
        this.porcentajeAvance=porcentaje;
        this.MarcarTareaComoCompleta();
    } else{//TODO el try catch en el main y hacer una clase especifica para esta excepcion
        throw new Error(`Ingresó valores no validos para el porcentaje, por favor elija su progreso en base a los siguientes valores: 0, 25, 50, 75, 100`);
    }

}


//esto no lo deberia hacer la App? Y e 
public MarcarTareaComoCompleta(): void {
    
    if(this.porcentajeAvance==100){
        this.estado=EstadoTarea.COMPLETADO;

    } else if((this.porcentajeAvance==0) || (this.porcentajeAvance==25)|| (this.porcentajeAvance==50)){
        this.estado=EstadoTarea.PENDIENTE;
      
        }
        
}*/

