// useValidation.js
export const useValidation = () => {
  const validateEmail = (value) => {
    if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format";
    return undefined;
  };

  const validatePassword = (value) => {
    if (value < 8) return "password atleast 8 characters required";
  };

  return {
    validateEmail,
    validatePassword,
  };
};
