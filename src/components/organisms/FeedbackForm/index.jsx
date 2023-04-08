import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

import { TextField, Button, Snackbar, SnackbarContent } from "@mui/material";

import styled from "styled-components";
import { orangeColor, whiteColor } from "../../../constants/colorPalette";

const inputStyles = {
  "& .MuiInputLabel-root.Mui-focused": {
    color: `${orangeColor}`,
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: `${orangeColor}`,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${orangeColor}`,
  },
};

const FeedBackForm = () => {
  const [showSnackbar, setshowSnackbar] = useState(false);

  return (
    <Formik
      initialValues={{ name: "", email: "", mobile: "", message: "" }}
      onSubmit={(values, formikHelpers) => {
        formikHelpers.resetForm();
        setshowSnackbar(true);
      }}
      validationSchema={object({
        name: string().required("Please enter your name").min(3, "Too short"),
        email: string()
          .required("Please enter your email")
          .email("Invalid email"),
        mobile: string().matches(
          /^\+380\d{3}\d{2}\d{2}\d{2}$/,
          "Please enter a valid mobile number: it must start with +380"
        ),
        message: string()
          .required("Please enter your message")
          .min(10, "Too short"),
      })}
    >
      {(props) => (
        <FormContainer>
          <Snackbar
            open={showSnackbar}
            onClose={() => setshowSnackbar(false)}
            autoHideDuration={3000}
          >
            <CustomSnackbarContent message="Your data has been sent" />
          </Snackbar>
          <CustomForm>
            <Field
              as={TextField}
              name="name"
              type="text"
              label="Name"
              variant="outlined"
              size="small"
              sx={inputStyles}
              fullWidth
              required
              error={Boolean(props.errors.name) && Boolean(props.touched.name)}
              helperText={Boolean(props.touched.name) && props.errors.name}
            />
            <Field
              as={TextField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              size="small"
              sx={inputStyles}
              fullWidth
              required
              error={
                Boolean(props.errors.email) && Boolean(props.touched.email)
              }
              helperText={Boolean(props.touched.email) && props.errors.email}
            />
            <Field
              as={TextField}
              name="mobile"
              type="tel"
              label="Phone Number (+380XXXXXXXXX)"
              variant="outlined"
              size="small"
              sx={inputStyles}
              fullWidth
              error={
                Boolean(props.errors.mobile) && Boolean(props.touched.mobile)
              }
              helperText={Boolean(props.touched.mobile) && props.errors.mobile}
            />
            <Field
              as={TextField}
              name="message"
              type="text"
              label="Message"
              variant="outlined"
              multiline
              rows={3}
              sx={inputStyles}
              fullWidth
              required
              error={
                Boolean(props.errors.message) && Boolean(props.touched.message)
              }
              helperText={
                Boolean(props.touched.message) && props.errors.message
              }
            />
            <CustomButton
              type="submit"
              disabled={!props.dirty || !props.isValid}
              variant="contained"
            >
              Submit
            </CustomButton>
          </CustomForm>
        </FormContainer>
      )}
    </Formik>
  );
};

export default FeedBackForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const CustomSnackbarContent = styled(SnackbarContent)`
  background-color: ${orangeColor} !important;
  color: ${whiteColor} !important;
`;

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CustomButton = styled(Button)`
  width: 150px;

  &:not(:disabled) {
    background-color: ${whiteColor};
    color: ${orangeColor};
    border: 1px solid ${orangeColor};
    box-shadow: none;
  }

  &:not(:disabled):hover {
    background-color: ${orangeColor};
    color: ${whiteColor};
    box-shadow: none;
  }
`;
