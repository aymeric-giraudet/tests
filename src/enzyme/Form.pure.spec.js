import { onChange, onClick } from "../Form.pure";

describe("onChange", () => {
  it("should call setForm with new value", () => {
    let state = { firstName: "Aymeric", lastName: "Giraudet" };
    const setForm = jest.fn((setter) => {
      state = setter(state);
    });
    const event = { name: "firstName", value: "Aymerico" };

    onChange(setForm)(event);

    expect(setForm).toHaveBeenCalled();
    expect(state).toEqual({ firstName: "Aymerico", lastName: "Giraudet" });
  });
});

describe("onClick", () => {
  it("should call setGreetings with a greeting based on form values", () => {
    const form = { firstName: "Aymeric", lastName: "Giraudet" };
    const setGreetings = jest.fn();

    onClick(setGreetings, form)();

    expect(setGreetings).toHaveBeenCalledWith("Bonjour Aymeric Giraudet !");
  });
});
