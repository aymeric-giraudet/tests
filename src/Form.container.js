import React, { useState } from "react";
import Form from "./Form";
import { onChange, onClick } from "./Form.pure";

function FormContainer() {
  const [form, setForm] = useState({ firstName: "", lastName: "" });
  const [greetings, setGreetings] = useState("");

  return (
    <Form
      form={form}
      greetings={greetings}
      onChange={onChange(setForm)}
      onClick={onClick(setGreetings, form)}
    />
  );
}

export default FormContainer;
