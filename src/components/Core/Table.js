import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { toast } from "react-toastify";

import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

import { useEffect } from "react";
// import Loader from "./Loader";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchTableData,
//   tableData,
//   isLoading,
//   error,
// } from "src/app/dashboard/reducers/tableDataSlice";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

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

const TableComponent = ({
  rows,
  columns,
  //   isLoading = false,
  //   error = null,
  rowsPerPage = 10,
  color = "#F9FAFB",
}) => {
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
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

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = sortData(rows);

  const { items } = usePagination({
    count: Math.ceil(rows?.length / rowsPerPage),
    count: Math.ceil(rows?.length / 10),
  });

  const selectedItem = items?.find((item) => item?.selected === true);

  //   if (isLoading) {
  //     return <Loader />;
  //   }

  //   if (error) {
  //     toast("Error: " + error);
  //     return;
  //   }

  if (rows?.length < 1 || !rows || !rows === undefined) {
    return (
      <div className="text-center text-base font-DM-sans text-app-brown-300">
        No product found
      </div>
    );
  }

  return (
    // <main class="mb-[84px] flex-1">
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
                    onClick={() => handleSort(column.id)}
                  >
                    {/* <span className="flex items-center justify-center"> */}
                    <span className="text-sm font-medium flex items-center hover:font-medium text-[#C2B4B4] font-DM-sans">
                      {column?.label}
                      {column.label && column.sort && (
                        <img src="/images/sort-arrow.svg" alt="icon" />
                      )}
                      {/* <span>
                        {sortConfig.key === column.id &&
                          (sortConfig.direction === "asc" ? (
                            <ArrowUpwardOutlinedIcon
                              sx={{ color: "#667085", fontSize: "14px" }}
                              className="ml-1"
                            />
                          ) : (
                            <ArrowDownwardOutlinedIcon
                              sx={{ color: "#667085", fontSize: "14px" }}
                              className="ml-1"
                            />
                          ))}
                      </span> */}
                    </span>
                    {/* </span> */}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody
            // style={{
            //   paddingBottom: "12px",
            // }}
            >
              {sortedData
                .slice(
                  (selectedItem?.page - 1) * rowsPerPage,
                  (selectedItem?.page - 1) * rowsPerPage + rowsPerPage
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns?.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            // onClick={() => console.log("hello")}
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

        {rows?.length > rowsPerPage && (
          <div className="my-4 flex w-full items-center justify-end pr-4">
            <nav className="flex items-center justify-center">
              <List>
                {items.map(({ page, type, selected, ...item }, index) => {
                  // console.log(page);
                  let children = null;

                  if (type === "start-ellipsis" || type === "end-ellipsis") {
                    children = <button className="h-10 w-10">…</button>;
                  } else if (type === "page") {
                    children = (
                      <button
                        className="flex h-10 w-10 items-center justify-center mr-[6px] border-[#D0D5DD] text-sm "
                        type="button"
                        style={{
                          backgroundColor: selected ? "#4E4141" : undefined,
                          color: selected ? "#FFFFFF" : undefined,
                          borderRadius: selected ? "8px" : undefined,
                        }}
                        {...item}
                      >
                        {page}
                      </button>
                    );
                  } else {
                    children = (
                      <button
                        type="button"
                        {...item}
                        className="flex py-[11px] px-[13px] cursor-pointer items-center justify-center text-sm text-[#1D2939] hover:bg-[#F9FAFB] hover:text-[#1D2939]"
                      >
                        {type === "previous" && (
                          <span className="mr-2">
                            <svg
                              className={`${
                                page === 0 ? "text-[#C2B4B4]" : "text-[#4F4141]"
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                            >
                              <path
                                d="M6 8.825L2.2915 5L6 1.175L4.8583 0L0 5L4.8583 10L6 8.825Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        )}
                        {/* {type}{" "} */}
                        {type === "next" && (
                          <span className="ml-2">
                            <svg
                              className={`${"text-[#4F4141]"}`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                            >
                              <path
                                d="M0 8.825L3.7085 5L0 1.175L1.1417 0L6 5L1.1417 10L0 8.825Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        )}
                      </button>
                    );
                  }

                  return <li key={index}>{children}</li>;
                })}
              </List>
            </nav>
          </div>
        )}
      </Paper>
    </section>
    // </main>
  );
};

export default TableComponent;
