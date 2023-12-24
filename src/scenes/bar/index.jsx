import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Headertop from "../../components/Headertop";

const Bar = () => {
  return (
    <Box m="20px">
      <Headertop title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
