import Tarea from "../../Tarea/Tarea";
import { OrdenarPorFecha } from "../OrdenarPorFecha";

describe ("Tests clase OrdenarPorFecha", () => { 
    let instance: OrdenarPorFecha;
    let mapaTareas: Map<number, Tarea>;

    let t1: Tarea = new Tarea(1, "Tarea 2");
    let t2: Tarea = new Tarea(2, "Tarea 30");
    let t3: Tarea = new Tarea(3, "Tarea 3");
    let t4: Tarea = new Tarea(4, "Tarea 1");

    let primeroNoviembreCeroHoras: Date = new Date(2024, 11, 1, 0, 0, 0, 0);
    let doceNoviembreCeroHoras: Date = new Date(2024, 11, 12, 0, 0, 0, 0);
    let unoEnero25CeroHoras: Date = new Date(2025, 1, 1, 0, 0, 0, 0);

    t1.setFechaVencimiento(doceNoviembreCeroHoras);
    t3.setFechaVencimiento(unoEnero25CeroHoras);
    t4.setFechaVencimiento(primeroNoviembreCeroHoras);

    beforeEach(() => {
        instance = new OrdenarPorFecha();

        mapaTareas = new Map<number, Tarea>();
    });

    //Caso 1: En un mapa vacio, devuelve un array de tareas vacio
    it("En un mapa vacio, devuelve un array de tareas vacio", () => {
        let tareas: Tarea[]=instance.ordenar(mapaTareas);
        expect(tareas.length).toBe(0);

    });

    //Caso 2:En un mapa cargado con tareas, devuelve un array ordenado con las tareas por fechaf
    it("Dado un mapa cargado con tareas, devuelve un array ordenado con las tareas por fecha", () => {
        mapaTareas.set(t1.getId(), t1);
        mapaTareas.set(t2.getId(), t2);
        mapaTareas.set(t3.getId(), t3);
        mapaTareas.set(t4.getId(), t4);

        let tareas:Tarea[] = instance.ordenar(mapaTareas);
        expect(tareas.length).toBe(mapaTareas.size);
        expect(tareas[0].getFechaVencimiento()).toBe(undefined);
        expect(tareas[1].getFechaVencimiento()).toBe(primeroNoviembreCeroHoras);
        expect(tareas[2].getFechaVencimiento()).toBe(doceNoviembreCeroHoras);
        expect(tareas[3].getFechaVencimiento()).toBe(unoEnero25CeroHoras);
    });

})
