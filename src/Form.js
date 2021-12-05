import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import Validator from './Validator';

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    // margin: theme.spacing(1, 0),
    marginBottom: "20px",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()

  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    const { name, CollegeEmail, branch, pol, username, phone } = data;
    setEmail(CollegeEmail)
    setPhone(phone)
  };

  const result = Validator(email, phone)
  console.log(result)

  const Branches = [
    "CSE",
    "CSE AI/ML",
    "CSE DS",
    "CS",
    "IT",
    "CS-IT",
    "EN",
    "ECE",
    "EEE",
    "MECH",
    "CIVIL",
  ];

  return (
    <div className="box">
      <div className="box-secondary">
        <h2 className="title">{"</ REGISTER HERE />"}</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {/* 1) TextField */}
          <TextField
            placeholder="Enter Your First Name"
            label="Name"
            variant="standard"
            fullWidth
            className={classes.inputField}
            name="name"
            inputRef={register({
              required: "Name is required.",
            })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />

          {/* 2) TextField */}
          <TextField
            placeholder="Enter Your College Email"
            label="College Email"
            variant="standard"
            fullWidth
            className={classes.inputField}
            name="CollegeEmail"
            inputRef={register({
              required: "College Email is required.",
            })}
            error={Boolean(errors.CollegeEmail)}
            helperText={errors.CollegeEmail?.message}
          />
          <div className="dropdown">
            {/* Select */}
            <FormControl
              fullWidth
              className={classes.inputField}
              error={Boolean(errors.branch)}
              variant="standard"
            >
              <InputLabel id="demo-simple-select-label">Branch</InputLabel>
              <Controller
                render={(props) => (
                  <Select value={props.value} onChange={props.onChange}>
                    <MenuItem value="">Choose your branch</MenuItem>
                    {Branches.map((branch) => (
                      <MenuItem value={branch}>{branch}</MenuItem>
                    ))}
                  </Select>
                )}
                name="branch"
                control={control}
                defaultValue=""
                rules={{
                  required: "please choose your branch.",
                }}
              />
              <FormHelperText>{errors.branch?.message}</FormHelperText>
            </FormControl>

            {/* Select */}
            <FormControl
              fullWidth
              className={classes.inputField}
              error={Boolean(errors.pol)}
              variant="standard"
            >
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Controller
                render={(props) => (
                  <Select value={props.value} onChange={props.onChange}>
                    <MenuItem value="Web Development">Day Scholar</MenuItem>
                    <MenuItem value="App Development">Hosteler</MenuItem>
                  </Select>
                )}
                name="pol"
                control={control}
                defaultValue=""
                rules={{
                  required: "choose one of the above.",
                }}
              />
              <FormHelperText>{errors.pol?.message}</FormHelperText>
            </FormControl>
          </div>

          {/* 3) TextField */}
          <TextField
            placeholder="Enter Your HackerRank Id"
            label="HackerRank Id"
            variant="standard"
            fullWidth
            className={classes.inputField}
            name="username"
            inputRef={register({
              required: "HackerRank Id is required.",
            })}
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
          />

          {/* 4) TextField */}
          <TextField
            placeholder="Enter Your Phone Number"
            label="Phone"
            variant="standard"
            fullWidth
            className={classes.inputField}
            name="phone"
            inputRef={register({
              required: "Phone Number is required.",
            })}
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="button"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
