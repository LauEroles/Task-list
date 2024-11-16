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
        expect(instance.getEstado()).toBe(EstadoTarea.PENDIENTE);
        expect(instance.getFechaVencimiento()).toBe(undefined);
    });
    
    it("Verifico al cambiar el titulo que tome el nuevo valor asignado", () => {
        const nuevoTitulo:string="Nuevo título";
        instance.setTitulo(nuevoTitulo);
        expect(instance.getTitulo()).toBe(nuevoTitulo);
    })

    it("Verifico al cambiar la descripción que tome el nuevo valor asignado", () => {
        const nuevaDescripcion:string="Una Descripción";
        instance.setDescripcion(nuevaDescripcion);
        expect(instance.getDescripcion()).toBe(nuevaDescripcion);
    })



})