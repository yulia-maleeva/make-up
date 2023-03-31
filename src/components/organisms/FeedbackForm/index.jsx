import React from "react";

import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

import { TextField, Button, Box } from "@mui/material";

import Title from "../../atoms/Title";
import Subtitle from "../../atoms/Subtitle";
import Text from "../../atoms/Text";

import styled from "styled-components";
import { darkGreyColor } from "../../../constants/colorPalette";

const FeedBackForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", mobile: "", message: "" }}
      onSubmit={(values, formikHelpers) => {
        console.log(values);
        formikHelpers.resetForm();
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
          <Title title="Keep In Touch" />
          <Subtitle
            subtitle="Wondering about an order, membership perks or just want to leave a
            general feedback?"
          ></Subtitle>
          <Text>
            Fill in the form below, or check out our FAQs—the answer might
            already be there!
          </Text>
          <Form>
            <Field
              as={TextField}
              name="name"
              type="text"
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
              required
              error={Boolean(props.errors.name) && Boolean(props.touched.name)}
              helperText={Boolean(props.touched.name) && props.errors.name}
            />
            <Box height={10} />
            <Field
              as={TextField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              required
              error={
                Boolean(props.errors.email) && Boolean(props.touched.email)
              }
              helperText={Boolean(props.touched.email) && props.errors.email}
            />
            <Box height={10} />
            <Field
              as={TextField}
              name="mobile"
              type="tel"
              label="Phone Number (+380XXXXXXXXX)"
              variant="outlined"
              size="small"
              fullWidth
              error={
                Boolean(props.errors.mobile) && Boolean(props.touched.mobile)
              }
              helperText={Boolean(props.touched.mobile) && props.errors.mobile}
            />
            <Box height={10} />
            <Field
              as={TextField}
              name="message"
              type="text"
              label="Message"
              variant="outlined"
              multiline
              rows={3}
              fullWidth
              required
              error={
                Boolean(props.errors.message) && Boolean(props.touched.message)
              }
              helperText={
                Boolean(props.touched.message) && props.errors.message
              }
            />
            <Box height={20} />
            <Button
              type="submit"
              variant="contained"
              disabled={!props.dirty || !props.isValid}
            >
              Submit
            </Button>
          </Form>
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
`;
