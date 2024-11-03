import Etiqueta from "../Etiqueta/Etiqueta";
import { PrioridadTarea } from "./Enumeradores/prioridadTarea";

export default class Tarea {
    private titulo: string;
    private descripcion: string;
    private porcentajeAvance: number;
    private prioridad: PrioridadTarea;
    private etiquetas: Etiqueta[];
    private estado: number;
    private fechaVencimiento: Date;

    constructor(
        titulo: string, descripcion: string, porcentajeAvance: number, 
        prioridad: PrioridadTarea, etiquetas: Etiqueta[], estado: number, fechaVencimiento: Date
    ) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.porcentajeAvance = porcentajeAvance;
        this.prioridad = prioridad;
        this.etiquetas = etiquetas;
        this.estado = estado;
        this.fechaVencimiento = fechaVencimiento;
    }

    // Getters
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

    public getEstado(): number {
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

    public setEstado(estado: number): void {
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