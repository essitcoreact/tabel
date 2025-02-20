import Table from '@/component/ag-grid';
import HandsontableComponent from '@/component/handsontable';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';
import { useMemo } from 'react';


const Home = () => {
    const rowData = [
        {
            id: 1,
            name: 'Alex',
            score: 10,
            isPromoted: false
        },
        {
            id: 2,
            name: 'Adam',
            score: 55,
            isPromoted: false
        },
        {
            id: 3,
            name: 'Kate',
            score: 61,
            isPromoted: true
        },
        {
            id: 4,
            name: 'Max',
            score: 98,
            isPromoted: true
        },
        {
            id: 5,
            name: 'Lucy',
            score: 59,
            isPromoted: false
        }
    ];
    const columnDefs = useMemo(
        () => [
            {
                field: "name",
                flex: 1,
                minWidth: 120,
                headerComponentParams: {
                    template:
                        '<div class="ag-cell-label-container" role="presentation">' +
                    '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
                    '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
                    '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order" ></span>' +
                    '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" ></span>' +
                    '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" ></span>' +
                    '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon" ></span>' +
        
                    //The line below is the key for achieving the solution
                    '    <a href="https://ag-grid.com" target="_blank"> <span ref="eText" class="ag-header-cell-text" role="columnheader"></span></a>' +
        
                    '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
                    '  </div>' +
                    '</div>'
                },
            },
            { field: "score", flex: 1, minWidth: 120 },
            { field: "isPromoted", flex: 1, minWidth: 120 }
        ],
        [rowData]
    );
    return (
        <>
            {/* <HandsontableComponent data={data}/> */}
            <Table
                columnDefs={columnDefs}
                rowData={rowData}
                height={"300px"}
            />
        </>
    )
}
export default Home 