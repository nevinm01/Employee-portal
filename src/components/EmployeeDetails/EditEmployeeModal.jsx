import React from "react";
import { Modal } from "react-bootstrap";
import EditEmployeeForm from "./EditEmployeeForm.jsx";

const EditEmployeeModal = ({
  show,
  handleCancel,
  formData,
  handleChange,
  handleIFSCChange,
  handleSave,
  originalData,
}) => {
  return (
    <Modal show={show} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditEmployeeForm
          formData={formData}
          handleChange={handleChange}
          handleIFSCChange={handleIFSCChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
          originalData={originalData}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditEmployeeModal;
