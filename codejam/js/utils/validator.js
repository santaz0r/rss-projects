function validator(string) {
  const isValid = /^[a-zA-Z\d]+$/g.test(string);
  return isValid;
}

export default validator;
