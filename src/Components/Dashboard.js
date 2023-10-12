import AdsInsights from "./AdsInsights";
import AdsTable from "../Table/AdsTable";
import { Box, Card, CardContent, Grid } from "@mui/material";
export default function Dashboard() {
  return (
    <>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ height: 75 + "vh" }}>
            <CardContent>
              <AdsTable />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ height: 75 + "vh" }}>
            <CardContent>
              <div className="paddingall">
                <AdsInsights />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
