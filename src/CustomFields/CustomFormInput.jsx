import { useField } from "informed";

const CustomFormInput = ({ label, className = "", ...props }) => {
  const { fieldState, fieldApi, ref } = useField(props);
  const { error, value } = fieldState;

  return (
    <div className="mb-3">
      {label && <label>{label}</label>}
      <input
        {...props}
        className={`form-control ${className} ${error ? "is-invalid" : ""}`}
        ref={ref}
        value={value || ""}
        onChange={(e) => fieldApi.setValue(e.target.value)}
        onBlur={() => fieldApi.setTouched(true)}
      />
      {error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
};

export default CustomFormInput;
