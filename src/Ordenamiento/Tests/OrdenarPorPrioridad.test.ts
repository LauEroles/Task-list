import { PrioridadTarea } from "../../Tarea/Enumeradores/PrioridadTarea";
import Tarea from "../../Tarea/Tarea";
import { OrdenarPorPrioridad } from "../OrdenarPorPrioridad"; 


describe ("Tests clase OrdenarPorPrioridad", () => { 
    let instance: OrdenarPorPrioridad;
    let mapaTareas: Map<number, Tarea>;

    let t1: Tarea = new Tarea(1, "Tarea 2");
    let t2: Tarea = new Tarea(2, "Tarea 30");
    let t3: Tarea = new Tarea(3, "Tarea 3");
    let t4: Tarea = new Tarea(4, "Tarea 1");

    t1.setPrioridad(PrioridadTarea.MEDIA);
    t3.setPrioridad(PrioridadTarea.ALTA);
    t4.setPrioridad(PrioridadTarea.MEDIA);

    beforeEach(() => {
        instance = new OrdenarPorPrioridad();
        mapaTareas = new Map<number, Tarea>();
    });

    //Caso 1: En un mapa vacio, devuelve un array de tareas vacio
    it("En un mapa vacio, devuelve un array de tareas vacio", () => {
        let tareas: Tarea[]=instance.ordenar(mapaTareas);
        expect(tareas.length).toBe(0);

    });

    //Caso 2:En un mapa cargado con tareas, devuelve un array ordenado con las tareas por prioridad
    it("Dado un mapa cargado con tareas, devuelve un array ordenado con las tareas por Prioridad", () => {
        mapaTareas.set(t1.getId(), t1);
        mapaTareas.set(t2.getId(), t2);
        mapaTareas.set(t3.getId(), t3);
        mapaTareas.set(t4.getId(), t4);

        let tareas:Tarea[] = instance.ordenar(mapaTareas);
        expect(tareas.length).toBe(mapaTareas.size);
        expect(tareas[0].getPrioridad()).toBe(PrioridadTarea.ALTA);
        expect(tareas[1].getPrioridad()).toBe(PrioridadTarea.MEDIA);
        expect(tareas[2].getPrioridad()).toBe(PrioridadTarea.MEDIA);
        expect(tareas[3].getPrioridad()).toBe(PrioridadTarea.BAJA);

    });

})
