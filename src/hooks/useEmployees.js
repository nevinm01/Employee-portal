import useSWR from "swr";
import axios from "../axiosIn.js";
import { getAuthToken } from "../utils/authStorage";

// API Fetch Function
const fetchEmployees = async (url, page, pageSize, sortBy, sortOrder) => {
  const token = getAuthToken();
  if (!token) {
    throw new Error("No token found in localStorage");
  }

  const response = await axios.get(url, {
    params: {
      length: pageSize,
      page: page,
    },
    headers: { Authorization: `Bearer ${token}` },
  });

  return {
    employees: response.data.data.rows.data, // Employee list
    totalPages: response.data.data.total_pages || 1, // Total pages
  };
};

// SWR Hook for Employees
export function useEmployees(
  page = 1,
  pageSize = 10,
  sortBy = "name",
  sortOrder = "asc"
) {
  const url = `/api/v1/employee`;

  const { data, error, isLoading } = useSWR(
    [url, page, pageSize, sortBy, sortOrder],
    () => fetchEmployees(url, page, pageSize, sortBy, sortOrder),
    {
      revalidateOnFocus: true,
      revalidateIfStale: true,
      revalidateOnReconnect: true,
      refreshInterval: 5000,
      keepPreviousData: true,
    }
  );

  return {
    employees: data?.employees || [],
    totalPages: data?.totalPages || 1,
    error,
    isLoading,
  };
}
