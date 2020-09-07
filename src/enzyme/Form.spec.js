import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import Form from "../Form";

const form = {
  firstName: "Aymeric",
  lastName: "Giraudet",
};
const onChangeMock = jest.fn();
const onClickMock = jest.fn();

it("should render correctly", () => {
  const wrapper = create(
    <Form
      form={form}
      greetings="Bonjour Aymeric Giraudet !"
      onChange={onChangeMock}
      onClick={onClickMock}
    />
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it("should call onChange when firstName has been changed", () => {
  const wrapper = shallow(
    <Form form={form} onChange={onChangeMock} onClick={onClickMock} />
  );
  wrapper
    .find('[name="firstName"]')
    .simulate("change", { target: { value: "Aymerico" } });
  expect(onChangeMock).toHaveBeenCalledWith({
    target: {
      value: "Aymerico",
    },
  });
});

it("should call onChange when lastName has been changed", () => {
  const wrapper = shallow(
    <Form form={form} onChange={onChangeMock} onClick={onClickMock} />
  );
  wrapper
    .find('[name="lastName"]')
    .simulate("change", { target: { value: "G-Rod" } });
  expect(onChangeMock).toHaveBeenCalledWith({
    target: {
      value: "G-Rod",
    },
  });
});

it("should call onClick when button has been clicked", () => {
  const wrapper = shallow(
    <Form form={form} onChange={onChangeMock} onClick={onClickMock} />
  );
  wrapper.find("Button").simulate("click");
  expect(onChangeMock).toHaveBeenCalled();
});
