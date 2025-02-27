const API_BASE_URL = "https://core-skill-test.webc.in/employee-portal";

// ✅ Fetch helper with error handling
const fetchAPI = async (
  endpoint,
  method = "GET",
  body = null,
  token = null
) => {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  const data = await response.json();
  if (!data.success) throw new Error(data.message || "Something went wrong");

  return data;
};

// ✅ Authentication API Calls
export const loginUser = (username, password) =>
  fetchAPI("/api/v1/auth/login", "POST", { username, password });

export const logoutUser = (token) =>
  fetchAPI("/api/v1/settings/logout", "POST", null, token);
