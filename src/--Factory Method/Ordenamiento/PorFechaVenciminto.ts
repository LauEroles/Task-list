import { InterfazOrdenar } from "../../Ordenamiento/InterfazOrdenar";
import { OrdenarPorFecha } from "../../Ordenamiento/OrdenarPorFecha";
import { Ordenamiento } from "./Ordenamiento";

export class OrdenamientoPorFechaVto extends Ordenamiento {
    public crearOrdenamiento(): InterfazOrdenar {
        return new OrdenarPorFecha();
    }
}