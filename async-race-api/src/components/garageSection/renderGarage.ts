import { createGarage } from "./createGarage";
import { createCar } from "./createCars/createCars";

export function renderGarage() {
  createGarage(0, 1);
  createCar('Skoda', 'Octavia', 'pink');
  createCar('Huindai', 'Solaris', 'green');
}