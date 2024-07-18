import { Estudiante } from "./estudiante";

export class postulaciones{
    constructor(
        public id:number,
        public fechaPostulacion: string,
        public estudiante: Estudiante,
        public estado: string // (Pendiente / Aprobado / Rechazado)

    ){}
}