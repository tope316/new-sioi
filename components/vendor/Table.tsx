import React, {useState} from "react";
import { useTable, useFilters } from "react-table";
import styles from './Table.module.css'

export default function Table({columns, data}) {

    const [filterInput, setFilterInput] = useState("");

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter // The useFilter Hook provides a way to set the filter
    } = useTable(
        {
            columns, 
            data
        },
        useFilters // Adding the useFilters Hook to the table
    );

    // Update the state when input changes
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("Company", value); // Update the Company filter. Now our table will filter and show only the rows which have a matching value
        setFilterInput(value);
    };

    return (
        <>
        <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search..."}
            className={styles.myinput}
        />

        &nbsp;&nbsp;&nbsp;<a className={styles.badge} href="./new">Add New</a>

        <table className={styles.mytable} {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )

}