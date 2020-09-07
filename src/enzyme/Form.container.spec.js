import React from "react";
import { create } from "react-test-renderer";
import FormContainer from "../Form.container";

it("should render correctly", () => {
  const wrapper = create(<FormContainer />);
  expect(wrapper.toJSON()).toMatchSnapshot();
});
