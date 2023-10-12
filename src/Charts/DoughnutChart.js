import React, { useState } from "react";
import {
  Select,
  MenuItem,
} from "@mui/material";
import {
  Chart,
  PieSeries,
  Title,
  Tooltip,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";

const data = [
  {
    group: "Male",
    clicks: 712,
    cost: 4727,
    conversions: 8,
    revenue: 16568,
  },
  {
    group: "Female",
    clicks: 3961,
    cost: 27332,
    conversions: 115,
    revenue: 362526,
  },
  {
    group: "Unknown",
    clicks: 9462,
    cost: 76831,
    conversions: 123,
    revenue: 266800,
  },
];

function DoughnutChart() {
  const [selectedMetric, setSelectedMetric] = useState("clicks");

  const totalValue = data.reduce((acc, row) => acc + row[selectedMetric], 0);

  const sortedData = data
    .sort((a, b) => b[selectedMetric] - a[selectedMetric])
    .map((row) => ({
      group: `${row.group} (${((row[selectedMetric] / totalValue) * 100).toFixed(2)}%)`,
      value: ((row[selectedMetric] / totalValue) * 100).toFixed(2),
    }));

  return (
    <div>
      <Chart data={sortedData} width={500} height={350}>
        <PieSeries
          valueField="value"
          argumentField="group"
          innerRadius={0.6}
          color="group"
        />
        <Title text={`Ad Insights per - ${selectedMetric}`} />
        <Tooltip />
        <Legend />
        <Select
        value={selectedMetric}
        onChange={(event) => setSelectedMetric(event.target.value)}
      >
        <MenuItem value="clicks">Clicks</MenuItem>
        <MenuItem value="cost">Cost</MenuItem>
        <MenuItem value="conversions">Conversions</MenuItem>
        <MenuItem value="revenue">Revenue</MenuItem>
      </Select>
      </Chart>
      
    </div>
  );
}

export default DoughnutChart;
