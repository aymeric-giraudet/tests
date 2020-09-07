import React from "react";
import { TextInput } from "@axa-fr/react-toolkit-form-input-text";
import Button from "@axa-fr/react-toolkit-button";

const Form = ({ form, greetings, onChange, onClick }) => (
  <>
    Veuillez entrer votre nom complet :
    <TextInput
      label="Prénom"
      name="firstName"
      id="firstName"
      value={form.firstName}
      onChange={onChange}
    />
    <TextInput
      label="Nom"
      name="lastName"
      id="lastName"
      value={form.lastName}
      onChange={onChange}
    />
    <Button onClick={onClick}>Envoyer</Button>
    <p>{greetings}</p>
  </>
);

export default Form;
