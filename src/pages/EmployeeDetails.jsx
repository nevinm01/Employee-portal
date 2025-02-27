import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR, { mutate } from "swr";
import axios from "../axiosIn.js";
import { getAuthToken } from "../utils/authStorage";
import EditEmployeeModal from "../components/EmployeeDetails/EditEmployeeModal";
import EmployeeDetailsCard from "../components/EmployeeDetails/EmployeeDetailsCard";
import { validateEmployeeForm } from "../utils/employeeValidation";
import { Spinner, Alert } from "react-bootstrap";
import Swal from "sweetalert2";

// Fetch employee details from API
const fetchEmployeeDetails = async (id) => {
  const token = getAuthToken();
  if (!token) throw new Error("No token found in localStorage");
  const response = await axios.get(`/api/v1/employee/show?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
};

// Update employee details in API
const updateEmployeeDetails = async (data) => {
  const token = getAuthToken();
  if (!token) throw new Error("No token found in localStorage");
  const response = await axios.post(`/api/v1/employee/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: employee,
    error,
    isLoading,
  } = useSWR(id ? `employee/${id}` : null, () => fetchEmployeeDetails(id));

  const [formData, setFormData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    if (employee) {
      const formattedData = {
        id: employee.id,
        employee_code: employee.employee_code,
        name: employee.name,
        email: employee.email,
        phone: employee.phone,
        designation_id: employee.designation?.id || "",
        department_id: employee.department?.id || "",
        gender: String(employee.gender),
        date_of_birth: employee.date_of_birth,
        address: employee.address,
        city: employee.city,
        state: employee.state,
        zip_code: employee.zip_code,
        country: employee.country,
        employment_type_id: employee.employment_type?.id || "",
        joining_date: employee.joining_date,
        salary: employee.salary,
        bank_account_number: employee.bank_account_number,
        ifsc_code: employee.ifsc_code,
        emergency_contact: employee.emergency_contact,
        profile_picture: employee.profile_picture,
      };

      setFormData(formattedData);
      setOriginalData(formattedData);
      setShowModal(true);
    }
  };

  const handleSave = async ({ values }) => {
    const errors = validateEmployeeForm(values);

    if (Object.keys(errors).length > 0) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        html: Object.values(errors).join("<br>"),
      });
      return;
    }

    const Data = { id, ...values };

    try {
      const updatedEmployee = await updateEmployeeDetails(Data);
      setFormData(updatedEmployee);
      setOriginalData(updatedEmployee);
      setShowModal(false);
      mutate(`employee/${id}`);

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Employee details updated successfully!",
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Failed to update employee details!",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div className="container mt-5">
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading Employee Details...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger">
          <strong>Error:</strong> {error.message}
        </Alert>
      )}

      {!isLoading && !error && !employee && (
        <Alert variant="warning">No employee details available.</Alert>
      )}

      {!isLoading && !error && employee && (
        <EmployeeDetailsCard
          employee={employee}
          onEdit={handleEdit}
          onBack={() => navigate(-1)} // Go back to the previous page
        />
      )}

      <EditEmployeeModal
        show={showModal}
        handleCancel={() => setShowModal(false)}
        formData={formData}
        handleSave={handleSave}
        originalData={originalData}
      />
    </div>
  );
};

export default EmployeeDetails;
