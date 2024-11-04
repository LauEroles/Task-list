import Etiqueta from "../Etiqueta/Etiqueta";
import { EstadoTarea } from "./Enumeradores/estadoTarea";
import { PrioridadTarea } from "./Enumeradores/prioridadTarea";

export default class Tarea {
    private id: number;
    private titulo: string;
    private descripcion: string;
    private porcentajeAvance: number;
    private prioridad: PrioridadTarea;
    private etiquetas: Etiqueta[];
    private estado: EstadoTarea;
    private fechaVencimiento: Date;

    constructor(id: number, titulo: string) {
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

    public getEtiquetas(): Etiqueta[] {
        return this.etiquetas;
    }

    public getEstado(): EstadoTarea{
        return this.estado;
    }

    public getFechaVencimiento(): Date {
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

    public setEtiquetas(etiquetas: Etiqueta[]): void {
        this.etiquetas = etiquetas;
    }

    public setEstado(estado: EstadoTarea): void {
        this.estado = estado;
    }

    public setFechaVencimiento(fechaVencimiento: Date): void {
        this.fechaVencimiento = fechaVencimiento;
    }

    // Other methods
    public AñadirEtiqueta(etiqueta: Etiqueta): void {

    }

    public EliminarEtiqueta(etiqueta: Etiqueta): void {

    }

    public MarcarTarea(): void {
        
    }
}