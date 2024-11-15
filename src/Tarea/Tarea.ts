import { EstadoTarea } from "./Enumeradores/EstadoTarea";
import { PrioridadTarea } from "./Enumeradores/prioridadTarea";
import { BuilderTarea } from "../--Builder/Tarea/BuilderTarea";

export default class Tarea {
   
    private id: number;
    private titulo: string;
    private descripcion: string;
    private porcentajeAvance: number;
    private prioridad: PrioridadTarea;
    private etiquetas: string[];
    private estado: EstadoTarea;
    private fechaVencimiento: Date;

    constructor( id: number, titulo: string) { //el id ahora  va a ser calculado por el Builder Tarea obteniendo el ultimo id de la clase App
        this.id = id;
        this.titulo = titulo;
        this.descripcion = "";
        this.porcentajeAvance = 0;
        this.prioridad = PrioridadTarea.BAJA;
        this.etiquetas = [];
        this.estado = EstadoTarea.PENDIENTE;
        this.fechaVencimiento = new Date(Date.now());
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

    public getEstado(): EstadoTarea{
        return this.estado;
    }

    public getFechaVencimiento():Date {
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

    public agregarEtiquetas(etiqueta:string): void {
        this.etiquetas.push(etiqueta);
    }

    public setEstado(estado: EstadoTarea): void {
        this.estado = estado;
    }

    public setFechaVencimiento(fechaVencimiento: Date): void {
        this.fechaVencimiento = fechaVencimiento;
    }

    // Other methods
    public AñadirEtiqueta(etiqueta: string): void {

    }

    public EliminarEtiqueta(etiqueta: string): void {

    }

    public MarcarTarea(): void {
        
    }
    //Esto lo hago para ver si lo que estamos haciendo funciona
    //describe sirve para agrupar especificaciones relacionadas. 
    //Normalmente, cada archivo de prueba tiene una función describe en el nivel superior.
    //La función describe tiene dos parámetros:
    //Cadena: Se utiliza para nombrar la colección de especificaciones.
    //Especificaciones: Se concatenan con la cadena para formar el nombre completo de una especificación
    
    describeTarea():void{
        console.log(`Titulo: ${this.titulo}`);
        console.log(`id: ${this.id}`);
        console.log(`Descripcion: ${this.descripcion}`);
        console.log(`Porcentaje Avance: ${this.porcentajeAvance}`);
        console.log(`Prioridad Tarea: ${this.prioridad}`);
        console.log(`Etiquetas: ${this.etiquetas}`);
        console.log(`Estado Tarea: ${this.estado}`);
        console.log(`Date: ${this.fechaVencimiento}`);

    }





}