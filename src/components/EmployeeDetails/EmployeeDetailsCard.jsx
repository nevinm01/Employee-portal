import { useState } from "react";
import { Card, Row, Col, Button, Spinner } from "react-bootstrap";

const EmployeeDetailsCard = ({ employee, onEdit, onBack }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Card className="shadow-lg p-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Employee Details</h2>
          <Button variant="secondary" onClick={onBack}>
            ⬅ Back to Dashboard
          </Button>
        </div>

        <Row>
          <Col md={6}>
            <h5 className="text-primary">Basic Information</h5>

            {/* Image with Spinner */}
            <div
              style={{ width: "180px", height: "180px", position: "relative" }}
            >
              {imageLoading && (
                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                  <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              )}
              <img
                style={{
                  width: "180px",
                  display: imageLoading ? "none" : "block",
                }}
                src={employee.profile_picture}
                alt="Preview"
                className="img-fluid mt-2 mb-2"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)} // Hide spinner if image fails
              />
            </div>

            <p>
              <strong>Name:</strong> {employee.name}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Phone:</strong> {employee.phone}
            </p>
            <p>
              <strong>Gender:</strong>{" "}
              <span
                style={{
                  color:
                    employee.gender === 1
                      ? "blue"
                      : employee.gender === 2
                      ? "#ff4f6d"
                      : "violet",
                  fontWeight: "bold",
                }}
              >
                {employee.gender === 1
                  ? "Male"
                  : employee.gender === 2
                  ? "Female"
                  : "Other"}
              </span>
            </p>
            <p>
              <strong>Date of Birth:</strong> {employee.date_of_birth}
            </p>
            <p>
              <strong>Designation:</strong>{" "}
              {employee.designation?.title || "N/A"}
            </p>
          </Col>

          <Col md={6}>
            <h5 className="text-primary">Employment Details</h5>
            <p>
              <strong>Employee Code:</strong> {employee.employee_code}
            </p>
            <p>
              <strong>Department:</strong> {employee.department?.name || "N/A"}
            </p>
            <p>
              <strong>Joining Date:</strong> {employee.joining_date}
            </p>
            <p>
              <strong>Salary:</strong>{" "}
              <span style={{ color: "green" }}> ₹{employee.salary}</span>
            </p>
            <p>
              <strong>Bank Account:</strong> {employee.bank_account_number}
            </p>
            <p>
              <strong>IFSC Code:</strong> {employee.ifsc_code}
            </p>
          </Col>
        </Row>

        <hr />

        <h5 className="text-primary">Address</h5>
        <p>
          {employee.address}, {employee.city}, {employee.state} -{" "}
          {employee.zip_code}, {employee.country}
        </p>

        <h5 className="text-primary">Emergency Contact</h5>
        <p>{employee.emergency_contact}</p>

        <div className="d-flex justify-content-end mt-3">
          <Button variant="dark" onClick={onEdit}>
            ✏ Edit Employee
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EmployeeDetailsCard;
