import { EstadoTarea } from "./Enumeradores/EstadoTarea";
import { PrioridadTarea } from "./Enumeradores/PrioridadTarea";
import { BuilderTarea } from "../--Builder/Tarea/BuilderTarea";

export default class Tarea {
   
    private id: number;
    private titulo: string;
    private descripcion: string;
    private porcentajeAvance: number;
    private prioridad: PrioridadTarea;
    private etiquetas: string[];
    private estado: EstadoTarea;
    private fechaVencimiento: Date | undefined;
    

    constructor( id: number, titulo: string) { //el id ahora  va a ser calculado por el Builder Tarea obteniendo el ultimo id de la clase App
        this.id = id;
        this.titulo = titulo;
        this.descripcion = "";
        this.porcentajeAvance = 0;
        this.prioridad = PrioridadTarea.BAJA;
        this.etiquetas = [];
        this.estado = EstadoTarea.PENDIENTE;
        this.fechaVencimiento = undefined; //new Date(Date.now());
        
    }



    // Getters
    public getId(): number {
        return this.id;
    }
    
    public getTitulo(): string {
        return this.titulo;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public getPorcentajeAvance(): number {
        return this.porcentajeAvance;
    }

    public getPrioridad(): PrioridadTarea {
        return this.prioridad;
    }

    public getEtiquetas():string[] {
        return this.etiquetas;
    }

    public getEstadoTarea(): EstadoTarea{
        return this.estado;
    }

    public getFechaVencimiento():Date|undefined {
        return this.fechaVencimiento;
    }

    // Setters
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public setPorcentajeAvance(porcentajeAvance: number): void {
        this.porcentajeAvance = porcentajeAvance;
    }

    public setPrioridad(prioridad: PrioridadTarea): void {
        this.prioridad = prioridad;
    }


    public setEstadoTarea(estado: EstadoTarea): void {
        this.estado = estado;
    }

    public setFechaVencimiento(fechaVencimiento: Date): void {
        this.fechaVencimiento = fechaVencimiento;
    }

    //Recorro la lista de etiquetas, luego recibo por parametro la etiqueta que quiero modificar
    //y la etiqueta por la cual cambiare a la etiqueta origianl
    //Decidí recorrerlas a las etiquetas con el indice y luego, si la encuentra, le asigno el nuevo  valor de la nueva etiqueta
    //Si no encuentra la etiqueta la agrega
    public setEtiquetas(etiqueta:string, etiquetaACambiar:string){
        
        
        if(this.existeEtiqueta((etiquetaACambiar))){
            //existe una etiqueta con la misma descripcion que la nueva etiqueta
            //entonces, elimino la etiqueta anterior para no duplicar la nueva
            this.eliminarEtiqueta(etiqueta);
        }else if(!this.existeEtiqueta(etiqueta)&& !this.existeEtiqueta(etiquetaACambiar)){
            //si no existe ni la etiqueta anterior , ni la nueva, agrego directamente la etiqueta nueva
            this.agregarEtiqueta(etiquetaACambiar);
        }else{
            //Solo existe la etiqueta original, entonces la busco y la reemplazo por la etiqueta nueva
            for(let i=0;i<this.etiquetas.length;i++){
                if(this.etiquetas[i].toUpperCase()==etiqueta.toUpperCase()){
                    this.etiquetas[i]=etiquetaACambiar;
                }
            }

        }
       
    }


    // OTROS MÉTODOS

    //Método para buscar etiquetas en el array
    //convierto todas las etiquetas a Mayusculas para que la etiqueta no se duplique conceptualmente 
    //indistintamente si esta en mayúscula o minúscula
    public existeEtiqueta(etiqueta:string):boolean{
        for(const etiquetaEncontrada of this.etiquetas){
            if (etiquetaEncontrada.toUpperCase()==etiqueta.toUpperCase()){
                return true;
            }

        }
        return false;

    }

    //Método para agregar etiquetas
    public agregarEtiqueta(etiqueta:string): void {
        if(this.existeEtiqueta(etiqueta)==false){
            this.etiquetas.push(etiqueta);
        }
    }

    //recorre cada elemento etiquetaBuscada del array etiquetas
    //comparo cada etiqueta etiquetaBuscada en el array con la etiqueta que quiero eliminar 
    //Si et no es igual a la etiqueta a eliminar, el elemento se incluye en el nuevo array.
    //Si et es igual a la etiqueta que quieres eliminar, filter excluye este elemento del nuevo array.
    public eliminarEtiqueta(etiqueta: string): void {
        //Podri haber eliminado tambien con IndexOf y splice? revisar despues esto
        this.etiquetas = this.etiquetas.filter(etiquetaBuscada => etiquetaBuscada.toUpperCase() !== etiqueta.toUpperCase());
    }

    //VER PORQUE CON EL FILTER NO NECESITO HACER ESTA BUSQUEDA ASI
    //Descubri el metodo find, aqui recorre el array de etiquetas y si la en cuentra retorna un string
    //public buscarEtiqueta(etiqueta:string):string|null{
      // return this.etiquetas.find(etiquetaEncontrada=>etiquetaEncontrada===etiqueta)||null;
    //}



    //settear Avance poircentaje tarea

    public actualizarPorcentajeAvance(porcentaje:number):void{
        const porcentajesValidos=[0,25,50,100];
        if(porcentajesValidos.includes(porcentaje)){
            this.porcentajeAvance=porcentaje;
            this.MarcarTareaComoCompleta();
        } else{//TODO el try catch en el main y hacer una clase especifica para esta excepcion
            throw new Error(`Ingresó valores no validos para el porcentaje, por favor elija su progreso en base a los siguientes valores: 0, 25, 50, 75, 100`);
        }

    }


    //esto no lo deberia hacer la App? Y e 
    public MarcarTareaComoCompleta(): void {
        
        if(this.porcentajeAvance==100){
            this.estado=EstadoTarea.COMPLETADO;

        } else if((this.porcentajeAvance==0) || (this.porcentajeAvance==25)|| (this.porcentajeAvance==50)){
            this.estado=EstadoTarea.PENDIENTE;
          
            }
            
    }



    //Esto lo hago para ver si lo que estamos haciendo funciona
    //describe sirve para agrupar especificaciones relacionadas. 
    //Normalmente, cada archivo de prueba tiene una función describe en el nivel superior.
    //La función describe tiene dos parámetros:
    //Cadena: Se utiliza para nombrar la colección de especificaciones.
    //Especificaciones: Se concatenan con la cadena para formar el nombre completo de una especificación
    
  /*  describeTarea():void{
        console.log(`Titulo: ${this.titulo}`);
        console.log(`id: ${this.id}`);
        console.log(`Descripcion: ${this.descripcion}`);
        console.log(`Porcentaje Avance: ${this.porcentajeAvance}`);
        console.log(`Prioridad Tarea: ${this.prioridad}`);
        console.log(`Etiquetas: ${this.etiquetas}`);
        console.log(`Estado Tarea: ${this.estado}`);
        console.log(`Date: ${this.fechaVencimiento}`);

    }*/





}