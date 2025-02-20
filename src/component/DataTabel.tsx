import * as React from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
  ExpandedState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListTree } from "lucide-react"; // Icons

interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  totalRows: number;
  pageIndex: number;
  pageSize: number;
  onPageIndexChange: (index: number) => void;
  rowHeight?: string;
  headerHeight?: string;
  loading?: boolean;
  Pagination?: boolean;
  subRowsKey?: keyof T;
}

export function DataTable<T>({
  columns,
  data,
  totalRows,
  pageIndex,
  pageSize,
  onPageIndexChange,
  rowHeight = "auto",
  headerHeight = "50px",
  loading,
  Pagination = true,
  subRowsKey,
}: DataTableProps<T>) {
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  const [completedTasks, setCompletedTasks] = React.useState<
    Record<string, boolean>
  >({});

  const toggleTaskCompletion = (taskId: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const table = useReactTable({
    data,
    columns,
    getSubRows: (row: T) => (subRowsKey && (row[subRowsKey] as T[])) || [],
    state: { expanded },
    onExpandedChange: (updater) => {
      setExpanded((prev) => {
        const newState =
          typeof updater === "function"
            ? updater(prev as ExpandedState)
            : updater;
        return typeof newState === "boolean" ? {} : newState;
      });
    },
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="w-full rounded-md border bg-white dark:bg-gray-dark text-dark dark:text-white/70">
      <div className="border-b">
        <Table>
          <TableHeader>
            <TableRow style={{ height: headerHeight }}>
              {table.getHeaderGroups().map((headerGroup) => (
                <React.Fragment key={headerGroup.id}>
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
                </React.Fragment>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              <>
                {data.length ? (
                  table.getRowModel().rows.map((row) => (
                    <React.Fragment key={row.id}>
                      <TableRow
                        style={{
                          height: rowHeight,
                          borderBottom:
                            row.depth > 0 ? "none" : "1px solid #e2e8f0",
                        }}
                        className={`depth-${row.depth} ${
                          completedTasks[row.id] ? "opacity-50" : ""
                        }`}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {cell.column.id === "name" ? (
                              <div className="flex items-center gap-2">
                                {row.depth > 0 && (
                                  <input
                                    type="checkbox"
                                    checked={!!completedTasks[row.id]}
                                    onChange={() =>
                                      toggleTaskCompletion(row.id)
                                    }
                                    className="form-checkbox h-4 w-4 text-blue-600"
                                  />
                                )}
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                                {subRowsKey && row.original[subRowsKey] && (
                                  <button
                                    className="flex items-center gap-2"
                                    onClick={row.getToggleExpandedHandler()}
                                  >
                                    <span>
                                      <ListTree
                                        size={16}
                                        className="text-gray-500"
                                      />
                                    </span>
                                    <span className="text-gray-400 text-sm">
                                      {(row.original[subRowsKey] as T[]).length}
                                    </span>
                                  </button>
                                )}
                              </div>
                            ) : (
                              flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    </React.Fragment>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="text-center">
                      No results found.
                    </TableCell>
                  </TableRow>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
