import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";

describe("Given the App component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain form", () => {
      render(<App></App>);
      const text = screen.getByRole("heading");
      expect(text).toBeInTheDocument();
    });
  });
});
