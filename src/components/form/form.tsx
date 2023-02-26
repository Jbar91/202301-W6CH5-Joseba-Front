import { SyntheticEvent, useReducer, useState } from "react";
import { useCars } from "../../hook/use.cars";
import { CarStructure } from "../../models/car";
import { carReducer } from "../../reducer/cars.reducer";
import { CarApiRepo } from "../../repo/car.api.repo";

export function Form() {
  let [id, setId] = useState(0);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");

  const repo = new CarApiRepo();
  const { addCar } = useCars(repo);
  const handleSubmit = (ev: React.SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const car = { id, brand, model, color };
    console.log(car);
    addCar(car);
    id = 0;
    clear();
  };

  const clear = () => {
    setId(0);
    setBrand("");
    setColor("");
    setModel("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name=""
        id=""
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
      />
      <input
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input type="submit" value="" />
    </form>
  );
}
