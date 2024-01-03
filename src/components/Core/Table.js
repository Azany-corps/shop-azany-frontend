import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import { useEffect } from "react";

const tableColumns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 170 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    // format: (value) => value.toFixed(2),
  },
];

const tableRows = [
  {
    name: "India",
    code: "INJ",
    population: 1324171354,
    size: 3287263,
    density: 67383,
  },
  {
    name: "China",
    code: "CNK",
    population: 1403500365,
    size: 3287263,
    density: 67383,
  },
  {
    name: "United States",
    code: "USV",
    population: 60483973,
    size: 3287263,
    density: 67383,
  },
  {
    name: "Canada",
    code: "CAU",
    population: 37602103,
    size: 3287263,
    density: 67383,
  },
  {
    name: "Australia",
    code: "AU",
    population: 25475400,
    size: 3287263,
    density: 67383,
  },
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 67383,
  },
  {
    name: "China",
    code: "CN",
    population: 1403500365,
    size: 3287263,
    density: 67383,
  },
  {
    name: "United States",
    code: "US",
    population: 60483973,
    size: 3287263,
    density: 67383,
  },
  {
    name: "Canada",
    code: "CA",
    population: 37602103,
    size: 3287263,
    density: 67383,
  },
  {
    name: "Australia",
    code: "AUI",
    population: 25475400,
    size: 3287263,
    density: 67383,
  },
  {
    name: "India",
    code: "INI",
    population: 1324171354,
    size: 3287263,
    density: 67383,
  },
  {
    name: "China",
    code: "CNI",
    population: 1403500365,
    size: 3287263,
    density: 67383,
  },
  {
    name: "United States",
    code: "USI",
    population: 60483973,
    size: 3287263,
    density: 67383,
  },
  {
    name: "Canada",
    code: "CAI",
    population: 37602103,
    size: 3287263,
    density: 67383,
  },
  {
    name: "Australia",
    code: "AUP",
    population: 25475400,
    size: 3287263,
    density: 67383,
  },
];

const TableComponent = ({ rows, columns, rowsPerPage = 10 }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortData = (data) => {
    if (sortConfig.key !== null && data) {
      const sortedData = [...data]?.sort((a, b) => {
        const keyA = a[sortConfig.key];
        const keyB = b[sortConfig.key];
        if (keyA < keyB) return sortConfig.direction === "asc" ? -1 : 1;
        if (keyA > keyB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
      return sortedData;
    }
    return data;
  };

  useEffect(() => {
    setPage(1);
  }, [rows]);

  const [page, setPage] = useState(1);

  const pages = Math.ceil(rows.length / rowsPerPage);
  const skip = page * rowsPerPage - rowsPerPage;

  const handleChange = (e, p) => {
    setPage(p);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = sortData(rows);

  if (rows?.length < 1 || !rows || !rows === undefined) {
    return (
      <div className="text-center text-base font-DM-sans text-app-brown-300">
        No product found
      </div>
    );
  }

  return (
    <section>
      <Paper
        sx={{ width: "100%" }}
        style={{
          borderRadius: "8px",
          boxShadow: "none",
          //   border: "1px solid #EAECF0",
          color: "#667085",
        }}
      >
        <TableContainer sx={{ maxHeight: 712 }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns?.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      top: 57,
                      minWidth: column.minWidth,
                      color: "#667085",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "400",
                      //   backgroundColor: color,
                      //   border: "none",
                      paddingLeft: 0,
                      height: "44px",
                      // align: "left",
                    }}
                    className="cursor-pointer"
                    active={true}
                    onClick={() => {
                      handleSort(column.id);
                    }}
                  >
                    <span className="text-sm font-medium flex items-center hover:font-medium text-[#C2B4B4] font-DM-sans">
                      {column?.label}
                      {column.label && column.sort && (
                        <img src="/images/sort-arrow.svg" alt="icon" />
                      )}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.slice(skip, skip + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns?.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            color: "#4F4141",
                            fontFamily: "DM sans",
                            fontSize: "14px",
                            fontWeight: "700",
                            border: "none",
                            padding: "12px 0",
                            //   backgroundColor: "#C2B4B4",
                          }}
                        >
                          {column?.format && typeof value === "number"
                            ? column?.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <nav
          className="mb-4 flex justify-end items-center pt-4 font-DM-sans"
          aria-label="Table navigation"
        >
          {rows.length > rowsPerPage && (
            <Pagination
              count={pages}
              page={page}
              onChange={handleChange}
              color="standard"
              shape="rounded"
              size="large"
            />
          )}
        </nav>
      </Paper>
    </section>
  );
};

export default TableComponent;
