import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel
} from "@mui/material";

function DataTable({ data }) {
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(columnId);
      setOrder("asc");
    }
  };

  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  const sortedData = data.sort((a, b) => {
    const aValue =
      typeof a[orderBy] === "string" ? a[orderBy].toLowerCase() : a[orderBy];
    const bValue =
      typeof b[orderBy] === "string" ? b[orderBy].toLowerCase() : b[orderBy];

    if (order === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  // Calculate the total values
  const total = data.reduce(
    (acc, row) => {
      return {
        group: "Total",
        clicks: acc.clicks + row.clicks,
        cost: acc.cost + row.cost,
        conversions: acc.conversions + row.conversions,
        revenue: acc.revenue + row.revenue
      };
    },
    {
      group: "Total",
      clicks: 0,
      cost: 0,
      conversions: 0,
      revenue: 0
    }
  );

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              active={orderBy === "group"}
              direction={orderBy === "group" ? order : "asc"}
              onClick={() => handleSort("group")}
            >
              Campaings
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={orderBy === "clicks"}
              direction={orderBy === "clicks" ? order : "asc"}
              onClick={() => handleSort("clicks")}
            >
              Clicks
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={orderBy === "cost"}
              direction={orderBy === "cost" ? order : "asc"}
              onClick={() => handleSort("cost")}
            >
              Cost
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={orderBy === "conversions"}
              direction={orderBy === "conversions" ? order : "asc"}
              onClick={() => handleSort("conversions")}
            >
              Conversions
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={orderBy === "revenue"}
              direction={orderBy === "revenue" ? order : "asc"}
              onClick={() => handleSort("revenue")}
            >
              Revenue
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.group}</TableCell>
            <TableCell>{row.clicks}</TableCell>
            <TableCell>{formatNumber(row.cost)}</TableCell>
            <TableCell>{formatNumber(row.conversions)}</TableCell>
            <TableCell>{formatNumber(row.revenue)}</TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell>{total.group}</TableCell>
          <TableCell>{total.clicks}</TableCell>
          <TableCell>{formatNumber(total.cost)}</TableCell>
          <TableCell>{formatNumber(total.conversions)}</TableCell>
          <TableCell>{formatNumber(total.revenue)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

// Example data with the provided values
const data = [
  {
    group: "Male",
    clicks: 712,
    cost: 4727,
    conversions: 8,
    revenue: 16568
  },
  {
    group: "Female",
    clicks: 3961,
    cost: 27332,
    conversions: 115,
    revenue: 362526
  },
  {
    group: "Unknown",
    clicks: 9462,
    cost: 76831,
    conversions: 123,
    revenue: 266800
  }
];

export default function App() {
  return (
    <div>
      <h1>Advertisement Data</h1>
      <DataTable data={data} />
    </div>
  );
}
