export class Empleado {

    constructor(_id = "", NombreEmpleado = "", cargoEmpleado = "", oficinaEmpleado = "", salarioEmpleado = 0) {

        this._id = _id;
        this.NombreEmpleado = NombreEmpleado;
        this.cargoEmpleado = cargoEmpleado;
        this.oficinaEmpleado = oficinaEmpleado;
        this.salarioEmpleado = salarioEmpleado;
}

_id: string; // Sub guión id porque los datos van a venir de MOngodb

NombreEmpleado: string;

cargoEmpleado: string;

oficinaEmpleado: string;

salarioEmpleado: number;

}
