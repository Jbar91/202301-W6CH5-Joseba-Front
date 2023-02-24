import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "./App";

describe("Given the App component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain form", () => {
      render(
        <Provider store={store}>
          <App></App>
        </Provider>
      );
      const text = screen.getByRole("heading");
      expect(text).toBeInTheDocument();
    });
  });
});
