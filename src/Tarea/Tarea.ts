import Etiqueta from "../Etiqueta/Etiqueta";

export default class Tarea {
    private titulo: string;
    private descripcion: string;
    private porcentajeAvance: number;
    private prioridad: Prioridad;
    private etiquetas: Etiqueta[];
    private estado: number;
    private fechaVencimiento: Date;

    constructor(
        titulo: string, descripcion: string, porcentajeAvance: number, 
        prioridad: Prioridad, etiquetas: Etiqueta[], estado: number, fechaVencimiento: Date
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

    public getPrioridad(): Prioridad {
        return this.prioridad;
    }

    public getEtiquetas(): Etiqueta[] {
        return this.etiquetas;
    }

    public getEstado(): number {
        return this.estado;
    }

    public getFechaVencimiento(): Fecha {
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

    public setPrioridad(prioridad: Prioridad): void {
        this.prioridad = prioridad;
    }

    public setEtiquetas(etiquetas: Etiqueta[]): void {
        this.etiquetas = etiquetas;
    }

    public setEstado(estado: number): void {
        this.estado = estado;
    }

    public setFechaVencimiento(fechaVencimiento: Fecha): void {
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