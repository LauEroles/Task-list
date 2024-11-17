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
        const etiqueta:string="Trabajo";
        const etiquetaACambiar:string="Nuevo trabajo";
        
        // Caso 1: No existe ninguna etiqueta previa, por lo tanto, agrego la etiqueta nueva
        expect(instance.getEtiquetas().length).toBe(0);
        instance.setEtiquetas(etiqueta,etiquetaACambiar);
        expect(instance.getEtiquetas().length).toBe(1);
        expect(instance.getEtiquetas()[0]).toBe(etiquetaACambiar);

        //Caso 2:intento cambiar una etiqueta que no existe, por otra que no existe
        instance.setEtiquetas("Trabajo","Proyecto");
        instance.setEtiquetas("Casa","Jardín");
        expect(instance.getEtiquetas().length).toBe(3);

        // Caso 3: Intento cambiar una etiqueta que existe, por otra que existe
        instance.setEtiquetas("Proyecto","Jardín");
        expect(instance.getEtiquetas().length).toBe(2);
        expect(instance.getEtiquetas()).toEqual([ etiquetaACambiar,"Jardín"]);

        //Caso 4: Intento cambiar una etiqeuta que existe por otra que no existe
        instance.setEtiquetas("Jardín","Cocina");
        expect(instance.getEtiquetas().length).toBe(2);
        expect(instance.getEtiquetas()).toEqual([ etiquetaACambiar,"Cocina"]);




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
        instance.agregarEtiqueta(etiquetaAAgregar);
        expect(instance.getEtiquetas().length).toBe(1);

    })
   
    it("Verifico si una etiqueta existe en una tarea", ()=>{
        let etiquetaExistente:string="Si Existe";
        instance.agregarEtiqueta(etiquetaExistente);
        expect(instance.existeEtiqueta(etiquetaExistente)).toBe(true);
        expect(instance.existeEtiqueta(etiquetaExistente.toUpperCase())).toBe(true);
    })

    it("Verifico si puedo eliminar una etiqueta en una tarea", ()=>{
        let etiquetaAEliminar:string="Esta si";
        instance.agregarEtiqueta(etiquetaAEliminar);
        instance.agregarEtiqueta("Trabajo");
        instance.agregarEtiqueta("Personal");
        instance.agregarEtiqueta("Proyecto");
        instance.agregarEtiqueta("Estudio");

        expect(instance.getEtiquetas()).toContain(etiquetaAEliminar);
        instance.eliminarEtiqueta(etiquetaAEliminar)
        expect(instance.getEtiquetas()).not.toContain(etiquetaAEliminar);
        expect(instance.getEtiquetas()).toEqual(["Trabajo","Personal","Proyecto","Estudio"]);
        
        //Voy a probar lo mismo pero cambiando a mayúsculas, para garantizar que funcione el UpperCase
        instance.agregarEtiqueta(etiquetaAEliminar);
        expect(instance.getEtiquetas()).toContain(etiquetaAEliminar);
        instance.eliminarEtiqueta(etiquetaAEliminar.toUpperCase());
        expect(instance.getEtiquetas()).not.toContain(etiquetaAEliminar);

    })


    it("Verifico si puedo actualizar el porcentaje de Avance de la Tarea",()=> {

        let porcentaje1:number=0;
        let porcentaje2:number=25;
        let porcentaje3:number=50;
        let porcentaje4:number=100;

        instance.setPorcentajeAvance(porcentaje1);
        expect(instance.getPorcentajeAvance()).toBe(0);

        instance.setPorcentajeAvance(porcentaje2);
        expect(instance.getPorcentajeAvance()).toBe(25);
       
        instance.setPorcentajeAvance(porcentaje3);
        expect(instance.getPorcentajeAvance()).toBe(50);
       
        instance.setPorcentajeAvance(porcentaje4);
        expect(instance.getPorcentajeAvance()).toBe(100);

        expect(() => {
            instance.actualizarPorcentajeAvance(30); // Valor no válido
        }).toThrow(
            "Ingresó valores no validos para el porcentaje, por favor elija su progreso en base a los siguientes valores: 0, 25, 50, 75, 100" );

    })



    it("Verifico si el método  MarcarTareaComoCompleta() funciona",()=> {
      
        //Caso 1  porcentaje1:number=100;
        instance.actualizarPorcentajeAvance(100);
        instance.MarcarTareaComoCompleta();
        expect(instance.getEstadoTarea()).toBe(EstadoTarea.COMPLETADO);


        //Caso 2 porcentaje2:number=50;
        instance.actualizarPorcentajeAvance(50);
        expect(instance.getEstadoTarea()).toBe(EstadoTarea.PENDIENTE);

        //Caso 3 porcentaje3:number=25;
        instance.actualizarPorcentajeAvance(25);
        expect(instance.getEstadoTarea()).toBe(EstadoTarea.PENDIENTE);

        //Caso 4 porcentaje4:number=0;
        instance.actualizarPorcentajeAvance(0);
        expect(instance.getEstadoTarea()).toBe(EstadoTarea.PENDIENTE);


    })



})

