import React, { useState } from "react";
import TableChartIcon from '@mui/icons-material/TableChart';
import DataTable from "../Table/DataTable";
import DoughnutChart from "../Charts/DoughnutChart";
import PieChartIcon from '@mui/icons-material/PieChart';

function AdsInsights() {
  const [showChart, setShowChart] = useState("doughnut");

  const toggleView = (chartType) => {
    setShowChart(chartType);
  };

  const chartIconsStyle = {
    cursor: "pointer",
    marginRight: "10px",
  };

  return (
    <div>
      {showChart === "doughnut" ? <DoughnutChart /> : showChart === "table" ? <DataTable /> : null}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <div style={chartIconsStyle} onClick={() => toggleView("doughnut")}>
          <PieChartIcon fontSize="medium" />
        </div>
        <div style={chartIconsStyle} onClick={() => toggleView("table")}>
          <TableChartIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
}

export default AdsInsights;
