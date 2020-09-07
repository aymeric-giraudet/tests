export const onChange = (setForm) => (e) => {
  setForm((state) => ({ ...state, [e.name]: e.value }));
};

export const onClick = (setGreetings, form) => () => {
  setGreetings(`Bonjour ${form.firstName} ${form.lastName} !`);
};
