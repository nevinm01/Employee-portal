import { useField } from "informed";

const CustomInput = (props) => {
  const { fieldState, fieldApi, render, ref, userProps } = useField({
    ...props,
    validate: props.validate,
  });

  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { label, id, ...rest } = userProps;
  return render(
    <div style={{ marginBottom: "1rem" }}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...rest}
        id={id}
        ref={ref}
        value={!value && value !== 0 ? "" : value}
        onChange={(e) => setValue(e.target.value, e)}
        onBlur={(e) => setTouched(true, e)}
        style={{
          padding: "0.5rem",
          border: "1px solid",
          borderColor: showError ? "red" : "#ccc",
          borderRadius: "4px",
          width: "100%",
        }}
      />
      {showError && (
        <small style={{ color: "red", fontSize: "0.8rem" }}>{error}</small>
      )}
    </div>
  );
};

export default CustomInput;
