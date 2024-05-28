export interface vehiculo{
    codigo: string;
    marca: string;
    color?: string;
    modelo: string;
    kilometraje?:string;
    precio?:number;
    foto?:string | null;
    anio?:string;
    calificacion?:number; 
}