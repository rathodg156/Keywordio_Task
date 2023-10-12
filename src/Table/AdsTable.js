import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel
} from "@mui/material";

function AdsTable({ data }) {
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
        campaings: "Total",
        clicks: acc.clicks + row.clicks,
        cost: acc.cost + row.cost,
        conversions: acc.conversions + row.conversions,
        revenue: acc.revenue + row.revenue
      };
    },
    {
      campaings: "Total",
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
              active={orderBy === "campaings"}
              direction={orderBy === "campaings" ? order : "asc"}
              onClick={() => handleSort("campaings")}
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
            <TableCell>{row.campaings}</TableCell>
            <TableCell>{row.clicks}</TableCell>
            <TableCell>{formatNumber(row.cost)}</TableCell>
            <TableCell>{formatNumber(row.conversions)}</TableCell>
            <TableCell>{formatNumber(row.revenue)}</TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell>{total.campaings}</TableCell>
          <TableCell>{total.clicks}</TableCell>
          <TableCell>{formatNumber(total.cost)}</TableCell>
          <TableCell>{formatNumber(total.conversions)}</TableCell>
          <TableCell>{formatNumber(total.revenue)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

// Rest of your code remains the same

// Example data with the provided values
const data = [
  {
    campaings: "Cosmetics",
    clicks: 712,
    cost: 4727,
    conversions: 8,
    revenue: 16568
  },
  {
    campaings: "Serums",
    clicks: 3968,
    cost: 27332,
    conversions: 115,
    revenue: 362526
  },
  {
    campaings: "Facewash",
    clicks: 9462,
    cost: 76831,
    conversions: 123,
    revenue: 266800
  },
  {
    campaings: "Shampoo",
    clicks: 439,
    cost: 2151,
    conversions: 5,
    revenue: 11029
  },
  {
    campaings: "Conditioners",
    clicks: 1680,
    cost: 3864,
    conversions: 49,
    revenue: 175245
  },
  {
    campaings: "Facewash2",
    clicks: 4978,
    cost: 29370,
    conversions: 189,
    revenue: 623106
  }
];

export default function App() {
  return (
    <div>
      <h1>Advertisement Data</h1>
      <AdsTable data={data} />
    </div>
  );
}
