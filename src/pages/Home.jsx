import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 5
    
        }}>
			<img src="/jagBrollop.jpeg" alt="Techover" style = {{ maxWidth: '50%', maxHeight: '50%', borderRadius: 5 }}/>
			<Button size = 'large' variant = 'contained' href='mailto:jonathan.person@hotmail.com'>
                Kontakta mig

            </Button>
		</Box>
	);
};

export default Home;
