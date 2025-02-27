export const validateEmployeeForm = (values) => {
  const errors = {};

  // Name validation
  if (!values.name || values.name.trim() === "") {
    errors.name = "Name is required.";
  } else if (typeof values.name !== "string") {
    errors.name = "Name must be a string.";
  } else if (/\d/.test(values.name)) {
    errors.name = "Name must not contain numbers.";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters.";
  } else if (values.name.length > 255) {
    errors.name = "Name must not exceed 255 characters.";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email format.";
  }

  // Phone validation (Indian format)
  if (!values.phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^(\+91\s?)?[6-9]\d{3}\s?\d{2}\s?\d{4}$/.test(values.phone)) {
    errors.phone = "Invalid Indian phone number format.";
  }

  // Designation ID validation
  if (!values.designation_id) {
    errors.designation_id = "Designation is required.";
  }

  // Department ID validation
  if (!values.department_id) {
    errors.department_id = "Department is required.";
  }

  // Gender validation
  if (!values.gender) {
    errors.gender = "Gender is required.";
  } else if (!["1", "2", "3"].includes(values.gender)) {
    errors.gender = "Invalid gender selection.";
  }

  // Date of Birth validation
  if (!values.date_of_birth) {
    errors.date_of_birth = "Date of birth is required.";
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date_of_birth)) {
    errors.date_of_birth = "Date must be in YYYY-MM-DD format.";
  }

  // Address validation
  if (!values.address) {
    errors.address = "Address is required.";
  } else if (values.address.length > 255) {
    errors.address = "Address must not exceed 255 characters.";
  }

  // City validation
  if (!values.city) {
    errors.city = "City is required.";
  } else if (values.city.length > 100) {
    errors.city = "City must not exceed 100 characters.";
  }

  // State validation
  if (!values.state) {
    errors.state = "State is required.";
  } else if (values.state.length > 100) {
    errors.state = "State must not exceed 100 characters.";
  }

  // Zip Code validation
  if (!values.zip_code) {
    errors.zip_code = "Zip code is required.";
  } else if (!/^\d{6}$/.test(values.zip_code)) {
    errors.zip_code = "Zip code must be exactly 6 digits.";
  }

  // Country validation
  if (!values.country) {
    errors.country = "Country is required.";
  } else if (values.country.length > 100) {
    errors.country = "Country must not exceed 100 characters.";
  }

  // Employee Code validation
  if (!values.employee_code) {
    errors.employee_code = "Employee code is required.";
  }

  // Employment Type validation
  if (!values.employment_type_id) {
    errors.employment_type_id = "Employment type is required.";
  }

  // Joining Date validation
  if (!values.joining_date) {
    errors.joining_date = "Joining date is required.";
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(values.joining_date)) {
    errors.joining_date = "Joining date must be in YYYY-MM-DD format.";
  }

  // Salary validation
  if (!values.salary) {
    errors.salary = "Salary is required.";
  } else if (isNaN(values.salary) || values.salary < 0) {
    errors.salary = "Salary must not be zero.";
  }

  // Bank Account Number validation
  if (!values.bank_account_number) {
    errors.bank_account_number = "Bank account number is required.";
  } else if (!/^\d{9,18}$/.test(values.bank_account_number)) {
    errors.bank_account_number =
      "Bank account number must be between 9 and 18 digits.";
  }

  // IFSC Code validation
  if (!values.ifsc_code) {
    errors.ifsc_code = "IFSC code is required.";
  } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(values.ifsc_code)) {
    errors.ifsc_code =
      "Invalid IFSC code format, It must follow general format eg: ICIC0000269.";
  }

  // Emergency Contact validation (Indian format)
  if (!values.emergency_contact) {
    errors.emergency_contact = "Emergency contact is required.";
  } else if (!/^(\+91[\s]?)?[6-9]\d{9}$/.test(values.emergency_contact)) {
    errors.emergency_contact = "Invalid Indian phone number format.";
  }

  return errors;
};
