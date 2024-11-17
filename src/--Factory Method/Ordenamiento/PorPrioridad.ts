import { InterfazOrdenar } from "../../Ordenamiento/InterfazOrdenar";
import { OrdenarPorPrioridad } from "../../Ordenamiento/OrdenarPorPrioridad";
import { Ordenamiento } from "./Ordenamiento";

export class OrdenamientoPorPrioridad extends Ordenamiento {
    public crearOrdenamiento(): InterfazOrdenar {
        return new OrdenarPorPrioridad();
    }
}