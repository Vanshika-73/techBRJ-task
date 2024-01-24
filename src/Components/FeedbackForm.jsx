// FeedbackForm.js
import React, { useState } from 'react';
import { Container, Paper, Typography, FormControl, RadioGroup, Radio, FormControlLabel, Button } from '@mui/material';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Feedback submitted:', feedback);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Feedback Form
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup value={feedback} onChange={handleFeedbackChange}>
            <FormControlLabel value="excellent" control={<Radio />} label="Excellent" />
            <FormControlLabel value="good" control={<Radio />} label="Good" />
            <FormControlLabel value="average" control={<Radio />} label="Average" />
            <FormControlLabel value="poor" control={<Radio />} label="Poor" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={handleSubmit}>
          Submit Feedback
        </Button>
      </Paper>
    </Container>
  );
};

export default FeedbackForm;
