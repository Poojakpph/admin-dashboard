import { Box, useTheme } from "@mui/material";
import Headertop from "../../components/Headertop";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Headertop title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5"> What is this dashboard for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This dashboard is designed to provide data-driven insights for specific purpose, e.g., sales performance, customer 
            behavior, etc. It consolidates relevant information to help you make informed decisions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Can I customize the dashboard? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes, the dashboard is customizable to suit your specific needs. Use the customization options provided to adjust 
             visuals, filters, and parameters according to your requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">What do the different charts and graphs represent? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Each chart and graph represents a specific aspect of the data. Hover over elements to see tooltips with detailed 
             information. Refer to the legend for color-coded data points.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5"> How do I export data from the dashboard? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>You can export data in various formats like CSV, Excel, PDF by using the export options available. Look for the export 
            icon or button near the relevant data visualization.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5"> I'm experiencing technical issues. What should I do? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>If you encounter technical issues, please contact our support team at support email or link. Provide details about
             the problem, and our team will assist you promptly.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
