import { CarStructure } from "../models/car";

interface CarApiRepoStructure {
  loadCars(): Promise<CarStructure[]>;
  loadCar(car: CarStructure): Promise<CarStructure>;
  addCar(car: CarStructure): Promise<CarStructure>;
  updateCar(car: CarStructure): Promise<CarStructure>;
  deleteCar(car: CarStructure): Promise<void>;
}

export class CarApiRepo implements CarApiRepoStructure {
  url: string;
  constructor() {
    this.url = "http://localhost:4200/cars";
  }

  async loadCars(): Promise<CarStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

    const data = (await resp.json()) as CarStructure[];
    return data;
  }

  async loadCar(car: CarStructure): Promise<CarStructure> {
    const id = car.id;
    const resp = await fetch(`${this.url}/${id}`);
    const data = (await resp.json()) as CarStructure;
    return data;
  }

  async addCar(car: CarStructure): Promise<CarStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(car),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CarStructure;
    return data;
  }

  async updateCar(car: CarStructure): Promise<CarStructure> {
    const url = this.url + "/" + car.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(car),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CarStructure;
    return data;
  }

  async deleteCar(id: CarStructure): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok) throw new Error("Delete not possible");
  }
}
