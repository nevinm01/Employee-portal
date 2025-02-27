import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import CustomInput from "../CustomFields/CustomInput";
import { Form } from "informed";
import { useValidation } from "../hooks/useValidation";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const { login, auth } = useAuth();
  const { validateEmail, validatePassword } = useValidation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state for the spinner
  const navigate = useNavigate();

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (values) => {
    const { username, password } = values.values;

    if (!username || !password) {
      setErrorMessage("❌ Username or password is missing.");
      return;
    }

    setIsLoading(true);
    try {
      await login(username, password);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setErrorMessage(
        error.response?.status === 401
          ? "❌ Incorrect username or password."
          : "❌ Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <CustomInput
            field="username"
            label="Email:"
            validate={validateEmail}
            placeholder="Enter your email"
            required
          />
          <CustomInput
            field="password"
            label="Password:"
            validate={validatePassword}
            placeholder="Enter your password"
            type="password"
            required
          />

          {errorMessage && (
            <p className="text-danger text-center">{errorMessage}</p>
          )}

          <div className="d-grid">
            <button type="submit" className="btn btn-dark" disabled={isLoading}>
              {isLoading ? (
                <Spinner animation="border" size="sm" role="status" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
