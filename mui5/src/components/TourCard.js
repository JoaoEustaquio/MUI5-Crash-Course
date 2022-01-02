import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://www.transportal.com.br/noticias/wp-content/uploads/2019/06/Cataratas-do-Igua%C3%A7u-720x250.jpg"
          alt=""
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into the Falls
          </Typography>

          <Box 
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>

          <Box 
          sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating 
              name="read-only"
              value={4.5}
              precision={0.5} 
              readOnly 
              size="small"               
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body2" component="p" marginLeft={1.5}>
              (655 Reviews)
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h3" marginTop={0}>
              From C $147
            </Typography>
          </Box>

        </Box>                  
      </Paper>
    </Grid>
  );
};

export default TourCard;
