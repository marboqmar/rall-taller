import { useState } from 'react';

export const useForm = submitHandler => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async event => {
    // Prevent the browser from refreshing the page.
    event.preventDefault();

    const form = event.currentTarget;

    // Clear previous values.
    setServerError(null);
    setFieldErrors({});
    setIsSuccess(false);

    // Check if form has any client-side errors.
    const isFormValid = form.checkValidity();

    // If there are errors, return them and stop the execution.
    if (!isFormValid) {
      const newErrors = {};
      const elementsToCheck = Array.from(form.elements);

      elementsToCheck.forEach(element => {
        if (!element.checkValidity() && element.name) {
          newErrors[element.name] = element.validationMessage;
        }
      });

      setFieldErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Extract all data from inputs that have a "name" attribute.
      const formData = new FormData(form);

      // formData.entries() creates a list of pairs (e.g., [['firstName', 'John'], ['lastName', 'Doe']]).
      // Object.fromEntries() transforms that list into a clean object.
      const data = Object.fromEntries(formData.entries());

      await submitHandler(data);
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      setServerError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
    serverError,
    fieldErrors,
    isSuccess,
  };
};
