import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Box, Paper } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import './form.css';
import axios from "axios";
const Form = () => {
  const [name, setName] = useState("");
  const [questions,setQuestions] = useState([]);
  const [choices,setChoices] = useState([]);
  const ans=[];
  useEffect(()=>{
    axios.get('https://brijfeedback.pythonanywhere.com/api/get-feedback-questions/?unitID=1').then((response)=>{
        setQuestions(response.data?.feedbackQuestions);
        setChoices(response.data?.choices);
    });
  },[])
  const handleChange = (event,index) => {
    ans[index]=(event.target?.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const feedback={
        "questions":questions,
        "choices":ans
    }
    console.log("Name submitted:", feedback);
    alert("form submitted")
  };
  return (
      <Container className="container" style={{display:"flex"}}>
        <h1 style={{ textAlign: "center", fontSize: "7vh",margin:"0px 0px 30px 0px" }}>Feedback Form</h1>
       <Paper elevation={4} className="paper">
       <form className="form" onSubmit={handleSubmit}>
         {
            questions.map((item,index)=>(
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label" style={{color:"black",fontWeight:"600",fontSize:"3vh",marginTop:"8px"}}>
                  {item}
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e)=>handleChange(e,index)}
                >
                  <FormControlLabel
                    value={choices[index]?.[0]}
                    control={<Radio />}
                    label={choices[index]?.[0]}
                  />
                  <FormControlLabel value={choices[index]?.[1]} control={<Radio />} label={choices[index]?.[1]} />
                  <FormControlLabel
                    value={choices[index]?.[2]}
                    control={<Radio />}
                    label={choices[index]?.[2]}
                  />
                </RadioGroup>
              </FormControl>
            ))
         }
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submitButton"
          >
            Submit
          </Button>
        </form>
       </Paper>
      </Container>
  );
};

export default Form;
