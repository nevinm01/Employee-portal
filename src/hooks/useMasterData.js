import useSWR from "swr";
import axios from "../axiosIn"; // Ensure axios is correctly set up
import { getAuthToken } from "../utils/authStorage";

const fetcher = async (url) => {
  const token = getAuthToken();
  if (!token) throw new Error("No token found in localStorage");

  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data; // Extract `data` array from response
};

const useMasterData = () => {
  const { data: departments, error: deptError } = useSWR(
    "/api/v1/settings/departments",
    fetcher
  );
  const { data: designations, error: desigError } = useSWR(
    "/api/v1/settings/designations",
    fetcher
  );
  const { data: employmentTypes, error: empTypeError } = useSWR(
    "/api/v1/settings/employment-types",
    fetcher
  );

  return {
    departments: departments || [],
    designations: designations || [],
    employmentTypes: employmentTypes || [],
    error: deptError || desigError || empTypeError,
  };
};

export default useMasterData;
