import Tarea from "../../Tarea/Tarea";
import { OrdenarPorTitulo } from "../OrdenarPorTitulo";

describe ("Tests clase OrdenarPorTitulo", () => { 
    let instance: OrdenarPorTitulo;
    let mapaTareas: Map<number, Tarea>;

    beforeEach(() => {
        instance = new OrdenarPorTitulo();

        let t1: Tarea = new Tarea(1, "Tarea 2");
        let t2: Tarea = new Tarea(2, "Tarea 30");
        let t3: Tarea = new Tarea(3, "Tarea 3");
        let t4: Tarea = new Tarea(4, "Tarea 1");
        mapaTareas = new Map<number, Tarea>();
        mapaTareas.set(t1.getId(), t1);
        mapaTareas.set(t2.getId(), t2);
        mapaTareas.set(t3.getId(), t3);
        mapaTareas.set(t4.getId(), t4);
    });

    it("Ordena una array de tareas por titulo", () => {
        let tareas = instance.ordenar(mapaTareas);
        expect(tareas.length).toBe(mapaTareas.size);
        expect(tareas[0].getTitulo()).toBe("Tarea 1");
        expect(tareas[1].getTitulo()).toBe("Tarea 2");
        expect(tareas[2].getTitulo()).toBe("Tarea 3");
        expect(tareas[3].getTitulo()).toBe("Tarea 30");
    });

})
