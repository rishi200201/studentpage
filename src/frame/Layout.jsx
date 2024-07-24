import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from './srm.png';
import Login from './login';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: '#f2f6fc', // Background color outside the Box
          minHeight: '100vh', // Ensure full viewport height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start', // Align content to the top
          paddingTop: '50px', // Optional: Add top padding for spacing from top of viewport
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: 'white', // Background color inside the Box
              height: '65vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              textAlign: 'center', // Center align text within the Box
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Optional: Add a box shadow
              borderRadius: '8px', // Optional: Add border radius
              padding: '20px', // Optional: Add padding
            }}
          >
            <img
              src={logo}
              alt="SRM Logo"
              style={{
                maxWidth: '70%',
                maxHeight: '50%',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 370,
                margin: 'auto',
              }}
            />
            <div
              style={{
                textAlign: 'left',
                padding: '0px', // Adjust padding as needed
                maxWidth: '80%', // Limit maximum width of the content
                marginLeft: '15px', // Align the div to the left edge
                marginRight: 'auto', // Align the div to the left edge
                marginBottom: '120px',
              }}
            >
              Dear Student,<br /><br />
              Welcome to SRMIST STUDENT PORTAL.<br /><br />
              You can access the student portal to know your academic and financial details, etc.<br /><br />
              SRMIST students can login with NetID credentials. (i.e., If your email ID is abcd@srmist.edu.in, your NetID is abcd & password will be your email password)
            </div>
            <Login />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
