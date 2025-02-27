import { useMemo } from "react";
import { useEmployees } from "../hooks/useEmployees";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useSearchParams, Link } from "react-router-dom";

const EmployeeTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromURL = Number(searchParams.get("page")) || 1;
  const {
    employees = [],
    isLoading,
    error,
  } = useEmployees(pageFromURL, 10, "name");

  const ViewDetailsLink = ({ employeeId }) => (
    <Link
      to={`/employee/${employeeId}`}
      className="text-primary text-decoration-underline"
    >
      View Details
    </Link>
  );

  const columns = useMemo(
    () => [
      { accessorKey: "employee_code", header: "Employee ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phone", header: "Mobile" },
      {
        accessorKey: "designation",
        header: "Designation",
        cell: (info) => info.getValue()?.title || "N/A",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => <ViewDetailsLink employeeId={row.original.id} />,
      },
    ],
    []
  );

  const table = useReactTable({
    data: employees,
    columns,
    manualPagination: true,
    pageCount: 5,
    state: { pagination: { pageIndex: pageFromURL - 1, pageSize: 10 } },
    getCoreRowModel: getCoreRowModel(),
  });

  const totalPages = 5;
  const currentPage = pageFromURL;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setSearchParams({ page });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Employee List - Page {currentPage}</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {employees.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isLoading && (
        <div className="text-center mt-3">
          <img src="/loading.gif" alt="loading gif" width={50} />
          <p>Loading new data...</p>
        </div>
      )}

      {error && (
        <p className="text-danger text-center mt-3">Error: {error.message}</p>
      )}

      <div className="d-flex justify-content-center align-items-center mt-3">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1 || isLoading}
          className="btn btn-secondary mx-2"
        >
          {isLoading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Prev"
          )}
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              className={`btn mx-1 ${
                currentPage === pageNumber ? "btn-dark" : "btn-light"
              }`}
              disabled={isLoading}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages || isLoading}
          className="btn btn-secondary mx-2"
        >
          {isLoading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Next"
          )}
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
