import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormContainer from "../Form.container";

it("should prompt the user to input their full name", () => {
  render(<FormContainer />);

  expect(
    screen.getByText(/veuillez entrer votre nom complet/i)
  ).toBeInTheDocument();
});

it("should update first name input", async () => {
  render(<FormContainer />);

  const input = screen.getByRole("textbox", { name: /prénom/i });
  await userEvent.type(input, "Aymerico");

  expect(input).toHaveValue("Aymerico");
});

it("should update last name input", async () => {
  render(<FormContainer />);

  const input = screen.getByRole("textbox", { name: "Nom" });
  await userEvent.type(input, "G-Rod");

  expect(input).toHaveValue("G-Rod");
});

it("should greet the user with their full name when button is clicked", async () => {
  render(<FormContainer />);

  await userEvent.type(
    screen.getByRole("textbox", { name: /prénom/i }),
    "Aymeric"
  );
  await userEvent.type(
    screen.getByRole("textbox", { name: "Nom" }),
    "Giraudet"
  );
  screen.getByRole("button", { name: /envoyer/i }).click();

  expect(screen.getByText("Bonjour Aymeric Giraudet !")).toBeInTheDocument();
});
