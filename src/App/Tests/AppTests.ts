import { PrioridadTarea } from "../../Tarea/Enumeradores/prioridadTarea";
import Tarea from "../../Tarea/Tarea";
import { App } from "../App";

function miTest() {
    let app: App = new App();

    // titulo
    // descripcion

    let nuevaTarea: Tarea = app.agregarTarea("mi titulo");
    nuevaTarea.setDescripcion("Comprar leche");
    nuevaTarea.setPrioridad(PrioridadTarea.MEDIA);
    app.editarTarea(nuevaTarea);
}

function MiTestEditarTarea() {
    let app: App;

    // Crear una tarea nueva

    
    // Voy a modificar la tarea numero 4

    let tarea: Tarea = app.buscarTareaPorId(4);
    
    //Esto luego lo tengo que hacer un unit test aqui con estos valores para probarlo
    tarea.setDescripcion("Descripcion modificada");
    tarea.setPrioridad(PrioridadTarea.ALTA);
    app.editarTarea(tarea);

    let tareaResultante: Tarea = app.buscarTareaPorId(4);
    test("", () => {

        expect(tareaResultante.getDescripcion()).toBe("Descripcion modificada");
    })
}