import Tarea from "../../Tarea/Tarea";
import { OrdenarPorTitulo } from "../OrdenarPorTitulo";

describe ("Tests clase OrdenarPorTitulo", () => { 
    let instance: OrdenarPorTitulo;
    let mapaTareas: Map<number, Tarea>;

    let t1: Tarea = new Tarea(1, "Tarea 2");
    let t2: Tarea = new Tarea(2, "Tarea 30");
    let t3: Tarea = new Tarea(3, "Tarea 3");
    let t4: Tarea = new Tarea(4, "Tarea 1");

    beforeEach(() => {
        instance = new OrdenarPorTitulo();

        mapaTareas = new Map<number, Tarea>();
    });

    //Caso 1: En un mapa vacio, devuelve un array de tareas vacio
    it("En un mapa vacio, devuelve un array de tareas vacio", () => {
        let tareas: Tarea[]=instance.ordenar(mapaTareas);
        expect(tareas.length).toBe(0);

    });

    //Caso 2:En un mapa cargado con tareas, devuelve un array ordenado con las tareas por título"
    it("Dado un mapa cargado con tareas, devuelve un array ordenado con las tareas por título", () => {
        mapaTareas.set(t1.getId(), t1);
        mapaTareas.set(t2.getId(), t2);
        mapaTareas.set(t3.getId(), t3);
        mapaTareas.set(t4.getId(), t4);

        let tareas:Tarea[] = instance.ordenar(mapaTareas);
        expect(tareas.length).toBe(mapaTareas.size);
        expect(tareas[0].getTitulo()).toBe("Tarea 1");
        expect(tareas[1].getTitulo()).toBe("Tarea 2");
        expect(tareas[2].getTitulo()).toBe("Tarea 3");
        expect(tareas[3].getTitulo()).toBe("Tarea 30");
    });

})
