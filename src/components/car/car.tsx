import { useCallback, useEffect, useMemo } from "react";
import { useCars } from "../../hook/use.cars";
import { CarApiRepo } from "../../repo/car.api.repo";
import { Form } from "../form/form";

export function Car() {
  const repo = useMemo(() => new CarApiRepo(), []);
  const { cars, loadCars } = useCars(repo);

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <div>
      <ul>
        {cars.map((item) => (
          <li key={item.id}>
            <p>Car brand: {item.brand}</p>
            <p>Car model: {item.model}</p>
            <p>Car color: {item.color}</p>
          </li>
        ))}
      </ul>
      <Form></Form>
    </div>
  );
}
