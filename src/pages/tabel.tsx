import { DataTable } from "@/component/DataTabel";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type Task = {
  id: number;
  name: string;
  description?: string;
  child?: Task[]; // Recursive type for nested subtasks
};

const Tabel = () => {
  const [taskData, setTaskData] = useState<Task[]>([
    {
      id: 1,
      name: "Task A",
      description: "Description A",
      child: [
        { id: 2, name: "Subtask A1", description: "Description A1" },
        { id: 3, name: "Subtask A2" },
        {
          id: 4,
          name: "Subtask A3",
          child: [
            { id: 2, name: "Subtask A31" },
            { id: 3, name: "Subtask A32" },
            {
              id: 4,
              name: "Subtask A33",
              child: [
                { id: 2, name: "Subtask A331" },
                { id: 3, name: "Subtask A332" },
                { id: 4, name: "Subtask A333" },
              ],
            },
            { id: 5, name: "Subtask A34" },
          ],
        },
        { id: 5, name: "Subtask A4" },
      ],
    },
    {
      id: 4,
      name: "Task B",
      description: "Description B",
      child: [{ id: 5, name: "Subtask B1" }],
    },
    {
      id: 5,
      name: "Task C",
      description: "Description C",
    },
  ]);

  const columns: ColumnDef<Task>[] = [
    {
      accessorKey: "name",
      header: "Task Name",
      cell: ({ row, getValue }: any) => (
        <div
          style={{
            paddingLeft: `${row.depth * 2}rem`,
          }}
          className="flex items-center gap-2"
        >
          {row.getCanExpand() ? (
            <button
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: { cursor: "pointer" },
              }}
            >
              {row.getIsExpanded() ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
          ) : (
            <div className="w-4"></div>
          )}{" "}
          {getValue()}
        </div>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: (info) => info.getValue(),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          {row.depth === 0 ? (
            <button className="bg-blue-500 text-white px-2 py-1 rounded">
              Task Action
            </button>
          ) : (
            <button className="bg-green-500 text-white px-2 py-1 rounded">
              Subtask Action
            </button>
          )}
        </div>
      ),
    },
  ];
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 5;
  const totalRows = taskData.length;

  // Handle page index change
  const handlePageIndexChange = (index: number) => {
    setPageIndex(index);
  };

  return (
    <DataTable<Task>
      columns={columns}
      data={taskData}
      totalRows={totalRows}
      pageIndex={pageIndex}
      pageSize={pageSize}
      onPageIndexChange={handlePageIndexChange}
      subRowsKey="child"
    />
  );
};

export default Tabel;
