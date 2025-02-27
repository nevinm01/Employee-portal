import { Form, Select, RadioGroup, Radio } from "informed";
import { useState } from "react";
import useMasterData from "../../hooks/useMasterData";
import CustomFormInput from "../../CustomFields/CustomFormInput";

const EditEmployeeForm = ({ formData, handleSave, handleCancel }) => {
  const { departments, designations, employmentTypes, error } = useMasterData();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values) => {
    setIsSubmitting(true); // Disable button and show spinner
    await handleSave(values); // Call the parent function
    setIsSubmitting(false); // Re-enable button after completion
  };

  return (
    <Form onSubmit={onSubmit} initialValues={formData}>
      {({ formState }) => (
        <>
          {error && <p className="text-danger">Failed to load master data</p>}

          <CustomFormInput label="Employee ID" name="employee_code" readOnly />
          <CustomFormInput label="Name" name="name" required />
          <CustomFormInput label="Email" name="email" type="email" required />
          <CustomFormInput
            label="Phone"
            name="phone"
            formatter="+91##########"
            required
          />

          <div className="mb-3">
            <label>Designation:</label>
            <Select className="form-control" name="designation_id" required>
              <option value="">Select Designation</option>
              {designations.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.title}
                </option>
              ))}
            </Select>
          </div>

          <div className="mb-3">
            <label>Department:</label>
            <Select className="form-control" name="department_id" required>
              <option value="">Select Department</option>
              {departments.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="mb-3">
            <label>Employment Type:</label>
            <Select className="form-control" name="employment_type_id" required>
              <option value="">Select Employment Type</option>
              {employmentTypes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </Select>
          </div>

          <div className="mb-3">
            <label>Gender:</label>
            <RadioGroup field="gender">
              <label>
                <Radio value="1" /> Male
              </label>
              <label>
                <Radio value="2" /> Female
              </label>
              <label>
                <Radio value="3" /> Other
              </label>
            </RadioGroup>
          </div>

          <CustomFormInput
            label="Date of Birth"
            name="date_of_birth"
            type="date"
            required
          />
          <CustomFormInput label="Address" name="address" required />
          <CustomFormInput label="City" name="city" required />
          <CustomFormInput label="State" name="state" required />
          <CustomFormInput
            label="Zip Code"
            name="zip_code"
            formatter="######"
            required
          />
          <CustomFormInput label="Country" name="country" required />
          <CustomFormInput
            label="Joining Date"
            name="joining_date"
            type="date"
            required
          />
          <CustomFormInput
            label="Salary"
            name="salary"
            type="number"
            required
          />
          <CustomFormInput
            label="Bank Account Number"
            name="bank_account_number"
            required
          />
          <CustomFormInput label="IFSC Code" name="ifsc_code" required />
          <CustomFormInput
            label="Emergency Contact"
            name="emergency_contact"
            formatter="+91##########"
            required
          />

          <div className="mb-3">
            <button
              className="btn btn-success"
              type="submit"
              disabled={isSubmitting || formState.pristine}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Saving...
                </>
              ) : (
                "Save"
              )}
            </button>
            <button
              className="btn btn-danger ms-2"
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </Form>
  );
};

export default EditEmployeeForm;
