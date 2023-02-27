import { useState } from "react";
import { useCars } from "../../hook/use.cars";

import { CarApiRepo } from "../../repo/car.api.repo";
import "./form.css";

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
      <label htmlFor="">
        Enter ID:
        <input
          type="number"
          name=""
          id=""
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        />
      </label>
      <label htmlFor="">
        Enter Car Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Enter Model:
        <input
          type="text"
          name=""
          id=""
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Enter Color:
        <input
          type="text"
          name=""
          id=""
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}
