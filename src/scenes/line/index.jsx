import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import Headertop from "../../components/Headertop";

const Line = () => {
  return (
    <Box m="20px">
      <Headertop title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
