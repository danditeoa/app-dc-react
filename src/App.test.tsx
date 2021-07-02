import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders compoent", () => {
  render(<App />);
  const linkElement = screen.getAllByAltText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
