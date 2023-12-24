import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Headertop from "../../components/Headertop";

const Pie = () => {
  return (
    <Box m="20px">
      <Headertop title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
