import { Box } from '@mui/material'
import Homeimg from '../images/city.jpg'

const Home = () => {


    return (
        <Box>
            <Box component="img"
                 sx={{ width: '100%'}}
                 src= { Homeimg}
                 alt= 'Home Img' />
        </Box>
    )
}

export default Home