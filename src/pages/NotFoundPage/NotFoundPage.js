import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        backgroundSize: 'cover',
        height: '80vh',
        backgroundImage: `url(https://img.redro.pl/obrazy/crack-on-the-glass-broken-screen-broken-phone-cracked-glass-background-white-cracks-in-the-glass-700-238179359.jpg)`,
      }}
    >
      <CssBaseline />
      <Container
        component="main"
        sx={{
          mt: 18,
          ml: 6,
          color: 'white',
          transform: 'rotate(24deg)',
        }}
        maxWidth="sm"
      >
        <Typography variant="h2" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          This page doesn't exist
        </Typography>
      </Container>
    </Box>
  );
}
