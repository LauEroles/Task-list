import { InterfazOrdenar } from "../../Ordenamiento/InterfazOrdenar";
import { OrdenarPorTitulo } from "../../Ordenamiento/OrdenarPorTitulo";
import { Ordenamiento } from "./Ordenamiento";

export class OrdenamientoPorTitulo extends Ordenamiento {
    public crearOrdenamiento(): InterfazOrdenar {
        return new OrdenarPorTitulo();
    }
}