import { useEffect, useState } from 'react';

export const useForm = ({ defaultValues, mode = 'onChange', options = {} }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  const getInputs = (form) => {
    const elements = Array.from(form.elements);
    return elements.filter(element => element.nodeName === 'INPUT');
  };

  const getError = (input) => {
    const validity = input.validity;
    const messages = options[input.name];
    let error = input.validationMessage;
    if (validity.valueMissing && messages?.required) {
      error = messages.required;
    } else if (validity.tooShort && messages?.minLength) {
      error = messages.minLength;
    } else if (validity.tooLong && messages?.maxLength) {
      error = messages.maxLength;
    } else if (validity.typeMismatch && messages?.type) {
      error = messages.type;
    } else if (validity.patternMismatch && messages?.pattern) {
      error = messages.pattern;
    }
    return error;
  };

  const validateInput = (input) => {
    const name = input.name;
    const error = getError(input);
    setErrors((errors) => ({ ...errors, [name]: error }));
  };

  const validateForm = (form) => {
    const newIsValid = form.checkValidity();
    setIsValid(newIsValid);
    return newIsValid;
  };

  const handleSubmit = (onSubmit) => {
    return (event) => {
      event.preventDefault();
      const form = event.target;
      if (mode === 'onSubmit') {
        const inputs = getInputs(form);
        inputs.forEach(validateInput);
      }
      if (validateForm(form)) {
        onSubmit(values);
      }
    };
  };

  const handleChange = (event) => {
    const input = event.target;
    const form = input.closest('form');
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    setValues((values) => ({ ...values, [name]: value }));
    if (mode === 'onChange') {
      validateInput(input);
      validateForm(form);
    }
  };

  return { values, handleChange, handleSubmit, errors, isValid, setIsValid };
};
