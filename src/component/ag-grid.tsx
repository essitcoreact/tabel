import React from "react";
import { GridApi, RowClickedEvent } from "ag-grid-community";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

interface TableProps {
  columnDefs: any[];
  rowData: any[];
  height: string;
  overlayNoRowsTemplate?: any;
  onRowClicked?: (data: RowClickedEvent) => void;
}

const Table: React.FC<TableProps> = ({
  columnDefs,
  rowData,
  height,
  overlayNoRowsTemplate,
  onRowClicked,
}) => {
  const getRowClass = (params: any) => {
    if (params?.data?.isDeleted === true) return "!bg-red-50";
  };
  return (
    <>
      <div
        className={`ag-theme-alpine w-full shadow-md`}
        style={{ height: `${height}` }}
      >
        <AgGridReact
          onRowClicked={onRowClicked}
          rowData={rowData}
          columnDefs={columnDefs}
          getRowClass={getRowClass}
          overlayNoRowsTemplate={overlayNoRowsTemplate}
        />
      </div>
    </>
  );
};

export default Table;
