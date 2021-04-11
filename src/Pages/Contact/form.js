import React from 'react';
import emailjs from 'emailjs-com';
import { makeStyles, TextField, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    heading: {
        paddingLeft: "5px"
    },
    form: {
        display: "flex",
        paddingLeft: "5px",
        flexDirection:"column",
        "& *" :{
            margin: "0px 0px 5px 0px"
        },
        "& input": {
            padding: "10px 14px 10px 0px"
        }
    },
    submit: {
        width: "20%",
        background: "#243f64",
        color: "white",
    }
}));

export function ContactForm() {
const classes = useStyles()
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_nkxierg', 'template_2wbbxeq', e.target, 'user_Bvl7bSNzSam6nZ2oQqwnF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
      <Grid xs="12" sm="8">
      <h4 className={classes.heading}>To Contact us kindly fill
your details in the for given below.</h4>
    <form className="contact-form" onSubmit={sendEmail} className={classes.form}>
      <TextField id="outlined-basic" label="Name (Required)" variant="outlined" name="user_name" className={classes.input}/>
      <TextField id="outlined-basic" label="Email (Required)" variant="outlined" name="user_email" className={classes.input}/>
      <TextField id="outlined-basic" label="Phone Number (Required)" variant="outlined" name="contact_number" className={classes.input}/>
      <TextField
          id="outlined-multiline-flexible"
          label="Additional details about your requirements (Required)"
          multiline
          rows={4}
          variant="outlined"
        />
      <input class={classes.submit} type="submit" value="Send" />
    </form>
    </Grid>
  );
}