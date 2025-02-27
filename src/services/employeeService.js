import useSWR from "swr";

const token = localStorage.getItem("authToken");

const fetcher = async (url) => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const response = await fetch(proxyUrl + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch employees");
  return response.json();
};

export const useEmployees = (
  page = 1,
  length = 10,
  sortBy = "name",
  sortOrder = "asc"
) => {
  const { data, error, isLoading } = useSWR(
    `https://core-skill-test.webc.in/employee-portal/api/v1/employee/?length=${length}&page=${page}&sort_order=${sortOrder}&sort_by=${sortBy}`,
    fetcher
  );

  return {
    employees: data || [],
    isLoading,
    error,
  };
};
