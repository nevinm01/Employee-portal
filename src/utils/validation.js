// // utils/validation.js

// export const validateName = (name) => {
//   if (!name) return "Name is required.";
//   if (typeof name !== "string") return "Name must be a string.";
//   if (name.length > 255) return "Name must be less than 255 characters.";
//   return null;
// };

// export const validateEmail = (email) => {
//   if (!email) return "Email is required.";
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   if (!emailRegex.test(email)) return "Invalid email format.";
//   return null;
// };

// export const validatePhone = (phone) => {
//   if (!phone) return "Phone number is required.";
//   const phoneRegex = /^(?:\+91[-\s]?)?[6-9]\d{9}$/;
//   const phoneRegexNonContryCode = /^(?:\[-\s]?)?[6-9]\d{9}$/;
//   if (!phoneRegex.test(phone) || !phoneRegexNonContryCode)
//     return "Invalid phone number format.";
//   return null;
// };

// export const validateDesignationId = (designationId) => {
//   if (!designationId) return "Designation is required.";
//   // Make an API call to fetch designations to verify the designation
//   return null;
// };

// export const validateDepartmentId = (departmentId) => {
//   if (!departmentId) return "Department is required.";
//   // Make an API call to fetch departments to verify the department
//   return null;
// };

// export const validateGender = (gender) => {
//   if (!gender) return "Gender is required.";
//   if (![1, 2, 3].includes(parseInt(gender)))
//     return "Gender must be 1 (Male), 2 (Female), or 3 (Other).";
//   return null;
// };

// export const validateDateOfBirth = (dob) => {
//   if (!dob) return "Date of birth is required.";
//   const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
//   if (!dobRegex.test(dob)) return "Invalid date of birth format.";
//   return null;
// };

// export const validateAddress = (address) => {
//   if (!address) return "Address is required.";
//   if (typeof address !== "string") return "Address must be a string.";
//   if (address.length > 255) return "Address must be less than 255 characters.";
//   return null;
// };

// export const validateCity = (city) => {
//   if (!city) return "City is required.";
//   if (typeof city !== "string") return "City must be a string.";
//   if (city.length > 100) return "City must be less than 100 characters.";
//   return null;
// };

// export const validateState = (state) => {
//   if (!state) return "State is required.";
//   if (typeof state !== "string") return "State must be a string.";
//   if (state.length > 100) return "State must be less than 100 characters.";
//   return null;
// };

// export const validateZipCode = (zipCode) => {
//   if (!zipCode) return "Zip code is required.";
//   if (!/^\d{6}$/.test(zipCode)) return "Zip code must be exactly 6 digits.";
//   return null;
// };

// export const validateCountry = (country) => {
//   if (!country) return "Country is required.";
//   if (typeof country !== "string") return "Country must be a string.";
//   if (country.length > 100) return "Country must be less than 100 characters.";
//   return null;
// };

// export const validateEmployeeCode = (employeeCode) => {
//   if (!employeeCode) return "Employee code is required.";
//   return null;
// };

// export const validateEmploymentTypeId = (employmentTypeId) => {
//   if (!employmentTypeId) return "Employment type is required.";
//   // Make an API call to verify employment type
//   return null;
// };

// export const validateJoiningDate = (joiningDate) => {
//   if (!joiningDate) return "Joining date is required.";
//   const joiningDateRegex = /^\d{4}-\d{2}-\d{2}$/;
//   if (!joiningDateRegex.test(joiningDate))
//     return "Invalid joining date format.";
//   return null;
// };

// export const validateSalary = (salary) => {
//   if (!salary) return "Salary is required.";
//   if (isNaN(salary)) return "Salary must be a numeric value.";
//   if (salary < 0) return "Salary cannot be negative.";
//   return null;
// };

// export const validateBankAccountNumber = (bankAccountNumber) => {
//   if (!bankAccountNumber) return "Bank account number is required.";
//   if (!/^\d{9,18}$/.test(bankAccountNumber))
//     return "Bank account number must be between 9 and 18 digits.";
//   return null;
// };

// export const validateIFSCCode = (ifscCode) => {
//   if (!ifscCode) return "IFSC code is required.";
//   const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
//   if (!ifscRegex.test(ifscCode)) return "Invalid IFSC code format.";
//   return null;
// };

// export const validateEmergencyContact = (emergencyContact) => {
//   if (!emergencyContact) return "Emergency contact is required.";
//   const contactRegex = /^(?:\+91[-\s]?)?[6-9]\d{9}$/;
//   if (!contactRegex.test(emergencyContact))
//     return "Invalid emergency contact format.";
//   return null;
// };
