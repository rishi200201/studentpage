import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock'; // Import LockIcon from Material-UI icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    initializeCaptcha();
  }, []);

  const generateCaptchaText = () => {
    let captcha = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      captcha += chars[randomIndex];
    }
    return captcha;
  };

  const drawCaptchaOnCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)'];
    const fontSize = 20;
    const spacing = 20;
    for (let i = 0; i < captchaText.length; i++) {
      ctx.font = `${fontSize}px Roboto Mono`;
      ctx.fillStyle = textColors[Math.floor(Math.random() * textColors.length)];
      const x = i * spacing + 10;
      const y = 25 + Math.random() * 15;
      ctx.fillText(captchaText[i], x, y);
    }
  };

  const initializeCaptcha = () => {
    const newCaptcha = generateCaptchaText();
    setCaptchaText(newCaptcha);
    drawCaptchaOnCanvas();
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleCaptchaSubmit = () => {
    if (userInput.toUpperCase() === captchaText.toUpperCase()) {
      alert('Captcha correct! Proceed with login.');
      // Handle login logic here
    } else {
      alert('Incorrect captcha. Please try again.');
      initializeCaptcha();
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 1, border: '1px solid #ccc', borderRadius: '5px', padding: '20px', position: 'relative', textAlign: 'center' }}>
      <Box sx={{ bgcolor: '#2196f3', borderRadius: '5px', padding: '10px', marginBottom: '5px' }}>
        <Typography component="h1" variant="h5" sx={{ color: '#fff', textAlign: 'center' }}>
          Student Portal
        </Typography>
      </Box>
      
      <Box sx={{ mt: 1, mb: 0, border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
        {/* CAPTCHA Section */}
        <canvas
          ref={canvasRef}
          width="150"
          height="40"
          className="captcha-canvas"
          onClick={initializeCaptcha}
          style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}
        ></canvas>
        <TextField
          margin="normal"
          required
          fullWidth
          id="captcha"
          label="Enter CAPTCHA"
          name="captcha"
          autoFocus
          value={userInput}
          onChange={handleUserInputChange}
          variant="outlined"
          size="small"
        />
      </Box>
      
      <Box component="form"  sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="NetID"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <AccountBoxIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            ),
          }}
        />
        <Link href="#" variant="body2" sx={{ alignSelf: 'flex-end', mt: 1 }}>
          Forgot Password?
        </Link>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<LockIcon />} // LockIcon added to the start of the button
          sx={{ mt: 1, mb: 1 }}
          onClick={handleCaptchaSubmit}
        >
          Login
        </Button>
      </Box>

      {/* OAuth button placed below Forgot Password link */}
      <div className="oauth-button">
        {/* Your OAuth button component here */}
        {/* Example: */}
        {/* <GoogleLoginButton /> */}
      </div>
      
    </Container>
  );
};

export default Login;
