import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageLists';
import CustomizedAccordions from '../components/Accordian';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
      <img src="https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg" 
          alt="" 
          height="325" 
      />
      <ImageCollage />
    </Box>

    <Box>
    <Typography variant="h6" component="h4" marginTop={3} marginBottom={2} >
      About this ticket
    </Typography>
    
    <Typography variant="paragraph" component="p" marginTop={3}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora assumenda magni explicabo quis neque sapiente, 
      modi provident autem rerum minus architecto ex fuga, debitis et ducimus! Pariatur doloribus quo error.
    </Typography>
    </Box>

    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
      Frequently Asked Questions
    </Typography>
    
    <CustomizedAccordions />
    </Box>

    <Box marginBottom={10}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation>
            <BasicModal />
          </BottomNavigation>
      </Paper>
    </Box>
  </Container>
)

export default Tour;
