import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormContainer from "../Form.container";

export const formSteps = ({ given, when, then }) => {
  given("i am on the form", () => {
    render(<FormContainer />);
  });

  when(/^i enter my first name as (.+)$/, async (firstName) => {
    await userEvent.type(
      screen.getByRole("textbox", { name: /prénom/i }),
      firstName
    );
  });

  when(/^i enter my last name as (.+)$/, async (lastName) => {
    await userEvent.type(
      screen.getByRole("textbox", { name: "Nom" }),
      lastName
    );
  });

  when("i click on the button", () => {
    screen.getByRole("button", { name: /envoyer/i }).click();
  });

  then(/^i should be greeted as (.+)$/, (fullName) => {
    expect(screen.getByText(`Bonjour ${fullName} !`)).toBeInTheDocument();
  });
};
